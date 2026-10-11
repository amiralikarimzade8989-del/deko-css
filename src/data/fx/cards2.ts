import type { CssEffect } from "./types";

/** Cards — batch 2 (20 effects) */
export const cardEffects2: CssEffect[] = [
  {
    id: "beam-card",
    name: "Border Beam Card",
    fa: "کارت پرتو لبه",
    description: "A light beam travels around the card's border like a race track.",
    faDescription: "پرتو نوری مثل ماشین مسابقه دور قاب کارت می‌چرخد.",
    category: "cards",
    tags: ["beam", "border", "animation"],
    interaction: "auto",
    html: `<div class="bcm-card"><p>Beam Card</p></div>`,
    css: `.fx-beam-card .bcm-card {
  position: relative;
  width: 230px;
  height: 130px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: #17101f;
  overflow: hidden;
}
.fx-beam-card .bcm-card::before {
  content: "";
  position: absolute;
  inset: -150%;
  background: conic-gradient(transparent 70%, #f472b6 82%, #fbbf24 90%, transparent 96%);
  animation: bcm-run 3s linear infinite;
}
.fx-beam-card .bcm-card::after {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: 14px;
  background: #17101f;
  z-index: 0;
}
.fx-beam-card .bcm-card p {
  position: relative;
  z-index: 1;
  font-weight: 700;
  color: #f0abfc;
}
@keyframes bcm-run {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: "spotlight-card",
    name: "Spotlight Card",
    fa: "کارت نورافکن",
    description: "A soft spotlight fades in at the top corner when the card is hovered.",
    faDescription: "با هاور، نورافکنی نرم بالای کارت روشن می‌شود.",
    category: "cards",
    tags: ["spotlight", "glow", "hover"],
    interaction: "hover",
    html: `<div class="spt-card"><h4>Spotlight</h4><p>Hover for light</p></div>`,
    css: `.fx-spotlight-card .spt-card {
  position: relative;
  width: 230px;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #151222;
  overflow: hidden;
  cursor: pointer;
}
.fx-spotlight-card .spt-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(220px 160px at 70% 0%, rgba(251, 191, 36, 0.22), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}
.fx-spotlight-card .spt-card:hover::before {
  opacity: 1;
}
.fx-spotlight-card .spt-card h4 {
  position: relative;
  color: #fde68a;
  font-size: 17px;
  margin-bottom: 4px;
}
.fx-spotlight-card .spt-card p {
  position: relative;
  color: #94a3b8;
  font-size: 13px;
}`,
  },
  {
    id: "slide-grad-card",
    name: "Sliding Gradient Card",
    fa: "کارت گرادیان سرخورنده",
    description: "A two-color gradient sweeps diagonally across the card on hover.",
    faDescription: "با هاور گرادیان دومرحله‌ای مورب روی کارت کشیده می‌شود.",
    category: "cards",
    tags: ["gradient", "slide", "hover"],
    interaction: "hover",
    html: `<div class="sgc-card"><h4>Gradient</h4></div>`,
    css: `.fx-slide-grad-card .sgc-card {
  width: 230px;
  height: 130px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(120deg, #312e81 50%, #be185d 50%);
  background-size: 250% 250%;
  background-position: 100% 100%;
  cursor: pointer;
  transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-slide-grad-card .sgc-card:hover {
  background-position: 0 0;
}
.fx-slide-grad-card .sgc-card h4 {
  color: #fff;
  font-size: 19px;
  letter-spacing: 1px;
}`,
  },
  {
    id: "sticker-card",
    name: "Sticker Card",
    fa: "کارت استیکری",
    description: "A tilted sticker-style card that straightens and lifts when hovered.",
    faDescription: "کارت کج مثل استیکر که با هاور صاف می‌شود و بالا می‌آید.",
    category: "cards",
    tags: ["sticker", "rotate", "hover"],
    interaction: "hover",
    html: `<div class="stk-card"><span class="stk-badge">NEW!</span><h4>Sticker Card</h4><p>Peel me off the screen</p></div>`,
    css: `.fx-sticker-card .stk-card {
  position: relative;
  width: 220px;
  padding: 22px;
  border-radius: 18px;
  background: #fef3c7;
  border: 3px solid #1c1917;
  box-shadow: 6px 6px 0 #1c1917;
  transform: rotate(-3deg);
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}
.fx-sticker-card .stk-card:hover {
  transform: rotate(0deg) translateY(-6px) scale(1.03);
  box-shadow: 10px 12px 0 #1c1917;
}
.fx-sticker-card .stk-badge {
  position: absolute;
  top: -12px;
  right: -10px;
  background: #f43f5e;
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 999px;
  border: 2px solid #1c1917;
  transform: rotate(8deg);
}
.fx-sticker-card .stk-card h4 { color: #1c1917; font-size: 18px; margin-bottom: 4px; }
.fx-sticker-card .stk-card p { color: #57534e; font-size: 13px; }`,
  },
  {
    id: "profile-expand-card",
    name: "Profile Expand Card",
    fa: "کارت پروفایل بازشونده",
    description: "Profile info slides up over the gradient header area on hover.",
    faDescription: "با هاور، اطلاعات پروفایل روی ناحیه گرادیانی بالا می‌آید.",
    category: "cards",
    tags: ["profile", "slide", "hover"],
    interaction: "hover",
    html: `<div class="pfc-card">
  <div class="pfc-top"><span class="pfc-avatar">د</span></div>
  <div class="pfc-info">
    <h4>DeKo</h4>
    <p>CSS Lover · Developer</p>
  </div>
</div>`,
    css: `.fx-profile-expand-card .pfc-card {
  width: 220px;
  border-radius: 16px;
  overflow: hidden;
  background: #1c1526;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
}
.fx-profile-expand-card .pfc-top {
  height: 86px;
  background: linear-gradient(120deg, #7c3aed, #db2777);
  display: grid;
  place-items: end center;
}
.fx-profile-expand-card .pfc-avatar {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  margin-bottom: -27px;
  border-radius: 50%;
  background: #1c1526;
  border: 3px solid #a78bfa;
  color: #e9d5ff;
  font-size: 22px;
  font-weight: 800;
}
.fx-profile-expand-card .pfc-info {
  padding: 34px 14px 14px;
  text-align: center;
  transform: translateY(14px);
  opacity: 0.4;
  transition: all 0.35s ease;
}
.fx-profile-expand-card .pfc-card:hover .pfc-info {
  transform: translateY(0);
  opacity: 1;
}
.fx-profile-expand-card .pfc-info h4 { color: #f5f3ff; font-size: 16px; }
.fx-profile-expand-card .pfc-info p { color: #a78bfa; font-size: 12.5px; margin-top: 2px; }`,
  },
  {
    id: "pricing-pop-card",
    name: "Pricing Pop Card",
    fa: "کارت قیمت جهشی",
    description: "The pricing card pops forward with a glow ring when hovered.",
    faDescription: "کارت قیمت با هاور جلو می‌آید و هاله دورش روشن می‌شود.",
    category: "cards",
    tags: ["pricing", "scale", "glow"],
    interaction: "hover",
    html: `<div class="ppc-card">
  <h4>PRO</h4>
  <div class="ppc-price">$9<span>/mo</span></div>
  <p>Everything unlocked</p>
</div>`,
    css: `.fx-pricing-pop-card .ppc-card {
  width: 190px;
  padding: 22px 18px;
  text-align: center;
  border-radius: 18px;
  background: #14101d;
  border: 1px solid rgba(52, 211, 153, 0.35);
  cursor: pointer;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
}
.fx-pricing-pop-card .ppc-card:hover {
  transform: scale(1.08);
  box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.25), 0 18px 40px rgba(52, 211, 153, 0.18);
}
.fx-pricing-pop-card .ppc-card h4 { color: #34d399; letter-spacing: 3px; font-size: 14px; }
.fx-pricing-pop-card .ppc-price {
  font-size: 34px;
  font-weight: 900;
  color: #fff;
  margin: 6px 0 4px;
}
.fx-pricing-pop-card .ppc-price span { font-size: 14px; color: #6ee7b7; font-weight: 600; }
.fx-pricing-pop-card .ppc-card p { color: #94a3b8; font-size: 12.5px; }`,
  },
  {
    id: "ticket-card",
    name: "Ticket Card",
    fa: "کارت بلیت",
    description: "A ticket with punched side notches and a dashed tear line.",
    faDescription: "بلیتی با گوشه‌های سوراخ‌شده و خط پاره dashed.",
    category: "cards",
    tags: ["ticket", "mask", "creative"],
    interaction: "auto",
    html: `<div class="tkt-card">
  <div class="tkt-main"><h4>DeKo Fest</h4><p>CSS Party · 2026</p></div>
  <div class="tkt-stub">№ 212</div>
</div>`,
    css: `.fx-ticket-card .tkt-card {
  display: flex;
  width: 250px;
  height: 96px;
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle 12px at 0 50%, transparent 98%, #1c1230) left,
    radial-gradient(circle 12px at 100% 50%, transparent 98%, #1c1230) right;
  background-size: 51% 100%;
  background-repeat: no-repeat;
  filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.4));
}
.fx-ticket-card .tkt-main {
  flex: 1.7;
  padding: 14px 16px;
  background: #2a1b45;
  border-right: 2px dashed rgba(233, 213, 255, 0.4);
}
.fx-ticket-card .tkt-main h4 { color: #e9d5ff; font-size: 17px; }
.fx-ticket-card .tkt-main p { color: #a78bfa; font-size: 12px; margin-top: 4px; }
.fx-ticket-card .tkt-stub {
  flex: 1;
  display: grid;
  place-items: center;
  background: #1c1230;
  color: #c084fc;
  font-family: ui-monospace, monospace;
  font-size: 13px;
}`,
    previewBg: "linear-gradient(135deg, #312e8133, #1c1230)",
  },
  {
    id: "news-gradient-card",
    name: "News Header Card",
    fa: "کارت خبری",
    description: "The header gradient slowly shifts hues like a living magazine cover.",
    faDescription: "گرادیان هدر مثل جلد مجله زنده رنگ عوض می‌کند.",
    category: "cards",
    tags: ["news", "gradient", "animation"],
    interaction: "auto",
    html: `<div class="ngc-card">
  <div class="ngc-cover"></div>
  <div class="ngc-body"><h4>CSS Weekly</h4><p>Issue #212 — Effects special</p></div>
</div>`,
    css: `.fx-news-gradient-card .ngc-card {
  width: 210px;
  border-radius: 14px;
  overflow: hidden;
  background: #131019;
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.fx-news-gradient-card .ngc-cover {
  height: 92px;
  background: linear-gradient(120deg, #f43f5e, #fb923c, #facc15, #f43f5e);
  background-size: 300% 300%;
  animation: ngc-shift 6s ease infinite;
}
@keyframes ngc-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.fx-news-gradient-card .ngc-body { padding: 12px 14px; }
.fx-news-gradient-card .ngc-body h4 { color: #fff; font-size: 16px; }
.fx-news-gradient-card .ngc-body p { color: #a1a1aa; font-size: 12px; margin-top: 2px; }`,
  },
  {
    id: "press-card",
    name: "Press Down Card",
    fa: "کارت فشاری",
    description: "The card physically presses into the page when clicked.",
    faDescription: "کارت با کلیک داخل صفحه فرو می‌رود.",
    category: "cards",
    tags: ["press", "active", "3d"],
    interaction: "click",
    html: `<div class="prs-card"><h4>Press me</h4></div>`,
    css: `.fx-press-card .prs-card {
  width: 220px;
  height: 120px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: #7c3aed;
  box-shadow: 0 10px 0 #4c1d95, 0 16px 30px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.fx-press-card .prs-card:active {
  transform: translateY(8px);
  box-shadow: 0 2px 0 #4c1d95, 0 4px 10px rgba(0, 0, 0, 0.35);
}
.fx-press-card .prs-card h4 { color: #fff; font-size: 20px; }`,
  },
  {
    id: "neon-frame-card",
    name: "Neon Frame Card",
    fa: "کارت قاب نئونی",
    description: "A neon frame ignites around the card with a flicker on hover.",
    faDescription: "با هاور قاب نئونی با سوسو دور کارت روشن می‌شود.",
    category: "cards",
    tags: ["neon", "frame", "hover"],
    interaction: "hover",
    html: `<div class="nfc-card"><h4>Neon Frame</h4></div>`,
    css: `.fx-neon-frame-card .nfc-card {
  width: 210px;
  height: 120px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  border: 2px solid rgba(34, 211, 238, 0.3);
  cursor: pointer;
  transition: box-shadow 0.25s ease, border-color 0.25s ease;
}
.fx-neon-frame-card .nfc-card:hover {
  border-color: #22d3ee;
  animation: nfc-flick 1.4s linear infinite;
}
.fx-neon-frame-card .nfc-card h4 { color: #a5f3fc; font-size: 18px; letter-spacing: 1px; }
@keyframes nfc-flick {
  0%, 100% { box-shadow: 0 0 10px rgba(34, 211, 238, 0.5), inset 0 0 10px rgba(34, 211, 238, 0.2); }
  45% { box-shadow: 0 0 24px rgba(34, 211, 238, 0.85), inset 0 0 18px rgba(34, 211, 238, 0.3); }
  50% { box-shadow: 0 0 6px rgba(34, 211, 238, 0.4); }
  55% { box-shadow: 0 0 22px rgba(34, 211, 238, 0.8); }
}`,
  },
  {
    id: "frosted-card",
    name: "Frosted Glass Card",
    fa: "کارت شیشه مات",
    description: "Strong backdrop blur floats over vivid background colors.",
    faDescription: "بلور قوی شیشه‌ای روی رنگ‌های زنده پس‌زمینه.",
    category: "cards",
    tags: ["glass", "blur", "frosted"],
    interaction: "auto",
    html: `<div class="frg-card"><h4>Frosted</h4><p>Blurred beauty</p></div>`,
    css: `.fx-frosted-card .frg-card {
  width: 210px;
  padding: 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.25);
}
.fx-frosted-card .frg-card h4 { color: #fff; font-size: 19px; margin-bottom: 4px; }
.fx-frosted-card .frg-card p { color: rgba(255, 255, 255, 0.8); font-size: 13px; }`,
    previewBg: "linear-gradient(120deg, #f43f5e, #fb923c 45%, #4ade80)",
  },
  {
    id: "fan-stack-card",
    name: "Fan Stack Card",
    fa: "کارت بادبزنی",
    description: "Two hidden layers fan out behind the card like a hand of cards.",
    faDescription: "دو لایه پنهان مثل ورق بازی پشت کارت باز می‌شوند.",
    category: "cards",
    tags: ["stack", "layers", "hover"],
    interaction: "hover",
    html: `<div class="fsk-card"><h4>Stack</h4></div>`,
    css: `.fx-fan-stack-card .fsk-card {
  position: relative;
  width: 200px;
  height: 120px;
  border-radius: 14px;
  background: #8b5cf6;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform 0.35s ease;
  z-index: 1;
}
.fx-fan-stack-card .fsk-card::before,
.fx-fan-stack-card .fsk-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: #6d28d9;
  z-index: -1;
  transition: transform 0.35s ease;
}
.fx-fan-stack-card .fsk-card::after { background: #4c1d95; }
.fx-fan-stack-card .fsk-card:hover { transform: translateY(-4px); }
.fx-fan-stack-card .fsk-card:hover::before { transform: rotate(7deg) translate(6px, 2px); }
.fx-fan-stack-card .fsk-card:hover::after { transform: rotate(-7deg) translate(-6px, 2px); }
.fx-fan-stack-card .fsk-card h4 { color: #fff; font-size: 20px; }`,
  },
  {
    id: "sticky-note-card",
    name: "Sticky Note",
    fa: "برگه یادداشت",
    description: "A yellow sticky note that straightens its curl on hover.",
    faDescription: "یادداشت زرد که با هاور صاف می‌شود.",
    category: "cards",
    tags: ["note", "paper", "hover"],
    interaction: "hover",
    html: `<div class="stn-note">Buy milk ♥<br/>Learn CSS!</div>`,
    css: `.fx-sticky-note-card .stn-note {
  width: 190px;
  height: 150px;
  padding: 18px;
  background: linear-gradient(180deg, #fef08a, #fde047);
  color: #713f12;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.8;
  box-shadow: 4px 6px 14px rgba(0, 0, 0, 0.35);
  clip-path: polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%);
  transform: rotate(2.5deg);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.fx-sticky-note-card .stn-note:hover {
  transform: rotate(0deg) scale(1.05);
  box-shadow: 6px 10px 22px rgba(0, 0, 0, 0.4);
}`,
  },
  {
    id: "morph-radius-card",
    name: "Morphing Radius Card",
    fa: "کارت گوشه دگردیس",
    description: "Corner radii continuously morph in a hypnotic loop.",
    faDescription: "گوشه‌های کارت مدام به‌صورت هیپنوتیزم‌کننده تغییر شکل می‌دهند.",
    category: "cards",
    tags: ["border-radius", "morph", "animation"],
    interaction: "auto",
    html: `<div class="mrc-card"><h4>Morph</h4></div>`,
    css: `.fx-morph-radius-card .mrc-card {
  width: 200px;
  height: 120px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #059669, #14b8a6);
  animation: mrc-morph 5s ease-in-out infinite;
  cursor: default;
}
.fx-morph-radius-card .mrc-card h4 { color: #fff; font-size: 20px; }
@keyframes mrc-morph {
  0%, 100% { border-radius: 16px 60px 16px 60px; }
  25% { border-radius: 60px 16px 60px 16px; }
  50% { border-radius: 16px 16px 60px 60px; }
  75% { border-radius: 60px 60px 16px 16px; }
}`,
  },
  {
    id: "slide-up-content-card",
    name: "Slide-Up Content Card",
    fa: "کارت محتوای سرشور",
    description: "A description panel slides up covering the lower card area.",
    faDescription: "پنل توضیحات از پایین بالا می‌آید و بخشی از کارت را می‌پوشاند.",
    category: "cards",
    tags: ["slide", "overlay", "hover"],
    interaction: "hover",
    html: `<div class="suc-card">
  <div class="suc-visual"></div>
  <div class="suc-panel"><p>More details appear here on hover ✨</p></div>
</div>`,
    css: `.fx-slide-up-content-card .suc-card {
  position: relative;
  width: 210px;
  height: 140px;
  border-radius: 14px;
  overflow: hidden;
  background: #101726;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
}
.fx-slide-up-content-card .suc-visual {
  position: absolute;
  inset: 0;
  background: radial-gradient(140px 90px at 30% 20%, rgba(56, 189, 248, 0.4), transparent 70%), #101726;
}
.fx-slide-up-content-card .suc-panel {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 12px 14px;
  background: rgba(14, 116, 144, 0.92);
  backdrop-filter: blur(4px);
  transform: translateY(100%);
  transition: transform 0.35s ease;
}
.fx-slide-up-content-card .suc-card:hover .suc-panel { transform: translateY(0); }
.fx-slide-up-content-card .suc-panel p { color: #e0f2fe; font-size: 13px; }`,
  },
  {
    id: "holo-card",
    name: "Holographic Card",
    fa: "کارت هولوگرافیک",
    description: "A rainbow holographic sheen drifts across the card surface.",
    faDescription: "برق هولوگرافیک رنگین‌کمانی روی سطح کارت حرکت می‌کند.",
    category: "cards",
    tags: ["holographic", "sheen", "rainbow"],
    interaction: "auto",
    html: `<div class="hol-card"><h4>HOLO</h4></div>`,
    css: `.fx-holo-card .hol-card {
  position: relative;
  width: 200px;
  height: 120px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: #0f0b18;
  border: 1px solid rgba(255, 255, 255, 0.15);
  overflow: hidden;
  cursor: default;
}
.fx-holo-card .hol-card::before {
  content: "";
  position: absolute;
  inset: -60%;
  background: linear-gradient(60deg, transparent 20%, rgba(244,63,94,.25), rgba(250,204,21,.25), rgba(74,222,128,.25), rgba(34,211,238,.25), transparent 80%);
  animation: hol-drift 4s linear infinite;
}
.fx-holo-card .hol-card h4 {
  position: relative;
  color: #fff;
  font-size: 24px;
  letter-spacing: 6px;
  font-weight: 900;
}
@keyframes hol-drift {
  to { transform: translateX(40%) rotate(8deg); }
}`,
  },
  {
    id: "folder-tab-card",
    name: "Folder Tab Card",
    fa: "کارت پوشه‌ای",
    description: "A folder-style tab grows out of the top edge on hover.",
    faDescription: "زبانه پوشه با هاور از لبه بالای کارت بیرون می‌آید.",
    category: "cards",
    tags: ["folder", "tab", "hover"],
    interaction: "hover",
    html: `<div class="fdt-card"><div class="fdt-tab">Projects</div><div class="fdt-body"><h4>Folder</h4><p>12 files inside</p></div></div>`,
    css: `.fx-folder-tab-card .fdt-card {
  width: 210px;
  cursor: pointer;
}
.fx-folder-tab-card .fdt-tab {
  display: inline-block;
  padding: 6px 18px;
  border-radius: 10px 10px 0 0;
  background: #0d9488;
  color: #ccfbf1;
  font-size: 13px;
  font-weight: 700;
  transform: translateY(4px);
  transition: transform 0.3s ease;
}
.fx-folder-tab-card .fdt-card:hover .fdt-tab { transform: translateY(0); }
.fx-folder-tab-card .fdt-body {
  padding: 16px;
  border-radius: 0 14px 14px 14px;
  background: #115e59;
  border: 1px solid rgba(204, 251, 241, 0.2);
}
.fx-folder-tab-card .fdt-body h4 { color: #fff; font-size: 17px; }
.fx-folder-tab-card .fdt-body p { color: #99f6e4; font-size: 12.5px; margin-top: 3px; }`,
  },
  {
    id: "depth-shadow-card",
    name: "Depth Layers Card",
    fa: "کارت لایه‌های عمق",
    description: "Multiple colored shadows stack and spread as the card lifts.",
    faDescription: "سایه‌های رنگی چندلایه با بلند شدن کارت پخش می‌شوند.",
    category: "cards",
    tags: ["shadow", "depth", "hover"],
    interaction: "hover",
    html: `<div class="dsc-card"><h4>Depth</h4></div>`,
    css: `.fx-depth-shadow-card .dsc-card {
  width: 200px;
  height: 118px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: #f43f5e;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.fx-depth-shadow-card .dsc-card:hover {
  transform: translateY(-10px);
  box-shadow:
    0 6px 0 #be123c,
    0 14px 0 #9f1239,
    0 22px 0 #881337,
    0 30px 24px rgba(0, 0, 0, 0.45);
}
.fx-depth-shadow-card .dsc-card h4 { color: #fff; font-size: 20px; }`,
  },
  {
    id: "zigzag-border-card",
    name: "Marching Dashes Card",
    fa: "کارت خط‌چین رونده",
    description: "Dashed border segments march continuously around the card.",
    faDescription: "خط‌چین‌ها مدام دور کارت در حال رژه رفتن هستند.",
    category: "cards",
    tags: ["dashed", "border", "marching"],
    interaction: "auto",
    html: `<div class="mzd-card"><h4>March</h4></div>`,
    css: `.fx-zigzag-border-card .mzd-card {
  width: 200px;
  height: 118px;
  display: grid;
  place-items: center;
  border: 3px dashed #fbbf24;
  border-radius: 14px;
  background: rgba(251, 191, 36, 0.06);
  animation: mzd-march 14s linear infinite;
  cursor: default;
}
.fx-zigzag-border-card .mzd-card h4 { color: #fde68a; font-size: 20px; }
@keyframes mzd-march {
  to { border-radius: 50%; }
}`,
  },
  {
    id: "glow-tilt-card",
    name: "Glow Tilt Card",
    fa: "کارت کج درخشان",
    description: "Card tilts with perspective while a colored glow follows the tilt.",
    faDescription: "کارت با پرسپکتیو کج می‌شود و هاله رنگی همراهش می‌آید.",
    category: "cards",
    tags: ["tilt", "glow", "3d"],
    interaction: "hover",
    html: `<div class="gtc-card"><h4>Tilt + Glow</h4></div>`,
    css: `.fx-glow-tilt-card .gtc-card {
  width: 200px;
  height: 120px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, #4f46e533, #7c3aed66), #150f24;
  border: 1px solid rgba(167, 139, 250, 0.4);
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.fx-glow-tilt-card .gtc-card:hover {
  transform: perspective(500px) rotateX(9deg) rotateY(-11deg) translateY(-4px);
  box-shadow: -14px 18px 34px rgba(124, 58, 237, 0.35);
}
.fx-glow-tilt-card .gtc-card h4 { color: #ddd6fe; font-size: 17px; }`,
  },
];
