import type { CssEffect } from "../types";

/**
 * DeKo css — plus batch "cards-plus" (Task 8-f).
 * 40 new card effects, prefix cq-, every selector scoped under .fx-<id>.
 * Photos are pure CSS gradient placeholders — zero assets, zero JS.
 */

export const cardEffectsPlus: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  cardEffectsPlus.push({ category: "cards", interaction: "hover", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Glow border card (conic border + diagonal sheen)       */
/* ---------------------------------------------------------- */
fx({
  id: "cq-glow-border-card",
  name: "Glow Border Card",
  fa: "کارت با حاشیه درخشان",
  description:
    "Dark membership card with a conic gradient border and a diagonal sheen that sweeps across on hover.",
  faDescription: "کارت تیره با حاشیه گرادیانی و درخششی که با هاور روی آن می‌گذرد.",
  tags: ["glow", "border", "gradient", "sheen"],
  previewBg: "radial-gradient(circle at 50% 25%, #1e1b4b, #020617)",
  html: `<div class="gb"><span class="gb-chip">PRO</span><h4>Aurora Pass</h4><p>Unlimited access · 2025</p><div class="gb-sheen"></div></div>`,
  css: `.fx-cq-glow-border-card .gb {
  position: relative;
  width: 210px;
  height: 138px;
  border-radius: 16px;
  border: 2px solid transparent;
  background:
    linear-gradient(120deg, #171425, #1e1b33) padding-box,
    linear-gradient(120deg, #22d3ee, #a78bfa, #f472b6, #22d3ee) border-box;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  color: #e2e8f0;
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}
.fx-cq-glow-border-card .gb-chip {
  position: absolute;
  top: 14px;
  right: 14px;
  font-size: 9px;
  letter-spacing: 2px;
  padding: 4px 8px;
  border-radius: 999px;
  color: #0f172a;
  background: linear-gradient(120deg, #22d3ee, #a78bfa);
  font-weight: 700;
}
.fx-cq-glow-border-card .gb h4 {
  margin: 32px 0 4px 18px;
  font-size: 19px;
  color: #f8fafc;
}
.fx-cq-glow-border-card .gb p {
  margin: 0 0 0 18px;
  font-size: 11px;
  opacity: 0.7;
}
.fx-cq-glow-border-card .gb-sheen {
  position: absolute;
  top: -40px;
  bottom: -40px;
  left: -80px;
  width: 70px;
  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.16), transparent);
  transform: skewX(-18deg) translateX(-60px);
  transition: transform 0.9s ease;
}
.fx-cq-glow-border-card .gb:hover {
  transform: translateY(-3px);
  box-shadow:
    0 0 0 1px rgba(167, 139, 250, 0.35),
    0 0 26px rgba(139, 92, 246, 0.45),
    0 18px 34px rgba(0, 0, 0, 0.5);
}
.fx-cq-glow-border-card .gb:hover .gb-sheen {
  transform: skewX(-18deg) translateX(310px);
}`,
});

/* ---------------------------------------------------------- */
/* 2 — Spotlight sweep (light band crosses the card)          */
/* ---------------------------------------------------------- */
fx({
  id: "cq-spotlight-sweep",
  name: "Spotlight Sweep",
  fa: "گذر نورافکن",
  description:
    "A soft light band sweeps across a dark card from left to right on hover, like a passing spotlight.",
  faDescription: "نوار نور نرمی با هاور از چپ به راست روی کارت تیره عبور می‌کند.",
  tags: ["spotlight", "sheen", "hover"],
  previewBg: "linear-gradient(135deg, #0f172a, #1e1b4b)",
  html: `<div class="sp"><div class="sp-band"></div><h4>Spotlight</h4><p>hover to sweep the light</p></div>`,
  css: `.fx-cq-spotlight-sweep .sp {
  position: relative;
  width: 210px;
  height: 130px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(160deg, #111827, #0b1120);
  border: 1px solid rgba(148, 163, 184, 0.18);
  display: grid;
  align-content: center;
  padding: 0 20px;
  box-sizing: border-box;
}
.fx-cq-spotlight-sweep .sp h4 { margin: 0 0 6px; font-size: 18px; color: #f1f5f9; }
.fx-cq-spotlight-sweep .sp p { margin: 0; font-size: 11px; color: #94a3b8; }
.fx-cq-spotlight-sweep .sp-band {
  position: absolute;
  top: -30px;
  bottom: -30px;
  left: 0;
  width: 110px;
  background: linear-gradient(100deg, transparent, rgba(96, 165, 250, 0.22) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(96, 165, 250, 0.22) 55%, transparent);
  transform: translateX(-150px) skewX(-16deg);
  transition: transform 0.85s cubic-bezier(0.3, 0.7, 0.3, 1);
}
.fx-cq-spotlight-sweep .sp:hover .sp-band { transform: translateX(300px) skewX(-16deg); }`,
});

/* ---------------------------------------------------------- */
/* 3 — Holographic sheen (credit card, foil shifts)           */
/* ---------------------------------------------------------- */
fx({
  id: "cq-holo-sheen",
  name: "Holographic Sheen Card",
  fa: "کارت هولوگرافیک",
  description:
    "Bank-card layout whose foil overlay shifts hue and angle while hovered — a holographic shimmer.",
  faDescription: "کارت بانکی که لایه فویل آن هنگام هاور رنگ و زاویه عوض می‌کند — درخشش هولوگرافیک.",
  tags: ["holographic", "hue-rotate", "credit-card"],
  previewBg: "linear-gradient(135deg, #111827, #312e81)",
  html: `<div class="ho"><span class="ho-chip"></span><h4>holo bank</h4><span class="ho-num">5312 •••• 4291</span><span class="ho-holder">AVA LANE</span></div>`,
  css: `.fx-cq-holo-sheen .ho {
  position: relative;
  width: 216px;
  height: 136px;
  border-radius: 14px;
  background: linear-gradient(140deg, #1f2937, #0f172a);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  color: #e5e7eb;
  transition: transform 0.4s ease;
}
.fx-cq-holo-sheen .ho::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, rgba(34, 211, 238, 0.35), rgba(167, 139, 250, 0.3) 35%, rgba(244, 114, 182, 0.32) 60%, rgba(34, 211, 238, 0.35));
  background-size: 260% 260%;
  mix-blend-mode: screen;
  animation: cq-holo-foil 3.5s ease-in-out infinite alternate;
  pointer-events: none;
}
.fx-cq-holo-sheen .ho:hover { transform: rotate(-2deg) scale(1.03); }
.fx-cq-holo-sheen .ho:hover::before { animation-duration: 1.4s; }
.fx-cq-holo-sheen .ho-chip {
  position: absolute;
  top: 18px;
  left: 18px;
  width: 34px;
  height: 26px;
  border-radius: 6px;
  background: linear-gradient(135deg, #fcd34d, #d97706);
  opacity: 0.9;
}
.fx-cq-holo-sheen .ho h4 {
  position: absolute;
  top: 20px;
  right: 16px;
  margin: 0;
  font-size: 12px;
  letter-spacing: 1px;
  font-style: italic;
  color: #93c5fd;
}
.fx-cq-holo-sheen .ho-num {
  position: absolute;
  bottom: 34px;
  left: 18px;
  font-family: ui-monospace, monospace;
  font-size: 14px;
  letter-spacing: 2px;
}
.fx-cq-holo-sheen .ho-holder {
  position: absolute;
  bottom: 12px;
  left: 18px;
  font-size: 10px;
  letter-spacing: 2px;
  opacity: 0.75;
}
@keyframes cq-holo-foil {
  0% { background-position: 0% 0%; filter: hue-rotate(0deg); }
  100% { background-position: 100% 100%; filter: hue-rotate(70deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Flip info card (3D flip to details)                    */
/* ---------------------------------------------------------- */
fx({
  id: "cq-flip-info",
  name: "Flip Info Card",
  fa: "کارت برگردان اطلاعات",
  description: "Card flips in 3D to a back face listing quick details when hovered.",
  faDescription: "کارت با هاور در فضای سه‌بعدی برمی‌گردد و جزئیات پشت آن دیده می‌شود.",
  tags: ["flip", "3d", "backface"],
  previewBg: "linear-gradient(135deg, #0f172a, #134e4a)",
  html: `<div class="fl-scene"><div class="fl"><div class="fl-face fl-front"><h4>Studio</h4><p>hover for details</p></div><div class="fl-face fl-back"><h4>Studio</h4><span>✦ 42 projects</span><span>✦ 12 awards</span><span>✦ est. 2019</span></div></div></div>`,
  css: `.fx-cq-flip-info { perspective: 720px; }
.fx-cq-flip-info .fl-scene { width: 200px; height: 136px; }
.fx-cq-flip-info .fl {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.35, 0.9, 0.3, 1);
}
.fx-cq-flip-info .fl-scene:hover .fl { transform: rotateY(180deg); }
.fx-cq-flip-info .fl-face {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: grid;
  align-content: center;
  justify-items: start;
  padding: 18px;
  box-sizing: border-box;
}
.fx-cq-flip-info .fl-front {
  background: linear-gradient(150deg, #0d9488, #115e59);
  color: #ecfdf5;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35);
}
.fx-cq-flip-info .fl-front h4 { margin: 0 0 6px; font-size: 19px; }
.fx-cq-flip-info .fl-front p { margin: 0; font-size: 11px; opacity: 0.8; }
.fx-cq-flip-info .fl-back {
  background: linear-gradient(150deg, #f0fdfa, #ccfbf1);
  color: #134e4a;
  transform: rotateY(180deg);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35);
}
.fx-cq-flip-info .fl-back h4 { margin: 0 0 8px; font-size: 15px; }
.fx-cq-flip-info .fl-back span { font-size: 11px; line-height: 1.7; }`,
});

/* ---------------------------------------------------------- */
/* 5 — Slide panel card (bottom panel slides up)              */
/* ---------------------------------------------------------- */
fx({
  id: "cq-slide-panel",
  name: "Slide-Up Panel Card",
  fa: "کارت با پنل لغزان",
  description: "A gradient cover fills the card and a hidden action panel slides up from the bottom on hover.",
  faDescription: "با هاور، پنل پنهان از پایین کارت بالا می‌آید و دکمه‌ها را نشان می‌دهد.",
  tags: ["panel", "slide", "reveal"],
  previewBg: "linear-gradient(135deg, #1e293b, #0f172a)",
  html: `<div class="spc"><div class="spc-photo"></div><h4>Gallery Shot</h4><p>Neon district, 2024</p><div class="spc-panel"><span>♥ Save</span><span>↗ Share</span></div></div>`,
  css: `.fx-cq-slide-panel .spc {
  position: relative;
  width: 200px;
  height: 150px;
  border-radius: 16px;
  overflow: hidden;
  background: #0f172a;
  color: #f8fafc;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-cq-slide-panel .spc-photo {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #f472b6, #8b5cf6 60%, #312e81);
  transition: transform 0.5s ease;
}
.fx-cq-slide-panel .spc h4 {
  position: absolute;
  top: 14px;
  left: 16px;
  margin: 0;
  font-size: 16px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}
.fx-cq-slide-panel .spc p {
  position: absolute;
  top: 37px;
  left: 16px;
  margin: 0;
  font-size: 10px;
  opacity: 0.9;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.fx-cq-slide-panel .spc-panel {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 12px 16px;
  display: flex;
  gap: 14px;
  background: rgba(15, 23, 42, 0.82);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  transform: translateY(100%);
  transition: transform 0.45s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-cq-slide-panel .spc-panel span { font-size: 11px; }
.fx-cq-slide-panel .spc:hover .spc-photo { transform: scale(1.06); }
.fx-cq-slide-panel .spc:hover .spc-panel { transform: translateY(0); }`,
});

/* ---------------------------------------------------------- */
/* 6 — Expand card (grows taller, unfolds paragraph)          */
/* ---------------------------------------------------------- */
fx({
  id: "cq-expand-card",
  name: "Expand Card",
  fa: "کارت بازشو",
  description: "Card grows taller on hover, unfolding a paragraph that was clipped away.",
  faDescription: "کارت با هاور بلندتر می‌شود و پاراگراف پنهان باز می‌شود.",
  tags: ["expand", "max-height", "accordion"],
  previewBg: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
  html: `<div class="ex"><div class="ex-head"><h4>FAQ</h4><span class="ex-plus">+</span></div><p class="ex-body">Yes — every effect here is pure CSS. No JavaScript, no libraries, just style and markup working together.</p></div>`,
  css: `.fx-cq-expand-card .ex {
  width: 210px;
  background: #ffffff;
  border-radius: 14px;
  padding: 16px 18px;
  box-sizing: border-box;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.12);
  transition: box-shadow 0.4s ease;
}
.fx-cq-expand-card .ex-head { display: flex; align-items: center; justify-content: space-between; }
.fx-cq-expand-card .ex h4 { margin: 0; font-size: 16px; color: #0f172a; }
.fx-cq-expand-card .ex-plus {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #eef2ff;
  color: #4f46e5;
  font-size: 15px;
  font-weight: 700;
  transition: transform 0.4s ease, background 0.4s ease, color 0.4s ease;
}
.fx-cq-expand-card .ex-body {
  margin: 0;
  font-size: 11.5px;
  line-height: 1.55;
  color: #475569;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.4s ease, margin-top 0.4s ease;
}
.fx-cq-expand-card .ex:hover { box-shadow: 0 16px 30px rgba(79, 70, 229, 0.18); }
.fx-cq-expand-card .ex:hover .ex-plus { transform: rotate(45deg); background: #4f46e5; color: #ffffff; }
.fx-cq-expand-card .ex:hover .ex-body { max-height: 92px; opacity: 1; margin-top: 10px; }`,
});

/* ---------------------------------------------------------- */
/* 7 — Stack spread (3 cards fan out)                         */
/* ---------------------------------------------------------- */
fx({
  id: "cq-stack-spread",
  name: "Stack Spread",
  fa: "پخش شدن کارت‌های روی هم",
  description: "Three stacked cards fan out to the sides on hover, keeping the top card front and center.",
  faDescription: "سه کارت روی‌هم با هاور به دو طرف پخش می‌شوند و کارت رو می‌ماند.",
  tags: ["stack", "fan", "deck"],
  previewBg: "linear-gradient(135deg, #312e81, #701a75)",
  html: `<div class="st-scene"><div class="st st-a"></div><div class="st st-b"></div><div class="st st-top"><h4>Inbox</h4><p>3 cards, one deck</p></div></div>`,
  css: `.fx-cq-stack-spread .st-scene { position: relative; width: 200px; height: 132px; }
.fx-cq-stack-spread .st {
  position: absolute;
  inset: 0;
  border-radius: 14px;
  transition: transform 0.5s cubic-bezier(0.3, 0.9, 0.35, 1.2), box-shadow 0.5s ease;
}
.fx-cq-stack-spread .st-a { background: linear-gradient(150deg, #a78bfa, #6d28d9); box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3); }
.fx-cq-stack-spread .st-b { background: linear-gradient(150deg, #f472b6, #be185d); box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3); }
.fx-cq-stack-spread .st-top {
  background: linear-gradient(150deg, #1e293b, #0f172a);
  color: #f1f5f9;
  display: grid;
  align-content: center;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(148, 163, 184, 0.2);
}
.fx-cq-stack-spread .st-top h4 { margin: 0 0 5px; font-size: 17px; }
.fx-cq-stack-spread .st-top p { margin: 0; font-size: 11px; opacity: 0.75; }
.fx-cq-stack-spread .st-scene:hover .st-a { transform: translate(-46px, 8px) rotate(-9deg); }
.fx-cq-stack-spread .st-scene:hover .st-b { transform: translate(46px, 8px) rotate(9deg); }
.fx-cq-stack-spread .st-scene:hover .st-top { transform: translateY(-8px); }`,
});

/* ---------------------------------------------------------- */
/* 8 — Deck lift (top card lifts, shadow detaches)            */
/* ---------------------------------------------------------- */
fx({
  id: "cq-deck-lift",
  name: "Deck Lift",
  fa: "بلند شدن کارت از دسته",
  description: "The top card lifts off a neat deck while its soft shadow stays behind on the pile.",
  faDescription: "کارت رویی از دسته کارت‌ها جدا می‌شود و سایه‌اش روی دسته می‌ماند.",
  tags: ["deck", "lift", "shadow"],
  previewBg: "linear-gradient(135deg, #292524, #1c1917)",
  html: `<div class="dk-scene"><div class="dk-shadow"></div><div class="dk-under u1"></div><div class="dk-under u2"></div><div class="dk-top"><span class="dk-dot"></span><h4>Members</h4><p>128 active today</p></div></div>`,
  css: `.fx-cq-deck-lift .dk-scene { position: relative; width: 200px; height: 128px; margin-bottom: 14px; }
.fx-cq-deck-lift .dk-under, .fx-cq-deck-lift .dk-top { position: absolute; inset: 0; border-radius: 14px; }
.fx-cq-deck-lift .dk-under { background: #e7e5e4; border: 1px solid #d6d3d1; }
.fx-cq-deck-lift .dk-under.u1 { transform: translate(7px, 7px); }
.fx-cq-deck-lift .dk-under.u2 { transform: translate(14px, 14px); background: #d6d3d1; }
.fx-cq-deck-lift .dk-shadow {
  position: absolute;
  inset: 8px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.45);
  filter: blur(14px);
  transition: transform 0.45s ease, opacity 0.45s ease;
}
.fx-cq-deck-lift .dk-top {
  background: #fafaf9;
  display: grid;
  align-content: center;
  padding: 0 20px;
  box-sizing: border-box;
  transition: transform 0.45s cubic-bezier(0.3, 0.9, 0.35, 1.15);
}
.fx-cq-deck-lift .dk-dot { width: 30px; height: 6px; border-radius: 999px; background: linear-gradient(90deg, #f59e0b, #ef4444); margin-bottom: 10px; }
.fx-cq-deck-lift .dk-top h4 { margin: 0 0 4px; font-size: 16px; color: #1c1917; }
.fx-cq-deck-lift .dk-top p { margin: 0; font-size: 11px; color: #78716c; }
.fx-cq-deck-lift .dk-scene:hover .dk-top { transform: translateY(-20px); }
.fx-cq-deck-lift .dk-scene:hover .dk-shadow { transform: translateY(14px) scale(0.92); opacity: 0.35; }`,
});

/* ---------------------------------------------------------- */
/* 9 — Ticket notch (punched holes + tear wiggle)             */
/* ---------------------------------------------------------- */
fx({
  id: "cq-ticket-notch",
  name: "Cinema Ticket Notch",
  fa: "بلیت سینما",
  description: "Cinema ticket with punched side notches and a dashed stub line; hover wiggles it like tearing.",
  faDescription: "بلیت سینما با کناره‌های سوراخ‌شده و خط چین؛ با هاور مثل پاره شدن تکان می‌خورد.",
  tags: ["ticket", "mask", "wiggle"],
  previewBg: "linear-gradient(135deg, #0c0a09, #292524)",
  html: `<div class="tk"><h4>ADMIT TWO</h4><span class="tk-row">ROW A · SEAT 12</span><span class="tk-row tk-dim">19:30 · SCREEN 4</span><span class="tk-stub">★ DeKo CINEMA</span></div>`,
  css: `.fx-cq-ticket-notch .tk {
  position: relative;
  width: 216px;
  height: 116px;
  background: linear-gradient(120deg, #fef3c7, #fde68a);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 12px 18px;
  display: grid;
  align-content: center;
  row-gap: 3px;
  -webkit-mask: radial-gradient(circle 11px at 0 62%, transparent 10px, #000 11px), radial-gradient(circle 11px at 100% 62%, transparent 10px, #000 11px);
  mask: radial-gradient(circle 11px at 0 62%, transparent 10px, #000 11px), radial-gradient(circle 11px at 100% 62%, transparent 10px, #000 11px);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  filter: drop-shadow(0 10px 16px rgba(0, 0, 0, 0.45));
  transform-origin: right center;
}
.fx-cq-ticket-notch .tk h4 { margin: 0; font-size: 16px; color: #78350f; letter-spacing: 1px; }
.fx-cq-ticket-notch .tk-row { font-family: ui-monospace, monospace; font-size: 10px; color: #92400e; }
.fx-cq-ticket-notch .tk-dim { opacity: 0.65; }
.fx-cq-ticket-notch .tk-stub {
  margin-top: 6px;
  padding-top: 7px;
  border-top: 2px dashed rgba(120, 53, 15, 0.4);
  font-size: 10px;
  letter-spacing: 2px;
  color: #78350f;
}
.fx-cq-ticket-notch .tk:hover { animation: cq-ticket-tear 0.7s ease; }
@keyframes cq-ticket-tear {
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(-2.4deg) translateY(2px); }
  45% { transform: rotate(1.8deg); }
  70% { transform: rotate(-1deg) translateY(1px); }
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Receipt zigzag (torn edges, prints a line on hover)   */
/* ---------------------------------------------------------- */
fx({
  id: "cq-receipt-zigzag",
  name: "Zigzag Receipt",
  fa: "رسید دندانه‌دار",
  description: "Paper receipt with zigzag torn edges that grows longer on hover, printing an extra line.",
  faDescription: "رسید کاغذی با لبه‌های دندانه‌ای که با هاور بلندتر می‌شود و یک ردیف چاپ می‌کند.",
  tags: ["receipt", "zigzag", "print"],
  previewBg: "linear-gradient(135deg, #27272a, #18181b)",
  html: `<div class="rc"><div class="rc-paper"><h4>DEKO CAFÉ</h4><span class="rc-line">Latte ······ $4</span><span class="rc-line">Bagel ······ $3</span><span class="rc-line rc-x">Cookie ····· $2</span><span class="rc-total">TOTAL ····· $9</span></div></div>`,
  css: `.fx-cq-receipt-zigzag .rc { width: 176px; }
.fx-cq-receipt-zigzag .rc-paper {
  position: relative;
  background: #fafaf9;
  box-sizing: border-box;
  padding: 16px 16px 18px;
  display: grid;
  row-gap: 5px;
  filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.45));
}
.fx-cq-receipt-zigzag .rc-paper::before, .fx-cq-receipt-zigzag .rc-paper::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 12px;
  background: linear-gradient(-45deg, #fafaf9 8px, transparent 0), linear-gradient(45deg, #fafaf9 8px, transparent 0);
  background-size: 16px 12px;
  background-repeat: repeat-x;
}
.fx-cq-receipt-zigzag .rc-paper::before { top: -12px; }
.fx-cq-receipt-zigzag .rc-paper::after { top: 100%; transform: scaleY(-1); }
.fx-cq-receipt-zigzag .rc-paper h4 { margin: 0 0 2px; font-size: 14px; letter-spacing: 3px; color: #1c1917; text-align: center; }
.fx-cq-receipt-zigzag .rc-line { font-family: ui-monospace, monospace; font-size: 10.5px; color: #44403c; }
.fx-cq-receipt-zigzag .rc-x { max-height: 0; opacity: 0; overflow: hidden; transition: max-height 0.4s ease, opacity 0.4s ease; }
.fx-cq-receipt-zigzag .rc-total {
  font-family: ui-monospace, monospace;
  font-size: 11px;
  font-weight: 800;
  color: #1c1917;
  border-top: 1.5px dashed rgba(28, 25, 23, 0.4);
  padding-top: 7px;
}
.fx-cq-receipt-zigzag .rc:hover .rc-x { max-height: 18px; opacity: 1; }
.fx-cq-receipt-zigzag .rc:hover .rc-paper { transform: translateY(-3px); }
.fx-cq-receipt-zigzag .rc-paper { transition: transform 0.4s ease; }`,
});

/* ---------------------------------------------------------- */
/* 11 — Polaroid tilt (straightens, caption fades in)         */
/* ---------------------------------------------------------- */
fx({
  id: "cq-polaroid-tilt",
  name: "Polaroid Tilt",
  fa: "قطبی کج",
  description: "A tilted polaroid straightens itself on hover while its handwritten caption fades in.",
  faDescription: "عکس پولاروید کج با هاور صاف می‌شود و زیرنویس دست‌نویس محو-ظاهر می‌شود.",
  tags: ["polaroid", "tilt", "caption"],
  previewBg: "linear-gradient(135deg, #f5f5f4, #d6d3d1)",
  html: `<div class="po"><div class="po-photo"></div><span class="po-cap">summer, somewhere</span></div>`,
  css: `.fx-cq-polaroid-tilt .po {
  width: 150px;
  background: #ffffff;
  padding: 10px 10px 12px;
  box-sizing: border-box;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
  transform: rotate(-7deg);
  transition: transform 0.55s cubic-bezier(0.3, 1.2, 0.4, 1), box-shadow 0.55s ease;
}
.fx-cq-polaroid-tilt .po-photo {
  height: 92px;
  background: linear-gradient(135deg, #38bdf8, #818cf8 55%, #c084fc);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.fx-cq-polaroid-tilt .po-cap {
  display: block;
  text-align: center;
  margin-top: 9px;
  font-family: "Comic Sans MS", cursive;
  font-size: 11px;
  color: #57534e;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.45s ease 0.15s, transform 0.45s ease 0.15s;
}
.fx-cq-polaroid-tilt .po:hover { transform: rotate(0deg) translateY(-4px); box-shadow: 0 18px 32px rgba(0, 0, 0, 0.22); }
.fx-cq-polaroid-tilt .po:hover .po-cap { opacity: 1; transform: translateY(0); }`,
});

/* ---------------------------------------------------------- */
/* 12 — Profile reveal (spinning conic ring, socials rise)    */
/* ---------------------------------------------------------- */
fx({
  id: "cq-profile-reveal",
  name: "Profile Ring Reveal",
  fa: "پروفایل با حلقه چرخان",
  description: "Avatar ring spins to life and social chips rise from the bottom edge on hover.",
  faDescription: "با هاور حلقه دور آواتار می‌چرخد و آیکون‌های شبکه اجتماعی از پایین بالا می‌آیند.",
  tags: ["profile", "avatar", "ring"],
  previewBg: "linear-gradient(135deg, #0c4a6e, #082f49)",
  html: `<div class="pf"><div class="pf-ring"><div class="pf-ava"></div></div><h4>Ava Lane</h4><p>Product Designer</p><div class="pf-soc"><span>in</span><span>gh</span><span>tw</span><span>dr</span></div></div>`,
  css: `.fx-cq-profile-reveal .pf {
  width: 200px;
  border-radius: 16px;
  padding: 14px 16px;
  box-sizing: border-box;
  background: linear-gradient(165deg, #0ea5e9, #0369a1);
  color: #f0f9ff;
  text-align: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}
.fx-cq-profile-reveal .pf-ring {
  width: 60px;
  height: 60px;
  margin: 0 auto 9px;
  border-radius: 50%;
  padding: 3px;
  box-sizing: border-box;
  background: conic-gradient(#fbbf24, #f472b6, #22d3ee, #fbbf24);
  animation: cq-pf-ring 3.2s linear infinite paused;
}
.fx-cq-profile-reveal .pf-ava {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fde68a, #f59e0b 60%, #b45309);
  border: 3px solid #0c4a6e;
  box-sizing: border-box;
}
.fx-cq-profile-reveal .pf h4 { margin: 0 0 2px; font-size: 15.5px; }
.fx-cq-profile-reveal .pf p { margin: 0 0 10px; font-size: 10.5px; opacity: 0.85; }
.fx-cq-profile-reveal .pf-soc { display: flex; justify-content: center; gap: 8px; }
.fx-cq-profile-reveal .pf-soc span {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 10px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.35);
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.3, 1.4, 0.4, 1);
}
.fx-cq-profile-reveal .pf-soc span:nth-child(2) { transition-delay: 0.06s; }
.fx-cq-profile-reveal .pf-soc span:nth-child(3) { transition-delay: 0.12s; }
.fx-cq-profile-reveal .pf-soc span:nth-child(4) { transition-delay: 0.18s; }
.fx-cq-profile-reveal .pf:hover .pf-ring { animation-play-state: running; }
.fx-cq-profile-reveal .pf:hover .pf-soc span { opacity: 1; transform: translateY(0); }
@keyframes cq-pf-ring { to { transform: rotate(360deg); } }`,
});

/* ---------------------------------------------------------- */
/* 13 — Pricing pop (popular plan pops with pulsing glow)     */
/* ---------------------------------------------------------- */
fx({
  id: "cq-pricing-pop",
  name: "Pricing Pop",
  fa: "پلن محبوب",
  description: "The popular plan pops forward with a springy scale and a pulsing glow ring on hover.",
  faDescription: "پلن محبوب با هاور جلو می‌پرد و حلقه درخشانش تپش می‌کند.",
  tags: ["pricing", "pop", "glow"],
  previewBg: "linear-gradient(135deg, #eef2ff, #ddd6fe)",
  html: `<div class="pp"><span class="pp-tag">POPULAR</span><h4>Pro Plan</h4><div class="pp-price">$9<span>/mo</span></div><p class="pp-feat">✓ Unlimited projects<br>✓ Priority support</p></div>`,
  css: `.fx-cq-pricing-pop .pp {
  position: relative;
  width: 188px;
  border-radius: 16px;
  padding: 18px;
  box-sizing: border-box;
  background: linear-gradient(160deg, #ffffff, #eef2ff);
  border: 2px solid #c7d2fe;
  color: #1e1b4b;
  text-align: center;
  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.12);
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-cq-pricing-pop .pp-tag {
  position: absolute;
  top: -11px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #ffffff;
  background: linear-gradient(90deg, #6366f1, #a855f7);
  padding: 5px 12px;
  border-radius: 999px;
}
.fx-cq-pricing-pop .pp h4 { margin: 4px 0 6px; font-size: 15px; }
.fx-cq-pricing-pop .pp-price { font-size: 29px; font-weight: 800; }
.fx-cq-pricing-pop .pp-price span { font-size: 12px; font-weight: 500; color: #6366f1; }
.fx-cq-pricing-pop .pp-feat { margin: 6px 0 0; font-size: 11px; line-height: 1.7; color: #4338ca; }
.fx-cq-pricing-pop .pp:hover {
  transform: scale(1.07) translateY(-4px);
  animation: cq-pp-glow 1.4s ease-in-out infinite;
}
@keyframes cq-pp-glow {
  0%, 100% { box-shadow: 0 14px 28px rgba(99, 102, 241, 0.25), 0 0 0 0 rgba(99, 102, 241, 0.35); }
  50% { box-shadow: 0 18px 36px rgba(99, 102, 241, 0.35), 0 0 0 9px rgba(99, 102, 241, 0); }
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Weather card (CSS sun rays + drifting cloud)          */
/* ---------------------------------------------------------- */
fx({
  id: "cq-weather-card",
  name: "Weather Scene Card",
  fa: "کارت آب‌وهوا",
  description: "Sun rays pulse and a fluffy CSS cloud drifts across a mini sky card.",
  faDescription: "کارت کوچک آسمان؛ پرتوهای خورشید می‌تپند و ابری CSS آهسته عبور می‌کند.",
  tags: ["weather", "cloud", "sun", "auto"],
  previewBg: "linear-gradient(135deg, #075985, #0c4a6e)",
  html: `<div class="wc"><div class="wc-sun"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="wc-cloud"></div><span class="wc-temp">21°</span><p>Partly cloudy · Lisbon</p></div>`,
  css: `.fx-cq-weather-card .wc {
  position: relative;
  width: 210px;
  height: 130px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(180deg, #38bdf8, #0ea5e9 70%, #0284c7);
  box-shadow: 0 12px 26px rgba(2, 132, 199, 0.45);
  color: #ffffff;
  transition: transform 0.4s ease;
}
.fx-cq-weather-card .wc-sun { position: absolute; top: 16px; left: 20px; width: 34px; height: 34px; }
.fx-cq-weather-card .wc-sun::before {
  content: "";
  position: absolute;
  inset: 7px;
  border-radius: 50%;
  background: #fde047;
  box-shadow: 0 0 14px rgba(253, 224, 71, 0.9);
  transition: box-shadow 0.4s ease;
}
.fx-cq-weather-card .wc-sun i {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3px;
  height: 9px;
  border-radius: 2px;
  background: #fde047;
  animation: cq-wc-rays 2.2s ease-in-out infinite;
}
.fx-cq-weather-card .wc-sun i:nth-child(1) { transform: translate(-50%, -50%) rotate(0deg) translateY(-13px); animation-delay: 0s; }
.fx-cq-weather-card .wc-sun i:nth-child(2) { transform: translate(-50%, -50%) rotate(45deg) translateY(-13px); animation-delay: 0.14s; }
.fx-cq-weather-card .wc-sun i:nth-child(3) { transform: translate(-50%, -50%) rotate(90deg) translateY(-13px); animation-delay: 0.28s; }
.fx-cq-weather-card .wc-sun i:nth-child(4) { transform: translate(-50%, -50%) rotate(135deg) translateY(-13px); animation-delay: 0.42s; }
.fx-cq-weather-card .wc-sun i:nth-child(5) { transform: translate(-50%, -50%) rotate(180deg) translateY(-13px); animation-delay: 0.56s; }
.fx-cq-weather-card .wc-sun i:nth-child(6) { transform: translate(-50%, -50%) rotate(225deg) translateY(-13px); animation-delay: 0.7s; }
.fx-cq-weather-card .wc-sun i:nth-child(7) { transform: translate(-50%, -50%) rotate(270deg) translateY(-13px); animation-delay: 0.84s; }
.fx-cq-weather-card .wc-sun i:nth-child(8) { transform: translate(-50%, -50%) rotate(315deg) translateY(-13px); animation-delay: 0.98s; }
.fx-cq-weather-card .wc-cloud {
  position: absolute;
  top: 50px;
  left: 96px;
  width: 52px;
  height: 16px;
  border-radius: 999px;
  background: #ffffff;
  animation: cq-wc-drift 6s ease-in-out infinite alternate;
}
.fx-cq-weather-card .wc-cloud::before, .fx-cq-weather-card .wc-cloud::after {
  content: "";
  position: absolute;
  background: #ffffff;
  border-radius: 50%;
}
.fx-cq-weather-card .wc-cloud::before { width: 22px; height: 22px; top: -11px; left: 8px; }
.fx-cq-weather-card .wc-cloud::after { width: 15px; height: 15px; top: -7px; left: 30px; }
.fx-cq-weather-card .wc-temp {
  position: absolute;
  right: 18px;
  bottom: 30px;
  font-size: 30px;
  font-weight: 800;
  text-shadow: 0 2px 10px rgba(2, 132, 199, 0.5);
}
.fx-cq-weather-card .wc p { position: absolute; left: 18px; bottom: 11px; margin: 0; font-size: 10.5px; opacity: 0.9; }
.fx-cq-weather-card .wc:hover { transform: scale(1.03); }
.fx-cq-weather-card .wc:hover .wc-sun::before { box-shadow: 0 0 24px rgba(253, 224, 71, 1); }
@keyframes cq-wc-rays { 0%, 100% { opacity: 0.35; } 50% { opacity: 1; } }
@keyframes cq-wc-drift { from { transform: translateX(-8px); } to { transform: translateX(26px); } }`,
});

/* ---------------------------------------------------------- */
/* 15 — Music card (spinning vinyl + equalizer bars)          */
/* ---------------------------------------------------------- */
fx({
  id: "cq-music-card",
  name: "Music Player Card",
  fa: "کارت پخش موسیقی",
  description: "Mini player with a spinning vinyl disc and five dancing equalizer bars.",
  faDescription: "پخش‌کننده کوچک با صفحه وینیل چرخان و پنج میله اکولایزر رقصان.",
  tags: ["music", "equalizer", "vinyl", "auto"],
  previewBg: "linear-gradient(135deg, #18181b, #4c1d95)",
  html: `<div class="mu"><div class="mu-disc"></div><div class="mu-meta"><h4>Night Drive</h4><p>Midnight Synth</p><div class="mu-eq"><i></i><i></i><i></i><i></i><i></i></div></div><span class="mu-time">2:41</span></div>`,
  css: `.fx-cq-music-card .mu {
  width: 216px;
  border-radius: 16px;
  padding: 14px 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 14px;
  background: linear-gradient(150deg, #27272a, #18181b);
  border: 1px solid rgba(168, 85, 247, 0.35);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.5);
  color: #fafafa;
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}
.fx-cq-music-card .mu-disc {
  flex: none;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background:
    radial-gradient(circle at center, #f472b6 0 9px, #111111 10px 12px, transparent 13px),
    repeating-radial-gradient(circle at center, #1c1c1f 0 2px, #2a2a2e 2px 4px);
  border: 2px solid #0a0a0a;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6), 0 0 0 4px rgba(244, 114, 182, 0.15);
  animation: cq-mu-spin 2.6s linear infinite;
}
.fx-cq-music-card .mu-meta { flex: 1; min-width: 0; }
.fx-cq-music-card .mu-meta h4 { margin: 0 0 2px; font-size: 14px; white-space: nowrap; }
.fx-cq-music-card .mu-meta p { margin: 0 0 8px; font-size: 10px; color: #a1a1aa; }
.fx-cq-music-card .mu-eq { display: flex; align-items: flex-end; gap: 3px; height: 18px; }
.fx-cq-music-card .mu-eq i {
  width: 4px;
  height: 18px;
  border-radius: 2px 2px 0 0;
  background: linear-gradient(180deg, #f472b6, #a855f7);
  transform-origin: bottom;
  transform: scaleY(0.3);
  animation: cq-mu-bounce 0.9s ease-in-out infinite alternate;
}
.fx-cq-music-card .mu-eq i:nth-child(1) { animation-delay: 0s; }
.fx-cq-music-card .mu-eq i:nth-child(2) { animation-delay: 0.12s; }
.fx-cq-music-card .mu-eq i:nth-child(3) { animation-delay: 0.26s; }
.fx-cq-music-card .mu-eq i:nth-child(4) { animation-delay: 0.05s; }
.fx-cq-music-card .mu-eq i:nth-child(5) { animation-delay: 0.18s; }
.fx-cq-music-card .mu-time { font-family: ui-monospace, monospace; font-size: 10px; color: #d4d4d8; align-self: flex-start; }
.fx-cq-music-card .mu:hover { transform: translateY(-3px); box-shadow: 0 16px 30px rgba(0, 0, 0, 0.55), 0 0 22px rgba(168, 85, 247, 0.3); }
@keyframes cq-mu-spin { to { transform: rotate(360deg); } }
@keyframes cq-mu-bounce { from { transform: scaleY(0.25); } to { transform: scaleY(1); } }`,
});

/* ---------------------------------------------------------- */
/* 16 — Article zoom (thumb zooms, underline draws, arrow)    */
/* ---------------------------------------------------------- */
fx({
  id: "cq-article-zoom",
  name: "Article Thumb Zoom",
  fa: "کارت مقاله با بزرگ‌نمایی",
  description: "Blog card whose gradient thumbnail zooms while the title underline draws and a read-arrow slides in.",
  faDescription: "کارت وبلاگ؛ تصویر بندانگشتی بزرگ می‌شود، خط زیر عنوان کشیده می‌شود و فلش خواندن وارد می‌شود.",
  tags: ["article", "zoom", "underline"],
  previewBg: "linear-gradient(135deg, #fafaf9, #e7e5e4)",
  html: `<div class="az"><div class="az-thumb"><div class="az-photo"></div><span class="az-tag">CSS</span></div><div class="az-body"><h4>Designing with Layers</h4><span class="az-read">Read article →</span></div></div>`,
  css: `.fx-cq-article-zoom .az {
  width: 200px;
  border-radius: 14px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s ease;
}
.fx-cq-article-zoom .az-thumb { position: relative; height: 74px; overflow: hidden; }
.fx-cq-article-zoom .az-photo {
  position: absolute;
  inset: 0;
  background: linear-gradient(130deg, #fbbf24, #f97316 55%, #db2777);
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.3, 1);
}
.fx-cq-article-zoom .az-photo::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.4), transparent 55%);
}
.fx-cq-article-zoom .az-tag {
  position: absolute;
  top: 10px;
  left: 12px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1px;
  background: rgba(255, 255, 255, 0.9);
  color: #9a3412;
  padding: 3px 8px;
  border-radius: 999px;
}
.fx-cq-article-zoom .az-body { padding: 12px 14px 14px; }
.fx-cq-article-zoom .az-body h4 {
  margin: 0 0 8px;
  font-size: 14.5px;
  color: #1c1917;
  background: linear-gradient(#f97316, #f97316) no-repeat 0 100% / 0% 2px;
  transition: background-size 0.45s ease;
  padding-bottom: 2px;
}
.fx-cq-article-zoom .az-read {
  font-size: 11px;
  color: #78716c;
  display: inline-block;
  transform: translateX(-6px);
  opacity: 0.6;
  transition: transform 0.4s ease, opacity 0.4s ease, color 0.4s ease;
}
.fx-cq-article-zoom .az:hover { box-shadow: 0 16px 30px rgba(249, 115, 22, 0.22); }
.fx-cq-article-zoom .az:hover .az-photo { transform: scale(1.16) rotate(1.5deg); }
.fx-cq-article-zoom .az:hover .az-body h4 { background-size: 100% 2px; }
.fx-cq-article-zoom .az:hover .az-read { transform: translateX(0); opacity: 1; color: #ea580c; }`,
});

/* ---------------------------------------------------------- */
/* 17 — Quote flip (rotateX tumble to author)                 */
/* ---------------------------------------------------------- */
fx({
  id: "cq-quote-flip",
  name: "Quote Flip",
  fa: "کارت نقل‌قول برگردان",
  description: "Quote card tumbles over its horizontal axis to reveal the author on the reverse.",
  faDescription: "کارت نقل‌قول حول محور افقی می‌چرخد و نویسنده را نشان می‌دهد.",
  tags: ["flip", "quote", "3d"],
  previewBg: "linear-gradient(135deg, #1c1917, #44403c)",
  html: `<div class="qf-scene"><div class="qf"><div class="qf-face qf-front"><span class="qf-mark">“</span><p>Design is intelligence made visible.</p></div><div class="qf-face qf-back"><div class="qf-ava"></div><h4>Alina Cooper</h4><p class="qf-role">Design Director</p></div></div></div>`,
  css: `.fx-cq-quote-flip { perspective: 720px; }
.fx-cq-quote-flip .qf-scene { width: 204px; height: 130px; }
.fx-cq-quote-flip .qf {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.65s cubic-bezier(0.4, 0.9, 0.35, 1.05);
}
.fx-cq-quote-flip .qf-scene:hover .qf { transform: rotateX(180deg); }
.fx-cq-quote-flip .qf-face {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: grid;
  align-content: center;
  justify-items: center;
  text-align: center;
  padding: 14px 18px;
  box-sizing: border-box;
}
.fx-cq-quote-flip .qf-front {
  background: linear-gradient(150deg, #fbbf24, #f59e0b);
  color: #451a03;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}
.fx-cq-quote-flip .qf-mark { font-size: 30px; line-height: 0.6; font-weight: 800; }
.fx-cq-quote-flip .qf-front p { margin: 8px 0 0; font-size: 13px; font-style: italic; font-weight: 600; }
.fx-cq-quote-flip .qf-back {
  background: linear-gradient(150deg, #fafaf9, #e7e5e4);
  color: #292524;
  transform: rotateX(180deg);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}
.fx-cq-quote-flip .qf-ava { width: 38px; height: 38px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fca5a5, #dc2626 70%); margin-bottom: 6px; }
.fx-cq-quote-flip .qf-back h4 { margin: 0 0 2px; font-size: 13.5px; }
.fx-cq-quote-flip .qf-role { margin: 0; font-size: 10px; color: #78716c; }`,
});

/* ---------------------------------------------------------- */
/* 18 — Skeleton shimmer (auto loading loop)                  */
/* ---------------------------------------------------------- */
fx({
  id: "cq-skeleton-shimmer",
  name: "Skeleton Shimmer",
  fa: "اسکلتون درخشان",
  description: "Loading skeleton whose placeholder blocks sweep with a soft light sheen, looping forever.",
  faDescription: "اسکلتون بارگذاری با بلوک‌های خاکستری که برق نوری رویشان بی‌وقفه می‌گذرد.",
  tags: ["skeleton", "shimmer", "loading", "auto"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #111827, #1f2937)",
  html: `<div class="sk"><div class="sk-b sk-ava"></div><div class="sk-col"><div class="sk-b sk-l1"></div><div class="sk-b sk-l2"></div></div><div class="sk-b sk-thumb"></div></div>`,
  css: `.fx-cq-skeleton-shimmer .sk {
  width: 216px;
  border-radius: 14px;
  padding: 16px;
  box-sizing: border-box;
  background: #1f2937;
  border: 1px solid rgba(148, 163, 184, 0.15);
  display: flex;
  gap: 12px;
}
.fx-cq-skeleton-shimmer .sk-b {
  position: relative;
  overflow: hidden;
  background: #374151;
  border-radius: 8px;
}
.fx-cq-skeleton-shimmer .sk-b::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.14), transparent);
  animation: cq-sk-sheen 1.6s ease-in-out infinite;
}
.fx-cq-skeleton-shimmer .sk-col { flex: 1; display: grid; align-content: start; row-gap: 9px; padding-top: 4px; }
.fx-cq-skeleton-shimmer .sk-ava { flex: none; width: 38px; height: 38px; border-radius: 50%; }
.fx-cq-skeleton-shimmer .sk-l1 { height: 11px; width: 82%; }
.fx-cq-skeleton-shimmer .sk-l2 { height: 11px; width: 55%; }
.fx-cq-skeleton-shimmer .sk-thumb { flex: none; width: 52px; height: 52px; border-radius: 10px; }
@keyframes cq-sk-sheen { to { transform: translateX(100%); } }`,
});

/* ---------------------------------------------------------- */
/* 19 — Text-image card (title sliced by the photo edge)      */
/* ---------------------------------------------------------- */
fx({
  id: "cq-text-image-card",
  name: "Clipped Title Image Card",
  fa: "کارت با عنوان برش‌خورده",
  description: "A giant title is sliced by the photo edge — the part over the image turns white, the rest melts into the background; hover lifts the photo and reveals the lower half.",
  faDescription: "عنوان بزرگ لبه‌ی عکس را برش می‌زند؛ بخش روی عکس سفید و بقیه همرنگ پس‌زمینه است و با هاور عکس بالا می‌رود و نیمه پایین پیدا می‌شود.",
  tags: ["background-clip", "clip-path", "typography"],
  previewBg: "#0f172a",
  html: `<div class="ti"><div class="ti-img"></div><span class="ti-title ti-t1">NEON</span><span class="ti-title ti-t2">NEON</span><span class="ti-sub">city nights · vol.3</span></div>`,
  css: `.fx-cq-text-image-card .ti { position: relative; width: 214px; height: 150px; }
.fx-cq-text-image-card .ti-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 88px;
  border-radius: 14px;
  background: linear-gradient(120deg, #f472b6, #8b5cf6 55%, #4338ca);
  transition: transform 0.55s cubic-bezier(0.3, 0.9, 0.3, 1);
  z-index: 2;
}
.fx-cq-text-image-card .ti-title {
  position: absolute;
  top: 52px;
  left: 14px;
  margin: 0;
  font-size: 44px;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1;
  z-index: 3;
}
.fx-cq-text-image-card .ti-t1 { color: #ffffff; clip-path: inset(0 0 calc(100% - 36px) 0); }
.fx-cq-text-image-card .ti-t2 { color: #0f172a; clip-path: inset(36px 0 0 0); transition: color 0.4s ease; }
.fx-cq-text-image-card .ti-sub { position: absolute; left: 16px; bottom: 8px; font-size: 10.5px; letter-spacing: 2px; color: #64748b; z-index: 3; }
.fx-cq-text-image-card .ti:hover .ti-img { transform: translateY(-10px); }
.fx-cq-text-image-card .ti:hover .ti-t2 { color: #a5b4fc; }`,
});

/* ---------------------------------------------------------- */
/* 20 — Torn reveal (jagged cover slides away)                */
/* ---------------------------------------------------------- */
fx({
  id: "cq-torn-reveal",
  name: "Torn Paper Reveal",
  fa: "کاغذ پاره‌شده",
  description: "A kraft-paper cover with a jagged torn edge slides away to reveal the message underneath.",
  faDescription: "روکش کاغذی با لبه‌ی پاره با هاور کنار می‌رود و پیام زیرین پیدا می‌شود.",
  tags: ["torn", "clip-path", "reveal"],
  previewBg: "linear-gradient(135deg, #052e16, #064e3b)",
  html: `<div class="tp"><div class="tp-msg"><h4>Top Secret</h4><p>Meeting moved to 14:30 — room B.</p></div><div class="tp-cover"></div></div>`,
  css: `.fx-cq-torn-reveal .tp { position: relative; width: 206px; height: 128px; }
.fx-cq-torn-reveal .tp-msg {
  position: absolute;
  inset: 0;
  border-radius: 14px;
  background: linear-gradient(160deg, #ecfdf5, #d1fae5);
  display: grid;
  align-content: center;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
}
.fx-cq-torn-reveal .tp-msg h4 { margin: 0 0 6px; font-size: 16px; color: #065f46; }
.fx-cq-torn-reveal .tp-msg p { margin: 0; font-size: 11.5px; line-height: 1.5; color: #047857; }
.fx-cq-torn-reveal .tp-cover {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, #d6b28a, #b98d63);
  clip-path: polygon(0 0, 100% 0, 100% 74%, 93% 82%, 85% 75%, 76% 86%, 66% 78%, 57% 90%, 47% 80%, 38% 91%, 29% 82%, 20% 92%, 12% 83%, 5% 90%, 0 84%);
  border-radius: 14px;
  transition: transform 0.6s cubic-bezier(0.4, 0.9, 0.3, 1), opacity 0.6s ease;
}
.fx-cq-torn-reveal .tp-cover::after {
  content: "PULL ↓";
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  letter-spacing: 3px;
  color: rgba(60, 34, 10, 0.75);
}
.fx-cq-torn-reveal .tp:hover .tp-cover { transform: translateX(36%) rotate(7deg); opacity: 0; }`,
});

/* ---------------------------------------------------------- */
/* 21 — Folded corner (paper dog-ear grows)                   */
/* ---------------------------------------------------------- */
fx({
  id: "cq-folded-corner",
  name: "Folded Corner",
  fa: "گوشه تا خورده",
  description: "A paper corner folds down over the card and grows on hover, casting its own little shadow.",
  faDescription: "گوشه کاغذ کارت تا می‌شود و با هاور بزرگ‌تر می‌شود و سایه کوچک خودش را می‌اندازد.",
  tags: ["fold", "corner", "paper"],
  previewBg: "linear-gradient(135deg, #fefce8, #fde68a)",
  html: `<div class="fc"><h4>Sticky Note</h4><p>Milk, eggs, and ship the release.</p><div class="fc-fold"></div></div>`,
  css: `.fx-cq-folded-corner .fc {
  position: relative;
  width: 200px;
  height: 118px;
  border-radius: 10px;
  background: linear-gradient(160deg, #fef9c3, #fef08a);
  padding: 16px 18px;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(161, 98, 7, 0.25);
  color: #713f12;
  overflow: hidden;
}
.fx-cq-folded-corner .fc h4 { margin: 0 0 6px; font-size: 15px; }
.fx-cq-folded-corner .fc p { margin: 0; font-size: 11.5px; line-height: 1.5; }
.fx-cq-folded-corner .fc-fold {
  position: absolute;
  top: 0;
  right: 0;
  width: 34px;
  height: 34px;
  background: linear-gradient(225deg, #f59e0b 50%, transparent 50%);
  border-bottom-left-radius: 8px;
  box-shadow: -3px 3px 6px rgba(120, 53, 15, 0.25);
  transition: width 0.4s ease, height 0.4s ease;
}
.fx-cq-folded-corner .fc:hover .fc-fold { width: 56px; height: 56px; }`,
});

/* ---------------------------------------------------------- */
/* 22 — Ribbon badge (rotates in across the corner)           */
/* ---------------------------------------------------------- */
fx({
  id: "cq-ribbon-badge",
  name: "Ribbon Badge",
  fa: "روبان جایزه",
  description: "A corner ribbon snaps and rotates into place across the top-right corner on hover.",
  faDescription: "روبان گوشه با هاور با چرخش سر جایش می‌نشیند.",
  tags: ["ribbon", "badge", "corner"],
  previewBg: "linear-gradient(135deg, #e0f2fe, #bae6fd)",
  html: `<div class="rb"><div class="rb-thumb"></div><h4>Skyline Print</h4><p>Limited edition of 50</p><span class="rb-ribbon">NEW</span></div>`,
  css: `.fx-cq-ribbon-badge .rb {
  position: relative;
  width: 190px;
  border-radius: 14px;
  overflow: hidden;
  background: #ffffff;
  padding-bottom: 14px;
  box-shadow: 0 10px 22px rgba(2, 132, 199, 0.18);
  text-align: center;
  transition: box-shadow 0.4s ease;
}
.fx-cq-ribbon-badge .rb-thumb { height: 74px; background: linear-gradient(135deg, #38bdf8, #6366f1); }
.fx-cq-ribbon-badge .rb h4 { margin: 12px 0 3px; font-size: 15px; color: #0f172a; }
.fx-cq-ribbon-badge .rb p { margin: 0; font-size: 10.5px; color: #64748b; }
.fx-cq-ribbon-badge .rb-ribbon {
  position: absolute;
  top: 16px;
  right: -34px;
  width: 128px;
  transform: rotate(45deg) translate(48px, -48px);
  background: linear-gradient(90deg, #f43f5e, #fb7185);
  color: #ffffff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 3px;
  text-align: center;
  padding: 6px 0;
  box-sizing: border-box;
  box-shadow: 0 3px 8px rgba(244, 63, 94, 0.4);
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.34, 1.4, 0.5, 1), opacity 0.3s ease;
}
.fx-cq-ribbon-badge .rb:hover { box-shadow: 0 14px 28px rgba(2, 132, 199, 0.28); }
.fx-cq-ribbon-badge .rb:hover .rb-ribbon { transform: rotate(45deg) translate(0, 0); opacity: 1; }`,
});

/* ---------------------------------------------------------- */
/* 23 — Corner fold peek (flap opens, note pops)              */
/* ---------------------------------------------------------- */
fx({
  id: "cq-corner-fold-peek",
  name: "Corner Fold Peek",
  fa: "نمایش پشت گوشه",
  description: "The folded corner opens like a flap on hover, peeking a hidden rating note underneath.",
  faDescription: "گوشه‌ی تا شده مثل در باز می‌شود و یادداشت پنهان زیر آن پیدا می‌شود.",
  tags: ["fold", "peek", "flap"],
  previewBg: "linear-gradient(135deg, #1e1b4b, #312e81)",
  html: `<div class="cf"><h4>DeKo Café</h4><p>Best flat white in town</p><div class="cf-note">★ 4.9</div><div class="cf-flap"></div></div>`,
  css: `.fx-cq-corner-fold-peek .cf {
  position: relative;
  width: 196px;
  height: 118px;
  border-radius: 14px;
  background: linear-gradient(160deg, #4c1d95, #312e81);
  color: #ede9fe;
  padding: 16px 18px;
  box-sizing: border-box;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}
.fx-cq-corner-fold-peek .cf h4 { margin: 0 0 5px; font-size: 16px; }
.fx-cq-corner-fold-peek .cf p { margin: 0; font-size: 11px; opacity: 0.8; }
.fx-cq-corner-fold-peek .cf-note {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 52px;
  height: 44px;
  border-radius: 8px;
  background: #fef3c7;
  color: #92400e;
  font-size: 12px;
  font-weight: 800;
  display: grid;
  place-items: center;
  transform: scale(0.5);
  opacity: 0;
  transition: transform 0.45s cubic-bezier(0.34, 1.5, 0.5, 1) 0.1s, opacity 0.3s ease 0.1s;
}
.fx-cq-corner-fold-peek .cf-flap {
  position: absolute;
  top: 0;
  right: 0;
  width: 62px;
  height: 54px;
  background: linear-gradient(225deg, #8b5cf6 50%, transparent 50%);
  border-bottom-left-radius: 10px;
  transform-origin: top left;
  transition: transform 0.5s cubic-bezier(0.4, 0.9, 0.3, 1);
}
.fx-cq-corner-fold-peek .cf:hover .cf-flap { transform: rotate(-100deg); }
.fx-cq-corner-fold-peek .cf:hover .cf-note { transform: scale(1); opacity: 1; }`,
});

/* ---------------------------------------------------------- */
/* 24 — Shadow depth ladder (3-step lift on hover)            */
/* ---------------------------------------------------------- */
fx({
  id: "cq-depth-lift-ladder",
  name: "Shadow Depth Ladder",
  fa: "نردبان عمق سایه",
  description: "On hover the card climbs a three-step depth ladder — the shadow deepens at each rung until it floats.",
  faDescription: "کارت با هاور سه پله بالا می‌رود و سایه‌اش پله‌پله عمیق‌تر می‌شود تا شناور شود.",
  tags: ["shadow", "depth", "ladder"],
  previewBg: "linear-gradient(135deg, #f1f5f9, #cbd5e1)",
  html: `<div class="dl"><span class="dl-badge">L1 → L3</span><h4>Depth Ladder</h4><p>watch the shadow climb</p></div>`,
  css: `.fx-cq-depth-lift-ladder .dl {
  width: 200px;
  border-radius: 14px;
  padding: 18px;
  box-sizing: border-box;
  background: #ffffff;
  color: #1e293b;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.16);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}
.fx-cq-depth-lift-ladder .dl-badge {
  display: inline-block;
  font-family: ui-monospace, monospace;
  font-size: 9.5px;
  letter-spacing: 1px;
  color: #64748b;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  padding: 3px 9px;
  margin-bottom: 10px;
}
.fx-cq-depth-lift-ladder .dl h4 { margin: 0 0 4px; font-size: 16px; }
.fx-cq-depth-lift-ladder .dl p { margin: 0; font-size: 11px; color: #64748b; }
.fx-cq-depth-lift-ladder .dl:hover { animation: cq-dl-ladder 0.9s cubic-bezier(0.3, 0.7, 0.3, 1) forwards; }
@keyframes cq-dl-ladder {
  0% { transform: translateY(0); box-shadow: 0 1px 3px rgba(15, 23, 42, 0.16); }
  33% { transform: translateY(-6px); box-shadow: 0 10px 18px -6px rgba(15, 23, 42, 0.25); }
  66% { transform: translateY(-11px); box-shadow: 0 20px 30px -10px rgba(15, 23, 42, 0.3); }
  100% { transform: translateY(-16px); box-shadow: 0 30px 44px -14px rgba(15, 23, 42, 0.4); }
}`,
});

/* ---------------------------------------------------------- */
/* 25 — Border draw card (neon border traces around)          */
/* ---------------------------------------------------------- */
fx({
  id: "cq-border-draw-card",
  name: "Border Draw Card",
  fa: "کشیده شدن حاشیه",
  description: "A neon border traces itself around the card from the top-left corner on hover.",
  faDescription: "حاشیه نئونی با هاور از گوشه بالا-چپ دور کارت کشیده می‌شود.",
  tags: ["border", "draw", "trace"],
  previewBg: "linear-gradient(135deg, #09090b, #18181b)",
  html: `<div class="bd"><h4>Neon Frame</h4><p>border draws on hover</p><span class="bd-dot"></span></div>`,
  css: `.fx-cq-border-draw-card .bd {
  position: relative;
  width: 204px;
  height: 122px;
  border-radius: 4px;
  background: #101014;
  display: grid;
  align-content: center;
  padding: 0 22px;
  box-sizing: border-box;
  color: #e4e4e7;
}
.fx-cq-border-draw-card .bd::before, .fx-cq-border-draw-card .bd::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 0 solid #22d3ee;
  transition: transform 0.45s ease;
  pointer-events: none;
}
.fx-cq-border-draw-card .bd::before {
  border-top-width: 2px;
  border-right-width: 2px;
  border-top-right-radius: 4px;
  transform: scale(0, 0);
  transform-origin: 0 0;
}
.fx-cq-border-draw-card .bd::after {
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-bottom-left-radius: 4px;
  transform: scale(0, 0);
  transform-origin: 100% 100%;
}
.fx-cq-border-draw-card .bd:hover::before, .fx-cq-border-draw-card .bd:hover::after { transform: scale(1, 1); }
.fx-cq-border-draw-card .bd:hover::after { transition-delay: 0.25s; }
.fx-cq-border-draw-card .bd h4 { margin: 0 0 6px; font-size: 17px; }
.fx-cq-border-draw-card .bd p { margin: 0; font-size: 11px; color: #71717a; }
.fx-cq-border-draw-card .bd-dot {
  position: absolute;
  top: 10px;
  right: 12px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 10px #22d3ee;
}`,
});

/* ---------------------------------------------------------- */
/* 26 — Background wipe card (color floods from the side)     */
/* ---------------------------------------------------------- */
fx({
  id: "cq-bg-reveal-card",
  name: "Background Wipe Card",
  fa: "کارت با پس‌زمینه کشیده",
  description: "A bold accent color wipes in from the left on hover, flipping the card's text to light.",
  faDescription: "رنگ شاد با هاور از چپ کارت را می‌پوشاند و متن روشن می‌شود.",
  tags: ["wipe", "reveal", "background"],
  previewBg: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
  html: `<div class="bw"><h4>Wipe In</h4><p>solid color floods the card</p><span class="bw-arrow">→</span></div>`,
  css: `.fx-cq-bg-reveal-card .bw {
  position: relative;
  width: 202px;
  height: 118px;
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  display: grid;
  align-content: center;
  padding: 0 22px;
  box-sizing: border-box;
  overflow: hidden;
  color: #0f172a;
}
.fx-cq-bg-reveal-card .bw::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, #f97316, #db2777);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.55s cubic-bezier(0.4, 0.9, 0.3, 1);
}
.fx-cq-bg-reveal-card .bw h4, .fx-cq-bg-reveal-card .bw p, .fx-cq-bg-reveal-card .bw-arrow {
  position: relative;
  transition: color 0.4s ease 0.15s;
}
.fx-cq-bg-reveal-card .bw h4 { margin: 0 0 5px; font-size: 17px; }
.fx-cq-bg-reveal-card .bw p { margin: 0; font-size: 11px; }
.fx-cq-bg-reveal-card .bw-arrow { position: absolute; right: 18px; top: 50%; transform: translateY(-50%); font-size: 18px; }
.fx-cq-bg-reveal-card .bw:hover::before { transform: scaleX(1); }
.fx-cq-bg-reveal-card .bw:hover h4, .fx-cq-bg-reveal-card .bw:hover p { color: #ffffff; }`,
});

/* ---------------------------------------------------------- */
/* 27 — Diagonal split reveal (halves slide apart)            */
/* ---------------------------------------------------------- */
fx({
  id: "cq-diagonal-split",
  name: "Diagonal Split Reveal",
  fa: "جداشدن مورب",
  description: "Two diagonal halves slide apart like elevator doors to uncover the card's core message.",
  faDescription: "دو نیمه‌ی مورب مثل در آسانسور باز می‌شوند و پیام وسط کارت را نشان می‌دهند.",
  tags: ["split", "clip-path", "reveal"],
  previewBg: "linear-gradient(135deg, #111827, #374151)",
  html: `<div class="ds"><div class="ds-half ds-l"></div><div class="ds-half ds-r"></div><div class="ds-core"><h4>Balance</h4><p>form · function · flow</p></div></div>`,
  css: `.fx-cq-diagonal-split .ds {
  position: relative;
  width: 206px;
  height: 126px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}
.fx-cq-diagonal-split .ds-half {
  position: absolute;
  inset: 0;
  transition: transform 0.55s cubic-bezier(0.4, 0.9, 0.3, 1), opacity 0.55s ease;
}
.fx-cq-diagonal-split .ds-l { background: linear-gradient(135deg, #0ea5e9, #0369a1); clip-path: polygon(0 0, 100% 0, 0 100%); }
.fx-cq-diagonal-split .ds-r { background: linear-gradient(135deg, #f472b6, #be185d); clip-path: polygon(100% 0, 100% 100%, 0 100%); }
.fx-cq-diagonal-split .ds-core {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  text-align: center;
  color: #f8fafc;
}
.fx-cq-diagonal-split .ds-core h4 { margin: 0 0 4px; font-size: 19px; letter-spacing: 1px; }
.fx-cq-diagonal-split .ds-core p { margin: 0; font-size: 10.5px; color: #94a3b8; }
.fx-cq-diagonal-split .ds:hover .ds-l { transform: translate(-70px, -40px); opacity: 0; }
.fx-cq-diagonal-split .ds:hover .ds-r { transform: translate(70px, 40px); opacity: 0; }`,
});

/* ---------------------------------------------------------- */
/* 28 — Staggered blur-in (rows pull into focus)              */
/* ---------------------------------------------------------- */
fx({
  id: "cq-blur-in-card",
  name: "Staggered Blur-In",
  fa: "ورود محو پلکانی",
  description: "Content rows are fogged out; hovering pulls each line into focus one after another.",
  faDescription: "ردیف‌های محتوای کارت محو شده‌اند و با هاور یکی‌یکی واضح می‌شوند.",
  tags: ["blur", "stagger", "filter"],
  previewBg: "linear-gradient(135deg, #0b1120, #1e1b4b)",
  html: `<div class="bi"><div class="bi-row bi-1">◆ Photograms</div><div class="bi-row bi-2">◆ Light studies</div><div class="bi-row bi-3">◆ Paper tints</div><span class="bi-hint">hover to focus</span></div>`,
  css: `.fx-cq-blur-in-card .bi {
  width: 200px;
  border-radius: 14px;
  padding: 16px 18px;
  box-sizing: border-box;
  background: linear-gradient(165deg, #16213e, #10101f);
  border: 1px solid rgba(129, 140, 248, 0.25);
  color: #e0e7ff;
  display: grid;
  row-gap: 11px;
}
.fx-cq-blur-in-card .bi-row {
  font-size: 13.5px;
  font-weight: 600;
  filter: blur(7px);
  opacity: 0.25;
  transform: translateY(4px);
  transition: filter 0.5s ease, opacity 0.5s ease, transform 0.5s ease;
}
.fx-cq-blur-in-card .bi-2 { transition-delay: 0.12s; }
.fx-cq-blur-in-card .bi-3 { transition-delay: 0.24s; }
.fx-cq-blur-in-card .bi-hint { font-size: 9.5px; letter-spacing: 2px; color: #6366f1; text-transform: uppercase; }
.fx-cq-blur-in-card .bi:hover .bi-row { filter: blur(0); opacity: 1; transform: translateY(0); }`,
});

/* ---------------------------------------------------------- */
/* 29 — Floating bounce card (auto float + squash loop)       */
/* ---------------------------------------------------------- */
fx({
  id: "cq-floating-bounce-card",
  name: "Floating Bounce Card",
  fa: "کارت شناور",
  description: "The card drifts on a slow float loop with a gentle jelly squash at the bottom of each cycle.",
  faDescription: "کارت آرام بالا و پایین می‌رود و در پایان هر چرخه تغییر شکل فنری ملایمی می‌دهد.",
  tags: ["float", "bounce", "loop", "auto"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #1e1b4b, #0f172a)",
  html: `<div class="fb"><div class="fb-face"><span class="fb-dot d1"></span><span class="fb-dot d2"></span><h4>Levitate</h4><p>pure CSS float loop</p></div></div>`,
  css: `.fx-cq-floating-bounce-card .fb { animation: cq-fb-float 3.6s cubic-bezier(0.45, 0, 0.55, 1) infinite; }
.fx-cq-floating-bounce-card .fb-face {
  position: relative;
  width: 190px;
  height: 116px;
  border-radius: 18px;
  background: linear-gradient(150deg, #7dd3fc, #818cf8 60%, #c084fc);
  color: #f0f9ff;
  display: grid;
  align-content: center;
  justify-items: center;
  box-shadow: 0 18px 30px -10px rgba(99, 102, 241, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.35);
}
.fx-cq-floating-bounce-card .fb-dot { position: absolute; border-radius: 50%; background: rgba(255, 255, 255, 0.4); }
.fx-cq-floating-bounce-card .fb-dot.d1 { width: 46px; height: 46px; top: -16px; right: -14px; }
.fx-cq-floating-bounce-card .fb-dot.d2 { width: 26px; height: 26px; bottom: -10px; left: -8px; }
.fx-cq-floating-bounce-card .fb-face h4 { margin: 0 0 4px; font-size: 17px; }
.fx-cq-floating-bounce-card .fb-face p { margin: 0; font-size: 10.5px; opacity: 0.85; }
@keyframes cq-fb-float {
  0%, 100% { transform: translateY(0) scale(1, 1); }
  18% { transform: translateY(-9px) scale(0.99, 1.01); }
  50% { transform: translateY(-14px) scale(1.01, 0.99); }
  82% { transform: translateY(-5px) scale(1.015, 0.975); }
  93% { transform: translateY(0) scale(0.99, 1.015); }
}`,
});

/* ---------------------------------------------------------- */
/* 30 — Rotate settle (tilted card springs upright)           */
/* ---------------------------------------------------------- */
fx({
  id: "cq-rotate-settle",
  name: "Rotate Settle",
  fa: "چرخش و آرام‌گیری",
  description: "The card rests at a slight tilt; on hover it swings upright with a springy overshoot.",
  faDescription: "کارت کمی کج است و با هاور با فنر ملایم صاف می‌نشیند.",
  tags: ["rotate", "spring", "settle"],
  previewBg: "linear-gradient(135deg, #ecfdf5, #a7f3d0)",
  html: `<div class="rs"><h4>Tilt &amp; Settle</h4><p>spring physics, zero JS</p><span class="rs-tab"></span></div>`,
  css: `.fx-cq-rotate-settle .rs {
  width: 196px;
  border-radius: 14px;
  padding: 18px;
  box-sizing: border-box;
  background: #059669;
  color: #ecfdf5;
  transform: rotate(-4deg);
  box-shadow: -8px 10px 22px rgba(4, 120, 87, 0.35);
  transition: transform 0.6s cubic-bezier(0.34, 1.8, 0.5, 1), box-shadow 0.5s ease;
}
.fx-cq-rotate-settle .rs h4 { margin: 0 0 5px; font-size: 16.5px; }
.fx-cq-rotate-settle .rs p { margin: 0; font-size: 11px; opacity: 0.85; }
.fx-cq-rotate-settle .rs-tab { display: block; width: 34px; height: 5px; border-radius: 999px; background: #a7f3d0; margin-top: 12px; }
.fx-cq-rotate-settle .rs:hover { transform: rotate(0deg) translateY(-3px); box-shadow: -4px 16px 28px rgba(4, 120, 87, 0.4); }`,
});

/* ---------------------------------------------------------- */
/* 31 — Elastic hover (stretchy scale overshoot)              */
/* ---------------------------------------------------------- */
fx({
  id: "cq-elastic-hover",
  name: "Elastic Hover",
  fa: "هاور کشسان",
  description: "The card stretches toward the cursor with an elastic overshoot, then springs back into place.",
  faDescription: "کارت با هاور کش می‌آید و با فزون‌جهش کشسان سر جایش برمی‌گردد.",
  tags: ["elastic", "scale", "overshoot"],
  previewBg: "linear-gradient(135deg, #fff1f2, #fecdd3)",
  html: `<div class="eh"><span class="eh-orb"></span><h4>Elastic</h4><p>stretchy scale overshoot</p></div>`,
  css: `.fx-cq-elastic-hover .eh {
  width: 190px;
  border-radius: 20px;
  padding: 18px;
  box-sizing: border-box;
  background: radial-gradient(circle at 20% 15%, #fda4af, #f43f5e 60%, #be123c);
  color: #fff1f2;
  text-align: center;
  box-shadow: 0 12px 24px rgba(244, 63, 94, 0.35);
  transition: transform 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.fx-cq-elastic-hover .eh-orb {
  display: block;
  width: 40px;
  height: 40px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  border: 2px solid rgba(255, 255, 255, 0.6);
}
.fx-cq-elastic-hover .eh h4 { margin: 0 0 4px; font-size: 16.5px; }
.fx-cq-elastic-hover .eh p { margin: 0; font-size: 10.5px; opacity: 0.85; }
.fx-cq-elastic-hover .eh:hover { transform: scale(1.09, 1.06); }`,
});

/* ---------------------------------------------------------- */
/* 32 — Jelly wobble (squash & stretch keyframes)             */
/* ---------------------------------------------------------- */
fx({
  id: "cq-wobble-card",
  name: "Jelly Wobble",
  fa: "لرزش ژله‌ای",
  description: "Hovering sets off a jelly wobble — the card squashes and stretches like gelatin before settling.",
  faDescription: "با هاور کارت مثل ژله تکان می‌خورد و کش می‌آید و بعد آرام می‌گیرد.",
  tags: ["wobble", "jelly", "keyframes"],
  previewBg: "linear-gradient(135deg, #f0fdfa, #ccfbf1)",
  html: `<div class="wb"><div class="wb-gel"></div><h4>Wobble</h4><p>jiggle on hover</p></div>`,
  css: `.fx-cq-wobble-card .wb {
  width: 188px;
  border-radius: 16px;
  padding: 16px;
  box-sizing: border-box;
  background: linear-gradient(160deg, #a7f3d0, #6ee7b7);
  color: #064e3b;
  text-align: center;
  transform-origin: 50% 100%;
  box-shadow: 0 12px 22px rgba(16, 185, 129, 0.3);
}
.fx-cq-wobble-card .wb-gel {
  width: 46px;
  height: 46px;
  margin: 0 auto 10px;
  border-radius: 42% 58% 55% 45% / 50% 42% 58% 50%;
  background: radial-gradient(circle at 32% 28%, #d1fae5, #10b981 65%);
}
.fx-cq-wobble-card .wb h4 { margin: 0 0 3px; font-size: 16px; }
.fx-cq-wobble-card .wb p { margin: 0; font-size: 10.5px; opacity: 0.8; }
.fx-cq-wobble-card .wb:hover { animation: cq-wb-jelly 0.9s ease; }
@keyframes cq-wb-jelly {
  0% { transform: scale(1, 1); }
  22% { transform: scale(1.12, 0.82); }
  42% { transform: scale(0.88, 1.12); }
  62% { transform: scale(1.06, 0.94); }
  80% { transform: scale(0.97, 1.04); }
  100% { transform: scale(1, 1); }
}`,
});

/* ---------------------------------------------------------- */
/* 33 — Magnetic shift (pulls to corner, counter-shadow)      */
/* ---------------------------------------------------------- */
fx({
  id: "cq-magnetic-shift-card",
  name: "Magnetic Shift",
  fa: "جابه‌جایی آهن‌ربایی",
  description: "The card is pulled toward the top-left as if magnetized, its hard shadow counter-shifting deep behind.",
  faDescription: "کارت مثل آهن‌ربا به سمت بالا-چپ کشیده می‌شود و سایه‌ی سختش در جهت مخالف جابه‌جا می‌شود.",
  tags: ["magnetic", "shift", "shadow"],
  previewBg: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
  html: `<div class="ms"><span class="ms-pin"></span><h4>Magnetic</h4><p>pulled to the corner</p></div>`,
  css: `.fx-cq-magnetic-shift-card .ms {
  width: 192px;
  border-radius: 14px;
  padding: 18px;
  box-sizing: border-box;
  background: #1e293b;
  color: #e2e8f0;
  box-shadow: 4px 4px 0 #334155;
  transition: transform 0.4s cubic-bezier(0.3, 0.9, 0.3, 1.2), box-shadow 0.4s ease;
}
.fx-cq-magnetic-shift-card .ms-pin { display: block; width: 26px; height: 4px; border-radius: 999px; background: #38bdf8; margin-bottom: 10px; }
.fx-cq-magnetic-shift-card .ms h4 { margin: 0 0 4px; font-size: 16px; }
.fx-cq-magnetic-shift-card .ms p { margin: 0; font-size: 11px; color: #94a3b8; }
.fx-cq-magnetic-shift-card .ms:hover { transform: translate(-9px, -9px); box-shadow: 13px 13px 0 #334155, 22px 26px 40px rgba(2, 6, 23, 0.55); }`,
});

/* ---------------------------------------------------------- */
/* 34 — Inner parallax (bg and content move opposite)         */
/* ---------------------------------------------------------- */
fx({
  id: "cq-inner-parallax",
  name: "Inner Parallax",
  fa: "پارالاکس داخلی",
  description: "Background stripes and foreground content slide in opposite directions on hover for a layered depth feel.",
  faDescription: "خطوط پس‌زمینه و محتوای جلو با هاور در جهت مخالف حرکت می‌کنند و عمق می‌سازند.",
  tags: ["parallax", "layers", "pattern"],
  previewBg: "linear-gradient(135deg, #020617, #1e1b4b)",
  html: `<div class="ip"><div class="ip-bg"></div><div class="ip-front"><h4>Parallax</h4><p>two layers, two speeds</p></div></div>`,
  css: `.fx-cq-inner-parallax .ip {
  position: relative;
  width: 206px;
  height: 124px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}
.fx-cq-inner-parallax .ip-bg {
  position: absolute;
  inset: -30px;
  background:
    repeating-linear-gradient(45deg, rgba(99, 102, 241, 0.22) 0 10px, transparent 10px 26px),
    linear-gradient(150deg, #1e1b4b, #312e81);
  transition: transform 0.7s ease;
}
.fx-cq-inner-parallax .ip-front {
  position: absolute;
  inset: 0;
  display: grid;
  align-content: center;
  padding: 0 22px;
  box-sizing: border-box;
  color: #e0e7ff;
  transition: transform 0.7s ease;
}
.fx-cq-inner-parallax .ip-front h4 { margin: 0 0 5px; font-size: 18px; }
.fx-cq-inner-parallax .ip-front p { margin: 0; font-size: 11px; color: #a5b4fc; }
.fx-cq-inner-parallax .ip:hover .ip-bg { transform: translate(18px, 12px) rotate(1deg); }
.fx-cq-inner-parallax .ip:hover .ip-front { transform: translate(-10px, -6px); }`,
});

/* ---------------------------------------------------------- */
/* 35 — Tilt + traveling shine combo                          */
/* ---------------------------------------------------------- */
fx({
  id: "cq-tilt-shine-combo",
  name: "Tilt + Traveling Shine",
  fa: "کیج همراه درخشش متحرک",
  description: "Card tilts back in 3D while a glossy shine keeps traveling across its surface.",
  faDescription: "کارت در فضای سه‌بعدی کج می‌شود و درخششی براق مدام روی سطحش می‌گذرد.",
  tags: ["tilt", "shine", "3d"],
  previewBg: "linear-gradient(135deg, #0f172a, #111827)",
  html: `<div class="ts-scene"><div class="ts"><h4>Premium Glass</h4><p>tilt + shine combo</p><span class="ts-line"></span></div></div>`,
  css: `.fx-cq-tilt-shine-combo .ts-scene { perspective: 700px; }
.fx-cq-tilt-shine-combo .ts {
  position: relative;
  width: 202px;
  height: 122px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(155deg, #334155, #0f172a);
  border: 1px solid rgba(148, 163, 184, 0.25);
  color: #f1f5f9;
  display: grid;
  align-content: center;
  padding: 0 22px;
  box-sizing: border-box;
  transition: transform 0.6s cubic-bezier(0.3, 0.9, 0.3, 1), box-shadow 0.6s ease;
}
.fx-cq-tilt-shine-combo .ts::after {
  content: "";
  position: absolute;
  top: -40px;
  bottom: -40px;
  left: -90px;
  width: 64px;
  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.22), transparent);
  transform: skewX(-18deg);
}
.fx-cq-tilt-shine-combo .ts:hover {
  transform: rotateX(9deg) rotateY(-9deg) translateY(-2px);
  box-shadow: -14px 18px 30px rgba(0, 0, 0, 0.5);
}
.fx-cq-tilt-shine-combo .ts:hover::after { animation: cq-ts-shine 1.5s linear infinite; }
.fx-cq-tilt-shine-combo .ts h4 { margin: 0 0 5px; font-size: 17px; }
.fx-cq-tilt-shine-combo .ts p { margin: 0; font-size: 10.5px; color: #94a3b8; }
.fx-cq-tilt-shine-combo .ts-line { display: block; width: 40px; height: 3px; border-radius: 999px; background: linear-gradient(90deg, #22d3ee, #818cf8); margin-top: 10px; }
@keyframes cq-ts-shine { to { transform: skewX(-18deg) translateX(430px); } }`,
});

/* ---------------------------------------------------------- */
/* 36 — Glass notification (auto draining progress)           */
/* ---------------------------------------------------------- */
fx({
  id: "cq-glass-notification",
  name: "Glass Notification",
  fa: "اعلان شیشه‌ای",
  description: "Frosted notification card with app icon, message lines and a progress bar that keeps draining.",
  faDescription: "کارت اعلان مات با آیکون، متن پیام و نوار پیشرفتی که مدام خالی می‌شود.",
  tags: ["notification", "glass", "progress", "auto"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #7c3aed, #db2777)",
  html: `<div class="gn"><span class="gn-icon">✦</span><div class="gn-txt"><strong>DeKo Upload</strong><span>backup-2025.zip synced</span></div><span class="gn-x">×</span><div class="gn-bar"><i></i></div></div>`,
  css: `.fx-cq-glass-notification .gn {
  position: relative;
  width: 216px;
  border-radius: 16px;
  padding: 14px 16px 18px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.35);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 11px;
  overflow: hidden;
}
.fx-cq-glass-notification .gn-icon {
  flex: none;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 15px;
  background: linear-gradient(135deg, #22d3ee, #6366f1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
  animation: cq-gn-pop 2.6s ease-in-out infinite;
}
.fx-cq-glass-notification .gn-txt { display: grid; row-gap: 2px; min-width: 0; }
.fx-cq-glass-notification .gn-txt strong { font-size: 12.5px; }
.fx-cq-glass-notification .gn-txt span { font-size: 10px; opacity: 0.8; }
.fx-cq-glass-notification .gn-x { margin-left: auto; font-size: 13px; opacity: 0.7; }
.fx-cq-glass-notification .gn-bar {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 7px;
  height: 3px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.25);
  overflow: hidden;
}
.fx-cq-glass-notification .gn-bar i {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #22d3ee, #a5f3fc);
  transform-origin: left center;
  animation: cq-gn-drain 3.2s linear infinite;
}
@keyframes cq-gn-drain { from { transform: scaleX(1); } to { transform: scaleX(0); } }
@keyframes cq-gn-pop { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }`,
});

/* ---------------------------------------------------------- */
/* 37 — Stat card spark (auto growing bars + live ping)       */
/* ---------------------------------------------------------- */
fx({
  id: "cq-stat-card-spark",
  name: "Stat Sparkline",
  fa: "کارت آمار با نمودار",
  description: "Stat card whose bars keep growing in sequence and a live dot pulses next to the metric.",
  faDescription: "کارت آمار با میله‌هایی که پشت‌سرهم رشد می‌کنند و نقطه‌ی زنده کنار عدد می‌تپد.",
  tags: ["stat", "sparkline", "chart", "auto"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
  html: `<div class="ss"><div class="ss-head"><span class="ss-label">WEEKLY VISITS</span><span class="ss-live"></span></div><div class="ss-num">12,840</div><div class="ss-delta">▲ 18.2%</div><div class="ss-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>`,
  css: `.fx-cq-stat-card-spark .ss {
  width: 200px;
  border-radius: 14px;
  padding: 14px 16px 12px;
  box-sizing: border-box;
  background: #0f172a;
  color: #f8fafc;
  box-shadow: 0 14px 26px rgba(15, 23, 42, 0.35);
}
.fx-cq-stat-card-spark .ss-head { display: flex; align-items: center; justify-content: space-between; }
.fx-cq-stat-card-spark .ss-label { font-size: 9px; letter-spacing: 2px; color: #94a3b8; }
.fx-cq-stat-card-spark .ss-live {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34d399;
  animation: cq-ss-ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
}
.fx-cq-stat-card-spark .ss-num { font-size: 26px; font-weight: 800; margin: 6px 0 2px; font-variant-numeric: tabular-nums; }
.fx-cq-stat-card-spark .ss-delta { font-size: 10.5px; color: #34d399; margin-bottom: 10px; }
.fx-cq-stat-card-spark .ss-bars { display: flex; align-items: flex-end; gap: 4px; height: 30px; }
.fx-cq-stat-card-spark .ss-bars i {
  flex: 1;
  border-radius: 3px 3px 0 0;
  background: linear-gradient(180deg, #38bdf8, #6366f1);
  transform-origin: bottom;
  transform: scaleY(0.15);
  animation: cq-ss-grow 2.8s ease-in-out infinite;
}
.fx-cq-stat-card-spark .ss-bars i:nth-child(1) { height: 45%; animation-delay: 0s; }
.fx-cq-stat-card-spark .ss-bars i:nth-child(2) { height: 60%; animation-delay: 0.12s; }
.fx-cq-stat-card-spark .ss-bars i:nth-child(3) { height: 50%; animation-delay: 0.24s; }
.fx-cq-stat-card-spark .ss-bars i:nth-child(4) { height: 80%; animation-delay: 0.36s; }
.fx-cq-stat-card-spark .ss-bars i:nth-child(5) { height: 62%; animation-delay: 0.48s; }
.fx-cq-stat-card-spark .ss-bars i:nth-child(6) { height: 92%; animation-delay: 0.6s; }
.fx-cq-stat-card-spark .ss-bars i:nth-child(7) { height: 74%; animation-delay: 0.72s; }
@keyframes cq-ss-grow {
  0% { transform: scaleY(0.15); }
  30% { transform: scaleY(1); }
  70% { transform: scaleY(1); }
  100% { transform: scaleY(0.15); }
}
@keyframes cq-ss-ping {
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55); }
  100% { box-shadow: 0 0 0 8px rgba(52, 211, 153, 0); }
}`,
});

/* ---------------------------------------------------------- */
/* 38 — Login card glow (fields glow sequentially, auto)      */
/* ---------------------------------------------------------- */
fx({
  id: "cq-login-card-glow",
  name: "Login Glow Fields",
  fa: "ورود با فیلدهای درخشان",
  description: "Login card where the two input underlines and the button glow in a repeating sequential loop.",
  faDescription: "کارت ورود؛ خطوط فیلدها و دکمه به‌ترتیب و چرخشی می‌درخشند.",
  tags: ["login", "form", "glow", "auto"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #0c0a1d, #1e1b4b)",
  html: `<div class="lg"><h4>Welcome back</h4><div class="lg-field"><span class="lg-ph">email</span></div><div class="lg-field f2"><span class="lg-ph">password</span></div><div class="lg-btn">Sign in</div></div>`,
  css: `.fx-cq-login-card-glow .lg {
  width: 196px;
  border-radius: 16px;
  padding: 14px 16px;
  box-sizing: border-box;
  background: linear-gradient(165deg, #17153a, #0f0d24);
  border: 1px solid rgba(129, 140, 248, 0.3);
  color: #e0e7ff;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.5);
}
.fx-cq-login-card-glow .lg h4 { margin: 0 0 10px; font-size: 15px; text-align: center; }
.fx-cq-login-card-glow .lg-field {
  position: relative;
  height: 22px;
  margin-bottom: 10px;
  border-bottom: 1.5px solid rgba(129, 140, 248, 0.35);
}
.fx-cq-login-card-glow .lg-ph { font-size: 10.5px; color: #6366f1; letter-spacing: 1px; }
.fx-cq-login-card-glow .lg-field::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1.5px;
  height: 1.5px;
  background: #818cf8;
  box-shadow: 0 0 8px #818cf8;
  transform: scaleX(0);
  animation: cq-lg-glow 2.4s ease-in-out infinite;
}
.fx-cq-login-card-glow .lg-field.f2::after { animation-delay: 0.5s; }
.fx-cq-login-card-glow .lg-btn {
  margin-top: 10px;
  height: 28px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  animation: cq-lg-btn 2.4s ease-in-out infinite;
  animation-delay: 1s;
}
@keyframes cq-lg-glow {
  0%, 100% { transform: scaleX(0); }
  30%, 55% { transform: scaleX(1); }
  80% { transform: scaleX(0); }
}
@keyframes cq-lg-btn {
  0%, 100% { box-shadow: 0 0 0 rgba(139, 92, 246, 0); }
  30%, 55% { box-shadow: 0 0 18px rgba(139, 92, 246, 0.65); }
}`,
});

/* ---------------------------------------------------------- */
/* 39 — Flip countdown (auto ticking flip boxes)              */
/* ---------------------------------------------------------- */
fx({
  id: "cq-countdown-card",
  name: "Flip Countdown",
  fa: "شمارش معکوس ورقی",
  description: "Three flip boxes tick like a launch countdown — each panel spins on its X axis in sequence.",
  faDescription: "سه جعبه مثل شمارش معکوس پرتاب ورق می‌خورند و یکی‌یکی می‌چرخند.",
  tags: ["countdown", "flip", "auto"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #020617, #0f172a)",
  html: `<div class="cd"><h4>LAUNCH IN</h4><div class="cd-row"><div class="cd-box"><div class="cd-in"><span class="cd-f">08</span><span class="cd-b">07</span></div></div><div class="cd-box"><div class="cd-in"><span class="cd-f">42</span><span class="cd-b">41</span></div></div><div class="cd-box"><div class="cd-in"><span class="cd-f">59</span><span class="cd-b">58</span></div></div></div><p>days · hours · minutes</p></div>`,
  css: `.fx-cq-countdown-card .cd {
  width: 208px;
  border-radius: 16px;
  padding: 16px;
  box-sizing: border-box;
  background: linear-gradient(160deg, #111827, #0b1120);
  border: 1px solid rgba(56, 189, 248, 0.25);
  text-align: center;
  color: #e2e8f0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5);
}
.fx-cq-countdown-card .cd h4 { margin: 0 0 10px; font-size: 11px; letter-spacing: 4px; color: #38bdf8; }
.fx-cq-countdown-card .cd-row { display: flex; justify-content: center; gap: 8px; perspective: 500px; }
.fx-cq-countdown-card .cd-box {
  width: 48px;
  height: 52px;
  border-radius: 8px;
  background: #1e293b;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 6px 12px rgba(0, 0, 0, 0.4);
}
.fx-cq-countdown-card .cd-in {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: cq-cd-tick 3s cubic-bezier(0.4, 0.9, 0.4, 1) infinite;
}
.fx-cq-countdown-card .cd-box:nth-child(2) .cd-in { animation-delay: 0.25s; }
.fx-cq-countdown-card .cd-box:nth-child(3) .cd-in { animation-delay: 0.5s; }
.fx-cq-countdown-card .cd-f, .fx-cq-countdown-card .cd-b {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  font-family: ui-monospace, monospace;
  font-size: 20px;
  font-weight: 800;
  color: #7dd3fc;
}
.fx-cq-countdown-card .cd-b { transform: rotateX(180deg); color: #fbbf24; }
.fx-cq-countdown-card .cd p { margin: 10px 0 0; font-size: 9px; letter-spacing: 2px; color: #64748b; }
@keyframes cq-cd-tick {
  0%, 18% { transform: rotateX(0deg); }
  38%, 86% { transform: rotateX(-180deg); }
  100% { transform: rotateX(-360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 40 — Map pin card (auto bouncing pin + radar ring)         */
/* ---------------------------------------------------------- */
fx({
  id: "cq-map-pin-card",
  name: "Map Radar Pin",
  fa: "نقشه با پین رادار",
  description: "Mini map card with a bouncing location pin and a radar ring pulsing outward from it.",
  faDescription: "کارت نقشه‌ی کوچک با پین جهنده و حلقه راداری که از آن منتشر می‌شود.",
  tags: ["map", "pin", "radar", "auto"],
  interaction: "auto",
  previewBg: "linear-gradient(135deg, #064e3b, #022c22)",
  html: `<div class="mp"><div class="mp-road"></div><div class="mp-road v"></div><div class="mp-block b1"></div><div class="mp-block b2"></div><div class="mp-ring"></div><div class="mp-pin"></div><span class="mp-label">DeKo HQ</span></div>`,
  css: `.fx-cq-map-pin-card .mp {
  position: relative;
  width: 208px;
  height: 128px;
  border-radius: 14px;
  overflow: hidden;
  background:
    linear-gradient(rgba(148, 163, 184, 0.14) 1px, transparent 1px) 0 0 / 100% 18px,
    linear-gradient(90deg, rgba(148, 163, 184, 0.14) 1px, transparent 1px) 0 0 / 18px 100%,
    linear-gradient(150deg, #14532d, #052e16);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.45);
}
.fx-cq-map-pin-card .mp-road {
  position: absolute;
  left: 0;
  right: 0;
  top: 62px;
  height: 7px;
  background: rgba(250, 204, 21, 0.45);
  transform: rotate(-8deg);
}
.fx-cq-map-pin-card .mp-road.v { top: 8px; bottom: 8px; left: 96px; right: auto; width: 6px; height: auto; transform: none; }
.fx-cq-map-pin-card .mp-block {
  position: absolute;
  border-radius: 6px;
  background: rgba(74, 222, 128, 0.18);
  border: 1px solid rgba(74, 222, 128, 0.3);
}
.fx-cq-map-pin-card .mp-block.b1 { width: 44px; height: 30px; top: 14px; left: 20px; }
.fx-cq-map-pin-card .mp-block.b2 { width: 52px; height: 26px; bottom: 12px; right: 18px; }
.fx-cq-map-pin-card .mp-ring {
  position: absolute;
  top: 46px;
  left: 58px;
  width: 36px;
  height: 36px;
  margin: -18px;
  border: 2px solid rgba(250, 204, 21, 0.8);
  border-radius: 50%;
  animation: cq-mp-radar 2.2s ease-out infinite;
}
.fx-cq-map-pin-card .mp-pin {
  position: absolute;
  top: 46px;
  left: 58px;
  width: 18px;
  height: 18px;
  margin: -9px;
  background: #facc15;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  animation: cq-mp-bounce 2.2s ease-in-out infinite;
}
.fx-cq-map-pin-card .mp-pin::after {
  content: "";
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: #78350f;
}
.fx-cq-map-pin-card .mp-label {
  position: absolute;
  top: 14px;
  right: 14px;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #d9f99d;
  background: rgba(2, 44, 34, 0.75);
  padding: 4px 8px;
  border-radius: 999px;
}
@keyframes cq-mp-bounce {
  0%, 100% { transform: rotate(-45deg) translate(0, 0); }
  50% { transform: rotate(-45deg) translate(6px, -6px); }
}
@keyframes cq-mp-radar {
  0% { transform: scale(0.5); opacity: 0.9; }
  100% { transform: scale(2.1); opacity: 0; }
}`,
});


