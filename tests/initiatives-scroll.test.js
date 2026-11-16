import test from 'node:test';
import assert from 'node:assert/strict';
import { beforeEach } from 'node:test';
beforeEach(t => {
  t.mock.method(globalThis, 'setTimeout', () => 1);
  t.mock.method(globalThis, 'requestAnimationFrame', () => 1);
  t.mock.method(globalThis, 'cancelAnimationFrame', () => {});
});
globalThis.requestAnimationFrame = () => 1;
globalThis.cancelAnimationFrame = () => {};

import { ArtboardLogic } from '../src/artboard/ArtboardLogic.js';

function setup(view = 'mb') {
  const logic = new ArtboardLogic({ mobile: true, mobileWidth: 390, mobileHeight: 844 });
  logic.state.view = view;
  if (view === 'lf2') logic.state.lf2s = 3;
  if (view === 'lf3') logic.state.lf3s = 2;
  const navigation = [];
  logic.go = direction => navigation.push(direction);
  logic.nxWheel = logic.linkWheel = () => false;
  const scroller = { scrollTop: 200, clientHeight: 600, scrollHeight: 1200, classList: { contains: name => name === 'mobile-membership-cards' } };
  const target = { closest: selector => selector === '[data-mobile-scroll]' ? scroller : null };
  return { handlers: logic.renderVals(), navigation, scroller, target };
}

test('wheel finishes scrolling before a new gesture can leave either edge', t => {
  let now = 1000;
  t.mock.method(Date, 'now', () => now);
  for (const direction of [-1, 1]) {
    const { handlers, navigation, scroller, target } = setup();
    const wheel = () => handlers.wheel({ target, deltaY: direction * 60 });
    wheel();
    scroller.scrollTop = direction > 0 ? 600 : 0;
    now += 20;
    wheel();
    assert.deepEqual(navigation, [], 'momentum reaching the edge must stay in the list');
    now += 300;
    wheel();
    assert.deepEqual(navigation, [direction], 'a fresh gesture at the edge changes screens');
    now += 20;
    wheel();
    assert.deepEqual(navigation, [direction], 'one gesture must not change screens twice');
  }
});

test('native sections wait for momentum to stop before leaving the bottom', t => {
  let now = 1000;
  t.mock.method(Date, 'now', () => now);
  for (const view of ['mb', 'fc1', 'nx', 'lf2', 'lf3', 'end']) {
    const { handlers, navigation, scroller, target } = setup(view);
    scroller.scrollTop = 600;
    const nativeScroll = view === 'mb' ? handlers.mobileMembershipScroll : view === 'fc1' ? handlers.mobileScroll : handlers.mobileContentScroll;
    nativeScroll({currentTarget:scroller});
    now += 250; // A gap between wheel events can still belong to native momentum.
    handlers.wheel({target, deltaY:60});
    assert.deepEqual(navigation, [], `${view} must pause at the bottom`);
    now += 400;
    handlers.wheel({target, deltaY:60});
    assert.deepEqual(navigation, [1], `${view} advances on a new gesture after settling`);
  }
});

test('a swipe that starts above the bottom cannot also leave a native section', () => {
  for (const view of ['mb', 'fc1', 'nx', 'lf2', 'lf3', 'end']) {
    const { handlers, navigation, scroller, target } = setup(view);
    const point = y => ({target, touches:[{clientY:y}], changedTouches:[{clientY:y}]});
    handlers.touchStart(point(300));
    // The browser may finish scrolling before React observes the final touch movement.
    scroller.scrollTop = 600;
    handlers.touchMove(point(200));
    handlers.touchEnd(point(150));
    assert.deepEqual(navigation, [], `${view} keeps the swipe that reached the bottom`);
    handlers.touchStart(point(300));
    handlers.touchMove(point(200));
    handlers.touchEnd(point(150));
    assert.deepEqual(navigation, [1], `${view} advances on the next swipe`);
  }
});

test('touch scroll reaches either edge before a second swipe changes screens', () => {
  for (const direction of [-1, 1]) {
    const { handlers, navigation, scroller, target } = setup();
    const point = y => ({ target, touches: [{ clientY: y }], changedTouches: [{ clientY: y }], currentTarget: { getBoundingClientRect: () => ({ width: 390 }) } });
    handlers.touchStart(point(300));
    handlers.touchMove(point(300 - direction * 60));
    scroller.scrollTop = direction > 0 ? 600 : 0;
    handlers.touchEnd(point(300 - direction * 100));
    assert.deepEqual(navigation, []);
    handlers.touchStart(point(300));
    handlers.touchMove(point(300 - direction * 60));
    handlers.touchEnd(point(300 - direction * 100));
    assert.deepEqual(navigation, [direction]);
  }
});

