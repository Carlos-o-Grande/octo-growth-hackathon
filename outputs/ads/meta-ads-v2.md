# Meta ads v2: Octo free trial (small teams, no PM yet)

2026-11-08. Agent: meta-ads (`growth-kit/.github/agents/meta-ads.agent.md`). Replaces [`meta-ads-v1.md`](meta-ads-v1.md) and the agency version in [`growth-kit/outputs/ads/meta-ads.md`](../../growth-kit/outputs/ads/meta-ads.md). Built from [`brief/campaign-brief.md`](../../brief/campaign-brief.md) v2 (only the "can" column is used), [`campaign-plan-v2.md`](../positioning/campaign-plan-v2.md) (themes T1 to T4, budget, targeting, UTM convention), [`landing-changes-v1.md`](../website/landing-changes-v1.md) (hero for message match), [`product/overview.md`](../../product/overview.md), [`product/live-demo.md`](../../product/live-demo.md), [`voice-of-customer.md`](../../growth-kit/outputs/research/voice-of-customer.md) and a frame read of `assets/octo-demo-36s-9x16.mp4` (1080x1920, 30 fps, 36.15 s, re-checked today).

Meta is the main channel: €650 of the €1,000.

| Line | Budget | Days | Ads | utm_content |
|---|---|---|---|---|
| Prospecting: 4 themes | €400 (€100 each) | 1 to 3 | T1 to T4: one 15 s 9:16 video + one static card each | meta-t1 to meta-t4 |
| Scale the winner | €150 | 4 to 7 | The winning theme's video and card, unchanged | the winner's own (meta-t1 to meta-t4) |
| Retargeting | €100 | 4 to 7 | R1 (video) + R2 (static card) | meta-rt-1, meta-rt-2 |

**Message house in every ad.** Promise: **Just talk. Octo keeps your tracker, CRM and Notion up to date.** Angle: **The project manager your team doesn't have yet.** CTA: **Start free trial** (our team sets Octo up on the trial team's calls; not self-serve). This is word for word the landing hero and eyebrow in `landing-changes-v1.md`, so ad and page match.

**Before anything goes live (team actions, not copy):**
1. **Oleksii's OK on the demo video in paid ads.** `assets/README.md`: ask Oleksii "before posting them on social media". A running ad is public. The people and the project in the video are made up; no ad presents them as customers.
2. **Landing ready:** "Start free trial" button and form, Meta pixel with PageView and Lead (landing-changes-v1 items 4 and 5). Without the pixel there is no retargeting pool of visitors and no sign-up optimisation.
3. **Countries** are still open in the plan (EU + UK + US, or EU only).
4. **"Quiet until you call it"** is not used in any ad: the brief marks it *confirm* and the live-demo notes say Octo answers everything it hears. Every ad answers the join objection with the confirmed line, "You choose which calls it joins". If Oleksii confirms, R2-P1 can swap its second sentence for "It stays quiet until you call it by name."
5. **T4 wording:** the plan's hook says "Every Monday". The product facts say "a weekly task review, by voice", with no fixed day. The ads say "every week". Switch to "Monday" only if Oleksii confirms the day is set by the team.

## Angles

Meta's funnel stages map like this: T1 to T4 are four cold arguments for people who have never heard of Octo (the plan's theme test); R1 is hot (proof and an honest reason to act now: our team sets it up); R2 is warm (the mechanism behind the top objection).

### Shared settings for every ad

- **Description (ALL-D):** Free trial. We set it up.
- **CTA button: Sign Up.** Meta's list has no "Start free trial" button; Sign Up is the closest match for a form that starts a trial. The primary text and the end card say "Start free trial", which is the landing button. If Ads Manager offers a free-trial button for the chosen objective, use it.
- **Long primary text:** any of the 3 short options below, then this tail (identical in every prospecting ad, so the themes differ only in the argument):

> Just talk. Octo keeps your tracker, CRM and Notion up to date.
>
> You choose which calls it joins. Works on Google Meet, Teams, Zoom, Slack Huddles, Webex and GoTo.
>
> Start free trial: our team sets Octo up on your calls.

- **End card (E), all four videos and R1, 2.5 s, new:** background `#3B007C`, pose `02-happy.png` (scaled to 520x520, centred, y 820 to 1340), "Just talk." in white at about 92 px, then "Octo keeps your tracker, CRM and Notion up to date." in white at about 52 px, then "Start free trial" in lime `#B9DB2F`, text block between y 300 and y 780, x 72 to 940. No URL, no fake button. It replaces the source end card ("Your voice agent on every call", octocrew.ai), which carries a different message and CTA.

### Shared production rules (from the agency version, still valid)

Source: `assets/octo-demo-36s-9x16.mp4`. Segments used below, read off the file:

