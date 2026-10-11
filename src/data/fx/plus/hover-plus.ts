import type { CssEffect } from "../types";

export const hoverEffectsPlus: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  hoverEffectsPlus.push({ category: "hover", interaction: "hover", ...e } as CssEffect);
}

/* 1 — underline grows from the exact center outward */
fx({
  id: "hq-underline-center-out",
  name: "Underline Center-Out",
  fa: "زیرخط از مرکز",
  description: "A gradient underline grows outward from the exact center of the link while the label lifts one pixel.",
  faDescription: "زیرخط گرادیانی از دقیقاً مرکز لینک به دو طرف رشد می‌کند و متن یک پیکسل بالا می‌آید.",
  tags: ["underline", "gradient", "link", "hover"],
  html: `<a class="uco-link">افکت هاور</a>`,
  css: `.fx-hq-underline-center-out .uco-link {
  position: relative;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  color: #e9d5ff;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 7px;
  transition: transform 0.3s ease;
}
.fx-hq-underline-center-out .uco-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(90deg, #f0abfc, #67e8f9);
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-hq-underline-center-out .uco-link:hover {
  transform: translateY(-2px);
}
.fx-hq-underline-center-out .uco-link:hover::after {
  transform: translateX(-50%) scaleX(1);
}`,
});

/* 2 — thin line exits, thick line slides in */
fx({
  id: "hq-underline-thick-swap",
  name: "Underline Thick Swap",
  fa: "تعویض زیرخط نازک به کلفت",
  description: "The resting hairline shrinks away while a thick ribbon slides in from the other side.",
  faDescription: "خط نازک حالت عادی جمع می‌شود و هم‌زمان یک روبان کلفت از سمت دیگر وارد می‌شود.",
  tags: ["underline", "swap", "thick", "hover"],
  html: `<a class="uts-link">مطالعه مقاله</a>`,
  css: `.fx-hq-underline-thick-swap .uts-link {
  position: relative;
  display: inline-block;
  font-size: 19px;
  font-weight: 600;
  color: #cbd5f5;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 8px;
  transition: color 0.3s ease;
}
.fx-hq-underline-thick-swap .uts-link::before,
.fx-hq-underline-thick-swap .uts-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: transform 0.35s ease;
}
.fx-hq-underline-thick-swap .uts-link::before {
  height: 2px;
  background: #64748b;
  transform: scaleX(1);
  transform-origin: left;
}
.fx-hq-underline-thick-swap .uts-link::after {
  height: 6px;
  border-radius: 4px;
  background: linear-gradient(90deg, #d946ef, #fbbf24);
  transform: scaleX(0);
  transform-origin: right;
}
.fx-hq-underline-thick-swap .uts-link:hover {
  color: #f5d0fe;
}
.fx-hq-underline-thick-swap .uts-link:hover::before {
  transform: scaleX(0);
  transform-origin: right;
}
.fx-hq-underline-thick-swap .uts-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
  transition-delay: 0.12s;
}`,
});

/* 3 — two lines squeeze the text between them */
fx({
  id: "hq-dual-underline-squeeze",
  name: "Dual Underline Squeeze",
  fa: "فشرده‌سازی دو خطی",
  description: "A line above and a line below draw in and squeeze inward toward the text at the same time.",
  faDescription: "خط بالایی و خط پایینی هم‌زمان ترسیم شده و به سمت متن فشرده می‌شوند.",
  tags: ["underline", "squeeze", "dual", "hover"],
  html: `<a class="dus-link">متن فشرده</a>`,
  css: `.fx-hq-dual-underline-squeeze .dus-link {
  position: relative;
  display: inline-block;
  font-size: 19px;
  font-weight: 700;
  color: #fde68a;
  text-decoration: none;
  cursor: pointer;
  padding: 6px 4px;
  transition: color 0.3s ease;
}
.fx-hq-dual-underline-squeeze .dus-link::before,
.fx-hq-dual-underline-squeeze .dus-link::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fbbf24;
  transform: scaleX(0);
  transition: transform 0.35s ease, top 0.35s ease, bottom 0.35s ease;
}
.fx-hq-dual-underline-squeeze .dus-link::before {
  top: -4px;
  transform-origin: right;
}
.fx-hq-dual-underline-squeeze .dus-link::after {
  bottom: -4px;
  transform-origin: left;
}
.fx-hq-dual-underline-squeeze .dus-link:hover {
  color: #fef3c7;
}
.fx-hq-dual-underline-squeeze .dus-link:hover::before {
  top: -1px;
  transform: scaleX(1);
}
.fx-hq-dual-underline-squeeze .dus-link:hover::after {
  bottom: -1px;
  transform: scaleX(1);
}`,
});

/* 4 — rectangle outline slices in from two opposite corners */
fx({
  id: "hq-box-slice",
  name: "Box Slice Outline",
  fa: "برش کادر از گوشه",
  description: "Two L-shaped halves of a rectangle outline slice in from opposite corners and lock together.",
  faDescription: "دو نیمه L شکلِ کادر از گوشه‌های مقابل وارد شده و به هم قفل می‌شوند.",
  tags: ["border", "slice", "outline", "hover"],
  html: `<a class="bxs-box">کادر برشی</a>`,
  css: `.fx-hq-box-slice .bxs-box {
  position: relative;
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  color: #f9a8d4;
  text-decoration: none;
  cursor: pointer;
  padding: 12px 26px;
  transition: color 0.3s ease;
}
.fx-hq-box-slice .bxs-box::before,
.fx-hq-box-slice .bxs-box::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: transform 0.35s ease, opacity 0.3s ease;
  pointer-events: none;
}
.fx-hq-box-slice .bxs-box::before {
  top: 0;
  left: 0;
  border-top: 2px solid #f472b6;
  border-left: 2px solid #f472b6;
  transform: translate(-10px, -10px);
}
.fx-hq-box-slice .bxs-box::after {
  bottom: 0;
  right: 0;
  border-bottom: 2px solid #67e8f9;
  border-right: 2px solid #67e8f9;
  transform: translate(10px, 10px);
}
.fx-hq-box-slice .bxs-box:hover {
  color: #fbcfe8;
}
.fx-hq-box-slice .bxs-box:hover::before,
.fx-hq-box-slice .bxs-box:hover::after {
  opacity: 1;
  transform: translate(0, 0);
}`,
});

