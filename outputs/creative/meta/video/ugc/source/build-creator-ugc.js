#!/usr/bin/env node
/*
 * Octo UGC ad, "creator" cut (9:16, ~27 s).
 * AI-avatar creator to camera + the real Octo demo (question to Octo, Octo's answer on its tile,
 * the task DM with Anna's quote, the "updated in tracker" tile) + the static end card.
 *
 * Run from the repo root:
 *   NODE_PATH=$HOME/node_modules node outputs/creative/meta/video/ugc/source/build-creator-ugc.js
 *
 * Needs ffmpeg with libass (or FFMPEG=...), playwright-core through NODE_PATH, Chrome or the
 * playwright Chromium. No paid tools, no AI generation. Intermediates go to the system temp folder.
 */
'use strict';
const path = require('path');
const fs = require('fs');
const os = require('os');
const { execFileSync, spawnSync } = require('child_process');
const { chromium } = require('playwright-core');

const HERE = __dirname;
const UGC = path.resolve(HERE, '..');
const ROOT = path.resolve(HERE, '../../../../../..');
const CREATOR = path.join(HERE, 'creator-body-v1.mp4');
const DEMO = path.join(ROOT, 'assets/octo-demo-36s-9x16.mp4');
const ENDCARD = path.join(ROOT, 'outputs/creative/meta/static/end-card-9x16.png');
const FONTS = path.join(ROOT, 'outputs/website/landing/fonts');
const OUT = path.join(UGC, 'creator-ugc-9x16.mp4');
const POSTER = path.join(UGC, 'creator-ugc-9x16-poster.png');
const REVIEW = path.join(UGC, 'review-frames');
const CONTACT = path.join(UGC, 'contact-creator-ugc.png');
const FF = process.env.FFMPEG || 'ffmpeg';
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'octo-ugc-'));
const FPS = 25, FR = 1 / FPS;
const W = 1080, H = 1920;
const MAX_BYTES = 14.8e6;

const ff = args => execFileSync(FF, ['-hide_banner', '-loglevel', 'error', '-y', ...args],
  { stdio: ['ignore', 'ignore', 'inherit'], maxBuffer: 1 << 26 });
const ffStderr = args => spawnSync(FF, ['-hide_banner', '-nostats', ...args], { maxBuffer: 1 << 26 }).stderr.toString();
const f = x => x.toFixed(2);

// ------------------------------------------------------------------ edit decision list (whole frames at 25 fps)
// Creator pieces, source seconds. Pauses between phrases are removed with jump cuts that enter 2 frames before
// the audio attack (the avatar moves its lips in the pauses); every jump cut alternates the zoom (z 0 = 12 %,
// z 1 = 16 %, a ~3.5 % punch-in). The first 0.32 s are cut (mouth opens before the audio).
const A_PIECES = [
  { s: 0.32, e: 0.96, z: 0 },   // "Okay."
  { s: 1.20, e: 4.16, z: 1 },   // "If your team doesn't have a project manager, you need to see this."
  { s: 4.40, e: 6.80, z: 0 },   // "It's called Octo, and it joins your calls."
  { s: 7.00, e: 7.56, z: 1 },   // "Watch."  -> hard cut
];
const B = { s: 4.68, vs: 5.00, e: 12.16 };   // demo: Mark asks Octo, Octo answers on its tile (ends before Anna's "Yes").
                                             // Picture starts on the first call frame (5.00), held for the first 0.32 s.
const C1 = { s: 8.52, e: 9.52, z: 0 };       // hard cut in; "After" attacks at ~8.60. "After the call,"
const XC1 = 0.24;                            // dissolve full -> split inside the pause 9.24-9.54
const SPLIT = { s: 9.28, e: 14.80 };         // "everyone gets ... ClickUp or Asana." then a hard cut
const C3_PIECES = [
  { s: 15.40, e: 16.92, z: 0 },  // "Note-takers record the meeting."
  { s: 17.08, e: 18.48, z: 1 },  // "Octo takes part in it."
  { s: 18.64, e: 20.68, z: 0 },  // "Invite Octo to your next call."
];
const X3 = 0.36, DLEN = 2.40;                // dissolve to the end card ("call." ends 20.29-20.35)

