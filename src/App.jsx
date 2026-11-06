import { useEffect, useRef, useState } from 'react';
import Artboard from './artboard/Artboard.jsx';

// Two layouts share one artboard:
// - desktop (window 768px and wider): the 1440 × 900 comp, scaled down to fit (never above 100%, so the content
//   is at most 1440px wide); section backgrounds stretch out to fill the full window width.
// - mobile (narrower than 768px): a 390 × 844 portrait frame with 16px margins, scaled to fit the screen the same way.
// The Desktop / Mobile toggle overrides the automatic choice (e.g. to preview the mobile layout on a desktop screen).
const MOBILE_MAX = 767;
const FRAME = { d: [1440, 900], m: [390, 844] };
const KEY = 'safra-ar-layout';
// A host page can set window.__SAFRA_DESKTOP_ONLY = true to ship the desktop layout only (no mobile, no toggle).
const DESKTOP_ONLY = typeof window !== 'undefined' && window.__SAFRA_DESKTOP_ONLY === true;
const readPick = () => { try { const v = localStorage.getItem(KEY); return v === 'desktop' || v === 'mobile' ? v : null; } catch (e) { return null; } };

export default function App() {
  const wrap = useRef(null);
  const [pick, setPick] = useState(readPick); // null = automatic
  const [narrow, setNarrow] = useState(() => window.innerWidth <= MOBILE_MAX);
  const [gx, setGx] = useState(0);
  const mobile = DESKTOP_ONLY ? false : pick ? pick === 'mobile' : narrow;
  // mobile layout on a wide screen: shown as a phone-sized preview instead of stretched across the window
  const preview = mobile && !narrow;

  useEffect(() => {
    const fit = () => {
      setNarrow(window.innerWidth <= MOBILE_MAX);
      const el = wrap.current; if (!el) return;
      const [fw, fh] = mobile ? FRAME.m : FRAME.d;
      const vw = window.innerWidth, vh = window.innerHeight;
      const k = preview ? Math.min(1, (vh - 96) / fh) : mobile ? Math.min(vw / fw, vh / fh) : Math.min(1, vw / fw, vh / fh);
      const g = preview ? 0 : Math.max(0, (vw / k - fw) / 2); // side gutter, in artboard pixels
      el.style.width = fw + 'px'; el.style.height = fh + 'px';
      el.style.transform = `scale(${k})`;
      el.style.setProperty('--gx', `${g.toFixed(2)}px`);
      setGx(+g.toFixed(2));
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [mobile, preview]);

  const choose = (v) => {
    const next = (v === 'mobile') === narrow ? null : v; // picking what the screen would show anyway = back to automatic
    setPick(next);
    try { next ? localStorage.setItem(KEY, next) : localStorage.removeItem(KEY); } catch (e) {}
  };

  return (
    <div className={'stage' + (mobile ? ' stage-m' : '') + (preview ? ' stage-preview' : '')}>
      <div className="wrap" id="wrap" ref={wrap}>
        {/* switching layout remounts the artboard so it starts fresh in the new geometry */}
        <Artboard key={mobile ? 'm' : 'd'} mobile={mobile} gx={gx} />
      </div>
      {!DESKTOP_ONLY && <div className="layout-toggle" role="radiogroup" aria-label="Layout">
        {['desktop', 'mobile'].map((v) => (
          <button key={v} type="button" role="radio" aria-checked={(v === 'mobile') === mobile} className={(v === 'mobile') === mobile ? 'on' : ''} onClick={() => choose(v)}>
            {v === 'desktop' ? 'Desktop' : 'Mobile'}
          </button>
        ))}
      </div>}
    </div>
  );
}
