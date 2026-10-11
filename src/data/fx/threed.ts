import type { CssEffect } from "./types";

/**
 * 3D effects — cubes, flip cards, rings, coins, prisms and more.
 * Every effect is scoped under .fx-<id> and uses real CSS 3D
 * (perspective + transform-style: preserve-3d).
 */
export const threedEffects: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  threedEffects.push({ category: "threed", interaction: "auto", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Rotating cube (classic)                                */
/* ---------------------------------------------------------- */
const CUBE_THEMES: [string, string, string, string, string][] = [
  // suffix, en, fa, gradient a, gradient b
  ["classic", "Classic", "کلاسیک", "#d946ef", "#701a75"],
  ["sunset", "Sunset", "غروب", "#fb923c", "#9a3412"],
  ["mint", "Mint", "نعنایی", "#34d399", "#065f46"],
  ["ice", "Ice", "یخی", "#67e8f9", "#155e75"],
];
for (const [suf, en, fa, c1, c2] of CUBE_THEMES) {
  fx({
    id: `spin-cube-${suf}`,
    name: `Rotating 3D Cube — ${en}`,
    fa: `مکعب سه‌بعدی چرخان — ${fa}`,
    description: `A real CSS ${en.toLowerCase()} cube built with six faces, spinning forever in 3D space.`,
    faDescription: `مکعب ${fa} ساخته‌شده از شش وجه که دائماً در فضای سه‌بعدی می‌چرخد.`,
    tags: ["cube", "3d", "spin"],
    interaction: "auto",
    html: `<div class="sc-stage"><div class="sc-cube"><span class="sc-face sc-f1">1</span><span class="sc-face sc-f2">2</span><span class="sc-face sc-f3">3</span><span class="sc-face sc-f4">4</span><span class="sc-face sc-f5">5</span><span class="sc-face sc-f6">6</span></div></div>`,
    css: `.fx-spin-cube-${suf} .sc-stage {
  perspective: 520px;
}
.fx-spin-cube-${suf} .sc-cube {
  position: relative;
  width: 96px;
  height: 96px;
  transform-style: preserve-3d;
  animation: sc-spin-${suf} 7s linear infinite;
}
.fx-spin-cube-${suf} .sc-face {
  position: absolute;
  inset: 0;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  border-radius: 10px;
  background: linear-gradient(135deg, ${c1}, ${c2});
  opacity: 0.92;
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #fff;
  font-size: 13px;
}
.fx-spin-cube-${suf} .sc-f1 { transform: translateZ(48px); }
.fx-spin-cube-${suf} .sc-f2 { transform: rotateY(180deg) translateZ(48px); }
.fx-spin-cube-${suf} .sc-f3 { transform: rotateY(90deg) translateZ(48px); }
.fx-spin-cube-${suf} .sc-f4 { transform: rotateY(-90deg) translateZ(48px); }
.fx-spin-cube-${suf} .sc-f5 { transform: rotateX(90deg) translateZ(48px); }
.fx-spin-cube-${suf} .sc-f6 { transform: rotateX(-90deg) translateZ(48px); }
@keyframes sc-spin-${suf} {
  from { transform: rotateX(-22deg) rotateY(0deg); }
  to { transform: rotateX(-22deg) rotateY(360deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 2 — Exploding cube on hover                                */
/* ---------------------------------------------------------- */
fx({
  id: "hover-explode-cube",
  name: "Exploding Cube",
  fa: "مکعب منفجرشونده",
  description: "A wireframe cube whose six faces fly apart when you hover over it.",
  faDescription: "مکعب قاب‌دار که با هاور شش وجه آن از هم جدا می‌شوند.",
  tags: ["cube", "3d", "hover"],
  interaction: "hover",
  html: `<div class="he-stage"><div class="he-cube"><span class="he-face he-f1">1</span><span class="he-face he-f2">2</span><span class="he-face he-f3">3</span><span class="he-face he-f4">4</span><span class="he-face he-f5">5</span><span class="he-face he-f6">6</span></div></div>`,
  css: `.fx-hover-explode-cube .he-stage {
  perspective: 620px;
}
.fx-hover-explode-cube .he-cube {
  position: relative;
  width: 90px;
  height: 90px;
  transform-style: preserve-3d;
  transform: rotateX(-24deg) rotateY(34deg);
  transition: transform 0.6s ease;
}
.fx-hover-explode-cube .he-stage:hover .he-cube {
  transform: rotateX(-24deg) rotateY(34deg) scale(1.08);
}
.fx-hover-explode-cube .he-face {
  position: absolute;
  inset: 0;
  border: 1.5px solid rgba(103, 232, 249, 0.75);
  background: rgba(8, 51, 68, 0.5);
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #67e8f9;
  font-weight: 800;
  transition: transform 0.6s cubic-bezier(0.2, 0.9, 0.3, 1.3);
}
.fx-hover-explode-cube .he-f1 { transform: translateZ(45px); }
.fx-hover-explode-cube .he-f2 { transform: rotateY(180deg) translateZ(45px); }
.fx-hover-explode-cube .he-f3 { transform: rotateY(90deg) translateZ(45px); }
.fx-hover-explode-cube .he-f4 { transform: rotateY(-90deg) translateZ(45px); }
.fx-hover-explode-cube .he-f5 { transform: rotateX(90deg) translateZ(45px); }
.fx-hover-explode-cube .he-f6 { transform: rotateX(-90deg) translateZ(45px); }
.fx-hover-explode-cube .he-stage:hover .he-f1 { transform: translateZ(85px); }
.fx-hover-explode-cube .he-stage:hover .he-f2 { transform: rotateY(180deg) translateZ(85px); }
.fx-hover-explode-cube .he-stage:hover .he-f3 { transform: rotateY(90deg) translateZ(85px); }
.fx-hover-explode-cube .he-stage:hover .he-f4 { transform: rotateY(-90deg) translateZ(85px); }
.fx-hover-explode-cube .he-stage:hover .he-f5 { transform: rotateX(90deg) translateZ(85px); }
.fx-hover-explode-cube .he-stage:hover .he-f6 { transform: rotateX(-90deg) translateZ(85px); }`,
});

/* ---------------------------------------------------------- */
/* 3 — Flip card (horizontal)                                 */
/* ---------------------------------------------------------- */
const FLIP_THEMES: [string, string, string, string, string][] = [
  ["candy", "Candy", "آب‌نباتی", "#f472b6", "#a855f7"],
  ["ocean", "Ocean", "اقیانوسی", "#22d3ee", "#0e7490"],
  ["forest", "Forest", "جنگلی", "#4ade80", "#166534"],
  ["magma", "Magma", "ماگمایی", "#fb923c", "#b91c1c"],
];
for (const [suf, en, fa, c1, c2] of FLIP_THEMES) {
  fx({
    id: `flip-card-3d-${suf}`,
    name: `3D Flip Card — ${en}`,
    fa: `کارت فلیپ سه‌بعدی — ${fa}`,
    description: `Hover the card and it flips 180° on the Y axis to reveal a hidden back face.`,
    faDescription: `با هاور، کارت ۱۸۰ درجه حول محور Y می‌چرخد و پشتش را نشان می‌دهد.`,
    tags: ["flip", "3d", "card"],
    interaction: "hover",
    html: `<div class="fl-stage"><div class="fl-inner"><div class="fl-face fl-front">FRONT</div><div class="fl-face fl-back">BACK</div></div></div>`,
    css: `.fx-flip-card-3d-${suf} .fl-stage {
  perspective: 800px;
}
.fx-flip-card-3d-${suf} .fl-inner {
  position: relative;
  width: 150px;
  height: 100px;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.fx-flip-card-3d-${suf} .fl-stage:hover .fl-inner {
  transform: rotateY(180deg);
}
.fx-flip-card-3d-${suf} .fl-face {
  position: absolute;
  inset: 0;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.fx-flip-card-3d-${suf} .fl-front {
  background: linear-gradient(135deg, ${c1}, ${c2});
  color: #fff;
}
.fx-flip-card-3d-${suf} .fl-back {
  transform: rotateY(180deg);
  background: #181825;
  border: 1.5px solid ${c1};
  color: ${c1};
}`,
  });
}

/* ---------------------------------------------------------- */
/* 4 — Vertical flip card                                     */
/* ---------------------------------------------------------- */
fx({
  id: "flip-card-vertical",
  name: "Vertical Flip Card",
  fa: "کارت فلیپ عمودی",
  description: "The card somersaults around the X axis, showing its back face from above.",
  faDescription: "کارت حول محور X پشتک می‌زند و پشت کارت از بالا دیده می‌شود.",
  tags: ["flip", "3d", "vertical"],
  interaction: "hover",
  html: `<div class="fv-stage"><div class="fv-inner"><div class="fv-face fv-front">TOP</div><div class="fv-face fv-back">BOTTOM</div></div></div>`,
  css: `.fx-flip-card-vertical .fv-stage {
  perspective: 700px;
}
.fx-flip-card-vertical .fv-inner {
  position: relative;
  width: 150px;
  height: 96px;
  transform-style: preserve-3d;
  transition: transform 0.75s cubic-bezier(0.3, 0.9, 0.3, 1.1);
}
.fx-flip-card-vertical .fv-stage:hover .fv-inner {
  transform: rotateX(180deg);
}
.fx-flip-card-vertical .fv-face {
  position: absolute;
  inset: 0;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.fx-flip-card-vertical .fv-front {
  background: linear-gradient(135deg, #a3e635, #3f6212);
  color: #1a2e05;
}
.fx-flip-card-vertical .fv-back {
  transform: rotateX(180deg);
  background: #1a2e05;
  border: 1.5px solid #a3e635;
  color: #bef264;
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Tilt card on hover                                     */
/* ---------------------------------------------------------- */
const TILT_THEMES: [string, string, string, string, string][] = [
  ["sky", "Sky", "آسمانی", "#22d3ee", "#0369a1"],
  ["rose", "Rose", "رز", "#fb7185", "#9f1239"],
  ["lime", "Lime", "لیمویی", "#a3e635", "#4d7c0f"],
];
for (const [suf, en, fa, c1, c2] of TILT_THEMES) {
  fx({
    id: `tilt-card-3d-${suf}`,
    name: `Tilt Card — ${en}`,
    fa: `کارت شیب‌دار — ${fa}`,
    description: `On hover the card tilts in 3D toward the cursor side, like a physical ${en.toLowerCase()} tile.`,
    faDescription: `با هاور، کارت مثل یک کاشی ${fa} در فضا به سمت ماوس خم می‌شود.`,
    tags: ["tilt", "3d", "hover"],
    interaction: "hover",
    html: `<div class="tl-stage"><div class="tl-card">TILT</div></div>`,
    css: `.fx-tilt-card-3d-${suf} .tl-stage {
  perspective: 600px;
}
.fx-tilt-card-3d-${suf} .tl-card {
  width: 150px;
  height: 100px;
  border-radius: 14px;
  background: linear-gradient(145deg, ${c1}, ${c2});
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 3px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.fx-tilt-card-3d-${suf} .tl-stage:hover .tl-card {
  transform: rotateX(14deg) rotateY(-18deg) translateZ(18px);
  box-shadow: -14px 22px 34px rgba(0, 0, 0, 0.55);
}`,
  });
}

/* ---------------------------------------------------------- */
/* 6 — Rotating ring carousel                                 */
/* ---------------------------------------------------------- */
fx({
  id: "ring-carousel-3d",
  name: "3D Ring Carousel",
  fa: "کروسل حلقه‌ای سه‌بعدی",
  description: "Eight panels form a 3D carousel ring that rotates endlessly around its center.",
  faDescription: "هشت پنل یک کروسل سه‌بعدی می‌سازند که دائماً دور مرکز می‌چرخد.",
  tags: ["carousel", "3d", "ring"],
  interaction: "auto",
  html: `<div class="rg-stage"><div class="rg-ring"><span class="rg-panel rg-p1">1</span><span class="rg-panel rg-p2">2</span><span class="rg-panel rg-p3">3</span><span class="rg-panel rg-p4">4</span><span class="rg-panel rg-p5">5</span><span class="rg-panel rg-p6">6</span><span class="rg-panel rg-p7">7</span><span class="rg-panel rg-p8">8</span></div></div>`,
  css: `.fx-ring-carousel-3d .rg-stage {
  perspective: 720px;
}
.fx-ring-carousel-3d .rg-ring {
  position: relative;
  width: 76px;
  height: 104px;
  transform-style: preserve-3d;
  animation: rg-spin 16s linear infinite;
}
.fx-ring-carousel-3d .rg-panel {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: linear-gradient(160deg, #f472b6, #7c3aed);
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #fff;
  opacity: 0.95;
}
.fx-ring-carousel-3d .rg-p1 { transform: rotateY(0deg) translateZ(110px); }
.fx-ring-carousel-3d .rg-p2 { transform: rotateY(45deg) translateZ(110px); }
.fx-ring-carousel-3d .rg-p3 { transform: rotateY(90deg) translateZ(110px); }
.fx-ring-carousel-3d .rg-p4 { transform: rotateY(135deg) translateZ(110px); }
.fx-ring-carousel-3d .rg-p5 { transform: rotateY(180deg) translateZ(110px); }
.fx-ring-carousel-3d .rg-p6 { transform: rotateY(225deg) translateZ(110px); }
.fx-ring-carousel-3d .rg-p7 { transform: rotateY(270deg) translateZ(110px); }
.fx-ring-carousel-3d .rg-p8 { transform: rotateY(315deg) translateZ(110px); }
@keyframes rg-spin {
  from { transform: rotateX(-12deg) rotateY(0deg); }
  to { transform: rotateX(-12deg) rotateY(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Spinning coin                                          */
/* ---------------------------------------------------------- */
const COIN_COLORS: [string, string, string, string, string][] = [
  ["gold", "Gold", "طلایی", "#fde68a", "#b45309"],
  ["silver", "Silver", "نقره‌ای", "#e2e8f0", "#64748b"],
  ["ruby", "Ruby", "یاقوتی", "#fda4af", "#9f1239"],
  ["toxic", "Toxic", "سمی", "#bef264", "#3f6212"],
];
for (const [suf, en, fa, c1, c2] of COIN_COLORS) {
  fx({
    id: `coin-spin-${suf}`,
    name: `Spinning 3D Coin — ${en}`,
    fa: `سکه سه‌بعدی چرخان — ${fa}`,
    description: `A glossy ${en.toLowerCase()} coin flips around its vertical axis forever.`,
    faDescription: `سکه براق ${fa} دائماً حول محور عمودی خود می‌چرخد.`,
    tags: ["coin", "spin", "3d"],
    interaction: "auto",
    html: `<div class="cs-stage"><div class="cs-coin">D</div></div>`,
    css: `.fx-coin-spin-${suf} .cs-stage {
  perspective: 600px;
}
.fx-coin-spin-${suf} .cs-coin {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, ${c1}, ${c2} 75%);
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 28px;
  color: rgba(0, 0, 0, 0.55);
  border: 3px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.45);
  transform-style: preserve-3d;
  animation: cs-flip-${suf} 3.2s linear infinite;
}
@keyframes cs-flip-${suf} {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 8 — Opening door                                           */
/* ---------------------------------------------------------- */
fx({
  id: "door-open-3d",
  name: "Opening 3D Door",
  fa: "در سه‌بعدی بازشو",
  description: "Hover and the door swings open on its left hinge, revealing the room behind it.",
  faDescription: "با هاور، در از لولای چپ باز می‌شود و پشتش را نشان می‌دهد.",
  tags: ["door", "3d", "hover"],
  interaction: "hover",
  html: `<div class="do-frame"><div class="do-behind">DeKo</div><div class="do-door">OPEN</div></div>`,
  css: `.fx-door-open-3d .do-frame {
  position: relative;
  width: 150px;
  height: 108px;
  perspective: 700px;
}
.fx-door-open-3d .do-behind {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  border: 1.5px dashed rgba(52, 211, 153, 0.55);
  display: grid;
  place-items: center;
  color: #34d399;
  font-size: 13px;
  font-weight: 700;
}
.fx-door-open-3d .do-door {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, #34d399, #065f46);
  transform-origin: left center;
  transition: transform 0.9s cubic-bezier(0.2, 0.9, 0.25, 1);
  display: grid;
  place-items: center;
  color: #ecfdf5;
  font-weight: 800;
  letter-spacing: 2px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
}
.fx-door-open-3d .do-frame:hover .do-door {
  transform: rotateY(-105deg);
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Opening book                                           */
/* ---------------------------------------------------------- */
fx({
  id: "book-open-3d",
  name: "Opening 3D Book",
  fa: "کتاب سه‌بعدی بازشو",
  description: "The teal book cover rotates open around its spine when hovered.",
  faDescription: "جلد کتاب فیروزه‌ای با هاور حول عطفش باز می‌شود.",
  tags: ["book", "3d", "hover"],
  interaction: "hover",
  html: `<div class="bo-stage"><div class="bo-book"><div class="bo-under">DeKo css</div><div class="bo-page">COVER</div></div></div>`,
  css: `.fx-book-open-3d .bo-stage {
  perspective: 800px;
}
.fx-book-open-3d .bo-book {
  position: relative;
  width: 150px;
  height: 100px;
  transform-style: preserve-3d;
}
.fx-book-open-3d .bo-under {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: #134e4a;
  border: 1px solid rgba(94, 234, 212, 0.4);
  display: grid;
  place-items: center;
  color: #5eead4;
  font-weight: 700;
}
.fx-book-open-3d .bo-page {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: linear-gradient(135deg, #14b8a6, #0f766e);
  transform-origin: left center;
  transition: transform 0.9s cubic-bezier(0.25, 0.9, 0.3, 1);
  display: grid;
  place-items: center;
  color: #ccfbf1;
  font-weight: 800;
  letter-spacing: 2px;
  box-shadow: 4px 6px 18px rgba(0, 0, 0, 0.35);
}
.fx-book-open-3d .bo-stage:hover .bo-page {
  transform: rotateY(-140deg);
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Deep 3D text (hover)                                  */
/* ---------------------------------------------------------- */
const TEXT_DEPTH_THEMES: [string, string, string, string, string][] = [
  ["gold", "Gold", "طلایی", "#fbbf24", "#92400e"],
  ["candy", "Candy", "شیرین", "#f472b6", "#831843"],
  ["mint", "Mint", "نعنایی", "#34d399", "#064e3b"],
];
for (const [suf, en, fa, c1, c2] of TEXT_DEPTH_THEMES) {
  fx({
    id: `text-depth-3d-${suf}`,
    name: `Deep 3D Text — ${en}`,
    fa: `متن عمق‌دار سه‌بعدی — ${fa}`,
    description: `Layered text-shadows give the ${en.toLowerCase()} word real extruded depth that grows on hover.`,
    faDescription: `سایه‌های لایه‌لایه به کلمه ${fa} عمق برجسته می‌دهند و با هاور عمیق‌تر می‌شود.`,
    tags: ["text", "3d", "shadow"],
    interaction: "hover",
    html: `<div class="td-text">DeKo</div>`,
    css: `.fx-text-depth-3d-${suf} .td-text {
  font-size: 36px;
  font-weight: 900;
  color: ${c1};
  cursor: default;
  transition: text-shadow 0.3s ease, transform 0.3s ease;
  text-shadow: 0 1px 0 ${c2}, 0 2px 0 ${c2}, 0 3px 0 ${c2}, 0 4px 0 ${c2},
    0 5px 0 ${c2}, 0 10px 14px rgba(0, 0, 0, 0.5);
}
.fx-text-depth-3d-${suf} .td-text:hover {
  transform: translate(-2px, -3px);
  text-shadow: 0 4px 0 ${c2}, 0 8px 0 ${c2}, 0 12px 0 ${c2}, 0 16px 0 ${c2},
    0 20px 0 ${c2}, 0 30px 26px rgba(0, 0, 0, 0.6);
}`,
  });
}

/* ---------------------------------------------------------- */
/* 11 — Layered stack (hover)                                 */
/* ---------------------------------------------------------- */
fx({
  id: "layered-stack-3d",
  name: "Layered 3D Stack",
  fa: "دسته لایه‌لایه سه‌بعدی",
  description: "A pink card with two ghost layers behind it; hovering tilts the whole stack in 3D.",
  faDescription: "کارت صورتی با دو لایه شبح پشتش؛ با هاور کل دسته در فضا خم می‌شود.",
  tags: ["stack", "3d", "hover"],
  interaction: "hover",
  html: `<div class="ls-stage"><div class="ls-card">STACK</div></div>`,
  css: `.fx-layered-stack-3d .ls-stage {
  perspective: 620px;
}
.fx-layered-stack-3d .ls-card {
  position: relative;
  width: 140px;
  height: 90px;
  border-radius: 12px;
  background: #f472b6;
  color: #4a044e;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  transform-style: preserve-3d;
  transition: transform 0.45s ease;
}
.fx-layered-stack-3d .ls-card::before,
.fx-layered-stack-3d .ls-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  transition: transform 0.45s ease;
  z-index: -1;
}
.fx-layered-stack-3d .ls-card::before {
  background: #9d174d;
  transform: translateZ(-22px);
}
.fx-layered-stack-3d .ls-card::after {
  background: #701a75;
  transform: translateZ(-44px);
}
.fx-layered-stack-3d .ls-stage:hover .ls-card {
  transform: rotateX(16deg) rotateY(-22deg);
}
.fx-layered-stack-3d .ls-stage:hover .ls-card::before {
  transform: translateZ(-34px);
}
.fx-layered-stack-3d .ls-stage:hover .ls-card::after {
  transform: translateZ(-68px);
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Pressable 3D button                                   */
/* ---------------------------------------------------------- */
const PRESS_THEMES: [string, string, string, string, string][] = [
  ["green", "Green", "سبز", "#34d399", "#065f46"],
  ["pink", "Pink", "صورتی", "#f472b6", "#9d174d"],
  ["amber", "Amber", "کهربایی", "#fbbf24", "#92400e"],
];
for (const [suf, en, fa, c1, c2] of PRESS_THEMES) {
  fx({
    id: `press-button-3d-${suf}`,
    name: `Pressable 3D Button — ${en}`,
    fa: `دکمه فشاری سه‌بعدی — ${fa}`,
    description: `A chunky ${en.toLowerCase()} button with a hard shadow base that physically sinks when clicked.`,
    faDescription: `دکمه ${fa} با سایه سفت که با کلیک واقعاً فرو می‌رود.`,
    tags: ["button", "3d", "click"],
    interaction: "click",
    html: `<button class="pb-btn" type="button">PRESS</button>`,
    css: `.fx-press-button-3d-${suf} .pb-btn {
  padding: 14px 34px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.6);
  background: ${c1};
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 8px 0 ${c2}, 0 16px 22px rgba(0, 0, 0, 0.45);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.fx-press-button-3d-${suf} .pb-btn:active {
  transform: translateY(8px);
  box-shadow: 0 0 0 ${c2}, 0 3px 8px rgba(0, 0, 0, 0.4);
}`,
  });
}

/* ---------------------------------------------------------- */
/* 13 — Tri-blade spinner                                     */
/* ---------------------------------------------------------- */
fx({
  id: "tri-blade-spin",
  name: "Tri-Blade 3D Spinner",
  fa: "پروانه سه‌پره سه‌بعدی",
  description: "Three glowing panels rotate around a shared axis like a windmill in 3D space.",
  faDescription: "سه پنل درخشان مثل پروانه در فضای سه‌بعدی دور محور مشترک می‌چرخند.",
  tags: ["spinner", "3d", "blade"],
  interaction: "auto",
  html: `<div class="tb-stage"><div class="tb-wheel"><span class="tb-blade tb-b1">A</span><span class="tb-blade tb-b2">B</span><span class="tb-blade tb-b3">C</span></div></div>`,
  css: `.fx-tri-blade-spin .tb-stage {
  perspective: 700px;
}
.fx-tri-blade-spin .tb-wheel {
  position: relative;
  width: 64px;
  height: 88px;
  transform-style: preserve-3d;
  animation: tb-rot 7s linear infinite;
}
.fx-tri-blade-spin .tb-blade {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: linear-gradient(180deg, #22d3ee, #0e7490);
  border: 1px solid rgba(165, 243, 252, 0.5);
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #ecfeff;
  opacity: 0.92;
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.35);
}
.fx-tri-blade-spin .tb-b1 { transform: rotateY(0deg) translateZ(72px); }
.fx-tri-blade-spin .tb-b2 { transform: rotateY(120deg) translateZ(72px); }
.fx-tri-blade-spin .tb-b3 { transform: rotateY(240deg) translateZ(72px); }
@keyframes tb-rot {
  from { transform: rotateX(-16deg) rotateY(0deg); }
  to { transform: rotateX(-16deg) rotateY(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Hover lift in 3D                                      */
/* ---------------------------------------------------------- */
fx({
  id: "hover-lift-3d",
  name: "3D Hover Lift",
  fa: "بلندشدن سه‌بعدی",
  description: "The tile rises toward the viewer on hover with a deepening drop shadow.",
  faDescription: "کاشی با هاور به سمت بیننده بلند می‌شود و سایه‌اش عمیق‌تر می‌شود.",
  tags: ["hover", "3d", "lift"],
  interaction: "hover",
  html: `<div class="hl-stage"><div class="hl-tile">LIFT</div></div>`,
  css: `.fx-hover-lift-3d .hl-stage {
  perspective: 560px;
}
.fx-hover-lift-3d .hl-tile {
  width: 130px;
  height: 86px;
  border-radius: 14px;
  background: linear-gradient(135deg, #a78bfa, #5b21b6);
  color: #f5f3ff;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 3px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.2), box-shadow 0.4s ease;
}
.fx-hover-lift-3d .hl-stage:hover .hl-tile {
  transform: translateZ(48px);
  box-shadow: 0 30px 46px rgba(0, 0, 0, 0.55);
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Ferris wheel (vertical ring)                          */
/* ---------------------------------------------------------- */
fx({
  id: "ferris-wheel-3d",
  name: "3D Ferris Wheel",
  fa: "چرخ‌وفلک سه‌بعدی",
  description: "A vertical 3D wheel of eight cabins rotating around the X axis, tilted for depth.",
  faDescription: "چرخ سه‌بعدی عمودی با هشت کابین که حول محور X می‌چرخد.",
  tags: ["wheel", "3d", "ring"],
  interaction: "auto",
  html: `<div class="fw-stage"><div class="fw-wheel"><span class="fw-cab fw-c1"></span><span class="fw-cab fw-c2"></span><span class="fw-cab fw-c3"></span><span class="fw-cab fw-c4"></span><span class="fw-cab fw-c5"></span><span class="fw-cab fw-c6"></span><span class="fw-cab fw-c7"></span><span class="fw-cab fw-c8"></span></div></div>`,
  css: `.fx-ferris-wheel-3d .fw-stage {
  perspective: 700px;
}
.fx-ferris-wheel-3d .fw-wheel {
  position: relative;
  width: 34px;
  height: 34px;
  transform-style: preserve-3d;
  animation: fw-spin 11s linear infinite;
}
.fx-ferris-wheel-3d .fw-cab {
  position: absolute;
  top: -8px;
  left: -8px;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: linear-gradient(135deg, #fde047, #ca8a04);
  border: 1px solid rgba(254, 240, 138, 0.6);
  box-shadow: 0 0 12px rgba(253, 224, 71, 0.4);
}
.fx-ferris-wheel-3d .fw-c1 { transform: rotateX(0deg) translateZ(78px); }
.fx-ferris-wheel-3d .fw-c2 { transform: rotateX(45deg) translateZ(78px); }
.fx-ferris-wheel-3d .fw-c3 { transform: rotateX(90deg) translateZ(78px); }
.fx-ferris-wheel-3d .fw-c4 { transform: rotateX(135deg) translateZ(78px); }
.fx-ferris-wheel-3d .fw-c5 { transform: rotateX(180deg) translateZ(78px); }
.fx-ferris-wheel-3d .fw-c6 { transform: rotateX(225deg) translateZ(78px); }
.fx-ferris-wheel-3d .fw-c7 { transform: rotateX(270deg) translateZ(78px); }
.fx-ferris-wheel-3d .fw-c8 { transform: rotateX(315deg) translateZ(78px); }
@keyframes fw-spin {
  from { transform: rotateY(-28deg) rotateX(0deg); }
  to { transform: rotateY(-28deg) rotateX(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Rotate to corner on hover                             */
/* ---------------------------------------------------------- */
fx({
  id: "hover-rotate-box",
  name: "Corner Rotate Box",
  fa: "جعبه چرخان به گوشه",
  description: "On hover the violet box pivots to face the corner, like a product card in a store.",
  faDescription: "جعبه بنفش با هاور به سمت گوشه می‌چرخد؛ مثل کارت محصول فروشگاه.",
  tags: ["hover", "3d", "rotate"],
  interaction: "hover",
  html: `<div class="hr-stage"><div class="hr-box">DeKo</div></div>`,
  css: `.fx-hover-rotate-box .hr-stage {
  perspective: 620px;
}
.fx-hover-rotate-box .hr-box {
  width: 132px;
  height: 92px;
  border-radius: 12px;
  background: linear-gradient(135deg, #a78bfa, #6d28d9);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  transition: transform 0.5s ease;
}
.fx-hover-rotate-box .hr-stage:hover .hr-box {
  transform: rotateX(-16deg) rotateY(26deg);
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Flip badge                                            */
/* ---------------------------------------------------------- */
fx({
  id: "flip-badge-3d",
  name: "Flipping 3D Badge",
  fa: "نشان فلیپ‌زننده",
  description: "A round badge that bouncily flips between its gradient face and its dark face.",
  faDescription: "نشان گردی که با فنری بین روی گرادیانی و پشت تیره‌اش برمی‌گردد.",
  tags: ["badge", "flip", "3d"],
  interaction: "hover",
  html: `<div class="fb-stage"><div class="fb-badge"><span class="fb-side fb-front">DeKo</span><span class="fb-side fb-back">css</span></div></div>`,
  css: `.fx-flip-badge-3d .fb-stage {
  perspective: 520px;
}
.fx-flip-badge-3d .fb-badge {
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.3, 1.4, 0.4, 1);
}
.fx-flip-badge-3d .fb-stage:hover .fb-badge {
  transform: rotateY(180deg);
}
.fx-flip-badge-3d .fb-side {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 18px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.fx-flip-badge-3d .fb-front {
  background: radial-gradient(circle at 30% 30%, #f0abfc, #c026d3);
  color: #fff;
  box-shadow: 0 10px 24px rgba(192, 38, 211, 0.45);
}
.fx-flip-badge-3d .fb-back {
  transform: rotateY(180deg);
  background: #0f172a;
  border: 2px solid #f0abfc;
  color: #f0abfc;
}`,
});

/* ---------------------------------------------------------- */
/* 18 — Y-spinning text                                       */
/* ---------------------------------------------------------- */
const TEXT_ROTATE_THEMES: [string, string, string, string][] = [
  ["cyan", "Cyan", "فیروزه‌ای", "#22d3ee"],
  ["pink", "Pink", "صورتی", "#f472b6"],
  ["lime", "Lime", "لیمویی", "#a3e635"],
];
for (const [suf, en, fa, c1] of TEXT_ROTATE_THEMES) {
  fx({
    id: `text-rotate-3d-${suf}`,
    name: `3D Text Spin — ${en}`,
    fa: `متن چرخان سه‌بعدی — ${fa}`,
    description: `The word DeKo spins around the vertical axis in ${en.toLowerCase()}, edge-on and back.`,
    faDescription: `کلمه DeKo به رنگ ${fa} حول محور عمودی می‌چرخد و از پهلو پنهان می‌شود.`,
    tags: ["text", "spin", "3d"],
    interaction: "auto",
    html: `<div class="tr-stage"><span class="tr-text">DeKo</span></div>`,
    css: `.fx-text-rotate-3d-${suf} .tr-stage {
  perspective: 520px;
}
.fx-text-rotate-3d-${suf} .tr-text {
  display: inline-block;
  font-size: 38px;
  font-weight: 900;
  color: ${c1};
  transform-style: preserve-3d;
  animation: tr-y-${suf} 5.5s linear infinite;
}
@keyframes tr-y-${suf} {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 19 — Flipping word (hover)                                 */
/* ---------------------------------------------------------- */
fx({
  id: "text-flip-3d",
  name: "Flipping Word",
  fa: "کلمه برگردان",
  description: "Hover flips the word 180° around the X axis to swap FRONT for BACK.",
  faDescription: "با هاور کلمه ۱۸۰ درجه حول محور X برمی‌گردد و FRONT به BACK تبدیل می‌شود.",
  tags: ["text", "flip", "3d"],
  interaction: "hover",
  html: `<div class="tf-stage"><span class="tf-flip"><span class="tf-face tf-front">FRONT</span><span class="tf-face tf-back">BACK</span></span></div>`,
  css: `.fx-text-flip-3d .tf-stage {
  perspective: 480px;
}
.fx-text-flip-3d .tf-flip {
  position: relative;
  display: inline-block;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.3, 0.9, 0.35, 1.1);
}
.fx-text-flip-3d .tf-stage:hover .tf-flip {
  transform: rotateX(180deg);
}
.fx-text-flip-3d .tf-face {
  display: block;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.fx-text-flip-3d .tf-front {
  color: #f0abfc;
}
.fx-text-flip-3d .tf-back {
  position: absolute;
  inset: 0;
  transform: rotateX(180deg);
  color: #67e8f9;
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Orbiting dots (3D)                                    */
/* ---------------------------------------------------------- */
const ORBIT_THEMES: [string, string, string, string][] = [
  ["amber", "Amber", "کهربایی", "#fbbf24"],
  ["cyan", "Cyan", "فیروزه‌ای", "#22d3ee"],
  ["rose", "Rose", "رز", "#fb7185"],
];
for (const [suf, en, fa, c1] of ORBIT_THEMES) {
  fx({
    id: `orbit-3d-${suf}`,
    name: `3D Orbit Dots — ${en}`,
    fa: `نقاط در مدار سه‌بعدی — ${fa}`,
    description: `Six ${en.toLowerCase()} dots orbit a shared center on a 3D ring.`,
    faDescription: `شش نقطه ${fa} روی حلقه‌ای سه‌بعدی دور مرکز می‌گردند.`,
    tags: ["orbit", "3d", "dots"],
    interaction: "auto",
    html: `<div class="ob-stage"><div class="ob-ring"><span class="ob-dot ob-d1"></span><span class="ob-dot ob-d2"></span><span class="ob-dot ob-d3"></span><span class="ob-dot ob-d4"></span><span class="ob-dot ob-d5"></span><span class="ob-dot ob-d6"></span></div></div>`,
    css: `.fx-orbit-3d-${suf} .ob-stage {
  perspective: 540px;
}
.fx-orbit-3d-${suf} .ob-ring {
  position: relative;
  width: 104px;
  height: 104px;
  transform-style: preserve-3d;
  animation: ob-spin-${suf} 4.6s linear infinite;
}
.fx-orbit-3d-${suf} .ob-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
  border-radius: 50%;
  background: ${c1};
  box-shadow: 0 0 12px ${c1};
}
.fx-orbit-3d-${suf} .ob-d1 { transform: rotateY(0deg) translateZ(72px); }
.fx-orbit-3d-${suf} .ob-d2 { transform: rotateY(60deg) translateZ(72px); }
.fx-orbit-3d-${suf} .ob-d3 { transform: rotateY(120deg) translateZ(72px); }
.fx-orbit-3d-${suf} .ob-d4 { transform: rotateY(180deg) translateZ(72px); }
.fx-orbit-3d-${suf} .ob-d5 { transform: rotateY(240deg) translateZ(72px); }
.fx-orbit-3d-${suf} .ob-d6 { transform: rotateY(300deg) translateZ(72px); }
@keyframes ob-spin-${suf} {
  from { transform: rotateX(-20deg) rotateY(0deg); }
  to { transform: rotateX(-20deg) rotateY(360deg); }
}`,
  });
}

/* ---------------------------------------------------------- */
/* 21 — Pop-out card                                          */
/* ---------------------------------------------------------- */
const POP_THEMES: [string, string, string, string, string][] = [
  ["sunset", "Sunset", "غروب", "#f97316", "#c2410c"],
  ["grape", "Grape", "انگوری", "#c084fc", "#6b21a8"],
  ["sea", "Sea", "دریایی", "#2dd4bf", "#115e59"],
];
for (const [suf, en, fa, c1, c2] of POP_THEMES) {
  fx({
    id: `pop-out-card-${suf}`,
    name: `Pop-Out Card — ${en}`,
    fa: `کارت پرشی سه‌بعدی — ${fa}`,
    description: `Hovering throws the ${en.toLowerCase()} card straight at the viewer with a floating shadow.`,
    faDescription: `با هاور، کارت ${fa} به سمت بیننده پرت می‌شود و سایه‌اش پایین می‌ماند.`,
    tags: ["card", "3d", "hover"],
    interaction: "hover",
    html: `<div class="po-stage"><div class="po-card">POP</div></div>`,
    css: `.fx-pop-out-card-${suf} .po-stage {
  perspective: 600px;
}
.fx-pop-out-card-${suf} .po-card {
  width: 150px;
  height: 96px;
  border-radius: 14px;
  background: linear-gradient(135deg, ${c1}, ${c2});
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 3px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.fx-pop-out-card-${suf} .po-stage:hover .po-card {
  transform: translateZ(46px) rotateX(8deg);
  box-shadow: 0 28px 44px rgba(0, 0, 0, 0.55);
}`,
  });
}

/* ---------------------------------------------------------- */
/* 22 — Panel swipe-in                                        */
/* ---------------------------------------------------------- */
fx({
  id: "panel-swipe-3d",
  name: "3D Panel Swipe-In",
  fa: "پنل ورودی سه‌بعدی",
  description: "A faded panel swings in from the side and settles flat when you hover the stage.",
  faDescription: "پنل محو از پهلو با چرخش سه‌بعدی وارد صحنه می‌شود و صاف می‌ایستد.",
  tags: ["panel", "3d", "hover"],
  interaction: "hover",
  html: `<div class="ps-stage"><div class="ps-panel">WELCOME</div></div>`,
  css: `.fx-panel-swipe-3d .ps-stage {
  perspective: 700px;
}
.fx-panel-swipe-3d .ps-panel {
  width: 150px;
  height: 96px;
  border-radius: 12px;
  background: linear-gradient(135deg, #155e75, #083344);
  border: 1px solid rgba(165, 243, 252, 0.35);
  color: #a5f3fc;
  display: grid;
  place-items: center;
  font-weight: 700;
  letter-spacing: 2px;
  transform: translateX(-42px) rotateY(55deg);
  opacity: 0.35;
  transition: transform 0.55s ease, opacity 0.55s ease;
}
.fx-panel-swipe-3d .ps-stage:hover .ps-panel {
  transform: translateX(0) rotateY(0deg);
  opacity: 1;
}`,
});

/* ---------------------------------------------------------- */
/* 23 — Unfolding box flaps                                   */
/* ---------------------------------------------------------- */
fx({
  id: "box-unfold-3d",
  name: "Unfolding Box",
  fa: "جعبه بازشو",
  description: "Two hidden flaps unfold from the top and bottom of the box on hover.",
  faDescription: "دو درپوش پنهان با هاور از بالا و پایین جعبه باز می‌شوند.",
  tags: ["unfold", "3d", "hover"],
  interaction: "hover",
  html: `<div class="bu-stage"><div class="bu-box"><span class="bu-flap bu-ft"></span><span class="bu-flap bu-fb"></span><div class="bu-core">DeKo</div></div></div>`,
  css: `.fx-box-unfold-3d .bu-stage {
  perspective: 700px;
}
.fx-box-unfold-3d .bu-box {
  position: relative;
  width: 130px;
  height: 88px;
  transform-style: preserve-3d;
}
.fx-box-unfold-3d .bu-core {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, #7c3aed, #4c1d95);
  display: grid;
  place-items: center;
  color: #ede9fe;
  font-weight: 800;
  letter-spacing: 2px;
}
.fx-box-unfold-3d .bu-flap {
  position: absolute;
  left: 0;
  right: 0;
  height: 40px;
  background: rgba(167, 139, 250, 0.35);
  border: 1px solid rgba(196, 181, 253, 0.6);
  transition: transform 0.6s cubic-bezier(0.25, 0.9, 0.3, 1.15), opacity 0.6s ease;
  opacity: 0;
}
.fx-box-unfold-3d .bu-ft {
  top: 0;
  border-radius: 10px 10px 0 0;
  transform-origin: top center;
  transform: rotateX(-95deg);
}
.fx-box-unfold-3d .bu-fb {
  bottom: 0;
  border-radius: 0 0 10px 10px;
  transform-origin: bottom center;
  transform: rotateX(95deg);
}
.fx-box-unfold-3d .bu-stage:hover .bu-flap {
  opacity: 1;
  transform: rotateX(0deg);
}`,
});

/* ---------------------------------------------------------- */
/* 24 — Depth stack reveal                                    */
/* ---------------------------------------------------------- */
fx({
  id: "depth-stack-3d",
  name: "Depth Stack Reveal",
  fa: "پشته عمقی",
  description: "Hovering tilts the teal card and reveals two cards stacked behind it in depth.",
  faDescription: "با هاور کارت فیروزه‌ای خم می‌شود و دو کارت پشتش در عمق پیدا می‌شوند.",
  tags: ["stack", "3d", "hover"],
  interaction: "hover",
  html: `<div class="hd-stage"><div class="hd-card">STACK</div></div>`,
  css: `.fx-depth-stack-3d .hd-stage {
  perspective: 640px;
}
.fx-depth-stack-3d .hd-card {
  position: relative;
  width: 140px;
  height: 88px;
  border-radius: 12px;
  background: linear-gradient(135deg, #14b8a6, #0f766e);
  color: #f0fdfa;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 2px;
  transform-style: preserve-3d;
  transition: transform 0.45s ease;
}
.fx-depth-stack-3d .hd-card::before,
.fx-depth-stack-3d .hd-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1.5px solid rgba(45, 212, 191, 0.55);
  background: rgba(19, 78, 74, 0.7);
  opacity: 0;
  transition: transform 0.45s ease, opacity 0.45s ease;
  z-index: -1;
}
.fx-depth-stack-3d .hd-card::before {
  transform: translateZ(-20px);
}
.fx-depth-stack-3d .hd-card::after {
  transform: translateZ(-40px);
}
.fx-depth-stack-3d .hd-stage:hover .hd-card {
  transform: rotateX(14deg) rotateY(18deg);
}
.fx-depth-stack-3d .hd-stage:hover .hd-card::before {
  opacity: 1;
  transform: translateZ(-34px);
}
.fx-depth-stack-3d .hd-stage:hover .hd-card::after {
  opacity: 1;
  transform: translateZ(-68px);
}`,
});

/* ---------------------------------------------------------- */
/* 25 — On/Off switch plane                                   */
/* ---------------------------------------------------------- */
fx({
  id: "switch-plane-3d",
  name: "On/Off 3D Plane",
  fa: "صفحه کلید سه‌بعدی",
  description: "A square tile that somersaults between ON and OFF faces on hover.",
  faDescription: "کاشی مربعی که با هاور بین دو روییِ ON و OFF پشتک می‌زند.",
  tags: ["switch", "flip", "3d"],
  interaction: "hover",
  html: `<div class="sp-stage"><div class="sp-plane"><span class="sp-face sp-on">ON</span><span class="sp-face sp-off">OFF</span></div></div>`,
  css: `.fx-switch-plane-3d .sp-stage {
  perspective: 560px;
}
.fx-switch-plane-3d .sp-plane {
  position: relative;
  width: 92px;
  height: 92px;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.3, 1.3, 0.4, 1);
}
.fx-switch-plane-3d .sp-stage:hover .sp-plane {
  transform: rotateY(180deg);
}
.fx-switch-plane-3d .sp-face {
  position: absolute;
  inset: 0;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 2px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.fx-switch-plane-3d .sp-on {
  background: linear-gradient(135deg, #4ade80, #15803d);
  color: #052e16;
}
.fx-switch-plane-3d .sp-off {
  transform: rotateY(180deg);
  background: #27272a;
  border: 2px solid #52525b;
  color: #a1a1aa;
}`,
});

/* ---------------------------------------------------------- */
/* 26 — Spinning vinyl                                        */
/* ---------------------------------------------------------- */
fx({
  id: "vinyl-spin-3d",
  name: "Spinning 3D Vinyl",
  fa: "صفحه گرامافون سه‌بعدی",
  description: "A tilted vinyl record with grooves and a pink label spins like it is playing.",
  faDescription: "صفحه گرامافون شیب‌دار با شیارها و لیبل صورتی مثل موقع پخش می‌چرخد.",
  tags: ["vinyl", "spin", "3d"],
  interaction: "auto",
  html: `<div class="vy-stage"><div class="vy-disc"><span class="vy-label"></span></div></div>`,
  css: `.fx-vinyl-spin-3d .vy-stage {
  perspective: 620px;
}
.fx-vinyl-spin-3d .vy-disc {
  position: relative;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background: repeating-radial-gradient(circle, #111113 0 2px, #1d1d21 2px 4px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 32px rgba(0, 0, 0, 0.55);
  display: grid;
  place-items: center;
  animation: vy-spin 4.5s linear infinite;
}
.fx-vinyl-spin-3d .vy-label {
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: radial-gradient(circle, #f472b6 40%, #9d174d 100%);
}
.fx-vinyl-spin-3d .vy-label::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 7px;
  height: 7px;
  margin: -3.5px 0 0 -3.5px;
  border-radius: 50%;
  background: #0a0812;
}
@keyframes vy-spin {
  from { transform: rotateX(56deg) rotateZ(0deg); }
  to { transform: rotateX(56deg) rotateZ(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 27 — Swinging 3D pendulum                                  */
/* ---------------------------------------------------------- */
fx({
  id: "pendulum-3d",
  name: "3D Pendulum",
  fa: "آونگ سه‌بعدی",
  description: "A glowing pendulum swings left and right, twisting slightly in 3D.",
  faDescription: "آونگ درخشان چپ‌وراست تاب می‌خورد و کمی در فضا می‌پیچد.",
  tags: ["pendulum", "swing", "3d"],
  interaction: "auto",
  html: `<div class="pd-stage"><div class="pd-arm"><span class="pd-ball"></span></div></div>`,
  css: `.fx-pendulum-3d .pd-stage {
  perspective: 560px;
  padding-top: 4px;
}
.fx-pendulum-3d .pd-arm {
  position: relative;
  width: 3px;
  height: 88px;
  margin: 0 auto;
  background: linear-gradient(#67e8f9, rgba(103, 232, 249, 0.15));
  transform-origin: top center;
  animation: pd-swing 2.4s ease-in-out infinite alternate;
}
.fx-pendulum-3d .pd-ball {
  position: absolute;
  bottom: -16px;
  left: 50%;
  width: 30px;
  height: 30px;
  margin-left: -15px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #a5f3fc, #0891b2 70%);
  box-shadow: 0 0 22px rgba(34, 211, 238, 0.55);
}
@keyframes pd-swing {
  from { transform: rotateZ(-52deg) rotateY(28deg); }
  to { transform: rotateZ(52deg) rotateY(-28deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 28 — 3D spiral of dots                                     */
/* ---------------------------------------------------------- */
fx({
  id: "spiral-3d",
  name: "3D Dot Spiral",
  fa: "مارپیچ نقطه‌ای سه‌بعدی",
  description: "Eight dots climb like a spiral staircase while the whole column rotates.",
  faDescription: "هشت نقطه مثل پله‌های مارپیچ بالا می‌روند و کل ستون می‌چرخد.",
  tags: ["spiral", "3d", "dots"],
  interaction: "auto",
  html: `<div class="s3-stage"><div class="s3-spin"><span class="s3-dot s3-d1"></span><span class="s3-dot s3-d2"></span><span class="s3-dot s3-d3"></span><span class="s3-dot s3-d4"></span><span class="s3-dot s3-d5"></span><span class="s3-dot s3-d6"></span><span class="s3-dot s3-d7"></span><span class="s3-dot s3-d8"></span></div></div>`,
  css: `.fx-spiral-3d .s3-stage {
  perspective: 600px;
}
.fx-spiral-3d .s3-spin {
  position: relative;
  width: 116px;
  height: 116px;
  transform-style: preserve-3d;
  animation: s3-rot 6.5s linear infinite;
}
.fx-spiral-3d .s3-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 13px;
  height: 13px;
  margin: -6.5px 0 0 -6.5px;
  border-radius: 50%;
  background: #a78bfa;
  box-shadow: 0 0 10px rgba(167, 139, 250, 0.7);
}
.fx-spiral-3d .s3-d1 { transform: translateY(-42px) rotateY(0deg) translateZ(48px); }
.fx-spiral-3d .s3-d2 { transform: translateY(-30px) rotateY(45deg) translateZ(48px); }
.fx-spiral-3d .s3-d3 { transform: translateY(-18px) rotateY(90deg) translateZ(48px); }
.fx-spiral-3d .s3-d4 { transform: translateY(-6px) rotateY(135deg) translateZ(48px); }
.fx-spiral-3d .s3-d5 { transform: translateY(6px) rotateY(180deg) translateZ(48px); }
.fx-spiral-3d .s3-d6 { transform: translateY(18px) rotateY(225deg) translateZ(48px); }
.fx-spiral-3d .s3-d7 { transform: translateY(30px) rotateY(270deg) translateZ(48px); }
.fx-spiral-3d .s3-d8 { transform: translateY(42px) rotateY(315deg) translateZ(48px); }
@keyframes s3-rot {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 29 — Holographic panel                                     */
/* ---------------------------------------------------------- */
fx({
  id: "holo-panel-3d",
  name: "Holographic Panel",
  fa: "پنل هولوگرافیک",
  description: "An iridescent panel tilts in 3D while a light sheen sweeps across it on hover.",
  faDescription: "پنل رنگین‌کمانی با هاور خم می‌شود و برق نور رویش حرکت می‌کند.",
  tags: ["hologram", "3d", "sheen"],
  interaction: "hover",
  html: `<div class="hp-stage"><div class="hp-card"><span>HOLO</span></div></div>`,
  css: `.fx-holo-panel-3d .hp-stage {
  perspective: 700px;
}
.fx-holo-panel-3d .hp-card {
  position: relative;
  width: 150px;
  height: 96px;
  border-radius: 12px;
  background: linear-gradient(120deg, #8b5cf6, #ec4899, #22d3ee);
  overflow: hidden;
  display: grid;
  place-items: center;
  transition: transform 0.4s ease;
}
.fx-holo-panel-3d .hp-card span {
  position: relative;
  z-index: 1;
  font-weight: 900;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.92);
}
.fx-holo-panel-3d .hp-card::before {
  content: "";
  position: absolute;
  inset: -60%;
  background: linear-gradient(60deg, transparent 42%, rgba(255, 255, 255, 0.5) 50%, transparent 58%);
  transform: translateX(-70%);
  transition: transform 0.85s ease;
}
.fx-holo-panel-3d .hp-stage:hover .hp-card {
  transform: rotateX(10deg) rotateY(-14deg);
}
.fx-holo-panel-3d .hp-stage:hover .hp-card::before {
  transform: translateX(70%);
}`,
});

/* ---------------------------------------------------------- */
/* 30 — Gate doors                                            */
/* ---------------------------------------------------------- */
fx({
  id: "gate-doors-3d",
  name: "3D Gate Doors",
  fa: "دروازه دولنگه سه‌بعدی",
  description: "Two golden gate leaves swing open in opposite directions on hover.",
  faDescription: "دو لنگه دروازه طلایی با هاور در جهت مخالف هم باز می‌شوند.",
  tags: ["gate", "3d", "hover"],
  interaction: "hover",
  html: `<div class="gt-stage"><div class="gt-inner"><span class="gt-behind">DeKo</span><span class="gt-leaf gt-left">L</span><span class="gt-leaf gt-right">R</span></div></div>`,
  css: `.fx-gate-doors-3d .gt-stage {
  perspective: 720px;
}
.fx-gate-doors-3d .gt-inner {
  position: relative;
  width: 160px;
  height: 96px;
  transform-style: preserve-3d;
}
.fx-gate-doors-3d .gt-behind {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  border: 1.5px dashed rgba(250, 204, 21, 0.5);
  display: grid;
  place-items: center;
  color: #fde047;
  font-weight: 800;
}
.fx-gate-doors-3d .gt-leaf {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  background: linear-gradient(135deg, #facc15, #a16207);
  display: grid;
  place-items: center;
  color: rgba(0, 0, 0, 0.55);
  font-weight: 900;
  transition: transform 0.8s cubic-bezier(0.25, 0.9, 0.3, 1);
}
.fx-gate-doors-3d .gt-left {
  left: 0;
  border-radius: 10px 0 0 10px;
  transform-origin: left center;
}
.fx-gate-doors-3d .gt-right {
  right: 0;
  border-radius: 0 10px 10px 0;
  transform-origin: right center;
}
.fx-gate-doors-3d .gt-stage:hover .gt-left {
  transform: rotateY(-110deg);
}
.fx-gate-doors-3d .gt-stage:hover .gt-right {
  transform: rotateY(110deg);
}`,
});

/* ---------------------------------------------------------- */
/* 31 — Planet with orbiting moon                             */
/* ---------------------------------------------------------- */
fx({
  id: "planet-moon-3d",
  name: "Planet & Moon Orbit",
  fa: "سیاره و مدار ماه",
  description: "A purple planet with a small moon circling it on a visible 3D orbit ring.",
  faDescription: "سیاره بنفش با ماه کوچکی که روی حلقه مدار سه‌بعدی دورش می‌گردد.",
  tags: ["planet", "orbit", "3d"],
  interaction: "auto",
  html: `<div class="pm-stage"><div class="pm-system"><span class="pm-ring"></span><span class="pm-planet"></span><span class="pm-orbit"><span class="pm-moon"></span></span></div></div>`,
  css: `.fx-planet-moon-3d .pm-stage {
  perspective: 620px;
}
.fx-planet-moon-3d .pm-system {
  position: relative;
  width: 120px;
  height: 120px;
  transform-style: preserve-3d;
}
.fx-planet-moon-3d .pm-planet {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 58px;
  height: 58px;
  margin: -29px 0 0 -29px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 30%, #c4b5fd, #6d28d9 65%, #312e81);
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.45);
  transform: translateZ(0);
}
.fx-planet-moon-3d .pm-ring {
  position: absolute;
  inset: 10px;
  border-radius: 50%;
  border: 1.5px dashed rgba(196, 181, 253, 0.45);
  transform: rotateX(68deg);
}
.fx-planet-moon-3d .pm-orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: -50px 0 0 -50px;
  transform-style: preserve-3d;
  animation: pm-spin 6s linear infinite;
}
.fx-planet-moon-3d .pm-moon {
  position: absolute;
  top: 0;
  left: 50%;
  width: 16px;
  height: 16px;
  margin-left: -8px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #f1f5f9, #94a3b8);
  transform: rotateX(68deg);
}
@keyframes pm-spin {
  from { transform: rotateX(-8deg) rotateY(0deg); }
  to { transform: rotateX(-8deg) rotateY(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 32 — Card throw                                            */
/* ---------------------------------------------------------- */
fx({
  id: "card-throw-3d",
  name: "Thrown Card",
  fa: "کارت پرتابی",
  description: "Hovering flings the card at the viewer with a spin, like throwing a playing card.",
  faDescription: "با هاور کارت با چرخش به سمت بیننده پرتاب می‌شود؛ مثل پرتاب کارت بازی.",
  tags: ["card", "throw", "3d"],
  interaction: "hover",
  html: `<div class="ct-stage"><div class="ct-card">DeKo</div></div>`,
  css: `.fx-card-throw-3d .ct-stage {
  perspective: 560px;
}
.fx-card-throw-3d .ct-card {
  width: 110px;
  height: 92px;
  border-radius: 12px;
  background: linear-gradient(150deg, #f8fafc, #cbd5e1);
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #0f172a;
  display: grid;
  place-items: center;
  font-weight: 900;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
  transition: transform 0.55s cubic-bezier(0.2, 0.9, 0.3, 1.1);
}
.fx-card-throw-3d .ct-stage:hover .ct-card {
  transform: translateZ(60px) rotateZ(-10deg) rotateX(12deg) scale(1.08);
}`,
});

/* ---------------------------------------------------------- */
/* 33 — Gyroscope rings                                       */
/* ---------------------------------------------------------- */
fx({
  id: "gyro-rings-3d",
  name: "3D Gyroscope Rings",
  fa: "حلقه‌های ژیروسکوپ",
  description: "Three glowing rings rotate on different axes at once, like a gyroscope.",
  faDescription: "سه حلقه درخشان هم‌زمان روی محورهای مختلف می‌چرخند؛ مثل ژیروسکوپ.",
  tags: ["rings", "gyro", "3d"],
  interaction: "auto",
  html: `<div class="gy-stage"><div class="gy-core"><span class="gy-ring gy-r1"></span><span class="gy-ring gy-r2"></span><span class="gy-ring gy-r3"></span><span class="gy-dot"></span></div></div>`,
  css: `.fx-gyro-rings-3d .gy-stage {
  perspective: 640px;
}
.fx-gyro-rings-3d .gy-core {
  position: relative;
  width: 110px;
  height: 110px;
  transform-style: preserve-3d;
}
.fx-gyro-rings-3d .gy-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(34, 211, 238, 0.6);
}
.fx-gyro-rings-3d .gy-r1 { animation: gy-x 5s linear infinite; }
.fx-gyro-rings-3d .gy-r2 { animation: gy-y 6s linear infinite; border-color: rgba(244, 114, 182, 0.6); }
.fx-gyro-rings-3d .gy-r3 { animation: gy-z 7s linear infinite; border-color: rgba(250, 204, 21, 0.55); }
.fx-gyro-rings-3d .gy-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  margin: -9px 0 0 -9px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #a5f3fc, #0891b2);
  box-shadow: 0 0 16px rgba(34, 211, 238, 0.7);
}
@keyframes gy-x {
  from { transform: rotateX(0deg); }
  to { transform: rotateX(360deg); }
}
@keyframes gy-y {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}
@keyframes gy-z {
  from { transform: rotateZ(0deg); }
  to { transform: rotateZ(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 34 — Origami corner fold                                   */
/* ---------------------------------------------------------- */
fx({
  id: "origami-fold-3d",
  name: "Origami Fold",
  fa: "تای اریگامی",
  description: "The corner of the paper card folds back in 3D on hover, like folded paper.",
  faDescription: "گوشه کارت کاغذی با هاور مثل کاغذ اریگامی در فضا تا می‌شود.",
  tags: ["origami", "fold", "3d"],
  interaction: "hover",
  html: `<div class="og-stage"><div class="og-card">FOLD<span class="og-corner"></span></div></div>`,
  css: `.fx-origami-fold-3d .og-stage {
  perspective: 600px;
}
.fx-origami-fold-3d .og-card {
  position: relative;
  width: 140px;
  height: 92px;
  border-radius: 10px;
  background: linear-gradient(135deg, #fef3c7, #fcd34d);
  color: #78350f;
  display: grid;
  place-items: center;
  font-weight: 900;
  letter-spacing: 2px;
  overflow: hidden;
}
.fx-origami-fold-3d .og-corner {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 46px solid #f59e0b;
  border-left: 46px solid transparent;
  transform-origin: top right;
  transition: transform 0.5s ease;
  filter: drop-shadow(-3px 3px 4px rgba(0, 0, 0, 0.25));
}
.fx-origami-fold-3d .og-stage:hover .og-corner {
  transform: rotate(-14deg) translateZ(16px);
}`,
});

/* ---------------------------------------------------------- */
/* 35 — Zoom tunnel                                           */
/* ---------------------------------------------------------- */
fx({
  id: "zoom-tunnel-3d",
  name: "3D Zoom Tunnel",
  fa: "تونل سه‌بعدی",
  description: "Concentric squares endlessly fly toward you, creating an infinite 3D tunnel.",
  faDescription: "مربع‌های هم‌مرکز بی‌وقفه به سمت شما پرواز می‌کنند؛ تونل بی‌نهایت سه‌بعدی.",
  tags: ["tunnel", "3d", "infinite"],
  interaction: "auto",
  html: `<div class="zt-stage"><div class="zt-tunnel"><span class="zt-sq zt-q1"></span><span class="zt-sq zt-q2"></span><span class="zt-sq zt-q3"></span><span class="zt-sq zt-q4"></span><span class="zt-sq zt-q5"></span></div></div>`,
  css: `.fx-zoom-tunnel-3d .zt-stage {
  perspective: 420px;
}
.fx-zoom-tunnel-3d .zt-tunnel {
  position: relative;
  width: 90px;
  height: 90px;
  transform-style: preserve-3d;
}
.fx-zoom-tunnel-3d .zt-sq {
  position: absolute;
  inset: 0;
  border: 2px solid #f472b6;
  border-radius: 12px;
  animation: zt-fly 3s linear infinite;
  box-shadow: 0 0 14px rgba(244, 114, 182, 0.4);
}
.fx-zoom-tunnel-3d .zt-q2 { animation-delay: -0.6s; }
.fx-zoom-tunnel-3d .zt-q3 { animation-delay: -1.2s; }
.fx-zoom-tunnel-3d .zt-q4 { animation-delay: -1.8s; }
.fx-zoom-tunnel-3d .zt-q5 { animation-delay: -2.4s; }
@keyframes zt-fly {
  from { transform: translateZ(-260px) rotate(0deg); opacity: 0; }
  12% { opacity: 1; }
  to { transform: translateZ(120px) rotate(70deg); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 36 — Cylinder drum                                         */
/* ---------------------------------------------------------- */
fx({
  id: "cylinder-drum-3d",
  name: "3D Cylinder Drum",
  fa: "استوانه چرخان سه‌بعدی",
  description: "Four curved-looking panels form a rotating drum, like a slot machine cylinder.",
  faDescription: "چهار پنل یک استوانه چرخان می‌سازند؛ مثل سیلندر ماشین حلوایی.",
  tags: ["drum", "cylinder", "3d"],
  interaction: "auto",
  html: `<div class="cd-stage"><div class="cd-drum"><span class="cd-face cd-f1">1</span><span class="cd-face cd-f2">2</span><span class="cd-face cd-f3">3</span><span class="cd-face cd-f4">4</span></div></div>`,
  css: `.fx-cylinder-drum-3d .cd-stage {
  perspective: 660px;
}
.fx-cylinder-drum-3d .cd-drum {
  position: relative;
  width: 72px;
  height: 92px;
  transform-style: preserve-3d;
  animation: cd-rot 8s linear infinite;
}
.fx-cylinder-drum-3d .cd-face {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: linear-gradient(180deg, #fb7185, #9f1239);
  border: 1px solid rgba(254, 205, 211, 0.5);
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 22px;
  color: #fff;
  opacity: 0.95;
}
.fx-cylinder-drum-3d .cd-f1 { transform: rotateY(0deg) translateZ(72px); }
.fx-cylinder-drum-3d .cd-f2 { transform: rotateY(90deg) translateZ(72px); }
.fx-cylinder-drum-3d .cd-f3 { transform: rotateY(180deg) translateZ(72px); }
.fx-cylinder-drum-3d .cd-f4 { transform: rotateY(270deg) translateZ(72px); }
@keyframes cd-rot {
  from { transform: rotateX(-10deg) rotateY(0deg); }
  to { transform: rotateX(-10deg) rotateY(360deg); }
}`,
});
