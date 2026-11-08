# Google Ads: Octo search campaign (task and CRM intent)

2026-11-08, v1, by google-ads. Built from `brief/campaign-brief.md`, `outputs/positioning/campaign-plan.md` (message house, Google row of the Targeting table, Google Search line of the budget, UTM convention), `outputs/research/market-landscape.md` (Google verdict: task intent over "Otter alternative"), `outputs/research/competitor-teardown.md` (claims not to copy) and `outputs/research/voice-of-customer.md` (buyers say "bot" and "notes", not "AI teammate"). The v0 landing page was fetched on 2026-11-08 (HTTP 200) for sitelink anchors and wording. One campaign, three ad groups, one RSA each. Status: ready to paste into Google Ads Editor once the landing CTA is fixed (see Message match).

## Campaign settings

| Setting | Value |
|---|---|
| Campaign name | Octo \| Search \| Task and CRM intent |
| Goal | Leads: "Start free trial" (team-set-up trial, not self-serve) |
| Conversion action | Interim on v0: click on the "Get early access" mailto link, tracked as a GTM link-click event `start_trial_click` (the v0 page has no form). On the Grona page: form submit, counted once per click. Primary conversion = the form submit as soon as it exists |
| Network | Google Search only. Search partners off. Display Network off |
| Geo | EU-27 + United Kingdom, "Presence: people in or regularly in your included locations". Match the country list the team picks for LinkedIn (brief: countries [TO ADD]); the EU + UK default is [ASSUMED] |
| Language | English |
| Ad schedule | Monday to Friday, 08:00 to 19:00 account time (Lisbon). Weekend off: the buyer searches for work tools on work days [ASSUMED] |
| Flight | 7 days, with an end date (plan calendar: Google starts Day 2) |
| Budget | €150 total: €21 per day for 7 days (€147), end date set. If the account offers a campaign total budget, set €150 there instead |
| Bidding | Maximize Clicks with a max CPC cap of €6 for the whole flight (see Budget and bidding) |
| Off | AI Max for Search, broad match, automatically created assets, auto-applied recommendations. Reason: auto-created text could write claims we must not make ("instant", invite-only joining, CRM brand names) |
| Final URL | https://octocrew-hq.github.io/octo-landing/?utm_source=google&utm_medium=cpc&utm_campaign=octo-early-access&utm_content=g-rsa-intent |
| Final URL suffix (optional) | `utm_term={keyword}`: reads which keyword brought each trial request, keeps the plan's convention for the other four tags |

Swap the base URL for the Grona page when it is live; keep the same UTMs.

## Message match

**Anchored on the message house; the Grona page is not built yet.** The live v0 page is the interim landing.

| Source | Text | Where it appears in the ads |
|---|---|---|
| Message house promise | "Just talk. Octo keeps your tracker, CRM and Notion up to date." | Description 1 of every RSA, verbatim; headlines "Just Talk. The Tracker Updates", "Just Talk. Your CRM Updates.", "Just Talk. The Rest Updates.", "Your Tracker, CRM and Notion" |
| Plan tagline | "Just talk. The rest updates itself." | "Just Talk. The Rest Updates." |
| CTA (plan, verbatim) | "Start free trial" | 2 headlines per RSA ("Start Free Trial", "Start Free Trial: We Set It Up"), Description 1, sitelink 4 |
| v0 hero hook | "Every call ends with 'so who's doing what?'" | "So Who's Doing What? Sorted." |
| v0 supporting line | "Note-takers record the meeting. Octo takes part in it" | action-items D2 verbatim, "Octo Takes Part in the Call" |
| v0 closing | "Let your next call end with a plan, not a question" | "Every Call Ends With a Plan" |

**Mismatch to fix before launch:** the v0 page's button says "Get early access" and opens an email, while every ad says "Start free trial". Either change the v0 button text to "Start free trial" or wait for the Grona page. Running the ads against "Get early access" breaks message match and costs Quality Score.

## Ad groups

Keyword volumes: **unknown [ASSUMED]**. No free source gives volumes (Keyword Planner needs an account; Ahrefs is paid). Free evidence used instead: Google autocomplete (suggestqueries.google.com, `hl=en`, `gl=gb`, 2026-11-08). It returned **no suggestions** for "meeting notes to crm", "update crm from meetings", "ai meeting assistant that creates", "ai note taker crm" and "meeting notes to trello", which points to low volume. It did return "meeting notes to action items", "tracking action items from meetings", "action items from last meeting", and Notion and action-item queries crowded with "template", "examples" and "how to take notes", which drive the negatives. Ranked by intent, not volume. Phrase and exact only: a new account has no conversion data for broad match.

