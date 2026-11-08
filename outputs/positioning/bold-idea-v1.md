# Bold idea v1

The brief: "one move a normal campaign wouldn't make". Four candidates, each with how it would actually run. The recommendation is at the bottom.

## 1. The product runs its own sales call

**The move:** no sales rep. The "Get early access" button books a 20-minute call, and Octo hosts the demo itself. It greets the prospect, shows what it does on its own tile, answers their questions by voice, and after the call sends them a task message, the same one their team would get: "Try Octo on your Thursday standup", with the quote from the call it came from.

**Why a normal campaign wouldn't:** every SaaS demo is a person with slides. Here the demo is the product doing its job on the prospect's own call. If they're impressed, they've already seen it work.

**How it runs:**
1. The landing CTA links to a booking page (Cal.com or Google Calendar appointment slots).
2. Oleksii joins each call with Octo for the first week, as a safety net.
3. Octo runs a fixed demo script, the same 6 lines rehearsed for today's stage demo.
4. After the call, the prospect gets their follow-up from Octo.

**Cost:** €0 extra. **Risk:** Octo has fewer abilities when outside guests are on the call, and a wrong answer in front of a buyer hurts. **Check with Oleksii before promising it.**

**Headline for the page:** "Talk to Octo, not a sales rep."

## 2. "Fire your note-taker" week

**The move:** people send us the AI summary from their last meeting (Otter, Fireflies, Fathom, anything). We reply with what Octo would have *done* with it: the tasks, who owns each one, the deadline, the quote it came from, and what it would have updated in their tracker.

**Why a normal campaign wouldn't:** it uses the competitor's output as our ad. Each reply is a personalised before-and-after.

**How it runs:**
1. A landing section and a LinkedIn post: "Paste your last meeting summary. We'll show you what got lost."
2. A form or email collects the summary.
3. For the hackathon, the team turns it into tasks by hand, or with an LLM using the Octo task format. After that, Octo does it.
4. Every reply ends with "Want this on every call? Get early access."

**Cost:** time only. **Risk:** people paste confidential meeting notes. Ask for a summary with names removed, and delete submissions after 7 days.

## 3. Every guest gets their own task

**The move:** anyone on a call with Octo, including clients and outside guests, gets their own task message after the call, with a line at the end: "Octo, the AI teammate on this call. Want it on your team's calls?"

**Why a normal campaign wouldn't:** it isn't a campaign, it's the product as the distribution channel. Fireflies and Read.ai grew by sending the bot into every meeting. Octo's version gives the guest something useful, not just a recording notice.

**How it runs:**
1. Octo already sends tasks to each person on the team. Extend it to guests who were assigned something.
2. Add the one-line footer with a tracked link (`utm_source=octo-guest`).
3. Measure guest-to-sign-up rate.

**Cost:** product work, not ad money. **Risk:** messaging guests without consent. It needs an opt-out and the host's approval per call. Not shippable today, so pitch it as the growth loop, not a weekend experiment.

## 4. Octo as a plugin for Claude Code and Grok Bot

**The move:** don't ask teams to adopt one more tool. Ship Octo inside the AI assistants they already work in, so their own assistant can join calls through Octo.

- **Claude Code plugin.** `/octo join <meeting link>` sends Octo to the call. After the call, the tasks come back into the developer's session, and Claude Code can start on them right away. "The standup ends, and your coding agent already has the ticket."
- **Grok Bot plugin.** Ask Grok Bot to join your call. It joins through Octo, speaks there as your assistant, and reports back in the chat.

**Why a normal campaign wouldn't:** the plugin directory listing is the ad. Developers share plugins with each other, and every install brings Octo into a new team's calls.

**How it runs:**
1. **Claude Code:** Octo's actions (join a call, ask Octo, list my tasks from the last call, mark one done) packaged as an MCP server, plus a plugin with `/octo` commands, published in a public plugin marketplace repo. People install it with `/plugin install`.
2. **Grok Bot:** first check that Grok Bot has a public plugin or tool API. A quick search on 31 Oct found none, and no call plugin for it either, so treat it as a hypothesis for now.
3. **For the hackathon:** a landing section "Octo for Claude Code and Grok Bot" with one waitlist button per plugin, plus a 20-second terminal clip showing `/octo join`. Count sign-ups per plugin.

**Cost:** product work. Octo needs a public API first, because today it runs on our own setup. **Risk:** Claude Code users are developers, so this speaks to audience #2 (startup product and engineering leads), not the agency owners in the main campaign.

## Recommendation

**Pitch #1 as the bold idea, and #3 as the long-term loop.**

- **#1** fits the hackathon: the room just watched Octo run a live demo on stage. "The product sells itself on your call" is one line and easy to believe after that.
- **#3** is how it grows after the campaign: every call brings in the next customer.
- **#2** is the safest to run this week with no product work, so keep it as a backup if Oleksii says no to #1.
- **#4** is where Octo goes next. Show it in the pitch as the distribution bet, and test demand today with the waitlist buttons.
