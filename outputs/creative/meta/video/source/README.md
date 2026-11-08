# Meta video ads: build source

Five Meta creatives from `outputs/ads/meta-ads-v2.md` (campaign "Who's doing what?"), cut from the real demo `assets/octo-demo-36s-9x16.mp4` with ffmpeg. No paid or AI video tools. Copy is verbatim from `meta-ads-v2.md` and `brief/campaign-brief.md`; look follows `outputs/creative/design-spec.md` ("Premium direction: San Francisco tech").

## Build

From the repo root:

```sh
NODE_PATH=$HOME/node_modules node outputs/creative/meta/video/source/build.js
```

One creative only: add its id, for example `... build.js creative-3`. Needs `ffmpeg` on the PATH (or `FFMPEG=/path/to/ffmpeg`), `playwright-core` reachable through `NODE_PATH` (no `npm install`), and Chrome or the Playwright Chromium. `FALLBACK_ENDCARD=1` forces the built-in end card instead of the statics.

| File | What |
|---|---|
| `build.js` | Renders every overlay from `overlay.html` in headless Chrome, assembles each ad in one ffmpeg filter graph, writes posters and contact sheets |
| `overlay.html` | The overlay renderer: headlines, captions, labels, window shadow/border/mask, background, the generic summary email (creative-3), the check mark (creative-4), the fallback end card |

Outputs land in `outputs/creative/meta/video/`: `creative-N-9x16.mp4`, `creative-N-4x5.mp4`, `creative-N-<fmt>-poster.png`, `contact-creative-N-<fmt>.png` (6 frames, red lines at y 250 and y 1250 on 9:16 mark the Reels safe zone). Intermediates go to the system temp folder.

## Encoding

1080x1920 (9:16) and 1080x1350 (4:5), 30 fps, H.264 High yuv420p, CRF 23 with `-maxrate 8M -bufsize 16M` (CRF steps up by 2 if a file reaches 30 MB), AAC 128k stereo 48 kHz, `+faststart`. Film grain is baked once into the background still (about 2 percent): moving grain tripled the file sizes.

## Layout and motion rules applied

- 9:16: all text and the CTA between y 250 and y 1250 (top 250 px, bottom 35%). 4:5: 96 px margins.
- Background: near-black violet `#0D0818` to `#1A0033`, one soft off-center `#3F007F` glow, static grain.
- Demo footage sits in a window: 24 px radius, 1 px hairline `rgba(255,255,255,0.12)`, long soft shadow, faint top highlight.
- Text enters with a fade plus a 12 px rise over 350 ms (ease-out, quartic approximation of `cubic-bezier(0.22,1,0.36,1)`) and leaves with a 150 ms fade. No other motion.
- Headlines Inter SemiBold, -0.03em, line-height 1.02, max 2 lines, auto-fitted between 80 and 112 px. Captions Inter Medium 44 px, white, no box; speaker name above in Geist Mono caps. Max 8 words per caption.
- One lime element per frame. The `13-task-card` pose already has lime, so creative-2's card has no lime word.
- End card: `outputs/creative/meta/static/end-card-9x16.png` and `end-card-4x5.png` ("Note-takers record the meeting. Octo takes part in it." + "Invite Octo to your next call"), faded in over 350 ms. If they are missing, the build renders `end-card-fallback.png` / `end-card-fallback-4x5.png` with the same text.
- Audio: the demo's own track for every demo shot, 60 ms crossfades at each join, fade-out into the end card. Text cards and the end card are quiet (the demo has no clean music-only stretch to borrow); the ads are built to work muted.

## The creatives (source times are seconds in the demo, read off the file frame by frame)

