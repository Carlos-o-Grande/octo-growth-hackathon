# Social Posts: Octo early access

2026-11-08. Written by copy-studio for Oleksii Nikitin (founder, Octocrew) to publish in first person. Built from `brief/campaign-brief.md`, `outputs/positioning/campaign-plan.md`, `outputs/research/voice-of-customer.md` and `outputs/research/competitor-teardown.md`. Scope set by the team: the 5 organic LinkedIn rows of the 7-day calendar, plus Instagram captions for the launch and the carousel. No X or TikTok (not in the channel mix). No emojis.

## Message house used

- **Promise:** Just talk. Octo keeps your tracker, CRM and Notion up to date.
- **CTA:** Start free trial, pointing to the landing page (v0 base until the Grona URL exists). The trial is set up by the Octocrew team on the trial team's calls, so every CTA says so. Never "sign up now", never self-serve.
- **Pillar 1, Nobody types:** you talk; tasks land in Notion, Asana or Trello, the CRM and Notion update, each person gets only their own tasks by DM with the exact quote, and a task updates when someone says "done" on a later call.
- **Pillar 2, Decide on the call:** ask Octo by name, it answers by voice and on its tile from your tracker, CRM and knowledge base, and books the follow-up after a spoken "yes".
- **Pillar 3, Quiet until you call it, on every platform:** you choose which calls it joins; it stays silent until someone says "Octo"; Meet, Teams, Zoom, Slack Huddles, Webex and GoTo.

**Voice-of-customer quotes used (all verbatim, from `voice-of-customer.md`):**

| Quote | Source | Used in |
|---|---|---|
| "Note takers are invaluable, human or not." | @calvinmorrison, HN, https://news.ycombinator.com/item?id=48823178 | LI-1 |
| "action items from previous meetings are 'lost'" | @dragontamer, HN, https://news.ycombinator.com/item?id=23770752 | LI-2 |
| "like the one built into Teams" / "lack the context necessary to properly interpret what's being said" | @alkonaut, HN, https://news.ycombinator.com/item?id=43025238 | LI-3 |
| "no crossed wires" (from "ensuring there are no crossed wires or misunderstanding") | Fireflies review, Trustpilot, 3 Nov 2026, https://www.trustpilot.com/review/fireflies.ai | LI-4 |
| "every meeting we have I have to kick several of these AI notetakers from our meetings" | durinien, Zoom Community, 12 Jun 2025, https://community.zoom.com/meetings-2/how-do-i-disable-ai-notetakers-otter-ai-read-ai-fireflies-ai-etc-from-joining-our-meetings-17388 | LI-5 |

Not used on purpose: the 4 Reddit snippets ("dies in the doc", "never both" and the rest), because nobody has read the full threads. Not used: the VoC suggestion to say Octo "joins only when invited", which is false (it auto-joins the calendar events the team chooses).

## LinkedIn

All five are organic posts from Oleksii's profile. CTA is the last line. The link can move to the first comment if the team prefers (LinkedIn tends to show posts with outbound links to fewer people); then the last line becomes "Start free trial: link in the first comment."

### LI-1. Launch founder post

- **Hook type:** story
- **Calendar day:** 1 (li-org-launch)
- **Pillar:** 1, Nobody types
- **Visual:** the 16:9 demo, `assets/octo-demo-36s-16x9.mp4` (repo root), native upload. Oleksii must OK posting it on social first (`assets/README.md`). Fallback if he says no: `assets/screenshots/octo-tile-captured.png` as a single image.

```text
At Octocrew, nobody types after a call anymore.

We talk. When the call ends, the task is in the tracker, the CRM record is updated and our Notion is up to date.

Every call used to end with "so who's doing what?" One person took notes and stopped taking part. Agreements slipped. The tracker was stale the day after.

Someone on Hacker News wrote: "Note takers are invaluable, human or not." Agreed. But a note-taker records the meeting. We wanted one that takes part in it.

So we built Octo. You talk to it by name, it answers by voice and on its own tile. After the call, each person gets only their own tasks by DM, with the exact quote. Tasks land in Notion, Asana or Trello, and update when someone says "done" on a later call.

36-second demo below. The people in it are made up. The agent is real.

Just talk. Octo keeps your tracker, CRM and Notion up to date.

Start free trial. Our team sets Octo up on your calls: https://octocrew-hq.github.io/octo-landing/?utm_source=linkedin&utm_medium=social&utm_campaign=octo-early-access&utm_content=li-org-launch

#AgencyOps #RemoteTeams #ProjectManagement
```

