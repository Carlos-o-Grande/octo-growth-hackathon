# Promotion strategies beyond paid: Octo, v1

Research date: 8 Nov 2026 (Sunday). Time box about 20 minutes, so most numbers come from one or two sources. Labels: **[official]** = the platform's own page; **[vendor claim]** = a company talking about itself or selling a service; **[3rd party]** = someone else restating; **not verified** = I could not confirm it.

Already planned and not repeated here: Meta ads, YouTube creators, LinkedIn one-liner tests, Reddit answers, the guest-task loop, AEO (/compare, llms.txt, FAQ schema), the weekly team call use case, Claude Code / Grok Bot plugins (`outputs/positioning/campaign-plan.md`, `outputs/positioning/growth-strategies-v1.md`).

## Three blockers found while researching

1. **The site lives on a free subdomain (`octo-landing-47q.pages.dev`).** BetaList refuses products without their own domain: "Free hosting subdomains ... aren't accepted" [official, betalist.com/faq]. It also hurts trust in every listing and in the bot's display name.
2. **There is no instant access.** The CTA opens an email, and Oleksii sets up the call. Product Hunt does not feature waitlisted products "unless immediate access is provided" [official, PH featuring guidelines]. Show HN calls sign-up pages and landing pages off topic and wants people to try things "ideally without barriers such as signups or emails" [official, news.ycombinator.com/showhn.html].
3. **Zoom changed its bot rules.** Since 2 March 2026, Meeting SDK apps that join meetings hosted by other accounts need an OBF token from a user who is in the meeting [official, Zoom OBF FAQ]. A Zoom forum post quotes Zoom's Linux SDK page saying the SDK "does not support bots or AI notetakers" and sends them to RTMS. I found no official answer that settles this [3rd party, devforum.zoom.us]. Ask `ops-okto` how Octo joins Zoom today before any Zoom marketplace work.

## 1) Top 10 moves for the next 30 days

Ranked by value for effort. "Zero budget, this week" = can start by Sun 15 Nov with no cash.

