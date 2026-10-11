import type { CssEffect } from "../types";

/**
 * 3D effects batch 2 — carousels, machines, scenes and characters.
 * Every effect uses real CSS 3D (perspective + preserve-3d),
 * scoped under .fx-tq2-<name>. Ids/keyframes prefixed tq2-.
 */
export const threedEffectsPlus2: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  threedEffectsPlus2.push({ category: "threed", interaction: "auto", ...e } as CssEffect);
}

/* 1 — Carousel with bobbing figure */
fx({
  id: "tq2-carousel-bobbing",
  name: "Bobbing Carousel",
  fa: "چرخ‌وفلک جابه‌جا",
  description: "A tiny carousel platform that rotates while its rider bobs up and down.",
  faDescription: "سکوی چرخان کوچکی که سوارش هنگام چرخش بالا و پایین می‌پرد.",
  tags: ["3d", "carousel", "fun"],
  interaction: "auto",
  html: `<div class="cb-stage"><div class="cb-tilt"><div class="cb-pole"></div><div class="cb-top"></div><div class="cb-rider"></div><div class="cb-base"></div></div></div>`,
  css: `.fx-tq2-carousel-bobbing .cb-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 600px; }
.fx-tq2-carousel-bobbing .cb-tilt { position: relative; width: 120px; height: 110px; transform-style: preserve-3d; animation: tq2-cb-spin 9s linear infinite; transform: rotateX(14deg); }
.fx-tq2-carousel-bobbing .cb-pole { position: absolute; left: 50%; top: 8px; width: 6px; height: 78px; margin-left: -3px; background: linear-gradient(#f0abfc, #a923f4); border-radius: 3px; transform: translateZ(0); }
.fx-tq2-carousel-bobbing .cb-top { position: absolute; left: 50%; top: 0; width: 110px; height: 16px; margin-left: -55px; border-radius: 10px; background: conic-gradient(#d946ef, #22d3ee, #fbbf24, #d946ef); animation: tq2-cb-top 9s linear infinite; transform: translateZ(0); box-shadow: 0 0 18px rgba(217, 70, 239, 0.5); }
.fx-tq2-carousel-bobbing .cb-rider { position: absolute; left: 50%; top: 40px; width: 26px; height: 40px; margin-left: -13px; border-radius: 8px 8px 5px 5px; background: linear-gradient(160deg, #67e8f9, #0e7490); transform: translateZ(46px); animation: tq2-cb-bob 1.6s ease-in-out infinite; }
.fx-tq2-carousel-bobbing .cb-base { position: absolute; left: 50%; bottom: 0; width: 120px; height: 14px; margin-left: -60px; border-radius: 8px; background: linear-gradient(#312a4b, #1c1730); transform: rotateX(78deg) translateZ(-16px); box-shadow: 0 0 16px rgba(103, 232, 249, 0.25); }
@keyframes tq2-cb-spin { to { transform: rotateX(14deg) rotateY(360deg); } }
@keyframes tq2-cb-top { to { filter: hue-rotate(360deg); } }
@keyframes tq2-cb-bob { 0%, 100% { transform: translateZ(46px) translateY(-6px); } 50% { transform: translateZ(46px) translateY(6px); } }`,
});

/* 2 — Reflection carousel */
fx({
  id: "tq2-reflection-carousel",
  name: "Reflection Carousel",
  fa: "چرخان بازتابی",
  description: "Cards rotate on a ring above a glossy floor that mirrors them.",
  faDescription: "کارت‌ها روی حلقه‌ای بالای کف براق می‌چرخند و بازتابشان دیده می‌شود.",
  tags: ["3d", "carousel", "reflection"],
  interaction: "auto",
  html: `<div class="rc-stage"><div class="rc-ring"><i class="rc-c rc-c1">۱</i><i class="rc-c rc-c2">۲</i><i class="rc-c rc-c3">۳</i></div><div class="rc-floor"></div></div>`,
  css: `.fx-tq2-reflection-carousel .rc-stage { position: relative; display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 700px; overflow: hidden; }
.fx-tq2-reflection-carousel .rc-ring { position: relative; width: 130px; height: 90px; transform-style: preserve-3d; animation: tq2-rc-spin 11s linear infinite; }
.fx-tq2-reflection-carousel .rc-c { position: absolute; left: 50%; top: 0; width: 56px; height: 78px; margin-left: -28px; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.25); display: grid; place-items: center; font-weight: 800; color: #fff; }
.fx-tq2-reflection-carousel .rc-c1 { background: linear-gradient(160deg, #d946ef, #701a75); transform: rotateY(0deg) translateZ(58px); }
.fx-tq2-reflection-carousel .rc-c2 { background: linear-gradient(160deg, #22d3ee, #155e75); transform: rotateY(120deg) translateZ(58px); }
.fx-tq2-reflection-carousel .rc-c3 { background: linear-gradient(160deg, #fbbf24, #92400e); transform: rotateY(240deg) translateZ(58px); }
.fx-tq2-reflection-carousel .rc-floor { position: absolute; bottom: 6px; width: 200px; height: 26px; border-radius: 50%; background: radial-gradient(60% 100% at 50% 0%, rgba(217, 70, 239, 0.35), transparent 70%); filter: blur(2px); animation: tq2-rc-floor 11s linear infinite; }
@keyframes tq2-rc-spin { to { transform: rotateY(360deg); } }
@keyframes tq2-rc-floor { 0%, 100% { opacity: 0.9; } 50% { opacity: 0.6; } }`,
});

/* 3 — Shadow theater */
fx({
  id: "tq2-shadow-theater",
  name: "Shadow Theater",
  fa: "تئاتر سایه",
  description: "Cut-out puppets swing on a lit stage while the light source drifts.",
  faDescription: "عروسک‌های مقوایی روی صحنه نورانی تاب می‌خورند و منبع نور جابه‌جا می‌شود.",
  tags: ["3d", "scene", "shadow"],
  interaction: "auto",
  html: `<div class="st-stage"><div class="st-light"></div><div class="st-puppet st-p1"></div><div class="st-puppet st-p2"></div><div class="st-ground"></div></div>`,
  css: `.fx-tq2-shadow-theater .st-stage { position: relative; display: grid; place-items: end center; min-height: 150px; width: 100%; overflow: hidden; background: radial-gradient(120% 90% at 30% 0%, #2a1f45, #120e20 70%); }
.fx-tq2-shadow-theater .st-light { position: absolute; top: -30px; left: 20%; width: 90px; height: 90px; border-radius: 50%; background: radial-gradient(circle, rgba(251, 191, 36, 0.8), transparent 65%); filter: blur(6px); animation: tq2-st-light 8s ease-in-out infinite alternate; }
.fx-tq2-shadow-theater .st-puppet { position: absolute; bottom: 26px; width: 34px; height: 74px; background: linear-gradient(#0c0a14, #171226); border-radius: 10px 10px 4px 4px; transform-origin: bottom center; box-shadow: 0 0 0 2px rgba(251, 191, 36, 0.08); }
.fx-tq2-shadow-theater .st-p1 { left: 32%; animation: tq2-st-sway 3.4s ease-in-out infinite; }
.fx-tq2-shadow-theater .st-p2 { right: 32%; height: 60px; animation: tq2-st-sway 3.4s ease-in-out infinite; animation-delay: -1.7s; }
.fx-tq2-shadow-theater .st-ground { position: absolute; bottom: 0; width: 100%; height: 26px; background: linear-gradient(rgba(251, 191, 36, 0.12), transparent); }
@keyframes tq2-st-light { from { left: 18%; } to { left: 70%; } }
@keyframes tq2-st-sway { 0%, 100% { transform: rotate(-7deg); } 50% { transform: rotate(7deg); } }`,
});

