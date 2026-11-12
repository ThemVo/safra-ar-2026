// Stable fragment IDs shared by both layouts. No native scrolling: the artboard owns its camera.
export const SECTION_IDS = {
  top: 'masthead', logo: 'safra-logo', tg: 'at-a-glance-intro', s3: 'at-a-glance',
  s5: 'initiatives', s6: 'bringing-defence-closer', s7: 'appreciating-nsmen',
  s8: 'strengthening-bonds', mb: 'rewarding-privileges', fc1: 'clubs-and-facilities',
  wc: 'with-commitment', end: 'annual-report',
};
const ALIASES = { 'glance-title': 's3', 't1-title': 's5', 'dc-title': 's6', 'an-title': 's7', 'sb-title': 's8', 'mb-title': 'mb', 'fc-title': 'fc1', 'wc-title': 'wc', 'end-title': 'end' };
export const screenId = (view, index) => `${SECTION_IDS[view]}-${view === 's3' ? 'panel' : view === 'mb' ? 'card' : 'story'}-${index + 1}`;
export function routeHash(state) {
  if (state.view === 'top' || state.view === 'logo') return '';
  const view = state.view === 't2' ? 'fc1' : state.view === 's4' ? 's5' : state.view === 'fc2' ? 'fc1' : state.view;
  let id = SECTION_IDS[view];
  if (!id) return null;
  const key = { s3: 'step', s6: 'step6', s7: 'step7', s8: 'step8', mb: 'mbTab' }[view];
  if (key && (view === 'mb' ? state[key] >= 0 : state[key] > 0)) id = screenId(view, state[key]);
  const params = new URLSearchParams();
  if (state.lb && ['s6', 's7', 's8'].includes(view)) params.set('photo', state.lb.i + 1);
  if (view === 'fc1' && state.fcY > 0) params.set('offset', Math.round(state.fcY));
  return `#${id}${params.size ? '?' + params : ''}`;
}
export function parseRoute(hash, mobile = false) {
  let fragment;
  try { fragment = decodeURIComponent(hash.replace(/^#/, '')); } catch { return null; }
  const [id, query = ''] = fragment.split('?');
  let view = Object.keys(SECTION_IDS).find((v) => SECTION_IDS[v] === id) || ALIASES[id];
  let index = null;
  if (!view) {
    for (const v of ['s3', 's6', 's7', 's8', 'mb']) {
      const max = { s3: 3, s6: 4, s7: mobile ? 1 : 4, s8: mobile ? 1 : 6, mb: 4 }[v];
      // A desktop-only story falls back to the topic's first available mobile story.
      for (let i = 0; i < ({ s3: 3, s6: 4, s7: 4, s8: 6, mb: 4 }[v]); i++) {
        if (screenId(v, i) === id) { view = v; index = i < max ? i : 0; break; }
      }
      if (view) break;
    }
  }
  if (!view) return null;
  const params = new URLSearchParams(query);
  const positive = (key) => /^\d+$/.test(params.get(key) || '') ? Number(params.get(key)) : 0;
  return { view, index, photo: positive('photo'), offset: positive('offset') };
}
