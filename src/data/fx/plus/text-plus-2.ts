import type { CssEffect } from "../types";

export const textEffectsPlus2: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  textEffectsPlus2.push({ category: "text", interaction: "auto", ...e } as CssEffect);
}

fx({
  id: "xq2-pixel-build",
  name: "Pixel Build",
  fa: "ساخت پیکسلی",
  description:
    "A grid of tiny squares lights up in a diagonal wave, then the word materializes over it before the loop resets.",
  faDescription: "شبکه‌ای از مربع‌های ریز با موج قطری روشن می‌شوند و بعد کلمه رویشان ظاهر می‌شود؛ چرخه تکرار می‌شود.",
  tags: ["pixel", "grid", "build", "loop"],
  previewBg: "#0a1120",
  html: `<div class="px"><i style="--d:0s"></i><i style="--d:.06s"></i><i style="--d:.12s"></i><i style="--d:.18s"></i><i style="--d:.24s"></i><i style="--d:.3s"></i><i style="--d:.06s"></i><i style="--d:.12s"></i><i style="--d:.18s"></i><i style="--d:.24s"></i><i style="--d:.3s"></i><i style="--d:.36s"></i><i style="--d:.12s"></i><i style="--d:.18s"></i><i style="--d:.24s"></i><i style="--d:.3s"></i><i style="--d:.36s"></i><i style="--d:.42s"></i><span class="w">DEKO</span></div>`,
  css: `.fx-xq2-pixel-build .px {
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 15px);
  grid-auto-rows: 15px;
  gap: 3px;
}
.fx-xq2-pixel-build .px i {
  background: #16233a;
  border-radius: 2px;
  animation: xq2-pb-cell 3.6s ease infinite;
  animation-delay: var(--d, 0s);
}
@keyframes xq2-pb-cell {
  0%, 12% { background: #16233a; transform: scale(.55); box-shadow: none; }
  30%, 52% { background: #38bdf8; transform: scale(1); box-shadow: 0 0 10px rgba(56,189,248,.9); }
  72%, 100% { background: #16233a; transform: scale(.55); box-shadow: none; }
}
.fx-xq2-pixel-build .w {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(.7);
  font: 800 32px/1 system-ui, sans-serif;
  letter-spacing: 4px;
  color: #ffffff;
  text-shadow: 0 0 14px rgba(56,189,248,.95);
  white-space: nowrap;
  opacity: 0;
  animation: xq2-pb-word 3.6s ease infinite;
}
@keyframes xq2-pb-word {
  0%, 34% { opacity: 0; transform: translate(-50%, -50%) scale(.7); }
  46% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  60% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  74%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(.7); }
}`,
});

fx({
  id: "xq2-dot-matrix-led",
  name: "Dot-Matrix LED",
  fa: "ال‌ای‌دی نقطه‌ای",
  description:
    "The letters are literally made of glowing dots — a radial-gradient dot pattern clipped to text that shimmers and pulses.",
  faDescription: "حروف واقعاً از نقطه‌های نورانی ساخته شده‌اند؛ الگوی نقطه‌ای radial-gradient روی متن می‌درخشد و نبض می‌زند.",
  tags: ["led", "dot-matrix", "background-clip", "glow"],
  previewBg: "#160505",
  html: `<span class="dm">DEKO</span>`,
  css: `.fx-xq2-dot-matrix-led .dm {
  display: inline-block;
  font: 900 48px/1.2 ui-monospace, "Courier New", monospace;
  letter-spacing: 4px;
  background-image: radial-gradient(circle, #f87171 1.2px, rgba(248,113,113,.2) 1.5px, transparent 2px);
  background-size: 6px 6px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: xq2-dm-shift .5s steps(1, end) infinite;
}
.fx-xq2-dot-matrix-led .dm {
  animation:
    xq2-dm-shift .5s steps(1, end) infinite,
    xq2-dm-glow 2.2s ease-in-out infinite;
}
@keyframes xq2-dm-shift {
  0%, 100% { background-position: 0 0; }
  50% { background-position: 3px 3px; }
}
@keyframes xq2-dm-glow {
  0%, 100% { filter: drop-shadow(0 0 4px rgba(248,113,113,.35)); }
  50% { filter: drop-shadow(0 0 14px rgba(248,113,113,.8)); }
}`,
});

fx({
  id: "xq2-terminal-green",
  name: "Terminal Green",
  fa: "ترمینال سبز",
  description:
    "A CRT terminal line with a shell prompt and a blinking block caret, wrapped in scanlines and phosphor glow.",
  faDescription: "یک خط ترمینال با پرامپت شل و کرسر چشمک‌زن، همراه خط‌های اسکن و درخشش فسفری.",
  tags: ["terminal", "caret", "crt", "monospace"],
  previewBg: "#050805",
  html: `<span class="term"><span class="ln"><span class="ps">$</span> deko css<span class="cur"></span></span></span>`,
  css: `.fx-xq2-terminal-green .term {
  position: relative;
  display: inline-block;
  overflow: hidden;
  background: #050805;
  border: 1px solid #14532d;
  border-radius: 8px;
  padding: 16px 20px;
  box-shadow: 0 0 26px rgba(34,197,94,.18), inset 0 0 30px rgba(34,197,94,.07);
}
.fx-xq2-terminal-green .ln {
  font: 600 28px/1.4 ui-monospace, "Courier New", monospace;
  color: #4ade80;
  text-shadow: 0 0 8px rgba(74,222,128,.75);
  white-space: nowrap;
}
.fx-xq2-terminal-green .ps { color: #bbf7d0; }
.fx-xq2-terminal-green .cur {
  display: inline-block;
  width: .6em;
  height: 1em;
  background: #4ade80;
  vertical-align: -.12em;
  margin-left: 6px;
  animation: xq2-tg-cur 1.05s steps(1, end) infinite;
}
@keyframes xq2-tg-cur {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.fx-xq2-terminal-green .term::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(0deg, rgba(0,0,0,.3) 0 1px, transparent 1px 3px);
  pointer-events: none;
}`,
});