/* 4 — Popup card layers (hover) */
fx({
  id: "tq2-popup-card-layers",
  name: "Pop-up Card Layers",
  fa: "کارت لایه‌لایه بازشو",
  description: "Hover the card and its paper layers stand up toward you in 3D.",
  faDescription: "با هاور روی کارت، لایه‌های کاغذی آن به سمت شما در فضا بلند می‌شوند.",
  tags: ["3d", "card", "hover"],
  interaction: "hover",
  html: `<div class="pc-stage"><div class="pc-card"><div class="pc-layer pc-l1"></div><div class="pc-layer pc-l2"></div><div class="pc-layer pc-l3"></div><span class="pc-hint">هاور کن</span></div></div>`,
  css: `.fx-tq2-popup-card-layers .pc-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 640px; }
.fx-tq2-popup-card-layers .pc-card { position: relative; width: 180px; height: 118px; border-radius: 14px; background: linear-gradient(160deg, #241b3a, #171128); border: 1px solid rgba(240, 171, 252, 0.25); transform-style: preserve-3d; transform: rotateX(24deg); transition: transform 0.6s cubic-bezier(0.2, 0.9, 0.3, 1.2); }
.fx-tq2-popup-card-layers .pc-stage:hover .pc-card { transform: rotateX(8deg) translateZ(6px); }
.fx-tq2-popup-card-layers .pc-layer { position: absolute; left: 50%; bottom: 18px; width: 54px; height: 64px; margin-left: -27px; border-radius: 8px 8px 3px 3px; transform-origin: bottom center; transition: transform 0.6s cubic-bezier(0.2, 0.9, 0.3, 1.2); }
.fx-tq2-popup-card-layers .pc-l1 { background: linear-gradient(#f0abfc, #a923f4); }
.fx-tq2-popup-card-layers .pc-l2 { background: linear-gradient(#67e8f9, #0e7490); margin-left: -46px; height: 52px; }
.fx-tq2-popup-card-layers .pc-l3 { background: linear-gradient(#fbbf24, #b45309); margin-left: -8px; height: 56px; }
.fx-tq2-popup-card-layers .pc-stage:hover .pc-l1 { transform: rotateX(-58deg); }
.fx-tq2-popup-card-layers .pc-stage:hover .pc-l2 { transform: rotateX(-48deg) translateZ(-8px); }
.fx-tq2-popup-card-layers .pc-stage:hover .pc-l3 { transform: rotateX(-52deg) translateZ(-6px); }
.fx-tq2-popup-card-layers .pc-hint { position: absolute; top: 8px; left: 0; right: 0; text-align: center; font-size: 10.5px; color: rgba(255, 255, 255, 0.4); }`,
});

/* 5 — Cube row stagger */
fx({
  id: "tq2-cube-row-stagger",
  name: "Cube Row Stagger",
  fa: "ردیف مکعب‌های موجی",
  description: "Three 3D cubes rotate in a flowing wave, one after another.",
  faDescription: "سه مکعب سه‌بعدی پشت‌سرهم و با تأخیر مثل موج می‌چرخند.",
  tags: ["3d", "cube", "wave"],
  interaction: "auto",
  html: `<div class="cr-stage"><span class="cr-cube cr-c1"></span><span class="cr-cube cr-c2"></span><span class="cr-cube cr-c3"></span></div>`,
  css: `.fx-tq2-cube-row-stagger .cr-stage { display: flex; align-items: center; justify-content: center; gap: 18px; min-height: 150px; width: 100%; perspective: 560px; }
.fx-tq2-cube-row-stagger .cr-cube { position: relative; width: 44px; height: 44px; transform-style: preserve-3d; animation: tq2-cr-flip 3.2s cubic-bezier(0.6, 0.05, 0.3, 1) infinite; background: linear-gradient(160deg, #d946ef, #581c87); border-radius: 8px; box-shadow: 0 10px 22px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.18); }
.fx-tq2-cube-row-stagger .cr-cube::after { content: ""; position: absolute; inset: -1px; border-radius: 8px; background: linear-gradient(160deg, rgba(103, 232, 249, 0.9), rgba(14, 116, 144, 0.9)); transform: translateZ(-22px); opacity: 0.85; }
.fx-tq2-cube-row-stagger .cr-c2 { animation-delay: 0.35s; background: linear-gradient(160deg, #22d3ee, #155e75); }
.fx-tq2-cube-row-stagger .cr-c3 { animation-delay: 0.7s; background: linear-gradient(160deg, #fbbf24, #92400e); }
@keyframes tq2-cr-flip { 0%, 22% { transform: rotateY(0deg) rotateX(0deg); } 40%, 72% { transform: rotateY(180deg) rotateX(8deg); } 90%, 100% { transform: rotateY(360deg) rotateX(0deg); } }`,
});

/* 6 — Floating island (isometric) */
fx({
  id: "tq2-floating-island",
  name: "Floating Island",
  fa: "جزیره شناور",
  description: "An isometric island with a tiny tree hovers and drifts in the sky.",
  faDescription: "جزیره‌ای ایزومتریک با درختری کوچک در آسمان شناور است.",
  tags: ["3d", "isometric", "scene"],
  interaction: "auto",
  html: `<div class="fi-stage"><div class="fi-island"><div class="fi-top"></div><div class="fi-dirt"></div><div class="fi-rock"></div><div class="fi-trunk"></div><div class="fi-leaf"></div></div><div class="fi-shadow"></div></div>`,
  css: `.fx-tq2-floating-island .fi-stage { position: relative; display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 700px; overflow: hidden; background: linear-gradient(180deg, #1a1430, #241b3a); }
.fx-tq2-floating-island .fi-island { position: relative; width: 96px; height: 84px; transform-style: preserve-3d; transform: rotateX(52deg) rotateZ(45deg); animation: tq2-fi-float 5.5s ease-in-out infinite; }
.fx-tq2-floating-island .fi-top { position: absolute; inset: 0; background: linear-gradient(135deg, #34d399, #059669); border-radius: 10px; }
.fx-tq2-floating-island .fi-dirt { position: absolute; inset: 0; background: linear-gradient(135deg, #92400e, #451a03); transform: translateZ(-14px); border-radius: 10px; }
.fx-tq2-floating-island .fi-rock { position: absolute; left: 26px; top: 26px; width: 44px; height: 44px; background: linear-gradient(135deg, #57534e, #292524); transform: translateZ(-30px) scale(0.72); border-radius: 8px; }
.fx-tq2-floating-island .fi-trunk { position: absolute; left: 40px; top: 40px; width: 14px; height: 34px; background: linear-gradient(#b45309, #78350f); border-radius: 4px; transform: translateZ(10px) rotateZ(-45deg); }
.fx-tq2-floating-island .fi-leaf { position: absolute; left: 30px; top: 12px; width: 36px; height: 36px; background: radial-gradient(circle at 35% 30%, #6ee7b7, #047857); border-radius: 50% 50% 50% 6px; transform: translateZ(18px) rotateZ(-45deg); box-shadow: 0 0 14px rgba(52, 211, 153, 0.5); }
.fx-tq2-floating-island .fi-shadow { position: absolute; bottom: 16px; left: 50%; width: 90px; height: 18px; margin-left: -45px; border-radius: 50%; background: radial-gradient(50% 100% at 50% 50%, rgba(0, 0, 0, 0.55), transparent 70%); animation: tq2-fi-shadow 5.5s ease-in-out infinite; }
@keyframes tq2-fi-float { 0%, 100% { transform: rotateX(52deg) rotateZ(45deg) translateZ(0); } 50% { transform: rotateX(52deg) rotateZ(45deg) translateZ(22px); } }
@keyframes tq2-fi-shadow { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(0.72); opacity: 0.45; } }`,
});

