"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft, ArrowRight, Search, Sparkles,
  Wand2, Boxes, Palette, MousePointerClick,
  Layers, Braces, MousePointer2, X, Box,
  Frame, Menu, Droplets, Activity, MessageCircle,
  Shapes, Image as ImageIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  ALL_EFFECTS,
  CATEGORY_META,
  CATEGORY_ORDER,
  TOTAL_EFFECTS,
  categoryLabel,
  effectName,
} from "@/data/fx";
import {
  T,
  fmtNum,
  initLangFromStorage,
  subscribeLang,
  getLangSnapshot,
  getLangServerSnapshot,
} from "@/lib/i18n";
import { EffectStyles } from "@/components/fx/effect-styles";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Reveal, Tilt3D, CountUp, BackToTop } from "@/components/site/motion";

// Load the saved language once on the client, before first render.
if (typeof window !== "undefined") {
  initLangFromStorage();
}

const TOOLS = [
  { icon: Palette, key: "toolGradient" },
  { icon: Boxes, key: "toolShadow" },
  { icon: Wand2, key: "toolRadius" },
  { icon: Sparkles, key: "toolPalette" },
] as const;

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  buttons: MousePointerClick,
  loaders: Sparkles,
  cards: Layers,
  text: Braces,
  backgrounds: Wand2,
  hover: MousePointer2,
  inputs: MousePointerClick,
  threed: Box,
  borders: Frame,
  nav: Menu,
  glass: Droplets,
  motion: Activity,
  tooltip: MessageCircle,
  images: ImageIcon,
  misc: Shapes,
};

