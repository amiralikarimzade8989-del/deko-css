import type { CssEffect } from "./types";

/**
 * Image & media effects — hover filters, zooms, frames and reveals.
 * "Photos" are pure CSS gradients, so everything works offline.
 * Scoped under .fx-<id>.
 */
export const imageEffects: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  imageEffects.push({ category: "images", interaction: "hover", ...e } as CssEffect);
}

const PHOTO_A = "linear-gradient(140deg, #f97316, #db2777 55%, #7c3aed)";
const PHOTO_B = "linear-gradient(140deg, #22d3ee, #2563eb 55%, #1e1b4b)";
const PHOTO_C = "linear-gradient(140deg, #a3e635, #059669 55%, #134e4a)";

/* ---------------------------------------------------------- */
/* 1 — Zoom on hover                                          */
/* ---------------------------------------------------------- */
fx({
  id: "image-zoom-hover",
  name: "Photo Zoom",
  fa: "بزرگ‌نمایی عکس",
  description: "The photo scales up smoothly inside its frame when hovered.",
  faDescription: "با هاور عکس داخل قابش نرم بزرگ می‌شود.",
  tags: ["image", "zoom", "hover"],
  html: `<div class="zm-frame"><div class="zm-photo"></div></div>`,
  css: `.fx-image-zoom-hover .zm-frame {
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-zoom-hover .zm-photo {
  width: 100%;
  height: 100%;
  background: ${PHOTO_A};
  transition: transform 0.55s cubic-bezier(0.2, 0.8, 0.3, 1);
}
.fx-image-zoom-hover .zm-frame:hover .zm-photo {
  transform: scale(1.22);
}`,
});

/* ---------------------------------------------------------- */
/* 2 — Grayscale to color                                     */
/* ---------------------------------------------------------- */
fx({
  id: "image-grayscale-color",
  name: "Grayscale to Color",
  fa: "سیاه‌سفید به رنگی",
  description: "The photo starts in black & white and floods with color on hover.",
  faDescription: "عکس اول سیاه‌وسفید است و با هاور رنگ می‌گیرد.",
  tags: ["image", "grayscale", "filter"],
  html: `<div class="gs-frame"><div class="gs-photo"></div></div>`,
  css: `.fx-image-grayscale-color .gs-frame {
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-grayscale-color .gs-photo {
  width: 100%;
  height: 100%;
  background: ${PHOTO_B};
  filter: grayscale(1) contrast(1.05);
  transition: filter 0.6s ease;
}
.fx-image-grayscale-color .gs-frame:hover .gs-photo {
  filter: grayscale(0);
}`,
});

/* ---------------------------------------------------------- */
/* 3 — Polaroid tilt                                          */
/* ---------------------------------------------------------- */
fx({
  id: "image-polaroid-tilt",
  name: "Polaroid Tilt",
  fa: "قطبی کج‌شونده",
  description: "A polaroid photo straightens up and grows its shadow on hover.",
  faDescription: "عکس قطبی با هاور صاف می‌شود و سایه‌اش بزرگ‌تر می‌شود.",
  tags: ["image", "polaroid", "tilt"],
  html: `<div class="po-frame"><span class="po-photo"></span><span class="po-cap">memory</span></div>`,
  css: `.fx-image-polaroid-tilt .po-frame {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 9px 9px 5px;
  background: #fafaf9;
  border-radius: 6px;
  transform: rotate(-5deg);
  transition: transform 0.4s cubic-bezier(0.3, 1.4, 0.4, 1), box-shadow 0.4s ease;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
}
.fx-image-polaroid-tilt .po-frame:hover {
  transform: rotate(0deg) scale(1.05);
  box-shadow: 0 20px 38px rgba(0, 0, 0, 0.5);
}
.fx-image-polaroid-tilt .po-photo {
  width: 120px;
  height: 78px;
  background: ${PHOTO_C};
}
.fx-image-polaroid-tilt .po-cap {
  text-align: center;
  font-family: cursive;
  font-size: 12px;
  color: #44403c;
}`,
});

