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

## Premium direction: San Francisco tech (overrides anything above that conflicts)

Reference feel: Linear, Vercel, Raycast, Stripe launch posts. Calm, precise, product-first. It must never look "made by AI".

- **Type leads.** One big headline per frame, Inter SemiBold, letter-spacing -0.03em, line-height 1.02, 96 to 140 px on a 1080-wide canvas, max 2 lines, sentence case, left-aligned. Body copy small and sparse (34 to 40 px, #CBC0DD).
- **The real product is the hero visual.** Use the actual tile screenshots (`assets/screenshots/`) or demo frames inside a refined window frame: 24 px radius, 1 px hairline border rgba(255,255,255,0.12), a long soft shadow (0 40px 120px rgba(0,0,0,0.5)) and a faint top inner highlight. No fake UI, no mockup devices with notches.
- **Background:** near-black violet #0D0818 to #1A0033, one soft radial glow of #3F007F (large, low opacity, off-center), and fine film grain at 2 to 3% opacity. No flat banded gradients, no blobs, no glossy orbs.
- **Lime is rare.** One lime element per frame: the CTA or one word. Never lime backgrounds.
- **Labels without boxes.** Section labels are plain Geist Mono caps (22 to 24 px, letter-spacing 0.14em, #9A8FAE), optionally with a numeral ("01") and a 1 px hairline. **No pill or chip above a headline, no dot, no icon in a circle.** The only pill allowed is the CTA button.
- **Octo the character is an accent, not a cartoon poster.** One pose per frame, 18 to 30% of the canvas width, aligned to the grid, sitting next to the product or the headline. Never centered alone as the main idea.
- **Grid and air.** 8 px grid, 96 px outer margins on 1080 canvases, consistent baseline, asymmetric left-aligned layouts. Generous negative space; nothing touching edges.
- **Details that read premium:** hairline dividers, tabular numerals, real quotes in proper typographic quotes, consistent corner radii (24 px windows, 999 px CTA), subtle depth through light, not borders.
- **Video motion:** text enters with opacity 0 to 1 plus 12 px rise, 350 ms ease-out (cubic-bezier(0.22,1,0.36,1)); exits are quick fades. No bounces, wipes, spins or kinetic-type gimmicks. Captions as clean lower blocks above the Reels safe zone, never boxed in heavy pills.
- **Never:** emojis, stock-photo people, sparkles icons, "AI" glow effects on text, drop shadows on text, centered-everything layouts, more than two type sizes per frame besides labels.

Review bar before anything ships: look at every frame at phone size next to a Linear or Vercel launch post in your head. If it looks like a template, redo it.

## Formats

| Placement | Size | Safe zone |
|---|---|---|
| Reels / Stories (9:16) | 1080 x 1920 | Keep text and CTA out of the top 250 px and the bottom 35% (670 px, Meta's Reels ads guidance) |
| Feed (4:5) | 1080 x 1350 | 60 px margin |
| LinkedIn / Instagram carousel | 1080 x 1350 | 72 px margin |
| LinkedIn single image | 1200 x 1200 | 72 px margin |

## Wording rules (founder's brief, 14:40 team decision)

- Source of truth for every word: `brief/campaign-brief.md`, `outputs/ads/meta-ads-v2.md` (5 Meta creatives + retargeting) and `outputs/social/social-posts-v1.md`. Use their copy verbatim; do not rewrite it.
- Campaign: "Who's doing what?". One-liner: "Note-takers record the meeting. Octo takes part in it."
- CTA: "Invite Octo to your next call" (landing button, decided 15:10; replaces "Get early access"). Meta button: as written per ad ("Sign up" or "Learn more").
- UTM: `utm_source=meta&utm_medium=paid&utm_campaign=whos-doing-what&utm_content=<creative>`; social: `utm_source=<network>&utm_medium=social&utm_campaign=octo-early-access`.
- No invented numbers, customers or logos. People in the demo are made up.
- No em dashes.
- Wordmark: "Octo" in Inter SemiBold with the `01-neutral` pose; small "by Octocrew" in Geist Mono.