/* 7 — Tilting picture frame (hover) */
fx({
  id: "tq2-tilting-frame-hover",
  name: "Tilting Frame",
  fa: "قاب کج‌شو",
  description: "A gallery frame that tilts toward your cursor quadrant in real 3D.",
  faDescription: "قاب گالری که با هاور به سمت نشانگر شما در فضای سه‌بعدی کج می‌شود.",
  tags: ["3d", "frame", "hover"],
  interaction: "hover",
  html: `<div class="tf-stage"><div class="tf-frame"><div class="tf-art"></div></div></div>`,
  css: `.fx-tq2-tilting-frame-hover .tf-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 520px; }
.fx-tq2-tilting-frame-hover .tf-frame { position: relative; width: 120px; height: 96px; border-radius: 8px; border: 7px solid #b45309; background: linear-gradient(160deg, #fbbf24, #78350f); box-shadow: 0 16px 30px rgba(0, 0, 0, 0.45); transform-style: preserve-3d; transition: transform 0.35s ease; }
.fx-tq2-tilting-frame-hover .tf-art { position: absolute; inset: 6px; background: radial-gradient(90% 90% at 25% 20%, #f0abfc, #7c3aed 55%, #1e1b4b); border-radius: 2px; transform: translateZ(4px); }
.fx-tq2-tilting-frame-hover .tf-stage:hover .tf-frame { transform: rotateX(12deg) rotateY(-14deg); }
.fx-tq2-tilting-frame-hover .tf-frame::after { content: ""; position: absolute; inset: -14px; border-radius: 12px; border: 1px dashed rgba(251, 191, 36, 0.35); transform: translateZ(-16px); opacity: 0; transition: opacity 0.35s ease; }
.fx-tq2-tilting-frame-hover .tf-stage:hover .tf-frame::after { opacity: 1; }`,
});

/* 8 — Drum menu rotate */
fx({
  id: "tq2-drum-menu-rotate",
  name: "Rotating Drum Menu",
  fa: "منوی استوانه‌ای چرخان",
  description: "A vertical drum of menu items rotates around a horizontal axis.",
  faDescription: "استوانه‌ای از آیتم‌های منو حول محور افقی می‌چرخد.",
  tags: ["3d", "menu", "drum"],
  interaction: "auto",
  html: `<div class="dm-stage"><div class="dm-drum"><span class="dm-item dm-i1">خانه</span><span class="dm-item dm-i2">محصولات</span><span class="dm-item dm-i3">سبد</span><span class="dm-item dm-i4">تماس</span></div></div>`,
  css: `.fx-tq2-drum-menu-rotate .dm-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 620px; }
.fx-tq2-drum-menu-rotate .dm-drum { position: relative; width: 120px; height: 34px; transform-style: preserve-3d; animation: tq2-dm-spin 8s linear infinite; }
.fx-tq2-drum-menu-rotate .dm-item { position: absolute; inset: 0; display: grid; place-items: center; border-radius: 9px; background: linear-gradient(160deg, rgba(240, 171, 252, 0.2), rgba(124, 58, 237, 0.25)); border: 1px solid rgba(240, 171, 252, 0.3); color: #f5d0fe; font-size: 12.5px; font-weight: 700; backface-visibility: hidden; }
.fx-tq2-drum-menu-rotate .dm-i1 { transform: rotateX(0deg) translateZ(52px); }
.fx-tq2-drum-menu-rotate .dm-i2 { transform: rotateX(90deg) translateZ(52px); color: #a5f3fc; border-color: rgba(103, 232, 249, 0.3); background: linear-gradient(160deg, rgba(103, 232, 249, 0.18), rgba(14, 116, 144, 0.3)); }
.fx-tq2-drum-menu-rotate .dm-i3 { transform: rotateX(180deg) translateZ(52px); color: #fde68a; border-color: rgba(251, 191, 36, 0.3); background: linear-gradient(160deg, rgba(251, 191, 36, 0.16), rgba(146, 64, 14, 0.3)); }
.fx-tq2-drum-menu-rotate .dm-i4 { transform: rotateX(270deg) translateZ(52px); color: #bbf7d0; border-color: rgba(74, 222, 128, 0.3); background: linear-gradient(160deg, rgba(74, 222, 128, 0.16), rgba(20, 83, 45, 0.3)); }
@keyframes tq2-dm-spin { to { transform: rotateX(360deg); } }`,
});

/* 9 — 3D seesaw */
fx({
  id: "tq2-3d-seesaw",
  name: "3D Seesaw",
  fa: "الاکلنگ سه‌بعدی",
  description: "A plank see-saws in 3D while a weight slides from side to side.",
  faDescription: "تخته الاکلنگ در فضا بالا پایین می‌شود و وزنه‌ای روی آن می‌لغزد.",
  tags: ["3d", "scene", "balance"],
  interaction: "auto",
  html: `<div class="ss-stage"><div class="ss-tilt"><div class="ss-plank"></div><div class="ss-weight"></div></div><div class="ss-leg"></div></div>`,
  css: `.fx-tq2-3d-seesaw .ss-stage { position: relative; display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 560px; }
.fx-tq2-3d-seesaw .ss-tilt { position: relative; width: 150px; height: 16px; transform-style: preserve-3d; animation: tq2-ss-rock 3.6s ease-in-out infinite; }
.fx-tq2-3d-seesaw .ss-plank { position: absolute; inset: 0; border-radius: 6px; background: linear-gradient(90deg, #f59e0b, #b45309); box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.35); transform: translateZ(0); }
.fx-tq2-3d-seesaw .ss-weight { position: absolute; top: -20px; width: 22px; height: 22px; border-radius: 6px; background: linear-gradient(160deg, #67e8f9, #0e7490); animation: tq2-ss-slide 3.6s ease-in-out infinite; transform: translateZ(14px); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.35); }
.fx-tq2-3d-seesaw .ss-leg { position: absolute; left: 50%; top: 50%; width: 10px; height: 44px; margin: -6px 0 0 -5px; background: linear-gradient(#57534e, #292524); clip-path: polygon(50% 0, 100% 100%, 0 100%); transform: translateZ(-8px); }
@keyframes tq2-ss-rock { 0%, 100% { transform: rotateZ(11deg) rotateY(14deg); } 50% { transform: rotateZ(-11deg) rotateY(-14deg); } }
@keyframes tq2-ss-slide { 0%, 100% { left: 8px; } 50% { left: 120px; } }`,
});