/* 5 — solid fill slides up from the bottom */
fx({
  id: "hq-bg-slide-up-fill",
  name: "Background Slide-Up Fill",
  fa: "پرشدن پس‌زمینه از پایین",
  description: "A solid gradient panel slides up from the bottom edge and floods the pill while the label darkens.",
  faDescription: "یک پنل گرادیانی از لبه پایین بالا می‌آید و قرص را پر می‌کند؛ متن تیره می‌شود.",
  tags: ["fill", "slide", "button", "hover"],
  html: `<a class="bsu-btn">دریافت فایل</a>`,
  css: `.fx-hq-bg-slide-up-fill .bsu-btn {
  position: relative;
  display: inline-block;
  overflow: hidden;
  font-size: 16px;
  font-weight: 700;
  color: #67e8f9;
  text-decoration: none;
  cursor: pointer;
  padding: 11px 26px;
  border-radius: 999px;
  border: 1px solid rgba(103, 232, 249, 0.45);
  transition: color 0.3s ease 0.08s;
  z-index: 1;
}
.fx-hq-bg-slide-up-fill .bsu-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #22d3ee, #6366f1);
  transform: translateY(101%);
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: -1;
}
.fx-hq-bg-slide-up-fill .bsu-btn:hover {
  color: #0b1020;
  border-color: #22d3ee;
}
.fx-hq-bg-slide-up-fill .bsu-btn:hover::before {
  transform: translateY(0);
}`,
});

/* 6 — solid fill drops down from the top */
fx({
  id: "hq-bg-slide-down-fill",
  name: "Background Slide-Down Fill",
  fa: "پرشدن پس‌زمینه از بالا",
  description: "A rounded gradient curtain drops from the top edge and fills the pill in the opposite direction.",
  faDescription: "یک پرده گرادیان گرد از لبه بالا پایین می‌آید و قرص را در جهت معکوس پر می‌کند.",
  tags: ["fill", "slide", "curtain", "hover"],
  html: `<a class="bsd-btn">شروع پروژه</a>`,
  css: `.fx-hq-bg-slide-down-fill .bsd-btn {
  position: relative;
  display: inline-block;
  overflow: hidden;
  font-size: 16px;
  font-weight: 700;
  color: #f9a8d4;
  text-decoration: none;
  cursor: pointer;
  padding: 11px 26px;
  border-radius: 999px;
  border: 1px solid rgba(249, 168, 212, 0.45);
  transition: color 0.3s ease 0.08s;
  z-index: 1;
}
.fx-hq-bg-slide-down-fill .bsd-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 0 0 60% 60% / 0 0 22px 22px;
  background: linear-gradient(180deg, #f472b6, #a78bfa);
  transform: translateY(-101%);
  transition: transform 0.42s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: -1;
}
.fx-hq-bg-slide-down-fill .bsd-btn:hover {
  color: #2a0a2e;
  border-color: #f472b6;
}
.fx-hq-bg-slide-down-fill .bsd-btn:hover::before {
  transform: translateY(0);
}`,
});

/* 7 — diagonal gradient grows from the bottom corner */
fx({
  id: "hq-bg-slide-diag-fill",
  name: "Diagonal Fill Sweep",
  fa: "پرشدن مورب پس‌زمینه",
  description: "A diagonal gradient blooms from the bottom corner and sweeps across the whole button.",
  faDescription: "گرادیان مورب از گوشه پایین جوانه می‌زند و کل دکمه را درمی‌نوردد.",
  tags: ["fill", "diagonal", "gradient", "hover"],
  html: `<a class="bgd-btn">تایید نهایی</a>`,
  css: `.fx-hq-bg-slide-diag-fill .bgd-btn {
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  color: #6ee7b7;
  text-decoration: none;
  cursor: pointer;
  padding: 11px 26px;
  border-radius: 12px;
  border: 1px solid rgba(52, 211, 153, 0.45);
  background-image: linear-gradient(135deg, #34d399, #0ea5e9);
  background-repeat: no-repeat;
  background-position: 0% 100%;
  background-size: 0% 0%;
  transition: background-size 0.5s cubic-bezier(0.65, 0, 0.35, 1), color 0.3s ease 0.12s, border-color 0.3s ease;
}
.fx-hq-bg-slide-diag-fill .bgd-btn:hover {
  color: #052e1f;
  border-color: #34d399;
  background-size: 250% 250%;
}`,
});

/* 8 — circle expands from the exact center behind the text */
fx({
  id: "hq-circle-fill-center",
  name: "Circle Fill Center",
  fa: "پرشدن دایره از مرکز",
  description: "A round disc scales up from the center of the link and paints a warm circle behind the label.",
  faDescription: "یک قرص گرد از مرکز لینک بزرگ می‌شود و دایره‌ای گرم پشت متن می‌سازد.",
  tags: ["circle", "fill", "center", "hover"],
  html: `<a class="cfc-link">دایره طلایی</a>`,
  css: `.fx-hq-circle-fill-center .cfc-link {
  position: relative;
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  color: #fde68a;
  text-decoration: none;
  cursor: pointer;
  padding: 9px 22px;
  transition: color 0.3s ease 0.1s;
  z-index: 1;
}
.fx-hq-circle-fill-center .cfc-link::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #fbbf24;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: -1;
}
.fx-hq-circle-fill-center .cfc-link:hover {
  color: #713f12;
}
.fx-hq-circle-fill-center .cfc-link:hover::before {
  transform: translate(-50%, -50%) scale(1);
}`,
});

/* 9 — the four borders draw one after another */
fx({
  id: "hq-border-trace-seq",
  name: "Border Trace Sequence",
  fa: "ترسیم ترتیبی حاشیه",
  description: "The four sides of the frame draw one after another, tracing clockwise around the button.",
  faDescription: "چهار ضلع قاب یکی‌یکی و به ترتیب ساعتگرد دور دکمه ترسیم می‌شوند.",
  tags: ["border", "trace", "sequence", "hover"],
  html: `<a class="bts-btn"><i class="ts-t"></i><i class="ts-l"></i><i class="ts-b"></i><i class="ts-r"></i><span class="ts-tx">قاب متحرک</span></a>`,
  css: `.fx-hq-border-trace-seq .bts-btn {
  position: relative;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  color: #f0abfc;
  cursor: pointer;
  padding: 12px 26px;
}
.fx-hq-border-trace-seq .ts-tx {
  position: relative;
  z-index: 1;
}
.fx-hq-border-trace-seq .bts-btn i {
  position: absolute;
  background: #f0abfc;
  transition: transform 0.12s ease 0s;
}
.fx-hq-border-trace-seq .ts-t {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: right;
}
.fx-hq-border-trace-seq .ts-l {
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  transform: scaleY(0);
  transform-origin: top;
}
.fx-hq-border-trace-seq .ts-b {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
}
.fx-hq-border-trace-seq .ts-r {
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  transform: scaleY(0);
  transform-origin: bottom;
}
.fx-hq-border-trace-seq .bts-btn:hover .ts-t {
  transform: scaleX(1);
  transition: transform 0.2s linear 0s;
}
.fx-hq-border-trace-seq .bts-btn:hover .ts-l {
  transform: scaleY(1);
  transition: transform 0.2s linear 0.2s;
}
.fx-hq-border-trace-seq .bts-btn:hover .ts-b {
  transform: scaleX(1);
  transition: transform 0.2s linear 0.4s;
}
.fx-hq-border-trace-seq .bts-btn:hover .ts-r {
  transform: scaleY(1);
  transition: transform 0.2s linear 0.6s;
}`,
});

