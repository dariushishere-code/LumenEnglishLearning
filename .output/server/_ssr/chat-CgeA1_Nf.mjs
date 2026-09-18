import { a as string, i as object, t as _enum } from "./schemas-BYs5DKQl.mjs";
import { i as createServerFn, r as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-CgeA1_Nf.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Input = object({
	message: string().trim().min(1).max(800),
	lang: _enum(["en", "fa"]),
	word: string().max(80),
	def: string().max(400),
	example: string().max(400)
});
var askCoach_createServerFn_handler = createServerRpc({
	id: "e750fb4bcb19c2a90853276e249ec2a6fa6041357329ea90d63f30473e2d533c",
	name: "askCoach",
	filename: "src/lib/chat.ts"
}, (opts) => askCoach.__executeServer(opts));
var askCoach = createServerFn({ method: "POST" }).validator(Input).handler(askCoach_createServerFn_handler, async ({ data }) => {
	const apiKey = processModule.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "unavailable"
	};
	const system = data.lang === "fa" ? `تو مربی واژگان لومن هستی. فقط دربارهٔ واژهٔ دادهشده پاسخ بده. فارسی معیار، دستور زبان درست، بدون آوانویسی لاتین مگر برای خود واژهٔ انگلیسی. پاسخ را کوتاه، دقیق و مؤدب نگه دار (حداکثر ۱۸۰ کلمه). واژه: ${data.word}. تعریف: ${data.def}. مثال: ${data.example}.` : `You are the Lumen vocabulary coach. Answer only about the given word. Use clear, grammatically correct English. Be concise (180 words max), precise, and practical. Word: ${data.word}. Definition: ${data.def}. Example: ${data.example}.`;
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-3-mini",
			max_tokens: 400,
			temperature: .4,
			messages: [{
				role: "system",
				content: system
			}, {
				role: "user",
				content: data.message
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `xAI ${res.status}`
	};
	const text = (await res.json()).choices?.[0]?.message?.content?.trim() ?? "";
	if (!text) return {
		ok: false,
		error: "empty"
	};
	return {
		ok: true,
		text
	};
});
//#endregion
export { askCoach_createServerFn_handler };
