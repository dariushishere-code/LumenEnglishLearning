import { todayIso } from "@/lib/utils";
import type { DeckId } from "@/lib/words/types.ts";

const KEY = "lumen-progress-v1";
const LANG_KEY = "lumen-lang";

export type Progress = {
  checkins: string[];
  learned: Record<DeckId, number[]>;
};

export function emptyProgress(): Progress {
  return { checkins: [], learned: { daily: [], code: [] } };
}

export function loadProgress(): Progress {
  if (typeof localStorage === "undefined") return emptyProgress();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as Progress;
    return {
      checkins: Array.isArray(parsed.checkins) ? parsed.checkins : [],
      learned: {
        daily: parsed.learned?.daily ?? [],
        code: parsed.learned?.code ?? [],
      },
    };
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(p: Progress) {
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function toggleCheckin(iso = todayIso()): Progress {
  const p = loadProgress();
  const set = new Set(p.checkins);
  if (set.has(iso)) set.delete(iso);
  else set.add(iso);
  const next = { ...p, checkins: [...set].sort() };
  saveProgress(next);
  return next;
}

export function ensureCheckin(iso = todayIso()): Progress {
  const p = loadProgress();
  if (p.checkins.includes(iso)) return p;
  const next = { ...p, checkins: [...p.checkins, iso].sort() };
  saveProgress(next);
  return next;
}

export function toggleLearned(deck: DeckId, id: number): Progress {
  const p = loadProgress();
  const list = new Set(p.learned[deck]);
  if (list.has(id)) list.delete(id);
  else list.add(id);
  const next = {
    ...p,
    learned: { ...p.learned, [deck]: [...list].sort((a, b) => a - b) },
  };
  saveProgress(next);
  return next;
}

export function streak(checkins: string[], today = todayIso()): number {
  const set = new Set(checkins);
  if (!set.has(today)) return 0;
  let n = 0;
  const d = new Date(`${today}T12:00:00`);
  while (set.has(todayIso(d))) {
    n += 1;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

export function loadLang(): "en" | "fa" {
  if (typeof localStorage === "undefined") return "en";
  return localStorage.getItem(LANG_KEY) === "fa" ? "fa" : "en";
}

export function saveLang(lang: "en" | "fa") {
  localStorage.setItem(LANG_KEY, lang);
}
