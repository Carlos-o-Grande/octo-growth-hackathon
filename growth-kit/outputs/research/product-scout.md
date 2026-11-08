# Product Scout: Octo by Octocrew

## Snapshot

- **Checked:** 2026-11-08 13:25 WET (Lisbon), during the Growth Marketing Hackathon, Portugal.
- **Input received:** the team repo (github.com/pandore/octo-growth-hackathon, private): `README.md`, `product/`, `launch/`, `market/`, `pitch/`, `assets/octo-pitch-deck.pdf`. Plus the company site octocrew.ai.
- **Official URL:** https://www.octocrew.ai/ (company). **Octo has no public page of its own.** The site sells a different product line (AI marketing agents) and does not mention Octo or a meeting agent anywhere on the pages fetched.
- **Repo paths below** are relative to the repo root. Type `team` = written by the founder in the repo; `self-reported` = Octocrew's own public site or deck.

| Page | Status |
|---|---|
| https://www.octocrew.ai/ (home) | fetched, 200 |
| https://www.octocrew.ai/agents.html | fetched, 200 |
| https://www.octocrew.ai/pricing (redirects to /pricing.html) | fetched, 200 |
| About page | not linked from home; not found |
| Customers | home links /case-studies and 3 case pages; case pages not fetched (they cover marketing agents, not Octo) |
| Octo product page | none exists |
| https://otter.ai/pricing | fetched, 200 |
| https://fireflies.ai/pricing | fetched, 200 |
| https://guide.fireflies.ai/articles/8186888414-talk-to-fireflies-in-live-meetings | fetched, 200 |
| https://www.zoom.com/en/products/ai-assistant/ | fetched, 200 |
| LinkedIn post (Octocrew funding) | blocked (Firecrawl: "can't scrape this site because it is currently not supported"); search snippet used |
| 3 Reddit threads | blocked: Firecrawl unsupported; `curl https://www.reddit.com/<thread>/.json` returned HTTP 403; search snippets used |

## Product facts

| Fact | Source URL | Type |
|---|---|---|
| Octo is an AI agent that joins a team's calls as a regular participant, answers by voice, shows things on its own video tile and does follow-up work after the call | repo `product/overview.md` | team |
| Before the call: a brief (who's attending, what was discussed last time, what's still open) | repo `product/overview.md`; deck slide 4 | team |
| During the call: speaks when called by name ("Octo, ..."), answers from the knowledge base and CRM, searches the web, shows lists, tables, pipeline by stage and tasks by owner on its tile, books calendar events after confirming | repo `product/overview.md` | team |
| After the call: each person gets their own tasks by direct message, with a deadline and the exact quote the task came from | repo `product/overview.md` | team |
| Tasks land in the team's tracker (Notion, Asana, Trello "and others") and update when someone later says "done" or "changed" on a call | repo `product/overview.md` | team |
| A page for every meeting; a weekly task review by voice | repo `product/overview.md` | team |
| Works on Google Meet, Microsoft Teams, Zoom, Slack Huddles, Webex, GoTo | repo `product/overview.md`; deck slide 4 | team |
| Each customer can give the agent its own name and voice | repo `product/overview.md` | team |
| Runs every day on the Octocrew team's own calls; offered today as part of Octocrew's AI implementation work | repo `product/overview.md`, `pitch/faq.md` | team |
| Not yet: self-serve sign-up, public price, public brand, launch | repo `product/overview.md` | team |
| English call mode is new (November 2026); some on-screen labels still appear in Ukrainian in rarer flows | repo `product/overview.md` | team |
| Answers take 3 to 12 seconds; "think deeply" requests take 20 to 60 seconds | repo `product/live-demo.md` | team |
| If a guest joins, Octo switches to a reduced client mode for the rest of the call | repo `product/live-demo.md` | team |
| Both live-demo rehearsals on the morning of 8 Nov passed, every line answered in English | repo `product/live-demo.md` | team |
| Built as a meeting bot that joins the call, real-time speech, and a language model with tools for knowledge base, tracker, calendar and web | repo `pitch/faq.md` | team |
| Tagline: "Note-takers record the meeting. Octo takes part in it and keeps the work moving after." | deck slide 1, `assets/octo-pitch-deck.pdf` | self-reported |
| Demo videos (`assets/octo-demo-36s-*.mp4`) are illustrations; people and project in them are made up. Ask Oleksii before posting anything publicly | repo `assets/README.md` | team |
| Octocrew (the company) sells "a marketing and creative system for your brand: AI agents in the roles you need, sharing one company brain" | https://www.octocrew.ai/ | self-reported |
| Octocrew's five roles: Email, Paid Media, Website & Conversion, SEO & Content, Social Media; agents work in Slack or Telegram | https://www.octocrew.ai/agents.html | self-reported |
| Octocrew sells done-for-you: dedicated success manager, forward-deployed engineer, $0 separate setup fee, 90-day minimum term, acceptance tests "or the fee back" | https://www.octocrew.ai/ | self-reported |
| Founder: Oleksii Nikitin, "Building multiplayer AI for marketing teams @ Octocrew, 2x bootstrapped founder ($2M revenue in one year, 150k customers)" | https://ua.linkedin.com/in/pandore (search snippet) | third-party (snippet of self-description) |
| Alina Uvarova, "CMO & Co-Founder at octocrew.ai" | https://pt.linkedin.com/in/alina-uvarova/uk (search snippet) | third-party (snippet) |

