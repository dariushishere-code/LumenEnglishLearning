import { b as require_react, i as __toESM, y as require_jsx_runtime } from "./useStore-ID5WVn9Q.mjs";
import { a as loadLang, c as saveLang, n as BackgroundPixelStars, o as loadProgress, r as copy, t as AppHeader, u as toggleLearned } from "./progress-HTKkdHn-.mjs";
import { i as useNavigate, l as wordsFor, o as searchWords } from "./router-D4kp1u6Z.mjs";
import { t as ChevronRight } from "./volume-2-DRYGiuG9.mjs";
import { i as X, n as Search, r as WordDetail, t as ChevronLeft } from "./word-detail-Cd1-i5TR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/code-D5Cn44MB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CodeDeck() {
	const [lang, setLang] = (0, import_react.useState)("en");
	const [progress, setProgress] = (0, import_react.useState)(() => typeof localStorage !== "undefined" ? loadProgress() : {
		checkins: [],
		learned: {
			daily: [],
			code: []
		}
	});
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [query, setQuery] = (0, import_react.useState)("");
	const [results, setResults] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setLang(loadLang());
		setProgress(loadProgress());
	}, []);
	const t = copy[lang];
	const isRtl = lang === "fa";
	const words = wordsFor("code");
	const word = words[idx];
	const isLearned = progress.learned.code.includes(word.id);
	const navigate = useNavigate();
	function onSearch(q) {
		setQuery(q);
		setResults(q.trim().length > 0 ? searchWords(q, "code", 12) : []);
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
				className: "relative z-10 max-w-3xl mx-auto px-5 pt-6 pb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							size: 15,
							className: "absolute left-3 top-1/2 -translate-y-1/2 text-subtle pointer-events-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => onSearch(e.target.value),
							placeholder: t.searchPh,
							className: "w-full bg-surface border border-border rounded-xl pl-9 pr-9 py-2.5 text-sm text-fg placeholder:text-subtle focus:outline-none focus:border-accent/50 transition-colors"
						}),
						query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSearch(""),
							className: "absolute right-3 top-1/2 -translate-y-1/2 text-subtle hover:text-fg transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
						})
					]
				}), results.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
					children: results.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setResults([]);
							setQuery("");
							setIdx(words.findIndex((x) => x.id === w.id));
						},
						className: "glass rounded-xl p-4 text-left hover:shadow-border-hover transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold text-fg text-sm",
							children: w.word
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted mt-0.5 line-clamp-2",
							children: lang === "fa" ? w.fa.def : w.en.def
						})]
					}, w.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordDetail, {
					word,
					lang,
					isLearned,
					t,
					onSpeak: () => {
						const u = new SpeechSynthesisUtterance(word.word);
						u.lang = "en-US";
						window.speechSynthesis.speak(u);
					},
					onLearn: () => setProgress(toggleLearned("code", word.id)),
					onCoach: () => void navigate({
						to: "/chat",
						search: { word: word.slug }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setIdx((i) => Math.max(0, i - 1)),
							disabled: idx === 0,
							className: "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-muted border border-border hover:text-fg hover:bg-elevated disabled:opacity-30 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 15 }), t.prev]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-subtle",
							children: [
								idx + 1,
								" ",
								t.of,
								" ",
								words.length
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setIdx((i) => Math.min(words.length - 1, i + 1)),
							disabled: idx === words.length - 1,
							className: "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-muted border border-border hover:text-fg hover:bg-elevated disabled:opacity-30 transition-all",
							children: [t.next, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 15 })]
						})
					]
				})] })]
			})
		]
	});
}
//#endregion
export { CodeDeck as component };
