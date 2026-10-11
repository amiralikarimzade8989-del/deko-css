/**
 * DeKo css — per-file validator for NEW effect batches.
 * Run with: bun scripts/check-plus.ts <file-name-without-ext>
 * e.g.      bun scripts/check-plus.ts buttons-plus-1
 *
 * Runs the same per-effect checks as check-fx.ts on a single
 * src/data/fx/plus/<name>.ts file (plus global keyframe-uniqueness
 * across all plus files that exist so far).
 */
import { readdirSync } from "node:fs";
import { join } from "node:path";

const target = process.argv[2];
if (!target) {
  console.error("usage: bun scripts/check-plus.ts <file-name-without-ext>");
  process.exit(1);
}

const DIR = join(import.meta.dir, "../src/data/fx/plus");
const mod = await import(join(DIR, `${target}.ts`));
const exportKeys = Object.keys(mod).filter((k) => k !== "default");
const effects = mod[exportKeys[0]];
if (!Array.isArray(effects)) {
  console.error(`no effect array exported from ${target}.ts`);
  process.exit(1);
}

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

function extractKeyframes(css: string, id: string) {
  const defs = new Map<string, string>();
  let out = "";
  let i = 0;
  while (i < css.length) {
    const kf = css.indexOf("@keyframes", i);
    if (kf === -1) {
      out += css.slice(i);
      break;
    }
    out += css.slice(i, kf);
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
    defs.set(name, css.slice(open + 1, j - 1).replace(/\s+/g, " ").trim());
    i = j;
  }
  return { css: out, defs };
}

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
    } else if (!selector.startsWith("@")) {
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

const VALID_CATEGORIES = new Set([
  "buttons", "loaders", "cards", "text", "backgrounds", "hover", "inputs",
  "threed", "borders", "nav", "glass", "motion", "tooltip", "images", "misc",
]);

const idSet = new Set<string>();
const kfGlobal = new Map<string, { effect: string; body: string }[]>();
const nameSeen = new Map<string, string>();
let total = 0;

function checkEffects(list: any[]) {
  for (const effect of list) {
    total++;
    const id = effect.id;
    if (idSet.has(id)) err(id, "duplicate id");
    idSet.add(id);

    if (!effect.name) err(id, "missing name");
    if (!effect.fa) err(id, "missing Persian name (fa)");
    if (!effect.description) err(id, "missing description");
    if (!effect.faDescription) err(id, "missing Persian description (faDescription)");
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

    const { css: cssNoKf, defs } = extractKeyframes(css, id);
    for (const [name, body] of defs) {
      const list2 = kfGlobal.get(name) ?? [];
      list2.push({ effect: id, body });
      kfGlobal.set(name, list2);
    }

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

    for (const cls of cssClasses) {
      const re = new RegExp(`class="[^"]*\\b${cls}\\b[^"]*"`);
      if (!re.test(html)) err(id, `css class ".${cls}" not found in demo html`);
    }
  }
}

// Load the target file's effects.
checkEffects(effects);

// Cross-file keyframe conflict check against every other plus file.
try {
  const files = readdirSync(DIR).filter((f) => f.endsWith(".ts") && f !== `${target}.ts`);
  for (const f of files) {
    try {
      const m2 = await import(join(DIR, f));
      for (const k of Object.keys(m2)) {
        if (Array.isArray(m2[k])) checkEffects(m2[k]);
      }
    } catch {
      /* skip files that fail to import */
    }
  }
} catch {
  /* plus dir may not exist yet */
}

for (const [name, list] of kfGlobal) {
  if (list.length < 2) continue;
  const bodies = new Set(list.map((x) => x.body));
  if (bodies.size > 1) err(list[1].effect, `@keyframes "${name}" conflicts with ${list[0].effect} (different bodies)`);
}

const errors = issues.filter((x) => x.level === "error");
const warnings = issues.filter((x) => x.level === "warn");

console.log(`=== ${target}.ts — ${effects.length} effects ===`);
console.log(`ERRORS: ${errors.length}`);
for (const x of errors.slice(0, 60)) console.log(`  [${x.effect}] ${x.msg}`);
console.log(`WARNINGS: ${warnings.length}`);
for (const x of warnings.slice(0, 20)) console.log(`  [${x.effect}] ${x.msg}`);

if (errors.length > 0) process.exit(1);
console.log("\nOK: file valid.");
