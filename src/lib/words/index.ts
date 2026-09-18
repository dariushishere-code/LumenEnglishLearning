import dailyJson from "@/data/daily.json";
import codeJson from "@/data/code.json";
import { dayOfCycle, slugify } from "@/lib/utils";
import type { DeckId, Word } from "./types.ts";

export type { DeckId, Word } from "./types.ts";

export const DAILY_WORDS = dailyJson as Word[];
export const CODE_WORDS = codeJson as Word[];

export const DECK_SIZE = 1024;

export function wordsFor(deck: DeckId): Word[] {
  return deck === "daily" ? DAILY_WORDS : CODE_WORDS;
}

export function wordOfDay(deck: DeckId, date = new Date()): Word {
  const list = wordsFor(deck);
  return list[dayOfCycle(date, list.length)]!;
}

export function wordBySlug(slug: string): Word | undefined {
  const s = slugify(slug);
  return DAILY_WORDS.find((w) => w.slug === s) ?? CODE_WORDS.find((w) => w.slug === s);
}

export function wordById(deck: DeckId, id: number): Word | undefined {
  return wordsFor(deck)[id];
}

export function searchWords(query: string, deck?: DeckId, limit = 24): Word[] {
  const q = query.trim().toLowerCase();
  if (q.length < 1) return [];
  const pool = deck ? wordsFor(deck) : [...DAILY_WORDS, ...CODE_WORDS];
  const scored = pool
    .map((w) => {
      const word = w.word.toLowerCase();
      let score = 0;
      if (word === q) score = 100;
      else if (word.startsWith(q)) score = 80;
      else if (word.includes(q)) score = 50;
      else if (w.en.def.toLowerCase().includes(q) || w.fa.def.includes(query.trim()))
        score = 20;
      return { w, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.w.word.localeCompare(b.w.word));
  return scored.slice(0, limit).map((x) => x.w);
}

export function posLabel(pos: string, lang: "en" | "fa"): string {
  const map: Record<string, { en: string; fa: string }> = {
    n: { en: "noun", fa: "اسم" },
    v: { en: "verb", fa: "فعل" },
    adj: { en: "adjective", fa: "صفت" },
    adv: { en: "adverb", fa: "قید" },
    prep: { en: "preposition", fa: "حرف اضافه" },
    conj: { en: "conjunction", fa: "حرف ربط" },
    det: { en: "determiner", fa: "حرف تعریف" },
    pron: { en: "pronoun", fa: "ضمیر" },
  };
  return map[pos]?.[lang] ?? pos;
}
