export type DeckId = "daily" | "code";

export type WordPos = "n" | "v" | "adj" | "adv" | "prep" | "conj" | "det" | "pron";

export type Word = {
  id: number;
  deck: DeckId;
  word: string;
  slug: string;
  pos: string;
  en: { def: string; example: string };
  fa: { def: string; example: string };
};
