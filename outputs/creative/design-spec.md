# Octo creative spec (shared by every ad and post)

Matches the landing (https://octo-landing-47q.pages.dev) and the pitch deck.

## Colors

| Token | Hex | Use |
|---|---|---|
| ink-deep | #1A0033 | Main dark background (top of gradient) |
| brand | #3F007F | Gradient bottom, panels |
| lime | #C4E833 | One accent per frame: CTA pill, one highlighted word, check marks |
| on-lime | #1A2200 | Text on lime |
| text | #F3EEFB | Headlines and body on dark |
| sub | #CBC0DD | Secondary text on dark |
| light-bg | #FAF9FB | Light variant background |
| light-text | #15111F | Text on light |

Dark is the default. Background: vertical gradient #1A0033 to #3F007F, optional soft radial glow behind Octo.

## Type

- Headlines: Inter SemiBold (`outputs/website/landing/fonts/Inter-SemiBold.ttf`), tight leading (1.05), sentence case.
- Body: Inter Regular / Medium.
- Eyebrow labels and small tags: Geist Mono Medium (`GeistMono-Medium.ttf`), uppercase, letter-spacing 0.12em.
- Max 8 words of on-screen text per frame in ads. Minimum 44 px on 1080-wide canvases.

## Octo

- Poses: `assets/octo-poses/*.png` (1200 px, transparent). Use one pose per frame, never stretched.
- Real product screens: `assets/screenshots/octo-tile-status.png`, `octo-tile-captured.png`.
- The character never gets arms, a mouth or new colors.

## Formats

| Placement | Size | Safe zone |
|---|---|---|
| Reels / Stories (9:16) | 1080 x 1920 | Keep text and CTA out of the top 250 px and bottom 420 px (Reels UI) |
| Feed (4:5) | 1080 x 1350 | 60 px margin |
| LinkedIn / Instagram carousel | 1080 x 1350 | 72 px margin |
| LinkedIn single image | 1200 x 1200 | 72 px margin |

## Wording rules (from brief v2)

- Promise: "Just talk. Octo keeps your tracker, CRM and Notion up to date."
- CTA: "Start free trial". Under it when there is room: "Our team sets it up."
- Only the "can" column of the brief. Trackers named: Notion, Asana, Trello. No CRM brands. No numbers. No "bot", "AI teammate", "AI meeting agent" in headlines. Do not say Octo stays quiet until called (unconfirmed). No em dashes.
- Wordmark: "Octo" in Inter SemiBold with the `01-neutral` pose; small "by Octocrew" in Geist Mono.
