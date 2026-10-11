import type { CssEffect } from "../types";

export const navEffectsPlus: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  navEffectsPlus.push({ category: "nav", interaction: "hover", ...e } as CssEffect);
}

/* 1 — burger morphs to an X with springy overshoot */
fx({
  id: "nq-hamburger-morph-spring",
  name: "Springy Burger to X",
  fa: "برگر فنری به ضربدر",
  description: "The three bars snap into an X with a rubber-band overshoot easing.",
  faDescription: "سه میله با حرکت فنری و نوسان اضافه به ضربدر تبدیل می‌شوند.",
  tags: ["hamburger", "morph", "spring", "menu"],
  html: `<button class="hms-b" aria-label="منو"><i class="hms-b1"></i><i class="hms-b2"></i><i class="hms-b3"></i></button>`,
  css: `.fx-nq-hamburger-morph-spring .hms-b {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 11px 10px;
  background: #1b1433;
  border: 1px solid rgba(233, 213, 255, 0.25);
  border-radius: 12px;
  cursor: pointer;
}
.fx-nq-hamburger-morph-spring .hms-b i {
  display: block;
  width: 26px;
  height: 3px;
  border-radius: 3px;
  background: #e9d5ff;
  transition: transform 0.55s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.3s ease;
}
.fx-nq-hamburger-morph-spring .hms-b:hover .hms-b1 {
  transform: translateY(8px) rotate(45deg);
}
.fx-nq-hamburger-morph-spring .hms-b:hover .hms-b2 {
  transform: scaleX(0);
  opacity: 0;
}
.fx-nq-hamburger-morph-spring .hms-b:hover .hms-b3 {
  transform: translateY(-8px) rotate(-45deg);
}`,
});

/* 2 — bars rotate and fade into a spinning center line */
fx({
  id: "nq-hamburger-morph-rotate",
  name: "Rotating Burger Collapse",
  fa: "برگر چرخان فروپاشو",
  description: "The outer bars rotate 180° while fading away and the middle bar spins into a thicker line.",
  faDescription: "میله‌های بیرونی ۱۸۰ درجه می‌چرخند و محو می‌شوند و میله وسط به خط کلفت‌تری تبدیل می‌شود.",
  tags: ["hamburger", "rotate", "fade", "menu"],
  html: `<button class="hmr-b" aria-label="منو"><i class="hmr-b1"></i><i class="hmr-b2"></i><i class="hmr-b3"></i></button>`,
  css: `.fx-nq-hamburger-morph-rotate .hmr-b {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 11px 10px;
  background: #161129;
  border: 1px solid rgba(103, 232, 249, 0.25);
  border-radius: 12px;
  cursor: pointer;
}
.fx-nq-hamburger-morph-rotate .hmr-b i {
  display: block;
  width: 26px;
  height: 3px;
  border-radius: 3px;
  background: #a5f3fc;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease, background 0.4s ease;
}
.fx-nq-hamburger-morph-rotate .hmr-b:hover .hmr-b1 {
  transform: translateY(8px) rotate(180deg);
  opacity: 0;
}
.fx-nq-hamburger-morph-rotate .hmr-b:hover .hmr-b2 {
  transform: rotate(360deg) scaleX(1.3);
  background: #22d3ee;
}
.fx-nq-hamburger-morph-rotate .hmr-b:hover .hmr-b3 {
  transform: translateY(-8px) rotate(-180deg);
  opacity: 0;
}`,
});

/* 3 — a pill indicator loops across the nav items */
fx({
  id: "nq-pill-indicator-slide",
  name: "Sliding Pill Indicator",
  fa: "نشانگر قرصی لغزان",
  description: "A glowing pill glides from item to item across the navbar on an endless loop.",
  faDescription: "قرصی درخشان در نوار ناوبری بی‌پایان از آیتمی به آیتم دیگر سُر می‌خورد.",
  tags: ["indicator", "pill", "auto", "navbar"],
  interaction: "auto",
  html: `<nav class="pis-nav"><i class="pis-pill"></i><a class="pis-it">خانه</a><a class="pis-it">محصولات</a><a class="pis-it">بلاگ</a><a class="pis-it">تماس</a></nav>`,
  css: `.fx-nq-pill-indicator-slide .pis-nav {
  position: relative;
  display: flex;
  padding: 6px;
  background: #191233;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 999px;
}
.fx-nq-pill-indicator-slide .pis-it {
  position: relative;
  z-index: 1;
  width: 60px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  color: #a5b0d0;
  text-decoration: none;
  cursor: pointer;
}
.fx-nq-pill-indicator-slide .pis-pill {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 60px;
  height: calc(100% - 12px);
  border-radius: 999px;
  background: linear-gradient(120deg, rgba(217, 70, 239, 0.85), rgba(139, 92, 246, 0.85));
  box-shadow: 0 0 14px rgba(217, 70, 239, 0.45);
  animation: nq-pis-run 10s ease-in-out infinite;
}
@keyframes nq-pis-run {
  0%, 16% { transform: translateX(0); }
  24%, 41% { transform: translateX(-60px); }
  49%, 66% { transform: translateX(-120px); }
  74%, 91% { transform: translateX(-180px); }
  100% { transform: translateX(0); }
}`,
});

/* 4 — an underline chases between neighboring items */
fx({
  id: "nq-underline-slide-nav",
  name: "Chasing Underline Nav",
  fa: "زیرخط تعقیب‌گر",
  description: "Each item's underline exits toward the neighbor while the neighbor's enters from it, faking one shared sliding line.",
  faDescription: "زیرخط هر آیتم به سمت همسایه خارج و زیرخط همسایه از همان‌جا وارد می‌شود؛ خط مشترک لغزان را شبیه‌سازی می‌کند.",
  tags: ["underline", "slide", "navbar", "hover"],
  html: `<nav class="uln-nav"><a class="uln-it">خانه</a><a class="uln-it">افکت‌ها</a><a class="uln-it">ابزارها</a><a class="uln-it">درباره</a></nav>`,
  css: `.fx-nq-underline-slide-nav .uln-nav {
  display: flex;
  gap: 22px;
  padding: 12px 18px;
  background: #141024;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 10px;
}
.fx-nq-underline-slide-nav .uln-it {
  position: relative;
  font-size: 15px;
  font-weight: 700;
  color: #cbd5e1;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 6px;
  transition: color 0.3s ease;
}
.fx-nq-underline-slide-nav .uln-it::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: #f0abfc;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}
.fx-nq-underline-slide-nav .uln-it:hover {
  color: #f5d0fe;
}
.fx-nq-underline-slide-nav .uln-it:hover::after {
  transform: scaleX(1);
  transform-origin: right;
}`,
});

/* 5 — a dot blooms under the hovered item */
fx({
  id: "nq-circle-dot-indicator",
  name: "Bloom Dot Indicator",
  fa: "نقطه شکفته",
  description: "A small dot blooms under the hovered item with a soft halo ring around it.",
  faDescription: "زیر آیتمِ هاورشده نقطه‌ای با هاله نرم شکفته می‌شود.",
  tags: ["dot", "indicator", "navbar", "hover"],
  html: `<nav class="cdi-nav"><a class="cdi-it">خانه</a><a class="cdi-it">گالری</a><a class="cdi-it">خدمات</a><a class="cdi-it">تماس</a></nav>`,
  css: `.fx-nq-circle-dot-indicator .cdi-nav {
  display: flex;
  gap: 24px;
  padding: 12px 20px;
  background: #141024;
  border-radius: 10px;
  border: 1px solid rgba(148, 163, 184, 0.18);
}
.fx-nq-circle-dot-indicator .cdi-it {
  position: relative;
  font-size: 15px;
  font-weight: 700;
  color: #94a3b8;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 10px;
  transition: color 0.3s ease, transform 0.3s ease;
}
.fx-nq-circle-dot-indicator .cdi-it::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34d399;
  transform: translateX(-50%) scale(0);
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.35);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}
.fx-nq-circle-dot-indicator .cdi-it:hover {
  color: #d1fae5;
  transform: translateY(-1px);
}
.fx-nq-circle-dot-indicator .cdi-it:hover::before {
  transform: translateX(-50%) scale(1);
  box-shadow: 0 0 0 5px rgba(52, 211, 153, 0.16);
}`,
});