/* ---------------------------------------------------------- */
/* 4 — Caption slide-up                                       */
/* ---------------------------------------------------------- */
fx({
  id: "image-caption-slide",
  name: "Caption Slide-Up",
  fa: "زیرنویس بالارونده",
  description: "A caption bar slides up over the photo from the bottom edge.",
  faDescription: "با هاور نوار زیرنویس از پایین روی عکس بالا می‌آید.",
  tags: ["image", "caption", "overlay"],
  html: `<div class="cs-frame"><div class="cs-photo"></div><div class="cs-caption"><span>Sunset hour</span></div></div>`,
  css: `.fx-image-caption-slide .cs-frame {
  position: relative;
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-caption-slide .cs-photo {
  width: 100%;
  height: 100%;
  background: ${PHOTO_A};
}
.fx-image-caption-slide .cs-caption {
  position: absolute;
  inset: auto 0 0 0;
  padding: 10px 14px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.25, 0.9, 0.3, 1);
}
.fx-image-caption-slide .cs-frame:hover .cs-caption {
  transform: translateY(0);
}
.fx-image-caption-slide .cs-caption span {
  color: #fff;
  font-size: 13px;
  font-weight: 700;
}`,
});

/* ---------------------------------------------------------- */
/* 5 — Blur to sharp                                          */
/* ---------------------------------------------------------- */
fx({
  id: "image-blur-sharp",
  name: "Blur to Sharp",
  fa: "تار به شارپ",
  description: "The blurry photo snaps into focus when you hover it.",
  faDescription: "عکس تار با هاور فوکوس می‌شود.",
  tags: ["image", "blur", "focus"],
  html: `<div class="bs-frame"><div class="bs-photo"></div></div>`,
  css: `.fx-image-blur-sharp .bs-frame {
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-blur-sharp .bs-photo {
  width: 100%;
  height: 100%;
  background: ${PHOTO_B};
  filter: blur(7px) brightness(1.05);
  transform: scale(1.1);
  transition: filter 0.5s ease, transform 0.5s ease;
}
.fx-image-blur-sharp .bs-frame:hover .bs-photo {
  filter: blur(0);
  transform: scale(1);
}`,
});

/* ---------------------------------------------------------- */
/* 6 — Frame reveal                                           */
/* ---------------------------------------------------------- */
fx({
  id: "image-frame-reveal",
  name: "Frame Reveal",
  fa: "قاب فاش‌شو",
  description: "A golden frame draws itself inside the photo on hover.",
  faDescription: "با هاور قاب طلایی داخل عکس کشیده می‌شود.",
  tags: ["image", "frame", "reveal"],
  html: `<div class="fr-frame"><div class="fr-photo"><span class="fr-border"></span></div></div>`,
  css: `.fx-image-frame-reveal .fr-frame {
  width: 160px;
  height: 104px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-frame-reveal .fr-photo {
  position: relative;
  width: 100%;
  height: 100%;
  background: ${PHOTO_C};
}
.fx-image-frame-reveal .fr-border {
  position: absolute;
  inset: 10px;
  border: 2px solid #fde68a;
  opacity: 0;
  transition: opacity 0.4s ease, inset 0.4s ease;
}
.fx-image-frame-reveal .fr-frame:hover .fr-border {
  opacity: 1;
  inset: 7px;
}`,
});

/* ---------------------------------------------------------- */
/* 7 — Duotone overlay                                        */
/* ---------------------------------------------------------- */
fx({
  id: "image-duotone",
  name: "Duotone Overlay",
  fa: "دوتون روی عکس",
  description: "A violet duotone veil covers the photo and lifts away on hover.",
  faDescription: "پرده دوتون بنفش روی عکس است و با هاور کنار می‌رود.",
  tags: ["image", "duotone", "blend"],
  html: `<div class="du-frame"><div class="du-photo"></div><div class="du-veil"></div></div>`,
  css: `.fx-image-duotone .du-frame {
  position: relative;
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-duotone .du-photo {
  width: 100%;
  height: 100%;
  background: ${PHOTO_A};
  filter: grayscale(1);
}
.fx-image-duotone .du-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #7c3aed, #db2777);
  mix-blend-mode: multiply;
  opacity: 1;
  transition: opacity 0.5s ease;
}
.fx-image-duotone .du-frame:hover .du-veil {
  opacity: 0;
}
.fx-image-duotone .du-frame:hover .du-photo {
  filter: grayscale(0);
  transition: filter 0.5s ease 0.1s;
}`,
});