/* 10 — corner brackets fly in from outside the four corners */
fx({
  id: "hq-corner-brackets-in",
  name: "Corner Brackets In",
  fa: "براکت گوشه‌ها",
  description: "Four camera-viewfinder brackets fly in from outside the corners and frame the label.",
  faDescription: "چهار براکت ویزور دوربین از بیرون گوشه‌ها وارد شده و متن را قاب می‌گیرند.",
  tags: ["brackets", "corners", "frame", "hover"],
  html: `<span class="cbi-box"><i class="cbi-k cbi-k1"></i><i class="cbi-k cbi-k2"></i><i class="cbi-k cbi-k3"></i><i class="cbi-k cbi-k4"></i><span class="cbi-tx">قاب گوشه</span></span>`,
  css: `.fx-hq-corner-brackets-in .cbi-box {
  position: relative;
  display: inline-block;
  font-size: 17px;
  font-weight: 700;
  color: #67e8f9;
  cursor: pointer;
  padding: 13px 28px;
}
.fx-hq-corner-brackets-in .cbi-tx {
  position: relative;
  z-index: 1;
}
.fx-hq-corner-brackets-in .cbi-k {
  position: absolute;
  width: 13px;
  height: 13px;
  border: 0 solid #22d3ee;
  opacity: 0;
  transition: transform 0.32s ease, opacity 0.25s ease;
}
.fx-hq-corner-brackets-in .cbi-k1 {
  top: -6px;
  right: -6px;
  border-top-width: 2px;
  border-right-width: 2px;
  transform: translate(9px, -9px);
}
.fx-hq-corner-brackets-in .cbi-k2 {
  bottom: -6px;
  right: -6px;
  border-bottom-width: 2px;
  border-right-width: 2px;
  transform: translate(9px, 9px);
  transition-delay: 0.07s;
}
.fx-hq-corner-brackets-in .cbi-k3 {
  bottom: -6px;
  left: -6px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  transform: translate(-9px, 9px);
  transition-delay: 0.14s;
}
.fx-hq-corner-brackets-in .cbi-k4 {
  top: -6px;
  left: -6px;
  border-top-width: 2px;
  border-left-width: 2px;
  transform: translate(-9px, -9px);
  transition-delay: 0.21s;
}
.fx-hq-corner-brackets-in .cbi-box:hover .cbi-k {
  opacity: 1;
  transform: translate(0, 0);
}`,
});

/* 11 — an arrow slides in beside the label */
fx({
  id: "hq-arrow-nudge",
  name: "Arrow Nudge",
  fa: "پرش پیکان",
  description: "A hidden arrow unfolds into view beside the label, pushing it gently forward.",
  faDescription: "پیکانی پنهان کنار متن باز می‌شود و آن را به‌آرامی به جلو هل می‌دهد.",
  tags: ["arrow", "slide", "link", "hover"],
  html: `<a class="arn-link"><span class="arn-tx">ادامه مطلب</span><span class="arn-ar">←</span></a>`,
  css: `.fx-hq-arrow-nudge .arn-link {
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: #a5b4fc;
  text-decoration: none;
  cursor: pointer;
  padding: 6px 2px;
  transition: color 0.3s ease;
}
.fx-hq-arrow-nudge .arn-ar {
  display: inline-block;
  overflow: hidden;
  max-width: 0;
  margin-right: 0;
  opacity: 0;
  transform: translateX(-10px);
  color: #f0abfc;
  transition: max-width 0.35s ease, opacity 0.3s ease, transform 0.35s ease, margin-right 0.35s ease;
}
.fx-hq-arrow-nudge .arn-link:hover {
  color: #e0e7ff;
}
.fx-hq-arrow-nudge .arn-link:hover .arn-ar {
  max-width: 1.4em;
  margin-right: 8px;
  opacity: 1;
  transform: translateX(0);
}`,
});

/* 12 — two stacked labels roll vertically like a slot */
fx({
  id: "hq-text-swap-roll",
  name: "Vertical Label Roll",
  fa: "غلتش عمودی متن",
  description: "The label rolls up like a slot machine and a gradient twin rolls in from below.",
  faDescription: "متن مثل سالت‌ماشین به بالا می‌غلتد و نسخه گرادیانی از پایین جای آن را می‌گیرد.",
  tags: ["roll", "swap", "text", "hover"],
  html: `<a class="tsr-link"><span class="tsr-box"><span class="tsr-a">مشاهده نمونه‌کار</span><span class="tsr-b">مشاهده نمونه‌کار</span></span></a>`,
  css: `.fx-hq-text-swap-roll .tsr-link {
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 2px solid rgba(240, 171, 252, 0.35);
  padding-bottom: 4px;
}
.fx-hq-text-swap-roll .tsr-box {
  display: inline-flex;
  flex-direction: column;
  height: 1.5em;
  overflow: hidden;
  font-size: 18px;
  font-weight: 700;
}
.fx-hq-text-swap-roll .tsr-box span {
  display: block;
  line-height: 1.5em;
  transition: transform 0.42s cubic-bezier(0.76, 0, 0.24, 1);
}
.fx-hq-text-swap-roll .tsr-a {
  color: #e2e8f0;
}
.fx-hq-text-swap-roll .tsr-b {
  background: linear-gradient(90deg, #f0abfc, #67e8f9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.fx-hq-text-swap-roll .tsr-link:hover .tsr-box span {
  transform: translateY(-1.5em);
}`,
});

