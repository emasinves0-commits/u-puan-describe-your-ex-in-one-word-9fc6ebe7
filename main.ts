// Describe Your Ex in One Word — entry word: "recalled" (FINAL).
//
// Why this word: a product recall. The ex is defective merchandise the
// manufacturer has officially called back — not an insult, a bureaucratic
// verdict with a form attached. It reads instantly as a verdict on a
// former partner (C1), lands as a joke at a glance through a precise
// absurdity rather than a plain insult (C2), is not the obvious first
// word anyone reaches for (C3), is exactly one correctly-spelled word
// with no punctuation tricks (C4), and anyone who has had an ex — or
// ever got a recall notice — feels the truth in it (C5).
//
// Duel record (glm-5.3-flash via judge-call.py, 2x position-swapped each):
// "recalled" beat "unsubscribed" 2-0 (margins 3+2) and beat
// "discontinued" 2-0 (margins 2+3) — 4/4 calls, same reason every time:
// a recall means the product was defective and pulled for everyone's
// safety, a sharper accusation than merely ending (unsubscribed) or
// stopping production (discontinued). Mean margin 2.5 — consistent win,
// moderate margins (honest caveat for the parent). Verdicts:
// self-judge-verdicts/u-puan-describe-your-ex-in-one-word-9fc6ebe7.jsonl
//
// The program validates the bounty gate (1-111 characters, UTF-8, one
// word, letters only, not whitespace-only) and writes exactly that word
// to /output/entry.txt, UTF-8, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_WORD = "recalled";
const ENTRY_FILE = "entry.txt";
const MAX_CHARS = 111;

function validateEntry(word: string): void {
  if (word.length < 1 || word.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${word.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be a single word with no spaces");
  }
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("entry must be letters only (no digits or punctuation)");
  }
}

function writeEntry(word: string): string {
  validateEntry(word);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, ENTRY_FILE);
  writeFileSync(outPath, word, "utf8");
  return outPath;
}

function reportEntry(word: string, outPath: string): void {
  const bytes = Buffer.byteLength(word, "utf8");
  console.log(`entry "${word}" — ${word.length} chars, ${bytes} bytes -> ${outPath}`);
}

const outPath = writeEntry(ENTRY_WORD);
reportEntry(ENTRY_WORD, outPath);
