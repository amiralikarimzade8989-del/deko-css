"use client";

import { cn } from "@/lib/utils";
import type { CssEffect } from "@/data/fx";

interface EffectPreviewProps {
  effect: CssEffect;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Renders the live demo of an effect inside its scoped wrapper.
 * The wrapper div carries the `fx-<id>` class that all of the
 * effect's CSS selectors are scoped to.
 */
export function EffectPreview({ effect, className, style }: EffectPreviewProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ background: effect.previewBg ?? "#100d19", ...style }}
      aria-label={`Live demo of ${effect.name}`}
    >
      <div
        className={cn("absolute inset-0 grid place-items-center p-3", `fx-${effect.id}`)}
        dangerouslySetInnerHTML={{ __html: effect.html }}
      />
    </div>
  );
}