// split-screen B-roll shots (source = creator seconds, demo = demo seconds); 0.2 s dissolves in the pauses
const DMA = { s: 9.28, e: 11.22, demo: 26.80 };   // DM header + task card top (card fully on screen at 26.8)
const DMB = { s: 11.02, e: 12.98, demo: 28.34 };  // summary + Anna's quote; highlight lands on "with the exact"
const TR = { s: 12.78, e: 14.80, demo: 19.00 };   // Octo's tile: "Captured" + "updated in tracker" (badge at ~19.4)
const XB = 0.20;

// timeline
let t = 0;
for (const p of A_PIECES) { p.out = t; t += p.e - p.s; }
const tB = t, lenB = B.e - B.s;
const tC = tB + lenB;                          // C1 and the split share source time: out = tC + src - C1.s
const outCS = s => tC + s - C1.s;
const tC3 = outCS(SPLIT.e);
t = tC3;
for (const p of C3_PIECES) { p.out = t; t += p.e - p.s; }
const tD = t - X3;
const TOTAL = tD + DLEN;

// ------------------------------------------------------------------ layout (9:16 safe zone: text between y 250 and 1250)
const CROP_B = { x: 37, y: 186, w: 1006, h: 682 };       // Octo's whole tile with 18 px of call background all round
const WIN_B = { x: 37, y: 336, w: 1006, h: 682 };
const SEAM = 920;                                        // split: B-roll above, creator below
const WIN_DM = { x: 110, y: 326, w: 860, h: 498 };       // DM crops 1000x580 at 0.86
const CROP_DMA = { x: 40, y: 236, w: 1000, h: 580 };     // header + "Landing page copy", status, due, divider
const CROP_DMB = { x: 40, y: 664, w: 1000, h: 580 };     // status, due, summary, quote, card bottom
const CROP_TR = { x: 62, y: 212, w: 956, h: 236 };       // inside the lime border, padded with the tile colour
const WIN_TR = { x: 42, y: 437, w: 996, h: 276 };
const CAP_Y = { full: 1228, demo: 1188, split: 906 };    // caption baselines (bottom of the block)
const LABEL = { x: 96, y: 282, endY: 1146 };             // AI disclosure; on the end card it sits above "Octo by Octocrew"

// ------------------------------------------------------------------ captions (hand-made, max 19 chars, never across a cut)
// [segment, start, end, text, position]; A/C in creator seconds, B in demo seconds (in-call captions read frame by frame).
const CAPS = [
  ['A', 0.34, 0.92, 'Okay.'],
  ['A', 1.30, 1.74, 'If your team'], ['A', 1.74, 2.24, 'doesn’t have'], ['A', 2.24, 3.14, 'a project manager,'],
  ['A', 3.14, 3.58, 'you need'], ['A', 3.58, 4.12, 'to see this.'],
  ['A', 4.46, 5.52, 'It’s called Octo,'], ['A', 5.52, 6.08, 'and it joins'], ['A', 6.08, 6.76, 'your calls.'],
  ['A', 7.06, 7.52, 'Watch.'],
  ['B', 4.88, 5.60, 'Octo, where are we', 'MARK'], ['B', 5.60, 6.28, 'with the landing', 'MARK'],
  ['B', 6.28, 7.30, 'page launch?', 'MARK'], ['B', 7.36, 8.40, 'Two tasks are done,', 'OCTO'],
  ['B', 8.40, 9.28, 'one is stuck:', 'OCTO'], ['B', 9.28, 10.36, 'the copy has been', 'OCTO'],
  ['B', 10.36, 11.18, 'waiting on Anna', 'OCTO'],            // "since Tuesday." left out: the tile shows it
  ['C', 8.60, 9.24, 'After the call,', 'full'],
  ['C', 9.54, 10.33, 'everyone gets', 'split'], ['C', 10.33, 10.98, 'their own tasks,', 'split'],
  ['C', 11.26, 11.90, 'with the exact', 'split'], ['C', 11.90, 12.74, 'words they said,', 'split'],
  ['C', 13.02, 13.62, 'straight into', 'split'], ['C', 13.62, 14.76, 'ClickUp or Asana.', 'split'],
  ['C', 15.45, 16.17, 'Note-takers record', 'full'], ['C', 16.17, 16.88, 'the meeting.', 'full'],
  ['C', 17.15, 17.84, 'Octo takes part', 'full'], ['C', 17.84, 18.44, 'in it.', 'full'],
  ['C', 18.70, 19.24, 'Invite Octo', 'full'], ['C', 19.24, 20.28, 'to your next call.', 'full'],
];
function toOut(seg, s) {
  if (seg === 'B') return tB + s - B.s;
  const pieces = seg === 'A' ? A_PIECES : [{ s: C1.s, e: SPLIT.e, out: tC }, ...C3_PIECES];
  const p = pieces.find(q => s >= q.s - 1e-6 && s < q.e);
  if (!p) throw new Error(`caption at ${seg} ${s} is in a removed pause`);
  return p.out + s - p.s;
}
// every cut / transition in output time: [start, duration]
const CUTS = [
  ...A_PIECES.slice(1).map(p => [p.out, 0]), [tB, 0], [tC, 0], [outCS(SPLIT.s), XC1],
  [outCS(DMB.s), XB], [outCS(TR.s), XB], [tC3, 0], ...C3_PIECES.slice(1).map(p => [p.out, 0]), [tD, X3],
];

