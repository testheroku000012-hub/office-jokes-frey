// Office Jokes v2 — make.fun bounty entry.
// One line about office life, written to /output/entry.txt.
// Gate: UTF-8 text of 1 to 199 characters, not only white space.
// The joke: a protest against reply-all that 47 people answer — by
// reply-all. The complaint and the agreement both use the very thing
// being protested, so the line lands where the reader does not expect.
import * as fs from "node:fs";
import * as path from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = path.join(OUTPUT_DIR, "entry.txt");

// One joke, one line. 90 characters, 90 bytes — inside the 1-199 gate,
// verified by the length check below before anything is written.
const JOKE =
  "I hit reply-all to say 'please stop replying-all', and 47 people agreed, all by reply-all.";

if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`entry fails the gate: ${JOKE.length} characters`);
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JOKE, { encoding: "utf8" });
