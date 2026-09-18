import { b as require_react, i as __toESM, y as require_jsx_runtime } from "./useStore-ID5WVn9Q.mjs";
import { n as createLucideIcon } from "./utils-BJmkfsUb.mjs";
import { t as Bot } from "./bot-ObO6HcZ1.mjs";
import { a as loadLang, c as saveLang, n as BackgroundPixelStars, r as copy, t as AppHeader } from "./progress-HTKkdHn-.mjs";
import { t as Send } from "./send-C4Xk2_95.mjs";
import { n as handleTelegramUpdate } from "./router-D4kp1u6Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bot-BycbqBG-.js
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Terminal = createLucideIcon("terminal", [["polyline", {
	points: "4 17 10 11 4 5",
	key: "akl6gq"
}], ["line", {
	x1: "12",
	x2: "20",
	y1: "19",
	y2: "19",
	key: "q2wloq"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BotPage() {
	const [lang, setLang] = (0, import_react.useState)("en");
	const [input, setInput] = (0, import_react.useState)("/daily");
	const [output, setOutput] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setLang(loadLang());
	}, []);
	const t = copy[lang];
	const isRtl = lang === "fa";
	function handleSend() {
		if (!input.trim()) return;
		try {
			const resp = handleTelegramUpdate({ message: {
				chat: { id: 1 },
				text: input.trim()
			} });
			setOutput(resp ? resp.text : "(no response)");
		} catch (err) {
			setOutput(`Error: ${err instanceof Error ? err.message : String(err)}`);
		}
	}
	const commands = [
		{
			cmd: "/start",
			desc: lang === "fa" ? "پیام خوشآمد" : "Welcome message"
		},
		{
			cmd: "/today",
			desc: lang === "fa" ? "واژهٔ امروز (روزمره)" : "Today's daily word"
		},
		{
			cmd: "/code",
			desc: lang === "fa" ? "واژهٔ امروز برنامهنویسی" : "Today's programmer word"
		},
		{
			cmd: "/daily",
			desc: lang === "fa" ? "دستهٔ روزمره" : "Switch to daily deck"
		},
		{
			cmd: "/quiz",
			desc: lang === "fa" ? "آزمون چهارگزینهای" : "Four-choice quiz"
		},
		{
			cmd: "/search <word>",
			desc: lang === "fa" ? "جستجوی واژه" : "Look up a word"
		},
		{
			cmd: "/lang",
			desc: lang === "fa" ? "تغییر زبان EN/FA" : "Toggle language EN/FA"
		},
		{
			cmd: "/help",
			desc: lang === "fa" ? "فهرست فرمانها" : "Show command list"
		}
	];
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
				className: "relative z-10 max-w-3xl mx-auto px-5 pt-8 pb-20 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-2xl font-semibold text-fg mb-1 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, {
							size: 22,
							className: "text-accent"
						}), t.bot]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t.botIntro
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
								size: 15,
								className: "text-accent"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold text-fg",
								children: t.commands
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2.5",
							children: commands.map(({ cmd, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "shrink-0 px-2 py-0.5 bg-surface border border-border rounded text-xs font-mono text-accent whitespace-nowrap",
									children: cmd
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted leading-5",
									children: desc
								})]
							}, cmd))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold text-fg mb-4",
								children: "Test console"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: input,
									onChange: (e) => setInput(e.target.value),
									onKeyDown: (e) => e.key === "Enter" && handleSend(),
									placeholder: "/daily",
									className: "flex-1 bg-surface border border-border rounded-lg px-3 py-2 text-sm text-fg placeholder:text-subtle focus:outline-none focus:border-accent/50 font-mono transition-colors"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: handleSend,
									disabled: !input.trim(),
									className: "px-4 py-2 rounded-lg bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25 disabled:opacity-40 transition-all flex items-center gap-2 shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 14 }), t.try]
								})]
							}),
							output && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-elevated border border-border rounded-xl p-4 overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									className: "text-xs text-fg font-mono leading-relaxed whitespace-pre-wrap",
									children: output
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-xl px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold text-muted uppercase tracking-widest mb-2",
							children: t.help
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted leading-relaxed",
							children: t.botHint
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { BotPage as component };
