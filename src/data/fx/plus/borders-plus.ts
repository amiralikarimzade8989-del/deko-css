import type { CssEffect } from "../types";

/**
 * Border effects (plus batch, oq-) — fresh frame mechanisms: orbital comets,
 * masks, marching gradient dashes, sewing stitches, PCB pulses and aurora
 * rings. Frames wrap a small box. Scoped under .fx-<id>.
 */
export const borderEffectsPlus: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  borderEffectsPlus.push({ category: "borders", interaction: "auto", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Dual conic rings spinning in opposite directions       */
/* ---------------------------------------------------------- */
fx({
  id: "oq-dual-conic-border",
  name: "Dual Conic Counter Rings",
  fa: "دو حلقه مخروطی معکوس",
  description: "Two nested conic rings spin in opposite directions with different palettes.",
  faDescription: "دو حلقه مخروطی تو در تو با پالت‌های متفاوت در جهت مخالف هم می‌چرخند.",
  tags: ["border", "conic", "dual", "spin"],
  previewBg: "#0b0916",
  html: `<div class="dc-frame"><div class="dc-box"><span class="dc-txt">DUAL CONIC</span></div></div>`,
  css: `.fx-oq-dual-conic-border .dc-frame {
  position: relative;
  width: 168px;
  height: 108px;
  border-radius: 16px;
  padding: 3px;
  overflow: hidden;
}
.fx-oq-dual-conic-border .dc-frame::before {
  content: "";
  position: absolute;
  inset: -120%;
  background: conic-gradient(from 0deg, #22d3ee, #a78bfa, #f472b6, #22d3ee);
  animation: oq-dc-out 4.2s linear infinite;
}
.fx-oq-dual-conic-border .dc-box {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 13px;
  overflow: hidden;
  display: grid;
  place-items: center;
}
.fx-oq-dual-conic-border .dc-box::before {
  content: "";
  position: absolute;
  inset: -120%;
  background: conic-gradient(from 180deg, #fde047, #34d399, #38bdf8, #fde047);
  animation: oq-dc-in 3.2s linear infinite reverse;
}
.fx-oq-dual-conic-border .dc-box::after {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: 11px;
  background: #0b0f1c;
}
.fx-oq-dual-conic-border .dc-txt {
  position: relative;
  z-index: 2;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #e2e8f0;
}
@keyframes oq-dc-out {
  to { transform: rotate(360deg); }
}
@keyframes oq-dc-in {
  to { transform: rotate(-360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 2 — Glow dot snake running along the border path           */
/* ---------------------------------------------------------- */
fx({
  id: "oq-snake-corners-border",
  name: "Snake Glow Border",
  fa: "حاشیه مار درخشان",
  description: "A glowing dot laps the border rectangle endlessly, hugging all four sides.",
  faDescription: "نقطه درخشانی بی‌وقفه مسیر حاشیه را دور می‌زند و هر چهار ضلع را می‌پیماید.",
  tags: ["border", "dot", "orbit", "glow"],
  previewBg: "#0b0916",
  html: `<div class="sc-frame"><span class="sc-box">SNAKE</span><i class="sc-dot"></i></div>`,
  css: `.fx-oq-snake-corners-border .sc-frame {
  position: relative;
  width: 168px;
  height: 108px;
  border-radius: 14px;
  border: 1px solid rgba(56, 189, 248, 0.35);
  background: rgba(56, 189, 248, 0.04);
  display: grid;
  place-items: center;
}
.fx-oq-snake-corners-border .sc-box {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #7dd3fc;
}
.fx-oq-snake-corners-border .sc-dot {
  position: absolute;
  top: -5px;
  left: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e0f2fe;
  box-shadow: 0 0 10px 2px rgba(56, 189, 248, 0.9), 0 0 22px 6px rgba(56, 189, 248, 0.4);
  animation: oq-sc-run 4.4s linear infinite;
}
@keyframes oq-sc-run {
  0% { transform: translate(0, 0); }
  25% { transform: translate(158px, 0); }
  50% { transform: translate(158px, 98px); }
  75% { transform: translate(0, 98px); }
  100% { transform: translate(0, 0); }
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Laser line scanning inside a glowing frame             */
/* ---------------------------------------------------------- */
fx({
  id: "oq-laser-scan-border",
  name: "Laser Scan Border",
  fa: "حاشیه اسکن لیزری",
  description: "A horizontal laser line sweeps down inside the neon frame like a scanner.",
  faDescription: "خط لیزری افقی داخل قاب نئونی مثل اسکنر بالا و پایین می‌رود.",
  tags: ["border", "laser", "scan", "neon"],
  previewBg: "#060d0b",
  html: `<div class="ls-frame"><span class="ls-box">SCAN</span><i class="ls-beam"></i></div>`,
  css: `.fx-oq-laser-scan-border .ls-frame {
  position: relative;
  width: 168px;
  height: 108px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(52, 211, 153, 0.55);
  box-shadow: 0 0 14px rgba(52, 211, 153, 0.35), inset 0 0 14px rgba(52, 211, 153, 0.15);
  background: rgba(6, 78, 59, 0.25);
  display: grid;
  place-items: center;
}
.fx-oq-laser-scan-border .ls-box {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #a7f3d0;
  text-shadow: 0 0 8px rgba(52, 211, 153, 0.8);
}
.fx-oq-laser-scan-border .ls-beam {
  position: absolute;
  left: 5px;
  right: 5px;
  top: 8px;
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(90deg, transparent, #34d399 30%, #d1fae5 50%, #34d399 70%, transparent);
  box-shadow: 0 0 12px 2px rgba(52, 211, 153, 0.8);
  animation: oq-ls-scan 2.6s ease-in-out infinite;
}
@keyframes oq-ls-scan {
  0%, 100% { top: 8px; opacity: 0.5; }
  50% { top: 97px; opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Comet with tail orbiting the frame                     */
/* ---------------------------------------------------------- */
fx({
  id: "oq-comet-border",
  name: "Comet Orbit Border",
  fa: "حاشیه دنباله‌دار مداری",
  description: "A bright comet head with a fading tail circles the frame on an elliptical orbit.",
  faDescription: "سرِ دنباله‌دار درخشان با دُم محوشونده روی مداری بیضی دور قاب می‌گردد.",
  tags: ["border", "comet", "orbit", "tail"],
  previewBg: "#0b0916",
  html: `<div class="cm-wrap"><i class="cm-x"><i class="cm-y"><i class="cm-c"></i></i></i><span class="cm-box">COMET</span></div>`,
  css: `.fx-oq-comet-border .cm-wrap {
  position: relative;
  width: 168px;
  height: 108px;
  display: grid;
  place-items: center;
}
.fx-oq-comet-border .cm-box {
  width: 150px;
  height: 90px;
  border-radius: 14px;
  background: #0b0f1c;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #bae6fd;
  z-index: 1;
}
.fx-oq-comet-border .cm-x,
.fx-oq-comet-border .cm-y {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.fx-oq-comet-border .cm-x {
  animation: oq-cm-x 3.2s cubic-bezier(0.37, 0, 0.63, 1) infinite;
}
.fx-oq-comet-border .cm-y {
  animation: oq-cm-y 3.2s cubic-bezier(0.37, 0, 0.63, 1) infinite;
}
.fx-oq-comet-border .cm-c {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px 0 0 -5px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.95), 0 0 24px 8px rgba(125, 211, 252, 0.55);
  animation: oq-cm-r 3.2s linear infinite;
}
.fx-oq-comet-border .cm-c::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 9px;
  margin-left: -2px;
  width: 4px;
  height: 22px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(125, 211, 252, 0.4), transparent);
}
@keyframes oq-cm-x {
  0% { transform: translateX(-79px); }
  25% { transform: translateX(0px); }
  50% { transform: translateX(79px); }
  75% { transform: translateX(0px); }
  100% { transform: translateX(-79px); }
}
@keyframes oq-cm-y {
  0% { transform: translateY(0px); }
  25% { transform: translateY(-49px); }
  50% { transform: translateY(0px); }
  75% { transform: translateY(49px); }
  100% { transform: translateY(0px); }
}
@keyframes oq-cm-r {
  to { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Breathing double glow border                           */
/* ---------------------------------------------------------- */
fx({
  id: "oq-pulse-glow-border",
  name: "Pulse Glow Border",
  fa: "حاشیه تپنده درخشان",
  description: "The violet frame breathes: outer glow and inner light expand and contract in sync.",
  faDescription: "قاب بنفش نفس می‌کشد: درخشش بیرونی و نور درونی هم‌زمان زیاد و کم می‌شوند.",
  tags: ["border", "glow", "pulse", "breathing"],
  previewBg: "#0b0916",
  html: `<div class="pg-frame"><span class="pg-box">PULSE</span></div>`,
  css: `.fx-oq-pulse-glow-border .pg-frame {
  position: relative;
  width: 168px;
  height: 108px;
  border-radius: 16px;
  border: 2px solid #a78bfa;
  display: grid;
  place-items: center;
  animation: oq-pg-breathe 2.4s ease-in-out infinite;
}
.fx-oq-pulse-glow-border .pg-box {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #ddd6fe;
  padding: 8px 16px;
  border-radius: 10px;
  background: rgba(139, 92, 246, 0.12);
}
@keyframes oq-pg-breathe {
  0%, 100% { box-shadow: 0 0 0 0 rgba(167, 139, 250, 0.55), inset 0 0 10px rgba(167, 139, 250, 0.2); }
  50% { box-shadow: 0 0 24px 7px rgba(167, 139, 250, 0.7), inset 0 0 24px rgba(167, 139, 250, 0.45); }
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Wavy top/bottom edges via animated mask                */
/* ---------------------------------------------------------- */
fx({
  id: "oq-wave-border-mask",
  name: "Wave Mask Border",
  fa: "حاشیه موجی ماسکی",
  description: "The frame's top and bottom edges are cut into waves by a mask that endlessly crawls.",
  faDescription: "لبه بالا و پایین قاب با ماسک موجی بریده شده که دائم موج می‌خورد.",
  tags: ["border", "wave", "mask", "wavy"],
  previewBg: "#0b0916",
  html: `<div class="wb-frame"><i class="wb-rim"></i><span class="wb-box">WAVE</span></div>`,
  css: `.fx-oq-wave-border-mask .wb-frame {
  position: relative;
  width: 172px;
  height: 112px;
  padding: 7px;
}
.fx-oq-wave-border-mask .wb-rim {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: linear-gradient(180deg, #38bdf8, #818cf8);
  -webkit-mask-image:
    radial-gradient(circle at 10px -5px, transparent 11px, #000 11.5px),
    radial-gradient(circle at 10px calc(100% + 5px), transparent 11px, #000 11.5px);
  -webkit-mask-size: 24px 100%;
  -webkit-mask-position: 0 0, 0 0;
  -webkit-mask-repeat: repeat-x;
  mask-image:
    radial-gradient(circle at 10px -5px, transparent 11px, #000 11.5px),
    radial-gradient(circle at 10px calc(100% + 5px), transparent 11px, #000 11.5px);
  mask-size: 24px 100%;
  mask-position: 0 0, 0 0;
  mask-repeat: repeat-x;
  animation: oq-wb-flow 1.6s linear infinite;
  filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.6));
}
.fx-oq-wave-border-mask .wb-box {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #0b0f1c;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #7dd3fc;
}
@keyframes oq-wb-flow {
  to {
    -webkit-mask-position: 24px 0, 24px 0;
    mask-position: 24px 0, 24px 0;
  }
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Scalloped stamp rim with rotating hue                  */
/* ---------------------------------------------------------- */
fx({
  id: "oq-scallop-border",
  name: "Scallop Rim Border",
  fa: "حاشیه کنگره‌ای",
  description: "A postage-stamp rim: punched scallop holes circle the gradient frame as its hue turns.",
  faDescription: "قاب تمبری: سوراخ‌های کنگره‌ای دور گرادیان می‌چرخند و رنگ آن می‌گردد.",
  tags: ["border", "scallop", "stamp", "hue"],
  previewBg: "#0b0916",
  html: `<div class="sb-frame"><span class="sb-box">SCALLOP</span></div>`,
  css: `.fx-oq-scallop-border .sb-frame {
  position: relative;
  width: 168px;
  height: 108px;
  padding: 9px;
  border-radius: 12px;
  background: linear-gradient(135deg, #f472b6, #a78bfa 50%, #38bdf8);
  -webkit-mask-image: radial-gradient(circle 5px at 5px 5px, transparent 4.5px, #000 5px);
  -webkit-mask-size: 16px 16px;
  mask-image: radial-gradient(circle 5px at 5px 5px, transparent 4.5px, #000 5px);
  mask-size: 16px 16px;
  animation: oq-sb-hue 5s linear infinite;
  display: grid;
  place-items: center;
}
.fx-oq-scallop-border .sb-box {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #0b0f1c;
  border-radius: 5px;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f5d0fe;
}
@keyframes oq-sb-hue {
  to { filter: hue-rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Ticket perforation with moving scissors                */
/* ---------------------------------------------------------- */
fx({
  id: "oq-ticket-perforation-border",
  name: "Ticket Perforation Border",
  fa: "حاشیه بلیت پرفراژ",
  description: "A perforated ticket stub where a scissors glyph glides down the dashed cut line.",
  faDescription: "بلیتی پرفراژدار که قیچی روی خط‌چین برش به‌آرامی پایین می‌لغزد.",
  tags: ["border", "ticket", "perforation", "dashed"],
  previewBg: "#14121d",
  html: `<div class="tk-ticket"><span class="tk-side"><i class="tk-cut">✂</i></span><span class="tk-main"><b class="tk-t">TICKET</b><span class="tk-n">№ 0421</span></span></div>`,
  css: `.fx-oq-ticket-perforation-border .tk-ticket {
  position: relative;
  width: 196px;
  height: 86px;
  border-radius: 12px;
  background: linear-gradient(160deg, #fefce8, #fde68a 60%, #fbbf24);
  border: 2px dashed #b45309;
  display: flex;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
}
.fx-oq-ticket-perforation-border .tk-ticket::before,
.fx-oq-ticket-perforation-border .tk-ticket::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #14121d;
  top: 50%;
  margin-top: -9px;
}
.fx-oq-ticket-perforation-border .tk-ticket::before { left: -11px; }
.fx-oq-ticket-perforation-border .tk-ticket::after { right: -11px; }
.fx-oq-ticket-perforation-border .tk-side {
  position: relative;
  width: 52px;
  flex: none;
  border-right: 2px dashed #b45309;
  display: grid;
  place-items: center;
}
.fx-oq-ticket-perforation-border .tk-cut {
  position: absolute;
  top: -14px;
  left: 50%;
  margin-left: -9px;
  font-size: 15px;
  font-style: normal;
  color: #78350f;
  animation: oq-tk-cut 2.8s linear infinite;
}
.fx-oq-ticket-perforation-border .tk-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
}
.fx-oq-ticket-perforation-border .tk-t {
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 3px;
  color: #78350f;
}
.fx-oq-ticket-perforation-border .tk-n {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #92400e;
}
@keyframes oq-tk-cut {
  0% { top: -14px; opacity: 0; }
  12% { opacity: 1; }
  88% { opacity: 1; }
  100% { top: 84px; opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Fabric stitches sewing themselves side by side         */
/* ---------------------------------------------------------- */
fx({
  id: "oq-stitch-border",
  name: "Sewing Stitch Border",
  fa: "حاشیه دوخت‌دوز",
  description: "Dashed thread stitches sew themselves around the fabric patch, side after side.",
  faDescription: "بخیه‌های خط‌چین مثل نخ‌وسوزن دور پارچه، ضلع به ضلع خودشان را می‌دوزند.",
  tags: ["border", "stitch", "dashed", "fabric"],
  previewBg: "#0b0916",
  html: `<div class="st-frame"><i class="st-s st-t"></i><i class="st-s st-r"></i><i class="st-s st-b"></i><i class="st-s st-l"></i><span class="st-box">STITCH</span></div>`,
  css: `.fx-oq-stitch-border .st-frame {
  position: relative;
  width: 176px;
  height: 112px;
  border-radius: 14px;
  background:
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0 1px, transparent 1px 7px),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0 1px, transparent 1px 7px),
    linear-gradient(135deg, #1e3a8a, #312e81);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
}
.fx-oq-stitch-border .st-box {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #dbeafe;
  z-index: 1;
}
.fx-oq-stitch-border .st-s {
  position: absolute;
  border-radius: 3px;
  background-repeat: no-repeat;
  animation: oq-st-sew 3.6s linear infinite;
}
.fx-oq-stitch-border .st-t {
  top: 5px;
  left: 6px;
  right: 6px;
  height: 3px;
  background-image: repeating-linear-gradient(90deg, #fef9c3 0 9px, rgba(254, 249, 195, 0.25) 9px 12px, transparent 12px 18px);
  background-size: 0% 100%;
}
.fx-oq-stitch-border .st-r {
  top: 6px;
  bottom: 6px;
  right: 5px;
  width: 3px;
  background-image: repeating-linear-gradient(180deg, #fef9c3 0 9px, rgba(254, 249, 195, 0.25) 9px 12px, transparent 12px 18px);
  background-size: 100% 0%;
  animation-delay: 0.9s;
}
.fx-oq-stitch-border .st-b {
  bottom: 5px;
  left: 6px;
  right: 6px;
  height: 3px;
  background-image: repeating-linear-gradient(90deg, #fef9c3 0 9px, rgba(254, 249, 195, 0.25) 9px 12px, transparent 12px 18px);
  background-size: 0% 100%;
  animation-delay: 1.8s;
}
.fx-oq-stitch-border .st-l {
  top: 6px;
  bottom: 6px;
  left: 5px;
  width: 3px;
  background-image: repeating-linear-gradient(180deg, #fef9c3 0 9px, rgba(254, 249, 195, 0.25) 9px 12px, transparent 12px 18px);
  background-size: 100% 0%;
  animation-delay: 2.7s;
}
@keyframes oq-st-sew {
  0% { background-size: 0% 0%; opacity: 1; }
  22% { background-size: 100% 100%; opacity: 1; }
  96% { background-size: 100% 100%; opacity: 1; }
  100% { background-size: 100% 100%; opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Diagonal ribbon stripes marching in the frame         */
/* ---------------------------------------------------------- */
fx({
  id: "oq-ribbon-rotate-border",
  name: "Rotating Ribbon Border",
  fa: "حاشیه روبان چرخان",
  description: "Barber-pole ribbon stripes circulate diagonally inside the frame's border band.",
  faDescription: "راه‌راه مورب روبانی داخل نوار حاشیه، مثل میله آرایشگر می‌چرخند.",
  tags: ["border", "ribbon", "stripes", "diagonal"],
  previewBg: "#0b0916",
  html: `<div class="rb-frame"><i class="rb-rim"></i><span class="rb-box">RIBBON</span></div>`,
  css: `.fx-oq-ribbon-rotate-border .rb-frame {
  position: relative;
  width: 168px;
  height: 108px;
}
.fx-oq-ribbon-rotate-border .rb-rim {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 4px;
  overflow: hidden;
  background: repeating-linear-gradient(45deg, #f472b6 0 12px, #a855f7 12px 24px);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  animation: oq-rb-march 1.4s linear infinite;
}
.fx-oq-ribbon-rotate-border .rb-box {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: #0b0f1c;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fbcfe8;
}
@keyframes oq-rb-march {
  to { background-position: 33.94px 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Gradient border with matching outer glow pulse        */
/* ---------------------------------------------------------- */
fx({
  id: "oq-glow-gradient-border",
  name: "Glow Gradient Border",
  fa: "حاشیه گرادیانی درخشان",
  description: "A cyan-to-pink gradient frame whose blurred outer glow breathes in the same colors.",
  faDescription: "قاب گرادیانی فیروزه‌ای تا صورتی که هاله محو بیرونی‌اش هم‌رنگ خودش می‌تپد.",
  tags: ["border", "gradient", "glow", "pulse"],
  previewBg: "#0b0916",
  html: `<div class="gg-frame"><span class="gg-box">GLOW</span></div>`,
  css: `.fx-oq-glow-gradient-border .gg-frame {
  position: relative;
  z-index: 0;
  width: 168px;
  height: 108px;
  border-radius: 16px;
  display: grid;
  place-items: center;
}
.fx-oq-glow-gradient-border .gg-frame::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 2.5px;
  background: linear-gradient(90deg, #22d3ee, #a78bfa 45%, #f472b6 75%, #22d3ee);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
}
.fx-oq-glow-gradient-border .gg-frame::after {
  content: "";
  position: absolute;
  inset: -5px;
  border-radius: 20px;
  z-index: -1;
  background: linear-gradient(90deg, #22d3ee, #a78bfa 45%, #f472b6 75%, #22d3ee);
  filter: blur(11px);
  animation: oq-gg-pulse 2.6s ease-in-out infinite;
}
.fx-oq-glow-gradient-border .gg-box {
  position: relative;
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  border-radius: 13px;
  background: #0b0f1c;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #c7d2fe;
}
@keyframes oq-gg-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.85; }
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Light flowing through the four sides in sequence      */
/* ---------------------------------------------------------- */
fx({
  id: "oq-four-side-flow",
  name: "Four Side Flow Border",
  fa: "حاشیه جریان چهارضلعی",
  description: "A light packet runs along each side of the frame in turn — top, right, bottom, left.",
  faDescription: "بسته‌ای از نور به‌ترتیب در هر ضلع قاب می‌دود — بالا، راست، پایین، چپ.",
  tags: ["border", "flow", "sequence", "light"],
  previewBg: "#0b0916",
  html: `<div class="ff-frame"><i class="ff-s ff-t"></i><i class="ff-s ff-r"></i><i class="ff-s ff-b"></i><i class="ff-s ff-l"></i><span class="ff-box">FLOW</span></div>`,
  css: `.fx-oq-four-side-flow .ff-frame {
  position: relative;
  width: 168px;
  height: 108px;
}
.fx-oq-four-side-flow .ff-s {
  position: absolute;
  background-repeat: no-repeat;
}
.fx-oq-four-side-flow .ff-t {
  top: 0;
  left: 4px;
  right: 4px;
  height: 2.5px;
  background-image: linear-gradient(90deg, transparent 30%, #38bdf8 46%, #e0f2fe 50%, #38bdf8 54%, transparent 70%);
  background-size: 250% 100%;
  animation: oq-ff-run 2.4s linear infinite;
}
.fx-oq-four-side-flow .ff-r {
  top: 4px;
  bottom: 4px;
  right: 0;
  width: 2.5px;
  background-image: linear-gradient(180deg, transparent 30%, #38bdf8 46%, #e0f2fe 50%, #38bdf8 54%, transparent 70%);
  background-size: 100% 250%;
  animation: oq-ff-runy 2.4s linear infinite 0.6s;
}
.fx-oq-four-side-flow .ff-b {
  bottom: 0;
  left: 4px;
  right: 4px;
  height: 2.5px;
  background-image: linear-gradient(90deg, transparent 30%, #38bdf8 46%, #e0f2fe 50%, #38bdf8 54%, transparent 70%);
  background-size: 250% 100%;
  animation: oq-ff-run 2.4s linear infinite 1.2s;
}
.fx-oq-four-side-flow .ff-l {
  top: 4px;
  bottom: 4px;
  left: 0;
  width: 2.5px;
  background-image: linear-gradient(180deg, transparent 30%, #38bdf8 46%, #e0f2fe 50%, #38bdf8 54%, transparent 70%);
  background-size: 100% 250%;
  animation: oq-ff-runy 2.4s linear infinite 1.8s;
}
.fx-oq-four-side-flow .ff-box {
  position: absolute;
  inset: 4px;
  border-radius: 10px;
  background: #0b0f1c;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #bae6fd;
}
@keyframes oq-ff-run {
  from { background-position: 130% 0; }
  to { background-position: -30% 0; }
}
@keyframes oq-ff-runy {
  from { background-position: 0 130%; }
  to { background-position: 0 -30%; }
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Corner brackets that rotate and swap on hover         */
/* ---------------------------------------------------------- */
fx({
  id: "oq-bracket-corner-rotate",
  name: "Rotating Corner Brackets",
  fa: "براکت‌های چرخان گوشه",
  description: "On hover the four corner brackets swing 90° and each moves to the neighboring corner.",
  faDescription: "با هاور، چهار براکت گوشه ۹۰ درجه می‌چرخند و هرکدام به گوشه بعدی می‌پرد.",
  tags: ["border", "brackets", "corners", "hover"],
  interaction: "hover",
  previewBg: "#0b0916",
  html: `<div class="bc-frame"><span class="bc-box">BRACKETS</span><i class="bc-k bc-tl"></i><i class="bc-k bc-tr"></i><i class="bc-k bc-br"></i><i class="bc-k bc-bl"></i></div>`,
  css: `.fx-oq-bracket-corner-rotate .bc-frame {
  position: relative;
  width: 168px;
  height: 108px;
  display: grid;
  place-items: center;
  border: 1px dashed rgba(240, 171, 252, 0.2);
}
.fx-oq-bracket-corner-rotate .bc-box {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f5d0fe;
}
.fx-oq-bracket-corner-rotate .bc-k {
  position: absolute;
  width: 20px;
  height: 20px;
  transition: transform 0.55s cubic-bezier(0.34, 1.4, 0.64, 1), border-color 0.55s ease;
}
.fx-oq-bracket-corner-rotate .bc-tl {
  top: 4px;
  left: 4px;
  border-top: 3px solid #f0abfc;
  border-left: 3px solid #f0abfc;
}
.fx-oq-bracket-corner-rotate .bc-tr {
  top: 4px;
  right: 4px;
  border-top: 3px solid #f0abfc;
  border-right: 3px solid #f0abfc;
}
.fx-oq-bracket-corner-rotate .bc-br {
  bottom: 4px;
  right: 4px;
  border-bottom: 3px solid #f0abfc;
  border-right: 3px solid #f0abfc;
}
.fx-oq-bracket-corner-rotate .bc-bl {
  bottom: 4px;
  left: 4px;
  border-bottom: 3px solid #f0abfc;
  border-left: 3px solid #f0abfc;
}
.fx-oq-bracket-corner-rotate .bc-frame:hover .bc-tl {
  transform: translate(140px, 0) rotate(90deg);
  border-color: #38bdf8;
}
.fx-oq-bracket-corner-rotate .bc-frame:hover .bc-tr {
  transform: translate(0, 80px) rotate(90deg);
  border-color: #38bdf8;
}
.fx-oq-bracket-corner-rotate .bc-frame:hover .bc-br {
  transform: translate(-140px, 0) rotate(90deg);
  border-color: #38bdf8;
}
.fx-oq-bracket-corner-rotate .bc-frame:hover .bc-bl {
  transform: translate(0, -80px) rotate(90deg);
  border-color: #38bdf8;
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Expanding radar box-shadow rings                      */
/* ---------------------------------------------------------- */
fx({
  id: "oq-shadow-ring-pulse",
  name: "Shadow Ring Pulse",
  fa: "حاشیه حلقه‌های رادار",
  description: "Two box-shadow rings detach from the frame and expand outward like radar pings.",
  faDescription: "دو حلقه سایه از قاب جدا می‌شوند و مثل پینگ رادار بیرون می‌روند.",
  tags: ["border", "shadow", "pulse", "radar"],
  previewBg: "#0b0916",
  html: `<div class="rp-frame"><span class="rp-box">RADAR</span></div>`,
  css: `.fx-oq-shadow-ring-pulse .rp-frame {
  position: relative;
  width: 168px;
  height: 108px;
  border-radius: 14px;
  border: 2px solid #fb7185;
  display: grid;
  place-items: center;
  animation: oq-rp-ring 1.8s cubic-bezier(0.2, 0.6, 0.4, 1) infinite;
}
.fx-oq-shadow-ring-pulse .rp-frame::after {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 14px;
  border: 2px solid rgba(251, 113, 133, 0.7);
  animation: oq-rp-ring 1.8s cubic-bezier(0.2, 0.6, 0.4, 1) infinite 0.9s;
}
.fx-oq-shadow-ring-pulse .rp-box {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fecdd3;
  z-index: 1;
}
@keyframes oq-rp-ring {
  from { box-shadow: 0 0 0 0 rgba(251, 113, 133, 0.55), 0 0 0 0 rgba(251, 113, 133, 0.25); }
  to { box-shadow: 0 0 0 14px rgba(251, 113, 133, 0), 0 0 0 26px rgba(251, 113, 133, 0); }
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Double outline expanding with offset pulse            */
/* ---------------------------------------------------------- */
fx({
  id: "oq-outline-offset-pulse",
  name: "Outline Offset Pulse",
  fa: "حاشیه اوت‌لاین متسع",
  description: "Two outlines drift away from the frame, expanding their offset as they fade.",
  faDescription: "دو اوت‌لاین از قاب فاصله می‌گیرند و با بزرگ‌شدن فاصله محو می‌شوند.",
  tags: ["border", "outline", "offset", "pulse"],
  previewBg: "#0b0916",
  html: `<div class="op-frame"><span class="op-box">OUTLINE</span></div>`,
  css: `.fx-oq-outline-offset-pulse .op-frame {
  position: relative;
  width: 168px;
  height: 108px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  outline: 2px solid #38bdf8;
  animation: oq-op-out 2.2s ease-in-out infinite;
}
.fx-oq-outline-offset-pulse .op-frame::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 12px;
  outline: 2px solid #a78bfa;
  animation: oq-op-out 2.2s ease-in-out infinite 1.1s;
}
.fx-oq-outline-offset-pulse .op-box {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #bae6fd;
}
@keyframes oq-op-out {
  0% { outline-offset: 2px; opacity: 1; }
  100% { outline-offset: 13px; opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Dotted border morphing into solid on hover            */
/* ---------------------------------------------------------- */
fx({
  id: "oq-dotted-to-solid",
  name: "Dotted to Solid Border",
  fa: "حاشیه نقطه‌چین به ممتد",
  description: "A dotted amber frame gets flooded by a solid outline growing from the middle outward.",
  faDescription: "قاب نقطه‌چین کهربایی با هاور از وسط به دو طرف با خط ممتد پر می‌شود.",
  tags: ["border", "dotted", "solid", "hover"],
  interaction: "hover",
  previewBg: "#0b0916",
  html: `<div class="ds-frame"><span class="ds-box">HOVER ME</span></div>`,
  css: `.fx-oq-dotted-to-solid .ds-frame {
  position: relative;
  width: 168px;
  height: 108px;
  border-radius: 14px;
  border: 3px dotted #fbbf24;
  display: grid;
  place-items: center;
  transition: border-color 0.5s ease;
}
.fx-oq-dotted-to-solid .ds-frame::before {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: 14px;
  border: 3px solid #fbbf24;
  clip-path: inset(0 50% 0 50% round 14px);
  transition: clip-path 0.6s ease;
  pointer-events: none;
}
.fx-oq-dotted-to-solid .ds-frame:hover {
  border-color: rgba(251, 191, 36, 0.25);
}
.fx-oq-dotted-to-solid .ds-frame:hover::before {
  clip-path: inset(0 0 0 0 round 14px);
}
.fx-oq-dotted-to-solid .ds-box {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fde68a;
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Two border rings sliding in opposite directions       */
/* ---------------------------------------------------------- */
fx({
  id: "oq-double-border-slide",
  name: "Double Border Slide",
  fa: "حاشیه دوقلوی معکوس",
  description: "Two offset frame rings each carry a light arc sliding clockwise and counter-clockwise.",
  faDescription: "دو حلقه قاب با فاصله، هرکدام قوسی نورانی دارند که در جهت مخالف هم می‌لغزند.",
  tags: ["border", "double", "slide", "conic"],
  previewBg: "#0b0916",
  html: `<div class="db-wrap"><i class="db-r1"></i><i class="db-r2"></i><span class="db-box">DUAL SLIDE</span></div>`,
  css: `.fx-oq-double-border-slide .db-wrap {
  position: relative;
  width: 168px;
  height: 108px;
  display: grid;
  place-items: center;
}
.fx-oq-double-border-slide .db-r1 {
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 2px;
  overflow: hidden;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
}
.fx-oq-double-border-slide .db-r1::before {
  content: "";
  position: absolute;
  inset: -60%;
  background: conic-gradient(from 0deg, transparent 0deg 74%, #22d3ee 74% 88%, transparent 88%);
  animation: oq-db-cw 3.2s linear infinite;
}
.fx-oq-double-border-slide .db-r2 {
  position: absolute;
  inset: -7px;
  border-radius: 16px;
  padding: 2px;
  overflow: hidden;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
}
.fx-oq-double-border-slide .db-r2::before {
  content: "";
  position: absolute;
  inset: -60%;
  background: conic-gradient(from 180deg, transparent 0deg 74%, #f472b6 74% 88%, transparent 88%);
  animation: oq-db-ccw 3.2s linear infinite;
}
.fx-oq-double-border-slide .db-box {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #0b0f1c;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #a5f3fc;
}
@keyframes oq-db-cw {
  to { transform: rotate(360deg); }
}
@keyframes oq-db-ccw {
  to { transform: rotate(-360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 18 — Smooth multi-color border cycling hue                 */
/* ---------------------------------------------------------- */
fx({
  id: "oq-border-color-cycle",
  name: "Hue Cycle Border",
  fa: "حاشیه چرخه رنگی",
  description: "A five-color gradient ring stays still while its entire hue smoothly cycles forever.",
  faDescription: "حلقه گرادیانی پنج‌رنگ ثابت است اما فام کل آن پیوسته و نرم می‌چرخد.",
  tags: ["border", "gradient", "hue", "cycle"],
  previewBg: "#0b0916",
  html: `<div class="cc-frame"><span class="cc-box">CYCLE</span></div>`,
  css: `.fx-oq-border-color-cycle .cc-frame {
  position: relative;
  width: 168px;
  height: 108px;
  display: grid;
  place-items: center;
}
.fx-oq-border-color-cycle .cc-frame::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 14px;
  padding: 3px;
  background: linear-gradient(90deg, #f87171, #fbbf24, #34d399, #60a5fa, #c084fc, #f87171);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  animation: oq-cc-hue 4.5s linear infinite;
}
.fx-oq-border-color-cycle .cc-box {
  position: relative;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-radius: 11px;
  background: #0b0f1c;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #e2e8f0;
}
@keyframes oq-cc-hue {
  to { filter: hue-rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 19 — Soft slow rainbow conic with blurred glow             */
/* ---------------------------------------------------------- */
fx({
  id: "oq-rainbow-smooth-border",
  name: "Smooth Rainbow Glow Border",
  fa: "حاشیه رنگین‌کمان نرم",
  description: "A pastel conic ring turns slowly while a blurred halo of the same colors breathes behind.",
  faDescription: "حلقه مخروطی پاستلی به‌کندی می‌چرخد و هاله محو هم‌رنگش پشت آن می‌نفسد.",
  tags: ["border", "rainbow", "conic", "glow"],
  previewBg: "#0b0916",
  html: `<div class="rw-wrap"><i class="rw-glow"></i><i class="rw-ring"></i><span class="rw-box">RAINBOW</span></div>`,
  css: `.fx-oq-rainbow-smooth-border .rw-wrap {
  position: relative;
  width: 168px;
  height: 108px;
  display: grid;
  place-items: center;
}
.fx-oq-rainbow-smooth-border .rw-glow {
  position: absolute;
  inset: -22px;
  border-radius: 50%;
  background: conic-gradient(#fca5a5, #fcd34d, #86efac, #7dd3fc, #c4b5fd, #fca5a5);
  filter: blur(20px);
  opacity: 0.5;
  animation: oq-rw-spin 8s linear infinite;
}
.fx-oq-rainbow-smooth-border .rw-ring {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 4px;
  overflow: hidden;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
}
.fx-oq-rainbow-smooth-border .rw-ring::before {
  content: "";
  position: absolute;
  inset: -120%;
  background: conic-gradient(#fca5a5, #fcd34d, #86efac, #7dd3fc, #c4b5fd, #fca5a5);
  animation: oq-rw-spin 8s linear infinite;
}
.fx-oq-rainbow-smooth-border .rw-box {
  position: relative;
  z-index: 1;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  border-radius: 12px;
  background: #0d0b16;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fdf4ff;
}
@keyframes oq-rw-spin {
  to { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Neon tube border with irregular flicker               */
/* ---------------------------------------------------------- */
fx({
  id: "oq-neon-tube-border",
  name: "Neon Tube Border",
  fa: "حاشیه لوله نئون",
  description: "A glass-tube border glowing inside and out, stuttering like a faulty neon sign.",
  faDescription: "قاب لوله شیشه‌ای با درخشش درونی و بیرونی که مثل تابلوی نئون خراب سوسو می‌زند.",
  tags: ["border", "neon", "tube", "flicker"],
  previewBg: "#0a0710",
  html: `<div class="nt-frame"><span class="nt-box">NEON</span></div>`,
  css: `.fx-oq-neon-tube-border .nt-frame {
  width: 168px;
  height: 108px;
  border-radius: 18px;
  border: 3px solid #f0abfc;
  display: grid;
  place-items: center;
  box-shadow:
    0 0 9px rgba(240, 171, 252, 0.9),
    0 0 26px rgba(240, 171, 252, 0.4),
    inset 0 0 9px rgba(240, 171, 252, 0.85),
    inset 0 0 22px rgba(240, 171, 252, 0.3);
  animation: oq-nt-flicker 4s linear infinite;
}
.fx-oq-neon-tube-border .nt-box {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #fdf4ff;
  text-shadow: 0 0 8px rgba(240, 171, 252, 1), 0 0 18px rgba(240, 171, 252, 0.7);
}
@keyframes oq-nt-flicker {
  0%, 100% { opacity: 1; }
  3% { opacity: 0.45; }
  5% { opacity: 1; }
  7% { opacity: 0.6; }
  9% { opacity: 1; }
  44% { opacity: 1; }
  46% { opacity: 0.35; }
  48% { opacity: 1; }
  71% { opacity: 1; }
  72% { opacity: 0.55; }
  74% { opacity: 1; }
}`,
});

/* ---------------------------------------------------------- */
/* 21 — Segmented border with chasing bright segments         */
/* ---------------------------------------------------------- */
fx({
  id: "oq-segmented-spinner-border",
  name: "Segmented Chase Border",
  fa: "حاشیه قطعه‌قطعه تعقیبی",
  description: "A dim segmented ring lights up wherever a spinning bright segment passes — a chase.",
  faDescription: "حلقه قطعه‌قطعه کم‌نور هرجا قوس درخشان چرخان رد شود روشن می‌شود — تعقیب نور.",
  tags: ["border", "segments", "chase", "spinner"],
  previewBg: "#0b0916",
  html: `<div class="ss-wrap"><i class="ss-ring"></i><span class="ss-box">CHASE</span></div>`,
  css: `.fx-oq-segmented-spinner-border .ss-wrap {
  position: relative;
  width: 168px;
  height: 108px;
  display: grid;
  place-items: center;
}
.fx-oq-segmented-spinner-border .ss-ring {
  position: absolute;
  inset: 0;
  border-radius: 14px;
  padding: 3px;
  overflow: hidden;
  background: repeating-conic-gradient(rgba(56, 189, 248, 0.22) 0deg 13deg, transparent 13deg 30deg);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
}
.fx-oq-segmented-spinner-border .ss-ring::before {
  content: "";
  position: absolute;
  inset: -120%;
  background: repeating-conic-gradient(transparent 0deg 17deg, #7dd3fc 17deg 21deg, transparent 21deg 30deg);
  animation: oq-ss-chase 1.6s linear infinite;
}
.fx-oq-segmented-spinner-border .ss-box {
  position: relative;
  z-index: 1;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-radius: 11px;
  background: #0b0f1c;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #7dd3fc;
}
@keyframes oq-ss-chase {
  to { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 22 — Diamond border rotating inside a square frame         */
/* ---------------------------------------------------------- */
fx({
  id: "oq-diamond-rotating-border",
  name: "Rotating Diamond Border",
  fa: "حاشیه لوزی چرخان",
  description: "Two nested square outlines spin like diamonds inside the clipped square frame.",
  faDescription: "دو قاب مربعی تو در تو مثل لوزی داخل قاب مربعی بریده‌شده می‌چرخند.",
  tags: ["border", "diamond", "rotate", "geometric"],
  previewBg: "#0a0812",
  html: `<div class="dr-frame"><i class="dr-d1"></i><i class="dr-d2"></i><span class="dr-t">DIAMOND</span></div>`,
  css: `.fx-oq-diamond-rotating-border .dr-frame {
  position: relative;
  width: 118px;
  height: 118px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(196, 181, 253, 0.25);
  background: #0d0b16;
  display: grid;
  place-items: center;
}
.fx-oq-diamond-rotating-border .dr-d1 {
  position: absolute;
  inset: 10px;
  border: 2px solid #c4b5fd;
  border-radius: 4px;
  animation: oq-dr-spin 7s linear infinite;
}
.fx-oq-diamond-rotating-border .dr-d2 {
  position: absolute;
  inset: 32px;
  border: 1.5px solid rgba(240, 171, 252, 0.8);
  border-radius: 3px;
  animation: oq-dr-spin 7s linear infinite reverse;
}
.fx-oq-diamond-rotating-border .dr-t {
  position: relative;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #ddd6fe;
}
@keyframes oq-dr-spin {
  to { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 23 — Gradient colored dashes marching around the ring      */
/* ---------------------------------------------------------- */
fx({
  id: "oq-gradient-dash-march",
  name: "Gradient Dash March",
  fa: "حاشیه خط‌چین گرادیانی",
  description: "Two-tone gradient dashes march around the border ring like colored marching ants.",
  faDescription: "خط‌چین‌های دورنگ گرادیانی مثل مورچه‌های رنگی دور حلقه حاشیه رژه می‌روند.",
  tags: ["border", "dash", "march", "gradient"],
  previewBg: "#0b0916",
  html: `<div class="dm-wrap"><i class="dm-ring"></i><span class="dm-box">MARCH</span></div>`,
  css: `.fx-oq-gradient-dash-march .dm-wrap {
  position: relative;
  width: 168px;
  height: 108px;
  display: grid;
  place-items: center;
}
.fx-oq-gradient-dash-march .dm-ring {
  position: absolute;
  inset: 0;
  border-radius: 14px;
  padding: 3px;
  overflow: hidden;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
}
.fx-oq-gradient-dash-march .dm-ring::before {
  content: "";
  position: absolute;
  inset: -120%;
  background: repeating-conic-gradient(from 0deg, #34d399 0deg 5deg, #60a5fa 5deg 10deg, transparent 10deg 18deg);
  animation: oq-dm-march 2.8s linear infinite;
}
.fx-oq-gradient-dash-march .dm-box {
  position: relative;
  z-index: 1;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-radius: 11px;
  background: #0b0f1c;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #a7f3d0;
}
@keyframes oq-dm-march {
  to { transform: rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 24 — PCB pulse running the four sides with corner nodes    */
/* ---------------------------------------------------------- */
fx({
  id: "oq-circuit-run-border",
  name: "Circuit Run Border",
  fa: "حاشیه مسیر مدار",
  description: "A PCB board: signal pulses run the traces while corner pads flash as they pass.",
  faDescription: "بورد مدار چاپی: پالس سیگنال در مسیرها می‌دود و پدهای گوشه هنگام عبور می‌درخشند.",
  tags: ["border", "circuit", "pcb", "pulse"],
  previewBg: "#04120a",
  html: `<div class="cr-board"><i class="cr-n cr-n1"></i><i class="cr-n cr-n2"></i><i class="cr-n cr-n3"></i><i class="cr-n cr-n4"></i><i class="cr-p cr-pt"></i><i class="cr-p cr-pr"></i><i class="cr-p cr-pb"></i><i class="cr-p cr-pl"></i><span class="cr-chip">PCB-01</span></div>`,
  css: `.fx-oq-circuit-run-border .cr-board {
  position: relative;
  width: 176px;
  height: 112px;
  border-radius: 10px;
  background:
    repeating-linear-gradient(0deg, rgba(74, 222, 128, 0.08) 0 1px, transparent 1px 14px),
    repeating-linear-gradient(90deg, rgba(74, 222, 128, 0.08) 0 1px, transparent 1px 14px),
    linear-gradient(160deg, #052e16, #064e3b);
  border: 1px solid #14532d;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.45);
  display: grid;
  place-items: center;
}
.fx-oq-circuit-run-border .cr-chip {
  position: relative;
  z-index: 1;
  padding: 7px 14px;
  border-radius: 6px;
  background: #022c22;
  border: 1px solid #15803d;
  color: #bbf7d0;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}
.fx-oq-circuit-run-border .cr-p {
  position: absolute;
  background-repeat: no-repeat;
}
.fx-oq-circuit-run-border .cr-pt {
  top: 0;
  left: 10px;
  right: 10px;
  height: 2px;
  background-image: linear-gradient(90deg, transparent 25%, #4ade80 46%, #ecfccb 50%, #4ade80 54%, transparent 75%);
  background-size: 250% 100%;
  animation: oq-cr-run 2.6s linear infinite;
}
.fx-oq-circuit-run-border .cr-pr {
  top: 10px;
  bottom: 10px;
  right: 0;
  width: 2px;
  background-image: linear-gradient(180deg, transparent 25%, #4ade80 46%, #ecfccb 50%, #4ade80 54%, transparent 75%);
  background-size: 100% 250%;
  animation: oq-cr-runy 2.6s linear infinite 0.65s;
}
.fx-oq-circuit-run-border .cr-pb {
  bottom: 0;
  left: 10px;
  right: 10px;
  height: 2px;
  background-image: linear-gradient(90deg, transparent 25%, #4ade80 46%, #ecfccb 50%, #4ade80 54%, transparent 75%);
  background-size: 250% 100%;
  animation: oq-cr-run 2.6s linear infinite 1.3s;
}
.fx-oq-circuit-run-border .cr-pl {
  top: 10px;
  bottom: 10px;
  left: 0;
  width: 2px;
  background-image: linear-gradient(180deg, transparent 25%, #4ade80 46%, #ecfccb 50%, #4ade80 54%, transparent 75%);
  background-size: 100% 250%;
  animation: oq-cr-runy 2.6s linear infinite 1.95s;
}
.fx-oq-circuit-run-border .cr-n {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: #14532d;
  border: 1px solid #22c55e;
}
.fx-oq-circuit-run-border .cr-n1 { top: -4px; left: 6px; animation: oq-cr-node 2.6s linear infinite 0.1s; }
.fx-oq-circuit-run-border .cr-n2 { top: 4px; right: -4px; animation: oq-cr-node 2.6s linear infinite 0.75s; }
.fx-oq-circuit-run-border .cr-n3 { bottom: -4px; right: 6px; animation: oq-cr-node 2.6s linear infinite 1.4s; }
.fx-oq-circuit-run-border .cr-n4 { bottom: 4px; left: -4px; animation: oq-cr-node 2.6s linear infinite 2.05s; }
@keyframes oq-cr-run {
  from { background-position: 130% 0; }
  to { background-position: -30% 0; }
}
@keyframes oq-cr-runy {
  from { background-position: 0 130%; }
  to { background-position: 0 -30%; }
}
@keyframes oq-cr-node {
  0%, 8%, 100% { box-shadow: 0 0 0 rgba(74, 222, 128, 0); background: #14532d; }
  4% { box-shadow: 0 0 10px 2px rgba(74, 222, 128, 0.9); background: #bbf7d0; }
}`,
});

/* ---------------------------------------------------------- */
/* 25 — Aurora bands flowing inside the border ring           */
/* ---------------------------------------------------------- */
fx({
  id: "oq-aurora-border",
  name: "Aurora Flow Border",
  fa: "حاشیه شفق قطبی",
  description: "Northern-light bands of green, sky and violet drift through the frame's ring.",
  faDescription: "نوارهای شفق سبز، آبی و بنفش داخل حلقه قاب شناورند.",
  tags: ["border", "aurora", "flow", "gradient"],
  previewBg: "#080d14",
  html: `<div class="au-wrap"><i class="au-ring"></i><span class="au-box">AURORA</span></div>`,
  css: `.fx-oq-aurora-border .au-wrap {
  position: relative;
  width: 168px;
  height: 108px;
  display: grid;
  place-items: center;
}
.fx-oq-aurora-border .au-ring {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 4px;
  overflow: hidden;
  background-color: #0f172a;
  background-image:
    radial-gradient(55% 130% at 18% 50%, rgba(52, 211, 153, 0.95), transparent 62%),
    radial-gradient(45% 150% at 55% 45%, rgba(56, 189, 248, 0.75), transparent 60%),
    radial-gradient(50% 140% at 88% 55%, rgba(167, 139, 250, 0.9), transparent 62%);
  background-size: 220% 100%, 220% 100%, 220% 100%;
  background-position: 0% 0%, 0% 0%, 0% 0%;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  animation: oq-au-flow 5.5s ease-in-out infinite alternate;
}
.fx-oq-aurora-border .au-box {
  position: relative;
  z-index: 1;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  border-radius: 12px;
  background: #0b1020;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #99f6e4;
}
@keyframes oq-au-flow {
  to { background-position: 60% 0%, -50% 0%, 45% 0%; }
}`,
});