/* 13 — letters flip in 3D one by one */
fx({
  id: "hq-letters-flip-in",
  name: "Letters 3D Flip",
  fa: "فلیپ سه‌بعدی حروف",
  description: "Each letter flips in from a folded 3D state with a staggered cascade.",
  faDescription: "هر حرف از حالت تاشده سه‌بعدی با تأخیر پلکانی به داخل فلیپ می‌شود.",
  tags: ["letters", "3d", "flip", "stagger"],
  html: `<a class="lfi-word"><b>H</b><b>O</b><b>V</b><b>E</b><b>R</b><b class="lfi-g">&nbsp;</b><b>M</b><b>E</b></a>`,
  css: `.fx-hq-letters-flip-in .lfi-word {
  display: inline-flex;
  perspective: 420px;
  font-size: 24px;
  font-weight: 800;
  color: #fda4af;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 1px;
}
.fx-hq-letters-flip-in .lfi-word b {
  display: inline-block;
  transform-origin: 50% 100%;
}
.fx-hq-letters-flip-in .lfi-word:hover b {
  animation: hq-lfi-flip 0.5s ease both;
}
.fx-hq-letters-flip-in .lfi-word:hover b:nth-child(1) { animation-delay: 0s; }
.fx-hq-letters-flip-in .lfi-word:hover b:nth-child(2) { animation-delay: 0.04s; }
.fx-hq-letters-flip-in .lfi-word:hover b:nth-child(3) { animation-delay: 0.08s; }
.fx-hq-letters-flip-in .lfi-word:hover b:nth-child(4) { animation-delay: 0.12s; }
.fx-hq-letters-flip-in .lfi-word:hover b:nth-child(5) { animation-delay: 0.16s; }
.fx-hq-letters-flip-in .lfi-word:hover b:nth-child(6) { animation-delay: 0.2s; }
.fx-hq-letters-flip-in .lfi-word:hover b:nth-child(7) { animation-delay: 0.24s; }
.fx-hq-letters-flip-in .lfi-word:hover b:nth-child(8) { animation-delay: 0.28s; }
@keyframes hq-lfi-flip {
  from {
    transform: rotateX(-95deg) translateY(6px);
    opacity: 0;
  }
  to {
    transform: rotateX(0deg) translateY(0);
    opacity: 1;
  }
}`,
});

/* 14 — concentric rings emit from the link */
fx({
  id: "hq-ripple-rings",
  name: "Ripple Rings",
  fa: "حلقه‌های موجی",
  description: "Concentric rings keep emitting from the outline of the link while it is hovered.",
  faDescription: "حلقه‌های هم‌مرکز تا زمانی که روی لینک هستید پیوسته از آن ساطع می‌شوند.",
  tags: ["ripple", "rings", "pulse", "hover"],
  html: `<a class="rrp-link"><span class="rrp-r rrp-r3"></span><span class="rrp-r rrp-r2"></span><span class="rrp-r rrp-r1"></span><span class="rrp-tx">لینک موجی</span></a>`,
  css: `.fx-hq-ripple-rings .rrp-link {
  position: relative;
  display: inline-block;
  font-size: 17px;
  font-weight: 700;
  color: #7dd3fc;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 24px;
  border-radius: 999px;
  z-index: 1;
}
.fx-hq-ripple-rings .rrp-r {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(56, 189, 248, 0.75);
  border-radius: 999px;
  opacity: 0;
  pointer-events: none;
}
.fx-hq-ripple-rings .rrp-link:hover .rrp-r {
  animation: hq-rrp-emit 1.5s ease-out infinite;
}
.fx-hq-ripple-rings .rrp-link:hover .rrp-r2 {
  animation-delay: 0.5s;
}
.fx-hq-ripple-rings .rrp-link:hover .rrp-r3 {
  animation-delay: 1s;
}
@keyframes hq-rrp-emit {
  0% {
    transform: scale(0.85);
    opacity: 0.9;
  }
  100% {
    transform: scale(1.75);
    opacity: 0;
  }
}`,
});

/* 15 — the text blooms a warm glow and scales slightly */
fx({
  id: "hq-glow-bloom",
  name: "Glow Bloom Text",
  fa: "شکفتن هاله متن",
  description: "The label blooms a layered warm glow and swells a few percent, like a lantern lighting up.",
  faDescription: "متن هاله‌ای لایه‌لایه و گرم می‌گیرد و کمی متورم می‌شود؛ مثل فانوسی که روشن شود.",
  tags: ["glow", "bloom", "text", "hover"],
  html: `<a class="glb-link">فانوس</a>`,
  css: `.fx-hq-glow-bloom .glb-link {
  display: inline-block;
  font-size: 24px;
  font-weight: 800;
  color: #fcd34d;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.35s ease, text-shadow 0.35s ease, transform 0.35s ease;
}
.fx-hq-glow-bloom .glb-link:hover {
  color: #fef9c3;
  transform: scale(1.07);
  text-shadow: 0 0 6px rgba(252, 211, 77, 0.9), 0 0 22px rgba(251, 191, 36, 0.55), 0 0 46px rgba(245, 158, 11, 0.35);
}`,
});

/* 16 — a dead sign buzzes on into full neon */
fx({
  id: "hq-neon-sign-hover",
  name: "Neon Sign Buzz-On",
  fa: "روشن‌شدن نئون",
  description: "The label starts as a dead gray sign, then flickers and buzzes on into full neon while hovered.",
  faDescription: "متن مثل تابلو خاموش خاکستری است و با هاور سوسو می‌زند و نئون کامل روشن می‌شود.",
  tags: ["neon", "flicker", "sign", "hover"],
  previewBg: "radial-gradient(circle at 50% 45%, rgba(217,70,239,0.14), transparent 60%), #0b0714",
  html: `<a class="nsh-sign">OPEN ۲۴</a>`,
  css: `.fx-hq-neon-sign-hover .nsh-sign {
  display: inline-block;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #64748b;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.4s ease;
}
.fx-hq-neon-sign-hover .nsh-sign:hover {
  color: #f5d0fe;
  animation: hq-nsh-buzz 1s linear both;
}
@keyframes hq-nsh-buzz {
  0% { color: #64748b; text-shadow: none; }
  10% { color: #fff; text-shadow: 0 0 4px #f0abfc, 0 0 14px #d946ef, 0 0 34px #a21caf; }
  16% { color: #64748b; text-shadow: none; }
  32% { color: #fff; text-shadow: 0 0 4px #f0abfc, 0 0 14px #d946ef, 0 0 34px #a21caf; }
  37% { color: #64748b; text-shadow: none; }
  52% { color: #fff; text-shadow: 0 0 4px #f0abfc, 0 0 14px #d946ef, 0 0 34px #a21caf; }
  58% { color: #64748b; text-shadow: none; }
  72%, 100% { color: #f5d0fe; text-shadow: 0 0 5px #f0abfc, 0 0 18px #d946ef, 0 0 42px #a21caf; }
}`,
});

