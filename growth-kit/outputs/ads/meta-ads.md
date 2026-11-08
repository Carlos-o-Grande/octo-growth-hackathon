# Meta Ads: Octo early access

2026-11-08. Agent: meta-ads. Built from `brief/campaign-brief.md`, `outputs/positioning/campaign-plan.md` (message house, targeting table, budget split, E1, UTM convention), `outputs/positioning/value-prop-hypotheses.md`, `outputs/research/voice-of-customer.md`, `outputs/research/competitor-teardown.md`, `product/overview.md`, `product/live-demo.md`, and a frame-by-frame read of `assets/octo-demo-36s-9x16.mp4` (1080x1920, 36.15 s). No `outputs/creative/art-direction.md` exists yet, so the visual rules below are taken from the demo video itself (purple `#3B007C`, lime `#B9DB2F`, white text) and are provisional until creative-director writes them.

Three Meta lines, €450 of the plan's €1,000, as the team set them:

| Line | Audience | Stage | Budget | Ads | utm_content |
|---|---|---|---|---|---|
| 1. Prospecting, experiment E1 | #1 agencies by interests | Cold | €200 (4 arms x €50) | V1, V2, V3, V4: one 15 s video + one pose card each | meta-ad-v1 to meta-ad-v4 |
| 2. Founder-led SMB test | #3 founders, no PM | Cold (test) | €200 (2 arms x €100) | "The PM you don't have" vs the best V | meta-ad-h3, meta-ad-h3-v3 (or the E1 winner's number) |
| 3. Retargeting | #6 video viewers, engagers, landing visitors | Warm and hot | €50 | R1 video + R2 pose card | meta-rt-1, meta-rt-2 |

