import { b as require_react, i as __toESM, y as require_jsx_runtime } from "./useStore-ID5WVn9Q.mjs";
import { a as todayIso, n as createLucideIcon, t as Link } from "./utils-BJmkfsUb.mjs";
import { t as Bot } from "./bot-ObO6HcZ1.mjs";
import { a as loadLang, c as saveLang, i as ensureCheckin, l as streak, n as BackgroundPixelStars, o as loadProgress, r as copy, t as AppHeader, u as toggleLearned } from "./progress-HTKkdHn-.mjs";
import { a as posLabel, c as wordOfDay, i as useNavigate } from "./router-D4kp1u6Z.mjs";
import { t as CircleCheck } from "./circle-check-BrPLuFoH.mjs";
import { n as MessageSquare, r as Volume2, t as ChevronRight } from "./volume-2-DRYGiuG9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DUui_duR.js
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var BookOpen = createLucideIcon("book-open", [["path", {
	d: "M12 7v14",
	key: "1akyts"
}], ["path", {
	d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
	key: "ruj8y"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CalendarDays = createLucideIcon("calendar-days", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}],
	["path", {
		d: "M8 14h.01",
		key: "6423bh"
	}],
	["path", {
		d: "M12 14h.01",
		key: "1etili"
	}],
	["path", {
		d: "M16 14h.01",
		key: "1gbofw"
	}],
	["path", {
		d: "M8 18h.01",
		key: "lrp35t"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}],
	["path", {
		d: "M16 18h.01",
		key: "kzsmim"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CodeXml = createLucideIcon("code-xml", [
	["path", {
		d: "m18 16 4-4-4-4",
		key: "1inbqp"
	}],
	["path", {
		d: "m6 8-4 4 4 4",
		key: "15zrgr"
	}],
	["path", {
		d: "m14.5 4-5 16",
		key: "e7oirm"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Flame = createLucideIcon("flame", [["path", {
	d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
	key: "96xj49"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Quote = createLucideIcon("quote", [["path", {
	d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
	key: "rib7q0"
}], ["path", {
	d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
	key: "1ymkrd"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Users = createLucideIcon("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]);
var import_jsx_runtime = require_jsx_runtime();
function Testimonial() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "w-full py-16 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium uppercase tracking-wider",
								children: "Community Love"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold text-fg mb-3",
							children: "Trusted by Learners Worldwide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted max-w-2xl mx-auto",
							children: "Join thousands of students and professionals who have transformed their English vocabulary with Lumen"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-xl p-4 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-bold text-accent",
								children: "5K+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted mt-1",
								children: "Active Learners"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-xl p-4 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-bold text-ok",
								children: "2K+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted mt-1",
								children: "Words Learned"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-xl p-4 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-bold text-warn",
								children: "4.9"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted mt-1",
								children: "Average Rating"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: [
						{
							name: "Sarah M.",
							role: "Software Engineer",
							content: "Lumen helped me master technical vocabulary in just weeks. The daily practice is a game-changer!",
							rating: 5,
							avatar: "👩‍💻"
						},
						{
							name: "Reza K.",
							role: "Student",
							content: "Finally an app that understands bilingual learning. The Persian-English support is perfect.",
							rating: 5,
							avatar: "👨‍🎓"
						},
						{
							name: "Alex T.",
							role: "Developer",
							content: "The code-specific vocabulary deck is exactly what I needed for my career growth.",
							rating: 5,
							avatar: "👨‍💻"
						}
					].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group glass rounded-2xl p-6 flex flex-col gap-4 hover:shadow-border-hover hover:border-accent/30 transition-all duration-300 hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 text-accent",
								children: Array.from({ length: t.rating }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									size: 14,
									fill: "currentColor",
									className: "group-hover:scale-110 transition-transform"
								}, j))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
								size: 28,
								className: "text-accent/20 -ml-1 -mt-2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-fg leading-relaxed flex-1 italic",
								children: [
									"\"",
									t.content,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 border-t border-border/50 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-lg",
									children: t.avatar
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-sm text-fg",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted",
									children: t.role
								})] })]
							})
						]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted mb-4",
						children: "Ready to start your learning journey?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25 transition-all font-medium",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Join Now — It's Free" })
					})]
				})
			]
		})
	});
}
var import_react = /* @__PURE__ */ __toESM(require_react());
function Home() {
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
	const dailyWord = wordOfDay("daily");
	const codeWord = wordOfDay("code");
	const currentStreak = streak(progress.checkins);
	const learnedTotal = progress.learned.daily.length + progress.learned.code.length;
	const todayChecked = progress.checkins.includes(todayIso());
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
				className: "relative z-10 max-w-5xl mx-auto px-5 pt-8 pb-10 stagger-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6 mb-8 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
										size: 15,
										className: "text-warn"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-warn font-semibold",
										children: currentStreak
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: t.days
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										size: 15,
										className: "text-ok"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-ok font-semibold",
										children: learnedTotal
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: t.learned
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setProgress(ensureCheckin(todayIso())),
								disabled: todayChecked,
								className: `ml-auto flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${todayChecked ? "bg-ok/15 text-ok border border-ok/30 cursor-default" : "bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 14 }), todayChecked ? t.checked : t.checkIn]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-semibold text-fg mb-2",
								children: t.wordOfDay
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted mb-6",
								children: t.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordCard, {
									word: dailyWord,
									deck: "daily",
									lang,
									label: t.daily,
									progress,
									setProgress
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordCard, {
									word: codeWord,
									deck: "code",
									lang,
									label: t.code,
									progress,
									setProgress
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavCard, {
								to: "/daily",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { size: 20 }),
								title: t.daily,
								lead: t.dailyLead,
								accent: "accent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavCard, {
								to: "/code",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { size: 20 }),
								title: t.code,
								lead: t.codeLead,
								accent: "ok"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavCard, {
								to: "/calendar",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 20 }),
								title: t.calendar,
								lead: t.calendarLead,
								accent: "warn"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavCard, {
								to: "/bot",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { size: 20 }),
								title: t.bot,
								lead: t.botIntro,
								accent: "accent"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass rounded-xl p-6 mb-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3 rounded-lg bg-accent/15 text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { size: 24 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold text-fg mb-1",
										children: "Connect with Telegram Bot"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted mb-4",
										children: "Get daily vocabulary delivered to your Telegram. Practice anywhere, anytime."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://t.me/LumenEnglishBot",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25 transition-all text-sm font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { size: 16 }), "Open in Telegram"]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonial, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "relative z-10 text-center text-xs text-subtle pb-8 px-5",
				children: t.footer
			})
		]
	});
}
function WordCard({ word, deck, lang, label, progress, setProgress }) {
	const t = copy[lang];
	const isLearned = progress.learned[deck].includes(word.id);
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-xl p-5 flex flex-col gap-3 hover:shadow-border-hover transition-all",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium text-muted uppercase tracking-widest",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold text-fg mt-0.5",
						children: word.word
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-subtle",
						children: posLabel(word.pos, lang)
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1 mt-1 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							const u = new SpeechSynthesisUtterance(word.word);
							u.lang = "en-US";
							window.speechSynthesis.speak(u);
						},
						"aria-label": t.speak,
						className: "p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { size: 15 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => void navigate({
							to: "/chat",
							search: { word: word.slug }
						}),
						"aria-label": t.coachOn,
						className: "p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { size: 15 })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg leading-relaxed",
				children: lang === "fa" ? word.fa.def : word.en.def
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted italic leading-relaxed",
				children: lang === "fa" ? word.fa.example : word.en.example
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 mt-auto pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setProgress(toggleLearned(deck, word.id)),
					className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${isLearned ? "bg-ok/15 text-ok border border-ok/25" : "bg-surface text-muted border border-border hover:text-fg"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 12 }), isLearned ? t.marked : t.mark]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: deck === "daily" ? "/daily" : "/code",
					className: "ml-auto flex items-center gap-1 text-xs text-subtle hover:text-accent transition-colors",
					children: [t.openWord, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 12 })]
				})]
			})
		]
	});
}
function NavCard({ to, icon, title, lead, accent }) {
	const colors = {
		accent: "text-accent bg-accent/10 group-hover:bg-accent/20",
		ok: "text-ok bg-ok/10 group-hover:bg-ok/20",
		warn: "text-warn bg-warn/10 group-hover:bg-warn/20"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group glass rounded-xl p-4 flex flex-col gap-3 hover:shadow-border-hover transition-all",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `inline-flex w-9 h-9 items-center justify-center rounded-lg transition-colors ${colors[accent] ?? colors.accent}`,
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-medium text-sm text-fg",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted mt-0.5 leading-relaxed",
				children: lead
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
				size: 14,
				className: "text-subtle mt-auto self-end"
			})
		]
	});
}
//#endregion
export { Home as component };
