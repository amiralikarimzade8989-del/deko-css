import type { CssEffect } from "../types";

/**
 * DeKo css — plus batch "images-plus" (Task 8-f).
 * 20 new image effects, prefix iq-, every selector scoped under .fx-<id>.
 * "Photos" are pure CSS gradient placeholders inside frames — no url(), no JS.
 */

export const imageEffectsPlus: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  imageEffectsPlus.push({ category: "images", interaction: "hover", ...e } as CssEffect);
}

/* ---------------------------------------------------------- */
/* 1 — Duotone lift (wash fades to full color)                */
/* ---------------------------------------------------------- */
fx({
  id: "iq-duotone-hover",
  name: "Duotone Lift",
  fa: "دوتون به رنگ کامل",
  description: "Photo sits under a pink-violet duotone wash; hover lifts the wash away to uncover full color.",
  faDescription: "عکس زیر لایه‌ی دوتون صورتی-بنفش است و با هاور لایه کنار می‌رود و رنگ اصلی پیدا می‌شود.",
  tags: ["duotone", "blend", "hover"],
  html: `<div class="du-frame"><div class="du-photo"></div><div class="du-wash"></div></div>`,
  css: `.fx-iq-duotone-hover .du-frame {
  position: relative;
  width: 210px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}
.fx-iq-duotone-hover .du-photo {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.55), transparent 45%),
    radial-gradient(circle at 75% 70%, rgba(255, 255, 255, 0.3), transparent 40%),
    linear-gradient(135deg, #f59e0b, #ef4444 50%, #7c2d12);
  transition: filter 0.5s ease;
}
.fx-iq-duotone-hover .du-wash {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #f472b6, #8b5cf6);
  mix-blend-mode: color;
  transition: opacity 0.5s ease, transform 0.6s ease;
}
.fx-iq-duotone-hover .du-frame:hover .du-wash { opacity: 0; transform: scale(1.06); }
.fx-iq-duotone-hover .du-frame:hover .du-photo { filter: saturate(1.25); }`,
});

/* ---------------------------------------------------------- */
/* 2 — Blur to sharp (focus pull + settle zoom)               */
/* ---------------------------------------------------------- */
fx({
  id: "iq-blur-to-sharp",
  name: "Blur to Sharp",
  fa: "محو به واضح",
  description: "The photo starts soft and out of focus; on hover it snaps sharp and settles from a slight zoom.",
  faDescription: "عکس اول محو است؛ با هاور فوکوس می‌شود و از بزرگ‌نمایی جزئی به جای خود می‌نشیند.",
  tags: ["blur", "focus", "filter"],
  html: `<div class="bs-frame"><div class="bs-photo"></div><span class="bs-tag">FOCUSED</span></div>`,
  css: `.fx-iq-blur-to-sharp .bs-frame {
  position: relative;
  width: 210px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}
.fx-iq-blur-to-sharp .bs-photo {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 70% 25%, rgba(255, 255, 255, 0.5), transparent 40%),
    linear-gradient(135deg, #22d3ee, #2563eb 55%, #1e1b4b);
  filter: blur(7px) saturate(0.8);
  transform: scale(1.12);
  transition: filter 0.6s ease, transform 0.6s ease;
}
.fx-iq-blur-to-sharp .bs-tag {
  position: absolute;
  bottom: 10px;
  left: 12px;
  font-size: 9px;
  letter-spacing: 2px;
  color: #ffffff;
  background: rgba(2, 6, 23, 0.55);
  padding: 4px 8px;
  border-radius: 999px;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.45s ease 0.15s, transform 0.45s ease 0.15s;
}
.fx-iq-blur-to-sharp .bs-frame:hover .bs-photo { filter: blur(0) saturate(1.1); transform: scale(1); }
.fx-iq-blur-to-sharp .bs-frame:hover .bs-tag { opacity: 1; transform: translateY(0); }`,
});

/* ---------------------------------------------------------- */
/* 3 — Caption slide panels (two corners)                     */
/* ---------------------------------------------------------- */
fx({
  id: "iq-caption-panels",
  name: "Caption Slide Panels",
  fa: "زیرنویس از دو گوشه",
  description: "Two caption panels slide in from opposite corners of the photo on hover.",
  faDescription: "دو پنل زیرنویس با هاور از گوشه‌های مخالف عکس وارد می‌شوند.",
  tags: ["caption", "slide", "corners"],
  html: `<div class="cp-frame"><div class="cp-photo"></div><div class="cp-panel cp-tl"><strong>Azores</strong></div><div class="cp-panel cp-br">fog season, 2025</div></div>`,
  css: `.fx-iq-caption-panels .cp-frame {
  position: relative;
  width: 210px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}
.fx-iq-caption-panels .cp-photo {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 78% 20%, rgba(255, 255, 255, 0.4), transparent 42%),
    linear-gradient(135deg, #10b981, #0f766e 55%, #134e4a);
  transition: transform 0.6s ease;
}
.fx-iq-caption-panels .cp-panel {
  position: absolute;
  padding: 9px 14px;
  background: rgba(2, 6, 23, 0.72);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  color: #ffffff;
  transition: transform 0.5s cubic-bezier(0.3, 0.9, 0.3, 1), opacity 0.4s ease;
}
.fx-iq-caption-panels .cp-tl {
  top: 14px;
  left: 0;
  border-radius: 0 10px 10px 0;
  font-size: 14px;
  transform: translateX(-105%);
}
.fx-iq-caption-panels .cp-br {
  bottom: 14px;
  right: 0;
  border-radius: 10px 0 0 10px;
  font-size: 10.5px;
  color: #cbd5e1;
  transform: translateX(105%);
  transition-delay: 0.08s;
}
.fx-iq-caption-panels .cp-frame:hover .cp-photo { transform: scale(1.05); }
.fx-iq-caption-panels .cp-frame:hover .cp-tl { transform: translateX(0); }
.fx-iq-caption-panels .cp-frame:hover .cp-br { transform: translateX(0); }`,
});

