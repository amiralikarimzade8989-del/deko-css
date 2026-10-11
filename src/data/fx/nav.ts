import type { CssEffect } from "./types";

/**
 * Navigation & link effects — underlines, text rolls, hamburgers,
 * tabs and menus. Scoped under .fx-<id>.
 */
export const navEffects: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  navEffects.push({ category: "nav", interaction: "hover", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Underline slide                                        */
/* ---------------------------------------------------------- */
fx({
  id: "underline-slide-link",
  name: "Underline Slide Link",
  fa: "لینک با زیرخط سرخورنده",
  description: "An underline sweeps in from the left edge of the link on hover.",
  faDescription: "با هاور، زیرخط از لبه چپ لینک داخل می‌آید.",
  tags: ["link", "underline", "nav"],
  html: `<a class="us-link">Hover me</a>`,
  css: `.fx-underline-slide-link .us-link {
  position: relative;
  font-size: 17px;
  font-weight: 700;
  color: #e4e4e7;
  text-decoration: none;
  padding-bottom: 5px;
}
.fx-underline-slide-link .us-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2.5px;
  border-radius: 999px;
  background: #f472b6;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.35s cubic-bezier(0.25, 0.9, 0.3, 1);
}
.fx-underline-slide-link .us-link:hover::after {
  transform: scaleX(1);
}`,
});

/* ---------------------------------------------------------- */
/* 2 — Underline center grow                                  */
/* ---------------------------------------------------------- */
fx({
  id: "underline-center-link",
  name: "Center Underline Link",
  fa: "لینک با زیرخط از وسط",
  description: "The underline grows outward from the center of the link on hover.",
  faDescription: "زیرخط با هاور از وسط لینک به دو طرف رشد می‌کند.",
  tags: ["link", "underline", "nav"],
  html: `<a class="uc-link">Hover me</a>`,
  css: `.fx-underline-center-link .uc-link {
  position: relative;
  font-size: 17px;
  font-weight: 700;
  color: #e4e4e7;
  text-decoration: none;
  padding-bottom: 5px;
}
.fx-underline-center-link .uc-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 2.5px;
  border-radius: 999px;
  background: #22d3ee;
  transform: translateX(-50%) scaleX(0);
  transition: transform 0.35s ease;
}
.fx-underline-center-link .uc-link:hover::after {
  transform: translateX(-50%) scaleX(1);
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Double underline                                       */
/* ---------------------------------------------------------- */
fx({
  id: "dual-underline-nav",
  name: "Double Underline Link",
  fa: "لینک با دور خط",
  description: "Two staggered lines slide in one after the other on hover.",
  faDescription: "با هاور دو خط با تأخیر پشت سر هم داخل می‌آیند.",
  tags: ["link", "underline", "double"],
  html: `<a class="du-link">Hover me</a>`,
  css: `.fx-dual-underline-nav .du-link {
  position: relative;
  font-size: 17px;
  font-weight: 700;
  color: #e4e4e7;
  text-decoration: none;
  padding-bottom: 9px;
}
.fx-dual-underline-nav .du-link::before,
.fx-dual-underline-nav .du-link::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2.5px;
  border-radius: 999px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.fx-dual-underline-nav .du-link::before {
  bottom: 0;
  background: #fbbf24;
  transition-delay: 0.12s;
}
.fx-dual-underline-nav .du-link::after {
  bottom: 5px;
  background: #fb923c;
}
.fx-dual-underline-nav .du-link:hover::before,
.fx-dual-underline-nav .du-link:hover::after {
  transform: scaleX(1);
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Circle fill behind link                                */
/* ---------------------------------------------------------- */
fx({
  id: "circle-fill-link",
  name: "Circle Fill Link",
  fa: "لینک با دایره پرشونده",
  description: "A soft circle expands from behind the text on hover.",
  faDescription: "با هاور دایره‌ای نرم از پشت متن باز می‌شود.",
  tags: ["link", "circle", "nav"],
  html: `<a class="cf-link"><span>Hover me</span></a>`,
  css: `.fx-circle-fill-link .cf-link {
  position: relative;
  display: inline-grid;
  place-items: center;
  padding: 12px 26px;
  border-radius: 999px;
  overflow: hidden;
  text-decoration: none;
  border: 1.5px solid rgba(52, 211, 153, 0.5);
  transition: border-color 0.3s ease;
}
.fx-circle-fill-link .cf-link::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: #34d399;
  transition: width 0.45s ease, height 0.45s ease;
}
.fx-circle-fill-link .cf-link span {
  position: relative;
  z-index: 1;
  font-weight: 700;
  font-size: 15px;
  color: #6ee7b7;
  transition: color 0.3s ease;
}
.fx-circle-fill-link .cf-link:hover {
  border-color: #34d399;
}
.fx-circle-fill-link .cf-link:hover::before {
  width: 220%;
  height: 320%;
}
.fx-circle-fill-link .cf-link:hover span {
  color: #064e3b;
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Text roll link                                         */
/* ---------------------------------------------------------- */
fx({
  id: "text-roll-link",
  name: "Text Roll Link",
  fa: "لینک غلتان",
  description: "The label rolls upward and its twin rolls in from below on hover.",
  faDescription: "با هاور متن به بالا می‌غلتد و کپی‌اش از پایین وارد می‌شود.",
  tags: ["link", "roll", "text"],
  html: `<a class="tr-link" data-text="Roll me">Roll me</a>`,
  css: `.fx-text-roll-link .tr-link {
  position: relative;
  display: inline-block;
  overflow: hidden;
  font-size: 17px;
  font-weight: 800;
  color: #fbbf24;
  text-decoration: none;
  line-height: 1.4;
}
.fx-text-roll-link .tr-link::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  color: #fde68a;
  transition: transform 0.35s cubic-bezier(0.3, 0.9, 0.4, 1.2);
}
.fx-text-roll-link .tr-link:hover {
  color: transparent;
}
.fx-text-roll-link .tr-link:hover::after {
  transform: translateY(-100%);
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Bracket link                                           */
/* ---------------------------------------------------------- */
fx({
  id: "bracket-nav-link",
  name: "Bracket Link",
  fa: "لینک براکت‌دار",
  description: "Square brackets slide in from both sides of the link on hover.",
  faDescription: "با هاور براکت‌ها از دو طرف لینک داخل می‌آیند.",
  tags: ["link", "bracket", "nav"],
  html: `<a class="bk-link">Hover me</a>`,
  css: `.fx-bracket-nav-link .bk-link {
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: #a5f3fc;
  text-decoration: none;
  padding: 6px 18px;
  transition: color 0.3s ease, letter-spacing 0.3s ease;
}
.fx-bracket-nav-link .bk-link::before,
.fx-bracket-nav-link .bk-link::after {
  position: absolute;
  font-weight: 400;
  color: #22d3ee;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fx-bracket-nav-link .bk-link::before {
  content: "[";
  left: 0;
  transform: translateX(8px);
}
.fx-bracket-nav-link .bk-link::after {
  content: "]";
  right: 0;
  transform: translateX(-8px);
}
.fx-bracket-nav-link .bk-link:hover {
  color: #ecfeff;
  letter-spacing: 1px;
}
.fx-bracket-nav-link .bk-link:hover::before,
.fx-bracket-nav-link .bk-link:hover::after {
  opacity: 1;
  transform: translateX(0);
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Pill fill link                                         */
/* ---------------------------------------------------------- */
fx({
  id: "pill-fill-link",
  name: "Pill Fill Link",
  fa: "لینک کپسولی پرشو",
  description: "A colored pill sweeps across the link background, flipping the text color.",
  faDescription: "یک قرص رنگی روی لینک می‌لغزد و رنگ متن برعکس می‌شود.",
  tags: ["link", "pill", "nav"],
  html: `<a class="pf-link"><span>Hover me</span></a>`,
  css: `.fx-pill-fill-link .pf-link {
  position: relative;
  display: inline-block;
  padding: 11px 26px;
  border-radius: 999px;
  overflow: hidden;
  border: 1.5px solid #a78bfa;
  text-decoration: none;
  transition: color 0.3s ease 0.1s;
}
.fx-pill-fill-link .pf-link::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #a78bfa;
  transform: translateX(-101%);
  transition: transform 0.4s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-pill-fill-link .pf-link span {
  position: relative;
  z-index: 1;
  font-weight: 700;
  font-size: 15px;
  color: #c4b5fd;
}
.fx-pill-fill-link .pf-link:hover::before {
  transform: translateX(0);
}
.fx-pill-fill-link .pf-link:hover span {
  color: #2e1065;
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Gradient sweep text                                    */
/* ---------------------------------------------------------- */
fx({
  id: "gradient-sweep-link",
  name: "Gradient Sweep Link",
  fa: "لینک با جاروی گرادیان",
  description: "A gradient shines through the letters while an underline follows on hover.",
  faDescription: "با هاور گرادیان از حروف عبور می‌کند و زیرخط هم می‌آید.",
  tags: ["link", "gradient", "text"],
  html: `<a class="gs-link">Hover me</a>`,
  css: `.fx-gradient-sweep-link .gs-link {
  position: relative;
  font-size: 18px;
  font-weight: 800;
  color: #a1a1aa;
  text-decoration: none;
  padding-bottom: 4px;
  background: linear-gradient(90deg, #f472b6, #fbbf24, #34d399) no-repeat 0 100% / 0 2.5px;
  transition: background-size 0.4s ease, color 0.3s ease;
}
.fx-gradient-sweep-link .gs-link:hover {
  color: #f0abfc;
  background-size: 100% 2.5px;
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Hamburger to X                                         */
/* ---------------------------------------------------------- */
fx({
  id: "hamburger-x",
  name: "Hamburger to X",
  fa: "همبرگری به ضربدر",
  description: "The classic burger morphs into a close cross when hovered.",
  faDescription: "همبرگری کلاسیک با هاور به ضربدر بسته‌شدن تبدیل می‌شود.",
  tags: ["hamburger", "menu", "morph"],
  html: `<button class="hx-btn" type="button" aria-label="Menu"><span></span><span></span><span></span></button>`,
  css: `.fx-hamburger-x .hx-btn {
  width: 52px;
  height: 44px;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  display: grid;
  place-content: center;
  gap: 6px;
  cursor: pointer;
}
.fx-hamburger-x .hx-btn span {
  display: block;
  width: 26px;
  height: 2.5px;
  border-radius: 999px;
  background: #e4e4e7;
  transition: transform 0.35s ease, opacity 0.25s ease;
}
.fx-hamburger-x .hx-btn:hover span:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg);
}
.fx-hamburger-x .hx-btn:hover span:nth-child(2) {
  opacity: 0;
}
.fx-hamburger-x .hx-btn:hover span:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg);
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Hamburger squeeze                                     */
/* ---------------------------------------------------------- */
fx({
  id: "hamburger-squeeze",
  name: "Hamburger Squeeze",
  fa: "همبرگری فشرده",
  description: "The middle line shrinks away and the others tilt slightly on hover.",
  faDescription: "با هاور خط وسط کوتاه می‌شود و دو خط دیگر کمی کج می‌شوند.",
  tags: ["hamburger", "menu", "squeeze"],
  html: `<button class="hs-btn" type="button" aria-label="Menu"><span></span><span></span><span></span></button>`,
  css: `.fx-hamburger-squeeze .hs-btn {
  width: 52px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  display: grid;
  place-content: center;
  gap: 6px;
  cursor: pointer;
}
.fx-hamburger-squeeze .hs-btn span {
  display: block;
  width: 26px;
  height: 2.5px;
  border-radius: 999px;
  background: #a3e635;
  transition: transform 0.3s ease, width 0.3s ease;
}
.fx-hamburger-squeeze .hs-btn:hover span:nth-child(1) {
  transform: translateY(2px) rotate(-6deg);
}
.fx-hamburger-squeeze .hs-btn:hover span:nth-child(2) {
  width: 14px;
}
.fx-hamburger-squeeze .hs-btn:hover span:nth-child(3) {
  transform: translateY(-2px) rotate(6deg);
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Hamburger to arrow                                    */
/* ---------------------------------------------------------- */
fx({
  id: "hamburger-arrow",
  name: "Hamburger to Arrow",
  fa: "همبرگری به فلش",
  description: "The burger folds itself into a right arrow on hover.",
  faDescription: "همبرگری با هاور به شکل فلش راست‌رو درمی‌آید.",
  tags: ["hamburger", "arrow", "menu"],
  html: `<button class="ha-btn" type="button" aria-label="Menu"><span></span><span></span><span></span></button>`,
  css: `.fx-hamburger-arrow .ha-btn {
  width: 52px;
  height: 44px;
  border-radius: 12px;
  background: rgba(251, 113, 133, 0.12);
  border: 1.5px solid rgba(251, 113, 133, 0.4);
  display: grid;
  place-content: center;
  gap: 6px;
  cursor: pointer;
}
.fx-hamburger-arrow .ha-btn span {
  display: block;
  width: 26px;
  height: 2.5px;
  border-radius: 999px;
  background: #fb7185;
  transition: transform 0.35s ease, width 0.35s ease;
}
.fx-hamburger-arrow .ha-btn:hover span:nth-child(1) {
  transform: translateY(2px) rotate(32deg);
  width: 16px;
}
.fx-hamburger-arrow .ha-btn:hover span:nth-child(3) {
  transform: translateY(-2px) rotate(-32deg);
  width: 16px;
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Tab indicator cycling                                 */
/* ---------------------------------------------------------- */
fx({
  id: "tab-indicator-cycle",
  name: "Tab Indicator Cycle",
  fa: "چرخش نشانگر تب",
  description: "A glowing indicator glides between three tabs automatically, forever.",
  faDescription: "نشانگر درخشان به‌طور خودکار بین سه تب جابه‌جا می‌شود.",
  tags: ["tabs", "indicator", "auto"],
  interaction: "auto",
  html: `<div class="ti-bar"><span class="ti-tab ti-t1">Home</span><span class="ti-tab ti-t2">Work</span><span class="ti-tab ti-t3">Blog</span><span class="ti-cursor"></span></div>`,
  css: `.fx-tab-indicator-cycle .ti-bar {
  position: relative;
  display: flex;
  gap: 4px;
  padding: 6px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.fx-tab-indicator-cycle .ti-tab {
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 700;
  color: #a1a1aa;
  z-index: 1;
}
.fx-tab-indicator-cycle .ti-cursor {
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 56px;
  border-radius: 10px;
  background: linear-gradient(135deg, #d946ef, #a21caf);
  box-shadow: 0 4px 14px rgba(217, 70, 239, 0.4);
  animation: ti-slide 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@keyframes ti-slide {
  0%, 28% { transform: translateX(0); }
  33%, 61% { transform: translateX(60px); }
  66%, 94% { transform: translateX(120px); }
  100% { transform: translateX(0); }
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Breadcrumb nudge                                      */
/* ---------------------------------------------------------- */
fx({
  id: "breadcrumb-nudge",
  name: "Breadcrumb Nudge",
  fa: "بردکرام با جابه‌جایی",
  description: "Hovering a breadcrumb item nudges it forward and brightens it.",
  faDescription: "با هاور روی هر بخش بردکرام، کمی جلو می‌رود و روشن‌تر می‌شود.",
  tags: ["breadcrumb", "nav", "hover"],
  html: `<nav class="bc-crumbs" aria-label="breadcrumb"><a>Home</a><span>/</span><a>Library</a><span>/</span><a class="bc-active">CSS</a></nav>`,
  css: `.fx-breadcrumb-nudge .bc-crumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}
.fx-breadcrumb-nudge .bc-crumbs a {
  color: #a1a1aa;
  text-decoration: none;
  padding: 4px 6px;
  border-radius: 6px;
  transition: color 0.25s ease, transform 0.25s ease, background 0.25s ease;
}
.fx-breadcrumb-nudge .bc-crumbs a:hover {
  color: #f0abfc;
  transform: translateX(3px);
  background: rgba(217, 70, 239, 0.1);
}
.fx-breadcrumb-nudge .bc-crumbs span {
  color: #52525b;
}
.fx-breadcrumb-nudge .bc-active {
  color: #f0abfc !important;
  font-weight: 700;
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Strike-through link                                   */
/* ---------------------------------------------------------- */
fx({
  id: "strike-link",
  name: "Strike-Through Link",
  fa: "لینک خط‌خورده",
  description: "A line strikes through the link on hover, then the text fades.",
  faDescription: "با هاور خطی از روی متن عبور می‌کند و متن محو می‌شود.",
  tags: ["link", "strike", "hover"],
  html: `<a class="st-link">Strike me</a>`,
  css: `.fx-strike-link .st-link {
  position: relative;
  font-size: 17px;
  font-weight: 700;
  color: #fda4af;
  text-decoration: none;
}
.fx-strike-link .st-link::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2.5px;
  background: #fb7185;
  border-radius: 999px;
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 0.3s ease;
}
.fx-strike-link .st-link:hover::after {
  transform: scaleX(1);
  transform-origin: left center;
}
.fx-strike-link .st-link:hover {
  color: #fecdd3;
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Blur siblings menu                                    */
/* ---------------------------------------------------------- */
fx({
  id: "blur-siblings-menu",
  name: "Blur Siblings Menu",
  fa: "منوی محوشونده",
  description: "Hovering one menu item blurs and dims all the others — spotlight mode.",
  faDescription: "با هاور روی هر آیتم، بقیه تار و کم‌رنگ می‌شوند؛ حالت نورافکن.",
  tags: ["menu", "blur", "focus"],
  html: `<nav class="bs-menu"><a>Home</a><a>About</a><a>Work</a><a>Contact</a></nav>`,
  css: `.fx-blur-siblings-menu .bs-menu {
  display: flex;
  gap: 22px;
}
.fx-blur-siblings-menu .bs-menu a {
  font-size: 16px;
  font-weight: 700;
  color: #e4e4e7;
  text-decoration: none;
  transition: opacity 0.3s ease, filter 0.3s ease, color 0.3s ease;
}
.fx-blur-siblings-menu .bs-menu:hover a {
  opacity: 0.35;
  filter: blur(1.5px);
}
.fx-blur-siblings-menu .bs-menu a:hover {
  opacity: 1;
  filter: blur(0);
  color: #f0abfc;
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Letter spacing link                                   */
/* ---------------------------------------------------------- */
fx({
  id: "letter-spacing-link",
  name: "Letter Spacing Link",
  fa: "لینک با فاصله حروف",
  description: "The letters spread apart and the color ignites on hover.",
  faDescription: "با هاور حروف از هم فاصله می‌گیرند و رنگ روشن می‌شود.",
  tags: ["link", "letters", "spacing"],
  html: `<a class="ls-link">SPREAD</a>`,
  css: `.fx-letter-spacing-link .ls-link {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #94a3b8;
  text-decoration: none;
  transition: letter-spacing 0.4s ease, color 0.4s ease, text-shadow 0.4s ease;
}
.fx-letter-spacing-link .ls-link:hover {
  letter-spacing: 7px;
  color: #e2e8f0;
  text-shadow: 0 0 14px rgba(226, 232, 240, 0.5);
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Background slide-up link                              */
/* ---------------------------------------------------------- */
fx({
  id: "bg-slide-link",
  name: "Background Slide-Up Link",
  fa: "لینک با پس‌زمینه بالارو",
  description: "A dark panel slides up behind the link, flipping its color.",
  faDescription: "با هاور پس‌زمینه از پایین بالا می‌آید و رنگ متن عوض می‌شود.",
  tags: ["link", "slide", "nav"],
  html: `<a class="sl-link"><span>Hover me</span></a>`,
  css: `.fx-bg-slide-link .sl-link {
  position: relative;
  display: inline-block;
  padding: 12px 28px;
  overflow: hidden;
  text-decoration: none;
  border: 1.5px solid rgba(251, 146, 60, 0.5);
  border-radius: 4px;
}
.fx-bg-slide-link .sl-link::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #fb923c;
  transform: translateY(101%);
  transition: transform 0.35s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-bg-slide-link .sl-link span {
  position: relative;
  z-index: 1;
  font-weight: 700;
  font-size: 15px;
  color: #fdba74;
  transition: color 0.3s ease 0.1s;
}
.fx-bg-slide-link .sl-link:hover::before {
  transform: translateY(0);
}
.fx-bg-slide-link .sl-link:hover span {
  color: #431407;
}`,
});

/* ---------------------------------------------------------- */
/* 18 — Icon nudge link                                       */
/* ---------------------------------------------------------- */
fx({
  id: "icon-nudge-link",
  name: "Icon Nudge Link",
  fa: "لینک با آیکون پرنده",
  description: "The arrow icon shoots forward on hover and snaps back into place.",
  faDescription: "با هاور فلش به جلو شلیک می‌شود و برمی‌گردد.",
  tags: ["link", "icon", "arrow"],
  html: `<a class="in-link">Read more <span class="in-arrow">&rarr;</span></a>`,
  css: `.fx-icon-nudge-link .in-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #67e8f9;
  text-decoration: none;
}
.fx-icon-nudge-link .in-arrow {
  display: inline-block;
  transition: transform 0.35s cubic-bezier(0.3, 1.6, 0.4, 1);
}
.fx-icon-nudge-link .in-link:hover .in-arrow {
  transform: translateX(8px);
}`,
});

/* ---------------------------------------------------------- */
/* 19 — Stagger menu drop                                     */
/* ---------------------------------------------------------- */
fx({
  id: "stagger-menu-drop",
  name: "Stagger Menu Drop",
  fa: "منوی پله‌ای",
  description: "Menu items rain in one by one on a loop, each with its own delay.",
  faDescription: "آیتم‌های منو پله‌پله از بالا می‌ریزند و حلقه تکرار می‌شود.",
  tags: ["menu", "stagger", "entrance"],
  interaction: "auto",
  html: `<nav class="sd-menu"><a>Home</a><a>Shop</a><a>Blog</a><a>Info</a></nav>`,
  css: `.fx-stagger-menu-drop .sd-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.fx-stagger-menu-drop .sd-menu a {
  width: fit-content;
  padding: 6px 14px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #d4d4d8;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  opacity: 0;
  animation: sd-drop 3.6s ease infinite;
}
.fx-stagger-menu-drop .sd-menu a:nth-child(2) { animation-delay: 0.15s; }
.fx-stagger-menu-drop .sd-menu a:nth-child(3) { animation-delay: 0.3s; }
.fx-stagger-menu-drop .sd-menu a:nth-child(4) { animation-delay: 0.45s; }
@keyframes sd-drop {
  0% { opacity: 0; transform: translateY(-18px); }
  12%, 80% { opacity: 1; transform: translateY(0); }
  95%, 100% { opacity: 0; transform: translateY(0); }
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Top bar drop                                          */
/* ---------------------------------------------------------- */
fx({
  id: "top-bar-link",
  name: "Top Bar Link",
  fa: "لینک با نوار بالا",
  description: "A thick bar drops down from the top edge of the link on hover.",
  faDescription: "با هاور نوار ضخیمی از لبه بالای لینک پایین می‌آید.",
  tags: ["link", "bar", "nav"],
  html: `<a class="tb-link">Hover me</a>`,
  css: `.fx-top-bar-link .tb-link {
  position: relative;
  display: inline-block;
  padding: 10px 22px;
  font-size: 16px;
  font-weight: 700;
  color: #d4d4d8;
  text-decoration: none;
  overflow: hidden;
}
.fx-top-bar-link .tb-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #2dd4bf;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}
.fx-top-bar-link .tb-link::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(45, 212, 191, 0.12);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease 0.1s;
}
.fx-top-bar-link .tb-link:hover::before {
  transform: translateY(0);
}
.fx-top-bar-link .tb-link:hover::after {
  transform: scaleY(1);
}`,
});

/* ---------------------------------------------------------- */
/* 21 — Vertical nav indent                                   */
/* ---------------------------------------------------------- */
fx({
  id: "vertical-indent-nav",
  name: "Vertical Indent Nav",
  fa: "منوی عمودی تودرتو",
  description: "Vertical menu items indent and gain a side bar when hovered.",
  faDescription: "آیتم‌های منوی عمودی با هاور تورفتگی می‌گیرند و نوار کناری پیدا می‌کنند.",
  tags: ["menu", "vertical", "nav"],
  html: `<nav class="vi-menu"><a>Dashboard</a><a>Projects</a><a>Reports</a></nav>`,
  css: `.fx-vertical-indent-nav .vi-menu {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 150px;
}
.fx-vertical-indent-nav .vi-menu a {
  position: relative;
  padding: 9px 14px;
  border-radius: 8px;
  color: #a1a1aa;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease, background 0.3s ease;
}
.fx-vertical-indent-nav .vi-menu a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 20%;
  bottom: 20%;
  width: 3px;
  border-radius: 999px;
  background: #2dd4bf;
  transform: scaleY(0);
  transition: transform 0.3s ease;
}
.fx-vertical-indent-nav .vi-menu a:hover {
  transform: translateX(8px);
  color: #5eead4;
  background: rgba(45, 212, 191, 0.08);
}
.fx-vertical-indent-nav .vi-menu a:hover::before {
  transform: scaleY(1);
}`,
});

/* ---------------------------------------------------------- */
/* 22 — Glow text link                                        */
/* ---------------------------------------------------------- */
fx({
  id: "neon-glow-nav-link",
  name: "Neon Glow Text Link",
  fa: "لینک درخشان",
  description: "The link text catches a neon glow on hover, like a light turning on.",
  faDescription: "با هاور متن لینک مثل لامپ روشن می‌شود و هاله نئونی می‌گیرد.",
  tags: ["link", "glow", "neon"],
  html: `<a class="gt-link">Glow up</a>`,
  css: `.fx-neon-glow-nav-link .gt-link {
  font-size: 18px;
  font-weight: 800;
  color: #86efac;
  text-decoration: none;
  transition: text-shadow 0.35s ease, color 0.35s ease;
}
.fx-neon-glow-nav-link .gt-link:hover {
  color: #bbf7d0;
  text-shadow: 0 0 10px rgba(134, 239, 172, 0.9), 0 0 30px rgba(134, 239, 172, 0.5);
}`,
});

/* ---------------------------------------------------------- */
/* 23 — Zig underline link                                    */
/* ---------------------------------------------------------- */
fx({
  id: "zig-underline-link",
  name: "Zigzag Underline Link",
  fa: "لینک زیرخط زیگزاگی",
  description: "A wavy underline squiggles in under the text on hover.",
  faDescription: "با هاور یک زیرخط موج‌دار زیر متن پیچ می‌خورد.",
  tags: ["link", "underline", "wavy"],
  html: `<a class="zu-link">Wavy link</a>`,
  css: `.fx-zig-underline-link .zu-link {
  font-size: 16px;
  font-weight: 700;
  color: #f0abfc;
  text-decoration: none;
  padding-bottom: 6px;
  background: linear-gradient(135deg, #e879f9 3px, transparent 3px) repeat-x 0 100% / 9px 4px;
  background-image: repeating-linear-gradient(-45deg, #e879f9 0 2px, transparent 2px 5px);
  background-size: 12px 100%;
  background-repeat: repeat-x;
  background-position: 0 100%;
  transition: background-position 0.45s ease;
}
.fx-zig-underline-link .zu-link:hover {
  background-position: 24px 100%;
}`,
});

/* ---------------------------------------------------------- */
/* 24 — Flip label nav button                                 */
/* ---------------------------------------------------------- */
fx({
  id: "flip-label-nav",
  name: "Flip Label Button",
  fa: "دکمه لیبل برمی‌گردان",
  description: "The button label flips up like a split-flap display on hover.",
  faDescription: "با هاور لیبل دکمه مثل تابلوی جداشونده برمی‌گردد.",
  tags: ["button", "flip", "nav"],
  html: `<button class="fl-btn" type="button"><span class="fl-inner"><span class="fl-face fl-front">Menu</span><span class="fl-face fl-back">Open</span></span></button>`,
  css: `.fx-flip-label-nav .fl-btn {
  padding: 0;
  border: 1.5px solid rgba(250, 204, 21, 0.45);
  border-radius: 10px;
  background: rgba(250, 204, 21, 0.06);
  cursor: pointer;
  overflow: hidden;
}
.fx-flip-label-nav .fl-inner {
  position: relative;
  display: block;
  width: 110px;
  height: 42px;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.3, 1.2, 0.4, 1);
}
.fx-flip-label-nav .fl-btn:hover .fl-inner {
  transform: rotateX(90deg);
}
.fx-flip-label-nav .fl-face {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.fx-flip-label-nav .fl-front {
  color: #fde047;
}
.fx-flip-label-nav .fl-back {
  transform: rotateX(-90deg) translateY(-50%) translateY(21px);
  color: #a3e635;
}`,
});
