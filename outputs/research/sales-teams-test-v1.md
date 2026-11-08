# Octo for sales teams and sales professionals: second-hypothesis test v1

Paper test, 8 Nov 2026, about 25 minutes of web research. Second hypothesis next to the chosen ICP (small teams of up to 50 with no PM, `brief/campaign-brief.md`), not a replacement. No Octocrew data used.

**Labels:** **[V]** vendor's own page. **[V-blog]** vendor marketing or a competitor's blog (biased). **[3p]** third-party restatement (review sites, aggregators). **[forum]** user post. **Not verified** means I could not confirm it against a primary source. Numbers in brackets point to section 7.

---

## 1. Verdict (5 bullets)

- **Add, don't replace.** Add one narrow second segment: *internal sales meetings of small B2B sales teams (5 to 30 reps)*: weekly pipeline review, forecast call, deal review. Keep the main ICP and the Meta plan as they are.
- **The strong fit is internal, not prospect-facing.** Octo showing the pipeline by stage on its tile and answering "Octo, what's stuck in Proposal?" from the CRM fits a pipeline review. Very few tools are built for that meeting. Most sales AI is built for the prospect call.
- **Prospect calls are a crowded and risky place.** Post-call CRM autofill is commoditised (Fireflies Business $19 [V], Fathom Business about $25 [3p], Pipedrive bundling meeting notes into every plan [3p, not verified]), and a bot that *speaks* in front of a buyer adds risk with no clear upside.
- **Live in-call sidebar copilots: crowded, and the wrong shape for Octo.** At least 12 products show private prompts to the rep (Clari Copilot, Balto, Trellus, Nooks, Cluely, Aircover, Salesken, Convin, Revenue.io, Convo, Winn.ai, a HubSpot beta). Octo's tile is public: a battlecard on it would be shown to the prospect too.
- **Drop solo sellers** (consultants, coaches, recruiters) as a separate segment. Fathom's free tier already covers their need, Metaview owns recruiters, and Octo's per-person task DMs need a team to be useful. Agency founders who run sales calls are already in the main ICP. **Open question to check before any spend:** does Octo *write* to HubSpot, Salesforce or Pipedrive, or only read from them? `product/overview.md` says it answers from the CRM, but tasks go to Notion, Asana and Trello. For sales, CRM write-back is the basic requirement.

---

## 2. Segments

### (a) Small B2B sales teams, 5 to 30 reps (SDR, AE, a sales manager)

- **Who buys:** the head of sales or the founder acting as sales leader. Above about 15 reps, often a RevOps person. The tool is chosen for the manager (visibility, forecast), and reps carry the cost in admin time.
- **Stack today:** a CRM seat (HubSpot Sales Hub Pro $90/seat/month annual plus $1,500 onboarding [3p][12]; Salesforce, where Conversation Insights comes inside the $50/user Sales Engagement add-on [V][13]; Pipedrive, Lite about $14 annual to $24 monthly [3p][14]) plus a call recorder.
- **What they pay for call AI:**
  - Light: Fireflies Business $19/seat [V][8], Fathom Business about $25 annual / $34 monthly, 2-seat minimum [3p][10], Avoma Startup $19 plus a $29 Conversation Intelligence add-on [3p][4].
  - Mid: Sybill Pro about $30 to $36, Business about $90 after an Oct 2026 cut [3p][3], Momentum $69 to $99 [3p][6].
  - Heavy (mostly above 30 reps): Gong, roughly $1,200 to $2,400/seat/year plus a $5k to $50k platform fee [3p, not verified][1]. Clari Copilot $60 to $110 [3p][2], with a reported $25k annual minimum [3p, not verified][2].
- **What this means:** a 10-rep team realistically pays **$20 to $90 per seat per month** for call AI on top of its CRM. Gong-class pricing does not fit this size.

### (b) Solo professionals who sell on calls

- **Consultants, coaches, agency founders:** pay $0 to about $20 a month. Third-party guides keep naming Fathom's free tier as "good enough" for solo consultants and Fireflies Pro (about $10 to $18) as the paid step up [3p][18]. Agency founders already belong to the main ICP.
- **Recruiters:** a vertical with its own leader. Metaview Pro is $50 annual / $60 monthly per user and syncs into Greenhouse, Lever, Bullhorn and others [3p][15]. Octo has no ATS story.
- **Read:** low willingness to pay, a free incumbent, and no team to hand tasks to. Octo's distinctive features (per-person task DMs, tracker updated on the next call, a weekly review) don't apply to one person.

---

