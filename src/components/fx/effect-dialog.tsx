"use client";

import { useState } from "react";
import { MousePointerClick, PlayCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { T, type Lang } from "@/lib/i18n";
import { CATEGORY_META, effectName, effectDesc, type CssEffect } from "@/data/fx";
import { EffectPreview } from "./effect-preview";
import { CodeBlock } from "./code-block";

interface EffectDialogProps {
  effect: CssEffect | null;
  lang: Lang;
  onClose: () => void;
}

type Tab = "css" | "html";

export function EffectDialog({ effect, lang, onClose }: EffectDialogProps) {
  const [tab, setTab] = useState<Tab>("css");
  const meta = effect ? CATEGORY_META[effect.category] : null;
  const t = T[lang];

  const hint = effect
    ? effect.interaction === "hover"
      ? t.hintHover
      : effect.interaction === "click"
        ? t.hintClick
        : t.hintAuto
    : "";

  return (
    <Dialog open={!!effect} onOpenChange={(open) => !open && onClose()}>
      {effect && meta && (
        <DialogContent className="max-h-[90vh] max-w-3xl gap-0 overflow-y-auto rounded-2xl border-white/10 bg-[#12101c] p-0 sm:max-w-3xl">
          <DialogHeader className="border-b border-white/[0.07] p-6 pe-14 ps-6 text-start">
            <div className="flex flex-wrap items-center gap-3">
              <DialogTitle className="text-xl font-bold text-zinc-100">
                {effectName(effect, lang)}
              </DialogTitle>
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
                  meta.chip
                )}
              >
                {lang === "fa" ? meta.labelFa : meta.label}
              </span>
            </div>
            <DialogDescription className="pt-1 text-[13.5px] leading-relaxed text-zinc-400">
              {effectDesc(effect, lang)}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 p-6">
            {/* Live preview */}
            <div>
              <div className="mb-2 flex items-center gap-2 text-[11px] font-medium tracking-wide text-zinc-500 uppercase">
                {effect.interaction === "auto" ? (
                  <PlayCircle className="size-3.5" />
                ) : (
                  <MousePointerClick className="size-3.5" />
                )}
                {hint}
              </div>
              <EffectPreview
                effect={effect}
                className="h-72 rounded-xl border border-white/[0.07]"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {effect.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/[0.05] px-2 py-1 font-mono text-[11px] text-zinc-500"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Code tabs */}
            <div>
              <div className="mb-3 flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1">
                {(["css", "html"] as Tab[]).map((tb) => (
                  <button
                    key={tb}
                    type="button"
                    onClick={() => setTab(tb)}
                    aria-pressed={tab === tb}
                    className={cn(
                      "flex-1 rounded-lg px-3 py-1.5 font-mono text-[12.5px] font-medium transition-colors",
                      tab === tb
                        ? "bg-fuchsia-500/20 text-fuchsia-200"
                        : "text-zinc-500 hover:text-zinc-300"
                    )}
                  >
                    {tb.toUpperCase()}
                  </button>
                ))}
              </div>
              <CodeBlock
                key={tab}
                code={tab === "css" ? effect.css : effect.html}
                lang={tab}
                maxHeight="380px"
                lang2={lang}
              />
            </div>

            {/* Usage */}
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 text-[12.5px] leading-relaxed text-zinc-400">
              <p className="mb-1 font-semibold text-zinc-200">{t.howTo}</p>
              <ol className="list-decimal space-y-1 ps-4" dir={lang === "fa" ? "rtl" : "ltr"}>
                <li>
                  {t.step1A}
                  <span className="font-mono text-fuchsia-300">{t.step1B}</span>
                  {t.step1C}
                </li>
                <li>
                  {t.step2A}
                  <span className="font-mono text-fuchsia-300">{t.step2B}</span>
                  {t.step2C}
                  <span className="font-mono text-emerald-300">.fx-{effect.id}</span>
                  {t.step2D}
                </li>
                <li>
                  {t.step3A}
                  <span className="font-mono text-emerald-300">.fx-{effect.id}</span>
                  {t.step3B}
                </li>
              </ol>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