### LI-2. Carousel post

- **Hook type:** number
- **Calendar day:** 3 (li-org-carousel)
- **Pillar:** 1, Nobody types
- **Visual:** 8-slide PDF document carousel, slides described below under "Carousel slides".
- **Change from the plan:** the plan's title was "What updates in the 10 seconds after 'bye'". No proof backs a 10-second figure for after-call updates (the demo times are on-call: about 9 s for tasks on the tile, about 3 s for a recap), so the title drops the number of seconds and counts the updates instead.

```text
3 things update after we say "bye" on a call. Nobody on the call typed any of them.

The carousel walks through it, slide by slide.

Before Octo, our follow-up looked like most teams': one person typing instead of talking, a recap in a doc, tasks that slipped. One Hacker News comment nailed it: "action items from previous meetings are 'lost'."

Now, when the call ends:
1. The task lands in Notion, Asana or Trello, with an owner and a deadline.
2. The record in our CRM is updated.
3. Our Notion is updated with what was decided.

And each person gets only their own tasks by DM, with the exact quote they came from.

Creating tasks from a call isn't new. The part we care about is the next call: when someone says "done", Octo updates the task in the tracker. Nobody opens it to tick the box.

Just talk. Octo keeps your tracker, CRM and Notion up to date.

Start free trial, set up by our team on your calls: https://octocrew-hq.github.io/octo-landing/?utm_source=linkedin&utm_medium=social&utm_campaign=octo-early-access&utm_content=li-org-carousel

#AgencyOps #ProjectManagement #Notion
```

### LI-3. "Why not just use Gemini?"

- **Hook type:** question
- **Calendar day:** 4 (li-org-gemini)
- **Pillar:** 3, every platform (with pillar 1 support)
- **Visual:** single image, 1200x1200: `outputs/creative/octo-poses/15-on-call-tile.png` centered on the deep purple used in the tile screenshots, with the six platform names set as plain text in two rows below it: "Meet · Teams · Zoom" / "Slack Huddles · Webex · GoTo". Text only, no platform logos.

```text
"Why not just use Gemini in Meet?"

Fair question. Here's my honest answer.

If your team and every client live in Google Meet, Gemini's "Take notes for me" is a fine start. The notes go into a Doc.

Agencies rarely get to pick the platform. The client does. One client is on Teams, another on Zoom, and your own standup is a Slack Huddle.

Octo is one agent on six platforms: Meet, Teams, Zoom, Slack Huddles, Webex and GoTo. And it doesn't stop at a Doc. It writes into your tracker (Notion, Asana or Trello) and your CRM.

A Hacker News comment about built-in summaries, "like the one built into Teams", said they "lack the context necessary to properly interpret what's being said." Octo answers from your tracker, CRM and knowledge base. Ask "Octo, what's still open for this client?" and the list shows on its tile.

Just talk. Octo keeps your tracker, CRM and Notion up to date.

Start free trial, set up by our team on your calls: https://octocrew-hq.github.io/octo-landing/?utm_source=linkedin&utm_medium=social&utm_campaign=octo-early-access&utm_content=li-org-gemini

#AgencyOps #RemoteTeams #GoogleMeet
```

### LI-4. Decide on the call

- **Hook type:** pain
- **Calendar day:** 5 (li-org-decide)
- **Pillar:** 2, Decide on the call
- **Visual:** `assets/screenshots/octo-tile-status.png` (repo root) as a single 16:9 image: the Meet grid with Octo's tile showing "Landing page launch: Design done, Layout done, Copy, Anna, since Tuesday". If Oleksii OKs the demo video for social, use a 15-second clip of the launch-status moment from `assets/octo-demo-36s-16x9.mp4` instead, with the waits cut.

