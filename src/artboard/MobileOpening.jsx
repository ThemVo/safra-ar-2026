import { useLayoutEffect, useRef } from 'react';
import { SECTION_IDS } from './routes.js';

// Measure the actual font ink, as the desktop connector does. In particular,
// the n's right stem and the L's upright must share the connector's edges.
function glyph(ch, style) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 240;
  const ctx = canvas.getContext('2d');
  ctx.font = `${style.fontWeight} 100px ${style.fontFamily}`;
  ctx.fillText(ch, 20, 150);
  const metrics = ctx.measureText(ch);
  const pixels = ctx.getImageData(0, 0, 240, 240).data;
  const runs = y => {
    const result = [];
    let start = -1;
    for (let x = 0; x <= 240; x++) {
      const ink = x < 240 && pixels[(Math.round(y) * 240 + x) * 4 + 3] > 128;
      if (ink && start < 0) start = x;
      if (!ink && start >= 0) { result.push([start - 20, x - 20]); start = -1; }
    }
    return result;
  };
  return { metrics, runs };
}
function position(el, root) {
  let x = 0, y = 0;
  for (; el && el !== root; el = el.offsetParent) { x += el.offsetLeft; y += el.offsetTop; }
  return { x, y };
}

export default function MobileOpening({ view, masthead, panel }) {
  const scene = useRef(null);
  useLayoutEffect(() => {
    const root = scene.current;
    let disposed = false;
    const measure = () => {
      if (disposed) return;
      root.classList.add('opening-measuring');
      const height = root.clientHeight;
      // Update the camera's section height before reading the title's new position.
      root.style.setProperty('--opening-height', `${height}px`);
      // Layout height excludes the intro animation's transforms and blur.
      const logo = root.querySelector('.mobile-logo');
      root.style.setProperty('--masthead-text-height', `${logo.offsetHeight}px`);
      const n = root.querySelector('.mobile-n-stem');
      const title = root.querySelector('.mobile-linked-title');
      const l = root.querySelector('.mobile-l-glyph');
      const ns = getComputedStyle(n), ls = getComputedStyle(title);
      const ng = glyph('n', ns), lg = glyph('L', ls);
      const nr = ng.runs(142).at(-1), lr = lg.runs(150 - lg.metrics.actualBoundingBoxAscent / 2)[0];
      const foot = lg.runs(148)[0];
      if (!nr || !lr || !foot) { root.classList.remove('opening-measuring'); return; }
      const nk = parseFloat(ns.fontSize) / 100, lk = parseFloat(ls.fontSize) / 100;
      const np = position(n, root), lp = position(l, root), tp = position(title, root);
      const baseline = (style, metrics, k) => (parseFloat(style.lineHeight) - (metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent) * k) / 2 + metrics.fontBoundingBoxAscent * k;
      const nBase = np.y + baseline(ns, ng.metrics, nk);
      const lBase = tp.y + baseline(ls, lg.metrics, lk);
      const nX = np.x + (nr[0] + nr[1]) / 2 * nk;
      const lX = lp.x + (lr[0] + lr[1]) / 2 * lk;
      const lineTop = nBase - 12 * nk;
      // Match the masthead text at every viewport width, including its font weight.
      const bigScale = parseFloat(ns.fontSize) / parseFloat(ls.fontSize);
      const bigBase = height * 1.55;
      const values = {
        '--opening-height': `${height}px`, '--link-x': `${lX}px`, '--link-top': `${lineTop}px`,
        '--link-width': `${(nr[1] - nr[0]) * nk}px`, '--link-height': `${lBase - lineTop}px`,
        '--link-dx': `${nX - lX}px`,
        '--title-origin-x': `${lX - tp.x}px`, '--title-origin-y': `${lBase - tp.y}px`,
        '--title-big-scale': bigScale, '--title-big-y': `${bigBase - lBase}px`,
        '--link-big-y-scale': (bigBase - lineTop) / (lBase - lineTop),
        '--l-foot-left': `${lr[0] * lk}px`, '--l-foot-top': `${baseline(ls, lg.metrics, lk) - 7 * lk}px`,
        '--l-foot-width': `${(foot[1] - lr[0]) * lk}px`, '--l-foot-height': `${7 * lk}px`,
      };
      for (const [key, value] of Object.entries(values)) root.style.setProperty(key, value);
      // Resize/font changes should update both ends together, without interpolating
      // from geometry measured for the previous viewport.
      root.querySelector('.mobile-link-size').getBoundingClientRect();
      root.querySelector('.mobile-linked-heading').getBoundingClientRect();
      root.classList.remove('opening-measuring');
    };
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    observer.observe(root.querySelector('.mobile-logo'));
    measure();
    document.fonts.ready.then(measure);
    return () => { disposed = true; observer.disconnect(); };
  }, []);
  const glance = view === 'tg' || view === 's3';
  return <div ref={scene} className={`mobile-opening ${glance ? 'opening-glance' : ''} ${view === 's3' ? 'opening-details' : ''}`}>
    <div className="mobile-opening-camera">
      <div className="mobile-opening-masthead" inert={glance ? '' : undefined} aria-hidden={glance || undefined}>{masthead}</div>
      <section id={SECTION_IDS.s3} className="mobile-glance mobile-opening-panel" inert={view !== 's3' ? '' : undefined} aria-hidden={view !== 's3' || undefined} aria-labelledby="glance-title">{panel}</section>
      <span className="mobile-link-position" aria-hidden="true"><span className="mobile-link-size"><span className="mobile-link-grow" /></span></span>
      <div id={SECTION_IDS.tg} className="mobile-linked-heading" aria-hidden={!glance || undefined}>
        <h2 id="glance-title" className="mobile-linked-title mobile-gradient" aria-label="At a glance">AT A G<span className="mobile-l"><span className="mobile-l-glyph">L</span><span className="mobile-l-foot" aria-hidden="true" /></span>ANCE</h2>
      </div>
    </div>
  </div>;
}
