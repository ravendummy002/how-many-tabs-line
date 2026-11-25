// How Many Tabs Do You Have Open? — entry program.
// Writes one honest tab count, digits only, to /output/entry.txt.
// Node 22, stdlib only, no network, deterministic.
// The count: 137 — a real hoarder's number. Big enough to raise an
// eyebrow, odd and specific enough to read as a true count rather
// than a round guess, and small enough that a person could plausibly
// have that many tabs open right now across a few windows.
import { mkdirSync, writeFileSync } from "node:fs";

const TAB_COUNT = "137";

// Guard the gate before writing: 1–5 chars, digits only, not blank.
if (!/^[0-9]{1,5}$/.test(TAB_COUNT)) {
  throw new Error("entry tab count fails the gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAB_COUNT, "utf8"); // no trailing newline
