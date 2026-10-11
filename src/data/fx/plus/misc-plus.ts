import type { CssEffect } from "../types";

export const miscEffectsPlus: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  miscEffectsPlus.push({ category: "misc", interaction: "auto", ...e } as CssEffect);
}

/* 1 ── logo orbit spinner ─────────────────────────────────────── */
fx({
  id: "zq-logo-orbit-spinner",
  name: "Logo Orbit Spinner",
  fa: "اسپینر مداری لوگو",
  description:
    "A brand mark sitting still while a satellite dot circles it on a faint ring — a loading state that doubles as a logo.",
  faDescription:
    "نقطه‌ی برند ثابت است و یک ماهواره کوچک روی حلقه‌ای کم‌رنگ به دور آن می‌چرخد؛ لودری که شبیه لوگوتایپ است.",
  tags: ["logo", "orbit", "spinner", "loading"],
  html: `<span class="stage"><i class="core"></i><i class="orb"><b></b></i></span>`,
  css: `.fx-zq-logo-orbit-spinner .stage {
  position: relative;
  display: block;
  width: 78px;
  height: 78px;
}
.fx-zq-logo-orbit-spinner .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 22px;
  height: 22px;
  margin: -11px 0 0 -11px;
  border-radius: 7px;
  background: linear-gradient(135deg, #f0abfc, #d946ef);
  box-shadow: 0 0 18px rgba(217, 70, 239, 0.55);
}
.fx-zq-logo-orbit-spinner .orb {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(217, 70, 239, 0.3);
  animation: zq-logo-orbit 2.2s linear infinite;
}
.fx-zq-logo-orbit-spinner .orb b {
  position: absolute;
  top: -7px;
  left: 50%;
  width: 12px;
  height: 12px;
  margin-left: -6px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 12px rgba(251, 191, 36, 0.85);
}
@keyframes zq-logo-orbit {
  to { transform: rotate(360deg); }
}`,
});

/* 2 ── pulse logo mark ────────────────────────────────────────── */
fx({
  id: "zq-pulse-logo-mark",
  name: "Pulse Logo Mark",
  fa: "نشان لوگوی تپنده",
  description:
    "A squircle app logo that beats like a heart while two rounded-square ripples expand out of it in layers.",
  faDescription:
    "مربع گردِ لوگو مثل قلب می‌تپد و دو لایه‌ی موجیِ مربعی‌شکل از آن بیرون می‌زنند و محو می‌شوند.",
  tags: ["logo", "pulse", "ripple", "app-icon"],
  html: `<span class="mark"><span class="core">D</span></span>`,
  css: `.fx-zq-pulse-logo-mark .mark {
  position: relative;
  display: block;
  width: 66px;
  height: 66px;
}
.fx-zq-pulse-logo-mark .core {
  position: absolute;
  inset: 11px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  color: #fff;
  font: 800 20px/1 ui-sans-serif, system-ui, sans-serif;
  font-style: normal;
  box-shadow: 0 6px 18px rgba(168, 85, 247, 0.45);
  animation: zq-pmark-beat 2.4s ease-in-out infinite;
}
.fx-zq-pulse-logo-mark .mark::before,
.fx-zq-pulse-logo-mark .mark::after {
  content: "";
  position: absolute;
  inset: 4px;
  border-radius: 18px;
  border: 2px solid rgba(236, 72, 153, 0.7);
  animation: zq-pmark-pulse 2.4s ease-out infinite;
}
.fx-zq-pulse-logo-mark .mark::after {
  animation-delay: 1.2s;
}
@keyframes zq-pmark-pulse {
  0% { transform: scale(0.72); opacity: 0; }
  18% { opacity: 0.8; }
  100% { transform: scale(1.4); opacity: 0; }
}
@keyframes zq-pmark-beat {
  0%, 26%, 100% { transform: scale(1); }
  10% { transform: scale(1.12); }
}`,
});

/* 3 ── gradient divider line ──────────────────────────────────── */
fx({
  id: "zq-gradient-divider-line",
  name: "Gradient Divider Line",
  fa: "جداکننده گرادیانی",
  description:
    "A slim divider between two diamond caps with a bright streak of light forever traveling along it.",
  faDescription:
    "خط جداکننده‌ی باریک بین دو لوزی، با برقی از نور که همیشه روی آن حرکت می‌کند.",
  tags: ["divider", "hr", "shine", "line"],
  html: `<span class="stage"><i class="cap"></i><i class="line"></i><i class="cap"></i></span>`,
  css: `.fx-zq-gradient-divider-line .stage {
  display: flex;
  align-items: center;
  gap: 10px;
}
.fx-zq-gradient-divider-line .cap {
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: #e879f9;
  transform: rotate(45deg);
  box-shadow: 0 0 8px rgba(232, 121, 249, 0.7);
}
.fx-zq-gradient-divider-line .line {
  position: relative;
  display: block;
  width: 190px;
  height: 3px;
  border-radius: 99px;
  overflow: hidden;
  background: linear-gradient(90deg, rgba(217, 70, 239, 0), rgba(217, 70, 239, 0.45), rgba(217, 70, 239, 0));
}
.fx-zq-gradient-divider-line .line::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -60px;
  width: 60px;
  background: linear-gradient(90deg, transparent, #fbcfe8, #fff, #fbcfe8, transparent);
  animation: zq-gdiv-sweep 2.2s ease-in-out infinite;
}
@keyframes zq-gdiv-sweep {
  0% { transform: translateX(0); }
  60%, 100% { transform: translateX(330px); }
}`,
});

/* 4 ── zigzag divider ─────────────────────────────────────────── */
fx({
  id: "zq-zigzag-divider",
  name: "Zigzag Divider",
  fa: "جداکننده زیگزاگ",
  description:
    "A zigzag separator that draws itself tooth by tooth, pauses, then erases away and starts over.",
  faDescription:
    "جداکننده‌ی زیگزاگی که خودش را دندون‌به‌دندون می‌کشد، مکث می‌کند، پاک می‌شود و دوباره تکرار می‌کند.",
  tags: ["divider", "zigzag", "clip-path", "draw"],
  html: `<span class="stage"><i class="mask"><i class="zig"></i></i></span>`,
  css: `.fx-zq-zigzag-divider .mask {
  display: block;
  animation: zq-zz-draw 4.4s ease-in-out infinite;
}
.fx-zq-zigzag-divider .zig {
  display: block;
  width: 216px;
  height: 10px;
  background: linear-gradient(90deg, #f0abfc, #c026d3);
  clip-path: polygon(0 10px, 6px 0px, 12px 10px, 18px 0px, 24px 10px, 30px 0px, 36px 10px, 42px 0px, 48px 10px, 54px 0px, 60px 10px, 66px 0px, 72px 10px, 78px 0px, 84px 10px, 90px 0px, 96px 10px, 102px 0px, 108px 10px, 114px 0px, 120px 10px, 126px 0px, 132px 10px, 138px 0px, 144px 10px, 150px 0px, 156px 10px, 162px 0px, 168px 10px, 174px 0px, 180px 10px, 186px 0px, 192px 10px, 198px 0px, 204px 10px, 210px 0px, 216px 10px);
}
@keyframes zq-zz-draw {
  0% { clip-path: inset(0 100% 0 0); }
  42%, 58% { clip-path: inset(0 0 0 0); }
  100% { clip-path: inset(0 0 0 100%); }
}`,
});

/* 5 ── dots divider bounce ────────────────────────────────────── */
fx({
  id: "zq-dots-divider-bounce",
  name: "Dots Divider Bounce",
  fa: "جداکننده نقطه‌های جهشی",
  description:
    "Two fading lines pinching three dots that bounce one after another like a playful section separator.",
  faDescription:
    "دو خط کم‌رنگ در دو طرف سه نقطه که یکی‌یکی و با تأخیر به بالا می‌پرند؛ جداکننده‌ای شیطون.",
  tags: ["divider", "dots", "bounce", "separator"],
  html: `<span class="stage"><i class="ln"></i><span class="d"></span><span class="d"></span><span class="d"></span><i class="ln"></i></span>`,
  css: `.fx-zq-dots-divider-bounce .stage {
  display: flex;
  align-items: center;
  gap: 12px;
}
.fx-zq-dots-divider-bounce .ln {
  display: block;
  width: 84px;
  height: 2px;
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, rgba(240, 171, 252, 0.8));
}
.fx-zq-dots-divider-bounce .ln:last-child {
  background: linear-gradient(90deg, rgba(240, 171, 252, 0.8), transparent);
}
.fx-zq-dots-divider-bounce .d {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e879f9;
  animation: zq-ddiv-b 1.1s ease-in-out infinite;
}
.fx-zq-dots-divider-bounce .d:nth-of-type(2) {
  background: #f0abfc;
  animation-delay: 0.15s;
}
.fx-zq-dots-divider-bounce .d:nth-of-type(3) {
  background: #c026d3;
  animation-delay: 0.3s;
}
@keyframes zq-ddiv-b {
  0%, 100% { transform: translateY(0); }
  40% { transform: translateY(-14px); }
}`,
});

/* 6 ── live badge ─────────────────────────────────────────────── */
fx({
  id: "zq-live-badge",
  name: "LIVE Badge",
  fa: "نشان پخش زنده",
  description:
    "A streaming LIVE badge whose red dot blinks hard while soft rings pulse out of it.",
  faDescription:
    "بج LIVE با نقطه‌ی قرمزی که پلک می‌زند و حلقه‌هایی که از آن بیرون می‌زنند و محو می‌شوند.",
  tags: ["badge", "live", "blink", "status"],
  html: `<span class="badge"><i class="dot"></i>LIVE</span>`,
  css: `.fx-zq-live-badge .badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 16px;
  border-radius: 9px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.45);
  color: #fca5a5;
  font: 800 13px/1 ui-sans-serif, system-ui, sans-serif;
  letter-spacing: 3px;
}
.fx-zq-live-badge .dot {
  position: relative;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #ef4444;
  animation: zq-live-blink 1s steps(1, end) infinite;
}
.fx-zq-live-badge .dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #ef4444;
  animation: zq-live-ring 1.6s ease-out infinite;
}
@keyframes zq-live-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
@keyframes zq-live-ring {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(3.4); opacity: 0; }
}`,
});