Why three groups on €150: each group alone may not spend because these long-tail terms look thin; three intents give the campaign enough eligible searches to spend, and the search-terms report tells which intent exists at all. Competitor names are not bid on (team decision; "Otter alternative" searchers are individuals comparing free note-takers, `market-landscape.md`).

**tracker-tasks**: Solution, tool-specific: wants meeting notes to become tasks in the tracker they already use.

| Keyword | Match | Status | Source |
|---|---|---|---|
| "meeting notes to asana" | Phrase | Enabled | plan term |
| [meeting notes to asana] | Exact | Enabled | plan term |
| "meeting notes to notion" | Phrase | Enabled | plan term |
| [meeting notes to notion] | Exact | Enabled | plan term |
| "meeting notes to trello" | Phrase | Enabled | close variant |
| "meeting notes to tasks" | Phrase | Enabled | close variant |
| "meeting notes to action items" | Phrase | Enabled | autocomplete: 'meeting notes to action items' |
| "turn meeting notes into tasks" | Phrase | Enabled | close variant |
| "create asana tasks from meetings" | Phrase | Enabled | close variant |
| "ai meeting notes to asana" | Phrase | Enabled | close variant |

**crm-update**: Solution, CRM hygiene: wants the CRM updated from calls without typing.

| Keyword | Match | Status | Source |
|---|---|---|---|
| "update crm from meetings" | Phrase | Enabled | plan term |
| [update crm from meetings] | Exact | Enabled | plan term |
| "meeting notes to crm" | Phrase | Enabled | plan term |
| [meeting notes to crm] | Exact | Enabled | plan term |
| "update crm after calls" | Phrase | Enabled | close variant |
| "automatically update crm from calls" | Phrase | Enabled | close variant |
| "ai note taker crm" | Phrase | Enabled | close variant |
| "ai meeting assistant crm" | Phrase | Enabled | close variant |
| "meeting notes to hubspot" | Phrase | Paused | CRM brand as keyword only; enable after Oleksii confirms the CRM list |
| "meeting notes to pipedrive" | Phrase | Paused | CRM brand as keyword only; enable after Oleksii confirms the CRM list |

**action-items**: Problem: action items get lost after calls; looking for a tool that assigns and tracks them.

| Keyword | Match | Status | Source |
|---|---|---|---|
| "ai meeting assistant that creates tasks" | Phrase | Enabled | plan term |
| [ai meeting assistant that creates tasks] | Exact | Enabled | plan term |
| "tracking action items from meetings" | Phrase | Enabled | autocomplete: 'tracking action items from meetings' |
| "action items from meetings" | Phrase | Enabled | autocomplete; informational-heavy, watch search terms |
| "action items from last meeting" | Phrase | Enabled | autocomplete: 'action items from last meeting' |
| "ai note taker that creates tasks" | Phrase | Enabled | close variant |
| "assign action items after meetings" | Phrase | Enabled | close variant |
| "meeting follow up tasks" | Phrase | Enabled | close variant |
| "ai meeting assistant for agencies" | Phrase | Enabled | ICP term |

## RSAs

Every headline must read well in any slot; no pins (see Pinning advice). Primary keyword in at least 3 headlines per group, the CTA verbatim in 2, proof as named mechanisms from the brief (six platforms, per-person DM with the exact quote, update on "done", quiet until called, you pick the calls). No numbers other than the count of supported platforms (Proof 2).

#### Ad group: tracker-tasks

Final URL: https://octocrew-hq.github.io/octo-landing/?utm_source=google&utm_medium=cpc&utm_campaign=octo-early-access&utm_content=g-rsa-intent  
Display path: /meeting-notes/tasks

| # | Headline | Chars |
|---|---|---|
| H1 | Meeting Notes to Asana Tasks | 28 |
| H2 | Meeting Notes Into Notion | 25 |
| H3 | Turn Meeting Notes Into Tasks | 29 |
| H4 | Just Talk. The Tracker Updates | 30 |
| H5 | Start Free Trial | 16 |
| H6 | Start Free Trial: We Set It Up | 30 |
| H7 | Tasks Update When You Say Done | 30 |
| H8 | Each Person Gets Their Tasks | 28 |
| H9 | Exact Quote With Every Task | 27 |
| H10 | Works on 6 Call Platforms | 25 |
| H11 | Trello Cards From Every Call | 28 |
| H12 | Every Call Ends With a Plan | 27 |
| H13 | Nobody Types Up the Notes | 25 |
| H14 | Quiet Until You Call It | 23 |
| H15 | You Pick Which Calls It Joins | 29 |