// handheld drift: a few px, continuous over the whole creator take (t = creator seconds)
const SHX = '(3.0*sin(2*PI*0.53*t)+1.6*sin(2*PI*1.37*t+1.3)+0.6*sin(2*PI*2.9*t+0.4))';
const SHY = '(2.6*sin(2*PI*0.41*t+0.7)+1.4*sin(2*PI*1.13*t+2.1)+0.5*sin(2*PI*3.3*t+1.9))';
// zoom levels, face kept at the same place on screen (nose ~ x 535, eyes ~ y 557)
const ZOOM = [{ w: 1210, h: 2150, x: 75, y: 70 }, { w: 1254, h: 2228, x: 97, y: 93 }];
const SPLIT_Z = { w: 1124, h: 1998, x: 27, y: 435 };

// ------------------------------------------------------------------ overlays rendered in headless Chrome
const CSS_BASE = `*{margin:0;padding:0;box-sizing:border-box}html,body{width:${W}px;height:${H}px;background:transparent;overflow:hidden}`;
const box = r => `left:${r.x}px;top:${r.y}px;width:${r.w}px;height:${r.h}px`;
const frameHtml = r => `<style>${CSS_BASE}.w{position:absolute;${box(r)};border-radius:24px;
  box-shadow:0 36px 84px rgba(5,2,12,.62),0 8px 22px rgba(5,2,12,.36);border:1px solid rgba(255,255,255,.14)}</style><div class="w"></div>`;
const PAGES = {
  // spec background: near-black violet #0D0818 to #1A0033, one soft off-centre #3F007F glow, fine grain
  'bg.png': `<style>${CSS_BASE}
    body{background:linear-gradient(180deg,#0D0818 0%,#1A0033 100%)}
    .glow{position:absolute;left:-120px;top:-380px;width:1500px;height:1500px;border-radius:50%;
      background:radial-gradient(circle at 50% 50%,rgba(63,0,127,.62) 0%,rgba(63,0,127,.22) 42%,rgba(63,0,127,0) 70%)}
    svg{position:absolute;inset:0;opacity:.05}</style>
    <div class="glow"></div>
    <svg width="${W}" height="${H}"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`,
  'frame-b.png': frameHtml(WIN_B), 'frame-dm.png': frameHtml(WIN_DM), 'frame-tr.png': frameHtml(WIN_TR),
  'seam.png': `<style>${CSS_BASE}
    .seam{position:absolute;left:0;top:${SEAM}px;width:${W}px;height:44px;background:linear-gradient(180deg,rgba(13,8,24,.42),rgba(13,8,24,0))}
    .line{position:absolute;left:0;top:${SEAM}px;width:${W}px;height:1px;background:rgba(255,255,255,.16)}</style>
    <div class="seam"></div><div class="line"></div>`,
  'mask-b.png': [WIN_B.w, WIN_B.h], 'mask-dm.png': [WIN_DM.w, WIN_DM.h], 'mask-tr.png': [WIN_TR.w, WIN_TR.h],
};
async function renderOverlays() {
  let browser;
  try { browser = await chromium.launch({ channel: 'chrome' }); } catch (e) { browser = await chromium.launch(); }
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  for (const [name, html] of Object.entries(PAGES)) {
    const file = path.join(TMP, name);
    if (Array.isArray(html)) {   // luma masks for alphamerge: white rounded rect on black
      const [w, h] = html;
      await page.setViewportSize({ width: w, height: h });
      await page.setContent(`<style>*{margin:0}body{background:#000;width:${w}px;height:${h}px}
        div{width:${w}px;height:${h}px;border-radius:24px;background:#fff}</style><div></div>`);
      await page.screenshot({ path: file });
      await page.setViewportSize({ width: W, height: H });
    } else {
      await page.setContent(html);
      await page.screenshot({ path: file, omitBackground: name !== 'bg.png' });
    }
  }
  await browser.close();
}

