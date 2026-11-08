# Campaign plan v2: Octo free trial

One page, built on the team's afternoon decisions (8 Nov). Source of truth for the landing, ads and creatives teams: [`brief/campaign-brief.md`](../../brief/campaign-brief.md), including the "can / cannot" table. Replaces [`campaign-plan.md`](campaign-plan.md) (morning draft). Numbers marked *assumption* are guesses to check in Ads Manager's forecast; there are no real results yet.

## Audience

Small teams of **1 to 50 people with no project manager yet**: founders, small agencies and studios, startups, service businesses. The founder or a lead chases every follow-up today.

## Offer

**Start free trial.** Our team sets Octo up on your calls with your tracker, CRM and Notion. Trial length: *to decide*. No public price yet.

**Promise:** Just talk. Octo keeps your tracker, CRM and Notion up to date.
**Creative angle:** The project manager your team doesn't have yet.

## Channels and the €1,000

| Channel | € | What runs | Metric | *Assumption* behind the numbers |
|---|---|---|---|---|
| **Meta ads (main)**: prospecting | 400 | 4 creative themes below, €100 each, 9:16 on Reels and Stories | Cost per trial sign-up; CTR to pick the winning theme | CPC $2.02 for SaaS on Meta ([Superads via Coupler](https://blog.coupler.io/facebook-ads-statistics/)); 2% click to sign-up |
| **Meta ads (main)**: scale the winner | 150 | The theme with the best CTR after day 3 | Cost per trial sign-up | Same |
| **Meta ads (main)**: retargeting | 100 | Landing visitors and 50%+ video viewers, not signed up | Sign-ups from retargeting | 4% click to sign-up |
| **YouTube creators (second)** | 350 | 2 paid micro-creator integrations (about €150 each) plus free access for 3 to 5 creators who post without a fee | Sign-ups per creator link | 5,000 views per integration, 1% click the link, 3% sign up |
| **Total** | **1,000** | | | about 420 clicks, **10 trial sign-ups**, about €96 per sign-up |

Math: clicks = spend / CPC; sign-ups = clicks x rate; computed with code. Meta: 198 + 74 + 50 clicks, 4.0 + 1.5 + 2.0 sign-ups. YouTube: 100 clicks, 3 sign-ups. €1,000 cannot prove anything statistically: it picks a direction for the next flight.

## Meta targeting (main channel)

- **Countries:** *to decide* (EU + UK + US, or EU only).
- **Age:** 25 to 55.
- **Detailed targeting (interests and behaviours):** small business owners, founders and entrepreneurs, Notion, Asana, Trello, ClickUp, Monday.com, remote work, project management, Google Workspace, Zoom. Interests are targeting only; ad copy names only Notion, Asana and Trello.
- **Retargeting:** landing visitors (needs the Meta pixel on the page), 50%+ viewers of any Octo video, excluding trial sign-ups.
- **Placements:** Reels, Stories, Feed (4:5 crop of the same creative).

## Creative themes (one 9:16 video + one static card each)

| # | Theme | Hook (first 2 seconds, on screen) | What the video shows | Octo pose for the card |
|---|---|---|---|---|
| T1 | The PM you don't have yet | "No project manager? Your calls have one now." | Founder on a call, Octo tracks who owes what, DMs arrive after | `13-task-card` |
| T2 | Just talk | "Nobody on this call typed a word." | Call ends, the Asana card, the CRM record and the Notion page update on screen | `12-task-done` |
| T3 | Ask it on the call | "Octo, where are we on the launch?" | The question, the answer on Octo's tile (tasks by owner) | `15-on-call-tile` |
| T4 | The Monday review | "Every Monday, Octo reads out who owes what." | The weekly task review by voice | `10-talking` |

All four end on the same card: "Just talk. Octo keeps your tracker, CRM and Notion up to date. Start free trial." Footage: the 36-second 9:16 demo (`assets/octo-demo-36s-9x16.mp4`, Oleksii's OK needed for ads) cut per theme, plus Octo poses from [`growth-kit/outputs/creative/octo-poses/`](../../growth-kit/outputs/creative/octo-poses/). Full ad copy: [`outputs/ads/meta-ads-v2.md`](../ads/meta-ads-v2.md).

## YouTube creators (second channel)

Creators who cover productivity, Notion, small business and remote teams, 5,000 to 200,000 subscribers. Offer: free access for their own team plus, for 2 of them, a paid 45 to 60 second integration. Each gets a tracked link (`utm_source=youtube&utm_medium=influencer&utm_content=<creator>`). Candidates, outreach message and integration script: [`outputs/social/youtube-creators-v1.md`](../social/youtube-creators-v1.md).

## Funnel

Meta ad or YouTube video -> landing page (one button: Start free trial) -> short form -> our team sets Octo up on the trial team's calls -> retargeting for visitors who didn't sign up.

## 7 days

| Day | What happens |
|---|---|
| 1 | Landing updated (see [`landing-changes-v1.md`](../website/landing-changes-v1.md)), pixel live. Meta T1 to T4 start. Outreach to YouTube creators. Founder post on LinkedIn (organic). |
| 2 | Creators get access; first replies. |
| 3 | Read CTR per theme. Pause the two weakest. |
| 4 | €150 goes to the winning theme. Retargeting on. |
| 5 to 6 | First creator integrations go live (if a creator can publish in the week). |
| 7 | Read sign-ups per theme and per creator. Keep, kill or double. |

## UTM convention

`utm_campaign=octo-free-trial` everywhere. Meta: `utm_source=facebook|instagram&utm_medium=paid-social&utm_content=meta-t1` (to `meta-t4`, `meta-rt`). YouTube: `utm_source=youtube&utm_medium=influencer&utm_content=<creator-handle>`. Example: `https://octo-landing-47q.pages.dev/?utm_source=instagram&utm_medium=paid-social&utm_campaign=octo-free-trial&utm_content=meta-t2`

## What success looks like after 7 days

- 10 trial sign-ups from teams of 1 to 50.
- One theme with a clearly higher CTR than the others.
- At least 1 creator who posts, and a cost per sign-up from that link.

## Risks

1. **The bot objection.** Uninvited meeting bots are the most repeated complaint in the category. Answer it on the page and in ads: "You choose which calls it joins. It stays quiet until you call it." Confirm the "quiet" part with Oleksii (the stage demo notes say it answers everything it hears).
2. **Sembly** sells "AI meeting agent" to the same small client-facing teams, with a self-serve 7-day trial at $10 to $30. Octo's trial is set up by our team: say so plainly, and lead with what Sembly's page does not claim (voice and on-tile answers, tasks updated from a later call, each person's own tasks by DM).
3. **Creators take time.** Most YouTube integrations need 1 to 3 weeks; inside a 7-day flight, expect replies and maybe one video, not results.
