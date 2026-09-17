import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { dailyCore, pack } from "./gen-words.mjs";
import { dailyRest } from "./daily-rest.mjs";
import { codeCore } from "./code-words.mjs";
import { codeExtra } from "./code-extra.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "src/data");
mkdirSync(outDir, { recursive: true });

function unique(rows) {
  const seen = new Set();
  const out = [];
  for (const row of rows) {
    const k = String(row[0]).toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(row);
  }
  return out;
}

const daily = pack(unique([...dailyCore, ...dailyRest]).slice(0, 1024), "daily");
const code = pack(unique([...codeCore, ...codeExtra]).slice(0, 1024), "code");

if (daily.length !== 1024) throw new Error(`daily ${daily.length}`);
if (code.length !== 1024) throw new Error(`code ${code.length}`);

writeFileSync(join(outDir, "daily.json"), JSON.stringify(daily));
writeFileSync(join(outDir, "code.json"), JSON.stringify(code));
console.log("wrote", daily.length, "daily and", code.length, "code");
