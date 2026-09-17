import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { BackgroundPixelStars } from "@/components/ui/background-pixel-stars";
import { AppHeader } from "@/components/app-header";
import { WordDetail } from "@/components/word-detail";
import { wordsFor, searchWords } from "@/lib/words/index";
import type { Word } from "@/lib/words/types";
import { loadProgress, toggleLearned, loadLang, saveLang } from "@/lib/progress";
import { copy, type Lang } from "@/lib/i18n";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";

export const Route = createFileRoute("/daily")({ component: DailyDeck });

function DailyDeck() {
  const [lang, setLang] = useState<Lang>("en");
  const [progress, setProgress] = useState(() =>
    typeof localStorage !== "undefined" ? loadProgress() : { checkins: [], learned: { daily: [], code: [] } }
  );
  const [idx, setIdx] = useState(0);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Word[]>([]);
  useEffect(() => { setLang(loadLang()); setProgress(loadProgress()); }, []);

  const t = copy[lang];
  const words = wordsFor("daily");
  const word = words[idx]!;
  const isLearned = progress.learned.daily.includes(word.id);
  const navigate = useNavigate();
  const isRtl = lang === "fa";

  function onSearch(q: string) {
    setQuery(q);
    setResults(q.trim().length > 0 ? searchWords(q, "daily", 12) : []);
  }

  return (
    <div className={`relative min-h-dvh bg-bg dither-grid overflow-x-hidden${isRtl ? " rtl" : ""}`}>
      <div className="absolute inset-0 pointer-events-none"><BackgroundPixelStars /></div>
      <AppHeader lang={lang} onToggleLang={() => { const n: Lang = lang === "en" ? "fa" : "en"; setLang(n); saveLang(n); }} />
      <main className="relative z-10 max-w-3xl mx-auto px-5 pt-6 pb-20">
        <div className="relative mb-6">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-subtle pointer-events-none" />
          <input value={query} onChange={e => onSearch(e.target.value)} placeholder={t.searchPh}
            className="w-full bg-surface border border-border rounded-xl pl-9 pr-9 py-2.5 text-sm text-fg placeholder:text-subtle focus:outline-none focus:border-accent/50 transition-colors" />
          {query && <button onClick={() => onSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-subtle hover:text-fg transition-colors"><X size={14} /></button>}
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.map(w => (
              <button key={w.id} onClick={() => { setResults([]); setQuery(""); setIdx(words.findIndex(x => x.id === w.id)); }}
                className="glass rounded-xl p-4 text-left hover:shadow-border-hover transition-all">
                <div className="font-semibold text-fg text-sm">{w.word}</div>
                <div className="text-xs text-muted mt-0.5 line-clamp-2">{lang === "fa" ? w.fa.def : w.en.def}</div>
              </button>
            ))}
          </div>
        ) : (
          <>
            <WordDetail word={word} lang={lang} isLearned={isLearned} t={t}
              onSpeak={() => { const u = new SpeechSynthesisUtterance(word.word); u.lang = "en-US"; window.speechSynthesis.speak(u); }}
              onLearn={() => setProgress(toggleLearned("daily", word.id))}
              onCoach={() => void navigate({ to: "/chat", search: { word: word.slug } })} />
            <div className="flex items-center justify-between mt-6">
              <button onClick={() => setIdx(i => Math.max(0, i - 1))} disabled={idx === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-muted border border-border hover:text-fg hover:bg-elevated disabled:opacity-30 transition-all">
                <ChevronLeft size={15} />{t.prev}
              </button>
              <span className="text-xs text-subtle">{idx + 1} {t.of} {words.length}</span>
              <button onClick={() => setIdx(i => Math.min(words.length - 1, i + 1))} disabled={idx === words.length - 1}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-muted border border-border hover:text-fg hover:bg-elevated disabled:opacity-30 transition-all">
                {t.next}<ChevronRight size={15} />
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
