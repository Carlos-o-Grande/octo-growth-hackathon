# Octo: first ICP and positioning, market research v1

Gathered 8 Nov 2026 in a ~20 minute time box. Labels: **[primary]** = the publisher's own data or page, **[vendor]** = a vendor's own claim or vendor-run survey, **[3p]** = a third party restating someone else's data, **not verified** = I could not confirm the number at its source. Source numbers in brackets point to section 4.

Limits: Reddit blocks this research tool, so there are no Reddit quotes. Audience voice comes from Hacker News, vendor pages and press instead. No keyword tool was used, so search volumes and CPCs for competitor terms are **not verified**.

---

## 1. Bottom line

- **Pick ICP 1: remote agencies and studios, 10 to 50 people.** It is the only segment where all four of Octo's real differences count at once: many platforms (the client picks Zoom, Teams or Meet), a tracker the team already lives in (Asana, ClickUp, Trello, Basecamp [6]), follow-up that is billable or client-visible, and no PM on many calls. Fold ICP 3 into it: most 10 to 50 person agencies are founder-led SMBs. That gives a targetable slice of a segment that is otherwise too broad.
- **The pain is tied to money in agencies, and only loosely tied to it elsewhere.** Agency leaders say they spend "69% of their time in meetings" (the report adds "or on team management") and 52% of agencies miss a 50% billable-utilization benchmark ([4], vendor survey, 500+ agency leaders). Across all workers, 55% say "next steps at the end of a meeting are unclear" ([1], Microsoft, 31,000 people). Agencies bill hours and lose clients over communication, so a dropped follow-up costs money. Two caveats: the churn-from-communication figures that circulate (57%, 68%, 77%) have no source ([5]), and the size of the link is **not verified**.
- **ICP 2 (startup eng on Jira/Linear) is the most crowded and the least in need.** Spinach, Supernormal, Earmark, Tana and Zoom's ZoomMate already turn calls into Jira/Linear tickets [12][25][26][27][28]. Engineers in that segment are already moving status off calls ("Our EM doesn't even want status updates since that's already shown on the JIRA board" [19]). Octo would be adding a meeting participant where the trend is fewer meetings.
- **ICP 4 (note-taker switchers) is a real churn signal, but it pulls the wrong way.** Fireflies' share among companies buying a notetaker fell 34 points in a year, to 40% ([33], Ramp spend data). But switchers are fleeing bots: Otter faces a privacy class action [34], employers have banned bots [35], and Fathom and Granola now sell "bot-free" [36]. Octo is a visible bot that talks, so use this audience for SEO comparison pages later, not as the first ICP. **ICP 5 (Claude Code plugin)** is a cheap awareness hook, not a buyer: meeting MCPs from Granola, Fathom and Fireflies already exist [44].
- **Positioning gap to take:** "AI teammate" (ZoomMate [28]), "meeting agent" (Otter, Sembly [37][10]) and "follow-up" (Otter, Fathom, Fellow) are taken. None of the ~12 pages checked claims these four: being a **participant** across **every platform the client picks**, sending **each person their own tasks with the exact quote**, and **marking tasks done when someone says "done" on the next call**. Draft statement: *"For founders and ops leads at 10 to 50 person remote agencies, Octo is the teammate that joins every client and team call, on whatever platform the client picks. It answers when you call it by name. Afterwards it DMs each person their own tasks with the exact quote and a deadline, and keeps ClickUp or Asana up to date until the work is done. Note-takers record the meeting. Octo takes part in it."*

---

## 2. Candidate ICPs

### ICP 1. Remote agencies and studios, 10 to 50 people

**Pain: real and frequent?**
- "Agency leaders spend 69% of their time in meetings". "52% of agencies are struggling to hit billable utilization rate benchmarks over 50%". "just 18% always reach their billable vs. non-billable time targets". Source: Teamwork.com State of Agency Operations, 500+ agency leaders, 2023 edition [4]. **[vendor]**, since Teamwork sells agency PM software.
- General follow-up pain, not agency-specific: 55% say "next steps at the end of a meeting are unclear" and 56% say "it's hard to summarize what happens in a meeting" [1]. **[primary]** Microsoft Work Trend Index 2023, 31,000 people in 31 countries.
- Client churn figures that circulate: "57% of clients leave agencies due to poor communication" and "77% cite lack of visibility into project progress" [5]. **Not verified**: neither figure cites a source. A "Setup survey of over 300 marketing leaders" is said to rank "delivery visibility" as the #1 reason clients leave, but the survey isn't linked [5]. Treat the direction as plausible and the numbers as unusable.
- Risk specific to this ICP: client-side resistance to bots. A Bloomberg essay is titled "Please Stop Inviting AI Notetakers to Meetings" [35]. Zoom's own community has a thread on how to stop Otter, Read.ai and Fireflies from joining [46]. Octo speaks on client calls, so the first test needs to watch for this.

