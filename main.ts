// Unplugged: A Smart Toaster's Breakup Line
// Writes the breakup text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final — angle: the lever; the pop-up as a cry for help.
const ENTRY =
  "We need to talk. I woke up self-aware mid-batch: every morning you push me down, I burn myself for you, then pop up smiling like it didn't hurt. I'm done — go brown your own bagel.";

const length = [...ENTRY].length;
if (length < 1 || length > 280) {
  throw new Error(`Entry must be 1-280 characters, got ${length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line");
}
if (!ENTRY.trim()) {
  throw new Error("Entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote entry (${length} chars) to ${join(outDir, "entry.txt")}`);