## 3. Pain evidence

| Pain | Evidence | Source |
|---|---|---|
| **CRM hygiene after calls** | "I update CRM once per month to keep my boss happy." | r/sales thread "Anti-CRM sentiment and sales", Jun 2026, via mirror [forum][19] |
| | "Nobody's updating it. They're busy." / "Reps don't care. They're selling." | r/AI_Agents, Apr 2026, via mirror [forum][20] |
| | A 20-rep team typing notes by hand after every call: "half the time they forget or mess it up." | r/automation, Apr 2026, via mirror [forum][21] |
| | Reps sell only about 28 to 30% of the week, per the Salesforce State of Sales report | Secondary write-ups only. I did not open the Salesforce primary [3p, not verified][22] |
| **Manager visibility** | "leadership doesn't trust the pipeline data because of it." | r/AiForSmallBusiness, Apr 2026, via mirror [forum][23] |
| **Follow-up speed** | "I lose track of who I sent what to and what the next steps where." | r/sales, same thread as above [forum][19] |
| | Contact odds about 100x and qualify odds about 21x higher at 5 minutes than at 30 (InsideSales / Oldroyd 2007, vendor data, not peer-reviewed). HBR 2011: average first response 42 hours | Restated by a third party [3p, not verified][24] |
| **Pipeline review meetings** | "Group pipeline reviews are almost always a waste of time." | Salesforce blog, Jun 2024 [V-blog][25] |
| | A former CRO calls pipeline calls "busywork" that exist because leaders don't read the CRM | Vendor restating a Reddit thread [V-blog, not verified][26] |
| **Notes into the CRM** | Sybill, Attention, Momentum, Fireflies and Fathom all sell CRM autofill as their headline feature [V/3p][3][5][6][8][10]. Vendors would not build that if it weren't the pain buyers pay for | (inference) |
| **Prep before calls** | **Thin.** I found no strong forum evidence in the time box. Pre-call briefs are table stakes (`market/landscape.md`) | n/a |

**The counter-evidence that matters for Octo: bots on prospect calls.**
- "one sales guy told me prospects literally go quiet when a bot is in the room." / "The other half said they immediately trust the other person less" (secondhand, Product Hunt thread with about 5 comments) [forum][27]
- "I tend to share fewer tentative thoughts or brainstorms because everything is being transcribed." [forum][27]
- Vendor claim that reps keep hearing "Can you remove that bot?", with no source given. A Calendly figure (41% change behaviour when a bot records) is cited secondhand [V-blog, not verified][28]

---

## 4. Competition table

Prices are per seat per month unless noted. "After the call" is what the vendor says it already does.

