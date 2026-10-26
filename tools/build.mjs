// Bundles the game with esbuild. `node tools/build.mjs` -> docs/game.js (+ dist/apex-grand-prix.html, a single self-contained file).
// `node tools/build.mjs --watch` serves docs/ on http://localhost:8080 and rebuilds on change.
import * as esbuild from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const watch = process.argv.includes('--watch');
const opts = {
  entryPoints: [path.join(root, 'src/game.js')],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  outfile: path.join(root, 'docs/game.js'),
  minify: !watch,
  sourcemap: watch,
  legalComments: 'none',
  logLevel: 'info',
};

if (watch) {
  const ctx = await esbuild.context(opts);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: path.join(root, 'docs'), port: 8080 });
  console.log(`serving on http://localhost:${port}`);
} else {
  await esbuild.build(opts);
  // single-file build: inline CSS + JS so the game opens straight from disk or any static host
  const html = fs.readFileSync(path.join(root, 'docs/index.html'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'docs/style.css'), 'utf8');
  const js = fs.readFileSync(path.join(root, 'docs/game.js'), 'utf8').replace(/<\/script>/g, '<\\/script>');
  const single = html
    .replace('<link rel="stylesheet" href="style.css">', `<style>\n${css}\n</style>`)
    .replace('<script src="game.js"></script>', `<script>\n${js}\n</script>`);
  fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
  fs.writeFileSync(path.join(root, 'dist/apex-grand-prix.html'), single);
  const kb = (f) => (fs.statSync(f).size / 1024).toFixed(0) + ' kB';
  console.log('docs/game.js', kb(path.join(root, 'docs/game.js')), '| dist/apex-grand-prix.html', kb(path.join(root, 'dist/apex-grand-prix.html')));
}
