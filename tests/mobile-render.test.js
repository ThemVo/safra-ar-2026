import test from 'node:test';
import assert from 'node:assert/strict';
import { buildSync } from 'esbuild';
import { createRequire } from 'node:module';
import { mkdtempSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Render the actual JSX so missing content, gallery assets and unwanted controls are caught.
const bundle = buildSync({
  stdin: {
    contents: `
      import { renderToStaticMarkup } from 'react-dom/server';
      import render from './src/artboard/templateMobile.jsx';
      import { ArtboardLogic } from './src/artboard/ArtboardLogic.js';
      export function markup(view, index = 0, extra = {}) {
        const logic = new ArtboardLogic({mobile:true, showFinal:true});
        logic.state = {...logic.state, view, s3:true, step:index, step6:index, step7:index, step8:index, ...extra};
        return renderToStaticMarkup(render(logic.renderVals()));
      }
    `,
    resolveDir: process.cwd(),
  },
  bundle: true,
  write: false,
  format: 'cjs',
  platform: 'node',
  jsx: 'automatic',
  define: { 'import.meta.env.URL_PDF': '"annual-report.pdf"', 'process.env.NODE_ENV': '"production"' },
});
const file = join(mkdtempSync(join(tmpdir(), 'safra-mobile-')), 'render.cjs');
writeFileSync(file, bundle.outputFiles[0].text);
const { markup } = createRequire(import.meta.url)(file);

function verifyAssets(html) {
  for (const [, src] of html.matchAll(/src="\.\/assets\/([^"?]+)"/g)) {
    const path = join(process.cwd(), 'public/assets', src);
    assert.ok(existsSync(path) && statSync(path).size > 0, `missing asset: ${src}`);
  }
}

test('all fourteen mobile stories render their own content and galleries without added navigation', () => {
  for (const [view, count] of [['s6',4],['s7',4],['s8',6]]) {
    for (let i = 0; i < count; i++) {
      const html = markup(view, i);
      assert.match(html, /mobile-story-panel/);
      assert.match(html, /mobile-story-photo/);
      assert.match(html, /Back to the topics/);
      assert.doesNotMatch(html, /Previous|Next story|NEXT:|mobile-story-pager|Continue/);
      verifyAssets(html);
      const gallery = markup(view, i, {lb:{t:Number(view.slice(1)),s:i,i:0}});
      assert.match(gallery, /role="dialog"/);
      verifyAssets(gallery);
    }
  }
});

test('main screens retain content and long sections expose native scrolling', () => {
  for (const view of ['top','tg','s3','s5','mb','fc1','wc','nx','lf2','lf3','end']) {
    const html = markup(view);
    assert.match(html, /mobile-content/);
    verifyAssets(html);
    assert.doesNotMatch(html, /mobile-continue|mobile-next-topic/);
    if (['s5','fc1','wc','nx','lf2','lf3','end'].includes(view)) assert.match(html, /<main[^>]+data-mobile-scroll="true"/);
    else assert.doesNotMatch(html, /<main[^>]+data-mobile-scroll/);
    if (view === 'mb') assert.match(html, /class="mobile-membership-cards" data-mobile-scroll="true"/);
  }
  const opened = markup('mb', 0, {mbTab:0});
  assert.match(opened, /mobile-offer-grid/);
  assert.match(opened, /Hawker discount day/);
  for (let i = 0; i < 3; i++) verifyAssets(markup('s3',i));
});

test('Initiatives stops before the continuous With commitment and Looking forward sections', () => {
  const initiatives = markup('s5');
  assert.match(initiatives, /<main[^>]+future-gated/);
  for (const view of ['s5', 'wc', 'nx']) {
    const html = markup(view);
    const sections = [...html.matchAll(/<section id="([^"]+)"/g)].map(match => match[1]);
    assert.deepEqual(sections, ['initiatives', 'with-commitment', 'looking-forward']);
    assert.equal((html.match(/<main\b/g) || []).length, 1);
  }
});

test('Clubs keeps future content in the same scroll container behind its bottom stop', () => {
  const html = markup('fc1');
  assert.match(html, /<main[^>]+future-gated/);
  assert.deepEqual([...html.matchAll(/<section id="([^"]+)"/g)].map(match => match[1]), ['clubs-and-facilities', 'with-commitment', 'looking-forward']);
  assert.equal((html.match(/<main\b/g) || []).length, 1);
  verifyAssets(html);
});

test('Looking forward keeps the intro behind the priority circle during reverse navigation', () => {
  const html = markup('nx', 0, {lf1:true});
  assert.match(html, /mobile-forward-base[^>]+inert=""[^>]+aria-hidden="true"/);
  assert.match(html, /mobile-priority-reveal/);
  assert.match(html, /id="looking-forward-story-1"/);
  assert.match(html, /priority-locked/);
  assert.doesNotMatch(html, /<main[^>]+data-mobile-scroll/);
  const intro = markup('nx', 0, {lf1:false});
  assert.match(intro, /mobile-priority-reveal[^>]+inert=""[^>]+aria-hidden="true"/);
});


test('Annual Report follows Supporting NSmen inside one native scroll container', () => {
  const html = markup('end', 0, {lf3s:2});
  assert.equal((html.match(/<main\b/g) || []).length, 1);
  assert.ok(html.indexOf('id="supporting-nsmen"') < html.indexOf('id="annual-report"'));
  assert.match(html, /<main[^>]+data-mobile-scroll="true"/);
  assert.doesNotMatch(markup('lf3', 0, {lf3s:2}), /class="mobile-footer"/);
});
