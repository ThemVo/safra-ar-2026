// Small helpers the markup uses to read bound values the same way the prototype's template did.

// Text binding: strings and numbers render in a span.sc-interp, null/boolean/undefined render nothing.
export function T({ v }) {
  if (v === undefined || v === null || typeof v === 'boolean') return null;
  return <span className="sc-interp">{String(v)}</span>;
}

// List binding: anything that isn't an array renders as an empty list.
export const arr = (x) => (Array.isArray(x) ? x : []);

// Missing values inside a mixed attribute or style read as ''.
export const s = (x) => x ?? '';

// A whole inline style built from a string at render time.
export function css(str) {
  const out = {};
  for (const d of String(str).split(';')) {
    const i = d.indexOf(':');
    if (i < 0) continue;
    const k = d.slice(0, i).trim();
    out[k.startsWith('--') ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = d.slice(i + 1).trim();
  }
  return out;
}

// Stretch a 1440-wide band path (absolute M/C/H/L commands) out to the window edges: points in the outer
// 108px on each side move out by `gx`, so the corners land at the edges and the middle stays put.
export function bleedPath(d, gx) {
  const g = gx || 0;
  if (!g) return d;
  const sx = (x) => (x >= 1332 ? x + g : x <= 108 ? x - g : x);
  return d.replace(/([MCLHVZ])([^MCLHVZ]*)/gi, (_, cmd, args) => {
    const n = args.trim() ? args.trim().split(/[\s,]+/).map(Number) : [];
    if (cmd === 'H') return 'H' + n.map(sx).join(' ');
    if (cmd === 'V' || cmd === 'Z' || cmd === 'z') return cmd + args;
    return cmd + n.map((v, i) => (i % 2 === 0 ? sx(v) : v)).join(' ');
  });
}

// Mobile version of the same band: drawn at 60% size across the 390px frame. The bump stays centred, the outer
// corners sit at the frame edges (plus `gx` beyond them on wider phones), the straight runs stretch in between.
export function tongueM(d, gx) {
  const k = 0.6, W = 390, g = gx || 0;
  const sx = (x) => (x >= 1332 ? W + g - (1440 - x) * k : x <= 108 ? -g + x * k : W / 2 + (x - 720) * k);
  const r = (v) => +v.toFixed(2);
  return d.replace(/([MCLHVZ])([^MCLHVZ]*)/gi, (_, cmd, args) => {
    const n = args.trim() ? args.trim().split(/[\s,]+/).map(Number) : [];
    if (cmd === 'H') return 'H' + n.map((x) => r(sx(x))).join(' ');
    if (cmd === 'V') return 'V' + n.map((y) => r(y * k)).join(' ');
    if (cmd === 'Z' || cmd === 'z') return cmd + args;
    return cmd + n.map((v, i) => r(i % 2 === 0 ? sx(v) : v * k)).join(' ');
  });
}