test('mobile topics follow the list in both directions', () => {
  const logic = new ArtboardLogic({ mobile: true, mobileWidth: 390, mobileHeight: 844 });
  const moves = [];
  logic.l2To = (view, dir) => moves.push([view, dir]);
  logic.skipTo = view => moves.push([view, 1]);
  logic.toCards = () => moves.push(['s5', -1]);
  const order = ['s5', 's6', 's7', 's8', 'mb', 'fc1', 'wc'];
  for (let i = 1; i < order.length - 1; i++) {
    logic.state = { ...logic.state, view: order[i], step6: 3, step7: 3, step8: 5 };
    logic.go(1);
    assert.deepEqual(moves.pop(), [order[i + 1], 1]);
  }
  for (let i = 1; i < order.length - 1; i++) {
    logic.state = { ...logic.state, view: order[i], step6: 0, step7: 0, step8: 0 };
    logic.go(-1);
    assert.deepEqual(moves.pop(), [order[i - 1], -1]);
  }
  logic.state.view = 'wc';
  logic.go(-1);
  assert.deepEqual(moves.pop(), ['s5', -1], 'swiping back from With commitment returns to the Initiatives list');

});

test('mobile opening automatically shrinks the connected heading on arrival', t => {
  const timers = [];
  t.mock.method(globalThis, 'setTimeout', (callback, delay) => { timers.push({ callback, delay }); return 1; });
  const logic = new ArtboardLogic({ mobile: true });
  Object.assign(logic.state, { view: 'top', ready: true, curOn: true });
  logic.mobileGo(1);
  assert.equal(logic.state.view, 'tg');
  const arrival = timers.find(timer => timer.delay === 750);
  assert.ok(arrival, 'shrink starts when the mobile camera and connector arrive');
  arrival.callback();
  assert.equal(logic.state.view, 's3');
  assert.equal(logic.state.s3, true, 'the statistics reveal starts without another swipe');
  logic.lockUntil = 0;
  logic.mobileGo(-1);
  assert.equal(logic.state.view, 'tg', 'reverse scroll returns to the large connected heading');
});

test('mobile opening auto-shrink does not navigate away from another view or an open menu', t => {
  for (const interrupted of [{ view: 'top' }, { menu: true }]) {
    const timers = [];
    t.mock.method(globalThis, 'setTimeout', (callback, delay) => { timers.push({ callback, delay }); return 1; });
    const logic = new ArtboardLogic({ mobile: true });
    Object.assign(logic.state, { view: 'top', ready: true, curOn: true });
    logic.mobileGo(1);
    Object.assign(logic.state, interrupted);
    timers.find(timer => timer.delay === 750).callback();
    assert.equal(logic.state.view, interrupted.view || 'tg');
  }
});

test('scrolling past Initiatives opens With commitment without opening a topic card', () => {
  const logic = new ArtboardLogic({ mobile: true, mobileWidth: 390, mobileHeight: 844 });
  logic.state.view = 's5';
  logic.l2To = () => assert.fail('scrolling the list must not open a child screen');
  logic.go(1);
  assert.equal(logic.state.view, 'wc');
  assert.equal(logic.state.s12, true);
});


test('mobile priority swipes visit every accordion before advancing', () => {
  const logic = new ArtboardLogic({mobile:true});
  const advances = [];
  logic.go = dir => advances.push(dir);
  for (const [view, key, last] of [['lf2','lf2s',3],['lf3','lf3s',2]]) {
    logic.state.view = view;
    logic.state[key] = 0;
    for (let i = 1; i <= last; i++) {
      logic.lockUntil = 0;
      logic.mobileGo(1);
      assert.equal(logic.state[key],i);
      assert.deepEqual(advances,[]);
    }
    logic.lockUntil = 0;
    logic.mobileGo(1);
    assert.deepEqual(advances.splice(0),[1]);
    for (let i = last - 1; i >= 0; i--) {
      logic.lockUntil = 0;
      logic.mobileGo(-1);
      assert.equal(logic.state[key],i);
    }
    logic.lockUntil = 0;
    logic.mobileGo(-1);
    assert.deepEqual(advances.splice(0),[-1]);
  }
});

test('With commitment advances to the Looking forward introduction', () => {
  for (const mobile of [true, false]) {
    const logic = new ArtboardLogic({ mobile });
    logic.state.view = 'wc';
    logic.go(1);
    assert.equal(logic.state.view, 'nx');
    assert.equal(logic.state.lf1, false, 'the SAFRA cue leads to the introduction before the first priority');
  }
});

