import test from 'node:test';
import assert from 'node:assert/strict';
import viteConfig from '../vite.config.js';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

test('Vite defaults do not hide the deployment NODE_ENV in env files', (t) => {
  const directory = mkdtempSync(join(tmpdir(), 'safra-env-test-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  writeFileSync(join(directory, '.env'), 'NODE_ENV=uat\n');
  writeFileSync(join(directory, '.env.prod'), 'NODE_ENV=prod\n');
  t.mock.method(process, 'cwd', () => directory);
  const original = process.env.NODE_ENV;
  try {
    for (const defaultEnv of ['development', 'production']) {
      process.env.NODE_ENV = defaultEnv;
      for (const mode of ['uat', 'prod', 'development', 'production']) {
        const config = viteConfig({ mode, command: 'build' });
        assert.equal(JSON.parse(config.define['import.meta.env.NODE_ENV']), mode === 'prod' ? 'prod' : 'uat');
        assert.equal(process.env.NODE_ENV, defaultEnv);
      }
    }
    for (const deployment of ['uat', 'prod']) {
      process.env.NODE_ENV = deployment;
      const config = viteConfig({ mode: 'development', command: 'serve' });
      assert.equal(JSON.parse(config.define['import.meta.env.NODE_ENV']), deployment);
    }
  } finally {
    if (original === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = original;
  }
});