| # | Description | Chars |
|---|---|---|
| D1 | Just talk. Octo keeps your tracker, CRM and Notion up to date. Start free trial. | 80 |
| D2 | Octo joins your calls, then sends each person their own tasks by DM with the exact quote. | 89 |
| D3 | Say done on a later call and Octo updates the task in Notion, Asana or Trello. | 78 |
| D4 | Works on Meet, Teams, Zoom, Slack Huddles, Webex and GoTo. We set it up on your calls. | 86 |

#### Ad group: crm-update

Final URL: https://octocrew-hq.github.io/octo-landing/?utm_source=google&utm_medium=cpc&utm_campaign=octo-early-access&utm_content=g-rsa-intent  
Display path: /crm/from-calls

| # | Headline | Chars |
|---|---|---|
| H1 | Update Your CRM From Meetings | 29 |
| H2 | Meeting Notes Into Your CRM | 27 |
| H3 | CRM Updated While You Talk | 26 |
| H4 | Just Talk. Your CRM Updates. | 28 |
| H5 | Start Free Trial | 16 |
| H6 | Start Free Trial: We Set It Up | 30 |
| H7 | No More Typing Up Call Notes | 28 |
| H8 | Your Tracker, CRM and Notion | 28 |
| H9 | Ask Octo on the Call by Name | 28 |
| H10 | Answers From Your CRM on Calls | 30 |
| H11 | Works on 6 Call Platforms | 25 |
| H12 | Quiet Until You Call It | 23 |
| H13 | You Pick Which Calls It Joins | 29 |
| H14 | Decide on the Call, Not After | 29 |
| H15 | Tasks by DM, With the Quote | 27 |

| # | Description | Chars |
|---|---|---|
| D1 | Just talk. Octo keeps your tracker, CRM and Notion up to date. Start free trial. | 80 |
| D2 | Octo turns what was agreed on the call into updates in your CRM. Nobody types notes. | 84 |
| D3 | Ask Octo by name and it answers from your CRM and tracker on its own video tile. | 80 |
| D4 | For agency calls on Meet, Teams, Zoom, Webex, GoTo and Slack Huddles. We set it up. | 83 |

#### Ad group: action-items

Final URL: https://octocrew-hq.github.io/octo-landing/?utm_source=google&utm_medium=cpc&utm_campaign=octo-early-access&utm_content=g-rsa-intent  
Display path: /action-items/trial

| # | Headline | Chars |
|---|---|---|
| H1 | Action Items From Every Call | 28 |
| H2 | AI Meeting Assistant for Tasks | 30 |
| H3 | Action Items Sent to Owners | 27 |
| H4 | So Who's Doing What? Sorted. | 28 |
| H5 | Start Free Trial | 16 |
| H6 | Start Free Trial: We Set It Up | 30 |
| H7 | Octo Takes Part in the Call | 27 |
| H8 | Tasks Land in Notion or Asana | 29 |
| H9 | Meeting Action Items, Tracked | 29 |
| H10 | Exact Quote With Every Task | 27 |
| H11 | Works on 6 Call Platforms | 25 |
| H12 | Quiet Until You Call It | 23 |
| H13 | You Pick Which Calls It Joins | 29 |
| H14 | Just Talk. The Rest Updates. | 28 |
| H15 | No One Stuck Taking Notes | 25 |

| # | Description | Chars |
|---|---|---|
| D1 | Just talk. Octo keeps your tracker, CRM and Notion up to date. Start free trial. | 80 |
| D2 | Note-takers record the meeting. Octo takes part in it, then sends everyone their tasks. | 87 |
| D3 | Each owner gets their tasks by DM with the exact quote, and the tracker is updated. | 83 |
| D4 | Quiet until you call it by name. You choose which calendar events it joins. | 75 |

Draft wide, keep the best. Candidates cut, and why: any line saying Octo waits for an invite (false: it auto-joins the calendar events the team picks), "Your AI Teammate on Every Call" (Fireflies and ZoomMate own the phrase; buyers say "bot"), "Set Up in Minutes" (not self-serve, no timing proof), "Syncs With [CRM brand]" (CRM list not confirmed), "Tasks in 9 Seconds" (a demo timing, not a general claim), "The Note-Taker That Talks" (Fireflies and Otter speak too). Kept: lines that name a mechanism the buyer can picture, in the buyer's words ("notes", "tasks", "who's doing what").

## Pinning advice

Pin nothing. No compliance line needs a fixed slot: there is no legal disclaimer, and the CTA already sits in Description 1 of every RSA, so it shows whatever headlines rotate. Leave all 15 headlines unpinned so Google can test combinations; with about 27 clicks the asset report will say "Learning" or "Low" for most assets, so read combinations by impressions, not by the asset rating. If the team insists on the CTA in every impression, pin "Start Free Trial" alone to position 3 (never 1), which still leaves positions 1 and 2 free to match the query.

## Extensions