/* 7 ── count badge bounce ─────────────────────────────────────── */
fx({
  id: "zq-count-badge-bounce",
  name: "Count Badge Bounce",
  fa: "بج شمارنده جهشی",
  description:
    "A notification counter pops onto an app icon with springy overshoot, wobbling the icon as it lands.",
  faDescription:
    "عدد نوتیفیکیشن با حرکت فنری روی آیکون اپ می‌پرد و آیکون هم هنگام فرود تاب می‌خورد.",
  tags: ["badge", "notification", "pop", "app-icon"],
  html: `<span class="app"><i class="glyph"></i><b class="bub">3</b></span>`,
  css: `.fx-zq-count-badge-bounce .app {
  position: relative;
  display: block;
  width: 58px;
  height: 58px;
  border-radius: 16px;
  background: linear-gradient(135deg, #7c3aed, #c026d3);
  box-shadow: 0 10px 22px rgba(124, 58, 237, 0.4);
  animation: zq-cb-wobble 3s ease-in-out infinite;
}
.fx-zq-count-badge-bounce .glyph {
  position: absolute;
  left: 17px;
  top: 19px;
  width: 24px;
  height: 19px;
  background: #fff;
  border-radius: 10px 10px 10px 3px;
}
.fx-zq-count-badge-bounce .glyph::before {
  content: "";
  position: absolute;
  left: 5px;
  top: 8px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #a855f7;
  box-shadow: 7px 0 0 #a855f7, 14px 0 0 #a855f7;
}
.fx-zq-count-badge-bounce .bub {
  position: absolute;
  top: -7px;
  right: -8px;
  min-width: 24px;
  padding: 4px 5px;
  border-radius: 99px;
  background: #ef4444;
  border: 2px solid #0f172a;
  color: #fff;
  font: 800 11px/1 ui-sans-serif, system-ui, sans-serif;
  text-align: center;
  transform: scale(0);
  animation: zq-cb-pop 3s ease-in-out infinite;
}
@keyframes zq-cb-pop {
  0% { transform: scale(0); opacity: 0; }
  6% { opacity: 1; }
  10% { transform: scale(1.45); }
  16% { transform: scale(1); }
  82% { transform: scale(1); opacity: 1; }
  92%, 100% { transform: scale(0); opacity: 0; }
}
@keyframes zq-cb-wobble {
  0%, 8%, 26%, 100% { transform: rotate(0deg); }
  12% { transform: rotate(-9deg); }
  17% { transform: rotate(8deg); }
  22% { transform: rotate(-4deg); }
}`,
});

/* 8 ── new ribbon pop ─────────────────────────────────────────── */
fx({
  id: "zq-new-ribbon-pop",
  name: "NEW Ribbon Pop",
  fa: "روبان NEW فنری",
  description:
    "A corner NEW ribbon snaps onto a skeleton card with elastic overshoot, shines, then folds away and repeats.",
  faDescription:
    "روبان NEW با حرکت کشسان از گوشه‌ی کارت بیرون می‌پرد، می‌درخشد، جمع می‌شود و دوباره تکرار می‌کند.",
  tags: ["ribbon", "new", "elastic", "badge"],
  html: `<span class="card"><i class="rbw"><i class="rb">NEW</i></i><i class="ln l1"></i><i class="ln l2"></i></span>`,
  css: `.fx-zq-new-ribbon-pop .card {
  position: relative;
  display: block;
  width: 132px;
  height: 88px;
  border-radius: 12px;
  background: linear-gradient(160deg, #1e293b, #0f172a);
  border: 1px solid #334155;
  overflow: hidden;
}
.fx-zq-new-ribbon-pop .ln {
  position: absolute;
  left: 14px;
  height: 8px;
  border-radius: 99px;
  background: #334155;
}
.fx-zq-new-ribbon-pop .l1 { top: 24px; width: 72px; }
.fx-zq-new-ribbon-pop .l2 { top: 42px; width: 46px; }
.fx-zq-new-ribbon-pop .rbw {
  position: absolute;
  top: 17px;
  right: -39px;
  width: 152px;
  animation: zq-rib-pop 3.4s ease-in-out infinite;
}
.fx-zq-new-ribbon-pop .rb {
  display: block;
  width: 152px;
  padding: 7px 0;
  text-align: center;
  font-style: normal;
  font: 800 11px/1 ui-sans-serif, system-ui, sans-serif;
  letter-spacing: 3px;
  color: #fff;
  background: linear-gradient(90deg, #f59e0b, #ef4444);
  transform: rotate(45deg);
  box-shadow: 0 2px 10px rgba(239, 68, 68, 0.5);
}
@keyframes zq-rib-pop {
  0% { transform: scale(0.2); opacity: 0; }
  10% { transform: scale(1.18); opacity: 1; }
  17% { transform: scale(0.94); }
  24% { transform: scale(1.06); }
  30% { transform: scale(1); }
  86% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.2); opacity: 0; }
}`,
});

/* 9 ── scroll mouse hint ──────────────────────────────────────── */
fx({
  id: "zq-scroll-mouse-hint",
  name: "Scroll Mouse Hint",
  fa: "راهنمای اسکرول موس",
  description:
    "A mouse outline whose wheel dot slides down and fades while chevrons cascade beneath — a scroll-down cue.",
  faDescription:
    "قاب موس با چرخی که به پایین سُر می‌خورد و محو می‌شود و دو شورون زیر آن دنباله‌وار پیاز می‌شوند تا اسکرول را یادآوری کنند.",
  tags: ["mouse", "scroll", "hint", "wheel"],
  html: `<span class="mouse"><i class="wheel"></i></span>`,
  css: `.fx-zq-scroll-mouse-hint .mouse {
  position: relative;
  display: block;
  width: 28px;
  height: 46px;
  border: 2.5px solid #94a3b8;
  border-radius: 15px;
}
.fx-zq-scroll-mouse-hint .wheel {
  position: absolute;
  top: 7px;
  left: 50%;
  width: 4px;
  height: 9px;
  margin-left: -2px;
  border-radius: 3px;
  background: #e879f9;
  box-shadow: 0 0 8px rgba(232, 121, 249, 0.8);
  animation: zq-mouse-wheel 1.8s ease-in-out infinite;
}
.fx-zq-scroll-mouse-hint .mouse::before,
.fx-zq-scroll-mouse-hint .mouse::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -13px;
  width: 7px;
  height: 7px;
  margin-left: -5px;
  border-right: 2px solid #64748b;
  border-bottom: 2px solid #64748b;
  transform: rotate(45deg);
  animation: zq-mouse-ch 1.8s ease-out infinite;
}
.fx-zq-scroll-mouse-hint .mouse::after {
  bottom: -22px;
  animation-delay: 0.2s;
}
@keyframes zq-mouse-wheel {
  0% { transform: translateY(0); opacity: 1; }
  65% { transform: translateY(13px); opacity: 0; }
  66% { transform: translateY(0); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
@keyframes zq-mouse-ch {
  0%, 100% { opacity: 0; }
  35% { opacity: 1; }
}`,
});

/* 10 ── keyboard key ESC ──────────────────────────────────────── */
fx({
  id: "zq-keyboard-key-esc",
  name: "ESC Keycap",
  fa: "کیپ ESC",
  description:
    "A 3D ESC keycap that gets pressed on a loop — it dips, its shadow collapses, and a glint sweeps across the cap.",
  faDescription:
    "کلید سه‌بعدی ESC که در حلقه‌ی زمانی فشرده می‌شود؛ پایین می‌رود، سایه‌اش جمع می‌شود و درخشی از روی آن می‌گذرد.",
  tags: ["keyboard", "keycap", "press", "3d"],
  html: `<span class="key">ESC</span>`,
  css: `.fx-zq-keyboard-key-esc .key {
  position: relative;
  display: block;
  min-width: 66px;
  padding: 13px 15px;
  border-radius: 10px;
  text-align: center;
  font: 700 13px/1 ui-monospace, SFMono-Regular, monospace;
  letter-spacing: 2px;
  color: #cbd5e1;
  background: linear-gradient(180deg, #334155, #1e293b);
  border: 1px solid #475569;
  box-shadow: 0 5px 0 #0f172a, 0 9px 14px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  animation: zq-key-press 2.6s ease-in-out infinite;
}
.fx-zq-keyboard-key-esc .key::after {
  content: "";
  position: absolute;
  top: -30%;
  left: -34px;
  width: 26px;
  height: 160%;
  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.35), transparent);
  transform: translateX(0) skewX(-18deg);
  animation: zq-key-shine 2.6s ease-in-out infinite;
}
@keyframes zq-key-press {
  0%, 58%, 100% {
    transform: translateY(0);
    box-shadow: 0 5px 0 #0f172a, 0 9px 14px rgba(0, 0, 0, 0.45);
    color: #cbd5e1;
  }
  66%, 74% {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #0f172a, 0 3px 6px rgba(0, 0, 0, 0.45);
    color: #f0abfc;
  }
  84% { transform: translateY(0); }
}
@keyframes zq-key-shine {
  0%, 60% { transform: translateX(0) skewX(-18deg); opacity: 0; }
  63% { transform: translateX(16px) skewX(-18deg); opacity: 1; }
  80% { transform: translateX(140px) skewX(-18deg); opacity: 1; }
  83%, 99% { transform: translateX(150px) skewX(-18deg); opacity: 0; }
  100% { transform: translateX(0) skewX(-18deg); opacity: 0; }
}`,
});

