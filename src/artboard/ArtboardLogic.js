/* eslint-disable */
// Behaviour for the SAFRA AR FY2025/26 highlights artboard: navigation state machine,
// camera views, story timelines, hover effects and layout measuring.
// Ported verbatim from the design component's logic class; `renderVals()` returns
// the values the markup in Artboard.jsx binds to.
import React from 'react';
// Ink boxes measured from the original comp: each line is fitted so its ink spans x0..x1 and sits on `base`.
const FAM = '"Google Sans Flex", "Google Sans", system-ui, sans-serif';
const SPEC = {
  t1: { text: 'Explore our efforts in', x0: 156, x1: 1084, base: 253, fs: 93 },
  t2: { text: 'strengthening', x0: 211, x1: 1271, base: 390, fs: 157 },
  t3: { text: 'commitment', x0: 623, x1: 1200, base: 484, fs: 96 },
  t4b: { text: 'defence', x0: 300, x1: 801, base: 578, fs: 128 },
  t4c: { text: 'and supporting', x0: 827, x1: 1287, base: 558, fs: 63 },
  t5: { text: 'NSmen’s needs', x0: 253, x1: 1244, base: 702, fs: 136 }
};
const TO = { text: 'to', x0: 209, base: 558 };
// Masthead logo + text at 80% of the comp size, scaled around the centre of the masthead.
const MS = 1, MCX = 720, MCY = 450; // headline at full comp size (Figma Masthead_2)
for (const id in SPEC) { const s = SPEC[id]; s.x0 = MCX + (s.x0 - MCX) * MS; s.x1 = MCX + (s.x1 - MCX) * MS; s.base = MCY + (s.base - MCY) * MS; s.fs *= MS; }
TO.x0 = MCX + (TO.x0 - MCX) * MS; TO.base = MCY + (TO.base - MCY) * MS;
const GLANCE_BASE = 1066; // AT A GLANCE baseline (143px into section 3; section 2 overlays section 1, section 3 sits below)
const BAR_END = 900; // the bar drips into the top of section 2's gradient
const AGM_AT = Date.parse('2026-11-22T14:30:00+08:00'); // 53rd SAFRA AGM start, Singapore time
const CAM = { logo: 0, top: 0, s2: 0, s3: -918, s4: -1818, s5: -1818, s6: -1818, s7: -1818, s8: -1818, t2: -2718, mb: -3618, fy: -4518, wc: -5418, nx: -6318, end: -7218 };
// section 6 stories, in the order given: values, description lines (as laid out), red bar width, photos
const DC = [{"stats": ["500", "13"], "desc": ["Through NS Experience Camps, families got a", "taste of NS-inspired activities, gaining a deeper", "appreciation of their loved ones’ service."], "bar": 130, "photos": ["/assets/dc4-big.jpg", "/assets/dc4-a.jpg", "/assets/dc4-b.jpg"], "alts": ["Participants in life vests sit in an inflatable boat in a swimming pool", "Children and adults assemble a raft frame from white water containers and pipes on a turf court", "Families stretch a green tarp between trees to build a shelter"], "gallery": ["/assets/g1-0.jpg", "/assets/g1-1.jpg", "/assets/g1-2.jpg", "/assets/g1-3.jpg", "/assets/g1-4.jpg", "/assets/g1-5.jpg", "/assets/g1-6.jpg"], "gi": [0, 2, 1]}, {"stats": ["140K+"], "desc": ["Be@SAFRA Open Houses brought families", "together to reflect on the SAF’s role as they", "enjoyed interactive activities, flight simulators and", "military K9 encounters."], "bar": 260, "photos": ["/assets/dc3-big.jpg", "/assets/dc3-a.jpg", "/assets/dc3-b.jpg"], "alts": ["Parents and children play a giant board game with large red dice on a turf court", "Children play with toy blasters among camouflage tents on a green court", "An adult and child pose in flight suits and helmets against camouflage netting"], "gallery": ["/assets/g2-0.jpg", "/assets/g2-1.jpg", "/assets/g2-2.jpg", "/assets/g2-3.jpg", "/assets/g2-4.jpg", "/assets/g2-5.jpg"], "gi": [0, 2, 1]}, {"stats": ["20K+"], "desc": ["Commitment to Defence (C2D)", "Ambassadors from the SAF Veterans’ League", "shared real-life experiences, reinforcing the", "importance of a strong defence."], "bar": 390, "photos": ["/assets/dc1-big.jpg", "/assets/dc1-a.jpg"], "alts": ["A speaker addresses pupils seated in a classroom", "Service personnel seated outdoors listen to standing speakers"], "gallery": ["/assets/g3-0.jpg", "/assets/g3-1.jpg"], "gi": [0, 1]}, {"stats": ["40K+"], "desc": ["Total Defence Day commemorative activities", "equipped participants with practical skills through", "hands-on demonstrations and interactive games."], "bar": 520, "photos": ["/assets/dc2-big.jpg", "/assets/dc2-a.jpg", "/assets/dc2-b.jpg"], "alts": ["Children practise CPR on training manikins with instructors", "Emergency responders demonstrate a rescue to an audience under a sheltered walkway", "Boys look into a camouflage field pack held open by an instructor"], "gallery": ["/assets/g4-0.jpg", "/assets/g4-1.jpg", "/assets/g4-2.jpg", "/assets/g4-3.jpg"], "gi": [0, 1, 2]}]; // red bar = story progress: 1/4 … 4/4 of the panel
const DC_WORDS = ['BRINGING', 'DEFENCE', 'CLOSER', 'TO', 'THE', 'COMMUNITY'];
// section 7: Appreciating national servicemen (one story so far; the red bar shows 1 of 4)
const DC7 = [{"stats": ["35K+", "460"], "desc": ["Through the Appreciating NSmen Art Jam,", "preschoolers learnt of NSmen's contributions and", "made heartfelt gifts for their fathers."], "bar": 130, "photos": ["/assets/an1-big.jpg", "/assets/an1-a.jpg", "/assets/an1-b.jpg"], "alts": ["A child holds a hand-drawn thank-you card with a family photo for an NSman father", "A preschool teacher shows the class photos of servicemen", "A preschooler works on an art gift at a table"], "gallery": ["/assets/an1-big.jpg", "/assets/an1-a.jpg", "/assets/an1-b.jpg"], "gi": [0, 1, 2]}];
const AN_WORDS = ['APPRECIATING', 'NATIONAL', 'SERVICEMEN'];
// photos each topic card flips through on hover (from its own section)
// section 8: Strengthening bonds (one story so far)
const DC8 = [{"stats": ["52K+"], "desc": ["SAFRA's Vibrant Heartbeat SG60 National Day", "celebrations brought NSmen and families together", "to celebrate national pride."], "bar": 130, "photos": ["/assets/sb1-big.jpg", "/assets/sb1-a.jpg", "/assets/sb1-b.jpg"], "alts": ["A family smiles in front of heart-shaped red fireworks", "Members cheer with SAFRA thunder sticks at a National Day celebration", "A family on a picnic mat with the SAFRA mascot at a SG60 celebration"], "gallery": ["/assets/sb1-big.jpg", "/assets/sb1-a.jpg", "/assets/sb1-b.jpg"], "gi": [0, 1, 2]}];
// section 10: membership categories
const NX_TABS = ['Bringing defence closer', 'Creating better spaces', 'Making visits seamless'];
const MB_TABS = ['FOOD & GROCERIES', 'EDUCATION', 'MOVIES & ENTERTAINMENT', 'TRAVEL, STAYCATIONS & LOCAL ATTRACTIONS'];
// how far along the page each view is (views off the main ORDER sit beside their neighbours)
const RANK = { logo: -1, top: 0, s2: 1, s3: 2, s5: 3, s6: 4, s7: 4, s8: 4, t2: 5, mb: 6, fy: 7, wc: 8, nx: 9, end: 10 };
const SCR = { cps: 60, settle: 0.3, set: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!%#_' };
const dcSeconds = (d) => Math.max(0.8, 1.25, d.desc.join(' ').length / SCR.cps + SCR.settle);
const eOut2 = (x) => 1 - Math.pow(1 - x, 3); // power2.out
const eOut1 = (x) => 1 - Math.pow(1 - x, 2); // power1.out
const fmtCount = (v, k) => { const m = /^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/.exec(v); if (!m) return v; const dec = m[2].includes('.') ? m[2].split('.')[1].length : 0; const n = Number(m[2].replace(/,/g, '')) * k; return m[1] + n.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: m[2].includes(',') }) + m[3]; };
function scramble(lines, t, seed) {
  let o = 0; const step = Math.floor(Math.max(0, t) * SCR.cps);
  return lines.map((line) => { let out = ''; for (const c of line) { const at = o / SCR.cps; if (t >= at) out += (t >= at + SCR.settle || /\s/.test(c)) ? c : SCR.set[(Math.imul(seed + o * 31 + step * 7, 2654435761) >>> 0) % SCR.set.length]; o++; } o++; return out; });
}
const ORDER = ['top', 's2', 's3', 's5', 's6']; // s7 is reached from the last s6 story via the cards (see go) // the statement and the topic cards are one stop (s5)
const CUE_X = 720; // centre of the arrow-down in section 2 (cam coords)
const STEM_TOP = 732 + 56; // top of the arrow's stem (cam coords)
const ROLL_AFTER = 1500, ROLL_DUR = 1200; // countdown roll-up once the tiles have slid in
const viewOf = (v) => /^14|one year|closing/i.test(v || '') ? 'end' : /^13|what.s next/i.test(v || '') ? 'nx' : /^12|work continues/i.test(v || '') ? 'wc' : /^11|summary/i.test(v || '') ? 'fy' : /^10|membership/i.test(v || '') ? 'mb' : /^9|transition-2/i.test(v || '') ? 't2' : /^8|strengthening|1sg60/i.test(v || '') ? 's8' : /^7|appreciating/i.test(v || '') ? 's7' : /^6|defence closer|community/i.test(v || '') ? 's6' : /^5|topic/i.test(v || '') ? 's5' : /^4|transition/i.test(v || '') ? 's5' : /^3|glance/i.test(v || '') ? 's3' : /^2|countdown|registration/i.test(v || '') ? 's2' : 'top';
const AGM_INK_TOP = 561.2; // logo's visible bottom edge (513.2 at 80%) + 48px
const AGM_FS = 27.2;
const COUNT_AFTER = 1600; // ms after arriving at section 3
const INTRO_DONE = 7000; // last headline line has landed → masthead animation complete