/* 17 — a gradient slides across the text via background-clip */
fx({
  id: "hq-gradient-shift-text",
  name: "Gradient Shift Text",
  fa: "سرازش گرادیان متن",
  description: "A triple-color gradient slides across the glyphs thanks to background-clip text.",
  faDescription: "گرادیان سه‌رنگ با ترفند برش پس‌زمینه روی حروف سر می‌خورد.",
  tags: ["gradient", "text", "clip", "hover"],
  html: `<a class="gst-tx">رنگ‌های روان</a>`,
  css: `.fx-hq-gradient-shift-text .gst-tx {
  display: inline-block;
  font-size: 22px;
  font-weight: 800;
  background-image: linear-gradient(90deg, #f0abfc, #67e8f9, #fde68a, #f0abfc);
  background-size: 300% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-decoration: none;
  cursor: pointer;
  transition: background-position 1.1s ease;
}
.fx-hq-gradient-shift-text .gst-tx:hover {
  background-position: 100% 50%;
}`,
});

/* 18 — two icons slide-swap inside a small box */
fx({
  id: "hq-icon-swap-slide",
  name: "Icon Swap Slide",
  fa: "تعویض لغزنده آیکون",
  description: "Inside a tiny window, the mail icon slides out and a checkmark slides in to take its place.",
  faDescription: "در پنجره کوچک، آیکون نامه به بیرون سر می‌خورد و تیک جای آن را می‌گیرد.",
  tags: ["icon", "swap", "slide", "hover"],
  html: `<a class="isw-btn"><span class="isw-box"><span class="isw-i1">✉</span><span class="isw-i2">✓</span></span><span class="isw-tx">ارسال پیام</span></a>`,
  css: `.fx-hq-icon-swap-slide .isw-btn {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 15px;
  font-weight: 700;
  color: #e2e8f0;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 12px;
  background: rgba(240, 171, 252, 0.07);
  border: 1px solid rgba(240, 171, 252, 0.35);
  transition: border-color 0.3s ease, background 0.3s ease;
}
.fx-hq-icon-swap-slide .isw-box {
  position: relative;
  width: 18px;
  height: 18px;
  overflow: hidden;
}
.fx-hq-icon-swap-slide .isw-box span {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 14px;
  transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease;
}
.fx-hq-icon-swap-slide .isw-i1 {
  color: #f0abfc;
}
.fx-hq-icon-swap-slide .isw-i2 {
  color: #67e8f9;
  transform: translateX(-130%);
}
.fx-hq-icon-swap-slide .isw-btn:hover {
  border-color: rgba(103, 232, 249, 0.5);
  background: rgba(103, 232, 249, 0.07);
}
.fx-hq-icon-swap-slide .isw-btn:hover .isw-i1 {
  transform: translateX(130%);
  opacity: 0;
}
.fx-hq-icon-swap-slide .isw-btn:hover .isw-i2 {
  transform: translateX(0);
}`,
});

/* 19 — the button is pushed into the page like a real key */
fx({
  id: "hq-push-3d",
  name: "3D Key Push",
  fa: "فشار کلید سه‌بعدی",
  description: "The button sits on a hard edge shadow; hovering pushes it down flush into the page.",
  faDescription: "دکمه روی سایه‌ای سخت نشسته؛ با هاور مثل کلید واقعی داخل صفحه فرو می‌رود.",
  tags: ["3d", "push", "shadow", "button"],
  html: `<button class="p3d-btn">فشار بده</button>`,
  css: `.fx-hq-push-3d .p3d-btn {
  display: inline-block;
  font-size: 16px;
  font-weight: 800;
  font-family: inherit;
  color: #fff;
  background: linear-gradient(180deg, #8b5cf6, #6d28d9);
  border: none;
  border-radius: 12px;
  padding: 11px 28px;
  cursor: pointer;
  box-shadow: 0 6px 0 #4c1d95, 0 13px 22px rgba(76, 29, 149, 0.45);
  transition: transform 0.13s ease, box-shadow 0.13s ease;
}
.fx-hq-push-3d .p3d-btn:hover {
  transform: translateY(5px);
  box-shadow: 0 1px 0 #4c1d95, 0 4px 9px rgba(76, 29, 149, 0.4);
}`,
});

/* 20 — a soft rubbery press with springy return */
fx({
  id: "hq-depth-press-soft",
  name: "Soft Depth Press",
  fa: "فشار نرم لاستیکی",
  description: "The pill squishes down with an inner shadow like soft rubber, then springs back on leave.",
  faDescription: "قرص مثل لاستیک نرم با سایه داخلی له می‌شود و هنگام خروج فنری برمی‌گردد.",
  tags: ["press", "soft", "squish", "button"],
  html: `<button class="dps-btn">لاستیکی</button>`,
  css: `.fx-hq-depth-press-soft .dps-btn {
  display: inline-block;
  font-size: 16px;
  font-weight: 800;
  font-family: inherit;
  color: #3b0a24;
  background: linear-gradient(180deg, #f9a8d4, #f472b6);
  border: none;
  border-radius: 14px;
  padding: 12px 30px;
  cursor: pointer;
  box-shadow: 0 9px 18px rgba(244, 114, 182, 0.35), inset 0 -3px 0 rgba(0, 0, 0, 0.18);
  transition: transform 0.28s cubic-bezier(0.34, 1.8, 0.5, 1), box-shadow 0.28s ease;
}
.fx-hq-depth-press-soft .dps-btn:hover {
  transform: scale(0.93);
  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.35), 0 2px 6px rgba(244, 114, 182, 0.25);
}`,
});

/* 21 — the pill tilts back toward the top and lifts */
fx({
  id: "hq-tilt-lift",
  name: "Tilt & Lift Card",
  fa: "کج‌شدن و اوج‌گیری",
  description: "Hovering tips the chip backward in fake 3D while it lifts and casts a deeper shadow.",
  faDescription: "با هاور، چیپ در شبه‌سه‌بعد به عقب خم می‌شود، اوج می‌گیرد و سایه عمیق‌تری می‌اندازد.",
  tags: ["tilt", "3d", "lift", "hover"],
  html: `<a class="tlf-card">کارت شیب‌دار</a>`,
  css: `.fx-hq-tilt-lift .tlf-card {
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  color: #d8b4fe;
  text-decoration: none;
  cursor: pointer;
  padding: 13px 28px;
  border-radius: 12px;
  background: #1d1636;
  border: 1px solid #3b2b63;
  transform-origin: 50% 100%;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease;
}
.fx-hq-tilt-lift .tlf-card:hover {
  transform: perspective(500px) rotateX(16deg) translateY(-5px);
  border-color: #8b5cf6;
  box-shadow: 0 20px 28px -12px rgba(0, 0, 0, 0.65), 0 6px 14px rgba(124, 58, 237, 0.28);
}`,
});