/* ---------------------------------------------------------- */
/* 8 — Shine sweep                                            */
/* ---------------------------------------------------------- */
fx({
  id: "image-shine-sweep",
  name: "Photo Shine Sweep",
  fa: "برق لغزان عکس",
  description: "A diagonal light sweep glides across the glossy photo on hover.",
  faDescription: "با هاور برق موربی روی عکس براق می‌لغزد.",
  tags: ["image", "shine", "gloss"],
  html: `<div class="sh-frame"><div class="sh-photo"></div></div>`,
  css: `.fx-image-shine-sweep .sh-frame {
  position: relative;
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-shine-sweep .sh-photo {
  width: 100%;
  height: 100%;
  background: ${PHOTO_B};
}
.fx-image-shine-sweep .sh-frame::after {
  content: "";
  position: absolute;
  inset: -30% -60%;
  background: linear-gradient(65deg, transparent 40%, rgba(255, 255, 255, 0.55) 50%, transparent 60%);
  transform: translateX(-90%);
  transition: transform 0.8s ease;
}
.fx-image-shine-sweep .sh-frame:hover::after {
  transform: translateX(90%);
}`,
});

/* ---------------------------------------------------------- */
/* 9 — Zoom & pan                                             */
/* ---------------------------------------------------------- */
fx({
  id: "image-zoom-pan",
  name: "Zoom & Pan",
  fa: "زوم و پن",
  description: "The camera pushes in and drifts sideways like a slow ken-burns shot.",
  faDescription: "دوربین زوم می‌کند و آرام به پهلو می‌رود؛ مثل نمای کن‌برنز.",
  tags: ["image", "kenburns", "pan"],
  html: `<div class="zp-frame"><div class="zp-photo"></div></div>`,
  css: `.fx-image-zoom-pan .zp-frame {
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-zoom-pan .zp-photo {
  width: 100%;
  height: 100%;
  background: ${PHOTO_C};
  transition: transform 5s ease;
}
.fx-image-zoom-pan .zp-frame:hover .zp-photo {
  transform: scale(1.35) translateX(-14px);
}`,
});

/* ---------------------------------------------------------- */
/* 10 — 3D photo tilt                                         */
/* ---------------------------------------------------------- */
fx({
  id: "image-tilt-3d",
  name: "3D Photo Tilt",
  fa: "عکس خم‌شونده سه‌بعدی",
  description: "The photo leans back in 3D space with a deep shadow when hovered.",
  faDescription: "عکس با هاور در فضا عقب می‌خم و سایه عمیق می‌گیرد.",
  tags: ["image", "3d", "tilt"],
  html: `<div class="t3-stage"><div class="t3-photo"></div></div>`,
  css: `.fx-image-tilt-3d .t3-stage {
  perspective: 560px;
}
.fx-image-tilt-3d .t3-photo {
  width: 150px;
  height: 98px;
  border-radius: 12px;
  background: ${PHOTO_A};
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.4);
  transition: transform 0.45s ease, box-shadow 0.45s ease;
}
.fx-image-tilt-3d .t3-stage:hover .t3-photo {
  transform: rotateX(18deg) scale(1.03);
  box-shadow: 0 26px 40px rgba(0, 0, 0, 0.55);
}`,
});