/* 10 — Fan open blades */
fx({
  id: "tq2-fan-open-blades",
  name: "Opening Fan",
  fa: "بادبزن بازشو",
  description: "Oriental fan blades open one by one into a graceful arc.",
  faDescription: "پره‌های بادبزن یکی‌یکی باز می‌شوند و قوسی زیبا می‌سازند.",
  tags: ["3d", "fan", "elegant"],
  interaction: "auto",
  html: `<div class="fb-stage"><div class="fb-pivot"><span class="fb-blade fb-b1"></span><span class="fb-blade fb-b2"></span><span class="fb-blade fb-b3"></span><span class="fb-blade fb-b4"></span><span class="fb-blade fb-b5"></span></div></div>`,
  css: `.fx-tq2-fan-open-blades .fb-stage { display: grid; place-items: end center; min-height: 150px; width: 100%; perspective: 640px; padding-bottom: 26px; }
.fx-tq2-fan-open-blades .fb-pivot { position: relative; width: 10px; height: 10px; transform-style: preserve-3d; transform: rotateX(14deg); }
.fx-tq2-fan-open-blades .fb-blade { position: absolute; left: -4px; bottom: 0; width: 8px; height: 86px; border-radius: 5px 5px 2px 2px; background: linear-gradient(#fcd34d, #b45309); transform-origin: bottom center; animation: tq2-fb-open 4.4s cubic-bezier(0.3, 1.1, 0.4, 1) infinite; }
.fx-tq2-fan-open-blades .fb-b1 { animation-delay: 0s; }
.fx-tq2-fan-open-blades .fb-b2 { animation-delay: 0.12s; }
.fx-tq2-fan-open-blades .fb-b3 { animation-delay: 0.24s; }
.fx-tq2-fan-open-blades .fb-b4 { animation-delay: 0.36s; }
.fx-tq2-fan-open-blades .fb-b5 { animation-delay: 0.48s; }
.fx-tq2-fan-open-blades .fb-pivot::after { content: ""; position: absolute; left: 50%; bottom: -7px; width: 14px; height: 14px; margin-left: -7px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fde68a, #92400e); box-shadow: 0 0 12px rgba(251, 191, 36, 0.6); }
@keyframes tq2-fb-open { 0%, 12% { transform: rotateZ(0deg) translateZ(0); } 42%, 62% { transform: rotateZ(var(--fan-rot, 0deg)) translateZ(0); } 92%, 100% { transform: rotateZ(0deg) translateZ(0); } }
.fx-tq2-fan-open-blades .fb-b1 { --fan-rot: -46deg; }
.fx-tq2-fan-open-blades .fb-b2 { --fan-rot: -23deg; }
.fx-tq2-fan-open-blades .fb-b3 { --fan-rot: 0deg; }
.fx-tq2-fan-open-blades .fb-b4 { --fan-rot: 23deg; }
.fx-tq2-fan-open-blades .fb-b5 { --fan-rot: 46deg; }`,
});

/* 11 — Telescope extend (hover) */
fx({
  id: "tq2-telescope-extend",
  name: "Extending Telescope",
  fa: "تلسکوپ بازشو",
  description: "Hover and the telescope slides its segments out toward the stars.",
  faDescription: "با هاور، بخش‌های تلسکوپ به سمت ستاره‌ها باز می‌شوند.",
  tags: ["3d", "hover", "scope"],
  interaction: "hover",
  html: `<div class="tl-stage"><div class="tl-body"><span class="tl-seg tl-s1"></span><span class="tl-seg tl-s2"></span><span class="tl-seg tl-s3"></span></div><span class="tl-star">✦</span></div>`,
  css: `.fx-tq2-telescope-extend .tl-stage { position: relative; display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 600px; background: radial-gradient(100% 100% at 80% 0%, #1e1b4b, #0c0a19 70%); overflow: hidden; }
.fx-tq2-telescope-extend .tl-body { position: relative; width: 130px; height: 26px; transform-style: preserve-3d; transform: rotateZ(-16deg); }
.fx-tq2-telescope-extend .tl-seg { position: absolute; top: 0; height: 26px; border-radius: 7px; transition: transform 0.7s cubic-bezier(0.2, 0.9, 0.3, 1.15); }
.fx-tq2-telescope-extend .tl-s1 { left: 0; width: 62px; background: linear-gradient(#94a3b8, #334155); transform: translateZ(10px); }
.fx-tq2-telescope-extend .tl-s2 { left: 54px; width: 52px; background: linear-gradient(#cbd5e1, #64748b); transform: translateZ(6px); }
.fx-tq2-telescope-extend .tl-s3 { left: 98px; width: 42px; background: linear-gradient(#f0abfc, #a923f4); transform: translateZ(2px); box-shadow: 0 0 14px rgba(217, 70, 239, 0.55); }
.fx-tq2-telescope-extend .tl-stage:hover .tl-s2 { transform: translateZ(6px) translateX(12px); }
.fx-tq2-telescope-extend .tl-stage:hover .tl-s3 { transform: translateZ(2px) translateX(26px); }
.fx-tq2-telescope-extend .tl-star { position: absolute; right: 16%; top: 18%; color: #fef08a; font-size: 15px; text-shadow: 0 0 8px rgba(254, 240, 138, 0.9); animation: tq2-tl-twinkle 1.6s ease-in-out infinite; }
@keyframes tq2-tl-twinkle { 0%, 100% { opacity: 0.45; transform: scale(0.85); } 50% { opacity: 1; transform: scale(1.15); } }`,
});

/* 12 — Signpost spin */
fx({
  id: "tq2-signpost-spin",
  name: "Spinning Signpost",
  fa: "تابلوی راهنما چرخان",
  description: "Directional arrows spin around a pole to point at new places.",
  faDescription: "پیکان‌های تابلوی راهنما حول میله می‌چرخند و جهت‌های تازه را نشان می‌دهند.",
  tags: ["3d", "sign", "rotate"],
  interaction: "auto",
  html: `<div class="sp-stage"><div class="sp-pole"></div><div class="sp-arm sp-a1">دی‌کو</div><div class="sp-arm sp-a2">CSS</div></div>`,
  css: `.fx-tq2-signpost-spin .sp-stage { position: relative; display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 620px; }
.fx-tq2-signpost-spin .sp-pole { position: absolute; left: 50%; top: 14px; width: 8px; height: 112px; margin-left: -4px; border-radius: 4px; background: linear-gradient(#a8a29e, #44403c); }
.fx-tq2-signpost-spin .sp-arm { position: absolute; left: 50%; width: 92px; height: 26px; margin-left: -46px; display: grid; place-items: center; border-radius: 6px; font-size: 11.5px; font-weight: 800; color: #fff; transform-style: preserve-3d; }
.fx-tq2-signpost-spin .sp-a1 { top: 26px; background: linear-gradient(90deg, #d946ef, #7c3aed); transform-origin: left center; animation: tq2-sp-spin-a 6s ease-in-out infinite; }
.fx-tq2-signpost-spin .sp-a2 { top: 66px; background: linear-gradient(90deg, #22d3ee, #0e7490); transform-origin: right center; animation: tq2-sp-spin-b 6s ease-in-out infinite; }
@keyframes tq2-sp-spin-a { 0%, 18% { transform: rotateY(0deg); } 46%, 64% { transform: rotateY(-160deg); } 92%, 100% { transform: rotateY(-360deg); } }
@keyframes tq2-sp-spin-b { 0%, 18% { transform: rotateY(0deg); } 46%, 64% { transform: rotateY(150deg); } 92%, 100% { transform: rotateY(360deg); } }`,
});

