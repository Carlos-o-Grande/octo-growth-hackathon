# Campaign Plan: Octo early access

2026-11-08. Built from `brief/campaign-brief.md` (aligned with the founder's `launch/hackathon-plan.md` and `launch/audiences.md`), `outputs/research/` (product-scout, market-landscape, competitor-teardown, voice-of-customer) and `outputs/positioning/value-prop-hypotheses.md`. One persona, four value-prop variants, one promise, one CTA. Budget is the organiser's hypothetical €1,000.

## Message house

**Promise:** Note-takers record the meeting. Octo takes part in it, and makes sure every task from the call lands with an owner in your tracker.

| Pillar | What we say | Proof | Source |
|---|---|---|---|
| 1. The work actually moves (answers "AI notes die in a doc nobody checks") | Everyone gets their own tasks by DM with a deadline and the exact quote. Tasks land in your tracker and update when someone says "done" on a later call. | Tracker create and update, per-person DM with quote, weekly voice review; live demo shows tasks by owner on its tile in about 9 seconds | `product/overview.md`, `product/live-demo.md`; gap 1 in `outputs/research/competitor-teardown.md` |
| 2. A teammate you invite, not a bot that barges in (answers the top objection: consent and bot fatigue, 19 of 34 customer quotes) | Octo joins when you invite it, speaks only when you call it by name, and each person sees only their own tasks. | "joins visibly as a participant and speaks only when called by name"; "Each person gets only their own tasks" | `pitch/faq.md`; https://octocrew-hq.github.io/octo-landing/; `outputs/research/voice-of-customer.md`. **[TO ADD] Oleksii confirms Octo never auto-joins from the calendar** |
| 3. Works where your clients already meet (answers "our clients use different tools") | One agent on Google Meet, Teams, Zoom, Slack Huddles, Webex and GoTo, writing into Notion, Asana or Trello, with your agent's name and voice. | Six platforms and three named trackers, documented | `product/overview.md`; gap 3 in `competitor-teardown.md` (no rival claims Slack Huddles, Webex or GoTo) |

CTA: Get early access -> https://octocrew-hq.github.io/octo-landing/ (v0 today; replaced by the Grona page URL once live, [TO ADD])

The four value-prop variants (V1 follow-through, V2 prep, V3 presence, V4 decide on the call, from `value-prop-hypotheses.md`) are entry hooks into this same house. They change the first line of an ad and the landing hero, never the promise or the CTA.

## Big idea

**"End the call with a plan, not a question."** Every agency call ends with "so who's doing what?". Our ads show the 10 seconds after "bye": tasks arriving by DM with the quote, the Asana card updating, the next sync on the calendar. Octo is the reason the question never gets asked. The line is already the v0 landing CTA heading ("Let your next call end with a plan, not a question", https://octocrew-hq.github.io/octo-landing/), so ad and page say the same thing.

Tagline: End the call with a plan, not a question.

### Rejected alternatives

- **"Fire your note-taker."** Strong stop rate, but it aims at people who already pay for Otter or Fireflies, and the market study found those searchers mostly want a cheaper individual note-taker (`market-landscape.md`). It also starts a price fight against free tiers Octo cannot win today. Keep it as a bold-idea option, not the campaign.
- **"Your AI teammate on every call."** Fireflies ("AI Teammate & Note Taker") and ZoomMate ("your AI teammate") already own this wording (`competitor-teardown.md`), and customers say "bot", not "teammate" (`voice-of-customer.md`). Fails the "not what the top competitor already says" test.

## Channel mix

| Channel | Funnel role | Why this audience is here (source) | Format |
|---|---|---|---|
| LinkedIn Ads | Prospecting, persona #1 by job title and company size | The only platform that filters by title (founder, managing director, head of operations, delivery lead) and size 11-50 in agency industries (`launch/audiences.md`); B2B benchmark CPC $9.39, click-to-lead 5.9% (https://metadata.io/b2b-advertising-benchmarks, 2025 data) | Single image (Octo tile screenshot or pose) and the 16:9 demo; V1 vs V2 |
| Meta (Instagram and Facebook Reels, Feed) | Cheap message test (V1 to V4) on #1 by interests; retargeting #6; founder SMB test #3 | Interest targeting on ClickUp, Asana, Monday.com and agency owners (`launch/audiences.md`); the 9:16 demo exists (`assets/octo-demo-36s-9x16.mp4`); SaaS CPC $2.02, CTR 1.40% (Superads via https://blog.coupler.io/facebook-ads-statistics/, Jul 2025 to Jul 2026). That the persona scrolls Meta at work is [ASSUMED] | 9:16 demo cut to 15 s, static pose cards, one per variant |
| Google Search | Capture task intent | Market study recommends task-intent terms over "Otter alternative" (`market-landscape.md`); search volume for these terms not checked [ASSUMED]; Business Services CPC $5.58, CVR 5.14% (https://www.wordstream.com/blog/2025-google-ads-benchmarks) | RSA text ads, V1 language |
| Organic LinkedIn (founder and team posts) | Reach and proof, feeds retargeting | Same persona as paid LinkedIn; Oleksii and Octocrew already post there (product-scout search results) [ASSUMED reach] | Founder story post, demo video post, carousel with poses (posts by copy-studio) |

### Targeting (for the Grona setup and the ad platforms)

| Audience | Platform | Settings | Variants |
|---|---|---|---|
| #1 Agencies 10-50 | LinkedIn | Titles: Founder, Co-founder, Managing Director, Head of Operations, Operations Manager, Delivery Lead, Account Director, Project Manager. Industries: Marketing and Advertising, Design Services, IT Services and Consulting. Company size 11-50. Countries [TO ADD, team picks: EU + UK + US, or EU only] | V1, V2 |
| #1 Agencies by interest | Meta | Interests: Asana, Trello, Notion, ClickUp, Monday.com, agency owners, small business owners (founder default list in `launch/audiences.md`). Age 25-55. Exclude existing page visitors | V1, V2, V3, V4 |
| #3 Founder-led SMB | Meta | Small business owners, interests Notion, Trello, productivity; 2-50 | H3 "the PM you don't have" vs the best V from the matrix |
| Task intent | Google | Phrase match: "meeting notes to asana", "meeting action items to trello", "ai meeting assistant that creates tasks", "update tasks from meetings", "meeting notes to notion tasks". Negatives: free, transcription, "otter alternative", jobs, template | V1 |
| #6 Retargeting | Meta (and LinkedIn when the audience reaches the minimum size) | Landing visitors 30 days, 50%+ demo viewers, excluding sign-ups | The winning variant + "Still taking notes by hand? Get early access." |

Ad and landing copy names Asana, Notion and Trello, not ClickUp: ClickUp is unconfirmed for Octo and has its own notetaker (`market-landscape.md`). ClickUp stays only as a Meta interest. Grona's real targeting options are [TO ADD]: check in the first minutes whether it offers title and size or interests only (`launch/hackathon-plan.md`).

## 7-day calendar

| Day | Channel | Asset | Pillar | Producing agent | utm_content |
|---|---|---|---|---|---|
| 1 | Landing (Grona) | Hero "End the call with a plan, not a question", demo video, one CTA, 4 hero variants V1-V4 | 1 | landing-page | lp-hero |
| 1 | Organic LinkedIn | Founder launch post with the 16:9 demo | 1 | copy-studio | li-org-launch |
| 1 | LinkedIn Ads | V1 "Your client said it on the call. Did it make it into Asana?" + V2 "The brief is ready before you join." | 1 | copy-studio | li-ad-v1, li-ad-v2 |
| 1 | Meta | Matrix V1, V2, V3, V4 on #1 interests, 9:16 and static pose cards | 1 | meta-ads | meta-ad-v1 to meta-ad-v4 |
| 2 | Google Search | Task-intent RSAs | 1 | google-ads | g-rsa-tasks |
| 2 | Creative | Ad visuals from the Octo pose pack and tile screenshots | 1, 3 | creative-director | (per ad) |
| 3 | Organic LinkedIn | Carousel "What happens in the 10 seconds after 'bye'" with poses | 1 | copy-studio | li-org-carousel |
| 3 | Meta | Test #3 founder SMB, H3 vs best V | 1 | meta-ads | meta-ad-h3 |
| 4 | Organic LinkedIn | Trust post: "Octo only joins when invited. Here is what it never does." | 2 | copy-studio | li-org-trust |
| 4 | Meta | Retargeting #6 starts | 2 | meta-ads | meta-rt-1 |
| 5 | Email | Early-access confirmation and pilot kickoff (asks which tracker and call platforms) | 3 | email-writer | email-1 |
| 6 | Organic LinkedIn | Platforms post: "Your clients use Zoom, Teams and Meet. Octo joins all of them." | 3 | copy-studio | li-org-platforms |
| 7 | All | Read results, pause losers, move budget to the winning variant | n/a | analytics-analyst | n/a |

Hackathon mapping (3 hours): Plan = this file. Landing page = Day 1 landing row. Targeting and campaign = the Targeting table. Social = the organic LinkedIn rows (3-5 posts). Paid = LinkedIn, Meta and Google rows (3+ ads on 2 channels). Bold idea = the team's pick from `launch/hackathon-plan.md`.

## Budget split

Assumptions: euros treated at parity with the USD benchmarks (conservative if the euro is above the dollar) [ASSUMED]. Landing conversion = "Get early access" with a work email.

| Assumption | Value | Source |
|---|---|---|
| LinkedIn CPC | 9.39 | Metadata 2025, https://metadata.io/b2b-advertising-benchmarks |
| LinkedIn click to lead | 5.9% | same |
| Meta CPC (SaaS) | 2.02 | Superads via https://blog.coupler.io/facebook-ads-statistics/ |
| Meta cold click to sign-up | 2% | [ASSUMED], below LinkedIn because interest targeting is looser |
| Meta warm (retargeting) click to sign-up | 4% | [ASSUMED] |
| Google CPC / CVR (Business Services) | 5.58 / 5.14% | WordStream 2025, https://www.wordstream.com/blog/2025-google-ads-benchmarks |

| Line | Spend (€) | Share | CPC | Clicks | Conv. rate | Sign-ups | Cost per sign-up (€) |
|---|---|---|---|---|---|---|---|
| LinkedIn prospecting #1 (V1 vs V2) | 400 | 40% | 9.39 | 43 | 5.90% | 2.5 | 159 |
| Meta prospecting #1 (V1-V4 matrix) | 200 | 20% | 2.02 | 99 | 2.00% | 2.0 | 101 |
| Meta retargeting #6 | 50 | 5% | 2.02 | 25 | 4.00% | 1.0 | 50 |
| Google Search task intent | 150 | 15% | 5.58 | 27 | 5.14% | 1.4 | 109 |
| Test: founder-led SMB #3 (Meta) | 200 | 20% | 2.02 | 99 | 2.00% | 2.0 | 101 |
| **Total** | **1,000** | **100%** | | **292** | | **8.8** | **113** |

Math per line: clicks = spend / CPC; sign-ups = clicks x conversion rate; cost per sign-up = spend / sign-ups. Computed with code; shares sum to 100. Change from the founder's default split: Google 200 -> 150 and test 150 -> 200, per the market study (`market-landscape.md`); Meta 250 now covers the matrix (200) and retargeting (50). **Team to confirm.** Organic LinkedIn: about 2 hours of writing for 4 posts, no spend.

## KPIs

- **North star: early-access sign-ups (work email) on the landing page.** Target for the €1,000 flight: 9 (from the budget math). Real goal behind it: 3 to 5 agencies that start a pilot [ASSUMED].
- **Cost per sign-up:** target ≤ €113 blended; LinkedIn benchmark $202 per lead (Metadata 2025), so the blended target leans on cheaper Meta clicks.
- **Ad CTR:** LinkedIn ≥ 0.67% (Metadata 2025); Meta ≥ 1.40% (Superads SaaS).
- **Landing conversion rate:** ≥ 3% of paid clicks (292 clicks, 9 sign-ups); B2B SaaS demo-request pages run 1.5% to 4% (https://www.saashero.net/strategy/b2b-saas-conversion-rate-benchmarks/, snippet).
- **Pilot rate:** ≥ 1 in 3 sign-ups books setup with the team [ASSUMED].

## Experiments

**E1. Which value proposition stops agency leads (the positioning test).**
- Hypothesis: because buyers' loudest complaint is that AI notes die in a doc, V1 (follow-through) will beat V2, V3 and V4 on click-through.
- Control V1, variants V2, V3, V4. Meta, audience #1 interests, same creative format, €50 each.
- Metric: CTR, then sign-ups as a tiebreak.
- Sample: about 1,850 impressions and 25 clicks per arm (€50 / $27.10 CPM; $2.02 CPC). Too small for significance; this is a directional read.
- Decision rule: the arm with CTR at least 30% relative above every other arm and at least 20 clicks becomes the lead hook for retargeting and landing hero; if no arm clears 30%, keep V1 and rerun with €100 per arm before any claim about positioning.

**E2. Follow-through vs prep on LinkedIn titles.**
- Hypothesis: because ops and delivery leads own task follow-up, V1 will cost less per sign-up than V2 with the same LinkedIn audience.
- Control V1, variant V2, €200 each, same image format.
- Metric: cost per sign-up; CTR as a leading signal.
- Sample: about 3,165 impressions and 21 clicks per arm (Metadata CPM $63.19, CTR 0.67%). A week cannot reach significance; use CTR.
- Decision rule: if V2 CTR is at least 25% relative above V1 with 15+ clicks each, test V2 as the landing hero; otherwise keep V1.

**E3. Agencies vs founder-led SMBs.**
- Hypothesis: because founders without a PM chase every follow-up themselves, H3 ("the PM you don't have") will convert founder SMBs at least as well as agencies convert on the best V.
- Control: best V on #1 (from E1). Variant: H3 on #3. Meta, €200 vs the matrix winner's spend.
- Metric: landing conversion rate per audience (UTM).
- Sample: about 99 clicks on #3. Decision rule: if #3 converts at least 1.5x the #1 rate with 2+ sign-ups, add #3 as a second persona for the next flight; otherwise keep #1 alone.

## UTM convention

- Lowercase, hyphens, no spaces.
- utm_source: linkedin, facebook, instagram, google, newsletter.
- utm_medium: social (organic), paid-social, cpc, email.
- utm_campaign: `octo-early-access` (one slug for everything).
- utm_content: the calendar id (li-ad-v1, meta-ad-v3, g-rsa-tasks, li-org-launch, email-1).

Examples (v0 base until the Grona URL exists):
- https://octocrew-hq.github.io/octo-landing/?utm_source=linkedin&utm_medium=paid-social&utm_campaign=octo-early-access&utm_content=li-ad-v1
- https://octocrew-hq.github.io/octo-landing/?utm_source=google&utm_medium=cpc&utm_campaign=octo-early-access&utm_content=g-rsa-tasks

## Risks and assumptions

1. **Trust can sink pillar 2.** If Octo can auto-join calls from the calendar, the "joins when invited" line is false and the top objection (consent, 19 of 34 quotes) goes unanswered. Oleksii confirms before any asset ships with it.
2. **The numbers are directional.** €1,000 buys about 290 clicks and 9 sign-ups at benchmark rates; no experiment reaches significance in a week. Conversion rates for Meta are [ASSUMED], and euro-to-dollar parity is a simplification. Treat results as signal for the next flight, not proof.
3. **The CTA mechanic is not fixed.** The brief says work email, the plan says book a demo, the v0 page opens an email to hello@octocrew.ai. Every conversion number above assumes a one-field work-email form; a demo booking would convert at roughly 1.5% to 4% (SaaSHero snippet) and cut sign-ups.