// ------------------------------------------------------------------ ASS captions + AI disclosure label
const assTime = x => {
  x = Math.max(0, x);
  const cs = Math.round(x * 100), h = Math.floor(cs / 360000), m = Math.floor(cs / 6000) % 60, s = Math.floor(cs / 100) % 60;
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs % 100).padStart(2, '0')}`;
};
function writeAss() {
  const ev = [];
  const line = (layer, s, e, style, tags, text) => ev.push(`Dialogue: ${layer},${assTime(s)},${assTime(e)},${style},,0,0,0,,{${tags}}${text}`);
  const speakers = [];
  for (const [seg, s, e, text, pos] of CAPS) {
    const os_ = toOut(seg, s), oe = os_ + (e - s);
    if (text.replace(/’/g, "'").length > 19) throw new Error(`caption too long: ${text}`);
    for (const [c, d] of CUTS) {   // ends at least one frame before a cut starts, or starts after the transition ends
      if (!(oe <= c - FR + 1e-6 || os_ >= c + d - 1e-6)) throw new Error(`caption "${text}" crosses the cut at ${f(c)}`);
    }
    const y = seg === 'B' ? CAP_Y.demo : CAP_Y[pos || 'full'];
    if (!y) throw new Error(`no caption position for ${text}`);
    line(1, os_, oe, 'Cap', `\\an2\\pos(540,${y})\\fad(80,40)\\blur2.5`, text);
    if (seg === 'B') {
      const last = speakers[speakers.length - 1];
      if (last && last.who === pos) last.e = oe; else speakers.push({ who: pos, s: os_, e: oe });
    }
  }
  for (const p of speakers) line(1, p.s, p.e, 'Spk', `\\an2\\pos(540,${CAP_Y.demo - 90})\\fad(80,40)`, p.who);
  // Meta AI disclosure for the whole video: top left (soft dark halo so it reads on the white wall), then on the
  // end card next to the brand line
  const sw = tD + X3 / 2;
  for (const [s, e, y] of []) { // label removed by team decision
    line(0, s, e, 'Lbl', `\\an7\\pos(${LABEL.x},${y})\\1a&HFF&\\bord7\\blur7\\3c&H180813&\\3a&H78&`, 'AI-GENERATED PRESENTER');
    line(1, s, e, 'Lbl', `\\an7\\pos(${LABEL.x},${y})\\bord0`, 'AI-GENERATED PRESENTER');
  }
  const ass = `[Script Info]