/* ---------------------------------------------------------- */
/* 11 — Brightness pop                                        */
/* ---------------------------------------------------------- */
fx({
  id: "image-brightness-pop",
  name: "Brightness Pop",
  fa: "روشنایی جهشی",
  description: "The dim photo lights up like a lamp switch on hover.",
  faDescription: "عکس کم‌نور با هاور مثل لامپ روشن می‌شود.",
  tags: ["image", "brightness", "filter"],
  html: `<div class="bp-frame"><div class="bp-photo"></div></div>`,
  css: `.fx-image-brightness-pop .bp-frame {
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-brightness-pop .bp-photo {
  width: 100%;
  height: 100%;
  background: ${PHOTO_B};
  filter: brightness(0.45);
  transition: filter 0.45s ease;
}
.fx-image-brightness-pop .bp-frame:hover .bp-photo {
  filter: brightness(1.15) saturate(1.2);
}`,
});

/* ---------------------------------------------------------- */
/* 12 — Hue shift                                             */
/* ---------------------------------------------------------- */
fx({
  id: "image-hue-shift",
  name: "Hue Shift",
  fa: "چرخش رنگ عکس",
  description: "Hovering spins the photo's hue through the color wheel.",
  faDescription: "با هاور رنگ عکس در چرخه رنگ می‌چرخد.",
  tags: ["image", "hue", "filter"],
  html: `<div class="hs-frame"><div class="hs-photo"></div></div>`,
  css: `.fx-image-hue-shift .hs-frame {
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-hue-shift .hs-photo {
  width: 100%;
  height: 100%;
  background: ${PHOTO_C};
  transition: filter 0.8s ease;
}
.fx-image-hue-shift .hs-frame:hover .hs-photo {
  filter: hue-rotate(140deg) saturate(1.3);
}`,
});

/* ---------------------------------------------------------- */
/* 13 — Contrast punch                                        */
/* ---------------------------------------------------------- */
fx({
  id: "image-contrast-punch",
  name: "Contrast Punch",
  fa: "کنتراست تیز",
  description: "The photo gains punchy contrast and saturation on hover.",
  faDescription: "با هاور کنتراست و اشباع عکس حسابی بالا می‌رود.",
  tags: ["image", "contrast", "filter"],
  html: `<div class="cp-frame"><div class="cp-photo"></div></div>`,
  css: `.fx-image-contrast-punch .cp-frame {
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-contrast-punch .cp-photo {
  width: 100%;
  height: 100%;
  background: ${PHOTO_A};
  filter: contrast(0.85) saturate(0.8);
  transition: filter 0.45s ease;
}
.fx-image-contrast-punch .cp-frame:hover .cp-photo {
  filter: contrast(1.4) saturate(1.5);
}`,
});

/* ---------------------------------------------------------- */
/* 14 — Photo stack fan                                       */
/* ---------------------------------------------------------- */
fx({
  id: "image-stack-fan",
  name: "Photo Stack Fan",
  fa: "بسته عکس پنکه‌ای",
  description: "Two hidden photos fan out from behind the top photo on hover.",
  faDescription: "با هاور دو عکس پنهان از پشت عکس رویی باز می‌شوند.",
  tags: ["image", "stack", "fan"],
  html: `<div class="sf-stage"><div class="sf-photo sf-p3"></div><div class="sf-photo sf-p2"></div><div class="sf-photo sf-p1"></div></div>`,
  css: `.fx-image-stack-fan .sf-stage {
  position: relative;
  width: 130px;
  height: 88px;
}
.fx-image-stack-fan .sf-photo {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  border: 3px solid #fafaf9;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.4);
  transition: transform 0.45s cubic-bezier(0.3, 1.3, 0.4, 1);
}
.fx-image-stack-fan .sf-p1 { background: ${PHOTO_A}; z-index: 3; }
.fx-image-stack-fan .sf-p2 { background: ${PHOTO_B}; z-index: 2; }
.fx-image-stack-fan .sf-p3 { background: ${PHOTO_C}; z-index: 1; }
.fx-image-stack-fan .sf-stage:hover .sf-p1 {
  transform: rotate(0deg);
}
.fx-image-stack-fan .sf-stage:hover .sf-p2 {
  transform: rotate(9deg) translateX(12px);
}
.fx-image-stack-fan .sf-stage:hover .sf-p3 {
  transform: rotate(-9deg) translateX(-12px);
}`,
});

