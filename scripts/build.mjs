import { cp, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const output = 'dist';
await mkdir(join(output, 'llm'), { recursive: true });
for (const [from, to] of [
  ['index.html', 'index.html'],
  ['llm/LICENSE', 'llm/LICENSE'],
  ['node_modules/@wllama/wllama/esm/index.js', 'llm/index.js'],
  ['node_modules/@wllama/wllama/esm/wasm/wllama.wasm', 'llm/wllama.wasm'],
  ['node_modules/@wllama/wllama-compat/wasm/wllama.js', 'llm/compat.js'],
  ['node_modules/@wllama/wllama-compat/wasm/wllama.wasm', 'llm/compat.wasm']
]) await cp(from, join(output, to));
await writeFile(join(output, '.nojekyll'), '');