test('native section scrolling updates the mobile route without locking gestures', () => {
  const logic = new ArtboardLogic({ mobile: true });
  logic.state.view = 's5';
  logic.lockUntil = 0;
  logic.renderVals().mobileScrollSection('wc');
  assert.equal(logic.state.view, 'wc');
  assert.equal(logic.state.s12, true);
  assert.equal(logic.lockUntil, 0);
  logic.renderVals().mobileScrollSection('nx');
  assert.equal(logic.state.view, 'nx');
  assert.equal(logic.state.lf1, false, 'native scrolling reaches the intro before opening the priority');
  logic.nxReady = 0;
  logic.mobileGo(1);
  assert.equal(logic.state.lf1, true);
  logic.nxReady = logic.lockUntil = 0;
  logic.mobileGo(-1);
  assert.equal(logic.state.view, 'nx', 'closing the circle stays on Looking forward');
  assert.equal(logic.state.lf1, false);
  logic.lockUntil = 0;
  logic.renderVals().mobileScrollSection('wc');
  assert.equal(logic.state.view, 'wc', 'reverse native scrolling reveals With commitment');
  logic.renderVals().mobileScrollSection('s5');
  assert.equal(logic.state.view, 's5');
  assert.equal(logic.lockUntil, 0);
});


test('Annual Report can leave the boundary with a fresh reverse gesture', t => {
  let now = 1000;
  t.mock.method(Date, 'now', () => now);
  const { handlers, navigation, scroller, target } = setup('end');
  scroller.dataset = { mobileScrollMin: '500' };
  scroller.scrollTop = 600;
  handlers.mobileContentScroll({currentTarget:scroller});
  handlers.wheel({target, deltaY:-60});
  scroller.scrollTop = 500;
  handlers.mobileContentScroll({currentTarget:scroller});
  now += 250;
  handlers.wheel({target, deltaY:-60});
  assert.deepEqual(navigation, []);
  now += 400;
  handlers.wheel({target, deltaY:-60});
  assert.deepEqual(navigation, [-1]);

  const touch = setup('end');
  touch.scroller.dataset = { mobileScrollMin: '500' };
  touch.scroller.scrollTop = 500;
  const point = y => ({target:touch.target, touches:[{clientY:y}], changedTouches:[{clientY:y}]});
  touch.handlers.touchStart(point(150));
  touch.handlers.touchMove(point(250));
  touch.handlers.touchEnd(point(300));
  assert.deepEqual(touch.navigation, [-1], 'a new upward swipe releases the boundary');
});

test('native reverse scrolling leaves Annual Report without resetting the story or waiting for a new gesture', () => {
  const logic = new ArtboardLogic({ mobile: true });
  logic.state.view = 'end';
  logic.state.lf3s = 2;
  logic.lockUntil = Date.now() + 1200;
  logic.renderVals().mobileScrollSection('lf3');
  assert.equal(logic.state.view, 'lf3');
  assert.equal(logic.state.lf3s, 2);
});

test('Annual Report boundary corrections do not keep reverse scrolling locked', t => {
  let now = 1000;
  t.mock.method(Date, 'now', () => now);
  const { handlers, navigation, scroller, target } = setup('end');
  scroller.dataset = { mobileScrollMin: '500' };
  scroller.scrollTop = 550;
  handlers.mobileContentScroll({currentTarget:scroller});
  for (const top of [490, 500, 499.5, 500]) {
    now += 100;
    scroller.scrollTop = top;
    handlers.mobileContentScroll({currentTarget:scroller});
  }
  handlers.wheel({target, deltaY:-60});
  assert.deepEqual(navigation, [-1], 'clamping at the boundary must allow a fresh reverse gesture');
});


test('Looking forward pauses on every arrival and consumes the arriving gesture', t => {
  let now = 1000;
  t.mock.method(Date, 'now', () => now);
  const logic = new ArtboardLogic({ mobile: true });
  logic.state.view = 'wc';
  const handlers = logic.renderVals();
  for (let arrival = 0; arrival < 2; arrival++) {
    handlers.mobileScrollSection('nx');
    assert.equal(logic.mobileWheelOwned, true);
    assert.equal(logic.touchOwned, true);
    now += 1499;
    logic.mobileGo(1);
    assert.equal(logic.state.lf1, false, 'the introduction must stay visible during its pause');
    now += 1;
    logic.mobileGo(1);
    assert.equal(logic.state.lf1, true, 'a new gesture after the pause can open the priority');
    logic.lockUntil = 0;
    handlers.mobileScrollSection('wc');
    now += 2000;
  }
});

