import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { BackgroundPixelStars } from "@/components/ui/background-pixel-stars";
import { AppHeader } from "@/components/app-header";
import { wordOfDay, posLabel } from "@/lib/words/index";
import type { Word, DeckId } from "@/lib/words/types";
import { loadProgress, toggleLearned, ensureCheckin, streak, loadLang, saveLang } from "@/lib/progress";
import { copy, type Lang } from "@/lib/i18n";
import { todayIso } from "@/lib/utils";
import { BookOpen, Code2, CalendarDays, MessageSquare, ChevronRight, Volume2, CheckCircle2, Flame } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [progress, setProgress] = useState(() =>
    typeof localStorage !== "undefined"
      ? loadProgress()
      : { checkins: [], learned: { daily: [], code: [] } }
  );
  useEffect(() => { setLang(loadLang()); setProgress(loadProgress()); }, []);

  const t = copy[lang];
  const isRtl = lang === "fa";
  const dailyWord = wordOfDay("daily");
  const codeWord = wordOfDay("code");
  const currentStreak = streak(progress.checkins);
  const learnedTotal = progress.learned.daily.length + progress.learned.code.length;
  const todayChecked = progress.checkins.includes(todayIso());

  return (
    <div className={`relative min-h-dvh bg-bg dither-grid overflow-x-hidden${isRtl ? " rtl" : ""}`}>
      <div className="absolute inset-0 pointer-events-none"><BackgroundPixelStars /></div>
      <AppHeader lang={lang} onToggleLang={() => { const n: Lang = lang === "en" ? "fa" : "en"; setLang(n); saveLang(n); }} />
      <main className="relative z-10 max-w-5xl mx-auto px-5 pt-8 pb-20 stagger-in">
        <div className="flex items-center gap-6 mb-10 flex-wrap">
          <div className="flex items-center gap-2 text-sm">
            <Flame size={15} className="text-warn" />
            <span className="text-warn font-semibold">{currentStreak}</span>
            <span className="text-muted">{t.days}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 size={15} className="text-ok" />
            <span className="text-ok font-semibold">{learnedTotal}</span>
            <span className="text-muted">{t.learned}</span>
          </div>
          <button onClick={() => setProgress(ensureCheckin(todayIso()))} disabled={todayChecked}
            className={`ml-auto flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${todayChecked ? "bg-ok/15 text-ok border border-ok/30 cursor-default" : "bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25"}`}>
            <CheckCircle2 size={14} />
            {todayChecked ? t.checked : t.checkIn}
          </button>
        </div>
        <h1 className="text-3xl font-semibold text-fg mb-2">{t.wordOfDay}</h1>
        <p className="text-muted mb-8">{t.tagline}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <WordCard word={dailyWord} deck="daily" lang={lang} label={t.daily} progress={progress} setProgress={setProgress} />
          <WordCard word={codeWord} deck="code" lang={lang} label={t.code} progress={progress} setProgress={setProgress} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <NavCard to="/daily" icon={<BookOpen size={20} />} title={t.daily} lead={t.dailyLead} accent="accent" />
          <NavCard to="/code" icon={<Code2 size={20} />} title={t.code} lead={t.codeLead} accent="ok" />
          <NavCard to="/calendar" icon={<CalendarDays size={20} />} title={t.calendar} lead={t.calendarLead} accent="warn" />
          <NavCard to="/chat" icon={<MessageSquare size={20} />} title={t.chat} lead={t.chatLead} accent="accent" />
        </div>
      </main>
      <footer className="relative z-10 text-center text-xs text-subtle pb-8 px-5">{t.footer}</footer>
    </div>
  );
}


function WordCard({ word, deck, lang, label, progress, setProgress }: {
  word: Word; deck: DeckId; lang: Lang; label: string;
  progress: ReturnType<typeof loadProgress>;
  setProgress: (p: ReturnType<typeof loadProgress>) => void;
}) {
  const t = copy[lang];
  const isLearned = progress.learned[deck].includes(word.id);
  const navigate = useNavigate();
  return (
    <div className="glass rounded-xl p-5 flex flex-col gap-3 hover:shadow-border-hover transition-all">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-xs font-medium text-muted uppercase tracking-widest">{label}</span>
          <h2 className="text-2xl font-semibold text-fg mt-0.5">{word.word}</h2>
          <span className="text-xs text-subtle">{posLabel(word.pos, lang)}</span>
        </div>
        <div className="flex gap-1 mt-1 shrink-0">
          <button onClick={() => { const u = new SpeechSynthesisUtterance(word.word); u.lang = "en-US"; window.speechSynthesis.speak(u); }}
            aria-label={t.speak} className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 transition-colors">
            <Volume2 size={15} />
          </button>
          <button onClick={() => void navigate({ to: "/chat", search: { word: word.slug } })}
            aria-label={t.coachOn} className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 transition-colors">
            <MessageSquare size={15} />
          </button>
        </div>
      </div>
      <p className="text-sm text-fg leading-relaxed">{lang === "fa" ? word.fa.def : word.en.def}</p>
      <p className="text-xs text-muted italic leading-relaxed">{lang === "fa" ? word.fa.example : word.en.example}</p>
      <div className="flex items-center gap-2 mt-auto pt-1">
        <button onClick={() => setProgress(toggleLearned(deck, word.id))}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${isLearned ? "bg-ok/15 text-ok border border-ok/25" : "bg-surface text-muted border border-border hover:text-fg"}`}>
          <CheckCircle2 size={12} />
          {isLearned ? t.marked : t.mark}
        </button>
        <Link to={deck === "daily" ? "/daily" : "/code"}
          className="ml-auto flex items-center gap-1 text-xs text-subtle hover:text-accent transition-colors">
          {t.openWord}<ChevronRight size={12} />
        </Link>
      </div>
    </div>
  );
}

function NavCard({ to, icon, title, lead, accent }: {
  to: string; icon: React.ReactNode; title: string; lead: string; accent: string;
}) {
  const colors: Record<string, string> = {
    accent: "text-accent bg-accent/10 group-hover:bg-accent/20",
    ok: "text-ok bg-ok/10 group-hover:bg-ok/20",
    warn: "text-warn bg-warn/10 group-hover:bg-warn/20",
  };
  return (
    <Link to={to} className="group glass rounded-xl p-4 flex flex-col gap-3 hover:shadow-border-hover transition-all">
      <span className={`inline-flex w-9 h-9 items-center justify-center rounded-lg transition-colors ${colors[accent] ?? colors.accent}`}>
        {icon}
      </span>
      <div>
        <div className="font-medium text-sm text-fg">{title}</div>
        <div className="text-xs text-muted mt-0.5 leading-relaxed">{lead}</div>
      </div>
      <ChevronRight size={14} className="text-subtle mt-auto self-end" />
    </Link>
  );
}
