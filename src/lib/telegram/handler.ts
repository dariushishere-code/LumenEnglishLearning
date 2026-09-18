import { wordOfDay, searchWords, wordsFor, posLabel, type DeckId, type Word } from "@/lib/words/index.ts";

export type Lang = "en" | "fa";

export type TgMessage = {
  method: "sendMessage";
  chat_id: number;
  text: string;
  parse_mode?: "HTML";
  reply_markup?: {
    inline_keyboard: { text: string; callback_data: string }[][];
  };
};

const sessions = new Map<number, { lang: Lang; deck: DeckId }>();

function session(chatId: number) {
  const s = sessions.get(chatId) ?? { lang: "en" as Lang, deck: "daily" as DeckId };
  sessions.set(chatId, s);
  return s;
}

function formatWord(w: Word, lang: Lang): string {
  const pos = posLabel(w.pos, lang);
  if (lang === "fa") {
    return `<b>${w.word}</b>  ·  ${pos}\n${w.fa.def}\n\n<i>${w.fa.example}</i>\n\nEN: ${w.en.def}\n${w.en.example}`;
  }
  return `<b>${w.word}</b>  ·  ${pos}\n${w.en.def}\n\n<i>${w.en.example}</i>\n\nFA: ${w.fa.def}\n${w.fa.example}`;
}

function keys(lang: Lang): TgMessage["reply_markup"] {
  return {
    inline_keyboard: [
      [
        { text: lang === "fa" ? "واژهٔ امروز" : "Today", callback_data: "today" },
        { text: lang === "fa" ? "کد" : "Code", callback_data: "code" },
        { text: lang === "fa" ? "آزمون" : "Quiz", callback_data: "quiz" },
      ],
      [
        { text: lang === "fa" ? "روزمره" : "Daily", callback_data: "daily" },
        { text: lang === "en" ? "فارسی" : "English", callback_data: "lang" },
        { text: lang === "fa" ? "راهنما" : "Help", callback_data: "help" },
      ],
    ],
  };
}

function help(lang: Lang): string {
  if (lang === "fa") {
    return [
      "<b>لومن</b> — واژه‌نامهٔ دوزبانه.",
      "",
      "/start — خوش‌آمد",
      "/today — واژهٔ امروز (روزمره)",
      "/code — واژهٔ امروز برنامه‌نویسی",
      "/daily — دستهٔ انگلیسی روزمره",
      "/quiz — آزمون چهارگزینه‌ای",
      "/search واژه — جستجو",
      "/lang — تغییر زبان",
      "/help — همین متن",
      "",
      "۱٬۰۲۴ واژهٔ روزمره و ۱٬۰۲۴ اصطلاح کدنویسی. تقویم پیشرفت روی وب‌اپ می‌ماند.",
    ].join("\n");
  }
  return [
    "<b>Lumen</b> — a bilingual lexicon.",
    "",
    "/start — welcome",
    "/today — today's daily-English word",
    "/code — today's programmer word",
    "/daily — switch to the daily deck",
    "/quiz — four-choice quiz",
    "/search word — look up a term",
    "/lang — switch language",
    "/help — this text",
    "",
    "1,024 everyday words and 1,024 engineer terms. Progress lives on the web app calendar.",
  ].join("\n");
}

function quiz(lang: Lang, deck: DeckId) {
  const list = wordsFor(deck);
  const answer = list[Math.floor(Math.random() * list.length)]!;
  const options = new Set<Word>([answer]);
  while (options.size < 4) {
    options.add(list[Math.floor(Math.random() * list.length)]!);
  }
  const shuffled = [...options].sort(() => Math.random() - 0.5);
  const prompt =
    lang === "fa"
      ? `کدام تعریف به <b>${answer.word}</b> می‌خورد؟`
      : `Which gloss matches <b>${answer.word}</b>?`;
  return {
    text: prompt,
    reply_markup: {
      inline_keyboard: shuffled.map((w) => [
        {
          text: (lang === "fa" ? w.fa.def : w.en.def).slice(0, 64),
          callback_data: w.id === answer.id ? "quiz_ok" : "quiz_no",
        },
      ]),
    },
  };
}

function reply(chatId: number, text: string, extra?: Partial<TgMessage>): TgMessage {
  const s = session(chatId);
  return {
    method: "sendMessage",
    chat_id: chatId,
    text,
    parse_mode: "HTML",
    reply_markup: extra?.reply_markup ?? keys(s.lang),
  };
}

export function handleTelegramUpdate(update: unknown): TgMessage | null {
  if (!update || typeof update !== "object") return null;
  const u = update as {
    message?: { chat?: { id?: number }; text?: string };
    callback_query?: {
      message?: { chat?: { id?: number } };
      data?: string;
      from?: { id?: number };
    };
  };

  const chatId = u.message?.chat?.id ?? u.callback_query?.message?.chat?.id;
  if (typeof chatId !== "number") return null;
  const s = session(chatId);
  const data = u.callback_query?.data;
  const text = (u.message?.text ?? "").trim();

  const run = (cmd: string, arg = "") => {
    const c = cmd.toLowerCase();
    if (c === "start" || c === "help") return reply(chatId, help(s.lang));
    if (c === "lang") {
      s.lang = s.lang === "en" ? "fa" : "en";
      return reply(
        chatId,
        s.lang === "fa" ? "زبان روی فارسی است." : "Language set to English.",
      );
    }
    if (c === "daily") {
      s.deck = "daily";
      return reply(chatId, formatWord(wordOfDay("daily"), s.lang));
    }
    if (c === "today") {
      return reply(chatId, formatWord(wordOfDay(s.deck), s.lang));
    }
    if (c === "code") {
      s.deck = "code";
      return reply(chatId, formatWord(wordOfDay("code"), s.lang));
    }
    if (c === "quiz") {
      const q = quiz(s.lang, s.deck);
      return reply(chatId, q.text, { reply_markup: q.reply_markup });
    }
    if (c === "search" && arg) {
      const hits = searchWords(arg, undefined, 5);
      if (!hits.length) {
        return reply(chatId, s.lang === "fa" ? "واژه‌ای پیدا نشد." : "No matching words.");
      }
      return reply(chatId, hits.map((w) => formatWord(w, s.lang)).join("\n\n——\n\n"));
    }
    if (c === "quiz_ok") {
      return reply(chatId, s.lang === "fa" ? "درست. آفرین." : "Correct.");
    }
    if (c === "quiz_no") {
      return reply(chatId, s.lang === "fa" ? "نه‌چندان. دوباره تلاش کنید." : "Not quite. Try again.");
    }
    return null;
  };

  if (data) {
    const handled = run(data);
    if (handled) return handled;
  }

  if (text.startsWith("/")) {
    const [raw, ...rest] = text.slice(1).split(/\s+/);
    const cmd = (raw ?? "").split("@")[0] ?? "";
    const handled = run(cmd, rest.join(" "));
    if (handled) return handled;
    return reply(
      chatId,
      s.lang === "fa" ? "فرمان ناشناخته. /help را ببینید." : "Unknown command. See /help.",
    );
  }

  if (text.length >= 2) {
    const hits = searchWords(text, s.deck, 3);
    if (hits.length) return reply(chatId, formatWord(hits[0]!, s.lang));
  }

  return reply(chatId, help(s.lang));
}

export async function telegramSend(token: string, payload: TgMessage) {
  await fetch(`https://api.telegram.org/bot${token}/${payload.method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