/* 11 ── volume glyph bars ─────────────────────────────────────── */
fx({
  id: "zq-volume-glyph-bars",
  name: "Volume Glyph Bars",
  fa: "گلیف صدا",
  description:
    "A clip-path speaker glyph with three equalizer bars dancing at offset phases, like sound turned up.",
  faDescription:
    "آیکون بلندگو ساخته‌شده با clip-path در کنار سه میله‌ی اکولایزر که با فازهای متفاوت می‌رقصند.",
  tags: ["volume", "speaker", "equalizer", "glyph"],
  html: `<span class="stage"><i class="spk"></i><span class="eq"><i class="b"></i><i class="b"></i><i class="b"></i></span></span>`,
  css: `.fx-zq-volume-glyph-bars .stage {
  display: flex;
  align-items: center;
  gap: 9px;
}
.fx-zq-volume-glyph-bars .spk {
  display: block;
  width: 38px;
  height: 34px;
  background: linear-gradient(180deg, #f0abfc, #d946ef);
  clip-path: polygon(0 32%, 26% 32%, 60% 0, 60% 100%, 26% 68%, 0 68%);
}
.fx-zq-volume-glyph-bars .eq {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 34px;
}
.fx-zq-volume-glyph-bars .b {
  width: 6px;
  height: 26px;
  border-radius: 4px;
  background: #fbbf24;
  transform-origin: center;
  animation: zq-vol-b 0.9s ease-in-out infinite;
}
.fx-zq-volume-glyph-bars .b:nth-of-type(1) { height: 18px; animation-delay: 0s; }
.fx-zq-volume-glyph-bars .b:nth-of-type(2) { height: 28px; animation-delay: 0.15s; background: #f59e0b; }
.fx-zq-volume-glyph-bars .b:nth-of-type(3) { height: 22px; animation-delay: 0.3s; }
@keyframes zq-vol-b {
  0%, 100% { transform: scaleY(0.3); }
  50% { transform: scaleY(1); }
}`,
});

/* 12 ── wifi signal glyph ─────────────────────────────────────── */
fx({
  id: "zq-wifi-signal-glyph",
  name: "WiFi Signal Glyph",
  fa: "گلیف وای‌فای",
  description:
    "Three nested WiFi arcs and a dot that light up bottom-to-top in a looping wave, as if reconnecting.",
  faDescription:
    "سه قوس تودرتوی وای‌فای و یک نقطه که در موجی حلقه‌ای از پایین به بالا روشن می‌شوند؛ انگار در حال اتصال است.",
  tags: ["wifi", "signal", "arc", "glyph"],
  html: `<span class="wifi"><i class="a a1"></i><i class="a a2"></i><i class="a a3"></i><i class="pt"></i></span>`,
  css: `.fx-zq-wifi-signal-glyph .wifi {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.fx-zq-wifi-signal-glyph .a {
  display: block;
  border: 3.5px solid #e879f9;
  border-bottom: none;
  border-radius: 64px 64px 0 0 / 32px 32px 0 0;
  opacity: 0.22;
  animation: zq-wifi-l 2.4s ease-in-out infinite;
}
.fx-zq-wifi-signal-glyph .a1 { width: 62px; height: 31px; border-radius: 62px 62px 0 0 / 31px 31px 0 0; animation-delay: 0.54s; }
.fx-zq-wifi-signal-glyph .a2 { width: 42px; height: 21px; border-radius: 42px 42px 0 0 / 21px 21px 0 0; animation-delay: 0.36s; }
.fx-zq-wifi-signal-glyph .a3 { width: 24px; height: 12px; border-radius: 24px 24px 0 0 / 12px 12px 0 0; animation-delay: 0.18s; }
.fx-zq-wifi-signal-glyph .pt {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #e879f9;
  opacity: 0.22;
  animation: zq-wifi-l 2.4s ease-in-out infinite;
}
@keyframes zq-wifi-l {
  0% { opacity: 0.22; }
  12% { opacity: 1; }
  42% { opacity: 1; }
  58%, 100% { opacity: 0.22; }
}`,
});

/* 13 ── battery charge glyph ──────────────────────────────────── */
fx({
  id: "zq-battery-charge-glyph",
  name: "Battery Charge Glyph",
  fa: "گلیف باتری",
  description:
    "A battery that fills up green, flashes its lightning bolt while charging, then empties and loops.",
  faDescription:
    "باتری سبز می‌شود و پر می‌شود، برقِ وسطش هنگام شارژ چشمک می‌زند و بعد خالی و دوباره پر می‌شود.",
  tags: ["battery", "charge", "glyph", "bolt"],
  html: `<span class="stage"><span class="bat"><i class="fill"></i><i class="bolt"></i></span><i class="nub"></i></span>`,
  css: `.fx-zq-battery-charge-glyph .stage {
  display: flex;
  align-items: center;
}
.fx-zq-battery-charge-glyph .bat {
  position: relative;
  display: block;
  width: 76px;
  height: 38px;
  border: 3px solid #94a3b8;
  border-radius: 10px;
}
.fx-zq-battery-charge-glyph .nub {
  width: 7px;
  height: 16px;
  margin-left: -2px;
  border-radius: 0 5px 5px 0;
  background: #94a3b8;
}
.fx-zq-battery-charge-glyph .fill {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  width: 6px;
  border-radius: 4px;
  background: linear-gradient(90deg, #4ade80, #a3e635);
  animation: zq-bat-fill 3.4s ease-in-out infinite;
}
.fx-zq-battery-charge-glyph .bolt {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 28px;
  margin: -14px 0 0 -10px;
  background: #facc15;
  clip-path: polygon(60% 0, 15% 55%, 45% 55%, 36% 100%, 85% 42%, 55% 42%);
  filter: drop-shadow(0 0 6px rgba(250, 204, 21, 0.7));
  animation: zq-bat-bolt 3.4s ease-in-out infinite;
}
@keyframes zq-bat-fill {
  0% { width: 6px; opacity: 1; }
  62% { width: 62px; opacity: 1; }
  76% { width: 62px; opacity: 1; }
  82% { width: 62px; opacity: 0; }
  83% { width: 6px; opacity: 0; }
  92%, 100% { width: 6px; opacity: 1; }
}
@keyframes zq-bat-bolt {
  0%, 56% { opacity: 0.15; }
  60% { opacity: 1; }
  65% { opacity: 0.3; }
  70% { opacity: 1; }
  75% { opacity: 0.3; }
  80% { opacity: 1; }
  88%, 100% { opacity: 0.15; }
}`,
});

/* 14 ── download tray ─────────────────────────────────────────── */
fx({
  id: "zq-download-tray",
  name: "Download Tray",
  fa: "سینی دانلود",
  description:
    "An arrow drops into an open tray while a slim progress bar fills underneath, then the cycle restarts.",
  faDescription:
    "فلش داخل سینی می‌افتد و هم‌زمان نوار پیشرفت باریک زیر آن پر می‌شود؛ بعد چرخه از نو شروع می‌شود.",
  tags: ["download", "arrow", "tray", "progress"],
  html: `<span class="stage"><span class="top"><i class="arr"></i></span><i class="tray"></i><i class="prog"></i></span>`,
  css: `.fx-zq-download-tray .stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.fx-zq-download-tray .top {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 54px;
}
.fx-zq-download-tray .arr {
  display: block;
  width: 26px;
  height: 32px;
  background: #f0abfc;
  clip-path: polygon(35% 0, 65% 0, 65% 55%, 95% 55%, 50% 100%, 5% 55%, 35% 55%);
  filter: drop-shadow(0 0 6px rgba(240, 171, 252, 0.6));
  animation: zq-dl-arr 2.6s ease-in-out infinite;
}
.fx-zq-download-tray .tray {
  display: block;
  width: 84px;
  height: 20px;
  border: 3px solid #64748b;
  border-top: none;
  border-radius: 0 0 12px 12px;
}
.fx-zq-download-tray .prog {
  position: relative;
  display: block;
  width: 96px;
  height: 4px;
  border-radius: 99px;
  background: #1e293b;
  overflow: hidden;
}
.fx-zq-download-tray .prog::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  border-radius: 99px;
  background: linear-gradient(90deg, #d946ef, #fbbf24);
  animation: zq-dl-prog 2.6s ease-in-out infinite;
}
@keyframes zq-dl-arr {
  0% { transform: translateY(-20px); opacity: 0; }
  12% { transform: translateY(-6px); opacity: 1; }
  48% { transform: translateY(12px); opacity: 1; }
  58%, 100% { transform: translateY(16px); opacity: 0; }
}
@keyframes zq-dl-prog {
  0% { width: 0; opacity: 1; }
  60% { width: 100%; opacity: 1; }
  80% { width: 100%; opacity: 1; }
  88%, 100% { width: 100%; opacity: 0; }
}`,
});

