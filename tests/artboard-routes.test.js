import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { ArtboardLogic } from '../src/artboard/ArtboardLogic.js';
import { SECTION_IDS, screenId, parseRoute, routeHash } from '../src/artboard/routes.js';

test('artboard URL navigation, reload and history restoration', async (t) => {
  // Keep animation timers pending; these checks exercise the real navigation and mount lifecycle.
  t.mock.method(globalThis, 'setTimeout', () => 1);
  t.mock.method(globalThis, 'setInterval', () => 1);
  globalThis.requestAnimationFrame = () => 1;
  globalThis.cancelAnimationFrame = () => {};
  const listeners = new Map(), writes = [];
  globalThis.document = {};
  globalThis.window = {
    location: { hash: '', pathname: '/annual-report/', search: '?lang=en' },
    addEventListener: (event, fn) => listeners.set(event, fn),
    removeEventListener: (event) => listeners.delete(event),
    history: { state: { existing: true } },
  };
  for (const method of ['pushState', 'replaceState']) window.history[method] = (state, title, hash) => {
    writes.push({ method, hash }); window.location.hash = new URL(hash, 'https://example.com/annual-report/?lang=en').hash;
    assert.equal(state.existing, true);
  };
  const mount = (hash, mobile = false) => {
    window.location.hash = hash;
    const logic = new ArtboardLogic({ mobile });
    logic.componentDidMount();
    return logic;
  };
  let logic = mount('');
  await Promise.resolve();
  assert.equal(window.location.hash, '');
  logic.jumpTo('s6');
  await Promise.resolve();
  assert.deepEqual(writes.at(-1), { method: 'pushState', hash: '#bringing-defence-closer' });
  logic.play6(2, 0);
  await Promise.resolve();
  assert.equal(window.location.hash, '#bringing-defence-closer-story-3');
  logic.jumpTo('top');
  await Promise.resolve();
  assert.equal(window.location.hash, '');
  assert.deepEqual(writes.at(-1), { method: 'pushState', hash: '/annual-report/?lang=en' });
  // Back to a section, then forward to the clean top URL restores both views.
  window.location.hash = '#bringing-defence-closer-story-3';
  listeners.get('popstate')();
  assert.equal(logic.state.view, 's6');
  window.location.hash = '';
  listeners.get('popstate')();
  assert.equal(logic.state.view, 'top');
  logic.jumpTo('s6');
  logic.play6(2, 0);
  await Promise.resolve();
  logic.componentWillUnmount();
  logic = mount(window.location.hash);
  assert.equal(logic.state.view, 's6');
  assert.equal(logic.state.step6, 2);
  logic.componentWillUnmount();

  for (const mobile of [false, true]) {
    for (const view of Object.keys(SECTION_IDS)) {
      const hash = '#' + SECTION_IDS[view];
      logic = mount(hash, mobile);
      assert.equal(logic.state.view, view, hash);
      if (view === 'wc') assert.equal(logic.state.s12, true);
      if (view === 'end') assert.equal(logic.state.s14, true);
      logic.componentWillUnmount();
    }
    for (const [view, max] of Object.entries({ s3: 3, s6: 4, s7: mobile ? 1 : 4, s8: mobile ? 1 : 6, mb: 4 })) {
      for (let i = 0; i < max; i++) {
        const hash = '#' + screenId(view, i);
        logic = mount(hash, mobile);
        const key = { s3: 'step', s6: 'step6', s7: 'step7', s8: 'step8', mb: 'mbTab' }[view];
        assert.equal(logic.state[key], i, hash);
        assert.equal(parseRoute(routeHash(logic.state), mobile).view, view);
        if (mobile && view === 'mb') assert.equal(logic.state.mbOrd[3], i);
        logic.componentWillUnmount();
      }
    }
  }
  logic = mount('#bringing-defence-closer-story-3?photo=2');
  assert.deepEqual(logic.state.lb, { t: 6, s: 2, i: 1 });
  window.location.hash = '#at-a-glance-panel-3';
  listeners.get('popstate')();
  assert.equal(logic.state.view, 's3');
  assert.equal(logic.state.step, 2);
  assert.equal(logic.state.lb, null);
  window.location.hash = '#rewarding-privileges-card-4';
  listeners.get('hashchange')();
  assert.equal(logic.state.mbTab, 3);
  logic.componentWillUnmount();
  logic = mount('#clubs-and-facilities?offset=420');
  assert.equal(logic.state.fcY, 420);
  logic.componentWillUnmount();
  logic = mount('#unknown');
  assert.equal(logic.state.view, 'top');
  logic.componentWillUnmount();
  assert.equal(listeners.size, 0);
  assert.equal(parseRoute('#%invalid'), null);
  assert.equal(parseRoute('#strengthening-bonds-story-6', true).index, 0);
  assert.equal(routeHash({ view: 'top' }), '');
  assert.equal(routeHash({ view: 'logo' }), '');
});

test('both templates expose stable section and screen IDs', () => {
  for (const file of ['template.jsx', 'templateMobile.jsx']) {
    const markup = readFileSync(new URL('../src/artboard/' + file, import.meta.url), 'utf8');
    for (const view of ['top', 'tg', 's3', 's5', 's6', 's7', 's8', 'mb', 'fc1', 'wc', 'end']) {
      assert.ok(markup.includes(`id={SECTION_IDS.${view}}`), `${file}: ${view}`);
    }
    for (let i = 0; i < 3; i++) assert.ok(markup.includes(`id={screenId("s3", ${i})}`));
  }
});