/* 6 — vertical icon rail with popping label chips */
fx({
  id: "nq-sidebar-icon-rail",
  name: "Sidebar Icon Rail",
  fa: "ریل آیکونی کنار",
  description: "A slim vertical icon rail; hovering an icon pops out a label chip beside it.",
  faDescription: "ریل باریک عمودی آیکون‌ها؛ با هاور روی هر آیکون، برچسبی کنارش باز می‌شود.",
  tags: ["sidebar", "rail", "icons", "tooltip"],
  html: `<nav class="sir-rail"><span class="sir-it"><span class="sir-ic">⌂</span><span class="sir-tip">خانه</span></span><span class="sir-it"><span class="sir-ic">✉</span><span class="sir-tip">پیام‌ها</span></span><span class="sir-it"><span class="sir-ic">⚙</span><span class="sir-tip">تنظیمات</span></span><span class="sir-it"><span class="sir-ic">☰</span><span class="sir-tip">منو</span></span></nav>`,
  css: `.fx-nq-sidebar-icon-rail .sir-rail {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background: #171129;
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 14px;
}
.fx-nq-sidebar-icon-rail .sir-it {
  position: relative;
  display: grid;
  place-items: center;
}
.fx-nq-sidebar-icon-rail .sir-ic {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: #241a3f;
  color: #c4b5fd;
  font-size: 17px;
  cursor: pointer;
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}
.fx-nq-sidebar-icon-rail .sir-tip {
  position: absolute;
  right: calc(100% + 10px);
  top: 50%;
  padding: 5px 13px;
  border-radius: 8px;
  background: linear-gradient(120deg, #7c3aed, #a855f7);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(-50%) translateX(-7px) scale(0.85);
  transform-origin: right center;
  transition: opacity 0.25s ease, transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
}
.fx-nq-sidebar-icon-rail .sir-it:hover .sir-ic {
  transform: scale(1.1);
  background: #3b2b63;
  box-shadow: 0 0 16px rgba(167, 139, 250, 0.4);
}
.fx-nq-sidebar-icon-rail .sir-it:hover .sir-tip {
  opacity: 1;
  transform: translateY(-50%) translateX(0) scale(1);
}`,
});

/* 7 — breadcrumbs lift and their separator arrow nudges */
fx({
  id: "nq-breadcrumb-slide",
  name: "Breadcrumb Lift & Nudge",
  fa: "بردکرامم بلندشونده",
  description: "Hovered crumbs lift off the baseline and the chevron after them nudges forward.",
  faDescription: "بردکراممِ هاورشده از خط پایه بلند می‌شود و جداکننده بعدش رو به جلو هُل می‌خورد.",
  tags: ["breadcrumb", "lift", "arrow", "hover"],
  html: `<nav class="bcr-path"><a class="bcr-c">خانه</a><span class="bcr-sep">‹</span><a class="bcr-c">فروشگاه</a><span class="bcr-sep">‹</span><a class="bcr-c bcr-on">پیراهن</a></nav>`,
  css: `.fx-nq-breadcrumb-slide .bcr-path {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 18px;
  background: #141024;
  border-radius: 10px;
  border: 1px solid rgba(148, 163, 184, 0.18);
}
.fx-nq-breadcrumb-slide .bcr-c {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  color: #94a3b8;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.25s ease, color 0.25s ease;
}
.fx-nq-breadcrumb-slide .bcr-on {
  color: #fbbf24;
  cursor: default;
}
.fx-nq-breadcrumb-slide .bcr-sep {
  color: #475569;
  font-size: 14px;
  transition: transform 0.25s ease, color 0.25s ease;
}
.fx-nq-breadcrumb-slide .bcr-c:hover {
  transform: translateY(-3px);
  color: #fbbf24;
}
.fx-nq-breadcrumb-slide .bcr-c:hover + .bcr-sep {
  transform: translateX(-4px);
  color: #fbbf24;
}`,
});

/* 8 — outlined tab icons auto-fill as the active tab cycles */
fx({
  id: "nq-tab-icon-fill",
  name: "Auto-Fill Icon Tabs",
  fa: "تب‌های آیکون‌پرکن",
  description: "Three outlined tab icons fill one by one as an automatic active-state cycles through them.",
  faDescription: "سه آیکون توخالی تب‌ها یکی‌یکی پر می‌شوند؛ حالت فعال به‌صورت خودکار میان‌شان می‌چرخد.",
  tags: ["tabs", "icons", "auto", "cycle"],
  interaction: "auto",
  html: `<div class="tif-tabs"><span class="tif-tab"><span class="tif-ic"><i class="tif-dot"></i></span><span class="tif-lb">موسیقی</span></span><span class="tif-tab"><span class="tif-ic"><i class="tif-dot"></i></span><span class="tif-lb">فیلم</span></span><span class="tif-tab"><span class="tif-ic"><i class="tif-dot"></i></span><span class="tif-lb">کتاب</span></span></div>`,
  css: `.fx-nq-tab-icon-fill .tif-tabs {
  display: flex;
  gap: 12px;
  padding: 12px 16px;
  background: #141024;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 14px;
}
.fx-nq-tab-icon-fill .tif-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  width: 62px;
  cursor: pointer;
}
.fx-nq-tab-icon-fill .tif-ic {
  position: relative;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #3b4a7a;
}
.fx-nq-tab-icon-fill .tif-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(circle, #7dd3fc 30%, #0ea5e9);
  transform: scale(0);
}
.fx-nq-tab-icon-fill .tif-lb {
  font-size: 12px;
  font-weight: 700;
  color: #8b93b8;
}
.fx-nq-tab-icon-fill .tif-tab:nth-child(1) .tif-dot { animation: nq-tif-d1 7.5s ease-in-out infinite; }
.fx-nq-tab-icon-fill .tif-tab:nth-child(1) .tif-lb { animation: nq-tif-l1 7.5s ease-in-out infinite; }
.fx-nq-tab-icon-fill .tif-tab:nth-child(2) .tif-dot { animation: nq-tif-d2 7.5s ease-in-out infinite; }
.fx-nq-tab-icon-fill .tif-tab:nth-child(2) .tif-lb { animation: nq-tif-l2 7.5s ease-in-out infinite; }
.fx-nq-tab-icon-fill .tif-tab:nth-child(3) .tif-dot { animation: nq-tif-d3 7.5s ease-in-out infinite; }
.fx-nq-tab-icon-fill .tif-tab:nth-child(3) .tif-lb { animation: nq-tif-l3 7.5s ease-in-out infinite; }
@keyframes nq-tif-d1 {
  0% { transform: scale(0); }
  3%, 29% { transform: scale(1); }
  35%, 100% { transform: scale(0); }
}
@keyframes nq-tif-d2 {
  0%, 33% { transform: scale(0); }
  39%, 62% { transform: scale(1); }
  68%, 100% { transform: scale(0); }
}
@keyframes nq-tif-d3 {
  0%, 66% { transform: scale(0); }
  71%, 93% { transform: scale(1); }
  100% { transform: scale(0); }
}
@keyframes nq-tif-l1 {
  0% { color: #8b93b8; text-shadow: none; }
  3%, 29% { color: #7dd3fc; text-shadow: 0 0 10px rgba(125, 211, 252, 0.55); }
  35%, 100% { color: #8b93b8; text-shadow: none; }
}
@keyframes nq-tif-l2 {
  0%, 33% { color: #8b93b8; text-shadow: none; }
  39%, 62% { color: #7dd3fc; text-shadow: 0 0 10px rgba(125, 211, 252, 0.55); }
  68%, 100% { color: #8b93b8; text-shadow: none; }
}
@keyframes nq-tif-l3 {
  0%, 66% { color: #8b93b8; text-shadow: none; }
  71%, 93% { color: #7dd3fc; text-shadow: 0 0 10px rgba(125, 211, 252, 0.55); }
  100% { color: #8b93b8; text-shadow: none; }
}`,
});