export class ArtboardLogic extends React.Component {
  constructor(props) {
    super(props);
    const sv = viewOf(props.startView);
    this.state = { phase: 'run', mx: 0, my: 0, p: 0, lay: null, view: sv, s2: sv !== 'top', s3: ORDER.indexOf(sv) >= 2, s4: ORDER.indexOf(sv) >= 3, s6: sv === 's6', step6: 0, t6: null, s7: sv === 's7', step7: 0, t7: null, s8: sv === 's8', step8: 0, t8: null, s9: sv === 't2' || sv === 'mb', s10: sv === 'mb', mbTab: 0, lb: null, hx: null, hy: null, ready: false, now: Date.now(), step: 0, fresh: sv === 's3', cdP: sv === 'top' ? 0 : 1 };
    { const r = RANK[sv] ?? 0; Object.assign(this.state, { s9: this.state.s9 || r >= 5, s10: this.state.s10 || r >= 6, s11: r >= 7, s12: r >= 8, s13: r >= 9, s14: r >= 10 }); } // deep-linking to a later section
    this.played2 = sv !== 'top';
  }
  componentDidMount() {
    this.readyT = setTimeout(() => this.setState({ ready: true }), INTRO_DONE);
    this.tick = setInterval(() => this.setState({ now: Date.now() }), 1000);
    this.startTimers();
    const go = () => requestAnimationFrame(() => this.measure());
    try {
      if (document.fonts && document.fonts.load) {
        Promise.all([
          document.fonts.load('400 100px "Google Sans Flex"'),
          document.fonts.load('500 72px "Google Sans Flex"'),
          document.fonts.load('400 100px "Google Sans"'),
          document.fonts.load('500 72px "Google Sans"')
        ]).then(go, go);
        document.fonts.ready.then(go, go);
      } else { go(); }
    } catch (e) { go(); }
    setTimeout(go, 1500);
    setTimeout(() => this.hvLayout(), 600); setTimeout(() => this.hvLayout(), 2500);
    setTimeout(go, 4000);
  }
  // leaving section 6/7 for the cards: hold the entered card navy and quiet until the camera has pulled back out
  leaveTo5(from) { clearTimeout(this.lvT); this.setState({ lv: from }); this.lvT = setTimeout(() => this.setState({ lv: null }), 1500); }
  componentDidUpdate(prev, prevState) {
    if (this.stkCard && this.state.view !== 's5') this.cardStack(null);
    if (prevState && prevState.view !== this.state.view && this.state.view === 't2') { this.hvLayout(); setTimeout(() => this.hvLayout(), 400); }
    // leaving section 6/7 for the cards: hold the entered card navy until the camera has pulled back out

    if (prev.startView !== this.props.startView) {
      const v = viewOf(this.props.startView);
      this.setState({ view: v });
      if (v !== 'top') this.setState({ s2: true });
      if (v === 's3') this.arrive3();
      if (v === 's4' || v === 's5') this.setState({ s3: true, s4: true });
    }
  }
  // generic letter hover for statement text (.hv): same push/tilt as the masthead headline
  // topic-card hover: cycle the card's section photos as a popping, tilted stack
  cardStack(card) {
    if (card === this.stkCard) return;
    clearInterval(this.stkT);
    if (this.stkCard) { const old = this.stkCard; clearTimeout(old._stkOff); old._stkOff = setTimeout(() => { if (old !== this.stkCard) old.querySelectorAll('.stk').forEach((im) => { im.style.display = 'none'; im.classList.remove('pop', 'out', 'now'); }); }, 200); }
    this.stkCard = card;
    if (!card) return;
    const src = { '#dc-title': DC, '#an-title': DC7, '#sb-title': DC8 }[card.getAttribute('href')] || [];
    const list = [...new Set(src.flatMap((d) => d.gallery || []))];
    if (!list.length) return;
    clearTimeout(card._stkOff);
    const slots = [...card.querySelectorAll('.stk')].slice(0, 2); let n = 0;
    const TILT = [-4, 3.5, -2.5, 4.5];
    const step = () => {
      const im = slots[n % 2], prev = slots[(n + 1) % 2];
      if (n > 0) { prev.style.zIndex = '1'; }
      im.classList.remove('out', 'pop', 'now'); im.src = list[n % list.length];
      im.style.setProperty('--sr', TILT[n % TILT.length] + 'deg'); im.style.zIndex = '2'; im.style.display = 'block';
      void im.offsetWidth; im.classList.add(n === 0 ? 'now' : 'pop');
      n++;
    };
    step(); this.stkT = setInterval(step, 1100);
  }
  hvLayout() {
    const root = this.findRoot(); if (!root) return;
    if (document.fonts && document.fonts.status !== 'loaded') document.fonts.ready.then(() => this.hvLayout());
    root.querySelectorAll('.hv[data-g]').forEach((line) => {
      const w = line.offsetWidth; line.querySelectorAll('.lt').forEach((l) => { l.style.backgroundSize = w + 'px 100%'; l.style.backgroundPosition = (line.offsetLeft - l.offsetLeft) + 'px 0'; });
    });
  }
  hvMove(cx, cy, scale) {
    const root = this.findRoot(); if (!root) return;
    const rb = root.getBoundingClientRect(), R = 170;
    root.querySelectorAll('.hv').forEach((line) => {
      const sec = line.closest('section'); const vis = sec && getComputedStyle(sec).visibility !== 'hidden';
      const fs = parseFloat(getComputedStyle(line).fontSize) || 60;
      line.querySelectorAll('.lt').forEach((l) => {
        let tf = '';
        if (vis && cx != null && l.textContent.trim()) {
          const b = l.getBoundingClientRect(); if (b.bottom > rb.top && b.top < rb.bottom) {
            const x = (b.left + b.width / 2 - rb.left) * scale, y = (b.top + b.height * 0.55 - rb.top) * scale, dx = x - cx, dy = y - cy, d = Math.hypot(dx, dy);
            if (d < R) { const f = Math.pow(1 - d / R, 2), n = d || 1, push = 0.34 * fs * f;
              tf = 'translate(' + (dx / n * push).toFixed(1) + 'px,' + (dy / n * push - fs * 0.08 * f).toFixed(1) + 'px) rotate(' + ((dx >= 0 ? 1 : -1) * 16 * f).toFixed(1) + 'deg) scale(' + (1 + 0.12 * f).toFixed(3) + ')'; }
          }
        }
        if (l.style.transform !== tf) l.style.transform = tf;
      });
    });
  }
  componentWillUnmount() { clearInterval(this.stkT); this.clearAll(); clearInterval(this.tick); clearTimeout(this.hopT); if (this.raf6) cancelAnimationFrame(this.raf6); if (this.raf7) cancelAnimationFrame(this.raf7); }
  // Section 6: play a story's entrance (photos rise into their frames, numbers count, description decodes, red bar fills)
  play6(n, delay, hold) {
    if (this.raf6) cancelAnimationFrame(this.raf6);
    this.hold = hold || 0;
    const dur = dcSeconds(DC[n]) + this.hold, t0 = performance.now() + delay * 1000;
    this.bar6From = this.state.s6 && this.state.view === 's6' ? DC[this.state.step6 || 0].bar : 0; // progress bar continues from the story we're leaving
    this.setState({ step6: n, t6: -delay });
    const tick = (now) => {
      const t = (now - t0) / 1000;
      if (t >= dur) { this.raf6 = 0; this.setState({ t6: null }); return; }
      this.setState({ t6: t });
      this.raf6 = requestAnimationFrame(tick);
    };
    this.raf6 = requestAnimationFrame(tick);
  }
  // Section 7: same story engine
  play7(n, delay, hold) {
    if (this.raf7) cancelAnimationFrame(this.raf7);
    this.hold = hold || 0;
    const dur = dcSeconds(DC7[n]) + this.hold, t0 = performance.now() + delay * 1000;
    this.bar7From = this.state.s7 && this.state.view === 's7' ? DC7[this.state.step7 || 0].bar : 0;
    this.setState({ step7: n, t7: -delay });
    const tick = (now) => { const t = (now - t0) / 1000; if (t >= dur) { this.raf7 = 0; this.setState({ t7: null }); return; } this.setState({ t7: t }); this.raf7 = requestAnimationFrame(tick); };
    this.raf7 = requestAnimationFrame(tick);
  }
  play8(n, delay, hold) {
    if (this.raf8) cancelAnimationFrame(this.raf8);
    this.hold = hold || 0;
    const dur = dcSeconds(DC8[n]) + this.hold, t0 = performance.now() + delay * 1000;
    this.setState({ step8: n, t8: -delay });
    const tick = (now) => { const t = (now - t0) / 1000; if (t >= dur) { this.raf8 = 0; this.setState({ t8: null }); return; } this.setState({ t8: t }); this.raf8 = requestAnimationFrame(tick); };
    this.raf8 = requestAnimationFrame(tick);
  }
  land() { clearTimeout(this.landT); this.setState({ landing: true }); this.landT = setTimeout(() => this.setState({ landing: false }), 1150); }
  arrive8() { this.land(); this.setState({ s8: true }); this.play8(0, 0.15, 0.3); }
  arriveMb() {
    const first = !this.state.s10; this.setState({ s10: true });
    if (!first) return;
    if (this.rafM) cancelAnimationFrame(this.rafM);
    const t0 = performance.now() + 1400;
    const step = (now) => { const x = Math.min(1, Math.max(0, (now - t0) / 1300)); this.setState({ pM: 1 - Math.pow(1 - x, 3) }); if (x < 1) this.rafM = requestAnimationFrame(step); };
    this.setState({ pM: 0 }); this.rafM = requestAnimationFrame(step);
  }
  arrive7() { this.land(); const first = !this.state.s7; this.setState({ s7: true }); this.play7(0, 0.15, 0.3); }
  // 6 ⇄ 7 travels through the topic cards: zoom back out to the cards, then into the next card
  // leave a topic (or transition-2) and come back to the three cards — the visitor picks what's next
  toCards() {
    clearTimeout(this.hopT);
    const from = this.state.view;
    this.lockUntil = Date.now() + 1500;
    if (from !== 't2') this.leaveTo5(from);
    this.setState({ view: 's5', hopping: false });
  }
  // skip buttons: straight to the named screen — the story panel grows to full navy, then the next section opens out of it
  skipTo(to) {
    const from = this.state.view;
    if (this.raf6) cancelAnimationFrame(this.raf6); if (this.raf7) cancelAnimationFrame(this.raf7); if (this.raf8) cancelAnimationFrame(this.raf8);
    clearTimeout(this.hopT); clearTimeout(this.lvT);
    this.lockUntil = Date.now() + 1600;
    this.setState({ lv: from, hopping: true }); // panel grows back to full-screen navy
    this.hopT = setTimeout(() => {
      this.setState({ view: to, hopping: false, lv: null, s9: to === 't2' ? true : this.state.s9 });
      if (to === 's7') this.arrive7(); else if (to === 's8') this.arrive8();
      else if (to === 's6') { this.land(); this.setState({ s6: true }); this.play6(DC.length - 1, 0.15, 0.3); } // back up into the last story
    }, 40);
  }
  hop(to) {
    clearTimeout(this.hopT);
    const from = this.state.view, viaT2 = to === 't2' || from === 't2';
    this.lockUntil = Date.now() + (viaT2 ? 2700 : 4600);
    this.leaveTo5(from);
    this.setState({ view: 's5', hopping: true });
    this.hopT = setTimeout(() => {
      this.setState({ view: to, hopping: false });
      if (to === 's7') this.arrive7();
      else if (to === 's8') this.arrive8();
      else if (to === 't2') this.setState({ s9: true });
      else { this.setState({ s6: true }); this.play6(DC.length - 1, 0.7); }
    }, viaT2 ? 1600 : 3000); // card ⇄ card: pull back, hold ~2s, zoom into the next card; to/from transition-2: pull back, then glide down
  }
  arrive6() {
    this.land();
    const first = !this.state.s6;
    this.setState({ s6: true });
    this.play6(0, 0.15, 0.3);
  }
  clearAll() {
    clearTimeout(this.resetT); clearTimeout(this.countT); clearTimeout(this.swapT); clearTimeout(this.readyT); clearTimeout(this.rollT);
    if (this.raf) cancelAnimationFrame(this.raf);
    if (this.rafC) cancelAnimationFrame(this.rafC);
  }
  startTimers() {
    if (this.state.s3) this.arrive3(true);
  }
  // First arrival at section 3 plays its sequence once.
  arrive3(force) {
    if (this.props.showFinal) return;
    if (this.played3 && !force) return;
    this.played3 = true;
    clearTimeout(this.countT);
    this.setState({ s2: true, s3: true, p: 0, step: 0, fresh: true });
    this.countT = setTimeout(() => this.countUp(), COUNT_AFTER);
  }
  // Section 1.5 plays its entrance the first time it is reached.
  arrive2() {
    if (this.props.showFinal || this.played2) { if (!this.state.s2) this.setState({ s2: true }); return; }
    this.played2 = true;
    this.setState({ s2: true, cdP: 0 });
    clearTimeout(this.rollT);
    this.rollT = setTimeout(() => {
      const t0 = performance.now();
      const step = (now) => {
        const x = Math.min(1, (now - t0) / ROLL_DUR);
        this.setState({ cdP: 1 - Math.pow(1 - x, 3) });
        if (x < 1) this.rafC = requestAnimationFrame(step);
      };
      this.rafC = requestAnimationFrame(step);
    }, ROLL_AFTER);
  }
  // Step between the three At a glance panels; the numbers count up again on each.
  setStep(n) {
    clearTimeout(this.countT);
    if (this.raf) cancelAnimationFrame(this.raf);
    this.setState({ step: n, fresh: false, p: 0, dirB: n < this.state.step });
    this.countT = setTimeout(() => this.countUp(), 420);
  }
  go(dir) {
    const now = Date.now();
    if (this.lockUntil && now < this.lockUntil) return;
    // section 1 ⇄ the SAFRA logo it started from
    if (this.state.view === 'top' && dir < 0) { if (this.state.ready) { this.lockUntil = now + 1700; this.setState({ view: 'logo' }); } return; }
    if (this.state.view === 'logo') { if (dir > 0) { this.lockUntil = now + 1300; this.setState({ view: 'top' }); } return; }
    if (this.state.lb) return; // gallery open
    { const TAIL = ['mb', 'fy', 'wc', 'nx', 'end'], ti = TAIL.indexOf(this.state.view);
      if (ti >= 0) {
        if (ti === 0 && dir < 0) { this.lockUntil = now + 1000; this.setState({ view: 't2' }); return; }
        const nv = TAIL[ti + dir]; if (!nv) return;
        this.lockUntil = now + 1200; this.setState({ view: nv, [{ fy: 's11', wc: 's12', nx: 's13', end: 's14' }[nv] || 's10']: true });
        if (nv === 'wc') setTimeout(() => this.hvLayout(), 60);
        return;
      } }
    if (this.state.view === 't2') { if (dir > 0) { this.lockUntil = now + 1200; this.setState({ view: 'mb' }); this.arriveMb(); } else this.hop('s8'); return; }
    if (this.state.view === 's8') {
      const ns = (this.state.step8 || 0) + dir;
      if (ns >= DC8.length) { this.skipTo('t2'); return; }
      if (ns < 0) { this.skipTo('s7'); return; }
      this.lockUntil = now + 900; this.play8(ns, 0.2); return;
    }
    if (this.state.view === 's7') {
      const ns = (this.state.step7 || 0) + dir;
      if (ns >= DC7.length) { this.skipTo('s8'); return; }
      if (ns < 0) { this.skipTo('s6'); return; }
      this.lockUntil = now + 900; this.play7(ns, 0.2); return;
    }
    if (this.state.view === 's6') {
      const ns = (this.state.step6 || 0) + dir;
      if (ns > 3) { this.skipTo('s7'); return; }
      if (ns >= 0) { this.lockUntil = now + 900; this.play6(ns, 0.2); return; }
    }
    if (this.state.view === 's3') {
      const ns = this.state.step + dir;
      if (ns >= 0 && ns <= 2) { this.lockUntil = now + 1150; this.setStep(ns); return; }
    }
    const j = ORDER.indexOf(this.state.view) + dir;
    if (j < 0 || j >= ORDER.length) return;
    const v = ORDER[j];
    this.lockUntil = now + ((v === 's6' || this.state.view === 's6') ? 1400 : 1200); // let the navy zoom finish
    if (this.state.view === 's6' && v === 's5') this.leaveTo5('s6');
    this.setState({ view: v });
    if (v === 's2') this.arrive2();
    if (v === 's3') { if (this.played3) { if (dir > 0 && this.state.step !== 0) this.setStep(0); } else this.arrive3(); }
    if (v === 's5') this.setState({ s4: true });
    if (v === 's6') this.arrive6();
  }
  countUp() {
    if (this.raf) cancelAnimationFrame(this.raf);
    const t0 = performance.now(), dur = 1400;
    const step = (now) => {
      const x = Math.min(1, (now - t0) / dur);
      this.setState({ p: 1 - Math.pow(1 - x, 3) });
      if (x < 1) this.raf = requestAnimationFrame(step);
    };
    this.raf = requestAnimationFrame(step);
  }
  restart() {
    this.clearAll();
    this.played3 = false; this.played2 = false;
    this.lockUntil = Date.now() + 1200;
    this.setState({ phase: 'reset', p: 0, cdP: 0, step: 0, fresh: false, s2: false, s3: false, view: 'top', ready: false });
    this.readyT = setTimeout(() => this.setState({ ready: true }), INTRO_DONE + 90);
    this.resetT = setTimeout(() => { this.setState({ phase: 'run' }); }, 90);
  }
  // Draw one glyph and return its ink columns on a given row (relative to the pen position) and its cap/ascender top.
  glyph(ch, font, size) {
    const W = Math.ceil(size * 2) + 40, H = Math.ceil(size * 1.6) + 20, ox = 20, oy = Math.ceil(size * 1.2);
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const ctx = c.getContext('2d'); ctx.font = font; ctx.fillText(ch, ox, oy);
    const d = ctx.getImageData(0, 0, W, H).data;
    const ink = (x, y) => d[(y * W + x) * 4 + 3] > 128;
    let top = -1;
    for (let y = 0; y < oy && top < 0; y++) for (let x = 0; x < W; x++) if (ink(x, y)) { top = y; break; }
    return { ink, ox, oy, W, top: top < 0 ? null : oy - top };
  }
  runs(g, row) {
    const out = []; let s = -1;
    for (let x = 0; x <= g.W; x++) {
      const on = x < g.W && g.ink(x, row);
      if (on && s < 0) s = x;
      if (!on && s >= 0) { out.push([s - g.ox, x - 1 - g.ox]); s = -1; }
    }
    return out;
  }
  findRoot() {
    if (this.root && this.root.isConnected) return this.root;
    const walk = (r) => {
      const f = r.querySelector && r.querySelector('.mh');
      if (f) return f;
      const all = r.querySelectorAll ? r.querySelectorAll('*') : [];
      for (const el of all) if (el.shadowRoot) { const x = walk(el.shadowRoot); if (x) return x; }
      return null;
    };
    try { this.root = walk(document); } catch (e) { this.root = null; }
    return this.root;
  }
  measure() {
    try {
      const c = document.createElement('canvas');
      const ctx = c.getContext('2d');
      ctx.font = '400 100px ' + FAM;
      const t = {};
      const place = (m, k, x0, base) => {
        const fs = 100 * k;
        const A = (m.fontBoundingBoxAscent ?? 92) * k, D = (m.fontBoundingBoxDescent ?? 24) * k;
        const baseOff = (fs - (A + D)) / 2 + A;
        return { x: +(x0 + m.actualBoundingBoxLeft * k).toFixed(2), y: +(base - baseOff).toFixed(2), fs: +fs.toFixed(2) };
      };
      for (const id in SPEC) {
        const s = SPEC[id];
        const m = ctx.measureText(s.text);
        const inkW = m.actualBoundingBoxLeft + m.actualBoundingBoxRight;
        if (!(inkW > 0)) return;
        t[id] = place(m, (s.x1 - s.x0 + 1) / inkW, s.x0, s.base);
      }
      t.t4a = place(ctx.measureText(TO.text), t.t4c.fs / 100, TO.x0, TO.base);
      const TEXTS = { t1: SPEC.t1.text, t2: SPEC.t2.text, t3: SPEC.t3.text, t4a: TO.text, t4b: SPEC.t4b.text, t4c: SPEC.t4c.text, t5: SPEC.t5.text };
      for (const id in TEXTS) {
        const kk = t[id].fs / 100; let acc = 0; const offs = [], ws = [];
        for (const ch of Array.from(TEXTS[id])) { const w = ctx.measureText(ch).width * kk; offs.push(+acc.toFixed(2)); ws.push(+w.toFixed(2)); acc += w; }
        t[id].offs = offs; t[id].ws = ws; t[id].w = +acc.toFixed(2);
      }
      const mA = ctx.measureText('53 SAFRA');
      const k34 = AGM_FS / 100, A34 = (mA.fontBoundingBoxAscent ?? 92) * k34, D34 = (mA.fontBoundingBoxDescent ?? 24) * k34;
      const agmBase = AGM_INK_TOP + mA.actualBoundingBoxAscent * k34;
      const agmTop = +(agmBase - ((AGM_FS - (A34 + D34)) / 2 + A34)).toFixed(2);

      // The bar = the right stem of the second "n" in NSmen.
      const fs5 = t.t5.fs;
      ctx.font = '400 ' + fs5 + 'px ' + FAM;
      const adv = t.t5.offs[4];
      const gn = this.glyph('n', '400 ' + fs5 + 'px ' + FAM, fs5);
      const nRuns = this.runs(gn, gn.oy - Math.round(fs5 * 0.08));
      if (nRuns.length < 2) return;
      const st = nRuns[nRuns.length - 1];
      const barX = t.t5.x + adv + st[0];
      const barW = st[1] - st[0] + 1;
      const barTop = SPEC.t5.base - Math.round(fs5 * 0.12);

      // The L of AT A GLANCE (72px, 500): its shape from the font, its place from the page.
      const gl = this.glyph('L', '500 72px ' + FAM, 72);
      if (!gl.top) return;
      const capH = gl.top;
      const lRuns = this.runs(gl, Math.round(gl.oy - capH * 0.5));
      if (!lRuns.length) return;
      const lsb = lRuns[0][0], lW = lRuns[0][1] - lRuns[0][0] + 1;
      const fRuns = this.runs(gl, gl.oy - 2);
      const footR = fRuns.length ? fRuns[fRuns.length - 1][1] : lsb + 32;
      const fw = footR - lsb + 1;
      let fh = 0;
      const fx = gl.ox + lsb + Math.round(fw * 0.8);
      for (let y = gl.oy - 1; y > gl.oy - capH && gl.ink(fx, y); y--) fh++;
      if (fh < 3 || fh > capH / 3) fh = lW;

      const root = this.findRoot();
      const span = root && root.querySelector('.gL');
      const mark = root && root.querySelector('.gLb');
      let Lx, Lbase;
      if (span && mark && span.offsetParent) {
        Lx = span.offsetLeft;
        Lbase = span.offsetTop + mark.offsetTop;
      } else {
        ctx.font = '500 72px ' + FAM;
        const mh = ctx.measureText('A');
        const hA = mh.fontBoundingBoxAscent ?? 66, hD = mh.fontBoundingBoxDescent ?? 17;
        Lx = ctx.measureText('AT A G').width + 6 * 0.36;
        Lbase = (72 - (hA + hD)) / 2 + hA;
      }
      const markTop = mark ? mark.offsetTop : null;
      const ox = Lx + lsb + lW / 2;
      const oy = Lbase - capH;
      const head = { x: +(CUE_X - ox).toFixed(2), y: +(GLANCE_BASE - Lbase).toFixed(2), ox: +ox.toFixed(2), oy: +oy.toFixed(2) };
      const base = markTop != null ? markTop : (Lbase - (span ? span.offsetTop : 0));
      const Ld = { sx: lsb, st: +(base - capH).toFixed(2), sw: lW, sh: capH, ft: +(base - fh).toFixed(2), fw, fh };
      const barH = Math.max(40, Math.round(BAR_END - barTop));
      // the wipe starts as exactly the L, then opens out to the whole heading
      const h2 = root && root.querySelector('#glance-title');
      let wipe = { l: 45, r: 45 };
      if (h2 && h2.offsetWidth) {
        const hl = h2.offsetLeft, hw = h2.offsetWidth;
        wipe = { l: +((Lx + lsb - hl) / hw * 100).toFixed(3), r: +(100 - (Lx + lsb + fw - hl) / hw * 100).toFixed(3) };
      }
      // section 4: per-letter offsets/widths so each letter carries its slice of the line's gradient and can react to the cursor
      const s4 = {};
      [['a', 'The numbers tell our impact.', 63], ['b', 'The stories show what it means.', 82]].forEach(([k, txt, fs]) => {
        ctx.font = '400 ' + fs + 'px ' + FAM; let acc = 0; const offs = [], ws = [];
        for (const ch of Array.from(txt)) { const w = ctx.measureText(ch).width; offs.push(+acc.toFixed(2)); ws.push(+w.toFixed(2)); acc += w; }
        s4[k] = { txt, fs, offs, ws, w: +acc.toFixed(2) };
      });
      // section 6 heading: each word carries the shared gradient, offset by where it sits in its line
      ctx.font = '600 56px ' + FAM;
      const sp = ctx.measureText(' ').width, dcw = [];
      let dcW = 0;
      [[0, 1, 2], [3, 4, 5]].forEach((ids) => { let x = 0; ids.forEach((i) => { dcw[i] = -Math.round(x * 10) / 10; x += ctx.measureText(DC_WORDS[i]).width + sp; }); dcW = Math.max(dcW, Math.ceil(x - sp + 4)); });
      const dcw7 = []; let dcW7 = 0;
      [[0], [1, 2]].forEach((ids) => { let x = 0; ids.forEach((i) => { dcw7[i] = -Math.round(x * 10) / 10; x += ctx.measureText(AN_WORDS[i]).width + sp; }); dcW7 = Math.max(dcW7, Math.ceil(x - sp + 4)); });
      ctx.font = '600 56px ' + FAM; const dcW8 = Math.ceil(Math.max(ctx.measureText('STRENGTHENING').width, ctx.measureText('BONDS').width) + 4);
      this.setState({ lay: { t, agmTop, barX, barW, barTop, barH, lW, lBase: GLANCE_BASE, head, Ld, wipe, dcw, dcW, s4, dcw7, dcW7, dcW8 } });
      requestAnimationFrame(() => this.hvLayout());
    } catch (e) {}
  }
  renderVals() {
    const k = this.props.parallax ?? 1;
    const { mx, my } = this.state;
    const p = this.props.showFinal ? 1 : this.state.p;
    const tr = (d) => 'translate3d(' + (mx * d * k).toFixed(1) + 'px,' + (my * d * k).toFixed(1) + 'px,0)';
    const stageClass = this.props.showFinal ? 'is-final' : (this.state.phase === 'run' ? 'is-run' : 'is-reset');

    const lay = this.state.lay;
    const t = lay ? lay.t : {};
    for (const id in SPEC) if (!t[id]) { const s = SPEC[id]; t[id] = { x: s.x0, y: s.base - s.fs * 0.8, fs: s.fs }; }
    if (!t.t4a) t.t4a = { x: TO.x0, y: TO.base - 50, fs: 63 };

    const barW = lay ? lay.barW : 15, barX = lay ? lay.barX : 696, barTop = lay ? lay.barTop : 698;
    const barH = lay ? lay.barH : 202;
    const clip = 'none';
    const head = lay ? lay.head : { x: 478, y: 986, ox: 226, oy: 6 };
    // live countdown to the AGM
    const left = Math.max(0, AGM_AT - this.state.now);
    const cdD = Math.floor(left / 864e5), cdH = Math.floor(left / 36e5) % 24, cdM = Math.floor(left / 6e4) % 60, cdS = Math.floor(left / 1e3) % 60;
    const cp = this.props.showFinal ? 1 : this.state.cdP;
    const cd = { d: Math.round(cdD * cp), h: Math.round(cdH * cp), m: Math.round(cdM * cp), s: Math.round(cdS * cp),
      aria: cdD + ' days, ' + cdH + ' hours, ' + cdM + ' minutes and ' + cdS + ' seconds to the 53rd SAFRA AGM' };

    const TEXTS = { t1: SPEC.t1.text, t2: SPEC.t2.text, t3: SPEC.t3.text, t4a: TO.text, t4b: SPEC.t4b.text, t4c: SPEC.t4c.text, t5: SPEC.t5.text };
    const hx = this.state.hx, hy = this.state.hy;
    const active = hx != null && this.state.view === 'top' && this.state.phase === 'run';
    const R = 170;
    const letters = {};
    for (const id in TEXTS) {
      const line = t[id], chars = Array.from(TEXTS[id]);
      const fs = line.fs, w = line.w || chars.length * fs * 0.5;
      letters['L_' + id] = chars.map((ch, i) => {
        const off = line.offs ? line.offs[i] : i * fs * 0.5;
        const cw = line.ws ? line.ws[i] : fs * 0.5;
        let tf = 'none';
        const fixed = id === 't5' && i === 4; // the n the bar grows from
        if (active && !fixed && ch !== ' ') {
          const cx = line.x + off + cw / 2, cy = line.y + fs * 0.55;
          const dx = cx - hx, dy = cy - hy, d = Math.hypot(dx, dy);
          if (d < R) {
            const f = Math.pow(1 - d / R, 2), n = d || 1;
            const push = 0.34 * fs * f;
            tf = 'translate(' + (dx / n * push).toFixed(1) + 'px,' + (dy / n * push - fs * 0.08 * f).toFixed(1) + 'px) rotate(' + ((dx >= 0 ? 1 : -1) * 16 * f).toFixed(1) + 'deg) scale(' + (1 + 0.12 * f).toFixed(3) + ')';
          }
        }
        return { ch, tf, bw: w.toFixed(1), bx: (-off).toFixed(1) };
      });
    }
    // section 4 letters: push/tilt away from the cursor while the statement is on screen
    {
      const s4 = lay && lay.s4, v = this.state.view, on4 = hx != null && (v === 's4' || v === 's5');
      const ty = 0; // statement sits above the cards
      [['a', 'The numbers tell our impact.', 63, 115 + 36], ['b', 'The stories show what it means.', 82, 115 + 71 + 8 + 47]].forEach(([k, txt, fs, cy0]) => {
        const m = s4 && s4[k], chars = Array.from(txt), w = m ? m.w : chars.length * fs * 0.48, x0 = (1440 - w) / 2;
        letters['L_s4' + k] = chars.map((ch, i) => {
          const off = m ? m.offs[i] : i * fs * 0.48, cw = m ? m.ws[i] : fs * 0.48;
          let tf = 'none';
          if (on4 && ch !== ' ') {
            const cx = x0 + off + cw / 2, cy = cy0 + ty, dx = cx - hx, dy = cy - hy, d = Math.hypot(dx, dy);
            if (d < R) { const f = Math.pow(1 - d / R, 2), n = d || 1, push = 0.34 * fs * f;
              tf = 'translate(' + (dx / n * push).toFixed(1) + 'px,' + (dy / n * push - fs * 0.08 * f).toFixed(1) + 'px) rotate(' + ((dx >= 0 ? 1 : -1) * 16 * f).toFixed(1) + 'deg) scale(' + (1 + 0.12 * f).toFixed(3) + ')'; }
          }
          return { ch, tf, bw: w.toFixed(1), bx: (-off).toFixed(1) };
        });
      });
    }
    const fin = !!this.props.showFinal;
    const view = this.state.view;
    const circle = (view === 'top' || view === 'logo') && (this.state.ready || fin);
    return {
      stageClass,
      s2Class: (fin || this.state.s2) ? 'is-s2' : '',
      s3Class: (fin || this.state.s3) ? 'is-s3' : '',
      viewClass: circle ? 'v-top' : ('v-in' + (view === 't2' ? ' v-t2' : '')),
      camY: CAM[view] ?? 0,
      go2Class: (RANK[view] ?? 0) >= 1 ? 'go2' : '',
      postClass: (this.state.ready && this.state.phase === 'run') ? 'post' : '',
      lgClass: view === 'logo' ? 'lg' : '',
      go3Class: (RANK[view] ?? 0) >= 2 ? 'go3' : '',
      s4Class: (fin || this.state.s4) ? 'is-s4' : '',
      go5Class: (RANK[view] ?? 0) >= 3 ? 'go5' : '', // cards stay put while the camera zooms into a card
      s6Class: (fin || this.state.s6) ? 'is-s6' : '',
      go6Class: (view === 's6' ? 'go6' : '') + (this.state.landing ? ' landing' : ''),
      s7Class: (fin || this.state.s7) ? 'is-s7' : '',
      lvClass: this.state.lv ? 'lv' : '', lv1: this.state.lv === 's6' ? 'lvc' : '', lv2: this.state.lv === 's7' ? 'lvc' : '', lv3: this.state.lv === 's8' ? 'lvc' : '',
      go7Class: (view === 's7' ? 'go7' : '') + (this.state.hopping ? ' hopping' : ''),
      s8Class: (fin || this.state.s8) ? 'is-s8' : '',
      go8Class: view === 's8' ? 'go8' : '',
      s9Class: (fin || this.state.s9) ? 'is-s9' : '',
      s10Class: (fin || this.state.s10) ? 'is-s10' : '',
      s11Class: (fin || this.state.s11) ? 'is-s11' : '', s12Class: (fin || this.state.s12) ? 'is-s12' : '', s13Class: (fin || this.state.s13) ? 'is-s13' : '', s14Class: (fin || this.state.s14) ? 'is-s14' : '',
      nxv: (() => { const k = this.state.nxTab || 0, X = [0, 335, 647], W = [335, 312, 308]; return { t0: k === 0 ? 'on' : '', t1: k === 1 ? 'on' : '', t2: k === 2 ? 'on' : '', x: X[k], w: W[k], p0: k === 0 ? 'on' : '', px: k === 0 ? '' : 'on', name: NX_TABS[k] }; })(),
      nxTab0: (e) => { e.stopPropagation(); this.setState({ nxTab: 0 }); }, nxTab1: (e) => { e.stopPropagation(); this.setState({ nxTab: 1 }); }, nxTab2: (e) => { e.stopPropagation(); this.setState({ nxTab: 2 }); },
      skip6: (e) => { e.stopPropagation(); if (this.state.view === 's6') this.skipTo('s7'); },
      skip7: (e) => { e.stopPropagation(); if (this.state.view === 's7') this.skipTo('s8'); },
      skip8: (e) => { e.stopPropagation(); if (this.state.view === 's8') this.skipTo('t2'); },
      topic3: (e) => { e.preventDefault(); e.stopPropagation(); if (this.state.view === 's5' && !(this.lockUntil && Date.now() < this.lockUntil)) { this.lockUntil = Date.now() + 1400; this.setState({ view: 's8' }); this.arrive8(); } },
      dcw8: { W: (this.state.lay && this.state.lay.dcW8) || 480 },
      d8: (() => {
        const st = this.state.step8 || 0, t = fin ? null : (this.state.t8 ?? null), r = {};
        DC8.forEach((d, i) => {
          r['on' + i] = st === i ? 'on' : '';
          const live = i === st && t !== null, tt = live ? t : 99;
          const pPh = live ? eOut2(Math.min(1, Math.max(0, tt / 0.8))) : 1, pC = live ? eOut1(Math.min(1, Math.max(0, (tt - (this.hold || 0)) / 1.25))) : 1, pB = live ? eOut2(Math.min(1, Math.max(0, tt / 0.8))) : 1;
          const o = { ph: ((1 - pPh) * 100).toFixed(2), bar: Math.round(d.bar * pB) };
          d.stats.forEach((v, k) => { o['c' + k] = live ? fmtCount(v, pC) : v; });
          const ls = live ? scramble(d.desc, tt - (this.hold || 0), 17 + i) : d.desc; ls.forEach((l, k) => { o['l' + k] = l; });
          r['s' + i] = o;
        });
        return r;
      })(),
      mbv: (() => {
        const k = this.state.mbTab || 0, pm = fin ? 1 : (this.state.pM ?? 1), r = { ind: [0, 64, 128, 192][k], indh: [62, 62, 62, 98][k], p0: k === 0 ? 'on' : '', px: k === 0 ? '' : 'on', name: MB_TABS[k],
          c0: fmtCount('100+', pm), c1: fmtCount('180,000+', pm) };
        MB_TABS.forEach((_, i) => { r['t' + i] = i === k ? 'on' : ''; });
        return r;
      })(),
      ...(() => { const r = {}; MB_TABS.forEach((_, i) => { r['mbTab' + i] = (e) => { e.stopPropagation(); this.setState({ mbTab: i }); }; }); return r; })(),
      ...(() => { const r = {}; DC8.forEach((d, si) => d.photos.forEach((_, pi) => { r['lb8_' + si + '_' + pi] = (e) => { e.stopPropagation(); this.setState({ lb: { t: 8, s: si, i: d.gi[pi] } }); }; })); return r; })(),
      topic2: (e) => { e.preventDefault(); e.stopPropagation(); if (this.state.view === 's5' && !(this.lockUntil && Date.now() < this.lockUntil)) { this.lockUntil = Date.now() + 1400; this.setState({ view: 's7' }); this.arrive7(); } },
      dcw7: (() => { const o = (this.state.lay && this.state.lay.dcw7) || [0, 0, -440]; const r = { W: (this.state.lay && this.state.lay.dcW7) || 846 }; o.forEach((v, i) => { r['w' + i] = v; }); return r; })(),
      d7: (() => {
        const st = this.state.step7 || 0, t = fin ? null : (this.state.t7 ?? null), r = {};
        DC7.forEach((d, i) => {
          r['on' + i] = st === i ? 'on' : '';
          const live = i === st && t !== null, tt = live ? t : 99;
          const pPh = live ? eOut2(Math.min(1, Math.max(0, tt / 0.8))) : 1, pC = live ? eOut1(Math.min(1, Math.max(0, (tt - (this.hold || 0)) / 1.25))) : 1;
          const from = this.bar7From ?? 0, pB = live ? eOut2(Math.min(1, Math.max(0, tt / 0.8))) : 1;
          const o = { ph: ((1 - pPh) * 100).toFixed(2), bar: Math.round(from + (d.bar - from) * pB) };
          d.stats.forEach((v, k) => { o['c' + k] = live ? fmtCount(v, pC) : v; });
          const ls = live ? scramble(d.desc, tt - (this.hold || 0), 11 + i) : d.desc; ls.forEach((l, k) => { o['l' + k] = l; });
          r['s' + i] = o;
        });
        return r;
      })(),
      topic1: (e) => { e.preventDefault(); e.stopPropagation(); if (this.state.view === 's5' && !(this.lockUntil && Date.now() < this.lockUntil)) { this.lockUntil = Date.now() + 1400; this.setState({ view: 's6' }); this.arrive6(); } }, // always opens story 1
      dcw: (() => { const o = (this.state.lay && this.state.lay.dcw) || [0, -380, -720, 0, -130, -330]; const r = { W: (this.state.lay && this.state.lay.dcW) || 1014 }; o.forEach((v, i) => { r['w' + i] = v; }); return r; })(),
      d6: (() => {
        const st = this.state.step6 || 0, t = fin ? null : (this.state.t6 ?? null), r = {};
        DC.forEach((d, i) => {
          r['on' + i] = st === i ? 'on' : '';
          const live = i === st && t !== null, tt = live ? t : 99;
          const pPh = live ? eOut2(Math.min(1, Math.max(0, tt / 0.8))) : 1, pC = live ? eOut1(Math.min(1, Math.max(0, (tt - (this.hold || 0)) / 1.25))) : 1;
          const from = this.bar6From ?? 0, pB = live ? eOut2(Math.min(1, Math.max(0, tt / 0.8))) : 1;
          const o = { ph: ((1 - pPh) * 100).toFixed(2), bar: Math.round(from + (d.bar - from) * pB) };
          d.stats.forEach((v, k) => { o['c' + k] = live ? fmtCount(v, pC) : v; });
          const ls = live ? scramble(d.desc, tt - (this.hold || 0), 7 + i) : d.desc; ls.forEach((l, k) => { o['l' + k] = l; });
          r['s' + i] = o;
        });
        return r;
      })(),
      lbv: (() => {
        const lb = this.state.lb, d = (lb && lb.t === 8 ? DC8 : lb && lb.t === 7 ? DC7 : DC)[lb ? lb.s : 0], g = d.gallery, k = lb ? lb.i : 0, r = { cls: lb ? 'open' : '', src: g[k], alt: 'Photo ' + (k + 1) + ' of ' + g.length };
        for (let i = 0; i < 7; i++) { r['t' + i] = g[i] || g[0]; r['c' + i] = i >= g.length ? 'none' : (i === k ? 'sel' : ''); }
        return r;
      })(),
      lbClose: (e) => { e.stopPropagation(); this.setState({ lb: null }); },
      ...(() => { const r = {}; for (let i = 0; i < 7; i++) r['lbT' + i] = (e) => { e.stopPropagation(); if (this.state.lb) this.setState({ lb: { ...this.state.lb, i } }); }; return r; })(),
      ...(() => { const r = {}; DC7.forEach((d, si) => d.photos.forEach((_, pi) => { r['lb7_' + si + '_' + pi] = (e) => { e.stopPropagation(); this.setState({ lb: { t: 7, s: si, i: d.gi[pi] } }); }; })); return r; })(),
      ...(() => { const r = {}; DC.forEach((d, si) => d.photos.forEach((_, pi) => { r['lb_' + si + '_' + pi] = (e) => { e.stopPropagation(); this.setState({ lb: { s: si, i: d.gi[pi] } }); }; })); return r; })(),
      lw: lay ? lay.lW : 9,
      bar3: (() => { const w = lay ? lay.lW : 9, top = STEM_TOP, bot = lay ? lay.lBase : GLANCE_BASE; // the bar becomes the L's whole upright
        return { x: +(CUE_X - w / 2).toFixed(2), y: +top.toFixed(2), w, h: +(bot - top).toFixed(2), r: 0 }; })(),
      cd,
      next: () => this.go(1),
      noop: (e) => { e.preventDefault(); e.stopPropagation(); },
      cur2: (() => { const on = view === 't2' && hx != null; return { x: ((hx ?? 720) - 60).toFixed(1), y: ((hy ?? 450) - 60).toFixed(1), o: on ? 1 : 0, s: on ? 1 : 0.4 }; })(),
      cur: { x: ((hx ?? 720) - 60).toFixed(1), y: ((hy ?? 450) - 60).toFixed(1), o: (circle && hx != null) ? 1 : 0, s: (circle && hx != null) ? 1 : 0.4 },
      wheel: (e) => { if (Math.abs(e.deltaY) < 4) return; this.go(e.deltaY > 0 ? 1 : -1); },
      tap: () => { if (this.state.view === 'top' || this.state.view === 'logo' || this.state.view === 't2') this.go(1); },
      touchStart: (e) => { this.ty = e.touches && e.touches[0] ? e.touches[0].clientY : null; },
      touchEnd: (e) => {
        const y = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientY : null;
        if (this.ty == null || y == null) return;
        if (Math.abs(this.ty - y) > 30) this.go(this.ty > y ? 1 : -1);
      },
      t,
      ...letters,
      agmTop: lay ? lay.agmTop : 556,
      bar: { x: barX, y: barTop, w: barW, h: barH, clip },
      // section 2 starts as exactly the bar's rectangle, then opens to the full frame
      wipe: lay && lay.wipe ? lay.wipe : { l: 45, r: 45 },
      bloomX: (+barX + barW / 2).toFixed(2),
      head: { x: head.x, y: head.y, ox: head.ox, oy: head.oy, s: 1 },
      v: (() => {
        const st = this.state.step, q = (i) => (st === i ? p : 1);
        const K = (n, i, suf) => Math.round(n * q(i)) + suf;
        const C = (n, i) => Math.round(n * q(i)).toLocaleString('en-US');
        return { m1: K(417, 0, 'K'), m2: K(86, 0, '%'), o1: (1.72 * q(1)).toFixed(2) + 'M', o2: K(75, 1, 'K'), o3: K(211, 1, 'K'), o4: K(52, 1, 'K'),
          s1: C(1074, 2) + ' MWh', s2: K(432, 2, ' Tonnes'), s3: C(6850, 2) };
      })(),
      sl0: this.state.step === 0 ? 'on' : '', sl1: this.state.step === 1 ? 'on' : '', sl2: this.state.step === 2 ? 'on' : '',
      sweepS: ((this.state.step + 1) / 3).toFixed(4),
      freshClass: this.state.fresh ? 'fresh' : '',
      dirClass: this.state.dirB ? 'dirb' : '',
      pFamily: tr(-18),
      pConcert: tr(-30),
      pKids: tr(-24),
      pTyres: tr(-36),
      pp: (() => { const v = this.state.view, on = v === 's6' || v === 's7' || v === 's8', f = (d) => on ? (mx * d * k).toFixed(1) + 'px ' + (my * d * k).toFixed(1) + 'px' : '0px 0px'; return { d0: f(-14), d1: f(-24), d2: f(-20) }; })(), // section 6/7 photos drift with the cursor
      move: (e) => {
        if (!this.root) { this.root = e.currentTarget; requestAnimationFrame(() => this.measure()); }
        const r = e.currentTarget.getBoundingClientRect();
        if (!r.width) return;
        const s = 1440 / r.width;
        this.setState({ mx: (e.clientX - r.left) / r.width - 0.5, my: (e.clientY - r.top) / (r.width * 0.625) - 0.5, hx: (e.clientX - r.left) * s, hy: (e.clientY - r.top) * s });
        this.hvMove((e.clientX - r.left) * s, (e.clientY - r.top) * s, s);
        const tc = e.target && e.target.closest ? e.target.closest('.tc') : null; this.cardStack(this.state.view === 's5' ? tc : null);
      },
      leave: () => { this.setState({ mx: 0, my: 0, hx: null, hy: null }); this.hvMove(null, null, 1); this.cardStack(null); },
      hook: (e) => {
        try { const r = e.currentTarget.closest('.mh'); if (r) { this.root = r; requestAnimationFrame(() => this.measure()); } } catch (err) {}
      },
      L: lay && lay.Ld ? lay.Ld : { sx: 6, st: 6, sw: 9, sh: 52, ft: 49, fw: 32, fh: 9 },
      replay: () => this.restart()
    };
  }
}
