# Octo Meta statics: source

Campaign "Who's doing what?". Everything is rendered in code (HTML and CSS to PNG with headless Chromium through playwright-core). No AI image tools, nothing paid.

## Re-render

From the repo root:

```
NODE_PATH=$HOME/node_modules node outputs/creative/meta/source/render.js
```

Optional: `--guides <dir>` also writes copies with the safe zones drawn in red to `<dir>` (use a scratch folder, not the repo).

Needs playwright-core (its bundled Chromium, or Google Chrome installed) and `ffmpeg` on PATH (it pulls the creative 1 poster frame from `assets/octo-demo-36s-9x16.mp4`).

## Files

| File | What |
|---|---|
| `ads-data.js` | All copy, verbatim from `outputs/ads/meta-ads-v2.md`: card text, hook, primary text, headline, CTA button, UTM link per ad |
| `card.html` | One template for every static and end card. `?id=creative-2\|creative-3\|creative-4\|retargeting\|creative-5\|end&fmt=9x16\|4x5[&guides=1]` |
| `contact-sheet.html` | Grid of every static, screenshotted to `../static/contact-sheet.png` |
| `ad-previews.template.html` | Instagram feed and Reels mockups. `render.js` inlines the data and images and writes `../ad-previews.html` (self-contained) and `../ad-previews.png` |
| `render.js` | Renders all of the above |

## Outputs

- `../static/creative-2-*.png` (the junior PM), `creative-3-*.png` (note-taker vs Octo, static fallback), `creative-4-*.png` (the receipt), `retargeting-*.png`: each 9:16 (1080x1920) and 4:5 (1080x1350).
- `../static/end-card-9x16.png`, `end-card-4x5.png`: one-liner, "Invite Octo to your next call" pill, wordmark, `02-happy` pose. For the video cuts.
- `../ad-previews.html` and `.png`: the 6 ads (creatives 1 to 5 and retargeting).

## Design rules applied

From `outputs/creative/design-spec.md`, premium direction: near-black violet background with one off-centre glow and 3% grain; one left-aligned Inter SemiBold headline (-0.03em, 1.02 leading); the real tile screenshot (`assets/screenshots/octo-tile-status.png`, cropped inside its lime border) in a 24 px window frame; lime only on the CTA pill; plain Geist Mono labels with a hairline, no chips; one Octo pose per frame as an accent; 96 px margins. 9:16 keeps text and CTA inside y 300 to 1250 and x 96 to 960 (clear of the top 270, the bottom 35% for the Reels ad UI, and the right 120 Reels buttons). The CTA pill reads "Invite Octo to your next call" on one line at 36 px (landing button, brief decision of 8 Nov 15:10).

The task message in creative 3 and 4 is drawn in HTML, laid out like Octo's direct message in the demo video, with the founder's wording ("Finish landing page copy · due Friday · 'I can get the final draft by Friday'"). The summary email in creative 3 is generic: no brand, logo or competitor UI.