Message house (every ad carries it in the long text): **Just talk. Octo keeps your tracker, CRM and Notion up to date.** CTA: Start free trial (set up by the Octocrew team on the trial team's calls, not self-serve).

**Before anything goes live (team actions, not copy):**
1. Oleksii's OK to run the demo video in paid ads. `assets/README.md`: the demo may be used "in draft posts and ads", but ask Oleksii "before posting them on social media". A running Meta ad is public. The people and the project in the video are made up; no ad presents them as real customers.
2. Message match: the v0 page's button says "Get early access", these ads say "Start free trial". The Grona page should use "Start free trial" before spend starts. Until then, the v0 hero already matches the hook "Every call ends with 'so who's doing what?'".
3. Tracking: the v0 page has no Meta pixel (checked the page source on 2026-11-08: no `fbq`, no `facebook.net`). Without it, landing visitors cannot be retargeted and sign-ups cannot be optimised for. Put the Meta pixel and a Lead event on the Grona page.
4. Geo: the plan leaves countries open (EU + UK + US, or EU only). Use the same countries as the LinkedIn line.

## Angles

### Shared production: the 15-second cut of the 9:16 demo

Source: `assets/octo-demo-36s-9x16.mp4` at the repo root. Cut points come from the three lines in `product/live-demo.md` (line 1: tasks by owner on the tile; line 2: a calendar event booked after a "yes"; line 3, the one-line recap, is not in the source video) and the per-person task DM from `product/overview.md`. Timestamps were read off the file frame by frame. All waits are trimmed: the tile build, the caption typing and the hang-up.

| # | Out (s) | Source (s) | On screen (sound off reads from the baked captions) | What is trimmed |
|---|---|---|---|---|
| 1 | 0.0 to 2.8 | 2.0 to 4.8 | Hook card. The source headline "Who does what after the call?" is masked with `#3B007C` and replaced by the arm's hook text (same position, white, lime on the key word). The note card "Usually, someone takes notes" gets struck through. Octo character. The source subtitle is masked in this segment so only two lines read. | 0.0 to 2.0 (headline typing in) |
| 2 | 2.8 to 4.7 | 5.4 to 7.3 | Call grid with Octo's tile. Caption, Mark: "Octo, where are we with the landing page launch?" | 4.8 to 5.4 (caption typing), 7.3 to 9.4 (tile build: the live wait of about 9 s) |
| 3 | 4.7 to 7.2 | 9.4 to 11.9 | Live-demo line 1. Tile: "Landing page launch", Design done, Layout done, Copy stuck "Anna · since Tuesday". Caption: "Two tasks are done, one is stuck: the copy has been waiting on Anna since Tuesday." | 11.9 to 13.6 |
| 4 | 7.2 to 8.6 | 13.6 to 15.0 | Anna's tile lit. Caption: "Yes, I'll take it. I'll have it done by Friday." | 15.0 to 20.0 (Mark's Thursday request and Octo's reply typing in) |
| 5 | 8.6 to 11.2 | 20.0 to 22.6 | Live-demo line 2. Tile "Captured", badge "updated in tracker": task "Landing page copy, Anna by Friday", then the calendar event "Launch sync, Thursday 10:00" lands. Caption: "Got it: Anna has the copy by Friday, sync on Thursday at ten. I've added the event to the calendar." | 22.6 to 27.6 (hang-up, transition, card build) |
| 6 | 11.2 to 13.5 | 27.6 to 29.9 | Direct message from Octo: "Anna, here's your task from the launch sync", task card with the exact quote highlighted. Caption: "words the task came from." | 29.9 to 36.15 (the source end card) |
| 7 | 13.5 to 15.0 | new | End card on `#3B007C`: pose `02-happy.png`, "Just talk." in white, "Start free trial" in lime. No URL on screen. Replaces the source end card, which says "Get in touch · octocrew.ai", a different CTA. | n/a |

Total: 2.8 + 1.9 + 2.5 + 1.4 + 2.6 + 2.3 + 1.5 = 15.0 s.

Edit rules for every version:
- Mask the bottom strip (y 1600 to 1920) with `#3B007C` across the whole cut: the source progress bar would jump after the cuts, and the "octocrew.ai" footer sits in the bottom dead zone.
- Audio: cut the source track at the same points; if a cut lands mid-word, drop to the music only. The ad must work muted: every spoken line is already a baked caption.
- Only segment 1's hook text and the end card change between ads. Everything else is the same file, so the E1 arms differ by one variable.

Placements from the one cut:

| Placement | Size | How | Safe zones |
|---|---|---|---|
| Reels and Stories | 9:16, 1080x1920 | Scale the source frame to 87% (940x1670), place at x=20, y=130, fill the rest with `#3B007C` | Content lands between y 287 (tile top) and y 1473 (call controls): clear of the top 270 px and the bottom 384 px. Right edge of content at x 960: the right 120 px stay free of the tile labels ("since Tuesday", "Thursday · 10:00") that sit at the far right of the source. |
| Feed (Facebook, Instagram) | 4:5, 1080x1350 | Crop the unscaled source at y=180 (keeps the tile, the call grid and the captions; checked on frames at 3.5, 11.8, 22.5 and 29.8 s) | Hook and captions sit 90 px or more inside every edge |

Pose cards (static) for every ad, built from `outputs/creative/octo-poses/` (1200x1200 transparent PNGs; no image generation):
- **Feed 4:5, 1080x1350:** background `#3B007C`. Card text top-left at x 72, y 120, white, about 76 px, up to 3 lines, max width 936 px, lime on one key word (the demo's caption style). Pose scaled to 640x640, centred, y 560 to 1200.
- **Stories and Reels 9:16, 1080x1920:** same layout, text block between y 300 and y 900 and no wider than x 72 to 940; pose between y 900 and y 1500. Nothing in the top 270 px, the bottom 384 px or the right 120 px.
- Only the card text below goes on the image. No fake button, no price, no logo wall.

### Line 1. Cold: prospecting on #1 agencies, experiment E1 (€200)

**Concept.** The viewer runs an agency of 10 to 50 people and does not know the category. Each arm opens on a different pain from the call they had this morning, then shows the same 15 seconds of Octo acting on a call. Four entry hooks into one message house (`value-prop-hypotheses.md`): V1 follow-through, V2 prep, V3 nobody types (control), V4 decide on the call. The hook (video segment 1, card text, primary text, headlines) is the only thing that changes. The long-text tail, the description, the button, the audience, the placements and the formats are identical.

Shared across all four arms:
- **Description (ALL-D):** see the table below. Same in every ad of all three lines.
- **CTA button: Sign Up.** Meta's list has no "Start free trial" button; Sign Up is the closest match for a form that starts a trial. Every primary text says "Start a free trial", which is the landing button. If Ads Manager offers a free-trial button for the chosen objective, use it instead.
- **Long-text tail (same in every arm):**

> Just talk. Octo keeps your tracker, CRM and Notion up to date.
>
> You choose which calls it joins, and it stays quiet until you call it by name. Works on Google Meet, Teams, Zoom, Slack Huddles, Webex and GoTo.
>
> Start a free trial: our team sets Octo up on your calls.

| ID | Copy |
|---|---|
| ALL-D | Free trial. We set it up. |

#### V1. Follow-through: "Is it in Asana yet?"

Concept: the client said it on a call, and nobody can prove it reached the tracker. Octo puts it there with an owner and updates it later. Backed by: tracker create and update, per-person DM with the quote (`product/overview.md`); competitor-teardown gap 1 (no rival page claims the later-call update).

| ID | Copy |
|---|---|
| V1-PS | Your client asked for it on Tuesday's call. Is it in Asana yet? With Octo it already is, with an owner and a deadline. |
| V1-H1 | Is it in Asana yet? |
| V1-H2 | Tasks land in Asana with an owner |
| V1-H3 | Say "done" on a call. The task updates. |
| V1-OV | Your client said it. Is it in Asana? |
| V1-CARD | Your client said it. Is it in Asana? |

Primary text, long:

> Your client asked for it on Tuesday's call. Is it in Asana yet?
>
> With Octo, nobody has to remember. It turns what was agreed into tasks in your tracker, each with an owner and a deadline.
>
> Everyone gets only their own tasks by DM, with the exact words the task came from. Say "done" on a later call and the task updates.
>
> (shared tail)

- Video hook, 0 to 3 s: opening shot is the struck note card "Usually, someone takes notes" with Octo below; text "Your client said it. Is it in **Asana**?" Reads in under 3 s, no sound needed.
- Pose card: `13-task-card.png` (Octo next to a ticked task card).
- Landing URL: https://octocrew-hq.github.io/octo-landing/?utm_source=facebook&utm_medium=paid-social&utm_campaign=octo-early-access&utm_content=meta-ad-v1

#### V2. Prep: "The brief is ready before you join"

Concept: walk into the call already knowing who is on it and what is still open. Backed by: the pre-call brief (attendees, last discussion, open items) in `product/overview.md` and the v0 page ("A brief, ready when you join"). Known weakness: the demo video shows open items on the tile during the call, not the pre-call brief, so V2 has the loosest video match of the four. The pose card carries V2 more cleanly; read V2's card CTR on its own as well.

| ID | Copy |
|---|---|
| V2-PS | Walk into every call knowing who's on it, what you discussed last time and what's still open. Octo has the brief ready. |
| V2-H1 | The brief is ready before you join |
| V2-H2 | Know what's still open before the call |
| V2-H3 | Who's on, what was said, what's open |
| V2-OV | Know what's open before the call. |
| V2-CARD | Know what's open before the call. |

Primary text, long:

> Walk into every call knowing who's on it, what you discussed last time and what's still open. Octo has the brief ready when you join.
>
> During the call, ask Octo by name and it puts the answer on its own tile. After it, the tasks land in your tracker and everyone gets their own by DM.
>
> (shared tail)

- Video hook, 0 to 3 s: struck note card, Octo below; text "Know what's **open** before the call."
- Pose card: `14-calendar.png` (Octo next to a calendar: the call that is coming up).
- Landing URL: https://octocrew-hq.github.io/octo-landing/?utm_source=facebook&utm_medium=paid-social&utm_campaign=octo-early-access&utm_content=meta-ad-v2

#### V3. Nobody types (control): "Just talk. The rest updates itself."

Concept: the punchline is what did not happen. Nobody wrote anything down, and the tools are already up to date. Backed by: brief Proof 4, the founder on Octocrew's own calls: "we're not writing anything, we just speak and discuss and then all the information in our Notion, in our CRM is being updated" (self-reported, used as the idea, not quoted in the ad). Control arm per the plan's E1.

| ID | Copy |
|---|---|
| V3-PS | Nobody on the call typed a word. Asana, your CRM and Notion are already up to date. Just talk. |
| V3-H1 | Just talk. The rest updates itself. |
| V3-H2 | Nobody typed. Asana is up to date. |
| V3-H3 | Tracker, CRM and Notion, all updated |
| V3-OV | Nobody typed a word. |
| V3-CARD | Nobody typed. Asana is up to date. |

Primary text, long:

> Nobody on the call typed a word. Asana, your CRM and Notion are already up to date.
>
> Octo joins your calls as a participant. You talk, and after the call it turns what was agreed into updates in the tools you already use.
>
> Everyone gets their own tasks by DM, with the exact quote. Nobody takes notes, so everybody takes part.
>
> (shared tail)

- Video hook, 0 to 3 s: text "**Nobody** typed a word." while "Usually, someone takes notes" is struck through on screen. The strike is the hook.
- Pose card: `12-task-done.png` (Octo with a lime check mark).
- Landing URL: https://octocrew-hq.github.io/octo-landing/?utm_source=facebook&utm_medium=paid-social&utm_campaign=octo-early-access&utm_content=meta-ad-v3

#### V4. Decide on the call: "Where are we on the launch?"

Concept: status answered on the spot, so the decision happens in the meeting instead of after it. Backed by: answers from tracker, CRM and knowledge base shown on its tile (`product/overview.md`); live-demo line 1; founder on "faster decisions" (brief Proof 4). Known bias: the video is literally this scene, so V4 has the tightest video match; the card arm helps balance it.

| ID | Copy |
|---|---|
| V4-PS | "Octo, where are we on the launch?" The answer shows up on its tile, on the call. Decide in the meeting, not after it. |
| V4-H1 | Decide on the call, not after it |
| V4-H2 | Ask by name. See it on its tile. |
| V4-H3 | Where are we on the launch? Ask Octo. |
| V4-OV | Where are we on the launch? |
| V4-CARD | Where are we on the launch? Ask Octo. |

Primary text, long:

> "Octo, where are we on the launch?"
>
> Ask by name and Octo answers from your tracker, CRM and knowledge base, then shows it on its own tile: what's done, what's stuck, who it's waiting on. No tabs, no "let me check and get back to you". The decision happens in the meeting.
>
> After the call, the tasks land in your tracker and everyone gets their own by DM.
>
> (shared tail)

- Video hook, 0 to 3 s: text "Where are we on the **launch**?" over the struck note card. Segment 2 then shows Mark asking the same question, so the hook pays off at 2.8 s.
- Pose card: `15-on-call-tile.png` (Octo on its own call tile).
- Landing URL: https://octocrew-hq.github.io/octo-landing/?utm_source=facebook&utm_medium=paid-social&utm_campaign=octo-early-access&utm_content=meta-ad-v4

### Line 2. Cold test: founder-led SMB #3, "the PM you don't have" vs the best V (€200)

**Concept.** A different argument for a different reader: the founder of a small company with no project manager is the one chasing every follow-up. Octo does the chasing. Backed by: tasks by DM with deadline and quote, weekly task review by voice (`product/overview.md`); founder default hook "The PM who never misses a follow-up" (`launch/audiences.md`, #3). Voice of customer has no quote from this audience (0 of 34), so the copy uses product facts, not customer words.

Arm A is below. Arm B is the E1 winner's ad unchanged (copy, video, card), with `utm_content=meta-ad-h3-v` plus its number. Line 2 starts on Day 3, before E1 can be read; per the plan's E1 rule, if no arm has won by then, Arm B is the control V3 (`meta-ad-h3-v3`).

| ID | Copy |
|---|---|
| H3-PS | Founder, and the only one chasing follow-ups after every call? Octo sends everyone their tasks by DM, with a deadline. |
| H3-H1 | The PM you don't have |
| H3-H2 | Stop being the only one following up |
| H3-H3 | Everyone gets their tasks by DM |
| H3-OV | You're the only one following up. |
| H3-CARD | The PM you don't have. |

Primary text, long:

> You run the company, and you're also the one chasing every follow-up after calls.
>
> Octo joins your calls and, after each one, sends everyone their own tasks by DM, with a deadline and the exact quote. The tasks land in Notion, Asana or Trello. Once a week it runs the task review with you, by voice. Say "done" on a call and the task updates.
>
> It's the PM you don't have.
>
> (shared tail)

- Video hook, 0 to 3 s: text "You're the **only one** following up." over the struck note card.
- Pose card: `10-talking.png` (Octo with a speech bubble: the voice review).
- Description, button: same as Line 1 (ALL-D, Sign Up).
- Landing URL (Arm A): https://octocrew-hq.github.io/octo-landing/?utm_source=facebook&utm_medium=paid-social&utm_campaign=octo-early-access&utm_content=meta-ad-h3
- Landing URL (Arm B, default V3): https://octocrew-hq.github.io/octo-landing/?utm_source=facebook&utm_medium=paid-social&utm_campaign=octo-early-access&utm_content=meta-ad-h3-v3

### Line 3. Warm and hot: retargeting #6 (€50)

**Concept.** These people saw the demo or the page. Two arguments, two ads in one ad set:
- **R1, hot (proof plus an honest reason to act now):** the plan's retargeting line, "Still typing up notes after calls? Start a free trial." The reason to act is real and has no deadline: the Octocrew team sets it up on the viewer's own calls. Proof: it runs every day on Octocrew's own calls (brief Proof 1, self-reported) and on six platforms (Proof 2). Creative: the 15 s cut with the R1 hook (the plan says to carry the E1 winner forward: if a V wins E1, R1's primary text stays and the headline H1 becomes that V's H1).
- **R2, warm (the mechanism behind the top objection):** auto-join and bot fatigue are 19 of 34 customer quotes (`voice-of-customer.md`). R2 answers with what is true: you choose which calls it joins, and it stays quiet until you call it by name.

| ID | Copy |
|---|---|
| R1-PS | Still typing up notes after calls? Start a free trial and our team sets Octo up on your calls. Then you just talk. |
| R1-H1 | Still typing up notes after calls? |
| R1-H2 | Free trial, set up on your own calls |
| R1-H3 | Works on Meet, Zoom, Teams and 3 more |
| R1-OV | Still typing up notes after calls? |
| R2-PS | You choose which calls Octo joins. It stays quiet until you say its name. Then it answers, and does the follow-up. |
| R2-H1 | Quiet until you call it |
| R2-H2 | You choose which calls it joins |
| R2-H3 | It speaks only when called by name |
| R2-CARD | Quiet until you call it. |

R1 primary text, long:

> Still typing up notes after calls?
>
> We run Octo every day on our own calls at Octocrew. In the free trial, our team sets it up on yours: tell us your tracker, your CRM and the platforms you call on.
>
> Works on Google Meet, Teams, Zoom, Slack Huddles, Webex and GoTo. You choose which calls it joins, and it stays quiet until you call it by name.
>
> Just talk. Octo keeps your tracker, CRM and Notion up to date. Start a free trial.

R2 primary text, long:

> You choose which calls Octo joins. It stays quiet until you say its name.
>
> Call it and it answers by voice and on its own tile. After the call, everyone gets only their own tasks by DM, with the exact quote, and your tracker is already updated.
>
> Just talk. Octo keeps your tracker, CRM and Notion up to date. Start a free trial: our team sets Octo up on your calls.

- R1 video hook, 0 to 3 s: text "Still **typing** up notes after calls?" as "Usually, someone takes notes" is struck through.
- R1 pose card (if a static is needed for placements without video): `03-wink.png`, card text = R1-OV.
- R2 pose card: `09-listening.png` (Octo with sound waves: listening, not talking). Static only; R2 has no video version.
- Description, button: ALL-D, Sign Up.
- Landing URL R1: https://octocrew-hq.github.io/octo-landing/?utm_source=facebook&utm_medium=paid-social&utm_campaign=octo-early-access&utm_content=meta-rt-1
- Landing URL R2: https://octocrew-hq.github.io/octo-landing/?utm_source=facebook&utm_medium=paid-social&utm_campaign=octo-early-access&utm_content=meta-rt-2

UTM note: one Meta ad serves Facebook and Instagram, so every Meta URL uses `utm_source=facebook` and the placement split is read in Ads Manager (Breakdown by placement). Swap the v0 base for the Grona URL when it exists; keep the query string as is.

Ads Manager names (so format results can be read without changing the UTM convention): `meta-ad-v1 | video-15s`, `meta-ad-v1 | card-13-task-card`, and the same pattern for every ad.

## UGC script

Phone shoot, no HeyGen, nothing paid. 26 s, 9:16. Speaker: Oleksii (or whoever on the Octocrew team runs Octo daily), as himself, never as a customer. On-screen data comes from a demo workspace with made-up tasks: no client names, no real CRM records (the repo is public, `README.md`). Use: Line 1 video slot for the E1 winner in the next flight, or R1 in retargeting.

| Time | Shot | Says | On-screen text (sound off) |
|---|---|---|---|
| 0 to 3 s (hook) | Selfie, laptop behind him with a Meet call open | "Every call ends with: so who's doing what?" | Every call ends with: so who's doing what? |
| 3 to 8 s (problem) | Selfie, closer | "Someone takes notes and stops taking part. Then the tracker's stale by tomorrow." | Someone takes notes. Nobody acts on them. |
| 8 to 15 s (mechanism) | Screen recording of the Meet: he says the line, the tile fills (wait cut) | "Octo, show our high-priority tasks in progress, by owner, on your tile." | Ask by name. It answers on its tile. |
| 15 to 20 s (mechanism, after) | Over-the-shoulder: a phone gets Octo's DM with a task and the exact quote | "After the call, everyone gets their own tasks, with the exact words they agreed to." | Your tasks, by DM, with the quote. |
| 20 to 26 s (proof and CTA) | Selfie | "We run it on our own calls every day. You choose which calls it joins, and it stays quiet until you call it. Start a free trial and we'll set it up on yours." | Just talk. Start free trial. |

Hand to video-studio for the shot list. Keep every text line clear of the top 270 px, the bottom 384 px and the right 120 px.

## Audiences

| Line | Audience settings | Why |
|---|---|---|
| 1. #1 agencies by interests | Detailed targeting (original audience options, so all four arms hit the same pool; Advantage detailed targeting expansion off): interests Asana, Trello, Notion, project management software, and Meta's closest options for agency owners (for example the advertising agency and digital marketing interests; pick what Ads Manager offers). Age 25 to 55. Placements: Advantage+ placements. | Plan targeting table, row "#1 Agencies by interest". "Small business owners" moves from this line to Line 2 only: Meta no longer offers detailed-targeting exclusions, and keeping it in both lines would overlap the two pools. The plan's list also had two other work-tool brands and one CRM brand; they are left out of this file under the team's naming rule. Adding them back as interests only (never in copy) is a team call. |
| 1, next flight | Advantage+ audience, broad, with the Line 1 interests as suggestions, the E1 winner as the only creative | Once a hook has won, broad delivery usually finds the buyer more cheaply than narrow interests; not before, because E1 needs one fixed pool. |
| 2. #3 founder-led SMB | Behaviour: small business owners. Interests: Notion, Trello, productivity software. Age 25 to 55. Same placements. | Plan targeting table, row "#3". Meta has no company-size filter, so the "2 to 50, no PM" limit comes from the copy speaking to founders who follow up themselves. |
| 3. #6 retargeting | Custom audiences, included: people who watched 50% or more of any Line 1 or Line 2 video (30 days); Instagram account and Facebook Page engagers (30 days); landing page visitors (30 days, needs the Meta pixel on the landing page). Excluded: sign-ups (pixel Lead event, or an uploaded customer list of trial form emails). No age or interest limits on top. | Plan row "#6": landing visitors 30 days, 50%+ demo viewers, excluding sign-ups. Engagers are added because the v0 page has no pixel, so on Day 4 the pool is mostly video viewers. |

All lines: same countries as the LinkedIn line (team decision above), English-language placements.

## Testing structure

- **One campaign** (`octo-early-access`, Meta). Objective: Traffic, optimised for landing page views, until the landing page has the Meta pixel and a Lead event; then switch new ad sets to Leads (website) optimised for that event. CTR is the first decision metric either way.
- **Ad sets:**
  - Line 1: four ad sets, V1 to V4, €50 each, built with Ads Manager's A/B test so the four arms split the audience without overlap. Each ad set holds two ads: its 15 s video (9:16 and 4:5 versions) and its pose card. Identical in every arm: audience, placements, formats, description, button, long-text tail, end card.
  - Line 2: two ad sets, Arm A (meta-ad-h3) and Arm B (best V), €100 each, same audience, same A/B split, same formats.
  - Line 3: one ad set, €50, R1 and R2 together.
- **The single variable.** Line 1: the value proposition (hook text in video segment 1, card text, primary text, headlines). Line 2: the hook, "the PM you don't have" vs the best V. Nothing else changes inside a test.
- **Turn off** Advantage+ creative enhancements that rewrite text or add music and overlays: they would change the variable being tested.
- **Deciding metric:** link CTR first, then cost per sign-up as the tiebreak (plan E1).
- **Minimum before judging:** the agent rule is 3 to 5 times the target cost per result. The plan's Meta cost per sign-up is €101 (budget split), so judging on sign-ups would need €303 to €505 per arm, more than the whole line. With €50 per arm, judge on CTR only: about 1,850 impressions and 25 clicks per arm (plan E1), directional, not significant.
- **Decision rule (plan E1):** the arm with link CTR at least 30% relative above every other arm and at least 20 clicks becomes the lead hook for retargeting and the landing hero. If no arm clears it, keep V3 and rerun at €100 per arm before any claim about positioning. Line 2 uses the same CTR rule between its two arms, plus the plan's persona rule: if #3 converts at least 1.5x the #1 rate with 2 or more sign-ups, add it as a second persona next flight.
- **Kill rule:** after 1,000 impressions, pause any ad with link CTR below 0.70% (half the plan's Meta SaaS benchmark of 1.40%). In Line 1, pausing one of the two ads leaves the arm running on the other; pause the whole arm only if both ads are under the line. Retargeting: if the ad set has spent less than half its budget by Day 6 because the pool is small, widen all windows to 60 days.
- **Calendar (plan):** Day 1 Line 1, Day 3 Line 2, Day 4 Line 3, Day 7 read results and move budget to the winner.

## Ad Library check

`competitor-teardown.md` did not load the Meta Ad Library (it needs a browser session), so nothing here describes what competitors run. Before launch, a teammate opens:

- Fireflies: https://www.facebook.com/ads/library/?q=fireflies.ai&ad_type=all&country=ALL
- Otter: https://www.facebook.com/ads/library/?q=otter.ai&ad_type=all&country=ALL
- ZoomMate: https://www.facebook.com/ads/library/?q=zoommate&ad_type=all&country=ALL

Look for: which ads have run longest (the start date on each card), video vs static, the first line of the primary text, whether any ad already uses "updates your tracker" or "quiet until called", and the landing URL each one sends to. If a rival already runs a V3-style "nobody types" hook, say so before E1 starts; it changes what a V3 win means.

## Count table

Counted with Python `len()` on the exact strings above (straight quotes and apostrophes). Limits: primary short 125 (the whole short text sits inside the visible first 125 characters), headline 40, description 30. Overlays and card texts have no Meta limit; the house rule is 8 words or fewer so they read in 3 seconds.

| Item | Text | Chars | Limit | OK |
|---|---|---|---|---|
| ALL-D | Free trial. We set it up. | 25 | 30 | yes |
| V1-PS | Your client asked for it on Tuesday's call. Is it in Asana yet? With Octo it already is, with an owner and a deadline. | 118 | 125 | yes |
| V1-H1 | Is it in Asana yet? | 19 | 40 | yes |
| V1-H2 | Tasks land in Asana with an owner | 33 | 40 | yes |
| V1-H3 | Say "done" on a call. The task updates. | 39 | 40 | yes |
| V1-OV | Your client said it. Is it in Asana? | 8 words | 8 words | yes |
| V1-CARD | Your client said it. Is it in Asana? | 8 words | 8 words | yes |
| V2-PS | Walk into every call knowing who's on it, what you discussed last time and what's still open. Octo has the brief ready. | 119 | 125 | yes |
| V2-H1 | The brief is ready before you join | 34 | 40 | yes |
| V2-H2 | Know what's still open before the call | 38 | 40 | yes |
| V2-H3 | Who's on, what was said, what's open | 36 | 40 | yes |
| V2-OV | Know what's open before the call. | 6 words | 8 words | yes |
| V2-CARD | Know what's open before the call. | 6 words | 8 words | yes |
| V3-PS | Nobody on the call typed a word. Asana, your CRM and Notion are already up to date. Just talk. | 94 | 125 | yes |
| V3-H1 | Just talk. The rest updates itself. | 35 | 40 | yes |
| V3-H2 | Nobody typed. Asana is up to date. | 34 | 40 | yes |
| V3-H3 | Tracker, CRM and Notion, all updated | 36 | 40 | yes |
| V3-OV | Nobody typed a word. | 4 words | 8 words | yes |
| V3-CARD | Nobody typed. Asana is up to date. | 7 words | 8 words | yes |
| V4-PS | "Octo, where are we on the launch?" The answer shows up on its tile, on the call. Decide in the meeting, not after it. | 118 | 125 | yes |
| V4-H1 | Decide on the call, not after it | 32 | 40 | yes |
| V4-H2 | Ask by name. See it on its tile. | 32 | 40 | yes |
| V4-H3 | Where are we on the launch? Ask Octo. | 37 | 40 | yes |
| V4-OV | Where are we on the launch? | 6 words | 8 words | yes |
| V4-CARD | Where are we on the launch? Ask Octo. | 8 words | 8 words | yes |
| H3-PS | Founder, and the only one chasing follow-ups after every call? Octo sends everyone their tasks by DM, with a deadline. | 118 | 125 | yes |
| H3-H1 | The PM you don't have | 21 | 40 | yes |
| H3-H2 | Stop being the only one following up | 36 | 40 | yes |
| H3-H3 | Everyone gets their tasks by DM | 31 | 40 | yes |
| H3-OV | You're the only one following up. | 6 words | 8 words | yes |
| H3-CARD | The PM you don't have. | 5 words | 8 words | yes |
| R1-PS | Still typing up notes after calls? Start a free trial and our team sets Octo up on your calls. Then you just talk. | 114 | 125 | yes |
| R1-H1 | Still typing up notes after calls? | 34 | 40 | yes |
| R1-H2 | Free trial, set up on your own calls | 36 | 40 | yes |
| R1-H3 | Works on Meet, Zoom, Teams and 3 more | 37 | 40 | yes |
| R1-OV | Still typing up notes after calls? | 6 words | 8 words | yes |
| R2-PS | You choose which calls Octo joins. It stays quiet until you say its name. Then it answers, and does the follow-up. | 114 | 125 | yes |
| R2-H1 | Quiet until you call it | 23 | 40 | yes |
| R2-H2 | You choose which calls it joins | 31 | 40 | yes |
| R2-H3 | It speaks only when called by name | 34 | 40 | yes |
| R2-CARD | Quiet until you call it. | 5 words | 8 words | yes |