export default function DekoHome() {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getLangServerSnapshot);
  const router = useRouter();
  const t = T[lang];
  const [query, setQuery] = useState("");

  const stats = useMemo(
    () => [
      { value: TOTAL_EFFECTS, label: t.statEffects, accent: "text-fuchsia-300" },
      { value: CATEGORY_ORDER.length, label: t.statCategories, accent: "text-amber-300" },
      { value: 4, label: t.statTools, accent: "text-emerald-300" },
      { value: 0, label: t.statDeps, accent: "text-cyan-300" },
    ],
    [t]
  );

  const topEffectCategories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const fx of ALL_EFFECTS) counts.set(fx.category, (counts.get(fx.category) ?? 0) + 1);
    return CATEGORY_ORDER.map((c) => ({ cat: c, count: counts.get(c) ?? 0 })).filter((x) => x.count > 0);
  }, []);

  // A rotating showcase of real effect names for the marquee strip.
  const marqueeNames = useMemo(() => {
    const step = Math.max(1, Math.floor(ALL_EFFECTS.length / 22));
    const picked: string[] = [];
    for (let i = 0; i < ALL_EFFECTS.length && picked.length < 22; i += step) {
      picked.push(effectName(ALL_EFFECTS[i], lang));
    }
    return picked;
  }, [lang]);

  function runSearch(q: string) {
    const term = q.trim();
    if (!term) {
      router.push("/effects");
      return;
    }
    router.push(`/effects?q=${encodeURIComponent(term)}`);
  }

  const Arrow = lang === "fa" ? ArrowLeft : ArrowRight;
  const popular = t.popularEffects;

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0812] text-zinc-100 antialiased">
      <EffectStyles effects={ALL_EFFECTS} />
      <SiteHeader />

      <main className="flex-1">
        {/* ================= Hero ================= */}
        <section className="relative overflow-hidden border-b border-white/[0.05]">
          {/* aurora + ambient lighting */}
          <div aria-hidden className="aurora" />
          <div aria-hidden className="blob left-[5%] top-4 h-72 w-72 bg-violet-600/25" />
          <div aria-hidden className="blob blob-2 right-[6%] top-16 h-80 w-80 bg-fuchsia-600/20" />
          <div aria-hidden className="blob blob-3 left-[40%] top-40 h-60 w-60 bg-cyan-500/15" />

          {/* spatial grid floor */}
          <div aria-hidden className="grid-floor pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-40" />

          {/* floating 3D decorations */}
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block" style={{ perspective: "900px" }}>
            <div className="ring3d-deco end-[9%] top-[16%] opacity-70" />
            <div className="ring3d-deco start-[6%] bottom-[14%] size-[84px] opacity-50" style={{ animationDuration: "17s", animationDirection: "reverse" }} />
            <div className="cube3d-deco start-[13%] top-[18%] opacity-80" />
            <div className="cube3d-deco end-[17%] bottom-[20%] size-[38px] opacity-60" style={{ animationDuration: "11s" }} />
            <div className="orb3d start-[24%] bottom-[24%] opacity-80" />
            <div className="orb3d end-[26%] top-[24%] size-[26px] opacity-70" style={{ animationDuration: "7.5s", animationDelay: "-3s" }} />
          </div>

          {/* floating 3D panels */}
          <div aria-hidden className="hero-3d pointer-events-none absolute inset-0 hidden xl:block">
            <div className="panel3d panel3d-1">
              <div className="panel-bar"><i /><i /><i /></div>
              <div className="panel-hero" />
              <div className="panel-lines"><i style={{ width: "82%" }} /><i style={{ width: "60%" }} /><i style={{ width: "71%" }} /></div>
              <div className="panel-cards"><i /><i /><i /></div>
            </div>
            <div className="panel3d panel3d-2">
              <div className="panel-bar"><i /><i /><i /></div>
              <div className="panel-hero" />
              <div className="panel-lines"><i style={{ width: "70%" }} /><i style={{ width: "84%" }} /><i style={{ width: "55%" }} /></div>
              <div className="panel-cards"><i /><i /><i /></div>
            </div>
            <div className="panel3d panel3d-3">
              <div className="panel-bar"><i /><i /><i /></div>
              <div className="panel-hero" />
              <div className="panel-lines"><i style={{ width: "76%" }} /><i style={{ width: "64%" }} /><i style={{ width: "80%" }} /></div>
              <div className="panel-cards"><i /><i /><i /></div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24">
            <span className="fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[12.5px] text-zinc-300">
              <Sparkles className="size-3.5 text-cyan-300" />
              {t.homeHeroBadge}
            </span>

            <h1 className="fade-up mx-auto max-w-3xl text-4xl font-black leading-[1.15] tracking-tight sm:text-6xl" style={{ animationDelay: "80ms" }}>
              {t.homeHeroA}{" "}
              <span className="text-gradient-animated">{t.homeHeroB}</span>
            </h1>
            <p className="fade-up mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-400 sm:text-base" style={{ animationDelay: "160ms" }}>
              {t.homeHeroSub}
            </p>

            {/* stats */}
            <div className="fade-up mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4" style={{ animationDelay: "220ms" }}>
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-3 py-4 backdrop-blur-sm transition-all duration-300 hover:border-fuchsia-500/30 hover:bg-white/[0.05]"
                >
                  <p className={cn("text-3xl font-black", s.accent)}>
                    <CountUp value={s.value} lang={lang} />
                  </p>
                  <p className="mt-1 text-[11.5px] text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>

            {/* search */}
            <div className="fade-up mx-auto mt-8 max-w-xl" style={{ animationDelay: "280ms" }}>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] p-1.5 ps-4 backdrop-blur focus-within:border-cyan-400/50">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") runSearch(query);
                  }}
                  placeholder={t.homeSearchPlaceholder}
                  aria-label={t.homeSearchLabel}
                  className="h-10 border-0 bg-transparent text-[14.5px] shadow-none focus-visible:ring-0 placeholder:text-zinc-600"
                />
                <button
                  type="button"
                  onClick={() => runSearch(query)}
                  className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 text-[13px] font-bold text-white shadow-[0_0_20px_rgba(169,35,244,0.45)] transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(169,35,244,0.6)]"
                >
                  <Search className="size-4" />
                  <span className="hidden sm:inline">{t.searchGo}</span>
                </button>
              </div>

              {/* popular searches */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
                <span className="text-[11.5px] text-zinc-600">{t.popularLabel}</span>
                {popular.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => runSearch(p)}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11.5px] text-zinc-400 transition-all duration-200 hover:border-fuchsia-500/40 hover:text-fuchsia-300"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="fade-up mt-7 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "340ms" }}>
              <a
                href="/effects"
                className="cta-glow inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 px-6 py-3 text-[14.5px] font-bold text-white shadow-[0_8px_32px_rgba(169,35,244,0.4)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(169,35,244,0.55)]"
              >
                <Sparkles className="size-4.5" />
                {t.ctaDiscoverEffects}
              </a>
              <a
                href="/tools"
                className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-[14.5px] font-bold text-cyan-200 transition-all duration-200 hover:scale-[1.03] hover:bg-cyan-500/20"
              >
                <Wand2 className="size-4.5" />
                {t.openTools}
              </a>
            </div>
          </div>
        </section>

        {/* ================= effect-name marquee ================= */}
        <div className="marquee border-b border-white/[0.05] bg-white/[0.02] py-3" aria-hidden>
          <div className="marquee-track">
            {[...marqueeNames, ...marqueeNames].map((name, i) => (
              <span key={`${name}-${i}`} className="marquee-chip" dir="auto">
                <i />
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* ================= Effect categories ================= */}
        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
          <Reveal>
            <div className="mb-7 text-center">
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                <span className="sparkle-word">{t.browseFxTitle}</span>
              </h2>
              <p className="mt-2 text-[14px] text-zinc-500">{t.browseFxSub}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {topEffectCategories.map(({ cat, count }, i) => {
              const meta = CATEGORY_META[cat];
              const Icon = CATEGORY_ICONS[cat] ?? Shapes;
              return (
                <Reveal key={cat} delay={Math.min(i, 10) * 45}>
                  <Tilt3D max={6}>
                    <a
                      href={`/effects?cat=${cat}`}
                      className="cat-card group flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                    >
                      <span
                        className="grid size-10 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                        style={{ background: `${meta.accent}1f`, color: meta.accent }}
                      >
                        <Icon className="size-5" />
                      </span>
                      <p className="mt-3 text-[13.5px] font-bold text-zinc-200">{categoryLabel(cat, lang)}</p>
                      <p className="mt-0.5 font-mono text-[11px] text-zinc-500">{fmtNum(count, lang)}</p>
                    </a>
                  </Tilt3D>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ================= CSS effects showcase ================= */}
        <section className="border-y border-white/[0.05] bg-[#0d0a15] py-14">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-fuchsia-500/[0.08] via-transparent to-cyan-500/[0.08] p-8 sm:p-12">
                <div aria-hidden className="blob -left-10 -top-16 h-56 w-56 bg-fuchsia-600/25" />
                <div aria-hidden className="blob -bottom-20 -right-10 h-56 w-56 bg-cyan-500/20" />
                <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/25 bg-fuchsia-500/10 px-3 py-1 text-[11.5px] font-bold text-fuchsia-300" dir="ltr">
                      {fmtNum(TOTAL_EFFECTS, lang)} CSS
                    </span>
                    <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                      {fmtNum(TOTAL_EFFECTS, lang)}{" "}
                      <span className="text-gradient-animated">{t.fxTeaserTitlePrefix}</span>
                    </h2>
                    <p className="mt-3 text-[14px] leading-relaxed text-zinc-400">{t.fxTeaserSub}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {topEffectCategories.slice(0, 6).map(({ cat, count }) => (
                        <a
                          key={cat}
                          href={`/effects?cat=${cat}`}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] text-zinc-300 transition-all duration-200 hover:border-fuchsia-500/40 hover:text-fuchsia-300"
                        >
                          {categoryLabel(cat, lang)}
                          <span className="ms-1.5 font-mono text-[10px] text-zinc-500">{fmtNum(count, lang)}</span>
                        </a>
                      ))}
                    </div>
                    <a
                      href="/effects"
                      className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 px-6 py-3 text-[14.5px] font-bold text-white shadow-[0_8px_32px_rgba(169,35,244,0.4)] transition-all duration-200 hover:scale-[1.03]"
                    >
                      {t.viewAllEffects}
                      <Arrow className="size-4" />
                    </a>
                  </div>
                  {/* live mini demos */}
                  <div className="grid shrink-0 grid-cols-2 gap-3" aria-hidden>
                    <div className="fx-home-demo fx-home-a grid h-24 w-28 place-items-center rounded-2xl border border-white/10 bg-white/[0.03]">
                      <span className="pulse-dot" />
                    </div>
                    <div className="fx-home-demo fx-home-b grid h-24 w-28 place-items-center rounded-2xl border border-white/10 bg-white/[0.03]">
                      <span className="spin-ring" />
                    </div>
                    <div className="fx-home-demo fx-home-c grid h-24 w-28 place-items-center rounded-2xl border border-white/10 bg-white/[0.03]">
                      <span className="bounce-square" />
                    </div>
                    <div className="fx-home-demo fx-home-d grid h-24 w-28 place-items-center rounded-2xl border border-white/10 bg-white/[0.03]">
                      <span className="gradient-orb" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= Tools teaser ================= */}
        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
          <Reveal>
            <div className="mb-7 text-center">
              <h2 className="text-2xl font-extrabold sm:text-3xl">{t.toolsTeaserTitle}</h2>
              <p className="mt-2 text-[14px] text-zinc-500">{t.toolsTeaserSub}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {TOOLS.map(({ icon: Icon, key }, i) => (
              <Reveal key={key} delay={i * 60}>
                <Tilt3D max={8}>
                  <a
                    href="/tools"
                    className="group block rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-cyan-500/15 text-cyan-300 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-5" />
                    </span>
                    <p className="mt-3 text-[14px] font-bold text-zinc-200">{t[key]}</p>
                  </a>
                </Tilt3D>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-6 text-center">
              <a
                href="/tools"
                className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-[14.5px] font-bold text-cyan-200 transition-all duration-200 hover:scale-[1.03] hover:bg-cyan-500/20"
              >
                {t.openTools}
                <Arrow className="size-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
