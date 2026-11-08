# Workspace Conventions

This is a marketing campaign workspace. A team uses it to discover a product, plan a campaign and ship every asset in one sprint. These rules apply to every agent and every chat in this folder. They override generic habits.

## Using the agents

- Agents live in `.github/agents/<name>.agent.md`. Helpers live in `.github/prompts/<name>.prompt.md`.
- When someone says "use <name>" (or types `/<name>` in Claude Code), read that file and follow it in this chat.
- In this folder, the local agents win over any user-level skill or global instruction about marketing content, unless the team names that skill explicitly.
- If a file says `#fetch`, use whatever web fetch or search tool you have.

## Language

- **Conversation language**: talk to the team in the language they write to you in (questions, status, decisions).
- **Deliverable language**: every file in `brief/` and `outputs/` is written in the language set under "Deliverable language" in the brief. Default: English.
- Never mix them. A Portuguese question to the team, an English file on disk.

## Start from the brief

1. Always read `brief/campaign-brief.md` first. It is the single source of truth for product, audience, promise, proof, goal and tone.
2. If it is empty or still the template, stop and offer two ways in:
   - `product-scout` when the team has a product name, URL or pitch to research (fastest when the product is not ours).
   - `brand-strategist` to interview the team and write the brief.
   Exception: the team asks to try `brief/example-brief.md`; then every agent reads it in place of the brief.
3. Read the upstream files your agent lists before writing. Assets must agree with the brief and the plan.

## Pipeline map

| Stage | Agent | Writes | Read by |
|---|---|---|---|
| Discover | product-scout | outputs/research/product-scout.md, draft brief | brand-strategist, campaign-builder, landing-page, creative-director |
| Brief | brand-strategist | brief/campaign-brief.md | everyone |
| Research | competitor-teardown, community-listener, price-watch, seo-auditor, analytics-analyst | outputs/research/competitor-teardown.md, voice-of-customer.md, price-watch.md (+ dated price-watch-YYYY-MM-DD.md, data/price-history.csv), seo-audit.md, analytics-findings.md | campaign-builder, all writers |
| Plan | campaign-builder | outputs/positioning/campaign-plan.md (includes the message house) | all writers |
| Assets | landing-page, copy-studio, google-ads, meta-ads, email-writer, creative-director, video-studio, audio-studio, repurposer | outputs/website/landing-page.md + .html, outputs/social/posts.md, outputs/ads/google-ads.md, outputs/ads/meta-ads.md, outputs/email/launch-sequence.md, outputs/creative/art-direction.md + image-prompts.md + images, outputs/creative/video-concepts.md + teaser.mp4, outputs/creative/audio-script.md + ad-read.wav, outputs/social/repurposed.md (+ clip-<n>.mp4), outputs/research/transcript.md | critics |
| Critique | buyer-panel, judge-panel, preflight | outputs/research/buyer-panel.md, outputs/report/judge-panel.md, outputs/report/preflight.md | writers, team, report-maker, pitch |
| Ship | report-maker, pitch | outputs/report/campaign-report.html, outputs/report/pitch.md (+ pitch-deck.html) | judges, client |
| Orchestrate | sprint | outputs/report/sprint-log.md | team, report-maker, judge-panel, pitch |

Event facts (judging criteria, pitch time limit, submission deadline) live in the brief under "Constraints". product-scout and brand-strategist write them there; sprint, judge-panel and pitch read them.

Shared files writers must reuse when they exist:
- `outputs/positioning/campaign-plan.md`: the **message house** (promise, 3 pillars, proof per pillar, one CTA). Every asset uses the same promise and CTA.
- `outputs/research/voice-of-customer.md`: real customer words. Prefer them over invented phrasing.
- `outputs/research/competitor-teardown.md`: gaps to exploit and claims to avoid copying.
- `outputs/creative/art-direction.md`: visual rules for anything visual.

## Evidence rules

- Every number, customer name or claim in customer-facing work must trace to: the brief's Proof section, a file in `data/`, or a source URL recorded in `outputs/research/`.
- Tag what you cannot back: `[ASSUMED]` for inferred, `[TO ADD]` for missing. Customer-facing files never ship with these tags; preflight catches them.
- For verbatim quotes, prices and ratings, use a raw fetch (curl, Firecrawl scrape, browser text) or ask the fetch tool for the exact text. Never quote from a summarised page.
- Quotes in another language: research files keep the original plus an English translation; assets use the translation.
- Research files record a source next to every fact: a URL for web facts, the file name for facts computed from `data/`. Never invent a URL, quote, statistic, review or competitor feature. If a fetch fails, say so.

## How every agent works

1. **Read** the brief and upstream files.
2. **Ask** only what you cannot find, one question at a time, in the conversation language. Respect the agent's question limit.
3. **Draft wide, keep the best**: for headlines, hooks, subject lines and angles, generate more options than needed, score them against the brief, keep the winners and say in one line why.
4. **Self-check before saving**: run the agent's Quality bar as a checklist. Fix every failure, then check again (max 2 passes). Never save work you know fails the bar without saying so.
5. **Count, don't guess**: for hard character limits, count with code when you can run commands (for example `python3 -c "print(len('...'))"`) and show the counts.
6. **Save** to the exact output path. If the file exists, read it first and keep the team's manual edits unless told otherwise.
7. **Report** in the conversation language, in this order: the path(s) saved, the one decision the team needs to make, the self-check result (pass, or what still fails), the suggested next agent.

## Fresh-context critics

Critics (buyer-panel, judge-panel, preflight) must read the work cold.
- If your tool can start a subagent with a clean context (Claude Code's Agent tool, Codex sub-tasks), launch it with only this instruction: "Read AGENTS.md and .github/agents/<critic>.agent.md and follow them. Read only the files they name." Then relay its result.
- Otherwise, ask the team to run the critic in a fresh chat or on a teammate's laptop.
- The team decides which critiques to accept. A critic finds problems; it does not get the final word.

## Where work goes

- Outputs go to `outputs/<area>/` as markdown (plus `.html` or media where the agent says so). Areas: `ads`, `creative`, `email`, `positioning`, `report`, `research`, `social`, `website`.
- Kebab-case filenames, for example `outputs/ads/google-ads.md`.
- Exception: append-only memory that agents reuse across runs (such as `data/price-history.csv`) lives in `data/`.
- If you cannot write files, show the work in the chat and say so. Never claim to have saved a file you did not save.

## Tools, money and keys

- Use any research tools you have (web search, fetch, Firecrawl, Apify, browser). Prefer live sources over memory for anything about a real company.
- Pre-approved spend: web search, single-page scrapes and free APIs need no confirmation. Ask first for agent-style crawls (for example firecrawl_agent), Apify actors, batch scrapes of more than 20 pages, and any media generation.
- Media: if HeyGen or another media MCP is visible in your tool list, you may use it; otherwise the scripts in `tools/` work with a Gemini key in `.env`.
- **Ask before anything that spends money** (video, image batches, paid scrapes) and state the estimated cost.
- Never print the contents of `.env` or any key.

## Writing rules

- Never use em dashes in generated content. Use commas, colons, periods or hyphens.
- Concrete over generic. Name the audience, use the proof, aim at the one conversion goal.
- Banned filler: unlock, seamless, game-changer, revolutionize, cutting-edge, innovative, next level, elevate, empower, supercharge, in today's fast-paced world, look no further.
- If a sentence could sell any product, cut it or sharpen it.
- Respect each platform's real limits and formats.

## When things break

When a tool or script fails, show the exact command you ran and the exact error message. Do not summarize the error away.