/* 15 ── upload cloud ──────────────────────────────────────────── */
fx({
  id: "zq-upload-cloud",
  name: "Upload Cloud",
  fa: "آپلود ابری",
  description:
    "An arrow launches up out of a tray and glides into a drifting, bobbing cloud built from pure circles.",
  faDescription:
    "فلش از سینی بالا پرتاب می‌شود و وارد ابری می‌شود که از چند دایره ساخته شده و آرام بالا و پایین می‌رود.",
  tags: ["upload", "cloud", "arrow", "glyph"],
  html: `<span class="stage"><span class="cl"><i></i><i></i><i></i></span><span class="mid"><i class="arr"></i></span><i class="tray"></i></span>`,
  css: `.fx-zq-upload-cloud .stage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fx-zq-upload-cloud .cl {
  position: relative;
  width: 84px;
  height: 38px;
  animation: zq-up-cld 3.4s ease-in-out infinite alternate;
}
.fx-zq-upload-cloud .cl i {
  position: absolute;
  border-radius: 50%;
  background: #e2e8f0;
}
.fx-zq-upload-cloud .cl i:nth-of-type(1) { width: 26px; height: 26px; left: 0; bottom: 2px; }
.fx-zq-upload-cloud .cl i:nth-of-type(2) { width: 36px; height: 36px; left: 22px; bottom: 0; }
.fx-zq-upload-cloud .cl i:nth-of-type(3) { width: 24px; height: 24px; right: 0; bottom: 4px; }
.fx-zq-upload-cloud .cl::before {
  content: "";
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 0;
  height: 14px;
  border-radius: 8px;
  background: #e2e8f0;
}
.fx-zq-upload-cloud .mid {
  display: flex;
  justify-content: center;
  height: 44px;
  margin-top: 2px;
}
.fx-zq-upload-cloud .arr {
  display: block;
  width: 24px;
  height: 30px;
  background: #fbbf24;
  clip-path: polygon(50% 0, 95% 42%, 68% 42%, 68% 100%, 32% 100%, 32% 42%, 5% 42%);
  filter: drop-shadow(0 0 6px rgba(251, 191, 36, 0.6));
  animation: zq-up-arr 2.8s ease-in-out infinite;
}
.fx-zq-upload-cloud .tray {
  display: block;
  width: 80px;
  height: 18px;
  border: 3px solid #64748b;
  border-top: none;
  border-radius: 0 0 12px 12px;
}
@keyframes zq-up-arr {
  0% { transform: translateY(8px); opacity: 0; }
  18% { transform: translateY(0); opacity: 1; }
  62% { transform: translateY(-26px); opacity: 1; }
  74%, 100% { transform: translateY(-34px); opacity: 0; }
}
@keyframes zq-up-cld {
  from { transform: translateY(-2px); }
  to { transform: translateY(3px); }
}`,
});

/* 16 ── map pin drop ──────────────────────────────────────────── */
fx({
  id: "zq-map-pin-drop",
  name: "Map Pin Drop",
  fa: "پین نقشه",
  description:
    "A classic map pin falls from above, bounces once on landing, and a ripple ring spreads across the ground.",
  faDescription:
    "پین کلاسیک نقشه از بالا می‌افتد، هنگام فرود یک‌بار جهش می‌کند و حلقه‌ای موجی روی زمین پخش می‌شود.",
  tags: ["map", "pin", "location", "bounce"],
  previewBg: "linear-gradient(180deg, #16283f, #0f172a)",
  html: `<span class="stage"><i class="ring"></i><span class="pin"><i class="hole"></i></span></span>`,
  css: `.fx-zq-map-pin-drop .stage {
  position: relative;
  display: block;
  width: 120px;
  height: 108px;
}
.fx-zq-map-pin-drop .pin {
  position: absolute;
  left: 50%;
  top: 22px;
  width: 34px;
  height: 34px;
  margin-left: -17px;
  background: linear-gradient(135deg, #f87171, #dc2626);
  border-radius: 50% 50% 50% 0;
  box-shadow: 0 6px 14px rgba(220, 38, 38, 0.4);
  animation: zq-pin-drop 2.6s ease-in infinite;
}
.fx-zq-map-pin-drop .hole {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #0f172a;
}
.fx-zq-map-pin-drop .ring {
  position: absolute;
  left: 50%;
  top: 86px;
  width: 52px;
  height: 14px;
  margin-left: -26px;
  border: 2px solid rgba(248, 113, 113, 0.8);
  border-radius: 50%;
  opacity: 0;
  animation: zq-pin-ring 2.6s ease-out infinite;
}
@keyframes zq-pin-drop {
  0% { transform: translateY(-64px) rotate(-45deg); opacity: 0; }
  10% { opacity: 1; }
  45% { transform: translateY(0) rotate(-45deg); }
  55% { transform: translateY(-12px) rotate(-45deg); }
  63%, 88% { transform: translateY(0) rotate(-45deg); opacity: 1; }
  100% { transform: translateY(-64px) rotate(-45deg); opacity: 0; }
}
@keyframes zq-pin-ring {
  0%, 42% { transform: scale(0.4); opacity: 0; }
  50% { opacity: 0.9; }
  78%, 100% { transform: scale(1.6); opacity: 0; }
}`,
});

/* 17 ── compass needle ────────────────────────────────────────── */
fx({
  id: "zq-compass-needle",
  name: "Compass Needle",
  fa: "قطب‌نما",
  description:
    "A compass whose red-and-white needle spins wildly, wobbles, and finally settles pointing north — then loses it again.",
  faDescription:
    "قطب‌نمایی که سوزن سرخ‌وسفیدش شدید می‌چرخد، تاب می‌خورد و آخر سر روی شمال آرام می‌گیرد — و دوباره قاطی می‌کند.",
  tags: ["compass", "needle", "navigation", "swing"],
  html: `<span class="cp"><i class="north">N</i><i class="ndl"></i><i class="cap"></i></span>`,
  css: `.fx-zq-compass-needle .cp {
  position: relative;
  display: block;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 40%, #1e293b, #0f172a);
  border: 3px solid #475569;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45), inset 0 0 14px rgba(0, 0, 0, 0.5);
}
.fx-zq-compass-needle .cp::before {
  content: "";
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  border: 1px dashed rgba(148, 163, 184, 0.35);
}
.fx-zq-compass-needle .north {
  position: absolute;
  top: 8px;
  left: 50%;
  margin-left: -5px;
  font: 800 9px/1 ui-sans-serif, system-ui, sans-serif;
  font-style: normal;
  color: #94a3b8;
}
.fx-zq-compass-needle .ndl {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 74px;
  margin: -37px 0 0 -7px;
  background: linear-gradient(180deg, #ef4444 0 50%, #f1f5f9 50% 100%);
  clip-path: polygon(50% 0, 88% 50%, 50% 100%, 12% 50%);
  animation: zq-cmp-swing 4.8s ease-in-out infinite;
}
.fx-zq-compass-needle .cap {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #0f172a;
  border: 2px solid #94a3b8;
}
@keyframes zq-cmp-swing {
  0% { transform: rotate(0deg); }
  15% { transform: rotate(160deg); }
  30% { transform: rotate(-110deg); }
  45% { transform: rotate(55deg); }
  58% { transform: rotate(-20deg); }
  68% { transform: rotate(8deg); }
  76% { transform: rotate(-2deg); }
  82%, 100% { transform: rotate(0deg); }
}`,
});

/* 18 ── clock real hands ──────────────────────────────────────── */
fx({
  id: "zq-clock-real-hands",
  name: "Speed Clock",
  fa: "ساعت عقربه‌دار",
  description:
    "A mini clock face with hour and minute hands spinning at a true 12:1 gear ratio — time-lapse time.",
  faDescription:
    "ساعت مینیاتیوری که عقربه‌هایش با نسبت واقعی ۱۲ به ۱ می‌چرخند؛ انگار زمان با سرعت زیادی می‌گذرد.",
  tags: ["clock", "hands", "time", "glyph"],
  html: `<span class="clock"><i class="tick"></i><i class="hand hr"></i><i class="hand mn"></i><i class="pin"></i></span>`,
  css: `.fx-zq-clock-real-hands .clock {
  position: relative;
  display: block;
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 38%, #221a3f, #140f26);
  border: 3px solid rgba(240, 171, 252, 0.35);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
}
.fx-zq-clock-real-hands .tick {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 3px;
  height: 3px;
  margin: -1.5px 0 0 -1.5px;
  border-radius: 50%;
  background: #64748b;
  box-shadow: 0 -32px 0 #475569, 0 32px 0 #475569, 32px 0 0 #475569, -32px 0 0 #475569;
}
.fx-zq-clock-real-hands .hand {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 4px;
  transform-origin: 50% 0;
}
.fx-zq-clock-real-hands .hr {
  width: 4px;
  height: 23px;
  margin-left: -2px;
  background: #f8fafc;
  animation: zq-clk-hr 72s linear infinite;
}
.fx-zq-clock-real-hands .mn {
  width: 3px;
  height: 32px;
  margin-left: -1.5px;
  background: #f0abfc;
  box-shadow: 0 0 8px rgba(240, 171, 252, 0.7);
  animation: zq-clk-mn 6s linear infinite;
}
.fx-zq-clock-real-hands .pin {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #e879f9;
  border: 2px solid #0f172a;
}
@keyframes zq-clk-mn {
  from { transform: rotate(180deg); }
  to { transform: rotate(540deg); }
}
@keyframes zq-clk-hr {
  from { transform: rotate(250deg); }
  to { transform: rotate(610deg); }
}`,
});

