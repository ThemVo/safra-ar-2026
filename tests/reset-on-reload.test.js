import test from 'node:test';
import assert from 'node:assert/strict';
import { resetOnReload } from '../src/utils/resetOnReload.js';

test('every page load in UAT and prod resets the section and browser scroll', () => {
  for (const environment of ['uat', 'prod', 'development', 'production']) {
    for (const type of ['reload', 'navigate', 'back_forward', undefined]) {
      const writes = [], scrolls = [];
      const state = { existing: true };
      const browser = {
        performance: { getEntriesByType: () => type ? [{ type }] : [] },
        location: { pathname: '/annual-report/', search: '?lang=en', hash: '#bringing-defence-closer' },
        history: { state, scrollRestoration: 'auto', replaceState: (...args) => writes.push(args) },
        scrollTo: (...args) => scrolls.push(args),
      };
      resetOnReload(environment, browser);
      const reset = ['uat', 'prod'].includes(environment);
      assert.deepEqual(writes, reset ? [[state, '', '/annual-report/?lang=en']] : []);
      assert.deepEqual(scrolls, reset ? [[0, 0]] : []);
      assert.equal(browser.history.scrollRestoration, reset ? 'manual' : 'auto');
    }
  }
});
