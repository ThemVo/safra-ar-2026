import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { posix } from 'node:path';

const withSlash = (value) => `${value.replace(/\/+$/, '')}/`;

export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), 'URL_'), ...process.env };
  const paths = {
    image: withSlash(env.URL_IMAGE || './'),
    css: withSlash(env.URL_CSS || './'),
    js: withSlash(env.URL_JS || './'),
  };

  return {
    base: './',
    plugins: [
      {
        name: 'content-image-paths',
        // Public images in the templates and story data are runtime strings.
        // Vite does not rewrite those, so apply URL_IMAGE before compiling JSX.
        enforce: 'pre',
        transform(code, id) {
          if (!/\/src\/.*\.[jt]sx?(?:\?|$)/.test(id)) return;
          return {
            code: code.replace(
              /(["'])\.\/assets\/([^"'\n]+)\1/g,
              (_, quote, file) => JSON.stringify(`${paths.image}assets/${file}`),
            ),
            map: null,
          };
        },
      },
      react(),
    ],
    experimental: {
      renderBuiltUrl(filename, { hostId, hostType }) {
        const kind = /\.css$/.test(filename)
          ? 'css'
          : /\.[cm]?js$/.test(filename)
            ? 'js'
            : 'image';
        if (paths[kind] === './') return { relative: true };
        const url = `${paths[kind]}${filename}`;
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
