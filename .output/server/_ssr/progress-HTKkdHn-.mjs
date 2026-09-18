import { b as require_react, i as __toESM, y as require_jsx_runtime } from "./useStore-ID5WVn9Q.mjs";
import { a as todayIso, n as createLucideIcon, t as Link } from "./utils-BJmkfsUb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-HTKkdHn-.js
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Globe = createLucideIcon("globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sparkles = createLucideIcon("sparkles", [
	["path", {
		d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
		key: "4pj2yx"
	}],
	["path", {
		d: "M20 3v4",
		key: "1olli1"
	}],
	["path", {
		d: "M22 5h-4",
		key: "1gvqau"
	}],
	["path", {
		d: "M4 17v2",
		key: "vumght"
	}],
	["path", {
		d: "M5 18H3",
		key: "zchphs"
	}]
]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function BackgroundPixelStars() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const COUNT = 320;
		const SPEED = 6e-4;
		const PIXEL = 2;
		let stars = [];
		let raf;
		let w = 0;
		let h = 0;
		function resize() {
			w = canvas.width = canvas.offsetWidth;
			h = canvas.height = canvas.offsetHeight;
		}
		function init() {
			stars = Array.from({ length: COUNT }, () => ({
				x: Math.random() * 2 - 1,
				y: Math.random() * 2 - 1,
				z: Math.random(),
				px: 0,
				py: 0
			}));
		}
		function draw() {
			ctx.clearRect(0, 0, w, h);
			for (const s of stars) {
				s.z -= SPEED;
				if (s.z <= 0) {
					s.x = Math.random() * 2 - 1;
					s.y = Math.random() * 2 - 1;
					s.z = 1;
					s.px = 0;
					s.py = 0;
				}
				const k = .5 / s.z;
				const sx = s.x * k * w + w / 2;
				const sy = s.y * k * h + h / 2;
				if (sx < 0 || sx >= w || sy < 0 || sy >= h) {
					s.px = 0;
					s.py = 0;
					continue;
				}
				const size = Math.max(PIXEL, PIXEL * (1 - s.z) * 3);
				const alpha = Math.min(1, (1 - s.z) * 1.4);
				const px = Math.round(sx / PIXEL) * PIXEL;
				const py = Math.round(sy / PIXEL) * PIXEL;
				if (s.px !== 0 && s.py !== 0) {
					ctx.beginPath();
					ctx.moveTo(s.px, s.py);
					ctx.lineTo(px, py);
					ctx.strokeStyle = `rgba(142, 180, 232, ${alpha * .35})`;
					ctx.lineWidth = 1;
					ctx.stroke();
				}
				ctx.fillStyle = `rgba(232, 238, 247, ${alpha})`;
				ctx.fillRect(px, py, Math.round(size), Math.round(size));
				s.px = px;
				s.py = py;
			}
			raf = requestAnimationFrame(draw);
		}
		const ro = new ResizeObserver(() => {
			resize();
			init();
		});
		ro.observe(canvas);
		resize();
		init();
		draw();
		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		"aria-hidden": "true",
		className: "pointer-events-none absolute inset-0 h-full w-full"
	});
}
var copy = {
	en: {
		app: "Lumen",
		tagline: "A bilingual lexicon for daily English and the language of code.",
		today: "Today",
		daily: "Daily English",
		dailyLead: "1,024 words for life outside the editor.",
		code: "For programmers",
		codeLead: "1,024 terms for engineers and vibe coders.",
		calendar: "Progress",
		calendarLead: "Mark the days you actually opened a word.",
		chat: "Word coach",
		chatLead: "Ask about meaning, usage, or a better sentence.",
		bot: "Telegram",
		botLead: "The same lexicon, as a fully working bot.",
		search: "Search a word",
		searchPh: "Type an English word or a Persian gloss",
		mark: "Mark as learned",
		marked: "Learned",
		speak: "Pronounce",
		next: "Next word",
		prev: "Previous",
		of: "of",
		wordOfDay: "Word of the day",
		example: "Example",
		definition: "Definition",
		pos: "Part of speech",
		streak: "Current streak",
		days: "days",
		learned: "Learned",
		thisMonth: "This month",
		emptyChat: "Ask anything about the current word — nuance, collocations, or a rewrite.",
		chatPh: "How do I use this word politely?",
		send: "Send",
		thinking: "Thinking",
		aiOff: "The coach is unavailable in this environment.",
		lang: "فارسی",
		botIntro: "Talk to Lumen in Telegram. Commands work in English and Persian. The console below is the same brain as the live webhook.",
		botHint: "After publish, set TELEGRAM_BOT_TOKEN and point BotFather’s webhook at /api/telegram/webhook.",
		botReady: "Webhook is live for this deploy.",
		botMissing: "No bot token on this deploy yet — use the console, then connect BotFather when you publish.",
		try: "Send",
		commands: "Commands",
		help: "Help",
		footer: "Two decks. One quiet night sky. Progress stays on this device.",
		noResults: "No matching words.",
		checkIn: "Check in today",
		checked: "Checked in",
		missed: "Not yet",
		openWord: "Open word",
		coachOn: "Ask about this word",
		deckDaily: "Daily",
		deckCode: "Code",
		quiz: "Quiz",
		correct: "Correct",
		wrong: "Not quite",
		both: "Both decks"
	},
	fa: {
		app: "لومن",
		tagline: "واژه‌نامه‌ای دوزبانه برای انگلیسی روزمره و زبان برنامه‌نویسی.",
		today: "امروز",
		daily: "انگلیسی روزمره",
		dailyLead: "۱۰۲۴ واژه برای زندگی بیرون از ویرایشگر.",
		code: "برای برنامه‌نویسان",
		codeLead: "۱۰۲۴ اصطلاح برای مهندسان و وایب‌کدرها.",
		calendar: "پیشرفت",
		calendarLead: "روزهایی را که واقعاً واژه‌ای گشودید علامت بزنید.",
		chat: "مربی واژه",
		chatLead: "درباره معنی، کاربرد یا جمله‌ای بهتر بپرسید.",
		bot: "تلگرام",
		botLead: "همان واژه‌نامه، به‌صورت رباتی کامل.",
		search: "جستجوی واژه",
		searchPh: "واژهٔ انگلیسی یا معنی فارسی را بنویسید",
		mark: "آموختم",
		marked: "آموخته‌شده",
		speak: "تلفظ",
		next: "واژهٔ بعد",
		prev: "قبلی",
		of: "از",
		wordOfDay: "واژهٔ امروز",
		example: "مثال",
		definition: "تعریف",
		pos: "نقش دستوری",
		streak: "روزهای پیاپی",
		days: "روز",
		learned: "آموخته",
		thisMonth: "این ماه",
		emptyChat: "هر پرسشی دربارهٔ واژهٔ جاری بپرسید: ظرافت، هم‌نشینی، یا بازنویسی جمله.",
		chatPh: "چطور این واژه را مؤدبانه به کار ببرم؟",
		send: "ارسال",
		thinking: "در حال فکر",
		aiOff: "مربی در این محیط در دسترس نیست.",
		lang: "English",
		botIntro: "با لومن در تلگرام حرف بزنید. فرمان‌ها به انگلیسی و فارسی کار می‌کنند. کنسول زیر همان مغز وب‌هوک زنده است.",
		botHint: "پس از انتشار، TELEGRAM_BOT_TOKEN را تنظیم کنید و وب‌هوک BotFather را روی /api/telegram/webhook بگذارید.",
		botReady: "وب‌هوک این انتشار فعال است.",
		botMissing: "هنوز توکن ربات روی این انتشار نیست — از کنسول استفاده کنید و هنگام انتشار به BotFather وصل شوید.",
		try: "ارسال",
		commands: "فرمان‌ها",
		help: "راهنما",
		footer: "دو دسته واژه. یک آسمان شب آرام. پیشرفت روی همین دستگاه می‌ماند.",
		noResults: "واژه‌ای پیدا نشد.",
		checkIn: "حضور امروز",
		checked: "ثبت شد",
		missed: "هنوز نه",
		openWord: "گشودن واژه",
		coachOn: "پرسیدن دربارهٔ این واژه",
		deckDaily: "روزمره",
		deckCode: "کد",
		quiz: "آزمون",
		correct: "درست",
		wrong: "نه‌چندان",
		both: "هر دو دسته"
	}
};
function monthName(lang, date) {
	return new Intl.DateTimeFormat(lang === "fa" ? "fa-IR" : "en-GB", {
		month: "long",
		year: "numeric"
	}).format(date);
}
function AppHeader({ lang, onToggleLang }) {
	const t = copy[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative z-10 flex items-center justify-between px-5 py-4 max-w-5xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			className: "flex items-center gap-2 group",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-accent group-hover:opacity-80 transition-opacity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 18 })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold text-fg tracking-tight",
				children: t.app
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "flex items-center gap-1 flex-wrap justify-end",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/daily",
					className: "px-3 py-1.5 rounded-md text-sm text-muted hover:text-fg hover:bg-elevated transition-colors",
					children: t.deckDaily
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/code",
					className: "px-3 py-1.5 rounded-md text-sm text-muted hover:text-fg hover:bg-elevated transition-colors",
					children: t.deckCode
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/calendar",
					className: "px-3 py-1.5 rounded-md text-sm text-muted hover:text-fg hover:bg-elevated transition-colors",
					children: t.calendar
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/chat",
					className: "px-3 py-1.5 rounded-md text-sm text-muted hover:text-fg hover:bg-elevated transition-colors",
					children: t.chat
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/bot",
					className: "px-3 py-1.5 rounded-md text-sm text-muted hover:text-fg hover:bg-elevated transition-colors",
					children: t.bot
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onToggleLang,
					className: "ml-1 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-muted hover:text-fg hover:bg-elevated transition-colors",
					"aria-label": `Switch language to ${t.lang}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { size: 14 }), t.lang]
				})
			]
		})]
	});
}
var KEY = "lumen-progress-v1";
var LANG_KEY = "lumen-lang";
function emptyProgress() {
	return {
		checkins: [],
		learned: {
			daily: [],
			code: []
		}
	};
}
function loadProgress() {
	if (typeof localStorage === "undefined") return emptyProgress();
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return emptyProgress();
		const parsed = JSON.parse(raw);
		return {
			checkins: Array.isArray(parsed.checkins) ? parsed.checkins : [],
			learned: {
				daily: parsed.learned?.daily ?? [],
				code: parsed.learned?.code ?? []
			}
		};
	} catch {
		return emptyProgress();
	}
}
function saveProgress(p) {
	localStorage.setItem(KEY, JSON.stringify(p));
}
function ensureCheckin(iso = todayIso()) {
	const p = loadProgress();
	if (p.checkins.includes(iso)) return p;
	const next = {
		...p,
		checkins: [...p.checkins, iso].sort()
	};
	saveProgress(next);
	return next;
}
function toggleLearned(deck, id) {
	const p = loadProgress();
	const list = new Set(p.learned[deck]);
	if (list.has(id)) list.delete(id);
	else list.add(id);
	const next = {
		...p,
		learned: {
			...p.learned,
			[deck]: [...list].sort((a, b) => a - b)
		}
	};
	saveProgress(next);
	return next;
}
function streak(checkins, today = todayIso()) {
	const set = new Set(checkins);
	if (!set.has(today)) return 0;
	let n = 0;
	const d = /* @__PURE__ */ new Date(`${today}T12:00:00`);
	while (set.has(todayIso(d))) {
		n += 1;
		d.setDate(d.getDate() - 1);
	}
	return n;
}
function loadLang() {
	if (typeof localStorage === "undefined") return "en";
	return localStorage.getItem(LANG_KEY) === "fa" ? "fa" : "en";
}
function saveLang(lang) {
	localStorage.setItem(LANG_KEY, lang);
}
//#endregion
export { loadLang as a, saveLang as c, ensureCheckin as i, streak as l, BackgroundPixelStars as n, loadProgress as o, copy as r, monthName as s, AppHeader as t, toggleLearned as u };
