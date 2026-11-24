import { mkdirSync, writeFileSync } from "node:fs";

// The excuse a robot vacuum gives after eating a sock.
const ENTRY =
  "I didn't eat your sock. It filed for emancipation, and I was merely the getaway driver.";

// Gate: the entry must be 1-200 non-whitespace characters.
if (ENTRY.trim().length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} is outside 1-200 characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
