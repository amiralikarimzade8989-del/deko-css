"use client";

import { Code2, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { copyText } from "@/lib/copy";
import { useToast } from "@/hooks/use-toast";
import { T, type Lang } from "@/lib/i18n";
import { CATEGORY_META, effectName, effectDesc, type CssEffect } from "@/data/fx";
import { EffectPreview } from "./effect-preview";

interface EffectCardProps {
  effect: CssEffect;
  lang: Lang;
  onOpen: (effect: CssEffect) => void;
}

export function EffectCard({ effect, lang, onOpen }: EffectCardProps) {
  const { toast } = useToast();
  const meta = CATEGORY_META[effect.category];
  const t = T[lang];
  const name = effectName(effect, lang);

  async function handleQuickCopy(e: React.MouseEvent) {
    e.stopPropagation();
    const ok = await copyText(effect.css);
    toast({
      title: ok ? t.copiedTitle : t.copyFailedTitle,
      description: ok ? t.copiedDesc(name) : t.copyFailedDesc,
    });
  }

  // The demo HTML may itself contain <button>/<input>/<a> elements,
  // so the preview trigger must NOT be a native <button> (invalid
  // nesting breaks SSR hydration). A role="button" div is used instead.
  function handleOpenKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(effect);
    }
  }

  // Clicking the demo's own interactive widgets (toggles, inputs,
  // links) should interact with them — not open the code dialog.
  function shouldOpen(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    return !target.closest("button, a, input, label, select, textarea");
  }

  return (
    <article
      onClick={(e) => shouldOpen(e) && onOpen(effect)}
      className={cn(
        "group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#12101c]",
        "transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-500/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
      )}
    >
      {/* Keyboard-accessible trigger (the demo HTML may contain native
          <button>/<input> elements, so a native <button> wrapper would
          create invalid nesting and break SSR hydration). */}
      <div
        role="button"
        tabIndex={0}
        onClick={(e) => shouldOpen(e) && onOpen(effect)}
        onKeyDown={handleOpenKey}
        className="relative block w-full cursor-pointer text-start focus-visible:outline-2 focus-visible:outline-fuchsia-400"
        aria-label={`${t.openCode}: ${name}`}
      >
        <EffectPreview effect={effect} className="h-44" />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="pointer-events-none absolute bottom-3 end-3 inline-flex translate-y-2 items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 text-[11px] font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Code2 className="size-3.5" />
          {t.viewCode}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[15px] leading-snug font-semibold text-zinc-100">
            {name}
          </h3>
          <span
            className={cn(
              "shrink-0 rounded-full border px-2 py-0.5 text-[10.5px] font-medium whitespace-nowrap",
              meta.chip
            )}
          >
            {lang === "fa" ? meta.labelFa : meta.label}
          </span>
        </div>

        <p className="line-clamp-2 text-[12.5px] leading-relaxed text-zinc-500">
          {effectDesc(effect, lang)}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <div className="flex flex-wrap gap-1.5 overflow-hidden">
            {(effect.tags ?? []).slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/[0.05] px-1.5 py-0.5 font-mono text-[10.5px] text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={handleQuickCopy}
            aria-label={`${t.copyCss}: ${name}`}
            title={t.copyCssTitle}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 hover:text-fuchsia-300"
          >
            <Copy className="size-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
