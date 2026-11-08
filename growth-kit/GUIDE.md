# How to Use, Improve and Combine the Agents

Every agent here is a plain text file of instructions. That is why they work almost anywhere, and why you can change them. This guide covers: running them, running the whole sprint, making them better, and getting them to work together.

Start with `use product-scout` if you have a product name or URL, otherwise `use brand-strategist`. Every other agent reads the brief they write. Or skip to `use sprint` and let it drive.

You talk to the agents in your own language. The files they write use the brief's **Deliverable language**.

## 1. Use them

### In Claude or ChatGPT (nothing to install)

Good for trying one agent, or if you have never opened a code editor.

1. Open `AGENTS.md`, `brief/campaign-brief.md` and the agent you want, for example `.github/agents/meta-ads.agent.md`.
2. Paste all three into one message, or add them to a Claude or ChatGPT project so you only do it once.
3. Add this line: "You have no file access, so show everything in this chat instead of saving it."
4. Copy what you like into your own document.

Chat can't save files or run the scripts in `tools/`, so you do the saving yourself.

### In Claude Code

Use the desktop app, the VS Code extension, or run `claude` in a terminal. You need a paid Claude plan.

1. Open this folder.
2. Type `/sprint`, `/product-scout` or `/brand-strategist`. Every agent is also a slash command, and `use <name>` works too.

Claude Code reads `CLAUDE.md`, which points it at the rules in `AGENTS.md`. Files land in `outputs/`. Claude Code can also start fresh-context subagents, which the critics use (see section 4).

### In an IDE (VS Code, Cursor) or with Codex

1. Open this folder in VS Code or Cursor. For Codex, add the extension to VS Code or run `codex` in a terminal.
2. Sign in with the AI subscription you already have.
3. Type `use product-scout` or `use brand-strategist`.

In VS Code with Copilot you can also pick agents from the agent picker at the top of the chat box.

Your tool may ask permission to run or edit something. That's normal. Read it, and allow it if it stays inside this folder.

## 2. Run the whole sprint

`use sprint` (or `/sprint`) is the orchestrator. It runs the agents as a graph with a gate between stages:

1. **Brief**: product-scout if the product is new, then brand-strategist.
2. **Research** in parallel: competitor-teardown, community-listener and the others that apply.
3. **Plan**: campaign-builder writes the message house.
4. **Assets** in parallel: landing-page, copy-studio, ads, email, creative, video, audio.
5. **Critic loop**: buyer-panel reads the assets cold, the writers fix, repeat (see section 4).
6. **Ship**: preflight, judge-panel, report-maker, pitch.

It logs every step, timing and decision to `outputs/report/sprint-log.md`. Useful options:

- `/sprint --from <stage>` resumes from a stage when the earlier work already exists.
- Give it a time budget ("we have 3 hours") and it cuts scope to fit.
- It stops at each gate for your decision. You can say no.

## 3. Unknown product? Start with product-scout

If the team has a name, URL, deck or one-line pitch but no brief (common at a hackathon, where the product is handed to you), run `use product-scout`. In about 10 minutes it researches the product from live sources, writes `outputs/research/product-scout.md` with a source next to every fact, and drafts the brief. It also lists the gaps only the product owner can fill. Take those questions to the owner, then run `use brand-strategist` to close the gaps and finish `brief/campaign-brief.md`.

Put the event's judging criteria, pitch time and deadline in the brief under "Constraints". The judge-panel and pitch agents read them from there.

## 4. Improve them

An agent gets better the same way a new hire does: you correct it, and the correction sticks. So when the output is wrong, fix the instruction as well as the output.