/* ---------------------------------------------------------- */
/* 4 — Circle reveal (clip-path circle expands)               */
/* ---------------------------------------------------------- */
fx({
  id: "iq-circle-reveal",
  name: "Circle Reveal",
  fa: "ظهور دایره‌ای",
  description: "A small porthole of the photo expands into the full frame via an animated clip-path circle.",
  faDescription: "یک دایره کوچک از عکس با هاور بزرگ می‌شود و کل قاب را می‌پوشاند.",
  tags: ["clip-path", "circle", "reveal"],
  html: `<div class="cr-frame"><div class="cr-photo"></div></div>`,
  css: `.fx-iq-circle-reveal .cr-frame {
  width: 210px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
  background:
    radial-gradient(rgba(148, 163, 184, 0.25) 1px, transparent 1.5px) 0 0 / 14px 14px,
    #0b1120;
}
.fx-iq-circle-reveal .cr-photo {
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 70% 25%, rgba(255, 255, 255, 0.45), transparent 40%),
    linear-gradient(135deg, #fbbf24, #fb7185 55%, #9d174d);
  clip-path: circle(13% at 50% 50%);
  transition: clip-path 0.7s cubic-bezier(0.3, 0.9, 0.3, 1);
}
.fx-iq-circle-reveal .cr-frame:hover .cr-photo { clip-path: circle(72% at 50% 50%); }`,
});

/* ---------------------------------------------------------- */
/* 5 — Blinds reveal (slats collapse open)                    */
/* ---------------------------------------------------------- */
fx({
  id: "iq-blinds-reveal",
  name: "Blinds Reveal",
  fa: "پرده کرکره‌ای",
  description: "Dark slats cover the photo like closed blinds; hover collapses them one by one.",
  faDescription: "تیغه‌های تیره مثل کرکره روی عکس بسته‌اند و با هاور یکی‌یکی باز می‌شوند.",
  tags: ["blinds", "slats", "stagger"],
  html: `<div class="bl-frame"><div class="bl-photo"></div><div class="bl-slats"><i></i><i></i><i></i><i></i><i></i></div></div>`,
  css: `.fx-iq-blinds-reveal .bl-frame {
  position: relative;
  width: 210px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}
.fx-iq-blinds-reveal .bl-photo {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.45), transparent 40%),
    linear-gradient(135deg, #34d399, #0d9488 55%, #0f766e);
  transform: scale(1.15);
  transition: transform 0.8s ease;
}
.fx-iq-blinds-reveal .bl-slats {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
}
.fx-iq-blinds-reveal .bl-slats i {
  background: #111827;
  transform-origin: top;
  transition: transform 0.6s cubic-bezier(0.4, 0.9, 0.3, 1);
}
.fx-iq-blinds-reveal .bl-slats i:nth-child(1) { transition-delay: 0s; }
.fx-iq-blinds-reveal .bl-slats i:nth-child(2) { transition-delay: 0.08s; }
.fx-iq-blinds-reveal .bl-slats i:nth-child(3) { transition-delay: 0.16s; }
.fx-iq-blinds-reveal .bl-slats i:nth-child(4) { transition-delay: 0.24s; }
.fx-iq-blinds-reveal .bl-slats i:nth-child(5) { transition-delay: 0.32s; }
.fx-iq-blinds-reveal .bl-frame:hover .bl-slats i { transform: scaleY(0); }
.fx-iq-blinds-reveal .bl-frame:hover .bl-photo { transform: scale(1); }`,
});

