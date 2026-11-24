import * as fs from 'node:fs';
import * as path from 'node:path';

const LINE =
  'I automated my job with a script, and now I spend eight hours a day watching the script do my job so nobody finds out.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), LINE, 'utf8');