test('commitment momentum changes only one story and keeps the camera fixed', t => {
  let now = 1000;
  t.mock.method(Date, 'now', () => now);
  const logic = new ArtboardLogic({ mobile: false });
  logic.state.view = 'lf2';
  logic.state.lf2s = 0;
  const camera = logic.camNow();
  assert.equal(logic.lf2Wheel(60), true);
  for (let i = 0; i < 40; i++) {
    now += 100;
    assert.equal(logic.lf2Wheel(60), true);
    assert.equal(logic.state.lf2s, 1);
    assert.equal(logic.camNow(), camera);
  }
  now += 300;
  logic.lf2Wheel(60);
  assert.equal(logic.state.lf2s, 2);
  now += 1200;
  logic.lf2Wheel(-60);
  assert.equal(logic.state.lf2s, 1);
});

test('mobile priority wheel pauses at either edge before changing stories', t => {
  let now = 1000;
  t.mock.method(Date, 'now', () => now);
  for (const [view, selector, key] of [['lf2', '.lf2l', 'lf2s'], ['lf3', '.lf3s', 'lf3s']]) {
    for (const direction of [-1, 1]) {
      const logic = new ArtboardLogic({ mobile: true });
      logic.state.view = view;
      logic.state[key] = 1;
      const scroller = { scrollTop: 350, clientHeight: 600, scrollHeight: 1600 };
      const target = { closest: value => value === selector ? {} : value === '[data-mobile-scroll]' ? scroller : null };
      const wheel = () => logic.mobileWheel({ target, deltaY: direction * 60 });
      wheel();
      assert.equal(logic.state[key], 1, `${view}: copy scrolls before switching`);
      scroller.scrollTop = direction > 0 ? 1000 : 0;
      now += 20;
      logic.mobileScrolled(scroller);
      wheel();
      assert.equal(logic.state[key], 1, `${view}: momentum stops at the edge`);
      now += 400;
      wheel();
      assert.equal(logic.state[key], 1 + direction, `${view}: a fresh gesture changes one story`);
      now += 20;
      wheel();
      assert.equal(logic.state[key], 1 + direction, `${view}: momentum cannot skip another story`);
      now += 2000;
    }
  }
});

test('Supporting NSmen switches immediately without scrolling the column or camera', t => {
  let now = 1000;
  t.mock.method(Date, 'now', () => now);
  const logic = new ArtboardLogic({ mobile: false });
  logic.state.view = 'lf3';
  logic.state.lf3s = 0;
  const column = { scrollTop: 0, scrollHeight: 1600, clientHeight: 600, contains: () => true };
  logic.nxEl = () => column;
  const camera = logic.camNow();
  assert.equal(logic.lf3Wheel(60, {}), true);
  assert.equal(logic.state.lf3s, 1, 'advance before scrolling the long first story');
  for (let i = 0; i < 40; i++) {
    now += 100;
    assert.equal(logic.lf3Wheel(60, {}), true);
    assert.equal(logic.state.lf3s, 1);
    assert.equal(column.scrollTop, 0);
    assert.equal(logic.camNow(), camera);
  }
  now += 300;
  logic.lf3Wheel(60);
  assert.equal(logic.state.lf3s, 2);
  now += 1200;
  logic.lf3Wheel(-60);
  assert.equal(logic.state.lf3s, 1);
  assert.equal(logic.state.view, 'lf3');
});

test('mobile priority copy requires a fresh swipe after reaching the bottom', () => {
  for (const [view, selector, key] of [['lf2', '.lf2l', 'lf2s'], ['lf3', '.lf3s', 'lf3s']]) {
    const logic = new ArtboardLogic({ mobile: true });
    logic.state.view = view;
    logic.state[key] = 0;
    const scroller = { scrollTop: 350, clientHeight: 600, scrollHeight: 1600 };
    const target = { closest: value => value === selector ? {} : value === '[data-mobile-scroll]' ? scroller : null };
    const handlers = logic.renderVals();
    const point = y => ({ target, touches: [{ clientY: y }], changedTouches: [{ clientY: y }] });
    handlers.touchStart(point(400));
    scroller.scrollTop = 1000;
    handlers.touchMove(point(300));
    handlers.touchEnd(point(250));
    assert.equal(logic.state[key], 0, `${view}: the swipe reaching the bottom keeps its story`);
    handlers.touchStart(point(400));
    handlers.touchMove(point(300));
    handlers.touchEnd(point(250));
    assert.equal(logic.state[key], 1, `${view}: the next swipe opens the next story`);
    assert.equal(logic.state.view, view);
    assert.equal(scroller.scrollTop, 1000);
  }
});