| Code | Source (s) | What is on screen (baked captions read with sound off) |
|---|---|---|
| S-hook | 2.0 to 4.8 | Headline "Who does what after the call?", note card "Usually, someone takes notes" gets struck through, Octo character, caption "The call is over." / "And nobody wrote down who's doing" |
| S-ask | 5.4 to 7.3 | Call grid, Mark's tile lit. Caption, Mark: "Octo, where are we with the landing page launch?" |
| S-status | 9.1 to 11.9 | Octo's tile "Landing page launch": Design done, Layout done, Copy stuck "Anna · since Tuesday". Caption, Octo: "Two tasks are done, one is stuck: the copy has been waiting on Anna since Tuesday." |
| S-anna | 13.6 to 15.0 | Anna's tile lit. Caption: "Yes, I'll take it. I'll have it done by Friday." |
| S-sync | 17.2 to 18.4 | Mark's tile lit. Caption: "And let's do a quick sync on Thursday at ten." |
| S-captured | 20.0 to 22.6 | Octo's tile "Captured", badge "updated in tracker", task "Landing page copy, Anna · by Friday", then the calendar event "Launch sync, Thursday · 10:00" lands. Caption: "Got it: Anna has the copy by Friday, sync on Thursday at ten. I've added the event to the calendar." |
| S-captured-end | 21.7 to 24.3 | Same tile with both items, cursor clicks hang up |
| S-dm | 27.4 to 30.6 | Direct message from Octo: "Anna, here's your task from the launch sync", task card (status, assignee, due Friday), the exact quote highlighted in lime at the end. Caption: "their tasks in a direct message," / "with a deadline and the exact" |

Edit rules for every cut:
- **Hook text** replaces the source headline in the same position: white, lime on one key word, font scaled to about 80% of the source so up to 3 lines fit in 900 px width; the note card and Octo move down about 90 px to make room. The source caption under Octo is masked with `#3B007C` in the hook segment so only the hook and the note card read.
- **Bottom strip** y 1600 to 1920 masked with `#3B007C` across the whole cut: the source progress bar jumps after cuts and the "octocrew.ai" footer sits in the bottom dead zone.
- **Audio:** cut the source track at the same points; where a cut lands mid-word, drop to music only. Every ad must work muted: every spoken line is a baked caption.
- **Nothing new is faked:** no CRM, Notion or Asana screens are mocked up. Where a theme names them, it does so in a plain text card.

Placements from each cut:

| Placement | Size | How | Safe zones |
|---|---|---|---|
| Reels and Stories | 9:16, 1080x1920 | Scale the source frame to 87% (940x1670), place at x 20, y 130, fill the rest with `#3B007C`. New text cards and the end card are built at full size inside the same margins. | Content sits between y 287 and y 1473: clear of the top 270 px (14%) and the bottom 384 px (20%). Content ends at x 960, so the right 120 px (Reels buttons) stay clear of the tile labels ("since Tuesday", "Thursday · 10:00"). |
| Feed (Facebook, Instagram) | 4:5, 1080x1350 | Crop the unscaled source at y 180 (keeps the tile, the call grid and the captions); text cards and end card rebuilt at 4:5 with the same layout | Hook and captions sit 90 px or more inside every edge |

Static cards (no image generation; poses are hand-coded PNGs, 1200x1200, transparent, from `growth-kit/outputs/creative/octo-poses/`):
- **9:16, 1080x1920:** background `#3B007C`. Card text in white at about 76 px, lime on one key word, between y 300 and y 900, x 72 to 940. Pose scaled to 640x640, centred, between y 900 and y 1500. Footer line "Start free trial" in lime at about 44 px, y 1500 to 1540, as text only (no button shape). Nothing in the top 270 px, the bottom 384 px or the right 120 px.
- **4:5, 1080x1350:** same elements; text top-left from x 72, y 120; pose 560x560 centred, y 560 to 1120; footer at y 1180.
- Only the card text and the footer go on the image. No price, no logo wall, no fake UI.

### T1. The PM you don't have yet (cold)

**Argument:** in a small team with no project manager, the founder is the one chasing follow-ups. Octo does the chasing. **Backed by:** each person gets their own tasks by DM with a deadline and the exact quote; tasks land in Notion, Asana, Trello (brief "can" column; `product/overview.md`). Trigger from the brief: a task agreed on Tuesday's call is still nobody's on Friday.

**Video hook (0 to 3 s, sound off):** opening shot is the hook card: "No **project manager**? Your calls have one now." while the note card "Usually, the founder chases it" is struck through.

**15 s edit:**