ScriptType: v4.00+
PlayResX: ${W}
PlayResY: ${H}
WrapStyle: 2
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Cap,Inter SemiBold,70,&H00FBEEF3,&H00FFFFFF,&H5A180813,&H96180813,0,0,0,0,100,100,-1,0,1,3.2,0,2,40,40,0,1
Style: Spk,Geist Mono Medium,30,&H00DDC0CB,&H00FFFFFF,&H64180813,&H00000000,0,0,0,0,100,100,4,0,1,2,0,2,40,40,0,1
Style: Lbl,Geist Mono Medium,28,&H00FBEEF3,&H00FFFFFF,&H50180813,&H00000000,0,0,0,0,100,100,3,0,1,2,0,7,40,40,0,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
${ev.join('\n')}
`;
  const file = path.join(TMP, 'captions.ass');
  fs.writeFileSync(file, ass);
  return file;
}

// ------------------------------------------------------------------ loudness
function lufs(file, ss, to) {
  const log = ffStderr(['-ss', String(ss), '-to', String(to), '-i', file, '-af', 'ebur128', '-f', 'null', '-']);
  const m = log.match(/Integrated loudness:\s+I:\s+(-?[\d.]+) LUFS/);
  return m ? parseFloat(m[1]) : -20;
}

// ------------------------------------------------------------------ build
async function main() {
  console.log(`edit: A 0-${f(tB)} (${A_PIECES.length} pieces), demo ${f(tB)}-${f(tC)}, creator+split ${f(tC)}-${f(tC3)}, ` +
    `creator ${f(tC3)}-${f(tD + X3)}, end card from ${f(tD)}, total ${f(TOTAL)} s`);
  await renderOverlays();
  const assFile = writeAss();

  // ---- audio: each source levelled to -16 LUFS, laid on the timeline, light room tone under everything
  const gCre = -16 - lufs(CREATOR, 0.32, 20.68);
  const gDemo = -16 - lufs(DEMO, B.s, B.e);
  const crePieces = [...A_PIECES, { s: C1.s, e: SPLIT.e, out: tC }, ...C3_PIECES];
  const aParts = crePieces.map((p, i) => {
    const d = p.e - p.s;
    return `[c${i}]atrim=${f(p.s)}:${f(p.e)},asetpts=PTS-STARTPTS,volume=${f(gCre)}dB,afade=t=in:d=0.01,` +
      `afade=t=out:st=${(d - 0.02).toFixed(3)}:d=0.02,adelay=${Math.round(p.out * 1000)}:all=1[ac${i}]`;
  });
  const aGraph = [
    `[0:a]asplit=${crePieces.length}${crePieces.map((_, i) => `[c${i}]`).join('')}`, ...aParts,
    `[1:a]atrim=${B.s}:${B.e},asetpts=PTS-STARTPTS,aformat=channel_layouts=stereo,aresample=48000,volume=${f(gDemo)}dB,` +
      `afade=t=in:d=0.02,afade=t=out:st=${f(lenB - 0.12)}:d=0.12,adelay=${Math.round(tB * 1000)}:all=1[ad]`,
    `anoisesrc=color=brown:amplitude=0.5:sample_rate=48000:duration=${f(TOTAL)}:seed=7,highpass=f=90,lowpass=f=1400,volume=-47dB,aformat=channel_layouts=stereo[rt]`,
    `${crePieces.map((_, i) => `[ac${i}]`).join('')}[ad][rt]amix=inputs=${crePieces.length + 2}:normalize=0:duration=longest,` +
      `atrim=0:${f(TOTAL)},afade=t=in:d=0.02,afade=t=out:st=${f(TOTAL - 0.6)}:d=0.6[aout]`,
  ].join(';');
  const preWav = path.join(TMP, 'mix.wav');
  ff(['-i', CREATOR, '-i', DEMO, '-filter_complex', aGraph, '-map', '[aout]', '-ar', '48000', '-c:a', 'pcm_s16le', preWav]);
  const m = JSON.parse(ffStderr(['-i', preWav, '-af', 'loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json', '-f', 'null', '-'])
    .match(/\{[\s\S]*\}/)[0]);
  const normWav = path.join(TMP, 'mix-norm.wav');
  ff(['-i', preWav, '-af', `loudnorm=I=-14:TP=-1.5:LRA=11:linear=true:measured_I=${m.input_i}:measured_TP=${m.input_tp}:measured_LRA=${m.input_lra}:measured_thresh=${m.input_thresh}:offset=${m.target_offset}`,
    '-ar', '48000', '-c:a', 'pcm_s16le', normWav]);

  // ---- video graph
  const norm = `fps=${FPS},format=yuv420p,setsar=1,settb=1/${FPS}`;
  const zoom = z => `scale=${z.w}:${z.h}:flags=lanczos,format=rgb24,crop=${W}:${z.cropH || H}:'${z.x}+${SHX}':'${z.y}+${SHY}':exact=1,format=yuv420p`;
  const useZ = [0, 1].map(z => crePieces.filter(p => p.z === z).length + (z === 0 ? 1 : 0));   // + C1
  const lbl = { z0: 0, z1: 0 };
  const zIn = z => `[z${z}_${lbl['z' + z]++}]`;
  const demoClip = (demo, dur, crop, extra = '') => `[1:v]trim=${f(demo)}:${f(demo + dur + 0.1)},setpts=PTS-STARTPTS,fps=${FPS},` +
    `trim=0:${f(dur)},crop=${crop.w}:${crop.h}:${crop.x}:${crop.y}${extra},format=yuv420p`;
  const top = (name, shot, crop, win, scaleTo, maskIn, frameIn, pad = '') => [
    `[bg${name}]crop=${W}:${SEAM}:0:0,trim=0:${f(shot.e - shot.s)},setpts=PTS-STARTPTS[bgt${name}]`,
    `${demoClip(shot.demo, shot.e - shot.s, crop, (scaleTo ? `,scale=${win.w}:${win.h}:flags=lanczos` : '') + pad)}[d${name}]`,
    `[${maskIn}]format=gray[m${name}]`, `[d${name}][m${name}]alphamerge[da${name}]`,
    `[bgt${name}][da${name}]overlay=${win.x}:${win.y}:shortest=1[o${name}]`,
    `[o${name}][${frameIn}]overlay=0:0:shortest=1,${norm}[top${name}]`,
  ];
  const piecesA = A_PIECES.map((p, i) => `${zIn(p.z)}trim=${f(p.s)}:${f(p.e)},setpts=PTS-STARTPTS,${norm}[a${i}]`);
  const v = [
    `[0:v]fps=${FPS},format=yuv420p,split=3[cr0][cr1][crs]`,
    `[cr0]${zoom(ZOOM[0])},split=${useZ[0]}${Array.from({ length: useZ[0] }, (_, i) => `[z0_${i}]`).join('')}`,
    `[cr1]${zoom(ZOOM[1])},split=${useZ[1]}${Array.from({ length: useZ[1] }, (_, i) => `[z1_${i}]`).join('')}`,
    `[crs]${zoom({ ...SPLIT_Z, cropH: H - SEAM })}[zs]`,
    `[3:v]split=4[bgB][bgA][bgM][bgT]`,
    ...piecesA,
    // B: Octo's whole tile, full width, on the spec background
    `[bgB]trim=0:${f(lenB)},setpts=PTS-STARTPTS[bgB2]`,
    `[1:v]trim=${f(B.vs)}:${f(B.e + 0.1)},setpts=PTS-STARTPTS,fps=${FPS},trim=0:${f(B.e - B.vs)},tpad=start_duration=${f(B.vs - B.s)}:start_mode=clone,` +
      `crop=${CROP_B.w}:${CROP_B.h}:${CROP_B.x}:${CROP_B.y},format=yuv420p[dB]`,
    `[5:v]format=gray[mB]`, `[dB][mB]alphamerge[dBa]`,
    `[bgB2][dBa]overlay=${WIN_B.x}:${WIN_B.y}:shortest=1[b1]`, `[b1][4:v]overlay=0:0:shortest=1,${norm}[vB]`,
    // C1 full, then the split: three B-roll shots on top (dissolves in the pauses), creator below
    `${zIn(C1.z)}trim=${f(C1.s)}:${f(C1.e)},setpts=PTS-STARTPTS,${norm}[c1]`,
    `[6:v]split[fdA][fdM]`, `[7:v]split[mdA][mdM]`,
    ...top('A', DMA, CROP_DMA, WIN_DM, true, 'mdA', 'fdA'),
    ...top('M', DMB, CROP_DMB, WIN_DM, true, 'mdM', 'fdM'),
    ...top('T', TR, CROP_TR, WIN_TR, false, '9:v', '8:v', `,pad=${WIN_TR.w}:${WIN_TR.h}:20:20:color=0x130F22`),
    `[topA][topM]xfade=transition=fade:duration=${XB}:offset=${f(DMB.s - DMA.s)}[tAM]`,
    `[tAM][topT]xfade=transition=fade:duration=${XB}:offset=${f(TR.s - DMA.s)}[topAll]`,
    `[zs]trim=${f(SPLIT.s)}:${f(SPLIT.e)},setpts=PTS-STARTPTS,pad=${W}:${H}:0:${SEAM}[czs]`,
    `[czs][topAll]overlay=0:0[s1]`, `[s1][10:v]overlay=0:0:shortest=1,${norm}[vS]`,
    `[c1][vS]xfade=transition=fade:duration=${XC1}:offset=${f(SPLIT.s - C1.s)}[vCS]`,
    ...C3_PIECES.map((p, i) => `${zIn(p.z)}trim=${f(p.s)}:${f(p.e)},setpts=PTS-STARTPTS,${norm}[c3_${i}]`),
    `[2:v]scale=${W}:${H},trim=0:${DLEN},setpts=PTS-STARTPTS,${norm}[vD]`,
    `${A_PIECES.map((_, i) => `[a${i}]`).join('')}[vB][vCS]${C3_PIECES.map((_, i) => `[c3_${i}]`).join('')}` +
      `concat=n=${A_PIECES.length + 2 + C3_PIECES.length}:v=1:a=0,${norm}[main]`,
    `[main][vD]xfade=transition=fade:duration=${X3}:offset=${f(tD)}[vall]`,
    `[vall]ass=filename=${assFile.replace(/([:\\'])/g, '\\$1')}:fontsdir=${FONTS.replace(/([:\\'])/g, '\\$1')},format=yuv420p[vout]`,
  ].join(';');
  // unused split outputs of the zoom streams would stall the graph: make sure the counts match
  if (lbl.z0 !== useZ[0] || lbl.z1 !== useZ[1]) throw new Error(`zoom split mismatch ${JSON.stringify(lbl)} vs ${useZ}`);

  const still = (file, dur) => ['-loop', '1', '-framerate', String(FPS), '-t', f(dur), '-i', path.join(TMP, file)];
  const enc = crf => ff([
    '-i', CREATOR, '-i', DEMO,
    '-loop', '1', '-framerate', String(FPS), '-t', f(DLEN + 0.2), '-i', ENDCARD,
    ...still('bg.png', 10), ...still('frame-b.png', lenB + 0.2), ...still('mask-b.png', lenB + 0.2),
    ...still('frame-dm.png', 3), ...still('mask-dm.png', 3), ...still('frame-tr.png', 3), ...still('mask-tr.png', 3),
    ...still('seam.png', 7),
    '-i', normWav,
    '-filter_complex', v, '-map', '[vout]', '-map', '11:a',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', String(crf), '-profile:v', 'high', '-pix_fmt', 'yuv420p',
    '-maxrate', '4.2M', '-bufsize', '8.4M', '-r', String(FPS),
    '-c:a', 'aac', '-b:a', '128k', '-ar', '48000', '-ac', '2',
    '-t', f(TOTAL), '-movflags', '+faststart', OUT]);
  let crf = 18;
  enc(crf);
  while (fs.statSync(OUT).size > MAX_BYTES && crf < 26) { crf += 1; enc(crf); }

  // ---- poster (hook "If your team"), review frames (all frames at 4 fps), contact sheet (red lines at y 250 and y 1250)
  ff(['-ss', f(toOut('A', 1.56)), '-i', OUT, '-frames:v', '1', POSTER]);
  fs.rmSync(REVIEW, { recursive: true, force: true });
  fs.mkdirSync(REVIEW, { recursive: true });
  ff(['-i', OUT, '-vf', 'fps=4,scale=540:-2', '-q:v', '3', path.join(REVIEW, 'f%03d.jpg')]);
  const n = fs.readdirSync(REVIEW).length, cols = 12, rows = Math.ceil(n / cols);
  ff(['-i', OUT, '-vf', `fps=4,scale=180:320,drawbox=y=25:w=180:h=1:color=red@0.8:t=fill,drawbox=y=208:w=180:h=1:color=red@0.8:t=fill,` +
    `drawtext=fontfile=${path.join(FONTS, 'GeistMono-Medium.ttf').replace(/([:\\'])/g, '\\$1')}:text='%{pts\\:hms}':x=4:y=300:fontsize=13:fontcolor=white:box=1:boxcolor=black@0.6,` +
    `tile=${cols}x${rows}:padding=2:color=0x0D0818`, '-frames:v', '1', CONTACT]);

  const probe = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration,size', '-of', 'default=nw=1', OUT]).toString();
  console.log(`crf ${crf}\n${probe}gains: creator ${f(gCre)} dB, demo ${f(gDemo)} dB`);
  fs.rmSync(TMP, { recursive: true, force: true });
}
main().catch(e => { console.error(e); process.exit(1); });
