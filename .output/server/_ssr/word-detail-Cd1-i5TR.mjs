import { y as require_jsx_runtime } from "./useStore-ID5WVn9Q.mjs";
import { n as createLucideIcon } from "./utils-BJmkfsUb.mjs";
import { a as posLabel } from "./router-D4kp1u6Z.mjs";
import { t as CircleCheck } from "./circle-check-BrPLuFoH.mjs";
import { n as MessageSquare, r as Volume2 } from "./volume-2-DRYGiuG9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/word-detail-Cd1-i5TR.js
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronLeft = createLucideIcon("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
var import_jsx_runtime = require_jsx_runtime();
function WordDetail({ word, lang, isLearned, t, onSpeak, onLearn, onCoach }) {
	const def = lang === "fa" ? word.fa.def : word.en.def;
	const ex = lang === "fa" ? word.fa.example : word.en.example;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-2xl p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-subtle uppercase tracking-widest",
					children: posLabel(word.pos, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-semibold text-fg mt-1 tracking-tight",
					children: word.word
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1.5 shrink-0 mt-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onSpeak,
							"aria-label": t.speak,
							className: "p-2.5 rounded-xl text-muted hover:text-accent hover:bg-accent/10 border border-border hover:border-accent/30 transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onCoach,
							"aria-label": t.coachOn,
							className: "p-2.5 rounded-xl text-muted hover:text-accent hover:bg-accent/10 border border-border hover:border-accent/30 transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onLearn,
							"aria-label": isLearned ? t.marked : t.mark,
							className: `p-2.5 rounded-xl border transition-all ${isLearned ? "text-ok bg-ok/10 border-ok/30" : "text-muted border-border hover:text-ok hover:bg-ok/10 hover:border-ok/30"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 16 })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium text-muted uppercase tracking-widest mb-2",
					children: t.definition
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base text-fg leading-relaxed",
					children: def
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium text-muted uppercase tracking-widest mb-2",
					children: t.example
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted italic leading-relaxed",
					children: ex
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border pt-5 grid grid-cols-2 gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-medium text-subtle uppercase tracking-widest mb-2",
						children: "English"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted leading-relaxed",
						children: word.en.def
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle italic mt-1.5",
						children: word.en.example
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					dir: "rtl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-medium text-subtle uppercase tracking-widest mb-2",
							children: "فارسی"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted leading-relaxed",
							children: word.fa.def
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle italic mt-1.5",
							children: word.fa.example
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { X as i, Search as n, WordDetail as r, ChevronLeft as t };
