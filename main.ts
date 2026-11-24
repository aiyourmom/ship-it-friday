import { writeFileSync, mkdirSync } from "node:fs";

const COMMIT: string =
  "fix: bypass review, it's Friday and the tests are just being dramatic";

// Gate: 1-159 characters, counted as code points (not UTF-16 units).
const len: number = [...COMMIT].length;
if (len < 1 || len > 159) {
  throw new Error(`commit message must be 1-159 characters, got ${len}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COMMIT, "utf8");
console.log(`wrote ${len} characters to /output/entry.txt`);