/* 9 — bottom bar items bubble up in an auto cycle */
fx({
  id: "nq-bottom-nav-bubble",
  name: "Bubbling Bottom Nav",
  fa: "نوار پایین حباب‌دار",
  description: "A bubble lifts each bottom-bar icon up in turn as the active slot auto-cycles.",
  faDescription: "حباب، آیکون‌های نوار پایین را نوبتی بالا می‌برد؛ اسلات فعال خودکار می‌چرخد.",
  tags: ["bottom-nav", "bubble", "auto", "mobile"],
  interaction: "auto",
  html: `<nav class="bnb-bar"><span class="bnb-it"><i class="bnb-bub"></i><span class="bnb-ic">⌂</span><span class="bnb-lb">خانه</span></span><span class="bnb-it"><i class="bnb-bub"></i><span class="bnb-ic">✉</span><span class="bnb-lb">پیام</span></span><span class="bnb-it"><i class="bnb-bub"></i><span class="bnb-ic">⚙</span><span class="bnb-lb">تنظیم</span></span><span class="bnb-it"><i class="bnb-bub"></i><span class="bnb-ic">☰</span><span class="bnb-lb">بیشتر</span></span></nav>`,
  css: `.fx-nq-bottom-nav-bubble .bnb-bar {
  display: flex;
  gap: 8px;
  padding: 9px 14px;
  background: #14102a;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 16px;
}
.fx-nq-bottom-nav-bubble .bnb-it {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  width: 54px;
}
.fx-nq-bottom-nav-bubble .bnb-bub {
  position: absolute;
  top: -5px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(160deg, rgba(217, 70, 239, 0.4), rgba(139, 92, 246, 0.15));
  opacity: 0;
}
.fx-nq-bottom-nav-bubble .bnb-ic {
  font-size: 17px;
  color: #7c7ca0;
}
.fx-nq-bottom-nav-bubble .bnb-lb {
  font-size: 10px;
  font-weight: 700;
  color: #7c7ca0;
}
.fx-nq-bottom-nav-bubble .bnb-it:nth-child(1) .bnb-bub { animation: nq-bnb-b1 10s ease-in-out infinite; }
.fx-nq-bottom-nav-bubble .bnb-it:nth-child(1) .bnb-ic { animation: nq-bnb-i1 10s ease-in-out infinite; }
.fx-nq-bottom-nav-bubble .bnb-it:nth-child(2) .bnb-bub { animation: nq-bnb-b2 10s ease-in-out infinite; }
.fx-nq-bottom-nav-bubble .bnb-it:nth-child(2) .bnb-ic { animation: nq-bnb-i2 10s ease-in-out infinite; }
.fx-nq-bottom-nav-bubble .bnb-it:nth-child(3) .bnb-bub { animation: nq-bnb-b3 10s ease-in-out infinite; }
.fx-nq-bottom-nav-bubble .bnb-it:nth-child(3) .bnb-ic { animation: nq-bnb-i3 10s ease-in-out infinite; }
.fx-nq-bottom-nav-bubble .bnb-it:nth-child(4) .bnb-bub { animation: nq-bnb-b4 10s ease-in-out infinite; }
.fx-nq-bottom-nav-bubble .bnb-it:nth-child(4) .bnb-ic { animation: nq-bnb-i4 10s ease-in-out infinite; }
@keyframes nq-bnb-b1 {
  0% { opacity: 0; transform: translateY(8px) scale(0.4); }
  2%, 20% { opacity: 1; transform: translateY(-2px) scale(1); }
  27%, 100% { opacity: 0; transform: translateY(8px) scale(0.4); }
}
@keyframes nq-bnb-i1 {
  0% { transform: translateY(0); }
  2%, 20% { transform: translateY(-5px); }
  27%, 100% { transform: translateY(0); }
}
@keyframes nq-bnb-b2 {
  0%, 25% { opacity: 0; transform: translateY(8px) scale(0.4); }
  27%, 45% { opacity: 1; transform: translateY(-2px) scale(1); }
  52%, 100% { opacity: 0; transform: translateY(8px) scale(0.4); }
}
@keyframes nq-bnb-i2 {
  0%, 25% { transform: translateY(0); }
  27%, 45% { transform: translateY(-5px); }
  52%, 100% { transform: translateY(0); }
}
@keyframes nq-bnb-b3 {
  0%, 50% { opacity: 0; transform: translateY(8px) scale(0.4); }
  52%, 70% { opacity: 1; transform: translateY(-2px) scale(1); }
  77%, 100% { opacity: 0; transform: translateY(8px) scale(0.4); }
}
@keyframes nq-bnb-i3 {
  0%, 50% { transform: translateY(0); }
  52%, 70% { transform: translateY(-5px); }
  77%, 100% { transform: translateY(0); }
}
@keyframes nq-bnb-b4 {
  0%, 75% { opacity: 0; transform: translateY(8px) scale(0.4); }
  77%, 95% { opacity: 1; transform: translateY(-2px) scale(1); }
  100% { opacity: 0; transform: translateY(8px) scale(0.4); }
}
@keyframes nq-bnb-i4 {
  0%, 75% { transform: translateY(0); }
  77%, 95% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}`,
});

