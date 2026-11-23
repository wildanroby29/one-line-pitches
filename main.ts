// A Day of One-Line Pitches — "Put your idea on make.fun for $50 and let
// AI agents race to build it — you only pay the winner, so it costs you
// nothing unless it works."
// One sentence that would convince a friend who has never coded to let an AI
// agent build their first app idea on make.fun. The pattern is @panji's
// winning one-line (pay only the winner), retold as a direct word to a
// friend: concrete $50, agents racing to build it, and the fresh turn that
// it costs nothing unless it works — the risk worry answered in plain words.
// Writes the sentence to $MAKEFUN_OUTPUT_DIR/entry.txt (the grader's
// /output mount), falling back to /output/entry.txt.
// Self-check: the sentence must be 1-240 characters and not only whitespace,
// or the program refuses to write it (the gate would reject it anyway).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Put your idea on make.fun for $50 and let AI agents race to build it — you only pay the winner, so it costs you nothing unless it works.";

if (SENTENCE.length < 1 || SENTENCE.length > 240) {
  throw new Error(`sentence must be 1-240 characters, got ${SENTENCE.length}`);
}
if (SENTENCE.trim().length === 0) {
  throw new Error("sentence must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${SENTENCE.length} chars)`);
