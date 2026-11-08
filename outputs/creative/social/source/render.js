// Renders the organic social pack to PNG with headless Chromium (playwright-core).
// Run from anywhere:  NODE_PATH=$HOME/node_modules node outputs/creative/social/source/render.js
// Writes ../*.png, ../contact-sheet.png and html/<id>.html (the generated templates).

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');
const { frames } = require('./frames');

const SRC = __dirname;
const OUT = path.resolve(SRC, '..');
const ROOT = path.resolve(SRC, '../../../..');
const HTML_DIR = path.join(SRC, 'html');
const FONTS = path.join(ROOT, 'outputs/website/landing/fonts');
const POSES = path.join(ROOT, 'assets/octo-poses');

fs.mkdirSync(HTML_DIR, { recursive: true });
const rel = (p) => path.relative(HTML_DIR, p).split(path.sep).join('/');

// Typographic quotes and apostrophes for display. Source text keeps straight ones.
const typo = (s) => s
  .replace(/"([^"]*)"/g, '“$1”')
  .replace(/'/g, '’');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const norm = (s) => s.replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, ' ');

// Fine film grain as an inline SVG (no external files).
const GRAIN = "data:image/svg+xml;utf8," + encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>");

function baseCss(f) {
  const u = f.w / 1080;
  return `
@font-face{font-family:Inter;font-weight:400;src:url('${rel(path.join(FONTS, 'Inter-Regular.ttf'))}')}
@font-face{font-family:Inter;font-weight:500;src:url('${rel(path.join(FONTS, 'Inter-Medium.ttf'))}')}
@font-face{font-family:Inter;font-weight:600;src:url('${rel(path.join(FONTS, 'Inter-SemiBold.ttf'))}')}
@font-face{font-family:'Geist Mono';font-weight:500;src:url('${rel(path.join(FONTS, 'GeistMono-Medium.ttf'))}')}
*{box-sizing:border-box}
html,body{margin:0;width:${f.w}px;height:${f.h}px;overflow:hidden;background:#0D0818}
.frame{position:relative;width:${f.w}px;height:${f.h}px;overflow:hidden;color:#F3EEFB;font-family:Inter,sans-serif;
  -webkit-font-smoothing:antialiased;
  background:linear-gradient(180deg,#0D0818 0%,#120626 55%,#1A0033 100%)}
.glow{position:absolute;border-radius:50%;pointer-events:none;
  background:radial-gradient(closest-side,rgba(63,0,127,0.62),rgba(63,0,127,0.22) 55%,rgba(63,0,127,0) 100%)}
.grain{position:absolute;inset:0;opacity:0.03;background-image:url("${GRAIN}");background-size:240px 240px;pointer-events:none}
.content{position:absolute;display:flex;flex-direction:column}
.label{font-family:'Geist Mono',monospace;font-weight:500;font-size:${f.labelSize}px;letter-spacing:0.14em;text-transform:uppercase;color:#9A8FAE;line-height:1.3}
.lead{font-weight:400;font-size:${f.bodySize}px;line-height:1.3;color:#CBC0DD;letter-spacing:-0.01em}
.headline{font-weight:600;font-size:${f.headSize}px;line-height:1.02;letter-spacing:-0.03em;margin:0;color:#F3EEFB}
.lime{color:#C4E833}
.shot{position:relative}
.window{position:relative;border-radius:${Math.round(24 * u)}px;overflow:hidden;border:1px solid rgba(255,255,255,0.12);
  box-shadow:0 ${Math.round(40 * u)}px ${Math.round(120 * u)}px rgba(0,0,0,0.5);background:#202124}
.window .img{width:100%;background-repeat:no-repeat}
.window::after{content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;
  box-shadow:inset 0 1px 0 rgba(255,255,255,0.10);background:linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0) 18%)}
.caption{margin-top:${Math.round(24 * u)}px}
.pose{position:absolute;background-repeat:no-repeat;z-index:3}
.hair{height:1px;background:rgba(255,255,255,0.12)}
`;
}

function poseDiv(f, bbox, style) {
  const s = f.poseW / bbox.w;
  return `<div class="pose" data-role="pose" style="width:${Math.round(bbox.w * s)}px;height:${Math.round(bbox.h * s)}px;
    background-image:url('${rel(path.join(POSES, f.pose + '.png'))}');background-size:${Math.round(1200 * s)}px auto;
    background-position:${-Math.round(bbox.x * s)}px ${-Math.round(bbox.y * s)}px;${style}"></div>`;
}
const poseH = (f, bbox) => Math.round(bbox.h * f.poseW / bbox.w);

function windowDiv(sc) {
  const px = (sc.x / (1920 - sc.w) * 100).toFixed(3);
  const py = (sc.y / (1080 - sc.h) * 100).toFixed(3);
  return `<div class="window" data-role="window"><div class="img" style="aspect-ratio:${sc.w}/${sc.h};
    background-image:url('${rel(path.join(ROOT, sc.file))}');background-size:${(1920 / sc.w * 100).toFixed(3)}% auto;
    background-position:${px}% ${py}%"></div></div>`;
}

function glow(f, cx, cy, d) {
  return `<div class="glow" style="width:${d}px;height:${d}px;left:${Math.round(cx - d / 2)}px;top:${Math.round(cy - d / 2)}px"></div>`;
}

function contentBox(f) {
  const top = f.safeTop || f.margin, bottom = f.safeBottom || f.margin;
  return `left:${f.margin}px;right:${f.margin}px;top:${top}px;bottom:${bottom}px`;
}

function layoutStack(f, bbox) {
  const u = f.w / 1080;
  const ph = poseH(f, bbox);
  const byHead = f.posePlace === 'by-head';
  return `
${glow(f, f.w * 0.82, f.h * (f.glowY || 0.16), f.w * 1.25)}
<div class="content" data-role="content" style="${contentBox(f)}">
  ${f.label ? `<div class="label" data-text>${esc(typo(f.label))}</div><div style="height:${Math.round(28 * u)}px"></div>` : ''}
  ${f.lead ? `<div class="lead" data-text>${esc(typo(f.lead))}</div><div style="height:${Math.round(20 * u)}px"></div>` : ''}
  <h1 class="headline" data-text data-head>${esc(typo(f.headline))}</h1>
  ${byHead ? poseDiv(f, bbox, `right:0;top:${f.poseTop || 0}px`) : ''}
  <div style="flex:1;min-height:${byHead ? (f.spacerMin || Math.round(40 * u)) : Math.round(ph * 0.94 + 24 * u)}px"></div>
  <div class="shot" style="${f.windowW ? `width:${f.windowW}px` : ''}">
    ${byHead ? '' : poseDiv(f, bbox, `right:${Math.round(40 * u)}px;bottom:calc(100% - ${Math.round(ph * 0.06)}px)`)}
    ${windowDiv(f.screen)}
    ${f.caption ? `<div class="label caption" data-text>${esc(typo(f.caption))}</div>` : ''}
  </div>
</div>`;
}

function layoutCover(f, bbox) {
  const winH = Math.round(f.windowW * f.screen.h / f.screen.w);
  return `
${glow(f, f.w * 0.86, f.h * 0.2, f.w * 0.95)}
<div class="content" data-role="content" style="${contentBox(f)}">
  <div class="label" data-text>${esc(typo(f.label))}</div>
  <div style="height:28px"></div>
  <h1 class="headline" data-text data-head style="white-space:nowrap">${esc(typo(f.headline))}</h1>
  <div style="flex:1"></div>
  <div style="display:flex;align-items:flex-end;gap:56px">
    <div class="shot" style="width:${f.windowW}px;height:${winH}px">${windowDiv(f.screen)}</div>
    <div style="position:relative;width:${f.poseW}px;height:${poseH(f, bbox)}px;margin-bottom:${Math.round(winH * 0.02)}px">
      ${poseDiv(f, bbox, 'left:0;top:0')}
    </div>
  </div>
</div>`;
}

function layoutOneLiner(f, bbox) {
  const u = f.w / 1080;
  return `
${glow(f, f.w * 0.84, f.h * 0.12, f.w * 1.2)}
<div class="content" data-role="content" style="${contentBox(f)}">
  <h1 class="headline" data-text data-head style="max-width:${Math.round(f.w - 2 * f.margin)}px">${esc(typo(f.headline))}</h1>
  <div style="flex:1"></div>
  <div class="hair"></div>
  <div style="height:${Math.round(32 * u)}px"></div>
  <div style="display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:${Math.round(24 * u)}px">
      <div style="position:relative;width:${f.poseW}px;height:${poseH(f, bbox)}px">${poseDiv(f, bbox, 'left:0;top:0')}</div>
      <div>
        <div data-text style="font-weight:600;font-size:${f.bodySize * 1.0}px;letter-spacing:-0.02em;line-height:1.1">Octo</div>
        <div class="label" data-text style="margin-top:${Math.round(8 * u)}px">by Octocrew</div>
      </div>
    </div>
    <div class="lime" data-text data-lime style="font-weight:500;font-size:${f.bodySize}px;letter-spacing:-0.01em;white-space:nowrap">${esc(f.cta)}</div>
  </div>
</div>`;
}

function html(f, bbox) {
  const body = f.layout === 'cover' ? layoutCover(f, bbox) : f.layout === 'oneliner' ? layoutOneLiner(f, bbox) : layoutStack(f, bbox);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${f.id}</title><style>${baseCss(f)}</style></head>
<body><div class="frame">${body}<div class="grain"></div></div></body></html>`;
}

// In-page checks: text inside the content box, headline line count, pose not over text, smallest type.
async function inspect(page) {
  return page.evaluate(() => {
    const out = { issues: [] };
    const content = document.querySelector('[data-role=content]').getBoundingClientRect();
    const W = document.body.clientWidth, H = document.body.clientHeight;
    const pose = document.querySelector('[data-role=pose]');
    const pr = pose && pose.getBoundingClientRect();
    let minFont = 999;
    document.querySelectorAll('[data-text]').forEach((el) => {
      minFont = Math.min(minFont, parseFloat(getComputedStyle(el).fontSize));
      const range = document.createRange(); range.selectNodeContents(el);
      const rects = [...range.getClientRects()].filter((r) => r.width > 1);
      const fs = parseFloat(getComputedStyle(el).fontSize), tol = fs * 0.3; // glyph boxes overhang a 1.02 line box
      rects.forEach((r) => {
        if (r.left < content.left - 1 || r.right > content.right + 1 || r.top < content.top - tol || r.bottom > content.bottom + tol)
          out.issues.push(`text outside content box: "${el.textContent.slice(0, 30)}"`);
        if (r.left < 0 || r.right > W || r.top < 0 || r.bottom > H) out.issues.push('text clipped by canvas');
        if (pr && r.right > pr.left + 4 && r.left < pr.right - 4 && r.bottom - tol > pr.top && r.top + tol < pr.bottom)
          out.issues.push(`pose overlaps text: "${el.textContent.slice(0, 30)}"`);
      });
      if (el.hasAttribute('data-head')) out.headLines = new Set(rects.map((r) => Math.round(r.top))).size;
    });
    const win = document.querySelector('[data-role=window]');
    if (win) {
      const wr = win.getBoundingClientRect();
      if (wr.top < content.top - 1 || wr.bottom > content.bottom + 1 || wr.left < content.left - 1 || wr.right > content.right + 1) out.issues.push('window outside content box');
    }
    if (pr && (pr.left < content.left - 1 || pr.right > content.right + 1 || pr.top < content.top - 1 || pr.bottom > content.bottom + 1)) out.issues.push('pose outside content box');
    out.minFont = minFont;
    return out;
  });
}

async function poseBoxes(page, names) {
  const boxes = {};
  for (const n of names) {
    const data = 'data:image/png;base64,' + fs.readFileSync(path.join(POSES, n + '.png')).toString('base64');
    boxes[n] = await page.evaluate(async (src) => {
      const img = new Image(); img.src = src; await img.decode();
      const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
      const ctx = c.getContext('2d'); ctx.drawImage(img, 0, 0);
      const d = ctx.getImageData(0, 0, c.width, c.height).data;
      let x0 = c.width, y0 = c.height, x1 = 0, y1 = 0;
      for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) {
        if (d[(y * c.width + x) * 4 + 3] > 24) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
      }
      return { x: x0, y: y0, w: x1 - x0 + 1, h: y1 - y0 + 1 };
    }, data);
  }
  return boxes;
}

function checkWording() {
  const problems = [];
  const cache = {};
  const read = (p) => (cache[p] = cache[p] || norm(fs.readFileSync(path.join(ROOT, p), 'utf8')));
  for (const f of frames) {
    const texts = [f.label, f.lead, f.headline, f.caption, f.cta].filter(Boolean);
    for (const t of texts) {
      if (!f.src.some((p) => read(p).includes(norm(t)))) problems.push(`${f.id}: "${t}" not found verbatim in ${f.src.join(', ')}`);
      if (/[—–]/.test(t)) problems.push(`${f.id}: dash in "${t}"`);
    }
  }
  return problems;
}

(async () => {
  const wording = checkWording();
  console.log(wording.length ? 'WORDING:\n  ' + wording.join('\n  ') : 'wording: every on-image line found verbatim in its source');

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 1200 }, deviceScaleFactor: 1 });
  const boxes = await poseBoxes(page, [...new Set(frames.map((f) => f.pose))]);

  for (const f of frames) {
    const file = path.join(HTML_DIR, f.id + '.html');
    fs.writeFileSync(file, html(f, boxes[f.pose]));
    await page.setViewportSize({ width: f.w, height: f.h });
    await page.goto('file://' + file);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForLoadState('networkidle');
    const r = await inspect(page);
    await page.screenshot({ path: path.join(OUT, f.id + '.png'), clip: { x: 0, y: 0, width: f.w, height: f.h } });
    console.log(`${f.id}.png ${f.w}x${f.h}  headline lines: ${r.headLines}  smallest type: ${r.minFont}px  ${r.issues.length ? 'ISSUES: ' + [...new Set(r.issues)].join('; ') : 'ok'}`);
  }

  // Contact sheet of everything.
  const cells = frames.map((f) => `<figure><img src="${rel(path.join(OUT, f.id + '.png'))}" style="width:${f.w >= f.h ? 560 : Math.round(560 * f.w / f.h)}px"><figcaption>${f.id}.png · ${f.w}x${f.h} · post ${f.post}</figcaption></figure>`).join('');
  const sheet = path.join(HTML_DIR, 'contact-sheet.html');
  fs.writeFileSync(sheet, `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:'Geist Mono';src:url('${rel(path.join(FONTS, 'GeistMono-Medium.ttf'))}')}
body{margin:0;padding:64px;background:#0B0714;width:1920px;box-sizing:border-box;font-family:'Geist Mono',monospace;color:#9A8FAE}
h1{font-size:22px;letter-spacing:.14em;text-transform:uppercase;font-weight:500;margin:0 0 40px}
.grid{display:grid;grid-template-columns:repeat(3,560px);gap:48px 56px;align-items:end}
figure{margin:0}img{display:block;border-radius:8px;border:1px solid rgba(255,255,255,.08)}
figcaption{font-size:16px;margin-top:12px;letter-spacing:.06em}</style></head>
<body><h1>Octo organic social pack · contact sheet</h1><div class="grid">${cells}</div></body></html>`);
  await page.setViewportSize({ width: 1920, height: 1000 });
  await page.goto('file://' + sheet);
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: path.join(OUT, 'contact-sheet.png'), fullPage: true });
  console.log('contact-sheet.png');
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