```text
"Let me check and get back to you." On a call, that line often means the decision moves to next week.

That's how it went on ours. Someone asks where the launch stands. Nobody knows without opening the tracker. So we park it.

Now we ask on the call: "Octo, where are we on the launch?" In our demo (Anna is made up), it answers by voice and puts the status on its tile: design done, layout done, copy stuck with Anna since Tuesday.

So we decide right there: who unblocks the copy, and by when. Octo books the follow-up in the calendar after a spoken "yes". Anna gets her task by DM, with the exact quote. No crossed wires later about who agreed to what.

Faster decisions, because everything is already integrated and nobody leaves the call to go find it.

Just talk. Octo keeps your tracker, CRM and Notion up to date.

Start free trial, set up by our team on your calls: https://octocrew-hq.github.io/octo-landing/?utm_source=linkedin&utm_medium=social&utm_campaign=octo-early-access&utm_content=li-org-decide

#AgencyOps #ProjectManagement #RemoteTeams
```

### LI-5. Quiet until you call it

- **Hook type:** contrarian
- **Calendar day:** 6 (li-org-quiet)
- **Pillar:** 3, Quiet until you call it
- **Visual:** single image, 1200x1200: `outputs/creative/octo-poses/04-blink-calm.png` (eyes closed, calm) on a light background, one line of text above it: "Quiet until you call it." Optional second frame (as a 2-image post): `09-listening.png` with the line "Then: 'Octo, ...'".
- **Confirm before posting:** `product/live-demo.md` says the presenter mutes between lines "because Octo answers everything it hears", while the founder says it "sits there in silence" and speaks only when called. Oleksii should confirm the wake-word behavior on real calls before this post goes out.

```text
Hot take: the best AI on a call is the quiet one. Ours says nothing until you say its name.

An admin in a Zoom Community thread wrote: "every meeting we have I have to kick several of these AI notetakers from our meetings." Fair. Nobody wants a stranger in the room.

So here is exactly how Octo behaves, no spin:
- You choose which calls it joins. It joins those calendar events on its own, so nobody has to invite it each time.
- It's a named participant with its own tile. Everyone on the call can see it.
- It sits in silence. It speaks only when someone says "Octo".
- After the call, each person gets only their own tasks.

Quiet on the call, busy after it: tasks in Notion, Asana or Trello, your CRM updated.

Just talk. Octo keeps your tracker, CRM and Notion up to date.

Start free trial. We set it up with you, including which calls it joins: https://octocrew-hq.github.io/octo-landing/?utm_source=linkedin&utm_medium=social&utm_campaign=octo-early-access&utm_content=li-org-quiet

#AgencyOps #RemoteTeams #MeetingCulture
```

## Carousel slides (LI-2, reused for IG-2)

Format: 1080x1350 (4:5), exported as PDF for LinkedIn and as 8 PNGs for Instagram. No `outputs/creative/art-direction.md` exists yet, so the look follows the existing screenshots: deep purple background, the dark Octo tile with a lime outline, lime as the only accent, white sans-serif text, one idea per slide, large type. Pose files are transparent 1200x1200 PNGs in `outputs/creative/octo-poses/`; screenshots are in `assets/screenshots/` at the repo root.

