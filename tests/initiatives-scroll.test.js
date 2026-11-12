import test from 'node:test';
import assert from 'node:assert/strict';
import { ArtboardLogic } from '../src/artboard/ArtboardLogic.js';

function setup() {
  const logic = new ArtboardLogic({ mobile: true, mobileWidth: 390, mobileHeight: 844 });
  logic.state.view = 's5';
  const navigation = [];
  logic.go = direction => navigation.push(direction);
  logic.nxWheel = logic.linkWheel = () => false;
  const scroller = { scrollTop: 200, clientHeight: 600, scrollHeight: 1200, classList: { contains: name => name === 'mobile-topics' } };
  const target = { closest: () => scroller };
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

test('mobile topics follow the list in both directions and show the matching Next label', () => {
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
  const nextLabels = ['Appreciating NSmen', 'Strengthening bonds', 'Rewarding privileges', 'Enhancing SAFRA Clubs & Facilities', 'Looking forward'];
  for (let i = 1; i <= 5; i++) {
    logic.state.view = order[i];
    assert.equal(logic.renderVals().mobileInitiativeNext.label, nextLabels[i - 1]);
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
