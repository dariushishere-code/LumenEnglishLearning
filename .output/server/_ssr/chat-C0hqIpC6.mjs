import { b as require_react, i as __toESM, y as require_jsx_runtime } from "./useStore-ID5WVn9Q.mjs";
import { n as createLucideIcon } from "./utils-BJmkfsUb.mjs";
import { a as loadLang, c as saveLang, n as BackgroundPixelStars, r as copy, t as AppHeader } from "./progress-HTKkdHn-.mjs";
import { t as Send } from "./send-C4Xk2_95.mjs";
import { a as string, i as object, t as _enum } from "./schemas-BYs5DKQl.mjs";
import { r as Route$3, s as wordBySlug } from "./router-D4kp1u6Z.mjs";
import { i as createServerFn, n as getServerFnById, r as TSS_SERVER_FUNCTION } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-C0hqIpC6.js
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]);
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var import_react = /* @__PURE__ */ __toESM(require_react());
var Input = object({
	message: string().trim().min(1).max(800),
	lang: _enum(["en", "fa"]),
	word: string().max(80),
	def: string().max(400),
	example: string().max(400)
});
var askCoach = createServerFn({ method: "POST" }).validator(Input).handler(createSsrRpc("e750fb4bcb19c2a90853276e249ec2a6fa6041357329ea90d63f30473e2d533c"));
var import_jsx_runtime = require_jsx_runtime();
function Chat() {
	const { word: wordSlug } = Route$3.useSearch();
	const [lang, setLang] = (0, import_react.useState)("en");
	const [input, setInput] = (0, import_react.useState)("");
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const endRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setLang(loadLang());
	}, []);
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);
	const t = copy[lang];
	const isRtl = lang === "fa";
	const word = wordSlug ? wordBySlug(wordSlug) : void 0;
	async function handleSend() {
		if (!input.trim() || loading) return;
		const userMsg = input.trim();
		setInput("");
		setMessages((m) => [...m, {
			role: "user",
			content: userMsg
		}]);
		setLoading(true);
		try {
			const result = await askCoach({ data: {
				message: userMsg,
				lang,
				word: word?.word ?? "",
				def: word ? lang === "fa" ? word.fa.def : word.en.def : "",
				example: word ? lang === "fa" ? word.fa.example : word.en.example : ""
			} });
			setMessages((m) => [...m, {
				role: "assistant",
				content: result.ok ? result.text : t.aiOff
			}]);
		} catch {
			setMessages((m) => [...m, {
				role: "assistant",
				content: t.aiOff
			}]);
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative min-h-dvh bg-bg dither-grid overflow-x-hidden${isRtl ? " rtl" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundPixelStars, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {
				lang,
				onToggleLang: () => {
					const n = lang === "en" ? "fa" : "en";
					setLang(n);
					saveLang(n);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 max-w-3xl mx-auto px-5 pt-6 pb-20 flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-semibold text-fg mb-1",
						children: t.chat
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t.chatLead
					})] }),
					word && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-xl px-5 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-subtle uppercase tracking-widest mb-1",
								children: t.coachOn
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-lg font-semibold text-fg",
								children: word.word
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted mt-0.5 line-clamp-2",
								children: lang === "fa" ? word.fa.def : word.en.def
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-5 min-h-[360px] max-h-[480px] overflow-y-auto flex flex-col gap-3",
						children: [
							messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 flex items-center justify-center py-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-subtle text-center px-4",
									children: t.emptyChat
								})
							}),
							messages.map((msg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `max-w-[85%] px-4 py-3 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${msg.role === "user" ? "bg-accent/15 text-fg border border-accent/25" : "bg-elevated text-fg border border-border"}`,
									children: msg.content
								})
							}, i)),
							loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-start",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-elevated border border-border px-4 py-3 rounded-xl flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
										size: 14,
										className: "animate-spin text-accent"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted",
										children: t.thinking
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: input,
							onChange: (e) => setInput(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									handleSend();
								}
							},
							placeholder: t.chatPh,
							disabled: loading,
							className: "flex-1 bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-fg placeholder:text-subtle focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-50"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => void handleSend(),
							disabled: !input.trim() || loading,
							className: "px-5 py-2.5 rounded-xl bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 15 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: t.send
							})]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Chat as component };