| # | Headline (big) | Small line | Visual |
|---|---|---|---|
| 1 | 3 things update after "bye". | Nobody on the call typed any of them. | `15-on-call-tile.png` large, lower half, centered. "Swipe" with a small arrow, bottom right. |
| 2 | Before: one person types instead of talking. | The recap goes in a doc. The tracker is stale the day after. | `11-thinking.png`, bottom left, thought dots pointing at the headline. |
| 3 | During: just talk. | Ask "Octo, where are we on the launch?" It answers by voice and on its tile. | `octo-tile-status.png` cropped to Octo's tile (top-left quarter of the frame: "Landing page launch" with the three rows), with `small/10-talking.png` overlapping its top-right corner. Tiny caption: "Demo. Names are made up." |
| 4 | After "bye", 1: the task lands in your tracker. | Notion, Asana or Trello. Owner and deadline included. | `octo-tile-captured.png` cropped to Octo's tile, showing the "updated in tracker" lime pill and the "Landing page copy, Anna, by Friday" card, plus `13-task-card.png` small, bottom right. |
| 5 | 2: your CRM record is updated. | Said on the call, saved in your CRM. | `12-task-done.png` centered, large. Text only, no CRM logo. |
| 6 | 3: your Notion is updated. | With what was decided, not a transcript to read. | `02-happy.png` centered, with a plain white card shape beside it labelled "Notion" in the slide's own font (no logo). |
| 7 | Everyone gets only their own tasks. | By DM, with the exact quote. When someone says "done" on the next call, the task updates. | `09-listening.png` left, sound waves toward a lime check mark drawn as a simple circle, right. |
| 8 | Just talk. Octo keeps your tracker, CRM and Notion up to date. | Lime pill button: "Start free trial". Under it: "Set up by our team on your calls. You choose which calls it joins. Quiet until you call it." Footer: "Meet · Teams · Zoom · Slack Huddles · Webex · GoTo". On Instagram add "Link in bio". | `16-bounce.png`, top right, small. |

## Instagram

Links in captions are not clickable on Instagram, so the CTA points to the bio. Bio link for the week:
- Day 1: https://octocrew-hq.github.io/octo-landing/?utm_source=instagram&utm_medium=social&utm_campaign=octo-early-access&utm_content=ig-org-launch
- Day 3: https://octocrew-hq.github.io/octo-landing/?utm_source=instagram&utm_medium=social&utm_campaign=octo-early-access&utm_content=ig-org-carousel

`ig-org-launch` and `ig-org-carousel` are new utm_content ids following the plan's convention; the calendar has no Instagram organic rows yet.

### IG-1. Launch