/* 22 — floats up while the shadow shrinks underneath */
fx({
  id: "hq-float-hover",
  name: "Float & Shrink Shadow",
  fa: "شناوری و سایه کاهنده",
  description: "The pill rises into the air while its ground shadow shrinks and softens — the classic float trick.",
  faDescription: "قرص بالا می‌رود و سایه زمینی‌اش کوچک‌تر و نرم‌تر می‌شود؛ ترفند کلاسیک شناوری.",
  tags: ["float", "shadow", "lift", "hover"],
  html: `<a class="flh-pill">شناور شو</a>`,
  css: `.fx-hq-float-hover .flh-pill {
  display: inline-block;
  font-size: 16px;
  font-weight: 800;
  color: #e0f2fe;
  text-decoration: none;
  cursor: pointer;
  padding: 12px 30px;
  border-radius: 999px;
  background: linear-gradient(180deg, #38bdf8, #0284c7);
  box-shadow: 0 14px 20px -8px rgba(2, 132, 199, 0.6);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.fx-hq-float-hover .flh-pill:hover {
  transform: translateY(-9px);
  box-shadow: 0 5px 8px -4px rgba(2, 132, 199, 0.45);
}`,
});

/* 23 — a blurred link sharpens into focus */
fx({
  id: "hq-blur-sharpen",
  name: "Blur to Sharp",
  fa: "از تاری به وضوح",
  description: "The link idles out of focus and snaps razor-sharp when the pointer arrives.",
  faDescription: "لینک در حالت عادی محو است و با رسیدن نشانگر، تیز و شارپ می‌شود.",
  tags: ["blur", "focus", "filter", "hover"],
  html: `<a class="bls-link">لینک محو</a>`,
  css: `.fx-hq-blur-sharpen .bls-link {
  display: inline-block;
  font-size: 21px;
  font-weight: 700;
  color: #a5b4fc;
  text-decoration: none;
  cursor: pointer;
  filter: blur(3px);
  opacity: 0.5;
  transition: filter 0.4s ease, opacity 0.4s ease, color 0.3s ease;
}
.fx-hq-blur-sharpen .bls-link:hover {
  filter: blur(0);
  opacity: 1;
  color: #e0e7ff;
}`,
});

/* 24 — a sweep passes behind text that inverts it via blend */
fx({
  id: "hq-color-sweep-blend",
  name: "Blend Sweep Invert",
  fa: "وارونگی با جاروی بلند",
  description: "A pale panel sweeps across behind the label; mix-blend difference flips the text where it passes.",
  faDescription: "پنلی روشن پشت متن جارو می‌شود و اختلاف ترکیبی، رنگ متن را در مسیر عبور وارونه می‌کند.",
  tags: ["blend", "sweep", "invert", "hover"],
  html: `<a class="csb-link"><span class="csb-tx">جاروی وارونه</span></a>`,
  css: `.fx-hq-color-sweep-blend .csb-link {
  position: relative;
  isolation: isolate;
  display: inline-block;
  font-size: 19px;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 24px;
  overflow: hidden;
}
.fx-hq-color-sweep-blend .csb-tx {
  position: relative;
  z-index: 1;
  color: #ffffff;
  mix-blend-mode: difference;
}
.fx-hq-color-sweep-blend .csb-link::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #f5f3ff;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.45s cubic-bezier(0.65, 0, 0.35, 1);
}
.fx-hq-color-sweep-blend .csb-link:hover::before {
  transform: scaleX(1);
}`,
});

/* 25 — a white searchlight with difference blend inverts the label */
fx({
  id: "hq-difference-invert",
  name: "Difference Searchlight",
  fa: "جستجوگر وارون‌ساز",
  description: "A white bar slides over the text in difference mode, inverting every glyph it crosses.",
  faDescription: "نوار سفیدی در حالت تفاضل روی متن می‌لغزد و هر حرفی را که رد می‌کند وارونه می‌کند.",
  tags: ["difference", "invert", "searchlight", "hover"],
  html: `<a class="dif-link"><span class="dif-tx">نور تفاضل</span></a>`,
  css: `.fx-hq-difference-invert .dif-link {
  position: relative;
  display: inline-block;
  font-size: 21px;
  font-weight: 800;
  color: #e2e8f0;
  text-decoration: none;
  cursor: pointer;
  padding: 9px 6px;
  overflow: hidden;
}
.fx-hq-difference-invert .dif-tx {
  position: relative;
  z-index: 1;
}
.fx-hq-difference-invert .dif-link::after {
  content: "";
  position: absolute;
  top: -4px;
  bottom: -4px;
  left: -20px;
  width: 32px;
  background: #ffffff;
  mix-blend-mode: difference;
  opacity: 0;
  z-index: 2;
  transition: opacity 0.3s ease;
}
.fx-hq-difference-invert .dif-link:hover::after {
  opacity: 1;
  animation: hq-dif-scan 1.5s ease-in-out infinite alternate;
}
@keyframes hq-dif-scan {
  from { transform: translateX(0); }
  to { transform: translateX(180px); }
}`,
});

/* 26 — a skewed ribbon slides under the text */
fx({
  id: "hq-skew-slide",
  name: "Skewed Ribbon Slide",
  fa: "روبان کج لغزان",
  description: "A skewed violet ribbon shoots in and parks under the label, flipping the text dark.",
  faDescription: "روبانی کج و بنفش وارد شده و زیر متن پارک می‌کند و رنگ متن را تیره می‌کند.",
  tags: ["skew", "ribbon", "slide", "hover"],
  html: `<a class="skx-link"><span class="skx-tx">روبن کج</span></a>`,
  css: `.fx-hq-skew-slide .skx-link {
  position: relative;
  display: inline-block;
  font-size: 18px;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  padding: 8px 18px;
  overflow: hidden;
}
.fx-hq-skew-slide .skx-tx {
  position: relative;
  z-index: 1;
  color: #c4b5fd;
  transition: color 0.3s ease 0.1s;
}
.fx-hq-skew-slide .skx-link::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #a78bfa;
  transform: translateX(-115%) skewX(-14deg);
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}
.fx-hq-skew-slide .skx-link:hover::before {
  transform: translateX(0) skewX(-14deg);
}
.fx-hq-skew-slide .skx-link:hover .skx-tx {
  color: #23103f;
}`,
});