/* 13 — Cube grid wave */
fx({
  id: "tq2-cube-grid-wave",
  name: "Cube Grid Wave",
  fa: "موج شبکه مکعبی",
  description: "A 3×3 grid of cubes rotates cell by cell like a travelling wave.",
  faDescription: "شبکه ۳×۳ مکعب سلول‌به‌سلول مثل موج متحرک می‌چرخد.",
  tags: ["3d", "grid", "wave"],
  interaction: "auto",
  html: `<div class="gw-stage"><div class="gw-grid"><i class="gw-c gw-c1"></i><i class="gw-c gw-c2"></i><i class="gw-c gw-c3"></i><i class="gw-c gw-c4"></i><i class="gw-c gw-c5"></i><i class="gw-c gw-c6"></i><i class="gw-c gw-c7"></i><i class="gw-c gw-c8"></i><i class="gw-c gw-c9"></i></div></div>`,
  css: `.fx-tq2-cube-grid-wave .gw-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 520px; }
.fx-tq2-cube-grid-wave .gw-grid { display: grid; grid-template-columns: repeat(3, 34px); gap: 10px; transform-style: preserve-3d; transform: rotateX(24deg) rotateY(-18deg); }
.fx-tq2-cube-grid-wave .gw-c { width: 34px; height: 34px; border-radius: 7px; background: linear-gradient(160deg, rgba(240, 171, 252, 0.85), rgba(124, 58, 237, 0.85)); box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25); transform-style: preserve-3d; animation: tq2-gw-wave 3.6s ease-in-out infinite; }
.fx-tq2-cube-grid-wave .gw-c2, .fx-tq2-cube-grid-wave .gw-c4, .fx-tq2-cube-grid-wave .gw-c6, .fx-tq2-cube-grid-wave .gw-c8 { animation-delay: 0.22s; background: linear-gradient(160deg, rgba(103, 232, 249, 0.85), rgba(14, 116, 144, 0.85)); }
.fx-tq2-cube-grid-wave .gw-c3, .fx-tq2-cube-grid-wave .gw-c7, .fx-tq2-cube-grid-wave .gw-c9 { animation-delay: 0.44s; background: linear-gradient(160deg, rgba(251, 191, 36, 0.85), rgba(146, 64, 14, 0.85)); }
.fx-tq2-cube-grid-wave .gw-c5 { background: linear-gradient(160deg, rgba(251, 191, 36, 0.85), rgba(146, 64, 14, 0.85)); }
@keyframes tq2-gw-wave { 0%, 16% { transform: rotateY(0deg) translateZ(0); } 34%, 66% { transform: rotateY(180deg) translateZ(16px); } 84%, 100% { transform: rotateY(360deg) translateZ(0); } }`,
});

/* 14 — Precessing rotor */
fx({
  id: "tq2-precessing-rotor",
  name: "Precessing Rotor",
  fa: "روتور پیش‌رونده",
  description: "An arm carries a fast-spinning rotor that slowly precesses around.",
  faDescription: "بازویی یک روتور تندچرخ را حمل می‌کند که آرام پیش‌روی می‌کند.",
  tags: ["3d", "machine", "spin"],
  interaction: "auto",
  html: `<div class="pr-stage"><div class="pr-arm"><div class="pr-rotor"><i></i><i></i></div></div><div class="pr-base"></div></div>`,
  css: `.fx-tq2-precessing-rotor .pr-stage { position: relative; display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 640px; }
.fx-tq2-precessing-rotor .pr-arm { position: relative; width: 8px; height: 74px; border-radius: 4px; background: linear-gradient(#e2e8f0, #475569); transform-style: preserve-3d; animation: tq2-pr-precess 7s linear infinite; transform-origin: bottom center; }
.fx-tq2-precessing-rotor .pr-rotor { position: absolute; left: 50%; top: -4px; width: 84px; height: 8px; margin-left: -42px; transform-style: preserve-3d; animation: tq2-pr-spin 0.9s linear infinite; }
.fx-tq2-precessing-rotor .pr-rotor i { position: absolute; left: 0; top: 0; width: 84px; height: 8px; border-radius: 4px; background: linear-gradient(90deg, #67e8f9, #0891b2); }
.fx-tq2-precessing-rotor .pr-rotor i:nth-child(2) { transform: rotateY(90deg); background: linear-gradient(90deg, #f0abfc, #a923f4); }
.fx-tq2-precessing-rotor .pr-base { position: absolute; bottom: 12px; left: 50%; width: 44px; height: 12px; margin-left: -22px; border-radius: 6px; background: linear-gradient(#334155, #0f172a); }
@keyframes tq2-pr-precess { to { transform: rotateY(360deg); } }
@keyframes tq2-pr-spin { to { transform: rotateZ(360deg); } }`,
});

/* 15 — Ziggurat rotate */
fx({
  id: "tq2-ziggurat-rotate",
  name: "Rotating Ziggurat",
  fa: "زیگورات چرخان",
  description: "A tiered temple pyramid slowly rotates, each level offset in 3D.",
  faDescription: "هرم پله‌ای معبدی آرام می‌چرخد و هر طبقه در فضا جابه‌جاست.",
  tags: ["3d", "architecture", "rotate"],
  interaction: "auto",
  html: `<div class="zg-stage"><div class="zg-tower"><i class="zg-l zg-l1"></i><i class="zg-l zg-l2"></i><i class="zg-l zg-l3"></i><i class="zg-l zg-l4"></i></div></div>`,
  css: `.fx-tq2-ziggurat-rotate .zg-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 640px; }
.fx-tq2-ziggurat-rotate .zg-tower { position: relative; width: 120px; height: 104px; transform-style: preserve-3d; animation: tq2-zg-spin 12s linear infinite; transform: rotateX(16deg); }
.fx-tq2-ziggurat-rotate .zg-l { position: absolute; left: 50%; border-radius: 6px; background: linear-gradient(90deg, #d6a35c, #8a5a2b); box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.25); }
.fx-tq2-ziggurat-rotate .zg-l1 { top: 0; width: 36px; height: 18px; margin-left: -18px; transform: translateZ(0); background: linear-gradient(90deg, #fbbf24, #92400e); }
.fx-tq2-ziggurat-rotate .zg-l2 { top: 26px; width: 62px; height: 18px; margin-left: -31px; transform: translateZ(-6px); }
.fx-tq2-ziggurat-rotate .zg-l3 { top: 52px; width: 90px; height: 18px; margin-left: -45px; transform: translateZ(-12px); }
.fx-tq2-ziggurat-rotate .zg-l4 { top: 78px; width: 118px; height: 20px; margin-left: -59px; transform: translateZ(-18px); background: linear-gradient(90deg, #a16207, #451a03); }
@keyframes tq2-zg-spin { to { transform: rotateX(16deg) rotateY(360deg); } }`,
});

/* 16 — Flip panel word */
fx({
  id: "tq2-flip-panel-word",
  name: "Flip Panel Word",
  fa: "پنل‌های واژه‌نما",
  description: "A grid of panels flips in sequence to reveal a hidden word.",
  faDescription: "شبکه‌ای از پنل‌ها پشت‌سرهم می‌چرخند و واژه‌ای پنهان را نمایان می‌کنند.",
  tags: ["3d", "flip", "word"],
  interaction: "auto",
  html: `<div class="fp-stage"><div class="fp-grid"><i class="fp-p fp-p1">D</i><i class="fp-p fp-p2">E</i><i class="fp-p fp-p3">K</i><i class="fp-p fp-p4">O</i><i class="fp-backdrop">CSS</i></div></div>`,
  css: `.fx-tq2-flip-panel-word .fp-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 560px; }
.fx-tq2-flip-panel-word .fp-grid { position: relative; display: flex; gap: 8px; transform-style: preserve-3d; }
.fx-tq2-flip-panel-word .fp-p { width: 42px; height: 56px; border-radius: 8px; display: grid; place-items: center; font-size: 21px; font-weight: 900; color: #fff; backface-visibility: hidden; animation: tq2-fp-cycle 6s ease-in-out infinite; background: linear-gradient(160deg, #312e81, #1e1b4b); border: 1px solid rgba(165, 180, 252, 0.35); }
.fx-tq2-flip-panel-word .fp-p2 { animation-delay: 0.14s; }
.fx-tq2-flip-panel-word .fp-p3 { animation-delay: 0.28s; }
.fx-tq2-flip-panel-word .fp-p4 { animation-delay: 0.42s; }
.fx-tq2-flip-panel-word .fp-backdrop { position: absolute; inset: 0; display: grid; place-items: center; font-size: 20px; font-weight: 900; letter-spacing: 6px; color: #f0abfc; transform: rotateX(180deg); animation: tq2-fp-cycle-back 6s ease-in-out infinite; }
@keyframes tq2-fp-cycle { 0%, 30% { transform: rotateY(0deg); } 48%, 82% { transform: rotateY(180deg); opacity: 0; } 100% { transform: rotateY(360deg); opacity: 1; } }
@keyframes tq2-fp-cycle-back { 0%, 30% { transform: rotateX(180deg); opacity: 0; } 48%, 82% { transform: rotateX(0deg); opacity: 1; } 100% { transform: rotateX(180deg); opacity: 0; } }`,
});