| # | Out (s) | Source (s) | On screen |
|---|---|---|---|
| 1 | 0.0 to 2.8 | S-hook 2.0 to 4.8 | Hook text "No project manager? Your calls have one now." Note card text replaced with "Usually, the founder chases it" (same card, same strike animation). |
| 2 | 2.8 to 5.3 | S-status 9.4 to 11.9 | Tile: Design done, Layout done, Copy stuck "Anna · since Tuesday". Caption: "Two tasks are done, one is stuck: the copy has been waiting on Anna since Tuesday." |
| 3 | 5.3 to 6.7 | S-anna 13.6 to 15.0 | Caption: "Yes, I'll take it. I'll have it done by Friday." |
| 4 | 6.7 to 9.3 | S-captured 20.0 to 22.6 | "Captured", "updated in tracker", "Landing page copy, Anna · by Friday", the calendar event lands. |
| 5 | 9.3 to 12.5 | S-dm 27.4 to 30.6 | Anna's DM with her task and the quote highlighted. Captions: "their tasks in a direct message," / "with a deadline and the exact". |
| 6 | 12.5 to 15.0 | new | End card (E). |

Total 15.0 s (summed by code).

| ID | Primary text (short, 3 options) |
|---|---|
| T1-P1 | No project manager yet? Octo joins your calls, tracks who owes what and sends each person their own tasks by DM. |
| T1-P2 | Small team, no PM, and you're the one chasing follow-ups after every call? Octo does the chasing now. |
| T1-P3 | A task agreed on Tuesday's call is still nobody's on Friday. With Octo it has an owner, a deadline and a DM. |

| ID | Headline |
|---|---|
| T1-H1 | The PM your team doesn't have yet |
| T1-H2 | No PM? Your calls have one now. |
| T1-H3 | Stop being the one who follows up |

