#!/usr/bin/env node
/*
 * "Octo narrates": vertical ad where Octo tells, in first person, what it did on a team call.
 * Voiceover: octo-vo-brodie.wav (+ .words.json). Footage: assets/octo-demo-36s-9x16.mp4 (the real demo).
 * Look and framing reuse outputs/creative/meta/video/source/ (window, background, type).
 *
 * Run from the repo root:
 *   NODE_PATH=$HOME/node_modules node outputs/creative/meta/video/ugc/source/build-octo-narrates.js
 *
 * Needs ffmpeg on PATH (or FFMPEG=...), playwright-core through NODE_PATH, Chrome or the Playwright Chromium.
 * Writes to outputs/creative/meta/video/ugc/: octo-narrates-9x16.mp4, octo-narrates-4x5.mp4,
 * octo-narrates-<fmt>-poster.png, contact-octo-narrates.png (9:16, 2 fps), contact-octo-narrates-4x5.png.
 */
'use strict';
const path = require('path');
const fs = require('fs');
const os = require('os');
const { execFileSync, spawnSync } = require('child_process');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright-core');

const HERE = __dirname;
const ROOT = path.resolve(HERE, '../../../../../..');
const OUT = path.resolve(HERE, '..');
const SRC = path.join(ROOT, 'assets/octo-demo-36s-9x16.mp4');
const VO = path.join(HERE, 'octo-vo-brodie.wav');
const WORDS = JSON.parse(fs.readFileSync(path.join(HERE, 'octo-vo-brodie.words.json'), 'utf8'));
const POSES = path.join(ROOT, 'assets/octo-poses');
const STATIC = path.join(ROOT, 'outputs/creative/meta/static');
const FONTS = path.join(ROOT, 'outputs/website/landing/fonts');
const FF = process.env.FFMPEG || 'ffmpeg';
const FPS = 30;
const CRF = 18;
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'octo-narrates-'));
const rel = p => path.relative(ROOT, p);
const n3 = x => (Math.round(x * 1000) / 1000).toString();
const fr = f => f / FPS;

// ---------------------------------------------------------------- edit (all cuts on frame numbers, 30 fps, inside VO pauses)
// Cut frames: 3.400 | 9.167 | 10.867 | 13.667 | 15.233 | 16.467 | 19.700 | end card 21.300 | end 23.300
const CUTS = [0, 102, 275, 326, 410, 457, 494, 591, 639];
const TF = 699;
const T = fr(TF);
const ENDCARD = fr(639);
// demo crops in source pixels (1080x1920 demo)
const CROP = {
  call: { x: 34, y: 184, w: 1012, h: 1096 },    // Octo's tile + participant grid (the demo's caption line stays out)
  dm: { x: 50, y: 234, w: 980, h: 987 },        // Octo's message + task card, 16 px past each edge
  tile: { x: 40, y: 194, w: 1000, h: 672 },     // Octo's own tile only
  quote: { x: 60, y: 560, w: 960, h: 645 },     // task card: title, fields, summary, Anna's quote
};
// the demo's purple page background, keyed to the window's ink in the message shots
const DEMO_PURPLE = '0x3B007C';
const INK = '0x0B0714';
// Source times read off the demo frame by frame:
// Mark asks 4.8-7.07 (Octo's tile shows the mascot) | Octo's tile lit 7.07 | list appears 7.6, Design+Layout only until 8.7,
// Copy row 8.8 | Copy row turns lime at 10.33 | Anna's tile lit 12.43-15.03 | task card complete 26.6 | quote turns lime at 28.5.
const SHOTS = [
  // "Hi, I'm Octo. I just sat in on your team call." Octo's real tile (half speed) with the pose small above it
  { kind: 'win', win: 'hook', segs: [{ a: 4.85, crop: 'tile', speed: 0.5 }],
    poses: [{ src: '01-neutral.png', t0: 0 }, { src: '10-talking.png', t0: 0.7 }] },
  // "You asked where the launch stands, so I put it on my tile: design and layout, done."
  // Mark's tile is lit while he asks; the list lands on "put it on my tile"; held (slow push-in) before the Copy row shows
  { kind: 'win', win: 'std', segs: [{ a: 5.30, b: 8.6, crop: 'call' }, { hold: 8.6, crop: 'call', push: 0.03 }] },
  { kind: 'win', win: 'wide', segs: [{ a: 9.45, crop: 'tile' }] },                     // "Copy is stuck." (row turns lime on "stuck")
  { kind: 'win', win: 'std', segs: [{ a: 12.2333, crop: 'call' }] },                   // "Anna said she'd finish the copy by Friday," (Anna's tile lit)
  { kind: 'win', win: 'dm', segs: [{ a: 26.65, crop: 'dm', patch: true }] },           // "so I sent her that task,"
  { kind: 'win', win: 'wide', segs: [{ a: 28.3333, crop: 'quote', patch: true }] },    // "with her own words." (quote turns lime on "with")
  { kind: 'headline', pose: '12-task-done.png' },                                      // "Note-takers record the meeting. I take part in it."
  { kind: 'win', win: 'wide', segs: [{ a: 5.0, crop: 'tile' }] },                      // "Invite me to your next call." (Octo's real tile)
];
// captions: word index ranges into the words file, max 4 words, none crossing a cut; none on the headline card
const CAPS = [[0, 2], [3, 6], [7, 10], [11, 13], [14, 16], [17, 20], [21, 23], [24, 26], [27, 27], [28, 30], [31, 33], [34, 36],
  [37, 38], [39, 42], [43, 44], [45, 48], [58, 59], [60, 63]];