fx({
  id: "xq2-slot-machine",
  name: "Slot Machine",
  fa: "ماشین slots",
  description:
    "Three reels of digits spin with chunky steps(10) clicks at different speeds, like a casino slot machine.",
  faDescription: "سه قرقره از رقم‌ها با پرش‌های پله‌ای و سرعت‌های متفاوت مثل ماشین قمار می‌چرخند.",
  tags: ["slot", "reel", "steps", "digits"],
  previewBg: "#191410",
  html: `<span class="slot"><span class="reel"><span class="strip">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0</span></span><span class="reel"><span class="strip">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0</span></span><span class="reel"><span class="strip">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0</span></span></span>`,
  css: `.fx-xq2-slot-machine .slot {
  display: inline-flex;
  gap: 8px;
  padding: 12px 14px;
  background: #1c1917;
  border-radius: 12px;
  box-shadow: inset 0 0 0 3px #b45309, inset 0 0 0 6px #78350f, 0 8px 18px rgba(0,0,0,.5);
}
.fx-xq2-slot-machine .reel {
  width: 42px;
  height: 54px;
  overflow: hidden;
  border-radius: 6px;
  background: linear-gradient(#fde68a, #fbbf24 50%, #f59e0b);
  box-shadow: inset 0 8px 12px rgba(120,53,15,.55), inset 0 -8px 12px rgba(120,53,15,.55);
}
.fx-xq2-slot-machine .strip {
  display: block;
  font: 800 40px/54px ui-monospace, "Courier New", monospace;
  color: #78350f;
  text-align: center;
  animation: xq2-sm-roll 1.5s steps(10, end) infinite;
}
.fx-xq2-slot-machine .reel:nth-child(2) .strip { animation-duration: 1.15s; }
.fx-xq2-slot-machine .reel:nth-child(3) .strip { animation-duration: 1.9s; }
@keyframes xq2-sm-roll {
  to { transform: translateY(-540px); }
}`,
});

fx({
  id: "xq2-odometer-roll",
  name: "Odometer Roll",
  fa: "عددشمار خودرو",
  description:
    "Four mechanical number wheels roll continuously at different speeds inside a dark metal housing.",
  faDescription: "چهار چرخ‌دنده‌ی عددی داخل قاب فلزی تیره با سرعت‌های متفاوت پیوسته می‌غلتند.",
  tags: ["odometer", "digits", "linear", "mechanical"],
  previewBg: "#101014",
  html: `<span class="odo"><span class="wh"><span class="strip">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0</span></span><span class="wh"><span class="strip">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0</span></span><span class="wh"><span class="strip">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0</span></span><span class="wh"><span class="strip">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0</span></span></span>`,
  css: `.fx-xq2-odometer-roll .odo {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 12px 16px;
  background: linear-gradient(#3f3f46, #18181b);
  border-radius: 8px;
  box-shadow: inset 0 2px 8px rgba(0,0,0,.85), 0 5px 14px rgba(0,0,0,.45);
}
.fx-xq2-odometer-roll .wh {
  width: 32px;
  height: 50px;
  overflow: hidden;
  border-radius: 4px;
  background: linear-gradient(#fafaf9, #d6d3d1 50%, #a8a29e);
  box-shadow: inset 0 4px 8px rgba(0,0,0,.35);
}
.fx-xq2-odometer-roll .strip {
  display: block;
  font: 700 34px/50px ui-monospace, "Courier New", monospace;
  color: #1c1917;
  text-align: center;
  animation: xq2-od-roll linear infinite;
}
.fx-xq2-odometer-roll .wh:nth-child(1) .strip { animation-duration: 4.4s; }
.fx-xq2-odometer-roll .wh:nth-child(2) .strip { animation-duration: 2.6s; }
.fx-xq2-odometer-roll .wh:nth-child(3) .strip { animation-duration: 1.5s; }
.fx-xq2-odometer-roll .wh:nth-child(4) .strip { animation-duration: .8s; }
@keyframes xq2-od-roll {
  to { transform: translateY(-550px); }
}`,
});

