import { useMemo } from "react";
import type { CssEffect } from "@/data/fx";

/**
 * Injects the CSS of every effect into the document once.
 * All effect CSS is statically scoped under `.fx-<id>` so there
 * can be no collisions with the app shell or between effects.
 */
export function EffectStyles({ effects }: { effects: CssEffect[] }) {
  const css = useMemo(
    () => effects.map((effect) => effect.css).join("\n\n"),
    [effects]
  );
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
