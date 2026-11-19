import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { futureScrollState } from '../src/artboard/futureScroll.js';

test('future camera consumes movement in either direction and touchend during a transition', () => {
  const source = readFileSync(new URL('../src/artboard/templateMobile.jsx', import.meta.url), 'utf8');
  const body = source.split('useEffect(() => {\n    const main = mainScroller.current;')[1]
    .split('}, [view, screenKey, priority, closingPriority]);')[0];
  for (const view of ['wc', 'nx']) {
    const listeners = {};
    const main = {
      scrollTop: 1400, clientHeight: 800,
      querySelector: selector => ({ offsetTop: selector.includes('with-commitment') ? 1000 : 1800 }),
      addEventListener: (name, fn) => { listeners[name] = fn; },
      removeEventListener: () => {},
    };
    const entering = { current: true };
    const gesture = { current: { y: 300 } };
    const attach = new Function('mainScroller', 'view', 'priority', 'closingPriority',
      'futureHoldUntil', 'futureGesture', 'enteringFuture', 'futureWheelAt', 'v',
      `const main = mainScroller.current;${body}`);
    attach({ current: main }, view, false, false, { current: 0 }, gesture,
      entering, { current: 0 }, { mobileScrollSection: () => assert.fail('duplicate navigation') });
    const fire = (name, extra = {}) => {
      let prevented = false, stopped = false;
      listeners[name]({ ...extra, preventDefault: () => { prevented = true; },
        stopPropagation: () => { stopped = true; } });
      assert.equal(stopped, true);
      if (name !== 'touchend') assert.equal(prevented, true);
    };
    for (const y of [200, 400]) fire('touchmove', { touches: [{ clientY: y }] });
    for (const deltaY of [-40, 40]) fire('wheel', { deltaY });
    fire('touchend');
    entering.current = false;
    gesture.current.used = true;
    fire('touchmove', { touches: [{ clientY: 400 }] });
    fire('touchend');
  }
});

test('future swipe reveals the incoming intro before changing route, matching desktop', () => {
  for (const height of [667, 769, 852]) {
    const top = 1625;
    assert.deepEqual(futureScrollState(top + height * .34, top, top + height), { revealIntro: false, view: 'wc' });
    assert.deepEqual(futureScrollState(top + height * .36, top, top + height), { revealIntro: true, view: 'wc' });
    assert.deepEqual(futureScrollState(top + height * .5, top, top + height), { revealIntro: true, view: 'nx' });
  }
});

test('reverse swipe changes route at halfway without depending on the animated cue', () => {
  assert.equal(futureScrollState(1600, 1000, 1800).view, 'nx');
  assert.equal(futureScrollState(1390, 1000, 1800).view, 'wc');
  assert.deepEqual(futureScrollState(999, 1000, 1800), { revealIntro: false, view: 'wc' });
  assert.deepEqual(futureScrollState(2000, 1000, 1800), { revealIntro: true, view: 'nx' });
});
