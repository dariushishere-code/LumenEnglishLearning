import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({
  message: z.string().trim().min(1).max(800),
  lang: z.enum(["en", "fa"]),
  word: z.string().max(80),
  def: z.string().max(400),
  example: z.string().max(400),
});

export const askCoach = createServerFn({ method: "POST" })
  .validator(Input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "unavailable" };

    const system =
      data.lang === "fa"
        ? `تو مربی واژگان لومن هستی. فقط دربارهٔ واژهٔ دادهشده پاسخ بده. فارسی معیار، دستور زبان درست، بدون آوانویسی لاتین مگر برای خود واژهٔ انگلیسی. پاسخ را کوتاه، دقیق و مؤدب نگه دار (حداکثر ۱۸۰ کلمه). واژه: ${data.word}. تعریف: ${data.def}. مثال: ${data.example}.`
        : `You are the Lumen vocabulary coach. Answer only about the given word. Use clear, grammatically correct English. Be concise (180 words max), precise, and practical. Word: ${data.word}. Definition: ${data.def}. Example: ${data.example}.`;

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-3-mini",
        max_tokens: 400,
        temperature: 0.4,
        messages: [
          { role: "system", content: system },
          { role: "user", content: data.message },
        ],
      }),
    });

    if (!res.ok) return { ok: false as const, error: `xAI ${res.status}` };
    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = body.choices?.[0]?.message?.content?.trim() ?? "";
    if (!text) return { ok: false as const, error: "empty" };
    return { ok: true as const, text };
  });
