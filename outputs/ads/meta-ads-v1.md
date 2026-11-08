# Meta ads v1 (Instagram Reels, Facebook)

**Replaced by [meta-ads-v2.md](meta-ads-v2.md)** after the team picked Meta as the main channel on 8 Nov.

**Budget:** €250 over 7 days: €170 cold, €80 retargeting from day 4. **Objective:** traffic, optimised for landing page views. **Placements:** Reels and Stories first, then Feed. **Destination:** the landing page with `?utm_source=meta&utm_medium=paid&utm_campaign=octo-early-access&utm_content=<ad>`.

## Audiences

- **Cold (ads 1 and 2):** ages 25 to 55, interests ClickUp, Asana, Monday.com, Notion, Trello, project management, plus job titles "Founder", "Business owner", "Operations manager". Portugal, Spain, UK, Ireland, Netherlands, Germany.
- **Retargeting (ad 3):** landing page visitors in the last 14 days, and people who watched 50% or more of ad 1 or 2. Exclude anyone who already requested access.

## Ad 1: stop-scroll video (cold, top of funnel)

**Creative:** `assets/octo-demo-36s-9x16.mp4`.
**Primary text:** Every call ends with "so who's doing what?" Octo answers before you hang up.
**Headline:** Your AI teammate on every call
**Description:** Tasks to everyone, tracker updated.
**CTA button:** Learn more

**First 3 seconds:** the video opens on Octo's tile answering on the call. If we cut a variant, add an on-screen line in the first second: "This bot talks back."

## Ad 2: note-taker contrast (cold, consideration)

**Creative:** `assets/octo-demo-36s-9x16.mp4`, or `assets/screenshots/octo-tile-captured.png` as a static test.
**Primary text:** Your note-taker writes it down. Octo does it: tasks to each person, with the quote they came from, straight into your tracker.
**Headline:** Note-takers record. Octo acts.
**Description:** Meet, Zoom, Teams and more.
**CTA button:** Learn more

## Ad 3: retargeting (warm, conversion)

**Creative:** `assets/screenshots/octo-tile-status.png`.
**Primary text:** Still ending calls with "so who's doing what?" We're putting Octo on a few more teams' calls this month.
**Headline:** Get early access to Octo
**Description:** We set it up on your calls.
**CTA button:** Sign up

## What to measure

- **Hook rate:** 3-second views divided by impressions. Shows whether the opening stops the scroll.
- **50% video views.** These feed retargeting.
- **Cost per landing page view, and early-access requests by `utm_content`.**
