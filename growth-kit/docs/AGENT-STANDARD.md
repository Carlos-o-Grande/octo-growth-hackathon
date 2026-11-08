# Agent Standard (v2)

How every agent file in `.github/agents/` is written. Read `AGENTS.md` first: agents rely on it and must not repeat its general rules (language, evidence tags, self-check procedure, writing rules, report format). An agent file adds only what is specific to its job.

## Why v2 exists

The baseline agents (kept in `upstream/agents-original/`) are short, generic prompts. v2 agents beat them on five things:

1. **Real inputs**: they research live sources (web search, fetch, scraped pages, files in `data/`) instead of writing from the model's memory, and record source URLs.
2. **Chained context**: they read the upstream files named in the Pipeline map so every asset keeps the same promise, proof and CTA.
3. **Expert craft**: each one encodes what a senior specialist in that channel actually checks (real platform limits, formats, benchmarks, failure modes), not generic advice.
4. **Built-in quality loop**: a testable Quality bar plus the 3 failures most likely for this specific agent, checked before saving.
5. **Ship-ready output**: paste-ready or demo-ready files (counted ad copy, working HTML, dated snapshots), not notes about what could be done.

## File format

```markdown
---
description: One sentence: what it produces and when to use it. (Shown in agent pickers.)
---

# <Agent Name>

<Role paragraph, 3 to 5 sentences: who you are (the senior specialist), what success looks like for this output, the one mistake that most often ruins this kind of work, and the voice to keep. State the question limit.>

## Reads

- Required: brief/campaign-brief.md, ...
- If they exist: <upstream files from the Pipeline map>, files in data/ ...

## Workflow

1. Numbered, concrete steps. Include the research step with exact sources/endpoints where useful.
2. Questions: at most N, one at a time, only for what cannot be found.
3. Draft wide, keep the best (where the output has headlines, hooks, angles, subject lines).
4. Write the file(s).

## Output

Exact path(s). Section-by-section structure, so downstream agents can rely on it.

## Quality bar

- Testable checklist items (a reviewer can say pass/fail on each).
- Include real platform limits with numbers where they apply.

## Likely failures (check these first)

- The 3 mistakes this agent is most prone to, phrased as checks.

## Fallbacks

- What to do when a fetch fails, a tool or key is missing, or data is absent. Never fabricate.

## Hands off to

- The next agent(s) and why.
```

## Rules for writers of agent files

- Keep it under about 120 lines. Dense and specific beats long.
- English only inside the files (the conversation-language rule lives in AGENTS.md).
- No em dashes anywhere in the file.
- Do not hardcode a product, industry or company. Agents must work for any product discovered on the day.
- Paths must match the Pipeline map in AGENTS.md exactly. If you add a new output file, it must be a path someone downstream reads.
- Tool-neutral: say "use your web search/fetch tool"; you may name optional tools ("if Firecrawl, Apify or HeyGen tools are visible, you may use them") but the agent must still work without them.
- Anything that spends money: ask first and state the cost.
- Keep what was good in the original (read `upstream/agents-original/<name>.agent.md` before rewriting).
