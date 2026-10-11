"use client";

import { Suspense, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Sparkles,
  Wand2,
  MousePointerClick,
  Layers,
  Braces,
  MousePointer2,
  X,
  Box,
  Frame,
  Menu,
  Droplets,
  Activity,
  MessageCircle,
  Shapes,
  Image as ImageIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  ALL_EFFECTS,
  CATEGORY_META,
  CATEGORY_ORDER,
  TOTAL_EFFECTS,
  categoryLabel,
  type CssEffect,
  type FxCategory,
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
import { EffectCard } from "@/components/fx/effect-card";
import { EffectDialog } from "@/components/fx/effect-dialog";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { BackToTop } from "@/components/site/motion";

type CategoryFilter = FxCategory | "all";

const CATEGORY_ICONS: Record<CategoryFilter, React.ComponentType<{ className?: string }>> = {
  all: Layers,
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

const MARQUEE_TOKENS = [
  "@keyframes",
  ":hover",
  "transform",
  "clip-path",
  "backdrop-filter",
  "conic-gradient",
  "animation-delay",
  "box-shadow",
  "::before",
  "transition",
  "filter: blur()",
  "background-clip: text",
  "perspective",
  "preserve-3d",
  "rotate3d()",
  "translateZ()",
  "backface-visibility",
  "mix-blend-mode",
  "cubic-bezier()",
];

/** Normalize Persian/Arabic look-alikes so search matches both. */
function normalizeFa(s: string): string {
  return s.replace(/ي/g, "ی").replace(/ك/g, "ک").toLowerCase();
}

// Load the saved language once on the client, before first render.
if (typeof window !== "undefined") {
  initLangFromStorage();
}

function EffectsInner() {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getLangServerSnapshot);
  const searchParams = useSearchParams();
  // Initial query comes from ?q= (global search deep-link) on first render.
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");
  const [category, setCategory] = useState<CategoryFilter>(() => {
    const cat = searchParams.get("cat");
    return cat && (CATEGORY_ORDER as string[]).includes(cat) ? (cat as CategoryFilter) : "all";
  });
  const [active, setActive] = useState<CssEffect | null>(null);
  const t = T[lang];

  const counts = useMemo(() => {
    const map = new Map<FxCategory, number>();
    for (const effect of ALL_EFFECTS) {
      map.set(effect.category, (map.get(effect.category) ?? 0) + 1);
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    const q = normalizeFa(query.trim());
    return ALL_EFFECTS.filter((effect) => {
      const matchesCategory = category === "all" || effect.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = normalizeFa(
        [effect.name, effect.fa ?? "", effect.description, effect.faDescription ?? "", effect.category, ...effect.tags].join(" ")
      );
      return haystack.includes(q);
    });
  }, [query, category]);

  const marqueeRow = [...MARQUEE_TOKENS, ...MARQUEE_TOKENS];

  return (
    <>
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6">
        {/* ---------- Hero (compact) ---------- */}
        <section className="relative overflow-hidden py-10 sm:py-14">
          <div aria-hidden className="aurora" />
          <div aria-hidden className="blob left-[8%] top-0 h-64 w-64 bg-fuchsia-600/25" />
          <div aria-hidden className="blob blob-2 right-[5%] top-10 h-72 w-72 bg-violet-600/20" />
          <div aria-hidden className="grid-floor pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-25" />

          <span aria-hidden dir="ltr" className="float-chip start-[6%] top-16 hidden rounded-lg border border-fuchsia-500/25 bg-fuchsia-500/10 px-2.5 py-1 font-mono text-[11px] text-fuchsia-300 md:inline-block">
            @keyframes
          </span>
          <span aria-hidden dir="ltr" className="float-chip float-chip-2 end-[7%] top-24 hidden rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300 md:inline-block">
            :hover::after
          </span>
          <span aria-hidden dir="ltr" className="float-chip float-chip-3 start-[14%] bottom-14 hidden rounded-lg border border-amber-500/25 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] text-amber-300 md:inline-block">
            transform: rotate(360deg)
          </span>
          <span aria-hidden dir="ltr" className="float-chip float-chip-4 end-[13%] bottom-20 hidden rounded-lg border border-violet-500/25 bg-violet-500/10 px-2.5 py-1 font-mono text-[11px] text-violet-300 md:inline-block">
            backdrop-filter: blur()
          </span>

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[12px] text-zinc-400">
              <Sparkles className="size-3.5 text-fuchsia-400" />
              {t.heroBadge}
            </span>
            <h1 className="fade-up text-3xl font-extrabold tracking-tight sm:text-5xl" style={{ animationDelay: "80ms" }}>
              {t.heroA}{" "}
              <span className="text-gradient-animated">{t.heroB}</span>{" "}
              {t.heroC}
            </h1>
            <p className="fade-up mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-400" style={{ animationDelay: "160ms" }}>
              {t.heroSub}
            </p>

            <div className="fade-up mx-auto mt-7 flex max-w-md items-center justify-center gap-3" style={{ animationDelay: "220ms" }}>
              {[
                { value: fmtNum(TOTAL_EFFECTS, lang), label: t.statEffects, accent: "text-fuchsia-300" },
                { value: fmtNum(CATEGORY_ORDER.length, lang), label: t.statCategories, accent: "text-amber-300" },
                { value: fmtNum(0, lang), label: t.statDeps, accent: "text-emerald-300" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-3 py-3 transition-colors duration-300 hover:border-fuchsia-500/30"
                >
                  <p className={cn("text-2xl font-extrabold", s.accent)}>{s.value}</p>
                  <p className="mt-0.5 text-[11.5px] text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="fade-up relative mx-auto mt-8 max-w-md" style={{ animationDelay: "280ms" }}>
              <Search className="pointer-events-none absolute start-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                aria-label={t.searchLabel}
                className="h-12 rounded-full border-white/10 bg-white/[0.05] pe-10 ps-11 text-[14.5px] placeholder:text-zinc-600 focus-visible:border-fuchsia-500/60 focus-visible:ring-fuchsia-500/25"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label={t.clearSearch}
                  className="absolute end-3.5 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors hover:text-zinc-200"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ---------- Marquee ---------- */}
        <div className="marquee relative mb-8 select-none rounded-full border border-white/[0.06] bg-white/[0.02] py-2" dir="ltr" aria-hidden>
          <div className="marquee-track">
            {marqueeRow.map((token, i) => (
              <span key={i} className="mx-4 font-mono text-[12px] text-zinc-600">
                {token} <span className="text-fuchsia-500/50">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ---------- Category filter ---------- */}
        <nav
          aria-label={t.catFilterLabel}
          className="sticky top-16 z-30 -mx-4 mb-8 border-y border-white/[0.06] bg-[#0a0812]/85 px-4 py-3 backdrop-blur-xl sm:mx-0 sm:rounded-2xl sm:border"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(["all", ...CATEGORY_ORDER] as CategoryFilter[]).map((cat) => {
              const Icon = CATEGORY_ICONS[cat];
              const isActive = category === cat;
              const count = cat === "all" ? TOTAL_EFFECTS : (counts.get(cat) ?? 0);
              const accent = cat === "all" ? "#f0abfc" : CATEGORY_META[cat].accent;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-all duration-200 hover:scale-[1.04]",
                    isActive
                      ? "border-transparent text-white shadow-lg"
                      : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/25 hover:text-zinc-200"
                  )}
                  style={
                    isActive
                      ? {
                          background: `linear-gradient(135deg, ${accent}33, ${accent}18)`,
                          boxShadow: `inset 0 0 0 1.5px ${accent}66, 0 4px 18px ${accent}22`,
                        }
                      : undefined
                  }
                >
                  <Icon className="size-3.5" />
                  {cat === "all" ? t.catAll : categoryLabel(cat, lang)}
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-px font-mono text-[10px]",
                      isActive ? "bg-white/15 text-white" : "bg-white/[0.06]"
                    )}
                  >
                    {fmtNum(count, lang)}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* ---------- Grid ---------- */}
        <section aria-label={t.galleryLabel} className="pb-16">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((effect, i) => (
                <div key={effect.id} className="fade-up cv-auto" style={{ animationDelay: `${Math.min(i, 16) * 45}ms` }}>
                  <EffectCard effect={effect} lang={lang} onOpen={setActive} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid place-items-center rounded-2xl border border-dashed border-white/10 py-20 text-center">
              <div>
                <Search className="mx-auto mb-3 size-8 text-zinc-600" />
                <p className="font-semibold text-zinc-300">{t.noResultsTitle}</p>
                <p className="mt-1 text-sm text-zinc-500">{t.noResultsDesc(query)}</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCategory("all");
                  }}
                  className="mt-4 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-4 py-1.5 text-sm text-fuchsia-300 transition-colors hover:bg-fuchsia-500/20"
                >
                  {t.resetFilters}
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
      <BackToTop />

      <EffectDialog effect={active} lang={lang} onClose={() => setActive(null)} />
    </>
  );
}

export default function EffectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0812] text-zinc-100 antialiased">
      <EffectStyles effects={ALL_EFFECTS} />
      <Suspense fallback={null}>
        <EffectsInner />
      </Suspense>
    </div>
  );
}