Kept over "Everyone gets their tasks by DM" (a feature, not the founder's pain) and "The project manager your team doesn't have yet" (47 characters, over the limit; it lives on the card instead).

- **Static card:** pose `13-task-card.png` (Octo next to a ticked task card). Card text: "The **project manager** your team doesn't have yet." Footer: "Start free trial".
- **UTM link:** https://octo-landing-47q.pages.dev/?utm_source=instagram&utm_medium=paid-social&utm_campaign=octo-free-trial&utm_content=meta-t1

### T2. Just talk (cold)

**Argument:** the punchline is what did not happen: nobody typed, and the tools are already up to date. **Backed by:** brief Proof, Octocrew on its own calls: "we're not writing anything, we just speak and discuss and then all the information in our Notion, in our CRM is being updated" (Oleksii, 8 Nov; used as the idea, not quoted as a customer); tasks into Notion, Asana, Trello; CRM and Notion updated from the transcript ("can" column). Supporting line from the brief: "Note-takers record the meeting. Octo takes part in it."

**Video hook (0 to 3 s, sound off):** "**Nobody** on this call typed a word." while the source note card "Usually, someone takes notes" is struck through. The strike is the hook.

**15 s edit:**

| # | Out (s) | Source (s) | On screen |
|---|---|---|---|
| 1 | 0.0 to 2.8 | S-hook 2.0 to 4.8 | Hook text "Nobody on this call typed a word." Source note card kept as is, struck through. |
| 2 | 2.8 to 4.2 | S-anna 13.6 to 15.0 | Caption: "Yes, I'll take it. I'll have it done by Friday." |
| 3 | 4.2 to 5.4 | S-sync 17.2 to 18.4 | Caption: "And let's do a quick sync on Thursday at ten." |
| 4 | 5.4 to 8.0 | S-captured-end 21.7 to 24.3 | Task and calendar event captured, "updated in tracker", cursor hangs up. Caption: "Got it: Anna has the copy by Friday, sync on Thursday at ten. I've added the event to the calendar." |
| 5 | 8.0 to 10.4 | S-dm 28.2 to 30.6 | Anna's DM, quote highlighted. |
| 6 | 10.4 to 12.5 | new text card | `#3B007C`, pose `12-task-done.png` (560x560, y 900 to 1460), text "Notion. Asana. Your CRM. **Updated.**" (y 300 to 820). Typography only, no mocked screens. |
| 7 | 12.5 to 15.0 | new | End card (E). |

Total 15.0 s. Note for the team: the plan describes "the Asana card, the CRM record and the Notion page update on screen". The demo has no such screens (it shows the "updated in tracker" badge and the DM), so beat 6 names them in text instead of faking UI. If Oleksii screen-records a real Notion or Asana update from a team call, it replaces beat 6.

| ID | Primary text (short, 3 options) |
|---|---|
| T2-P1 | Nobody on this call typed a word. After it, Notion, Asana and your CRM were already up to date. Just talk. |
| T2-P2 | Note-takers record the meeting. Octo takes part in it, then updates your tracker, CRM and Notion after the call. |
| T2-P3 | Stop typing up notes after calls. Just talk: Octo puts the tasks in Notion, Asana or Trello and updates your CRM. |

| ID | Headline |
|---|---|
| T2-H1 | Just talk. The rest updates itself. |
| T2-H2 | Nobody typed. Notion is up to date. |
| T2-H3 | Note-takers record. Octo takes part. |

Kept over "Your tracker, CRM and Notion, updated" (reads as a feature list, no hook).

- **Static card:** pose `12-task-done.png` (Octo with a lime check). Card text: "**Nobody** typed. Notion is up to date." Footer: "Start free trial".
- **UTM link:** https://octo-landing-47q.pages.dev/?utm_source=instagram&utm_medium=paid-social&utm_campaign=octo-free-trial&utm_content=meta-t2

### T3. Ask it on the call (cold)

**Argument:** status answered on the spot, so the decision happens in the meeting. **Backed by:** speaks when called by name, answers from the knowledge base and CRM, shows answers on its own tile, tasks by owner (`product/overview.md`, live-demo line 1). This is the scene the demo actually films, so T3 has the tightest video match of the four; read its CTR knowing that.

**Video hook (0 to 3 s, sound off):** "Octo, where are we on the **launch**?" over the note card "Usually: "let me check and get back to you"" being struck through. Mark asks the same question at 2.4 s, so the hook pays off at once.

**15 s edit:**

| # | Out (s) | Source (s) | On screen |
|---|---|---|---|
| 1 | 0.0 to 2.4 | S-hook 2.0 to 4.4 | Hook text "Octo, where are we on the launch?" Note card text replaced with "Usually: "let me check and get back to you"", struck through. |
| 2 | 2.4 to 4.3 | S-ask 5.4 to 7.3 | Caption, Mark: "Octo, where are we with the landing page launch?" |
| 3 | 4.3 to 7.0 | S-status 9.2 to 11.9 | The tile fills: Design done, Layout done, Copy stuck "Anna · since Tuesday". Caption: "Two tasks are done, one is stuck: the copy has been waiting on Anna since Tuesday." (The live wait of 7.3 to 9.2 is cut.) |
| 4 | 7.0 to 8.4 | S-anna 13.6 to 15.0 | Caption: "Yes, I'll take it. I'll have it done by Friday." |
| 5 | 8.4 to 11.0 | S-captured 20.0 to 22.6 | "Captured", "updated in tracker", the calendar event lands. |
| 6 | 11.0 to 12.5 | S-dm 29.1 to 30.6 | Anna's DM, quote highlighted. |
| 7 | 12.5 to 15.0 | new | End card (E). |

Total 15.0 s.

| ID | Primary text (short, 3 options) |
|---|---|
| T3-P1 | "Octo, where are we on the launch?" It answers on the call and shows who owes what on its own tile. |
| T3-P2 | No more "let me check and get back to you". Call Octo by name and the status shows up on its tile, on the call. |
| T3-P3 | Ask Octo by name on Meet, Zoom or Teams. It answers from your knowledge base and CRM, right there on the call. |

| ID | Headline |
|---|---|
| T3-H1 | Ask it on the call. See it on its tile. |
| T3-H2 | Where are we on the launch? Ask Octo. |
| T3-H3 | Decide on the call, not after it |

Kept over "Call it by name. It answers." (true, but no outcome for a founder).

- **Static card:** pose `15-on-call-tile.png` (Octo on its own call tile, lime frame). Card text: ""Octo, where are we on the **launch**?"" Footer: "Start free trial".
- **UTM link:** https://octo-landing-47q.pages.dev/?utm_source=instagram&utm_medium=paid-social&utm_campaign=octo-free-trial&utm_content=meta-t3

### T4. The weekly review (cold)

**Argument:** the same status questions come back every week (brief, Problem). Octo runs the weekly task review by voice, and a "done" said on a later call updates the task. **Backed by:** "a weekly task review, by voice" and "update them when someone says 'done' on a later call" ("can" column). Known weakness: the demo has no footage of a weekly review. The cut uses the closest true scene (Octo reading out tasks by owner) and says the weekly part in text. If Oleksii screen-records a real review on a team call, it replaces beats 2 to 4.

**Video hook (0 to 3 s, sound off):** "Every **week**, Octo reads out who owes what." while the note card "Usually: the same status questions" is struck through.

**15 s edit:**

| # | Out (s) | Source (s) | On screen |
|---|---|---|---|
| 1 | 0.0 to 2.8 | S-hook 2.0 to 4.8 | Hook text "Every week, Octo reads out who owes what." Note card text replaced with "Usually: the same status questions", struck through. |
| 2 | 2.8 to 5.6 | S-status 9.1 to 11.9 | Tile with tasks and the stuck owner. Caption, Octo: "Two tasks are done, one is stuck: the copy has been waiting on Anna since Tuesday." |
| 3 | 5.6 to 7.0 | S-anna 13.6 to 15.0 | Caption: "Yes, I'll take it. I'll have it done by Friday." |
| 4 | 7.0 to 9.6 | S-captured 20.0 to 22.6 | "Captured", "updated in tracker", the calendar event lands. |
| 5 | 9.6 to 12.5 | new text card | `#3B007C`, pose `10-talking.png` (560x560, y 900 to 1460), text "Say "done" next week. The task **updates**." (y 300 to 820). |
| 6 | 12.5 to 15.0 | new | End card (E). |

Total 15.0 s.

| ID | Primary text (short, 3 options) |
|---|---|
| T4-P1 | Once a week, Octo reads out who owes what, by voice, on your call. Say "done" on a later call and the task updates. |
| T4-P2 | The same status questions every week? Octo runs the weekly task review by voice, so you don't have to. |
| T4-P3 | Founder running the weekly check-in alone? Octo reads out the open tasks and who owns each one. You just talk. |

| ID | Headline |
|---|---|
| T4-H1 | Who owes what, read out every week |
| T4-H2 | Your weekly task review, by voice |
| T4-H3 | Say "done" on a call. The task updates. |

Kept over "The weekly review runs itself" (overclaims: Octo tracks what the team agrees, it does not plan or prioritise, per the "cannot" column).

- **Static card:** pose `10-talking.png` (Octo with a speech bubble). Card text: "Who owes what, read out every **week**." Footer: "Start free trial".
- **UTM link:** https://octo-landing-47q.pages.dev/?utm_source=instagram&utm_medium=paid-social&utm_campaign=octo-free-trial&utm_content=meta-t4

### R1. Retargeting, hot: "we set it up" (video)

**Who sees it:** landing visitors and 50%+ viewers of any Octo video, not signed up. **Argument:** proof plus an honest reason to act now, with no fake deadline: Octocrew runs its own calls on Octo every day (brief Proof), and in the trial our team sets it up on yours. **Creative:** the winning theme's 15 s cut with only beat 1's hook text changed to "Still chasing **follow-ups** after calls?" (same note card and strike as the winner). If no theme has a clear winner on Day 3, use T2's cut.

| ID | Primary text (short, 3 options) |
|---|---|
| R1-P1 | Still the one chasing follow-ups after calls? Start a free trial and our team sets Octo up on your calls. |
| R1-P2 | We run our own team's calls on Octo every day. Start a free trial and our team sets it up on yours. |
| R1-P3 | Tell us your tracker, your CRM and where you call. Our team sets Octo up for your free trial. Then you just talk. |

| ID | Headline |
|---|---|
| R1-H1 | Still chasing follow-ups after calls? |
| R1-H2 | Free trial, set up on your own calls |
| R1-H3 | We set it up. You just talk. |

- Long text: short option, then the shared tail.
- Static fallback (placements without video): pose `03-wink.png`, card text "Still chasing **follow-ups** after calls?", footer "Start free trial".
- **UTM link:** https://octo-landing-47q.pages.dev/?utm_source=instagram&utm_medium=paid-social&utm_campaign=octo-free-trial&utm_content=meta-rt-1

### R2. Retargeting, warm: "you choose which calls it joins" (static)

**Who sees it:** same pool. **Argument:** the top objection in the category is the uninvited meeting recorder (18 of the 34 quotes in `voice-of-customer.md` are about consent, trust or bot fatigue, for example "If someone sends an AI to my meeting instead of showing up themselves, I'm kicking it out.", https://news.ycombinator.com/item?id=44458393). R2 answers with what is confirmed: you choose which calendar events it joins, and it is never hidden (the brief's "cannot" column: it cannot be invisible to guests). It does not say "joins only when invited", which is false.

| ID | Primary text (short, 3 options) |
|---|---|
| R2-P1 | You choose which calls Octo joins. Pick the calendar events, and everyone on those calls can see it's there. |
| R2-P2 | Not every meeting needs Octo. You choose which calls it joins. On those, everyone gets their own tasks after. |
| R2-P3 | You choose which calls Octo joins. On those, call it by name, and after, everyone gets their own tasks by DM. |

| ID | Headline |
|---|---|
| R2-H1 | You choose which calls it joins |
| R2-H2 | Pick the calls. Octo does the follow-up. |
| R2-H3 | Not every meeting. The ones you pick. |

- Long text: short option, then the shared tail (drop its "You choose which calls it joins." sentence to avoid repeating it).
- **Static card:** pose `14-calendar.png` (Octo next to a calendar: the events you pick). Card text: "You **choose** which calls it joins." Footer: "Start free trial".
- **UTM link:** https://octo-landing-47q.pages.dev/?utm_source=instagram&utm_medium=paid-social&utm_campaign=octo-free-trial&utm_content=meta-rt-2

**UTM note.** The links follow the plan's example (`utm_source=instagram`): Reels and Stories delivery is mostly Instagram, but one Meta ad also serves Facebook placements with the same URL. Read the real split in Ads Manager (Breakdown by placement). `meta-rt-1` and `meta-rt-2` are the plan's `meta-rt` split into its two ads. Ads Manager names, so format can be read without touching the UTMs: `meta-t1 | video-15s`, `meta-t1 | card-13-task-card`, and the same pattern for every ad.

## UGC script (optional, next flight)

Phone shoot, nothing paid, no HeyGen. 22 s, 9:16. Speaker: Oleksii or whoever at Octocrew runs Octo daily, as himself, never as a customer. On-screen data from a demo workspace with made-up tasks. Every text line stays clear of the top 270 px, the bottom 384 px and the right 120 px. Hand to video-studio for the shot list.

| Time | Shot | Says | On-screen text |
|---|---|---|---|
| 0 to 3 s | Selfie, laptop behind with a Meet call open | "Small team, no project manager. Guess who chases every follow-up?" | No PM? Guess who chases follow-ups. |
| 3 to 8 s | Screen recording of the Meet, the wait cut | "Octo, where are we on the launch?" Then the tile fills. | Ask it on the call. |
| 8 to 14 s | Over the shoulder: a phone gets Octo's DM with a task and the quote | "After the call, everyone gets their own tasks, with the exact words they agreed to." | Your tasks, by DM, with the quote. |
| 14 to 22 s | Selfie | "We run our own calls on it every day. You choose which calls it joins. Start a free trial and we'll set it up on yours." | Just talk. Start free trial. |

## Audiences

| Line | Settings | Why |
|---|---|---|
| Prospecting T1 to T4 | Original audience options so all four themes hit the same pool, Advantage detailed targeting expansion off. Age 25 to 55. Detailed targeting from the plan: small business owners, founders and entrepreneurs, Notion, Asana, Trello, ClickUp, Monday.com, remote work, project management, Google Workspace, Zoom. Placements: Reels, Stories, Feed. | `campaign-plan-v2.md`, Meta targeting. Interests are targeting only: the copy names only Notion, Asana and Trello. Meta has no company-size or "no PM" filter, so the 1 to 50 limit comes from the copy speaking to founders who follow up themselves. |
| Scale the winner | Advantage+ audience, broad, with the same interests as suggestions, age 25 to 55, the winning video and card only | Once a theme has won, broad delivery usually finds the buyer more cheaply; not before, because the theme test needs one fixed pool. |
| Retargeting R1 + R2 | Custom audiences included: landing page visitors, 30 days (needs the pixel); people who watched 50% or more of any Octo video, 30 days. Excluded: sign-ups (pixel Lead event, or an uploaded list of trial form emails). No age or interest layer on top. | Plan, Meta targeting: "landing visitors, 50%+ viewers of any Octo video, excluding trial sign-ups". The 30-day windows are this file's choice. |

All lines: the countries the team picks (open in the plan), English-language placements.

## Testing structure

- **One campaign**, `octo-free-trial`. Objective: Leads (website), optimised for the pixel Lead event, if the pixel is live on Day 1; otherwise Traffic, optimised for landing page views, and switch the scale and retargeting ad sets to Leads once the event fires.
- **Theme test, Days 1 to 3:** four ad sets, T1 to T4, €100 lifetime each (about €33 a day), built with Ads Manager's A/B test so the four split one audience without overlap. Each ad set holds two ads: the theme's 15 s video (9:16 plus 4:5) and its static card. The first primary option (P1) and first headline (H1) run in the test; P2, P3, H2, H3 go in as Meta's multiple text options only in the scale ad set, so they do not blur the theme test.
- **The single variable:** the theme (hook, video beats, card, primary text, headlines). Identical in every arm: audience, placements, description, button, long-text tail, end card.
- **Turn off** Advantage+ creative enhancements that rewrite text or add music and overlays: they would change the variable.
- **Deciding metric:** link CTR, then cost per sign-up as the tiebreak (plan: "CTR to pick the winning theme").
- **Minimum before judging:** the agent rule is 3 to 5 times the target cost per result. The plan's target is about €96 per sign-up, so judging on sign-ups would need €288 to €480 per theme: more than the whole line. Judge on CTR only. At the plan's CPC ($2.02, Superads via https://blog.coupler.io/facebook-ads-statistics/) €100 buys about 49 clicks per theme; at the same source's 1.40% SaaS CTR that is about 3,500 impressions. On the morning of Day 3 each theme has spent about €67: about 33 clicks. Directional, not significant.
- **Decision (plan, Day 3):** read link CTR per theme, pause the two weakest. The winner is the theme with the highest link CTR and at least 20 link clicks. If the top two are within 30% (relative) of each other, the winner is the one with more sign-ups; if still tied, T1, because it carries the campaign angle.
- **Day 4 to 7:** €150 to the winner (new ad set, broad audience, P1 to P3 and H1 to H3 as multiple text options). Retargeting on, €100, R1 and R2 in one ad set.
- **Kill rule:** after 1,000 impressions, pause any ad with link CTR below 0.70% (half the 1.40% SaaS benchmark above). Pausing one ad leaves the theme running on the other; pause the theme only if both are under the line. Retargeting: if the ad set has spent less than half its budget by Day 6 because the pool is small, widen both windows to 60 days.
- **Expected (plan's assumptions, computed in the plan):** Meta 4.0 + 1.5 + 2.0 sign-ups. €1,000 picks a direction for the next flight; it does not prove one.

## Ad Library check

No competitor ads were loaded for this file (the Ad Library needs a browser session), so nothing here describes what rivals run. Before launch, a teammate opens:

- Sembly: https://www.facebook.com/ads/library/?q=sembly&ad_type=all&country=ALL
- Fireflies: https://www.facebook.com/ads/library/?q=fireflies.ai&ad_type=all&country=ALL
- Otter: https://www.facebook.com/ads/library/?q=otter.ai&ad_type=all&country=ALL
- ZoomMate: https://www.facebook.com/ads/library/?q=zoommate&ad_type=all&country=ALL

Look for: the ads that have run longest (start date on each card), video vs static, the first line of the primary text, and whether any already uses "project manager", "nobody typed", "ask it on the call" or "weekly review". If Sembly already runs a "project manager for small teams" hook, say so before Day 1: it changes what a T1 win means.

## Count table

Counted with Python `len()` on the exact strings above (straight quotes and apostrophes). Limits: primary short 125 (the whole short text sits inside Meta's visible first 125 characters), headline 40, description 30. Hooks, card text and text beats have no Meta limit; the house rule is 8 words or fewer so they read in 3 seconds. The same script checked every item for em or en dashes, digits, "bot", "AI teammate", "AI meeting agent", "joins only", "copilot", "translat", "invisible", ClickUp, Jira, Monday.com, CRM brand names and the banned filler list: 0 hits.

| ID | Text | Chars | Limit | OK |
|---|---|---|---|---|
| ALL-D | Free trial. We set it up. | 25 | 30 | yes |
| T1-P1 | No project manager yet? Octo joins your calls, tracks who owes what and sends each person their own tasks by DM. | 112 | 125 | yes |
| T1-P2 | Small team, no PM, and you're the one chasing follow-ups after every call? Octo does the chasing now. | 101 | 125 | yes |
| T1-P3 | A task agreed on Tuesday's call is still nobody's on Friday. With Octo it has an owner, a deadline and a DM. | 108 | 125 | yes |
| T1-H1 | The PM your team doesn't have yet | 33 | 40 | yes |
| T1-H2 | No PM? Your calls have one now. | 31 | 40 | yes |
| T1-H3 | Stop being the one who follows up | 33 | 40 | yes |
| T2-P1 | Nobody on this call typed a word. After it, Notion, Asana and your CRM were already up to date. Just talk. | 106 | 125 | yes |
| T2-P2 | Note-takers record the meeting. Octo takes part in it, then updates your tracker, CRM and Notion after the call. | 112 | 125 | yes |
| T2-P3 | Stop typing up notes after calls. Just talk: Octo puts the tasks in Notion, Asana or Trello and updates your CRM. | 113 | 125 | yes |
| T2-H1 | Just talk. The rest updates itself. | 35 | 40 | yes |
| T2-H2 | Nobody typed. Notion is up to date. | 35 | 40 | yes |
| T2-H3 | Note-takers record. Octo takes part. | 36 | 40 | yes |
| T3-P1 | "Octo, where are we on the launch?" It answers on the call and shows who owes what on its own tile. | 99 | 125 | yes |
| T3-P2 | No more "let me check and get back to you". Call Octo by name and the status shows up on its tile, on the call. | 111 | 125 | yes |
| T3-P3 | Ask Octo by name on Meet, Zoom or Teams. It answers from your knowledge base and CRM, right there on the call. | 110 | 125 | yes |
| T3-H1 | Ask it on the call. See it on its tile. | 39 | 40 | yes |
| T3-H2 | Where are we on the launch? Ask Octo. | 37 | 40 | yes |
| T3-H3 | Decide on the call, not after it | 32 | 40 | yes |
| T4-P1 | Once a week, Octo reads out who owes what, by voice, on your call. Say "done" on a later call and the task updates. | 115 | 125 | yes |
| T4-P2 | The same status questions every week? Octo runs the weekly task review by voice, so you don't have to. | 102 | 125 | yes |
| T4-P3 | Founder running the weekly check-in alone? Octo reads out the open tasks and who owns each one. You just talk. | 110 | 125 | yes |
| T4-H1 | Who owes what, read out every week | 34 | 40 | yes |
| T4-H2 | Your weekly task review, by voice | 33 | 40 | yes |
| T4-H3 | Say "done" on a call. The task updates. | 39 | 40 | yes |
| R1-P1 | Still the one chasing follow-ups after calls? Start a free trial and our team sets Octo up on your calls. | 105 | 125 | yes |
| R1-P2 | We run our own team's calls on Octo every day. Start a free trial and our team sets it up on yours. | 99 | 125 | yes |
| R1-P3 | Tell us your tracker, your CRM and where you call. Our team sets Octo up for your free trial. Then you just talk. | 113 | 125 | yes |
| R1-H1 | Still chasing follow-ups after calls? | 37 | 40 | yes |
| R1-H2 | Free trial, set up on your own calls | 36 | 40 | yes |
| R1-H3 | We set it up. You just talk. | 28 | 40 | yes |
| R2-P1 | You choose which calls Octo joins. Pick the calendar events, and everyone on those calls can see it's there. | 108 | 125 | yes |
| R2-P2 | Not every meeting needs Octo. You choose which calls it joins. On those, everyone gets their own tasks after. | 109 | 125 | yes |
| R2-P3 | You choose which calls Octo joins. On those, call it by name, and after, everyone gets their own tasks by DM. | 109 | 125 | yes |
| R2-H1 | You choose which calls it joins | 31 | 40 | yes |
| R2-H2 | Pick the calls. Octo does the follow-up. | 40 | 40 | yes |
| R2-H3 | Not every meeting. The ones you pick. | 37 | 40 | yes |

| ID | Text | Words | House limit | OK |
|---|---|---|---|---|
| T1-HOOK | No project manager? Your calls have one now. | 8 | 8 | yes |
| T2-HOOK | Nobody on this call typed a word. | 7 | 8 | yes |
| T3-HOOK | Octo, where are we on the launch? | 7 | 8 | yes |
| T4-HOOK | Every week, Octo reads out who owes what. | 8 | 8 | yes |
| R1-HOOK | Still chasing follow-ups after calls? | 5 | 8 | yes |
| T1-CARD | The project manager your team doesn't have yet. | 8 | 8 | yes |
| T2-CARD | Nobody typed. Notion is up to date. | 7 | 8 | yes |
| T3-CARD | "Octo, where are we on the launch?" | 7 | 8 | yes |
| T4-CARD | Who owes what, read out every week. | 7 | 8 | yes |
| R1-CARD | Still chasing follow-ups after calls? | 5 | 8 | yes |
| R2-CARD | You choose which calls it joins. | 6 | 8 | yes |
| T2-TEXTBEAT | Notion. Asana. Your CRM. Updated. | 5 | 8 | yes |
| T4-TEXTBEAT | Say "done" next week. The task updates. | 7 | 8 | yes |

Video lengths, summed by code: T1 15.0 s, T2 15.0 s, T3 15.0 s, T4 15.0 s.

## Self-check (agent quality bar)

| Check | Result |
|---|---|
| Primary short inside 125, headlines 40 or fewer, description 30 or fewer, by code | Pass (table above) |
| Themes are different arguments and each stands alone | Pass: T1 who chases (founder pain), T2 what didn't happen (nobody typed), T3 status on the spot, T4 the weekly review |
| Every claim traces to the brief's "can" column or Proof; no testimonials, countdowns, scarcity, numbers | Pass. The people in the demo are made up and never presented as customers |
| Brief hard rules: no "joins only when invited", no CRM brand names, trackers in copy only Notion, Asana, Trello, no sales copilot, translation or numbers, no "bot", "AI teammate", "AI meeting agent" in headlines, no em dashes | Pass (script scan, 0 hits) |
| Safe zones and aspect ratio named for every creative | Pass: 9:16 and 4:5 specs, top 270 px, bottom 384 px, right 120 px clear |
| Video hook reads silently in 3 seconds | Pass: hooks 5 to 8 words, on screen 0 to 2.4 or 2.8 s |
| CTA button matches the one goal | Pass: Sign Up, copy and end card say "Start free trial" |
| Wording echoes the landing hero | Pass: promise and angle are the hero and eyebrow in `landing-changes-v1.md` |
| Open items (team, not copy) | Oleksii's OK on the video; pixel and form live; countries; "quiet until called" left out until confirmed; "Monday" left out until confirmed |
