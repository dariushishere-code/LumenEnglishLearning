import { createFileRoute } from "@tanstack/react-router";
import { handleTelegramUpdate, telegramSend } from "@/lib/telegram/handler";

async function handle({ request }: { request: Request }) {
  if (request.method === "GET") {
    return new Response("ok", {
      status: 200,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  try {
    const update: unknown = await request.json();
    const payload = handleTelegramUpdate(update);
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (payload && token) {
      await telegramSend(token, payload);
    }
    return Response.json({ ok: true });
  } catch {
    // Telegram retries on non-200; acknowledge even on parse errors.
    return Response.json({ ok: true });
  }
}

export const Route = createFileRoute("/api/telegram/webhook")({
  server: { handlers: { GET: handle, POST: handle } },
});