fx({
  id: "xq2-countdown-pulse",
  name: "Countdown Pulse",
  fa: "شمارش معکوس",
  description:
    "3… 2… 1… each digit slams in big and settles, then «شروع!» pops green when the count hits zero.",
  faDescription: "۳… ۲… ۱… هر رقم درشت فرود می‌آید و در پایان «شروع!» سبز ظاهر می‌شود.",
  tags: ["countdown", "pulse", "scale", "persian"],
  previewBg: "#0e0a0a",
  html: `<span class="cd"><span class="n n1">3</span><span class="n n2">2</span><span class="n n3">1</span><span class="go">شروع!</span></span>`,
  css: `.fx-xq2-countdown-pulse .cd {
  position: relative;
  display: inline-grid;
  place-items: center;
  min-width: 170px;
  height: 112px;
}
.fx-xq2-countdown-pulse .n,
.fx-xq2-countdown-pulse .go {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
}
.fx-xq2-countdown-pulse .n {
  font: 900 62px/1 system-ui, sans-serif;
  color: #f87171;
  text-shadow: 0 0 26px rgba(248,113,113,.65);
  animation: xq2-cd-n 6s ease infinite;
}
.fx-xq2-countdown-pulse .n2 { animation-delay: 1.62s; }
.fx-xq2-countdown-pulse .n3 { animation-delay: 3.24s; }
.fx-xq2-countdown-pulse .go {
  font: 900 42px/1 system-ui, sans-serif;
  color: #4ade80;
  text-shadow: 0 0 22px rgba(74,222,128,.7);
  animation: xq2-cd-go 6s ease infinite;
}
@keyframes xq2-cd-n {
  0% { opacity: 0; transform: scale(2); }
  4% { opacity: 1; transform: scale(1.5); }
  20% { opacity: 1; transform: scale(1); }
  27% { opacity: 1; transform: scale(1); }
  31%, 100% { opacity: 0; transform: scale(1); }
}
@keyframes xq2-cd-go {
  0%, 84% { opacity: 0; transform: scale(.3); }
  89% { opacity: 1; transform: scale(1.25); }
  93% { opacity: 1; transform: scale(1); }
  99%, 100% { opacity: 1; transform: scale(1); }
}`,
});

fx({
  id: "xq2-wave-underline",
  name: "Wave Underline",
  fa: "زیرخط موجی",
  description:
    "A zigzag wave built from two mirrored gradients travels endlessly beneath the word.",
  faDescription: "زیرخط زیگزاگی که از دو گرادیان آینه‌ای ساخته شده، بی‌وقفه زیر کلمه حرکت می‌کند.",
  tags: ["underline", "wave", "gradient", "travel"],
  previewBg: "#1a0f14",
  html: `<span class="wu"><span class="t">WAVE</span></span>`,
  css: `.fx-xq2-wave-underline .wu {
  display: inline-block;
  padding-bottom: 6px;
}
.fx-xq2-wave-underline .t {
  font: 800 40px/1.3 system-ui, sans-serif;
  color: #fecdd3;
}
.fx-xq2-wave-underline .wu::after {
  content: "";
  display: block;
  height: 8px;
  margin-top: 8px;
  background-image:
    linear-gradient(-45deg, transparent 5px, #fb7185 5px 7px, transparent 7px),
    linear-gradient(45deg, transparent 5px, #fb7185 5px 7px, transparent 7px);
  background-size: 12px 8px;
  background-repeat: repeat-x;
  background-position: 0 0, 6px 0;
  animation: xq2-wu 1.1s linear infinite;
}
@keyframes xq2-wu {
  to { background-position: 24px 0, 30px 0; }
}`,
});

fx({
  id: "xq2-neon-tube-flicker",
  name: "Neon Tube Flicker",
  fa: "لوله‌ی نئون سوسوزن",
  description:
    "A pink neon tube buzzes to life with erratic flickers, then locks solid and stays lit for the rest of the cycle.",
  faDescription: "لوله‌ی نئون صورتی با سوسوهای بی‌قاعده روشن می‌شود، بعد ثابت می‌ماند تا پایان چرخه.",
  tags: ["neon", "tube", "flicker", "buzz"],
  previewBg: "#0a0612",
  html: `<span class="t">TUBE</span>`,
  css: `.fx-xq2-neon-tube-flicker .t {
  display: inline-block;
  font: 800 46px/1.2 "Segoe UI", system-ui, sans-serif;
  letter-spacing: 5px;
  color: #fdf4ff;
  text-shadow: 0 0 6px #e879f9, 0 0 16px #e879f9, 0 0 36px #c026d3, 0 0 72px #a21caf;
  animation: xq2-ntf 7s linear infinite;
}
@keyframes xq2-ntf {
  0% { opacity: .12; transform: translateX(0); }
  2% { opacity: .85; transform: translateX(1px); }
  3.2% { opacity: .25; transform: translateX(-1px); }
  4.6% { opacity: 1; transform: translateX(1px); }
  6% { opacity: .4; transform: translateX(-1px); }
  7.4% { opacity: .9; transform: translateX(1px); }
  8.6% { opacity: .55; transform: translateX(-1px); }
  10%, 100% { opacity: 1; transform: translateX(0); }
}`,
});

