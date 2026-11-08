# Octo poses

Hand-coded SVG, rendered to PNG with Chrome via playwright-core. No AI image tools.

## Re-render

    npm install playwright-core   # once, needs Google Chrome installed
    node growth-kit/outputs/creative/octo-poses/source/render.js

One pose only (skips the contact sheets): `node render.js 05-look-left`

Outputs: `../NN-name.png` (1200x1200, transparent), `../small/` (400x400), `../contact-sheet.png`, `../contact-sheet-dark.png`.

## Files

- `octo.js`: body path, rim, shadow, eye builders (`pill`, `arc`, `line`), `octo()` and `svgDoc()`.
- `poses.js`: one entry per pose, `{ id, build }`.
- `render.js`: renders PNGs and sheets.

## Add a pose

1. In `poses.js`, add `{ id: '17-name', build: () => plain(octo({ body: {...}, eyes: eyes('pill') }) + props) }`.
2. `body` takes `sx, sy, rot, dx, dy` (squash anchors at the bottom). `eyes(kindL, kindR, { dx, dy, w, h })` shifts or reshapes the eyes.
3. Props are SVG in units (1 unit = 1px of the 800px reference, origin = body center, x right, y down, canvas is about +-255 units wide). Keep props inside that range.
4. Run the render command. The sheet grid is 4 columns, so add a row if you pass 16.
