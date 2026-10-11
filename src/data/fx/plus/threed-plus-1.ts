import type { CssEffect } from "../types";

export const threedEffectsPlus1: CssEffect[] = [];

type Draft = Omit<CssEffect, "category"> & { category?: CssEffect["category"] };
function fx(e: Draft) {
  threedEffectsPlus1.push({ category: "threed", interaction: "auto", ...e } as CssEffect);
}

/* 1 — six-panel rotating ring carousel */
fx({
  id: "tq1-ring-carousel",
  name: "Ring Carousel Cards",
  fa: "کاروسل حلقه‌ای",
  description: "Six colored panels orbit as a rotating 3D ring around a shared vertical axis.",
  faDescription: "شش پنل رنگی مانند یک حلقه سه‌بعدی به دور محور عمودی مشترک می‌چرخند.",
  tags: ["carousel", "ring", "preserve-3d"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="scene"><div class="ring"><div class="p p1">1</div><div class="p p2">2</div><div class="p p3">3</div><div class="p p4">4</div><div class="p p5">5</div><div class="p p6">6</div></div></div></div>`,
  css: `
.fx-tq1-ring-carousel .scene { position: relative; width: 78px; height: 108px; transform: rotateX(-14deg); transform-style: preserve-3d; }
.fx-tq1-ring-carousel .ring { position: absolute; inset: 0; transform-style: preserve-3d; animation: tq1-ring-spin 12s linear infinite; }
.fx-tq1-ring-carousel .p { position: absolute; inset: 0; display: grid; place-items: center; border-radius: 8px; font: 700 15px sans-serif; color: #fff; box-shadow: 0 6px 18px rgba(15, 23, 42, .28); }
.fx-tq1-ring-carousel .p1 { transform: rotateY(0deg) translateZ(66px); background: linear-gradient(160deg, #818cf8, #4338ca); }
.fx-tq1-ring-carousel .p2 { transform: rotateY(60deg) translateZ(66px); background: linear-gradient(160deg, #38bdf8, #0369a1); }
.fx-tq1-ring-carousel .p3 { transform: rotateY(120deg) translateZ(66px); background: linear-gradient(160deg, #34d399, #047857); }
.fx-tq1-ring-carousel .p4 { transform: rotateY(180deg) translateZ(66px); background: linear-gradient(160deg, #fbbf24, #b45309); }
.fx-tq1-ring-carousel .p5 { transform: rotateY(240deg) translateZ(66px); background: linear-gradient(160deg, #fb7185, #be123c); }
.fx-tq1-ring-carousel .p6 { transform: rotateY(300deg) translateZ(66px); background: linear-gradient(160deg, #c084fc, #7e22ce); }
@keyframes tq1-ring-spin { to { transform: rotateY(360deg); } }
`,
});

/* 2 — tri-fold panel that unfolds on hover */
fx({
  id: "tq1-fold-panel",
  name: "Fold-Out Panel",
  fa: "پنل تاشو سه‌بخشی",
  description: "Hover unfolds three chained segments outward like a paper accordion in real 3D.",
  faDescription: "با هاور، سه بخش زنجیره‌ای مانند آکاردئون کاغذی در فضای سه‌بعدی باز می‌شوند.",
  tags: ["fold", "hover", "accordion"],
  interaction: "hover",
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="fold"><div class="base">OPEN</div><div class="seg s1"><div class="seg s2"><div class="seg s3">3D</div></div></div></div></div>`,
  css: `
.fx-tq1-fold-panel .fold { position: relative; width: 56px; height: 92px; margin-right: 40px; transform-style: preserve-3d; }
.fx-tq1-fold-panel .base { position: absolute; inset: 0; border-radius: 10px; display: grid; place-items: center; color: #fff; font: 800 11px sans-serif; background: linear-gradient(150deg, #6366f1, #4338ca); box-shadow: 0 10px 22px rgba(67, 56, 202, .35); }
.fx-tq1-fold-panel .seg { position: absolute; top: 0; width: 44px; height: 92px; transform-origin: left center; transform-style: preserve-3d; transition: transform .7s cubic-bezier(.6, .05, .3, 1); border-radius: 8px; display: grid; place-items: center; color: #fff; font: 800 11px sans-serif; }
.fx-tq1-fold-panel .s1 { left: 56px; background: linear-gradient(150deg, #0ea5e9, #0369a1); transform: rotateY(-178deg); }
.fx-tq1-fold-panel .s2 { left: 44px; background: linear-gradient(150deg, #22d3ee, #0891b2); transform: rotateY(-178deg); transition-delay: .13s; }
.fx-tq1-fold-panel .s3 { left: 44px; background: linear-gradient(150deg, #34d399, #059669); transform: rotateY(-178deg); transition-delay: .26s; }
.fx-tq1-fold-panel .fold:hover .s1 { transform: rotateY(-16deg); transition-delay: 0s; }
.fx-tq1-fold-panel .fold:hover .s2 { transform: rotateY(-8deg); transition-delay: .13s; }
.fx-tq1-fold-panel .fold:hover .s3 { transform: rotateY(0deg); transition-delay: .26s; }
`,
});

/* 3 — three-sided spinning prism */
fx({
  id: "tq1-prism-spin",
  name: "Rotating Prism",
  fa: "منشور چرخان",
  description: "A three-sided triangular prism spinning forever around its vertical axis.",
  faDescription: "منشور مثلثی سه‌وجهی که پیوسته حول محور عمودی خود می‌چرخد.",
  tags: ["prism", "spin", "polyhedron"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="stage"><div class="prism"><div class="f f1">A</div><div class="f f2">B</div><div class="f f3">C</div></div></div></div>`,
  css: `
.fx-tq1-prism-spin .stage { position: relative; width: 100px; height: 112px; transform: rotateX(-12deg); transform-style: preserve-3d; }
.fx-tq1-prism-spin .prism { position: absolute; inset: 0; transform-style: preserve-3d; animation: tq1-prism-spin 8s linear infinite; }
.fx-tq1-prism-spin .f { position: absolute; inset: 0; display: grid; place-items: center; border: 1px solid rgba(255, 255, 255, .45); border-radius: 8px; color: #fff; font: 800 20px sans-serif; }
.fx-tq1-prism-spin .f1 { transform: rotateY(0deg) translateZ(30px); background: linear-gradient(160deg, rgba(99, 102, 241, .95), rgba(67, 56, 202, .85)); }
.fx-tq1-prism-spin .f2 { transform: rotateY(120deg) translateZ(30px); background: linear-gradient(160deg, rgba(14, 165, 233, .95), rgba(3, 105, 161, .85)); }
.fx-tq1-prism-spin .f3 { transform: rotateY(240deg) translateZ(30px); background: linear-gradient(160deg, rgba(52, 211, 153, .95), rgba(4, 120, 87, .85)); }
@keyframes tq1-prism-spin { to { transform: rotateY(360deg); } }
`,
});

/* 4 — hexagonal prism carousel */
fx({
  id: "tq1-hex-prism",
  name: "Hex Prism Spin",
  fa: "منشور شش‌ضلعی",
  description: "A six-faced hexagonal prism slowly rotating to show every colored side.",
  faDescription: "منشور شش‌وجهی که به‌آرامی می‌چرخد و تمام وجه‌های رنگی‌اش را نشان می‌دهد.",
  tags: ["hexagon", "prism", "spin"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="stage"><div class="hex"><div class="f f1"></div><div class="f f2"></div><div class="f f3"></div><div class="f f4"></div><div class="f f5"></div><div class="f f6"></div></div></div></div>`,
  css: `
.fx-tq1-hex-prism .stage { position: relative; width: 48px; height: 104px; transform: rotateX(-10deg); transform-style: preserve-3d; }
.fx-tq1-hex-prism .hex { position: absolute; inset: 0; transform-style: preserve-3d; animation: tq1-hex-spin 10s linear infinite; }
.fx-tq1-hex-prism .f { position: absolute; inset: 0; border: 1px solid rgba(255, 255, 255, .4); border-radius: 6px; }
.fx-tq1-hex-prism .f1 { transform: rotateY(0deg) translateZ(42px); background: linear-gradient(160deg, #f472b6, #be185d); }
.fx-tq1-hex-prism .f2 { transform: rotateY(60deg) translateZ(42px); background: linear-gradient(160deg, #fb923c, #c2410c); }
.fx-tq1-hex-prism .f3 { transform: rotateY(120deg) translateZ(42px); background: linear-gradient(160deg, #facc15, #a16207); }
.fx-tq1-hex-prism .f4 { transform: rotateY(180deg) translateZ(42px); background: linear-gradient(160deg, #4ade80, #15803d); }
.fx-tq1-hex-prism .f5 { transform: rotateY(240deg) translateZ(42px); background: linear-gradient(160deg, #38bdf8, #0369a1); }
.fx-tq1-hex-prism .f6 { transform: rotateY(300deg) translateZ(42px); background: linear-gradient(160deg, #a78bfa, #6d28d9); }
@keyframes tq1-hex-spin { to { transform: rotateY(360deg); } }
`,
});

/* 5 — split-flap flip clock */
fx({
  id: "tq1-flip-clock",
  name: "Flip Clock Card",
  fa: "کارت ساعت فلپی",
  description: "A split-flap card that periodically flips over in 3D to reveal the next value.",
  faDescription: "کارتی به سبک ساعت فلپ که هر چند ثانیه در فضا برمی‌گردد و عدد بعدی را نشان می‌دهد.",
  tags: ["flip", "clock", "rotatex"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="clock"><div class="card front">12</div><div class="card back">34</div><div class="split"></div></div></div>`,
  css: `
.fx-tq1-flip-clock .clock { position: relative; width: 96px; height: 96px; transform-style: preserve-3d; animation: tq1-flip-clock-go 5s cubic-bezier(.75, 0, .25, 1) infinite; }
.fx-tq1-flip-clock .card { position: absolute; inset: 0; border-radius: 12px; display: grid; place-items: center; font: 800 40px/1 ui-monospace, monospace; color: #fff; backface-visibility: hidden; box-shadow: inset 0 -47px 0 rgba(15, 23, 42, .22), 0 12px 24px rgba(15, 23, 42, .3); }
.fx-tq1-flip-clock .front { background: linear-gradient(#475569, #1e293b); }
.fx-tq1-flip-clock .back { background: linear-gradient(#38bdf8, #0369a1); transform: rotateX(180deg); }
.fx-tq1-flip-clock .split { position: absolute; left: 4px; right: 4px; top: 50%; height: 2px; margin-top: -1px; border-radius: 1px; background: rgba(2, 6, 23, .55); }
@keyframes tq1-flip-clock-go { 0%, 55% { transform: rotateX(0deg); } 80%, 100% { transform: rotateX(-180deg); } }
`,
});

/* 6 — popup book with paper trees */
fx({
  id: "tq1-popup-book",
  name: "Popup Book",
  fa: "کتاب پاپ‌آپ",
  description: "Hover makes paper trees stand up from the open book pages in layered 3D.",
  faDescription: "با هاور، درخت‌های کاغذی از صفحات کتابِ باز در فضا بلند می‌شوند.",
  tags: ["book", "popup", "hover"],
  interaction: "hover",
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="book"><div class="page left"></div><div class="page right"></div><div class="pop pop1"></div><div class="pop pop2"></div><div class="pop pop3"></div></div></div>`,
  css: `
.fx-tq1-popup-book .book { position: relative; width: 150px; height: 96px; transform: rotateX(18deg); transform-style: preserve-3d; }
.fx-tq1-popup-book .page { position: absolute; top: 0; width: 74px; height: 96px; background: linear-gradient(#ffffff, #e2e8f0); border: 1px solid #cbd5e1; transition: transform .9s ease; }
.fx-tq1-popup-book .left { left: 0; border-radius: 8px 2px 2px 8px; transform-origin: right center; transform: rotateY(14deg); }
.fx-tq1-popup-book .right { right: 0; border-radius: 2px 8px 8px 2px; transform-origin: left center; transform: rotateY(-14deg); }
.fx-tq1-popup-book .book:hover .left { transform: rotateY(26deg); }
.fx-tq1-popup-book .book:hover .right { transform: rotateY(-26deg); }
.fx-tq1-popup-book .pop { position: absolute; transform-origin: 50% 100%; clip-path: polygon(50% 0%, 100% 100%, 0% 100%); transform: translateZ(1px) rotateX(0deg); transition: transform .85s cubic-bezier(.45, 1.4, .4, 1); }
.fx-tq1-popup-book .pop1 { left: 80px; bottom: 16px; width: 32px; height: 44px; background: linear-gradient(#34d399, #047857); }
.fx-tq1-popup-book .pop2 { left: 98px; bottom: 20px; width: 20px; height: 28px; background: linear-gradient(#fbbf24, #b45309); transition-delay: .12s; }
.fx-tq1-popup-book .pop3 { left: 112px; bottom: 14px; width: 26px; height: 36px; background: linear-gradient(#38bdf8, #0369a1); transition-delay: .2s; }
.fx-tq1-popup-book .book:hover .pop1 { transform: translateZ(1px) rotateX(-76deg); }
.fx-tq1-popup-book .book:hover .pop2 { transform: translateZ(1px) rotateX(-70deg); }
.fx-tq1-popup-book .book:hover .pop3 { transform: translateZ(1px) rotateX(-78deg); }
`,
});

/* 7 — isometric stack assembling itself */
fx({
  id: "tq1-iso-stack",
  name: "Isometric Stack Build",
  fa: "پشتهٔ ایزومتریک",
  description: "Four slabs drop from above and assemble into an isometric tower, then rebuild.",
  faDescription: "چهار صفحه از بالا فرود می‌آیند و برج ایزومتریک را می‌سازند، سپس دوباره تکرار می‌شود.",
  tags: ["isometric", "stack", "loop"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="scene"><div class="sh"></div><div class="l l1"></div><div class="l l2"></div><div class="l l3"></div><div class="l l4"></div></div></div>`,
  css: `
.fx-tq1-iso-stack .scene { position: relative; width: 88px; height: 88px; transform: rotateX(56deg) rotateZ(42deg); transform-style: preserve-3d; }
.fx-tq1-iso-stack .sh { position: absolute; inset: -6px; border-radius: 16px; background: rgba(15, 23, 42, .22); filter: blur(7px); transform: translateZ(-4px); }
.fx-tq1-iso-stack .l { position: absolute; inset: 0; border-radius: 12px; border: 1px solid rgba(255, 255, 255, .35); }
.fx-tq1-iso-stack .l1 { background: linear-gradient(150deg, #fbbf24, #b45309); animation: tq1-iso-drop1 4.8s ease-out infinite; }
.fx-tq1-iso-stack .l2 { background: linear-gradient(150deg, #34d399, #047857); animation: tq1-iso-drop2 4.8s ease-out infinite; }
.fx-tq1-iso-stack .l3 { background: linear-gradient(150deg, #38bdf8, #0369a1); animation: tq1-iso-drop3 4.8s ease-out infinite; }
.fx-tq1-iso-stack .l4 { background: linear-gradient(150deg, #a78bfa, #6d28d9); animation: tq1-iso-drop4 4.8s ease-out infinite; }
@keyframes tq1-iso-drop1 { 0% { transform: translateZ(150px); opacity: 0; } 6% { opacity: 1; } 20%, 100% { transform: translateZ(0px); opacity: 1; } }
@keyframes tq1-iso-drop2 { 0%, 12% { transform: translateZ(150px); opacity: 0; } 18% { opacity: 1; } 32%, 100% { transform: translateZ(20px); opacity: 1; } }
@keyframes tq1-iso-drop3 { 0%, 24% { transform: translateZ(150px); opacity: 0; } 30% { opacity: 1; } 44%, 100% { transform: translateZ(40px); opacity: 1; } }
@keyframes tq1-iso-drop4 { 0%, 36% { transform: translateZ(150px); opacity: 0; } 42% { opacity: 1; } 56%, 100% { transform: translateZ(60px); opacity: 1; } }
`,
});

/* 8 — ball hopping down 3D stairs */
fx({
  id: "tq1-stair-ball",
  name: "Staircase Ball",
  fa: "توپ و پله‌ها",
  description: "A glossy ball hops down four floating 3D steps and rolls away, looping forever.",
  faDescription: "توپی براق از چهار پلهٔ شناور سه‌بعدی پایین می‌پرد و می‌غلتد؛ حلقهٔ بی‌پایان.",
  tags: ["stairs", "ball", "bounce"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="scene"><div class="step s1"></div><div class="step s2"></div><div class="step s3"></div><div class="step s4"></div><div class="ball"></div></div></div>`,
  css: `
.fx-tq1-stair-ball .scene { position: relative; width: 150px; height: 100px; transform: rotateX(56deg) rotateZ(-24deg); transform-style: preserve-3d; }
.fx-tq1-stair-ball .step { position: absolute; top: 32px; width: 36px; height: 36px; border-radius: 6px; border: 1px solid rgba(255, 255, 255, .4); }
.fx-tq1-stair-ball .s1 { left: 0px; transform: translateZ(66px); background: linear-gradient(145deg, #f472b6, #be185d); }
.fx-tq1-stair-ball .s2 { left: 36px; transform: translateZ(44px); background: linear-gradient(145deg, #a78bfa, #6d28d9); }
.fx-tq1-stair-ball .s3 { left: 72px; transform: translateZ(22px); background: linear-gradient(145deg, #38bdf8, #0369a1); }
.fx-tq1-stair-ball .s4 { left: 108px; transform: translateZ(0px); background: linear-gradient(145deg, #34d399, #047857); }
.fx-tq1-stair-ball .ball { position: absolute; top: 38px; left: 0px; width: 15px; height: 15px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #ffffff, #fb7185 55%, #9f1239); box-shadow: 0 4px 8px rgba(15, 23, 42, .3); animation: tq1-stair-hop 3.6s linear infinite; }
@keyframes tq1-stair-hop {
  0% { transform: translate3d(8px, 0px, 92px) rotateX(-56deg); opacity: 0; }
  6% { opacity: 1; }
  12% { transform: translate3d(18px, 0px, 74px) rotateX(-56deg); }
  22% { transform: translate3d(36px, 0px, 96px) rotateX(-56deg); }
  30% { transform: translate3d(54px, 0px, 52px) rotateX(-56deg); }
  42% { transform: translate3d(72px, 0px, 74px) rotateX(-56deg); }
  50% { transform: translate3d(90px, 0px, 30px) rotateX(-56deg); }
  62% { transform: translate3d(108px, 0px, 52px) rotateX(-56deg); }
  70% { transform: translate3d(126px, 0px, 8px) rotateX(-56deg); }
  84% { transform: translate3d(150px, 0px, 8px) rotateX(-56deg); opacity: 1; }
  100% { transform: translate3d(176px, 0px, 8px) rotateX(-56deg); opacity: 0; }
}
`,
});

/* 9 — four depth layers wobbling */
fx({
  id: "tq1-depth-cards",
  name: "Depth Layer Cards",
  fa: "کارت‌های لایه‌عمقی",
  description: "Four translucent cards hover on separate Z planes while the stack wobbles side to side.",
  faDescription: "چهار کارت نیمه‌شفاف در عمق‌های متفاوت شناورند و کل پشته به چپ و راست موج می‌خورد.",
  tags: ["depth", "layers", "wobble"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="wob"><div class="c c1">L1</div><div class="c c2">L2</div><div class="c c3">L3</div><div class="c c4">L4</div></div></div>`,
  css: `
.fx-tq1-depth-cards .wob { position: relative; width: 88px; height: 118px; transform-style: preserve-3d; animation: tq1-depth-wobble 6s ease-in-out infinite; }
.fx-tq1-depth-cards .c { position: absolute; inset: 0; border-radius: 12px; border: 1px solid rgba(255, 255, 255, .45); display: grid; place-items: center; font: 800 13px sans-serif; color: #fff; }
.fx-tq1-depth-cards .c1 { background: rgba(99, 102, 241, .92); transform: translateZ(0px) translateX(-9px); }
.fx-tq1-depth-cards .c2 { background: rgba(14, 165, 233, .88); transform: translateZ(28px) translateX(-3px) translateY(-5px); }
.fx-tq1-depth-cards .c3 { background: rgba(236, 72, 153, .85); transform: translateZ(56px) translateX(3px) translateY(-10px); }
.fx-tq1-depth-cards .c4 { background: rgba(244, 63, 94, .9); transform: translateZ(84px) translateX(9px) translateY(-15px); }
@keyframes tq1-depth-wobble { 0%, 100% { transform: rotateY(-24deg) rotateX(8deg); } 50% { transform: rotateY(24deg) rotateX(-8deg); } }
`,
});

/* 10 — tri-face rotating billboard */
fx({
  id: "tq1-billboard",
  name: "Rotating Billboard",
  fa: "بیلبورد سه‌وجهی",
  description: "A framed tri-vision billboard pauses on each of its three rotating faces.",
  faDescription: "بیلبورد سه‌وجهی با قاب که روی هر پیام مکث می‌کند و می‌چرخد.",
  tags: ["billboard", "trivision", "rotate"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="stage"><div class="frame"></div><div class="tri"><div class="f f1">SALE</div><div class="f f2">OPEN</div><div class="f f3">3D</div></div></div></div>`,
  css: `
.fx-tq1-billboard .stage { position: relative; width: 126px; height: 86px; transform-style: preserve-3d; }
.fx-tq1-billboard .frame { position: absolute; inset: 0; border: 7px solid #334155; border-radius: 10px; background: rgba(15, 23, 42, .25); box-shadow: 0 12px 24px rgba(15, 23, 42, .3); }
.fx-tq1-billboard .tri { position: absolute; left: 8px; top: 8px; width: 110px; height: 70px; transform-style: preserve-3d; animation: tq1-billboard-turn 9s ease-in-out infinite; }
.fx-tq1-billboard .f { position: absolute; inset: 0; display: grid; place-items: center; border-radius: 4px; font: 800 19px sans-serif; letter-spacing: 2px; color: #fff; }
.fx-tq1-billboard .f1 { transform: rotateY(0deg) translateZ(32px); background: linear-gradient(160deg, #ef4444, #991b1b); }
.fx-tq1-billboard .f2 { transform: rotateY(120deg) translateZ(32px); background: linear-gradient(160deg, #22c55e, #166534); }
.fx-tq1-billboard .f3 { transform: rotateY(240deg) translateZ(32px); background: linear-gradient(160deg, #0ea5e9, #075985); }
@keyframes tq1-billboard-turn { 0%, 26% { transform: rotateY(0deg); } 33%, 59% { transform: rotateY(-120deg); } 66%, 92% { transform: rotateY(-240deg); } 100% { transform: rotateY(-360deg); } }
`,
});

/* 11 — lenticular swap on tilt */
fx({
  id: "tq1-lenticular",
  name: "Lenticular Swap",
  fa: "تعویض لنتیکولار",
  description: "Tilt on hover swaps the lenticular print from hot to cold with ribbed parallax.",
  faDescription: "با هاور و کج‌شدگی، تصویر لنتیکولار از حالت گرم به سرد با پارالاکس خطوط عوض می‌شود.",
  tags: ["lenticular", "hover", "tilt"],
  interaction: "hover",
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="lens"><div class="im b">COLD</div><div class="im a">HOT</div><div class="ribs"></div></div></div>`,
  css: `
.fx-tq1-lenticular .lens { position: relative; width: 112px; height: 78px; border-radius: 12px; transform-style: preserve-3d; transition: transform .6s ease; box-shadow: 0 12px 26px rgba(15, 23, 42, .25); }
.fx-tq1-lenticular .im { position: absolute; inset: 0; border-radius: 12px; display: grid; place-items: center; font: 800 19px sans-serif; letter-spacing: 2px; color: #fff; transition: opacity .45s ease; }
.fx-tq1-lenticular .a { background: linear-gradient(140deg, #fb923c, #dc2626); }
.fx-tq1-lenticular .b { background: linear-gradient(140deg, #22d3ee, #2563eb); opacity: 0; transform: translateZ(-8px); }
.fx-tq1-lenticular .ribs { position: absolute; inset: 0; border-radius: 12px; background: repeating-linear-gradient(90deg, rgba(255, 255, 255, .3) 0px 3px, rgba(255, 255, 255, 0) 3px 9px); }
.fx-tq1-lenticular .lens:hover { transform: rotateY(18deg) rotateX(-5deg); }
.fx-tq1-lenticular .lens:hover .a { opacity: 0; }
.fx-tq1-lenticular .lens:hover .b { opacity: 1; }
`,
});

/* 12 — tumbling dice */
fx({
  id: "tq1-dice",
  name: "Dice Tumble",
  fa: "تاس غلتان",
  description: "A six-pip die tumbles through the air, pausing between rolls on different faces.",
  faDescription: "تاس شش‌وجهی در هوا می‌غلتد و بین هر پرتاب روی وجهی متفاوت مکث می‌کند.",
  tags: ["dice", "cube", "tumble"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="die"><div class="fc fc1"></div><div class="fc fc2"></div><div class="fc fc3"></div><div class="fc fc4"></div><div class="fc fc5"></div><div class="fc fc6"></div></div></div>`,
  css: `
.fx-tq1-dice .die { position: relative; width: 54px; height: 54px; transform-style: preserve-3d; animation: tq1-dice-tumble 7s ease-in-out infinite; }
.fx-tq1-dice .fc { position: absolute; inset: 0; border-radius: 10px; border: 1px solid #cbd5e1; background: linear-gradient(145deg, #ffffff, #e2e8f0); box-shadow: inset 0 0 10px rgba(148, 163, 184, .35); }
.fx-tq1-dice .fc::after { content: ""; position: absolute; left: 50%; top: 50%; width: 9px; height: 9px; margin: -4.5px 0 0 -4.5px; border-radius: 50%; }
.fx-tq1-dice .fc1 { transform: rotateY(0deg) translateZ(27px); }
.fx-tq1-dice .fc1::after { box-shadow: 0 0 0 0 #334155; }
.fx-tq1-dice .fc2 { transform: rotateY(90deg) translateZ(27px); }
.fx-tq1-dice .fc2::after { box-shadow: -11px -11px 0 0 #334155, 11px 11px 0 0 #334155; }
.fx-tq1-dice .fc3 { transform: rotateY(180deg) translateZ(27px); }
.fx-tq1-dice .fc3::after { box-shadow: -11px -11px 0 0 #334155, 0 0 0 0 #334155, 11px 11px 0 0 #334155; }
.fx-tq1-dice .fc4 { transform: rotateY(-90deg) translateZ(27px); }
.fx-tq1-dice .fc4::after { box-shadow: -11px -11px 0 0 #334155, 11px -11px 0 0 #334155, -11px 11px 0 0 #334155, 11px 11px 0 0 #334155; }
.fx-tq1-dice .fc5 { transform: rotateX(90deg) translateZ(27px); }
.fx-tq1-dice .fc5::after { box-shadow: -11px -11px 0 0 #334155, 11px -11px 0 0 #334155, 0 0 0 0 #334155, -11px 11px 0 0 #334155, 11px 11px 0 0 #334155; }
.fx-tq1-dice .fc6 { transform: rotateX(-90deg) translateZ(27px); }
.fx-tq1-dice .fc6::after { box-shadow: -11px -11px 0 0 #334155, 11px -11px 0 0 #334155, -11px 0 0 0 #334155, 11px 0 0 0 #334155, -11px 11px 0 0 #334155, 11px 11px 0 0 #334155; }
@keyframes tq1-dice-tumble {
  0%, 10% { transform: rotateX(-18deg) rotateY(24deg); }
  35% { transform: rotateX(-160deg) rotateY(140deg); }
  60% { transform: rotateX(-260deg) rotateY(250deg); }
  85% { transform: rotateX(-360deg) rotateY(370deg); }
  100% { transform: rotateX(-378deg) rotateY(384deg); }
}
`,
});

/* 13 — card fan spreading on hover */
fx({
  id: "tq1-card-fan",
  name: "Card Fan Hover",
  fa: "بادبزن کارت",
  description: "Hover spreads five cards into a wide 3D fan, lifting the middle card toward you.",
  faDescription: "با هاور، پنج کارت مانند بادبزن سه‌بعدی باز می‌شوند و کارت وسط به جلو می‌آید.",
  tags: ["fan", "cards", "hover"],
  interaction: "hover",
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="fan"><div class="cd c1">A</div><div class="cd c2">B</div><div class="cd c3">C</div><div class="cd c4">D</div><div class="cd c5">E</div></div></div>`,
  css: `
.fx-tq1-card-fan .fan { position: relative; width: 60px; height: 88px; transform-style: preserve-3d; }
.fx-tq1-card-fan .cd { position: absolute; inset: 0; border-radius: 9px; border: 2px solid #fff; box-shadow: 0 6px 14px rgba(15, 23, 42, .25); transform-origin: 50% 118%; transition: transform .5s cubic-bezier(.5, 1.4, .4, 1); display: grid; place-items: center; font: 800 14px sans-serif; color: rgba(255, 255, 255, .9); }
.fx-tq1-card-fan .c1 { background: linear-gradient(150deg, #fb7185, #be123c); transform: rotate(-24deg); }
.fx-tq1-card-fan .c2 { background: linear-gradient(150deg, #fbbf24, #b45309); transform: rotate(-12deg); }
.fx-tq1-card-fan .c3 { background: linear-gradient(150deg, #34d399, #047857); transform: rotate(0deg); }
.fx-tq1-card-fan .c4 { background: linear-gradient(150deg, #38bdf8, #0369a1); transform: rotate(12deg); }
.fx-tq1-card-fan .c5 { background: linear-gradient(150deg, #a78bfa, #6d28d9); transform: rotate(24deg); }
.fx-tq1-card-fan .fan:hover .c1 { transform: rotate(-38deg) translateZ(12px); }
.fx-tq1-card-fan .fan:hover .c2 { transform: rotate(-19deg) translateZ(8px); }
.fx-tq1-card-fan .fan:hover .c3 { transform: translateY(-10px) translateZ(16px); }
.fx-tq1-card-fan .fan:hover .c4 { transform: rotate(19deg) translateZ(8px); }
.fx-tq1-card-fan .fan:hover .c5 { transform: rotate(38deg) translateZ(12px); }
`,
});

/* 14 — deck of three cards shuffling */
fx({
  id: "tq1-deck-swap",
  name: "Deck Swap Shuffle",
  fa: "بر زدن دسته‌کارت",
  description: "Three cards endlessly cycle through the deck: front card flies off, order reshuffles.",
  faDescription: "سه کارت پیوسته در دسته می‌چرخند: کارت جلو پرواز می‌کند و ترتیب دوباره بسته می‌شود.",
  tags: ["deck", "shuffle", "loop"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="deck"><div class="card ca"></div><div class="card cb"></div><div class="card cc"></div></div></div>`,
  css: `
.fx-tq1-deck-swap .deck { position: relative; width: 70px; height: 96px; transform: rotateX(10deg) rotateY(-10deg); transform-style: preserve-3d; }
.fx-tq1-deck-swap .card { position: absolute; inset: 0; border-radius: 10px; border: 1px solid rgba(255, 255, 255, .5); box-shadow: 0 10px 22px rgba(15, 23, 42, .3); }
.fx-tq1-deck-swap .ca { background: linear-gradient(160deg, #6366f1, #3730a3); animation: tq1-deck-a 6s ease-in-out infinite; }
.fx-tq1-deck-swap .cb { background: linear-gradient(160deg, #0ea5e9, #075985); animation: tq1-deck-b 6s ease-in-out infinite; }
.fx-tq1-deck-swap .cc { background: linear-gradient(160deg, #10b981, #065f46); animation: tq1-deck-c 6s ease-in-out infinite; }
@keyframes tq1-deck-a {
  0%, 14% { transform: translate3d(0px, 0px, 48px); }
  24% { transform: translate3d(84px, -10px, 70px) rotateZ(10deg); }
  34%, 52% { transform: translate3d(0px, 4px, 8px); }
  64%, 78% { transform: translate3d(0px, -2px, 26px); }
  100% { transform: translate3d(0px, 0px, 48px); }
}
@keyframes tq1-deck-b {
  0%, 14% { transform: translate3d(0px, -2px, 26px); }
  24%, 46% { transform: translate3d(0px, 0px, 48px); }
  56% { transform: translate3d(-84px, 10px, 70px) rotateZ(-10deg); }
  66%, 84% { transform: translate3d(0px, 4px, 8px); }
  100% { transform: translate3d(0px, -2px, 26px); }
}
@keyframes tq1-deck-c {
  0%, 14% { transform: translate3d(0px, 4px, 8px); }
  24%, 40% { transform: translate3d(0px, -2px, 26px); }
  50%, 70% { transform: translate3d(0px, 0px, 48px); }
  80% { transform: translate3d(84px, -10px, 70px) rotateZ(10deg); }
  90%, 100% { transform: translate3d(0px, 4px, 8px); }
}
`,
});

/* 15 — extruded text swinging in 3D */
fx({
  id: "tq1-text-orbit",
  name: "Extruded Text Orbit",
  fa: "متن اکسترود شده",
  description: "Layered copies of the word swing in 3D, the stack of depths forming real extrusion.",
  faDescription: "لایه‌های تکرارشدهٔ واژه در فضا تاب می‌خورند و اکسترود سه‌بعدی می‌سازند.",
  tags: ["text", "extrude", "swing"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="orbit"><span class="ly l1">3D</span><span class="ly l2">3D</span><span class="ly l3">3D</span><span class="ly l4">3D</span><span class="ly l5">3D</span><span class="ly l6">3D</span></div></div>`,
  css: `
.fx-tq1-text-orbit .orbit { position: relative; width: 80px; height: 58px; transform-style: preserve-3d; animation: tq1-orbit-swing 4.5s ease-in-out infinite alternate; }
.fx-tq1-text-orbit .ly { position: absolute; left: 50%; top: 50%; font: 900 46px/1 sans-serif; letter-spacing: 2px; white-space: nowrap; }
.fx-tq1-text-orbit .l1 { transform: translate(-50%, -50%) translateZ(0px); color: #a5b4fc; }
.fx-tq1-text-orbit .l2 { transform: translate(-50%, -50%) translateZ(-5px); color: #818cf8; }
.fx-tq1-text-orbit .l3 { transform: translate(-50%, -50%) translateZ(-10px); color: #6366f1; }
.fx-tq1-text-orbit .l4 { transform: translate(-50%, -50%) translateZ(-15px); color: #4f46e5; }
.fx-tq1-text-orbit .l5 { transform: translate(-50%, -50%) translateZ(-20px); color: #4338ca; }
.fx-tq1-text-orbit .l6 { transform: translate(-50%, -50%) translateZ(-25px); color: #312e81; }
@keyframes tq1-orbit-swing { from { transform: rotateY(-26deg); } to { transform: rotateY(26deg); } }
`,
});

/* 16 — lighthouse with sweeping beam */
fx({
  id: "tq1-lighthouse",
  name: "Lighthouse Beam",
  fa: "چراغ دریا",
  description: "A striped lighthouse whose glowing beam sweeps a full circle in 3D space.",
  faDescription: "فانوس دریایی راه‌راه که پرتو درخشانش یک دور کامل در فضا می‌چرخد.",
  tags: ["lighthouse", "beam", "rotate"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="sea"><div class="beam b1"></div><div class="beam b2"></div><div class="base"></div><div class="tower"></div><div class="lamp"></div></div></div>`,
  css: `
.fx-tq1-lighthouse .sea { position: relative; width: 150px; height: 118px; transform: rotateX(10deg); transform-style: preserve-3d; }
.fx-tq1-lighthouse .base { position: absolute; bottom: 0px; left: 50%; width: 124px; height: 18px; margin-left: -62px; border-radius: 50%; background: linear-gradient(#475569, #1e293b); }
.fx-tq1-lighthouse .tower { position: absolute; bottom: 8px; left: 50%; width: 36px; height: 62px; margin-left: -18px; clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%); background: repeating-linear-gradient(0deg, #f87171 0px 9px, #fecaca 9px 18px); }
.fx-tq1-lighthouse .lamp { position: absolute; bottom: 68px; left: 50%; width: 18px; height: 14px; margin-left: -9px; border-radius: 4px; background: radial-gradient(circle at 40% 35%, #fef9c3, #facc15); animation: tq1-lamp-pulse 1.6s ease-in-out infinite; }
.fx-tq1-lighthouse .beam { position: absolute; top: 36px; left: 66px; width: 96px; height: 14px; transform-origin: left center; background: linear-gradient(90deg, rgba(253, 230, 138, .95), rgba(253, 230, 138, 0)); clip-path: polygon(0% 38%, 100% 0%, 100% 100%, 0% 62%); }
.fx-tq1-lighthouse .b1 { animation: tq1-beam-a 5s linear infinite; }
.fx-tq1-lighthouse .b2 { animation: tq1-beam-b 5s linear infinite; }
@keyframes tq1-lamp-pulse { 0%, 100% { box-shadow: 0 0 8px 2px rgba(250, 204, 21, .5); } 50% { box-shadow: 0 0 20px 8px rgba(250, 204, 21, .95); } }
@keyframes tq1-beam-a { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
@keyframes tq1-beam-b { from { transform: rotateY(180deg); } to { transform: rotateY(540deg); } }
`,
});

/* 17 — 3D windmill with spinning blades */
fx({
  id: "tq1-windmill",
  name: "3D Windmill",
  fa: "آسیاب بادی",
  description: "A tilted windmill whose four depth-offset blades spin around a golden hub.",
  faDescription: "آسیاب بادی با کج‌نما که چهار پرهٔ عمق‌دار آن دور توپ طلایی می‌چرخند.",
  tags: ["windmill", "blades", "spin"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="mill"><div class="tower"></div><div class="door"></div><div class="head"><div class="blade bl1"></div><div class="blade bl2"></div><div class="blade bl3"></div><div class="blade bl4"></div></div></div></div>`,
  css: `
.fx-tq1-windmill .mill { position: relative; width: 110px; height: 118px; transform: rotateX(14deg) rotateY(-14deg); transform-style: preserve-3d; }
.fx-tq1-windmill .tower { position: absolute; bottom: 0px; left: 50%; width: 46px; height: 76px; margin-left: -23px; clip-path: polygon(32% 0%, 68% 0%, 94% 100%, 6% 100%); background: linear-gradient(90deg, #e7e5e4, #a8a29e 55%, #78716c); }
.fx-tq1-windmill .door { position: absolute; bottom: 0px; left: 50%; width: 16px; height: 22px; margin-left: -8px; border-radius: 8px 8px 0 0; background: linear-gradient(#57534e, #292524); }
.fx-tq1-windmill .head { position: absolute; top: 10px; left: 50%; width: 56px; height: 56px; margin-left: -28px; transform-style: preserve-3d; animation: tq1-mill-spin 7s linear infinite; }
.fx-tq1-windmill .blade { position: absolute; left: 24px; top: 1px; width: 8px; height: 27px; border-radius: 4px; transform-origin: 4px 27px; background: linear-gradient(#fafaf9, #d6d3d1); border: 1px solid #a8a29e; }
.fx-tq1-windmill .bl1 { transform: rotateZ(0deg) translateZ(6px); }
.fx-tq1-windmill .bl2 { transform: rotateZ(90deg) translateZ(-6px); }
.fx-tq1-windmill .bl3 { transform: rotateZ(180deg) translateZ(6px); }
.fx-tq1-windmill .bl4 { transform: rotateZ(270deg) translateZ(-6px); }
.fx-tq1-windmill .head::after { content: ""; position: absolute; left: 20px; top: 20px; width: 16px; height: 16px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fbbf24, #92400e); }
@keyframes tq1-mill-spin { from { transform: rotateZ(0deg); } to { transform: rotateZ(360deg); } }
`,
});

/* 18 — planet with two orbiting moons */
fx({
  id: "tq1-two-moons",
  name: "Two Moons Orbit",
  fa: "دو قمر در مدار",
  description: "A glowing planet with two moons circling on tilted dashed orbit rings.",
  faDescription: "سیاره‌ای درخشان با دو قمر که روی حلقه‌های مداری کج‌شده می‌گردند.",
  tags: ["planet", "orbit", "space"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="sys"><div class="ring r1"></div><div class="ring r2"></div><div class="planet"></div><div class="orb o1"><div class="moon m1"></div></div><div class="orb o2"><div class="moon m2"></div></div></div></div>`,
  css: `
.fx-tq1-two-moons .sys { position: relative; width: 120px; height: 120px; transform: rotateX(18deg); transform-style: preserve-3d; }
.fx-tq1-two-moons .planet { position: absolute; left: 50%; top: 50%; width: 46px; height: 46px; margin: -23px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #a5b4fc, #4338ca 60%, #1e1b4b); box-shadow: 0 0 18px rgba(99, 102, 241, .55); }
.fx-tq1-two-moons .orb { position: absolute; left: 50%; top: 50%; width: 0px; height: 0px; transform-style: preserve-3d; }
.fx-tq1-two-moons .o1 { animation: tq1-orbit-a 7s linear infinite; }
.fx-tq1-two-moons .o2 { animation: tq1-orbit-b 11s linear infinite; }
.fx-tq1-two-moons .m1 { position: absolute; left: -7px; top: -7px; width: 14px; height: 14px; border-radius: 50%; transform: translateX(50px); background: radial-gradient(circle at 35% 30%, #fde68a, #b45309); }
.fx-tq1-two-moons .m2 { position: absolute; left: -6px; top: -6px; width: 12px; height: 12px; border-radius: 50%; transform: translateX(58px); background: radial-gradient(circle at 35% 30%, #f1f5f9, #64748b); }
.fx-tq1-two-moons .ring { position: absolute; left: 50%; top: 50%; border-radius: 50%; border: 1px dashed rgba(148, 163, 184, .65); }
.fx-tq1-two-moons .r1 { width: 108px; height: 108px; margin: -54px; transform: rotateX(72deg); }
.fx-tq1-two-moons .r2 { width: 124px; height: 124px; margin: -62px; transform: rotateY(48deg) rotateX(72deg); }
@keyframes tq1-orbit-a { from { transform: rotateX(72deg) rotateZ(0deg); } to { transform: rotateX(72deg) rotateZ(360deg); } }
@keyframes tq1-orbit-b { from { transform: rotateY(48deg) rotateX(72deg) rotateZ(360deg); } to { transform: rotateY(48deg) rotateX(72deg) rotateZ(0deg); } }
`,
});

/* 19 — rotating spiral staircase */
fx({
  id: "tq1-spiral-stairs",
  name: "Spiral Stairs Rotate",
  fa: "پلکان مارپیچ",
  description: "Eight treads wind upward around a pole while the whole helix slowly rotates.",
  faDescription: "هشت پله دور میلهٔ مرکزی بالا می‌پیچند و کل مارپیچ به‌آرامی می‌چرخد.",
  tags: ["spiral", "stairs", "helix"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="spiral"><div class="pole"></div><div class="st s1"></div><div class="st s2"></div><div class="st s3"></div><div class="st s4"></div><div class="st s5"></div><div class="st s6"></div><div class="st s7"></div><div class="st s8"></div></div></div>`,
  css: `
.fx-tq1-spiral-stairs .spiral { position: relative; width: 90px; height: 104px; transform-style: preserve-3d; animation: tq1-spiral-turn 16s linear infinite; }
.fx-tq1-spiral-stairs .pole { position: absolute; left: 50%; top: 50%; width: 6px; height: 92px; margin: -46px -3px; border-radius: 3px; background: linear-gradient(90deg, #cbd5e1, #64748b); }
.fx-tq1-spiral-stairs .st { position: absolute; left: 50%; top: 50%; width: 32px; height: 14px; margin: -7px -16px; border-radius: 3px; background: linear-gradient(180deg, #7dd3fc, #0ea5e9); box-shadow: 0 3px 6px rgba(2, 132, 199, .35); }
.fx-tq1-spiral-stairs .s1 { transform: rotateY(0deg) translateZ(30px) translateY(34px); }
.fx-tq1-spiral-stairs .s2 { transform: rotateY(45deg) translateZ(30px) translateY(25px); }
.fx-tq1-spiral-stairs .s3 { transform: rotateY(90deg) translateZ(30px) translateY(16px); }
.fx-tq1-spiral-stairs .s4 { transform: rotateY(135deg) translateZ(30px) translateY(7px); }
.fx-tq1-spiral-stairs .s5 { transform: rotateY(180deg) translateZ(30px) translateY(-2px); }
.fx-tq1-spiral-stairs .s6 { transform: rotateY(225deg) translateZ(30px) translateY(-11px); }
.fx-tq1-spiral-stairs .s7 { transform: rotateY(270deg) translateZ(30px) translateY(-20px); }
.fx-tq1-spiral-stairs .s8 { transform: rotateY(315deg) translateZ(30px) translateY(-29px); }
@keyframes tq1-spiral-turn { from { transform: rotateX(18deg) rotateY(0deg); } to { transform: rotateX(18deg) rotateY(360deg); } }
`,
});

/* 20 — twisting tower of slabs */
fx({
  id: "tq1-twist-tower",
  name: "Twist Tower",
  fa: "برج پیچ‌خورده",
  description: "Nine pastel slabs twist progressively as the whole tower spins on its base.",
  faDescription: "نُه صفحهٔ پاستلی به‌تدریج پیچ می‌خورند و کل برج دور پایهٔ خود می‌چرخد.",
  tags: ["tower", "twist", "rotate"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="twist"><div class="sl s1"></div><div class="sl s2"></div><div class="sl s3"></div><div class="sl s4"></div><div class="sl s5"></div><div class="sl s6"></div><div class="sl s7"></div><div class="sl s8"></div><div class="sl s9"></div></div></div>`,
  css: `
.fx-tq1-twist-tower .twist { position: relative; width: 44px; height: 104px; transform-style: preserve-3d; animation: tq1-twist-turn 12s linear infinite; }
.fx-tq1-twist-tower .sl { position: absolute; left: 2px; width: 40px; height: 9px; border-radius: 3px; background: linear-gradient(90deg, #f9a8d4, #c084fc, #818cf8); box-shadow: 0 2px 5px rgba(147, 51, 234, .3); }
.fx-tq1-twist-tower .s1 { bottom: 0px; transform: rotateY(0deg); }
.fx-tq1-twist-tower .s2 { bottom: 11px; transform: rotateY(13deg); }
.fx-tq1-twist-tower .s3 { bottom: 22px; transform: rotateY(26deg); }
.fx-tq1-twist-tower .s4 { bottom: 33px; transform: rotateY(39deg); }
.fx-tq1-twist-tower .s5 { bottom: 44px; transform: rotateY(52deg); }
.fx-tq1-twist-tower .s6 { bottom: 55px; transform: rotateY(65deg); }
.fx-tq1-twist-tower .s7 { bottom: 66px; transform: rotateY(78deg); }
.fx-tq1-twist-tower .s8 { bottom: 77px; transform: rotateY(91deg); }
.fx-tq1-twist-tower .s9 { bottom: 88px; transform: rotateY(104deg); }
@keyframes tq1-twist-turn { from { transform: rotateX(-12deg) rotateY(0deg); } to { transform: rotateX(-12deg) rotateY(360deg); } }
`,
});

/* 21 — floating crystal gem */
fx({
  id: "tq1-crystal-float",
  name: "Crystal Float",
  fa: "بلور شناور",
  description: "A four-faced crystal gem bobs in mid-air while slowly rotating with a soft glow.",
  faDescription: "بلور چهاروجهی در هوا بالا و پایین می‌رود و با درخششی ملایم به‌آرامی می‌چرخد.",
  tags: ["crystal", "gem", "float"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="gem"><div class="fa g1"></div><div class="fa g2"></div><div class="fa g3"></div><div class="fa g4"></div></div></div>`,
  css: `
.fx-tq1-crystal-float .gem { position: relative; width: 56px; height: 92px; transform-style: preserve-3d; animation: tq1-gem-float 5s ease-in-out infinite; filter: drop-shadow(0 12px 12px rgba(14, 165, 233, .35)); }
.fx-tq1-crystal-float .fa { position: absolute; inset: 0; clip-path: polygon(50% 0%, 100% 32%, 50% 100%, 0% 32%); backface-visibility: hidden; }
.fx-tq1-crystal-float .g1 { transform: rotateY(45deg) translateZ(17px); background: linear-gradient(160deg, rgba(165, 243, 252, .9), rgba(59, 130, 246, .5)); }
.fx-tq1-crystal-float .g2 { transform: rotateY(135deg) translateZ(17px); background: linear-gradient(160deg, rgba(103, 232, 249, .85), rgba(37, 99, 235, .55)); }
.fx-tq1-crystal-float .g3 { transform: rotateY(225deg) translateZ(17px); background: linear-gradient(160deg, rgba(147, 197, 253, .9), rgba(30, 64, 175, .55)); }
.fx-tq1-crystal-float .g4 { transform: rotateY(315deg) translateZ(17px); background: linear-gradient(160deg, rgba(224, 242, 254, .9), rgba(14, 165, 233, .55)); }
@keyframes tq1-gem-float { 0% { transform: translateY(-7px) rotateY(0deg); } 50% { transform: translateY(7px) rotateY(180deg); } 100% { transform: translateY(-7px) rotateY(360deg); } }
`,
});

/* 22 — flickering hologram card */
fx({
  id: "tq1-hologram",
  name: "Hologram Flicker Card",
  fa: "کارت هولوگرام",
  description: "A cyan hologram card flickers above its emitter pad with a traveling scan line.",
  faDescription: "کارت هولوگرام فیروزه‌ای بالای پایهٔ فرستنده سوسو می‌زند و خط اسکن روی آن می‌گذرد.",
  tags: ["hologram", "flicker", "scanline"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="holo"><div class="pad"></div><div class="cone"></div><div class="hcard"><div class="scan"></div><span class="htxt">HOLO</span></div></div></div>`,
  css: `
.fx-tq1-hologram .holo { position: relative; width: 120px; height: 118px; transform: rotateX(14deg); transform-style: preserve-3d; }
.fx-tq1-hologram .pad { position: absolute; bottom: 0px; left: 50%; width: 92px; height: 24px; margin-left: -46px; border-radius: 50%; border: 1px solid rgba(34, 211, 238, .8); background: radial-gradient(closest-side, rgba(34, 211, 238, .8), rgba(34, 211, 238, .12) 70%, rgba(34, 211, 238, 0)); }
.fx-tq1-hologram .cone { position: absolute; bottom: 10px; left: 50%; width: 78px; height: 62px; margin-left: -39px; clip-path: polygon(50% 100%, 100% 0%, 0% 0%); background: linear-gradient(to top, rgba(34, 211, 238, .4), rgba(34, 211, 238, 0)); }
.fx-tq1-hologram .hcard { position: absolute; bottom: 36px; left: 50%; width: 78px; height: 54px; margin-left: -39px; border: 1px solid rgba(103, 232, 249, .9); border-radius: 8px; display: grid; place-items: center; color: #cffafe; font: 700 12px sans-serif; letter-spacing: 2px; background: linear-gradient(rgba(8, 145, 178, .35), rgba(8, 145, 178, .12)), repeating-linear-gradient(0deg, rgba(165, 243, 252, .22) 0px 1px, rgba(165, 243, 252, 0) 1px 4px); animation: tq1-holo-bob 3.2s ease-in-out infinite, tq1-holo-flicker 4s linear infinite; }
.fx-tq1-hologram .scan { position: absolute; left: 0px; top: 0px; width: 100%; height: 12px; background: linear-gradient(rgba(103, 232, 249, 0), rgba(103, 232, 249, .55)); animation: tq1-holo-scan 2.2s linear infinite; }
@keyframes tq1-holo-bob { 0%, 100% { transform: translateY(0px) rotateY(-10deg); } 50% { transform: translateY(-8px) rotateY(10deg); } }
@keyframes tq1-holo-flicker { 0%, 100% { opacity: 1; } 6% { opacity: .55; } 8% { opacity: 1; } 37% { opacity: 1; } 39% { opacity: .5; } 42% { opacity: 1; } 70% { opacity: .75; } 72% { opacity: 1; } }
@keyframes tq1-holo-scan { from { transform: translateY(0px); } to { transform: translateY(42px); } }
`,
});

/* 23 — matchbox drawer sliding out */
fx({
  id: "tq1-matchbox",
  name: "Matchbox Slide",
  fa: "جعبهٔ کبریت",
  description: "Hover slides the drawer out of its 3D sleeve, revealing three matches inside.",
  faDescription: "با هاور، کشوی جعبهٔ سه‌بعدی بیرون می‌آید و سه کبریت داخلش دیده می‌شود.",
  tags: ["matchbox", "drawer", "hover"],
  interaction: "hover",
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="mb"><div class="drawer"><div class="stick st1"></div><div class="stick st2"></div><div class="stick st3"></div></div><div class="sleeve"><div class="top"></div><div class="front"></div></div></div></div>`,
  css: `
.fx-tq1-matchbox .mb { position: relative; width: 100px; height: 66px; transform: rotateX(-14deg) rotateY(12deg); transform-style: preserve-3d; }
.fx-tq1-matchbox .sleeve { position: absolute; left: 24px; top: 7px; width: 74px; height: 52px; transform-style: preserve-3d; }
.fx-tq1-matchbox .front { position: absolute; inset: 0; border: 1px solid #94a3b8; border-radius: 3px; background: linear-gradient(160deg, #f1f5f9, #cbd5e1); transform: translateZ(11px); }
.fx-tq1-matchbox .front::after { content: ""; position: absolute; right: 4px; top: 6px; bottom: 6px; width: 10px; border-radius: 2px; background: repeating-linear-gradient(0deg, #b45309 0px 3px, #7c2d12 3px 6px); opacity: .85; }
.fx-tq1-matchbox .top { position: absolute; left: 0px; top: -11px; width: 74px; height: 22px; border: 1px solid #94a3b8; background: linear-gradient(#f8fafc, #e2e8f0); transform: rotateX(90deg); }
.fx-tq1-matchbox .drawer { position: absolute; left: 24px; top: 11px; width: 72px; height: 44px; border: 1px solid #d6d3d1; border-radius: 3px; background: linear-gradient(#fef9c3, #fde68a); transition: transform .8s cubic-bezier(.55, 1.3, .4, 1); }
.fx-tq1-matchbox .mb:hover .drawer { transform: translateX(-40px); }
.fx-tq1-matchbox .stick { position: absolute; width: 30px; height: 5px; border-radius: 2px; background: linear-gradient(90deg, #fbbf24 72%, #dc2626 72%); box-shadow: 0 1px 2px rgba(15, 23, 42, .2); }
.fx-tq1-matchbox .st1 { left: 8px; top: 7px; transform: rotate(-4deg); }
.fx-tq1-matchbox .st2 { left: 14px; top: 19px; }
.fx-tq1-matchbox .st3 { left: 6px; top: 31px; transform: rotate(3deg); }
`,
});

/* 24 — domino toppling wave */
fx({
  id: "tq1-domino",
  name: "Domino Wave",
  fa: "موج دومینو",
  description: "Six dominoes topple one after another in a rhythmic wave, then rise and repeat.",
  faDescription: "شش دومینو پشت‌سرهم در یک موج ریتمیک می‌افتند، بلند می‌شوند و دوباره تکرار می‌کنند.",
  tags: ["domino", "wave", "stagger"],
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="row"><div class="dn d1"><i></i></div><div class="dn d2"><i></i></div><div class="dn d3"><i></i></div><div class="dn d4"><i></i></div><div class="dn d5"><i></i></div><div class="dn d6"><i></i></div><div class="floor"></div></div></div>`,
  css: `
.fx-tq1-domino .row { position: relative; width: 150px; height: 72px; transform: rotateY(-16deg) rotateX(8deg); transform-style: preserve-3d; }
.fx-tq1-domino .dn { position: absolute; bottom: 6px; width: 18px; height: 48px; transform-style: preserve-3d; }
.fx-tq1-domino .d1 { left: 2px; }
.fx-tq1-domino .d2 { left: 27px; }
.fx-tq1-domino .d3 { left: 52px; }
.fx-tq1-domino .d4 { left: 77px; }
.fx-tq1-domino .d5 { left: 102px; }
.fx-tq1-domino .d6 { left: 127px; }
.fx-tq1-domino .dn i { position: absolute; inset: 0; display: block; border: 1px solid #cbd5e1; border-radius: 3px; background: linear-gradient(#f8fafc, #e2e8f0); transform-origin: 50% 100%; animation: tq1-domino-fall 3s ease-in-out infinite; }
.fx-tq1-domino .dn i::after { content: ""; position: absolute; left: 7px; top: 12px; width: 4px; height: 4px; border-radius: 50%; background: #64748b; box-shadow: 0 20px 0 #64748b; }
.fx-tq1-domino .d2 i { animation-delay: .12s; }
.fx-tq1-domino .d3 i { animation-delay: .24s; }
.fx-tq1-domino .d4 i { animation-delay: .36s; }
.fx-tq1-domino .d5 i { animation-delay: .48s; }
.fx-tq1-domino .d6 i { animation-delay: .6s; }
.fx-tq1-domino .floor { position: absolute; left: -4px; right: -4px; bottom: 0px; height: 6px; border-radius: 3px; background: linear-gradient(#e2e8f0, #cbd5e1); }
@keyframes tq1-domino-fall { 0%, 10% { transform: rotateZ(0deg); } 28% { transform: rotateZ(78deg); } 80% { transform: rotateZ(78deg); } 92%, 100% { transform: rotateZ(0deg); } }
`,
});

/* 25 — castle double gate opening */
fx({
  id: "tq1-double-gate",
  name: "Double Gate Open",
  fa: "دروازهٔ دولنگه",
  description: "Hover swings both wooden gate leaves open toward you, revealing a glowing path.",
  faDescription: "با هاور، هر دو لنگهٔ دروازهٔ چوبی به سمت شما باز می‌شوند و مسیری روشن پیدا می‌شود.",
  tags: ["gate", "door", "hover"],
  interaction: "hover",
  html: `<div style="display:grid;place-items:center;min-height:150px;width:100%;perspective:600px"><div class="gate"><div class="path"></div><div class="arch"></div><div class="pil pl"></div><div class="pil pr"></div><div class="door dl"></div><div class="door dr"></div></div></div>`,
  css: `
.fx-tq1-double-gate .gate { position: relative; width: 150px; height: 110px; transform-style: preserve-3d; }
.fx-tq1-double-gate .arch { position: absolute; inset: 0; border: 1px solid #a8a29e; border-radius: 75px 75px 8px 8px; background: linear-gradient(#e7e5e4, #d6d3d1); }
.fx-tq1-double-gate .path { position: absolute; left: 47px; bottom: 0px; width: 56px; height: 86px; border-radius: 28px 28px 0 0; transform: translateZ(-18px); background: radial-gradient(circle at 50% 72%, rgba(253, 230, 138, .35), rgba(253, 230, 138, 0) 60%), linear-gradient(#78716c, #292524); }
.fx-tq1-double-gate .pil { position: absolute; bottom: 0px; width: 14px; height: 96px; border-radius: 2px; background: linear-gradient(90deg, #a8a29e, #78716c); transform: translateZ(2px); }
.fx-tq1-double-gate .pl { left: 33px; }
.fx-tq1-double-gate .pr { right: 33px; }
.fx-tq1-double-gate .door { position: absolute; top: 16px; width: 28px; height: 94px; border: 2px solid #78350f; border-radius: 3px; background: repeating-linear-gradient(90deg, #b45309 0px 5px, #92400e 5px 9px); transition: transform 1s cubic-bezier(.6, 0, .3, 1); }
.fx-tq1-double-gate .dl { left: 47px; transform-origin: left center; transform: translateZ(4px); }
.fx-tq1-double-gate .dr { right: 47px; transform-origin: right center; transform: translateZ(4px); }
.fx-tq1-double-gate .dl::after, .fx-tq1-double-gate .dr::after { content: ""; position: absolute; top: 44px; width: 5px; height: 5px; border-radius: 50%; background: #fbbf24; }
.fx-tq1-double-gate .dl::after { right: 3px; }
.fx-tq1-double-gate .dr::after { left: 3px; }
.fx-tq1-double-gate .gate:hover .dl { transform: translateZ(4px) rotateY(-108deg); }
.fx-tq1-double-gate .gate:hover .dr { transform: translateZ(4px) rotateY(108deg); }
`,
});