/* 17 — Page flip book */
fx({
  id: "tq2-page-flip-book",
  name: "Page Flip Book",
  fa: "کتاب ورق‌خور",
  description: "An open book whose pages flip across one after another, forever.",
  faDescription: "کتابی باز که صفحاتش یکی‌یکی و بی‌وقفه ورق می‌خورند.",
  tags: ["3d", "book", "pages"],
  interaction: "auto",
  html: `<div class="pf-stage"><div class="pf-book"><div class="pf-page pf-f1"></div><div class="pf-page pf-f2"></div><div class="pf-page pf-f3"></div><div class="pf-static"></div></div></div>`,
  css: `.fx-tq2-page-flip-book .pf-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 700px; }
.fx-tq2-page-flip-book .pf-book { position: relative; width: 150px; height: 100px; transform: rotateX(12deg); transform-style: preserve-3d; }
.fx-tq2-page-flip-book .pf-static { position: absolute; right: 0; top: 0; width: 50%; height: 100%; border-radius: 3px 10px 10px 3px; background: linear-gradient(90deg, #e7e5e4, #a8a29e); box-shadow: -6px 8px 18px rgba(0, 0, 0, 0.35); }
.fx-tq2-page-flip-book .pf-page { position: absolute; left: 0; top: 0; width: 50%; height: 100%; border-radius: 10px 3px 3px 10px; background: linear-gradient(90deg, #fafaf9, #d6d3d1); transform-origin: right center; transform-style: preserve-3d; animation: tq2-pf-flip 4.8s cubic-bezier(0.45, 0.05, 0.35, 1) infinite; box-shadow: inset -4px 0 8px rgba(0, 0, 0, 0.08); }
.fx-tq2-page-flip-book .pf-f2 { animation-delay: 1.6s; }
.fx-tq2-page-flip-book .pf-f3 { animation-delay: 3.2s; }
.fx-tq2-page-flip-book .pf-page::after { content: ""; position: absolute; inset: 8px; background: repeating-linear-gradient(rgba(0, 0, 0, 0.08) 0 1px, transparent 1px 9px); border-radius: 4px; }
@keyframes tq2-pf-flip { 0%, 16% { transform: rotateY(0deg); } 46%, 100% { transform: rotateY(-180deg); } }`,
});

/* 18 — Maze tilt ball */
fx({
  id: "tq2-maze-tilt-ball",
  name: "Tilt Maze Ball",
  fa: "توپ در هزارتو",
  description: "A maze tray tilts side to side while a ball rolls through its lanes.",
  faDescription: "سینی هزارتو کج می‌شود و توپ در راهروهایش می‌غلتد.",
  tags: ["3d", "maze", "ball"],
  interaction: "auto",
  html: `<div class="mz-stage"><div class="mz-tray"><i class="mz-wall mz-w1"></i><i class="mz-wall mz-w2"></i><i class="mz-wall mz-w3"></i><span class="mz-ball"></span><span class="mz-goal"></span></div></div>`,
  css: `.fx-tq2-maze-tilt-ball .mz-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 560px; }
.fx-tq2-maze-tilt-ball .mz-tray { position: relative; width: 150px; height: 106px; border-radius: 12px; background: linear-gradient(160deg, #1f2937, #0b1120); border: 2px solid rgba(103, 232, 249, 0.35); box-shadow: 0 18px 30px rgba(0, 0, 0, 0.5); transform-style: preserve-3d; animation: tq2-mz-tilt 6s ease-in-out infinite; }
.fx-tq2-maze-tilt-ball .mz-wall { position: absolute; background: linear-gradient(90deg, #475569, #1e293b); border-radius: 3px; transform: translateZ(8px); box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4); }
.fx-tq2-maze-tilt-ball .mz-w1 { left: 34px; top: 14px; width: 7px; height: 56px; }
.fx-tq2-maze-tilt-ball .mz-w2 { left: 78px; top: 34px; width: 7px; height: 58px; }
.fx-tq2-maze-tilt-ball .mz-w3 { left: 34px; top: 78px; width: 52px; height: 7px; }
.fx-tq2-maze-tilt-ball .mz-ball { position: absolute; left: 10px; top: 10px; width: 14px; height: 14px; border-radius: 50%; background: radial-gradient(circle at 32% 28%, #fde68a, #d946ef 70%); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); animation: tq2-mz-ball 6s ease-in-out infinite; }
.fx-tq2-maze-tilt-ball .mz-goal { position: absolute; right: 10px; bottom: 10px; width: 18px; height: 18px; border-radius: 50%; border: 2px dashed rgba(74, 222, 128, 0.7); animation: tq2-mz-goal 1.6s ease-in-out infinite; }
@keyframes tq2-mz-tilt { 0%, 100% { transform: rotateX(18deg) rotateZ(6deg); } 30%, 60% { transform: rotateX(10deg) rotateZ(-6deg); } }
@keyframes tq2-mz-ball { 0% { left: 10px; top: 10px; } 30% { left: 46px; top: 12px; } 55% { left: 92px; top: 16px; } 78% { left: 120px; top: 62px; } 100% { left: 120px; top: 80px; } }
@keyframes tq2-mz-goal { 0%, 100% { transform: scale(1); opacity: 0.7; } 50% { transform: scale(1.18); opacity: 1; } }`,
});

/* 19 — Poster drum */
fx({
  id: "tq2-poster-drum",
  name: "Poster Drum",
  fa: "استوانه پوستر",
  description: "Posters mounted on a horizontal drum rotate like a station display.",
  faDescription: "پوسترهای نصب‌شده روی استوانه افقی مثل نمایشگر ایستگاه می‌چرخند.",
  tags: ["3d", "drum", "posters"],
  interaction: "auto",
  html: `<div class="pd-stage"><div class="pd-drum"><span class="pd-poster pd-p1">۱</span><span class="pd-poster pd-p2">۲</span><span class="pd-poster pd-p3">۳</span></div></div>`,
  css: `.fx-tq2-poster-drum .pd-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 640px; }
.fx-tq2-poster-drum .pd-drum { position: relative; width: 74px; height: 96px; transform-style: preserve-3d; animation: tq2-pd-spin 9s linear infinite; }
.fx-tq2-poster-drum .pd-poster { position: absolute; inset: 0; border-radius: 8px; display: grid; place-items: center; font-size: 26px; font-weight: 900; color: #fff; backface-visibility: hidden; border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4); }
.fx-tq2-poster-drum .pd-p1 { background: linear-gradient(160deg, #d946ef, #4c1d95); transform: rotateY(0deg) translateZ(56px); }
.fx-tq2-poster-drum .pd-p2 { background: linear-gradient(160deg, #f59e0b, #7c2d12); transform: rotateY(120deg) translateZ(56px); }
.fx-tq2-poster-drum .pd-p3 { background: linear-gradient(160deg, #10b981, #064e3b); transform: rotateY(240deg) translateZ(56px); }
@keyframes tq2-pd-spin { to { transform: rotateY(360deg); } }`,
});

