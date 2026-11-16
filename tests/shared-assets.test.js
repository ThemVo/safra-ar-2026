import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';

// Keep separately named exports of identical artwork out of the shipped bundle.
test('public assets contain no byte-identical copies', () => {
  const seen = new Map();
  for (const entry of readdirSync(new URL('../public/assets/', import.meta.url), { withFileTypes: true })) {
    if (!entry.isFile() || entry.name.startsWith('.')) continue;
    const bytes = readFileSync(new URL(`../public/assets/${entry.name}`, import.meta.url));
    const hash = createHash('sha256').update(bytes).digest('hex');
    assert.ok(!seen.has(hash), `${entry.name} duplicates ${seen.get(hash)}; reuse one filename`);
    seen.set(hash, entry.name);
  }
});
