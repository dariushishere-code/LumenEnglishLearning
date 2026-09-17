import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { BackgroundPixelStars } from "@/components/ui/background-pixel-stars";
import { AppHeader } from "@/components/app-header";
import { wordBySlug } from "@/lib/words/index";
import { loadLang, saveLang } from "@/lib/progress";
import { copy, type Lang } from "@/lib/i18n";
import { Send, Loader2 } from "lucide-react";
import { askCoach } from "@/lib/chat";

export const Route = createFileRoute("/chat")({
  component: Chat,
  validateSearch: (search: Record<string, unknown>) => ({
    word: typeof search.word === "string" ? search.word : undefined,
  }),
});

type Message = { role: "user" | "assistant"; content: string };

function Chat() {
  const { word: wordSlug } = Route.useSearch();
  const [lang, setLang] = useState<Lang>("en");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setLang(loadLang()); }, []);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const t = copy[lang];
  const isRtl = lang === "fa";
  const word = wordSlug ? wordBySlug(wordSlug) : undefined;

  async function handleSend() {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(m => [...m, { role: "user", content: userMsg }]);
    setLoading(true);
    try {
      const result = await askCoach({
        data: {
          message: userMsg,
          lang,
          word: word?.word ?? "",
          def: word ? (lang === "fa" ? word.fa.def : word.en.def) : "",
          example: word ? (lang === "fa" ? word.fa.example : word.en.example) : "",
        },
      });
      setMessages(m => [...m, {
        role: "assistant",
        content: result.ok ? result.text : t.aiOff,
      }]);
    } catch {
      setMessages(m => [...m, { role: "assistant", content: t.aiOff }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`relative min-h-dvh bg-bg dither-grid overflow-x-hidden${isRtl ? " rtl" : ""}`}>
      <div className="absolute inset-0 pointer-events-none"><BackgroundPixelStars /></div>
      <AppHeader lang={lang} onToggleLang={() => {
        const n: Lang = lang === "en" ? "fa" : "en"; setLang(n); saveLang(n);
      }} />
      <main className="relative z-10 max-w-3xl mx-auto px-5 pt-6 pb-20 flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-fg mb-1">{t.chat}</h1>
          <p className="text-sm text-muted">{t.chatLead}</p>
        </div>

        {word && (
          <div className="glass rounded-xl px-5 py-4">
            <div className="text-xs text-subtle uppercase tracking-widest mb-1">{t.coachOn}</div>
            <div className="text-lg font-semibold text-fg">{word.word}</div>
            <div className="text-sm text-muted mt-0.5 line-clamp-2">
              {lang === "fa" ? word.fa.def : word.en.def}
            </div>
          </div>
        )}

        <div className="glass rounded-2xl p-5 min-h-[360px] max-h-[480px] overflow-y-auto flex flex-col gap-3">
          {messages.length === 0 && (
            <div className="flex-1 flex items-center justify-center py-12">
              <p className="text-sm text-subtle text-center px-4">{t.emptyChat}</p>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] px-4 py-3 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-accent/15 text-fg border border-accent/25"
                  : "bg-elevated text-fg border border-border"
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-elevated border border-border px-4 py-3 rounded-xl flex items-center gap-2">
                <Loader2 size={14} className="animate-spin text-accent" />
                <span className="text-xs text-muted">{t.thinking}</span>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="flex gap-2">
          <input value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); void handleSend(); } }}
            placeholder={t.chatPh} disabled={loading}
            className="flex-1 bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-fg placeholder:text-subtle focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-50"
          />
          <button onClick={() => void handleSend()} disabled={!input.trim() || loading}
            className="px-5 py-2.5 rounded-xl bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2 shrink-0">
            <Send size={15} />
            <span className="text-sm font-medium">{t.send}</span>
          </button>
        </div>
      </main>
    </div>
  );
}