/* ---------------------------------------------------------- */
/* 6 — Pixel mosaic (tiles brighten from corners inward)      */
/* ---------------------------------------------------------- */
fx({
  id: "iq-pixel-mosaic",
  name: "Pixel Mosaic",
  fa: "موزاییک پیکسلی",
  description: "A 3×3 pixel grid veils the photo; hovering brightens the tiles away starting from the corners.",
  faDescription: "شبکه ۳×۳ پیکسلی روی عکس است و با هاور از گوشه‌ها به داخل روشن می‌شود.",
  tags: ["mosaic", "grid", "stagger"],
  html: `<div class="pm-frame"><div class="pm-photo"></div><div class="pm-grid"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>`,
  css: `.fx-iq-pixel-mosaic .pm-frame {
  position: relative;
  width: 210px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}
.fx-iq-pixel-mosaic .pm-photo {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.5), transparent 45%),
    linear-gradient(135deg, #a78bfa, #6d28d9 55%, #312e81);
  filter: brightness(1.1);
}
.fx-iq-pixel-mosaic .pm-grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.fx-iq-pixel-mosaic .pm-grid i {
  background: #0f172a;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fx-iq-pixel-mosaic .pm-grid i:nth-child(1) { transition-delay: 0s; }
.fx-iq-pixel-mosaic .pm-grid i:nth-child(3) { transition-delay: 0.05s; }
.fx-iq-pixel-mosaic .pm-grid i:nth-child(7) { transition-delay: 0.05s; }
.fx-iq-pixel-mosaic .pm-grid i:nth-child(9) { transition-delay: 0.1s; }
.fx-iq-pixel-mosaic .pm-grid i:nth-child(2), .fx-iq-pixel-mosaic .pm-grid i:nth-child(4),
.fx-iq-pixel-mosaic .pm-grid i:nth-child(6), .fx-iq-pixel-mosaic .pm-grid i:nth-child(8) { transition-delay: 0.14s; }
.fx-iq-pixel-mosaic .pm-grid i:nth-child(5) { transition-delay: 0.24s; }
.fx-iq-pixel-mosaic .pm-frame:hover .pm-grid i { opacity: 0; transform: scale(0.6); }`,
});

/* ---------------------------------------------------------- */
/* 7 — Rotate zoom frame (tilt + zoom inside white frame)     */
/* ---------------------------------------------------------- */
fx({
  id: "iq-rotate-zoom-frame",
  name: "Rotate Zoom Frame",
  fa: "چرخش و بزرگ‌نمایی در قاب",
  description: "The photo rotates slightly and zooms inside its thick white frame on hover.",
  faDescription: "عکس با هاور کمی می‌چرخد و داخل قاب سفید ضخیم بزرگ می‌شود.",
  tags: ["rotate", "zoom", "frame"],
  html: `<div class="rz-frame"><div class="rz-photo"></div></div>`,
  css: `.fx-iq-rotate-zoom-frame .rz-frame {
  width: 210px;
  height: 140px;
  border-radius: 14px;
  background: #ffffff;
  border: 6px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
.fx-iq-rotate-zoom-frame .rz-photo {
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.5), transparent 40%),
    linear-gradient(135deg, #22d3ee, #6366f1 55%, #4c1d95);
  transition: transform 0.7s cubic-bezier(0.25, 0.9, 0.3, 1.1);
}
.fx-iq-rotate-zoom-frame .rz-frame:hover .rz-photo { transform: rotate(3deg) scale(1.18); }`,
});

/* ---------------------------------------------------------- */
/* 8 — Border draw image (amber line traces around)           */
/* ---------------------------------------------------------- */
fx({
  id: "iq-border-draw-image",
  name: "Border Draw Photo",
  fa: "کشیده شدن قاب دور عکس",
  description: "A warm amber border traces itself around the photo from the top-left corner on hover.",
  faDescription: "قاب کهربایی با هاور از گوشه بالا-چپ دور عکس کشیده می‌شود.",
  tags: ["border", "draw", "trace"],
  html: `<div class="bdi-frame"><div class="bdi-photo"></div></div>`,
  css: `.fx-iq-border-draw-image .bdi-frame {
  position: relative;
  width: 210px;
  height: 140px;
}
.fx-iq-border-draw-image .bdi-photo {
  position: absolute;
  inset: 10px;
  border-radius: 8px;
  background:
    radial-gradient(circle at 25% 30%, rgba(255, 255, 255, 0.45), transparent 42%),
    linear-gradient(135deg, #fb923c, #ea580c 55%, #7c2d12);
  box-shadow: 0 12px 24px rgba(124, 45, 18, 0.35);
}
.fx-iq-border-draw-image .bdi-frame::before, .fx-iq-border-draw-image .bdi-frame::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 0 solid #f59e0b;
  transition: transform 0.5s ease;
  pointer-events: none;
}
.fx-iq-border-draw-image .bdi-frame::before {
  border-top-width: 2px;
  border-right-width: 2px;
  transform: scale(0, 0);
  transform-origin: 0 0;
}
.fx-iq-border-draw-image .bdi-frame::after {
  border-bottom-width: 2px;
  border-left-width: 2px;
  transform: scale(0, 0);
  transform-origin: 100% 100%;
}
.fx-iq-border-draw-image .bdi-frame:hover::before, .fx-iq-border-draw-image .bdi-frame:hover::after { transform: scale(1, 1); }
.fx-iq-border-draw-image .bdi-frame:hover::after { transition-delay: 0.28s; }`,
});

