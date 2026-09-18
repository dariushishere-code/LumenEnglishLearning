import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { BackgroundPixelStars } from "@/components/ui/background-pixel-stars";
import { AppHeader } from "@/components/app-header";
import { loadLang, saveLang } from "@/lib/progress";
import { copy, type Lang } from "@/lib/i18n";
import { handleTelegramUpdate } from "@/lib/telegram/handler";
import { Send, Terminal, Bot } from "lucide-react";

export const Route = createFileRoute("/bot")({ component: BotPage });

function BotPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [input, setInput] = useState("/daily");
  const [output, setOutput] = useState("");
  useEffect(() => { setLang(loadLang()); }, []);

  const t = copy[lang];
  const isRtl = lang === "fa";

  function handleSend() {
    if (!input.trim()) return;
    try {
      const resp = handleTelegramUpdate({ message: { chat: { id: 1 }, text: input.trim() } });
      setOutput(resp ? resp.text : "(no response)");
    } catch (err) {
      setOutput(`Error: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  const commands = [
    { cmd: "/start", desc: lang === "fa" ? "پیام خوشآمد" : "Welcome message" },
    { cmd: "/today", desc: lang === "fa" ? "واژهٔ امروز (روزمره)" : "Today's daily word" },
    { cmd: "/code", desc: lang === "fa" ? "واژهٔ امروز برنامهنویسی" : "Today's programmer word" },
    { cmd: "/daily", desc: lang === "fa" ? "دستهٔ روزمره" : "Switch to daily deck" },
    { cmd: "/quiz", desc: lang === "fa" ? "آزمون چهارگزینهای" : "Four-choice quiz" },
    { cmd: "/search <word>", desc: lang === "fa" ? "جستجوی واژه" : "Look up a word" },
    { cmd: "/lang", desc: lang === "fa" ? "تغییر زبان EN/FA" : "Toggle language EN/FA" },
    { cmd: "/help", desc: lang === "fa" ? "فهرست فرمانها" : "Show command list" },
  ];

  return (
    <div className={`relative min-h-dvh bg-bg dither-grid overflow-x-hidden${isRtl ? " rtl" : ""}`}>
      <div className="absolute inset-0 pointer-events-none"><BackgroundPixelStars /></div>
      <AppHeader lang={lang} onToggleLang={() => {
        const n: Lang = lang === "en" ? "fa" : "en"; setLang(n); saveLang(n);
      }} />
      <main className="relative z-10 max-w-3xl mx-auto px-5 pt-8 pb-20 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-fg mb-1 flex items-center gap-2">
            <Bot size={22} className="text-accent" />{t.bot}
          </h1>
          <p className="text-sm text-muted">{t.botIntro}</p>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Terminal size={15} className="text-accent" />
            <h2 className="text-sm font-semibold text-fg">{t.commands}</h2>
          </div>
          <div className="space-y-2.5">
            {commands.map(({ cmd, desc }) => (
              <div key={cmd} className="flex items-start gap-3">
                <code className="shrink-0 px-2 py-0.5 bg-surface border border-border rounded text-xs font-mono text-accent whitespace-nowrap">
                  {cmd}
                </code>
                <span className="text-xs text-muted leading-5">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-fg mb-4">Test console</h2>
          <div className="flex gap-2 mb-4">
            <input value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="/daily"
              className="flex-1 bg-surface border border-border rounded-lg px-3 py-2 text-sm text-fg placeholder:text-subtle focus:outline-none focus:border-accent/50 font-mono transition-colors"
            />
            <button onClick={handleSend} disabled={!input.trim()}
              className="px-4 py-2 rounded-lg bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25 disabled:opacity-40 transition-all flex items-center gap-2 shrink-0">
              <Send size={14} />{t.try}
            </button>
          </div>
          {output && (
            <div className="bg-elevated border border-border rounded-xl p-4 overflow-x-auto">
              <pre className="text-xs text-fg font-mono leading-relaxed whitespace-pre-wrap">{output}</pre>
            </div>
          )}
        </div>

        <div className="glass rounded-xl px-5 py-4">
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-2">{t.help}</h3>
          <p className="text-xs text-muted leading-relaxed">{t.botHint}</p>
        </div>
      </main>
    </div>
  );
}
