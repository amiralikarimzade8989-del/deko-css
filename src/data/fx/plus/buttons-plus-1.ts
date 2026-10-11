import type { CssEffect } from "../types";

/** Buttons — plus batch 1 (28 effects, prefix bq1-) */
export const buttonEffectsPlus1: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  buttonEffectsPlus1.push({ category: "buttons", interaction: "hover", ...e } as CssEffect);
}

/* 1 — magnetic shift ------------------------------------------------------ */
fx({
  id: "bq1-magnetic-btn",
  name: "Magnetic Shift",
  fa: "دکمه آهنربایی",
  description: "The button is pulled toward an edge while a dashed orbit ring follows with lag and the shadow deepens directionally.",
  faDescription: "دکمه به سمت لبه کشیده می‌شود؛ حلقه نقطه‌چین با تأخیر همراهش می‌آید و سایه به‌صورت جهت‌دار عمیق‌تر می‌شود.",
  tags: ["button", "hover", "magnetic", "shadow"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-ring"></span><span class="bq1-btn">کلیک کن</span></div>`,
  css: `.fx-bq1-magnetic-btn .bq1-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-magnetic-btn .bq1-ring {
  position: absolute;
  width: 128px;
  height: 128px;
  border: 1.5px dashed rgba(139, 92, 246, 0.55);
  border-radius: 50%;
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease;
}
.fx-bq1-magnetic-btn .bq1-btn {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 36px;
  border-radius: 16px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 24px -12px rgba(99, 102, 241, 0.9);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-bq1-magnetic-btn .bq1-stage:hover .bq1-btn {
  transform: translate(18px, -10px) rotate(-1.5deg);
  box-shadow: -18px 26px 34px -16px rgba(99, 102, 241, 0.8);
}
.fx-bq1-magnetic-btn .bq1-stage:hover .bq1-ring {
  transform: translate(7px, -4px) scale(1.14) rotate(20deg);
  opacity: 0.95;
}`,
  previewBg: "radial-gradient(circle at 30% 25%, #1e1b4b, #0b1020)",
});

/* 2 — shine sweep --------------------------------------------------------- */
fx({
  id: "bq1-shine-sweep-btn",
  name: "Shine Sweep",
  fa: "درخشش مورب",
  description: "A skewed beam of light sweeps diagonally across the button surface on hover.",
  faDescription: "یک پرتو نور مورب هنگام هاور به‌صورت مورب روی سطح دکمه حرکت می‌کند.",
  tags: ["button", "hover", "shine", "sweep"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn">مشاهده بیشتر</span></div>`,
  css: `.fx-bq1-shine-sweep-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-shine-sweep-btn .bq1-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 38px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: #e2e8f0;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: border-color 0.4s ease, transform 0.4s ease;
}
.fx-bq1-shine-sweep-btn .bq1-btn::after {
  content: "";
  position: absolute;
  top: -30%;
  bottom: -30%;
  left: 0;
  width: 55%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  transform: translateX(-190%) skewX(-24deg);
  transition: transform 0.75s cubic-bezier(0.4, 0, 0.2, 1);
}
.fx-bq1-shine-sweep-btn .bq1-btn:hover {
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}
.fx-bq1-shine-sweep-btn .bq1-btn:hover::after {
  transform: translateX(290%) skewX(-24deg);
}`,
  previewBg: "linear-gradient(135deg, #0f172a, #1e293b)",
});

/* 3 — liquid rise ---------------------------------------------------------- */
fx({
  id: "bq1-liquid-rise-btn",
  name: "Liquid Rise",
  fa: "برخاستن مایع",
  description: "Two wobbling liquid layers tilt and rise from the bottom, filling the button with a waving surface.",
  faDescription: "دو لایه مایع با سطح موج‌دار از پایین بالا می‌آیند و دکمه را مثل آب پر می‌کنند.",
  tags: ["button", "hover", "liquid", "wave"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn"><span class="bq1-txt">شروع</span></span></div>`,
  css: `.fx-bq1-liquid-rise-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-liquid-rise-btn .bq1-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 42px;
  overflow: hidden;
  border: 2px solid rgba(56, 189, 248, 0.85);
  border-radius: 14px;
  background: #071a26;
  color: #7dd3fc;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: color 0.45s ease 0.1s, border-color 0.45s ease;
}
.fx-bq1-liquid-rise-btn .bq1-btn::before,
.fx-bq1-liquid-rise-btn .bq1-btn::after {
  content: "";
  position: absolute;
  left: -80%;
  width: 260%;
  height: 240%;
  border-radius: 44%;
  transition: top 0.8s cubic-bezier(0.33, 1, 0.4, 1);
}
.fx-bq1-liquid-rise-btn .bq1-btn::before {
  top: 112%;
  background: #0ea5e9;
  animation: bq1-liquid-sway 2.8s ease-in-out infinite alternate;
}
.fx-bq1-liquid-rise-btn .bq1-btn::after {
  top: 126%;
  background: rgba(2, 132, 199, 0.9);
  animation: bq1-liquid-sway 3.6s ease-in-out infinite alternate-reverse;
}
.fx-bq1-liquid-rise-btn .bq1-btn:hover {
  color: #04283c;
  border-color: #7dd3fc;
}
.fx-bq1-liquid-rise-btn .bq1-btn:hover::before {
  top: 6%;
}
.fx-bq1-liquid-rise-btn .bq1-btn:hover::after {
  top: 16%;
}
.fx-bq1-liquid-rise-btn .bq1-txt {
  position: relative;
  z-index: 1;
}
@keyframes bq1-liquid-sway {
  from { transform: rotate(-9deg); }
  to { transform: rotate(9deg); }
}`,
  previewBg: "linear-gradient(180deg, #07131f, #0b2436)",
});

/* 4 — slice reveal --------------------------------------------------------- */
fx({
  id: "bq1-slice-btn",
  name: "Slice Reveal",
  fa: "گشودن برش",
  description: "Two dark triangle slices split apart diagonally to reveal a warm gradient core.",
  faDescription: "دو تکه مثلثی تیره به‌صورت مورب از هم باز می‌شوند و گرادیان گرم زیرین را نشان می‌دهند.",
  tags: ["button", "hover", "clip-path", "reveal"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn"><span class="bq1-txt">کاوش کن</span></span></div>`,
  css: `.fx-bq1-slice-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-slice-btn .bq1-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 40px;
  overflow: hidden;
  border-radius: 14px;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  color: #fde68a;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
}
.fx-bq1-slice-btn .bq1-btn::before,
.fx-bq1-slice-btn .bq1-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #0f172a;
  transition: transform 0.55s cubic-bezier(0.7, 0, 0.3, 1);
}
.fx-bq1-slice-btn .bq1-btn::before {
  clip-path: polygon(0 0, 58% 0, 0 100%);
}
.fx-bq1-slice-btn .bq1-btn::after {
  clip-path: polygon(100% 0, 100% 100%, 42% 100%);
}
.fx-bq1-slice-btn .bq1-btn:hover::before {
  transform: translate(-112%, -8%) rotate(-8deg);
}
.fx-bq1-slice-btn .bq1-btn:hover::after {
  transform: translate(112%, 8%) rotate(-8deg);
}
.fx-bq1-slice-btn .bq1-txt {
  position: relative;
  z-index: 1;
  transition: color 0.4s ease 0.12s;
}
.fx-bq1-slice-btn .bq1-btn:hover .bq1-txt {
  color: #451a03;
}`,
  previewBg: "linear-gradient(135deg, #111827, #1f2937)",
});

/* 5 — double-layer roll ---------------------------------------------------- */
fx({
  id: "bq1-roll-btn",
  name: "Double-Layer Roll",
  fa: "غلتش دولایه",
  description: "The front face hinges forward and rolls away while a second face unfolds from the top edge.",
  faDescription: "لایه جلویی لولا شده و به جلو غلت می‌زند و لایه دوم از لبه بالا باز می‌شود.",
  tags: ["button", "hover", "3d", "roll"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn"><span class="bq1-face bq1-front">شروع</span><span class="bq1-face bq1-back">بریم ✦</span></span></div>`,
  css: `.fx-bq1-roll-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-roll-btn .bq1-btn {
  position: relative;
  width: 176px;
  height: 52px;
  border: none;
  background: transparent;
  cursor: pointer;
  perspective: 480px;
  transform-style: preserve-3d;
}
.fx-bq1-roll-btn .bq1-face {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 800;
  backface-visibility: hidden;
  transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
}
.fx-bq1-roll-btn .bq1-front {
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: #ffffff;
  transform-origin: 50% 100%;
}
.fx-bq1-roll-btn .bq1-back {
  background: linear-gradient(135deg, #22d3ee, #0ea5e9);
  color: #052a3a;
  transform: rotateX(90deg);
  transform-origin: 50% 0%;
}
.fx-bq1-roll-btn .bq1-btn:hover .bq1-front {
  transform: rotateX(-90deg);
}
.fx-bq1-roll-btn .bq1-btn:hover .bq1-back {
  transform: rotateX(0deg);
}`,
  previewBg: "linear-gradient(135deg, #111327, #1e1b4b)",
});

/* 6 — arrow stretch -------------------------------------------------------- */
fx({
  id: "bq1-arrow-btn",
  name: "Arrow Stretch",
  fa: "کشش پیکان",
  description: "The label slides back while an arrow shaft stretches out and its chevron head snaps in.",
  faDescription: "متن عقب می‌رود، بدنه پیکان کشیده می‌شود و سر فلش با شتاب ظاهر می‌شود.",
  tags: ["button", "hover", "arrow", "micro-interaction"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn"><span class="bq1-txt">مستندات</span><span class="bq1-shaft"></span><span class="bq1-head"></span></span></div>`,
  css: `.fx-bq1-arrow-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-arrow-btn .bq1-btn {
  display: inline-flex;
  align-items: center;
  height: 50px;
  padding: 0 30px;
  border: 1px solid #3f3f46;
  border-radius: 999px;
  background: #18181b;
  color: #e4e4e7;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.4s ease, border-color 0.4s ease, color 0.4s ease;
}
.fx-bq1-arrow-btn .bq1-txt {
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-bq1-arrow-btn .bq1-shaft {
  width: 0;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1), margin-left 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-bq1-arrow-btn .bq1-head {
  width: 10px;
  height: 10px;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  opacity: 0;
  transform: rotate(-45deg) translate(-7px, 7px);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
}
.fx-bq1-arrow-btn .bq1-btn:hover {
  background: #fafafa;
  border-color: #fafafa;
  color: #18181b;
}
.fx-bq1-arrow-btn .bq1-btn:hover .bq1-txt {
  transform: translateX(-4px);
}
.fx-bq1-arrow-btn .bq1-btn:hover .bq1-shaft {
  width: 26px;
  margin-left: 8px;
}
.fx-bq1-arrow-btn .bq1-btn:hover .bq1-head {
  opacity: 1;
  transform: rotate(-45deg) translate(0, 0);
}`,
  previewBg: "#09090b",
});

/* 7 — border trace ---------------------------------------------------------- */
fx({
  id: "bq1-trace-btn",
  name: "Border Trace",
  fa: "ترسیم قاب",
  description: "A glowing border draws itself around all four sides of the button, one edge at a time.",
  faDescription: "قاب درخشان دور دکمه ضلع به ضلع و به‌ترتیب ترسیم می‌شود.",
  tags: ["button", "hover", "border", "draw"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn">ترسیم قاب<span class="bq1-ln bq1-lt"></span><span class="bq1-ln bq1-lr"></span><span class="bq1-ln bq1-lb"></span><span class="bq1-ln bq1-ll"></span></span></div>`,
  css: `.fx-bq1-trace-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-trace-btn .bq1-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 34px;
  border: 1px solid rgba(251, 191, 36, 0.25);
  border-radius: 10px;
  background: #14121f;
  color: #fcd34d;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: box-shadow 0.4s ease;
}
.fx-bq1-trace-btn .bq1-ln {
  position: absolute;
  background: #fbbf24;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.75);
  transition: transform 0.3s cubic-bezier(0.6, 0, 0.4, 1);
}
.fx-bq1-trace-btn .bq1-lt {
  top: -1px;
  left: 10px;
  right: 10px;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
}
.fx-bq1-trace-btn .bq1-lr {
  top: 10px;
  bottom: 10px;
  right: -1px;
  width: 2px;
  transform: scaleY(0);
  transform-origin: top;
  transition-delay: 0.14s;
}
.fx-bq1-trace-btn .bq1-lb {
  bottom: -1px;
  left: 10px;
  right: 10px;
  height: 2px;
  transform: scaleX(0);
  transform-origin: right;
  transition-delay: 0.28s;
}
.fx-bq1-trace-btn .bq1-ll {
  top: 10px;
  bottom: 10px;
  left: -1px;
  width: 2px;
  transform: scaleY(0);
  transform-origin: bottom;
  transition-delay: 0.42s;
}
.fx-bq1-trace-btn .bq1-btn:hover {
  box-shadow: 0 0 22px rgba(251, 191, 36, 0.25);
}
.fx-bq1-trace-btn .bq1-btn:hover .bq1-lt {
  transform: scaleX(1);
}
.fx-bq1-trace-btn .bq1-btn:hover .bq1-lr {
  transform: scaleY(1);
}
.fx-bq1-trace-btn .bq1-btn:hover .bq1-lb {
  transform: scaleX(1);
}
.fx-bq1-trace-btn .bq1-btn:hover .bq1-ll {
  transform: scaleY(1);
}`,
  previewBg: "#0c0a1d",
});

/* 8 — corner brackets ------------------------------------------------------- */
fx({
  id: "bq1-brackets-btn",
  name: "Corner Brackets",
  fa: "براکت‌های گوشه",
  description: "Four cyan viewfinder brackets slide into the corners of the button on hover.",
  faDescription: "چهار براکت فیروزه‌ای مثل ویزور دوربین هنگام هاور به گوشه‌های دکمه سر می‌خورند.",
  tags: ["button", "hover", "brackets", "focus"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn">انتخاب کن<span class="bq1-b bq1-b1"></span><span class="bq1-b bq1-b2"></span><span class="bq1-b bq1-b3"></span><span class="bq1-b bq1-b4"></span></span></div>`,
  css: `.fx-bq1-brackets-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-brackets-btn .bq1-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 36px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  border-radius: 6px;
  background: #0b141c;
  color: #cbd5e1;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.3s ease, border-color 0.3s ease;
}
.fx-bq1-brackets-btn .bq1-b {
  position: absolute;
  width: 14px;
  height: 14px;
  border: 2px solid #22d3ee;
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
}
.fx-bq1-brackets-btn .bq1-b1 {
  top: -7px;
  left: -7px;
  border-right: none;
  border-bottom: none;
  transform: translate(-12px, -12px);
}
.fx-bq1-brackets-btn .bq1-b2 {
  top: -7px;
  right: -7px;
  border-left: none;
  border-bottom: none;
  transform: translate(12px, -12px);
  transition-delay: 0.05s;
}
.fx-bq1-brackets-btn .bq1-b3 {
  bottom: -7px;
  right: -7px;
  border-left: none;
  border-top: none;
  transform: translate(12px, 12px);
  transition-delay: 0.1s;
}
.fx-bq1-brackets-btn .bq1-b4 {
  bottom: -7px;
  left: -7px;
  border-right: none;
  border-top: none;
  transform: translate(-12px, 12px);
  transition-delay: 0.15s;
}
.fx-bq1-brackets-btn .bq1-btn:hover {
  color: #f8fafc;
  border-color: rgba(34, 211, 238, 0.4);
}
.fx-bq1-brackets-btn .bq1-btn:hover .bq1-b {
  opacity: 1;
  transform: translate(0, 0);
}`,
  previewBg: "#081118",
});

/* 9 — glow pulse ------------------------------------------------------------ */
fx({
  id: "bq1-glow-pulse-btn",
  name: "Glow Pulse",
  fa: "نبض درخشش",
  description: "On hover the button breathes with an expanding pink shockwave ring and a warm ambient glow.",
  faDescription: "با هاور، دکمه با حلقه موجی صورتی در حال انبساط و هاله گرم مثل نفس کشیدن می‌تپد.",
  tags: ["button", "hover", "glow", "pulse"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn">اهمیت بالا</span></div>`,
  css: `.fx-bq1-glow-pulse-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-glow-pulse-btn .bq1-btn {
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 38px;
  border-radius: 16px;
  background: linear-gradient(135deg, #ec4899, #f43f5e);
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 8px 24px -8px rgba(244, 63, 94, 0.7);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-bq1-glow-pulse-btn .bq1-btn:hover {
  transform: scale(1.04);
  animation: bq1-breathe 1.8s ease-in-out infinite;
}
@keyframes bq1-breathe {
  0%, 100% {
    box-shadow: 0 8px 24px -8px rgba(244, 63, 94, 0.7), 0 0 0 0 rgba(244, 63, 94, 0.45);
  }
  50% {
    box-shadow: 0 8px 28px -6px rgba(244, 63, 94, 0.85), 0 0 0 16px rgba(244, 63, 94, 0);
  }
}`,
  previewBg: "radial-gradient(circle at 50% 40%, #3b0a1e, #14030b)",
});

/* 10 — neon flicker ---------------------------------------------------------- */
fx({
  id: "bq1-neon-btn",
  name: "Neon Flicker",
  fa: "سوسوی نئون",
  description: "Like an old neon sign, the label flickers irregularly on hover and then burns steady and bright.",
  faDescription: "مثل تابلو نئون قدیمی، متن هنگام هاور بی‌قاعده سوسو می‌زند و بعد به‌طور پایدار می‌درخشد.",
  tags: ["button", "hover", "neon", "flicker"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn"><span class="bq1-txt">کافه</span></span></div>`,
  css: `.fx-bq1-neon-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-neon-btn .bq1-btn {
  display: grid;
  place-items: center;
  height: 54px;
  padding: 0 40px;
  border: 1.5px solid rgba(34, 211, 238, 0.45);
  border-radius: 12px;
  background: #050914;
  cursor: pointer;
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.12), inset 0 0 14px rgba(34, 211, 238, 0.08);
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
}
.fx-bq1-neon-btn .bq1-txt {
  font-size: 21px;
  font-weight: 800;
  color: #67e8f9;
  text-shadow: 0 0 6px rgba(103, 232, 249, 0.9), 0 0 18px rgba(34, 211, 238, 0.65), 0 0 42px rgba(34, 211, 238, 0.4);
}
.fx-bq1-neon-btn .bq1-btn:hover {
  border-color: rgba(103, 232, 249, 0.8);
  box-shadow: 0 0 30px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.14);
}
.fx-bq1-neon-btn .bq1-btn:hover .bq1-txt {
  animation: bq1-flick 1.4s linear both;
}
@keyframes bq1-flick {
  0% { opacity: 1; }
  7% { opacity: 0.35; }
  9% { opacity: 1; }
  13% { opacity: 0.2; }
  15% { opacity: 1; }
  28% { opacity: 0.65; }
  30% { opacity: 1; }
  52% { opacity: 0.85; }
  54% { opacity: 1; }
  100% { opacity: 1; }
}`,
  previewBg: "#030712",
});

/* 11 — jelly press ------------------------------------------------------------ */
fx({
  id: "bq1-jelly-btn",
  name: "Jelly Press",
  fa: "فشار ژله‌ای",
  description: "The button squashes and stretches like jelly with a springy keyframe wobble on hover.",
  faDescription: "دکمه مثل ژله هنگام هاور له و کشیده می‌شود و با فنر لرزش می‌گیرد.",
  tags: ["button", "hover", "jelly", "squash"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn">بزن!</span></div>`,
  css: `.fx-bq1-jelly-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-jelly-btn .bq1-btn {
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 40px;
  border-radius: 18px;
  background: linear-gradient(180deg, #34d399, #059669);
  color: #022c22;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 22px -10px rgba(16, 185, 129, 0.8);
}
.fx-bq1-jelly-btn .bq1-btn:hover {
  animation: bq1-jelly 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
@keyframes bq1-jelly {
  0% { transform: scale(1, 1); }
  25% { transform: scale(1.14, 0.86); }
  45% { transform: scale(0.94, 1.08); }
  65% { transform: scale(1.05, 0.96); }
  82% { transform: scale(0.99, 1.01); }
  100% { transform: scale(1, 1); }
}`,
  previewBg: "linear-gradient(135deg, #022c22, #064e3b)",
});

/* 12 — text roll ---------------------------------------------------------------- */
fx({
  id: "bq1-textroll-btn",
  name: "Text Roll",
  fa: "غلتش متن",
  description: "The label rolls upward out of view while a second label rolls in from below.",
  faDescription: "متن به سمت بالا از دکمه خارج می‌شود و متن دوم از پایین جای آن را می‌گیرد.",
  tags: ["button", "hover", "text", "roll"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn"><span class="bq1-roll"><span>کلیک کن</span><span class="bq1-alt">بریم ↗</span></span></span></div>`,
  css: `.fx-bq1-textroll-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-textroll-btn .bq1-btn {
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 36px;
  overflow: hidden;
  border-radius: 12px;
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 22px -10px rgba(168, 85, 247, 0.8);
}
.fx-bq1-textroll-btn .bq1-roll {
  display: flex;
  flex-direction: column;
  transition: transform 0.45s cubic-bezier(0.76, 0, 0.24, 1);
}
.fx-bq1-textroll-btn .bq1-roll span {
  display: block;
  height: 22px;
  line-height: 22px;
}
.fx-bq1-textroll-btn .bq1-alt {
  color: #fde68a;
}
.fx-bq1-textroll-btn .bq1-btn:hover .bq1-roll {
  transform: translateY(-22px);
}`,
  previewBg: "linear-gradient(135deg, #2e1065, #4c1d95)",
});

/* 13 — letters scatter ------------------------------------------------------------ */
fx({
  id: "bq1-letters-btn",
  name: "Letters Scatter",
  fa: "پراکندن حروف",
  description: "Each letter of the wordmark drifts to its own offset and angle with a staggered springy delay.",
  faDescription: "هر حروف واژه با تأخیر پلکانی به گوشه‌ای پراکنده می‌شود و می‌چرخد.",
  tags: ["button", "hover", "letters", "scatter"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn"><span class="bq1-l">S</span><span class="bq1-l">C</span><span class="bq1-l">A</span><span class="bq1-l">T</span><span class="bq1-l">T</span><span class="bq1-l">E</span><span class="bq1-l">R</span></span></div>`,
  css: `.fx-bq1-letters-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-letters-btn .bq1-btn {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  height: 52px;
  padding: 0 22px;
  border: none;
  background: transparent;
  cursor: pointer;
}
.fx-bq1-letters-btn .bq1-l {
  display: inline-block;
  font-size: 19px;
  font-weight: 800;
  color: #94a3b8;
  transition: transform 0.5s cubic-bezier(0.22, 1.4, 0.36, 1), color 0.3s ease;
}
.fx-bq1-letters-btn .bq1-l:nth-child(1) { --dx: -20px; --dy: -12px; --rot: -14deg; --td: 0s; }
.fx-bq1-letters-btn .bq1-l:nth-child(2) { --dx: -12px; --dy: 8px; --rot: 6deg; --td: 0.04s; }
.fx-bq1-letters-btn .bq1-l:nth-child(3) { --dx: -6px; --dy: -16px; --rot: -4deg; --td: 0.08s; }
.fx-bq1-letters-btn .bq1-l:nth-child(4) { --dx: 0px; --dy: -12px; --rot: 0deg; --td: 0.12s; }
.fx-bq1-letters-btn .bq1-l:nth-child(5) { --dx: 6px; --dy: 10px; --rot: 5deg; --td: 0.16s; }
.fx-bq1-letters-btn .bq1-l:nth-child(6) { --dx: 14px; --dy: -8px; --rot: 9deg; --td: 0.2s; }
.fx-bq1-letters-btn .bq1-l:nth-child(7) { --dx: 22px; --dy: 6px; --rot: -7deg; --td: 0.24s; }
.fx-bq1-letters-btn .bq1-btn:hover .bq1-l {
  color: #f8fafc;
  text-shadow: 0 0 14px rgba(148, 163, 184, 0.6);
  transform: translate(var(--dx), var(--dy)) rotate(var(--rot));
  transition-delay: var(--td);
}`,
  previewBg: "#0b1220",
});

/* 14 — gradient pan ----------------------------------------------------------------- */
fx({
  id: "bq1-gradient-pan-btn",
  name: "Gradient Pan",
  fa: "حرکت گرادیان",
  description: "A vivid multi-stop gradient slowly pans back and forth across the button on hover.",
  faDescription: "گرادیان رنگارنگ چندمرحله‌ای هنگام هاور آرام روی دکمه رفت‌وبرگشتی حرکت می‌کند.",
  tags: ["button", "hover", "gradient", "pan"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn">انرژی</span></div>`,
  css: `.fx-bq1-gradient-pan-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-gradient-pan-btn .bq1-btn {
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 44px;
  border-radius: 16px;
  background: linear-gradient(115deg, #f43f5e, #fb923c, #facc15, #f43f5e);
  background-size: 300% 100%;
  background-position: 0% 50%;
  color: #4c0519;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 24px -10px rgba(244, 63, 94, 0.7);
}
.fx-bq1-gradient-pan-btn .bq1-btn:hover {
  animation: bq1-pan 2.8s ease-in-out infinite alternate;
}
@keyframes bq1-pan {
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
}`,
  previewBg: "#1c1030",
});

/* 15 — conic spin border -------------------------------------------------------------- */
fx({
  id: "bq1-conic-btn",
  name: "Conic Spin Border",
  fa: "قاب مخروطی چرخان",
  description: "A rotating conic gradient ring lives inside a 2px frame and spins at full speed on hover.",
  faDescription: "حلقه گرادیان مخروطی داخل قاب ۲ پیکسلی می‌چرخد و هنگام هاور با سرعت کامل می‌گردد.",
  tags: ["button", "hover", "conic", "border"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn"><span class="bq1-frame"><span class="bq1-spin"></span><span class="bq1-face">قاب نورانی</span></span></span></div>`,
  css: `.fx-bq1-conic-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-conic-btn .bq1-btn {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  border-radius: 16px;
  cursor: pointer;
}
.fx-bq1-conic-btn .bq1-frame {
  position: relative;
  padding: 2px;
  border-radius: 16px;
  overflow: hidden;
}
.fx-bq1-conic-btn .bq1-spin {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, #22d3ee, #818cf8, #e879f9, #facc15, #22d3ee);
  opacity: 0.45;
  transform: translate(-50%, -50%);
  animation: bq1-rot 3.2s linear infinite;
  animation-play-state: paused;
  transition: opacity 0.4s ease;
}
.fx-bq1-conic-btn .bq1-face {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 36px;
  border-radius: 14px;
  background: #120e26;
  color: #e9d5ff;
  font-size: 15px;
  font-weight: 800;
  transition: color 0.3s ease, background 0.3s ease;
}
.fx-bq1-conic-btn .bq1-btn:hover .bq1-spin {
  animation-play-state: running;
  opacity: 1;
}
.fx-bq1-conic-btn .bq1-btn:hover .bq1-face {
  background: #191330;
  color: #ffffff;
}
@keyframes bq1-rot {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}`,
  previewBg: "#0d0a1f",
});

/* 16 — 3D push --------------------------------------------------------------------------- */
fx({
  id: "bq1-push-btn",
  name: "3D Push",
  fa: "دکمه سه‌بعدی فشاری",
  description: "A chunky 3D key: it floats up on hover and physically presses into its base when clicked.",
  faDescription: "کلید سه‌بعدی حجیم: با هاور بالا می‌آید و با کلیک واقعاً داخل بدنه فرو می‌رود.",
  tags: ["button", "hover", "3d", "press"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn">دکمه من</span></div>`,
  css: `.fx-bq1-push-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-push-btn .bq1-btn {
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 40px;
  border-radius: 14px;
  background: linear-gradient(180deg, #fbbf24, #d97706);
  color: #451a03;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 6px 0 #92400e, 0 14px 22px -10px rgba(0, 0, 0, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.35);
  transition: transform 0.16s ease, box-shadow 0.16s ease, filter 0.16s ease;
}
.fx-bq1-push-btn .bq1-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 9px 0 #92400e, 0 18px 28px -10px rgba(0, 0, 0, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.35);
}
.fx-bq1-push-btn .bq1-btn:active {
  transform: translateY(4px);
  filter: brightness(0.94);
  box-shadow: 0 1px 0 #92400e, 0 6px 10px -8px rgba(0, 0, 0, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.2);
}`,
  previewBg: "linear-gradient(135deg, #312e81, #1e1b4b)",
});

/* 17 — stacked layers ---------------------------------------------------------------------- */
fx({
  id: "bq1-stack-btn",
  name: "Stacked Layers",
  fa: "لایه‌های روی‌هم",
  description: "Three paper sheets: on hover the two sheets behind fan out with a springy rotation.",
  faDescription: "سه برگ کاغذی: هنگام هاور دو برگ پشتی با چرخش فنری از هم باز می‌شوند.",
  tags: ["button", "hover", "stack", "fan"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn">لایه‌ها</span></div>`,
  css: `.fx-bq1-stack-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-stack-btn .bq1-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 38px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.5);
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.45s ease;
}
.fx-bq1-stack-btn .bq1-btn::before,
.fx-bq1-stack-btn .bq1-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  z-index: -1;
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-bq1-stack-btn .bq1-btn::before {
  background: #cbd5e1;
  border: 1px solid #94a3b8;
}
.fx-bq1-stack-btn .bq1-btn::after {
  background: #94a3b8;
  border: 1px solid #64748b;
}
.fx-bq1-stack-btn .bq1-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 28px -10px rgba(0, 0, 0, 0.55);
}
.fx-bq1-stack-btn .bq1-btn:hover::before {
  transform: translate(-10px, 8px) rotate(-5deg);
}
.fx-bq1-stack-btn .bq1-btn:hover::after {
  transform: translate(10px, 8px) rotate(5deg);
}`,
  previewBg: "linear-gradient(135deg, #1e293b, #0f172a)",
});

/* 18 — dot halo ------------------------------------------------------------------------------ */
fx({
  id: "bq1-halo-btn",
  name: "Dot Halo",
  fa: "هاله نوری",
  description: "A soft bloom of light repeatedly expands from behind the button like a glowing halo.",
  faDescription: "هاله‌ای از نور مثل هاله دور سر، پیوسته از پشت دکمه منبسط می‌شود.",
  tags: ["button", "hover", "halo", "glow"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn">هدیه</span></div>`,
  css: `.fx-bq1-halo-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-halo-btn .bq1-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 40px;
  border: 1px solid rgba(103, 232, 249, 0.5);
  border-radius: 999px;
  background: rgba(8, 51, 68, 0.55);
  color: #a5f3fc;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: box-shadow 0.5s ease, color 0.3s ease;
}
.fx-bq1-halo-btn .bq1-btn::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 130px;
  height: 90px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(34, 211, 238, 0.55), transparent);
  filter: blur(6px);
  transform: translate(-50%, -50%) scale(0.4);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.4s ease;
}
.fx-bq1-halo-btn .bq1-btn:hover {
  color: #ffffff;
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.35);
}
.fx-bq1-halo-btn .bq1-btn:hover::before {
  animation: bq1-halo-bloom 1.8s ease-out infinite;
}
@keyframes bq1-halo-bloom {
  0% { opacity: 0.9; transform: translate(-50%, -50%) scale(0.4); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1.6); }
}`,
  previewBg: "radial-gradient(circle at 50% 50%, #083344, #020617)",
});

/* 19 — clip diagonal slide ---------------------------------------------------------------------- */
fx({
  id: "bq1-clip-btn",
  name: "Clip Diagonal Slide",
  fa: "سرسره مورب",
  description: "A dark panel with a slanted edge wipes across the button using an animated clip-path.",
  faDescription: "پنل تیره با لبه مورب با انیمیشن clip-path روی دکمه کشیده می‌شود.",
  tags: ["button", "hover", "clip-path", "wipe"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn"><span class="bq1-txt">بارگذاری</span></span></div>`,
  css: `.fx-bq1-clip-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-clip-btn .bq1-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 40px;
  overflow: hidden;
  border-radius: 12px;
  background: linear-gradient(135deg, #0ea5e9, #6366f1);
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
}
.fx-bq1-clip-btn .bq1-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #0b1120;
  clip-path: polygon(-32% 0, -8% 0, -26% 100%, -50% 100%);
  transition: clip-path 0.55s cubic-bezier(0.7, 0, 0.3, 1);
}
.fx-bq1-clip-btn .bq1-btn:hover::before {
  clip-path: polygon(-32% 0, 132% 0, 108% 100%, -50% 100%);
}
.fx-bq1-clip-btn .bq1-txt {
  position: relative;
  z-index: 1;
  transition: color 0.4s ease;
}
.fx-bq1-clip-btn .bq1-btn:hover .bq1-txt {
  color: #a5f3fc;
}`,
  previewBg: "linear-gradient(135deg, #0c4a6e, #082f49)",
});

/* 20 — outline fill ------------------------------------------------------------------------------ */
fx({
  id: "bq1-outline-fill-btn",
  name: "Outline Fill",
  fa: "پرشدن خط‌دور",
  description: "A ghost outline button floods with emerald green from the left on hover.",
  faDescription: "دکمه خط‌داری که هنگام هاور از سمت چپ با سبز زمردی پر می‌شود.",
  tags: ["button", "hover", "outline", "fill"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn"><span class="bq1-txt">عضویت</span></span></div>`,
  css: `.fx-bq1-outline-fill-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-outline-fill-btn .bq1-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 42px;
  overflow: hidden;
  border: 2px solid #34d399;
  border-radius: 999px;
  background: transparent;
  color: #34d399;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: color 0.35s ease 0.1s, box-shadow 0.4s ease;
}
.fx-bq1-outline-fill-btn .bq1-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #34d399, #10b981);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.45s cubic-bezier(0.7, 0, 0.3, 1);
}
.fx-bq1-outline-fill-btn .bq1-btn:hover {
  color: #052e1c;
  box-shadow: 0 10px 26px -10px rgba(16, 185, 129, 0.8);
}
.fx-bq1-outline-fill-btn .bq1-btn:hover::before {
  transform: scaleX(1);
}
.fx-bq1-outline-fill-btn .bq1-txt {
  position: relative;
  z-index: 1;
}`,
  previewBg: "linear-gradient(135deg, #022c22, #052e16)",
});

/* 21 — icon orbit --------------------------------------------------------------------------------- */
fx({
  id: "bq1-orbit-btn",
  name: "Icon Orbit",
  fa: "مدار آیکون",
  description: "A golden satellite dot circles a round icon button whenever you hover it.",
  faDescription: "یک نقطه طلایی مثل ماهواره هنگام هاور دور دکمه گرد آیکونی می‌چرخد.",
  tags: ["button", "hover", "orbit", "dot"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn"><span class="bq1-glyph">↗</span><span class="bq1-orbiter"><span class="bq1-dot"></span></span></span></div>`,
  css: `.fx-bq1-orbit-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-orbit-btn .bq1-btn {
  position: relative;
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 50%;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: #38bdf8;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}
.fx-bq1-orbit-btn .bq1-btn:hover {
  transform: scale(1.06);
  box-shadow: 0 0 22px rgba(56, 189, 248, 0.35);
}
.fx-bq1-orbit-btn .bq1-orbiter {
  position: absolute;
  inset: -12px;
  opacity: 0;
  animation: bq1-orbit-run 2.8s linear infinite;
  animation-play-state: paused;
  transition: opacity 0.3s ease;
}
.fx-bq1-orbit-btn .bq1-btn:hover .bq1-orbiter {
  opacity: 1;
  animation-play-state: running;
}
.fx-bq1-orbit-btn .bq1-dot {
  position: absolute;
  top: 0;
  left: 50%;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 10px 2px rgba(251, 191, 36, 0.7);
}
@keyframes bq1-orbit-run {
  to { transform: rotate(360deg); }
}`,
  previewBg: "radial-gradient(circle at 50% 45%, #172554, #020617)",
});

/* 22 — skew wipe ------------------------------------------------------------------------------------ */
fx({
  id: "bq1-skew-btn",
  name: "Skew Wipe",
  fa: "جاروی مورب",
  description: "A slanted violet gradient plank skews across the button like a windshield wiper.",
  faDescription: "یک تیغه گرادیان بنفش مورب مثل برف‌پاک‌کن روی دکمه حرکت می‌کند.",
  tags: ["button", "hover", "skew", "wipe"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn"><span class="bq1-txt">پرداخت</span></span></div>`,
  css: `.fx-bq1-skew-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-skew-btn .bq1-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 40px;
  overflow: hidden;
  border: 1px solid rgba(129, 140, 248, 0.35);
  border-radius: 12px;
  background: #1e1b4b;
  color: #c7d2fe;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: border-color 0.4s ease;
}
.fx-bq1-skew-btn .bq1-btn::before {
  content: "";
  position: absolute;
  top: -20%;
  bottom: -20%;
  left: -10%;
  width: 34%;
  background: linear-gradient(120deg, #818cf8, #e879f9);
  transform: skewX(-22deg) translateX(-160%);
  transition: transform 0.65s cubic-bezier(0.65, 0, 0.35, 1);
}
.fx-bq1-skew-btn .bq1-btn:hover {
  border-color: rgba(232, 121, 249, 0.6);
}
.fx-bq1-skew-btn .bq1-btn:hover::before {
  transform: skewX(-22deg) translateX(560%);
}
.fx-bq1-skew-btn .bq1-txt {
  position: relative;
  z-index: 1;
}`,
  previewBg: "linear-gradient(135deg, #1e1b4b, #312e81)",
});

/* 23 — underline grow ---------------------------------------------------------------------------------- */
fx({
  id: "bq1-underline-btn",
  name: "Underline Grow",
  fa: "رشد زیرخط",
  description: "A thick gradient underline grows from the center under this text-link style button.",
  faDescription: "زیرخط ضخیم گرادیانی از وسط، زیر این دکمه متنی رشد می‌کند.",
  tags: ["button", "hover", "underline", "link"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn">مشاهده پروژه‌ها<span class="bq1-go">↗</span></span></div>`,
  css: `.fx-bq1-underline-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-underline-btn .bq1-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 52px;
  padding: 0 12px;
  border: none;
  background: transparent;
  color: #fda4af;
  font-size: 17px;
  font-weight: 800;
  cursor: pointer;
  transition: color 0.3s ease;
}
.fx-bq1-underline-btn .bq1-btn::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 8px;
  height: 4px;
  border-radius: 3px;
  background: linear-gradient(90deg, #fb7185, #f43f5e);
  transform: scaleX(0);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-bq1-underline-btn .bq1-go {
  font-size: 15px;
  opacity: 0;
  transform: translate(-8px, 8px);
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-bq1-underline-btn .bq1-btn:hover {
  color: #fff1f2;
}
.fx-bq1-underline-btn .bq1-btn:hover::after {
  transform: scaleX(1);
}
.fx-bq1-underline-btn .bq1-btn:hover .bq1-go {
  opacity: 1;
  transform: translate(0, 0);
}`,
  previewBg: "#180d14",
});

/* 24 — shadow lift --------------------------------------------------------------------------------------- */
fx({
  id: "bq1-lift-btn",
  name: "Shadow Lift",
  fa: "برخاست سایه",
  description: "A white plate rises on hover while its layered shadows stretch far below with an indigo glow.",
  faDescription: "صفحه سفید هنگام هاور بالا می‌رود و سایه‌های چندلایه‌اش با هاله نیلی کشیده می‌شوند.",
  tags: ["button", "hover", "shadow", "elevation"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn">بلند کن</span></div>`,
  css: `.fx-bq1-lift-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-lift-btn .bq1-btn {
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 42px;
  border: none;
  border-radius: 16px;
  background: #ffffff;
  color: #0f172a;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-bq1-lift-btn .bq1-btn:hover {
  transform: translateY(-8px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35), 0 10px 22px rgba(0, 0, 0, 0.4), 0 24px 48px -12px rgba(99, 102, 241, 0.55), 0 3px 0 0 #6366f1;
}`,
  previewBg: "linear-gradient(135deg, #111827, #030712)",
});

/* 25 — pixel dissolve -------------------------------------------------------------------------------------- */
fx({
  id: "bq1-pixel-btn",
  name: "Pixel Dissolve",
  fa: "محو پیکسلی",
  description: "A chunky checkerboard dissolves in with stepped timing, then melts into a solid lime fill.",
  faDescription: "شطرنجی درشت با گام‌های پلکانی ظاهر می‌شود و بعد به پرشدن یکدست لیمویی تبدیل می‌شود.",
  tags: ["button", "hover", "pixel", "retro"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn"><span class="bq1-txt">بازی کن</span></span></div>`,
  css: `.fx-bq1-pixel-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-pixel-btn .bq1-btn {
  position: relative;
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 42px;
  overflow: hidden;
  border: 1px solid rgba(163, 230, 53, 0.35);
  border-radius: 10px;
  background: #101418;
  color: #a3e635;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: color 0.3s ease 0.3s;
}
.fx-bq1-pixel-btn .bq1-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-conic-gradient(#a3e635 0% 25%, transparent 0% 50%);
  background-size: 22px 22px;
  opacity: 0;
}
.fx-bq1-pixel-btn .bq1-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #a3e635;
  opacity: 0;
}
.fx-bq1-pixel-btn .bq1-btn:hover::before {
  animation: bq1-pxin 0.5s steps(4) both;
}
.fx-bq1-pixel-btn .bq1-btn:hover::after {
  animation: bq1-pxfill 0.4s ease 0.38s both;
}
.fx-bq1-pixel-btn .bq1-btn:hover .bq1-txt {
  color: #1a2e05;
}
.fx-bq1-pixel-btn .bq1-txt {
  position: relative;
  z-index: 1;
}
@keyframes bq1-pxin {
  from { opacity: 0; background-size: 66px 66px; }
  to { opacity: 1; background-size: 18px 18px; }
}
@keyframes bq1-pxfill {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
  previewBg: "#101418",
});

/* 26 — spring scale ------------------------------------------------------------------------------------------- */
fx({
  id: "bq1-spring-btn",
  name: "Spring Scale",
  fa: "فنری کشسان",
  description: "The button overshoots with an elastic cubic-bezier and settles like a spring.",
  faDescription: "دکمه با منحنی کشسان فراتر از حد بزرگ می‌شود و مثل فنر سر جای خود می‌نشیند.",
  tags: ["button", "hover", "spring", "elastic"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn">بچرخان</span></div>`,
  css: `.fx-bq1-spring-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-spring-btn .bq1-btn {
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 40px;
  border-radius: 999px;
  background: linear-gradient(135deg, #f472b6, #c084fc);
  color: #4a044e;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 8px 20px -10px rgba(236, 72, 153, 0.7);
  transition: transform 0.6s cubic-bezier(0.3, 1.75, 0.45, 1), box-shadow 0.6s cubic-bezier(0.3, 1.75, 0.45, 1);
}
.fx-bq1-spring-btn .bq1-btn:hover {
  transform: scale(1.12) rotate(-1.5deg);
  box-shadow: 0 14px 34px -10px rgba(236, 72, 153, 0.75);
}`,
  previewBg: "linear-gradient(135deg, #500724, #831843)",
});

/* 27 — blur clear ------------------------------------------------------------------------------------------------- */
fx({
  id: "bq1-blur-btn",
  name: "Blur Clear",
  fa: "از تاری به وضوح",
  description: "The button starts dreamy, blurred and dim, then snaps into sharp focus on hover.",
  faDescription: "دکمه در حالت اولیه مات و کم‌جان است و با هاور مثل لنز دوربین شارپ می‌شود.",
  tags: ["button", "hover", "blur", "focus"],
  interaction: "hover",
  html: `<div class="bq1-stage"><span class="bq1-btn">وضوح</span></div>`,
  css: `.fx-bq1-blur-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-blur-btn .bq1-btn {
  display: grid;
  place-items: center;
  height: 52px;
  padding: 0 42px;
  border: 1px solid rgba(125, 211, 252, 0.4);
  border-radius: 14px;
  background: linear-gradient(135deg, #0ea5e9, #0369a1);
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  filter: blur(5px) saturate(0.5);
  opacity: 0.5;
  transform: scale(0.96);
  transition: filter 0.5s ease, opacity 0.5s ease, transform 0.5s ease, box-shadow 0.5s ease;
}
.fx-bq1-blur-btn .bq1-btn:hover {
  filter: blur(0) saturate(1.1);
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 12px 30px -10px rgba(14, 165, 233, 0.8);
}`,
  previewBg: "linear-gradient(135deg, #0c4a6e, #082f49)",
});

/* 28 — split flap ---------------------------------------------------------------------------------------------------- */
fx({
  id: "bq1-splitflap-btn",
  name: "Split Flap",
  fa: "تابلو فرودگاه",
  description: "An airport-style split-flap display: the top half flips down and lands on a new time.",
  faDescription: "تابلو نمایش مکانیکی فرودگاه: نیمه بالایی بر می‌گردد و روی ساعت جدید می‌ایستد.",
  tags: ["button", "hover", "split-flap", "retro"],
  interaction: "hover",
  html: `<div class="bq1-stage"><div class="bq1-panel"><div class="bq1-half bq1-ht"><span class="bq1-fa">۰۷:۴۲</span><span class="bq1-fb">۰۸:۱۵</span></div><div class="bq1-half bq1-hb"><span class="bq1-fc">۰۷:۴۲</span><span class="bq1-fd">۰۸:۱۵</span></div></div></div>`,
  css: `.fx-bq1-splitflap-btn .bq1-stage {
  display: grid;
  place-items: center;
  min-height: 150px;
  width: 100%;
  direction: ltr;
}
.fx-bq1-splitflap-btn .bq1-panel {
  position: relative;
  width: 172px;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(180deg, #292524, #1c1917);
  box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.07);
  perspective: 420px;
  color: #fcd34d;
  font-size: 26px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
}
.fx-bq1-splitflap-btn .bq1-half {
  position: absolute;
  left: 0;
  right: 0;
  height: 50%;
  overflow: hidden;
}
.fx-bq1-splitflap-btn .bq1-ht {
  top: 0;
  border-radius: 12px 12px 0 0;
  background: rgba(255, 255, 255, 0.03);
}
.fx-bq1-splitflap-btn .bq1-hb {
  bottom: 0;
  border-radius: 0 0 12px 12px;
  background: rgba(0, 0, 0, 0.28);
}
.fx-bq1-splitflap-btn .bq1-half span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 56px;
  display: grid;
  place-items: center;
  backface-visibility: hidden;
}
.fx-bq1-splitflap-btn .bq1-ht span {
  top: 0;
  transform-origin: 50% 100%;
  transition: transform 0.3s cubic-bezier(0.55, 0, 0.8, 0.4);
}
.fx-bq1-splitflap-btn .bq1-fb {
  transform: rotateX(-90deg);
  transition: transform 0.34s cubic-bezier(0.2, 0.9, 0.3, 1.15) 0.17s;
}
.fx-bq1-splitflap-btn .bq1-panel:hover .bq1-fa {
  transform: rotateX(-90deg);
}
.fx-bq1-splitflap-btn .bq1-panel:hover .bq1-fb {
  transform: rotateX(0deg);
}
.fx-bq1-splitflap-btn .bq1-hb span {
  bottom: 0;
  transition: opacity 0.25s ease 0.2s, transform 0.25s ease 0.2s;
}
.fx-bq1-splitflap-btn .bq1-fd {
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 0.25s ease 0.26s, transform 0.25s ease 0.26s;
}
.fx-bq1-splitflap-btn .bq1-panel:hover .bq1-fc {
  opacity: 0;
  transform: translateY(4px);
}
.fx-bq1-splitflap-btn .bq1-panel:hover .bq1-fd {
  opacity: 1;
  transform: translateY(0);
}
.fx-bq1-splitflap-btn .bq1-panel::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 10px;
  right: 10px;
  height: 1px;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05);
  z-index: 2;
}`,
  previewBg: "linear-gradient(135deg, #1c1917, #292524)",
});