/* ---------------------------------------------------------- */
/* 9 — Shadow pop (flat photo floats up)                      */
/* ---------------------------------------------------------- */
fx({
  id: "iq-shadow-pop-image",
  name: "Shadow Pop Photo",
  fa: "پرش سایه‌دار عکس",
  description: "Flat, slightly desaturated photo lifts off the page with a deep floating shadow on hover.",
  faDescription: "عکس تخت و کم‌رنگ با هاور از صفحه جدا می‌شود و سایه‌ی عمیق می‌گیرد.",
  tags: ["shadow", "lift", "float"],
  previewBg: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
  html: `<div class="sp-photo"></div>`,
  css: `.fx-iq-shadow-pop-image .sp-photo {
  width: 200px;
  height: 140px;
  border-radius: 12px;
  background:
    radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.5), transparent 42%),
    linear-gradient(135deg, #f97316, #db2777 55%, #6b21a8);
  filter: grayscale(0.6) brightness(0.96);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.12);
  transition: transform 0.5s cubic-bezier(0.3, 0.9, 0.3, 1), box-shadow 0.5s ease, filter 0.5s ease;
}
.fx-iq-shadow-pop-image .sp-photo:hover {
  transform: translateY(-10px) scale(1.02);
  filter: none;
  box-shadow:
    0 24px 40px -12px rgba(30, 27, 75, 0.45),
    0 8px 16px -8px rgba(30, 27, 75, 0.3);
}`,
});

