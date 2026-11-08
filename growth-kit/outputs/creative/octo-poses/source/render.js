// Renders every pose to PNG (1200 and 400) and the two contact sheets.
// Usage: node render.js [pose-id ...]   (no args = all poses)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core'); // npm install playwright-core (needs a local Chrome)
const poses = require('./poses');
const { svgDoc } = require('./octo');

const OUT = path.resolve(__dirname, '..');
const SMALL = path.join(OUT, 'small');
const TMP = path.join(require('os').tmpdir(), 'octo-poses');
fs.mkdirSync(SMALL, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });

const only = process.argv.slice(2);
const list = only.length ? poses.filter((p) => only.some((o) => p.id.startsWith(o))) : poses;

async function launch() {
  try { return await chromium.launch({ channel: 'chrome' }); } catch (e) { return chromium.launch(); }
}

async function shot(page, svg, file, size) {
  const scaled = svg.replace(/width="1200" height="1200"/, `width="${size}" height="${size}"`);
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<html><body style="margin:0;background:transparent">${scaled}</body></html>`);
  await page.screenshot({ path: file, omitBackground: true, clip: { x: 0, y: 0, width: size, height: size } });
}

function sheetHtml(bg, labelColor) {
  const cells = poses.map((p) => `<div class="c"><img src="file://${path.join(OUT, p.id + '.png')}"><span>${p.id}</span></div>`).join('');
  return `<html><body style="margin:0;background:${bg};font-family:Helvetica,Arial,sans-serif">
  <div style="display:grid;grid-template-columns:repeat(4,330px);gap:10px 10px;padding:30px;justify-content:center">${cells}</div>
  <style>.c{text-align:center}.c img{width:330px;height:330px;display:block}.c span{font-size:15px;color:${labelColor}}</style></body></html>`;
}

(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  for (const p of list) {
    const svg = p.build();
    fs.writeFileSync(path.join(TMP, p.id + '.svg'), svg);
    await shot(page, svg, path.join(OUT, p.id + '.png'), 1200);
    await shot(page, svg, path.join(SMALL, p.id + '.png'), 400);
    console.log('ok', p.id);
  }
  if (!only.length) {
    const sheet = async (name, bg, label) => {
      const f = path.join(TMP, name + '.html');
      fs.writeFileSync(f, sheetHtml(bg, label));
      await page.setViewportSize({ width: 1500, height: 1000 });
      await page.goto('file://' + f);
      await page.waitForLoadState('load');
      await page.screenshot({ path: path.join(OUT, name + '.png'), fullPage: true });
      console.log('ok', name);
    };
    await sheet('contact-sheet', '#FAF9FB', '#7A7685');
    await sheet('contact-sheet-dark', '#1A0033', '#A99FC4');
  }
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
