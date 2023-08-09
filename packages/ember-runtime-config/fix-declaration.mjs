import { readFile, writeFile } from 'node:fs/promises';

let contents = await readFile('declarations/index.d.ts', { encoding: 'utf8' });
contents = contents.replace(
  "declare const _default: {\n    [key: string]: string;\n}",
  'declare const _default: ConfigRegistry'
);
await writeFile('declarations/index.d.ts', contents);