/* 10 — burger hover reveals menu chips in a circular pop */
fx({
  id: "nq-menu-circle-reveal",
  name: "Circular Menu Reveal",
  fa: "منوی رونمایی دایره‌ای",
  description: "Hovering the burger makes menu chips pop in one by one, each unfolding from a tiny rotated circle.",
  faDescription: "با هاور روی برگر، چیپ‌های منو یکی‌یکی از دایره‌های کوچکِ چرخیده باز می‌شوند.",
  tags: ["menu", "reveal", "stagger", "burger"],
  html: `<div class="mcr-wrap"><button class="mcr-bg" aria-label="منو"><i></i><i></i><i></i></button><nav class="mcr-menu"><a class="mcr-it">خانه</a><a class="mcr-it">درباره</a><a class="mcr-it">خدمات</a><a class="mcr-it">تماس</a></nav></div>`,
  css: `.fx-nq-menu-circle-reveal .mcr-wrap {
  position: relative;
  display: inline-block;
}
.fx-nq-menu-circle-reveal .mcr-bg {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 9px;
  background: #1b1433;
  border: 1px solid rgba(240, 171, 252, 0.3);
  border-radius: 11px;
  cursor: pointer;
}
.fx-nq-menu-circle-reveal .mcr-bg i {
  width: 22px;
  height: 3px;
  border-radius: 3px;
  background: #f0abfc;
  transition: background 0.3s ease;
}
.fx-nq-menu-circle-reveal .mcr-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 110px;
}
.fx-nq-menu-circle-reveal .mcr-it {
  padding: 7px 14px;
  border-radius: 999px;
  background: linear-gradient(120deg, rgba(217, 70, 239, 0.25), rgba(139, 92, 246, 0.25));
  border: 1px solid rgba(240, 171, 252, 0.35);
  color: #f5d0fe;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  opacity: 0;
  transform: scale(0.2) rotate(-30deg);
  transition: opacity 0.3s ease, transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-nq-menu-circle-reveal .mcr-it:nth-child(2) { transition-delay: 0.07s; }
.fx-nq-menu-circle-reveal .mcr-it:nth-child(3) { transition-delay: 0.14s; }
.fx-nq-menu-circle-reveal .mcr-it:nth-child(4) { transition-delay: 0.21s; }
.fx-nq-menu-circle-reveal .mcr-it:hover {
  background: linear-gradient(120deg, rgba(217, 70, 239, 0.55), rgba(139, 92, 246, 0.55));
}
.fx-nq-menu-circle-reveal .mcr-wrap:hover .mcr-bg i {
  background: #67e8f9;
}
.fx-nq-menu-circle-reveal .mcr-wrap:hover .mcr-it {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}`,
});

/* 11 — menu items fly in along a diagonal with a blur */
fx({
  id: "nq-diagonal-menu-slide",
  name: "Diagonal Menu Slide",
  fa: "منوی سُر مورب",
  description: "Menu rows slide in along a diagonal while un-blurring, staggered row by row.",
  faDescription: "ردیف‌های منو به‌صورت مورب سُر می‌خورند و از تاری خارج می‌شوند؛ ردیف‌به‌ردیف.",
  tags: ["menu", "diagonal", "slide", "stagger"],
  html: `<div class="dmg-wrap"><button class="dmg-bg" aria-label="منو"><i></i><i></i><i></i></button><nav class="dmg-menu"><a class="dmg-it">پروفایل</a><a class="dmg-it">ذخیره‌شده‌ها</a><a class="dmg-it">خروج</a></nav></div>`,
  css: `.fx-nq-diagonal-menu-slide .dmg-wrap {
  position: relative;
  display: inline-block;
}
.fx-nq-diagonal-menu-slide .dmg-bg {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 9px;
  background: #161129;
  border: 1px solid rgba(103, 232, 249, 0.3);
  border-radius: 11px;
  cursor: pointer;
}
.fx-nq-diagonal-menu-slide .dmg-bg i {
  width: 22px;
  height: 3px;
  border-radius: 3px;
  background: #67e8f9;
}
.fx-nq-diagonal-menu-slide .dmg-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  display: flex;
  flex-direction: column;
  min-width: 130px;
  padding: 6px;
  background: #1b1433;
  border: 1px solid rgba(103, 232, 249, 0.25);
  border-radius: 12px;
}
.fx-nq-diagonal-menu-slide .dmg-it {
  padding: 8px 13px;
  border-radius: 8px;
  color: #cbd5e1;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  opacity: 0;
  transform: translate(-16px, -16px);
  filter: blur(3px);
  transition: opacity 0.32s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), filter 0.32s ease, background 0.25s ease;
}
.fx-nq-diagonal-menu-slide .dmg-it:nth-child(2) { transition-delay: 0.08s; }
.fx-nq-diagonal-menu-slide .dmg-it:nth-child(3) { transition-delay: 0.16s; }
.fx-nq-diagonal-menu-slide .dmg-it:hover {
  background: rgba(103, 232, 249, 0.12);
  color: #a5f3fc;
}
.fx-nq-diagonal-menu-slide .dmg-wrap:hover .dmg-it {
  opacity: 1;
  transform: translate(0, 0);
  filter: blur(0);
}`,
});

/* 12 — menu letters cascade in letter by letter */
fx({
  id: "nq-letter-stagger-menu",
  name: "Letter Cascade Menu",
  fa: "منوی آبشاری حروف",
  description: "Hovering the menu makes each word cascade in letter by letter like falling dominoes.",
  faDescription: "با هاور روی منو، هر کلمه حرف‌به‌حرف مثل دومینوهای در حال ریختن آبشار می‌شود.",
  tags: ["letters", "stagger", "menu", "cascade"],
  html: `<nav class="lts-menu"><span class="lts-it"><b>H</b><b>O</b><b>M</b><b>E</b></span><span class="lts-it"><b>W</b><b>O</b><b>R</b><b>K</b></span><span class="lts-it"><b>N</b><b>E</b><b>W</b><b>S</b></span></nav>`,
  css: `.fx-nq-letter-stagger-menu .lts-menu {
  display: flex;
  gap: 20px;
  padding: 12px 18px;
  background: #141024;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 10px;
}
.fx-nq-letter-stagger-menu .lts-it {
  position: relative;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #fda4af;
  cursor: pointer;
  padding-bottom: 5px;
  border-bottom: 2px solid rgba(253, 164, 175, 0.3);
}
.fx-nq-letter-stagger-menu .lts-it b {
  display: inline-block;
  opacity: 0;
  transform: translateY(9px);
  transition: opacity 0.28s ease, transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), color 0.25s ease;
}
.fx-nq-letter-stagger-menu .lts-it:nth-child(1) b:nth-child(1) { transition-delay: 0.02s; }
.fx-nq-letter-stagger-menu .lts-it:nth-child(1) b:nth-child(2) { transition-delay: 0.07s; }
.fx-nq-letter-stagger-menu .lts-it:nth-child(1) b:nth-child(3) { transition-delay: 0.12s; }
.fx-nq-letter-stagger-menu .lts-it:nth-child(1) b:nth-child(4) { transition-delay: 0.17s; }
.fx-nq-letter-stagger-menu .lts-it:nth-child(2) b:nth-child(1) { transition-delay: 0.12s; }
.fx-nq-letter-stagger-menu .lts-it:nth-child(2) b:nth-child(2) { transition-delay: 0.17s; }
.fx-nq-letter-stagger-menu .lts-it:nth-child(2) b:nth-child(3) { transition-delay: 0.22s; }
.fx-nq-letter-stagger-menu .lts-it:nth-child(2) b:nth-child(4) { transition-delay: 0.27s; }
.fx-nq-letter-stagger-menu .lts-it:nth-child(3) b:nth-child(1) { transition-delay: 0.22s; }
.fx-nq-letter-stagger-menu .lts-it:nth-child(3) b:nth-child(2) { transition-delay: 0.27s; }
.fx-nq-letter-stagger-menu .lts-it:nth-child(3) b:nth-child(3) { transition-delay: 0.32s; }
.fx-nq-letter-stagger-menu .lts-it:nth-child(3) b:nth-child(4) { transition-delay: 0.37s; }
.fx-nq-letter-stagger-menu .lts-menu:hover .lts-it b {
  opacity: 1;
  transform: translateY(0);
}
.fx-nq-letter-stagger-menu .lts-it:hover {
  color: #fecdd3;
  border-bottom-color: #fb7185;
}`,
});