- **Hook type:** story
- **Calendar day:** 1 (ig-org-launch)
- **Pillar:** 1, Nobody types
- **[Visual:** Reel from `assets/octo-demo-36s-9x16.mp4`, cut to about 15 seconds with the waits removed (the tasks appearing on Octo's tile, then the "updated in tracker" moment). Cover frame: `15-on-call-tile.png` centered on deep purple with the words "Nobody typed." in white above it. Needs Oleksii's OK to post the demo. Fallback: a single 4:5 image of `assets/screenshots/octo-tile-captured.png` cropped around Octo's tile.**]**

```text
Nobody on our team types after a call anymore. We talk, and our tracker, CRM and Notion are updated when the call ends.

Every call used to end with "so who's doing what?" Now we ask Octo.

It joins our calls as a participant. Say "Octo" and it answers by voice and on its own tile. After "bye", each person gets their own tasks by DM with the exact quote, and the tasks land in Notion, Asana or Trello.

Meet, Teams, Zoom, Slack Huddles, Webex, GoTo. You choose which calls it joins. Quiet until you call it.

Just talk. Octo keeps your tracker, CRM and Notion up to date.

Start free trial: link in bio. Our team sets Octo up on your calls.

#agencyowner #remoteteam #projectmanagement #agencylife
```

### IG-2. Carousel

- **Hook type:** number
- **Calendar day:** 3 (ig-org-carousel)
- **Pillar:** 1, Nobody types
- **[Visual:** the 8 carousel slides above as 1080x1350 PNGs, with "Link in bio" on slide 8.**]**

```text
3 things update after "bye". Nobody on the call typed any of them. Swipe to see what lands where.

1. The task, in Notion, Asana or Trello, with an owner and a deadline.
2. The record in your CRM.
3. Your Notion, with what was decided.

Plus each person gets only their own tasks by DM, with the exact quote. And when someone says "done" on the next call, the task updates.

Built by Octocrew. It runs on our own calls every day.

Just talk. Octo keeps your tracker, CRM and Notion up to date.

Start free trial: link in bio. Our team sets it up on your calls.

#agencyowner #projectmanagement #notion #asana #remotework
```

## Count table

Counted with Python (`len()` on each post exactly as written above, URL at full length). Hook chars = the first paragraph; fold = characters shown before "see more" (LinkedIn about 210, less on mobile) or truncation (Instagram 125). Words counted with the URL as one word.

| Post | Platform | Hook chars (1st paragraph) | Fold | Total chars | Hard limit | Words | Hashtags | Inside limit |
|---|---|---|---|---|---|---|---|---|
| LI-1 | LinkedIn | 47 | 210 | 1109 | 3000 | 183 | 3 | yes |
| LI-2 | LinkedIn | 83 | 210 | 1093 | 3000 | 178 | 3 | yes |
| LI-3 | LinkedIn | 34 | 210 | 1114 | 3000 | 178 | 3 | yes |
| LI-4 | LinkedIn | 101 | 210 | 1057 | 3000 | 172 | 3 | yes |
| LI-5 | LinkedIn | 91 | 210 | 1033 | 3000 | 166 | 3 | yes |
| IG-1 | Instagram | 119 | 125 | 699 | 2200 | 128 | 4 | yes |
| IG-2 | Instagram | 97 | 125 | 620 | 2200 | 114 | 5 | yes |

All LinkedIn posts sit in the 80 to 200 word range with 3 hashtags; both Instagram captions carry 4 to 5 niche hashtags on the last line. No em or en dashes anywhere in the file (checked with code).

## Spare hooks

| # | Type | Hook |
|---|---|---|
| 1 | contrarian | Your tracker isn't stale because your team is lazy. It's stale because plans change out loud. |
| 2 | contrarian | Don't take better notes after calls. Stop taking them. |
| 3 | number | 1 call. 3 updates. 0 people typing. |
| 4 | number | Six call platforms. One agent. The same tracker at the end of every call. |
| 5 | story | We used to end every call with "so who's doing what?" Now we end it with "bye". |
| 6 | story | I asked our tracker a question out loud on a call. The answer showed up on screen. |
| 7 | question | Did anyone write down what the client said on Tuesday's call? |
| 8 | question | Who updates your tracker when the plan changes out loud? |
| 9 | pain | Every call ends with "so who's doing what?" |
| 10 | pain | The person taking notes is the one person not really in the meeting. |

## Rejected drafts

- LI-1, pain hook "Every call used to end with 'so who's doing what?'": every team in the category says it; the story hook ("nobody types") carries the promise inside the first 210 characters. Kept as the third paragraph.
- LI-2, story hook "Here's what happened after our last call ended": a throat-clear that pushes the payoff past the fold; the number hook names the outcome in line 1.
- LI-3, contrarian hook "Gemini is not your competition. Your client's platform is.": reads as a jab at Google and needs the body to make sense; the question is the one buyers already ask (plan Day 4 row).
- LI-4, question hook "How many decisions wait for 'let me check'?": adjacent to Day 4's question hook, and invites a number we do not have.
- LI-5, story hook "It sits in silence until you say its name.": the plan's line, but it reads as a feature; the contrarian take earns the comment section and answers the bot-fatigue objection head on.
- IG-1, question hook "Who wrote down what the client said?": weaker than showing the outcome in the 125 characters before truncation.
- IG-2, pain hook "Your recap is in a doc nobody opens.": leans on the unverified Reddit idea ("dies in the doc"); the number hook mirrors slide 1.

## Notes for the team

- **Hook-type spread:** LinkedIn uses 5 types across 5 posts, no two adjacent days share one. Instagram has only 2 posts in scope (story, number), so the "3 types per platform" rule cannot be met there; add a third IG post (for example Day 6 quiet, contrarian) if you want it.
- **Demo video:** LI-1, LI-4 and IG-1 prefer the demo. `assets/README.md` asks for Oleksii's OK before posting it on social. Each post has a screenshot fallback.
- **Quiet behavior:** confirm with Oleksii before LI-5 (see the note on that post).
- **What was kept out:** no CRM brand names, no trackers beyond Notion, Asana and Trello, no numbers beyond the six platforms, no sales copilot, no "joins only when invited", no "bot" or "AI teammate" in any hook.
