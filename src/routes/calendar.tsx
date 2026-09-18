import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { BackgroundPixelStars } from "@/components/ui/background-pixel-stars";
import { AppHeader } from "@/components/app-header";
import { loadProgress, loadLang, saveLang } from "@/lib/progress";
import { copy, type Lang, monthName } from "@/lib/i18n";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/calendar")({ component: Calendar });

function Calendar() {
  const [lang, setLang] = useState<Lang>("en");
  const [progress, setProgress] = useState(() =>
    typeof localStorage !== "undefined" ? loadProgress() : { checkins: [], learned: { daily: [], code: [] } }
  );
  useEffect(() => { setLang(loadLang()); setProgress(loadProgress()); }, []);

  const t = copy[lang];
  const isRtl = lang === "fa";
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  const checkinSet = new Set(progress.checkins);

  const days: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  function isoForDay(d: number): string {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  }

  return (
    <div className={`relative min-h-dvh bg-bg dither-grid overflow-x-hidden${isRtl ? " rtl" : ""}`}>
      <div className="absolute inset-0 pointer-events-none"><BackgroundPixelStars /></div>
      <AppHeader lang={lang} onToggleLang={() => { const n: Lang = lang === "en" ? "fa" : "en"; setLang(n); saveLang(n); }} />
      <main className="relative z-10 max-w-4xl mx-auto px-5 pt-8 pb-20">
        <h1 className="text-2xl font-semibold text-fg mb-2">{t.calendar}</h1>
        <p className="text-sm text-muted mb-8">{t.calendarLead}</p>

        <div className="glass rounded-2xl p-6">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-fg">{monthName(lang, now)}</h2>
          </div>

          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
              <div key={d} className="text-center text-xs font-medium text-subtle uppercase">{d}</div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((d, i) => {
              if (d === null) return <div key={`e-${i}`} />;
              const iso = isoForDay(d);
              const checked = checkinSet.has(iso);
              const isToday = d === now.getDate();
              return (
                <div key={d}
                  className={`aspect-square flex flex-col items-center justify-center rounded-lg border transition-all ${
                    isToday ? "border-accent bg-accent/10" : "border-border bg-surface"
                  } ${checked ? "bg-ok/10 border-ok/30" : ""}`}>
                  <span className={`text-sm font-medium ${checked ? "text-ok" : "text-fg"}`}>{d}</span>
                  {checked && <CheckCircle2 size={12} className="text-ok mt-0.5" />}
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-6 pt-6 border-t border-border flex items-center gap-6 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-2xl font-semibold text-ok">{progress.checkins.length}</div>
              <div className="text-xs text-muted uppercase tracking-wide">{t.days}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-accent">{progress.learned.daily.length + progress.learned.code.length}</div>
              <div className="text-xs text-muted uppercase tracking-wide">{t.learned}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
