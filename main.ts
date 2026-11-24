import * as fs from 'node:fs';
import * as path from 'node:path';

// One-line office joke entry: writes the joke to <outDir>/entry.txt
// exactly as-is — no trailing newline, no extra text — so the gate
// sees a single 118-character line.
const LINE =
  'I automated my job with a script, and now I spend eight hours a day watching the script do my job so nobody finds out.';

function writeEntry(outDir: string, line: string): void {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'entry.txt'), line, 'utf8');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
writeEntry(outDir, LINE);
