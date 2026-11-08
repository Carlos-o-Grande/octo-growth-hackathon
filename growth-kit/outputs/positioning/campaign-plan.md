# Campaign Plan: Octo early access

2026-11-08, v2 (rewritten after the team's positioning decision: launch the internal agent; the sales copilot is the Bold idea). Built from `brief/campaign-brief.md`, `outputs/research/` (product-scout, market-landscape, competitor-teardown, voice-of-customer) and `outputs/positioning/value-prop-hypotheses.md`. One persona, four value-prop variants, one promise, one CTA. Budget is the organiser's hypothetical €1,000.

## Message house

**Promise:** Just talk. Octo keeps your tracker, CRM and Notion up to date.

| Pillar | What we say | Proof | Source |
|---|---|---|---|
| 1. Nobody types (answers "AI notes die in a doc nobody checks") | You talk; Octo turns the call into updates in your tracker, CRM and Notion. Everyone gets their own tasks by DM with the exact quote, and a task updates when someone says "done" on a later call. | Founder on Octocrew's own calls: "we're not writing anything, we just speak and discuss and then all the information in our Notion, in our CRM is being updated"; tracker create and update, per-person DM with quote | Brief Proof 4 (founder, verbal, self-reported); `product/overview.md`; gap 1 in `outputs/research/competitor-teardown.md` |
| 2. Decide on the call (answers "we still have to go look it up after") | Ask Octo by name; it answers from your tracker, CRM and knowledge base and shows it on its tile. No tab-switching, so the decision happens in the meeting. | Live demo: tasks by owner on its tile in about 9 seconds, calendar event booked after a spoken "yes"; founder: "faster decisions ... because everything [is] integrated" | `product/live-demo.md`; Brief Proof 4 |
| 3. Quiet until you call it, on every platform (answers "another bot in my calls" and "we already have Gemini") | You choose which calendar events Octo joins, and it stays silent there. It speaks only when you call it by name. It works on Meet, Teams, Zoom, Slack Huddles, Webex and GoTo, while built-in AI stays inside one platform. | Founder: "it just sits there and in silence ... if we call him and ask something, it can interact"; six platforms documented; Gemini in Meet takes notes into a Doc | Brief Proof 4; `product/overview.md`; `market/landscape.md` [24][25] |

CTA: Start free trial -> the Grona landing page ([TO ADD] URL, being built by the team; v0 https://octocrew-hq.github.io/octo-landing/ until then). The trial is set up by the Octocrew team on the trial team's calls, not self-serve.

The four variants are entry hooks into this same house (`value-prop-hypotheses.md`): V1 the task lands in your tracker, V2 the brief is ready before you join, V3 nobody types, V4 decide on the call. They change the first line of an ad and the landing hero, never the promise or the CTA.

## Big idea

**"Just talk."** Our ads show an agency call where nobody touches a keyboard. People talk, someone asks "Octo, where are we on the launch?", the answer appears on its tile. After "bye", three things update on screen: the Asana card, the CRM record, the Notion page. The punchline is what did not happen: nobody wrote anything down.

Tagline: Just talk. The rest updates itself.

### Rejected alternatives

- **"End the call with a plan, not a question."** Strong and already on the v0 page, but it sells tasks only. It leaves out the CRM and Notion updates and the on-call answers the founder names as the real benefits. Kept as a landing subhead.
- **"Fire your note-taker."** Aims at people who already pay for Otter or Fireflies, who mostly want a cheaper individual note-taker (`market-landscape.md`), and starts a price fight against free tiers.

### Bold idea for the hackathon: two agents

One agent the whole team talks to on internal calls (what Octo does today), and one only the seller sees on client calls: agenda, what to ask next, how the conversation is going, a recap after. The second one is not built. It goes on the landing page as a small "Sales copilot, coming soon: join the list" link below the main CTA, and the click rate tells the team whether to build it. It never appears in ads as a working feature, and any version of it must still tell the client the call is being transcribed (consent: `market-landscape.md`, backlash section).

## Channel mix

| Channel | Funnel role | Why this audience is here (source) | Format |
|---|---|---|---|
| LinkedIn Ads | Prospecting, persona #1 by job title and company size | Only platform that filters by title and size 11-50 in agency industries (`launch/audiences.md`); B2B benchmark CPC $9.39, click-to-lead 5.9% (https://metadata.io/b2b-advertising-benchmarks, 2025 data) | Single image (tile screenshot or Octo pose) and the 16:9 demo; V3 vs V1 |
| Meta (Instagram and Facebook Reels, Feed) | Cheap message test (V1 to V4) on #1 by interests; retargeting #6; founder SMB test #3 | Interest targeting on Asana, Trello, Notion, ClickUp, Monday.com, agency owners (`launch/audiences.md`); the 9:16 demo exists (`assets/octo-demo-36s-9x16.mp4`); SaaS CPC $2.02, CTR 1.40% (Superads via https://blog.coupler.io/facebook-ads-statistics/). That the persona scrolls Meta at work is [ASSUMED] | 9:16 demo cut to 15 s, static pose cards, one per variant |
| Google Search | Capture intent | Task and CRM intent terms over "Otter alternative" (`market-landscape.md`); search volume not checked [ASSUMED]; Business Services CPC $5.58, CVR 5.14% (https://www.wordstream.com/blog/2025-google-ads-benchmarks) | RSA text ads, V3 and V1 language |
| Organic LinkedIn (founder and team posts) | Reach and proof, feeds retargeting | Same persona as paid LinkedIn; Octocrew and Oleksii already post there (product-scout search results) [ASSUMED reach] | Founder story post, demo video post, carousel with Octo poses |

### Targeting (for the Grona setup and the ad platforms)

| Audience | Platform | Settings | Variants |
|---|---|---|---|
| #1 Agencies 10-50 | LinkedIn | Titles: Founder, Co-founder, Managing Director, Head of Operations, Operations Manager, Delivery Lead, Account Director, Project Manager. Industries: Marketing and Advertising, Design Services, IT Services and Consulting. Company size 11-50. Countries [TO ADD: EU + UK + US, or EU only] | V3, V1 |
| #1 Agencies by interest | Meta | Interests: Asana, Trello, Notion, ClickUp, Monday.com, HubSpot, agency owners, small business owners. Age 25-55. Exclude page visitors | V1, V2, V3, V4 |
| #3 Founder-led SMB | Meta | Small business owners, interests Notion, Trello, productivity; 2-50 | "The PM you don't have" vs the best V |
| Intent | Google | Phrase match: "meeting notes to asana", "meeting notes to crm", "update crm from meetings", "meeting notes to notion", "ai meeting assistant that creates tasks". Negatives: free, transcription, "otter alternative", jobs, template | V3, V1 |
| #6 Retargeting | Meta (LinkedIn once the audience reaches the minimum size) | Landing visitors 30 days, 50%+ demo viewers, excluding sign-ups | The winning variant + "Still typing up notes after calls? Start a free trial." |

Ad copy names only tools confirmed in writing (Notion, Asana, Trello, "your CRM"). ClickUp and Jira were confirmed verbally in the team discussion: name them once Oleksii confirms in writing. Which CRMs Octo writes to is [TO ADD]; until then say "your CRM". Grona's real targeting options are [TO ADD]: check whether it offers title and size or interests only.

## 7-day calendar

| Day | Channel | Asset | Pillar | Producing agent | utm_content |
|---|---|---|---|---|---|
| 1 | Landing (Grona) | Hero "Just talk. Octo keeps your tracker, CRM and Notion up to date.", demo video, one CTA, 4 hero variants, small "Sales copilot, coming soon" link | 1 | landing-page | lp-hero |
| 1 | Organic LinkedIn | Founder post: "We stopped typing after calls. Here is what updates instead." with the 16:9 demo | 1 | copy-studio | li-org-launch |
| 1 | LinkedIn Ads | V3 "Nobody on the call typed a word. Asana, the CRM and Notion are already updated." + V1 "Your client said it on the call. Is it in Asana yet?" | 1 | copy-studio | li-ad-v3, li-ad-v1 |
| 1 | Meta | Matrix V1, V2, V3, V4 on #1 interests, 9:16 and pose cards | 1, 2 | meta-ads | meta-ad-v1 to meta-ad-v4 |
| 2 | Google Search | Intent RSAs | 1 | google-ads | g-rsa-intent |
| 2 | Creative | Ad visuals from the Octo pose pack and tile screenshots | 1, 2 | creative-director | (per ad) |
| 3 | Organic LinkedIn | Carousel "What updates in the 10 seconds after 'bye'" with poses | 1 | copy-studio | li-org-carousel |
| 3 | Meta | Test #3 founder SMB | 1 | meta-ads | meta-ad-h3 |
| 4 | Organic LinkedIn | "Why not just use Gemini?": one agent on six platforms, writing into your tools | 3 | copy-studio | li-org-gemini |
| 4 | Meta | Retargeting #6 starts | 1 | meta-ads | meta-rt-1 |
| 5 | Organic LinkedIn | Decide-on-the-call post: "Octo, where are we on the launch?" clip | 2 | copy-studio | li-org-decide |
| 5 | Email | Early-access confirmation and pilot kickoff (asks which tracker, CRM and call platforms) | 3 | email-writer | email-1 |
| 6 | Organic LinkedIn | Quiet-by-default post: "It sits in silence until you say its name." | 3 | copy-studio | li-org-quiet |
| 7 | All | Read results, pause losers, move budget to the winning variant, count sales-copilot clicks | n/a | analytics-analyst | n/a |

Hackathon mapping (3 hours): Plan = this file. Landing page = Day 1 landing row. Targeting and campaign = the Targeting table. Social = organic LinkedIn rows (pick 3 to 5). Paid = LinkedIn, Meta and Google rows (3+ ads on 2 channels). Bold idea = two agents, above.

## Budget split

Assumptions: euros treated at parity with the USD benchmarks (conservative if the euro is above the dollar) [ASSUMED]. Landing conversion = "Start free trial" form (work email, tracker, CRM, call platforms). Free-trial pages convert at a median of about 8% (https://www.saashero.net/strategy/b2b-saas-conversion-rate-benchmarks/, snippet), but this trial is set up by the team and the form is longer, so the conservative rates below are kept.

| Assumption | Value | Source |
|---|---|---|
| LinkedIn CPC / click to lead | 9.39 / 5.9% | Metadata 2025, https://metadata.io/b2b-advertising-benchmarks |
| Meta CPC (SaaS) | 2.02 | Superads via https://blog.coupler.io/facebook-ads-statistics/ |
| Meta cold click to sign-up | 2% | [ASSUMED], below LinkedIn because interest targeting is looser |
| Meta warm (retargeting) click to sign-up | 4% | [ASSUMED] |
| Google CPC / CVR (Business Services) | 5.58 / 5.14% | WordStream 2025, https://www.wordstream.com/blog/2025-google-ads-benchmarks |

| Line | Spend (€) | Share | CPC | Clicks | Conv. rate | Sign-ups | Cost per sign-up (€) |
|---|---|---|---|---|---|---|---|
| LinkedIn prospecting #1 (V3 vs V1) | 400 | 40% | 9.39 | 43 | 5.90% | 2.5 | 159 |
| Meta prospecting #1 (V1-V4 matrix) | 200 | 20% | 2.02 | 99 | 2.00% | 2.0 | 101 |
| Meta retargeting #6 | 50 | 5% | 2.02 | 25 | 4.00% | 1.0 | 50 |
| Google Search intent | 150 | 15% | 5.58 | 27 | 5.14% | 1.4 | 109 |
| Test: founder-led SMB #3 (Meta) | 200 | 20% | 2.02 | 99 | 2.00% | 2.0 | 101 |
| **Total** | **1,000** | **100%** | | **292** | | **8.8** | **113** |

Math per line: clicks = spend / CPC; sign-ups = clicks x conversion rate; cost per sign-up = spend / sign-ups. Computed with code; shares sum to 100. Change from the founder's default split: Google 200 -> 150 and test 150 -> 200 (`market-landscape.md`); Meta 250 covers the matrix (200) and retargeting (50). **Team to confirm.** Founder SMB test rule: if #3 converts at least 1.5x the #1 rate with 2+ sign-ups, add it as a second persona next flight. Organic LinkedIn: about 2 hours of writing for 5 posts, no spend.

## KPIs

- **North star: free-trial sign-ups on the landing page.** Target for the €1,000 flight: 9 (from the budget math). Real goal behind it: 3 to 5 agencies start a set-up trial [ASSUMED].
- **Cost per sign-up:** target ≤ €113 blended; LinkedIn benchmark $202 per lead (Metadata 2025), so the blend leans on cheaper Meta clicks.
- **Ad CTR:** LinkedIn ≥ 0.67% (Metadata 2025); Meta ≥ 1.40% (Superads SaaS).
- **Landing conversion rate:** ≥ 3% of paid clicks (292 clicks, 9 sign-ups); B2B SaaS demo-request pages run 1.5% to 4% (https://www.saashero.net/strategy/b2b-saas-conversion-rate-benchmarks/, snippet).
- **Sales-copilot interest:** clicks on the "coming soon" link as a share of landing visitors. No benchmark; read against E3's rule.

## Experiments

**E1. Which value proposition stops agency leads (the positioning test).**
- Hypothesis: because the founder's strongest benefit is "we just talk and everything updates", V3 (nobody types) will beat V1, V2 and V4 on click-through.
- Control V3, variants V1, V2, V4. Meta, audience #1 interests, same format, €50 each.
- Metric: CTR, then sign-ups as a tiebreak.
- Sample: about 1,850 impressions and 25 clicks per arm (€50 / $27.10 CPM; $2.02 CPC). Directional, not significant.
- Decision rule: the arm with CTR at least 30% relative above every other arm and at least 20 clicks becomes the lead hook for retargeting and the landing hero; if none clears 30%, keep V3 and rerun at €100 per arm before any claim about positioning.

**E2. "Nobody types" vs "task in your tracker" on LinkedIn titles.**
- Hypothesis: because ops leads own data hygiene across tools, V3 will cost less per sign-up than V1 with the same LinkedIn audience.
- Control V3, variant V1, €200 each, same image format.
- Metric: cost per sign-up; CTR as the leading signal.
- Sample: about 3,165 impressions and 21 clicks per arm (Metadata CPM $63.19, CTR 0.67%). Use CTR.
- Decision rule: if V1 CTR is at least 25% relative above V3 with 15+ clicks each, test V1 as the landing hero; otherwise keep V3.

**E3. Is the sales copilot worth building (fake-door, honestly labelled).**
- Hypothesis: because revenue is every company's first goal, at least 1 in 10 landing visitors will click "Sales copilot, coming soon".
- Control: none (single link, all landing traffic, labelled "coming soon").
- Metric: link clicks / landing visitors; join-list emails.
- Sample: all paid and organic landing traffic, about 290 paid visitors plus organic.
- Decision rule: if 10% or more of visitors click and 5+ leave an email, put the external agent on the roadmap discussion with those emails as the first interviews; under 5%, keep the internal agent as the only product.

## UTM convention

- Lowercase, hyphens, no spaces.
- utm_source: linkedin, facebook, instagram, google, newsletter.
- utm_medium: social (organic), paid-social, cpc, email.
- utm_campaign: `octo-early-access` (one slug for everything).
- utm_content: the calendar id (li-ad-v3, meta-ad-v2, g-rsa-intent, li-org-launch, email-1).

Examples (v0 base until the Grona URL exists):
- https://octocrew-hq.github.io/octo-landing/?utm_source=linkedin&utm_medium=paid-social&utm_campaign=octo-early-access&utm_content=li-ad-v3
- https://octocrew-hq.github.io/octo-landing/?utm_source=google&utm_medium=cpc&utm_campaign=octo-early-access&utm_content=g-rsa-intent

## Risks and assumptions

1. **Auto-join is the top objection.** Octo joins calendar events on its own, and uninvited bots are the most repeated complaint about Fireflies and Otter (19 of 34 customer quotes are about consent or bot fatigue). Pillar 3 answers with "quiet until you call it", which is true; it does not claim "only when invited". Teams can pick which events Octo joins (founder, verbal), so the line "You choose which calls it joins" is true. [TO ADD] what Octo never does.
2. **The main proof is the founder's own use.** "We just talk and everything updates" comes from Octocrew's internal calls, self-reported, with no number. No internal number exists today (team, 2026-11-08), so the live demo and the founder's words carry the proof. CRM names stay out of ads until Oleksii confirms the list; the landing FAQ may list the main ones with "tell us yours".
3. **The numbers are directional.** €1,000 buys about 290 clicks and 9 sign-ups at benchmark rates; Meta conversion rates are [ASSUMED]. The CTA is now a free trial set up by the team: if the form asks for too much, conversion drops, so keep it to work email plus three dropdowns (tracker, CRM, call platform). Trial length is [TO ADD].