/* 27 — five bars wipe up in a stagger */
fx({
  id: "hq-bars-wipe-stagger",
  name: "Staggered Bars Wipe",
  fa: "جاروی پلکانی میله‌ها",
  description: "Five vertical bars spring up one after another behind the label like an equalizer.",
  faDescription: "پنج میله عمودی پشت متن مثل اکولایزر یکی‌یکی و پلکانی بالا می‌جهند.",
  tags: ["bars", "stagger", "wipe", "hover"],
  html: `<a class="bws-link"><span class="bws-bars"><b></b><b></b><b></b><b></b><b></b></span><span class="bws-tx">اکولایزر</span></a>`,
  css: `.fx-hq-bars-wipe-stagger .bws-link {
  position: relative;
  display: inline-block;
  font-size: 17px;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 20px;
  overflow: hidden;
}
.fx-hq-bars-wipe-stagger .bws-bars {
  position: absolute;
  inset: 0;
  display: flex;
}
.fx-hq-bars-wipe-stagger .bws-bars b {
  flex: 1;
  background: linear-gradient(180deg, #22d3ee, #0ea5e9);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease;
}
.fx-hq-bars-wipe-stagger .bws-bars b:nth-child(2) { transition-delay: 0.05s; }
.fx-hq-bars-wipe-stagger .bws-bars b:nth-child(3) { transition-delay: 0.1s; }
.fx-hq-bars-wipe-stagger .bws-bars b:nth-child(4) { transition-delay: 0.15s; }
.fx-hq-bars-wipe-stagger .bws-bars b:nth-child(5) { transition-delay: 0.2s; }
.fx-hq-bars-wipe-stagger .bws-tx {
  position: relative;
  z-index: 1;
  color: #cbd5e1;
  transition: color 0.3s ease 0.15s;
}
.fx-hq-bars-wipe-stagger .bws-link:hover .bws-bars b {
  transform: scaleY(1);
}
.fx-hq-bars-wipe-stagger .bws-link:hover .bws-tx {
  color: #06283a;
}`,
});

/* 28 — two curtains part to reveal the label */
fx({
  id: "hq-curtain-split",
  name: "Curtain Split Reveal",
  fa: "بازشدن پرده",
  description: "Two stage curtains part sideways and reveal the label that was hiding behind them.",
  faDescription: "دو پرده صحنه از هم باز می‌شوند و برچسبی را که پشتشان پنهان بود آشکار می‌کنند.",
  tags: ["curtain", "reveal", "split", "hover"],
  html: `<span class="cur-wrap"><span class="cur-tx">پرده باز</span><i class="cur-l"></i><i class="cur-r"></i></span>`,
  css: `.fx-hq-curtain-split .cur-wrap {
  position: relative;
  display: inline-block;
  font-size: 17px;
  font-weight: 800;
  color: #e9d5ff;
  cursor: pointer;
  padding: 11px 26px;
}
.fx-hq-curtain-split .cur-tx {
  position: relative;
  z-index: 1;
  display: inline-block;
  transition: transform 0.4s ease 0.12s;
}
.fx-hq-curtain-split .cur-l,
.fx-hq-curtain-split .cur-r {
  position: absolute;
  top: 0;
  width: 51%;
  height: 100%;
  z-index: 2;
  transition: transform 0.45s cubic-bezier(0.65, 0, 0.35, 1);
}
.fx-hq-curtain-split .cur-l {
  left: 0;
  background: linear-gradient(120deg, #7c3aed, #a855f7);
  border-left: 3px solid #c4b5fd;
}
.fx-hq-curtain-split .cur-r {
  right: 0;
  background: linear-gradient(120deg, #a855f7, #7c3aed);
  border-right: 3px solid #c4b5fd;
}
.fx-hq-curtain-split .cur-wrap:hover .cur-l {
  transform: translateX(-102%);
}
.fx-hq-curtain-split .cur-wrap:hover .cur-r {
  transform: translateX(102%);
}
.fx-hq-curtain-split .cur-wrap:hover .cur-tx {
  transform: scale(1.08);
}`,
});

/* 29 — letter-spacing expands while the word zooms */
fx({
  id: "hq-tracking-zoom",
  name: "Tracking Zoom",
  fa: "بازشدن حروف",
  description: "Letter-spacing unfolds outward while the word zooms up a few percent.",
  faDescription: "فاصله حروف باز می‌شود و هم‌زمان کلمه چند درصد بزرگ‌نمایی می‌شود.",
  tags: ["tracking", "spacing", "zoom", "hover"],
  html: `<a class="tkz-w">TRACKING</a>`,
  css: `.fx-hq-tracking-zoom .tkz-w {
  display: inline-block;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.03em;
  color: #fbbf24;
  text-decoration: none;
  cursor: pointer;
  transition: letter-spacing 0.45s cubic-bezier(0.22, 1, 0.36, 1), transform 0.45s ease, color 0.3s ease;
}
.fx-hq-tracking-zoom .tkz-w:hover {
  letter-spacing: 0.32em;
  transform: scale(1.05);
  color: #fde68a;
}`,
});

/* 30 — solid text cross-fades into an outlined twin */
fx({
  id: "hq-fade-to-outline",
  name: "Fade to Outline",
  fa: "محو به خط‌ودور",
  description: "The solid label dissolves while a hollow outlined twin takes its place on top of it.",
  faDescription: "برچسب توپُر محو می‌شود و نسخه توخالی با خط‌ودور جای آن را می‌گیرد.",
  tags: ["outline", "stroke", "fade", "hover"],
  html: `<a class="fto-w"><span class="fto-solid">افکت هاور</span><span class="fto-line">افکت هاور</span></a>`,
  css: `.fx-hq-fade-to-outline .fto-w {
  position: relative;
  display: inline-block;
  font-size: 25px;
  font-weight: 900;
  text-decoration: none;
  cursor: pointer;
}
.fx-hq-fade-to-outline .fto-solid {
  color: #f9a8d4;
  transition: opacity 0.35s ease;
}
.fx-hq-fade-to-outline .fto-line {
  position: absolute;
  inset: 0;
  color: transparent;
  -webkit-text-stroke: 1.4px #f0abfc;
  opacity: 0;
  transition: opacity 0.35s ease;
}
.fx-hq-fade-to-outline .fto-w:hover .fto-solid {
  opacity: 0;
}
.fx-hq-fade-to-outline .fto-w:hover .fto-line {
  opacity: 1;
}`,
});