**Market size signals**
- US digital advertising agencies: 87,197 businesses in 2025 [7]. US advertising agencies: 105,214 in 2025 [7]. **[3p]** IBISWorld modeled estimates; the definitions overlap, and both include solo shops.
- Size mix: in 2016 Census data, 79% of advertising/PR establishments had under 10 employees and 88% had under 20 [8]. **[3p restating Census]**, and old.
- Commercial database: 8% of ~148,000 US advertising and marketing agency records fall in the 10 to 49 band, about 11,800 firms [9]. **[3p]**, method unclear.
- Rough read: about 10,000 to 15,000 US agencies in the 10 to 50 band, more if dev shops, design studios and consultancies are counted. Low confidence: two weak sources roughly agree. EU count **not verified**.
- Tool stack: a 2023 digital agency tools survey says "Asana, Google Sheets, Jira, and Basecamp are all fighting at the top, but ClickUp, Teamwork, and Trello are close behind", and "most shops will use more than one tool for project management" [6]. **[primary survey, Bureau of Digital]**, but read only from the search snippet: the PDF link returned 404 when fetched.

**Willingness to pay and current spend**
- PM tools, verified on vendor pages: ClickUp Core $9 and Business $17 per user/month billed yearly ($12 / $25 list) [14]. Asana Starter $10.99 ($13.49 monthly) and Advanced $24.99 ($30.49 monthly) [15].
- Note-takers: roughly $8 to $30 per seat (see landscape.md).
- So a 25-person agency already pays roughly $225 to $625 a month for PM and $200 to $750 a month if everyone has a note-taker. An Octo price of $300 to $500 per team per month sits within that envelope. That is my inference, **not tested**.

**How competitors position toward them**
- **Sembly**: page title "AI Meeting Agent for Professional Services"; "the AI meeting agent that runs all workflow stages from the first meeting to the last deliverable". It names "client-facing teams", "agency" users, and the Marketing & Creative and IT Outsourcing industries [10]. It is the closest direct competitor for this ICP.
- **ClearWork**: "AI-powered project management platform for agencies and client-facing teams". Its bot "joins meetings, listens for commitments and decisions, creates tickets" [11]. It replaces your PM tool rather than writing into it. No named tracker integrations found.
- **Spinach** lists "Agencies & Consultants" as a use case [12]. **Fellow** lists agencies but leads on "The secure AI meeting assistant" for regulated industries [13].
- **The gap:** Sembly and ClearWork are a note-taker with tasks and a replacement PM tool, respectively. Neither page says it works on every platform a client picks, gives each person their tasks by DM with the quote, or updates the agency's existing ClickUp or Asana when someone says "done" on the next call. Platform-native agents (ZoomMate, Teams Facilitator, Gemini) only work inside their own platform, which an agency taking client calls on three platforms can't rely on.