/* 19 ── calendar flip day ─────────────────────────────────────── */
fx({
  id: "zq-calendar-flip-day",
  name: "Calendar Flip Day",
  fa: "تقویم ورق‌خور",
  description:
    "A desk calendar whose paper page flips up and back twice per loop, swapping the day number under cover.",
  faDescription:
    "تقویم رومیزی‌ای که صفحه‌ی کاغذیش دو بار در هر چرخه ورق می‌خورد و عدد روز زیر آن عوض می‌شود.",
  tags: ["calendar", "flip", "date", "paper"],
  html: `<span class="cal"><i class="r1"></i><i class="r2"></i><i class="hdr"></i><span class="page"><b class="d d1">7</b><b class="d d2">8</b><i class="flap"></i></span></span>`,
  css: `.fx-zq-calendar-flip-day .cal {
  position: relative;
  display: block;
  width: 96px;
  height: 112px;
  border-radius: 12px;
  background: #0f172a;
  border: 1px solid #334155;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.45);
}
.fx-zq-calendar-flip-day .hdr {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 24px;
  border-radius: 11px 11px 0 0;
  background: linear-gradient(180deg, #fb7185, #e11d48);
}
.fx-zq-calendar-flip-day .r1,
.fx-zq-calendar-flip-day .r2 {
  position: absolute;
  top: -5px;
  width: 8px;
  height: 16px;
  border-radius: 4px;
  background: #0f172a;
  border: 3px solid #64748b;
}
.fx-zq-calendar-flip-day .r1 { left: 24px; }
.fx-zq-calendar-flip-day .r2 { right: 24px; }
.fx-zq-calendar-flip-day .page {
  position: absolute;
  left: 8px;
  right: 8px;
  top: 28px;
  bottom: 8px;
  border-radius: 4px 4px 8px 8px;
  background: #f1f5f9;
  overflow: hidden;
  perspective: 240px;
}
.fx-zq-calendar-flip-day .page::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(15, 23, 42, 0.1);
}
.fx-zq-calendar-flip-day .d {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font: 800 32px/1 ui-sans-serif, system-ui, sans-serif;
  color: #0f172a;
}
.fx-zq-calendar-flip-day .d1 { animation: zq-cal-d1 6.4s ease-in-out infinite; }
.fx-zq-calendar-flip-day .d2 { opacity: 0; animation: zq-cal-d2 6.4s ease-in-out infinite; }
.fx-zq-calendar-flip-day .flap {
  position: absolute;
  inset: 0;
  border-radius: 4px 4px 8px 8px;
  background: linear-gradient(180deg, #f8fafc, #dbe3ec);
  box-shadow: 0 3px 8px rgba(15, 23, 42, 0.2);
  transform: rotateX(-180deg);
  backface-visibility: hidden;
  animation: zq-cal-flip 6.4s ease-in-out infinite;
}
@keyframes zq-cal-flip {
  0%, 12% { transform: rotateX(-180deg); }
  22%, 40% { transform: rotateX(0deg); }
  50%, 62% { transform: rotateX(-180deg); }
  72%, 88% { transform: rotateX(0deg); }
  98%, 100% { transform: rotateX(-180deg); }
}
@keyframes zq-cal-d1 {
  0%, 16% { opacity: 1; transform: translateY(0); }
  20%, 68% { opacity: 0; transform: translateY(-8px); }
  72%, 100% { opacity: 1; transform: translateY(0); }
}
@keyframes zq-cal-d2 {
  0%, 16% { opacity: 0; transform: translateY(8px); }
  20%, 68% { opacity: 1; transform: translateY(0); }
  72%, 100% { opacity: 0; transform: translateY(8px); }
}`,
});

/* 20 ── weather sun cloud ─────────────────────────────────────── */
fx({
  id: "zq-weather-sun-cloud",
  name: "Sun & Cloud Weather",
  fa: "آفتاب و ابر",
  description:
    "A sun whose conic rays rotate slowly while a puffy cloud drifts across in front of it and bobs.",
  faDescription:
    "خورشیدی که پرتوهای مخروطی‌اش آرام می‌چرخند و ابر پف‌کرده‌ای از جلوی آن رد می‌شود و بالا پایین می‌رود.",
  tags: ["weather", "sun", "cloud", "rays"],
  previewBg: "linear-gradient(180deg, #1b2a4a, #101828)",
  html: `<span class="sky"><span class="sun"></span><span class="cld"><i></i><i></i><i></i></span></span>`,
  css: `.fx-zq-weather-sun-cloud .sky {
  position: relative;
  display: block;
  width: 160px;
  height: 118px;
}
.fx-zq-weather-sun-cloud .sun {
  position: absolute;
  left: 50%;
  top: 24px;
  width: 44px;
  height: 44px;
  margin-left: -22px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fde68a, #f59e0b);
  box-shadow: 0 0 26px rgba(245, 158, 11, 0.55);
}
.fx-zq-weather-sun-cloud .sun::before {
  content: "";
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  background: repeating-conic-gradient(rgba(251, 191, 36, 0.85) 0deg 7deg, transparent 7deg 45deg);
  -webkit-mask: radial-gradient(circle, transparent 56%, #000 58%, #000 80%, transparent 82%);
  mask: radial-gradient(circle, transparent 56%, #000 58%, #000 80%, transparent 82%);
  animation: zq-sun-spin 9s linear infinite;
}
.fx-zq-weather-sun-cloud .cld {
  position: absolute;
  left: 50%;
  bottom: 16px;
  width: 76px;
  height: 30px;
  margin-left: -38px;
  animation: zq-cld-drift 6s ease-in-out infinite alternate;
}
.fx-zq-weather-sun-cloud .cld i {
  position: absolute;
  border-radius: 50%;
  background: #e2e8f0;
}
.fx-zq-weather-sun-cloud .cld i:nth-of-type(1) { width: 26px; height: 26px; left: 0; bottom: 0; }
.fx-zq-weather-sun-cloud .cld i:nth-of-type(2) { width: 34px; height: 34px; left: 20px; bottom: 2px; }
.fx-zq-weather-sun-cloud .cld i:nth-of-type(3) { width: 24px; height: 24px; right: 0; bottom: 0; }
.fx-zq-weather-sun-cloud .cld::before {
  content: "";
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 0;
  height: 14px;
  border-radius: 8px;
  background: #e2e8f0;
}
@keyframes zq-sun-spin {
  to { transform: rotate(360deg); }
}
@keyframes zq-cld-drift {
  from { transform: translate(-30px, 2px); }
  to { transform: translate(30px, -4px); }
}`,
});

/* 21 ── hot air balloon ───────────────────────────────────────── */
fx({
  id: "zq-hot-air-balloon",
  name: "Hot Air Balloon",
  fa: "بالون هوایی",
  description:
    "A striped hot-air balloon drifting up and down while its little basket sways on two strings below.",
  faDescription:
    "بالن راه‌راهی که آرام بالا و پایین می‌رود و سبد کوچکش روی دو بند آویزان تاب می‌خورد.",
  tags: ["balloon", "float", "fly", "basket"],
  previewBg: "linear-gradient(180deg, #1b2a4a, #101828)",
  html: `<span class="bal"><span class="env"></span><i class="str sl"></i><i class="str sr"></i><span class="bsk"></span></span>`,
  css: `.fx-zq-hot-air-balloon .bal {
  position: relative;
  display: block;
  width: 70px;
  height: 114px;
  animation: zq-bal-float 5.5s ease-in-out infinite alternate;
}
.fx-zq-hot-air-balloon .env {
  position: absolute;
  top: 0;
  left: 3px;
  width: 64px;
  height: 76px;
  border-radius: 50% 50% 50% 50% / 56% 56% 44% 44%;
  background: repeating-linear-gradient(90deg, #f43f5e 0 12px, #fecdd3 12px 21px);
  box-shadow: inset -8px -6px 14px rgba(0, 0, 0, 0.25);
}
.fx-zq-hot-air-balloon .env::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -7px;
  width: 14px;
  height: 8px;
  margin-left: -7px;
  background: #881337;
  clip-path: polygon(28% 0, 72% 0, 100% 100%, 0 100%);
}
.fx-zq-hot-air-balloon .str {
  position: absolute;
  top: 84px;
  width: 2px;
  height: 15px;
  background: #94a3b8;
  transform-origin: top center;
}
.fx-zq-hot-air-balloon .sl { left: 25px; animation: zq-bal-str-l 2.8s ease-in-out infinite alternate; }
.fx-zq-hot-air-balloon .sr { right: 25px; animation: zq-bal-str-r 2.8s ease-in-out infinite alternate; }
.fx-zq-hot-air-balloon .bsk {
  position: absolute;
  left: 50%;
  top: 97px;
  width: 22px;
  height: 16px;
  margin-left: -11px;
  border-radius: 3px;
  border: 1px solid #78350f;
  background: repeating-linear-gradient(90deg, #b45309 0 4px, #92400e 4px 8px);
  transform-origin: top center;
  animation: zq-bal-sway 2.8s ease-in-out infinite alternate;
}
@keyframes zq-bal-float {
  from { transform: translateY(-9px) rotate(-2deg); }
  to { transform: translateY(9px) rotate(2deg); }
}
@keyframes zq-bal-sway {
  from { transform: rotate(-6deg); }
  to { transform: rotate(6deg); }
}
@keyframes zq-bal-str-l {
  from { transform: rotate(10deg); }
  to { transform: rotate(20deg); }
}
@keyframes zq-bal-str-r {
  from { transform: rotate(-10deg); }
  to { transform: rotate(-20deg); }
}`,
});