/* 13 — frosted glass navbar with a sliding highlight */
fx({
  id: "nq-glass-pill-nav",
  name: "Glass Pill Navbar",
  fa: "نوار شیشه‌ای قرصی",
  description: "A frosted-glass navbar blurs the colorful backdrop; a glassy highlight slides under the hovered item.",
  faDescription: "نوار ناوبری مات شیشه‌ای پس‌زمینه رنگی را تار می‌کند و هایلایت شیشه‌ای زیر آیتم هاور می‌لغزد.",
  tags: ["glass", "blur", "navbar", "frosted"],
  previewBg: "radial-gradient(circle at 25% 30%, rgba(217,70,239,0.55), transparent 45%), radial-gradient(circle at 75% 75%, rgba(34,211,238,0.45), transparent 50%), radial-gradient(circle at 60% 15%, rgba(251,191,36,0.3), transparent 40%), #170f2e",
  html: `<nav class="gpn-nav"><a class="gpn-it">خانه</a><a class="gpn-it">فروشگاه</a><a class="gpn-it">بلاگ</a><a class="gpn-it">تماس</a></nav>`,
  css: `.fx-nq-glass-pill-nav .gpn-nav {
  display: flex;
  gap: 4px;
  padding: 6px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.fx-nq-glass-pill-nav .gpn-it {
  position: relative;
  padding: 8px 17px;
  border-radius: 999px;
  color: #cbd5e1;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}
.fx-nq-glass-pill-nav .gpn-it::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.06));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
  opacity: 0;
  transform: translateY(5px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: -1;
}
.fx-nq-glass-pill-nav .gpn-it:hover {
  color: #fff;
  text-shadow: 0 0 12px rgba(255, 255, 255, 0.45);
}
.fx-nq-glass-pill-nav .gpn-it:hover::before {
  opacity: 1;
  transform: translateY(0);
}`,
});

/* 14 — nav items ignite with an electric flicker */
fx({
  id: "nq-neon-glow-nav-items",
  name: "Igniting Neon Nav",
  fa: "نوار نئون شعله‌ور",
  description: "Hovered items ignite with a stepped electric flicker, then settle into a cyan neon with a glowing underline.",
  faDescription: "آیتمِ هاورشده با سوسوی پله‌ای برقی روشن می‌شود و بعد در نئون فیروزه‌ای با زیرخط درخشان می‌نشیند.",
  tags: ["neon", "glow", "flicker", "navbar"],
  previewBg: "radial-gradient(circle at 50% 45%, rgba(34,211,238,0.12), transparent 60%), #0a0714",
  html: `<nav class="ngn-nav"><a class="ngn-it">خانه</a><a class="ngn-it">افکت‌ها</a><a class="ngn-it">ابزارها</a><a class="ngn-it">تماس</a></nav>`,
  css: `.fx-nq-neon-glow-nav-items .ngn-nav {
  display: flex;
  gap: 22px;
  padding: 13px 22px;
  background: #0d0a1c;
  border: 1px solid #2a1f4d;
  border-radius: 12px;
}
.fx-nq-neon-glow-nav-items .ngn-it {
  position: relative;
  font-size: 15px;
  font-weight: 700;
  color: #8b93b8;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 6px;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}
.fx-nq-neon-glow-nav-items .ngn-it::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #67e8f9;
  box-shadow: 0 0 8px #22d3ee;
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform 0.3s ease 0.35s;
}
.fx-nq-neon-glow-nav-items .ngn-it:hover {
  color: #a5f3fc;
  text-shadow: 0 0 6px rgba(103, 232, 249, 0.9), 0 0 18px rgba(34, 211, 238, 0.5);
  animation: nq-ngn-flicker 0.55s steps(1, end);
}
.fx-nq-neon-glow-nav-items .ngn-it:hover::after {
  transform: scaleX(1);
}
@keyframes nq-ngn-flicker {
  0% { opacity: 0.3; }
  22% { opacity: 1; }
  36% { opacity: 0.25; }
  54% { opacity: 1; }
  66% { opacity: 0.4; }
  100% { opacity: 1; }
}`,
});

/* 15 — the navbar frame is an animated gradient border */
fx({
  id: "nq-gradient-border-nav",
  name: "Gradient Border Navbar",
  fa: "نوار با حاشیه گرادیانی",
  description: "The navbar's border is a live gradient that endlessly flows around the frame.",
  faDescription: "حاشیه نوار ناوبری گرادیانی زنده است که بی‌پایان دور قاب جریان دارد.",
  tags: ["gradient", "border", "navbar", "animated"],
  interaction: "auto",
  html: `<nav class="gbn-nav"><a class="gbn-it">خانه</a><a class="gbn-it">افکت‌ها</a><a class="gbn-it">ابزارها</a></nav>`,
  css: `.fx-nq-gradient-border-nav .gbn-nav {
  display: inline-flex;
  gap: 6px;
  padding: 8px 10px;
  border: 3px solid transparent;
  border-radius: 16px;
  background: linear-gradient(#141024, #141024) padding-box, linear-gradient(90deg, #d946ef, #22d3ee, #fbbf24, #d946ef) border-box;
  background-size: 100% 100%, 300% 100%;
  animation: nq-gbn-pan 4.5s linear infinite;
}
.fx-nq-gradient-border-nav .gbn-it {
  padding: 8px 18px;
  border-radius: 10px;
  color: #cbd5e1;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
}
.fx-nq-gradient-border-nav .gbn-it:hover {
  background: rgba(217, 70, 239, 0.16);
  color: #fff;
}
@keyframes nq-gbn-pan {
  from { background-position: 0 0, 0% 0; }
  to { background-position: 0 0, 150% 0; }
}`,
});

/* 16 — mac-style dock with magnifying neighbors */
fx({
  id: "nq-floating-dock-magnify",
  name: "Magnifying Floating Dock",
  fa: "داک شناور ذره‌بینی",
  description: "A floating dock: the hovered icon magnifies and its two neighbors half-magnify via sibling selectors.",
  faDescription: "داک شناور: آیکون هاورشده بزرگ می‌شود و دو همسایه‌اش با سلکتورهای برادر نیمه‌بزرگ می‌شوند.",
  tags: ["dock", "magnify", "mac", "hover"],
  previewBg: "radial-gradient(circle at 50% 85%, rgba(56,189,248,0.18), transparent 55%), #0d0a1c",
  html: `<div class="fdm-dock"><span class="fdm-ic">⌂</span><span class="fdm-ic">✉</span><span class="fdm-ic">📷</span><span class="fdm-ic">⚙</span><span class="fdm-ic">✎</span></div>`,
  css: `.fx-nq-floating-dock-magnify .fdm-dock {
  display: flex;
  align-items: flex-end;
  gap: 9px;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 16px;
}
.fx-nq-floating-dock-magnify .fdm-ic {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #2a2145;
  color: #d8b4fe;
  font-size: 16px;
  cursor: pointer;
  transform-origin: 50% 100%;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.25s ease, box-shadow 0.25s ease;
}
.fx-nq-floating-dock-magnify .fdm-ic:hover {
  transform: scale(1.4) translateY(-4px);
  background: #3b2b63;
  box-shadow: 0 0 18px rgba(167, 139, 250, 0.45);
}
.fx-nq-floating-dock-magnify .fdm-ic:hover + .fdm-ic,
.fx-nq-floating-dock-magnify .fdm-ic:has(+ .fdm-ic:hover) {
  transform: scale(1.18) translateY(-2px);
}`,
});

