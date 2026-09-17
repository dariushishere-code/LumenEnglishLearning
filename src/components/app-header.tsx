import { Link } from "@tanstack/react-router";
import { Sparkles, Globe } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

export function AppHeader({
  lang,
  onToggleLang,
}: {
  lang: Lang;
  onToggleLang: () => void;
}) {
  const t = copy[lang];
  return (
    <header className="relative z-10 flex items-center justify-between px-5 py-4 max-w-5xl mx-auto">
      <Link to="/" className="flex items-center gap-2 group">
        <span className="text-accent group-hover:opacity-80 transition-opacity">
          <Sparkles size={18} />
        </span>
        <span className="font-semibold text-fg tracking-tight">{t.app}</span>
      </Link>
      <nav className="flex items-center gap-1 flex-wrap justify-end">
        <Link
          to="/daily"
          className="px-3 py-1.5 rounded-md text-sm text-muted hover:text-fg hover:bg-elevated transition-colors"
        >
          {t.deckDaily}
        </Link>
        <Link
          to="/code"
          className="px-3 py-1.5 rounded-md text-sm text-muted hover:text-fg hover:bg-elevated transition-colors"
        >
          {t.deckCode}
        </Link>
        <Link
          to="/calendar"
          className="px-3 py-1.5 rounded-md text-sm text-muted hover:text-fg hover:bg-elevated transition-colors"
        >
          {t.calendar}
        </Link>
        <Link
          to="/chat"
          className="px-3 py-1.5 rounded-md text-sm text-muted hover:text-fg hover:bg-elevated transition-colors"
        >
          {t.chat}
        </Link>
        <Link
          to="/bot"
          className="px-3 py-1.5 rounded-md text-sm text-muted hover:text-fg hover:bg-elevated transition-colors"
        >
          {t.bot}
        </Link>
        <button
          onClick={onToggleLang}
          className="ml-1 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-muted hover:text-fg hover:bg-elevated transition-colors"
          aria-label={`Switch language to ${t.lang}`}
        >
          <Globe size={14} />
          {t.lang}
        </button>
      </nav>
    </header>
  );
}
