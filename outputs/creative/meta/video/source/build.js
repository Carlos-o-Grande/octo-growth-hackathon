#!/usr/bin/env node
/*
 * Octo Meta video ads (founder's version: campaign "Who's doing what?").
 * Builds creative-1..4 (9:16 + 4:5), posters, contact sheets, and the creative-5 caption template.
 *
 * Run from the repo root:
 *   NODE_PATH=$HOME/node_modules node outputs/creative/meta/video/source/build.js            # all
 *   NODE_PATH=$HOME/node_modules node outputs/creative/meta/video/source/build.js creative-2 # one
 *   NODE_PATH=$HOME/node_modules node outputs/creative/meta/video/source/build.js creative-5 --selfie path/to/selfie.mp4 [--srt path/to/captions.srt]
 *
 * Needs: ffmpeg on PATH (or FFMPEG=...), playwright-core resolvable through NODE_PATH, Chrome or the
 * playwright Chromium. Copy comes verbatim from outputs/ads/meta-ads-v2.md and brief/campaign-brief.md.
 */
'use strict';
const path = require('path');
const fs = require('fs');
const os = require('os');
const { execFileSync } = require('child_process');
const { chromium } = require('playwright-core');

const HERE = __dirname;
const ROOT = path.resolve(HERE, '../../../../..');
const OUT = path.resolve(HERE, '..');
const SRC = path.join(ROOT, 'assets/octo-demo-36s-9x16.mp4');
const STATIC = path.join(ROOT, 'outputs/creative/meta/static');
const FONT_MONO = path.join(ROOT, 'outputs/website/landing/fonts/GeistMono-Medium.ttf');
const FF = process.env.FFMPEG || 'ffmpeg';
const FPS = 30;
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'octo-video-'));
const rel = p => path.relative(ROOT, p);

// ---------------------------------------------------------------- layout
// 9:16 safe zone: text and CTA between y 250 and y 1250 (top 250 px, bottom 35%). 4:5: 96 px margins.
const FMT = {
  '9x16': { W: 1080, H: 1920,
    win: { x: 166, y: 256, w: 748, h: 810 }, cap: { x: 166, y: 1096, w: 748 },
    card: { pose: { x: 96, y: 300, w: 240 }, head: { x: 96, y: 600, w: 888, size: 112, min: 80 } },
    glow: { x: 760, y: 820, r: 980 } },
  '4x5': { W: 1080, H: 1350,
    win: { x: 96, y: 96, w: 820, h: 888 }, cap: { x: 96, y: 1016, w: 820 },
    card: { pose: { x: 96, y: 150, w: 220 }, head: { x: 96, y: 440, w: 888, size: 108, min: 80 } },
    glow: { x: 760, y: 560, r: 900 } },
};
// demo crops (source pixels). Aspect of each crop matches the window it fills (0.923).
const CROP = {
  call: { x: 34, y: 184, w: 1012, h: 1096 },   // Octo's tile + participant grid
  dm: { x: 20, y: 190, w: 1040, h: 1126 },     // Octo's direct message, whole
  dmTight: { x: 50, y: 236, w: 980, h: 1062 }, // direct message close-up
  full: { x: 0, y: 120, w: 1080, h: 1480 },    // whole demo frame minus progress bar and footer (creative-1)
};

// ---------------------------------------------------------------- spoken lines (source time, read off the demo frame by frame)
// Max 8 words per caption. Speaker names are the made-up people in the demo.
const CAPS = [
  { s: 4.80, e: 5.60, who: 'Mark', t: 'Octo, where are we' },
  { s: 5.60, e: 7.33, who: 'Mark', t: 'with the landing page launch?' },
  { s: 7.33, e: 9.15, who: 'Octo', t: 'Two tasks are done, one is stuck:' },
  { s: 9.15, e: 10.55, who: 'Octo', t: 'the copy has been waiting' },
  { s: 10.55, e: 12.43, who: 'Octo', t: 'on Anna since Tuesday.' },
  { s: 12.43, e: 13.50, who: 'Anna', t: 'Yes, I’ll take it.' },
  { s: 13.50, e: 15.37, who: 'Anna', t: 'I’ll have it done by Friday.' },
  { s: 15.37, e: 16.55, who: 'Mark', t: 'And let’s do a quick sync' },
  { s: 16.55, e: 18.00, who: 'Mark', t: 'on Thursday at ten.' },
  { s: 18.00, e: 19.65, who: 'Octo', t: 'Got it: Anna has the copy by Friday,' },
  { s: 19.65, e: 20.90, who: 'Octo', t: 'sync on Thursday at ten.' },
  { s: 20.90, e: 23.60, who: 'Octo', t: 'I’ve added the event to the calendar.' },
  // narrator over the direct message (baked into the demo; re-set as clean captions where the cut crops them out)
  { s: 24.77, e: 26.10, t: 'After the call, everyone gets' },
  { s: 26.10, e: 27.65, t: 'their tasks in a direct message,' },
  { s: 27.65, e: 29.05, t: 'with a deadline and the exact' },
  { s: 29.05, e: 30.30, t: 'words the task came from.' },
];

