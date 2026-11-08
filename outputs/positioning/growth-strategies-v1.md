# Growth strategies on top of paid and plugins

Three ideas Oleksii brought on 8 Nov, on top of Meta, YouTube creators and the Claude Code and Grok Bot plugins ([`bold-idea-v1.md`](bold-idea-v1.md) #4). The source he named is in brackets. **Oleksii's pick: make every Meet call a demo.**

| Strategy | What it means for Octo | First step this week | Metric | Risk |
|---|---|---|---|---|
| **1. Product-led loop** (PLG; Curo, Sep 2026) | Every call Octo joins shows guests what it does. **The pick.** | Ship the guest footer (below) on our own calls | Guests who click through, per call | Messaging guests without consent |
| **2. Win AI answers** (AEO; Improvado, Sep 2026) | Get Octo named when people ask ChatGPT, Perplexity, Claude or Google "which AI meeting assistant creates tasks?" | Publish the comparison as its own page, plus FAQ markup and an `llms.txt` on the landing | Octo mentioned in AI answers for 10 test questions, checked weekly | Slow. Results take weeks, not days |
| **3. One narrow use case** (NURO, May 2026) | Lead with one meeting, not "every call" | Pick the meeting (below) and rewrite the hero, ads and demo around it | Landing conversion vs the current version | Narrower audience per ad |

## 1. Make every Meet call a demo (the pick)

Note-takers grew because their bot sat in other people's meetings. Octo goes further: the guest doesn't just see a recording notice, they see Octo work.

**How it works on a call:**
- **The name in the participant list** says what it is and where to get it: "Octo, AI teammate · octo-landing-47q.pages.dev". Until there's a real domain, a short URL.
- **On the call:** when someone asks "Octo, ...", every guest sees the answer appear on its tile. That's the demo.
- **After the call:** a guest who was given a task gets it by message, with the quote, and one line at the end: "Sent by Octo, the AI teammate on this call. Want it on your team's calls? Invite Octo to your next call." The link carries `utm_source=octo-guest`.
- **The meeting page** (Octo already makes one per meeting) gets the same footer when it's shared.

**Rules, so the loop doesn't backfire:**
- Only guests who were actually assigned something get a message. No marketing to everyone on the call.
- The host can switch guest messages off per call, and every message has an opt-out.
- Octo joins visibly and speaks only when called. The research shows people trust bots less when they feel ambushed ([`market-research-v1.md`](../research/market-research-v1.md)).

**This weekend vs later:**
- **Now, no code:** pitch it as the growth loop. On our own calls, the display name change may be possible as a setting. Ask `ops-okto`, who owns Octo's code and prod.
- **Later, product work:** the guest message footer, the meeting-page footer, tracking per call.

**What success looks like:** each call with guests brings at least one visit to the landing. Track guest clicks per call and invites per guest.

## 2. Win AI answers (AEO)

When a founder asks an AI assistant "best AI meeting assistant that updates Asana", the answer comes from pages that state the facts plainly and get cited elsewhere.

- **On our site:** a standalone "Octo vs note-takers" page from [`outputs/website/comparison.md`](../website/comparison.md), an FAQ with `FAQPage` structured data, and an `llms.txt` describing Octo in plain words.
- **Off our site:** listings where AI answers pull from: Product Hunt, G2 or Capterra once there are users, and the "best AI note-taker" roundups the creators in [`youtube-creators-v1.md`](../research/youtube-creators-v1.md) publish. Honest answers in Reddit threads about note-takers that don't follow up.
- **Test set:** 10 questions a buyer would ask. Check weekly in ChatGPT, Perplexity, Claude and Google which tools get named.

## 3. One narrow use case

"Every call" is hard to picture. One meeting is easy. Two candidates:

| Use case | Why it works | Why not |
|---|---|---|
| **The weekly team call** (recommended) | Internal, so no bot-consent friction. Recurring, so Octo's memory shows: "what's still open from last week" and tasks closing when someone says "done". Every small team has one | Less dramatic than a client call |
| **Client calls at agencies** | Matches the statement. Lost client requests cost money | A bot on a client's call needs the client's OK. Some clients push back |

The sales research points the same way: Octo is strongest in internal meetings where everyone is on the same side, like the pipeline review ([`sales-teams-test-v1.md`](../research/sales-teams-test-v1.md)).

If the team picks the weekly team call, the hero could read: "Your weekly team call, with a project manager in it." The Meta creatives would open on a team sync, not a client call.

## How they fit together

Meta ads and creators bring the first teams in. Each of their calls then shows Octo to guests (strategy 1). AI answers and the comparison page catch the people already searching (strategy 2). One clear use case makes every ad and every guest message easier to get (strategy 3). The plugins reach developers who live in Claude Code (bold idea #4).