fx({
  id: "xq2-neon-sign-off-on",
  name: "Neon Sign Off/On",
  fa: "تابلوی نئون خاموش/روشن",
  description:
    "A framed neon sign starts dead, sputters on with two failed strikes, then hums with a breathing glow.",
  faDescription: "تابلوی نئون قاب‌دار اول خاموش است، با دو جرقه‌ی ناموفق روشن می‌شود و بعد با هاله‌ی آرام می‌درخشد.",
  tags: ["neon", "sign", "frame", "hum"],
  previewBg: "#0b0714",
  html: `<span class="box"><span class="t">OPEN</span></span>`,
  css: `.fx-xq2-neon-sign-off-on .box {
  display: inline-block;
  padding: 16px 26px;
  border: 3px solid #3f3f46;
  border-radius: 14px;
  animation: xq2-nso-frame 8s linear infinite;
}
.fx-xq2-neon-sign-off-on .t {
  font: 800 42px/1.2 "Segoe UI", system-ui, sans-serif;
  letter-spacing: 4px;
  color: #5b5b64;
  animation: xq2-nso-t 8s linear infinite;
}
@keyframes xq2-nso-t {
  0%, 34% { color: #5b5b64; text-shadow: none; }
  36% { color: #fbcfe8; text-shadow: 0 0 10px #e879f9, 0 0 28px #c026d3, 0 0 60px #a21caf; }
  38% { color: #5b5b64; text-shadow: none; }
  41% { color: #fbcfe8; text-shadow: 0 0 10px #e879f9, 0 0 28px #c026d3, 0 0 60px #a21caf; }
  43% { color: #5b5b64; text-shadow: none; }
  46% { color: #fbcfe8; text-shadow: 0 0 10px #e879f9, 0 0 28px #c026d3, 0 0 60px #a21caf; }
  62% { color: #fbcfe8; text-shadow: 0 0 6px #e879f9, 0 0 18px #c026d3, 0 0 40px #a21caf; }
  78% { color: #fbcfe8; text-shadow: 0 0 10px #e879f9, 0 0 28px #c026d3, 0 0 60px #a21caf; }
  92% { color: #fbcfe8; text-shadow: 0 0 6px #e879f9, 0 0 18px #c026d3, 0 0 40px #a21caf; }
  100% { color: #fbcfe8; text-shadow: 0 0 10px #e879f9, 0 0 28px #c026d3, 0 0 60px #a21caf; }
}
@keyframes xq2-nso-frame {
  0%, 35% { border-color: #3f3f46; box-shadow: none; }
  37% { border-color: #f0abfc; box-shadow: 0 0 14px rgba(232,121,249,.5); }
  39% { border-color: #3f3f46; box-shadow: none; }
  42% { border-color: #f0abfc; box-shadow: 0 0 14px rgba(232,121,249,.5); }
  44% { border-color: #3f3f46; box-shadow: none; }
  47%, 100% { border-color: #f0abfc; box-shadow: 0 0 14px rgba(232,121,249,.5); }
}`,
});

fx({
  id: "xq2-rainbow-type-race",
  name: "Rainbow Type Race",
  fa: "مسابقه‌ی رنگین‌کمان",
  description:
    "Every letter cycles through the full rainbow, phase-shifted so the color wave races across the word.",
  faDescription: "هر حرف کل رنگین‌کمان را می‌چرخاند و با اختلاف فاز، موج رنگ روی کلمه می‌تازد.",
  tags: ["rainbow", "race", "letters", "color"],
  previewBg: "#0f1222",
  html: `<span class="st"><span class="l">R</span><span class="l">A</span><span class="l">C</span><span class="l">E</span><span class="l">!</span></span>`,
  css: `.fx-xq2-rainbow-type-race .st { display: inline-block; }
.fx-xq2-rainbow-type-race .l {
  display: inline-block;
  font: 900 46px/1.25 system-ui, sans-serif;
  animation: xq2-rtr 2.4s linear infinite;
}
.fx-xq2-rainbow-type-race .l:nth-child(2) { animation-delay: -.15s; }
.fx-xq2-rainbow-type-race .l:nth-child(3) { animation-delay: -.3s; }
.fx-xq2-rainbow-type-race .l:nth-child(4) { animation-delay: -.45s; }
.fx-xq2-rainbow-type-race .l:nth-child(5) { animation-delay: -.6s; }
@keyframes xq2-rtr {
  0%, 100% { color: #f87171; }
  16% { color: #fbbf24; }
  33% { color: #4ade80; }
  50% { color: #22d3ee; }
  66% { color: #818cf8; }
  83% { color: #e879f9; }
}`,
});

fx({
  id: "xq2-magnetic-letters",
  name: "Magnetic Letters",
  fa: "حروف آهن‌ربایی",
  description:
    "Hover and the letters repel away from the center with springy overshoot, then snap back into place.",
  faDescription: "با هاور، حروف از مرکز دفع می‌شوند با فنریتِ فزون‌بین و بعد سرجایشان برمی‌گردند.",
  tags: ["magnetic", "repel", "hover", "spring"],
  interaction: "hover",
  previewBg: "#0c1524",
  html: `<span class="st"><span class="m">D</span><span class="m">E</span><span class="m">K</span><span class="m">O</span></span>`,
  css: `.fx-xq2-magnetic-letters .st { display: inline-block; }
.fx-xq2-magnetic-letters .m {
  display: inline-block;
  font: 800 46px/1.25 system-ui, sans-serif;
  color: #7dd3fc;
  transition: transform .5s cubic-bezier(.18, 1.6, .35, 1);
}
.fx-xq2-magnetic-letters:hover .m:nth-child(1) { transform: translate(-18px, -8px) rotate(-10deg); }
.fx-xq2-magnetic-letters:hover .m:nth-child(2) { transform: translate(-7px, -16px) rotate(-4deg); }
.fx-xq2-magnetic-letters:hover .m:nth-child(3) { transform: translate(7px, -16px) rotate(4deg); }
.fx-xq2-magnetic-letters:hover .m:nth-child(4) { transform: translate(18px, -8px) rotate(10deg); }`,
});

