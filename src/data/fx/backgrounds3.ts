import type { CssEffect } from "./types";

/** Backgrounds — batch 3 (11 effects, fill the preview stage) */
export const backgroundEffects3: CssEffect[] = [
  {
    id: "polka-zoom-bg",
    name: "Polka Zoom BG",
    fa: "پس‌زمینه خال‌خالی زوم",
    description: "A polka dot pattern gently breathes bigger and smaller.",
    faDescription: "الگوی خال‌خالی آرام بزرگ و کوچک می‌شود؛ مثل تنفس.",
    category: "backgrounds",
    tags: ["polka", "dots", "zoom"],
    interaction: "auto",
    html: `<div class="pkz-bg"></div>`,
    css: `.fx-polka-zoom-bg .pkz-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, #f0abfc 22%, transparent 26%);
  background-size: 40px 40px;
  background-color: #1b0f24;
  animation: pkz-zoom 3.2s ease-in-out infinite;
}
@keyframes pkz-zoom {
  0%, 100% { background-size: 40px 40px; }
  50% { background-size: 56px 56px; }
}`,
  },
  {
    id: "sunset-glow-bg",
    name: "Sunset Glow BG",
    fa: "پس‌زمینه درخشش غروب",
    description: "Warm sunset colors softly pulse like a living dusk sky.",
    faDescription: "رنگ‌های گرم غروب مثل آسمان زنده نرم می‌تپند.",
    category: "backgrounds",
    tags: ["sunset", "warm", "glow"],
    interaction: "auto",
    html: `<div class="sng-bg"></div>`,
    css: `.fx-sunset-glow-bg .sng-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(90% 60% at 50% 100%, rgba(251, 113, 133, 0.55), transparent 70%),
    radial-gradient(70% 50% at 50% 95%, rgba(251, 191, 36, 0.4), transparent 65%),
    linear-gradient(180deg, #1e1b4b, #3b0764);
  animation: sng-breathe 5s ease-in-out infinite;
}
@keyframes sng-breathe {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.25); }
}`,
  },
  {
    id: "fireflies-bg",
    name: "Fireflies BG",
    fa: "پس‌زمینه کرم شب‌تاب",
    description: "Glowing fireflies wander around the dark meadow.",
    faDescription: "کرم‌های شب‌تاب در شب پرنور می‌گردند.",
    category: "backgrounds",
    tags: ["fireflies", "glow", "nature"],
    interaction: "auto",
    html: `<div class="ffl-bg"><i></i><i></i><i></i><i></i><i></i></div>`,
    css: `.fx-fireflies-bg .ffl-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: radial-gradient(70% 70% at 50% 100%, #14231a, #060d09);
}
.fx-fireflies-bg .ffl-bg i {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fde047;
  box-shadow: 0 0 12px #fde047;
  animation: ffl-fly 7s ease-in-out infinite alternate;
}
.fx-fireflies-bg .ffl-bg i:nth-child(1) { left: 15%; top: 60%; animation-duration: 6s; }
.fx-fireflies-bg .ffl-bg i:nth-child(2) { left: 40%; top: 30%; animation-duration: 8s; animation-delay: 1s; }
.fx-fireflies-bg .ffl-bg i:nth-child(3) { left: 65%; top: 70%; animation-duration: 7s; animation-delay: 2s; }
.fx-fireflies-bg .ffl-bg i:nth-child(4) { left: 82%; top: 40%; animation-duration: 9s; animation-delay: 0.5s; }
.fx-fireflies-bg .ffl-bg i:nth-child(5) { left: 55%; top: 15%; animation-duration: 6.5s; animation-delay: 3s; }
@keyframes ffl-fly {
  0% { transform: translate(0, 0); opacity: 0.2; }
  25% { opacity: 1; }
  50% { transform: translate(26px, -34px); opacity: 0.4; }
  75% { opacity: 1; }
  100% { transform: translate(-18px, -60px); opacity: 0.25; }
}`,
  },
  {
    id: "tunnel-rings-bg",
    name: "Tunnel Rings BG",
    fa: "پس‌زمینه تونل حلقه‌ای",
    description: "Rings rush toward you from deep inside a neon tunnel.",
    faDescription: "حلقه‌ها از عمق تونل نئونی به سمت شما می‌آیند.",
    category: "backgrounds",
    tags: ["tunnel", "rings", "retro"],
    interaction: "auto",
    html: `<div class="tnl-bg"><i></i><i></i><i></i></div>`,
    css: `.fx-tunnel-rings-bg .tnl-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0d0316;
}
.fx-tunnel-rings-bg .tnl-bg i {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 120px;
  height: 120px;
  margin: -60px;
  border-radius: 50%;
  border: 3px solid #e879f9;
  animation: tnl-zoom 3s linear infinite;
}
.fx-tunnel-rings-bg .tnl-bg i:nth-child(2) { animation-delay: 1s; border-color: #22d3ee; }
.fx-tunnel-rings-bg .tnl-bg i:nth-child(3) { animation-delay: 2s; border-color: #fbbf24; }
@keyframes tnl-zoom {
  from { transform: scale(0.15); opacity: 1; }
  to { transform: scale(4.2); opacity: 0; }
}`,
  },
  {
    id: "mesh-vivid-bg",
    name: "Vivid Mesh BG",
    fa: "پس‌زمینه مش رنگارنگ",
    description: "Four vivid color corners swim around and repaint the mesh.",
    faDescription: "چهار رنگ زنده در گوشه‌ها شنا می‌کنند و مش را رنگ می‌کنند.",
    category: "backgrounds",
    tags: ["mesh", "vivid", "gradient"],
    interaction: "auto",
    html: `<div class="vmx-bg"></div>`,
    css: `.fx-mesh-vivid-bg .vmx-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(at 12% 20%, #f472b6 0, transparent 55%),
    radial-gradient(at 85% 15%, #fbbf24 0, transparent 50%),
    radial-gradient(at 20% 85%, #34d399 0, transparent 55%),
    radial-gradient(at 80% 80%, #8b5cf6 0, transparent 50%),
    #131022;
  background-size: 160% 160%;
  animation: vmx-swim 10s ease-in-out infinite alternate;
}
@keyframes vmx-swim {
  from { background-position: 0% 0%; }
  to { background-position: 100% 100%; }
}`,
  },
  {
    id: "pixel-blink-bg",
    name: "Pixel Blink BG",
    fa: "پس‌زمینه پیکسل چشمک‌زن",
    description: "Retro pixels blink on and off like an old arcade attract screen.",
    faDescription: "پیکسل‌های رترو مثل صفحه بازی‌های قدیمی چشمک می‌زنند.",
    category: "backgrounds",
    tags: ["pixel", "retro", "blink"],
    interaction: "auto",
    html: `<div class="pxb-bg"></div>`,
    css: `.fx-pixel-blink-bg .pxb-bg {
  position: absolute;
  inset: 0;
  background-color: #0f0f1c;
  background-image:
    radial-gradient(3px 3px at 25% 25%, #4ade80 90%, transparent),
    radial-gradient(3px 3px at 75% 20%, #f472b6 90%, transparent),
    radial-gradient(3px 3px at 40% 70%, #facc15 90%, transparent),
    radial-gradient(3px 3px at 85% 75%, #22d3ee 90%, transparent),
    radial-gradient(3px 3px at 15% 55%, #a78bfa 90%, transparent);
  background-size: 90px 90px;
  animation: pxb-blink 1.6s steps(2) infinite;
}
@keyframes pxb-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0.25; }
}`,
  },
  {
    id: "depth-particles-bg",
    name: "Floating Particles BG",
    fa: "پس‌زمینه ذرات شناور",
    description: "Soft particles of different sizes drift upward at parallax speeds.",
    faDescription: "ذرات نرم با اندازه‌های مختلف با سرعت‌های متفاوت بالا می‌روند.",
    category: "backgrounds",
    tags: ["particles", "float", "depth"],
    interaction: "auto",
    html: `<div class="dpt-bg"><i></i><i></i><i></i><i></i><i></i><i></i></div>`,
    css: `.fx-depth-particles-bg .dpt-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #171026, #0b0714);
}
.fx-depth-particles-bg .dpt-bg i {
  position: absolute;
  bottom: -20px;
  border-radius: 50%;
  background: rgba(196, 181, 253, 0.7);
  animation: dpt-float 8s linear infinite;
}
.fx-depth-particles-bg .dpt-bg i:nth-child(1) { left: 12%; width: 5px; height: 5px; animation-duration: 9s; }
.fx-depth-particles-bg .dpt-bg i:nth-child(2) { left: 28%; width: 8px; height: 8px; animation-duration: 7s; animation-delay: 2s; opacity: 0.5; }
.fx-depth-particles-bg .dpt-bg i:nth-child(3) { left: 48%; width: 4px; height: 4px; animation-duration: 11s; animation-delay: 1s; }
.fx-depth-particles-bg .dpt-bg i:nth-child(4) { left: 64%; width: 7px; height: 7px; animation-duration: 8s; animation-delay: 3.5s; opacity: 0.6; }
.fx-depth-particles-bg .dpt-bg i:nth-child(5) { left: 80%; width: 5px; height: 5px; animation-duration: 10s; animation-delay: 0.5s; }
.fx-depth-particles-bg .dpt-bg i:nth-child(6) { left: 92%; width: 9px; height: 9px; animation-duration: 7.5s; animation-delay: 4s; opacity: 0.4; }
@keyframes dpt-float {
  to { transform: translateY(-340px); opacity: 0; }
}`,
  },
  {
    id: "scanline-bg",
    name: "Retro Scanline BG",
    fa: "پس‌زمینه خط اسکن رترو",
    description: "CRT scanlines crawl down a purple retro monitor screen.",
    faDescription: "خطوط اسکن CRT روی مانیتور بنفش قدیمی حرکت می‌کنند.",
    category: "backgrounds",
    tags: ["scanline", "crt", "retro"],
    interaction: "auto",
    html: `<div class="scn-bg"></div>`,
    css: `.fx-scanline-bg .scn-bg {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    180deg,
    rgba(167, 139, 250, 0.06) 0 2px,
    transparent 2px 5px
  ), linear-gradient(180deg, #1d1440, #0e0a20);
}
.fx-scanline-bg .scn-bg::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 34%;
  background: linear-gradient(180deg, transparent, rgba(196, 181, 253, 0.12), transparent);
  animation: scn-crawl 3.4s linear infinite;
}
@keyframes scn-crawl {
  from { top: -34%; }
  to { top: 100%; }
}`,
  },
  {
    id: "neon-clouds-bg",
    name: "Neon Clouds BG",
    fa: "پس‌زمینه ابرهای نئونی",
    description: "Blurred neon clouds drift slowly across a midnight sky.",
    faDescription: "ابرهای نئونی مات در آسمان نیمه‌شب شناورند.",
    category: "backgrounds",
    tags: ["clouds", "neon", "blur"],
    interaction: "auto",
    html: `<div class="ncl-bg"><i></i><i></i><i></i></div>`,
    css: `.fx-neon-clouds-bg .ncl-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0a0616;
}
.fx-neon-clouds-bg .ncl-bg i {
  position: absolute;
  width: 45%;
  height: 55%;
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.5;
  animation: ncl-drift 12s ease-in-out infinite alternate;
}
.fx-neon-clouds-bg .ncl-bg i:nth-child(1) { background: #d946ef; left: -10%; top: -20%; }
.fx-neon-clouds-bg .ncl-bg i:nth-child(2) { background: #22d3ee; right: -12%; top: 10%; animation-delay: 2s; }
.fx-neon-clouds-bg .ncl-bg i:nth-child(3) { background: #fbbf24; left: 25%; bottom: -30%; animation-delay: 4s; }
@keyframes ncl-drift {
  to { transform: translate(60px, 30px) scale(1.15); }
}`,
  },
  {
    id: "lava-lamp-bg",
    name: "Lava Lamp BG",
    fa: "پس‌زمینه لامپ لاوا",
    description: "Heavy blobs rise and sink lazily inside a groovy lava lamp.",
    faDescription: "لکه‌های سنگین مثل لامپ لاوا تنبل‌وار بالا و پایین می‌روند.",
    category: "backgrounds",
    tags: ["lava", "blobs", "retro"],
    interaction: "auto",
    html: `<div class="lvl-bg"><i></i><i></i><i></i></div>`,
    css: `.fx-lava-lamp-bg .lvl-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #2b0a3d, #12041c);
}
.fx-lava-lamp-bg .lvl-bg i {
  position: absolute;
  border-radius: 50%;
  filter: blur(26px);
  opacity: 0.8;
}
.fx-lava-lamp-bg .lvl-bg i:nth-child(1) {
  width: 130px; height: 130px; left: 20%; bottom: -60px;
  background: #f43f5e;
  animation: lvl-rise 8s ease-in-out infinite alternate;
}
.fx-lava-lamp-bg .lvl-bg i:nth-child(2) {
  width: 90px; height: 90px; left: 55%; bottom: -50px;
  background: #fb923c;
  animation: lvl-rise 10s ease-in-out infinite alternate 1.5s;
}
.fx-lava-lamp-bg .lvl-bg i:nth-child(3) {
  width: 60px; height: 60px; left: 38%; bottom: -40px;
  background: #facc15;
  animation: lvl-rise 7s ease-in-out infinite alternate 3s;
}
@keyframes lvl-rise {
  to { transform: translateY(-190px) translateX(24px) scale(0.8); }
}`,
  },
  {
    id: "confetti-bg",
    name: "Confetti Dots BG",
    fa: "پس‌زمینه کانفتی",
    description: "Multicolor confetti dots pop in and out across the celebration.",
    faDescription: "نقطه‌های کانفتی رنگی در سراسر صحنه روشن و خاموش می‌شوند.",
    category: "backgrounds",
    tags: ["confetti", "party", "dots"],
    interaction: "auto",
    html: `<div class="cnf-bg"></div>`,
    css: `.fx-confetti-bg .cnf-bg {
  position: absolute;
  inset: 0;
  background-color: #171021;
  background-image:
    radial-gradient(4px 4px at 20% 30%, #f43f5e 90%, transparent),
    radial-gradient(4px 4px at 60% 15%, #facc15 90%, transparent),
    radial-gradient(4px 4px at 80% 60%, #4ade80 90%, transparent),
    radial-gradient(4px 4px at 35% 75%, #22d3ee 90%, transparent),
    radial-gradient(4px 4px at 90% 30%, #a78bfa 90%, transparent),
    radial-gradient(4px 4px at 10% 60%, #fb923c 90%, transparent);
  background-size: 110px 110px;
  animation: cnf-pop 2.8s ease-in-out infinite;
}
@keyframes cnf-pop {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
}`,
  },
];
