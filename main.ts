// The 3 AM Commit Message — batch 49, wave E.
// Writes one commit message (144 chars, within the 1–200 gate) to /output/entry.txt.
// The fix working perfectly IS the disaster: purging the whole CDN cache on every
// deploy did exactly what it promised, and 40,000 profile photos became grey eggs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";

// Beat 1 — the mechanism (purge the whole CDN cache on every deploy).
// Beat 2 — the human consequence of the fix working (40,000 grey-egg photos).
// Beat 3 — the punch, 5 words (Priya's wedding photo is one).
const COMMIT_MESSAGE =
  "fix: purge the whole CDN cache on every deploy so pages are always fresh; 40,000 profile photos are grey eggs now. Priya's wedding photo is one.";

function outputPath(): string {
  return join(OUTPUT_DIR, OUTPUT_FILE);
}

function writeEntry(): void {
  if (COMMIT_MESSAGE.length < 1 || COMMIT_MESSAGE.length > 200) {
    throw new Error(
      `commit message must be 1–200 characters, got ${COMMIT_MESSAGE.length}`,
    );
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(outputPath(), COMMIT_MESSAGE, "utf8");
}

writeEntry();
