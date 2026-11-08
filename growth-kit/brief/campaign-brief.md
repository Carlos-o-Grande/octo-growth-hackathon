# Campaign Brief

Draft by product-scout, 2026-11-08, aligned at 13:40 WET with the founder's defaults in `launch/hackathon-plan.md`, `launch/audiences.md` and the root `brief/campaign-brief.md` (those win on any conflict until the team freezes the brief). Research and sources: `outputs/research/`. Repo paths (for example `product/overview.md`) are relative to the repo root, one level above `growth-kit/`.

## Deliverable language

English

## Product

Octo is an AI teammate that joins your team's video calls as a participant: you talk to it by name, it answers by voice and on its own video tile, and after the call it sends each person their tasks and keeps your task tracker up to date. ([source](../../product/overview.md), team)

## Audience / ICP

Founders, managing directors and heads of operations at remote agencies and studios with 10 to 50 people. They run many client and team calls a week, on Google Meet, Zoom and Teams depending on the client. The team lives in ClickUp, Asana or Trello. Trigger moment: a client asks "did you get to the thing I mentioned on Tuesday's call?" and nobody wrote it down. ([source](../../brief/campaign-brief.md), founder default; audience #1 in [audiences.md](../../launch/audiences.md)) Intent audience: note-taker switchers searching "Otter alternative" (#4). Always on: retargeting (#6). Tests: product leads on Jira or Linear (#2), founder-led SMBs (#3).

## Problem they have

Every call ends with "so who's doing what?": someone takes notes and stops taking part, agreements slip between calls, the same status questions come back every week, and the tracker is stale the day after because nobody updates it when plans change out loud. ([source](../../product/overview.md), team) Buyers say the same in public: action items from AI notes "dies in the doc that its placed in" ([source](https://www.reddit.com/r/SaaS/comments/1xcdvqv/do_you_actually_use_action_items_generated_from/), search snippet, to verify).

## Positioning

- **Category:** AI meeting assistant / AI note-taker. [ASSUMED]
- **Decision (team, 2026-11-08):** launch the internal agent, the one the team talks to on its own calls, because it works today. The external "sales copilot" (side panel only the seller sees: agenda, what to ask, sentiment) is not built yet: it is the hackathon Bold idea and a "coming soon" demand test, never a claim.
- **Main alternative for this buyer:** the AI already inside their call platform, such as Gemini in Meet ("Take notes for me", notes into a Doc) ([source](https://blog.google/products-and-platforms/products/workspace/take-notes-for-me/), via `market/landscape.md`). Octo's answer: it works on six platforms and writes into the team's own tools.
- **Also compared to:** Fireflies or Otter, which already answer questions in calls on a wake word ("Hey Fireflies" is free on Meet, Zoom and Teams). ([source](https://guide.fireflies.ai/articles/8186888414-talk-to-fireflies-in-live-meetings)) Also ZoomMate, sold as "your AI teammate" at $20 per user. ([source](https://www.zoom.com/en/products/ai-assistant/))
- **Only Octo [ASSUMED, to test with buyers]:** updates the task in the team's own tracker when someone says "done" on a later call, and sends each person only their own tasks by DM with the exact quote, as one agent across six platforms including Slack Huddles, Webex and GoTo. Creating tasks from a call is NOT unique (Teams Facilitator, ClickUp AI Notetaker, Mina claim it), and neither is speaking on a wake word. ([source](../outputs/research/market-landscape.md), [teardown](../outputs/research/competitor-teardown.md))

## Promise

**Just talk. Octo keeps your tracker, CRM and Notion up to date.** (Team decision, 2026-11-08, built on the founder's words: "we just speak and discuss and then all the information in our Notion, in our CRM is being updated".) Supporting line: "Note-takers record the meeting. Octo takes part in it." ([source](../../launch/hackathon-plan.md)) Hook kept from the founder's plan: "Every call ends with: so who's doing what?"

## Proof

1. Runs every day on the Octocrew team's own calls and is offered as part of Octocrew's AI implementation work. ([source](../../product/overview.md), team, self-reported)
2. Works on Google Meet, Microsoft Teams, Zoom, Slack Huddles, Webex and GoTo. ([source](../../product/overview.md), team, self-reported)
3. Live demo: tasks by owner on its tile in about 9 seconds, a calendar event booked after a spoken "yes", a one-line recap in about 3 seconds. ([source](../../product/live-demo.md), team)
4. Founder, verbal, 2026-11-08 (team, self-reported): Octo reads the calendar and joins those events on its own; it sits silent and speaks only when called; on Octocrew's own calls it analyses the transcript and updates their CRM and Notion, "we're not writing anything, we just speak and discuss and then all the information in our Notion, in our CRM is being updated"; benefit named: faster decisions, because "everything [is] integrated" and nobody has to go to other tools.
5. Integrations named in the team discussion (verbal, 2026-11-08, confirm in writing with Oleksii before naming them in ads): Jira, Google Calendar, ClickUp, Asana. Documented in writing: Notion, Asana, Trello (`product/overview.md`).
6. [TO ADD] Any external user, pilot or usage number for Octo (internal numbers from Octocrew's own use would also help: calls per week, CRM or Notion records updated). Note: Octocrew's public case studies and testimonials (Podavach, seed-stage fintech) are about its marketing agents, not Octo, and must not be used as Octo proof.

## Conversion goal

"Get early access" on the landing page: one button. ([source](../../brief/campaign-brief.md)) [TO ADD] the team must pick one mechanic, the sources disagree: root brief says "leave a work email", the plan says "book a demo", the v0 page opens an email to hello@octocrew.ai ([source](https://octocrew-hq.github.io/octo-landing/)). The offer behind it: Octo set up on the team's calls with their tracker, free pilot, length [TO ADD]. ([source](../../launch/hackathon-plan.md))

## Tone

Direct, practical, a little cheeky. ([source](../../brief/campaign-brief.md), founder) [ASSUMED] Sounds like Linear's product copy; never like generic AI hype (big verbs, no proof, no product on screen).

## Do not say

- "Otter and Fireflies can't talk in calls": false, both ship voice on a wake word. ([source](../../market/landscape.md))
- "AI teammate" as the differentiator on its own: Fireflies and ZoomMate use the same words.
- "Joins only when you invite it": false. Octo auto-joins the events on the calendar (founder, verbal, 2026-11-08).
- Any claim that the sales copilot exists, that Octo can be invisible to the client, or that it translates calls. Not built (team discussion, 2026-11-08).
- "CRM sync" as a differentiator: Otter, Fathom and ZoomMate already sync to CRMs (`market/landscape.md`, `outputs/research/market-landscape.md`).
- Any customer name, number or testimonial from Octocrew's marketing-agent case studies as if it were about Octo.
- "Sign up now", a public price or self-serve claims until they exist. ([source](../../product/overview.md))
- The demo videos' people or project as real; they are made up. Nothing public without Oleksii's OK. ([source](../../assets/README.md))
- Promises about "think deeply" answers on camera (20 to 60 seconds). ([source](../../product/live-demo.md))

## Second audience (optional)

[ASSUMED] Startup product and engineering teams on Jira or Linear: lead with the self-updating tracker and the voice weekly review replacing status meetings. ([source](../../launch/hypotheses.md), team) Depends on Jira and Linear support being confirmed. [TO ADD]

## Landing page URL

Today: v0 at https://octocrew-hq.github.io/octo-landing/ (fetched 2026-11-08, 200). Event: the Grona page replaces it once live. Later: a subdomain of octocrew.ai (team, verbal, 2026-11-08), exact URL [TO ADD]. https://www.octocrew.ai/ itself sells Octocrew's marketing agents and does not mention Octo.

## Competitors

1. https://fireflies.ai/pricing
2. https://otter.ai/pricing
3. https://www.zoom.com/en/products/ai-assistant/

## Constraints (optional)

- Event: Growth Marketing Hackathon, Portugal, 8 Nov 2026. Final pitch is 90 seconds, built around a live Google Meet demo with Octo, with the 36-second video as backup. ([source](../../pitch/pitch-script.md))
- The repo is public since 2026-11-08: no client names, real numbers, transcripts, CRM exports or keys. Demo videos may be used on the hackathon landing page and in draft posts and ads; ask Oleksii before posting them on social media. ([source](../../README.md), [assets](../../assets/README.md))
- Who does what and the 180-minute timeline: [hackathon-plan.md](../../launch/hackathon-plan.md). Default €1,000 split: LinkedIn 400, Meta/Reels 250, Google Search 200, test 150.
- Team workstreams: positioning and ICP, growth loop, brand, landing page, content and video, pricing. ([source](../../launch/workstreams.md))
- Event deliverables, from the organiser's slide "What every team ships" (Grona x 42, photo, team, 2026-11-08): six things in three hours, and only the Grona work goes live.
  1. Plan: one page on audience, offer, channels and how you'd spend €1,000.
  2. Landing page: live in Grona, a personalised site or a new campaign page.
  3. Targeting and campaign: set up in Grona, who sees the page, the campaign and any other actions.
  4. Social: posts ready to publish; they don't need to go live.
  5. Paid: ads ready to run; they don't need to go live.
  6. Bold idea: one move a normal campaign wouldn't make.
- Team split: Diego owns Targeting and campaign plus Social posts (team, verbal). The founder's plan has Targeting and campaign with Paid (person C) and Social with ad creatives (person D). [TO ADD] confirm who takes Paid.
- Budget: €1,000 hypothetical spend for the Plan (organiser's slide). No real spend agreed. Any paid media generation or crawl needs the team's OK first.
- [TO ADD] Judging criteria and submission deadline.
