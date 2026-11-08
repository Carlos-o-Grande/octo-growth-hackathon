# Value Proposition Hypotheses: Octo

2026-11-08. Input for the team's alignment and for campaign-builder. Each hypothesis is a campaign angle we could test with the €150 to €200 test budget. Capabilities are cited to the repo (`product/`, `launch/`) or to `outputs/research/`. Anything Octo would need to do that is not documented is marked **Confirm with Oleksii**.

## Team decision (2026-11-08): one persona, four value-prop variants

The team keeps one persona (founders, heads of ops and delivery leads at remote agencies, 10 to 50 people) and tests several value propositions against it as ad and landing variants, instead of widening the persona to "anyone who wants to be more productive". Reasons: the generic productivity message is what free note-takers already say, the individual-productivity audience shows the least willingness to pay (`voice-of-customer.md`), and "productive people" cannot be targeted on LinkedIn or Meta.

| Variant | Value proposition | Hook draft | Backed by |
|---|---|---|---|
| V1 Follow-through | Every task reaches the tracker and updates itself | "Your client said it on the call. Did it make it into Asana?" | Tasks by DM with quote; tracker create and update (`product/overview.md`) |
| V2 Prep | Walk into every call already knowing what matters | "The brief is ready before you join." | Pre-call brief: attendees, last discussion, open items (`product/overview.md`) |
| V3 Nobody types (updated after the founder's input) | Just talk: tracker, CRM and Notion update from the conversation | "Nobody on the call typed a word. Asana, the CRM and Notion are already updated." | Founder, verbal: "we just speak and discuss and then all the information in our Notion, in our CRM is being updated" (brief Proof 4) |
| V4 Decide on the call | Status answered on the spot, so the decision happens in the meeting | "Where are we on the launch? Octo puts it on its tile." | Answers from tracker, CRM and knowledge base; shows it on its tile (`product/overview.md`, `product/live-demo.md`) |

"Shorter meetings" is a benefit we may describe, never a measured claim: there is no number behind it. The client-facing side of V2 (objections, pertinent info for the client) stays out of ads until Oleksii confirms what client mode allows (H2 below).

## Original hypotheses

| # | Angle | Who it is for | Status |
|---|---|---|---|
| H1 | Follow-through: the task reaches the tracker and updates itself | Ops and delivery leads at agencies, 10 to 50 | **Lead angle.** Backed by the market gap and the founder's defaults |
| H2 | Client-call prep: walk into every client call knowing what was promised and what they pushed back on | Account managers and founders who run client or sales calls | **Test.** Diego's hypothesis. Strong hook, two capability checks first |
| H3 | The PM you don't have: nobody has to chase follow-ups | Founder-led businesses, 2 to 50, no PM | **Test.** Founder default audience #3 |
| H4 | Trust: joins only when invited, each person sees only their own tasks | Everyone; answers the top objection | **Support line on every asset, not a lead angle** |

## H1. Follow-through (lead)

- **Promise:** every task from the call lands with an owner in your tracker, and updates when someone says "done" on a later call.
- **Backed by:** tasks by DM with the exact quote, tracker create and update, weekly voice review (`product/overview.md`). No competitor page claims the later-call update (`outputs/research/competitor-teardown.md`, gap 1; `outputs/research/market-landscape.md`).
- **Overlap to avoid:** creating tasks from a call is claimed by Teams Facilitator, ClickUp AI Notetaker and Mina (`market-landscape.md`). Lead with the update and the per-person DM, not with "creates tasks".
- **Hook drafts:** "Your client said it on the call. Did it make it into Asana?" · "Say 'done' on Thursday's call. The task closes itself."
- **Channel:** LinkedIn (agency titles, 11 to 50), Meta retargeting.

## H2. Client-call prep and objection handling (Diego's hypothesis)

- **Promise:** walk into every client call knowing who is on it, what you promised last time, what is still open and what they pushed back on.
- **Backed by:**
  - Before the call, Octo prepares a brief: who's attending, what was discussed last time, what's still open (`product/overview.md`).
  - During the call it answers from the team's knowledge base and CRM and searches the web, when called by name (`product/overview.md`).
- **Not documented, Confirm with Oleksii:**
  1. **Client mode.** When a guest joins, Octo switches to a reduced client mode for the rest of the call (`product/live-demo.md`). Live help on a client call may be exactly what client mode turns off. Which abilities stay on with a client present?
  2. **Objections in the brief.** Does the pre-call brief pull concerns or objections the client raised on earlier calls, or only open tasks? Is the brief delivered privately (DM) before the call, so the client never sees it?
  3. **Per-client memory.** Does Octo keep history per client account (last calls, promises, CRM notes), or per team only?
- **How to frame it if client mode limits live answers:** sell the prep, not the live rescue. "Octo briefs you before the call" is safe. "Octo answers your client's objection on the call" is not, until confirmed, and an agent answering a client out loud is also where the trust objection bites hardest (`outputs/research/voice-of-customer.md`, top objection).
- **Competition shifts:** this angle moves Octo toward sales-call tools: Gong and Avoma sell revenue workflows, CRM updates and coaching per seat (`market-landscape.md`, vertical group). Keep it to client-services teams (agencies), where the "client" is an existing account, not a sales pipeline, to avoid fighting Gong on its ground.
- **Who it is for:** account managers and founders at agencies (same audience #1, different job title and pain), founders who run their own sales calls (audience #3).
- **Hook drafts:** "Walk into the client call knowing what you promised last time." · "The brief is ready before you join: who's on, what's open, what they pushed back on." · "Never say 'let me check and get back to you' about your own promise."
- **Test:** split the test budget 50/50 between H2 and H3 hooks on LinkedIn, same audience, same landing page; compare click-through. Only if Oleksii confirms items 1 to 3.

## H3. The PM you don't have

- **Promise:** the follow-up happens even when nobody's job is to chase it.
- **Backed by:** tasks by DM with deadline and quote, weekly task review by voice (`product/overview.md`); founder default hook "The PM who never misses a follow-up" (`launch/audiences.md`, #3).
- **Hook drafts:** "You're the founder and the only one following up. Not anymore." · "Every Monday, Octo reads you who owes what."
- **Channel:** Meta (small business owners, Notion and Trello interests), LinkedIn founders 2 to 50. The market study suggests moving the test budget here (`market-landscape.md`).

## H4. Trust (support line)

- **Promise:** Octo joins only when you invite it, speaks only when called by name, and each person gets only their own tasks.
- **Backed by:** "joins visibly as a participant and speaks only when called by name" (`pitch/faq.md`); each person gets only their own tasks (v0 landing, https://octocrew-hq.github.io/octo-landing/).
- **Confirm with Oleksii:** does Octo ever auto-join calls from the calendar? How do guests consent? What will it never do?
- **Why it matters:** consent and bot fatigue are 19 of 34 customer quotes (`voice-of-customer.md`); auto-join is the most repeated complaint about Fireflies and Otter (`competitor-teardown.md`, gap 2).
- **Use:** one line on the landing page and in ad text. Avoid the word "bot" in headlines.

## Decision for the team

Keep H1 as the campaign's single promise. Pick one of H2 or H3 as the paid test, depending on Oleksii's answers to H2 items 1 to 3. H4 goes on every asset.
