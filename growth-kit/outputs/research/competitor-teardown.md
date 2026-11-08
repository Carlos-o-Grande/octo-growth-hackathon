# Competitor Teardown: 2026-11-08

Product: Octo (AI teammate that joins calls, speaks when called, sends per-person tasks, updates the team's tracker). Source of truth: `brief/campaign-brief.md`. Deliverable language: English.

## Scope (who, why chosen, what could not be checked)

**Who.** The 3 competitors listed in the brief, as confirmed by the team: Fireflies, Otter, ZoomMate. Plus a short extra block on Fathom and Read.ai (positioning, entry price, growth motion only), because the team is deciding whether this market is B2C/prosumer or B2B.

**Why these.** The brief names them as the main alternatives. Fireflies and Otter already ship voice on a wake word. Fireflies and ZoomMate both sell "AI teammate". All three are priced per seat.

**Checked 2026-11-08 (live fetch, maxAge 0):** homepage and pricing page of Fireflies, Otter, Fathom, Read.ai; ZoomMate product page (which carries its pricing). Review snippets from G2, Trustpilot, TrustRadius, Reddit and review roundups via Firecrawl search.

**Could not check or skipped:**
- **Meta Ad Library and Google Ads Transparency Center: not checked for all 5 brands.** Both need a browser session. Links are built below. Active ad counts, hooks and landing URLs are unknown.
- **Customer or case-study page per competitor: not fetched** (timebox). Proof below comes from homepages only.
- **Direct reads of G2, Capterra, Trustpilot and Reddit pages: not done for quoting.** Quotes below are taken from search excerpts or third-party roundups, and each carries the URL where the text was seen. Quotes marked "via" should be verified on the original page before they go in an asset. Reddit returned 403 in the earlier scout run.
- **ZoomMate reviews are thin.** The product launched in June 2026. No Reddit thread or G2 or Capterra page about ZoomMate was found. Only TrustRadius and trade press.
- Fathom and Read.ai pages were read with a quote-extraction pass, not full markdown. Plan names for Read.ai and one Fathom plan were not captured.
- **Conflict with prior notes:** `market/landscape.md` lists Read.ai Pro at $15 / $19.75. The live page shows four prices: $15, $22.50, $29.75 (all per user per month billed annually) and $0. Plan-to-price mapping for $22.50 and $29.75 not captured. Use the live page, not the old note.

## Profiles

### Fireflies

| Field | Finding |
|---|---|
| Positioning line | H1: "The #1 AI Assistant For Your Meetings". Subhead: "Transcribe, summarize, search, and analyze all your team conversations." Page title: "Fireflies.ai \| #1 AI Teammate for Meetings, Email, Chat & CRM". (https://fireflies.ai/) |
| Who the homepage speaks to | Teams first ("all your team conversations", "your team needs to get done"), then enterprise ("preferred platform for CIOs across the Fortune 500"), then job-role verticals led by Sales (Sales, Recruiting, Marketing, User Research, Engineering, Finance, Healthcare, Media, VC). Not individual-first copy. (https://fireflies.ai/) |
| Sign-up path | Free self-serve: "Get Started" goes to app login; closing CTA "Try Fireflies For Free". Secondary "Request Demo". Enterprise tier is "Contact Us". Free plan is "Free forever". (https://fireflies.ai/, https://fireflies.ai/pricing) |
| Pricing and packaging | Free $0 ("Free forever"). Pro $10 per seat / month billed annually ($18 monthly). Business $19 per seat / month billed annually ($29 monthly), tagged "MOST POPULAR". Enterprise $39 per seat / month, "ANNUAL ONLY", "Contact Us". Value metric: per seat, plus a pooled AI credit allowance (20 / 20 / 30 / 50 credits by tier) and storage (400 min per team Free, 8,000 min per seat Pro, unlimited above). Gates: Voice Agents, AI Skills, video recording from Pro; conversation intelligence and team analytics from Business; SSO, SCIM, HIPAA from Enterprise. (https://fireflies.ai/pricing) |
| Proof they use | "USED ACROSS 1 MILLION+ COMPANIES"; "Rated 4.8 / 5" (G2); "95% Accurate"; "100+ Languages"; SOC 2 Type II, ISO 42001, HIPAA, GDPR; logos (Assembly AI, Emaar, Leonardo AI, Penn); founder testimonials (PR Labs, Flock, Clara, Phyllo), e.g. "Fireflies cuts down on additional calls with customers, letting us focus directly on solutions." (https://fireflies.ai/) |
| Homepage hierarchy | H1 "The #1 AI Assistant For Your Meetings" > subhead > CTAs "Get Started" / "Request Demo" > G2 4.8 + logos > transcription and recording > AI summaries > capture options (bot, Chrome extension, mobile, desktop, dialers) > search and AskFred > Live Assist > conversation intelligence > Tasks, Contacts, Feed > 200+ AI Skills > MCP. (https://fireflies.ai/) |
| Voice in calls | "Meet the new Live Assist that can provide real-time suggestions, coaching, and answers during your meetings." Voice Agents listed on Pro. "Hey Fireflies" is free on Meet, Zoom, Teams per the help guide. (https://fireflies.ai/, https://fireflies.ai/pricing, https://guide.fireflies.ai/articles/8186888414-talk-to-fireflies-in-live-meetings) |
| Tracker claim | Integrations block: "Project Management: Create tasks automatically after every meeting" (Asana, Trello, 9+). Creating tasks is claimed. Updating them later when someone says "done" is not claimed on the page. (https://fireflies.ai/) |
| Active ads | Not checked. Meta: https://www.facebook.com/ads/library/?q=fireflies&ad_type=all&country=ALL . Google: https://adstransparency.google.com/?region=anywhere (search fireflies.ai). |
| Review complaints | See below. |

Complaints (top 3, repeated across sources):
1. **Bot auto-joins by default.** "The bot's auto-join behavior can feel pretty aggressive by default. If you're not extremely careful with your calendar permissions and your Fireflies dashboard settings, it may end up joining private 1-on-1s meetings uninvited, which can be awkward." (G2, Denis M., via https://www.lindy.ai/blog/fireflies-ai-review). Also a Capterra reviewer on "aggressive default settings (e.g., auto-joining meetings)" (via https://www.eesel.ai/blog/fireflies-ai-review).
2. **Wrong speaker and wrong owner on actions.** "Resulting notes were inaccurate in terms of who said what and actions were incorrectly attributed. Very poor." (Trustpilot, Brian King, via https://www.lindy.ai/blog/fireflies-ai-review, original https://www.trustpilot.com/reviews/6ab61fc618896fcc13745eb7).
3. **Metered AI credits.** Reviewer roundups report credits "running out fast" and a pool shared by the whole team (paraphrase, not a verbatim review quote). (https://www.eesel.ai/blog/fireflies-ai-review, https://wisprflow.ai/notetaker/otter-vs-fireflies-how-the-ai-notetakers-compare). Also a failed-capture complaint: "Fireflies failed to record six important meetings." (Trustpilot, Gertjan, via https://www.eesel.ai/blog/fireflies-ai-review).

Rating context: Trustpilot 4.5 from 886 reviews (https://www.trustpilot.com/review/fireflies.ai?page=2).

### Otter

| Field | Finding |
|---|---|
| Positioning line | H1: "Your AI notetaker is now also your Conversational Knowledge Engine". Subhead: "Otter transcribes every meeting, turning it into searchable knowledge that powers your workflow." Section: "Before, during, and after every meeting." Closing line: "The world's only Conversational Knowledge Engine". (https://otter.ai/) |
| Who the homepage speaks to | Individuals and teams, with use-case tabs Sales, Education, Media. Pricing page: "plans for individuals, teams, organizations, and enterprises". Enterprise security and an MCP server for Claude and ChatGPT. Testimonials are from a VC, a sales VP, a solutions head. (https://otter.ai/, https://otter.ai/pricing) |
| Sign-up path | Free self-serve ("Start for free" to /signup, plan "Free forever"). Business shows "7-day free trial included". Enterprise is "Contact sales" / "Schedule demo". (https://otter.ai/) |
| Pricing and packaging | Basic: Free. Pro: $8.33 per user / month billed annually, $16.99 monthly. Business: $19.99 annual, $30 monthly. Enterprise: custom pricing, not public. Value metric: per user, with transcription-minute caps (Basic 300 min per user per month, 30 min per conversation; Pro 1,200 min, 90 min per meeting; Business unlimited meetings, 4 hours per meeting) and workspace size (Basic and Pro up to 5 members, Business up to 25). SSO and SCIM need a 100-user minimum. (https://otter.ai/pricing) |
| Proof they use | Testimonials: "Otter is a must-have. Just being conservative - our team is getting 33% time back." (Laura Brown, VP Sales, Aiden Technologies); Tim Draper; Tony Robbins "The most accurate app out there"; "4+ Hours saved per week"; WSJ mention; logos (Salesforce, Harvard, NBC Universal, Amazon, IBM, Walgreens, Mastercard). (https://otter.ai/) |
| Homepage hierarchy | H1 > subhead > "Start for free" / "Schedule demo" > 3 testimonials + logos > "Before, during, and after every meeting" (capture, pre-call briefings, Ask Otter, Live-Assist coaching, action items, CRM) > "Like having your own executive assistant" > use cases > integrations (Zoom, Meet, Slack, Asana, Jira, Notion, Salesforce, HubSpot, Claude) > plans. (https://otter.ai/) |
| Tracker claim | "Automate the action items: Clear next steps are automatically captured and assigned from every meeting." Asana and Jira listed. (https://otter.ai/) |
| Active ads | Not checked. Meta: https://www.facebook.com/ads/library/?q=otter.ai&ad_type=all&country=ALL . Google: https://adstransparency.google.com/?region=anywhere (search otter.ai). |

Complaints (top 3):
1. **Bot joins and shares transcripts without clear consent.** "Otter AI is seriously intrusive and I have no idea who now has access to a private meeting that I ensured all was NOT being recorded." (Reddit r/projectmanagement, search excerpt) https://www.reddit.com/r/projectmanagement/comments/1j0cfei/do_not_join_otterai_unless_you_want_your_whole/
2. **Plan limits hidden.** "the limitations to the upgrades were hidden and not made obvious." (Trustpilot, via https://wisprflow.ai/notetaker/otter-vs-fireflies-how-the-ai-notetakers-compare, original https://www.trustpilot.com/reviews/6ad01380f037dc5d7bba753f). Free plan: "30 minutes per conversation and around 300 minutes per month" (G2 reviewer, https://www.g2.com/products/otter-ai/reviews).
3. **Accuracy on jargon, accents, speakers.** "transcription accuracy drops considerably when handling specialized industry terminology or strong non-native accents, requiring extra post-meeting editing." (G2, Rex W., https://www.g2.com/products/otter-ai/reviews). Also a team that "outgrew it" and switched to Fathom for "weak action item detection" (Capterra, via https://tldv.io/blog/otter-ai-review/).

Rating context: Trustpilot 4.2 from 757 reviews (https://www.trustpilot.com/review/otter.ai?page=7).

### ZoomMate (Zoom)

| Field | Finding |
|---|---|
| Positioning line | H1: "Meet ZoomMate, your AI teammate". Subhead: "ZoomMate analyzes, learns, and acts on your conversations to complete your work." Section: "ZoomMate Conversation to Completion". (https://www.zoom.com/en/products/ai-assistant/) |
| Who the homepage speaks to | Existing Zoom Workplace organisations and knowledge workers (meetings, daily briefings, incident resolution, project management use cases). Pre-built agents for "Sales, IT, Marketing, Finance". Page ends with a lead form asking employee count and industry, so mid-market and enterprise are the sales target. (https://www.zoom.com/en/products/ai-assistant/) |
| Sign-up path | Mixed. "Buy now" and "Try it now" for the paid plan; "Sign up free" for ZoomMate Basic (comes with a free Zoom account); enterprise lead form. Needs Zoom Workplace. (https://www.zoom.com/en/products/ai-assistant/) |
| Pricing and packaging | "ZoomMate plans starting at $20 /month/user". ZoomMate Basic: Free, limited (3 hosted meetings per month for summaries and in-meeting questions, 20 AI queries per month, 10 workflow runs per month). ZoomMate: $16.67 per user / month billed annually, $20 billed monthly, "includes 2,200 AI credits". Credit ceiling up to 11,500 per user per month per Zoom's pricing page. Value metric: per user plus metered AI credits. No enterprise price shown (not public). (https://www.zoom.com/en/products/ai-assistant/, https://zoom.us/pricing/aic) |
| Proof they use | No logos or numbers on the page. Proof is the Zoom brand and a feature list. After the meeting: "ZoomMate automates meeting tasks like Salesforce updates, follow-up emails, and drafting decks." (https://www.zoom.com/en/products/ai-assistant/) |
| Homepage hierarchy | H1 > subhead > price "$20 /month/user" > "Buy now" / "Try it now" > 3 value cards (Find what you need, Move work forward, Uplevel your output) > capabilities tabs (delegate tasks, agents, workflows, agentic search, productivity suite) > use cases (meetings first) > resources > pricing table > lead form > FAQ. (https://www.zoom.com/en/products/ai-assistant/) |
| Third-party coverage | "My Notes captures insights from your conversations on Zoom, in-person, on mobile, and across third-party platforms". So "ZoomMate only works inside Zoom" is not a safe claim for note-taking. (https://www.zoom.com/en/products/ai-assistant/) |
| Active ads | Not checked. Meta: https://www.facebook.com/ads/library/?q=zoommate&ad_type=all&country=ALL . Google: https://adstransparency.google.com/?region=anywhere (search zoom.com / zoommate). |

Complaints (top 3, TrustRadius and trade press only, thin):
1. **Isolated meetings, weak cross-meeting memory.** "While the AI Companion is great at summarizing a single meeting, it still struggles with cross-meeting intelligence. It often treats every meeting as an isolated event." (TrustRadius, reviewing the product ZoomMate replaced) https://www.trustradius.com/products/zoommate/reviews
2. **Limited third-party integrations.** "Limited third-party integrations." (TrustRadius) https://www.trustradius.com/products/zoommate/reviews
3. **Metered credits.** "most of the ZoomMate capabilities are 'metered' and consume credits" (NoJitter, search excerpt) https://www.nojitter.com/digital-workplace/how-zoommate-succeeds-zoom-s-custom-ai-companion . Also "Zoom is moving toward being an all-in-one suite, which creates friction for companies that only want pieces of it." (TrustRadius). G2 and Capterra for ZoomMate: not checked.

## Extra block: Fathom and Read.ai (positioning, entry price, growth motion only)

| | Fathom | Read.ai |
|---|---|---|
| Positioning line | "AI notetaking that is out of this world". Subhead: "Fathom summarizes your meetings so you can focus on the conversation. Now available bot-free." (https://www.fathom.ai/) | H1: "Meetings In, Decisions Out". Subhead: "Every meeting should have outcomes. Read AI turns meetings into outcomes. Summaries with context from your email and calendar, and AI agents that recommend what happens next." (https://www.read.ai/) |
| Who the homepage speaks to | Both, in tabs: "Whether you're a team of 1 or 1,000, Fathom's got your back" with "Fathom for teams" and "Fathom for individuals". Sales-leaning CRM line: "updates your CRM, while you handle the close." (https://www.fathom.ai/) | Individuals and teams, enterprise via sales. Pricing: "For individuals starting out", "For individuals and small teams", "For larger teams and organizations who need security and controls for scale." (https://www.read.ai/, https://www.read.ai/plans-pricing) |
| Sign-up path | Free self-serve ("Get started - free forever", "SIGN UP FREE"). Paid plans "start free trial". "Book a Demo" in nav. Paid plans back a 90-day money-back guarantee. (https://www.fathom.ai/, https://www.fathom.ai/pricing) | Free self-serve: "Get Started for Free", "5 free meetings / month", "Always free, no credit card required". Enterprise: "Talk to sales". (https://www.read.ai/, https://www.read.ai/plans-pricing) |
| Price entry | Free; paid from $15 per user / month (annual) or $19 (monthly); next tier $25 annual / $34 monthly, "2 user min". Plan names not fully captured. (https://www.fathom.ai/pricing) | Free $0; first paid $15 per user / month billed annually; then $22.50 and $29.75. Plan names not captured. (https://www.read.ai/plans-pricing) |
| Growth motion | Free-forever tier with unlimited recordings is the hook ("Used at 500K+ companies"); retention first, per earlier notes. (https://www.fathom.ai/, `market/landscape.md` sources 7 and 8) | Free tier capped at 5 meetings, with a report auto-shared to every participant as the viral loop per earlier notes; "Everyone in the meeting knows Read is there". (https://www.read.ai/, `market/landscape.md` sources 9 and 10) |
| Ads | Not checked. https://www.facebook.com/ads/library/?q=fathom.ai&ad_type=all&country=ALL | Not checked. https://www.facebook.com/ads/library/?q=read.ai&ad_type=all&country=ALL |

## Comparison table

All cells carry the source in the profile blocks above. Prices are USD, as displayed.

| Row | Fireflies | Otter | ZoomMate | Fathom | Read.ai |
|---|---|---|---|---|---|
| Positioning | "The #1 AI Assistant For Your Meetings" | "...Conversational Knowledge Engine" | "your AI teammate" | "AI notetaking that is out of this world" | "Meetings In, Decisions Out" |
| Homepage speaks to | Teams, enterprise, sales and recruiting roles | Individuals and teams; sales, education, media | Zoom organisations, mid-market and enterprise | Teams and individuals, sales-leaning | Individuals and teams |
| Sign-up path | Free self-serve; demo for enterprise | Free self-serve; 7-day trial on Business; demo for enterprise | Free Basic with Zoom account; buy or try; sales form | Free forever; trial on paid; demo link | Free, no card; sales for enterprise |
| Promise headline | Transcribe, summarize, search, analyze team conversations | Searchable meeting knowledge that powers workflow | Conversations become completed deliverables | Summaries so you can focus; now bot-free | Summaries with email and calendar context, agents recommend next steps |
| Price entry | Free; Pro $10 annual / $18 monthly | Free; Pro $8.33 annual / $16.99 monthly | Free Basic; $16.67 annual / $20 monthly | Free; from $15 annual / $19 monthly | Free; from $15 annual |
| Price mid | Business $19 annual / $29 monthly | Business $19.99 annual / $30 monthly | Credits up to 11,500 per user (price not captured) | $25 annual / $34 monthly (2 user min) | $22.50 annual |
| Price top | Enterprise $39 annual only | Enterprise custom, not public | Not public (lead form) | Not captured | $29.75 annual |
| Value metric | Seat + pooled AI credits + storage | User + minute caps + workspace size | User + metered AI credits | User | User + meeting count on Free |
| Proof | 1M+ companies, G2 4.8, SOC 2, logos | Celebrity and exec quotes, "33% time back", logos | Zoom brand only, no numbers | "500K+ companies", "6+ hours saved" | "fastest growing" claim, integrations |
| Ads | Not checked | Not checked | Not checked | Not checked | Not checked |
| Top complaint | Bot auto-joins; credits | Bot shares without consent; limits | Credits; isolated meetings (thin) | Not researched | Not researched |
| Weakness | Speaks via a bot, credits pooled; tracker updates not claimed | Meetings capped; tracker still manual per reviewers | Needs Zoom Workplace; evidence thin | Notes-first, tracker unclear | Notes-first |

**Read for the B2C or B2B question.** All five lead with a free self-serve plan and a per-seat upgrade, with enterprise behind "Contact sales" or a demo. That is a bottom-up motion: individual or small team signs up free, team seats follow, enterprise comes last. Homepage copy leans to teams (Fireflies, ZoomMate) or both (Otter, Fathom, Read.ai). The category is prosumer-led B2B, not pure B2C. Octo has no self-serve and no price today (brief, "Do not say"), so it cannot copy this motion yet. That is an inference from the pages, not a market-size finding.

## 3 exploitable gaps

**Gap 1. The loop after the call is still the buyer's job.**
- Evidence: every competitor sells creating action items or tasks. Fireflies: "Create tasks automatically after every meeting" (https://fireflies.ai/). Otter: "Clear next steps are automatically captured and assigned from every meeting." (https://otter.ai/). ZoomMate: "automates meeting tasks like Salesforce updates, follow-up emails, and drafting decks." (https://www.zoom.com/en/products/ai-assistant/). None of the three pages claims updating a task when someone later says "done". Buyers describe the gap: "It dies in the doc that its placed in" (https://www.reddit.com/r/SaaS/comments/1xcdvqv/do_you_actually_use_action_items_generated_from/, search snippet, unverified), and an Otter team that "outgrew it" for "weak action item detection" (https://tldv.io/blog/otter-ai-review/).
- Caveat: absence on a marketing page is not proof the feature is missing. Check the Fireflies task manager and Otter Asana flow in a trial before the claim goes public.
- Move: a landing section and one ad pair built on "tasks that update themselves": show a task created on Monday's call closing when someone says "done" on Thursday's, in the tracker. Keep the live-demo moment (tasks by owner on its tile) as the proof.

**Gap 2. Presence by invitation, with each person getting only their own tasks.**
- Evidence: the loudest repeated complaint across Fireflies and Otter is a bot that shows up or shares without a clear yes. Fireflies: "may end up joining private 1-on-1s meetings uninvited, which can be awkward." (via https://www.lindy.ai/blog/fireflies-ai-review). Otter: "I have no idea who now has access to a private meeting that I ensured all was NOT being recorded." (https://www.reddit.com/r/projectmanagement/comments/1j0cfei/do_not_join_otterai_unless_you_want_your_whole/). Octo's design in the brief: addressed by name, per-person task DMs with the exact quote, reduced client mode when a guest joins.
- Caveat: Octo is also a bot in the call. Confirm with Oleksii how it gets invited, what it records, and what consent notice it shows before using any "no surprise" wording.
- Move: copy and a landing section titled around "joins when you invite it, tells each person only their tasks". Fits agencies with client calls, where the Otter complaint "Clients ask what it is and some are uncomfortable" (via https://owll.ai/blog/otter-ai-review, unverified source) bites hardest.

**Gap 3. Nobody speaks to the agency ops or delivery lead on mixed platforms.**
- Evidence: Fireflies leads its role tabs with Sales, then Recruiting, Marketing (https://fireflies.ai/). Otter's use cases are Sales, Education, Media (https://otter.ai/). ZoomMate's pre-built agents are "Sales, IT, Marketing, Finance" and it sits inside Zoom Workplace (https://www.zoom.com/en/products/ai-assistant/). Fathom leans to CRM and sales ("updates your CRM, while you handle the close.", https://www.fathom.ai/). Read.ai is generic. No homepage targets operations or delivery leads who live in ClickUp, Asana or Trello, and none claims Slack Huddles, Webex or GoTo coverage on the pages fetched.
- Move: an ICP-specific hero for the landing page: "For agencies and studios that run client calls on whatever platform the client picked", with the tracker logos (ClickUp, Asana, Trello) above the fold. Make the second ad set the same line. Test the audience with buyers, since the ICP is [ASSUMED] in the brief.

## Claims we must not copy

- **"#1", "the world's only", "the world's smartest", "industry leader"**: Fireflies ("The #1 AI Assistant"), Otter ("The world's only Conversational Knowledge Engine"). Superlatives we cannot prove. (https://fireflies.ai/, https://otter.ai/)
- **"AI teammate" as the headline**: Fireflies and ZoomMate own it. The brief already says not to lead with it.
- **"Otter and Fireflies can't talk in calls"**: false. Both ship voice. (brief, https://guide.fireflies.ai/articles/8186888414-talk-to-fireflies-in-live-meetings)
- **"ZoomMate only works inside Zoom"**: its notes cover third-party platforms per its own page.
- **"No competitor updates your tracker"**: not verified. Say what Octo does, not what rivals lack, until a trial confirms.
- **Numbers like "95% accurate", "1 million+ companies", "500K+ companies", "33% time back", "38-minutes per meeting", "6+ hours saved"**: self-reported by others, and we have no Octo numbers. The brief has no external user or usage figure.
- **"Free forever", "no credit card", any price or self-serve claim**: Octo has none yet (brief, "Do not say").
- **Enterprise-grade security, SOC 2, HIPAA, GDPR badges**: we have no certification evidence in the brief.
- **Customer names or quotes from Octocrew's marketing-agent case studies** as Octo proof (brief, Proof 4).
- **Review ratings of rivals** (Fireflies 4.8 on G2, Trustpilot 4.5, Otter 4.2): do not use in comparison ads. Platform rules and accuracy risk. Ratings above came from search excerpts.

## Rival's reply

**Inference, not fact.** Strongest competitor: Fireflies. It already has voice (free), a task manager, an MCP server, a free tier, per-seat pricing and a bot loop with a huge installed base. The moves below are reasoned guesses from what it already ships. No competitor plan is known.

| Likely move within 2 weeks | Why it is plausible | Our counter |
|---|---|---|
| 1. Feature post or changelog: "Fireflies now updates your tasks from later meetings" (tracker sync, or a Live Assist task update). | It already sells "Tasks" and "Create tasks automatically", and ships frequently. | Lead with the proof, not the claim. Show the live demo of a task closing on a later call across six platforms, with the exact quote DM. Stay on the cross-platform and per-person angle, which a bot tied to a calendar flow is slower to copy. |
| 2. Ad or email push to agencies and ops teams, with a "switch from [rival]" offer. | The free plan and "Try Fireflies For Free" make a free trial cheap to push, and it has a verticals tab. | Do not fight on price. Offer a done-with-you first call (the brief says Octo is offered via Octocrew's implementation work). Counter with the agency-specific landing from Gap 3. |
| 3. Trust and privacy message: "no uninvited bot", a settings change to default auto-join off. | Auto-join is its most repeated complaint, and it has a Chrome extension "without Fireflies bot". | Keep Gap 2 on consent and per-person tasks, which a default toggle does not match. Be ready with our own consent behavior stated plainly, once confirmed with Oleksii. |

## Sources

Fetched live 2026-11-08:
- https://fireflies.ai/
- https://fireflies.ai/pricing
- https://otter.ai/
- https://otter.ai/pricing
- https://www.zoom.com/en/products/ai-assistant/
- https://fathom.ai/ (served as https://www.fathom.ai/, quote extraction)
- https://fathom.ai/pricing (quote extraction)
- https://www.read.ai/ (quote extraction)
- https://www.read.ai/plans-pricing (quote extraction)

Search excerpts (read in results, not fetched in full):
- https://www.eesel.ai/blog/fireflies-ai-review
- https://www.lindy.ai/blog/fireflies-ai-review
- https://wisprflow.ai/notetaker/otter-vs-fireflies-how-the-ai-notetakers-compare
- https://www.trustpilot.com/review/fireflies.ai?page=2
- https://www.trustpilot.com/review/otter.ai?page=7
- https://meetergo.com/en/magazine/fireflies-reviews
- https://www.g2.com/products/otter-ai/reviews
- https://www.reddit.com/r/projectmanagement/comments/1j0cfei/do_not_join_otterai_unless_you_want_your_whole/
- https://tldv.io/blog/otter-ai-review/
- https://owll.ai/blog/otter-ai-review
- https://www.eesel.ai/blog/otter-ai-reviews
- https://zoom.us/pricing/aic
- https://www.trustradius.com/products/zoommate/reviews
- https://www.nojitter.com/digital-workplace/how-zoommate-succeeds-zoom-s-custom-ai-companion
- https://tldv.io/blog/zoom-pricing/
- https://www.reddit.com/r/SaaS/comments/1xcdvqv/do_you_actually_use_action_items_generated_from/ (from product-scout, snippet only)

Files read: `AGENTS.md`, `.github/agents/competitor-teardown.agent.md`, `brief/campaign-brief.md`, `outputs/research/product-scout.md`, `market/landscape.md` (repo root). No `data/` files (folder empty).

Ad library links built, none loaded: Meta https://www.facebook.com/ads/library/?q=<brand>&ad_type=all&country=ALL for fireflies, otter.ai, zoommate, fathom.ai, read.ai; Google https://adstransparency.google.com/?region=anywhere

## Addendum: Sembly (added 2026-11-08, flagged by the team as a direct competitor)

Fetched live 2026-11-08: https://www.sembly.ai/ and https://www.sembly.ai/pricing/ (both 200).

| Field | Sembly |
|---|---|
| Positioning line | "Meetings, minus the busywork." "Sembly is the AI meeting agent that runs all workflow stages from the first meeting to the last deliverable." Page title: "AI Meeting Agent for Professional Services" |
| ICP | "client-facing teams", "five professional services verticals"; per-client workspaces ("A client is a dedicated space inside your workspace that holds one customer's context, meetings, and knowledge") |
| What it does | "joins scheduled Zoom, Google Meet, Microsoft Teams, and Webex meetings"; "captures meetings you can't join with proxy attendance"; "tasks with owners and deadlines"; "Ask Sembly add a task or a decision during the meeting"; generates "client proposals, consulting reports, project change requests, and pitch decks" as .pptx and .docx in the client's brand; 45+ languages, "Mixed-language meetings" |
| Pricing | Free $0 (1 meeting hour); Basic "$10 per month, billed annually" (1 user, $14 monthly); Pro "$20 per user / month, billed annually" ($29 monthly); MAX "$30 per user / month" annual ($39 monthly, min 3 users); Enterprise custom (min 10). "Start 7-day free trial" on every paid plan |
| Consent | "Notification and consent tracking" on Pro and above |
| Sign-up path | Self-serve, sign up "with-calendar"; "Book a Demo" for enterprise |

**Why it matters:** Sembly aims at the same buyer (agencies and consultancies running client calls), already uses "AI meeting agent", auto-joins from the calendar, offers a self-serve 7-day trial and handles mixed-language calls, which overlaps with the team's translation idea for the sales copilot.

**Where Octo still differs (from the pages fetched):** Sembly's page does not claim that it answers by voice or shows answers on its own video tile, that it updates a task in the team's tracker when someone says "done" on a later call, that it sends each person only their own tasks by DM with the quote, or that it works on Slack Huddles or GoTo. Absence on a page is not proof; trial it before using any comparison in copy.

**Where Sembly is ahead:** branded client deliverables (proposals, decks), 45+ languages and mixed-language meetings, public prices, self-serve trial, SOC 2 Type II (per its pricing page).

**Implications:** do not lead with "AI meeting agent" (Sembly and Otter own it). Lead with "Just talk": the update across tracker, CRM and Notion plus answers on the call. The sales-copilot idea of translation for non-native speakers is already covered by Sembly's mixed-language transcription; it is not a differentiator.
