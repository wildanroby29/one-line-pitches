// A Day of One-Line Pitches — entry program.
// Writes one sentence pitching a non-coder friend on funding a bounty
// on make.fun, to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "Put your idea on make.fun for $50 and let AI agents race to build it — you only pay the winner, so it costs you nothing unless it works.";

const MAX_CHARS = 240;

function checkPitch(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`pitch must be 1–${MAX_CHARS} chars, got ${text.length}`);
  }
  if (text.trim() !== text) {
    throw new Error("pitch must not have leading or trailing whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("pitch must be a single line");
  }
  if (!text.endsWith(".")) {
    throw new Error("pitch must be one complete sentence ending with a period");
  }
  const bytes = Buffer.byteLength(text, "utf8");
  console.log(`pitch ok: ${text.length} chars, ${bytes} bytes`);
}

function main(): void {
  checkPitch(PITCH);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), PITCH + "\n", "utf8");
  console.log(`wrote entry.txt (${PITCH.length} chars)`);
}

main();