| Product | Type | Price | After the call | Live in the call | Source |
|---|---|---|---|---|---|
| Gong | Revenue intelligence | Not public. About $1,200 to $2,400/seat/**year** plus a $5k to $50k platform fee; metered AI credits since Jun 2026 | Deal and forecast views, coaching, Gong Assistant Q&A over calls (Mission Andromeda, Feb 2026) | Flags moments; no official live rep guidance found | [3p, not verified][1], [V][29] |
| Clari Copilot (ex-Wingman) | CI plus live cards | $60 to $110 (3p); reported $25k minimum | Summaries, CRM sync, forecast in Clari | **Yes:** trigger-based battlecards as a desktop overlay | [3p][2], [forum, Clari community][30] |
| Avoma | Notes plus CI | Startup $19 annual / $29 monthly, plus a $29 to $35 CI add-on | Notes, CRM sync, deal intelligence | Not found | [3p][4] |
| Sybill | Sales assistant | Free, Pro about $30 to $36, Business about $90 | CRM Autofill (MEDDPICC, BANT, custom fields), follow-up email drafts, deal workspace | Not found | [3p][3], [V][31] |
| Attention | CRM autofill plus coaching | Not public; GetApp shows $160 | One-click CRM field updates, follow-up drafts, scorecards | Not checked | [3p, not verified][5] |
| Momentum (Salesforce-owned, per a 3p restatement) | Revenue orchestration | Business $69, Transformation $99 (annual), CI add-on about $30 | Call and Slack data into Salesforce fields, exec briefs | Not found | [3p][6] |
| Fireflies | Note-taker with a sales tier | Business $19 (Autofill CRM, Deal Intelligence, Sales Assist); Enterprise $39 (Salesforce autofill) | CRM autofill, deal intelligence | "Talk to Fireflies" voice Q&A | [V][8] |
| Otter | Note-taker | Business $19.99 annual / $30 monthly; deeper CRM on Enterprise (3p) | Summaries, follow-up drafts, CRM sync | "Hey Otter" agent | [V][9], [3p][9] |
| Fathom | Note-taker | Free; Business about $25 annual / $34 monthly | Field-level HubSpot/Salesforce sync, Deal View (Business only) | Not found | [3p][10] |
| HubSpot Sales Hub (Breeze) | Built into the CRM | Pro $90/seat annual plus $1,500 onboarding; AI uses credits | Call summaries and a Call Recap agent (partner page) | Live-call copilot in private beta | [3p][12], [3p, not verified][32] |
| Salesforce (Einstein CI, Agentforce) | Built into the CRM | CI inside Sales Engagement $50; Agentforce for Sales $125 | Call insights, summaries | Not checked | [V][13] |
| Pipedrive (Nova) | Built into the CRM | Meeting intelligence in every plan since Sep 2026 | Meeting notes in the CRM | Not checked | [3p, single source, not verified][14] |
| Metaview | Recruiting note-taker | Pro $50 annual / $60 monthly | Notes into the ATS | Not found | [3p][15] |

### Your question: is the live "sidebar with suggestions during calls" space crowded?

**Yes, crowded, and split into three groups:**

| Group | Products | Price signal |
|---|---|---|
| Built into CI suites | Clari Copilot battlecards [30], HubSpot live copilot (beta) [32], Revenue.io [33], Salesken, Convin [34] | Bundled with $60 to $110 seats |
| Outbound and dialer coaching | Trellus (real-time coaching on the custom Business plan; Power seats $99.99 and $149.99) [V][16], Nooks [V-blog][35], Balto (contact-centre roots) [V-blog][36] | About $100+/seat |
| Desktop overlays for any call | Cluely (Pro about $20; a "stealth" tier at $75 to $150, sources conflict) [3p][17], Aircover [3p][37], Winn.ai [V-blog][29], Convo [V][38], Realtime Sales Copilot [3p][39] | $20 to $50 |

Known complaint: cards "pop up too often" and distract reps [3p][30]. Real-time coaching claims (win rates, accuracy) are all vendor claims; I found no independent study [3p][11].

**Why Octo should not enter it:** these tools whisper to *one* rep, privately. Octo talks and shows things to *everyone* on the call. Showing an objection handler on Octo's tile is showing it to the buyer. Entering would mean a different product (a private rep view), against at least 12 funded players. Octo's public tile is an advantage in exactly one place: meetings where everyone is on the same side.

---

## 5. Where Octo fits or fails (blunt)

**Strong (worth testing):**
1. **Weekly pipeline review and forecast call.** "Octo, show Proposal stage" puts the pipeline by stage on the tile, and "what's open on Acme?" gets an answer from the CRM. Each rep leaves with their next steps by DM, with the exact quote, and the next review starts from what's still open. The meeting everyone calls busywork [25][26] gets shorter and gets its follow-up done. Competitors are built around the *prospect* call. Clari and Gong do forecasting in their own app, not as a participant in the meeting.
2. **Deal desk and deal reviews** (AE, manager, sometimes a founder or finance). Same pattern: questions answered from the CRM out loud, decisions turned into owned tasks.
3. **Sales team standups and 1:1s.** Weaker than the two above, but the same mechanics.

**Risky:**
4. **Discovery and demo calls with prospects.** A visible bot already makes some buyers go quiet [27]. One that *speaks* raises the stakes, and so do recording-consent rules. Octo's acting features add little here over the $19 to $25 autofill tools. Allow at most a silent mode with post-call CRM write-back, and don't lead the pitch with it.
5. **Live objection handling or battlecards on prospect calls.** Fails: a public tile is the wrong shape, and the field is crowded (section 4).

**Weak:**
6. **Solo sellers.** A free incumbent (Fathom), no team for task DMs, and a recruiter vertical owned by Metaview.

**Gaps to close before selling to sales teams:**
- **CRM write-back** (deal stage, next step, close date) into HubSpot, Salesforce and Pipedrive. Not listed in `product/overview.md`. Without it, Octo loses to $19 tools on basic hygiene.
- **The pipeline tile needs live CRM data.** Confirm that it reads real HubSpot or Pipedrive deals, not a demo table.
- **Pricing:** the pain is priced at $20 to $90 per seat. A team price for the internal-meeting use case avoids a per-rep comparison with Fireflies.

---

## 6. A 7-day test with a tiny budget

**Who to target:** heads of sales and founder-sellers at B2B companies with 11 to 50 employees and 3 to 30 reps.

**Landing:** one extra variant page on the existing landing (for example `/sales`), same single CTA "Invite Octo to your next call" (the team switched CTA on 8 Nov). Reuse the 36-second demo, but cut to the pipeline-on-tile moment if the footage exists.

**Headline:** Run your pipeline review out loud. Octo brings the deals and hands out the next steps.

**3 one-liners:**
1. "Octo, what's stuck in Proposal?" Your pipeline by stage, on the call, from your CRM.
2. Every rep leaves the pipeline review with their next steps in a DM, with the exact quote.
3. Your reps sell. Octo sits in the forecast call and chases the follow-ups.

**One channel:** LinkedIn Sponsored Content (single image or short video), targeting job titles (Head of Sales, Sales Manager, VP Sales, Founder) at companies with 11 to 50 employees. Why: the segment is defined by job title, and Meta's job targeting is weak. Budget **€200 over 7 days** (*assumption*: LinkedIn clicks often cost several euros, so expect roughly 20 to 50 clicks. Not verified, check the forecast in Campaign Manager). Zero-cost add-on: two founder posts on LinkedIn using one-liners 1 and 2.

**One metric:** cost per early-access request from a sales leader (job title checked by hand from the work email or LinkedIn). In the confirmation email, ask one question: "Which call would you invite Octo to first: pipeline review, prospect call, or something else?" The answer tells you which use case to build for.

**Decision rule after day 7:**
- **Add the segment** (a second landing variant, a pipeline-review demo, a CRM write-back priority): 5 or more qualified requests at up to €40 each, and at least half pick the pipeline review.
- **Replace the main ICP:** only if the sales cost per request is below half of the main Meta ICP's in the same week *and* the requests are better quality. Not expected.
- **Drop:** fewer than 2 qualified requests, or most pick "prospect call" (that pulls Octo into the crowded autofill fight).

---

## 7. Sources

Accessed 8 Nov 2026. Labels as defined at the top.

1. Gong pricing [3p]: https://www.raftlabs.com/blog/gong-pricing · competitor blog [V-blog]: https://www.aviso.com/blog/gong-pricing · https://www.sybill.ai/blogs/gong-pricing
2. Clari Copilot pricing [3p]: https://www.softwareadvice.com/crm/wingman-profile/vs/ · https://costbench.pages.dev/software/ai-sales-tools/clari/ · https://www.docket.io/resources/research/clari-pricing · https://www.capterra.com/p/194117/Wingman/pricing
3. Sybill pricing [3p]: https://pricingsaas.com/companies/sybill · https://costbench.com/changelog/sybill-ai-price-decrease-2026-10/
4. Avoma pricing [3p]: https://docket.io/resources/research/avoma-pricing
5. Attention [3p]: https://www.getapp.com/all-software/a/attention/ · https://www.vendr.com/marketplace/attention
6. Momentum [3p]: https://toolradar.com/tools/momentum-io · https://g2.com/products/momentum-momentum/pricing
7. (unused)
8. Fireflies for Sales, tiers and prices [V]: https://guide.fireflies.ai/articles/2790601073-fireflies-for-sales-your-ai-platform-for-everything-after-the-call
9. Otter pricing [V]: https://otter.ai/pricing · CRM tier [3p]: https://www.cirrusinsight.com/otter-ai-vs-fireflies
10. Fathom Business, CRM field sync, Deal View [3p]: https://sonix.ai/resources/fathom-pricing/ · https://get-alfred.ai/blog/fathom-pricing · free tier [V]: https://www.fathom.ai/pricing
11. Real-time coaching claims all vendor-sourced [3p]: https://dev.to/anatolii_lavryk_463472d03/best-al-sales-assistants-in-2026-a-buyers-guide-by-use-case-cold-calling-live-coaching-crm-4dob
12. HubSpot Sales Hub pricing [V-blog]: https://blog.hubspot.com/sales/hubspot-sales-hub-pricing · [3p]: https://www.hublead.io/hubspot-pricing-calculator
13. Salesforce Conversation Insights and Agentforce pricing [V]: https://salesforce.com/sales/conversation-intelligence/pricing
14. Pipedrive Nova [3p, single source]: https://www.usagepricing.com/blueprint/activity/pipedrive-2026-10-05-nova-meeting-intelligence-launch · Pipedrive pricing [V]: https://www.pipedrive.com/en/pricing
15. Metaview pricing [3p]: https://www.eesel.ai/blog/metaview-pricing
16. Trellus pricing [V]: https://www.trellus.ai/pricing-redirect
17. Cluely [3p]: https://aitoolsatlas.ai/tools/cluely/pricing · https://dailyaifixs.com/blog/cluely-pricing-2026-the-75-stealth-catch
18. Solo consultants' tools [3p]: https://productive.io/blog/ai-notetakers/ · https://www.lilachbullock.com/ai-notetakers-sales-calls-small-business/
19. r/sales "Anti-CRM sentiment and sales" (mirror) [forum]: https://reddit.sentinel-team.org/posts/1twmce3/snapshots/2026-06-05T12%3A25%3A54.135441Z
20. r/AI_Agents "Your CRM is lying to you and your sales reps know it" (mirror) [forum]: https://reddit.sentinel-team.org/posts/1s7ghgm/snapshots/2026-04-04T01%3A38%3A01.387914Z
21. r/automation (mirror) [forum]: https://reddit.sentinel-team.org/posts/1sk75rw/snapshots/2026-04-13T23%3A38%3A46.949826Z
22. Selling-time figure [3p]: https://www.landbase.com/blog/sales-reps-30-percent-time-selling-2026 · https://salesscreen.com/okf/studies/salesforce-state-of-sales-report
23. r/AiForSmallBusiness (mirror) [forum]: https://reddit.sentinel-team.org/posts/1sgntb6/snapshots/2026-04-09T20%3A34%3A38.462784Z
24. Lead response studies [3p]: https://ainora.lt/blog/lead-response-time-statistics-every-study-2026
25. Salesforce, "Pipeline Reviews Are the Worst" [V-blog]: https://www.salesforce.com/blog/sales/sales-pipeline-review/
26. Pipeline calls "busywork" [V-blog]: https://prospeo.io/s/pipeline-calls
27. Product Hunt thread on bots in calls [forum]: https://www.producthunt.com/p/general/am-i-the-only-one-who-finds-it-awkward-when-an-ai-notetaker-bot-joins-the-call-as-a-participant
28. Laxis, botless note-taking [V-blog]: https://www.laxis.com/blog/botless-ai-note-taking-sales-calls-2026/
29. Gong Mission Andromeda [V]: https://www.gong.io/en/platform/mission-andromeda · Winn.ai positioning vs Gong, as restated [V-blog]: https://dev.to/anatolii_lavryk_463472d03/convinco-vs-gong-which-revenue-intelligence-tool-do-you-need-o77
30. Clari Copilot battlecards [forum, vendor community]: https://community.clari.com/product-q-a-6/your-revenue-battles-just-got-easier-with-smart-battlecards-578 · cards pop up too often [3p]: https://b2bsalestools-com.pages.dev/tools/clari-copilot/
31. Sybill CRM Autofill and deal summaries [V]: https://sybill.ai/action/crm-autofill · https://sybill.ai/deal-summaries
32. HubSpot Breeze Call Recap (partner page) [3p]: https://www.provenroi.com/services/breeze-agents/call-recap-agent · live copilot beta [3p, not verified]: https://theupdatealgorithm.transistor.fm/47/transcript
33. Revenue.io real-time coaching [V-blog]: https://www.revenue.io/blog/the-8-best-real-time-sales-coaching-software
34. Salesken, Convin listed as real-time tools [3p]: https://dev.to/anatolii_lavryk_463472d03/salesken-vs-convinco-vs-clari-copilot-which-real-time-sales-tool-actually-wins-on-live-calls-2kli
35. Nooks [V-blog]: https://www.nooks.ai/blog-posts/the-end-of-the-static-battlecard-real-time-ai-coaching
36. Balto [V-blog]: https://www.balto.ai/blog/best-ai-tools-for-real-time-agent-assist-on-sales-calls-2026/
37. Aircover [3p]: https://tooldirectory.ai/tools/aircover
38. Convo live objection handling [V]: https://www.itsconvo.com/live-objection-handling
39. Realtime Sales Copilot [3p]: https://www.softwareadvice.com.au/software/640227/Realtime-Sales-Copilot

Repo files read: `product/overview.md`, `brief/campaign-brief.md`, `outputs/positioning/campaign-plan.md`, `market/landscape.md`, `outputs/website/comparison.md`, section list of `outputs/research/market-research-v1.md`.

**Not done in the time box:** I did not open the vendor pricing pages for Gong, Clari, Avoma, Sybill, Fathom Business or Momentum (prices are third-party, marked). The libreddit r/salesforce thread returned 403. Forum quotes come from a Reddit mirror, not reddit.com. Pre-call prep pain is not evidenced.