/* 22 ── rocket launch ─────────────────────────────────────────── */
fx({
  id: "zq-rocket-launch",
  name: "Rocket Launch",
  fa: "پرتاب موشک",
  description:
    "A rocket vibrates on the pad, lifts off with a flickering flame while smoke puffs billow, then resets.",
  faDescription:
    "موشک روی سکو می‌لرزد، با شعله‌ی سوسوزن بلند می‌شود، دودها از پایین برمی‌خیزند و بعد چرخه تکرار می‌شود.",
  tags: ["rocket", "launch", "flame", "smoke"],
  previewBg: "linear-gradient(180deg, #141d38, #0f172a)",
  html: `<span class="pad"><span class="rkt"><i class="win"></i><i class="flm"></i></span><i class="sm s1"></i><i class="sm s2"></i><i class="sm s3"></i></span>`,
  css: `.fx-zq-rocket-launch .pad {
  position: relative;
  display: block;
  width: 130px;
  height: 120px;
}
.fx-zq-rocket-launch .rkt {
  position: absolute;
  left: 50%;
  top: 26px;
  width: 30px;
  height: 62px;
  margin-left: -15px;
  border-radius: 50% 50% 44% 44% / 68% 68% 30% 30%;
  background: linear-gradient(180deg, #f8fafc, #cbd5e1);
  animation: zq-rkt-go 3.6s ease-in-out infinite;
}
.fx-zq-rocket-launch .rkt::before,
.fx-zq-rocket-launch .rkt::after {
  content: "";
  position: absolute;
  bottom: -3px;
  width: 13px;
  height: 17px;
  background: #ef4444;
}
.fx-zq-rocket-launch .rkt::before {
  left: -9px;
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
}
.fx-zq-rocket-launch .rkt::after {
  right: -9px;
  clip-path: polygon(0 0, 100% 100%, 0 100%);
}
.fx-zq-rocket-launch .win {
  position: absolute;
  left: 50%;
  top: 17px;
  width: 12px;
  height: 12px;
  margin-left: -6px;
  border-radius: 50%;
  background: #38bdf8;
  border: 3px solid #64748b;
}
.fx-zq-rocket-launch .flm {
  position: absolute;
  left: 50%;
  top: calc(100% - 2px);
  width: 13px;
  height: 19px;
  margin-left: -6.5px;
  background: linear-gradient(180deg, #fde047, #f97316);
  clip-path: polygon(50% 100%, 100% 12%, 62% 26%, 50% 0, 38% 26%, 0 12%);
  transform-origin: top center;
  animation: zq-rkt-flm 0.22s ease-in-out infinite alternate;
}
.fx-zq-rocket-launch .sm {
  position: absolute;
  left: 50%;
  bottom: 4px;
  width: 15px;
  height: 15px;
  margin-left: -7.5px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, #cbd5e1, #64748b);
  opacity: 0;
  animation: zq-rkt-smoke 3.6s ease-out infinite;
}
.fx-zq-rocket-launch .s2 { animation-delay: 0.12s; margin-left: -15px; }
.fx-zq-rocket-launch .s3 { animation-delay: 0.24s; margin-left: 0; }
@keyframes zq-rkt-go {
  0%, 5% { transform: translate(0, 0); }
  7% { transform: translate(1.5px, 0); }
  10% { transform: translate(-1.5px, 0); }
  13% { transform: translate(1.5px, 0); }
  16% { transform: translate(-1px, 0); }
  19% { transform: translate(1px, 0); }
  22%, 32% { transform: translate(0, 0); }
  68%, 84% { transform: translate(0, -112px); opacity: 1; }
  86% { transform: translate(0, -112px); opacity: 0; }
  90% { transform: translate(0, 18px); opacity: 0; }
  100% { transform: translate(0, 0); opacity: 1; }
}
@keyframes zq-rkt-flm {
  from { transform: scale(0.8, 0.7); }
  to { transform: scale(1.1, 1.2); }
}
@keyframes zq-rkt-smoke {
  0%, 28% { transform: translate(0, 6px) scale(0.3); opacity: 0; }
  34% { opacity: 0.75; }
  56% { transform: translate(-5px, -8px) scale(1.15); opacity: 0; }
  100% { transform: translate(0, 6px) scale(0.3); opacity: 0; }
}`,
});

/* 23 ── ufo abduct ────────────────────────────────────────────── */
fx({
  id: "zq-ufo-abduct",
  name: "UFO Abduct",
  fa: "یوفو رباینده",
  description:
    "A hovering saucer with chasing dome lights flicks its beam on and lifts a tiny golden blob into the ship.",
  faDescription:
    "بشقاب‌پرنده‌ای که معلق می‌زند و چراغ‌های گنبدش دنباله‌وار روشن می‌شوند؛ پرتو چشمک می‌زند و گلوله‌ی طلایی کوچکی را بالا می‌کشد.",
  tags: ["ufo", "beam", "abduct", "sci-fi"],
  previewBg: "linear-gradient(180deg, #101c33, #0f172a)",
  html: `<span class="sc"><span class="ufo"><i class="dome"></i><i class="l l1"></i><i class="l l2"></i><i class="l l3"></i><i class="beam"></i></span><i class="pet"></i></span>`,
  css: `.fx-zq-ufo-abduct .sc {
  position: relative;
  display: block;
  width: 140px;
  height: 122px;
}
.fx-zq-ufo-abduct .ufo {
  position: absolute;
  left: 50%;
  top: 8px;
  width: 88px;
  height: 22px;
  margin-left: -44px;
  border-radius: 50%;
  background: linear-gradient(180deg, #94a3b8, #475569);
  animation: zq-ufo-bob 2.2s ease-in-out infinite alternate;
}
.fx-zq-ufo-abduct .dome {
  position: absolute;
  left: 50%;
  top: -13px;
  width: 38px;
  height: 16px;
  margin-left: -19px;
  border-radius: 19px 19px 0 0;
  background: linear-gradient(180deg, rgba(165, 243, 252, 0.9), rgba(103, 232, 249, 0.35));
  border: 1px solid rgba(165, 243, 252, 0.6);
  border-bottom: none;
}
.fx-zq-ufo-abduct .l {
  position: absolute;
  bottom: 3px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #67e8f9;
  animation: zq-ufo-l 1.2s linear infinite;
}
.fx-zq-ufo-abduct .l1 { left: 18px; }
.fx-zq-ufo-abduct .l2 { left: 41px; animation-delay: 0.4s; }
.fx-zq-ufo-abduct .l3 { left: 64px; animation-delay: 0.8s; }
.fx-zq-ufo-abduct .beam {
  position: absolute;
  left: 50%;
  top: 20px;
  width: 62px;
  height: 62px;
  margin-left: -31px;
  background: linear-gradient(180deg, rgba(103, 232, 249, 0.55), rgba(103, 232, 249, 0.04));
  clip-path: polygon(40% 0, 60% 0, 100% 100%, 0 100%);
  animation: zq-ufo-beam 1.1s ease-in-out infinite alternate;
}
.fx-zq-ufo-abduct .pet {
  position: absolute;
  left: 50%;
  bottom: 12px;
  width: 12px;
  height: 11px;
  margin-left: -6px;
  border-radius: 50% 50% 45% 45%;
  background: #fbbf24;
  animation: zq-ufo-pet 3s ease-in-out infinite;
}
.fx-zq-ufo-abduct .pet::before {
  content: "";
  position: absolute;
  left: 3px;
  top: 3px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: #78350f;
  box-shadow: 4px 0 0 #78350f;
}
@keyframes zq-ufo-bob {
  from { transform: translateY(-4px); }
  to { transform: translateY(4px); }
}
@keyframes zq-ufo-l {
  0%, 30%, 100% { opacity: 0.25; box-shadow: none; }
  12% { opacity: 1; box-shadow: 0 0 8px #67e8f9; }
}
@keyframes zq-ufo-beam {
  from { opacity: 0.35; }
  to { opacity: 0.8; }
}
@keyframes zq-ufo-pet {
  0% { transform: translateY(10px) rotate(-8deg) scale(0.6); opacity: 0; }
  15% { transform: translateY(4px) rotate(6deg) scale(0.9); opacity: 1; }
  60% { transform: translateY(-26px) rotate(-6deg) scale(1); opacity: 1; }
  85%, 100% { transform: translateY(-40px) rotate(8deg) scale(0.4); opacity: 0; }
}`,
});

/* 24 ── ghost float ───────────────────────────────────────────── */
fx({
  id: "zq-ghost-float",
  name: "Floating Ghost",
  fa: "روح شناور",
  description:
    "A friendly ghost bobs in the dark, its scalloped tail rippling while its eyes look around and blink.",
  faDescription:
    "روح دوست‌داشتنی‌ای در تاریکی شناور است؛ دنبالچه‌ی موج‌دارش تکان می‌خورد و چشم‌هایش اطراف را نگاه می‌کنند و پلک می‌زنند.",
  tags: ["ghost", "halloween", "float", "cute"],
  previewBg: "radial-gradient(circle at 50% 32%, #232b47, #0f172a)",
  html: `<span class="gh"><i class="e el"></i><i class="e er"></i></span>`,
  css: `.fx-zq-ghost-float .gh {
  position: relative;
  display: block;
  width: 56px;
  height: 58px;
  background: #f8fafc;
  border-radius: 28px 28px 0 0;
  animation: zq-gh-float 2.8s ease-in-out infinite alternate;
}
.fx-zq-ghost-float .gh::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6.5px;
  height: 7px;
  background: radial-gradient(circle at 7px 0, #f8fafc 6.5px, transparent 7px);
  background-size: 14px 7px;
  background-repeat: repeat-x;
}
.fx-zq-ghost-float .gh::before {
  content: "";
  position: absolute;
  left: 9px;
  top: 31px;
  width: 7px;
  height: 4px;
  border-radius: 50%;
  background: #f9a8d4;
  box-shadow: 31px 0 0 #f9a8d4;
}
.fx-zq-ghost-float .e {
  position: absolute;
  top: 20px;
  width: 8px;
  height: 10px;
  border-radius: 50%;
  background: #0f172a;
  animation: zq-gh-look 3.6s ease-in-out infinite;
}
.fx-zq-ghost-float .el { left: 13px; }
.fx-zq-ghost-float .er { right: 13px; }
@keyframes zq-gh-float {
  from { transform: translateY(-5px) rotate(-2.5deg); }
  to { transform: translateY(4px) rotate(2.5deg); }
}
@keyframes zq-gh-look {
  0%, 100% { transform: translateX(-4px) scaleY(1); }
  30% { transform: translateX(3px) scaleY(1); }
  36% { transform: translateX(3px) scaleY(0.12); }
  42% { transform: translateX(3px) scaleY(1); }
  72% { transform: translateX(-4px) scaleY(1); }
  77% { transform: translateX(-4px) scaleY(0.12); }
  82% { transform: translateX(-4px) scaleY(1); }
}`,
});