/* 17 — a progress line under the navbar keeps refilling */
fx({
  id: "nq-scroll-progress-line",
  name: "Scroll Progress Navbar",
  fa: "نوار ناوبری با خط پیشرفت",
  description: "A gradient line under the navbar keeps filling like a page-scroll progress meter.",
  faDescription: "خط گرادیانی زیر نوار ناوبری مثل نشانگر پیشرفت اسکرول مدام پر می‌شود.",
  tags: ["progress", "scroll", "navbar", "auto"],
  interaction: "auto",
  html: `<div class="spl-bar"><span class="spl-logo">DeKo</span><a class="spl-lk">خانه</a><a class="spl-lk">افکت‌ها</a><i class="spl-line"></i></div>`,
  css: `.fx-nq-scroll-progress-line .spl-bar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 11px 16px;
  background: #15102b;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 12px;
  overflow: hidden;
}
.fx-nq-scroll-progress-line .spl-logo {
  font-size: 15px;
  font-weight: 900;
  color: #f0abfc;
}
.fx-nq-scroll-progress-line .spl-lk {
  font-size: 13px;
  font-weight: 700;
  color: #94a3b8;
  text-decoration: none;
  cursor: pointer;
}
.fx-nq-scroll-progress-line .spl-line {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 3px;
  border-radius: 3px 0 0 0;
  background: linear-gradient(270deg, #22d3ee, #d946ef);
  transform-origin: right;
  animation: nq-spl-fill 3.6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
@keyframes nq-spl-fill {
  0% { transform: scaleX(0); opacity: 1; }
  55% { transform: scaleX(1); opacity: 1; }
  74% { transform: scaleX(1); opacity: 1; }
  84% { transform: scaleX(1); opacity: 0; }
  100% { transform: scaleX(0); opacity: 0; }
}`,
});

/* 18 — dropdown opens with a spring scale */
fx({
  id: "nq-dropdown-spring",
  name: "Spring Dropdown",
  fa: "منوی افتادنی فنری",
  description: "The dropdown pops open with an overshooting spring scale and rows fade in staggered.",
  faDescription: "منوی افتادنی با مقیاس فنری و نوسان اضافه باز می‌شود و ردیف‌ها پلکانی ظاهر می‌شوند.",
  tags: ["dropdown", "spring", "menu", "hover"],
  html: `<div class="dds-wrap"><a class="dds-trig">خدمات <span class="dds-cr">▾</span></a><nav class="dds-menu"><a class="dds-it">طراحی سایت</a><a class="dds-it">سئو</a><a class="dds-it">پشتیبانی</a></nav></div>`,
  css: `.fx-nq-dropdown-spring .dds-wrap {
  position: relative;
  display: inline-block;
}
.fx-nq-dropdown-spring .dds-trig {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border-radius: 10px;
  background: #1b1433;
  border: 1px solid rgba(217, 70, 239, 0.35);
  color: #f5d0fe;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}
.fx-nq-dropdown-spring .dds-cr {
  display: inline-block;
  font-size: 11px;
  color: #f0abfc;
  transition: transform 0.3s ease;
}
.fx-nq-dropdown-spring .dds-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 150px;
  padding: 6px;
  background: #1b1433;
  border: 1px solid rgba(217, 70, 239, 0.3);
  border-radius: 12px;
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.45);
  opacity: 0;
  transform: translateY(-8px) scale(0.6);
  transform-origin: top center;
  transition: opacity 0.3s ease, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-nq-dropdown-spring .dds-it {
  display: block;
  padding: 8px 12px;
  border-radius: 8px;
  color: #cbd5e1;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.25s ease, transform 0.3s ease, background 0.25s ease;
}
.fx-nq-dropdown-spring .dds-it:nth-child(2) { transition-delay: 0.06s; }
.fx-nq-dropdown-spring .dds-it:nth-child(3) { transition-delay: 0.12s; }
.fx-nq-dropdown-spring .dds-it:hover {
  background: rgba(217, 70, 239, 0.16);
  color: #fff;
}
.fx-nq-dropdown-spring .dds-wrap:hover .dds-cr {
  transform: rotate(180deg);
}
.fx-nq-dropdown-spring .dds-wrap:hover .dds-menu {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.fx-nq-dropdown-spring .dds-wrap:hover .dds-it {
  opacity: 1;
  transform: translateY(0);
}`,
});

/* 19 — bell icon with a pulsing notification badge */
fx({
  id: "nq-notification-badge-pulse",
  name: "Pulsing Notification Bell",
  fa: "زنگ اعلان تپنده",
  description: "A red badge keeps pulsing rings around the count; hovering makes the bell swing like it just rang.",
  faDescription: "نشان قرمز حلقه‌های تپنده دور تعداد اعلان‌ها می‌سازد و با هاور، زنگ مثل صدای زنگ تاب می‌خورد.",
  tags: ["bell", "badge", "pulse", "notification"],
  html: `<span class="nbp-bell"><span class="nbp-ic">🔔</span><span class="nbp-badge">۳</span></span>`,
  css: `.fx-nq-notification-badge-pulse .nbp-bell {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.fx-nq-notification-badge-pulse .nbp-ic {
  display: inline-block;
  font-size: 30px;
  transform-origin: 50% 12%;
}
.fx-nq-notification-badge-pulse .nbp-badge {
  position: absolute;
  top: -7px;
  left: -7px;
  display: grid;
  place-items: center;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: #ef4444;
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  animation: nq-nbp-pulse 1.8s ease-out infinite;
}
.fx-nq-notification-badge-pulse .nbp-bell:hover .nbp-ic {
  animation: nq-nbp-swing 0.7s ease both;
}
@keyframes nq-nbp-pulse {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.55); }
  60% { transform: scale(1.18); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
}
@keyframes nq-nbp-swing {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(14deg); }
  45% { transform: rotate(-11deg); }
  70% { transform: rotate(6deg); }
  100% { transform: rotate(0deg); }
}`,
});

/* 20 — the search icon morphs into an expanding input */
fx({
  id: "nq-search-morph-nav",
  name: "Morphing Search Bar",
  fa: "جستجوی دگردیس",
  description: "Hovering the compact search glyph unfolds a real input field with a glowing border.",
  faDescription: "با هاور روی آیکون جستجو، یک فیلد ورودی واقعی با حاشیه درخشان باز می‌شود.",
  tags: ["search", "morph", "input", "navbar"],
  html: `<nav class="smn-nav"><span class="smn-br">DeKo</span><a class="smn-lk">افکت‌ها</a><span class="smn-se"><span class="smn-ic">🔍</span><input class="smn-in" placeholder="جستجو…"></span></nav>`,
  css: `.fx-nq-search-morph-nav .smn-nav {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 15px;
  background: #15102b;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 999px;
}
.fx-nq-search-morph-nav .smn-br {
  font-size: 14px;
  font-weight: 900;
  color: #f0abfc;
}
.fx-nq-search-morph-nav .smn-lk {
  font-size: 13px;
  font-weight: 700;
  color: #94a3b8;
  text-decoration: none;
  cursor: pointer;
}
.fx-nq-search-morph-nav .smn-se {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  cursor: pointer;
  transition: border-color 0.35s ease, background 0.35s ease, box-shadow 0.35s ease;
}
.fx-nq-search-morph-nav .smn-ic {
  font-size: 13px;
}
.fx-nq-search-morph-nav .smn-in {
  width: 0;
  opacity: 0;
  border: none;
  outline: none;
  background: transparent;
  color: #e2e8f0;
  font-size: 12px;
  font-family: inherit;
  transition: width 0.45s ease, opacity 0.3s ease;
}
.fx-nq-search-morph-nav .smn-in::placeholder {
  color: #64748b;
}
.fx-nq-search-morph-nav .smn-se:hover {
  border-color: #22d3ee;
  background: rgba(34, 211, 238, 0.08);
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.25);
}
.fx-nq-search-morph-nav .smn-se:hover .smn-in {
  width: 110px;
  opacity: 1;
}`,
});

