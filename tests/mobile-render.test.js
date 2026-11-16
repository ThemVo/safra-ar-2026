import test from 'node:test';
import assert from 'node:assert/strict';
import { build, buildSync } from 'esbuild';
import viteConfig from '../vite.config.js';
import { createRequire } from 'node:module';
import { mkdtempSync, writeFileSync, existsSync, statSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Render the actual JSX so missing content, gallery assets and unwanted controls are caught.
const renderOptions = {
  stdin: {
    contents: `
      import { renderToStaticMarkup } from 'react-dom/server';
      import render from './src/artboard/templateMobile.jsx';
      import { ArtboardLogic } from './src/artboard/ArtboardLogic.js';
      export function markup(view, index = 0, extra = {}, showFinal = true) {
        const logic = new ArtboardLogic({mobile:true, showFinal});
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
  define: { 'import.meta.env.URL_PDF': '"annual-report.pdf"', 'import.meta.env.URL_IMAGE': '"./assets/"', 'import.meta.env.URL_SVG': '"./assets/"', 'process.env.NODE_ENV': '"production"' },
};
const bundle = buildSync(renderOptions);
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
  const education = markup('mb', 0, {mbTab:1});
  assert.match(education, /class="mbc"/);
  assert.match(education, /mobile-education-icon\.svg/);
  assert.match(education, /mobile-education-recipients\.png/);
  verifyAssets(education);
  for (let i = 0; i < 3; i++) verifyAssets(markup('s3',i));
});

test('Initiatives stops before the continuous With commitment and Looking forward sections', () => {
  const initiatives = markup('s5');
  assert.match(initiatives, /<main[^>]+future-gated/);
  for (const view of ['s5', 'wc']) {
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


test('mobile priority stack keeps all three stories mounted with only the active screen interactive', () => {
  for (const view of ['nx', 'lf2', 'lf3', 'end']) {
    const html = markup(view, 0, {lf1:true});
    assert.match(html, /id="looking-forward-story-1"/);
    assert.match(html, /id="strengthening-commitment"/);
    assert.match(html, /id="supporting-nsmen"/);
    const screens = [...html.matchAll(/<main\b[^>]*>/g)].map(match => match[0]);
    assert.equal(screens.length, 3);
    const active = screens.filter(screen => !screen.includes('aria-hidden="true"'));
    assert.equal(active.length, 1, 'only one screen is exposed to assistive technology');
    assert.doesNotMatch(active[0], /inert=""/);
    screens.filter(screen => screen.includes('aria-hidden="true"')).forEach(screen => assert.match(screen, /inert=""/));
    if (view !== 'nx') {
      assert.match(active[0], /data-mobile-scroll="true"/);
      assert.ok(active[0].includes(`screen-${view}`));
    } else {
      assert.doesNotMatch(active[0], /data-mobile-scroll/);
    }
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, 'mounted layers retain unique fragment targets');
  }
});

test('Annual Report follows Supporting NSmen inside one native scroll container', () => {
  const html = markup('end', 0, {lf3s:2});
  const activeScreens = [...html.matchAll(/<main\b[^>]*>/g)].filter(match => !match[0].includes('aria-hidden="true"'));
  assert.equal(activeScreens.length, 1);
  assert.ok(html.indexOf('id="supporting-nsmen"') < html.indexOf('id="annual-report"'));
  assert.match(html, /<main[^>]+data-mobile-scroll="true"/);
  for (const view of ['end', 'lf3', 'lf2']) {
    const content = markup(view, 0, {lf3s:2});
    const list = content.match(/<div class="(?:lf3s lfp3|lfp lf2l)"[^>]*>/)?.[0];
    assert.ok(list, `${view} contains its story list`);
    assert.doesNotMatch(list, /(?:^|[;"\s])overflow(?:-y|-x)?:/, `${view} must let the main screen own scrolling over copy`);
  }
  assert.doesNotMatch(markup('lf3', 0, {lf3s:2}), /class="mobile-footer"/);
});


test('mobile build paths cover dynamic photos, SVG controls and all four videos in each mode', async () => {
  for (const mode of ['production', 'uat', 'prod']) {
    const config = viteConfig({mode, command:'build'});
    const transform = config.plugins.find(plugin => plugin.name === 'content-image-paths').transform;
    const result = await build({
      ...renderOptions,
      define: {...renderOptions.define, ...config.define},
      plugins: [{name:'actual-build-paths', setup(builder) {
        builder.onLoad({filter:/\/src\/.*\.[jt]sx?$/}, ({path}) => ({
          contents:transform(readFileSync(path, 'utf8'), path).code,
          loader:path.endsWith('.jsx') ? 'jsx' : 'js',
        }));
      }}],
    });
    const output = join(mkdtempSync(join(tmpdir(), 'safra-build-paths-')), 'render.cjs');
    writeFileSync(output, result.outputFiles[0].text);
    const {markup:renderBuilt} = createRequire(import.meta.url)(output);
    const imagePrefix = JSON.parse(config.define['import.meta.env.URL_IMAGE']);
    const svgPrefix = JSON.parse(config.define['import.meta.env.URL_SVG']);
    function verify(html) {
      const sources = [...html.matchAll(/src="([^"?]+)"/g)].map(match => match[1]);
      assert.ok(sources.length > 0);
      for (const src of sources) {
        const filename = src.slice(src.lastIndexOf('/') + 1);
        const prefix = filename.endsWith('.svg') ? svgPrefix : imagePrefix;
        assert.equal(src, prefix + filename, `${mode}: ${src}`);
        assert.ok(existsSync(join(process.cwd(), 'public/assets', filename)), filename);
      }
    }
    for (const [view,count] of [['s6',4],['s7',4],['s8',6]]) {
      for (let index = 0; index < count; index++) {
        verify(renderBuilt(view,index));
        verify(renderBuilt(view,index,{lb:{t:Number(view.slice(1)),s:index,i:0}}));
      }
    }
    for (const view of ['top','s3','s5','mb','fc1','wc','nx','lf2','lf3','end']) verify(renderBuilt(view));
    for (let i = 0; i < 4; i++) {
      const video = renderBuilt('s7',1,{lb:{t:7,s:1,i}});
      assert.match(video, /<video/);
      assert.match(video, /\.mp4/);
      verify(video);
    }
  }
});


test('all initiative stories bind image, title, count and copy to the desktop entrance timeline', () => {
  for (const [view, count] of [['s6',4],['s7',4],['s8',6]]) {
    for (let i = 0; i < count; i++) {
      const start = markup(view, i, {[`t${view.slice(1)}`]:0}, false);
      const middle = markup(view, i, {[`t${view.slice(1)}`]:0.4}, false);
      const end = markup(view, i, {[`t${view.slice(1)}`]:null}, false);
      assert.match(start, /translateY\(100(?:\.00)?%\)/, `${view}-${i}: image starts below its crop`);
      assert.match(start, /translateY\(24\.0px\).*?opacity:0\.000/, `${view}-${i}: copy starts hidden`);
      assert.match(middle, /translateY\(12\.50%\)/, `${view}-${i}: image follows desktop easing`);
      assert.doesNotMatch(end, /translateY\(24\.0px\)|opacity:0\.000/);
      assert.notEqual(start, middle);
      assert.notEqual(middle, end);
    }
  }
});
