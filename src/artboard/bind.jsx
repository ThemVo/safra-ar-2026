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