// ---------------------------------------------------------------- renderer
let browser, page;
async function startBrowser() {
  try { browser = await chromium.launch({ channel: 'chrome' }); }
  catch (e) { browser = await chromium.launch(); }
  page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(HERE, 'overlay.html'));
}
const cache = new Map();
async function render(spec, name) {
  const key = JSON.stringify(spec);
  if (cache.has(key)) return cache.get(key);
  const vw = spec.kind === 'mask' || spec.kind === 'email' ? spec.w : spec.W;
  const vh = spec.kind === 'mask' ? spec.h : spec.kind === 'email' ? 3600 : spec.H;
  await page.setViewportSize({ width: vw, height: vh });
  const r = await page.evaluate(s => window.renderItem(s), spec);
  const file = path.join(TMP, name + '.png');
  await page.screenshot({ path: file, clip: { x: r.box.x, y: r.box.y, width: r.box.w, height: r.box.h }, omitBackground: !r.opaque });
  const out = { file, x: r.box.x, y: r.box.y, w: r.box.w, h: r.box.h, info: r.info };
  cache.set(key, out);
  return out;
}

// ---------------------------------------------------------------- ffmpeg graph helpers
function ff(args) {
  try { execFileSync(FF, ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: ['ignore', 'inherit', 'inherit'] }); }
  catch (e) {
    console.error('ffmpeg failed. Command:\n' + [FF, ...args].map(a => /[\s'();,]/.test(a) ? JSON.stringify(a) : a).join(' '));
    throw e;
  }
}
const n3 = x => (Math.round(x * 1000) / 1000).toString();
const rise = (y, t0) => `${y}+12*pow(1-clip((t-${n3(t0)})/0.35,0,1),4)`;  // used inside '...' quotes

// anti-aliased 24 px rounded-rect alpha mask, drawn by ffmpeg (exact at any size)
function roundedMask(w, h, r = 24) {
  const file = path.join(TMP, `mask-${w}x${h}.png`);
  if (!fs.existsSync(file)) {
    const e = `255*clip(${r + 1}-hypot(max(max(${r}-X,X-(W-${r + 1})),0),max(max(${r}-Y,Y-(H-${r + 1})),0)),0,1)`;
    ff(['-f', 'lavfi', '-i', `color=c=white:s=${w}x${h},format=gray`, '-vf', `geq=lum='${e}'`, '-frames:v', '1', file]);
  }
  return file;
}

class Graph {
  constructor(T, fmt) { this.T = T; this.fmt = fmt; this.inputs = []; this.f = []; this.k = 0; this.main = null; }
  input(args) { this.inputs.push(args); return this.inputs.length - 1; }
  lab(p) { return `${p || 'v'}${this.k++}`; }
  still(file) { return this.input(['-loop', '1', '-framerate', String(FPS), '-t', n3(this.T), '-i', file]); }
  // overlay a still PNG with fade + 12 px rise (anim) and quick fade-out before t1
  png(el, t0, t1, opt = {}) {
    const i = this.still(el.file), a = this.lab('p'), o = this.lab();
    const anim = opt.anim !== false && t0 > 0.001 || opt.forceAnim;
    let chain = `[${i}:v]format=rgba`;
    if (anim) chain += `,fade=t=in:st=${n3(t0)}:d=0.35:alpha=1`;
    if (t1 < this.T - 0.01 && opt.fadeOut !== false) chain += `,fade=t=out:st=${n3(t1 - 0.15)}:d=0.15:alpha=1`;
    this.f.push(`${chain}[${a}]`);
    const y = anim ? `'${rise(el.y, t0)}'` : el.y;
    this.f.push(`[${this.main}][${a}]overlay=x=${el.x}:y=${y}:eof_action=pass:enable='between(t,${n3(t0)},${n3(t1)})'[${o}]`);
    this.main = o;
  }
  bg(file) {
    // grain is baked once into the background still (static, about 2 percent): temporal grain multiplies the bitrate
    const i = this.still(file), o = this.lab();
    this.f.push(`[${i}:v]format=yuv420p,setsar=1[${o}]`);
    this.main = o;
  }
  // demo segment -> labelled stream of the given crop/size; segment {a,b} or {hold, dur}; s.pre(g, label) may edit source-space frames
  seg(s, w, h) {
    const o = this.lab('s');
    let r = this.lab('r');
    const crop = CROP[s.crop];
    if (s.hold !== undefined) {
      const i = this.input(['-ss', n3(s.hold), '-i', SRC]);
      const N = Math.round(s.dur * FPS);
      this.f.push(`[${i}:v]trim=end_frame=1,setpts=PTS-STARTPTS,loop=loop=${N - 1}:size=1:start=0,setpts=N/${FPS}/TB[${r}]`);
    } else {
      const N = Math.round((s.b - s.a) * FPS);
      const i = this.input(['-ss', n3(s.a), '-t', n3(s.b - s.a + 0.3), '-i', SRC]);
      this.f.push(`[${i}:v]trim=end_frame=${N},setpts=PTS-STARTPTS[${r}]`);
    }
    if (s.pre) r = s.pre(this, r);
    this.f.push(`[${r}]crop=${crop.w}:${crop.h}:${crop.x}:${crop.y},scale=${w}:${h}:flags=lanczos,setsar=1,format=rgba[${o}]`);
    return o;
  }
  // rounded window: shadow, content (alpha-masked), hairline border
  async window(rect, t0, t1, contentLabel, dur, name) {
    const W = this.fmt.W, H = this.fmt.H;
    const sh = await render({ kind: 'shadow', W, H, rect }, `${name}-shadow`);
    const bo = await render({ kind: 'border', W, H, rect }, `${name}-border`);
    const mk = { file: roundedMask(rect.w, rect.h) };
    const anim = t0 > 0.001;
    this.png(sh, t0, t1, { fadeOut: false });
    const mi = this.input(['-loop', '1', '-framerate', String(FPS), '-t', n3(dur), '-i', mk.file]);
    const m = this.lab('m'), c = this.lab('c'), o = this.lab();
    this.f.push(`[${mi}:v]format=gray[${m}]`);
    let chain = `[${contentLabel}][${m}]alphamerge,setpts=PTS+${n3(t0)}/TB`;
    if (anim) chain += `,fade=t=in:st=${n3(t0)}:d=0.35:alpha=1`;
    this.f.push(`${chain}[${c}]`);
    const y = anim ? `'${rise(rect.y, t0)}'` : rect.y;
    this.f.push(`[${this.main}][${c}]overlay=x=${rect.x}:y=${y}:eof_action=pass:enable='between(t,${n3(t0)},${n3(t1)})'[${o}]`);
    this.main = o;
    this.png({ ...bo }, t0, t1, { fadeOut: false });
  }
  concat(labels) {
    if (labels.length === 1) return labels[0];
    const o = this.lab('cat');
    this.f.push(`${labels.map(l => `[${l}]`).join('')}concat=n=${labels.length}:v=1:a=0[${o}]`);
    return o;
  }
  endcard(file, t0) {
    const i = this.still(file), a = this.lab('e'), o = this.lab();
    this.f.push(`[${i}:v]scale=${this.fmt.W}:${this.fmt.H},format=rgba,fade=t=in:st=${n3(t0)}:d=0.35:alpha=1[${a}]`);
    this.f.push(`[${this.main}][${a}]overlay=0:0:enable='gte(t,${n3(t0)})'[${o}]`);
    this.main = o;
  }
  // audio pieces from the demo: {a, b, at, tail}: short 60 ms crossfades at every join, `tail` = fade-out length at the end
  audio(pieces) {
    const xf = 0.06, labs = [];
    for (const p of pieces) {
      const pre = p.at > 0.001 ? Math.min(xf / 2, p.a) : 0;
      const a0 = p.a - pre, b1 = p.b + (p.tail ? 0 : xf / 2), len = b1 - a0;
      const i = this.input(['-ss', n3(a0), '-t', n3(len + 0.05), '-i', SRC]);
      const o = this.lab('a');
      const fin = p.at > 0.001 ? `afade=t=in:d=${xf},` : '';
      const fo = p.tail || xf;
      const d = Math.round((p.at - pre) * 1000);
      this.f.push(`[${i}:a]atrim=0:${n3(len)},asetpts=PTS-STARTPTS,aformat=sample_rates=48000:channel_layouts=mono,${fin}` +
        `afade=t=out:st=${n3(len - fo)}:d=${n3(fo)},adelay=${d}:all=1[${o}]`);
      labs.push(o);
    }
    // a silent bed from 0 to T keeps the mixed track starting at 0 (adelay shifts timestamps instead of padding)
    const bed = this.lab('a');
    this.f.push(`anullsrc=r=48000:cl=mono,atrim=0:${n3(this.T)}[${bed}]`);
    labs.unshift(bed);
    this.f.push(`${labs.map(l => `[${l}]`).join('')}amix=inputs=${labs.length}:normalize=0:duration=longest,aresample=async=1:first_pts=0,` +
      `apad,atrim=0:${n3(this.T)},aformat=sample_rates=48000:channel_layouts=stereo[aout]`);
  }
  // H.264 CRF 23 with an 8 Mbps cap; raise CRF by 2 until the file is under 30 MB
  run(outFile) {
    this.f.push(`[${this.main}]format=yuv420p[vout]`);
    const script = path.join(TMP, path.basename(outFile) + '.graph.txt');
    fs.writeFileSync(script, this.f.join(';\n'));
    for (let crf = 23; crf <= 31; crf += 2) {
      ff([...this.inputs.flat(), '-/filter_complex', script, '-map', '[vout]', '-map', '[aout]',
        '-c:v', 'libx264', '-preset', 'slow', '-crf', String(crf), '-maxrate', '8M', '-bufsize', '16M',
        '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-r', String(FPS), '-frames:v', String(Math.round(this.T * FPS)),
        '-c:a', 'aac', '-b:a', '128k', '-ar', '48000', '-ac', '2', '-t', n3(this.T), '-movflags', '+faststart', outFile]);
      const mb = fs.statSync(outFile).size / 1e6;
      console.log(`  ${rel(outFile)}  crf ${crf}  ${mb.toFixed(1)} MB`);
      if (mb < 30) break;
    }
  }
}

// ---------------------------------------------------------------- shared pieces
function endCardFile(fmtName) {
  const f = path.join(STATIC, `end-card-${fmtName}.png`);
  if (fs.existsSync(f) && !process.env.FALLBACK_ENDCARD) return f;
  return null;
}
async function endCard(fmtName) {
  const st = endCardFile(fmtName);
  if (st) return st;
  const fm = FMT[fmtName];
  const r = await render({ kind: 'endcard', W: fm.W, H: fm.H }, `endcard-${fmtName}`);
  const dest = path.join(OUT, fmtName === '9x16' ? 'end-card-fallback.png' : 'end-card-fallback-4x5.png');
  fs.copyFileSync(r.file, dest);
  console.log('  static end card missing, using fallback', rel(dest));
  return dest;
}
async function bgFile(fmtName) {
  const fm = FMT[fmtName];
  const plain = (await render({ kind: 'bg', W: fm.W, H: fm.H, glow: fm.glow }, `bg-${fmtName}`)).file;
  const grain = path.join(TMP, `bg-${fmtName}-grain.png`);
  if (!fs.existsSync(grain)) ff(['-i', plain, '-vf', 'format=rgb24,noise=alls=5:allf=u', '-frames:v', '1', grain]);
  return grain;
}
async function headline(fmtName, lines, name, pos) {
  const fm = FMT[fmtName], h = { ...fm.card.head, ...(pos || {}) };
  return render({ kind: 'headline', W: fm.W, H: fm.H, x: h.x, y: h.y, w: h.w, size: h.size, min: h.min, lines }, name);
}
async function pose(fmtName, src, name, pos) {
  const fm = FMT[fmtName], p = { ...fm.card.pose, ...(pos || {}) };
  return render({ kind: 'img', W: fm.W, H: fm.H, x: p.x, y: p.y, w: p.w, src }, name);
}
async function caption(fmtName, cap, c, name) {
  const fm = FMT[fmtName];
  // the text line sits at the same y with or without the speaker label
  const y = c.who ? cap.y : cap.y + 38;
  return render({ kind: 'caption', W: fm.W, H: fm.H, x: cap.x, y, w: cap.w, label: c.who ? c.who : '', text: c.t, size: cap.size || 44 }, name);
}
// captions for demo segments placed on the output timeline: segs [{a,b,at}]
function mapCaptions(segs, minDur = 0.45) {
  const out = [];
  for (const s of segs) {
    if (s.a === undefined) continue;
    for (const c of CAPS) {
      const a = Math.max(c.s, s.a), b = Math.min(c.e, s.b);
      if (b - a >= minDur) out.push({ ...c, t0: s.at + (a - s.a), t1: s.at + (b - s.a) });
    }
  }
  return out;
}
async function addCaptions(g, fmtName, cap, list, tag) {
  let k = 0;
  for (const c of list) {
    const el = await caption(fmtName, cap, c, `${tag}-cap${k++}`);
    g.png(el, c.t0, c.t1, { forceAnim: true });
  }
}
// window segments laid end to end from t0; returns {label, segsOnTimeline}
function windowContent(g, segs, w, h, t0) {
  let at = t0; const labels = [], timeline = [];
  for (const s of segs) {
    labels.push(g.seg(s, w, h));
    const dur = s.hold !== undefined ? s.dur : s.b - s.a;
    timeline.push({ ...s, at, dur });
    at += dur;
  }
  return { label: g.concat(labels), timeline, end: at };
}

// ---------------------------------------------------------------- creatives
const CREATIVES = {};

// 1. The demo: the 36 s demo as it is (in a window), hook first 2 s, captions where the demo has none, our end card.
CREATIVES['creative-1'] = async (fmtName) => {
  const fm = FMT[fmtName];
  const END = 30.4, T = 33.0;
  // whole demo frame in a window: s = 0.8 (9:16) puts the demo's own captions above y 1250
  const s = fmtName === '9x16' ? 0.8 : 0.782;
  const win = fmtName === '9x16' ? { x: 108, y: 140, w: 864, h: 1184 } : { x: 118, y: 96, w: 844, h: 1157 };
  const map = (sx, sy) => ({ x: Math.round(win.x + (sx - CROP.full.x) * s), y: Math.round(win.y + (sy - CROP.full.y) * s) });
  const g = new Graph(T, fm);
  g.bg(await bgFile(fmtName));
  // source-space masks: the demo headline under the hook (0 to 2 s, then fades out), the small in-call caption line (4.75 to 24.45 s)
  const hookMask = await render({ kind: 'rect', W: 1080, H: 1920, x: 40, y: 236, w: 1000, h: 262, color: '#3B007C' }, 'c1-hookmask');
  const pre = (gg, inL) => {
    const mi = gg.still(hookMask.file), ma = gg.lab('hm'), o = gg.lab('r');
    gg.f.push(`[${mi}:v]format=rgba,fade=t=out:st=2.0:d=0.3:alpha=1[${ma}]`);
    gg.f.push(`[${inL}]drawbox=x=34:y=1270:w=1012:h=242:color=0x1C1F21:t=fill:enable='between(t,4.75,24.45)'[${o}a]`);
    gg.f.push(`[${o}a][${ma}]overlay=${hookMask.x}:${hookMask.y}:eof_action=pass:enable='lte(t,2.35)'[${o}]`);
    return o;
  };
  const content = windowContent(g, [{ a: 0, b: END, crop: 'full', pre }], win.w, win.h, 0);
  await g.window(win, 0, END + 0.4, content.label, END, `c1-${fmtName}`);
  // hook over the demo headline position
  const hp = map(82, 262);
  const hook = await headline(fmtName, ['This meeting bot', 'talks back.'], `c1-${fmtName}-hook`,
    { x: hp.x, y: hp.y, w: win.w - (hp.x - win.x) - 48, size: 96, min: 72 });
  g.png(hook, 0, 2.0, { forceAnim: true });
  // captions inside the call panel, where the demo only has its small UI caption line
  const cp = map(64, 1288);
  const cap = { x: cp.x, y: cp.y, w: Math.round(960 * s) - 40, size: fmtName === '9x16' ? 44 : 42 };
  await addCaptions(g, fmtName, cap, mapCaptions([{ a: 4.8, b: 24.4, at: 4.8 }]).filter(c => c.who), `c1-${fmtName}`);
  g.endcard(await endCard(fmtName), END);
  g.audio([{ a: 0, b: 30.95, at: 0, tail: 0.5 }]);
  return { g, T, poster: 1.0, sheet: [1.0, 6.0, 10.6, 20.4, 28.8, 32.2] };
};

// 2. The junior PM: hook card (no founder footage exists) -> Octo's tile with the task list -> the task message -> end card.
CREATIVES['creative-2'] = async (fmtName) => {
  const fm = FMT[fmtName], T = 15.0, W0 = 3.4, WEND = 13.0;
  const g = new Graph(T, fm);
  g.bg(await bgFile(fmtName));
  const p = await pose(fmtName, '13-task-card.png', `c2-${fmtName}-pose`);
  g.png(p, 0, W0, { forceAnim: true });
  // no lime word here: the 13-task-card pose already carries the frame's one lime element
  const h1 = await headline(fmtName, ['Your team doesn’t have', 'a project manager.'], `c2-${fmtName}-h1`);
  const h2 = await headline(fmtName, ['Now it does.'], `c2-${fmtName}-h2`, { size: h1.info.size });
  const h3 = await headline(fmtName, ['No PM?', 'No problem.'], `c2-${fmtName}-h3`, { size: h1.info.size });
  g.png(h1, 0, 1.5, { forceAnim: true });
  g.png(h2, 1.5, 2.3);
  g.png(h3, 2.3, W0);
  const segs = [{ a: 7.9, b: 12.1, crop: 'call' }, { a: 25.0, b: 30.4, crop: 'dm' }];
  const wc = windowContent(g, segs, fm.win.w, fm.win.h, W0);
  await g.window(fm.win, W0, WEND + 0.4, wc.label, WEND - W0, `c2-${fmtName}`);
  await addCaptions(g, fmtName, fm.cap, mapCaptions(wc.timeline).map(c => ({ ...c, t1: Math.min(c.t1, WEND) })), `c2-${fmtName}`);
  g.endcard(await endCard(fmtName), WEND);
  g.audio([{ a: 7.9, b: 12.1, at: W0 }, { a: 25.0, b: 30.95, at: 7.6, tail: 0.5 }]);
  return { g, T, poster: 1.0, sheet: [1.0, 1.9, 2.9, 5.6, 11.6, 14.3] };
};

// 3. Note-taker vs Octo: split screen. Left a generic summary email scrolling, right Octo's tile then its task message.
CREATIVES['creative-3'] = async (fmtName) => {
  const fm = FMT[fmtName], T = 15.0, WEND = 13.0;
  const tall = fmtName === '9x16';
  const L = { x: 96, y: tall ? 576 : 400, w: 432, h: 468 }, R = { ...L, x: 552 };
  const cap = { x: 96, y: tall ? 1080 : 904, w: 888 };
  const g = new Graph(T, fm);
  g.bg(await bgFile(fmtName));
  const hy = tall ? 268 : 96;
  const hA = await headline(fmtName, ['Your note-taker', 'writes it down.'], `c3-${fmtName}-hA`, { y: hy, size: 104 });
  const hB = await headline(fmtName, ['Octo does it.'], `c3-${fmtName}-hB`, { y: hy, size: hA.info.size });
  g.png(hA, 0, 2.0, { forceAnim: true });
  g.png(hB, 2.0, WEND);  // no lime word: the product UI on the right already carries lime
  const ly = L.y - 64;
  const lab1 = await render({ kind: 'label', W: fm.W, H: fm.H, x: L.x, y: ly, text: 'Your note-taker', hairline: L.w }, `c3-${fmtName}-lab1`);
  const lab2 = await render({ kind: 'label', W: fm.W, H: fm.H, x: R.x, y: ly, text: 'Octo', hairline: R.w }, `c3-${fmtName}-lab2`);
  g.png(lab1, 0, WEND, { anim: false, fadeOut: false });
  g.png(lab2, 0, WEND, { anim: false, fadeOut: false });
  // left: generic AI summary email, slow scroll (rendered from HTML; no real product UI or logo)
  const em = await render({ kind: 'email', w: L.w }, `email-${L.w}`);
  const ei = g.still(em.file), card = g.lab('em');
  g.f.push(`color=c=0xFAF9FB:s=${L.w}x${L.h}:r=${FPS}:d=${n3(WEND)},format=rgba[${card}b]`);
  g.f.push(`[${card}b][${ei}:v]overlay=x=0:y='-min(t/${n3(WEND)},1)*${em.h - L.h + 40}':eof_action=pass,format=rgba[${card}]`);
  await g.window(L, 0, WEND + 0.4, card, WEND, `c3-${fmtName}-L`);
  // right: Octo's tile capturing the tasks, then the task message with the exact quote, held
  const segs = [{ a: 18.0, b: 23.3, crop: 'call' }, { a: 25.3, b: 30.4, crop: 'dmTight' }, { hold: 30.3, dur: 2.6, crop: 'dmTight' }];
  const wc = windowContent(g, segs, R.w, R.h, 0);
  await g.window(R, 0, WEND + 0.4, wc.label, WEND, `c3-${fmtName}-R`);
  await addCaptions(g, fmtName, cap, mapCaptions(wc.timeline), `c3-${fmtName}`);
  g.endcard(await endCard(fmtName), WEND);
  g.audio([{ a: 18.0, b: 23.3, at: 0 }, { a: 25.3, b: 30.95, at: 5.3, tail: 0.5 }]);
  return { g, T, poster: 1.0, sheet: [1.0, 3.2, 6.4, 9.6, 12.4, 14.3] };
};

// 4. The receipt: hook card -> task message close-up -> Anna -> Octo's tile "updated in tracker" -> check overlay -> end card.
CREATIVES['creative-4'] = async (fmtName) => {
  const fm = FMT[fmtName], T = 15.0, W0 = 2.0, WEND = 13.0;
  const g = new Graph(T, fm);
  g.bg(await bgFile(fmtName));
  const p = await pose(fmtName, '08-surprised.png', `c4-${fmtName}-pose`);
  g.png(p, 0, W0, { forceAnim: true });
  const h = await headline(fmtName, ['*No more* ‘I never', 'said that.’'], `c4-${fmtName}-hook`);
  g.png(h, 0, W0, { forceAnim: true });
  const segs = [
    { a: 27.6, b: 30.4, crop: 'dmTight' },
    { a: 12.5, b: 14.9, crop: 'call' },
    { a: 20.0, b: 22.4, crop: 'call' },
    { hold: 30.3, dur: 3.4, crop: 'dmTight' },
  ];
  const wc = windowContent(g, segs, fm.win.w, fm.win.h, W0);
  await g.window(fm.win, W0, WEND + 0.4, wc.label, WEND - W0, `c4-${fmtName}`);
  const caps = mapCaptions(wc.timeline);
  // the demo has no "done" moment: the check is an overlay; caption words from the ad's primary text
  caps.push({ t: 'when someone says “done” on the next call,', t0: 9.7, t1: 11.4 });
  caps.push({ t: 'it’s done in your tracker too.', t0: 11.4, t1: WEND });
  await addCaptions(g, fmtName, fm.cap, caps, `c4-${fmtName}`);
  const sc = fm.win.w / CROP.dmTight.w;
  const chk = await render({ kind: 'check', W: fm.W, H: fm.H, size: Math.round(76 * sc),
    x: Math.round(fm.win.x + (918 - CROP.dmTight.x) * sc), y: Math.round(fm.win.y + (586 - CROP.dmTight.y) * sc) }, `c4-${fmtName}-check`);
  g.png(chk, 11.4, WEND, { forceAnim: true });
  g.endcard(await endCard(fmtName), WEND);
  g.audio([{ a: 27.6, b: 30.4, at: W0 }, { a: 12.5, b: 14.9, at: 4.8 }, { a: 20.0, b: 23.3, at: 7.2, tail: 0.5 }]);
  return { g, T, poster: 1.0, sheet: [1.0, 3.4, 6.0, 8.4, 12.2, 14.3] };
};

// 5. Founder to camera: no footage. Caption template + optional burn-in when a selfie video is supplied.
const C5_HOOK = ['We don’t have a PM.', 'We have *Octo*.'];
const C5_LINES = [
  'I run a small team', 'and we don’t have a project manager.', 'Every call ended with', '‘so who’s doing what?’',
  'and then nothing happened.', 'So we built Octo.', 'It joins the call,', 'you can ask it things out loud,',
  'and after the call', 'everyone gets their own tasks', 'with the exact words they said.', 'It’s on our calls every day.',
  'Early access is open, link below.',
];
const srtTime = t => { const ms = Math.round(t * 1000); const h = Math.floor(ms / 3600000), m = Math.floor(ms / 60000) % 60, s = Math.floor(ms / 1000) % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')},${String(ms % 1000).padStart(3, '0')}`; };
function c5Timing() {
  // estimate: 2.7 words per second, a short pause after each sentence; replace with the real timing of the take
  let t = 0.4; const out = [];
  for (const l of C5_LINES) {
    const d = Math.max(1.0, l.split(/\s+/).length / 2.7);
    out.push({ t: l, t0: t, t1: t + d });
    t += d + (/[.?’]$/.test(l) ? 0.25 : 0.05);
  }
  return out;
}
function parseSrt(file) {
  const txt = fs.readFileSync(file, 'utf8').replace(/\r/g, '');
  const toS = s => { const [h, m, r] = s.split(':'); const [sec, ms] = r.split(','); return +h * 3600 + +m * 60 + +sec + +ms / 1000; };
  return txt.split(/\n\n+/).map(b => b.trim().split('\n')).filter(b => b.length >= 3)
    .map(b => { const [a, z] = b[1].split(' --> '); return { t0: toS(a.trim()), t1: toS(z.trim()), t: b.slice(2).join(' ') }; });
}
async function creative5(opts) {
  const dir = path.join(OUT, 'creative-5');
  fs.mkdirSync(dir, { recursive: true });
  const timing = opts.srt ? parseSrt(opts.srt) : c5Timing();
  if (!opts.srt) {
    fs.writeFileSync(path.join(dir, 'captions.srt'),
      timing.map((c, i) => `${i + 1}\n${srtTime(c.t0)} --> ${srtTime(c.t1)}\n${c.t}\n`).join('\n'));
  }
  const res = {};
  for (const fmtName of ['9x16', '4x5']) {
    const fm = FMT[fmtName], tall = fmtName === '9x16';
    const hook = await headline(fmtName, C5_HOOK, `c5-${fmtName}-hook`, { y: tall ? 290 : 110, size: 112 });
    const topScrim = await render({ kind: 'rect', W: fm.W, H: fm.H, x: 0, y: 0, w: fm.W, h: tall ? 640 : 420, color: 'linear-gradient(180deg, rgba(13,8,24,0.78), rgba(13,8,24,0))' }, `c5-${fmtName}-topscrim`);
    const botScrim = await render({ kind: 'scrim', W: fm.W, H: fm.H, y: tall ? 760 : 820 }, `c5-${fmtName}-scrim`);
    const cap = { x: 96, y: tall ? 1110 : 1100, w: 888, size: 48 };
    const caps = [];
    for (let i = 0; i < timing.length; i++) caps.push(await caption(fmtName, cap, { t: timing[i].t }, `c5-${fmtName}-cap${String(i + 1).padStart(2, '0')}`));
    // template files: overlay PNGs (full canvas, transparent) for editors who prefer their own tool
    const tdir = path.join(dir, `overlays-${fmtName}`);
    fs.mkdirSync(tdir, { recursive: true });
    const place = (el, name) => ff(['-f', 'lavfi', '-i', `color=c=black@0.0:s=${fm.W}x${fm.H},format=rgba`, '-i', el.file,
      '-filter_complex', `[0][1]overlay=${el.x}:${el.y}:format=auto,format=rgba`, '-frames:v', '1', path.join(tdir, name)]);
    place(hook, 'hook.png'); place(topScrim, 'scrim-top.png'); place(botScrim, 'scrim-bottom.png');
    caps.forEach((c, i) => place(c, `caption-${String(i + 1).padStart(2, '0')}.png`));
    res[fmtName] = { hook, topScrim, botScrim, caps, cap };
    // preview on a neutral placeholder (no face footage exists)
    const prev = path.join(dir, `preview-${fmtName}.png`);
    ff(['-f', 'lavfi', '-i', `gradients=s=${fm.W}x${fm.H}:c0=0x3a3440:c1=0x15111F:x0=0:y0=0:x1=${fm.W}:y1=${fm.H}:nb_colors=2`,
      '-i', topScrim.file, '-i', botScrim.file, '-i', hook.file, '-i', caps[1].file,
      '-filter_complex', `[0][1]overlay=${topScrim.x}:${topScrim.y}[a];[a][2]overlay=${botScrim.x}:${botScrim.y}[b];[b][3]overlay=${hook.x}:${hook.y}[c];[c][4]overlay=${caps[1].x}:${caps[1].y}` +
      (tall ? `,drawbox=y=250:w=iw:h=2:color=red@0.5,drawbox=y=1250:w=iw:h=2:color=red@0.5` : ''),
      '-frames:v', '1', prev]);
  }
  if (!opts.selfie) return [];
  // burn-in: selfie scaled to fill, scrims, hook 0 to 2 s, captions on the SRT timing, end card for 2 s
  const outs = [];
  const dur = parseFloat(execFileSync(process.env.FFPROBE || 'ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', opts.selfie]).toString());
  for (const fmtName of ['9x16', '4x5']) {
    const fm = FMT[fmtName], r = res[fmtName], T = Math.round((dur + 2.0) * FPS) / FPS;
    const g = new Graph(T, fm);
    const vi = g.input(['-i', opts.selfie]);
    const v = g.lab();
    g.f.push(`[${vi}:v]scale=${fm.W}:${fm.H}:force_original_aspect_ratio=increase,crop=${fm.W}:${fm.H},setsar=1,fps=${FPS},tpad=stop_mode=clone:stop_duration=2.5[${v}]`);
    g.main = v;
    g.png(r.topScrim, 0, 2.3, { anim: false });
    g.png(r.botScrim, 0, dur, { anim: false });
    g.png(r.hook, 0, 2.0, { forceAnim: true });
    for (let i = 0; i < timing.length; i++) {
      const el = await caption(fmtName, r.cap, { t: timing[i].t }, `c5-${fmtName}-capx${i}`);
      g.png(el, timing[i].t0, Math.min(timing[i].t1, dur), { forceAnim: true });
    }
    g.endcard(await endCard(fmtName), dur);
    g.f.push(`[${vi}:a]aformat=sample_rates=48000:channel_layouts=stereo,afade=t=out:st=${n3(Math.max(0, dur - 0.4))}:d=0.4,apad,atrim=0:${n3(T)}[aout]`);
    const of = path.join(OUT, `creative-5-${fmtName}.mp4`);
    g.run(of);
    outs.push(of);
  }
  return outs;
}

// ---------------------------------------------------------------- posters and contact sheets
function posterAndSheet(file, t, times, fmtName, base) {
  ff(['-ss', n3(t), '-i', file, '-frames:v', '1', path.join(OUT, `${base}-poster.png`)]);
  const tw = 360, th = fmtName === '9x16' ? 640 : 450, sc = tw / 1080;
  const ins = [], fl = [];
  times.forEach((tt, i) => {
    ins.push('-ss', n3(tt), '-i', file);
    let f = `[${i}:v]scale=${tw}:${th}`;
    // safe-zone guides for the reviewer (9:16: y 250 and y 1250)
    if (fmtName === '9x16') f += `,drawbox=y=${Math.round(250 * sc)}:w=iw:h=1:color=red@0.6,drawbox=y=${Math.round(1250 * sc)}:w=iw:h=1:color=red@0.6`;
    f += `,pad=${tw + 16}:${th + 52}:8:8:color=0x0D0818,drawtext=fontfile='${FONT_MONO}':text='${tt.toFixed(1)} s':x=8:y=${th + 20}:fontsize=20:fontcolor=0x9A8FAE[t${i}]`;
    fl.push(f);
  });
  fl.push(`${times.map((_, i) => `[t${i}]`).join('')}hstack=inputs=${times.length}`);
  ff([...ins, '-filter_complex', fl.join(';'), '-frames:v', '1', path.join(OUT, `contact-${base}.png`)]);
}

// ---------------------------------------------------------------- main
(async () => {
  const args = process.argv.slice(2);
  const opt = { selfie: null, srt: null };
  const ids = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--selfie') opt.selfie = args[++i];
    else if (args[i] === '--srt') opt.srt = args[++i];
    else ids.push(args[i]);
  }
  const want = ids.length ? ids : ['creative-1', 'creative-2', 'creative-3', 'creative-4', 'creative-5'];
  await startBrowser();
  try {
    for (const id of want) {
      if (id === 'creative-5') { console.log('creative-5 (template)'); await creative5(opt); continue; }
      for (const fmtName of ['9x16', '4x5']) {
        console.log(`${id} ${fmtName}`);
        const r = await CREATIVES[id](fmtName);
        const base = `${id}-${fmtName}`;
        const file = path.join(OUT, `${base}.mp4`);
        r.g.run(file);
        posterAndSheet(file, r.poster, r.sheet, fmtName, base);
      }
    }
  } finally {
    await browser.close();
  }
  console.log('done; intermediates in', TMP);
})().catch(e => { console.error(e); process.exit(1); });
