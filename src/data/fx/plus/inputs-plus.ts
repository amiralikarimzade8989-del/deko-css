import type { CssEffect } from "../types";

/**
 * Inputs+ batch (Task 8-h) — 30 pure-CSS input/toggle effects, prefix fq-.
 * Checkbox-hack + focus/:placeholder-shown based, zero JavaScript.
 */
export const inputEffectsPlus: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  inputEffectsPlus.push({ category: "inputs", interaction: "click", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Springy iOS toggle (directional spring keyframes)      */
/* ---------------------------------------------------------- */
fx({
  id: "fq-toggle-ios-spring",
  name: "Springy iOS Toggle",
  fa: "سوییچ فنری iOS",
  description:
    "An iOS-grade switch: the knob stretches mid-flight and overshoots into place with directional spring keyframes.",
  faDescription:
    "سوییچی با حس iOS: دستگیره هنگام حرکت کش می‌آید و با فنر اغراق‌آمیز سر جایش می‌نشیند.",
  tags: ["toggle", "switch", "spring", "checkbox"],
  html: `<input type="checkbox" id="fq-tis" class="fq-tis-in"><label for="fq-tis" class="fq-tis-track"><span class="fq-tis-knob"></span></label>`,
  css: `.fx-fq-toggle-ios-spring .fq-tis-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-toggle-ios-spring .fq-tis-track {
  position: relative;
  display: block;
  width: 68px;
  height: 38px;
  border-radius: 999px;
  background: linear-gradient(180deg, #3a4150, #2b313d);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.45), 0 1px 0 rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: background 0.35s ease, box-shadow 0.35s ease;
}
.fx-fq-toggle-ios-spring .fq-tis-knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(180deg, #ffffff, #e4e8ef);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4), inset 0 -2px 3px rgba(0, 0, 0, 0.08);
}
.fx-fq-toggle-ios-spring .fq-tis-in:checked + .fq-tis-track {
  background: linear-gradient(180deg, #34d399, #10b981);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25), 0 0 18px rgba(52, 211, 153, 0.45);
}
.fx-fq-toggle-ios-spring .fq-tis-in:checked + .fq-tis-track .fq-tis-knob {
  animation: fq-tis-on 0.5s cubic-bezier(0.2, 0.85, 0.25, 1.15) forwards;
}
.fx-fq-toggle-ios-spring .fq-tis-in:not(:checked) + .fq-tis-track .fq-tis-knob {
  animation: fq-tis-off 0.5s cubic-bezier(0.2, 0.85, 0.25, 1.15) forwards;
}
@keyframes fq-tis-on {
  0% { transform: translateX(0) scaleX(1); }
  45% { transform: translateX(19px) scaleX(1.24); }
  100% { transform: translateX(30px) scaleX(1); }
}
@keyframes fq-tis-off {
  0% { transform: translateX(30px) scaleX(1); }
  45% { transform: translateX(11px) scaleX(1.24); }
  100% { transform: translateX(0) scaleX(1); }
}`,
});

/* ---------------------------------------------------------- */
/* 2 — Neon toggle (glow flicker + spark ring)                */
/* ---------------------------------------------------------- */
fx({
  id: "fq-toggle-neon",
  name: "Neon Toggle",
  fa: "سوییچ نئونی",
  description:
    "A dark switch that ignites a flickering neon glow when turned on, with a spark ring bursting from the knob.",
  faDescription:
    "سوییچ تیره‌ای که هنگام روشن شدن با سوسوی نئونی می‌درخشد و حلقه جرقه‌ای از دستگیره می‌پرد.",
  tags: ["toggle", "neon", "glow", "switch"],
  previewBg: "#0b0f14",
  html: `<input type="checkbox" id="fq-tne" class="fq-tne-in"><label for="fq-tne" class="fq-tne-track"><span class="fq-tne-knob"></span><span class="fq-tne-spark"></span></label>`,
  css: `.fx-fq-toggle-neon .fq-tne-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-toggle-neon .fq-tne-track {
  position: relative;
  display: block;
  width: 70px;
  height: 36px;
  border-radius: 999px;
  background: #101318;
  border: 1px solid #2a2f3a;
  cursor: pointer;
  transition: border-color 0.4s ease;
}
.fx-fq-toggle-neon .fq-tne-knob {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #3d4450;
  transition: transform 0.45s cubic-bezier(0.3, 1.4, 0.4, 1), background 0.35s ease, box-shadow 0.35s ease;
}
.fx-fq-toggle-neon .fq-tne-spark {
  position: absolute;
  top: 50%;
  left: 17px;
  width: 26px;
  height: 26px;
  margin: -13px 0 0 -13px;
  border-radius: 50%;
  border: 2px solid #22d3ee;
  opacity: 0;
  transform: scale(0.4);
  pointer-events: none;
}
.fx-fq-toggle-neon .fq-tne-in:checked + .fq-tne-track {
  border-color: #22d3ee;
  animation: fq-tne-flicker 2.6s linear 0.5s infinite;
}
.fx-fq-toggle-neon .fq-tne-in:checked + .fq-tne-track .fq-tne-knob {
  transform: translateX(34px);
  background: #22d3ee;
  box-shadow: 0 0 12px #22d3ee, 0 0 28px rgba(34, 211, 238, 0.6);
}
.fx-fq-toggle-neon .fq-tne-in:checked + .fq-tne-track .fq-tne-spark {
  animation: fq-tne-ring 0.6s ease-out;
}
@keyframes fq-tne-flicker {
  0%, 100% { box-shadow: 0 0 14px rgba(34, 211, 238, 0.55), inset 0 0 12px rgba(34, 211, 238, 0.25); }
  5% { box-shadow: 0 0 4px rgba(34, 211, 238, 0.2), inset 0 0 4px rgba(34, 211, 238, 0.1); }
  9% { box-shadow: 0 0 14px rgba(34, 211, 238, 0.55), inset 0 0 12px rgba(34, 211, 238, 0.25); }
  52% { box-shadow: 0 0 14px rgba(34, 211, 238, 0.55), inset 0 0 12px rgba(34, 211, 238, 0.25); }
  55% { box-shadow: 0 0 6px rgba(34, 211, 238, 0.3), inset 0 0 6px rgba(34, 211, 238, 0.12); }
  58% { box-shadow: 0 0 14px rgba(34, 211, 238, 0.55), inset 0 0 12px rgba(34, 211, 238, 0.25); }
}
@keyframes fq-tne-ring {
  0% { opacity: 0.9; transform: scale(0.4); }
  100% { opacity: 0; transform: scale(2); }
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Sun / Moon toggle (crescent orb + star ladder)         */
/* ---------------------------------------------------------- */
fx({
  id: "fq-toggle-day-night",
  name: "Sun / Moon Toggle",
  fa: "سوییچ خورشید و ماه",
  description:
    "A sky-in-a-switch: the sun travels over and turns into a crescent moon while stars pop in with a staggered ladder.",
  faDescription:
    "آسمان داخل سوییچ: خورشید حرکت می‌کند و به هلال ماه تبدیل می‌شود، در حالی که ستاره‌ها پلکانی ظاهر می‌شوند.",
  tags: ["toggle", "day-night", "scene", "checkbox"],
  html: `<input type="checkbox" id="fq-tdn" class="fq-tdn-in"><label for="fq-tdn" class="fq-tdn-sky"><span class="fq-tdn-orb"></span><span class="fq-tdn-cloud"></span><span class="fq-tdn-star fq-tdn-s1"></span><span class="fq-tdn-star fq-tdn-s2"></span><span class="fq-tdn-star fq-tdn-s3"></span></label>`,
  css: `.fx-fq-toggle-day-night .fq-tdn-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-toggle-day-night .fq-tdn-sky {
  position: relative;
  display: block;
  width: 88px;
  height: 42px;
  border-radius: 999px;
  background: linear-gradient(180deg, #7dd3fc, #fbbf24);
  overflow: hidden;
  cursor: pointer;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.25);
  transition: background 0.6s ease;
}
.fx-fq-toggle-day-night .fq-tdn-orb {
  position: absolute;
  top: 7px;
  left: 8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff7cc;
  box-shadow: 0 0 14px rgba(253, 230, 138, 0.9);
  transition: transform 0.6s cubic-bezier(0.45, 0.15, 0.25, 1), background 0.6s ease, box-shadow 0.6s ease;
}
.fx-fq-toggle-day-night .fq-tdn-cloud {
  position: absolute;
  top: 11px;
  right: 10px;
  width: 22px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fx-fq-toggle-day-night .fq-tdn-star {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fde68a;
  opacity: 0;
  transform: scale(0) rotate(0deg);
  transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.3, 1.6, 0.5, 1);
}
.fx-fq-toggle-day-night .fq-tdn-s1 { top: 9px; right: 15px; transition-delay: 0.25s; }
.fx-fq-toggle-day-night .fq-tdn-s2 { top: 20px; right: 32px; width: 3px; height: 3px; transition-delay: 0.4s; }
.fx-fq-toggle-day-night .fq-tdn-s3 { top: 29px; right: 13px; transition-delay: 0.55s; }
.fx-fq-toggle-day-night .fq-tdn-in:checked + .fq-tdn-sky {
  background: linear-gradient(180deg, #1e1b4b, #312e81 65%, #4c1d95);
}
.fx-fq-toggle-day-night .fq-tdn-in:checked + .fq-tdn-sky .fq-tdn-orb {
  transform: translateX(43px) rotate(70deg);
  background: #e8eaf6;
  box-shadow: inset -7px -4px 0 2px #c7d2fe, 0 0 12px rgba(199, 210, 254, 0.7);
}
.fx-fq-toggle-day-night .fq-tdn-in:checked + .fq-tdn-sky .fq-tdn-cloud {
  opacity: 0;
  transform: translateX(14px) scale(0.6);
}
.fx-fq-toggle-day-night .fq-tdn-in:checked + .fq-tdn-sky .fq-tdn-star {
  opacity: 1;
  transform: scale(1) rotate(90deg);
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Cat eyes toggle (blinking eyes + popping ears)         */
/* ---------------------------------------------------------- */
fx({
  id: "fq-toggle-cat-eyes",
  name: "Cat Eyes Toggle",
  fa: "سوییچ چشم گربه",
  description:
    "The switch knob is a cat face: turn it on and the ears pop up while the eyes open and periodically blink.",
  faDescription:
    "دستگیره سوییچ یک صورت گربه است: با روشن کردن، گوش‌ها بالا می‌پرند، چشم‌ها باز می‌شوند و پلک می‌زنند.",
  tags: ["toggle", "cat", "cute", "blink"],
  html: `<input type="checkbox" id="fq-tce" class="fq-tce-in"><label for="fq-tce" class="fq-tce-face"><span class="fq-tce-ear fq-tce-l"></span><span class="fq-tce-ear fq-tce-r"></span><span class="fq-tce-head"><span class="fq-tce-eye fq-tce-el"></span><span class="fq-tce-eye fq-tce-er"></span><span class="fq-tce-nose"></span></span></label>`,
  css: `.fx-fq-toggle-cat-eyes .fq-tce-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-toggle-cat-eyes .fq-tce-face {
  position: relative;
  display: block;
  width: 78px;
  height: 40px;
  border-radius: 999px;
  background: #2a2438;
  cursor: pointer;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.4);
  transition: background 0.4s ease;
}
.fx-fq-toggle-cat-eyes .fq-tce-ear {
  position: absolute;
  top: -8px;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 12px solid #f0abfc;
  opacity: 0;
  transform: translateY(5px) scale(0.6);
  transition: opacity 0.3s ease 0.15s, transform 0.3s cubic-bezier(0.3, 1.6, 0.5, 1) 0.15s;
}
.fx-fq-toggle-cat-eyes .fq-tce-l { left: 17px; }
.fx-fq-toggle-cat-eyes .fq-tce-r { right: 17px; }
.fx-fq-toggle-cat-eyes .fq-tce-head {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f0abfc;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.35);
  transition: transform 0.45s cubic-bezier(0.3, 1.3, 0.4, 1);
}
.fx-fq-toggle-cat-eyes .fq-tce-eye {
  position: absolute;
  top: 11px;
  width: 6px;
  height: 7px;
  border-radius: 3px;
  background: #3b0764;
  transition: height 0.3s ease 0.2s, border-radius 0.3s ease 0.2s;
}
.fx-fq-toggle-cat-eyes .fq-tce-el { left: 7px; }
.fx-fq-toggle-cat-eyes .fq-tce-er { right: 7px; }
.fx-fq-toggle-cat-eyes .fq-tce-nose {
  position: absolute;
  bottom: 6px;
  left: 50%;
  width: 6px;
  height: 4px;
  margin-left: -3px;
  background: #9d174d;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
}
.fx-fq-toggle-cat-eyes .fq-tce-in:checked + .fq-tce-face { background: #4c1d95; }
.fx-fq-toggle-cat-eyes .fq-tce-in:checked + .fq-tce-face .fq-tce-head { transform: translateX(38px); }
.fx-fq-toggle-cat-eyes .fq-tce-in:checked + .fq-tce-face .fq-tce-ear {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.fx-fq-toggle-cat-eyes .fq-tce-in:checked + .fq-tce-face .fq-tce-eye {
  height: 8px;
  border-radius: 50%;
  animation: fq-tce-blink 3.2s ease-in-out 0.4s infinite;
}
@keyframes fq-tce-blink {
  0%, 86%, 100% { transform: scaleY(1); }
  90% { transform: scaleY(0.08); }
  95% { transform: scaleY(1); }
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Drawn checkmark (staggered stroke reveal)              */
/* ---------------------------------------------------------- */
fx({
  id: "fq-check-draw-checkmark",
  name: "Drawn Checkmark",
  fa: "تیک کشیده‌شونده",
  description:
    "A checkbox whose gradient fill sweeps down while the checkmark stroke literally draws itself in two staggered segments.",
  faDescription:
    "چک‌باکسی که پرکردن گرادیانی آن از بالا می‌ریزد و تیک آن در دو بخش پلکانی، خط به خط کشیده می‌شود.",
  tags: ["checkbox", "checkmark", "draw", "stroke"],
  html: `<input type="checkbox" id="fq-cdc" class="fq-cdc-in"><label for="fq-cdc" class="fq-cdc-box"><span class="fq-cdc-tick"></span></label>`,
  css: `.fx-fq-check-draw-checkmark .fq-cdc-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-check-draw-checkmark .fq-cdc-box {
  position: relative;
  display: block;
  width: 46px;
  height: 46px;
  border-radius: 13px;
  border: 2.5px solid #64748b;
  cursor: pointer;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.fx-fq-check-draw-checkmark .fq-cdc-box::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, #22d3ee, #6366f1);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.4s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-fq-check-draw-checkmark .fq-cdc-tick {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 0;
  height: 0;
  border-right: 4px solid #ffffff;
  border-bottom: 4px solid #ffffff;
  border-radius: 2px;
  opacity: 0;
  transform: rotate(-45deg);
  transition: opacity 0.1s ease, width 0.16s ease-in 0.16s, height 0.16s ease-out 0.34s;
}
.fx-fq-check-draw-checkmark .fq-cdc-in:checked + .fq-cdc-box {
  border-color: #22d3ee;
  transform: scale(0.94);
}
.fx-fq-check-draw-checkmark .fq-cdc-in:checked + .fq-cdc-box::before { transform: scaleY(1); }
.fx-fq-check-draw-checkmark .fq-cdc-in:checked + .fq-cdc-box .fq-cdc-tick {
  width: 21px;
  height: 12px;
  opacity: 1;
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Confetti burst checkbox (CSS-var particle vectors)     */
/* ---------------------------------------------------------- */
fx({
  id: "fq-check-burst",
  name: "Confetti Burst Checkbox",
  fa: "چک‌باکس انفجار کانفتی",
  description:
    "Checking the box pops a fill with a checkmark while eight confetti particles fly out on per-particle vectors stored in CSS variables.",
  faDescription:
    "با تیک زدن، جعبه پر می‌شود و تیک ظاهر می‌گردد در حالی که هشت ذره کانفتی با بردارهای اختصاصی به بیرون پرتاب می‌شوند.",
  tags: ["checkbox", "confetti", "burst", "particles"],
  html: `<input type="checkbox" id="fq-cbu" class="fq-cbu-in"><label for="fq-cbu" class="fq-cbu-box"><span class="fq-cbu-core"></span><span class="fq-cbu-p fq-cbu-p1"></span><span class="fq-cbu-p fq-cbu-p2"></span><span class="fq-cbu-p fq-cbu-p3"></span><span class="fq-cbu-p fq-cbu-p4"></span><span class="fq-cbu-p fq-cbu-p5"></span><span class="fq-cbu-p fq-cbu-p6"></span><span class="fq-cbu-p fq-cbu-p7"></span><span class="fq-cbu-p fq-cbu-p8"></span></label>`,
  css: `.fx-fq-check-burst .fq-cbu-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-check-burst .fq-cbu-box {
  position: relative;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  border: 2.5px solid #f472b6;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.25s cubic-bezier(0.3, 1.6, 0.5, 1);
}
.fx-fq-check-burst .fq-cbu-core {
  position: absolute;
  inset: 6px;
  border-radius: 10px;
  background: linear-gradient(135deg, #f472b6, #fb7185);
  transform: scale(0);
  transition: transform 0.3s cubic-bezier(0.3, 1.7, 0.5, 1);
}
.fx-fq-check-burst .fq-cbu-core::before {
  content: "";
  position: absolute;
  top: 8px;
  left: 11px;
  width: 15px;
  height: 8px;
  border-right: 3px solid #ffffff;
  border-bottom: 3px solid #ffffff;
  transform: rotate(-45deg);
  opacity: 0;
  transition: opacity 0.15s ease 0.2s;
}
.fx-fq-check-burst .fq-cbu-p {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 7px;
  height: 7px;
  margin: -3.5px;
  border-radius: 2px;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-check-burst .fq-cbu-p1 { background: #fbbf24; --tx: -36px; --ty: -28px; --r: 120deg; }
.fx-fq-check-burst .fq-cbu-p2 { background: #f87171; --tx: 2px; --ty: -40px; --r: -90deg; }
.fx-fq-check-burst .fq-cbu-p3 { background: #34d399; --tx: 34px; --ty: -24px; --r: 150deg; }
.fx-fq-check-burst .fq-cbu-p4 { background: #60a5fa; --tx: -40px; --ty: 6px; --r: -140deg; }
.fx-fq-check-burst .fq-cbu-p5 { background: #e879f9; --tx: 40px; --ty: 8px; --r: 100deg; }
.fx-fq-check-burst .fq-cbu-p6 { background: #fb923c; --tx: -26px; --ty: 34px; --r: 80deg; }
.fx-fq-check-burst .fq-cbu-p7 { background: #4ade80; --tx: 4px; --ty: 40px; --r: -110deg; }
.fx-fq-check-burst .fq-cbu-p8 { background: #facc15; --tx: 28px; --ty: 32px; --r: 60deg; }
.fx-fq-check-burst .fq-cbu-in:checked + .fq-cbu-box {
  background: rgba(244, 114, 182, 0.12);
  transform: scale(1.08);
}
.fx-fq-check-burst .fq-cbu-in:checked + .fq-cbu-box .fq-cbu-core { transform: scale(1); }
.fx-fq-check-burst .fq-cbu-in:checked + .fq-cbu-box .fq-cbu-core::before { opacity: 1; }
.fx-fq-check-burst .fq-cbu-in:checked + .fq-cbu-box .fq-cbu-p1,
.fx-fq-check-burst .fq-cbu-in:checked + .fq-cbu-box .fq-cbu-p2,
.fx-fq-check-burst .fq-cbu-in:checked + .fq-cbu-box .fq-cbu-p3,
.fx-fq-check-burst .fq-cbu-in:checked + .fq-cbu-box .fq-cbu-p4,
.fx-fq-check-burst .fq-cbu-in:checked + .fq-cbu-box .fq-cbu-p5,
.fx-fq-check-burst .fq-cbu-in:checked + .fq-cbu-box .fq-cbu-p6,
.fx-fq-check-burst .fq-cbu-in:checked + .fq-cbu-box .fq-cbu-p7,
.fx-fq-check-burst .fq-cbu-in:checked + .fq-cbu-box .fq-cbu-p8 {
  animation: fq-cbu-fly 0.75s ease-out forwards;
}
@keyframes fq-cbu-fly {
  0% { opacity: 1; transform: translate(0, 0) rotate(0deg) scale(1); }
  70% { opacity: 1; }
  100% { opacity: 0; transform: translate(var(--tx), var(--ty)) rotate(var(--r)) scale(0.4); }
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Bounce fill checkbox (squash + bottom-up fill)         */
/* ---------------------------------------------------------- */
fx({
  id: "fq-check-bounce-fill",
  name: "Bounce Fill Checkbox",
  fa: "چک‌باکس پرش و پرشدن",
  description:
    "The box squashes like rubber while the fill rises from the bottom with spring overshoot; the tick pops in last.",
  faDescription:
    "جعبه مثل لاستیک له می‌شود، پرکردن از پایین با حرکت فنری بالا می‌آید و تیک در آخر ظاهر می‌شود.",
  tags: ["checkbox", "bounce", "squash", "fill"],
  html: `<input type="checkbox" id="fq-cbf" class="fq-cbf-in"><label for="fq-cbf" class="fq-cbf-box"><span class="fq-cbf-fill"></span><span class="fq-cbf-tick"></span></label>`,
  css: `.fx-fq-check-bounce-fill .fq-cbf-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-check-bounce-fill .fq-cbf-box {
  position: relative;
  display: block;
  width: 46px;
  height: 46px;
  border-radius: 13px;
  border: 2.5px solid #64748b;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.3s ease;
}
.fx-fq-check-bounce-fill .fq-cbf-fill {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: linear-gradient(180deg, #34d399, #059669);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.5s cubic-bezier(0.25, 1.6, 0.4, 1);
}
.fx-fq-check-bounce-fill .fq-cbf-tick {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 20px;
  height: 11px;
  border-right: 4px solid #ffffff;
  border-bottom: 4px solid #ffffff;
  border-radius: 2px;
  transform: rotate(-45deg) scale(0);
  transition: transform 0.35s cubic-bezier(0.3, 1.8, 0.5, 1) 0.25s;
}
.fx-fq-check-bounce-fill .fq-cbf-in:checked + .fq-cbf-box {
  border-color: #34d399;
  animation: fq-cbf-squash 0.5s cubic-bezier(0.3, 1.4, 0.4, 1);
}
.fx-fq-check-bounce-fill .fq-cbf-in:checked + .fq-cbf-box .fq-cbf-fill { transform: scaleY(1); }
.fx-fq-check-bounce-fill .fq-cbf-in:checked + .fq-cbf-box .fq-cbf-tick { transform: rotate(-45deg) scale(1); }
@keyframes fq-cbf-squash {
  0% { transform: scale(1, 1); }
  30% { transform: scale(1.14, 0.84); }
  60% { transform: scale(0.93, 1.09); }
  100% { transform: scale(1, 1); }
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Checkbox ↔ minus morph (single bar reshapes)           */
/* ---------------------------------------------------------- */
fx({
  id: "fq-check-morph-minus",
  name: "Check ↔ Minus Morph",
  fa: "تبدیل تیک و منهای",
  description:
    "One single bar morphs between states: resting as a horizontal minus, then folding into the long stroke of a check while a second stroke grows from its end.",
  faDescription:
    "یک میله‌ی واحد بین دو حالت تغییر شکل می‌دهد: به صورت منهای افقی می‌آید و سپس به ضلغ بلند تیک تبدیل می‌شود و ضلغ دوم از سر آن می‌روید.",
  tags: ["checkbox", "morph", "minus", "indeterminate"],
  html: `<input type="checkbox" id="fq-cmm" class="fq-cmm-in"><label for="fq-cmm" class="fq-cmm-box"><span class="fq-cmm-bar"></span></label>`,
  css: `.fx-fq-check-morph-minus .fq-cmm-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-check-morph-minus .fq-cmm-box {
  position: relative;
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  border: 2.5px solid #64748b;
  cursor: pointer;
  transition: border-color 0.35s ease, background 0.35s ease;
}
.fx-fq-check-morph-minus .fq-cmm-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 4.5px;
  margin: -2.25px 0 0 -12px;
  border-radius: 3px;
  background: #94a3b8;
  transition: transform 0.45s cubic-bezier(0.3, 1.3, 0.4, 1), width 0.45s cubic-bezier(0.3, 1.3, 0.4, 1), background 0.35s ease;
}
.fx-fq-check-morph-minus .fq-cmm-bar::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: #ffffff;
  transform: rotate(90deg) scaleX(0);
  transform-origin: 0 50%;
  transition: transform 0.35s cubic-bezier(0.3, 1.4, 0.4, 1) 0.12s;
}
.fx-fq-check-morph-minus .fq-cmm-in:checked + .fq-cmm-box {
  border-color: #34d399;
  background: rgba(52, 211, 153, 0.1);
}
.fx-fq-check-morph-minus .fq-cmm-in:checked + .fq-cmm-box .fq-cmm-bar {
  width: 13px;
  background: #ffffff;
  transform: translate(3px, -2px) rotate(-45deg);
}
.fx-fq-check-morph-minus .fq-cmm-in:checked + .fq-cmm-box .fq-cmm-bar::before {
  transform: rotate(90deg) scaleX(1);
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Radio with sonar ring pulse                            */
/* ---------------------------------------------------------- */
fx({
  id: "fq-radio-ring-pulse",
  name: "Sonar Radio",
  fa: "رادیو با پالس سونار",
  description:
    "A radio button whose dot springs in while a sonar ring continuously pulses outward from the selected state.",
  faDescription:
    "دکمه رادیویی که نقطه آن با فنر ظاهر می‌شود و حلقه‌ای مثل سونار پیوسته از حالت انتخاب‌شده به بیرون موج برمی‌دارد.",
  tags: ["radio", "pulse", "ring", "sonar"],
  html: `<input type="radio" id="fq-rrp" name="fq-rrp-g" class="fq-rrp-in"><label for="fq-rrp" class="fq-rrp-dot"><span class="fq-rrp-core"></span></label>`,
  css: `.fx-fq-radio-ring-pulse .fq-rrp-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-radio-ring-pulse .fq-rrp-dot {
  position: relative;
  display: block;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2.5px solid #64748b;
  cursor: pointer;
  transition: border-color 0.3s ease;
}
.fx-fq-radio-ring-pulse .fq-rrp-core {
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #a5f3fc, #06b6d4 70%);
  transform: scale(0);
  transition: transform 0.35s cubic-bezier(0.3, 1.6, 0.5, 1);
}
.fx-fq-radio-ring-pulse .fq-rrp-dot::after {
  content: "";
  position: absolute;
  inset: -2.5px;
  border-radius: 50%;
  border: 2px solid #06b6d4;
  opacity: 0;
  transform: scale(0.9);
  pointer-events: none;
}
.fx-fq-radio-ring-pulse .fq-rrp-in:checked + .fq-rrp-dot { border-color: #06b6d4; }
.fx-fq-radio-ring-pulse .fq-rrp-in:checked + .fq-rrp-dot .fq-rrp-core { transform: scale(1); }
.fx-fq-radio-ring-pulse .fq-rrp-in:checked + .fq-rrp-dot::after {
  animation: fq-rrp-pulse 1.4s ease-out infinite;
}
@keyframes fq-rrp-pulse {
  0% { opacity: 0.8; transform: scale(0.9); }
  70% { opacity: 0; transform: scale(1.55); }
  100% { opacity: 0; transform: scale(1.55); }
}`,
});

/* ---------------------------------------------------------- */
/* 10 — RTL star rating (nth-of-type fill ladder)             */
/* ---------------------------------------------------------- */
fx({
  id: "fq-star-rating",
  name: "RTL Star Rating",
  fa: "امتیازدهی ستاره‌ای",
  description:
    "Five radio-driven stars in an RTL row: stars fill up to the selection with a staggered transition-delay ladder and the value label updates per radio.",
  faDescription:
    "پنج ستاره‌ی رادیویی در چیدمان راست‌به‌چپ: تا ستاره‌ی انتخاب‌شده با تاخیرهای پلکانی پر می‌شوند و برچسب امتیاز به از هر رادیو عوض می‌شود.",
  tags: ["radio", "rating", "stars", "rtl"],
  html: `<input type="radio" name="fq-star-rate" id="fq-star-rate-1" class="fq-sr-in"><input type="radio" name="fq-star-rate" id="fq-star-rate-2" class="fq-sr-in"><input type="radio" name="fq-star-rate" id="fq-star-rate-3" class="fq-sr-in"><input type="radio" name="fq-star-rate" id="fq-star-rate-4" class="fq-sr-in"><input type="radio" name="fq-star-rate" id="fq-star-rate-5" class="fq-sr-in"><label for="fq-star-rate-1" class="fq-sr-lb">★</label><label for="fq-star-rate-2" class="fq-sr-lb">★</label><label for="fq-star-rate-3" class="fq-sr-lb">★</label><label for="fq-star-rate-4" class="fq-sr-lb">★</label><label for="fq-star-rate-5" class="fq-sr-lb">★</label><span class="fq-sr-val"></span>`,
  css: `.fx-fq-star-rating {
  direction: rtl;
  display: flex;
  align-items: center;
  gap: 7px;
}
.fx-fq-star-rating .fq-sr-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-star-rating .fq-sr-lb {
  font-size: 30px;
  line-height: 1;
  color: #3f4a5c;
  cursor: pointer;
  transition: color 0.25s ease, transform 0.3s cubic-bezier(0.3, 1.8, 0.5, 1), text-shadow 0.25s ease;
}
.fx-fq-star-rating .fq-sr-lb:hover {
  color: #8b98ad;
  transform: scale(1.2);
}
.fx-fq-star-rating .fq-sr-val {
  min-width: 80px;
  text-align: center;
  margin-right: 4px;
}
.fx-fq-star-rating .fq-sr-val::after {
  content: "امتیاز بده";
  font-size: 12.5px;
  font-weight: 700;
  color: #64748b;
}
.fx-fq-star-rating .fq-sr-lb:nth-of-type(1) { transition-delay: 0s; }
.fx-fq-star-rating .fq-sr-lb:nth-of-type(2) { transition-delay: 0.05s; }
.fx-fq-star-rating .fq-sr-lb:nth-of-type(3) { transition-delay: 0.1s; }
.fx-fq-star-rating .fq-sr-lb:nth-of-type(4) { transition-delay: 0.15s; }
.fx-fq-star-rating .fq-sr-lb:nth-of-type(5) { transition-delay: 0.2s; }
.fx-fq-star-rating #fq-star-rate-1:checked ~ .fq-sr-lb:nth-of-type(-n+1),
.fx-fq-star-rating #fq-star-rate-2:checked ~ .fq-sr-lb:nth-of-type(-n+2),
.fx-fq-star-rating #fq-star-rate-3:checked ~ .fq-sr-lb:nth-of-type(-n+3),
.fx-fq-star-rating #fq-star-rate-4:checked ~ .fq-sr-lb:nth-of-type(-n+4),
.fx-fq-star-rating #fq-star-rate-5:checked ~ .fq-sr-lb:nth-of-type(-n+5) {
  color: #fbbf24;
  text-shadow: 0 0 12px rgba(251, 191, 36, 0.55);
  transform: scale(1.12);
}
.fx-fq-star-rating #fq-star-rate-1:checked ~ .fq-sr-val::after { content: "۱ ستاره"; color: #ef4444; }
.fx-fq-star-rating #fq-star-rate-2:checked ~ .fq-sr-val::after { content: "۲ ستاره"; color: #f97316; }
.fx-fq-star-rating #fq-star-rate-3:checked ~ .fq-sr-val::after { content: "۳ ستاره"; color: #eab308; }
.fx-fq-star-rating #fq-star-rate-4:checked ~ .fq-sr-val::after { content: "۴ ستاره"; color: #84cc16; }
.fx-fq-star-rating #fq-star-rate-5:checked ~ .fq-sr-val::after { content: "۵ ستاره"; color: #22c55e; }`,
});

/* ---------------------------------------------------------- */
/* 11 — Gradient border that ignites on focus                 */
/* ---------------------------------------------------------- */
fx({
  id: "fq-input-glow-border",
  name: "Ignited Gradient Border",
  fa: "حاشیه گرادیانی مشتعل",
  description:
    "A text input wrapped in a conic gradient that sleeps at low opacity until focus-within ignites it into a glowing, hue-cycling border.",
  faDescription:
    "ورودی متنی با قابی از گرادیان مخروطی که در حالت عادی خاموش است و با فوکوس، حاشیه‌ای درخشان و چرخاننده رنگ روشن می‌شود.",
  tags: ["input", "focus", "gradient", "glow"],
  previewBg: "#0b0f14",
  html: `<span class="fq-ig-wrap"><input type="text" class="fq-ig-in" placeholder="ایمیل شما"></span>`,
  css: `.fx-fq-input-glow-border .fq-ig-wrap {
  display: block;
  width: 240px;
  padding: 2px;
  border-radius: 14px;
  background: conic-gradient(from 0deg, #22d3ee, #818cf8, #e879f9, #f97316, #22d3ee);
  opacity: 0.22;
  transition: opacity 0.4s ease, box-shadow 0.4s ease;
}
.fx-fq-input-glow-border .fq-ig-in {
  display: block;
  width: 100%;
  padding: 11px 14px;
  border: 0;
  border-radius: 12px;
  background: #101318;
  color: #e2e8f0;
  font-size: 14px;
  caret-color: #22d3ee;
  outline: none;
}
.fx-fq-input-glow-border .fq-ig-in::placeholder { color: #64748b; }
.fx-fq-input-glow-border .fq-ig-wrap:focus-within {
  opacity: 1;
  box-shadow: 0 0 22px rgba(99, 102, 241, 0.55), 0 0 46px rgba(34, 211, 238, 0.22);
  animation: fq-ig-hue 3s linear infinite;
}
@keyframes fq-ig-hue {
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(360deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Underline growing from center                         */
/* ---------------------------------------------------------- */
fx({
  id: "fq-input-underline-grow",
  name: "Center-Grow Underline",
  fa: "خط زیر رشدکننده از مرکز",
  description:
    "A minimal text input whose accent underline expands outward from the exact center the moment it gains focus.",
  faDescription:
    "ورودی مینیمالی که خط زیرین آن هنگام فوکوس، از دقیقاً وسط به دو طرف باز می‌شود.",
  tags: ["input", "focus", "underline", "minimal"],
  html: `<span class="fq-iu-wrap"><input type="text" class="fq-iu-in" placeholder="نام کاربری"><span class="fq-iu-bar"></span></span>`,
  css: `.fx-fq-input-underline-grow .fq-iu-wrap {
  position: relative;
  display: block;
  width: 220px;
}
.fx-fq-input-underline-grow .fq-iu-in {
  display: block;
  width: 100%;
  padding: 10px 2px;
  border: 0;
  border-bottom: 2px solid #3f4a5c;
  background: transparent;
  color: #e2e8f0;
  font-size: 15px;
  outline: none;
}
.fx-fq-input-underline-grow .fq-iu-in::placeholder { color: #64748b; }
.fx-fq-input-underline-grow .fq-iu-bar {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, #22d3ee, #818cf8);
  transform: translateX(-50%);
  transition: width 0.45s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-fq-input-underline-grow .fq-iu-in:focus ~ .fq-iu-bar { width: 100%; }`,
});

/* ---------------------------------------------------------- */
/* 13 — Floating label via :placeholder-shown                 */
/* ---------------------------------------------------------- */
fx({
  id: "fq-input-floating-label",
  name: "Floating Label Field",
  fa: "ورودی با لیبل شناور",
  description:
    "Material-style field: the label rests inside and floats to the rim on focus or when the field has content, driven purely by :placeholder-shown.",
  faDescription:
    "فیلد به سبک متریال: لیبل داخل میدان است و با فوکوس یا پر شدن میدان، فقط با ترفند placeholder-shown به لبه شناور می‌شود.",
  tags: ["input", "label", "material", "placeholder-shown"],
  html: `<span class="fq-fl-wrap"><input type="text" id="fq-fl-in" class="fq-fl-in" placeholder=" "><label for="fq-fl-in" class="fq-fl-lb">ایمیل</label></span>`,
  css: `.fx-fq-input-floating-label .fq-fl-wrap {
  position: relative;
  display: block;
  width: 230px;
}
.fx-fq-input-floating-label .fq-fl-in {
  display: block;
  width: 100%;
  padding: 16px 14px 6px;
  border: 1.5px solid #3f4a5c;
  border-radius: 12px;
  background: #101318;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.fx-fq-input-floating-label .fq-fl-lb {
  position: absolute;
  top: 14px;
  right: 14px;
  font-size: 14px;
  color: #64748b;
  pointer-events: none;
  transition: top 0.25s ease, font-size 0.25s ease, color 0.25s ease;
}
.fx-fq-input-floating-label .fq-fl-in:focus {
  border-color: #22d3ee;
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.15);
}
.fx-fq-input-floating-label .fq-fl-in:focus + .fq-fl-lb,
.fx-fq-input-floating-label .fq-fl-in:not(:placeholder-shown) + .fq-fl-lb {
  top: 5px;
  font-size: 10.5px;
  color: #22d3ee;
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Search pill that expands on focus                     */
/* ---------------------------------------------------------- */
fx({
  id: "fq-input-search-expand",
  name: "Expanding Search Pill",
  fa: "جستجوی بازشونده",
  description:
    "A collapsed circular search button that morphs into a full search field on focus, the placeholder text fading in behind the lens icon.",
  faDescription:
    "دکمه گردِ جمع‌شده‌ی جستجو که با فوکوس به میدان کامل جستجو باز می‌شود و متن پشت ذره‌بین محو به ظاهر می‌رسد.",
  tags: ["input", "search", "expand", "focus-within"],
  html: `<span class="fq-se-wrap"><span class="fq-se-ico"></span><input type="text" class="fq-se-in" placeholder="جستجو…"></span>`,
  css: `.fx-fq-input-search-expand .fq-se-wrap {
  position: relative;
  display: flex;
  align-items: center;
  width: 46px;
  height: 44px;
  border-radius: 999px;
  background: #101318;
  border: 1.5px solid #3f4a5c;
  cursor: pointer;
  overflow: hidden;
  transition: width 0.5s cubic-bezier(0.3, 0.9, 0.25, 1), border-color 0.3s ease, box-shadow 0.4s ease;
}
.fx-fq-input-search-expand .fq-se-ico {
  position: absolute;
  left: 15px;
  width: 14px;
  height: 14px;
  border: 2px solid #64748b;
  border-radius: 50%;
  transition: border-color 0.3s ease, transform 0.4s ease;
}
.fx-fq-input-search-expand .fq-se-ico::after {
  content: "";
  position: absolute;
  bottom: -5px;
  right: -4px;
  width: 7px;
  height: 2px;
  border-radius: 2px;
  background: #64748b;
  transform: rotate(45deg);
  transition: background 0.3s ease;
}
.fx-fq-input-search-expand .fq-se-in {
  width: 100%;
  padding: 0 14px 0 42px;
  border: 0;
  background: transparent;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  opacity: 0;
  transition: opacity 0.3s ease 0.12s;
}
.fx-fq-input-search-expand .fq-se-in::placeholder { color: #64748b; }
.fx-fq-input-search-expand .fq-se-wrap:focus-within {
  width: 232px;
  border-color: #22d3ee;
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.25);
}
.fx-fq-input-search-expand .fq-se-wrap:focus-within .fq-se-in { opacity: 1; }
.fx-fq-input-search-expand .fq-se-wrap:focus-within .fq-se-ico {
  border-color: #22d3ee;
  transform: scale(0.92);
}
.fx-fq-input-search-expand .fq-se-wrap:focus-within .fq-se-ico::after { background: #22d3ee; }`,
});

/* ---------------------------------------------------------- */
/* 15 — OTP boxes with auto caret blink                       */
/* ---------------------------------------------------------- */
fx({
  id: "fq-input-otp-boxes",
  name: "OTP Boxes",
  fa: "جعبه‌های کد یکبارمصرف",
  description:
    "Four OTP cells: filled ones tint automatically while empty cells show a blinking block caret; focus lifts and rings only the active cell.",
  faDescription:
    "چهار خانه‌ی کد: خانه‌های پرشده خودکار رنگ می‌گیرند و خانه‌های خالی کرسر چشمک‌زن نشان می‌دهند؛ فوکوس فقط خانه‌ی فعال را بالا می‌برد و هاله می‌دهد.",
  tags: ["input", "otp", "caret", "code"],
  html: `<span class="fq-otp-row"><input type="text" maxlength="1" value="7" class="fq-otp-in"><input type="text" maxlength="1" value="3" class="fq-otp-in"><input type="text" maxlength="1" placeholder=" " class="fq-otp-in"><input type="text" maxlength="1" placeholder=" " class="fq-otp-in"></span>`,
  css: `.fx-fq-input-otp-boxes .fq-otp-row {
  display: flex;
  gap: 10px;
}
.fx-fq-input-otp-boxes .fq-otp-in {
  width: 46px;
  height: 56px;
  border: 1.5px solid #3f4a5c;
  border-radius: 12px;
  background: #101318;
  color: #e2e8f0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  outline: none;
  caret-color: transparent;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}
.fx-fq-input-otp-boxes .fq-otp-in:not(:placeholder-shown) {
  color: #67e8f9;
  border-color: #155e75;
}
.fx-fq-input-otp-boxes .fq-otp-in:placeholder-shown {
  animation: fq-otp-caret 1.1s linear infinite;
}
.fx-fq-input-otp-boxes .fq-otp-in:focus {
  border-color: #22d3ee;
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.2);
  transform: translateY(-2px);
}
@keyframes fq-otp-caret {
  0%, 45% { box-shadow: inset 0 0 0 -20px #22d3ee; }
  55%, 100% { box-shadow: inset 0 0 0 -20px transparent; }
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Custom range slider (webkit thumb + gradient track)   */
/* ---------------------------------------------------------- */
fx({
  id: "fq-slider-range-styled",
  name: "Custom Range Slider",
  fa: "اسلایدر بازه سفارشی",
  description:
    "A range input restyled end to end: gradient track, glossy glowing thumb that scales on hover and compresses the track shadow while dragging.",
  faDescription:
    "اسلایدر بازه‌ای که کامل بازطراحی شده: ریل گرادیانی، دستگیره براق و درخشان که با هاور بزرگ می‌شود و هنگام کشیدن سایه ریل را فشرده می‌کند.",
  tags: ["range", "slider", "webkit", "form"],
  html: `<input type="range" min="0" max="100" value="65" class="fq-rng-in">`,
  css: `.fx-fq-slider-range-styled .fq-rng-in {
  -webkit-appearance: none;
  appearance: none;
  width: 240px;
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(90deg, #22d3ee, #818cf8 60%, #e879f9);
  outline: none;
  cursor: pointer;
  accent-color: #22d3ee;
}
.fx-fq-slider-range-styled .fq-rng-in::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #ffffff, #cbd5e1 70%);
  border: 2px solid #22d3ee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45), 0 0 12px rgba(34, 211, 238, 0.5);
  transition: transform 0.2s ease;
}
.fx-fq-slider-range-styled .fq-rng-in::-webkit-slider-thumb:hover { transform: scale(1.15); }
.fx-fq-slider-range-styled .fq-rng-in:active::-webkit-slider-thumb { transform: scale(1.28); }
.fx-fq-slider-range-styled .fq-rng-in::-moz-range-thumb {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #e2e8f0;
  border: 2px solid #22d3ee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
}
.fx-fq-slider-range-styled .fq-rng-in::-moz-range-track {
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(90deg, #22d3ee, #818cf8 60%, #e879f9);
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Striped progress (auto: width + stripe crawl)         */
/* ---------------------------------------------------------- */
fx({
  id: "fq-progress-striped-animate",
  name: "Striped Progress Loop",
  fa: "نوار پیشرفت راه‌راه",
  description:
    "Self-running progress bar: the fill sweeps to 100% while diagonal stripes crawl beneath it, then fades and loops.",
  faDescription:
    "نوار پیشرفت خودکار: پرکننده تا صد درصد می‌رود در حالی که راه‌راه‌های مورب زیر آن خزش می‌کنند، بعد محو شده و تکرار می‌شود.",
  tags: ["progress", "stripes", "auto", "loading"],
  interaction: "auto",
  html: `<span class="fq-ps-track"><span class="fq-ps-fill"></span></span>`,
  css: `.fx-fq-progress-striped-animate .fq-ps-track {
  display: block;
  width: 250px;
  height: 18px;
  border-radius: 999px;
  background: #1a2030;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}
.fx-fq-progress-striped-animate .fq-ps-fill {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: repeating-linear-gradient(45deg, #22d3ee 0 12px, #0e7490 12px 24px);
  animation: fq-ps-width 5s ease-in-out infinite, fq-ps-move 0.55s linear infinite;
}
@keyframes fq-ps-width {
  0% { width: 4%; opacity: 1; }
  62% { width: 100%; opacity: 1; }
  78% { width: 100%; opacity: 1; }
  90% { width: 100%; opacity: 0; }
  100% { width: 4%; opacity: 0; }
}
@keyframes fq-ps-move {
  to { background-position: 34px 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 18 — Segmented progress (10-cell sweep, auto)              */
/* ---------------------------------------------------------- */
fx({
  id: "fq-progress-segmented",
  name: "Segmented Progress",
  fa: "پیشرفت قطعه‌قطعه",
  description:
    "Ten cells light up one after another on a shared clock, hold fully lit, then sweep clean and start again.",
  faDescription:
    "ده قطعه با یک ساعت مشترک یکی‌یکی روشن می‌شوند، کامل روشن می‌مانند و بعد پاک شده و دوباره شروع می‌کنند.",
  tags: ["progress", "segments", "auto", "steps"],
  interaction: "auto",
  html: `<span class="fq-pg-row"><span class="fq-pg-seg"></span><span class="fq-pg-seg"></span><span class="fq-pg-seg"></span><span class="fq-pg-seg"></span><span class="fq-pg-seg"></span><span class="fq-pg-seg"></span><span class="fq-pg-seg"></span><span class="fq-pg-seg"></span><span class="fq-pg-seg"></span><span class="fq-pg-seg"></span></span>`,
  css: `.fx-fq-progress-segmented .fq-pg-row {
  display: flex;
  gap: 5px;
}
.fx-fq-progress-segmented .fq-pg-seg {
  width: 19px;
  height: 26px;
  border-radius: 5px;
  background: #232b3b;
  transform: scaleY(0.7);
  animation: fq-pg-fill 4.4s linear infinite;
}
.fx-fq-progress-segmented .fq-pg-seg:nth-child(2) { animation-delay: 0.4s; }
.fx-fq-progress-segmented .fq-pg-seg:nth-child(3) { animation-delay: 0.8s; }
.fx-fq-progress-segmented .fq-pg-seg:nth-child(4) { animation-delay: 1.2s; }
.fx-fq-progress-segmented .fq-pg-seg:nth-child(5) { animation-delay: 1.6s; }
.fx-fq-progress-segmented .fq-pg-seg:nth-child(6) { animation-delay: 2s; }
.fx-fq-progress-segmented .fq-pg-seg:nth-child(7) { animation-delay: 2.4s; }
.fx-fq-progress-segmented .fq-pg-seg:nth-child(8) { animation-delay: 2.8s; }
.fx-fq-progress-segmented .fq-pg-seg:nth-child(9) { animation-delay: 3.2s; }
.fx-fq-progress-segmented .fq-pg-seg:nth-child(10) { animation-delay: 3.6s; }
@keyframes fq-pg-fill {
  0% { background: #232b3b; transform: scaleY(0.7); box-shadow: none; }
  5% { background: #22d3ee; transform: scaleY(1); box-shadow: 0 0 10px rgba(34, 211, 238, 0.5); }
  92% { background: #22d3ee; transform: scaleY(1); }
  100% { background: #232b3b; transform: scaleY(0.7); box-shadow: none; }
}`,
});

/* ---------------------------------------------------------- */
/* 19 — Password strength meter (auto-cycling + live label)   */
/* ---------------------------------------------------------- */
fx({
  id: "fq-strength-meter",
  name: "Strength Meter",
  fa: "سنجه قدرت رمز",
  description:
    "Four bars cycle weak to strong on a shared clock while the label itself swaps text and color through keyframed content steps.",
  faDescription:
    "چهار میله با یک ساعت مشترک از ضعیف به قوی می‌چرخند و برچسب، متن و رنگ خود را با گام‌های کلیدواژه content عوض می‌کند.",
  tags: ["progress", "meter", "password", "auto"],
  interaction: "auto",
  html: `<span class="fq-sm-wrap"><span class="fq-sm-bars"><span class="fq-sm-b fq-sm-b1"></span><span class="fq-sm-b fq-sm-b2"></span><span class="fq-sm-b fq-sm-b3"></span><span class="fq-sm-b fq-sm-b4"></span></span><span class="fq-sm-tag"></span></span>`,
  css: `.fx-fq-strength-meter .fq-sm-wrap {
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
}
.fx-fq-strength-meter .fq-sm-bars {
  display: flex;
  gap: 5px;
}
.fx-fq-strength-meter .fq-sm-b {
  width: 44px;
  height: 10px;
  border-radius: 4px;
  background: #232b3b;
  animation: fq-sm-up 6s linear infinite;
}
.fx-fq-strength-meter .fq-sm-b1 { --c: #ef4444; }
.fx-fq-strength-meter .fq-sm-b2 { --c: #f59e0b; animation-delay: 0.5s; }
.fx-fq-strength-meter .fq-sm-b3 { --c: #eab308; animation-delay: 1s; }
.fx-fq-strength-meter .fq-sm-b4 { --c: #22c55e; animation-delay: 1.5s; }
.fx-fq-strength-meter .fq-sm-tag {
  font-size: 13px;
  font-weight: 800;
  animation: fq-sm-word 6s steps(1) infinite;
}
@keyframes fq-sm-up {
  0%, 8% { background: #232b3b; box-shadow: none; }
  16%, 90% { background: var(--c, #ef4444); box-shadow: 0 0 8px rgba(148, 163, 184, 0.25); }
  97%, 100% { background: #232b3b; box-shadow: none; }
}
@keyframes fq-sm-word {
  0%, 20% { content: "ضعیف"; color: #ef4444; }
  24%, 44% { content: "متوسط"; color: #f59e0b; }
  48%, 66% { content: "خوب"; color: #eab308; }
  70%, 92% { content: "قوی"; color: #22c55e; }
  96%, 100% { content: ""; color: #64748b; }
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Selectable chips (self-contained checkbox labels)     */
/* ---------------------------------------------------------- */
fx({
  id: "fq-chips-select",
  name: "Selectable Chips",
  fa: "چیپ‌های انتخابی",
  description:
    "Three filter chips, each a self-contained checkbox label: selection springs a check badge in and floods the pill with tinted light.",
  faDescription:
    "سه چیپ فیلتر که هرکدام لیبل چک‌باکس مستقل خود است: با انتخاب، نشان تیک با فنر می‌پرد و قرص از نور رنگی پر می‌شود.",
  tags: ["checkbox", "chips", "tags", "filter"],
  html: `<label class="fq-chp"><input type="checkbox" class="fq-chp-in"><span class="fq-chp-b">هوش مصنوعی<span class="fq-chp-t">✓</span></span></label><label class="fq-chp"><input type="checkbox" class="fq-chp-in"><span class="fq-chp-b">طراحی<span class="fq-chp-t">✓</span></span></label><label class="fq-chp"><input type="checkbox" checked class="fq-chp-in"><span class="fq-chp-b">کدنویسی<span class="fq-chp-t">✓</span></span></label>`,
  css: `.fx-fq-chips-select {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.fx-fq-chips-select .fq-chp {
  display: inline-block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.fx-fq-chips-select .fq-chp-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-chips-select .fq-chp-b {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 16px;
  border-radius: 999px;
  border: 1.5px solid #3f4a5c;
  background: #141924;
  color: #cbd5e1;
  font-size: 13.5px;
  user-select: none;
  transition: border-color 0.3s ease, background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
}
.fx-fq-chips-select .fq-chp:active .fq-chp-b { transform: scale(0.95); }
.fx-fq-chips-select .fq-chp-t {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #22d3ee;
  color: #06202a;
  font-size: 11px;
  font-weight: 900;
  font-style: normal;
  transform: scale(0) rotate(-90deg);
  transition: transform 0.35s cubic-bezier(0.3, 1.8, 0.5, 1);
}
.fx-fq-chips-select .fq-chp-in:checked + .fq-chp-b {
  border-color: #22d3ee;
  background: rgba(34, 211, 238, 0.14);
  color: #a5f3fc;
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.25);
}
.fx-fq-chips-select .fq-chp-in:checked + .fq-chp-b .fq-chp-t {
  transform: scale(1) rotate(0deg);
}`,
});

/* ---------------------------------------------------------- */
/* 21 — Segmented control with sliding thumb                  */
/* ---------------------------------------------------------- */
fx({
  id: "fq-segmented-control-slide",
  name: "Sliding Segmented Control",
  fa: "کنترل بخشی لغزان",
  description:
    "A two-option segmented control: a weighted thumb glides between the options with spring easing while the active label brightens.",
  faDescription:
    "کنترل دوقسمتی: دستگیره‌ی سنگین با حرکت فنری بین دو گزینه سُر می‌خورد و لیبل فعال روشن می‌شود.",
  tags: ["checkbox", "segmented", "tabs", "toggle"],
  html: `<label class="fq-sgc"><input type="checkbox" class="fq-sgc-in"><span class="fq-sgc-thumb"></span><span class="fq-sgc-opt fq-sgc-o1">روشن</span><span class="fq-sgc-opt fq-sgc-o2">تاریک</span></label>`,
  css: `.fx-fq-segmented-control-slide .fq-sgc {
  position: relative;
  display: inline-flex;
  direction: ltr;
  padding: 4px;
  border-radius: 12px;
  background: #141924;
  border: 1px solid #2a3345;
  cursor: pointer;
}
.fx-fq-segmented-control-slide .fq-sgc-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-segmented-control-slide .fq-sgc-opt {
  position: relative;
  z-index: 1;
  padding: 8px 22px;
  font-size: 13.5px;
  font-weight: 600;
  color: #8b98ad;
  user-select: none;
  transition: color 0.35s ease;
}
.fx-fq-segmented-control-slide .fq-sgc-o1 { color: #f1f5f9; }
.fx-fq-segmented-control-slide .fq-sgc-thumb {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  width: calc(50% - 4px);
  border-radius: 9px;
  background: linear-gradient(135deg, #334155, #1e293b);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: transform 0.4s cubic-bezier(0.3, 1.3, 0.4, 1);
}
.fx-fq-segmented-control-slide .fq-sgc-in:checked ~ .fq-sgc-thumb { transform: translateX(100%); }
.fx-fq-segmented-control-slide .fq-sgc-in:checked ~ .fq-sgc-o1 { color: #8b98ad; }
.fx-fq-segmented-control-slide .fq-sgc-in:checked ~ .fq-sgc-o2 { color: #f1f5f9; }`,
});

/* ---------------------------------------------------------- */
/* 22 — Like heart with odometer counter                      */
/* ---------------------------------------------------------- */
fx({
  id: "fq-like-heart-counter",
  name: "Like Heart Counter",
  fa: "قلب لایک با شمارنده",
  description:
    "A like button with an odometer count: checking it bursts the heart into red, fires a ripple and rolls the counter up by one.",
  faDescription:
    "دکمه لایک با شمارنده‌ی چرخان: با تیک زدن، قلب قرمز و منفجر می‌شود، موجی می‌پرد و شمارنده یک رقم بالا می‌غلتد.",
  tags: ["checkbox", "like", "heart", "counter"],
  html: `<input type="checkbox" id="fq-lhc" class="fq-lhc-in"><label for="fq-lhc" class="fq-lhc-btn"><span class="fq-lhc-heart"></span><span class="fq-lhc-count"><span class="fq-lhc-flip"><span class="fq-lhc-a">۱۲۸</span><span class="fq-lhc-b">۱۲۹</span></span></span></label>`,
  css: `.fx-fq-like-heart-counter .fq-lhc-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-like-heart-counter .fq-lhc-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px 8px 18px;
  border-radius: 999px;
  background: #141924;
  border: 1px solid #2a3345;
  cursor: pointer;
  transition: border-color 0.3s ease, background 0.3s ease;
}
.fx-fq-like-heart-counter .fq-lhc-btn::after {
  content: "";
  position: absolute;
  left: 30px;
  top: 50%;
  width: 16px;
  height: 16px;
  margin: -8px;
  border-radius: 50%;
  border: 2px solid #f43f5e;
  opacity: 0;
  transform: scale(0.6);
  pointer-events: none;
}
.fx-fq-like-heart-counter .fq-lhc-heart {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 7px 12px 1px 3px;
  background: #526078;
  transform: rotate(-45deg);
  transition: background 0.35s ease 0.05s;
}
.fx-fq-like-heart-counter .fq-lhc-heart::before,
.fx-fq-like-heart-counter .fq-lhc-heart::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: inherit;
  transition: background 0.35s ease 0.05s;
}
.fx-fq-like-heart-counter .fq-lhc-heart::before { top: -8px; left: 0; }
.fx-fq-like-heart-counter .fq-lhc-heart::after { top: 0; left: 8px; }
.fx-fq-like-heart-counter .fq-lhc-count {
  height: 18px;
  overflow: hidden;
}
.fx-fq-like-heart-counter .fq-lhc-flip {
  display: flex;
  flex-direction: column;
  transform: translateY(0);
  transition: transform 0.45s cubic-bezier(0.3, 1.2, 0.4, 1);
}
.fx-fq-like-heart-counter .fq-lhc-a,
.fx-fq-like-heart-counter .fq-lhc-b {
  height: 18px;
  line-height: 18px;
  font-size: 14px;
  font-weight: 800;
  min-width: 34px;
  text-align: center;
}
.fx-fq-like-heart-counter .fq-lhc-a { color: #e2e8f0; }
.fx-fq-like-heart-counter .fq-lhc-b { color: #fb7185; }
.fx-fq-like-heart-counter .fq-lhc-in:checked + .fq-lhc-btn {
  border-color: #f43f5e;
  background: rgba(244, 63, 94, 0.1);
}
.fx-fq-like-heart-counter .fq-lhc-in:checked + .fq-lhc-btn .fq-lhc-heart,
.fx-fq-like-heart-counter .fq-lhc-in:checked + .fq-lhc-btn .fq-lhc-heart::before,
.fx-fq-like-heart-counter .fq-lhc-in:checked + .fq-lhc-btn .fq-lhc-heart::after {
  background: #f43f5e;
}
.fx-fq-like-heart-counter .fq-lhc-in:checked + .fq-lhc-btn .fq-lhc-heart {
  animation: fq-lhc-pop 0.45s cubic-bezier(0.3, 1.8, 0.5, 1);
}
.fx-fq-like-heart-counter .fq-lhc-in:checked + .fq-lhc-btn::after {
  animation: fq-lhc-ring 0.6s ease-out;
}
.fx-fq-like-heart-counter .fq-lhc-in:checked + .fq-lhc-btn .fq-lhc-flip {
  transform: translateY(-18px);
}
@keyframes fq-lhc-pop {
  0% { transform: rotate(-45deg) scale(1); }
  40% { transform: rotate(-45deg) scale(1.45); }
  70% { transform: rotate(-45deg) scale(0.88); }
  100% { transform: rotate(-45deg) scale(1); }
}
@keyframes fq-lhc-ring {
  0% { opacity: 0.8; transform: scale(0.6); }
  100% { opacity: 0; transform: scale(2.4); }
}`,
});

/* ---------------------------------------------------------- */
/* 23 — Bookmark save (fill rises + ribbon-drop bounce)       */
/* ---------------------------------------------------------- */
fx({
  id: "fq-bookmark-save",
  name: "Bookmark Save",
  fa: "نشان ذخیره",
  description:
    "A save button whose bookmark fills bottom-up in amber and performs a satisfying ribbon-drop bounce when saved.",
  faDescription:
    "دکمه ذخیره که نشان آن به رنگ کهربایی از پایین پر می‌شود و هنگام ذخیره، جهش رضایت‌بخش ریزش روبان را انجام می‌دهد.",
  tags: ["checkbox", "bookmark", "save", "button"],
  html: `<input type="checkbox" id="fq-bmk" class="fq-bmk-in"><label for="fq-bmk" class="fq-bmk-btn"><span class="fq-bmk-ic"><span class="fq-bmk-fill"></span></span><span class="fq-bmk-txt">ذخیره</span></label>`,
  css: `.fx-fq-bookmark-save .fq-bmk-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-bookmark-save .fq-bmk-btn {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 18px;
  border-radius: 12px;
  background: #141924;
  border: 1.5px solid #2a3345;
  cursor: pointer;
  transition: border-color 0.3s ease, background 0.3s ease;
}
.fx-fq-bookmark-save .fq-bmk-ic {
  position: relative;
  width: 14px;
  height: 19px;
  background: #334155;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 68%, 0 100%);
  transition: background 0.3s ease;
}
.fx-fq-bookmark-save .fq-bmk-fill {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #fbbf24, #f59e0b);
  transform: translateY(100%);
  transition: transform 0.45s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-fq-bookmark-save .fq-bmk-txt {
  font-size: 13.5px;
  font-weight: 600;
  color: #cbd5e1;
  transition: color 0.3s ease;
}
.fx-fq-bookmark-save .fq-bmk-in:checked + .fq-bmk-btn {
  border-color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
  animation: fq-bmk-drop 0.5s cubic-bezier(0.3, 1.5, 0.4, 1);
}
.fx-fq-bookmark-save .fq-bmk-in:checked + .fq-bmk-btn .fq-bmk-fill { transform: translateY(0); }
.fx-fq-bookmark-save .fq-bmk-in:checked + .fq-bmk-btn .fq-bmk-txt { color: #fbbf24; }
@keyframes fq-bmk-drop {
  0% { transform: translateY(0); }
  35% { transform: translateY(5px); }
  70% { transform: translateY(-2px); }
  100% { transform: translateY(0); }
}`,
});

/* ---------------------------------------------------------- */
/* 24 — Password reveal (masked ↔ plain layer swap + eye)     */
/* ---------------------------------------------------------- */
fx({
  id: "fq-password-eye",
  name: "Password Reveal Eye",
  fa: "رمز با چشم",
  description:
    "A password row with two stacked layers: the eye toggle slides the blurred dot mask away and de-blurs the real value, while the slashed eye opens.",
  faDescription:
    "ردیف رمز عبور با دو لایه روی‌هم: چشم، لایه‌ی مات نقطه‌ها را می‌لغزاند و مقدار واقعی را از مات‌شدن خارج می‌کند و چشم خط‌خورده باز می‌شود.",
  tags: ["checkbox", "password", "eye", "reveal"],
  html: `<span class="fq-pw-wrap"><span class="fq-pw-text"><span class="fq-pw-mask">●●●●●●●●</span><span class="fq-pw-plain">DeKo@2024</span></span><input type="checkbox" id="fq-pwe" class="fq-pw-in"><label for="fq-pwe" class="fq-pw-eye"><span class="fq-pw-pupil"></span></label></span>`,
  css: `.fx-fq-password-eye .fq-pw-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 14px;
  border-radius: 12px;
  background: #101318;
  border: 1.5px solid #3f4a5c;
}
.fx-fq-password-eye .fq-pw-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-password-eye .fq-pw-text {
  position: relative;
  flex: 1;
  height: 20px;
  min-width: 128px;
  overflow: hidden;
  direction: ltr;
  text-align: left;
}
.fx-fq-password-eye .fq-pw-mask,
.fx-fq-password-eye .fq-pw-plain {
  position: absolute;
  inset: 0;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 2px;
  transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.3, 0.9, 0.3, 1), filter 0.35s ease;
}
.fx-fq-password-eye .fq-pw-mask { color: #94a3b8; }
.fx-fq-password-eye .fq-pw-plain {
  color: #7dd3fc;
  opacity: 0;
  transform: translateY(10px);
  filter: blur(4px);
}
.fx-fq-password-eye .fq-pw-eye {
  position: relative;
  flex: none;
  width: 34px;
  height: 22px;
  border: 2px solid #64748b;
  border-radius: 50% 50% 50% 50% / 62% 62% 38% 38%;
  cursor: pointer;
  transition: border-color 0.3s ease;
}
.fx-fq-password-eye .fq-pw-pupil {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: #64748b;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.fx-fq-password-eye .fq-pw-pupil::after {
  content: "";
  position: absolute;
  left: -9px;
  top: 3px;
  width: 26px;
  height: 2.5px;
  border-radius: 2px;
  background: #f87171;
  transform: rotate(-40deg) scaleX(1);
  transition: transform 0.3s ease;
}
.fx-fq-password-eye .fq-pw-in:checked ~ .fq-pw-text .fq-pw-mask {
  opacity: 0;
  transform: translateY(-10px);
  filter: blur(4px);
}
.fx-fq-password-eye .fq-pw-in:checked ~ .fq-pw-text .fq-pw-plain {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
.fx-fq-password-eye .fq-pw-in:checked + .fq-pw-eye { border-color: #22d3ee; }
.fx-fq-password-eye .fq-pw-in:checked + .fq-pw-eye .fq-pw-pupil {
  background: #22d3ee;
  box-shadow: 0 0 8px rgba(34, 211, 238, 0.8);
}
.fx-fq-password-eye .fq-pw-in:checked + .fq-pw-eye .fq-pw-pupil::after {
  transform: rotate(-40deg) scaleX(0);
}`,
});

/* ---------------------------------------------------------- */
/* 25 — 3D keycap press toggle                                */
/* ---------------------------------------------------------- */
fx({
  id: "fq-keycap-press",
  name: "Mechanical Keycap",
  fa: "کلید مکانیکی",
  description:
    "A chunky mechanical keycap toggled by a hidden checkbox: pressed state sinks it into the deck with a green underglow.",
  faDescription:
    "کلید مکانیکی تپنده‌ای که با چک‌باکس پنهان کنترل می‌شود: حالت فشرده آن را در بدنه فرو می‌برد و زیرآن نور سبز می‌گیرد.",
  tags: ["checkbox", "keyboard", "3d", "press"],
  html: `<label class="fq-key"><input type="checkbox" class="fq-key-in"><span class="fq-key-cap"><span class="fq-key-leg">Enter</span></span></label>`,
  css: `.fx-fq-keycap-press .fq-key {
  display: inline-block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.fx-fq-keycap-press .fq-key-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-keycap-press .fq-key-cap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 52px;
  border-radius: 10px;
  background: linear-gradient(180deg, #3b4657, #232c3a);
  box-shadow: 0 6px 0 #161c26, 0 9px 14px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.14);
  transform: translateY(0);
  transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.2s ease;
  user-select: none;
}
.fx-fq-keycap-press .fq-key-leg {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #cbd5e1;
  transition: color 0.2s ease, text-shadow 0.2s ease;
}
.fx-fq-keycap-press .fq-key-in:checked + .fq-key-cap {
  transform: translateY(6px);
  background: linear-gradient(180deg, #2f6b53, #1f4437);
  box-shadow: 0 0 0 #161c26, 0 2px 5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 0 18px rgba(52, 211, 153, 0.35);
}
.fx-fq-keycap-press .fq-key-in:checked + .fq-key-cap .fq-key-leg {
  color: #6ee7b7;
  text-shadow: 0 0 8px rgba(110, 231, 183, 0.6);
}`,
});

/* ---------------------------------------------------------- */
/* 26 — Volume level toggle (staggered bar ladder + EQ pulse) */
/* ---------------------------------------------------------- */
fx({
  id: "fq-volume-level-toggle",
  name: "Volume Level Toggle",
  fa: "تنظیم صدا",
  description:
    "A speaker pill: muting keeps three collapsed bars, switching it on raises them level by level with staggered springs, then the tallest bars idle as a soft equalizer.",
  faDescription:
    "قرص بلندگو: در حالت بی‌صدا سه میله خوابیده است و با روشن کردن، میله‌ها پلکانی و فنری بالا می‌آیند و بعد به آرامی مثل اکولایزر می‌تپند.",
  tags: ["checkbox", "volume", "audio", "equalizer"],
  html: `<input type="checkbox" id="fq-vlt" class="fq-vlt-in"><label for="fq-vlt" class="fq-vlt-btn"><span class="fq-vlt-spk"></span><span class="fq-vlt-bars"><span class="fq-vlt-b fq-vlt-b1"></span><span class="fq-vlt-b fq-vlt-b2"></span><span class="fq-vlt-b fq-vlt-b3"></span></span></label>`,
  css: `.fx-fq-volume-level-toggle .fq-vlt-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-volume-level-toggle .fq-vlt-btn {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  height: 52px;
  padding: 12px 16px;
  border-radius: 14px;
  background: #141924;
  border: 1.5px solid #2a3345;
  box-sizing: border-box;
  cursor: pointer;
  transition: border-color 0.3s ease;
}
.fx-fq-volume-level-toggle .fq-vlt-spk {
  align-self: center;
  width: 18px;
  height: 18px;
  margin-bottom: 2px;
  background: #94a3b8;
  clip-path: polygon(0 32%, 34% 32%, 68% 2%, 68% 98%, 34% 68%, 0 68%);
  transition: background 0.3s ease;
}
.fx-fq-volume-level-toggle .fq-vlt-bars {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 26px;
}
.fx-fq-volume-level-toggle .fq-vlt-b {
  width: 5px;
  height: 5px;
  border-radius: 3px;
  background: #334155;
  transition: height 0.35s cubic-bezier(0.3, 1.4, 0.4, 1), background 0.3s ease;
}
.fx-fq-volume-level-toggle .fq-vlt-b2 { transition-delay: 0.08s; }
.fx-fq-volume-level-toggle .fq-vlt-b3 { transition-delay: 0.16s; }
.fx-fq-volume-level-toggle .fq-vlt-in:checked + .fq-vlt-btn { border-color: #34d399; }
.fx-fq-volume-level-toggle .fq-vlt-in:checked + .fq-vlt-btn .fq-vlt-spk { background: #34d399; }
.fx-fq-volume-level-toggle .fq-vlt-in:checked + .fq-vlt-btn .fq-vlt-b { background: #34d399; }
.fx-fq-volume-level-toggle .fq-vlt-in:checked + .fq-vlt-btn .fq-vlt-b1 { height: 10px; }
.fx-fq-volume-level-toggle .fq-vlt-in:checked + .fq-vlt-btn .fq-vlt-b2 {
  height: 18px;
  animation: fq-vlt-eq 1.2s ease-in-out 0.5s infinite;
}
.fx-fq-volume-level-toggle .fq-vlt-in:checked + .fq-vlt-btn .fq-vlt-b3 {
  height: 26px;
  animation: fq-vlt-eq 1s ease-in-out 0.4s infinite;
}
@keyframes fq-vlt-eq {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.55); }
}`,
});

/* ---------------------------------------------------------- */
/* 27 — Color swatch picker (radios + ring + name caption)    */
/* ---------------------------------------------------------- */
fx({
  id: "fq-color-swatch-pick",
  name: "Color Swatch Picker",
  fa: "انتخاب رنگ",
  description:
    "Four radio swatches: the chosen one scales up behind its color ring while a caption below announces the name in matching ink.",
  faDescription:
    "چهار نمونه‌رنگ رادیویی: رنگ انتخاب‌شده با حلقه هم‌رنگ خود بزرگ می‌شود و زیرنویس، نام آن را با همان جوهر اعلام می‌کند.",
  tags: ["radio", "color", "picker", "swatch"],
  html: `<input type="radio" name="fq-csw" id="fq-csw-1" class="fq-csw-in" checked><input type="radio" name="fq-csw" id="fq-csw-2" class="fq-csw-in"><input type="radio" name="fq-csw" id="fq-csw-3" class="fq-csw-in"><input type="radio" name="fq-csw" id="fq-csw-4" class="fq-csw-in"><span class="fq-csw-row"><label for="fq-csw-1" class="fq-csw-sw fq-csw-c1"></label><label for="fq-csw-2" class="fq-csw-sw fq-csw-c2"></label><label for="fq-csw-3" class="fq-csw-sw fq-csw-c3"></label><label for="fq-csw-4" class="fq-csw-sw fq-csw-c4"></label></span><span class="fq-csw-name"></span>`,
  css: `.fx-fq-color-swatch-pick {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.fx-fq-color-swatch-pick .fq-csw-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-color-swatch-pick .fq-csw-row {
  display: flex;
  gap: 15px;
}
.fx-fq-color-swatch-pick .fq-csw-sw {
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
  transform: scale(0.92);
  transition: transform 0.3s cubic-bezier(0.3, 1.5, 0.5, 1);
}
.fx-fq-color-swatch-pick .fq-csw-c1 { --ring: #fb7185; background: linear-gradient(145deg, #fb7185, #e11d48); }
.fx-fq-color-swatch-pick .fq-csw-c2 { --ring: #22d3ee; background: linear-gradient(145deg, #67e8f9, #0891b2); }
.fx-fq-color-swatch-pick .fq-csw-c3 { --ring: #fbbf24; background: linear-gradient(145deg, #fcd34d, #d97706); }
.fx-fq-color-swatch-pick .fq-csw-c4 { --ring: #a78bfa; background: linear-gradient(145deg, #c4b5fd, #7c3aed); }
.fx-fq-color-swatch-pick .fq-csw-sw::after {
  content: "";
  position: absolute;
  inset: -7px;
  border-radius: 50%;
  border: 2.5px solid var(--ring, #ffffff);
  opacity: 0;
  transform: scale(1.3);
  transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.3, 1.5, 0.5, 1);
}
.fx-fq-color-swatch-pick .fq-csw-name {
  min-height: 18px;
  font-size: 13.5px;
  font-weight: 700;
}
.fx-fq-color-swatch-pick .fq-csw-name::after {
  content: "یک رنگ را بردار";
  color: #94a3b8;
  font-weight: 600;
}
.fx-fq-color-swatch-pick #fq-csw-1:checked ~ .fq-csw-row .fq-csw-c1,
.fx-fq-color-swatch-pick #fq-csw-2:checked ~ .fq-csw-row .fq-csw-c2,
.fx-fq-color-swatch-pick #fq-csw-3:checked ~ .fq-csw-row .fq-csw-c3,
.fx-fq-color-swatch-pick #fq-csw-4:checked ~ .fq-csw-row .fq-csw-c4 {
  transform: scale(1.1);
}
.fx-fq-color-swatch-pick #fq-csw-1:checked ~ .fq-csw-row .fq-csw-c1::after,
.fx-fq-color-swatch-pick #fq-csw-2:checked ~ .fq-csw-row .fq-csw-c2::after,
.fx-fq-color-swatch-pick #fq-csw-3:checked ~ .fq-csw-row .fq-csw-c3::after,
.fx-fq-color-swatch-pick #fq-csw-4:checked ~ .fq-csw-row .fq-csw-c4::after {
  opacity: 1;
  transform: scale(1);
}
.fx-fq-color-swatch-pick #fq-csw-1:checked ~ .fq-csw-name::after { content: "مرجانی"; color: #fb7185; }
.fx-fq-color-swatch-pick #fq-csw-2:checked ~ .fq-csw-name::after { content: "فیروزه‌ای"; color: #22d3ee; }
.fx-fq-color-swatch-pick #fq-csw-3:checked ~ .fq-csw-name::after { content: "کهربایی"; color: #fbbf24; }
.fx-fq-color-swatch-pick #fq-csw-4:checked ~ .fq-csw-name::after { content: "بنفش"; color: #a78bfa; }`,
});

/* ---------------------------------------------------------- */
/* 28 — Grade picker with ink-stamp effect                    */
/* ---------------------------------------------------------- */
fx({
  id: "fq-grade-picker",
  name: "Ink-Stamp Grade Picker",
  fa: "انتخاب نمره با مهر",
  description:
    "Pick a grade and it slams down like a rubber stamp: tilted, red-inked and slightly blurred on impact before settling.",
  faDescription:
    "نمره‌ای را انتخاب کن تا مثل مهر لاستیکی کوبیده شود: کج، با جوهر سرخ و کمی محو از شدت ضربه، بعد آرام می‌گیرد.",
  tags: ["radio", "grade", "stamp", "picker"],
  html: `<input type="radio" name="fq-grd" id="fq-grd-a1" class="fq-grd-in"><input type="radio" name="fq-grd" id="fq-grd-a2" class="fq-grd-in"><input type="radio" name="fq-grd" id="fq-grd-b" class="fq-grd-in"><span class="fq-grd-row"><label for="fq-grd-a1" class="fq-grd-opt">A+</label><label for="fq-grd-a2" class="fq-grd-opt">A</label><label for="fq-grd-b" class="fq-grd-opt">B</label></span>`,
  css: `.fx-fq-grade-picker .fq-grd-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-grade-picker .fq-grd-row {
  display: flex;
  gap: 16px;
}
.fx-fq-grade-picker .fq-grd-opt {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border: 2px dashed #3f4a5c;
  border-radius: 10px;
  color: #64748b;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  user-select: none;
  transition: color 0.25s ease, border-color 0.25s ease;
}
.fx-fq-grade-picker .fq-grd-opt:hover {
  color: #94a3b8;
  border-color: #64748b;
}
.fx-fq-grade-picker #fq-grd-a1:checked ~ .fq-grd-row .fq-grd-opt:nth-child(1),
.fx-fq-grade-picker #fq-grd-a2:checked ~ .fq-grd-row .fq-grd-opt:nth-child(2),
.fx-fq-grade-picker #fq-grd-b:checked ~ .fq-grd-row .fq-grd-opt:nth-child(3) {
  border: 3px solid #ef4444;
  color: #ef4444;
  text-shadow: 0 0 1px rgba(239, 68, 68, 0.5);
  animation: fq-grd-stamp 0.45s cubic-bezier(0.2, 1.4, 0.4, 1);
}
@keyframes fq-grd-stamp {
  0% { opacity: 0; transform: rotate(-7deg) scale(2.2); filter: blur(2px); }
  60% { opacity: 1; transform: rotate(-7deg) scale(0.94); filter: blur(0); }
  100% { opacity: 1; transform: rotate(-7deg) scale(1); filter: blur(0); }
}`,
});

/* ---------------------------------------------------------- */
/* 29 — Emoji rate (faces pop, rest desaturate)               */
/* ---------------------------------------------------------- */
fx({
  id: "fq-emoji-rate",
  name: "Emoji Rate",
  fa: "امتیاز شکلکی",
  description:
    "Three mood faces as radios: the chosen face pops with a playful rotation-twist while the others stay desaturated and shy.",
  faDescription:
    "سه صورت حالت به‌جای رادیو: صورت انتخاب‌شده با پیچ و چرخش شیطان‌مستانه می‌پرد و بقیه بی‌رنگ و خجالتی می‌مانند.",
  tags: ["radio", "emoji", "feedback", "rating"],
  html: `<input type="radio" name="fq-emr" id="fq-emr-1" class="fq-emr-in"><input type="radio" name="fq-emr" id="fq-emr-2" class="fq-emr-in"><input type="radio" name="fq-emr" id="fq-emr-3" class="fq-emr-in"><span class="fq-emr-row"><label for="fq-emr-1" class="fq-emr-f">😟</label><label for="fq-emr-2" class="fq-emr-f">😐</label><label for="fq-emr-3" class="fq-emr-f">😍</label></span>`,
  css: `.fx-fq-emoji-rate .fq-emr-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-emoji-rate .fq-emr-row {
  display: flex;
  gap: 20px;
}
.fx-fq-emoji-rate .fq-emr-f {
  font-size: 38px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  filter: grayscale(0.85);
  opacity: 0.5;
  transform: scale(0.9);
  transition: filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
}
.fx-fq-emoji-rate .fq-emr-f:hover {
  filter: grayscale(0);
  opacity: 0.85;
  transform: scale(1.05);
}
.fx-fq-emoji-rate #fq-emr-1:checked ~ .fq-emr-row .fq-emr-f:nth-child(1),
.fx-fq-emoji-rate #fq-emr-2:checked ~ .fq-emr-row .fq-emr-f:nth-child(2),
.fx-fq-emoji-rate #fq-emr-3:checked ~ .fq-emr-row .fq-emr-f:nth-child(3) {
  filter: grayscale(0) drop-shadow(0 4px 12px rgba(250, 204, 21, 0.35));
  opacity: 1;
  transform: scale(1.15);
  animation: fq-emr-pop 0.5s cubic-bezier(0.3, 1.8, 0.5, 1);
}
@keyframes fq-emr-pop {
  0% { transform: scale(0.7) rotate(-12deg); }
  60% { transform: scale(1.25) rotate(6deg); }
  100% { transform: scale(1.15) rotate(0deg); }
}`,
});

/* ---------------------------------------------------------- */
/* 30 — Checkout pay button (lock → check success)            */
/* ---------------------------------------------------------- */
fx({
  id: "fq-otp-checkout-pay",
  name: "Checkout Pay Button",
  fa: "دکمه پرداخت",
  description:
    "A checkout button: locked at first, checking it squashes the lock away, draws a success check, floods green and swaps the caption to done.",
  faDescription:
    "دکمه پرداخت: ابتدا قفل است؛ با تیک زدن، قفل له و محو می‌شود، تیک موفقیت کشیده می‌شود، دکمه سبز می‌شود و متن به «پرداخت شد» عوض می‌شود.",
  tags: ["checkbox", "payment", "success", "checkout"],
  html: `<input type="checkbox" id="fq-pay" class="fq-pay-in"><label for="fq-pay" class="fq-pay-btn"><span class="fq-pay-ico"><span class="fq-pay-lock"><span class="fq-pay-shackle"></span><span class="fq-pay-body"></span></span><span class="fq-pay-check"></span></span><span class="fq-pay-txt fq-pay-t1">پرداخت</span><span class="fq-pay-txt fq-pay-t2">پرداخت شد</span></label>`,
  css: `.fx-fq-otp-checkout-pay .fq-pay-in {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.fx-fq-otp-checkout-pay .fq-pay-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 190px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  box-shadow: 0 6px 18px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25);
  cursor: pointer;
  transition: background 0.4s ease, box-shadow 0.4s ease, transform 0.15s ease;
}
.fx-fq-otp-checkout-pay .fq-pay-btn:active { transform: scale(0.97); }
.fx-fq-otp-checkout-pay .fq-pay-ico {
  position: relative;
  width: 16px;
  height: 16px;
}
.fx-fq-otp-checkout-pay .fq-pay-lock {
  position: absolute;
  inset: 0;
  transition: transform 0.35s cubic-bezier(0.4, -0.3, 0.6, 1), opacity 0.3s ease;
}
.fx-fq-otp-checkout-pay .fq-pay-shackle {
  position: absolute;
  top: -8px;
  left: 2px;
  width: 12px;
  height: 10px;
  border: 2.5px solid #ffffff;
  border-bottom: 0;
  border-radius: 8px 8px 0 0;
}
.fx-fq-otp-checkout-pay .fq-pay-body {
  position: absolute;
  inset: 0;
  border-radius: 3px;
  background: #ffffff;
}
.fx-fq-otp-checkout-pay .fq-pay-check {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 19px;
  height: 10px;
  margin: -7px 0 0 -12px;
  border-right: 3.5px solid #ffffff;
  border-bottom: 3.5px solid #ffffff;
  border-radius: 2px;
  transform: rotate(-45deg) scale(0);
  transition: transform 0.3s cubic-bezier(0.3, 1.6, 0.5, 1) 0.15s;
}
.fx-fq-otp-checkout-pay .fq-pay-txt {
  font-size: 14.5px;
  font-weight: 800;
  color: #ffffff;
  transition: opacity 0.25s ease, transform 0.3s ease;
}
.fx-fq-otp-checkout-pay .fq-pay-t2 {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  opacity: 0;
  transform: translateY(14px);
}
.fx-fq-otp-checkout-pay .fq-pay-in:checked + .fq-pay-btn {
  background: linear-gradient(135deg, #10b981, #059669);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.25);
  animation: fq-pay-success 0.5s ease;
}
.fx-fq-otp-checkout-pay .fq-pay-in:checked + .fq-pay-btn .fq-pay-lock {
  transform: scale(0.4) translateY(6px);
  opacity: 0;
}
.fx-fq-otp-checkout-pay .fq-pay-in:checked + .fq-pay-btn .fq-pay-check {
  transform: rotate(-45deg) scale(1);
}
.fx-fq-otp-checkout-pay .fq-pay-in:checked + .fq-pay-btn .fq-pay-t1 {
  opacity: 0;
  transform: translateY(-14px);
}
.fx-fq-otp-checkout-pay .fq-pay-in:checked + .fq-pay-btn .fq-pay-t2 {
  opacity: 1;
  transform: translateY(0);
}
@keyframes fq-pay-success {
  0% { transform: scale(1); }
  40% { transform: scale(1.05); }
  100% { transform: scale(1); }
}`,
});