test('light swipes change priority stories at either edge over copy, photos and background', t => {
  let now = 1000;
  t.mock.method(Date, 'now', () => now);
  for (const [view, key] of [['lf2', 'lf2s'], ['lf3', 'lf3s']]) {
    for (const region of ['copy', 'photo', 'background']) {
      for (const direction of [-1, 1]) {
        const logic = new ArtboardLogic({ mobile: true });
        logic.state.view = view;
        logic.state[key] = 1;
        const scroller = { scrollTop: direction > 0 ? 1000 : 0, clientHeight: 600, scrollHeight: 1600 };
        const target = { closest: value => value === '[data-mobile-scroll]' ? scroller : region === 'copy' ? {} : null };
        const handlers = logic.renderVals();
        const swipe = () => {
          handlers.touchStart({ target, touches: [{ clientY: 300 }] });
          handlers.touchMove({ touches: [{ clientY: 300 - direction * 24 }] });
          handlers.touchEnd({ changedTouches: [{ clientY: 300 - direction * 24 }] });
        };
        swipe();
        assert.equal(logic.state[key], 1 + direction, `${view}/${region}: a light swipe changes the story`);
        now += 550;
        swipe();
        assert.notEqual(logic.state[key], 1, `${view}/${region}: following swipes do not reverse direction`);
        now += 1000;
      }
    }
  }
});

test('reverse gestures over priority copy scroll to the top before changing the story', () => {
  for (const [view, selector, key] of [['lf2', '.lf2l', 'lf2s'], ['lf3', '.lf3s', 'lf3s']]) {
    const logic = new ArtboardLogic({ mobile: true });
    logic.state.view = view;
    logic.state[key] = 1;
    const scroller = { scrollTop: 350, clientHeight: 600, scrollHeight: 1600 };
    const target = { closest: value => value === selector ? {} : value === '[data-mobile-scroll]' ? scroller : null };
    const handlers = logic.renderVals();
    handlers.wheel({ target, deltaY: -60 });
    assert.equal(logic.state[key], 1, `${view}: wheel over copy permits native reverse scrolling`);
    const point = y => ({ target, touches: [{ clientY: y }], changedTouches: [{ clientY: y }] });
    handlers.touchStart(point(200));
    scroller.scrollTop = 0;
    handlers.touchMove(point(300));
    handlers.touchEnd(point(350));
    assert.equal(logic.state[key], 1, `${view}: the swipe reaching the top keeps its story`);
    handlers.touchStart(point(200));
    handlers.touchMove(point(300));
    handlers.touchEnd(point(350));
    assert.equal(logic.state[key], 0, `${view}: the next swipe returns to the preceding story`);
    assert.equal(logic.state.view, view);
  }
});

test('desktop Annual Report reverse gestures finish the footer movement before changing stories', t => {
  let now = 1000;
  t.mock.method(Date, 'now', () => now);
  for (const region of ['lf3s', 'lfp3', 'background']) {
    const logic = new ArtboardLogic({ mobile: false });
    logic.state = { ...logic.state, view: 'end', lf3s: 2 };
    const handlers = logic.renderVals();
    const target = { closest: selector => selector.includes(region) ? {} : null };
    handlers.wheel({ target, deltaY: -80 });
    assert.equal(logic.lkPos, 157, `${region}: reverse wheel starts hiding the footer`);
    // Simulate the camera reaching the start of the closing stretch.
    logic.state.view = 'lf3';
    logic.state.linkY = 0;
    logic.lkPos = 0;
    logic.lkEdge = now;
    now += 50;
    handlers.wheel({ target, deltaY: -80 });
    assert.equal(logic.state.lf3s, 2, `${region}: arriving momentum cannot switch stories`);
    assert.equal(logic.state.link, 'z3');
    now += 1000;
    handlers.wheel({ target, deltaY: -80 });
    assert.equal(logic.state.link, null);
    assert.equal(logic.state.lf3s, 2, 'settling the footer does not skip a story');
    now += 300;
    handlers.wheel({ target, deltaY: -80 });
    assert.equal(logic.state.lf3s, 1, 'the following reverse gesture opens the preceding story');
    now += 1500;
    logic.state = { ...logic.state, view: 'end', link: null, lf3s: 2 };
    logic.lockUntil = 0;
    handlers.touchStart({ target, touches: [{ clientY: 200 }] });
    handlers.touchEnd({ target, changedTouches: [{ clientY: 280 }] });
    assert.equal(logic.lkPos, 117, `${region}: touch also moves the footer camera`);
  }
});
