import type { CssEffect } from "./types";

/** Text effects — batch 3 (12 effects) */
export const textEffects3: CssEffect[] = [
  {
    id: "highlight-sweep",
    name: "Marker Highlight Sweep",
    fa: "هایلایت ماژیکی",
    description: "A marker-style highlight sweeps behind the text on hover.",
    faDescription: "با هاور، هایلایت ماژیکی پشت متن کشیده می‌شود.",
    category: "text",
    tags: ["highlight", "marker", "hover"],
    interaction: "hover",
    html: `<h2 class="hsw-text">Highlight!</h2>`,
    css: `.fx-highlight-sweep .hsw-text {
  font-size: 40px;
  font-weight: 800;
  color: #1c1917;
  padding: 2px 8px;
  background-image: linear-gradient(#fde047, #fde047);
  background-repeat: no-repeat;
  background-size: 0% 55%;
  background-position: 0 75%;
  cursor: default;
  transition: background-size 0.45s ease;
}
.fx-highlight-sweep .hsw-text:hover {
  background-size: 100% 55%;
}`,
    previewBg: "#fef3c7",
  },
  {
    id: "retro-sunset-text",
    name: "Retro Sunset Text",
    fa: "متن غروب رترو",
    description: "An 80s sunset gradient with scanline stripes across the word.",
    faDescription: "گرادیان غروب دهه هشتاد با خطوط اسکن روی حروف.",
    category: "text",
    tags: ["retro", "80s", "gradient"],
    interaction: "auto",
    html: `<h2 class="rst-text">RETRO</h2>`,
    css: `.fx-retro-sunset-text .rst-text {
  font-size: 54px;
  font-weight: 900;
  letter-spacing: 5px;
  background: linear-gradient(180deg, #fef08a 0%, #fb923c 40%, #f43f5e 70%, #a21caf 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
}
.fx-retro-sunset-text .rst-text::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    180deg,
    transparent 0 6px,
    rgba(10, 8, 18, 0.85) 6px 8px
  );
  pointer-events: none;
}`,
  },
  {
    id: "long-shadow-text",
    name: "Long Shadow Text",
    fa: "متن سایه بلند",
    description: "A dramatic long shadow stretches behind bold letters and shifts on hover.",
    faDescription: "سایه بلند و باشکوه پشت حروف که با هاور جابه‌جا می‌شود.",
    category: "text",
    tags: ["shadow", "bold", "hover"],
    interaction: "hover",
    html: `<h2 class="lsh-text">DEPTH</h2>`,
    css: `.fx-long-shadow-text .lsh-text {
  font-size: 52px;
  font-weight: 900;
  color: #f8fafc;
  text-shadow:
    2px 2px 0 #6d28d9, 4px 4px 0 #6d28d9, 6px 6px 0 #6d28d9,
    8px 8px 0 #6d28d9, 10px 10px 0 #6d28d9, 12px 12px 0 #6d28d9,
    14px 14px 0 #6d28d9, 16px 16px 0 #6d28d9;
  cursor: default;
  transition: text-shadow 0.4s ease, transform 0.4s ease;
}
.fx-long-shadow-text .lsh-text:hover {
  text-shadow:
    2px 2px 0 #d946ef, 4px 4px 0 #d946ef, 6px 6px 0 #d946ef,
    8px 8px 0 #d946ef, 10px 10px 0 #d946ef, 12px 12px 0 #d946ef,
    14px 14px 0 #d946ef, 16px 16px 0 #d946ef;
  transform: translate(-4px, -4px);
}`,
  },
  {
    id: "reveal-up-text",
    name: "Mask Reveal Line",
    fa: "متن با ماسک بالا",
    description: "The line slides up from behind a mask, like a title card entrance.",
    faDescription: "خط از پشت ماسک بالا می‌آید؛ مثل تیتر فیلم.",
    category: "text",
    tags: ["mask", "reveal", "entrance"],
    interaction: "auto",
    html: `<div class="rvu-box"><h2 class="rvu-text">HELLO THERE</h2></div>`,
    css: `.fx-reveal-up-text .rvu-box {
  overflow: hidden;
  padding: 4px 0;
}
.fx-reveal-up-text .rvu-text {
  font-size: 40px;
  font-weight: 900;
  color: #f0abfc;
  transform: translateY(120%);
  animation: rvu-up 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}
@keyframes rvu-up {
  0%, 15% { transform: translateY(120%); }
  40%, 80% { transform: translateY(0); }
  95%, 100% { transform: translateY(-120%); }
}`,
  },
  {
    id: "split-color-text",
    name: "Split Color Text",
    fa: "متن دو رنگ",
    description: "Top and bottom halves of the letters wear two different colors.",
    faDescription: "نیمه بالایی و پایینی حروف دو رنگ متفاوت دارند.",
    category: "text",
    tags: ["split", "gradient", "background-clip"],
    interaction: "auto",
    html: `<h2 class="spl-text">SPLIT</h2>`,
    css: `.fx-split-color-text .spl-text {
  font-size: 52px;
  font-weight: 900;
  background: linear-gradient(180deg, #f472b6 0 50%, #67e8f9 50% 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}`,
  },
  {
    id: "squish-text",
    name: "Squish Text",
    fa: "متن له‌شونده",
    description: "The word squishes down like jelly when you hover it.",
    faDescription: "متن با هاور مثل ژله له می‌شود.",
    category: "text",
    tags: ["squish", "scale", "hover"],
    interaction: "hover",
    html: `<h2 class="sqh-text">SQUISH</h2>`,
    css: `.fx-squish-text .sqh-text {
  font-size: 48px;
  font-weight: 900;
  color: #5eead4;
  cursor: default;
}
.fx-squish-text .sqh-text:hover {
  animation: sqh-press 0.55s ease;
}
@keyframes sqh-press {
  0% { transform: scale(1); }
  35% { transform: scale(1.15, 0.8); }
  65% { transform: scale(0.92, 1.12); }
  100% { transform: scale(1); }
}`,
  },
  {
    id: "glow-pulse-text",
    name: "Glow Pulse Text",
    fa: "متن درخشان تپنده",
    description: "A soft neon glow breathes in and out around the letters.",
    faDescription: "هاله نئونی نرم دور حروف مثل تنفس بالا و پایین می‌رود.",
    category: "text",
    tags: ["glow", "pulse", "neon"],
    interaction: "auto",
    html: `<h2 class="gpl-text">BREATHE</h2>`,
    css: `.fx-glow-pulse-text .gpl-text {
  font-size: 46px;
  font-weight: 800;
  color: #a5b4fc;
  animation: gpl-breathe 2.6s ease-in-out infinite;
}
@keyframes gpl-breathe {
  0%, 100% { text-shadow: 0 0 4px rgba(165, 180, 252, 0.3); }
  50% { text-shadow: 0 0 6px rgba(165, 180, 252, 0.8), 0 0 22px rgba(165, 180, 252, 0.6), 0 0 44px rgba(165, 180, 252, 0.35); }
}`,
  },
  {
    id: "marquee-text",
    name: "Marquee Ticker",
    fa: "نوار متحرک متن",
    description: "Text scrolls horizontally in an endless marquee loop.",
    faDescription: "متن به‌صورت بی‌پایان به‌صورت افقی حرکت می‌کند.",
    category: "text",
    tags: ["marquee", "ticker", "scroll"],
    interaction: "auto",
    html: `<div class="mrq-box"><div class="mrq-track"><span>DeKo css · افکت‌های آماده · کپی کن و استفاده کن · DeKo css · افکت‌های آماده · کپی کن و استفاده کن ·&nbsp;</span></div></div>`,
    css: `.fx-marquee-text .mrq-box {
  width: 240px;
  overflow: hidden;
  white-space: nowrap;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding: 8px 0;
}
.fx-marquee-text .mrq-track {
  display: inline-block;
  animation: mrq-run 9s linear infinite;
}
.fx-marquee-text .mrq-track span {
  font-size: 15px;
  font-weight: 600;
  color: #fbbf24;
}
@keyframes mrq-run {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}`,
  },
  {
    id: "rubber-text",
    name: "Rubber Band Text",
    fa: "متن کش‌مانندی",
    description: "A wobbly rubber-band scale animation plays on hover.",
    faDescription: "با هاور متن مثل کش می‌لرزد.",
    category: "text",
    tags: ["rubber", "wobble", "hover"],
    interaction: "hover",
    html: `<h2 class="rbb-text">WOBBLE</h2>`,
    css: `.fx-rubber-text .rbb-text {
  font-size: 48px;
  font-weight: 900;
  color: #fdba74;
  cursor: default;
}
.fx-rubber-text .rbb-text:hover {
  animation: rbb-band 0.9s ease;
}
@keyframes rbb-band {
  0% { transform: scale(1); }
  30% { transform: scaleX(1.25) scaleY(0.75); }
  40% { transform: scaleX(0.75) scaleY(1.25); }
  50% { transform: scaleX(1.15) scaleY(0.85); }
  65% { transform: scaleX(0.95) scaleY(1.05); }
  75% { transform: scaleX(1.05) scaleY(0.95); }
  100% { transform: scale(1); }
}`,
  },
  {
    id: "comic-shadow-text",
    name: "Comic Pop Text",
    fa: "متن کمیک‌استایل",
    description: "Hard offset shadow pops out and colors burst on hover.",
    faDescription: "با هاور سایه سخت بیرون می‌زند و رنگ‌ها منفجر می‌شوند.",
    category: "text",
    tags: ["comic", "pop", "shadow"],
    interaction: "hover",
    html: `<h2 class="csc-text">POW!</h2>`,
    css: `.fx-comic-shadow-text .csc-text {
  font-size: 54px;
  font-weight: 900;
  font-style: italic;
  color: #fde047;
  cursor: default;
  transition: text-shadow 0.25s ease, transform 0.25s ease;
}
.fx-comic-shadow-text .csc-text:hover {
  color: #f43f5e;
  text-shadow: 4px 4px 0 #fde047, 8px 8px 0 #1c1917;
  transform: rotate(-3deg) scale(1.08);
}`,
  },
  {
    id: "wavy-underline-text",
    name: "Wavy Underline",
    fa: "زیرخط موجی",
    description: "An animated squiggle rides beneath the text like a small wave.",
    faDescription: "زیرخط موجی مثل موج کوچک زیر متن حرکت می‌کند.",
    category: "text",
    tags: ["underline", "wavy", "animation"],
    interaction: "auto",
    html: `<h2 class="wvu-text">Wavy Baby</h2>`,
    css: `.fx-wavy-underline-text .wvu-text {
  font-size: 38px;
  font-weight: 800;
  color: #e2e8f0;
  padding-bottom: 14px;
  background-image: repeating-linear-gradient(
    90deg,
    #22d3ee 0 8px,
    transparent 8px 16px
  );
  background-repeat: no-repeat;
  background-size: 40px 4px;
  background-position: 0 100%;
  border-radius: 2px;
  animation: wvu-slide 1.4s linear infinite;
}
@keyframes wvu-slide {
  to { background-position: 240px 100%; }
}`,
  },
  {
    id: "chromatic-text",
    name: "Chromatic Split Text",
    fa: "متن جداشدگی رنگی",
    description: "Red and blue ghosts drift around the text like lens misfocus.",
    faDescription: "شبح‌های قرمز و آبی دور متن مثل خطای لنز حرکت می‌کنند.",
    category: "text",
    tags: ["chromatic", "glitch", "shadow"],
    interaction: "auto",
    html: `<h2 class="chr-text">CHROMA</h2>`,
    css: `.fx-chromatic-text .chr-text {
  font-size: 50px;
  font-weight: 900;
  letter-spacing: 3px;
  color: #f8fafc;
  animation: chr-drift 3s ease-in-out infinite;
}
@keyframes chr-drift {
  0%, 100% { text-shadow: -3px 0 rgba(244, 63, 94, 0.8), 3px 0 rgba(34, 211, 238, 0.8); }
  50% { text-shadow: 3px 0 rgba(244, 63, 94, 0.8), -3px 0 rgba(34, 211, 238, 0.8); }
}`,
  },
];
