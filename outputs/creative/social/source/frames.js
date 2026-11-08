// Every visual in the organic social pack.
// Text is copied verbatim from the files named in `src` (straight quotes here;
// render.js sets typographic quotes and checks the words against the source).
// Sizes follow outputs/creative/design-spec.md, "Premium direction".

const SCREEN_STATUS = { file: 'assets/screenshots/octo-tile-status.png', x: 56, y: 40, w: 910, h: 392 };
const SCREEN_CAPTURED = { file: 'assets/screenshots/octo-tile-captured.png', x: 56, y: 40, w: 910, h: 392 };
const DEMO_NOTE = 'People in the demo are made up.'; // design-spec.md, wording rules

const POSTS = 'outputs/social/social-posts-v1.md';
const PLAN = 'outputs/positioning/campaign-plan.md';
const SPEC = 'outputs/creative/design-spec.md';

const frames = [
  // Post 1, LinkedIn founder launch post: cover frame for assets/octo-demo-36s-16x9.mp4
  {
    id: 'li-launch-cover-16x9', post: 1, w: 1920, h: 1080, layout: 'cover',
    margin: 112, headSize: 156, bodySize: 60, labelSize: 38,
    label: 'Every call ends with the same question:',
    headline: '"so who\'s doing what?"',
    screen: SCREEN_STATUS, windowW: 1220,
    pose: '09-listening', poseW: 360,
    src: [POSTS],
  },
  // Instagram 4:5 version of the launch visual
  {
    id: 'ig-launch-4x5', post: 1, w: 1080, h: 1350, layout: 'stack',
    margin: 96, headSize: 120, bodySize: 38, labelSize: 24,
    label: 'Every call ends with the same question:',
    headline: '"so who\'s doing what?"',
    screen: SCREEN_STATUS, caption: DEMO_NOTE,
    pose: '09-listening', poseW: 240, posePlace: 'on-window',
    src: [POSTS, SPEC],
  },
  // Post 2, LinkedIn, the task message: assets/screenshots/octo-tile-captured.png
  {
    id: 'li-task-message', post: 2, w: 1200, h: 1200, layout: 'stack',
    margin: 104, headSize: 116, bodySize: 42, labelSize: 26,
    lead: 'The most useful thing our AI teammate does isn\'t on the call.',
    headline: 'It\'s the message after.',
    screen: SCREEN_CAPTURED, caption: DEMO_NOTE,
    pose: '05-look-left', poseW: 220, posePlace: 'on-window',
    windowW: 860,
    src: [POSTS, SPEC],
  },
  // Post 3, X / Threads, the contrast: assets/screenshots/octo-tile-status.png
  {
    id: 'x-contrast', post: 3, w: 1200, h: 1200, layout: 'stack',
    margin: 104, headSize: 140, bodySize: 42, labelSize: 26,
    lead: 'Your note-taker writes it down.',
    headline: 'Octo does it.',
    screen: SCREEN_STATUS, caption: DEMO_NOTE,
    pose: '03-wink', poseW: 248, posePlace: 'on-window',
    windowW: 860,
    src: [POSTS, SPEC],
  },
  // Post 4, Instagram Reel: cover for assets/octo-demo-36s-9x16.mp4
  // Text stays between y 288 and y 1250 (spec: out of the top 250 px and the bottom 35%).
  {
    id: 'reel-cover-9x16', post: 4, w: 1080, h: 1920, layout: 'stack',
    margin: 96, safeTop: 288, safeBottom: 670, headSize: 140, bodySize: 38, labelSize: 24,
    headline: 'This bot talks back.',
    screen: SCREEN_STATUS, caption: DEMO_NOTE,
    pose: '02-happy', poseW: 240, posePlace: 'on-window', glowY: 0.45,
    src: [POSTS, SPEC],
  },
  // Post 5, LinkedIn, behind the scenes: assets/screenshots/octo-tile-status.png
  {
    id: 'li-behind-the-scenes', post: 5, w: 1200, h: 1200, layout: 'stack',
    margin: 104, headSize: 128, bodySize: 42, labelSize: 26,
    lead: 'We have an AI teammate',
    headline: 'on our own calls every day.',
    screen: SCREEN_STATUS, caption: DEMO_NOTE,
    pose: '07-look-up', poseW: 248, posePlace: 'on-window',
    windowW: 860,
    src: [POSTS, SPEC],
  },
];

// LinkedIn A/B one-liners (campaign-plan.md), one card each, same layout.
const ONE_LINERS = [
  'Note-takers record the meeting. Octo takes part in it.',
  'The AI agent that doesn\'t just record your call. It joins it.',
  'Say it on the call. It\'s in ClickUp, in your words, before you hang up.',
  'The project manager your team doesn\'t have yet.',
];
ONE_LINERS.forEach((line, i) => frames.push({
  id: `li-oneliner-${i + 1}`, post: `one-liner ${i + 1}`, w: 1200, h: 1200, layout: 'oneliner',
  margin: 104, headSize: 132, bodySize: 38, labelSize: 26,
  headline: line,
  cta: 'Invite Octo to your next call',
  pose: '01-neutral', poseW: 168,
  src: [PLAN, SPEC],
}));

module.exports = { frames };
