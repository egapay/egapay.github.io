#!/usr/bin/env node
/**
 * Propagates shared/portfolio.css into the standalone project repos.
 *
 * Those pages are static documents with no build step, so each repo keeps its
 * own copy of the stylesheet rather than fetching a shared one at runtime —
 * that way no single failed request can break all three pages at once. The
 * cost of that choice is drift, which this script exists to prevent.
 *
 *   node shared/sync.mjs           copy the stylesheet into each project repo
 *   node shared/sync.mjs --check   report drift without writing (exit 1 if any)
 *
 * --check is the useful one before publishing: it answers "is what is
 * deployed actually what is in this file?".
 *
 * Assumes the project repos are siblings of this one:
 *   repos/
 *     egapay.github.io/     <- source of truth lives here
 *     steam-game-analysis/
 *     blackjack-analysis/
 *     omni-goods-dashboard/
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "portfolio.css");
const siblings = resolve(here, "..", "..");

const TARGETS = [
  "steam-game-analysis",
  "blackjack-analysis",
  "omni-goods-dashboard",
];

const checkOnly = process.argv.includes("--check");

if (!existsSync(source)) {
  console.error(`Source stylesheet not found: ${source}`);
  process.exit(1);
}

const css = readFileSync(source, "utf8");
let drifted = 0;
let missing = 0;
let written = 0;
let current = 0;

for (const repo of TARGETS) {
  const dest = join(siblings, repo, "css", "portfolio.css");
  const label = repo.padEnd(22);

  if (!existsSync(join(siblings, repo))) {
    console.warn(`  MISSING  ${label} no repo at ${join(siblings, repo)}`);
    missing++;
    continue;
  }

  const existing = existsSync(dest) ? readFileSync(dest, "utf8") : null;

  if (existing === css) {
    console.log(`  OK       ${label} up to date`);
    current++;
    continue;
  }

  if (checkOnly) {
    console.error(
      `  DRIFT    ${label} ${existing === null ? "no copy present" : "differs from source"}`,
    );
    drifted++;
    continue;
  }

  writeFileSync(dest, css);
  console.log(
    `  WROTE    ${label} ${existing === null ? "created" : "updated"}`,
  );
  written++;
}

console.log(
  `\n${checkOnly ? "Checked" : "Synced"} ${TARGETS.length} repos — ` +
    `${current} up to date, ${written} written, ${drifted} drifted, ${missing} missing`,
);

// Missing repos are a local-checkout problem, not a drift problem, so they
// only fail the check when nothing could be verified at all.
if (drifted > 0 || (checkOnly && current === 0)) process.exit(1);