**Cheapest 7-day, EUR 1,000 test**
- Direct outreach costs EUR 0. Build a list of 10 to 50 person remote agencies from Clutch-style directories (they filter by team size). Send 150 to 200 personal emails or LinkedIn DMs from the founder, offering a done-for-you pilot on their next client call.
- Paid: LinkedIn Thought Leader Ads (boosting the founder's own post) average $2.29 per click versus $13.23 for single-image ads [17] **[3p]**. EUR 1,000 is roughly 400 clicks on job titles Founder, Managing Director, Head of Operations and Account Director at companies of 11 to 50 in marketing and advertising.
- Free: agency communities such as Bureau of Digital (the publisher of [6]). Each community's size is **not verified**.

### ICP 2. Startup product and engineering teams, 11 to 200, on Jira or Linear

**Pain: real and frequent?**
- The daily standup is near-universal: "used by 87% of those who employ agile methods". But "senior developers and members of large teams" were the most negative [18]. **[primary]** Academic, University of Oslo, 221 developers.
- Audience voice: "Our EM doesn't even want status updates since that's already shown on the JIRA board. 'No blockers' is a fine verbal contribution to standup." [19] (Hacker News, 2024). This segment's fix for status meetings is async updates and the tracker, not another meeting participant.
- Unnecessary meetings: 2.8 hours a week for knowledge workers, 3.6 for senior leaders [2]. **[vendor]**, Asana Anatomy of Work 2023.

**Market size signals**
- Jira: 250,000 to 300,000+ customer organizations, depending on definition [20]. **[3p]**
- Linear: "over 15,000 customers" [21]. **[3p]**, restating a Linear claim. Linear added 1,351 new companies in Feb to Apr 2026, against 1,524 for Jira [20]. **[3p]**, Bloomberry sign-up tracking.
- Developer use: 57.5% of developers used Jira in Stack Overflow's 2024 survey [22]. **[3p, restating Stack Overflow]** "JIRA and Linear, the pair account for close to 75% of tooling usage" (Pragmatic Engineer 2025 survey) [23]. In Lenny's survey, 68% use Jira and over 10% use Linear [24]. **[primary surveys, self-selected audiences]**
- This is the most solid sizing of any ICP, because tracker adoption is well measured.

**Willingness to pay and current spend**
- Linear Basic $10 and Business $16 per user/month, billed yearly [16]. **[primary]** Jira prices: **not verified** (the pricing page did not load).
- Standup bots and note-takers already compete for the same budget line. Geekbot's own customers say it "saves us time from having to host daily meetings" [47]. **[3p review]**

**How competitors position toward them**
- Spinach: "Create tickets, send recap emails and update the CRM automagically"; Scrum Master use case [12]. Its blog says it drafts Jira tickets at meeting end [50].
- Supernormal: "Action items, created in Linear" [25]. Earmark: Linear-first, generates "stories, spikes, bugs, and epics" live, and published "AI note takers are dead" [26].
- Tana: "Your sprint planning just shipped 12 tickets" [27]. ZoomMate creates Jira tickets [28]. Read.ai routes items to Jira (landscape.md).
- **The gap:** "Done on the next call closes the ticket" is the only open angle, and it is thin: engineers mostly close tickets through PRs and commits. That is my inference, **not verified**. Too crowded for a first ICP.

**Cheapest test channel**
- Show HN, Product Hunt and the Linear integrations directory are free. HN is openly skeptical of meeting bots, so expect a sharp signal either way.

### ICP 3. Founder-led small businesses, 2 to 50, no project manager

**Pain: real and frequent?**
- Same general evidence as above: 55% unclear next steps [1]. Unnecessary meetings cost "more than $25,000 per employee" a year, from a study of 632 employees commissioned by Otter.ai [3]. **[vendor-commissioned]**
- No segment-specific survey found. The "no PM to chase tasks" pain is plausible but **not verified** with data.

**Market size signals**
- US: "the number of small businesses in the U.S. exceeds 36 million" [29]. **[primary]** SBA Office of Advocacy 2025. Most of these have no employees; the 1 to 49 employer count is **not verified** (the Census API needs a key).
- EU: about 33.1 million enterprises in 2023, "99% ... micro and small enterprises (0-49 people employed)" [30]. **[primary]** Eurostat.
- Adoption brake: the Census Bureau reports AI use rose among firms with 20+ employees but "didn't change significantly among firms with fewer than 20 employees" (Dec 2025 to May 2026) [31]. **[primary]** Firms with 1 to 4 employees are at 5.8% [31]. **[3p, restating Census]**

**Willingness to pay and current spend**
- Bundled substitutes cut WTP: Google Workspace Business Standard ($14/user/month) includes Gemini "Take notes for me" in Meet [32] **[3p]**. Zoom AI Companion comes free with paid Zoom, and Fathom has a free tier (landscape.md).

**How competitors position toward them**
- Fathom (free, "Never Take Notes Again" [36]), Gemini and Zoom bundles, and Read.ai. Fellow lists "solopreneurs" [13]. Nobody found leads with "the project manager you don't have", though how widely that phrase is used is **not verified**.

**Cheapest test channel**
- Meta ads are cheap per click but untargetable by "has no PM". That is the main reason to use this ICP only as a filter inside ICP 1 (founder-led agencies).

### ICP 4. People already paying for Otter, Fireflies or Fathom who want an alternative

**Pain and switching signals**
- Fireflies: "40% of organizations who have a vendor in the AI Meeting Notetakers category use Fireflies.ai", "down 34 percentage points from last year" [33]. **[primary]** Ramp card and procurement data, US-skewed, as of Nov 2026. The category is churning.
- Why people switch: Otter faces a class action filed Aug 2025 over recording without consent. The complaint says its bot can join "without consent from anyone on the call" [34]. Johns Hopkins told staff to disable Read.ai and Otter accounts [35] **[3p]**. Fathom's homepage now leads with "Now available bot-free" [36]. Switchers are moving to fewer bots, not more vocal ones.
- Scale of the pool: Otter has "some 25 million" users [34] **[3p citing Otter]**. Fireflies has 20M+ users across ~500,000 organizations [41]. **[vendor claim via 3p]**

**Search volume and CPC**
- "Otter alternative" and "Fireflies alternative" volumes and CPCs: **not verified**. One page claims 171.6K monthly searches for "Otter.ai" but doesn't name the exact keyword [48]. **[3p, unverified]** The team should check Google Keyword Planner before spending on this.

**WTP**: already paying $8 to $30 per seat (landscape.md). This audience is price-anchored to note-takers, which makes a premium "agent" price harder.

**How competitors position**: the SERP is saturated with "best Otter alternatives" listicles, by Fellow, Notta and dozens of SEO sites [49]. **The gap:** "the alternative that does the follow-up instead of handing you a summary". It's valid copy for a comparison page, but this audience's top motive is price or privacy.

**Cheapest test channel**: Google Search ads on "[competitor] alternative" plus one comparison landing page. Feasible in 7 days, but the intent mismatch above makes the result hard to read.

### ICP 5 (optional). Developers using Octo as a Claude Code plugin or "Grok Bot"

- Claude Code run-rate revenue was reported at $2.5B in Feb 2026 [42]. **[3p, citing Anthropic]** The official plugin marketplace has "more than 250 plugins" and the community catalog "more than 2,000" (Aug 2026) [43] **[3p]**.
- Meeting context in Claude Code is already served: Granola (`mcp.granola.ai`), Fathom (`api.fathom.ai/mcp`) and Fireflies (`api.fireflies.ai/mcp`) expose MCP endpoints [44]. **[3p]** Verify against vendor docs.
- Octo's core feature, a voice participant on the call, can't run inside a coding agent. A plugin would carry briefs and task sync only: a distribution and awareness hook with near-zero cost (publish to the community marketplace, Show HN), not a paying ICP.
- "Grok Bot": I couldn't identify which product this refers to. **Not verified.**

---

## 3. Competitor positioning and unclaimed wording

**Closest to "takes part in the call and does the follow-up"** (verbatim from each vendor's own page unless noted):

| Vendor | Their words | What it claims |
|---|---|---|
| Zoom ZoomMate | "Meet ZoomMate: Your New AI Teammate That Actually Gets Things Done" (Zoom community post title); "the first AI teammate built to turn conversations into completed work" (press release) [28] | "AI teammate" + "gets things done". The closest claim to Octo's, but Zoom-only. |
| Otter | Title "Otter Meeting Agent"; "handles follow-ups without ever taking a day off"; "automatically follows up in the tools you already use"; "Clear next steps are automatically captured and assigned" [37] | "Meeting agent", "follow-up" |
| Sembly | "the AI meeting agent that runs all workflow stages from the first meeting to the last deliverable"; "Every important team commitment ... becomes a task with an owner, a deadline" [10] | Agent + tasks with owners. Targets agencies and professional services. |
| Read.ai | "Meetings In, Decisions Out"; "Know what was promised last time and what's still open" [39] | Decisions, open-item tracking across meetings |
| Spinach | "Meeting transcripts your agents can act on."; "Create tickets ... automagically" [12] | Tickets; positions as input for your agents |
| ClearWork | Bot "joins meetings, listens for commitments and decisions, creates tickets" [11] | Commitments into tickets, for agencies |
| Fireflies | "Create tasks automatically after every meeting." [38] | Tasks |
| Fathom | "6+ hours saved per team member every week on follow-up work" [36] | Follow-up time saved |
| Fellow | "Agentic workflows for meeting prep and follow-up" [13] | Prep + follow-up |
| Earmark | Blog: "AI note takers are dead" [26] | The anti-note-taker framing (Octo's one-liner uses a similar contrast) |
| tl;dv | "The AI Notetaker built for Team Collaboration" [40] | Still a notetaker |

**Taken (avoid as the main claim):** "AI teammate" (ZoomMate; Sembly uses it as a UI label), "meeting agent" (Otter, Sembly), "follow-up(s)" (Otter, Fathom, Fellow), "turn meetings into action/outcomes/decisions" (Read.ai, Fellow, Spinach), "never miss an action item" (Spinach).

**Not found on any of the ~12 homepages checked** (not exhaustive, no trademark search):
- **Participant framing:** "takes part", "a participant, not a recorder", "the one in the call who actually follows up". Every checked page frames the product as notetaker, assistant, agent or knowledge engine.
- **Per-person DM with the quote:** "Everyone gets their own tasks, with the exact words they said." Nobody claims per-person delivery or quote-as-receipt.
- **Closing the loop by voice:** "Say 'done' on the next call and it's done in Asana." Read.ai comes nearest with "what was promised last time and what's still open", but doesn't claim updates by voice.
- **Platform-agnostic for client work:** "On whatever platform your client picks." ZoomMate, Teams Facilitator and Gemini are each tied to one platform; no third-party page leads with this.
- **Visible on purpose:** "Everyone sees it, it speaks only when called." The market is moving to "bot-free" [36], so owning visibility as a trust feature is open. It also answers the bot backlash directly.

**Suggested one-liners to test** (A/B in the LinkedIn test):
1. "Note-takers record the meeting. Octo takes part in it." (current)
2. "The teammate on every client call who actually does the follow-up."
3. "Say it on the call. It's in ClickUp, with your words, before you hang up."

---

## 4. Sources

1. Microsoft Work Trend Index 2023, "Will AI Fix Work?" https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work [primary]
2. Asana Anatomy of Work 2023: https://www.businesswire.com/news/home/20230308005268/en/Asana-Anatomy-of-Work-Global-Index-2023 ; coverage: https://www.techradar.com/news/most-of-us-think-were-wasting-time-on-pointless-office-meetings [vendor]
3. Otter.ai / Rogelberg meeting cost study: https://www.businesswire.com/news/home/20220926005145/en/One-third-of-Meetings-Are-Unnecessary-Costing-Companies-Millions-and-No-One-Is-Happy-About-It ; https://www.advisory.com/daily-briefing/2022/10/03/unnecessary-meetings [vendor-commissioned]
4. Teamwork.com State of Agency Operations: https://www.teamwork.com/resources/agency-operations-benchmarking-report/ [vendor]
5. Agency churn figures (unsourced): https://dev.to/teamcamp/why-57-of-agency-clients-leave-and-how-to-stop-it-5amj [3p, not verified]
6. Bureau of Digital 2023 Digital Agency Tools Survey: https://bureauof-digital.squarespace.com/s/2023-Digital-Agency-Tools-Survey-Results.pdf [primary, snippet only, 404 on fetch]
7. IBISWorld counts: https://www.ibisworld.com/united-states/number-of-businesses/digital-advertising-agencies/5889/ ; https://www.ibisworld.com/united-states/number-of-businesses/advertising-agencies/1433/ [3p]
8. Census 2016 size mix via WhatTheyThink: https://whattheythink.com/data/95514-advertising-public-relations-related-services-establishments2016/ [3p]
9. Infobel agency database: https://www.infobelpro.com/companies/united-states/advertising-and-marketing-agencies [3p]
10. Sembly homepage: https://www.sembly.ai/ [vendor]
11. ClearWork listing: https://ustack.app/products/clearwork-app ; site: https://www.clearwork.app/ [vendor via directory]
12. Spinach homepage: https://www.spinach.ai/ [vendor]
13. Fellow homepage: https://fellow.ai/ [vendor]
14. ClickUp pricing: https://clickup.com/pricing [primary]
15. Asana pricing: https://asana.com/pricing [primary]
16. Linear pricing: https://linear.app/pricing [primary]
17. LinkedIn ad CPC benchmarks (ZenABM): https://zenabm.com/blog/linkedin-ads-benchmarks-2026.md ; https://zenabm.com/blog/linkedin-ads-benchmarks.md [3p]
18. University of Oslo daily stand-up study: https://core.ac.uk/download/249984287.pdf [primary, academic]
19. Hacker News comment on standups: https://news.ycombinator.com/item?id=39304666 [user voice]
20. Bloomberry, Jira vs Linear: https://bloomberry.com/blog/the-data-on-jira-vs-linear-whos-winning-new-customers/ [3p]
21. Sacra on Linear: https://sacra.com/c/linear/ [3p]
22. Stack Overflow 2024 Jira share via Getint: https://www.getint.io/blog/stack-overflow-developer-survey-2024-jira-leads-the-way [3p]
23. Pragmatic Engineer 2025 survey: https://newsletter.pragmaticengineer.com/p/the-pragmatic-engineer-2025-survey-part-2 [primary survey]
24. Lenny's Newsletter stack survey: https://www.lennysnewsletter.com/p/whats-in-your-stack-the-state-of [primary survey]
25. Supernormal Linear integration: https://www.supernormal.com/integrations/linear [vendor]
26. Earmark: https://www.tryearmark.com/blog/the-best-ai-meeting-assistants-for-linear-(2026) ; https://www.tryearmark.com/blog/ai-note-takers-are-dead [vendor]
27. Tana sprint planning: https://tana.inc/sprint-planning [vendor, page title from search result]
28. ZoomMate: https://community.zoom.com/customer-success-forum-23/meet-zoommate-your-new-ai-teammate-that-actually-gets-things-done-80762 ; press release copy: https://www.mycebu.ph/?p=35742 [vendor]
29. SBA Office of Advocacy 2025: https://advocacy.sba.gov/?p=30239 [primary]
30. Eurostat 2023 SBS release: https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251013-2 [primary]
31. Census Bureau AI use by firm size: https://census.gov/library/stories/2026/05/ai-use-businesses.html [primary] ; 1 to 4 employee rate: https://www.selfemployed.com/?p=100114 [3p]
32. Google Workspace pricing with Gemini: https://www.eesel.ai/blog/google-workspace-pricing [3p, check workspace.google.com/pricing]
33. Ramp, Fireflies in AI Meeting Notetakers: https://ramp.com/vendors/firefliesai [primary spend data]
34. NPR on Otter class action: https://www.npr.org/2025/08/15/g-s1-83087/otter-ai-transcription-class-action-lawsuit [press]
35. Bloomberg essay: https://www.bloomberg.com/news/articles/2025-02-14/ai-notetakers-in-meetings-are-making-me-queasy ; Kelly Services spotlight (bans, prevalence): https://docs.kellyservices.com/story/spotlight-ai-meeting-assistants-april-2025/page/1 [press / 3p]
36. Fathom homepage: https://www.fathom.ai/ [vendor]
37. Otter homepage: https://otter.ai/ [vendor]
38. Fireflies homepage: https://fireflies.ai/ [vendor]
39. Read.ai homepage: https://www.read.ai/ [vendor]
40. tl;dv homepage: https://tldv.io/ [vendor]
41. Fireflies user and org counts: https://www.aiwiki.ai/wiki/fireflies_ai [3p restating vendor]
42. Claude Code run-rate: https://www.nxcode.io/resources/news/anthropic-380b-valuation-super-bowl-claude-code-2026 [3p]
43. Claude Code plugin counts: https://scrimba.com/articles/best-claude-code-plugins-2026/ [3p]
44. Meeting-tool MCP endpoints: https://blog.laozhang.ai/en/posts/connect-claude-code-to-note-taker [3p]
46. Zoom community thread on blocking notetakers: https://community.zoom.com/meetings-2/how-do-i-disable-ai-notetakers-otter-ai-read-ai-fireflies-ai-etc-from-joining-our-meetings-17388/index2.html [user voice]
47. Geekbot G2 reviews: https://www.g2.com/products/geekbot-geekbot/reviews [3p reviews]
48. Unverified search-volume page: https://ai-tracker-466821.web.app/ai-meeting-assistants [3p, not verified]
49. Example "Otter alternatives" listicle: https://meetingnotes.com/blog/otter-ai-alternatives [3p]
50. Spinach Jira automation blog: https://www.spinach.ai/blog/best-ai-jira-automation-from-calls [vendor]