// headline card: two blocks, timed to the spoken words (first word index of each)
const HEADLINE = { a: { word: 49, layouts: [['Note-takers record', 'the meeting.'], ['Note-takers', 'record the meeting.'], ['Note-takers', 'record the', 'meeting.']] },
  b: { word: 53, lines: ['I take part in it.'] } };
// spoken phrases (word ranges) between the pauses of the take; used to re-time the words file against the audio
const PHRASES = [[0, 0], [1, 2], [3, 10], [11, 16], [17, 23], [24, 24], [25, 26], [27, 27], [28, 30], [31, 38], [39, 44], [45, 48],
  [49, 52], [53, 57], [58, 63]];
// The demo's quote line reads '"..." <em dash> Anna, 10:34 · transcript'. On screen we show the quote untouched and
// re-set the attribution without the dash: white-out the dash + "Anna," on line 1 and line 2, then set
// "Anna, 10:34 · transcript" on line 2 (Inter Regular, size fitted to the original line, same colour, same baseline).
const PATCH = { bg: '#FDFDFD', ink: '#2A2A2D', rects: [{ x: 739, y: 1064, w: 128, h: 40 }, { x: 146, y: 1105, w: 250, h: 40 }],
  fitText: '10:34 \u00b7 transcript', fitInkLeft: 152, fitInkWidth: 230, baseline: 1134, text: 'Anna, 10:34 \u00b7 transcript' };

// ---------------------------------------------------------------- layout (9:16 text between y 250 and y 1250; 4:5 96 px margins)
const FMT = {
  '9x16': { W: 1080, H: 1920, glow: { x: 760, y: 820, r: 980 },
    win: { std: { x: 166, y: 256, w: 748, h: 810 }, wide: { x: 96, y: 362, w: 888, h: 597 },
      hook: { x: 96, y: 430, w: 888, h: 597 }, dm: { x: 166, y: 284, w: 748, h: 753 } },
    hookPose: { x: 96, y: 170, w: 270 },
    head: { x: 96, y: 430, w: 850, max: 120, min: 96, gap: 56, pose: 260 },
    cap: { y: 1100, w: 888, size: 68 } },
  '4x5': { W: 1080, H: 1350, glow: { x: 760, y: 560, r: 900 },
    win: { std: { x: 130, y: 96, w: 820, h: 888 }, wide: { x: 96, y: 241, w: 888, h: 597 },
      hook: { x: 96, y: 330, w: 888, h: 597 }, dm: { x: 130, y: 127, w: 820, h: 826 } },
    hookPose: { x: 96, y: 60, w: 250 },
    head: { x: 96, y: 380, w: 850, max: 120, min: 96, gap: 40, pose: 240 },
    cap: { y: 1020, w: 888, size: 62 } },
};

// ---------------------------------------------------------------- helpers
function ff(args) {
  try { return execFileSync(FF, ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: ['ignore', 'pipe', 'pipe'] }); }
  catch (e) {
    console.error(String(e.stderr || ''));
    console.error('ffmpeg failed: ' + [FF, ...args].join(' '));
    throw e;
  }
}
function ffStderr(args) {
  const r = spawnSync(FF, ['-hide_banner', '-nostats', ...args], { maxBuffer: 64 << 20 });
  return r.stderr.toString() + r.stdout.toString();
}

