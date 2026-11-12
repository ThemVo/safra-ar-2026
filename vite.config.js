import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { posix } from 'node:path';
import { readdirSync, readFileSync } from 'node:fs';

const withSlash = (value) => `${value.replace(/\/+$/, '')}/`;

export default defineConfig(({ mode, command }) => {
  const env = { ...loadEnv(mode, process.cwd(), 'URL_'), ...process.env };
  const paths = {
    image: withSlash(env.URL_IMAGE || './'),
    svg: withSlash(env.URL_SVG || env.URL_IMAGE || './'),
    css: withSlash(env.URL_CSS || './'),
    js: withSlash(env.URL_JS || './'),
  };
  const kindOf = (filename) => /\.css$/i.test(filename)
    ? 'css'
    : /\.[cm]?js$/i.test(filename)
      ? 'js'
      : /\.svg$/i.test(filename)
        ? 'svg'
        : 'image';
  const folderFor = (kind) => mode === 'uat'
    ? 'assets'
    : mode === 'prod'
      ? ({ svg: 'icons', image: 'imags', css: 'assets', js: 'assets' })[kind]
      : '';
  const outputPath = (filename) => posix.join(folderFor(kindOf(filename)), filename);

  return {
    base: './',
    publicDir: command === 'build' ? false : 'public',
    build: {
      assetsDir: '',
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          entryFileNames: outputPath('[name]-[hash].js'),
          chunkFileNames: outputPath('[name]-[hash].js'),
          assetFileNames: (asset) => outputPath(asset.name || 'asset')
            .replace(/[^/]+$/, '[name]-[hash][extname]'),
        },
      },
    },
    define: {
      'import.meta.env.URL_PDF': JSON.stringify(env.URL_PDF || '#'),
    },
    plugins: [
      {
        name: 'content-image-paths',
        apply: 'build',
        // Public images in the templates and story data are runtime strings.
        // Vite does not rewrite those, so apply URL_IMAGE before compiling JSX.
        enforce: 'pre',
        generateBundle() {
          const emitDirectory = (directory, prefix = '') => {
            for (const entry of readdirSync(directory, { withFileTypes: true })) {
              const filename = posix.join(prefix, entry.name);
              if (entry.isDirectory()) {
                emitDirectory(`${directory}/${entry.name}`, filename);
              } else {
                this.emitFile({
                  type: 'asset',
                  fileName: outputPath(filename),
                  source: readFileSync(`${directory}/${entry.name}`),
                });
              }
            }
          };
          emitDirectory('public/assets');
        },
        transform(code, id) {
          if (!/\/src\/.*\.[jt]sx?(?:\?|$)/.test(id)) return;
          return {
            code: code.replace(
              /(["'])\.\/assets\/([^"'\n]+)\1/g,
              (_, quote, file) => JSON.stringify(`${/\.svg(?:[?#]|$)/i.test(file) ? paths.svg : paths.image}${file}`),
            ),
            map: null,
          };
        },
      },
      react(),
      {
        name: 'content-before-entry-script',
        // Vite normally hoists the entry into <head>; keep report HTML first.
        transformIndexHtml: {
          order: 'post',
          handler(html) {
            const scripts = [];
            const content = html.replace(/<script\b(?=[^>]*\btype="module")(?=[^>]*\bsrc=)[^>]*>\s*<\/script>/g, (script) => {
              scripts.push(script);
              return '';
            });
            return content.replace('</body>', `${scripts.join('\n    ')}\n  </body>`);
          },
        },
      },
    ],
    experimental: {
      renderBuiltUrl(filename, { hostId, hostType }) {
        const kind = kindOf(filename);
        if (paths[kind] === './') return { relative: true };
        const folder = folderFor(kind);
        const file = folder ? filename.slice(folder.length + 1) : filename;
        const url = `${paths[kind]}${file}`;
        // CSS URLs resolve from the stylesheet, while these prefixes are
        // configured relative to the page containing index.html.
        if (hostType === 'css' && !/^(?:[a-z][a-z\d+.-]*:|\/)/i.test(url)) {
          return posix.relative(posix.dirname(hostId), url);
        }
        return url;
      },
    },
  };
});