/* ---------------------------------------------------------- */
/* 15 — Circle reveal                                         */
/* ---------------------------------------------------------- */
fx({
  id: "image-circle-reveal",
  name: "Circle Reveal",
  fa: "نمایش دایره‌ای",
  description: "A circular window opens over the photo and expands on hover.",
  faDescription: "با هاور یک پنجره دایره‌ای روی عکس باز و بزرگ می‌شود.",
  tags: ["image", "circle", "clip-path"],
  html: `<div class="cr-frame"><div class="cr-photo"></div><div class="cr-circle"></div></div>`,
  css: `.fx-image-circle-reveal .cr-frame {
  position: relative;
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  background: #0c0a09;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-circle-reveal .cr-photo {
  width: 100%;
  height: 100%;
  background: ${PHOTO_B};
  clip-path: circle(14% at 50% 50%);
  transition: clip-path 0.6s cubic-bezier(0.25, 0.9, 0.3, 1);
}
.fx-image-circle-reveal .cr-frame:hover .cr-photo {
  clip-path: circle(75% at 50% 50%);
}`,
});

/* ---------------------------------------------------------- */
/* 16 — Before / after slide                                  */
/* ---------------------------------------------------------- */
fx({
  id: "image-before-after",
  name: "Before / After Slide",
  fa: "مقایسه قبل و بعد",
  description: "Hover wipes the desaturated half away to reveal the colorful version.",
  faDescription: "با هاور نیمه بی‌رنگ کنار می‌رود و نسخه رنگی پیدا می‌شود.",
  tags: ["image", "compare", "wipe"],
  html: `<div class="ba-frame"><div class="ba-color"></div><div class="ba-gray"></div></div>`,
  css: `.fx-image-before-after .ba-frame {
  position: relative;
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-before-after .ba-color {
  position: absolute;
  inset: 0;
  background: ${PHOTO_A};
}
.fx-image-before-after .ba-gray {
  position: absolute;
  inset: 0;
  background: ${PHOTO_A};
  filter: grayscale(1) brightness(0.8);
  clip-path: inset(0 0 0 0);
  transition: clip-path 0.6s cubic-bezier(0.25, 0.9, 0.3, 1);
}
.fx-image-before-after .ba-frame:hover .ba-gray {
  clip-path: inset(0 0 0 100%);
}`,
});

/* ---------------------------------------------------------- */
/* 17 — Vignette fade                                         */
/* ---------------------------------------------------------- */
fx({
  id: "image-vignette",
  name: "Vignette Fade",
  fa: "هاله تاریک عکس",
  description: "A dark vignette melts away to brighten the whole photo on hover.",
  faDescription: "با هاور هاله تاریک اطراف عکس محو و عکس روشن می‌شود.",
  tags: ["image", "vignette", "shadow"],
  html: `<div class="vg-frame"><div class="vg-photo"></div></div>`,
  css: `.fx-image-vignette .vg-frame {
  position: relative;
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-vignette .vg-photo {
  width: 100%;
  height: 100%;
  background: ${PHOTO_C};
}
.fx-image-vignette .vg-frame::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.75) 100%);
  transition: opacity 0.5s ease;
}
.fx-image-vignette .vg-frame:hover::after {
  opacity: 0;
}`,
});

