// Resolve filenames assembled at runtime using the same hosting paths as the build.
export function assetUrl(filename) {
  const imagePrefix = import.meta.env?.URL_IMAGE || './assets/';
  const prefix = /\.svg(?:[?#]|$)/i.test(filename)
    ? import.meta.env?.URL_SVG || imagePrefix
    : imagePrefix;
  return `${prefix.replace(/\/+$/, '')}/${filename}`;
}