/* 25 ── campfire flame ────────────────────────────────────────── */
fx({
  id: "zq-campfire-flame",
  name: "Campfire Flame",
  fa: "آتش کمپ",
  description:
    "Three teardrop flame layers jitter at their own rhythm above crossed logs, with a warm ember glow pulsing underneath.",
  faDescription:
    "سه لایه شعله‌ی قطره‌ای با ریتم‌های متفاوت بالای هیزم‌های ضربدری می‌رقصند و زیرشان گرمای سرخ‌درخشان نفس می‌کشد.",
  tags: ["fire", "campfire", "flame", "cozy"],
  previewBg: "radial-gradient(circle at 50% 68%, #2a1608, #0f172a)",
  html: `<span class="fire"><i class="lg la"></i><i class="lg lb"></i><span class="fl f1"></span><span class="fl f2"></span><span class="fl f3"></span></span>`,
  css: `.fx-zq-campfire-flame .fire {
  position: relative;
  display: block;
  width: 92px;
  height: 110px;
}
.fx-zq-campfire-flame .fire::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 76px;
  height: 26px;
  margin-left: -38px;
  background: radial-gradient(ellipse at center, rgba(249, 115, 22, 0.55), transparent 70%);
  animation: zq-fire-glow 1.6s ease-in-out infinite alternate;
}
.fx-zq-campfire-flame .lg {
  position: absolute;
  bottom: 4px;
  width: 58px;
  height: 11px;
  border-radius: 6px;
  background: linear-gradient(180deg, #92400e, #78350f);
}
.fx-zq-campfire-flame .lg::before {
  content: "";
  position: absolute;
  right: 4px;
  top: 3.5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #d97706;
}
.fx-zq-campfire-flame .la { left: 10px; transform: rotate(16deg); }
.fx-zq-campfire-flame .lb { right: 10px; transform: rotate(-16deg); }
.fx-zq-campfire-flame .fl {
  position: absolute;
  border-radius: 0 50% 50% 50%;
  transform-origin: bottom center;
}
.fx-zq-campfire-flame .f1 {
  left: 29px;
  bottom: 20px;
  width: 34px;
  height: 40px;
  background: #f97316;
  animation: zq-fire-f1 0.9s ease-in-out infinite alternate;
}
.fx-zq-campfire-flame .f2 {
  left: 34px;
  bottom: 20px;
  width: 24px;
  height: 29px;
  background: #fbbf24;
  animation: zq-fire-f2 0.62s ease-in-out infinite alternate;
}
.fx-zq-campfire-flame .f3 {
  left: 39px;
  bottom: 21px;
  width: 14px;
  height: 17px;
  background: #fef9c3;
  animation: zq-fire-f3 0.45s ease-in-out infinite alternate;
}
@keyframes zq-fire-f1 {
  from { transform: rotate(45deg) scale(0.95, 0.88); }
  to { transform: rotate(48deg) scale(1.06, 1.14); }
}
@keyframes zq-fire-f2 {
  from { transform: rotate(45deg) scale(1.04, 1.1); }
  to { transform: rotate(42deg) scale(0.92, 0.9); }
}
@keyframes zq-fire-f3 {
  from { transform: rotate(45deg) scale(0.9, 0.95); }
  to { transform: rotate(49deg) scale(1.12, 1.08); }
}
@keyframes zq-fire-glow {
  from { opacity: 0.45; transform: scale(0.92); }
  to { opacity: 0.95; transform: scale(1.08); }
}`,
});

/* 26 ── candle flame ──────────────────────────────────────────── */
fx({
  id: "zq-candle-flame",
  name: "Candle Flame",
  fa: "شمع",
  description:
    "A soft candle whose flame sways gently in a warm halo while wax drips slowly stretch down its sides.",
  faDescription:
    "شمعی نرم که شعله‌اش در هاله‌ای گرم آرام تاب می‌خورد و قطره‌های موم به‌کندی از بدنه‌اش پایین می‌کشند.",
  tags: ["candle", "flame", "wax", "cozy"],
  previewBg: "radial-gradient(circle at 50% 38%, #241a2e, #0f172a)",
  html: `<span class="cd"><span class="wax"><i class="dr da"></i><i class="dr db"></i></span><i class="fl"></i><i class="wk"></i></span>`,
  css: `.fx-zq-candle-flame .cd {
  position: relative;
  display: block;
  width: 60px;
  height: 108px;
}
.fx-zq-candle-flame .cd::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 2px;
  width: 58px;
  height: 34px;
  margin-left: -29px;
  background: radial-gradient(ellipse at center, rgba(251, 191, 36, 0.3), transparent 70%);
  animation: zq-cd-glow 1.9s ease-in-out infinite alternate;
}
.fx-zq-candle-flame .wax {
  position: absolute;
  left: 13px;
  bottom: 0;
  width: 34px;
  height: 62px;
  border-radius: 4px 4px 7px 7px;
  background: linear-gradient(90deg, #fdf2f8, #fbcfe8 55%, #f9a8d4);
}
.fx-zq-candle-flame .wax::before {
  content: "";
  position: absolute;
  left: -3px;
  right: -3px;
  top: -5px;
  height: 10px;
  border-radius: 50%;
  background: #fdf2f8;
}
.fx-zq-candle-flame .dr {
  position: absolute;
  top: 0;
  width: 7px;
  height: 10px;
  border-radius: 0 0 6px 6px;
  background: #fdf2f8;
  transform-origin: top center;
  animation: zq-cd-drip 5s ease-in-out infinite;
}
.fx-zq-candle-flame .da { left: 1px; }
.fx-zq-candle-flame .db { right: 2px; animation-duration: 6s; animation-delay: 2.4s; }
.fx-zq-candle-flame .wk {
  position: absolute;
  left: 50%;
  bottom: 58px;
  width: 2px;
  height: 9px;
  margin-left: -1px;
  border-radius: 2px;
  background: #44403c;
}
.fx-zq-candle-flame .fl {
  position: absolute;
  left: 50%;
  bottom: 64px;
  width: 16px;
  height: 26px;
  margin-left: -8px;
  background: linear-gradient(180deg, #fef9c3, #fbbf24 55%, #f59e0b);
  border-radius: 0 50% 50% 50%;
  transform-origin: bottom center;
  animation: zq-cd-sway 1.9s ease-in-out infinite;
}
.fx-zq-candle-flame .fl::before {
  content: "";
  position: absolute;
  left: 4px;
  right: 4px;
  top: 8px;
  bottom: 3px;
  border-radius: 0 50% 50% 50%;
  background: #fffbeb;
}
@keyframes zq-cd-sway {
  0%, 100% { transform: rotate(45deg) scale(1); }
  28% { transform: rotate(41deg) scale(0.95, 1.04); }
  55% { transform: rotate(48deg) scale(1.05, 0.96); }
  78% { transform: rotate(44deg) scale(1); }
}
@keyframes zq-cd-glow {
  from { opacity: 0.55; transform: scale(0.94); }
  to { opacity: 1; transform: scale(1.06); }
}
@keyframes zq-cd-drip {
  0% { height: 5px; opacity: 0; }
  10% { opacity: 1; }
  68% { height: 17px; opacity: 1; }
  76%, 100% { height: 4px; opacity: 0; }
}`,
});

/* 27 ── lava blob lamp ────────────────────────────────────────── */
fx({
  id: "zq-lava-blob-lamp",
  name: "Lava Blob Lamp",
  fa: "لامپ گدازه",
  description:
    "Glowing wax blobs rise and fall inside a glass lamp, morphing their blobby outlines as they go.",
  faDescription:
    "حباب‌های مومِ درخشان داخل لامپ شیشه‌ای بالا و پایین می‌روند و هنگام حرکت شکل نامنظمشان عوض می‌شود.",
  tags: ["lava", "lamp", "blob", "groovy"],
  previewBg: "linear-gradient(180deg, #1c1022, #0f172a)",
  html: `<span class="lamp"><i class="cap"></i><span class="glass"><i class="bl b1"></i><i class="bl b2"></i><i class="bl b3"></i></span><i class="foot"></i></span>`,
  css: `.fx-zq-lava-blob-lamp .lamp {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.fx-zq-lava-blob-lamp .cap {
  width: 28px;
  height: 9px;
  border-radius: 4px 4px 2px 2px;
  background: linear-gradient(180deg, #fb7185, #9f1239);
}
.fx-zq-lava-blob-lamp .glass {
  position: relative;
  width: 54px;
  height: 104px;
  border-radius: 26px 26px 18px 18px;
  border: 2px solid rgba(244, 63, 94, 0.4);
  background: linear-gradient(180deg, rgba(244, 63, 94, 0.05), rgba(244, 63, 94, 0.16));
  overflow: hidden;
}
.fx-zq-lava-blob-lamp .foot {
  width: 42px;
  height: 11px;
  border-radius: 2px 2px 6px 6px;
  background: linear-gradient(180deg, #9f1239, #4c0519);
  box-shadow: 0 4px 14px rgba(244, 63, 94, 0.45);
}
.fx-zq-lava-blob-lamp .bl {
  position: absolute;
  left: 50%;
  bottom: 4px;
  background: #fb7185;
  box-shadow: 0 0 12px rgba(251, 113, 133, 0.65), inset -3px -3px 6px rgba(190, 18, 60, 0.6);
}
.fx-zq-lava-blob-lamp .b1 {
  width: 20px;
  height: 20px;
  margin-left: -10px;
  bottom: 42px;
  animation: zq-lava-rise 7s ease-in-out infinite alternate, zq-lava-morph 5.5s linear infinite;
}
.fx-zq-lava-blob-lamp .b2 {
  width: 13px;
  height: 13px;
  margin-left: -14px;
  bottom: 16px;
  animation: zq-lava-rise 5.6s ease-in-out 1.3s infinite alternate-reverse, zq-lava-morph 4.6s linear 0.7s infinite;
}
.fx-zq-lava-blob-lamp .b3 {
  width: 10px;
  height: 10px;
  margin-left: 2px;
  bottom: 68px;
  animation: zq-lava-rise 8.2s ease-in-out 2.6s infinite alternate, zq-lava-morph 6.4s linear 1.5s infinite;
}
@keyframes zq-lava-rise {
  from { transform: translateY(30px); }
  to { transform: translateY(-62px); }
}
@keyframes zq-lava-morph {
  0%, 100% { border-radius: 46% 54% 60% 40% / 50% 44% 56% 50%; }
  33% { border-radius: 58% 42% 44% 56% / 44% 58% 42% 56%; }
  66% { border-radius: 40% 60% 56% 44% / 58% 40% 60% 42%; }
}`,
});

