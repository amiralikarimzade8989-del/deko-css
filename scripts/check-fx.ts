/**
 * DeKo css — effect validator.
 * Run with: bun scripts/check-fx.ts
 *
 * Checks every effect for:
 *  - unique ids
 *  - CSS brace/paren balance
 *  - every selector scoped under .fx-<id>
 *  - @keyframes: defined/used consistency, global conflicts
 *  - forbidden patterns (@import, url(), position:fixed, 100vh, scripts…)
 *  - HTML tag balance + every CSS class present in the demo HTML
 *  - bilingual names/descriptions present
 *  - total count >= 500
 */
import { ALL_EFFECTS } from "../src/data/fx/index";
import { FA_LEGACY } from "../src/data/fx/fa-legacy";

interface Issue {
  effect: string;
  level: "error" | "warn";
  msg: string;
}

const issues: Issue[] = [];
const err = (effect: string, msg: string) => issues.push({ effect, level: "error", msg });
const warn = (effect: string, msg: string) => issues.push({ effect, level: "warn", msg });

const ANIM_KEYWORDS = new Set([
  "infinite", "linear", "ease", "ease-in", "ease-out", "ease-in-out",
  "alternate", "alternate-reverse", "forwards", "backwards", "both",
  "none", "running", "paused", "normal", "reverse", "step-start", "step-end",
]);

/** Extract @keyframes blocks; returns remaining css + definitions. */
function extractKeyframes(css: string, id: string) {
  const defs = new Map<string, string>(); // name -> normalized body
  let out = "";
  let i = 0;
  while (i < css.length) {
    const kf = css.indexOf("@keyframes", i);
    if (kf === -1) {
      out += css.slice(i);
      break;
    }
    out += css.slice(i, kf);
    // parse: @keyframes NAME { ... }
    const open = css.indexOf("{", kf);
    if (open === -1) {
      err(id, "@keyframes without {");
      break;
    }
    const name = css.slice(kf + 10, open).trim();
    let depth = 1;
    let j = open + 1;
    while (j < css.length && depth > 0) {
      if (css[j] === "{") depth++;
      else if (css[j] === "}") depth--;
      j++;
    }
    if (depth !== 0) {
      err(id, `unbalanced braces inside @keyframes ${name}`);
      break;
    }
    const body = css.slice(open + 1, j - 1);
    defs.set(name, body.replace(/\s+/g, " ").trim());
    i = j;
  }
  return { css: out, defs };
}

/** Walk rule blocks (depth-aware) and yield selector strings. */
function* ruleSelectors(css: string): Generator<string> {
  let i = 0;
  while (i < css.length) {
    const open = css.indexOf("{", i);
    if (open === -1) break;
    const selector = css.slice(i, open).trim();
    let depth = 1;
    let j = open + 1;
    while (j < css.length && depth > 0) {
      if (css[j] === "{") depth++;
      else if (css[j] === "}") depth--;
      j++;
    }
    const body = css.slice(open + 1, j - 1);
    if (selector.startsWith("@media") || selector.startsWith("@supports")) {
      yield* ruleSelectors(body);
    } else if (selector.startsWith("@")) {
      // unexpected at-rule — surfaced by forbidden-pattern checks
    } else {
      yield selector;
    }
    i = j;
  }
}

function checkBraces(css: string, id: string, what: string) {
  let braces = 0;
  let parens = 0;
  for (const ch of css) {
    if (ch === "{") braces++;
    else if (ch === "}") braces--;
    else if (ch === "(") parens++;
    else if (ch === ")") parens--;
    if (braces < 0) {
      err(id, `unbalanced braces in ${what}`);
      return;
    }
  }
  if (braces !== 0) err(id, `unbalanced braces in ${what} (delta ${braces})`);
  if (parens !== 0) warn(id, `unbalanced parentheses in ${what} (delta ${parens})`);
}

// ------------------------------------------------------------------
// Global registries
// ------------------------------------------------------------------
const idSet = new Set<string>();
const kfGlobal = new Map<string, { effect: string; body: string }[]>();
const nameSeen = new Map<string, string>();
let total = 0;

const VALID_CATEGORIES = new Set([
  "buttons", "loaders", "cards", "text", "backgrounds", "hover", "inputs",
  "threed", "borders", "nav", "glass", "motion", "tooltip", "images", "misc",
]);