| # | Move | Cost | Effort (h) | First result | Metric | Zero budget, this week |
|---|---|---|---|---|---|---|
| 1 | **Own domain + short URL**, redirect pages.dev. Use it in the bot name and every listing | Registrar fee only (amount not verified) | 2 | Same day | Domain live; listings accepted | Nearly (registrar fee only) |
| 2 | **Free listings batch**: AlternativeTo (as an alternative to Otter, Fireflies, Fathom, Granola, Read), SaaSHub, G2 free profile, Capterra free listing, Toolify free queue, Microlaunch free launchpad | $0 | 5 | AlternativeTo: "as soon as possible" after review; G2: 1 to 3 business days to claim; Toolify free queue: weeks | Listings live; visits per listing (`utm_source=<directory>`) | Yes |
| 3 | **Comparison pages per competitor**: /vs/fireflies, /vs/otter, /vs/fathom, /vs/granola, /vs/read-ai, built from the existing /compare | $0 | 6 to 8 | Indexing takes days to weeks | Organic visits per page; Octo named in the 10 AEO test questions | Yes |
| 4 | **Free tool: "Paste your meeting notes, get tasks per person"** on the site, no sign-up, ends with "Want this live on your next call? Invite Octo." | $0 (uses the model Octo already runs; cost per use not checked) | 8 to 12 | Days | Tool uses; tool → invite rate (5 to 15% capture is one author's benchmark, not verified) | Yes |
| 5 | **Show HN of the free tool** (it is tryable without sign-up, so it fits HN rules, unlike the landing) | $0 | 2 + a day in the thread | Same day | Visits, tool uses, invites from `utm_source=hn` | Yes, once #4 ships |
| 6 | **Templates**: Notion Marketplace free template "Weekly team call: from meeting to tasks" + a public ClickUp template with the same structure, each linking to Octo | $0 (Notion free listing fee: none found) | 4 to 6 | Notion review about 1 to 3 business days [3rd party] | Duplicates; clicks to the site | Yes |
| 7 | **PM-tool consultants as partners**: ClickUp Verified Consultants (public directory), Notion and Asana consultants. Offer: free credits for their clients + a revenue share (proposal below) | $0 cash; credits | 6 (list of 30 + messages) | 1 to 2 weeks | Replies; partners who put Octo on one client call | Yes (founder sends; this report does not contact anyone) |
| 8 | **Referral and affiliate program**: customer referral paid in credits now; affiliate software later | $0 now; Rewardful or FirstPromoter from $49/mo later | 4 manual | 2 to 4 weeks | Referred companies; paid conversions | Yes (manual codes) |
| 9 | **Communities for ops and agencies**: Fractionals United, ForFractionals, Online Geniuses, Grow Your Agency. Be useful first, share the template and the free tool, not the ad | $0 to $35 (Fractionals United $15/mo; Grow Your Agency $35 one-time) | 1/day | 1 to 2 weeks | Sign-ups per community via tagged links | Yes for free ones |
| 10 | **Product Hunt launch on Tue 1 Dec 2026**, once there is an instant path (a self-serve "invite Octo now" or a PH-only calendar link) | $0 (PH is "100% free") | 25 to 40 (guides cite 50 to 120 h for big launches) | Launch day | Rank, visits, invites from `utm_source=producthunt` | Prep starts this week |

**After 30 days, not now:** Notion integration gallery and Asana App Directory (only if Octo's sync is a public OAuth app; reviews 5 to 10 business days for Notion), Zapier app (benefits start at 40 active users), Zoom / Slack / Teams / Google Workspace marketplaces (weeks of review, security audits), BetaList (paid, needs own domain), paid directories (TAAFT $49, Toolify $99, Futurepedia $197 to $497).

## 2) Section 1: launch platforms and directories

| Platform | Cost | What's required | Time to live | Expected value |
|---|---|---|---|---|
| **Product Hunt** | Free: "It's 100% free to use" [official, PH launch FAQ] | Ready to use; waitlisted products are not featured unless immediate access is given; judged on useful, novel, high craft, creative [official, featuring guidelines]. "You cannot ask people directly to upvote" [official, FAQ]. Relaunch allowed with "significant product iterations" [official] | Same day; PH reviews launches "at minimum the day before" [PH staff in an AMA] | High one-day spike if featured. Best day: guides point to Tue to Thu at 12:01 am PT [3rd party, several 2026 guides]; PH says 12:01 am PT is best [official]. ~10% of launches featured: [3rd party, not verified]. Recent meeting-AI launches: Meeting.ai #2 of the day with 381 upvotes (Sep 2025), Tactiq 3.0 #11 with 153 (Dec 2025) [3rd party, hunted.space] |
| **Hacker News, Show HN** | Free | Something people can try, non-trivial; landing pages and sign-up pages off topic; "Please don't ask friends to upvote or comment" [official] | Immediate | Fits the free tool, not the current landing. HN audience is developers, so value for Octo is AEO links and feedback more than buyers (judgment) |
| **BetaList** | Paid only: "There is no free submission option"; prices shown only at the end of the form; full refund if not selected [official]. $129 "Priority" [3rd party, not verified] | Own domain (no free subdomains), new to the audience, clear value proposition [official] | Depends on plan [official]; older FAQ said about 2 months in the free queue [3rd party] | Low to medium. Pre-launch audience of early adopters. Blocked until move #1 |
| **Peerlist Launchpad** | Free with a verified Peerlist profile; Featured Launch from $29 [official help + 3rd party] | Verified personal profile, project on profile | Launch window opens Mondays, goes live immediately [official help] | Low to medium; builder audience, weekly ranking |
| **There's An AI For That** | $49 website listing; $347 with newsletter + PPC credit; 1 free tool a month via an X thread [3rd party, orangebot.ai, prices read 18 Aug 2026] | Submission form | Not stated | 100 to 1,000 clicks estimated for $49 [vendor claim relayed by 3rd party]; "5M+ monthly visitors" [vendor claim, not verified] |
| **Futurepedia** | $197 on its Gumroad submit page, refund if rejected [official Gumroad]; $497 verified listing [official futurepedia.io/verified] | Editorial approval | 2 to 7 days [3rd party] | Unknown; "400k monthly professionals" [vendor claim, not verified] |
| **Toolify** | $99 one-time, listed within 48 hours; free with a multi-week queue [3rd party, saascity.io and tooljunction.io] | Submission form | 48 h paid; weeks free | Backlinks in ten languages [3rd party]. Use the free queue |
| **AlternativeTo** | Free; $5 priority review [3rd party, not verified] | Account, "Suggest new application"; one entry per product [official FAQ]; "thin AI wrappers" not accepted [3rd party] | "As soon as possible" [official] | **Best free fit.** People browsing "Otter alternatives" are the second audience in the campaign plan. Add Octo as an alternative to Otter, Fireflies, Fathom, Granola, Read |
| **G2** | Free profile: "every company can claim and maintain a free G2 Profile" [official, sell.g2.com] | Work email; G2 research team approves new products | 1 to 3 business days [3rd party] | Low until there are reviews; AI answers cite G2 (AEO). Ask the first 5 teams for a review later |
| **Capterra (+ GetApp, Software Advice)** | Free listing, paid leads [official, capterra.com/faq] | Off-the-shelf software, fits an existing category, listed on a site the vendor owns [official listing guidelines] | Not stated | Low now, medium for AEO. One free listing appears on 3 sites [official] |
| **SaaSHub, Microlaunch, Dev Hunt** | SaaSHub free; Microlaunch launchpad free, Pro $39; Dev Hunt free, dev tools only [3rd party, orangebot.ai] | Forms | Days | Low but free backlinks |

## 3) Section 2: integration marketplaces

| Marketplace | Requirements and review | Discovery (public data) | Fit now |
|---|---|---|---|
| **Zoom App Marketplace** | Submission review for security, functionality, listing; then a security audit and scope testing; deauthorization URL and webhook required. No fixed timeline [official, developers.zoom.us]. Forum reports from 1 business day to 6+ weeks [3rd party]. OBF token needed since 2 Mar 2026 for external meetings [official] | Fathom "secured a prime spot on the Zoom Marketplace" and got "100,000 signups in 30 days", then judged "99.9%" useless [founder podcast show notes, pmfshow]. Fathom launched there in Aug 2021 [3rd party, Latka] | Later. Big traffic, low quality, and the bot policy question must be settled first |
| **Google Workspace Marketplace** | Public apps need OAuth verification first: 3 to 5 working days for sensitive scopes, longer for restricted scopes, which may need an annual security assessment [official, Google]. No published SLA for listing review [3rd party] | Install counts are public: Read AI 5M+, Tactiq 3M+, tl;dv 660K+ in a "meeting notes" search [official listing page, read 8 Nov 2026] | Later. Meet bots join as guests, so a listing is for discovery, not function |
| **Microsoft Teams Store** | Publisher verification, Partner Center submission, validation tool; allow at least one business day after approval [official, learn.microsoft.com]. Concierge help if it fails [official] | No public data found | Later |
| **Slack Marketplace** | Preliminary review "generally takes up to 1 week", then functional review; resubmitting resets your place; test credentials required; Slack says plan "a few weeks" [official, docs.slack.dev]. 10 to 15 business days [3rd party, not verified] | No public data found | Later, only if Octo ships a Slack app for Huddles |
| **Notion integration gallery** | Public API integration only; reply "within 5-10 business days" [official, developers.notion.com] | No public data found | After 30 days, if Octo's Notion sync uses public OAuth (ask `ops-okto`) |
| **Asana App Directory** | Shared to "Any workspace", pre-flight checklist, security QA, name must not contain "Asana", 30 s to 2 min screencast recommended [official, developers.asana.com] | No public data found | After 30 days, same condition |
| **ClickUp** | No official app-submission process found. A free Developer and Technology Partner Program exists [3rd party, partnerfleet] | No public data found | Use the template route (move #6) and consultants (move #7) instead |
| **Zapier** | Public integration; "Learn More" button on the listing; featured placement from Silver tier; early benefits at 40 / 300 / 2,500 active users [official, docs.zapier.com] | Directory lead gen [official] | After 30 days |

## 4) Section 3: partnerships

| Partner type | Who (sourced) | How | What's in it for them |
|---|---|---|---|
| **ClickUp Verified Consultants** | Public directory at clickup.com/partners and clickup.com/consultants; program is for firms with fewer than 10 employees and under $1M revenue [official] | Pick 30 from the directory who serve agencies or small teams. Offer a free month of credits for one of their clients, and a revenue share | Their clients' ClickUp stays up to date without the consultant doing hygiene; recurring income (proposal in section 4) |
| **Notion and Asana affiliates/consultants** | Notion's affiliate program runs on PartnerStack [3rd party]; commission reported as 50% for 12 months or 20% then 10% [3rd party, conflicting, not verified]. Asana affiliate reported at 30% then 15% [3rd party, not verified] | Same pitch; they already sell productivity tools to the same small teams | Another product to recommend; Octo's commission (proposal) is in the same range |
| **Zapier Solution Partners** | Agencies and consultants listed by Zapier [official] | Automation consultants who already wire Notion / ClickUp / Asana | Octo becomes the "meeting input" to their automations |
| **Fractional COOs and ops leads** | Fractionals United: about 8K [3rd party, Hive Index] to 13,000+ members [podcast], $15/mo or $150/yr [3rd party, Village]; ForFractionals: free Slack [3rd party, Hive Index] | Join, answer questions, offer partners free credits to run Octo on one client's weekly call | A fractional COO serves several teams without a PM, exactly Octo's buyer. Octo makes their part-time presence look full-time |
| **Agency communities** | Online Geniuses: 20K to 35K members, free with application [3rd party, conflicting]; Grow Your Agency: 1,600+ members, $35 lifetime [vendor claim]; The Blueprint: 3,000+ agency owners, $199/mo [vendor claim] | Free ones first. Share the template and the free tool | Agencies lose client requests after calls; that is the pain the campaign targets |
| **Startup perks marketplaces** | JoinSecret lists software deals for startups (e.g. Fellow, a meeting tool, offers its first month free there) [3rd party, superscout]. Vendor submission process not found, not verified | Offer "first 2,000 credits free" (proposal) | Perk platforms want deals for their members |
| **Accelerator perks** | Not researched in depth (time box). Most accelerators run a perks list for portfolio companies; process varies, not verified | Ask in the founder's network which accelerators take vendor perks | Same as above |

## 5) Section 4: affiliate and referral program

**Norms in 2026 (all from affiliate-software vendors, so treat as directional):**
- 20 to 30% of revenue for the first 12 months, median 25%; about 1 in 5 programs pay lifetime at 10 to 20% [vendor, track360.io].
- Median 20%, average 22.9% across 121 campaigns (LinkJolt data); average 24.16% (Rewardful data); 71% pay recurring [3rd party restating vendors, hamstergarage.com].

**Tools:**

| Tool | Entry price | Notes |
|---|---|---|
| Rewardful | $49/mo, up to $7,500/mo affiliate revenue [3rd party, dupple.com] | Stripe-native; no fee on payouts [3rd party] |
| FirstPromoter | $49/mo Starter, up to $5,000/mo affiliate revenue; $99 and $149 tiers; 0% transaction fee; 14-day trial [3rd party, costbench / referly] | |
| Tolt | $69 or $99/mo, sources conflict [3rd party, dupple vs hackceleration] | Check the live pricing page |

**Proposed structure for Octo (for the founder to approve, not a commitment):**
- **Customer referral (start now, no tool):** when a referred company buys any plan, both sides get 2,000 credits ($20 at 100 credits per $1). Cash cost is zero; the cost is compute. Track with a code per customer in a sheet.
- **Partner / affiliate (when there are 10+ paying teams):** 25% recurring for 12 months, 60-day cookie, paid monthly after a 30-day refund window. Consultants who set Octo up for a client: 30% for 12 months. Run it on Rewardful or FirstPromoter at $49/mo only once partner revenue would cover the fee.
- **Guardrails:** no self-referrals, no paid search on the brand name, no commission on refunded months.

## 6) Section 5: content and community plays on a tiny budget

- **Free tool, "Paste your meeting notes, get tasks per person."** No login, results in seconds, ends with the Octo invite. Free tools work when they extend the paid product, not when they are unrelated [3rd party, stormy.ai]. Named examples in the meeting space: Claap's "meeting calculator" [3rd party, saasletterfr]. Also the right thing to post as Show HN.
- **Templates:** Notion Marketplace accepts free templates from anyone after review; paid ones pay Notion 8% + $0.40 [official, notion.com help]. Review time about 1 to 3 business days [3rd party]. ClickUp lets users share templates by public link; a community submission flow was announced as "soon" and is not confirmed [official changelog, 3rd party guide].
  - Template idea: "Weekly team call: open tasks from last week, new tasks with owner + deadline + quote." The quote column shows Octo's difference.
- **Comparison pages per competitor:** one page per rival, same honest table as /compare, with "When to pick them, when to pick Octo". These also feed AEO.
- **Communities with public size:** Online Geniuses 20K to 35K (free, application) [3rd party]; Fractionals United about 8K to 13K ($15/mo) [3rd party]; GrowthMentor Slack 1,800+ [vendor claim]; Grow Your Agency 1,600+ [vendor claim]. GrowthMentor notes many founder Slacks moved to Circle, Discord or their own apps in 2026 [vendor, growthmentor.com].
- **AlternativeTo + G2 + Capterra** count as content too: they are where AI answers and "X alternatives" searches land.

## 7) Section 6: what competitors did early, and what fits Octo

| Company | What they did (sourced) | Fits Octo? |
|---|---|---|
| **Fireflies** | Founders took notes by hand at first; first 10 users were friends; the visible bot was the loop: "If one of our users went to a meeting, the AI assistant automatically logged in and sparked curiosity" (Krish Ramineni) [3rd party, aimmediahouse / traded.co]. Claims of mostly word-of-mouth growth [vendor claim] | **Yes.** Octo's current concierge setup is the same start. The guest-task loop is already planned |
| **Fathom** | 10-month private beta; "Visible Feature" mechanic for "zero-cost viral growth"; Zoom Marketplace spot gave 100K signups in 30 days, "99.9%" useless [founder podcast show notes]. Free product first, revenue from Aug 2022 [3rd party, Latka]. Product Hunt launch and HubSpot marketplace [3rd party, Starter Story] | **Partly.** Visible-feature loop: yes. Marketplace: later, and expect junk traffic. Free tier: Octo's $20 pay-as-you-go is close; a free first call is worth testing (proposal) |
| **Granola** | Closed beta for tech people, VCs and execs; growth by word of mouth, "founders hearing about it from their investors"; shared notes spread it [TechCrunch 2024]; Betaworks: growth had to be organic, not paid [investor post] | **Yes, cheaply.** Put Octo on the founder's own network's calls first (investors, founder friends). Each shared per-person task message is the "shared note" |
| **Otter** | Zoom partnership Jan 2018, Otter for Education Oct 2018 [3rd party, Wikiwand citing VentureBeat]; live Zoom integration Apr 2020 rode the pandemic [3rd party, UC Today / TechCrunch] | **Weak.** Education is not Octo's buyer. The lesson is "ride the platform", which is the marketplace move for later |
| **Read.ai** | Auto-shares meeting notes with all invitees, credited with about 12M signups a year, $0 ad spend [founder podcast summary]; early retention about 5% monthly [same, not verified] | **Yes, with Octo's consent rules.** Same loop as the planned guest message. Read's retention lesson: the loop brings volume, not fit |

## 8) Sources

Launch platforms
- Product Hunt launch FAQ [official]: https://www.producthunt.com/launch/faqs
- Product Hunt featuring guidelines [official]: https://help.producthunt.com/en/articles/9883485-product-hunt-featuring-guidelines
- PH staff AMA on featuring [official staff, forum]: https://www.producthunt.com/p/producthunt/i-decide-what-s-featured-on-the-leaderboard-ama-w-gabe-from-product-hunt?page=3
- Best day analysis, 4,962 launches [3rd party]: https://www.producthunt.com/p/databox/best-day-to-launch-on-product-hunt-here-s-what-4-962-launches-in-2026-actually-show-2
- PH guide 2026 [3rd party]: https://app.getlaunchlist.com/blog/how-to-launch-on-product-hunt-2026
- Meeting.ai and Tactiq PH results [3rd party]: https://hunted.space/dashboard/meeting-ai-visual-note/launches/meeting-ai , https://hunted.space/dashboard/tactiq/launches/tactiq-3-0-2
- Show HN guidelines [official]: https://news.ycombinator.com/showhn.html
- BetaList FAQ [official]: https://betalist.com/faq
- BetaList $129 Priority [3rd party]: https://aiidelist.com/product-launch-sites/betalist
- Peerlist Launchpad [official help]: https://help.peerlist.io/individual/launchpad ; review [3rd party]: https://saascity.io/directories/peerlist
- Directory prices (TAAFT, Futurepedia, Toolify, Microlaunch, SaaSHub, Dev Hunt) [3rd party, 19 Aug 2026]: https://orangebot.ai/blog/where-to-submit-your-ai-tool-2026
- Futurepedia [official]: https://futurepedia.gumroad.com/l/submit-tool , https://futurepedia.io/verified
- Toolify [3rd party]: https://saascity.io/directories/toolify , https://www.tooljunction.io/vs/toolify
- AlternativeTo FAQ [official]: https://alternativeto.net/faq ; [3rd party]: https://saascity.io/directories/alternativeto
- G2 free profile [official]: https://sell.g2.com/create-free-profile , https://documentation.g2.com/help/docs/finding-or-listing-a-product-on-g2
- Capterra [official]: https://capterra.com/faq/why-is-capterra-free/ , https://capterra.com/legal/listing-guidelines/

Marketplaces
- Zoom app review [official]: https://developers.zoom.us/docs/distribute/app-review-process/
- Zoom OBF FAQ [official]: https://developers.zoom.us/docs/meeting-sdk/obf-faq/
- Zoom bot policy question [3rd party forum]: https://devforum.zoom.us/t/marketplace-review-eligibility-for-commercial-ai-facilitator-bot-using-linux-meeting-sdk-obf/144959 , https://devforum.zoom.us/t/question-on-linux-sdk-usage-policy/141545
- Recall.ai on OBF [3rd party]: https://www.recall.ai/blog/zoom-obf
- Zoom review times [3rd party forum]: https://devforum.zoom.us/t/marketplace-app-production-approval-timelines-post-updates/138920
- Google Workspace Marketplace OAuth [official]: https://developers.google.com/workspace/marketplace/configure-oauth-consent-screen
- Google Workspace Marketplace listing with install counts [official, read 8 Nov 2026]: https://workspace.google.com/marketplace/search/meeting%20notes
- Teams Store publishing [official]: https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/deploy-and-publish/appsource/publish , https://learn.microsoft.com/en-us/microsoftteams/platform/publishing/office-store-approval
- Slack Marketplace review [official]: https://docs.slack.dev/slack-marketplace/slack-marketplace-review-guide ; 10 to 15 days [3rd party]: https://workos.com/blog/oauth-app-approval-slack-microsoft-atlassian
- Notion integration gallery [official]: https://developers.notion.com/docs/publishing-integrations-to-notions-integration-gallery
- Asana publishing [official]: https://developers.asana.com/docs/publish-your-app , https://developers.asana.com/docs/app-listing-guidelines
- ClickUp partner programs [official]: https://clickup.com/consultants , https://clickup.com/partners ; [3rd party]: https://partner-program-directory.partnerfleet.io/partners/clickup-partner-program
- Zapier partner benefits [official]: https://docs.zapier.com/platform/publish/benefits-guide

Partnerships, communities
- Notion affiliate terms [3rd party, conflicting]: https://getreditus.com/affiliate-programs/notion , https://list.partnero.com/notion
- Fractional communities [3rd party]: https://thehiveindex.com/topics/fractional-talent/platform/slack/ , https://village.ai/company/fractionalsunited , https://share.transistor.fm/s/57fa2dbc
- Agency and founder Slacks [vendor / 3rd party]: https://www.growthmentor.com/blog/slack-groups-for-marketers-and-entrepreneurs , https://growyouragency-astro.pages.dev/agency-community/ , https://theblueprint.training/slack-channel/ , https://martech.org/how-online-geniuses-crowdsources-answers-to-your-burning-marketing-questions/
- JoinSecret perks [3rd party]: https://superscout.co/perk/joinsecret , https://superscout.co/perk/fellow-app

Affiliate
- Commission benchmarks [vendor]: https://www.track360.io/blog/saas-affiliate-commission-rates-benchmark-2026 ; [3rd party]: https://www.hamstergarage.com/article/saas-affiliate-commission-rates-benchmarks-formulas
- Tool prices [3rd party]: https://dupple.com/learn/best-referral-marketing-software.md , https://costbench.com/compare/firstpromoter-vs-rewardful/ , https://hackceleration.com/labs/best/saas-affiliate-software , https://www.referly.so/pricing/firstpromoter-pricing

Content
- Notion Marketplace [official]: https://www.notion.com/become-a-creator , https://www.notion.com/nb/help/selling-on-marketplace ; review time [3rd party]: https://super.so/blog/how-to-sell-notion-templates
- ClickUp Template Center [official changelog]: https://feedback.clickup.com/changelog/template-center ; [3rd party]: https://processdriven.co/hub/clickup-public-templates
- Free tools as marketing [3rd party]: https://stormy.ai/blog/side-project-marketing-saas-growth , https://saasletterfr.substack.com/p/engineering-as-marketing-le-guide

Competitors
- Fathom [founder podcast]: https://pmfshow.buzzsprout.com/1889238/episodes/18484991-he-got-100k-signups-in-30-days-they-all-churned-2-years-later-he-hit-10m-arr-rich-white-founder-of-fathom ; [3rd party]: https://getlatka.com/blog/how-fathom-ai-achieved-30m-in-revenue-insights-from-ceo-richard-white , https://www.starterstory.com/uservoice-breakdown
- Fireflies [3rd party]: https://aimmediahouse.com/retail/fireflies-ai-grew-from-2000-dollars-to-16-million-users-without-spending-on-marketing , https://traded.co/blog/from-six-failed-ideas-to-20-million-users-how-krish-ramineni-built-fireflies-ai-into-a-profitable-ai-powerhouse-without-burning-venture-capital/
- Granola [press / investor / vendor]: https://techcrunch.com/2024/10/23/vcs-love-using-the-ai-meeting-notepad-granola-so-they-gave-it-20m , https://www.betaworks.com/writing/granola-has-officially-become-a-unicorn , https://granola.ai/blog/series-a
- Otter [3rd party]: https://www.wikiwand.com/en/articles/Otter.ai , https://techcrunch.com/2021/02/25/boosted-by-the-pandemic-meeting-transcription-service-otter-ai-raises-50m
- Read.ai [founder podcast / press / official]: https://castbox.fm/episode/Product-Led-Growth-Playbook%3A-8-Figure-ARR-with-%240-Ad-Spend-|-Read-AI-id5006329-id859254252 , https://www.geekwire.com/2024/seattle-startup-read-ai-raises-50m/ , https://support.read.ai/hc/en-us/articles/23272882203923-How-do-I-get-started-with-Read