/* 20 — Origami fold */
fx({
  id: "tq2-origami-fold",
  name: "Origami Fold",
  fa: "تاشو اریگامی",
  description: "A sheet of paper folds itself into a crane-like bird and unfolds again.",
  faDescription: "ورقه کاغذ خودش را به شکل پرنده تا می‌زند و دوباره باز می‌کند.",
  tags: ["3d", "origami", "paper"],
  interaction: "auto",
  html: `<div class="of-stage"><div class="of-paper"><i class="of-half of-left"></i><i class="of-half of-right"></i></div></div>`,
  css: `.fx-tq2-origami-fold .of-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 620px; }
.fx-tq2-origami-fold .of-paper { position: relative; width: 120px; height: 96px; transform-style: preserve-3d; transform: rotateX(28deg); animation: tq2-of-lift 7s ease-in-out infinite; }
.fx-tq2-origami-fold .of-half { position: absolute; top: 0; width: 50%; height: 100%; background: linear-gradient(160deg, #fbcfe8, #db2777); border: 1px solid rgba(255, 255, 255, 0.35); }
.fx-tq2-origami-fold .of-left { left: 0; border-radius: 6px 0 0 6px; transform-origin: right center; animation: tq2-of-fold-l 7s cubic-bezier(0.5, 0.05, 0.4, 1) infinite; }
.fx-tq2-origami-fold .of-right { right: 0; border-radius: 0 6px 6px 0; background: linear-gradient(200deg, #f9a8d4, #be185d); transform-origin: left center; animation: tq2-of-fold-r 7s cubic-bezier(0.5, 0.05, 0.4, 1) infinite; }
@keyframes tq2-of-fold-l { 0%, 14% { transform: rotateY(0deg); } 40%, 62% { transform: rotateY(150deg); } 88%, 100% { transform: rotateY(0deg); } }
@keyframes tq2-of-fold-r { 0%, 14% { transform: rotateY(0deg); } 40%, 62% { transform: rotateY(-150deg); } 88%, 100% { transform: rotateY(0deg); } }
@keyframes tq2-of-lift { 0%, 14% { transform: rotateX(28deg); } 40%, 62% { transform: rotateX(16deg) translateZ(16px); } 88%, 100% { transform: rotateX(28deg); } }`,
});

/* 21 — Elevator lift */
fx({
  id: "tq2-elevator-lift",
  name: "Elevator Lift",
  fa: "آسانسور",
  description: "A cab glides up and down a shaft between glowing floor indicators.",
  faDescription: "کابین آسانسور بین طبقه‌های نورانی بالا و پایین می‌رود.",
  tags: ["3d", "elevator", "scene"],
  interaction: "auto",
  html: `<div class="el-stage"><div class="el-shaft"><i class="el-lamp el-l1"></i><i class="el-lamp el-l2"></i><i class="el-lamp el-l3"></i><div class="el-cab"></div></div></div>`,
  css: `.fx-tq2-elevator-lift .el-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 620px; }
.fx-tq2-elevator-lift .el-shaft { position: relative; width: 66px; height: 118px; border-radius: 10px; background: linear-gradient(90deg, #171129, #241b3a 30%, #171129); border: 1px solid rgba(240, 171, 252, 0.25); transform: rotateY(-16deg); transform-style: preserve-3d; overflow: hidden; }
.fx-tq2-elevator-lift .el-lamp { position: absolute; right: 6px; width: 8px; height: 8px; border-radius: 50%; background: #3f3a52; }
.fx-tq2-elevator-lift .el-l1 { top: 12px; }
.fx-tq2-elevator-lift .el-l2 { top: 54px; }
.fx-tq2-elevator-lift .el-l3 { top: 96px; }
.fx-tq2-elevator-lift .el-cab { position: absolute; left: 8px; top: 82px; width: 42px; height: 28px; border-radius: 5px; background: linear-gradient(160deg, #f0abfc, #7c3aed); box-shadow: 0 0 16px rgba(217, 70, 239, 0.5); animation: tq2-el-ride 6s cubic-bezier(0.6, 0, 0.4, 1) infinite; }
.fx-tq2-elevator-lift .el-cab::after { content: ""; position: absolute; left: 8px; right: 8px; top: 6px; height: 8px; border-radius: 2px; background: rgba(255, 255, 255, 0.45); }
@keyframes tq2-el-ride { 0%, 12% { top: 82px; } 30%, 42% { top: 12px; } 60%, 72% { top: 82px; } 88%, 100% { top: 44px; } }
.fx-tq2-elevator-lift .el-l1 { animation: tq2-el-lamp 6s linear infinite; }
.fx-tq2-elevator-lift .el-l2 { animation: tq2-el-lamp 6s linear infinite; animation-delay: -4.4s; }
.fx-tq2-elevator-lift .el-l3 { animation: tq2-el-lamp 6s linear infinite; animation-delay: -1.4s; }
@keyframes tq2-el-lamp { 0%, 20% { background: #f0abfc; box-shadow: 0 0 8px rgba(240, 171, 252, 0.9); } 25%, 100% { background: #3f3a52; box-shadow: none; } }`,
});

/* 22 — Satellite track */
fx({
  id: "tq2-satellite-track",
  name: "Tracking Satellite",
  fa: "ماهواره ردیاب",
  description: "A dish swings across the sky while signal rings pulse from its focus.",
  faDescription: "دیش در آسمان جابه‌جا می‌شود و حلقه‌های سیگنال از آن می‌تپند.",
  tags: ["3d", "satellite", "scene"],
  interaction: "auto",
  html: `<div class="sa-stage"><div class="sa-dish-wrap"><div class="sa-dish"></div><div class="sa-arm"></div></div><span class="sa-ring sa-r1"></span><span class="sa-ring sa-r2"></span><span class="sa-ring sa-r3"></span><div class="sa-ground"></div></div>`,
  css: `.fx-tq2-satellite-track .sa-stage { position: relative; display: grid; place-items: end center; min-height: 150px; width: 100%; perspective: 600px; overflow: hidden; background: linear-gradient(180deg, #14102a, #1e1b4b); }
.fx-tq2-satellite-track .sa-dish-wrap { position: relative; margin-bottom: 34px; width: 84px; height: 70px; transform-style: preserve-3d; animation: tq2-sa-pan 7s ease-in-out infinite; }
.fx-tq2-satellite-track .sa-dish { position: absolute; left: 6px; top: 0; width: 64px; height: 34px; border-radius: 6px 6px 50% 50%; background: linear-gradient(180deg, #e2e8f0, #64748b); transform: rotateX(48deg); box-shadow: 0 8px 18px rgba(0, 0, 0, 0.45); }
.fx-tq2-satellite-track .sa-arm { position: absolute; left: 50%; bottom: -14px; width: 6px; height: 26px; margin-left: -3px; background: linear-gradient(#94a3b8, #334155); border-radius: 3px; }
.fx-tq2-satellite-track .sa-ring { position: absolute; left: 50%; top: 22px; width: 22px; height: 22px; margin-left: -11px; border-radius: 50%; border: 2px solid rgba(103, 232, 249, 0.7); animation: tq2-sa-ring 2.4s ease-out infinite; }
.fx-tq2-satellite-track .sa-r2 { animation-delay: 0.8s; }
.fx-tq2-satellite-track .sa-r3 { animation-delay: 1.6s; }
.fx-tq2-satellite-track .sa-ground { position: absolute; bottom: 0; width: 100%; height: 30px; background: linear-gradient(transparent, rgba(103, 232, 249, 0.08)); border-top: 1px solid rgba(103, 232, 249, 0.2); }
@keyframes tq2-sa-pan { 0%, 100% { transform: rotateZ(-14deg) rotateY(-12deg); } 50% { transform: rotateZ(14deg) rotateY(12deg); } }
@keyframes tq2-sa-ring { 0% { transform: translate(-40px, -46px) scale(0.5); opacity: 1; } 100% { transform: translate(30px, -120px) scale(2.4); opacity: 0; } }`,
});