/* 31 — a dotted underline draws itself left to right */
fx({
  id: "hq-dotted-underline-draw",
  name: "Dotted Underline Draw",
  fa: "ترسیم زیرخط نقطه‌چین",
  description: "A dotted underline draws itself from left to right like a pen laying down dots.",
  faDescription: "زیرخط نقطه‌چین مثل قلمی که نقطه می‌گذارد از چپ به راست ترسیم می‌شود.",
  tags: ["dotted", "underline", "draw", "hover"],
  html: `<a class="dud-link">نقطه‌چین بکش</a>`,
  css: `.fx-hq-dotted-underline-draw .dud-link {
  position: relative;
  display: inline-block;
  font-size: 19px;
  font-weight: 700;
  color: #fde68a;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 8px;
}
.fx-hq-dotted-underline-draw .dud-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: repeating-linear-gradient(90deg, #fbbf24 0 5px, transparent 5px 10px);
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.5s ease;
}
.fx-hq-dotted-underline-draw .dud-link:hover::after {
  clip-path: inset(0 0 0 0);
}`,
});

/* 32 — a strike draws through, then the label fades to gray */
fx({
  id: "hq-strikethrough-animate",
  name: "Animated Strikethrough",
  fa: "خط‌خوردگی متحرک",
  description: "A line strikes through the label, then the text fades to a crossed-out gray a beat later.",
  faDescription: "خطی از میان متن رد می‌شود و لحظه‌ای بعد رنگ متن به خاکستریِ خط‌خورده می‌رود.",
  tags: ["strikethrough", "line", "two-step", "hover"],
  html: `<a class="stk-link">قیمت قبلی</a>`,
  css: `.fx-hq-strikethrough-animate .stk-link {
  position: relative;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  color: #e2e8f0;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease 0.25s;
}
.fx-hq-strikethrough-animate .stk-link::after {
  content: "";
  position: absolute;
  top: 52%;
  left: -3px;
  width: calc(100% + 6px);
  height: 2px;
  background: #fb7185;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.32s ease;
}
.fx-hq-strikethrough-animate .stk-link:hover {
  color: #64748b;
}
.fx-hq-strikethrough-animate .stk-link:hover::after {
  transform: scaleX(1);
}`,
});

/* 33 — a highlighter marker sweeps behind the text */
fx({
  id: "hq-marker-sweep",
  name: "Marker Sweep",
  fa: "جاروی ماژیک",
  description: "A yellow highlighter sweeps behind the text and the label darkens as if freshly marked.",
  faDescription: "ماژیک زرد پشت متن جارو می‌شود و متن همان‌طور که تازه علامت خورده تیره می‌شود.",
  tags: ["marker", "highlight", "sweep", "hover"],
  html: `<a class="mrk-link">متن مارک‌شده</a>`,
  css: `.fx-hq-marker-sweep .mrk-link {
  position: relative;
  display: inline-block;
  font-size: 19px;
  font-weight: 800;
  color: #fef3c7;
  text-decoration: none;
  cursor: pointer;
  padding: 2px 4px;
  transition: color 0.3s ease 0.12s;
  z-index: 1;
}
.fx-hq-marker-sweep .mrk-link::before {
  content: "";
  position: absolute;
  left: -4px;
  right: -4px;
  bottom: 1px;
  height: 55%;
  background: #fde047;
  transform: scaleX(0) skewX(-8deg);
  transform-origin: right;
  transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: -1;
}
.fx-hq-marker-sweep .mrk-link:hover {
  color: #713f12;
}
.fx-hq-marker-sweep .mrk-link:hover::before {
  transform: scaleX(1) skewX(-8deg);
}`,
});

/* 34 — the shadow grows and swings around like an orbit */
fx({
  id: "hq-shadow-grow-orbit",
  name: "Orbit Shadow Grow",
  fa: "مدار رشد سایه",
  description: "The chip tilts while a hard colored shadow swings out to one side like a moon in orbit.",
  faDescription: "چیپ کج می‌شود و سایه سخت رنگی مثل ماه در مدار به یک سمت پرتاب می‌شود.",
  tags: ["shadow", "orbit", "rotate", "hover"],
  html: `<a class="sgo-pill">مدار سایه</a>`,
  css: `.fx-hq-shadow-grow-orbit .sgo-pill {
  display: inline-block;
  font-size: 16px;
  font-weight: 800;
  color: #e0e7ff;
  text-decoration: none;
  cursor: pointer;
  padding: 12px 28px;
  border-radius: 14px;
  background: linear-gradient(180deg, #4338ca, #312e81);
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.35);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.fx-hq-shadow-grow-orbit .sgo-pill:hover {
  transform: translateY(-4px) rotate(-3deg);
  box-shadow: -10px 12px 0 -2px #6366f1, 0 18px 32px rgba(67, 56, 202, 0.4);
}`,
});

/* 35 — a 3-item list: hover brightens one, dims the rest */
fx({
  id: "hq-list-focus-dim",
  name: "List Focus & Dim",
  fa: "فهرست روشن و محو",
  description: "Hovering one list item keeps it lit and shifts it forward while its siblings dim down.",
  faDescription: "با هاور روی هر آیتم، همان روشن و جلوتر می‌ماند و بقیه آیتم‌ها محو می‌شوند.",
  tags: ["list", "dim", "focus", "hover"],
  html: `<ul class="lfd-list"><li class="lfd-it">طراحی رابط</li><li class="lfd-it">انیمیشن CSS</li><li class="lfd-it">تایپوگرافی</li></ul>`,
  css: `.fx-hq-list-focus-dim .lfd-list {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.fx-hq-list-focus-dim .lfd-it {
  padding: 5px 14px;
  font-size: 16px;
  font-weight: 700;
  color: #cbd5e1;
  cursor: pointer;
  border-right: 3px solid #3b2b63;
  opacity: 0.85;
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease, border-color 0.3s ease, text-shadow 0.3s ease;
}
.fx-hq-list-focus-dim .lfd-list:hover .lfd-it {
  opacity: 0.28;
}
.fx-hq-list-focus-dim .lfd-list .lfd-it:hover {
  opacity: 1;
  color: #f0abfc;
  transform: translateX(-6px);
  border-right-color: #f0abfc;
  text-shadow: 0 0 14px rgba(240, 171, 252, 0.55);
}`,
});