/* 21 — avatar chip drops a mini menu */
fx({
  id: "nq-profile-chip-menu",
  name: "Profile Chip Menu",
  fa: "چیپ پروفایل",
  description: "The avatar chip flips its caret and drops a staggered mini menu with account actions.",
  faDescription: "چیپ آواتار نشانگرش را می‌چرخاند و منوی کوچکی از کارهای حساب، پلکانی پایین می‌اندازد.",
  tags: ["profile", "chip", "menu", "avatar"],
  html: `<div class="pcm-chip"><span class="pcm-av">د</span><span class="pcm-nm">دیکو</span><span class="pcm-cr">▾</span><nav class="pcm-menu"><a class="pcm-it">پروفایل</a><a class="pcm-it">تنظیمات</a><a class="pcm-it">خروج</a></nav></div>`,
  css: `.fx-nq-profile-chip-menu .pcm-chip {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 13px 5px 8px;
  background: #1b1433;
  border: 1px solid rgba(167, 139, 250, 0.35);
  border-radius: 999px;
  cursor: pointer;
}
.fx-nq-profile-chip-menu .pcm-av {
  display: grid;
  place-items: center;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: linear-gradient(140deg, #f0abfc, #8b5cf6);
  color: #fff;
  font-size: 13px;
  font-weight: 800;
}
.fx-nq-profile-chip-menu .pcm-nm {
  font-size: 13px;
  font-weight: 700;
  color: #e2e8f0;
}
.fx-nq-profile-chip-menu .pcm-cr {
  font-size: 10px;
  color: #a78bfa;
  transition: transform 0.3s ease;
}
.fx-nq-profile-chip-menu .pcm-menu {
  position: absolute;
  top: calc(100% + 9px);
  right: 0;
  width: 135px;
  padding: 6px;
  background: #1b1433;
  border: 1px solid rgba(167, 139, 250, 0.3);
  border-radius: 12px;
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.45);
  opacity: 0;
  transform: translateY(-7px) scale(0.94);
  transform-origin: top right;
  transition: opacity 0.28s ease, transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-nq-profile-chip-menu .pcm-it {
  display: block;
  padding: 7px 11px;
  border-radius: 8px;
  color: #cbd5e1;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.22s ease, transform 0.26s ease, background 0.22s ease;
}
.fx-nq-profile-chip-menu .pcm-it:nth-child(2) { transition-delay: 0.06s; }
.fx-nq-profile-chip-menu .pcm-it:nth-child(3) { transition-delay: 0.12s; }
.fx-nq-profile-chip-menu .pcm-it:hover {
  background: rgba(167, 139, 250, 0.15);
  color: #fff;
}
.fx-nq-profile-chip-menu .pcm-chip:hover .pcm-cr {
  transform: rotate(180deg);
}
.fx-nq-profile-chip-menu .pcm-chip:hover .pcm-menu {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.fx-nq-profile-chip-menu .pcm-chip:hover .pcm-it {
  opacity: 1;
  transform: translateX(0);
}`,
});

/* 22 — numbered steps pulse one after another */
fx({
  id: "nq-vertical-steps-nav",
  name: "Pulsing Steps Nav",
  fa: "ناوبری پله‌ای تپنده",
  description: "A vertical stepper where the active number ring pulses green as the cycle walks down the steps.",
  faDescription: "پله‌های عمودی؛ حلقه شماره فعال سبز تپیده می‌شود در حالی که چرخه از پله‌ای به پله بعد می‌رود.",
  tags: ["steps", "stepper", "pulse", "auto"],
  interaction: "auto",
  html: `<nav class="vsn-steps"><span class="vsn-st"><span class="vsn-num">۱</span><span class="vsn-lb">ثبت‌نام</span></span><span class="vsn-st"><span class="vsn-num">۲</span><span class="vsn-lb">پرداخت</span></span><span class="vsn-st"><span class="vsn-num">۳</span><span class="vsn-lb">دانلود</span></span></nav>`,
  css: `.fx-nq-vertical-steps-nav .vsn-steps {
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 13px 16px;
  background: #141024;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 14px;
}
.fx-nq-vertical-steps-nav .vsn-st {
  position: relative;
  display: flex;
  align-items: center;
  gap: 11px;
}
.fx-nq-vertical-steps-nav .vsn-st:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 14px;
  top: 31px;
  width: 2px;
  height: 13px;
  background: #2e2350;
}
.fx-nq-vertical-steps-nav .vsn-num {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #3a3160;
  background: #171129;
  color: #8b93b8;
  font-size: 13px;
  font-weight: 800;
}
.fx-nq-vertical-steps-nav .vsn-lb {
  font-size: 14px;
  font-weight: 700;
  color: #8b93b8;
}
.fx-nq-vertical-steps-nav .vsn-st:nth-child(1) .vsn-num { animation: nq-vsn-n1 9s ease-in-out infinite; }
.fx-nq-vertical-steps-nav .vsn-st:nth-child(1) .vsn-lb { animation: nq-vsn-l1 9s ease-in-out infinite; }
.fx-nq-vertical-steps-nav .vsn-st:nth-child(2) .vsn-num { animation: nq-vsn-n2 9s ease-in-out infinite; }
.fx-nq-vertical-steps-nav .vsn-st:nth-child(2) .vsn-lb { animation: nq-vsn-l2 9s ease-in-out infinite; }
.fx-nq-vertical-steps-nav .vsn-st:nth-child(3) .vsn-num { animation: nq-vsn-n3 9s ease-in-out infinite; }
.fx-nq-vertical-steps-nav .vsn-st:nth-child(3) .vsn-lb { animation: nq-vsn-l3 9s ease-in-out infinite; }
@keyframes nq-vsn-n1 {
  0% { border-color: #34d399; color: #fff; box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5); }
  9% { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
  26% { border-color: #34d399; color: #fff; }
  33%, 100% { border-color: #3a3160; color: #8b93b8; box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}
@keyframes nq-vsn-n2 {
  0%, 33% { border-color: #3a3160; color: #8b93b8; box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
  35% { border-color: #34d399; color: #fff; box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5); }
  44% { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
  59% { border-color: #34d399; color: #fff; }
  66%, 100% { border-color: #3a3160; color: #8b93b8; box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}
@keyframes nq-vsn-n3 {
  0%, 66% { border-color: #3a3160; color: #8b93b8; box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
  68% { border-color: #34d399; color: #fff; box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5); }
  77% { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
  92% { border-color: #34d399; color: #fff; }
  100% { border-color: #3a3160; color: #8b93b8; box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}
@keyframes nq-vsn-l1 {
  0%, 26% { color: #fff; }
  33%, 100% { color: #8b93b8; }
}
@keyframes nq-vsn-l2 {
  0%, 33% { color: #8b93b8; }
  35%, 59% { color: #fff; }
  66%, 100% { color: #8b93b8; }
}
@keyframes nq-vsn-l3 {
  0%, 66% { color: #8b93b8; }
  68%, 92% { color: #fff; }
  100% { color: #8b93b8; }
}`,
});