/* 23 — Marionette sway */
fx({
  id: "tq2-marionette-sway",
  name: "Marionette Sway",
  fa: "عروسک خیمه‌شب‌بازی",
  description: "A string puppet dangles from a control bar, swaying gently in 3D.",
  faDescription: "عروسکِ نخ‌دار از کنترل آویزان است و آرام در فضا تاب می‌خورد.",
  tags: ["3d", "puppet", "sway"],
  interaction: "auto",
  html: `<div class="ma-stage"><div class="ma-bar"></div><i class="ma-string ma-s1"></i><i class="ma-string ma-s2"></i><div class="ma-body"><span class="ma-head"></span><span class="ma-torso"></span></div></div>`,
  css: `.fx-tq2-marionette-sway .ma-stage { position: relative; display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 600px; }
.fx-tq2-marionette-sway .ma-bar { position: absolute; top: 16px; width: 96px; height: 8px; border-radius: 4px; background: linear-gradient(#d6d3d1, #57534e); transform: rotateZ(4deg); animation: tq2-ma-bar 4.2s ease-in-out infinite; }
.fx-tq2-marionette-sway .ma-string { position: absolute; top: 24px; width: 1.5px; height: 34px; background: rgba(231, 229, 228, 0.55); transform-origin: top center; animation: tq2-ma-string 4.2s ease-in-out infinite; }
.fx-tq2-marionette-sway .ma-s1 { left: 44%; }
.fx-tq2-marionette-sway .ma-s2 { right: 44%; animation-delay: -0.12s; }
.fx-tq2-marionette-sway .ma-body { position: absolute; top: 56px; transform-style: preserve-3d; animation: tq2-ma-sway 4.2s ease-in-out infinite; }
.fx-tq2-marionette-sway .ma-head { display: block; width: 26px; height: 26px; margin: 0 auto; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fde68a, #b45309); }
.fx-tq2-marionette-sway .ma-torso { display: block; width: 30px; height: 44px; margin: 3px auto 0; border-radius: 9px; background: linear-gradient(160deg, #67e8f9, #0e7490); box-shadow: 0 8px 18px rgba(0, 0, 0, 0.4); }
@keyframes tq2-ma-bar { 0%, 100% { transform: rotateZ(4deg); } 50% { transform: rotateZ(-4deg); } }
@keyframes tq2-ma-string { 0%, 100% { transform: rotateZ(5deg); } 50% { transform: rotateZ(-5deg); } }
@keyframes tq2-ma-sway { 0%, 100% { transform: rotateY(18deg) rotateZ(5deg); } 50% { transform: rotateY(-18deg) rotateZ(-5deg); } }`,
});

/* 24 — Word ring 3D */
fx({
  id: "tq2-word-ring-3d",
  name: "3D Word Ring",
  fa: "حلقه واژه‌های سه‌بعدی",
  description: "Words ride a rotating 3D ring, appearing and receding as they pass.",
  faDescription: "واژه‌ها روی حلقه‌ای سه‌بعدی می‌چرخند و از دید گذشته نزدیک می‌شوند.",
  tags: ["3d", "typography", "ring"],
  interaction: "auto",
  html: `<div class="wr-stage"><div class="wr-ring"><span class="wr-word wr-w1">CSS</span><span class="wr-word wr-w2">زیباست</span><span class="wr-word wr-w3">خالص</span><span class="wr-word wr-w4">100%</span></div></div>`,
  css: `.fx-tq2-word-ring-3d .wr-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 480px; }
.fx-tq2-word-ring-3d .wr-ring { position: relative; width: 150px; height: 44px; transform-style: preserve-3d; animation: tq2-wr-spin 8s linear infinite; }
.fx-tq2-word-ring-3d .wr-word { position: absolute; left: 50%; top: 0; margin-left: -34px; width: 68px; height: 44px; display: grid; place-items: center; font-weight: 900; font-size: 16px; color: #fff; background: linear-gradient(160deg, rgba(240, 171, 252, 0.25), rgba(124, 58, 237, 0.35)); border: 1px solid rgba(240, 171, 252, 0.4); border-radius: 10px; backface-visibility: hidden; }
.fx-tq2-word-ring-3d .wr-w1 { transform: rotateY(0deg) translateZ(84px); }
.fx-tq2-word-ring-3d .wr-w2 { transform: rotateY(90deg) translateZ(84px); }
.fx-tq2-word-ring-3d .wr-w3 { transform: rotateY(180deg) translateZ(84px); }
.fx-tq2-word-ring-3d .wr-w4 { transform: rotateY(270deg) translateZ(84px); }
@keyframes tq2-wr-spin { to { transform: rotateY(360deg); } }`,
});

/* 25 — Animatronic eye */
fx({
  id: "tq2-animatronic-eye",
  name: "Animatronic Eye",
  fa: "چشم رباتیک",
  description: "A robot eye darts around, then a mechanical lid blinks shut.",
  faDescription: "چشم ربات اطراف را نگاه می‌کند و پلک مکانیکی‌اش برق‌آسا می‌بندد.",
  tags: ["3d", "robot", "eye"],
  interaction: "auto",
  html: `<div class="ae-stage"><div class="ae-socket"><div class="ae-ball"><span class="ae-pupil"></span></div><div class="ae-lid"></div></div></div>`,
  css: `.fx-tq2-animatronic-eye .ae-stage { display: grid; place-items: center; min-height: 150px; width: 100%; perspective: 480px; }
.fx-tq2-animatronic-eye .ae-socket { position: relative; width: 92px; height: 92px; border-radius: 50%; background: radial-gradient(circle at 40% 32%, #334155, #0f172a 72%); border: 3px solid #475569; box-shadow: inset 0 0 18px rgba(0, 0, 0, 0.7), 0 10px 22px rgba(0, 0, 0, 0.45); overflow: hidden; }
.fx-tq2-animatronic-eye .ae-ball { position: absolute; inset: 14px; border-radius: 50%; background: radial-gradient(circle at 38% 32%, #e0f2fe, #38bdf8 55%, #0369a1); animation: tq2-ae-look 5.2s ease-in-out infinite; box-shadow: 0 0 14px rgba(56, 189, 248, 0.5); }
.fx-tq2-animatronic-eye .ae-pupil { position: absolute; left: 50%; top: 50%; width: 26px; height: 26px; margin: -13px 0 0 -13px; border-radius: 50%; background: radial-gradient(circle at 40% 35%, #475569, #020617 70%); }
.fx-tq2-animatronic-eye .ae-pupil::after { content: ""; position: absolute; left: 4px; top: 4px; width: 7px; height: 7px; border-radius: 50%; background: rgba(255, 255, 255, 0.85); }
.fx-tq2-animatronic-eye .ae-lid { position: absolute; left: -4px; right: -4px; top: -70%; height: 66%; background: linear-gradient(#64748b, #334155); border-radius: 0 0 46% 46%; animation: tq2-ae-blink 5.2s ease-in-out infinite; }
@keyframes tq2-ae-look { 0%, 8% { transform: translate(0, 0); } 18%, 26% { transform: translate(14px, 6px); } 38%, 46% { transform: translate(-14px, 4px); } 58%, 66% { transform: translate(4px, -12px); } 78%, 100% { transform: translate(0, 0); } }
@keyframes tq2-ae-blink { 0%, 44% { top: -70%; } 50%, 56% { top: -4%; } 62%, 100% { top: -70%; } }`,
});
