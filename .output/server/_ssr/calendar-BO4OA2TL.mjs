import { b as require_react, i as __toESM, y as require_jsx_runtime } from "./useStore-ID5WVn9Q.mjs";
import { a as loadLang, c as saveLang, n as BackgroundPixelStars, o as loadProgress, r as copy, s as monthName, t as AppHeader } from "./progress-HTKkdHn-.mjs";
import { t as CircleCheck } from "./circle-check-BrPLuFoH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calendar-BO4OA2TL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Calendar() {
	const [lang, setLang] = (0, import_react.useState)("en");
	const [progress, setProgress] = (0, import_react.useState)(() => typeof localStorage !== "undefined" ? loadProgress() : {
		checkins: [],
		learned: {
			daily: [],
			code: []
		}
	});
	(0, import_react.useEffect)(() => {
		setLang(loadLang());
		setProgress(loadProgress());
	}, []);
	const t = copy[lang];
	const isRtl = lang === "fa";
	const now = /* @__PURE__ */ new Date();
	const year = now.getFullYear();
	const month = now.getMonth();
	const firstDay = new Date(year, month, 1);
	const lastDay = new Date(year, month + 1, 0);
	const startOffset = firstDay.getDay();
	const daysInMonth = lastDay.getDate();
	const checkinSet = new Set(progress.checkins);
	const days = [];
	for (let i = 0; i < startOffset; i++) days.push(null);
	for (let d = 1; d <= daysInMonth; d++) days.push(d);
	function isoForDay(d) {
		return `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
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
				className: "relative z-10 max-w-4xl mx-auto px-5 pt-8 pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-semibold text-fg mb-2",
						children: t.calendar
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted mb-8",
						children: t.calendarLead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold text-fg",
									children: monthName(lang, now)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-7 gap-2 mb-2",
								children: [
									"Sun",
									"Mon",
									"Tue",
									"Wed",
									"Thu",
									"Fri",
									"Sat"
								].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-center text-xs font-medium text-subtle uppercase",
									children: d
								}, d))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-7 gap-2",
								children: days.map((d, i) => {
									if (d === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, `e-${i}`);
									const iso = isoForDay(d);
									const checked = checkinSet.has(iso);
									const isToday = d === now.getDate();
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `aspect-square flex flex-col items-center justify-center rounded-lg border transition-all ${isToday ? "border-accent bg-accent/10" : "border-border bg-surface"} ${checked ? "bg-ok/10 border-ok/30" : ""}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-sm font-medium ${checked ? "text-ok" : "text-fg"}`,
											children: d
										}), checked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
											size: 12,
											className: "text-ok mt-0.5"
										})]
									}, d);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 pt-6 border-t border-border flex items-center gap-6 flex-wrap justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-2xl font-semibold text-ok",
										children: progress.checkins.length
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted uppercase tracking-wide",
										children: t.days
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-2xl font-semibold text-accent",
										children: progress.learned.daily.length + progress.learned.code.length
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted uppercase tracking-wide",
										children: t.learned
									})]
								})]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Calendar as component };