fx({
  id: "xq2-ferris-letters",
  name: "Ferris Letters",
  fa: "چرخ‌وفلک حروف",
  description:
    "Letters ride a ferris wheel: each one rises, grows at the top, shrinks at the bottom, phase-shifted around the wheel.",
  faDescription: "حروف سوار چرخ‌وفلک‌اند: بالا می‌روند، در بالا بزرگ و در پایین کوچک می‌شوند، با فازهای چرخشی.",
  tags: ["ferris", "wheel", "stagger", "scale"],
  previewBg: "#151008",
  html: `<span class="fl"><span class="f">D</span><span class="f">E</span><span class="f">K</span><span class="f">O</span></span>`,
  css: `.fx-xq2-ferris-letters .fl {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  height: 84px;
}
.fx-xq2-ferris-letters .f {
  display: inline-block;
  font: 800 40px/1 system-ui, sans-serif;
  color: #fcd34d;
  animation: xq2-ferris 3.6s ease-in-out infinite;
}
.fx-xq2-ferris-letters .f:nth-child(2) { animation-delay: -.9s; }
.fx-xq2-ferris-letters .f:nth-child(3) { animation-delay: -1.8s; }
.fx-xq2-ferris-letters .f:nth-child(4) { animation-delay: -2.7s; }
@keyframes xq2-ferris {
  0% { transform: translateY(18px) scale(.78); opacity: .55; }
  25% { transform: translateY(0) scale(1); opacity: 1; }
  50% { transform: translateY(-18px) scale(1.22); opacity: 1; }
  75% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(18px) scale(.78); opacity: .55; }
}`,
});

fx({
  id: "xq2-pendulum-letters",
  name: "Pendulum Letters",
  fa: "آونگ حروف",
  description:
    "Each letter swings from an invisible pivot above it; even letters hang at the opposite phase.",
  faDescription: "هر حرف از یک محور نامرئی بالای سرش تاب می‌خورد؛ حروف زوج با فاز مخالف تاب می‌خورند.",
  tags: ["pendulum", "swing", "rotate", "phase"],
  previewBg: "#12142a",
  html: `<span class="pd"><span class="p">S</span><span class="p">W</span><span class="p">I</span><span class="p">N</span><span class="p">G</span></span>`,
  css: `.fx-xq2-pendulum-letters .pd {
  display: inline-flex;
  gap: 10px;
  padding-top: 14px;
}
.fx-xq2-pendulum-letters .p {
  display: inline-block;
  font: 800 40px/1.2 system-ui, sans-serif;
  color: #a5b4fc;
  transform-origin: 50% -24px;
  animation: xq2-pend 1.7s ease-in-out infinite;
}
.fx-xq2-pendulum-letters .p:nth-child(even) { animation-delay: -.85s; }
@keyframes xq2-pend {
  0%, 100% { transform: rotate(22deg); }
  50% { transform: rotate(-22deg); }
}`,
});

fx({
  id: "xq2-typographic-kernel",
  name: "Typographic Kernel",
  fa: "هسته‌ی تایپوگرافی",
  description:
    "The word kerns unnaturally tight; hover detonates the kerning — letters explode outward and relax back.",
  faDescription: "کلمه بیش‌ازحد به‌هم‌فشرده است؛ با هاور فاصله‌ها منفجر می‌شوند و حروف بیرون می‌پرند.",
  tags: ["kerning", "explode", "hover", "letter-spacing"],
  interaction: "hover",
  previewBg: "#111827",
  html: `<span class="st"><span class="k">D</span><span class="k">E</span><span class="k">K</span><span class="k">O</span></span>`,
  css: `.fx-xq2-typographic-kernel .st {
  display: inline-block;
  letter-spacing: -6px;
  transition: letter-spacing .55s cubic-bezier(.6, 0, .2, 1);
  cursor: pointer;
}
.fx-xq2-typographic-kernel .k {
  display: inline-block;
  font: 900 48px/1.25 system-ui, sans-serif;
  color: #f8fafc;
  transition: transform .55s cubic-bezier(.2, 1.5, .35, 1);
}
.fx-xq2-typographic-kernel:hover .st { letter-spacing: 10px; }
.fx-xq2-typographic-kernel:hover .k:nth-child(1) { transform: translateX(-10px) rotate(-8deg); }
.fx-xq2-typographic-kernel:hover .k:nth-child(4) { transform: translateX(10px) rotate(8deg); }`,
});

fx({
  id: "xq2-slice-swap",
  name: "Slice Swap",
  fa: "نیمه‌های جدا",
  description:
    "The word is cut into top and bottom halves via clip-path; the halves slide apart in opposite directions and rejoin.",
  faDescription: "کلمه با clip-path به دو نیمه‌ی بالا و پایین بریده می‌شود؛ نیمه‌ها خلاف جهت هم می‌لغزند و دوباره می‌پیوندند.",
  tags: ["slice", "clip-path", "halves", "slide"],
  previewBg: "#131722",
  html: `<span class="s" data-t="دی‌کو">دی‌کو</span>`,
  css: `.fx-xq2-slice-swap .s {
  position: relative;
  display: inline-block;
  font: 800 46px/1.25 system-ui, sans-serif;
  color: transparent;
}
.fx-xq2-slice-swap .s::before,
.fx-xq2-slice-swap .s::after {
  content: attr(data-t);
  position: absolute;
  inset: 0;
}
.fx-xq2-slice-swap .s::before {
  color: #fbbf24;
  clip-path: inset(0 0 50% 0);
  animation: xq2-ss-top 3.4s ease-in-out infinite;
}
.fx-xq2-slice-swap .s::after {
  color: #e2e8f0;
  clip-path: inset(50% 0 0 0);
  animation: xq2-ss-bot 3.4s ease-in-out infinite;
}
@keyframes xq2-ss-top {
  0%, 26% { transform: translateX(0); }
  42%, 58% { transform: translateX(-30px); }
  74%, 100% { transform: translateX(0); }
}
@keyframes xq2-ss-bot {
  0%, 26% { transform: translateX(0); }
  42%, 58% { transform: translateX(30px); }
  74%, 100% { transform: translateX(0); }
}`,
});