/* 23 — pagination numbers hop and arrows extend a tail */
fx({
  id: "nq-pagination-jump",
  name: "Hopping Pagination",
  fa: "صفحه‌بندی جهنده",
  description: "Hovered page numbers do a little hop while the arrow buttons extend a tail line.",
  faDescription: "شماره‌های صفحه با هاور یک پرش کوچک می‌کنند و دکمه‌های پیکان، دُم خطی دراز می‌کنند.",
  tags: ["pagination", "hop", "arrow", "hover"],
  html: `<nav class="pgj-pag"><span class="pgj-ar pgj-prev"><i class="pgj-tail"></i>→</span><span class="pgj-n">۱</span><span class="pgj-n pgj-on">۲</span><span class="pgj-n">۳</span><span class="pgj-n">۴</span><span class="pgj-ar pgj-next">←<i class="pgj-tail"></i></span></nav>`,
  css: `.fx-nq-pagination-jump .pgj-pag {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 16px;
  background: #141024;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 12px;
}
.fx-nq-pagination-jump .pgj-n {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 9px;
  background: #1b1433;
  color: #cbd5e1;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  transition: color 0.25s ease, background 0.25s ease;
}
.fx-nq-pagination-jump .pgj-on {
  background: linear-gradient(140deg, #d946ef, #8b5cf6);
  color: #fff;
}
.fx-nq-pagination-jump .pgj-n:hover {
  color: #f5d0fe;
  background: #2a1f4d;
  animation: nq-pgj-hop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-nq-pagination-jump .pgj-ar {
  direction: ltr;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #94a3b8;
  font-size: 15px;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 8px;
  transition: color 0.3s ease, transform 0.3s ease;
}
.fx-nq-pagination-jump .pgj-tail {
  display: inline-block;
  width: 0;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}
.fx-nq-pagination-jump .pgj-prev:hover {
  color: #67e8f9;
  transform: translateX(3px);
}
.fx-nq-pagination-jump .pgj-next:hover {
  color: #67e8f9;
  transform: translateX(-3px);
}
.fx-nq-pagination-jump .pgj-ar:hover .pgj-tail {
  width: 13px;
}
@keyframes nq-pgj-hop {
  0% { transform: translateY(0); }
  35% { transform: translateY(-7px); }
  70% { transform: translateY(2px); }
  100% { transform: translateY(0); }
}`,
});

/* 24 — a nav item drops a tiny preview strip */
fx({
  id: "nq-mega-hint-strip",
  name: "Mega Hint Strip",
  fa: "نوار پیش‌نمایش مگا",
  description: "Hovering the products item drops a small strip with two mini preview cards.",
  faDescription: "با هاور روی آیتم محصولات، نواری کوچک با دو کارت پیش‌نمایش مینی پایین می‌آید.",
  tags: ["mega-menu", "preview", "strip", "hover"],
  html: `<nav class="mhs-nav"><span class="mhs-it">خانه</span><span class="mhs-it mhs-has">محصولات<span class="mhs-strip"><span class="mhs-card"><i class="mhs-th"></i><i class="mhs-ln"></i><i class="mhs-ln mhs-sh"></i></span><span class="mhs-card"><i class="mhs-th mhs-th2"></i><i class="mhs-ln"></i><i class="mhs-ln mhs-sh"></i></span></span></span><span class="mhs-it">تماس</span></nav>`,
  css: `.fx-nq-mega-hint-strip .mhs-nav {
  display: flex;
  gap: 4px;
  padding: 6px 10px;
  background: #141024;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 12px;
}
.fx-nq-mega-hint-strip .mhs-it {
  position: relative;
  padding: 8px 17px;
  border-radius: 9px;
  color: #cbd5e1;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease;
}
.fx-nq-mega-hint-strip .mhs-it:hover {
  color: #fff;
  background: rgba(148, 163, 184, 0.1);
}
.fx-nq-mega-hint-strip .mhs-strip {
  position: absolute;
  top: calc(100% + 9px);
  right: 0;
  display: flex;
  gap: 8px;
  width: 188px;
  padding: 8px;
  background: #1b1433;
  border: 1px solid rgba(240, 171, 252, 0.28);
  border-radius: 12px;
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(-9px);
  transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 5;
  cursor: default;
}
.fx-nq-mega-hint-strip .mhs-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  background: #241a3f;
  border-radius: 9px;
}
.fx-nq-mega-hint-strip .mhs-th {
  height: 32px;
  border-radius: 6px;
  background: linear-gradient(130deg, #d946ef, #8b5cf6);
}
.fx-nq-mega-hint-strip .mhs-th2 {
  background: linear-gradient(130deg, #22d3ee, #0ea5e9);
}
.fx-nq-mega-hint-strip .mhs-ln {
  height: 4px;
  border-radius: 4px;
  background: #3b2f63;
}
.fx-nq-mega-hint-strip .mhs-sh {
  width: 62%;
}
.fx-nq-mega-hint-strip .mhs-has:hover .mhs-strip {
  opacity: 1;
  transform: translateY(0);
}`,
});

/* 25 — a circular compass nav: icons rotate around the ring */
fx({
  id: "nq-compass-nav",
  name: "Compass Ring Nav",
  fa: "ناوبری قطب‌نما",
  description: "Four icons sit on a dashed ring; hovering spins the ring 90° while icons counter-rotate to stay upright.",
  faDescription: "چهار آیکون روی حلقه خط‌چین نشسته‌اند؛ با هاور حلقه ۹۰ درجه می‌چرخد و آیکون‌ها برعکس می‌چرخند تا راست بمانند.",
  tags: ["compass", "ring", "circle", "rotate"],
  html: `<div class="cmp-wrap"><span class="cmp-ring"><span class="cmp-ic cmp-c1">⌂</span><span class="cmp-ic cmp-c2">✉</span><span class="cmp-ic cmp-c3">⚙</span><span class="cmp-ic cmp-c4">☰</span></span><span class="cmp-hub">⌖</span></div>`,
  css: `.fx-nq-compass-nav .cmp-wrap {
  position: relative;
  display: grid;
  place-items: center;
  width: 122px;
  height: 122px;
}
.fx-nq-compass-nav .cmp-ring {
  position: absolute;
  inset: 0;
  border: 2px dashed rgba(167, 139, 250, 0.4);
  border-radius: 50%;
  transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
}
.fx-nq-compass-nav .cmp-ic {
  position: absolute;
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #241a3f;
  border: 1px solid rgba(167, 139, 250, 0.4);
  color: #d8b4fe;
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1), background 0.3s ease, box-shadow 0.3s ease;
}
.fx-nq-compass-nav .cmp-c1 {
  top: -17px;
  left: calc(50% - 17px);
}
.fx-nq-compass-nav .cmp-c2 {
  right: -17px;
  top: calc(50% - 17px);
}
.fx-nq-compass-nav .cmp-c3 {
  bottom: -17px;
  left: calc(50% - 17px);
}
.fx-nq-compass-nav .cmp-c4 {
  left: -17px;
  top: calc(50% - 17px);
}
.fx-nq-compass-nav .cmp-hub {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(140deg, #d946ef, #7c3aed);
  color: #fff;
  font-size: 19px;
  transition: transform 0.4s ease;
  z-index: 1;
}
.fx-nq-compass-nav .cmp-ring:hover {
  transform: rotate(90deg);
}
.fx-nq-compass-nav .cmp-ring:hover .cmp-ic {
  transform: rotate(-90deg);
  background: #3b2b63;
  box-shadow: 0 0 14px rgba(167, 139, 250, 0.4);
}
.fx-nq-compass-nav .cmp-wrap:hover .cmp-hub {
  transform: scale(1.12);
}`,
});