/* ---------------------------------------------------------- */
/* 18 — Glow frame photo                                      */
/* ---------------------------------------------------------- */
const GLOW_FRAME_THEMES: [string, string, string, string][] = [
  ["cyan", "Cyan", "فیروزه‌ای", "#22d3ee"],
  ["amber", "Amber", "کهربایی", "#fbbf24"],
];
for (const [suf, en, fa, c1] of GLOW_FRAME_THEMES) {
  fx({
    id: `image-glow-frame-${suf}`,
    name: `Glow Frame Photo — ${en}`,
    fa: `عکس با قاب درخشان — ${fa}`,
    description: `The photo's frame lights up with a ${en.toLowerCase()} halo on hover.`,
    faDescription: `با هاور قاب عکس هاله ${fa} می‌گیرد.`,
    tags: ["image", "glow", "frame"],
    html: `<div class="gf2-frame"><div class="gf2-photo"></div></div>`,
    css: `.fx-image-glow-frame-${suf} .gf2-frame {
  width: 160px;
  height: 104px;
  border-radius: 12px;
  padding: 3px;
  background: ${c1}33;
  transition: background 0.4s ease, box-shadow 0.4s ease;
}
.fx-image-glow-frame-${suf} .gf2-photo {
  width: 100%;
  height: 100%;
  border-radius: 9px;
  background: ${PHOTO_B};
}
.fx-image-glow-frame-${suf} .gf2-frame:hover {
  background: ${c1};
  box-shadow: 0 0 26px ${c1}88;
}`,
  });
}

/* ---------------------------------------------------------- */
/* 19 — Photo slide compare (vertical)                        */
/* ---------------------------------------------------------- */
fx({
  id: "image-vertical-wipe",
  name: "Vertical Wipe",
  fa: "محو عمودی عکس",
  description: "A tinted veil wipes downward off the photo on hover.",
  faDescription: "با هاور پرده رنگی به سمت پایین از روی عکس کنار می‌رود.",
  tags: ["image", "wipe", "overlay"],
  html: `<div class="vw-frame"><div class="vw-photo"></div><div class="vw-veil"></div></div>`,
  css: `.fx-image-vertical-wipe .vw-frame {
  position: relative;
  width: 160px;
  height: 104px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-image-vertical-wipe .vw-photo {
  width: 100%;
  height: 100%;
  background: ${PHOTO_A};
}
.fx-image-vertical-wipe .vw-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #0ea5e9, #164e63);
  mix-blend-mode: hard-light;
  clip-path: inset(0 0 0 0);
  transition: clip-path 0.55s cubic-bezier(0.25, 0.9, 0.3, 1);
}
.fx-image-vertical-wipe .vw-frame:hover .vw-veil {
  clip-path: inset(0 0 100% 0);
}`,
});

/* ---------------------------------------------------------- */
/* 20 — Photo swing hang                                      */
/* ---------------------------------------------------------- */
fx({
  id: "image-hang-swing",
  name: "Hanging Photo Swing",
  fa: "عکس آویزان تاب‌خور",
  description: "The pinned photo swings gently like it is hanging on a nail.",
  faDescription: "عکس میخ‌کوبی‌شده مثل تابلو آویزان است و آرام تاب می‌خورد.",
  tags: ["image", "swing", "hang"],
  interaction: "hover",
  html: `<div class="hg-stage"><span class="hg-nail"></span><div class="hg-photo"></div></div>`,
  css: `.fx-image-hang-swing .hg-stage {
  position: relative;
  padding-top: 10px;
  transform-origin: top center;
}
.fx-image-hang-swing .hg-nail {
  position: absolute;
  top: 0;
  left: 50%;
  width: 9px;
  height: 9px;
  margin-left: -4.5px;
  border-radius: 50%;
  background: #d6d3d1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
.fx-image-hang-swing .hg-photo {
  width: 130px;
  height: 84px;
  border-radius: 4px;
  border: 4px solid #fafaf9;
  background: ${PHOTO_B};
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  transform-origin: top center;
  transition: transform 0.5s cubic-bezier(0.3, 1.4, 0.4, 1);
}
.fx-image-hang-swing .hg-stage:hover .hg-photo {
  animation: hg-swing 1.6s ease-in-out infinite;
}
@keyframes hg-swing {
  0%, 100% { transform: rotate(4deg); }
  50% { transform: rotate(-4deg); }
}`,
});