for (const effect of ALL_EFFECTS) {
  total++;
  const id = effect.id;

  // --- id uniqueness
  if (idSet.has(id)) err(id, "duplicate id");
  idSet.add(id);

  // --- metadata
  const legacy = FA_LEGACY[id];
  if (!effect.name) err(id, "missing name");
  if (!effect.fa && !(legacy && legacy.fa)) err(id, "missing Persian name (fa)");
  if (!effect.description) err(id, "missing description");
  if (!effect.faDescription && !(legacy && legacy.faDescription)) err(id, "missing Persian description (faDescription)");
  if (!VALID_CATEGORIES.has(effect.category)) err(id, `invalid category: ${effect.category}`);
  if (!effect.tags || effect.tags.length === 0) err(id, "missing tags");
  if (effect.interaction && !["auto", "hover", "click"].includes(effect.interaction)) {
    err(id, `invalid interaction: ${effect.interaction}`);
  }
  const nameKey = `${effect.name}|${effect.fa ?? ""}`;
  if (nameSeen.has(nameKey)) warn(id, `duplicate name with ${nameSeen.get(nameKey)}: ${nameKey}`);
  nameSeen.set(nameKey, id);

  const css = effect.css ?? "";
  const html = effect.html ?? "";
  if (!css.trim()) err(id, "empty css");
  if (!html.trim()) err(id, "empty html");

  checkBraces(css, id, "css");

  // --- forbidden patterns
  const forbidden: [RegExp, string][] = [
    [/@import/, "@import is forbidden"],
    [/@font-face/, "@font-face is forbidden"],
    [/url\(\s*(?!['"]?\s*data:)/, "url() with non-data source is forbidden"],
    [/position\s*:\s*fixed/, "position:fixed is forbidden"],
    [/100vh/, "100vh is forbidden"],
    [/<script/i, "<script> in html is forbidden"],
    [/\son[a-z]+\s*=/i, "inline event handlers are forbidden"],
    [/href\s*=\s*["']https?:/i, "external links are forbidden in demos"],
  ];
  for (const [re, msg] of forbidden) {
    if (re.test(css) || re.test(html)) err(id, msg);
  }

  if (html.includes("fx-")) warn(id, "demo html should not embed the fx- scope class itself");

  // --- keyframes
  const { css: cssNoKf, defs } = extractKeyframes(css, id);
  for (const [name, body] of defs) {
    const list = kfGlobal.get(name) ?? [];
    list.push({ effect: id, body });
    kfGlobal.set(name, list);
  }

  // --- used keyframe names
  const used = new Set<string>();
  const animRe = /animation(?:-name)?\s*:\s*([^;}]+)/g;
  let m: RegExpExecArray | null;
  while ((m = animRe.exec(cssNoKf)) !== null) {
    const tokens = m[1].split(/[\s,]+/);
    for (const tok of tokens) {
      const t = tok.trim();
      if (!t || t.startsWith("#") || t.includes("(") || t.includes(")")) continue;
      if (/^[0-9.]/.test(t)) continue;
      if (ANIM_KEYWORDS.has(t)) continue;
      used.add(t);
    }
  }
  for (const name of used) {
    if (!defs.has(name)) err(id, `animation references undefined @keyframes "${name}"`);
  }
  for (const name of defs.keys()) {
    if (!used.has(name)) warn(id, `@keyframes "${name}" defined but never used`);
  }

  // --- selector scoping + class collection
  const cssClasses = new Set<string>();
  for (const selectorGroup of ruleSelectors(cssNoKf)) {
    for (const raw of selectorGroup.split(",")) {
      const sel = raw.trim();
      if (!sel) {
        err(id, "empty selector");
        continue;
      }
      if (!sel.startsWith(`.fx-${id}`)) {
        err(id, `selector not scoped under .fx-${id}: "${sel.slice(0, 60)}"`);
        continue;
      }
      for (const cls of sel.matchAll(/\.([a-zA-Z][\w-]*)/g)) {
        if (cls[1] !== `fx-${id}`) cssClasses.add(cls[1]);
      }
    }
  }

  // --- html tag balance
  const voidTags = new Set(["br", "hr", "img", "input", "meta", "link", "source"]);
  const stack: string[] = [];
  const tagRe = /<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>/g;
  let tm: RegExpExecArray | null;
  while ((tm = tagRe.exec(html)) !== null) {
    const [, closing, tag, , selfClose] = tm;
    const lower = tag.toLowerCase();
    if (voidTags.has(lower) || selfClose === "/") continue;
    if (!closing) stack.push(lower);
    else {
      const top = stack.pop();
      if (top !== lower) {
        err(id, `html tag mismatch: expected </${top}> got </${lower}>`);
        break;
      }
    }
  }
  if (stack.length > 0) err(id, `unclosed html tags: ${stack.join(", ")}`);

  // --- every css class must exist in html
  for (const cls of cssClasses) {
    const re = new RegExp(`class="[^"]*\\b${cls}\\b[^"]*"`);
    if (!re.test(html)) {
      err(id, `css class ".${cls}" not found in demo html`);
    }
  }
}

// ------------------------------------------------------------------
// Cross-effect keyframes conflicts
// ------------------------------------------------------------------
for (const [name, list] of kfGlobal) {
  if (list.length < 2) continue;
  const bodies = new Set(list.map((x) => x.body));
  if (bodies.size > 1) {
    err(list[1].effect, `@keyframes "${name}" conflicts with ${list[0].effect} (different bodies)`);
  } else {
    warn(list[1].effect, `@keyframes "${name}" duplicated identically (shared by variants)`);
  }
}

// ------------------------------------------------------------------
// Report
// ------------------------------------------------------------------
const errors = issues.filter((x) => x.level === "error");
const warnings = issues.filter((x) => x.level === "warn");

const byCat = new Map<string, number>();
for (const e of ALL_EFFECTS) byCat.set(e.category, (byCat.get(e.category) ?? 0) + 1);

console.log("=== DeKo css effect report ===");
console.log(`TOTAL EFFECTS: ${total}`);
for (const [cat, n] of [...byCat.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${cat.padEnd(12)} ${n}`);
}
console.log(`\nERRORS: ${errors.length}`);
for (const x of errors.slice(0, 80)) console.log(`  [${x.effect}] ${x.msg}`);
console.log(`\nWARNINGS: ${warnings.length}`);
for (const x of warnings.slice(0, 40)) console.log(`  [${x.effect}] ${x.msg}`);

const MIN_TARGET = 1000;
if (total < MIN_TARGET) {
  console.error(`\nFAIL: total effects ${total} is below the ${MIN_TARGET} target.`);
  process.exit(1);
}
if (errors.length > 0) {
  console.error(`\nFAIL: ${errors.length} validation errors.`);
  process.exit(1);
}
console.log("\nOK: all effects valid and target reached.");