Sitelinks point at sections of the one v0 page. Google can treat URLs that differ only by `#anchor` as the same page and disapprove sitelinks as duplicates [ASSUMED]; if that happens, keep sitelinks 1 and 4 and add the rest when the Grona page has separate URLs.

| # | Title | Description 1 | Description 2 | Final URL |
|---|---|---|---|---|
| 1 | Watch the Demo | Octo answers on its own tile | Books the event after a yes | https://octocrew-hq.github.io/octo-landing/?utm_source=google&utm_medium=cpc&utm_campaign=octo-early-access&utm_content=g-rsa-intent#demo |
| 2 | How It Works | A brief before, tasks after | Quiet until you call it | https://octocrew-hq.github.io/octo-landing/?utm_source=google&utm_medium=cpc&utm_campaign=octo-early-access&utm_content=g-rsa-intent#how |
| 3 | Platforms and Trackers | Meet, Teams, Zoom, Webex, GoTo | Notion, Asana and Trello | https://octocrew-hq.github.io/octo-landing/?utm_source=google&utm_medium=cpc&utm_campaign=octo-early-access&utm_content=g-rsa-intent#faq |
| 4 | Start Free Trial | Tell us your tracker and CRM | We set Octo up on your calls | https://octocrew-hq.github.io/octo-landing/?utm_source=google&utm_medium=cpc&utm_campaign=octo-early-access&utm_content=g-rsa-intent#access |

Callouts (account or campaign level):

- Works on 6 Call Platforms
- Tasks Sent by DM
- Exact Quote on Each Task
- Speaks When You Call It
- You Pick Which Calls
- We Set It Up With You

