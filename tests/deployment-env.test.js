import test from 'node:test';
import assert from 'node:assert/strict';
import viteConfig from '../vite.config.js';

test('Vite defaults do not hide the deployment NODE_ENV in env files', () => {
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
