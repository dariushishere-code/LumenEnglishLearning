import type { Word } from "@/lib/words/types";
import { copy, type Lang } from "@/lib/i18n";
import { posLabel } from "@/lib/words/index";
import { Volume2, CheckCircle2, MessageSquare } from "lucide-react";

export function WordDetail({
  word, lang, isLearned, t, onSpeak, onLearn, onCoach,
}: {
  word: Word;
  lang: Lang;
  isLearned: boolean;
  t: (typeof copy)[Lang];
  onSpeak: () => void;
  onLearn: () => void;
  onCoach: () => void;
}) {
  const def = lang === "fa" ? word.fa.def : word.en.def;
  const ex = lang === "fa" ? word.fa.example : word.en.example;

  return (
    <div className="glass rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <span className="text-xs text-subtle uppercase tracking-widest">
            {posLabel(word.pos, lang)}
          </span>
          <h1 className="text-4xl font-semibold text-fg mt-1 tracking-tight">
            {word.word}
          </h1>
        </div>
        <div className="flex gap-1.5 shrink-0 mt-1">
          <button
            onClick={onSpeak}
            aria-label={t.speak}
            className="p-2.5 rounded-xl text-muted hover:text-accent hover:bg-accent/10 border border-border hover:border-accent/30 transition-all"
          >
            <Volume2 size={16} />
          </button>
          <button
            onClick={onCoach}
            aria-label={t.coachOn}
            className="p-2.5 rounded-xl text-muted hover:text-accent hover:bg-accent/10 border border-border hover:border-accent/30 transition-all"
          >
            <MessageSquare size={16} />
          </button>
          <button
            onClick={onLearn}
            aria-label={isLearned ? t.marked : t.mark}
            className={`p-2.5 rounded-xl border transition-all ${
              isLearned
                ? "text-ok bg-ok/10 border-ok/30"
                : "text-muted border-border hover:text-ok hover:bg-ok/10 hover:border-ok/30"
            }`}
          >
            <CheckCircle2 size={16} />
          </button>
        </div>
      </div>

      {/* Definition + example in active lang */}
      <div className="space-y-4 mb-6">
        <section>
          <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-2">
            {t.definition}
          </h2>
          <p className="text-base text-fg leading-relaxed">{def}</p>
        </section>
        <section>
          <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-2">
            {t.example}
          </h2>
          <p className="text-sm text-muted italic leading-relaxed">{ex}</p>
        </section>
      </div>

      {/* Bilingual panel */}
      <div className="border-t border-border pt-5 grid grid-cols-2 gap-5">
        <div>
          <div className="text-xs font-medium text-subtle uppercase tracking-widest mb-2">
            English
          </div>
          <p className="text-sm text-muted leading-relaxed">{word.en.def}</p>
          <p className="text-xs text-subtle italic mt-1.5">{word.en.example}</p>
        </div>
        <div dir="rtl">
          <div className="text-xs font-medium text-subtle uppercase tracking-widest mb-2">
            فارسی
          </div>
          <p className="text-sm text-muted leading-relaxed">{word.fa.def}</p>
          <p className="text-xs text-subtle italic mt-1.5">{word.fa.example}</p>
        </div>
      </div>
    </div>
  );
}