Structured snippet: header **Service catalog** (from Google's fixed header list). Values: Tasks to Your Tracker, CRM Updates From Calls, Pre-Call Briefs, Weekly Voice Task Review. All four are on the v0 page ("Tasks land in your tracker", "Answers from your knowledge base and CRM", "A brief, ready when you join", "A weekly task review, by voice").

Not used: price assets (no public price), promotion assets (no offer), lead form assets (the trial needs tracker, CRM and platform answers the landing form collects).

## Negatives

| Negative | Match | Level |
|---|---|---|
| free | Broad | Campaign |
| transcription | Broad | Campaign |
| "otter alternative" | Phrase | Campaign |
| otter | Broad | Campaign |
| fireflies | Broad | Campaign |
| fathom | Broad | Campaign |
| jobs | Broad | Campaign |
| job | Broad | Campaign |
| careers | Broad | Campaign |
| template | Broad | Campaign |
| templates | Broad | Campaign |
| example | Broad | Campaign |
| examples | Broad | Campaign |
| "how to take notes" | Phrase | Campaign |
| github | Broad | Campaign |
| "open source" | Phrase | Campaign |
| lecture | Broad | Campaign |
| student | Broad | Campaign |
| hipaa | Broad | Campaign |
| "notion ai" | Phrase | tracker-tasks |
| "asana ai" | Phrase | tracker-tasks |
| "free crm" | Phrase | crm-update |
| "crm software" | Phrase | crm-update |
| "meeting minutes" | Phrase | action-items |
| "what are action items" | Phrase | action-items |

Total negatives: 25 (19 campaign-level, 6 ad-group level).

Why: "free", "template", "examples", "how to take notes", "github", "open source", "student", "lecture" and "hipaa" came up in autocomplete next to the seed terms and signal individuals, DIY or compliance needs we cannot meet. "transcription" is note-taker intent. "otter alternative", "otter", "fireflies", "fathom": competitor terms the team will not bid on, blocked so phrase close variants do not pull them in. "notion ai" and "asana ai" are the tools' own built-in AI features. CRM shopping terms are blocked in the CRM group. Review the search-terms report on day 2 and day 4 and add any job, homonym or template query.

## Budget and bidding

**Budget: €150 total, €21 per day for 7 days.** From the plan's Google Search line (€150, 15%).

| Scenario | CPC (€) | Clicks | Clicks/day | Conv. rate | Sign-ups | Cost per sign-up (€) |
|---|---|---|---|---|---|---|
| Plan benchmark (WordStream 2025, Business Services) | 5.58 | 26.9 | 3.8 | 5.14% | 1.4 | 109 |
| Long tail cheaper than the benchmark [ASSUMED] | 3.00 | 50.0 | 7.1 | 5.14% | 2.6 | 58 |
| Longer form, team-set-up trial converts lower [ASSUMED] | 5.58 | 26.9 | 3.8 | 3.00% | 0.8 | 186 |

Math: clicks = 150 / CPC; sign-ups = clicks x conversion rate; cost per sign-up = 150 / sign-ups. Computed with code (command below). Benchmark source: https://www.wordstream.com/blog/2025-google-ads-benchmarks, as recorded in `campaign-plan.md`. Euros at parity with dollars [ASSUMED], as in the plan.

**Bid strategy: Maximize Clicks, max CPC cap €6, for the whole flight.** The usual move to Maximize Conversions needs about 15 conversions; at benchmark rates that takes about 292 clicks, or about €1,628. This flight will produce 1 to 3 sign-ups, so Smart Bidding never gets the data. Keep the cap near the benchmark CPC: lower caps on thin long-tail terms risk no impressions at all.

**Honest read:** €150 cannot learn which ad or keyword converts. About 27 clicks over three groups is about 9 clicks per group. What it can answer: (1) do agency buyers search in task and CRM language at all (impressions and the search-terms report), (2) which of the three intents gets impressions and clicks, (3) whether 1 or 2 trial requests come in at a cost the team can compare with LinkedIn (€159 per sign-up in the plan) and Meta (€101). If after 3 days a group has under 100 impressions, move its budget to the group that spends; if the whole campaign has under 300 impressions by day 4, pause Google and give the rest to Meta retargeting.

## Count table

Every asset checked by code against its limit (headline 30, description 90, path 15, sitelink title 25, sitelink description 35, callout 25, snippet value 25). The same script searches all ad text for banned and forbidden terms (em and en dashes, "instant", "in seconds", "only when", "invite", "copilot", ClickUp, Jira, HubSpot, Salesforce, Pipedrive, monday, Zoho, Linear, the AGENTS.md filler list, "best", "#1", "sign up", "AI teammate", "bot", "free forever", "no credit card", "translate", "invisible", "guarantee") and checks one-word swaps between headlines.

Command:

```
python3 -I check.py "$PWD" table   # run in the scratchpad folder that holds assets.py and check.py
```

Output:

| Asset | Text | Chars | Limit | OK |
|---|---|---|---|---|
| tracker-tasks H1 | Meeting Notes to Asana Tasks | 28 | 30 | OK |
| tracker-tasks H2 | Meeting Notes Into Notion | 25 | 30 | OK |
| tracker-tasks H3 | Turn Meeting Notes Into Tasks | 29 | 30 | OK |
| tracker-tasks H4 | Just Talk. The Tracker Updates | 30 | 30 | OK |
| tracker-tasks H5 | Start Free Trial | 16 | 30 | OK |
| tracker-tasks H6 | Start Free Trial: We Set It Up | 30 | 30 | OK |
| tracker-tasks H7 | Tasks Update When You Say Done | 30 | 30 | OK |
| tracker-tasks H8 | Each Person Gets Their Tasks | 28 | 30 | OK |
| tracker-tasks H9 | Exact Quote With Every Task | 27 | 30 | OK |
| tracker-tasks H10 | Works on 6 Call Platforms | 25 | 30 | OK |
| tracker-tasks H11 | Trello Cards From Every Call | 28 | 30 | OK |
| tracker-tasks H12 | Every Call Ends With a Plan | 27 | 30 | OK |
| tracker-tasks H13 | Nobody Types Up the Notes | 25 | 30 | OK |
| tracker-tasks H14 | Quiet Until You Call It | 23 | 30 | OK |
| tracker-tasks H15 | You Pick Which Calls It Joins | 29 | 30 | OK |
| tracker-tasks D1 | Just talk. Octo keeps your tracker, CRM and Notion up to date. Start free trial. | 80 | 90 | OK |
| tracker-tasks D2 | Octo joins your calls, then sends each person their own tasks by DM with the exact quote. | 89 | 90 | OK |
| tracker-tasks D3 | Say done on a later call and Octo updates the task in Notion, Asana or Trello. | 78 | 90 | OK |
| tracker-tasks D4 | Works on Meet, Teams, Zoom, Slack Huddles, Webex and GoTo. We set it up on your calls. | 86 | 90 | OK |
| tracker-tasks Path1 | meeting-notes | 13 | 15 | OK |
| tracker-tasks Path2 | tasks | 5 | 15 | OK |
| crm-update H1 | Update Your CRM From Meetings | 29 | 30 | OK |
| crm-update H2 | Meeting Notes Into Your CRM | 27 | 30 | OK |
| crm-update H3 | CRM Updated While You Talk | 26 | 30 | OK |
| crm-update H4 | Just Talk. Your CRM Updates. | 28 | 30 | OK |
| crm-update H5 | Start Free Trial | 16 | 30 | OK |
| crm-update H6 | Start Free Trial: We Set It Up | 30 | 30 | OK |
| crm-update H7 | No More Typing Up Call Notes | 28 | 30 | OK |
| crm-update H8 | Your Tracker, CRM and Notion | 28 | 30 | OK |
| crm-update H9 | Ask Octo on the Call by Name | 28 | 30 | OK |
| crm-update H10 | Answers From Your CRM on Calls | 30 | 30 | OK |
| crm-update H11 | Works on 6 Call Platforms | 25 | 30 | OK |
| crm-update H12 | Quiet Until You Call It | 23 | 30 | OK |
| crm-update H13 | You Pick Which Calls It Joins | 29 | 30 | OK |
| crm-update H14 | Decide on the Call, Not After | 29 | 30 | OK |
| crm-update H15 | Tasks by DM, With the Quote | 27 | 30 | OK |
| crm-update D1 | Just talk. Octo keeps your tracker, CRM and Notion up to date. Start free trial. | 80 | 90 | OK |
| crm-update D2 | Octo turns what was agreed on the call into updates in your CRM. Nobody types notes. | 84 | 90 | OK |
| crm-update D3 | Ask Octo by name and it answers from your CRM and tracker on its own video tile. | 80 | 90 | OK |
| crm-update D4 | For agency calls on Meet, Teams, Zoom, Webex, GoTo and Slack Huddles. We set it up. | 83 | 90 | OK |
| crm-update Path1 | crm | 3 | 15 | OK |
| crm-update Path2 | from-calls | 10 | 15 | OK |
| action-items H1 | Action Items From Every Call | 28 | 30 | OK |
| action-items H2 | AI Meeting Assistant for Tasks | 30 | 30 | OK |
| action-items H3 | Action Items Sent to Owners | 27 | 30 | OK |
| action-items H4 | So Who's Doing What? Sorted. | 28 | 30 | OK |
| action-items H5 | Start Free Trial | 16 | 30 | OK |
| action-items H6 | Start Free Trial: We Set It Up | 30 | 30 | OK |
| action-items H7 | Octo Takes Part in the Call | 27 | 30 | OK |
| action-items H8 | Tasks Land in Notion or Asana | 29 | 30 | OK |
| action-items H9 | Meeting Action Items, Tracked | 29 | 30 | OK |
| action-items H10 | Exact Quote With Every Task | 27 | 30 | OK |
| action-items H11 | Works on 6 Call Platforms | 25 | 30 | OK |
| action-items H12 | Quiet Until You Call It | 23 | 30 | OK |
| action-items H13 | You Pick Which Calls It Joins | 29 | 30 | OK |
| action-items H14 | Just Talk. The Rest Updates. | 28 | 30 | OK |
| action-items H15 | No One Stuck Taking Notes | 25 | 30 | OK |
| action-items D1 | Just talk. Octo keeps your tracker, CRM and Notion up to date. Start free trial. | 80 | 90 | OK |
| action-items D2 | Note-takers record the meeting. Octo takes part in it, then sends everyone their tasks. | 87 | 90 | OK |
| action-items D3 | Each owner gets their tasks by DM with the exact quote, and the tracker is updated. | 83 | 90 | OK |
| action-items D4 | Quiet until you call it by name. You choose which calendar events it joins. | 75 | 90 | OK |
| action-items Path1 | action-items | 12 | 15 | OK |
| action-items Path2 | trial | 5 | 15 | OK |
| Sitelink 1 title | Watch the Demo | 14 | 25 | OK |
| Sitelink 1 desc1 | Octo answers on its own tile | 28 | 35 | OK |
| Sitelink 1 desc2 | Books the event after a yes | 27 | 35 | OK |
| Sitelink 2 title | How It Works | 12 | 25 | OK |
| Sitelink 2 desc1 | A brief before, tasks after | 27 | 35 | OK |
| Sitelink 2 desc2 | Quiet until you call it | 23 | 35 | OK |
| Sitelink 3 title | Platforms and Trackers | 22 | 25 | OK |
| Sitelink 3 desc1 | Meet, Teams, Zoom, Webex, GoTo | 30 | 35 | OK |
| Sitelink 3 desc2 | Notion, Asana and Trello | 24 | 35 | OK |
| Sitelink 4 title | Start Free Trial | 16 | 25 | OK |
| Sitelink 4 desc1 | Tell us your tracker and CRM | 28 | 35 | OK |
| Sitelink 4 desc2 | We set Octo up on your calls | 28 | 35 | OK |
| Callout 1 | Works on 6 Call Platforms | 25 | 25 | OK |
| Callout 2 | Tasks Sent by DM | 16 | 25 | OK |
| Callout 3 | Exact Quote on Each Task | 24 | 25 | OK |
| Callout 4 | Speaks When You Call It | 23 | 25 | OK |
| Callout 5 | You Pick Which Calls | 20 | 25 | OK |
| Callout 6 | We Set It Up With You | 21 | 25 | OK |
| Snippet value 1 | Tasks to Your Tracker | 21 | 25 | OK |
| Snippet value 2 | CRM Updates From Calls | 22 | 25 | OK |
| Snippet value 3 | Pre-Call Briefs | 15 | 25 | OK |
| Snippet value 4 | Weekly Voice Task Review | 24 | 25 | OK |

Assets checked: 85. Over limit: 0. Forbidden-term hits: 0.
tracker-tasks: headlines=15 unique=True primary "meeting notes" in 3 headlines, CTA verbatim in 2, one-word swaps=[]
crm-update: headlines=15 unique=True primary "CRM" in 6 headlines, CTA verbatim in 2, one-word swaps=[]
action-items: headlines=15 unique=True primary "action items" in 3 headlines, CTA verbatim in 2, one-word swaps=[]
Trackers named in copy: ['Notion', 'Asana', 'Trello']

## Editor CSV

RSAs (Google Ads Editor import; Final URL carries the plan's UTMs):

```csv
Campaign,Ad Group,Headline 1,Headline 2,Headline 3,Headline 4,Headline 5,Headline 6,Headline 7,Headline 8,Headline 9,Headline 10,Headline 11,Headline 12,Headline 13,Headline 14,Headline 15,Description 1,Description 2,Description 3,Description 4,Path 1,Path 2,Final URL
Octo | Search | Task and CRM intent,tracker-tasks,Meeting Notes to Asana Tasks,Meeting Notes Into Notion,Turn Meeting Notes Into Tasks,Just Talk. The Tracker Updates,Start Free Trial,Start Free Trial: We Set It Up,Tasks Update When You Say Done,Each Person Gets Their Tasks,Exact Quote With Every Task,Works on 6 Call Platforms,Trello Cards From Every Call,Every Call Ends With a Plan,Nobody Types Up the Notes,Quiet Until You Call It,You Pick Which Calls It Joins,"Just talk. Octo keeps your tracker, CRM and Notion up to date. Start free trial.","Octo joins your calls, then sends each person their own tasks by DM with the exact quote.","Say done on a later call and Octo updates the task in Notion, Asana or Trello.","Works on Meet, Teams, Zoom, Slack Huddles, Webex and GoTo. We set it up on your calls.",meeting-notes,tasks,https://octocrew-hq.github.io/octo-landing/?utm_source=google&utm_medium=cpc&utm_campaign=octo-early-access&utm_content=g-rsa-intent
Octo | Search | Task and CRM intent,crm-update,Update Your CRM From Meetings,Meeting Notes Into Your CRM,CRM Updated While You Talk,Just Talk. Your CRM Updates.,Start Free Trial,Start Free Trial: We Set It Up,No More Typing Up Call Notes,"Your Tracker, CRM and Notion",Ask Octo on the Call by Name,Answers From Your CRM on Calls,Works on 6 Call Platforms,Quiet Until You Call It,You Pick Which Calls It Joins,"Decide on the Call, Not After","Tasks by DM, With the Quote","Just talk. Octo keeps your tracker, CRM and Notion up to date. Start free trial.",Octo turns what was agreed on the call into updates in your CRM. Nobody types notes.,Ask Octo by name and it answers from your CRM and tracker on its own video tile.,"For agency calls on Meet, Teams, Zoom, Webex, GoTo and Slack Huddles. We set it up.",crm,from-calls,https://octocrew-hq.github.io/octo-landing/?utm_source=google&utm_medium=cpc&utm_campaign=octo-early-access&utm_content=g-rsa-intent
Octo | Search | Task and CRM intent,action-items,Action Items From Every Call,AI Meeting Assistant for Tasks,Action Items Sent to Owners,So Who's Doing What? Sorted.,Start Free Trial,Start Free Trial: We Set It Up,Octo Takes Part in the Call,Tasks Land in Notion or Asana,"Meeting Action Items, Tracked",Exact Quote With Every Task,Works on 6 Call Platforms,Quiet Until You Call It,You Pick Which Calls It Joins,Just Talk. The Rest Updates.,No One Stuck Taking Notes,"Just talk. Octo keeps your tracker, CRM and Notion up to date. Start free trial.","Note-takers record the meeting. Octo takes part in it, then sends everyone their tasks.","Each owner gets their tasks by DM with the exact quote, and the tracker is updated.",Quiet until you call it by name. You choose which calendar events it joins.,action-items,trial,https://octocrew-hq.github.io/octo-landing/?utm_source=google&utm_medium=cpc&utm_campaign=octo-early-access&utm_content=g-rsa-intent
```

Keywords and negatives:

```csv
Campaign,Ad Group,Keyword,Criterion Type,Status
Octo | Search | Task and CRM intent,tracker-tasks,meeting notes to asana,Phrase,Enabled
Octo | Search | Task and CRM intent,tracker-tasks,meeting notes to asana,Exact,Enabled
Octo | Search | Task and CRM intent,tracker-tasks,meeting notes to notion,Phrase,Enabled
Octo | Search | Task and CRM intent,tracker-tasks,meeting notes to notion,Exact,Enabled
Octo | Search | Task and CRM intent,tracker-tasks,meeting notes to trello,Phrase,Enabled
Octo | Search | Task and CRM intent,tracker-tasks,meeting notes to tasks,Phrase,Enabled
Octo | Search | Task and CRM intent,tracker-tasks,meeting notes to action items,Phrase,Enabled
Octo | Search | Task and CRM intent,tracker-tasks,turn meeting notes into tasks,Phrase,Enabled
Octo | Search | Task and CRM intent,tracker-tasks,create asana tasks from meetings,Phrase,Enabled
Octo | Search | Task and CRM intent,tracker-tasks,ai meeting notes to asana,Phrase,Enabled
Octo | Search | Task and CRM intent,crm-update,update crm from meetings,Phrase,Enabled
Octo | Search | Task and CRM intent,crm-update,update crm from meetings,Exact,Enabled
Octo | Search | Task and CRM intent,crm-update,meeting notes to crm,Phrase,Enabled
Octo | Search | Task and CRM intent,crm-update,meeting notes to crm,Exact,Enabled
Octo | Search | Task and CRM intent,crm-update,update crm after calls,Phrase,Enabled
Octo | Search | Task and CRM intent,crm-update,automatically update crm from calls,Phrase,Enabled
Octo | Search | Task and CRM intent,crm-update,ai note taker crm,Phrase,Enabled
Octo | Search | Task and CRM intent,crm-update,ai meeting assistant crm,Phrase,Enabled
Octo | Search | Task and CRM intent,crm-update,meeting notes to hubspot,Phrase,Paused
Octo | Search | Task and CRM intent,crm-update,meeting notes to pipedrive,Phrase,Paused
Octo | Search | Task and CRM intent,action-items,ai meeting assistant that creates tasks,Phrase,Enabled
Octo | Search | Task and CRM intent,action-items,ai meeting assistant that creates tasks,Exact,Enabled
Octo | Search | Task and CRM intent,action-items,tracking action items from meetings,Phrase,Enabled
Octo | Search | Task and CRM intent,action-items,action items from meetings,Phrase,Enabled
Octo | Search | Task and CRM intent,action-items,action items from last meeting,Phrase,Enabled
Octo | Search | Task and CRM intent,action-items,ai note taker that creates tasks,Phrase,Enabled
Octo | Search | Task and CRM intent,action-items,assign action items after meetings,Phrase,Enabled
Octo | Search | Task and CRM intent,action-items,meeting follow up tasks,Phrase,Enabled
Octo | Search | Task and CRM intent,action-items,ai meeting assistant for agencies,Phrase,Enabled
Octo | Search | Task and CRM intent,,free,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,transcription,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,otter alternative,Campaign Negative Phrase,Enabled
Octo | Search | Task and CRM intent,,otter,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,fireflies,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,fathom,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,jobs,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,job,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,careers,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,template,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,templates,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,example,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,examples,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,how to take notes,Campaign Negative Phrase,Enabled
Octo | Search | Task and CRM intent,,github,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,open source,Campaign Negative Phrase,Enabled
Octo | Search | Task and CRM intent,,lecture,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,student,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,,hipaa,Campaign Negative Broad,Enabled
Octo | Search | Task and CRM intent,tracker-tasks,notion ai,Negative Phrase,Enabled
Octo | Search | Task and CRM intent,tracker-tasks,asana ai,Negative Phrase,Enabled
Octo | Search | Task and CRM intent,crm-update,free crm,Negative Phrase,Enabled
Octo | Search | Task and CRM intent,crm-update,crm software,Negative Phrase,Enabled
Octo | Search | Task and CRM intent,action-items,meeting minutes,Negative Phrase,Enabled
Octo | Search | Task and CRM intent,action-items,what are action items,Negative Phrase,Enabled
```

## Hand-offs and open items

- **landing-page:** the Grona hero should carry the promise and a "Start free trial" button, so the ads match. Until then, change the v0 button text or hold the launch.
- **Team:** confirm countries (same as LinkedIn) and the CRM list with Oleksii; then enable the two paused CRM-brand keywords (HubSpot, Pipedrive) only for CRMs he confirms. Ad text keeps "your CRM" either way.
- **Measurement:** set up the `start_trial_click` conversion (v0) or the form-submit conversion (Grona) before the first click, or the €150 buys traffic with no answer.
- **preflight:** this file carries [ASSUMED] and [TO ADD] tags on purpose (volumes, geo, conversion rates). None of them sit in ad text.
