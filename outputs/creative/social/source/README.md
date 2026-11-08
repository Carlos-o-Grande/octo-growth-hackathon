# Source: organic social visuals

Coded in HTML and CSS and rendered to PNG with headless Chromium (playwright-core). No image generation and no paid tools.

| File | What |
|---|---|
| `frames.js` | Every visual: size, margins, type sizes, text (verbatim, with the source file it comes from), pose, screen crop. Edit here. |
| `render.js` | Builds one HTML page per frame into `html/`, renders the PNGs into the parent folder, then builds `contact-sheet.png`. |
| `html/` | The generated templates (open any of them in a browser to inspect a frame). They are rewritten on every run. |

## Run

From the repo root:

```
NODE_PATH=$HOME/node_modules node outputs/creative/social/source/render.js
```

Needs Node and `playwright-core` with its Chromium (`npx playwright install chromium` once, if missing). Fonts come from `outputs/website/landing/fonts/`, poses from `assets/octo-poses/`, screens from `assets/screenshots/`. Every path is relative to the repo.

## What the script checks on every run

- **Wording:** every line on every image is found verbatim in its source (`social-posts-v1.md`, `campaign-plan.md` or `design-spec.md`). Straight and typographic quotes count as equal, and any em or en dash fails.
- **Layout:** no text or screen outside the margins (96 px on 1080 wide, 104 px on 1200, 112 px on the 16:9 cover; the Reel keeps text between y 288 and y 1250), no pose over text, and it reports the headline line count and the smallest type size per frame.

## Notes

- Inter's tabular-figures feature (`tnum`) widens the hyphen ("Note - takers"), so it is off. No numerals are set in these frames.
- Each pose is trimmed to its visible pixels at render time, so `poseW` is the width of the character itself, not the 1200 px canvas.
- Screen crops (`SCREEN_STATUS`, `SCREEN_CAPTURED`) take Octo's tile from the 1920x1080 screenshots, with a little of the call surface around it.