### creative-1 "The demo" (33.0 s)
The demo as it is, 0.0 to 30.4 s, in a window (scaled 0.8 on 9:16 so the demo's own captions sit above y 1250). Hook "This meeting bot talks back." 0 to 2 s over the demo's headline position (the demo headline is masked, then fades back in). Clean captions with speaker names replace the demo's small in-call caption line from 4.8 to 24.4 s (the only stretch with no large caption). The demo's own end card ("Your voice agent on every call", "Get in touch") is replaced by ours at 30.4 s.

### creative-2 "The junior PM" (15.0 s)
| Out | Source | On screen |
|---|---|---|
| 0.0 to 3.4 | text card, pose `13-task-card` | "Your team doesn't have a project manager." / "Now it does." / "No PM? No problem." |
| 3.4 to 7.6 | 7.9 to 12.1, Octo's tile | Task list: Design done, Layout done, Copy stuck "Anna · since Tuesday". Captions: Octo's answer |
| 7.6 to 13.0 | 25.0 to 30.4, direct message | Anna's task message with the quote. Captions: "After the call, everyone gets" ... "words the task came from." |
| 13.0 to 15.0 | end card | |

The brief asks to open on a founder's face. No such footage exists, so the ad opens on the text card (team decision).

### creative-3 "Note-taker vs Octo" (15.0 s)
Split screen 0 to 13 s, end card 13 to 15 s. Headline "Your note-taker writes it down." (0 to 2 s), then "Octo does it." Left window, label "Your note-taker": a generic AI summary email, rendered from HTML in `overlay.html`, scrolling slowly. No real product, brand or logo; it is long and has vague action items, and it does not claim note-takers are silent or cannot make tasks. Right window, label "Octo": Octo's tile capturing the task and the event (source 18.0 to 23.0), then the direct message with the exact quote (24.6 to 30.4), held on the highlighted quote. At this size the message text is small on a phone; the headline and captions carry the point.

### creative-4 "The receipt" (15.0 s)
| Out | Source | On screen |
|---|---|---|
| 0.0 to 2.0 | text card, pose `08-surprised` | Hook "No more 'I never said that.'" |
| 2.0 to 4.8 | 27.6 to 30.4, message close-up | Task card and the highlighted quote "Yes, I'll take it. I'll have it done by Friday." |
| 4.8 to 7.2 | 12.5 to 14.9, Anna's tile lit | Captions: "Yes, I'll take it." / "I'll have it done by Friday." |
| 7.2 to 9.6 | 20.0 to 22.4, Octo's tile | "Captured", "updated in tracker", the event lands |
| 9.6 to 13.0 | still of 30.3, message | Captions from the ad's primary text: "when someone says "done" on the next call," / "it's done in your tracker too." Lime check appears at 11.4 s |
| 13.0 to 15.0 | end card | |

**The demo has no "done" moment.** Nobody says "done" on a later call in the footage, so the check mark is an overlay drawn next to the task title, not product UI. The task card in the demo reads "Landing page copy · Anna · Friday" with the quote "Yes, I'll take it. I'll have it done by Friday.", not the wording in the ad brief ("Finish landing page copy · ... 'I can get the final draft by Friday'"); the ad shows the real demo card. Swap in a real recording of a "done" update when one exists.

### creative-5 "Founder to camera" (template only)
No selfie footage exists. The build writes `outputs/creative/meta/video/creative-5/`:
- `overlays-9x16/` and `overlays-4x5/`: full-canvas transparent PNGs: `hook.png` ("We don't have a PM. We have Octo."), `caption-01.png` to `caption-13.png` (the script, max 8 words each), `scrim-top.png` (behind the hook), `scrim-bottom.png` (behind captions).
- `captions.srt`: the 13 caption lines with estimated timing (2.7 words per second). Re-time it to the real take.
- `preview-9x16.png`, `preview-4x5.png`: the layout on a neutral placeholder.

Script (verbatim from `meta-ads-v2.md`, 20 to 30 s, selfie camera, no editing beyond captions): "I run a small team and we don't have a project manager. Every call ended with 'so who's doing what?' and then nothing happened. So we built Octo. It joins the call, you can ask it things out loud, and after the call everyone gets their own tasks with the exact words they said. It's on our calls every day. Early access is open, link below."

Before posting, the speaker checks every line is true for them. Note: the last line says "Early access is open, link below." while the landing button is now "Invite Octo to your next call"; the end card uses the new CTA. Ask the team whether to change the spoken line.

To drop the selfie in (vertical phone video, any length, with its own audio):

```sh
NODE_PATH=$HOME/node_modules node outputs/creative/meta/video/source/build.js creative-5 --selfie path/to/selfie.mp4 --srt path/to/retimed-captions.srt
```

This fills the frame with the selfie (center crop), adds the scrims, the hook for the first 2 s, the captions on the SRT timing and the 2 s end card, and writes `creative-5-9x16.mp4` and `creative-5-4x5.mp4` next to the other ads. Without `--srt` it uses the estimated timing. In another editor: put `scrim-bottom.png` over the whole clip, `scrim-top.png` and `hook.png` over 0 to 2 s, each `caption-NN.png` on its line, then the static end card.

## Checks done

ffprobe on every file (duration, size, codecs) and the 6-frame contact sheets read for legibility, safe zones, wording and leftover demo UI. Open items are listed in the hand-off report.