// ---------------------------------------------------------------- audio analysis: RMS per 10 ms, speech segments, word re-timing
function rmsEnvelope() {
  const txt = ffStderr(['-i', VO, '-af', 'asetnsamples=480,astats=metadata=1:reset=1,ametadata=print:key=lavfi.astats.Overall.RMS_level:file=-', '-f', 'null', '-']);
  const env = [];
  let t = null;
  for (const line of txt.split('\n')) {
    const m = line.match(/pts_time:([\d.]+)/);
    if (m) { t = parseFloat(m[1]); continue; }
    const v = line.match(/RMS_level=(.+)$/);
    if (v && t !== null) { const x = parseFloat(v[1]); env.push({ t, db: isFinite(x) ? x : -120 }); t = null; }
  }
  return env;
}
function speechSegments(env) {
  const on = env.map(e => e.db > -38);
  const segs = [];
  for (let i = 0; i < env.length; i++) {
    if (!on[i]) continue;
    const s = env[i].t; let j = i;
    while (j + 1 < env.length && on[j + 1]) j++;
    segs.push({ s, e: env[j].t + 0.01, max: Math.max(...env.slice(i, j + 1).map(x => x.db)) });
    i = j;
  }
  // merge gaps shorter than 90 ms (consonants), drop blips (breaths, clicks)
  const merged = [];
  for (const g of segs) {
    const last = merged[merged.length - 1];
    if (last && g.s - last.e < 0.09) { last.e = g.e; last.max = Math.max(last.max, g.max); } else merged.push({ ...g });
  }
  return merged.filter(g => g.e - g.s >= 0.1 && g.max > -30);
}
function alignWords(segs) {
  if (segs.length !== PHRASES.length) {
    throw new Error(`expected ${PHRASES.length} spoken phrases in the VO, found ${segs.length}: ` + segs.map(g => `${g.s.toFixed(2)}-${g.e.toFixed(2)}`).join(' '));
  }
  const W = WORDS.map(([w, s, e]) => ({ w, s, e }));
  PHRASES.forEach(([a, b], k) => {
    const js = W[a].s, je = W[b].e, rs = segs[k].s, re = segs[k].e;
    const map = x => rs + (x - js) * (re - rs) / (je - js);
    for (let i = a; i <= b; i++) { W[i].s = map(W[i].s); W[i].e = map(W[i].e); }
  });
  return W;
}
function checkCuts(env, words) {
  const at = t => env.filter(e => Math.abs(e.t + 0.005 - t) <= 0.035);
  for (const c of CUTS.slice(1)) {
    const t = fr(c);
    if (t > 21.34) continue;
    const loud = at(t).filter(e => e.db > -40);
    if (loud.length) throw new Error(`cut at ${t.toFixed(3)} s is not in a pause (${loud.map(e => e.db.toFixed(0)).join(',')} dB)`);
    const w = words.find(x => x.s < t && x.e > t);
    if (w) throw new Error(`cut at ${t.toFixed(3)} s falls inside the word "${w.w}"`);
  }
}