## Pricing

- **Octo:** no price. "There's no public price yet." (repo `pitch/faq.md`, team). Captured 2026-11-08.
- **Octocrew marketing agents (different product, for context):** "AI marketing agents from $700 to $1,000 per role per month, in USD. Implementation, onboarding and maintenance included. No separate setup fee." Founding monthly prices: Social Media $500, SEO & Content $600, Email $700, Paid Media $800, Website & Conversion $800, with the first 90 days prepaid. Source: https://www.octocrew.ai/pricing.html (self-reported), captured 2026-11-08.
- **Custom agent preflight:** $1,000, credited toward implementation within 30 days. https://www.octocrew.ai/agents.html (self-reported).
- No free trial or freemium found for any Octocrew product.

## Proof found

| Proof | Source | Type | Usable for Octo? |
|---|---|---|---|
| Octo runs daily on Octocrew's own calls | repo `product/overview.md` | team | Yes, as "we use it every day" |
| Two clean live-demo rehearsals on 8 Nov | repo `product/live-demo.md` | team | Internal only |
| Podavach (e-commerce): "1 operator · 7 agents", "250+ support replies drafted every month", "9 lifecycle flows live" | https://www.octocrew.ai/ | self-reported | **No.** Marketing agents, not Octo |
| Testimonial, Slava, CEO Podavach: "I approve the work; AI crew runs the store. It's a full ops and marketing team that fits in my Slack." | https://www.octocrew.ai/ | self-reported | **No.** About marketing agents |
| Testimonial, Peter, COO seed-stage fintech: "We finally ran the marketing we always knew we needed and could never staff." | https://www.octocrew.ai/ | self-reported | **No.** About marketing agents |
| No named Octo customer, pilot, usage number or testimonial found | repo and site | n/a | Gap |

## Reviews and community

- **Octo:** no reviews anywhere (not launched). Queries: `"octocrew" Octo meeting agent calls Google Meet OR "Product Hunt" OR G2`.
- **Octocrew:** "G2 lists no ..." reviews per a third-party roundup, https://superapp.dev/blog/the-best-ai-marketing-agents (search snippet, 2026-11-08). Listings exist on aitoolboard.com, sidehunt.io, liftoapp.com (directory pages, no ratings captured).
- **Category signal (buyer pain), search snippets only, not verified verbatim because Reddit returned 403:**
  - "You create your notes, everyone knows about them and no one has ownership over that item. It dies in the doc that its placed in by the time you ..." r/SaaS, "Do you actually use action items generated from AI meeting ...", https://www.reddit.com/r/SaaS/comments/1xcdvqv/do_you_actually_use_action_items_generated_from/
  - "I usually use one tool to get clean notes or a summary first, then I still move the actual action items into whatever task system I'm using." r/ProductivityApps, https://www.reddit.com/r/ProductivityApps/comments/1togdn0/i_tried_a_few_ai_meeting_tools_because_summaries/
  - "Nothing sticks because the problem isnt really the tool its that I cant capture stuff while also being present in the conversation. Feels like im either engaged OR taking notes, never both." r/gsuite, https://www.reddit.com/r/gsuite/comments/1pjjlmm/how_do_you_keep_track_of_action_items_when_youre/
  - "AI meeting tools are set up once and then forgotten on their defaults, which means summaries sit in a dashboard nobody checks." r/MeetGeek, https://www.reddit.com/r/MeetGeek/
  - These match Octo's problem statement closely (tasks die after the call; notes vs. taking part). community-listener should pull the full threads by browser before any of them goes in an asset.

## Funding and news

| Item | Source | Note |
|---|---|---|
| Octocrew post: "We've already welcomed customers ranging from SMEs to international enterprises ... And now, we've raised a $2M pre-seed ..." | https://www.linkedin.com/posts/octocrew_aiagents-marketingoperations-claudeforstartups-activity-7515432165875195904-tGkw (search snippet; page blocked) | self-reported, date not captured |
| "Octocrew AI has not raised any funding rounds yet." | https://tracxn.com/d/companies/octocrew-ai/__kMajErGzuiRw5nJbve6KF4JYplmdRwobyfIoy9OqnsE (search snippet) | third-party, likely stale. **Conflict: confirm with Oleksii before using either** |
| Oleksii Nikitin LinkedIn post: "I started a new company. It is called Octocrew ..." | https://www.linkedin.com/posts/pandore_i-have-been-quiet-here-for-a-while-so-here-activity-7492606202443444225-ByOb (search snippet) | founder, date not captured |
| Octo English call mode launched November 2026 | repo `product/overview.md` | team |