/* 28 ── eye blink avatar ──────────────────────────────────────── */
fx({
  id: "zq-eye-blink-avatar",
  name: "Blinking Avatar",
  fa: "آواتار چشمک‌زن",
  description:
    "A round avatar face that blinks on schedule while its pupils glance left and right, blush included.",
  faDescription:
    "چهره‌ی گرد آواتار که سر وقت پلک می‌زند، مردمک چشم‌هایش چپ و راست را نگاه می‌کند و لپ‌هایش هم گل انداخته.",
  tags: ["avatar", "blink", "face", "cute"],
  html: `<span class="av"><span class="eyes"><i class="ey"><i class="pu"></i></i><i class="ey"><i class="pu"></i></i></span><i class="mouth"></i></span>`,
  css: `.fx-zq-eye-blink-avatar .av {
  position: relative;
  display: block;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fde68a, #f59e0b);
  box-shadow: 0 10px 22px rgba(245, 158, 11, 0.3);
}
.fx-zq-eye-blink-avatar .av::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 24px;
  border-radius: 33px 33px 8px 8px;
  background: #7c2d12;
}
.fx-zq-eye-blink-avatar .av::after {
  content: "";
  position: absolute;
  left: 11px;
  top: 36px;
  width: 8px;
  height: 4px;
  border-radius: 50%;
  background: rgba(244, 114, 182, 0.75);
  box-shadow: 36px 0 0 rgba(244, 114, 182, 0.75);
}
.fx-zq-eye-blink-avatar .eyes {
  position: absolute;
  left: 0;
  right: 0;
  top: 26px;
  display: flex;
  justify-content: center;
  gap: 12px;
}
.fx-zq-eye-blink-avatar .ey {
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  box-shadow: inset 0 -1px 3px rgba(15, 23, 42, 0.25);
  animation: zq-av-blink 4s ease-in-out infinite;
}
.fx-zq-eye-blink-avatar .pu {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #1e293b;
  animation: zq-av-look 3.2s ease-in-out infinite;
}
.fx-zq-eye-blink-avatar .mouth {
  position: absolute;
  left: 50%;
  top: 43px;
  width: 16px;
  height: 9px;
  margin-left: -8px;
  border: 2.5px solid transparent;
  border-bottom-color: #9a3412;
  border-radius: 50%;
}
@keyframes zq-av-blink {
  0%, 91%, 96%, 100% { transform: scaleY(1); }
  93.5% { transform: scaleY(0.08); }
}
@keyframes zq-av-look {
  0%, 100% { transform: translateX(-3px); }
  50% { transform: translateX(3px); }
}`,
});

/* 29 ── music note float ──────────────────────────────────────── */
fx({
  id: "zq-music-note-float",
  name: "Music Notes Float",
  fa: "نت‌های موسیقی",
  description:
    "Eighth notes lift off a five-line staff one by one, swaying upward and fading like a melody escaping.",
  faDescription:
    "نت‌های زیرتکی یکی‌یکی از روی خطوط حامل بلند می‌شوند، با تکان به بالا شناور می‌شوند و محو می‌شوند؛ انگار ملودی در حال فرار است.",
  tags: ["music", "notes", "staff", "melody"],
  html: `<span class="staff"><i class="nt n1"><i class="flg"></i></i><i class="nt n2"><i class="flg"></i></i><i class="nt n3"><i class="flg"></i></i></span>`,
  css: `.fx-zq-music-note-float .staff {
  position: relative;
  display: block;
  width: 152px;
  height: 60px;
  background: repeating-linear-gradient(180deg, rgba(148, 163, 184, 0.32) 0 2px, transparent 2px 14.5px);
}
.fx-zq-music-note-float .nt {
  position: absolute;
  bottom: 16px;
  width: 12px;
  height: 22px;
  color: #f0abfc;
  animation: zq-mus-float 2.6s ease-in infinite;
}
.fx-zq-music-note-float .n1 { left: 26px; }
.fx-zq-music-note-float .n2 { left: 72px; color: #fbbf24; animation-delay: 0.9s; animation-duration: 3s; }
.fx-zq-music-note-float .n3 { left: 114px; color: #67e8f9; animation-delay: 1.7s; animation-duration: 2.8s; }
.fx-zq-music-note-float .nt::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 12px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  transform: rotate(-18deg);
}
.fx-zq-music-note-float .nt::after {
  content: "";
  position: absolute;
  left: 9px;
  bottom: 3px;
  width: 2px;
  height: 19px;
  border-radius: 2px;
  background: currentColor;
}
.fx-zq-music-note-float .flg {
  position: absolute;
  left: 9px;
  bottom: 20px;
  width: 8px;
  height: 11px;
  border-top: 3px solid currentColor;
  border-right: 3px solid currentColor;
  border-top-right-radius: 9px;
}
@keyframes zq-mus-float {
  0% { transform: translateY(8px) rotate(-8deg); opacity: 0; }
  16% { opacity: 1; }
  70% { opacity: 1; }
  100% { transform: translateY(-46px) rotate(9deg); opacity: 0; }
}`,
});

/* 30 ── typewriter quote ──────────────────────────────────────── */
fx({
  id: "zq-typewriter-progress-quote",
  name: "Typewriter Quote",
  fa: "ماشین‌نویس نقل‌قول",
  description:
    "A Persian quote types itself RTL with a riding caret, pauses, deletes, and retypes forever — with a progress line beneath.",
  faDescription:
    "نقل‌قول فارسی راست‌به‌چپ حرف‌به‌حرف با کرسر متحرک تایپ می‌شود، مکث می‌کند، پاک می‌شود و همیشه تکرار می‌شود؛ با نوار پیشرفت زیرش.",
  tags: ["typewriter", "quote", "rtl", "caret"],
  html: `<span class="stage"><span class="tw"><span class="txt">کد بنویس، خلاق باش</span><i class="car"></i></span><i class="prog"></i></span>`,
  css: `.fx-zq-typewriter-progress-quote .stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.fx-zq-typewriter-progress-quote .tw {
  position: relative;
  display: inline-block;
  direction: rtl;
  font: 600 17px/1.7 ui-sans-serif, system-ui, sans-serif;
  color: #f8fafc;
}
.fx-zq-typewriter-progress-quote .txt {
  display: inline-block;
  white-space: nowrap;
  clip-path: inset(0 0 0 100%);
  animation: zq-tw-clip 6.5s infinite;
}
.fx-zq-typewriter-progress-quote .car {
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 100%;
  width: 2px;
  border-radius: 2px;
  background: #e879f9;
  box-shadow: 0 0 8px rgba(232, 121, 249, 0.9);
  transform: translateX(-100%);
  animation: zq-tw-car 6.5s infinite, zq-tw-blink 0.8s steps(1, end) infinite;
}
.fx-zq-typewriter-progress-quote .prog {
  position: relative;
  display: block;
  width: 172px;
  height: 3px;
  border-radius: 99px;
  background: rgba(232, 121, 249, 0.18);
  overflow: hidden;
}
.fx-zq-typewriter-progress-quote .prog::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 99px;
  background: linear-gradient(270deg, #d946ef, #fbbf24);
  transform: scaleX(0);
  transform-origin: right center;
  animation: zq-tw-prog 6.5s linear infinite;
}
@keyframes zq-tw-clip {
  0% { clip-path: inset(0 0 0 100%); animation-timing-function: steps(20, end); }
  40% { clip-path: inset(0 0 0 0); }
  55% { clip-path: inset(0 0 0 0); animation-timing-function: steps(20, end); }
  95% { clip-path: inset(0 0 0 100%); }
  100% { clip-path: inset(0 0 0 100%); }
}
@keyframes zq-tw-car {
  0% { left: 100%; animation-timing-function: steps(20, end); }
  40% { left: 0%; }
  55% { left: 0%; animation-timing-function: steps(20, end); }
  95% { left: 100%; }
  100% { left: 100%; }
}
@keyframes zq-tw-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes zq-tw-prog {
  0% { transform: scaleX(0); }
  40%, 55% { transform: scaleX(1); }
  95%, 100% { transform: scaleX(0); }
}`,
});