fx({
  id: "xq2-roll-caption",
  name: "Roll Caption",
  fa: "زیرنویس رول‌شونده",
  description:
    "A cinema subtitle bar rolls up into frame, holds while you read, then rolls back down and returns later.",
  faDescription: "نوار زیرنویس سینمایی از پایین بالا می‌آید، می‌ماند و بعد پایین می‌رود؛ دوباره تکرار می‌شود.",
  tags: ["caption", "subtitle", "roll", "cinema"],
  previewBg: "#14141c",
  html: `<span class="rc"><span class="bar">زیرنویس: دی‌کو</span></span>`,
  css: `.fx-xq2-roll-caption .rc {
  display: inline-block;
  width: 250px;
  overflow: hidden;
  border-radius: 6px;
  background: rgba(2, 6, 23, .35);
  padding: 6px 0;
}
.fx-xq2-roll-caption .bar {
  background: rgba(0, 0, 0, .82);
  color: #f8fafc;
  font: 600 28px/1.5 system-ui, sans-serif;
  text-align: center;
  padding: 8px 12px;
  animation: xq2-rc 6s cubic-bezier(.2, .9, .25, 1) infinite;
}
@keyframes xq2-rc {
  0% { transform: translateY(120%); }
  14%, 76% { transform: translateY(0); }
  88%, 100% { transform: translateY(120%); }
}`,
});

fx({
  id: "xq2-ink-blot",
  name: "Ink Blot",
  fa: "لکه‌ی مرکب",
  description:
    "The word bleeds into existence through an irregular ink blot that grows, splatters wider, then recedes.",
  faDescription: "کلمه از دل یک لکه‌ی نامنظم مرکب پدیدار می‌شود؛ لکه بزرگ می‌شود، پخش می‌شود و جمع می‌شود.",
  tags: ["ink", "mask", "blot", "reveal"],
  previewBg: "#efe8d8",
  html: `<span class="ink">مرکب</span>`,
  css: `.fx-xq2-ink-blot .ink {
  display: inline-block;
  font: 800 46px/1.3 Georgia, "Times New Roman", serif;
  color: #1e1b4b;
  -webkit-mask-image: radial-gradient(circle at 42% 42%, #000 55%, rgba(0,0,0,.8) 62%, transparent 72%), radial-gradient(circle at 72% 30%, #000 26%, transparent 44%), radial-gradient(circle at 22% 74%, #000 20%, transparent 38%);
  mask-image: radial-gradient(circle at 42% 42%, #000 55%, rgba(0,0,0,.8) 62%, transparent 72%), radial-gradient(circle at 72% 30%, #000 26%, transparent 44%), radial-gradient(circle at 22% 74%, #000 20%, transparent 38%);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 0% 0%;
  mask-size: 0% 0%;
  animation: xq2-ib 4.4s ease-in-out infinite;
}
@keyframes xq2-ib {
  0% { -webkit-mask-size: 0% 0%; mask-size: 0% 0%; }
  12% { -webkit-mask-size: 34% 34%; mask-size: 34% 34%; }
  16% { -webkit-mask-size: 28% 28%; mask-size: 28% 28%; }
  46%, 72% { -webkit-mask-size: 300% 300%; mask-size: 300% 300%; }
  100% { -webkit-mask-size: 0% 0%; mask-size: 0% 0%; }
}`,
});

fx({
  id: "xq2-stamp-hit",
  name: "Stamp Hit",
  fa: "مهر تأیید",
  description:
    "A rubber stamp slams down from above with a rotate-scale hit, bounces once, then fades — ink texture via double shadow.",
  faDescription: "مهر از بالا کوبیده می‌شود، یک بار می‌جهد و محو می‌شود؛ بافت جوهر با سایه‌ی دوگانه ساخته شده.",
  tags: ["stamp", "hit", "rotate", "ink"],
  previewBg: "#f4f1ea",
  html: `<span class="stamp">تأیید</span>`,
  css: `.fx-xq2-stamp-hit .stamp {
  display: inline-block;
  font: 900 38px/1.3 system-ui, sans-serif;
  color: #b91c1c;
  border: 4px double #b91c1c;
  border-radius: 10px;
  padding: 8px 20px;
  letter-spacing: 3px;
  text-shadow: 1px 1px 0 rgba(0,0,0,.3), -1px -1px 0 rgba(185,28,28,.4);
  box-shadow: inset 0 0 0 2px rgba(185,28,28,.35);
  opacity: 0;
  animation: xq2-sh 3.4s cubic-bezier(.15, 1.1, .3, 1) infinite;
}
@keyframes xq2-sh {
  0% { opacity: 0; transform: rotate(-32deg) scale(2.8); }
  10% { opacity: 1; transform: rotate(-8deg) scale(1); }
  13% { opacity: 1; transform: rotate(-8deg) scale(1.07); }
  17% { opacity: 1; transform: rotate(-8deg) scale(1); }
  72% { opacity: 1; transform: rotate(-8deg) scale(1); }
  82%, 100% { opacity: 0; transform: rotate(-8deg) scale(1); }
}`,
});

