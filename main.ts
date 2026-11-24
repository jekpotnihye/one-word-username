import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entrant's own make.fun username, sent as one word and nothing else.
const ENTRY = "jekpotnihye";

// Gate: 1 to 30 characters, not only whitespace, a single word.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 30 ||
  ENTRY.trim() === "" ||
  /\s/.test(ENTRY)
) {
  throw new Error("entry must be one word of 1 to 30 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Write the entry bytes exactly: no trailing newline, no padding, no gloss.
writeFileSync(join(outDir, "entry.txt"), new TextEncoder().encode(ENTRY));