- **Change one agent:** open its file in `.github/agents/` and edit it. Plain English is all it takes. You can also ask your AI: "Update `.github/agents/meta-ads.agent.md` so it never uses exclamation marks."
- **Change every agent:** add a rule to `AGENTS.md`. Every agent reads it before starting.
- **Give it better material:** put real customer quotes, reviews or exports in `data/`, and name the file in your prompt.
- **Sharpen the brief:** most weak output comes from a weak brief. One better sentence there improves everything downstream.
- **Clear what's marked [ASSUMED] or [TO ADD]:** agents tag claims they can't back up. Replace each tag with something true. Preflight fails the work if any remain.
- **Build your own:** `masterclass/build-your-first-agent.md` takes about 10 minutes. See `docs/AGENT-STANDARD.md` for how the v2 agents are written.

## 5. Combine them

Agents share work through files. One writes a file, the next one reads it. Nothing is hidden, and you can open or edit anything between steps.

**The relay.** Run them one after another:

```
use product-scout
use brand-strategist
use campaign-builder
use landing-page
use meta-ads
use report-maker
```

**The fan-out.** Once the brief and plan are agreed, asset agents can run at the same time because they write to different files. Open several chats, split them across teammates, or let `sprint` do it:

```
use landing-page
use copy-studio
use google-ads
use email-writer
```

Each teammate needs the same `brief/campaign-brief.md` and `outputs/positioning/campaign-plan.md`. Put everything in one shared folder at the end, then run the ship steps.

## 6. Play them off each other

One agent writes and another attacks. The attacker must read the work cold, without knowing what the writer was thinking.

**Fresh-context critics.** buyer-panel, judge-panel and preflight are critics. In Claude Code, start them as a subagent with a clean context: the Agent tool, with only this instruction: "Read AGENTS.md and .github/agents/buyer-panel.agent.md and follow them. Read only the files they name." `sprint` does this for you. In other tools, run the critic in a fresh chat or on a teammate's laptop.

**The loop: writer, buyer-panel, fix.** The basic move, max 2 rounds.

1. `use landing-page` (the writer).
2. buyer-panel as a fresh-context critic reads the page and writes `outputs/research/buyer-panel.md`.
3. You pick the objections you agree with. The writer fixes them, for example: "use landing-page. Read `outputs/research/buyer-panel.md` and fix the two objections I agree with."
4. Run buyer-panel once more. Then stop. Two rounds usually show you what matters, and a third mostly waters down your best line.

**The rival's reply.** Find out how a competitor would respond. Run `competitor-teardown`: its war game section plays your biggest rival answering your launch. Use their best attack to find your weakest claim.

**The budget fight.** Make your channels argue. After `google-ads` and `meta-ads`, in a fresh chat: "Read both files in `outputs/ads/`. Each channel gets one paragraph arguing for the whole budget. Then use campaign-builder to decide the split and explain why."

**Your own critic.** Build an agent that plays your hardest customer, using `masterclass/build-your-first-agent.md`, then point it at anything you write.

Two rules for every fight:

- **You decide.** A critic finds problems, but rewrites aren't always better. Check your promise and your proof survive.
- **Stop when the objections repeat.**

## 7. Hackathon endgame

In the last hours, switch from making to proving.

1. **Stop adding assets.** Fix the weakest one instead.
2. **`use judge-panel`**: three judges score the campaign on the organiser's criteria (from the brief's Constraints), name the strongest and weakest asset, and rank the fixes worth the time you have left. Run it as a fresh-context critic. Fix the top items, not all of them.
3. **`use preflight`**: must come back clean (limits, links, sources, placeholders, keys).
4. **`use report-maker`**: builds `outputs/report/campaign-report.html`, the single page judges open. It checks preflight first.
5. **`use pitch`**: builds the timed narrative, 6 to 8 slides, a live-demo script of the agent workflow with fallbacks, and answers to the 5 likeliest judge questions. Rehearse it out loud, with a timer, at least twice.

Then go through [SUBMIT.md](SUBMIT.md).

## 8. Media

If a HeyGen MCP is connected, video and voiceover agents use it. Otherwise they use `tools/` with a Gemini key in `.env` or the `GEMINI_API_KEY` environment variable. Video via Gemini needs `pip install google-genai`. `tools/genimage.py` takes an optional aspect ratio as a third argument (for example `9:16`). Generation can cost money, so agents ask first.