fx({
  id: "xq2-train-seat-captions",
  name: "Train Seat Captions",
  fa: "اعلان قطار",
  description:
    "Two station announcements crossfade on the little display above the seats, one sliding out as the next slides in.",
  faDescription: "دو اعلان ایستگاه روی نمایشگر بالای صندلی‌ها با کراس‌فید عوض می‌شوند.",
  tags: ["captions", "crossfade", "station", "persian"],
  previewBg: "#0d1117",
  html: `<span class="tr"><span class="c c1">ایستگاه بعدی: دی‌کو</span><span class="c c2">درها باز می‌شوند</span></span>`,
  css: `.fx-xq2-train-seat-captions .tr {
  position: relative;
  display: inline-block;
  width: 270px;
  height: 76px;
}
.fx-xq2-train-seat-captions .c {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  text-align: center;
  font: 700 28px/1.4 system-ui, sans-serif;
  color: #e2e8f0;
  opacity: 0;
}
.fx-xq2-train-seat-captions .c1 { animation: xq2-tsc-1 8s ease-in-out infinite; }
.fx-xq2-train-seat-captions .c2 { animation: xq2-tsc-2 8s ease-in-out infinite; }
@keyframes xq2-tsc-1 {
  0%, 6% { opacity: 0; transform: translateY(12px); }
  12%, 40% { opacity: 1; transform: translateY(0); }
  46%, 100% { opacity: 0; transform: translateY(-12px); }
}
@keyframes xq2-tsc-2 {
  0%, 50% { opacity: 0; transform: translateY(12px); }
  56%, 90% { opacity: 1; transform: translateY(0); }
  96%, 100% { opacity: 0; transform: translateY(-12px); }
}`,
});

fx({
  id: "xq2-string-wave",
  name: "String Wave",
  fa: "موج روی بند رخت",
  description:
    "Letters hang from a taut wire and sway in a traveling phase, like laundry on a windy clothesline.",
  faDescription: "حروف از یک سیم کشیده آویزان‌اند و با فاز سیار تاب می‌خورند؛ مثل رخت‌ها روی بند در روز بادی.",
  tags: ["string", "hang", "sway", "stagger"],
  previewBg: "#191d2b",
  html: `<span class="sw"><span class="h">D</span><span class="h">E</span><span class="h">K</span><span class="h">O</span></span>`,
  css: `.fx-xq2-string-wave .sw {
  position: relative;
  display: inline-block;
  padding: 20px 6px 4px;
}
.fx-xq2-string-wave .sw::before {
  content: "";
  position: absolute;
  top: 12px;
  left: -10px;
  right: -10px;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, #64748b, #cbd5e1, #64748b);
}
.fx-xq2-string-wave .h {
  display: inline-block;
  margin-top: 10px;
  font: 800 38px/1.1 system-ui, sans-serif;
  color: #fde68a;
  transform-origin: 50% -14px;
  animation: xq2-sw 2.3s ease-in-out infinite;
}
.fx-xq2-string-wave .h:nth-child(2) { animation-delay: .14s; }
.fx-xq2-string-wave .h:nth-child(3) { animation-delay: .28s; }
.fx-xq2-string-wave .h:nth-child(4) { animation-delay: .42s; }
@keyframes xq2-sw {
  0%, 100% { transform: rotate(6deg); }
  50% { transform: rotate(-6deg); }
}`,
});

fx({
  id: "xq2-flip-each-letter",
  name: "Flip Each Letter",
  fa: "فلیپ تک‌تک حروف",
  description:
    "Every letter continuously cartwheels around its own X axis in 3D, staggered so the wave never stops.",
  faDescription: "هر حرف پیوسته حول محور X خودش در فضا معلق می‌زند و با اختلاف فاز موج قطع نمی‌شود.",
  tags: ["flip", "3d", "rotateX", "stagger"],
  previewBg: "#101726",
  html: `<span class="st"><span class="fl">D</span><span class="fl">E</span><span class="fl">K</span><span class="fl">O</span></span>`,
  css: `.fx-xq2-flip-each-letter .st {
  display: inline-block;
  perspective: 620px;
}
.fx-xq2-flip-each-letter .fl {
  display: inline-block;
  font: 800 44px/1.25 system-ui, sans-serif;
  color: #93c5fd;
  animation: xq2-fel 2.8s linear infinite;
}
.fx-xq2-flip-each-letter .fl:nth-child(2) { animation-delay: -.7s; }
.fx-xq2-flip-each-letter .fl:nth-child(3) { animation-delay: -1.4s; }
.fx-xq2-flip-each-letter .fl:nth-child(4) { animation-delay: -2.1s; }
@keyframes xq2-fel {
  from { transform: rotateX(0deg); }
  to { transform: rotateX(360deg); }
}`,
});

fx({
  id: "xq2-breathing-glow-text",
  name: "Breathing Glow",
  fa: "درخشش آرام",
  description:
    "A soft cyan halo around the word slowly inhales and exhales — no flicker, just calm light.",
  faDescription: "هاله‌ی آبی ملایم دور کلمه آرام دم و بازدم می‌کند؛ بدون سوسو، فقط نورِ آرام.",
  tags: ["glow", "breathing", "soft", "calm"],
  previewBg: "#07131a",
  html: `<span class="bg">آرامش</span>`,
  css: `.fx-xq2-breathing-glow-text .bg {
  display: inline-block;
  font: 800 46px/1.3 system-ui, sans-serif;
  color: #ecfeff;
  animation: xq2-bgt 4.6s ease-in-out infinite;
}
@keyframes xq2-bgt {
  0%, 100% {
    text-shadow: 0 0 6px rgba(165,243,252,.4), 0 0 14px rgba(165,243,252,.25);
  }
  50% {
    text-shadow: 0 0 10px rgba(165,243,252,.95), 0 0 28px rgba(103,232,249,.8), 0 0 56px rgba(34,211,238,.5), 0 0 96px rgba(34,211,238,.3);
  }
}`,
});

