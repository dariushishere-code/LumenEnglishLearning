import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function todayIso(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function dayOfCycle(date = new Date(), length = 1024): number {
  const start = Date.UTC(2026, 0, 1);
  const now = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const days = Math.floor((now - start) / 86_400_000);
  return ((days % length) + length) % length;
}

export function slugify(word: string): string {
  return word
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