/* ---------------------------------------------------------- */
/* 10 — Tilt 3D photo (perspective tilt toward cursor side)   */
/* ---------------------------------------------------------- */
fx({
  id: "iq-tilt-3d-photo",
  name: "3D Tilt Photo",
  fa: "عکس سه‌بعدی کج",
  description: "The photo tilts back in 3D perspective on hover with a directional shadow.",
  faDescription: "عکس با هاور در پرسپکتیو سه‌بعدی کج می‌شود و سایه‌ی جهت‌دار می‌گیرد.",
  tags: ["3d", "tilt", "perspective"],
  html: `<div class="t3-scene"><div class="t3-photo"></div></div>`,
  css: `.fx-iq-tilt-3d-photo .t3-scene { perspective: 640px; }
.fx-iq-tilt-3d-photo .t3-photo {
  width: 210px;
  height: 140px;
  border-radius: 12px;
  background:
    radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.5), transparent 42%),
    linear-gradient(135deg, #4ade80, #059669 55%, #064e3b);
  box-shadow: 0 10px 20px rgba(6, 78, 59, 0.35);
  transition: transform 0.55s cubic-bezier(0.3, 0.9, 0.3, 1.05), box-shadow 0.55s ease;
}
.fx-iq-tilt-3d-photo .t3-scene:hover .t3-photo {
  transform: rotateX(10deg) rotateY(-14deg) translateY(-4px);
  box-shadow: -20px 24px 34px rgba(6, 78, 59, 0.4);
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Glass overlay photo (frosted caption bar rises)       */
/* ---------------------------------------------------------- */
fx({
  id: "iq-glass-overlay-photo",
  name: "Glass Overlay Photo",
  fa: "نوار شیشه‌ای روی عکس",
  description: "A frosted-glass caption bar rises from the bottom and blurs the photo behind it on hover.",
  faDescription: "نوار شیشه‌ای مات با هاور از پایین بالا می‌آید و پشتش عکس را مات می‌کند.",
  tags: ["glass", "backdrop-filter", "caption"],
  html: `<div class="go-frame"><div class="go-photo"></div><div class="go-bar"><strong>Cliffside</strong><span>Nazaré, PT</span></div></div>`,
  css: `.fx-iq-glass-overlay-photo .go-frame {
  position: relative;
  width: 210px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}
.fx-iq-glass-overlay-photo .go-photo {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.45), transparent 40%),
    linear-gradient(135deg, #0ea5e9, #1e3a8a 60%, #172554);
}
.fx-iq-glass-overlay-photo .go-bar {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  padding: 9px 12px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(0px);
  backdrop-filter: blur(0px);
  transform: translateY(130%);
  transition: transform 0.5s cubic-bezier(0.3, 0.9, 0.3, 1), background 0.5s ease, -webkit-backdrop-filter 0.5s ease, backdrop-filter 0.5s ease;
}
.fx-iq-glass-overlay-photo .go-bar strong { font-size: 13px; }
.fx-iq-glass-overlay-photo .go-bar span { font-size: 10px; opacity: 0.85; }
.fx-iq-glass-overlay-photo .go-frame:hover .go-bar {
  transform: translateY(0);
  background: rgba(255, 255, 255, 0.18);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Animated border photo (rotating conic ring)           */
/* ---------------------------------------------------------- */
fx({
  id: "iq-animated-border-photo",
  name: "Animated Border Photo",
  fa: "قاب گرادیانی چرخان",
  description: "A rainbow conic gradient keeps rotating around the photo frame like liquid light.",
  faDescription: "حلقه‌ی گرادیانی رنگین‌کمانی مدام دور قاب عکس می‌چرخد.",
  tags: ["border", "conic-gradient", "loop", "auto"],
  interaction: "auto",
  html: `<div class="ab-frame"><div class="ab-conic"></div><div class="ab-photo"></div></div>`,
  css: `.fx-iq-animated-border-photo .ab-frame {
  position: relative;
  width: 210px;
  height: 140px;
  border-radius: 14px;
  padding: 4px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}
.fx-iq-animated-border-photo .ab-conic {
  position: absolute;
  inset: -60%;
  background: conic-gradient(#22d3ee, #818cf8, #f472b6, #fbbf24, #22d3ee);
  animation: cq-ab-spin 3.6s linear infinite;
}
.fx-iq-animated-border-photo .ab-photo {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background:
    radial-gradient(circle at 28% 28%, rgba(255, 255, 255, 0.5), transparent 42%),
    linear-gradient(135deg, #fb7185, #a855f7 60%, #4c1d95);
}
@keyframes cq-ab-spin { to { transform: rotate(360deg); } }`,
});

/* ---------------------------------------------------------- */
/* 13 — Ripple scan (auto scanline + radar rings)             */
/* ---------------------------------------------------------- */
fx({
  id: "iq-ripple-scan",
  name: "Ripple Scan",
  fa: "اسکن راداری",
  description: "A cyan scanline sweeps the photo forever while radar rings pulse outward from the center.",
  faDescription: "خط اسکن فیروزه‌ای مدام روی عکس می‌گذرد و حلقه‌های رادار از مرکز منتشر می‌شوند.",
  tags: ["scan", "radar", "ripple", "auto"],
  interaction: "auto",
  html: `<div class="rx-frame"><div class="rx-photo"></div><div class="rx-scan"></div><div class="rx-ring r1"></div><div class="rx-ring r2"></div></div>`,
  css: `.fx-iq-ripple-scan .rx-frame {
  position: relative;
  width: 210px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
  background: #020617;
}
.fx-iq-ripple-scan .rx-photo {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(0deg, rgba(2, 6, 23, 0.25) 0 2px, transparent 2px 5px),
    linear-gradient(135deg, #d946ef, #7c3aed 60%, #2e1065);
}
.fx-iq-ripple-scan .rx-scan {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 26px;
  background: linear-gradient(180deg, transparent, rgba(103, 232, 249, 0.35));
  border-bottom: 2px solid rgba(103, 232, 249, 0.8);
  animation: cq-rx-scan 2.6s linear infinite;
}
.fx-iq-ripple-scan .rx-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  margin: -15px;
  border: 2px solid rgba(103, 232, 249, 0.75);
  border-radius: 50%;
  animation: cq-rx-ring 2.6s ease-out infinite;
}
.fx-iq-ripple-scan .rx-ring.r2 { animation-delay: 1.3s; }
@keyframes cq-rx-scan {
  0% { transform: translateY(-30px); }
  100% { transform: translateY(150px); }
}
@keyframes cq-rx-ring {
  0% { transform: scale(0.4); opacity: 1; }
  100% { transform: scale(3.4); opacity: 0; }
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Sweep shine photo (glossy band crosses)               */
/* ---------------------------------------------------------- */
fx({
  id: "iq-sweep-shine-photo",
  name: "Sweep Shine Photo",
  fa: "درخشش عبوری",
  description: "A glossy band of light sweeps diagonally across the photo on hover.",
  faDescription: "نوار براق نوری با هاور به‌صورت مورب روی عکس عبور می‌کند.",
  tags: ["shine", "sweep", "gloss"],
  html: `<div class="sw-frame"><div class="sw-photo"></div><div class="sw-shine"></div></div>`,
  css: `.fx-iq-sweep-shine-photo .sw-frame {
  position: relative;
  width: 210px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}
.fx-iq-sweep-shine-photo .sw-photo {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.45), transparent 42%),
    linear-gradient(135deg, #fbbf24, #f97316 55%, #c2410c);
  transition: filter 0.6s ease;
}
.fx-iq-sweep-shine-photo .sw-shine {
  position: absolute;
  top: -50%;
  bottom: -50%;
  left: -80px;
  width: 60px;
  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.55), transparent);
  transform: translateX(-40px) skewX(-18deg);
  transition: transform 0.85s ease;
}
.fx-iq-sweep-shine-photo .sw-frame:hover .sw-shine { transform: translateX(360px) skewX(-18deg); }
.fx-iq-sweep-shine-photo .sw-frame:hover .sw-photo { filter: brightness(1.08); }`,
});

/* ---------------------------------------------------------- */
/* 15 — Slider mock (checkbox crossfade + dots)               */
/* ---------------------------------------------------------- */
fx({
  id: "iq-slider-mock",
  name: "Checkbox Slider",
  fa: "اسلایدر با چک‌باکس",
  description: "Two gradient slides crossfade; the dots are a hidden checkbox pair — pure CSS, click them.",
  faDescription: "دو اسلاید با هم محو-ظاهر می‌شوند؛ نقطه‌ها یک چک‌باکس پنهان‌اند — بدون جاوااسکریپت، کلیک کنید.",
  tags: ["slider", "checkbox", "crossfade", "click"],
  interaction: "click",
  html: `<input type="checkbox" class="sl-check" id="iq-sl-toggle"><div class="sl-wrap"><div class="sl-stage"><div class="sl-slide sl-s1"></div><div class="sl-slide sl-s2"><span class="sl-badge">02</span></div></div><div class="sl-dots"><label class="sl-dot sl-d1" for="iq-sl-toggle"></label><label class="sl-dot sl-d2" for="iq-sl-toggle"></label></div></div>`,
  css: `.fx-iq-slider-mock .sl-check { display: none; }
.fx-iq-slider-mock .sl-stage {
  position: relative;
  width: 210px;
  height: 130px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}
.fx-iq-slider-mock .sl-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.6s ease;
}
.fx-iq-slider-mock .sl-s1 {
  opacity: 1;
  background:
    radial-gradient(circle at 70% 25%, rgba(255, 255, 255, 0.5), transparent 45%),
    linear-gradient(135deg, #34d399, #0ea5e9 70%, #1e40af);
}
.fx-iq-slider-mock .sl-s2 {
  background:
    radial-gradient(circle at 25% 30%, rgba(255, 255, 255, 0.45), transparent 40%),
    linear-gradient(135deg, #fb7185, #c026d3 60%, #581c87);
}
.fx-iq-slider-mock .sl-badge {
  position: absolute;
  top: 10px;
  left: 12px;
  font-size: 10px;
  letter-spacing: 1px;
  color: #ffffff;
  background: rgba(2, 6, 23, 0.4);
  border-radius: 999px;
  padding: 3px 9px;
}
.fx-iq-slider-mock .sl-check:checked ~ .sl-wrap .sl-s1 { opacity: 0; }
.fx-iq-slider-mock .sl-check:checked ~ .sl-wrap .sl-s2 { opacity: 1; }
.fx-iq-slider-mock .sl-dots { display: flex; justify-content: center; gap: 8px; margin-top: 10px; }
.fx-iq-slider-mock .sl-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #cbd5e1;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}
.fx-iq-slider-mock .sl-d1 { background: #6366f1; transform: scale(1.2); }
.fx-iq-slider-mock .sl-check:checked ~ .sl-wrap .sl-d1 { background: #cbd5e1; transform: none; }
.fx-iq-slider-mock .sl-check:checked ~ .sl-wrap .sl-d2 { background: #6366f1; transform: scale(1.2); }`,
});

/* ---------------------------------------------------------- */
/* 16 — Gallery zoom grid (hover pops, others dim)            */
/* ---------------------------------------------------------- */
fx({
  id: "iq-gallery-zoom-grid",
  name: "Gallery Zoom Grid",
  fa: "شبکه گالری با بزرگ‌نمایی",
  description: "A 3×2 grid where the hovered cell zooms to life while its neighbors dim down.",
  faDescription: "شبکه ۳×۲ که خانه‌ی هاورشده بزرگ می‌شود و بقیه کم‌رنگ می‌شوند.",
  tags: ["grid", "gallery", "zoom"],
  previewBg: "linear-gradient(135deg, #0f172a, #1e293b)",
  html: `<div class="gz-grid"><div class="gz-c c1"></div><div class="gz-c c2"></div><div class="gz-c c3"></div><div class="gz-c c4"></div><div class="gz-c c5"></div><div class="gz-c c6"></div></div>`,
  css: `.fx-iq-gallery-zoom-grid .gz-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  width: 212px;
}
.fx-iq-gallery-zoom-grid .gz-c {
  height: 62px;
  border-radius: 8px;
  transition: transform 0.45s ease, opacity 0.45s ease, filter 0.45s ease, box-shadow 0.45s ease;
}
.fx-iq-gallery-zoom-grid .c1 { background: linear-gradient(135deg, #f97316, #db2777); }
.fx-iq-gallery-zoom-grid .c2 { background: linear-gradient(135deg, #22d3ee, #2563eb); }
.fx-iq-gallery-zoom-grid .c3 { background: linear-gradient(135deg, #a3e635, #059669); }
.fx-iq-gallery-zoom-grid .c4 { background: linear-gradient(135deg, #fbbf24, #f43f5e); }
.fx-iq-gallery-zoom-grid .c5 { background: linear-gradient(135deg, #8b5cf6, #d946ef); }
.fx-iq-gallery-zoom-grid .c6 { background: linear-gradient(135deg, #38bdf8, #6366f1); }
.fx-iq-gallery-zoom-grid .gz-grid:hover .gz-c { opacity: 0.4; filter: saturate(0.5); transform: scale(0.96); }
.fx-iq-gallery-zoom-grid .gz-grid .gz-c:hover {
  opacity: 1;
  filter: none;
  transform: scale(1.12);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Polaroid stack photo (top swaps aside on hover)       */
/* ---------------------------------------------------------- */
fx({
  id: "iq-polaroid-stack-photo",
  name: "Polaroid Stack",
  fa: "پشته پولاروید",
  description: "Three polaroids sit stacked; hover swings the top one aside and straightens the next.",
  faDescription: "سه پولاروید روی هم‌اند؛ با هاور تایکی کنار می‌رود و بعدی صاف می‌شود.",
  tags: ["polaroid", "stack", "swap"],
  previewBg: "linear-gradient(135deg, #f5f5f4, #d6d3d1)",
  html: `<div class="ps-scene"><div class="ps-card ps-p2"><div class="ps-ph ps-g2"></div></div><div class="ps-card ps-p3"><div class="ps-ph ps-g3"></div></div><div class="ps-card ps-p1"><div class="ps-ph ps-g1"></div></div></div>`,
  css: `.fx-iq-polaroid-stack-photo .ps-scene { position: relative; width: 200px; height: 148px; }
.fx-iq-polaroid-stack-photo .ps-card {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 126px;
  height: 132px;
  background: #ffffff;
  padding: 8px 8px 22px;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.18);
  transition: transform 0.55s cubic-bezier(0.3, 1.2, 0.4, 1), box-shadow 0.55s ease;
}
.fx-iq-polaroid-stack-photo .ps-ph { width: 100%; height: 100%; box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06); }
.fx-iq-polaroid-stack-photo .ps-g1 { background: linear-gradient(135deg, #22d3ee, #6366f1); }
.fx-iq-polaroid-stack-photo .ps-g2 { background: linear-gradient(135deg, #fb7185, #f59e0b); }
.fx-iq-polaroid-stack-photo .ps-g3 { background: linear-gradient(135deg, #34d399, #0f766e); }
.fx-iq-polaroid-stack-photo .ps-p1 { transform: rotate(-6deg); z-index: 3; }
.fx-iq-polaroid-stack-photo .ps-p2 { transform: rotate(4deg) translate(10px, 4px); z-index: 2; }
.fx-iq-polaroid-stack-photo .ps-p3 { transform: rotate(-2deg) translate(-8px, 2px); z-index: 1; }
.fx-iq-polaroid-stack-photo .ps-scene:hover .ps-p1 { transform: rotate(16deg) translate(64px, -10px); box-shadow: 0 14px 24px rgba(0, 0, 0, 0.2); }
.fx-iq-polaroid-stack-photo .ps-scene:hover .ps-p2 { transform: rotate(0deg) scale(1.04); box-shadow: 0 14px 26px rgba(0, 0, 0, 0.22); }`,
});

/* ---------------------------------------------------------- */
/* 18 — Color flash (B&W photo pulses to color)               */
/* ---------------------------------------------------------- */
fx({
  id: "iq-color-flash",
  name: "Color Flash",
  fa: "فلش رنگی",
  description: "Black & white photo flashes to full color in a pulsing rhythm and stays vivid on hover.",
  faDescription: "عکس سیاه‌وسفید با هاور ریتمیک به رنگ کامل فلش می‌زند و رنگی می‌ماند.",
  tags: ["grayscale", "flash", "filter"],
  html: `<div class="cf-frame"><div class="cf-photo"></div><span class="cf-cap">nostalgia</span></div>`,
  css: `.fx-iq-color-flash .cf-frame {
  position: relative;
  width: 206px;
  height: 138px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}
.fx-iq-color-flash .cf-photo {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.5), transparent 40%),
    linear-gradient(135deg, #2dd4bf, #f472b6 60%, #f59e0b);
  filter: grayscale(1) contrast(1.05);
}
.fx-iq-color-flash .cf-frame:hover .cf-photo { animation: cq-cf-flash 1.1s ease forwards; }
.fx-iq-color-flash .cf-cap {
  position: absolute;
  bottom: 10px;
  left: 12px;
  font-size: 10px;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.4s ease 0.6s;
}
.fx-iq-color-flash .cf-frame:hover .cf-cap { opacity: 0.9; }
@keyframes cq-cf-flash {
  0% { filter: grayscale(1) contrast(1.05); }
  18% { filter: grayscale(0) contrast(1.08) saturate(1.5); }
  38% { filter: grayscale(1) contrast(1.05); }
  58% { filter: grayscale(0) contrast(1.08) saturate(1.5); }
  78% { filter: grayscale(0.35) contrast(1.06); }
  100% { filter: grayscale(0) contrast(1.08) saturate(1.35); }
}`,
});

/* ---------------------------------------------------------- */
/* 19 — Frame zoom parallax (fixed frame, drifting photo)     */
/* ---------------------------------------------------------- */
fx({
  id: "iq-frame-zoom-parallax",
  name: "Frame Zoom Parallax",
  fa: "پارالاکس قاب ثابت",
  description: "The dark frame stays put while the photo inside slowly zooms and drifts — a window parallax.",
  faDescription: "قاب تیره ثابت می‌ماند و عکس داخلش آهسته بزرگ و جابه‌جا می‌شود — پارالاکس پنجره‌ای.",
  tags: ["parallax", "zoom", "frame"],
  html: `<div class="fp-frame"><div class="fp-photo"></div><div class="fp-vignette"></div></div>`,
  css: `.fx-iq-frame-zoom-parallax .fp-frame {
  position: relative;
  width: 210px;
  height: 140px;
  border-radius: 10px;
  overflow: hidden;
  border: 7px solid #1c1917;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35);
}
.fx-iq-frame-zoom-parallax .fp-photo {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 75% 22%, rgba(254, 240, 138, 0.85), transparent 30%),
    linear-gradient(135deg, #65a30d, #166534 60%, #052e16);
  transition: transform 1.2s cubic-bezier(0.2, 0.7, 0.3, 1);
}
.fx-iq-frame-zoom-parallax .fp-vignette {
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.45);
  pointer-events: none;
}
.fx-iq-frame-zoom-parallax .fp-frame:hover .fp-photo { transform: scale(1.28) translate(-14px, 10px); }`,
});

/* ---------------------------------------------------------- */
/* 20 — Vintage postcard (stamp + postmark stamps in)         */
/* ---------------------------------------------------------- */
fx({
  id: "iq-vintage-postcard",
  name: "Vintage Postcard",
  fa: "کارتی قدیمی",
  description: "Retro postcard where a circular postmark stamps itself over the corner stamp on hover.",
  faDescription: "کارتی قدیمی؛ با هاور مهر دایره‌ای روی تمبر گوشه کارت می‌خورد.",
  tags: ["postcard", "postmark", "vintage"],
  previewBg: "linear-gradient(135deg, #e7e5e4, #d6d3d1)",
  html: `<div class="vp"><span class="vp-greet">Greetings from DeKo!</span><div class="vp-lines"><i></i><i></i><i></i></div><div class="vp-div"></div><div class="vp-stamp"></div><div class="vp-mark"></div></div>`,
  css: `.fx-iq-vintage-postcard .vp {
  position: relative;
  width: 214px;
  height: 136px;
  background: linear-gradient(160deg, #fef9ec, #f7ecd7);
  border-radius: 8px;
  box-shadow: 0 12px 24px rgba(120, 53, 15, 0.3);
}
.fx-iq-vintage-postcard .vp-greet {
  position: absolute;
  top: 12px;
  left: 14px;
  font-family: Georgia, serif;
  font-style: italic;
  font-size: 12px;
  color: #78350f;
}
.fx-iq-vintage-postcard .vp-lines {
  position: absolute;
  left: 14px;
  bottom: 14px;
  width: 96px;
  display: grid;
  row-gap: 7px;
}
.fx-iq-vintage-postcard .vp-lines i { height: 2px; border-radius: 2px; background: rgba(120, 113, 108, 0.45); }
.fx-iq-vintage-postcard .vp-lines i:nth-child(2) { width: 78%; }
.fx-iq-vintage-postcard .vp-lines i:nth-child(3) { width: 58%; }
.fx-iq-vintage-postcard .vp-div {
  position: absolute;
  top: 14px;
  bottom: 14px;
  left: 122px;
  width: 1.5px;
  background: rgba(120, 113, 108, 0.4);
}
.fx-iq-vintage-postcard .vp-stamp {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 42px;
  height: 50px;
  border-radius: 4px;
  background: linear-gradient(135deg, #f472b6, #8b5cf6);
  box-shadow: 0 0 0 3px #ffffff, 0 0 0 4px rgba(120, 53, 15, 0.35);
  transform: rotate(3deg);
  transition: transform 0.4s ease;
}
.fx-iq-vintage-postcard .vp-mark {
  position: absolute;
  top: 8px;
  right: 40px;
  width: 56px;
  height: 56px;
  border: 2px solid rgba(87, 83, 78, 0.65);
  border-radius: 50%;
  transform: rotate(-14deg) scale(1.9);
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.3, 1.3, 0.4, 1), opacity 0.35s ease;
}
.fx-iq-vintage-postcard .vp-mark::before {
  content: "";
  position: absolute;
  inset: 5px;
  border: 1.5px dashed rgba(87, 83, 78, 0.6);
  border-radius: 50%;
}
.fx-iq-vintage-postcard .vp-mark::after {
  content: "";
  position: absolute;
  top: 50%;
  left: -26px;
  width: 30px;
  height: 10px;
  background: repeating-linear-gradient(90deg, rgba(87, 83, 78, 0.6) 0 3px, transparent 3px 6px);
}
.fx-iq-vintage-postcard .vp:hover .vp-mark { transform: rotate(-14deg) scale(1); opacity: 0.95; }
.fx-iq-vintage-postcard .vp:hover .vp-stamp { transform: rotate(-2deg); }`,
});