fx({
  id: "xq2-barcode-word",
  name: "Barcode Word",
  fa: "بارکد و کلمه",
  description:
    "Scrolling barcode stripes sit beside the word while a red scanner line sweeps back and forth across them.",
  faDescription: "نوارهای بارکد در حال حرکت کنار کلمه می‌خزند و خط قرمز اسکنر رویشان رفت‌وبرگشت می‌کشد.",
  tags: ["barcode", "scanner", "stripes", "monospace"],
  previewBg: "#edf1f7",
  html: `<span class="bc"><span class="code"></span><span class="num">DEKO-4816</span></span>`,
  css: `.fx-xq2-barcode-word .bc {
  display: inline-flex;
  align-items: center;
  gap: 18px;
}
.fx-xq2-barcode-word .code {
  position: relative;
  width: 62px;
  height: 60px;
  background-image: linear-gradient(90deg, #0f172a 0 2px, transparent 2px 5px, #0f172a 5px 6px, transparent 6px 11px, #0f172a 11px 14px, transparent 14px 17px, #0f172a 17px 19px, transparent 19px 24px);
  background-size: 24px 100%;
  animation: xq2-bw 1.2s linear infinite;
}
.fx-xq2-barcode-word .code::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #ef4444;
  box-shadow: 0 0 8px #ef4444;
  animation: xq2-bw-scan 2.2s ease-in-out infinite alternate;
}
.fx-xq2-barcode-word .num {
  font: 700 28px/1.2 ui-monospace, "Courier New", monospace;
  color: #0f172a;
  letter-spacing: 2px;
}
@keyframes xq2-bw {
  to { background-position: 24px 0; }
}
@keyframes xq2-bw-scan {
  from { left: 2px; }
  to { left: 56px; }
}`,
});

fx({
  id: "xq2-skywriter",
  name: "Skywriter",
  fa: "نویسنده‌ی آسمانی",
  description:
    "Smoke letters draw themselves across the sky RTL while a tiny glowing plane dot flies just ahead of the stroke.",
  faDescription: "حروف دودی خودشان را در آسمان می‌کشند و یک هواپیمای نقطه‌ای درخشان کمی جلوتر از قلم پرواز می‌کند.",
  tags: ["skywriting", "clip-path", "plane", "reveal"],
  previewBg: "#0e2033",
  html: `<span class="sk"><span class="sky">آسمان</span><span class="plane"></span></span>`,
  css: `.fx-xq2-skywriter .sk {
  position: relative;
  display: inline-block;
}
.fx-xq2-skywriter .sky {
  display: inline-block;
  font: 800 44px/1.3 "Segoe Print", "Comic Sans MS", cursive;
  color: #e0f2fe;
  text-shadow: 0 0 12px rgba(224,242,254,.55);
  animation: xq2-sky 6.5s ease-in-out infinite;
}
@keyframes xq2-sky {
  0% { clip-path: inset(0 0 0 100%); }
  42%, 78% { clip-path: inset(0 0 0 0); }
  92%, 100% { clip-path: inset(0 0 0 100%); }
}
.fx-xq2-skywriter .plane {
  position: absolute;
  top: -10px;
  left: 92%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 0 10px 2px rgba(255,255,255,.8);
  animation: xq2-sky-plane 6.5s linear infinite;
}
@keyframes xq2-sky-plane {
  0% { left: 92%; opacity: 1; }
  42% { left: 2%; opacity: 1; }
  46%, 100% { left: 2%; opacity: 0; }
}`,
});

fx({
  id: "xq2-cascading-mirror",
  name: "Cascading Mirror",
  fa: "آبشار بازتاب",
  description:
    "The word shimmers above its own mirrored reflection, which ripples and blurs like water below a sign.",
  faDescription: "کلمه روی بازتاب آینه‌ای خودش می‌درخشد و بازتاب مثل آب زیر تابلو موج می‌خورد و بلور می‌شود.",
  tags: ["reflection", "mirror", "ripple", "water"],
  previewBg: "#07202b",
  html: `<span class="w" data-t="دی‌کو">دی‌کو</span>`,
  css: `.fx-xq2-cascading-mirror .w {
  position: relative;
  display: inline-block;
  font: 900 46px/1.2 system-ui, sans-serif;
  color: #67e8f9;
  text-shadow: 0 0 18px rgba(103,232,249,.4);
}
.fx-xq2-cascading-mirror .w::after {
  content: attr(data-t);
  position: absolute;
  left: 0;
  top: 100%;
  background-image: linear-gradient(0deg, rgba(103,232,249,.5) 0%, rgba(103,232,249,.12) 55%, transparent 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: xq2-cm 3s ease-in-out infinite;
}
@keyframes xq2-cm {
  0%, 100% { transform: scaleY(-1) skewX(0deg); opacity: .75; filter: blur(.5px); }
  25% { transform: scaleY(-1) skewX(5deg); opacity: .55; filter: blur(1.5px); }
  50% { transform: scaleY(-1) skewX(-4deg); opacity: .8; filter: blur(.5px); }
  75% { transform: scaleY(-1) skewX(3deg); opacity: .5; filter: blur(2px); }
}`,
});
