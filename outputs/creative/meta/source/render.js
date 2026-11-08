// Renders the Octo Meta statics ("Who's doing what?"), the video end cards, the contact sheet and the ad previews.
// Run from the repo root:  NODE_PATH=$HOME/node_modules node outputs/creative/meta/source/render.js
// Options: --guides <dir>   also writes copies with the safe zones drawn in red to <dir> (for checking only)
// Needs: playwright-core (with its Chromium, or Google Chrome installed) and ffmpeg on PATH (for the creative 1 poster frame).
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { chromium } = require('playwright-core');

const SRC = __dirname;
const META = path.resolve(SRC, '..');
const STATIC = path.join(META, 'static');
const REPO = path.resolve(SRC, '../../../..');
const { ADS, SHARED } = require('./ads-data.js');

const args = process.argv.slice(2);
const guidesDir = args.includes('--guides') ? path.resolve(args[args.indexOf('--guides') + 1]) : null;

const fileUrl = p => 'file://' + p.split(path.sep).map(encodeURIComponent).join('/');
const SIZES = { '9x16': [1080, 1920], '4x5': [1080, 1350] };
const CARD_URL = fileUrl(path.join(SRC, 'card.html'));

async function settle(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map(img => img.complete ? null : new Promise(r => { img.onload = img.onerror = r; })));
  });
}

async function launch() {
  try { return await chromium.launch(); }
  catch (e) { return await chromium.launch({ channel: 'chrome' }); }
}

async function renderCard(browser, id, fmt, opts = {}) {
  const [w, h] = SIZES[fmt];
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  await page.goto(`${CARD_URL}?id=${id}&fmt=${fmt}${opts.guides ? '&guides=1' : ''}`);
  await settle(page);
  const buf = await page.locator('#card').screenshot(opts.path ? { path: opts.path } : {});
  await page.close();
  return buf;
}

(async () => {
  fs.mkdirSync(STATIC, { recursive: true });
  const browser = await launch();

  // 1. Statics and end cards
  const jobs = [];
  for (const id of ['creative-2', 'creative-3', 'creative-4', 'retargeting', 'end'])
    for (const fmt of ['9x16', '4x5']) jobs.push({ id, fmt, out: `${id === 'end' ? 'end-card' : id}-${fmt}.png` });

  for (const j of jobs) {
    await renderCard(browser, j.id, j.fmt, { path: path.join(STATIC, j.out) });
    if (guidesDir) {
      fs.mkdirSync(guidesDir, { recursive: true });
      await renderCard(browser, j.id, j.fmt, { guides: true, path: path.join(guidesDir, j.out.replace('.png', '-guides.png')) });
    }
    console.log('card', j.out);
  }

  // 2. Contact sheet of all statics
  {
    const page = await browser.newPage({ viewport: { width: 2000, height: 1000 }, deviceScaleFactor: 1 });
    await page.goto(fileUrl(path.join(SRC, 'contact-sheet.html')));
    await settle(page);
    await page.screenshot({ path: path.join(STATIC, 'contact-sheet.png'), fullPage: true });
    await page.close();
    console.log('contact-sheet.png');
  }

  // 3. Ad previews: one self-contained HTML page (images inlined as downscaled data URIs)
  {
    // Posters that exist only inside the preview page (not written to static/)
    const posters = {};
    posters['creative-1'] = execFileSync('ffmpeg', ['-loglevel', 'error', '-ss', '3', '-i',
      path.join(REPO, 'assets/octo-demo-36s-9x16.mp4'), '-frames:v', '1', '-f', 'image2pipe', '-vcodec', 'png', '-'],
      { maxBuffer: 64 * 1024 * 1024 });
    posters['creative-5'] = await renderCard(browser, 'creative-5', '9x16');

    const page = await browser.newPage();
    const toData = async (buf, width, type = 'image/jpeg') => page.evaluate(async ({ b64, width, type }) => {
      const img = new Image();
      img.src = 'data:image/png;base64,' + b64;
      await img.decode();
      const c = document.createElement('canvas');
      c.width = width; c.height = Math.round(img.height * width / img.width);
      const ctx = c.getContext('2d');
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, c.width, c.height);
      return c.toDataURL(type, 0.9);
    }, { b64: buf.toString('base64'), width, type });
    const file = rel => fs.readFileSync(path.join(STATIC, rel));

    const images = {};
    for (const ad of ADS) {
      const im = {};
      if (ad.feed) im.feed = await toData(file(`${ad.id}-4x5.png`), 720);
      if (ad.reel) im.reel = await toData(posters[ad.id] || file(`${ad.id}-9x16.png`), 720);
      images[ad.id] = im;
    }
    images.avatar = await toData(fs.readFileSync(path.join(REPO, 'assets/octo-poses/01-neutral.png')), 120, 'image/png');
    await page.close();

    const tpl = fs.readFileSync(path.join(SRC, 'ad-previews.template.html'), 'utf8');
    const data = JSON.stringify({ ADS, SHARED, images });
    const htmlPath = path.join(META, 'ad-previews.html');
    fs.writeFileSync(htmlPath, tpl.replace('/*__DATA__*/null', () => data));

    const p2 = await browser.newPage({ viewport: { width: 1360, height: 1000 }, deviceScaleFactor: 1 });
    await p2.goto(fileUrl(htmlPath));
    await settle(p2);
    await p2.screenshot({ path: path.join(META, 'ad-previews.png'), fullPage: true });
    await p2.close();
    console.log('ad-previews.html, ad-previews.png');
  }

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