// ---------------------------------------------------------------- overlays rendered in Chrome
const fontUrl = f => pathToFileURL(path.join(FONTS, f)).href;
const PAGE = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: "Inter"; font-weight: 400; src: url("${fontUrl('Inter-Regular.ttf')}"); }
@font-face { font-family: "Inter"; font-weight: 500; src: url("${fontUrl('Inter-Medium.ttf')}"); }
@font-face { font-family: "Inter"; font-weight: 600; src: url("${fontUrl('Inter-SemiBold.ttf')}"); }
html, body { margin: 0; padding: 0; background: transparent; }
body { position: relative; overflow: hidden; font-family: "Inter", sans-serif; -webkit-font-smoothing: antialiased; text-rendering: geometricPrecision; }
#stage { position: absolute; inset: 0; }
.abs { position: absolute; }
.cap { font-weight: 600; line-height: 1.2; letter-spacing: -0.015em; color: #F3EEFB; white-space: nowrap; }
.head { font-weight: 600; letter-spacing: -0.03em; white-space: nowrap; }
.head span { display: block; }
</style></head><body><div id="stage"></div><script>
const stage = document.getElementById('stage');
function box(el, pad) { const r = el.getBoundingClientRect();
  return { x: Math.max(0, Math.floor(r.left - pad)), y: Math.max(0, Math.floor(r.top - pad)), w: Math.ceil(r.width + 2 * pad), h: Math.ceil(r.height + 2 * pad) }; }
function headEl(lines, size, color) {
  const el = document.createElement('div'); el.className = 'abs head';
  el.style.fontSize = size + 'px'; el.style.lineHeight = Math.round(size * 1.02) + 'px'; el.style.color = color;
  el.innerHTML = lines.map(l => '<span>' + l.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</span>').join('');
  return el;
}
window.renderItem = async function (s) {
  document.body.style.width = s.W + 'px'; document.body.style.height = s.H + 'px';
  stage.innerHTML = ''; stage.style.background = 'transparent';
  await document.fonts.ready;
  let el;
  if (s.kind === 'bg') {
    const g = s.glow;
    stage.style.background = 'radial-gradient(' + g.r + 'px ' + (g.r * 0.85) + 'px at ' + g.x + 'px ' + g.y + 'px, rgba(63,0,127,0.55), rgba(63,0,127,0.18) 45%, rgba(63,0,127,0) 75%),' +
      'linear-gradient(180deg, #0D0818 0%, #12091F 55%, #1A0033 100%)';
    return { box: { x: 0, y: 0, w: s.W, h: s.H } };
  }
  if (s.kind === 'caption') {
    // centered lower text block, one line, shrinks only if it would pass the max width
    el = document.createElement('div'); el.className = 'abs cap'; el.textContent = s.text;
    stage.appendChild(el);
    let size = s.size;
    for (; size >= 40; size -= 2) { el.style.fontSize = size + 'px'; if (el.getBoundingClientRect().width <= s.w) break; }
    const r = el.getBoundingClientRect();
    el.style.left = Math.round((s.W - r.width) / 2) + 'px'; el.style.top = s.y + 'px';
    return { box: box(el, 24), info: { size, width: Math.round(r.width) } };
  }
  if (s.kind === 'headfit') {
    // largest size in [min, max] where every line of both blocks fits the width; tries each layout of block A in turn
    for (const [li, layout] of s.layouts.entries()) {
      for (let size = s.max; size >= s.min; size -= 2) {
        el = headEl(layout.concat(s.other), size, '#fff'); stage.innerHTML = ''; stage.appendChild(el);
        const widest = Math.max(...[...el.children].map(c => c.getBoundingClientRect().width));
        if (widest <= s.w) return { box: { x: 0, y: 0, w: 1, h: 1 }, info: { size, layout: li } };
      }
    }
    return { box: { x: 0, y: 0, w: 1, h: 1 }, info: { size: s.min, layout: s.layouts.length - 1 } };
  }
  if (s.kind === 'headline') {
    el = headEl(s.lines, s.size, s.color); el.style.left = s.x + 'px'; el.style.top = s.y + 'px';
    stage.appendChild(el);
    return { box: box(el, 8), info: { h: Math.round(el.getBoundingClientRect().height) } };
  }
  if (s.kind === 'patch') {
    // full-canvas patch in demo source space (see PATCH in build-octo-narrates.js)
    const c = document.createElement('canvas'); c.width = s.W; c.height = s.H; c.className = 'abs'; c.style.left = 0; c.style.top = 0;
    stage.appendChild(c);
    const ctx = c.getContext('2d');
    await document.fonts.load('400 30px Inter');  // canvas text does not trigger @font-face loading by itself
    ctx.fillStyle = s.p.bg;
    for (const r of s.p.rects) ctx.fillRect(r.x, r.y, r.w, r.h);
    let size = 24, best = 24, err = 1e9;
    for (; size <= 36; size += 0.125) {
      ctx.font = '400 ' + size + 'px Inter';
      const m = ctx.measureText(s.p.fitText);
      const e = Math.abs(m.actualBoundingBoxLeft + m.actualBoundingBoxRight - s.p.fitInkWidth);
      if (e < err) { err = e; best = size; }
    }
    ctx.font = '400 ' + best + 'px Inter';
    const m = ctx.measureText(s.p.text);
    ctx.fillStyle = s.p.ink; ctx.textBaseline = 'alphabetic';
    ctx.fillText(s.p.text, s.p.fitInkLeft + m.actualBoundingBoxLeft, s.p.baseline);
    return { box: { x: 0, y: 0, w: s.W, h: s.H }, info: { size: best } };
  }
  const r = s.rect;
  el = document.createElement('div'); el.className = 'abs';
  Object.assign(el.style, { left: r.x + 'px', top: r.y + 'px', width: r.w + 'px', height: r.h + 'px', borderRadius: '24px', boxSizing: 'border-box' });
  if (s.kind === 'shadow') {
    Object.assign(el.style, { background: '#0B0714', boxShadow: '0 40px 120px rgba(0,0,0,0.5), 0 12px 32px rgba(0,0,0,0.25)' });
    stage.appendChild(el); return { box: { x: 0, y: 0, w: s.W, h: s.H } };
  }
  if (s.kind === 'border') {
    Object.assign(el.style, { border: '1px solid rgba(255,255,255,0.12)', background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0) 3px)' });
    stage.appendChild(el); return { box: box(el, 0) };
  }
  throw new Error('unknown kind ' + s.kind);
};
</script></body></html>`;

let browser, page;
async function startBrowser() {
  try { browser = await chromium.launch({ channel: 'chrome' }); } catch (e) { browser = await chromium.launch(); }
  page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  const html = path.join(TMP, 'overlay.html');
  fs.writeFileSync(html, PAGE);
  await page.goto(pathToFileURL(html).href);
}
const cache = new Map();
async function render(spec, name) {
  const key = JSON.stringify(spec);
  if (cache.has(key)) return cache.get(key);
  await page.setViewportSize({ width: spec.W, height: spec.H });
  const r = await page.evaluate(s => window.renderItem(s), spec);
  const file = path.join(TMP, name + '.png');
  await page.screenshot({ path: file, clip: { x: r.box.x, y: r.box.y, width: r.box.w, height: r.box.h }, omitBackground: true });
  const out = { file, x: r.box.x, y: r.box.y, w: r.box.w, h: r.box.h, info: r.info || {} };
  cache.set(key, out);
  return out;
}
function roundedMask(w, h, r = 24) {
  const file = path.join(TMP, `mask-${w}x${h}.png`);
  if (!fs.existsSync(file)) {
    const e = `255*clip(${r + 1}-hypot(max(max(${r}-X,X-(W-${r + 1})),0),max(max(${r}-Y,Y-(H-${r + 1})),0)),0,1)`;
    ff(['-f', 'lavfi', '-i', `color=c=white:s=${w}x${h},format=gray`, '-vf', `geq=lum='${e}'`, '-frames:v', '1', file]);
  }
  return file;
}
async function bgFile(fmtName) {
  const fm = FMT[fmtName];
  const plain = (await render({ kind: 'bg', W: fm.W, H: fm.H, glow: fm.glow }, `bg-${fmtName}`)).file;
  const grain = path.join(TMP, `bg-${fmtName}-grain.png`);
  if (!fs.existsSync(grain)) ff(['-i', plain, '-vf', 'format=rgb24,noise=alls=5:allf=u', '-frames:v', '1', grain]);
  return grain;
}
// slow push-in: scale up by `amount` over [t0, t1] (t is the stream's own time), crop back to w x h; ay anchors the crop vertically
const push = (w, h, t0, t1, amount, ay = 0.5) =>
  `scale=w='2*trunc(${w}*(1+${amount}*clip((t-${n3(t0)})/${n3(t1 - t0)},0,1))/2)':h=-2:eval=frame:flags=bicubic,crop=${w}:${h}:(iw-${w})/2:(ih-${h})*${ay}`;

// ---------------------------------------------------------------- audio: VO to -14 LUFS (true peak about -1 dBTP), padded to T
function measure(file) {
  const txt = ffStderr(['-i', file, '-af', 'ebur128=peak=true', '-f', 'null', '-']);
  const I = parseFloat(txt.match(/I:\s+(-?[\d.]+) LUFS/g).pop().match(/-?[\d.]+/)[0]);
  const P = parseFloat(txt.match(/Peak:\s+(-?[\d.]+) dBFS/g).pop().match(/-?[\d.]+/)[0]);
  return { I, P };
}
function prepareVO() {
  const out = path.join(TMP, 'vo-14lufs.wav');
  let gain = -14 - measure(VO).I;
  for (let k = 0; k < 4; k++) {
    const chain = `volume=${gain.toFixed(2)}dB,alimiter=limit=0.84:attack=3:release=60:level=0:asc=1`;
    ff(['-i', VO, '-af', `${chain},aresample=48000,afade=t=out:st=21.2:d=0.14`, '-ar', '48000', '-ac', '1', '-c:a', 'pcm_s24le', out]);
    const m = measure(out);
    if (Math.abs(m.I + 14) <= 0.15) { console.log(`  VO ${m.I.toFixed(1)} LUFS, true peak ${m.P.toFixed(1)} dBTP`); return out; }
    gain += -14 - m.I;
  }
  return out;
}

// ---------------------------------------------------------------- graph
class Graph {
  constructor(fm) { this.fm = fm; this.inputs = []; this.f = []; this.k = 0; this.main = null; }
  input(args) { this.inputs.push(args); return this.inputs.length - 1; }
  lab(p) { return `${p || 'v'}${this.k++}`; }
  still(file) { return this.input(['-loop', '1', '-framerate', String(FPS), '-t', n3(T), '-i', file]); }
  // half-frame margins so frame-aligned times never miss a frame through rounding
  over(srcLabel, x, y, t0, t1) {
    const o = this.lab();
    this.f.push(`[${this.main}][${srcLabel}]overlay=x=${x}:y=${y}:eof_action=pass:enable='between(t,${n3(t0 - 0.5 / FPS)},${n3(t1 - 0.5 / FPS)})'[${o}]`);
    this.main = o;
  }
  // still PNG shown t0..t1; opt.fade: alpha fade-in; opt.fadeOut: {st, d}; opt.rise: 12 px rise over 350 ms (ease-out quartic)
  png(el, t0, t1, opt = {}) {
    const i = this.still(el.file), a = this.lab('p');
    let chain = `[${i}:v]format=rgba`;
    if (opt.scale) chain += `,scale=${opt.scale}:${opt.scale}:flags=lanczos`;
    if (opt.fade) chain += `,fade=t=in:st=${n3(t0)}:d=${n3(opt.fade)}:alpha=1`;
    if (opt.fadeOut) chain += `,fade=t=out:st=${n3(opt.fadeOut.st)}:d=${n3(opt.fadeOut.d)}:alpha=1`;
    this.f.push(`${chain}[${a}]`);
    const y = opt.rise ? `'${el.y}+12*pow(1-clip((t-${n3(t0)})/0.35,0,1),4)'` : el.y;
    this.over(a, el.x, y, t0, t1);
  }
  bg(file) { const i = this.still(file), o = this.lab(); this.f.push(`[${i}:v]format=rgba,setsar=1[${o}]`); this.main = o; return o; }
  // demo segments of one shot -> patched, cropped, scaled, rounded window content starting at t0
  shotContent(segs, t0, dur, rect, patchFile) {
    const labels = [];
    let left = dur;
    segs.forEach((s, k) => {
      const crop = CROP[s.crop];
      const isLast = k === segs.length - 1;
      const d = s.hold !== undefined ? left : (s.b !== undefined && !isLast ? s.b - s.a : left);
      const N = Math.round(d * FPS);
      let r = this.lab('r');
      if (s.hold !== undefined) {
        const i = this.input(['-ss', n3(s.hold), '-i', SRC]);
        this.f.push(`[${i}:v]trim=end_frame=1,setpts=PTS-STARTPTS,loop=loop=${N - 1}:size=1:start=0,setpts=N/${FPS}/TB[${r}]`);
      } else {
        const sp = s.speed || 1;
        const i = this.input(['-ss', n3(s.a), '-t', n3(d * sp + 0.3), '-i', SRC]);
        this.f.push(`[${i}:v]setpts=(PTS-STARTPTS)/${sp},fps=${FPS},trim=end_frame=${N},setpts=PTS-STARTPTS[${r}]`);
      }
      if (s.patch) {
        const pi = this.still(patchFile), p = this.lab('pa');
        // blend in RGB so the patch's #FDFDFD lands on the card's #FDFDFD exactly (a YUV blend leaves a faint box)
        this.f.push(`[${r}]format=rgba[${p}s];[${p}s][${pi}:v]overlay=0:0:shortest=1:format=rgb[${p}]`);
        r = p;
      }
      const o = this.lab('s');
      let chain = `[${r}]crop=${crop.w}:${crop.h}:${crop.x}:${crop.y},scale=${rect.w}:${rect.h}:flags=lanczos,setsar=1`;
      if (s.push) chain += ',' + push(rect.w, rect.h, 0, d, s.push, 0.2);
      if (s.crop === 'dm' || s.crop === 'quote') {
        // the demo's purple page background becomes the window's ink
        const ink = this.lab('ink'), kk = this.lab('k');
        this.f.push(`${chain},format=rgba,colorkey=${DEMO_PURPLE}:0.13:0.06[${kk}]`);
        this.f.push(`color=c=${INK}:s=${rect.w}x${rect.h}:r=${FPS}:d=${n3(d)}[${ink}]`);
        this.f.push(`[${ink}][${kk}]overlay=0:0:shortest=1,format=rgba[${o}]`);
      } else {
        this.f.push(`${chain},format=rgba[${o}]`);
      }
      labels.push(o);
      left -= N / FPS;
    });
    let cat = labels[0];
    if (labels.length > 1) { cat = this.lab('cat'); this.f.push(`${labels.map(l => `[${l}]`).join('')}concat=n=${labels.length}:v=1:a=0[${cat}]`); }
    const mi = this.input(['-loop', '1', '-framerate', String(FPS), '-t', n3(dur + 0.1), '-i', roundedMask(rect.w, rect.h)]);
    const m = this.lab('m'), c = this.lab('c');
    this.f.push(`[${mi}:v]format=gray[${m}]`);
    // content frame k lands on output frame f0+k (half-frame offset avoids rounding misses at the cut)
    this.f.push(`[${cat}][${m}]alphamerge,setpts=PTS-STARTPTS+(${Math.round(t0 * FPS)}-0.5)/${FPS}/TB[${c}]`);
    return c;
  }
  async window(rect, t0, t1, segs, name, patchFile) {
    const fm = this.fm;
    const sh = await render({ kind: 'shadow', W: fm.W, H: fm.H, rect }, `${name}-shadow`);
    const bo = await render({ kind: 'border', W: fm.W, H: fm.H, rect }, `${name}-border`);
    this.png(sh, t0, t1);
    const c = this.shotContent(segs, t0, t1 - t0, rect, patchFile);
    this.over(c, rect.x, rect.y, t0, t1);
    this.png(bo, t0, t1);
  }
  // a still card built as its own layer stack, then pushed in slowly and laid over the timeline for t0..t1
  async card(bgPng, t0, t1, build, amount) {
    const keep = this.main;
    this.bg(bgPng);
    await build();
    const pushed = this.lab('card');
    this.f.push(`[${this.main}]${push(this.fm.W, this.fm.H, t0, t1, amount)}[${pushed}]`);
    this.main = keep;
    this.over(pushed, 0, 0, t0, t1);
  }
  endcard(file, t0) {
    const i = this.still(file), a = this.lab('e'), o = this.lab();
    this.f.push(`[${i}:v]scale=${this.fm.W}:${this.fm.H},format=rgba,${push(this.fm.W, this.fm.H, t0, T, 0.02)},fade=t=in:st=${n3(t0)}:d=0.35:alpha=1[${a}]`);
    this.f.push(`[${this.main}][${a}]overlay=0:0:enable='gte(t,${n3(t0 - 0.5 / FPS)})'[${o}]`);
    this.main = o;
  }
  run(outFile, voFile) {
    this.f.push(`[${this.main}]format=yuv420p[vout]`);
    const ai = this.input(['-i', voFile]);
    this.f.push(`[${ai}:a]aformat=sample_rates=48000:channel_layouts=stereo,apad,atrim=0:${n3(T)}[aout]`);
    const script = path.join(TMP, path.basename(outFile) + '.graph.txt');
    fs.writeFileSync(script, this.f.join(';\n'));
    for (let crf = CRF; crf <= CRF + 6; crf += 2) {
      ff([...this.inputs.flat(), '-/filter_complex', script, '-map', '[vout]', '-map', '[aout]',
        '-c:v', 'libx264', '-preset', 'slow', '-crf', String(crf), '-maxrate', '12M', '-bufsize', '24M',
        '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-r', String(FPS), '-frames:v', String(TF),
        '-c:a', 'aac', '-b:a', '128k', '-ar', '48000', '-ac', '2', '-t', n3(T), '-movflags', '+faststart', outFile]);
      const mb = fs.statSync(outFile).size / 1e6;
      console.log(`  ${rel(outFile)}  crf ${crf}  ${mb.toFixed(2)} MB`);
      if (mb < 15) break;
    }
  }
}

// ---------------------------------------------------------------- one format
async function build(fmtName, words, vo) {
  const fm = FMT[fmtName];
  const g = new Graph(fm);
  const bgPng = await bgFile(fmtName);
  g.bg(bgPng);
  const patch = await render({ kind: 'patch', W: 1080, H: 1920, p: PATCH }, 'patch');
  const shotT = SHOTS.map((s, i) => ({ ...s, t0: fr(CUTS[i]), t1: fr(CUTS[i + 1] || 639), f1: CUTS[i + 1] || 639 }));
  for (const s of shotT) {
    if (s.kind === 'win') {
      await g.window(fm.win[s.win], s.t0, s.t1, s.segs, `${fmtName}-${s.win}`, patch.file);
      if (s.poses) {
        for (const [k, p] of s.poses.entries()) {
          // the blob starts about 19% into the pose canvas: shift so it lines up with the window's left edge
          const el = { file: path.join(POSES, p.src), x: fm.hookPose.x - Math.round(fm.hookPose.w * 0.19), y: fm.hookPose.y };
          const next = s.poses[k + 1];
          // a later pose cross-fades in over 120 ms and replaces the one before
          g.png(el, s.t0 + p.t0, next ? s.t0 + next.t0 + 0.12 : s.t1, { scale: fm.hookPose.w, fade: k ? 0.12 : 0 });
        }
      }
    } else if (s.kind === 'headline') {
      const h = fm.head;
      const fit = await render({ kind: 'headfit', W: fm.W, H: fm.H, w: h.w, max: h.max, min: h.min, layouts: HEADLINE.a.layouts, other: HEADLINE.b.lines }, `${fmtName}-headfit`);
      const size = fit.info.size, linesA = HEADLINE.a.layouts[fit.info.layout], lh = Math.round(size * 1.02);
      const yB = h.y + linesA.length * lh;
      const aWhite = await render({ kind: 'headline', W: fm.W, H: fm.H, x: h.x, y: h.y, size, lines: linesA, color: '#F3EEFB' }, `${fmtName}-headA`);
      const aGrey = await render({ kind: 'headline', W: fm.W, H: fm.H, x: h.x, y: h.y, size, lines: linesA, color: '#9A8FAE' }, `${fmtName}-headA2`);
      const b = await render({ kind: 'headline', W: fm.W, H: fm.H, x: h.x, y: yB, size, lines: HEADLINE.b.lines, color: '#F3EEFB' }, `${fmtName}-headB`);
      const tA = Math.max(s.t0, fr(Math.floor((words[HEADLINE.a.word].s - 0.06) * FPS)));
      const tB = fr(Math.floor((words[HEADLINE.b.word].s - 0.06) * FPS));
      const poseY = yB + HEADLINE.b.lines.length * lh + h.gap;
      await g.card(bgPng, s.t0, s.t1, async () => {
        g.png({ file: path.join(POSES, s.pose), x: h.x - Math.round(h.pose * 0.25), y: poseY }, s.t0, s.t1, { scale: h.pose });
        // block A enters white; when block B enters, A dims to the label colour (same treatment as the end card)
        g.png(aWhite, tA, tB + 0.35, { fade: 0.25, rise: true, fadeOut: { st: tB, d: 0.35 } });
        g.png(aGrey, tB, s.t1, { fade: 0.35 });
        g.png(b, tB, s.t1, { fade: 0.25, rise: true });
      }, 0.02);
      console.log(`  headline ${size}px, ${linesA.length + HEADLINE.b.lines.length} lines; A at ${tA.toFixed(2)} s, B at ${tB.toFixed(2)} s`);
    }
  }
  // captions
  const caps = CAPS.map(([a, b]) => ({ a, b, text: WORDS.slice(a, b + 1).map(w => w[0]).join(' ').replace(/'/g, '\u2019'), s: words[a].s, e: words[b].e }));
  const log = [];
  for (const [k, c] of caps.entries()) {
    const shot = shotT.find(s => c.s >= s.t0 && c.s < s.t1);
    if (!shot || c.e > shot.t1) throw new Error(`caption "${c.text}" crosses a cut`);
    if (shot.kind === 'headline') throw new Error(`caption "${c.text}" falls on the headline card`);
    const next = caps[k + 1];
    const f0 = Math.max(Math.round(shot.t0 * FPS), Math.floor((c.s - 0.06) * FPS));
    const lastFrame = next && next.s < shot.t1 ? Math.floor((next.s - 0.06) * FPS) - 1 : shot.f1 - 2;  // ends one frame before the cut
    const el = await render({ kind: 'caption', W: fm.W, H: fm.H, y: fm.cap.y, w: fm.cap.w, size: fm.cap.size, text: c.text }, `${fmtName}-cap${k}`);
    g.png(el, fr(f0), fr(lastFrame + 1), { fade: 0.2, rise: true });
    log.push(`${fr(f0).toFixed(3)}-${fr(lastFrame).toFixed(3)}  "${c.text}"  (spoken ${c.s.toFixed(2)}-${c.e.toFixed(2)}, ${el.info.size}px)`);
  }
  g.endcard(path.join(STATIC, `end-card-${fmtName}.png`), ENDCARD);
  const file = path.join(OUT, `octo-narrates-${fmtName}.mp4`);
  g.run(file, vo);
  if (fmtName === '9x16') fs.writeFileSync(path.join(TMP, 'captions.txt'), `patch text ${patch.info.size}px\n` + log.join('\n') + '\n');
  return file;
}

function posterAndSheet(file, fmtName) {
  ff(['-ss', '1.2', '-i', file, '-frames:v', '1', path.join(OUT, `octo-narrates-${fmtName}-poster.png`)]);
  const tw = 180, th = fmtName === '9x16' ? 320 : 225, sc = tw / 1080;
  const font = path.join(FONTS, 'GeistMono-Medium.ttf');
  let f = `fps=2,scale=${tw}:${th}:flags=lanczos`;
  if (fmtName === '9x16') f += `,drawbox=y=${Math.round(250 * sc)}:w=iw:h=1:color=red@0.6,drawbox=y=${Math.round(1250 * sc)}:w=iw:h=1:color=red@0.6`;
  f += `,pad=${tw + 12}:${th + 40}:6:6:color=0x0D0818,drawtext=fontfile='${font}':text='%{pts\\:hms}':x=6:y=${th + 14}:fontsize=17:fontcolor=0x9A8FAE`;
  const n = Math.ceil(T * 2);
  f += `,tile=8x${Math.ceil(n / 8)}:color=0x0D0818`;
  const name = fmtName === '9x16' ? 'contact-octo-narrates.png' : 'contact-octo-narrates-4x5.png';
  ff(['-i', file, '-vf', f, '-frames:v', '1', path.join(OUT, name)]);
}

// ---------------------------------------------------------------- main
(async () => {
  const env = rmsEnvelope();
  const segs = speechSegments(env);
  const words = alignWords(segs);
  checkCuts(env, words);
  const vo = prepareVO();
  await startBrowser();
  try {
    for (const fmtName of ['9x16', '4x5']) {
      console.log(fmtName);
      const file = await build(fmtName, words, vo);
      posterAndSheet(file, fmtName);
    }
  } finally { await browser.close(); }
  console.log(fs.readFileSync(path.join(TMP, 'captions.txt'), 'utf8'));
  console.log('done; intermediates in', TMP);
})().catch(e => { console.error(e); process.exit(1); });