## Competitors

| Name | URL | Positioning (their words) | Price (from their page, 2026-11-08) |
|---|---|---|---|
| Otter.ai | https://otter.ai/pricing | Plans "for individuals, teams, organizations, and enterprises". Ships a "Hey Otter" Meeting Agent (repo `market/landscape.md`, sources [2][3] there) | Basic free; Pro $8.33/user/month annual, $16.99 monthly; Business $19.99 annual, $30 monthly (USD) |
| Fireflies.ai | https://fireflies.ai/pricing | Page title: "Fireflies.ai, AI Teammate & Note Taker". "Hey Fireflies" in live meetings on Google Meet, Zoom, Teams, available to "all users, including Free" (https://guide.fireflies.ai/articles/8186888414-talk-to-fireflies-in-live-meetings) | Free; Pro $10/seat/month annual; Business $19/seat/month annual |
| ZoomMate (Zoom) | https://www.zoom.com/en/products/ai-assistant/ | "Meet ZoomMate, your AI teammate. ZoomMate analyzes, learns, and acts on your conversations to complete your work." Before: agendas and prep; after: "Salesforce updates, follow-up emails, and drafting decks" | "plans starting at $20 /month/user" |

Read on the three: Fireflies already speaks on a wake word for free on the three biggest platforms, and both Fireflies and ZoomMate use the word "teammate". "AI teammate" alone does not differentiate Octo. What none of the three claim on the pages fetched: updating the team's own tracker when someone says "done" on a later call, per-person task DMs with the source quote, Slack Huddles / Webex / GoTo coverage. That is the candidate wedge, still to be tested with buyers.

## Branding

| Item | Value | Source |
|---|---|---|
| Logo (mark) | https://www.octocrew.ai/assets/brand/logo-mark.png | https://www.octocrew.ai/ (Firecrawl branding) |
| OG logo | https://www.octocrew.ai/assets/brand/logo-original.png | https://www.octocrew.ai/ meta og:image |
| Octo character | `assets/screenshots/octo-mascot.png` | repo |
| Primary / accent | #C4E833 (lime; primary buttons, text on it #1A2200) | https://www.octocrew.ai/ |
| Secondary | #3F007F (deep purple) | https://www.octocrew.ai/ |
| Background / text | #FAF9FB / #0B0B0E | https://www.octocrew.ai/ |
| Fonts | DM Sans (headings), Inter (body), Geist Mono (mono labels) | https://www.octocrew.ai/ |
| Shape | 16px radius cards, pill buttons (999px) | https://www.octocrew.ai/ |
| Visual tone | Deep purple plus lime, spaced mono eyebrow labels, product UI shown in frames; the Octo deck uses the same palette | site and `assets/octo-pitch-deck.pdf` |

## Unknowns

- Any Octo page, waitlist, sign-up or domain: looked on octocrew.ai home, agents and pricing pages, and searched; none found.
- Octo users outside Octocrew, usage numbers, retention: not in the repo, not on the site.
- Which trackers work end to end (create and update): repo says "Notion, Asana, Trello and others"; Jira, Linear and ClickUp (named in the ICP hypotheses) are not confirmed.
- Funding: two snippets conflict ($2M pre-seed vs. no rounds); neither page could be fetched.
- Hackathon judging criteria and submission deadline: not in the repo. Pitch length is 90 seconds per `pitch/pitch-script.md`.
- Reviews: none for Octo; G2 reportedly lists none for Octocrew.

## Gaps for the product owner

Ranked by how much each answer changes the campaign.

1. **Brand and offer architecture.** Is Octo launched as its own self-serve product (own name, domain, monthly price), or as a module inside Octocrew's done-for-you service ($700 to $1,000 per role per month)? This decides the audience, the landing page, the price and the funnel.
2. **What can a stranger do after the pitch?** Is there, or can there be by the final pitch, a real destination: a waitlist, a "bring Octo to my call" booking, a self-serve trial? Who outside Octocrew can actually use Octo this month?
3. **Proof we may publish.** Beyond Octocrew's own team, has any client or pilot used Octo? Any numbers we can quote (calls per week, tasks sent by DM, tracker updates), and may we name anyone? Can the demo videos and screenshots be used in public launch assets?
4. **Which integrations work end to end today?** Create and later update tasks in which trackers (Notion, Asana, Trello confirmed; Jira, Linear, ClickUp?), and on which of the six platforms is the full loop proven, not just joining the call? This picks between the agency ICP (ClickUp, Asana) and the product-team ICP (Jira, Linear).
5. **The guest experience and the trust promise.** What exactly does a guest see and receive (reduced client mode, their own task DM, a link)? How is consent handled, and what will Octo never do? The "every guest sees Octo" growth loop depends on this.

Event facts to confirm (any teammate can): the jury's judging criteria and the submission deadline.
