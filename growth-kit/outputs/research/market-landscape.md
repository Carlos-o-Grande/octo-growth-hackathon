# Market Landscape: AI meeting agents, and where Octo fits

## Snapshot

- **Checked:** 2026-11-08, during the Growth Marketing Hackathon, Portugal.
- **Purpose:** help the team pick the first persona and the main offer for Octo (Octocrew's in-call AI teammate, not launched, planned on a subdomain of octocrew.ai).
- **Read first:** `brief/campaign-brief.md`, `outputs/research/product-scout.md`, `../market/landscape.md`, `../launch/hypotheses.md`, `../launch/hackathon-plan.md`, `../launch/audiences.md`. This file verifies and extends `market/landscape.md`; where a claim there is not re-checked here, it says so.
- **Labels:** `vendor` = the company's own page or press release. `press` = independent media. `snippet` = search-result text only, page not opened. `3p` = third-party blog or compilation. `vendor-funded` = a survey run by a company that sells in this category.

| Source | Status today |
|---|---|
| Pricing pages: otter.ai, fireflies.ai, fathom.ai, read.ai, granola.ai, fellow.ai, avoma.com, meetgeek.ai, recall.ai | fetched by curl, 200, prices read from page text |
| tldv.io/pricing | fetched, 200, but the page renders by script: 52 characters of text, **no prices captured** |
| clickup.com/ai/notetaker | **blocked**, HTTP 403. Used clickup.com/brain/ai-notetaker via search excerpt instead |
| zoom.com/en/products/ai-assistant | fetched, 200, but the price renders by script ("ZoomMate plans starting at /month/user" with the number missing). Price taken from product-scout's capture of the same page today |
| notion.com/pricing | fetched, 200; Business plan price not in static text, **not captured** |
| support.microsoft.com Facilitator page | fetched (Firecrawl, direct quotes) |
| fellow.ai/blog/ai-notetaker-statistics | fetched (Firecrawl, direct quotes) |
| fireflies.ai/blog/fireflies-1-billion-valuation | fetched, 200 |
| techcrunch.com (Read AI 2024, Granola 2026) | fetched / full text in search result |
| founderpath.com (Fathom) | fetched, 200 |
| recall.ai/blog/launching-output-media | fetched, 200 |
| businesswire.com (Otter $100M ARR) | **blocked**, HTTP 403 "Access Denied". Claim kept from `market/landscape.md`, not re-verified |
| Reddit threads | not attempted (product-scout got 403); only snippets used |

## B2C vs B2B verdict

**Verdict: bottom-up (PLG) B2B with a prosumer front door, and a top-down layer that is mostly owned by the platforms and by IT.**

1. **Individuals adopt first, for free.** Every leader except the platforms has a free plan on its pricing page today: Otter "Basic ... Free", Fireflies "Free forever", Fathom "Free plan ... Free forever", Read.ai "$0 Always free, no credit card required", Granola "$0 per user per month", Fellow "$0", MeetGeek "Free forever". (Pricing pages listed under Sources, fetched 2026-11-08, vendor.)
2. **Teams pay.** Fathom says it out loud: it "gives its AI meeting assistant away free to individuals, monetizes teams" and reached "more than $30M of annual revenue" (Founderpath interview with CEO Richard White, published May 21, 2026, https://founderpath.com/resources/richard-white-fathom-free-ai-notetaker-30m-arr, 3p summary of a founder interview). Fathom's paid plans are team plans with a "2 user min" (https://www.fathom.ai/pricing, vendor).
3. **The bot is the distribution.** The note-taker joins other people's meetings, so every guest sees it. Read AI's investor describes it as fitting a "product-led growth model" with an "enterprise component" (https://techcrunch.com/2024/10/28/read-ai-raises-50m-to-integrate-its-bot-with-slack-email-and-more/, press). A Reddit admin thread describes the same loop from the IT side: "They're trying to get your users to use the service for their own meetings, in hopes that your company would become a paying customer." (https://www.reddit.com/r/Office365/comments/1ij4qtk/why_is_readai_requesting_these_ludicrous/, snippet).
4. **Enterprise comes later, and IT is often the blocker, not the buyer.** Fireflies sells to large companies ("used by people at 75% of Fortune 500 companies", https://fireflies.ai/blog/fireflies-1-billion-valuation, vendor) and Granola is "expanding from meeting notetaker to enterprise AI app" (TechCrunch, March 25, 2026, press). But in many larger organisations IT blocks third-party bots and approves the platform's own AI instead (see Backlash and trust).

**Who adopts vs who pays, in this market:**

| Role | What they do | Evidence |
|---|---|---|
| Individual (sales rep, founder, PM) | Installs a free bot, connects a calendar | Free tiers on every vendor page above |
| Team lead / ops / owner of a small company | Upgrades to a team plan once several people use it | Fathom "monetizes teams", 2-user minimum |
| IT / security | Approves or blocks; in enterprise picks the bundled platform AI | University and company block lists (Backlash section) |

**What this means for Octo:** Octo's value is team-level by design (it writes to the team's tracker and DMs every person). One individual cannot get the core value alone, because someone has to connect the team's tracker. So Octo's buyer is the team lead or ops person on day one, not a free individual. The guest loop (every person in the call gets their tasks) is the PLG part.

## How the market attacks the problem

| Group | Players (examples) | Job they own | Who they target | Price model | Closes the loop: tasks into the tracker AND updated from a later call? |
|---|---|---|---|---|---|
| (a) Passive note-takers | Fathom, Granola, tl;dv, Read.ai, Fellow, MeetGeek | Record, summarise, list action items, push to tools | Individuals first, then teams | Free tier + per seat ($7 to $35/user/month on pages fetched today) | **Push only.** Read.ai Pro lists "Premium integrations (Notion, Salesforce, HubSpot, Jira, Confluence, Zapier, webhooks)" (read.ai, vendor). Fathom's site nav lists Asana (fathom.ai, vendor). No vendor found that updates a task from a later call. |
| (b) Note-takers that speak on a wake word | Otter Meeting Agent, Talk to Fireflies, Mina | Answer questions by voice during the call | Same as (a) | Fireflies: voice included for "all users, including Free" (guide.fireflies.ai, vendor, via product-scout) | **Mina claims part of it.** Its Product Hunt launch says it can "respond during meetings in real time" and "update CRMs, tickets, and workflows", and mentions "standups & sprint reviews"; it "only talks or jumps in when you say 'Hey Mina'" (https://www.producthunt.com/products/mina-meeting-assistant, vendor, maker comments ~5 months old). Not verified beyond that page. |
| (c) Platform-native | Microsoft Teams Facilitator, Zoom AI Companion / ZoomMate, Gemini in Meet, Notion AI Meeting Notes | Notes and tasks inside one platform, bundled with the licence | Companies already paying for the suite; IT-approved | Bundled or add-on: Facilitator needs "a Microsoft Copilot license"; ZoomMate "plans starting at $20 /month/user" (product-scout capture) | **Teams Facilitator is the closest to Octo's loop.** "Ask Facilitator to help manage your tasks by @mentioning Facilitator to create, update, or query for tasks related to that meeting." and "Tasks created by Facilitator will automatically sync to a meeting plan associated with that meeting instance." (https://support.microsoft.com/en-us/teams/copilot/facilitator-in-microsoft-teams-meetings, vendor, page dated 08/13/2026). Limits: Teams only, Microsoft's own task plan, Copilot licence, and scoped to "that meeting", not a later call. ZoomMate after the meeting: "Salesforce updates, follow-up emails, and drafting decks" (zoom.com, vendor). |
| (d) Work-tool-native | ClickUp AI Notetaker, Atlassian Rovo (Jira) | Turn meeting or chat into tasks inside their own tracker | Their existing customers | Part of the work tool's AI plan (prices not captured) | **Claimed, contested.** ClickUp: "ClickUp AI will update docs and turn action items into assigned tasks as soon as the meeting ends." (https://clickup.com/brain/ai-notetaker, search excerpt; the /ai/notetaker page returned 403). A ClickUp user request on ClickUp's own feedback board says: "Right now the AI Notetaker output is a dead end that requires manual follow-up." and asks for an agent to "create ClickUp tasks with the correct assignees and due dates, without anyone having to manually extract them" (https://clickup.canny.io/ai-notetaker, search excerpt). Atlassian: Rovo can "Create work items, update work items, and draft status updates - all from Rovo chat" (https://www.atlassian.com/software/jira/ai, vendor, search excerpt): from chat, not from a call. Asana, monday.com, Linear: **not checked this run** (search returned no first-party page). |
| (e) Vertical | Avoma (sales), Gong (sales, not fetched), BrightHire (recruiting) | Revenue or hiring workflows: CRM updates, coaching, scoring | Sales and recruiting teams, sold by seat with sales-led enterprise tiers | Avoma: per "recorder" seat, "Viewers are free", add-ons for "Conversation Intelligence" and "Revenue Intelligence" at $29 each (avoma.com, vendor) | **CRM, not task tracker.** Avoma: "Auto Save Notes to CRM Records" (vendor). No task-tracker loop found. Note: Zoom's product menu now lists "Bonsai" and "BrightHire" next to ZoomMate (zoom.com nav, fetched today); what they do inside Zoom was not checked. |
| (f) Infra and new "AI teammate in the call" entrants | Recall.ai; Mina; others listed in `market/landscape.md` (TruGen, Relly, Koov, AgentCall, not re-checked) | Let anyone ship a bot that records, speaks and shows video | Developers and startups | Usage: "$0.50/hr of recording", built-in transcription "$0.15/h" (recall.ai/pricing, vendor) | Infra does not close the loop itself, but it makes it cheap to build. Recall.ai "Output Media" lets bots "generate and stream low-latency audio and video directly into a video conference" (https://www.recall.ai/blog/launching-output-media, vendor, updated September 14, 2026). Recall.ai's site banner: "Recall.ai has raised a $38M series B!" (vendor). |

**Read across the table:**
- Speaking in calls is now a commodity: free at Fireflies, packaged by Recall.ai for any startup.
- Creating tasks from a meeting is claimed by Microsoft (Teams), ClickUp and Mina. **"Octo creates tasks" is not a differentiator.**
- What none of the pages fetched claim: **a task updated in the team's own tracker because someone said "done" on a later call, on any of six platforms, with each person getting their tasks by DM with the source quote.** That is the narrowest defensible line today, and it rests on Octo's own self-reported product (`product/overview.md`).
- Correction for the brief's "Only Octo" line: Fathom's site title reads "AI Note Taker for Zoom, Meet, Teams & Slack" (https://www.fathom.ai/overview, search excerpt). Slack coverage on its own may not be unique; Webex and GoTo coverage was not checked for Fathom.

## Go-to-market motions of the leaders

| Company | Motion | Numbers they or the press published | Source, date, type |
|---|---|---|---|
| Otter.ai | Freemium, bot in meetings, Business and Enterprise tiers; "Hey Otter" Meeting Agent | "$100M ARR" (March 2025) | businesswire.com release, **blocked today (403)**; kept from `market/landscape.md` [2], not re-verified |
| Fireflies.ai | Freemium, bot in meetings, free voice agent, profitable bottom-up growth, enterprise tier | "serving 20 million people across more than 500,000 organizations"; "user growth has surged 8x" over 18 months; "maintains profitability since 2023"; "triple-digit year-over-year growth without raising primary capital since 2021"; valuation "over $1 billion" after a tender offer. Pricing page today: "USED ACROSS 1 MILLION+ COMPANIES" | https://fireflies.ai/blog/fireflies-1-billion-valuation, June 12, 2025, vendor; https://fireflies.ai/pricing, 2026-11-08, vendor |
| Fathom | Free forever for individuals, paid team plans (2-user minimum), 90-day guarantee, raised money from its own users | "more than $30M of annual revenue"; "every time we raise a round, we reserve 15% of it for our users to invest" | https://founderpath.com/resources/richard-white-fathom-free-ai-notetaker-30m-arr, May 21, 2026, 3p summary of founder interview. "$17M Series A, led by Telescope Partners" (LinkedIn post by Richard White, snippet, date not captured) |
| Read AI | Free tier, bot plus report shared with participants, PLG with enterprise layer | Series B "$50 million ... led by Smash Capital", six months after a "$21 million Series A"; "more than 100,000 new accounts created across enterprises and individual users" since the Series A; "doubled our sign-ups, active users, and [monthly recurring revenue]" in under six months | https://techcrunch.com/2024/10/28/read-ai-raises-50m-to-integrate-its-bot-with-slack-email-and-more/, Oct 28, 2024, press |
| Granola | No bot (device audio), consumer-grade app, $14 flat Business plan, moving to enterprise | "$125M Series C at a $1.5bn valuation" (https://www.granola.ai/blog/series-c, March 25, vendor); valuation "up from $250 million", total raised "$192 million", customers named include Vanta, Gusto, Asana, Cursor, Lovable, Mistral AI | https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/, March 25, 2026, press |
| tl;dv | Freemium, comparison-content SEO | Homepage: "2M+users" | https://tldv.io/, snippet |
| Fellow | Freemium (5 lifetime AI notes), cheap team plan, security-led content | No user or revenue numbers found | https://fellow.ai/pricing, vendor |
| Avoma | Sales-led and self-serve, recorder seats, free viewers, revenue add-ons | No numbers found this run | https://www.avoma.com/pricing, vendor |
| MeetGeek | Freemium with hours caps, usage overage | No numbers found this run | https://meetgeek.ai/pricing, vendor |
| Zoom, Microsoft, Google | Bundled with the platform; IT-approved default | Not checked this run | vendor pages above |

**Patterns:**
- **Free tier generosity is the norm.** Fireflies and Fathom give unlimited or near-unlimited free use. A free individual note-taker cannot be Octo's wedge.
- **Viral loop = the bot is visible to guests.** It works (Fireflies 20M people; Read AI 100k+ new accounts in six months) and it is also what IT and lawyers now attack.
- **Marketplaces:** `launch/hypotheses.md` says "Fathom got 100k sign-ups in a month from Zoom, but few stayed". **Not re-verified this run.**
- **The bot-free bet is winning the money:** Granola raised at $1.5B on "Users might not like bots in meetings visibly taking notes, but a lot of them don't mind if an app on someone's computer is doing the transcription." (TechCrunch, March 25, 2026). Octo is the opposite bet: a visible participant. It has to justify its presence by doing something a silent app cannot (speak, show, act).

## Pricing models

Prices read from each vendor page on 2026-11-08 (USD, per user per month unless stated).

| Vendor | Free | Entry paid | Team / business | Notes (exact page text) |
|---|---|---|---|---|
| Otter | "Basic ... Free" | Pro "$16 .99 /user/month" monthly; "$8 .33 /user/month" annual | Business "$30" monthly, "$19 .99 /user/month" annual | Page also shows promo prices "$8 .49*" and "$4 .17*" ("save 50%") and Business "$24 /user/month 20% off for 3 months" |
| Fireflies | "Free forever" | Pro "$18" monthly, "$10 per seat / month, billed annually" | Business "$29" monthly, "$19 per seat / month, billed annually" | Enterprise "$39 ANNUAL ONLY per seat / month", includes "50 AI credits" |
| Fathom | "Free plan ... Free forever" | Team "$19" monthly, "$15" annual, "/month / per user (2 user min)" | Business "$34" monthly, "$25" annual, "(2 user min)" | "start free trial 90 day guarantee" |
| Read.ai | "$0 Always free, no credit card required" | Pro "$15" annual, "$19.75" monthly | Enterprise "$22.50" annual, "$29.75" monthly | Pro includes "Premium integrations (Notion, Salesforce, HubSpot, Jira, Confluence, Zapier, webhooks)" |
| Granola | Basic "$0 per user per month" | Business "$14 per user per month" | Enterprise "$35 per user per month" | Business: "Unlimited meeting notes and history" |
| Fellow | "$0" with "5 AI notes (lifetime) / user" | Team "$7 per user / month billed annually", "$11 billed monthly" | Business "$15" annual, "$23 billed monthly" | Team: "10 AI notes / user / month" |
| MeetGeek | "Free forever", "3 hours of transcription / month" | Pro "$15.99" (calculator shows "$ 9.99 /user /mo nth") | Business "$27" (calculator "$ 17 /user /mo nth") | Usage overage "$0.50 per extra hour" |
| Avoma | none found | Startup "$19 Per 'recorder' seat per month. Billed annually" ($29 monthly) | Organization "$29" annual ($39 monthly); Enterprise "$39 ... Billed annually only" | "Viewers and Collaborators are always free" |
| tl;dv | not captured | not captured | not captured | Page renders by script; `market/landscape.md` cites a 2026 price increase (costbench, 3p) |
| ZoomMate | n/a | "plans starting at $20 /month/user" | n/a | product-scout capture of zoom.com today; my fetch showed the number missing |
| Teams Facilitator | n/a | Requires "a Microsoft Copilot license" | n/a | Licence price not fetched |
| Notion AI Meeting Notes | n/a | not captured | not captured | Page: "Automate your meeting notes and follow-ups, no bot needed"; Custom Agents "Free to try, then $10 per 1,000 monthly Notion credits" |
| Recall.ai (infra) | Pay as you go | "$0.50/hr of recording" | "Custom Pricing" | Transcription "$0.15/h"; storage "$0.05 per hour of recording retained for 30 days" after 7 free days |
| Octocrew (Octo's parent, other product) | none | Founding prices $500 to $800 per role per month | "$700 to $1,000 per role per month" | product-scout, https://www.octocrew.ai/pricing.html |

**Models seen:**
1. **Per seat with a free tier** (Otter, Fireflies, Read.ai, Granola, Fellow, MeetGeek). Range for a paid team seat today: $7 (Fellow annual) to $39 (Fireflies, Avoma enterprise).
2. **Per seat with a team minimum** (Fathom "2 user min"): pushes the buy to a team decision.
3. **Pay for hosts, guests free** (Avoma "recorder" seats, "Viewers ... always free"). This fits Octo: the team pays, every guest gets value free.
4. **Usage and credits** layered on seats (MeetGeek extra hours, Fireflies AI credits, Notion credits). Signals that AI actions cost real money per use.
5. **Bundled with the platform** (Copilot licence, Zoom plans).
6. **Infra by the hour** (Recall.ai), which sets a floor for a bot product's cost of goods.
7. **Done-for-you retainer** (Octocrew's own model, $700 to $1,000 per role per month).

**Price anchor for a 15-person team, computed from today's annual list prices:** Fathom Team 15 x $15 = $225/month; Fireflies Business 15 x $19 = $285/month; Otter Business 15 x $19.99 = $299.85/month. That is what a team already pays for notes alone.

## Market size and adoption signals

**Analyst market-size reports disagree and none could be read in full. Treat them as weak.**

| Claim | Source | Quality |
|---|---|---|
| "CAGR of 34.7%" for AI Meeting Assistants, 2025 to 2034 | https://market.us/report/ai-meeting-assistant-market/ (snippet) | Paid report, size not in snippet |
| "USD 1.20 billion in 2025", "USD 1.42 billion in 2026" | https://www.precedenceresearch.com/ai-in-meeting-assistants-market (snippet) | Paid report |
| Headline "Projected to Reach $11.86 Billion by 2030", body says "$1.1 billion in 2025" and "29% CAGR" | https://natlawreview.com/press-releases/artificial-intelligence-ai-powered-meeting-assistants-market-projected-reach (paid press release by The Business Research Company, snippet) | **Internally inconsistent**: $1.1B at 29% for five years gives about $3.9B, not $11.86B |
| US market "USD 1.497 Million in 2025" | https://www.marketresearchfuture.com/reports/us-ai-meeting-assistants-market-15398 (snippet) | **Discard**: unit error and the page also shows two other CAGRs |

**Better signals: what the vendors themselves report (vendor or press, see GTM table).** Fireflies 20M people and 500k+ organisations (June 2025), Otter $100M ARR (March 2025, not re-verified), Fathom $30M+ revenue (May 2026), Granola $1.5B valuation (March 2026), Read AI 100k+ new accounts in six months (Oct 2024), tl;dv 2M+ users. Taken together: a multi-hundred-million-dollar revenue category growing fast, with at least two companies valued above $1B.

**Adoption:**
- **Vendor-funded:** Fellow.ai 2025 survey: "Three out of four professionals (75%) said they currently use an AI note-taker in their work meetings." Respondents "came from Information Technology (41%) and Operations (31%) roles". Sample size not stated in the text read. (https://fellow.ai/blog/ai-notetaker-statistics/)
- **Vendor-funded:** Laxis 2026 report: "75% of professionals now use an AI note-taker", "67% of Fortune 500 companies having deployed AI note-takers" (https://www.laxis.com/blog/state-of-meeting-note-taking-2026/, snippet).
- **Independent, all AI, not meeting-specific:** "about 18 percent of firms have adopted AI as of year-end 2025" (Census Bureau data via the Federal Reserve, https://www.federalreserve.gov/econres/notes/feds-notes/monitoring-ai-adoption-in-the-u-s-economy-20260403.html, snippet). Small firms: "Just 43% of businesses with two to nine employees report using AI for work tasks, compared with 59% of businesses with 100 to 249 employees." (https://www.uschamberfoundation.org/workforce/half-of-small-business-workers-use-ai-most-to-boost-productivity-not-automate-jobs, snippet). The gap between the vendor 75% and the independent 18% to 59% is large; quote the independent numbers in public assets.
- **No sourced adoption number for agencies specifically was found.**

**Meeting volume (independent of the category, Microsoft telemetry):**
- Employees are "interrupted every two minutes", "275 times per day", "by meetings, emails or chat notifications"; "Evening Meetings Up 16%" (https://news.microsoft.com/de-ch/2025/06/17/new-microsoft-study-reveals-the-rise-of-the-infinite-workday-40-of-employees-check-email-before-6-a-m-evening-meetings-up-16/, snippet, June 17, 2025, vendor research).
- Half (50%) of all meetings fall in two windows, 9 to 11 am and 1 to 3 pm (paraphrased); "Tuesdays now carry the heaviest meeting load (23%)" (https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday, snippet).

**Buyer pain about follow-through (snippets, from product-scout, not verified verbatim):** "It dies in the doc that its placed in" (r/SaaS); "I still move the actual action items into whatever task system I'm using" (r/ProductivityApps). The ClickUp feedback-board request above ("a dead end that requires manual follow-up") is the same pain inside a tracker that already has a note-taker.

## Backlash and trust

1. **Lawsuits on consent.** A class action against Otter was filed "On 15 August 2025" by Justin Brewer; the consolidated complaint "was filed on 5 December 2025"; plaintiffs say they "were not Otter customers at all" (https://www.sally.io/blog/otter-ai-class-action-lawsuit, 3p, written by a competing note-taker vendor). A law firm reports that "the court allowed several key claims to proceed", including the California Invasion of Privacy Act and the federal Wiretap Act, and that "In July, a proposed class action lawsuit was filed in the same court against Granola" (https://www.bairdholm.com/blog/core-privacy-claims-against-ai-note-taking-platform-survive-dismissal/, 3p, law firm). A Medium post also names a suit against Fireflies (3:25-cv-03399) (https://medium.com/@ayeshha2398/ai-notetakers-are-being-sued-for-wiretapping-your-meetings-cef1f8751e3a, 3p, low reliability, not checked against court records).
2. **Organisations blocking bots.** A compiled list (https://gettrippi.app/notes/en/ai-notetaker-bans/, 3p, by a browser-extension vendor; each row links the primary page, primary pages not opened today) names 23 organisations, mostly universities, for example: Cornell ("Read.ai and Fireflies.ai are currently automatically blocked"), UW-Madison (blocked otter.ai, read.ai, fireflies.ai and others), Notre Dame ("NO third-party transcription bots should ever be allowed into any meetings"), University of Cambridge, City of Bellevue, ASAE ("the use of any AI notetaking tools is prohibited"), and the company Chief. **What they allow instead: the platform's own AI** (Zoom AI Companion, Microsoft Copilot, Gemini "Take Notes for Me").
3. **People change behaviour.** Vendor-funded (Fellow 2025): "Among those not yet using an AI note-taker, half (50%) cited privacy and security as the main reason"; "47% said they've experienced a note-taker recording or sharing something they didn't intend to be captured"; "84% of respondents said they modify what they say when an AI note-taker is present." (https://fellow.ai/blog/ai-notetaker-statistics/)
4. **Bot fatigue is a selling point for rivals.** TechCrunch: "Users might not like bots in meetings visibly taking notes" (Granola article, March 25, 2026). Notion sells "no bot needed".

**What this means for Octo [inference]:**
- Enterprise and education will default to Copilot, Zoom and Gemini and block third-party bots. Octo should not start there.
- Small firms without an IT department do not have these blocks, which favours agencies, studios and founder-led SMBs.
- Octo's guest experience is both the growth loop and the legal risk. The defensible framing is "invited, visible, announces itself, guests can say no", and a guest who gets something useful (their own tasks) has a reason to accept the bot. Octo's existing "reduced client mode" when a guest joins (`product/live-demo.md`) is a start; consent wording is a gap.

## Underserved segments

Scored against Octo's specific capability (speak on call, task DMs with quote, tracker write AND later update, six platforms) and what the evidence says about each segment.

| Segment | Fit with Octo's proven integrations | Competing native option | Buyer = user? | IT blocks? | Evidence strength | Read |
|---|---|---|---|---|---|---|
| **Agencies and studios, 10 to 50 people** | Good if they use Asana, Notion or Trello (Octo lists these as working). ClickUp not confirmed | ClickUp AI Notetaker for ClickUp shops (contested by its own users) | Ops / delivery lead buys, team uses | Rare in this size [ASSUMED] | Medium: platform-native tools stay in one platform, while agency calls happen on the client's platform [inference]; no agency-specific survey found | **Best first fit**, if the tracker is Asana, Notion or Trello |
| **Startup product teams on Jira or Linear** | **Not confirmed** (Jira and Linear support unknown, product-scout gap 4) | Atlassian Rovo creates and updates work items from chat; Teams Facilitator for Microsoft shops; Mina targets "standups & sprint reviews" | Eng manager buys, team uses | Sometimes | Medium: most crowded by native and new entrants; engineers can build their own on Recall.ai | **Second wave**, after Jira/Linear work end to end |
| **Founder-led SMBs with no PM** | Good (Trello, Notion, Asana typical) [ASSUMED] | Free note-takers (Fathom, Fireflies) cover notes | Yes: founder is buyer and user, short cycle | No | Weak: price-sensitive, free alternatives everywhere | **Good test cell** with the same tools as agencies; lower willingness to pay [ASSUMED] |
| **Other: client-services firms with many external calls (consultancies, fractional teams, dev shops)** | Same as agencies | Same as agencies | Partner or ops lead | Low | Medium: the guest loop is strongest when most calls have outside guests | Treat as the same persona as agencies; widen the language from "agency" to "client teams" |

**Why agencies and client teams look underserved for this capability [inference from the evidence above]:**
- Platform-native agents (Facilitator, ZoomMate, Gemini) each work in one platform. A client-services team takes calls on whatever the client uses. Octo's six-platform reach matters most here.
- Work-tool-native note-takers (ClickUp) only write into their own tool, and a ClickUp user calls the output "a dead end".
- No vendor found claims the later-call update ("done" on Thursday updates the task created on Monday). For an agency, that is the status-meeting and client-update problem.
- Guests are the client: every client call shows Octo to a new company, and each guest gets their own task DM. This is the "every guest sees Octo" loop from `launch/hypotheses.md`, aimed at people who run teams.

## Recommendation: first persona and main offer

**RECOMMENDATION (the author's judgement, built on the evidence above; to test, not proven):**

**First persona:** the operations or delivery lead (or the owner) of a client-services team of 10 to 50 people (agency, studio, consultancy) that runs its work in **Asana, Notion or Trello** and takes client calls on more than one platform. Trigger: a client asks about something agreed on a call two weeks ago and nobody owns it.
- Why: Octo's tracker integrations are confirmed for exactly these tools; the platforms' own agents stay inside one platform; enterprise IT is not in the way; the guest loop reaches a new company on every client call; the buyer feels the pain directly.
- Not first: Jira/Linear product teams (integration unconfirmed, and Atlassian, Microsoft and Mina are moving there). Not a free individual tier (Fireflies already gives voice for free; Fathom gives notes for free).

**Main offer: a team pilot, not a free individual tier.**
1. **At the hackathon (this weekend):** "Bring Octo to your next client call." A waitlist that is really a pilot request, with two qualifying questions: which tracker (Asana / Notion / Trello / ClickUp / Jira / Linear / other) and which call platforms. The answers decide the ICP with data, and the tracker question tests the agency vs product-team split from `launch/hypotheses.md`.
2. **The guest loop is always free:** every person in the call gets their tasks by DM with the quote, and a "get Octo for your team" link. Like Avoma's "Viewers ... always free", only the team that invites Octo pays.
3. **Paid team plan after the pilot, priced per team, not per seat:** anchor it against what a 15-person team already pays for notes alone ($225 to $300 per month at Fathom, Fireflies and Otter annual list prices today) and below Octocrew's own $700 to $1,000 per role per month. Test one or two flat team prices in that window [ASSUMED price points, to test; no public price until Oleksii agrees, per the brief's "Do not say"].
4. **Set it up with the team (done-with-you):** this matches Octocrew's existing service model (success manager, forward-deployed engineer, acceptance tests) and lowers the risk that the tracker loop fails on day one.

**Why not a free self-serve tier now:** (a) Octo has no self-serve sign-up yet (`product/overview.md`); (b) each bot hour has a real cost floor (Recall.ai lists $0.50 per recorded hour plus $0.15 per hour of transcription before any speech or language model, if Octo uses similar infra, unknown); (c) the free individual market is held by companies with 20M users (Fireflies) and free-forever plans (Fathom).

**What would change this recommendation:** if pilot sign-ups mostly name Jira or Linear, move product teams first (and confirm the integration); if most name ClickUp, Octo competes with ClickUp's own notetaker and must show the later-call update live.

### The founder's defaults: confirm, adjust or challenge

Checked against `../../launch/hackathon-plan.md` and `../../launch/audiences.md` (read 2026-11-08). All verdicts below are RECOMMENDATIONS.

| Default | Verdict | Why (evidence) |
|---|---|---|
| **Primary audience #1:** founders, MDs, heads of ops at remote agencies of 10 to 50 people, mixed platforms | **Confirm, with one adjustment** | Matches this study's first persona: no IT gate in that size, many calls on the client's platform where single-platform agents (Facilitator, ZoomMate, Gemini) do not follow, and the buyer feels the pain. **Adjust the tool list:** `audiences.md` leads with ClickUp, but Octo's confirmed trackers are Notion, Asana and Trello (`product/overview.md`), and ClickUp already sells its own notetaker that "turn[s] action items into assigned tasks" (clickup.com/brain/ai-notetaker). Lead with Asana and Trello in targeting and in the hook ("Your client said it on the call. Did it make it into Asana?"), and keep ClickUp out of the copy until the integration is confirmed. |
| **Intent audience #4:** note-taker switchers on Google ("Otter alternative") | **Challenge, keep small** | Searchers for "Otter alternative" are mostly individuals comparing per-seat note-takers, and the free options are strong (Fathom "Free forever", Fireflies free voice). The comparison results are already crowded with vendor pages (tl;dv, MeetGeek, Scribbl and Carly comparison posts seen in this run's searches). Octo's offer is a team pilot with no self-serve or price, so intent and offer do not match well. Bid on task-intent terms already in the plan ("meeting notes to tasks", "AI meeting assistant that creates tasks", "action items to Asana") over competitor-brand terms, and never claim rivals cannot speak (brief, "Do not say"). |
| **Retargeting #6 always on** | **Confirm, but expect a small pool** | A launch page with no history builds a small audience in a short test; spend the early Meta money on 9:16 demo video views to build the pool, then retarget viewers. |
| **Tested alternative #2:** startup product leads on Jira / Linear | **Challenge: do not spend on it yet** | Jira and Linear support is unconfirmed (product-scout gap 4), and this is the most crowded segment: Atlassian Rovo can "Create work items, update work items", Teams Facilitator can "create, update, or query for tasks", and Mina pitches "standups & sprint reviews". Hold until the integration works end to end. |
| **Tested alternative #3:** founder-led SMBs, 2 to 50 | **Confirm as the test cell** | Same trackers Octo supports (Trello, Notion, Asana typical [ASSUMED]), founder is buyer and user, no IT gate. Risk: price sensitivity against free note-takers. Best use of the test budget. |
| **Tested alternative #5:** ops at remote-first companies, 50 to 200 | **Challenge: later** | Larger companies are where IT approves the platform's own AI and blocks third-party bots (see Backlash: Cornell, Notre Dame, Cambridge and others name Zoom AI Companion or Copilot as the approved tool). Higher willingness to pay, slower path. |
| **Offer:** early access, Octo set up on the team's calls with their tracker, free pilot, CTA "Get early access" / book a demo | **Confirm** | Same as this study's main offer. Two additions: (1) ask two qualifying questions on the form (which tracker, which call platforms), so the pilot list also answers the ICP question; (2) say in the offer that guests on Octo calls always get their own tasks free, which is the loop. Keep "no public price" until Oleksii agrees; the post-pilot team price can be anchored at what a 15-person team pays for notes alone today ($225 to $300 per month, Pricing models section). |
| **€1,000 split:** LinkedIn 400, Meta 250, Google 200, test 150 | **Adjust lightly** | LinkedIn benchmarks: Metadata's 2025 figure is "$9.39 per click" and "$202 per lead" for B2B advertisers (via https://www.digitalapplied.com/blog/linkedin-ads-benchmarks-2026-cpc-ctr-cvr-industry, snippet, 3p compilation of platform data). At that rate €400 buys roughly 40 clicks and about 2 leads (approximate, ignores EUR/USD). That is still the only channel that targets title plus company size 11 to 50, and a done-with-you pilot needs only a handful of qualified teams, so **keep LinkedIn at 400**. **Meta 250: keep**, mostly 9:16 demo views then retargeting. **Google 200 to 150** on task-intent keywords only, for the intent mismatch above. **Test 150 to 200**, spent on audience #3 (founder-led SMBs) with the hook "The PM who never misses a follow-up", not on #2 (blocked by integration) or Reddit. One metric per channel: LinkedIn cost per pilot request, Meta cost per 50% video view then per retargeted request, Google cost per pilot request, test cell pilot requests vs #1. |

**Net:** the founder's plan holds. Change the tracker named in targeting and hooks from ClickUp to Asana / Trello, shrink "Otter alternative" to task-intent search, and spend the test money on founder-led SMBs, not Jira / Linear teams.

## Open questions

1. Which trackers does Octo create AND later update tasks in today: Asana, Notion, Trello confirmed by the team; ClickUp, Jira, Linear unknown.
2. Does Octo's full loop (join, speak, DM, tracker update) work on Slack Huddles, Webex and GoTo, or only joining? Fathom already claims Slack.
3. Octo's cost per call hour (bot, speech, model), which sets the floor for any free offer.
4. Consent design: what does a guest see and hear when Octo joins, and can a guest remove it? Needed before any public "every guest sees Octo" campaign, given the Otter and Granola suits.
5. Does Mina actually update tickets from a later call? Only its Product Hunt page was read.
6. Does Teams Facilitator update a task created in an earlier meeting? The page says "tasks related to that meeting".
7. Asana, monday.com and Linear meeting features: not checked this run.
8. Otter's $100M ARR (BusinessWire blocked) and the Fathom "100k sign-ups from Zoom" claim: not re-verified.

## Sources

Fetched today (2026-11-08) unless marked snippet.

Vendor pricing and product pages
1. https://otter.ai/pricing (vendor)
2. https://fireflies.ai/pricing (vendor)
3. https://www.fathom.ai/pricing (vendor)
4. https://www.read.ai/plans-pricing (vendor)
5. https://www.granola.ai/pricing (vendor)
6. https://fellow.ai/pricing (vendor)
7. https://www.avoma.com/pricing (vendor)
8. https://meetgeek.ai/pricing (vendor)
9. https://www.recall.ai/pricing (vendor)
10. https://tldv.io/pricing/ (fetched, no price text rendered)
11. https://www.zoom.com/en/products/ai-assistant/ (vendor; price via product-scout capture)
12. https://www.notion.com/pricing (vendor)
13. https://support.microsoft.com/en-us/teams/copilot/facilitator-in-microsoft-teams-meetings (vendor)
14. https://www.recall.ai/blog/launching-output-media (vendor)
15. https://clickup.com/brain/ai-notetaker (vendor, search excerpt; clickup.com/ai/notetaker returned 403)
16. https://clickup.canny.io/ai-notetaker (user feedback board, search excerpt)
17. https://www.atlassian.com/software/jira/ai (vendor, search excerpt)
18. https://www.fathom.ai/overview (vendor, search excerpt)
19. https://tldv.io/ (vendor, snippet)
20. https://www.producthunt.com/products/mina-meeting-assistant (vendor launch page)

Company numbers and press
21. https://fireflies.ai/blog/fireflies-1-billion-valuation (vendor, June 12, 2025)
22. https://founderpath.com/resources/richard-white-fathom-free-ai-notetaker-30m-arr (3p, May 21, 2026)
23. https://techcrunch.com/2024/10/28/read-ai-raises-50m-to-integrate-its-bot-with-slack-email-and-more/ (press, Oct 28, 2024)
24. https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/ (press, March 25, 2026)
25. https://www.granola.ai/blog/series-c (vendor, snippet)
26. https://www.businesswire.com/news/home/20250325249430/en/Otter.ai-Breaks-$100M-ARR-Barrier-and-Transforms-Business-Meetings-Launching-Industry-First-AI-Meeting-Agent-Suite (blocked, 403)
27. https://www.linkedin.com/posts/rrwhite_im-thrilled-to-announce-that-fathom-has-activity-7242540804920012801-6ubj (snippet)
28. https://www.reddit.com/r/Office365/comments/1ij4qtk/why_is_readai_requesting_these_ludicrous/ (snippet)

Market size and adoption
29. https://market.us/report/ai-meeting-assistant-market/ (snippet)
30. https://www.precedenceresearch.com/ai-in-meeting-assistants-market (snippet)
31. https://natlawreview.com/press-releases/artificial-intelligence-ai-powered-meeting-assistants-market-projected-reach (paid press release, snippet)
32. https://www.marketresearchfuture.com/reports/us-ai-meeting-assistants-market-15398 (snippet, discarded)
33. https://fellow.ai/blog/ai-notetaker-statistics/ (vendor-funded survey)
34. https://www.laxis.com/blog/state-of-meeting-note-taking-2026/ (vendor-funded, snippet)
35. https://www.federalreserve.gov/econres/notes/feds-notes/monitoring-ai-adoption-in-the-u-s-economy-20260403.html (snippet)
36. https://www.uschamberfoundation.org/workforce/half-of-small-business-workers-use-ai-most-to-boost-productivity-not-automate-jobs (snippet)
37. https://news.microsoft.com/de-ch/2025/06/17/new-microsoft-study-reveals-the-rise-of-the-infinite-workday-40-of-employees-check-email-before-6-a-m-evening-meetings-up-16/ (snippet)
38. https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday (snippet)

Backlash and trust
39. https://www.sally.io/blog/otter-ai-class-action-lawsuit (3p, competing vendor, snippet)
40. https://www.bairdholm.com/blog/core-privacy-claims-against-ai-note-taking-platform-survive-dismissal/ (3p, law firm, snippet)
41. https://www.fisherphillips.com/en/insights/insights/new-lawsuit-highlights-concerns-about-ai-notetakers (3p, law firm, snippet)
42. https://medium.com/@ayeshha2398/ai-notetakers-are-being-sued-for-wiretapping-your-meetings-cef1f8751e3a (3p, low reliability, snippet)
43. https://gettrippi.app/notes/en/ai-notetaker-bans/ (3p compilation with primary links, snippet)

Channel benchmarks
44. https://www.digitalapplied.com/blog/linkedin-ads-benchmarks-2026-cpc-ctr-cvr-industry (3p compilation citing Metadata, Dreamdata, HockeyStack platform data, snippet)

Upstream team files
45. `../../market/landscape.md`, `../../launch/hypotheses.md`, `../../launch/hackathon-plan.md`, `../../launch/audiences.md`, `../../product/overview.md`, `outputs/research/product-scout.md`, `brief/campaign-brief.md`
