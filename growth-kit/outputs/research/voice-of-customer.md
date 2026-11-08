# Voice of Customer: 2026-11-08

Researcher: community-listener. Product: Octo (AI teammate that joins calls and keeps the tracker current). Deliverable language: English.

**Read this first, three honest limits.**
1. Reddit was unreachable (details below), and Reddit is where the sharpest "action items die after the call" quotes live. Those 4 snippets from product-scout stay unverified and are kept out of every count.
2. No quote identifies the speaker as an agency lead, a Jira/Linear team member or a founder. Audience tags are **inferred from context inside the quote**. `A1~` means client-service context, `A2~` engineering context, `A4` means a person speaking for themselves. `Gen` means no audience can be told. **Audience 3 (founder-led, no PM) has zero quotes.**
3. The set skews to Hacker News, which over-represents privacy-minded technical people. Treat counts as "what this set says", not market sizing.

Audience key: A1 remote agencies/studios 10-50 (ops, delivery, account managers). A2 startup product/engineering teams on Jira or Linear. A3 founder-led small business, no PM. A4 individuals using AI note-takers for themselves.

## Where we listened (source, query, URL, items read)

| Source | Query / URL | Result |
|---|---|---|
| Reddit JSON | `old.reddit.com/r/SaaS/comments/1xcdvqv/.json` (one try, as instructed) | HTTP 302, then 403 on the redirect target. Not reachable. |
| Reddit via Claude in Chrome | own new tab, navigate to the r/SaaS thread | Tool refused: "This site is not allowed due to safety restrictions". Tab closed. No workaround tried. |
| Hacker News Algolia | stories: "Otter.ai", "AI notetaker", "meeting bot", "meeting notes action items"; comments: "notetaker bot meetings", "meeting bot consent", "action items meeting notes", "fathom notetaker" | 6 threads read in full or in part: item 43053921 (Please Stop Inviting AI Notetakers), 48823024 (Leave Your AI Note-Taker at Home), 44446916 (AI note takers flooding Zoom calls), 32751071 (Otter bot without consent), 43023464 (Mikey), 39618640 (Circleback launch). Plus ~30 single comments from search. Multi-word queries often returned nothing; short ones worked. |
| Trustpilot | https://www.trustpilot.com/review/fireflies.ai and https://www.trustpilot.com/review/otter.ai | Newest ~20 reviews each read (cached 6-7 Nov 2026). Mostly 5 star, thin on our themes. Otter reviews are mostly about support and refunds. |
| G2 | https://www.g2.com/products/fireflies-ai/reviews | Page loaded but showed only G2's AI-written FAQ, no review text. Not used as quotes. |
| Capterra | guessed Fireflies URL | **My error:** the ID resolved to Pantheon (web hosting). Discarded, nothing used. |
| Zoom Community | https://community.zoom.com/meetings-2/how-do-i-disable-ai-notetakers-otter-ai-read-ai-fireflies-ai-etc-from-joining-our-meetings-17388 | 14 posts read. Best source for guest and admin reaction. |
| projectmanagement.com | discussion 221646 (AI tools for PMs) | Read. Nothing usable as a pain: posts are tool lists and one vendor plug. Excluded. |
| Web search (2 queries) | tracker + action-item pain; guests and consent | Excerpts only, mostly vendor and law-firm blogs. Not quoted. |
| **Not reached** | Reddit (all), LinkedIn (known blocker, not retried), YouTube comments, Fathom / Read.ai / Capterra / Software Advice review pages, X, Slack/Discord groups | Out of timebox or blocked. |

Source types with usable quotes: Hacker News, vendor community forum (Zoom), review site (Trustpilot). That is 3.

## Pains (verbatim)

**Bot fatigue, consent, guests' reaction (18 quotes, bucket B).** Tag in brackets.

1. [Gen] "These apps are cancer. Otter.ai for example, by default, will scrape the call's contacts, and email every single one, saying they can access the notes if they sign-up." (@footlose_3815, HN, Jul 2025, https://news.ycombinator.com/item?id=44448338)
2. [A1~] "Has a meeting with a client who plugged one in which transcribed the conversation. We closed the meeting and left, however, the client kept it running and they discussed their strategy on how to play us." (@andrewinardeer, HN, https://news.ycombinator.com/item?id=43055668)
3. [A4] "Would if I could figure out how to uninvite my otterpilot ^^'" (@kajecounterhack, HN, https://news.ycombinator.com/item?id=43054512)
4. [Gen] "It's super privacy invading since you are sending this data to a third party without someone else's consent." (@nerdjon, HN, https://news.ycombinator.com/item?id=43054283)
5. [Gen] "I don't trust a random third party startup to properly handle this extremely sensitive data." (@3s, HN, https://news.ycombinator.com/item?id=43055245)
6. [Gen, a bot builder] "built a meeting bot once, forgot the consent chime, legal killed it same week" (@hncbw02z5a, HN, https://news.ycombinator.com/item?id=49642335)
7. [Gen] "It seems like just nobody cares that this is an issue and it's becoming acceptable to just violate confidentiality, privilege, and recording laws because 'convenience.'" (@unstatusthequo, HN, https://news.ycombinator.com/item?id=46206521)
8. [Gen] "If someone sends an AI to my meeting instead of showing up themselves, I'm kicking it out." (@ShakataGaNai, HN, https://news.ycombinator.com/item?id=44458393)
9. [Gen] "If you're not there, you've not attended the meeting, no matter which tools you use to record, transcribe or translate." (@bargainbin, HN, https://news.ycombinator.com/item?id=44447966)
10. [Gen] "Each time I'm in a meeting with an AI note taker I am very tempted to prank the AI / person sending the AI." (@dirkc, HN, https://news.ycombinator.com/item?id=44454884)
11. [Gen, account admin] "Yet every meeting we have I have to kick several of these AI notetakers from our meetings." (durinien, Zoom Community, 12 Jun 2025, https://community.zoom.com/meetings-2/how-do-i-disable-ai-notetakers-otter-ai-read-ai-fireflies-ai-etc-from-joining-our-meetings-17388)
12. [Gen, account admin] "It would be great if Zoom added an account-wide setting to block all third-party AI assistants or require host approval before any AI companion can join." (Jack Bravo, Zoom Community, 5 Aug 2026, same URL)
13. [Gen, org with confidentiality rules] "We have confidentiality requirements that prohibit recording of any kind unless the meeting host records." (Jyoti Ma, Zoom Community, 18 Sep 2026, same URL)
14. [A1~] "I reached this page via Google, furious that a client today sent ONLY their AI note taker to my carefully crafted presentation!" (ohc-platinum, Zoom Community, 14 Jul 2026, same URL). Same person, later in the post: "It was socially rude but I have no idea what was going on in their life."
15. [Gen] "It is a major issue in terms of copyright and privacy to enable AI , notes, transcript etc by default!!!!" (alexandredp, Zoom Community, 26 Jun 2026, same URL)
16. [A4] "I hate sending audio to Otter; it creeps me out." (@ttul, HN, https://news.ycombinator.com/item?id=43026220)
17. [A4, free-tier user, quoted inside a reply] "I am not much of a privacy person but I feel completely abused in this situation." (OP of Tell HN, 2022, quoted by @that_guy_iain at https://news.ycombinator.com/item?id=32751270, thread https://news.ycombinator.com/item?id=32751071)
18. [A4] "Is it possible to use a local model (like whisper) to avoid leaking conversations to the cloud-based AI?" (@dmantis, HN, https://news.ycombinator.com/item?id=43023932)

**Tracker, action items, accuracy (3 quotes, bucket P). Thin on purpose: the best Reddit evidence is unreachable.**

19. [Gen, 2020 thread] "since most people fail to solidify meeting notes, action items from previous meetings are 'lost'." (@dragontamer, HN, https://news.ycombinator.com/item?id=23770752)
20. [A2~] "Something I find annoying with automatic transcriptions and summaries, like the one built into Teams, is that they lack the context necessary to properly interpret what's being said." (@alkonaut, HN, https://news.ycombinator.com/item?id=43025238)
21. [Gen] "Important context is washed out because the ai converts stuff to super generic terms instead" (@simmerup, HN, https://news.ycombinator.com/item?id=48825190)

**Unverified Reddit snippets from product-scout (NOT quotes, not counted).** Search-result snippets; Reddit returned 403 so the full text was never seen.
- r/SaaS, snippet: "You create your notes, everyone knows about them and no one has ownership over that item. It dies in the doc that its placed in by the time you ..." (cut off) https://www.reddit.com/r/SaaS/comments/1xcdvqv/do_you_actually_use_action_items_generated_from/
- r/ProductivityApps, snippet: "I usually use one tool to get clean notes or a summary first, then I still move the actual action items into whatever task system I'm using." https://www.reddit.com/r/ProductivityApps/comments/1togdn0/i_tried_a_few_ai_meeting_tools_because_summaries/
- r/gsuite, snippet: "Feels like im either engaged OR taking notes, never both." https://www.reddit.com/r/gsuite/comments/1pjjlmm/how_do_you_keep_track_of_action_items_when_youre/
- r/MeetGeek, snippet, reads like a summary rather than a user sentence: "AI meeting tools are set up once and then forgotten on their defaults..." https://www.reddit.com/r/MeetGeek/

## Desired outcomes (verbatim)

22. [Gen, client-facing] "Note takers are invaluable, human or not." (@calvinmorrison, HN, https://news.ycombinator.com/item?id=48823178)
23. [A4, possibly A3] "Most of my meetings are customer/market discovery interviews, and having a database of transcriptions I can query and discuss with an LLM has increased my ability to extract value from these interviews 10x while reducing the time I have to take and organize notes by 90%." (@FloorEgg, HN, https://news.ycombinator.com/item?id=43054643)
24. [A4] "I'm not worried about being taken out of context because if I am, there is a recording of the whole thing I can point to." (@idkwhattocallme, HN, https://news.ycombinator.com/item?id=43054152)
25. [Gen] "After working for a company where every meeting had a clear agenda and meeting notes with action items were sent afterwards, I would never want to work in a place that didn't follow the same pattern." (@david-gpu, HN, https://news.ycombinator.com/item?id=44450981)
26. [A1~] "Thorough recording and summary of transcript for us to send to the client, ensuring there are no crossed wires or misunderstanding." (Fireflies review, Trustpilot, 3 Nov 2026, https://www.trustpilot.com/review/fireflies.ai)
27. [A4] "In a long meeting i cant remember everything, but this thing can help me to note." (Fireflies review, Trustpilot, 4 Nov 2026, same URL)
28. [Gen] "It captures the intentions of people and organizes everyone's tasks into executable directions." (Fireflies review, board meetings, Trustpilot, 28 Oct 2026, same URL)
29. [A4, a recruiter] "I would recommend the app especially for recruiters, it saves a lot of time from taking the notes yourself." (Otter review, Trustpilot, 5 Nov 2026, https://www.trustpilot.com/review/otter.ai)

## Objections (verbatim)

The consent, trust and "rude to bring a bot" quotes in the Pains section (4, 5, 7, 8, 9, 13, 15, 16, 18) are the objections. Billing objections:

30. [Gen] "They take your money and refuse to let you cancel." (Fireflies review, Trustpilot, https://www.trustpilot.com/review/fireflies.ai)
31. [A4] "I did not intend to maintain a paid subscription, particularly because I already use another transcription service." (Fireflies review, joined via a working-group link, Trustpilot, 4 Nov 2026, same URL)
32. [Gen, team] "there is a sales feature that pulls your team onto a paid plan sort of in the background which took me a few months to figure out and dig into." (Otter review, Trustpilot, https://www.trustpilot.com/review/otter.ai)

Counter-voice worth knowing (acceptance, not an objection): "We must get used to a world where everything we do and say can be processed by AI." (ohc-platinum, Zoom Community, same thread). Also a vendor-side view on consent: "we're rolling out flexible consent options based on legal needs - like chat messages, silent bots, blinking backgrounds, or consent links before/during meetings." (Hyprnote co-founder @johntopia, a builder, not a buyer, https://news.ycombinator.com/item?id=44725798). Not counted.

## Willingness to pay (verbatim, thin)

33. [Gen, team admin, paying] "When we use more I up the count and when we are slow, I drop them." (Fireflies review about AI credits, Trustpilot, 2 Nov 2026, https://www.trustpilot.com/review/fireflies.ai)
34. [Gen] "Outstanding, safe platform, excellent assistant, and recording usage. Good value for money." (Fireflies review, Trustpilot, 4 Nov 2026, same URL)

No quote gives a price a buyer would pay for an agent that acts, and none asks for one that joins and speaks. Nobody in this set asked for Octo's features by name.

## Exact vocabulary (customer word vs marketing-speak it replaces)

| Customers say | Marketing says | Where |
|---|---|---|
| "bot", "notetaker", "note taker" | "AI teammate", "meeting assistant" | quotes 1, 3, 8, 11 |
| "kick", "kicking it out", "uninvite" | "manage participants" | 3, 8, 11 |
| "sends an AI instead of showing up" | "async attendance" | 8, 9 |
| "without consent", "by default" | "auto-join", "frictionless" | 4, 7, 15 |
| "creeps me out", "feel completely abused" | "privacy concerns" | 16, 17 |
| "who has ownership", "dies in the doc" (Reddit snippet, unverified) | "action item tracking" | product-scout |
| "crossed wires" | "alignment" | 26 |
| "play us" (leaked strategy after the call) | "recording risk" | 2 |

Takeaway: buyers never say "AI teammate". They say "bot". Octo's own category word is the word people are annoyed by.

## Frequency table (counted from the 34 quotes; distinct people)

| Theme | n of 34 | Quotes | Sources |
|---|---|---|---|
| Consent, privacy, trust with a bot present | 10 | 2, 4, 5, 6, 7, 13, 15, 16, 17, 18 | HN, Zoom |
| Bot fatigue: uninvited, can't remove, rude, kicked out | 9 | 1, 3, 8, 9, 10, 11, 12, 14, 13 | HN, Zoom |
| Guest or client side of a bot (they received it, or got emailed by it) | 5 | 1, 2, 9, 10, 14 | HN, Zoom |
| Admin wants a block or approval control | 3 | 11, 12, 13 | Zoom |
| Summary accuracy or lost context | 2 | 20, 21 | HN |
| Action items lost after the call (verified) | 1 | 19 | HN (2020) |
| Billing, cancel or surprise paid plan | 3 | 30, 31, 32 | Trustpilot |
| Time saved, recall, sending notes to a client | 8 | 22, 23, 24, 26, 27, 28, 29, 25 | HN, Trustpilot |

HN threads carry 20 of 34 quotes, Zoom Community 7, Trustpilot 7. One thread (the Zoom admin thread) supplies all of admin and most of guest reactions, so "guest reaction" rests on 2 or 3 independent people. Say so before building a claim on it.

## Who feels it most

Counted from the 34 quotes. Audience tags are inferred (see top).

| Audience | Quotes | Pain intensity (what the quotes show) | Willingness to pay (what the quotes show) |
|---|---|---|---|
| A1 remote agencies/studios | 3 of 34 (2, 14, 26) | **Highest per quote.** A client sent a bot to a presentation ("furious"); a client's bot leaked the other side's strategy; and the one positive quote is about sending notes to the client to avoid "crossed wires". Pain here is about the client relationship, not the tracker. | None stated. |
| A2 startup product/eng teams | 1 of 34 (20) | Mild: summaries miss internal names and context. Nothing on Jira or Linear. | None stated. |
| A3 founder-led, no PM | **0 of 34** | Not heard. Not evidence of absence; the places they talk (Reddit, LinkedIn, X) were unreachable. | Not heard. |
| A4 individuals for themselves | 9 of 34 (3, 16, 17, 18, 23, 24, 27, 29, 31) | Split. Half love it (time saved, recall), half are uneasy about cloud audio and uninvited bots. Pain is privacy, not follow-through. | Only one quote about paying, and it is a complaint about being billed against intent (31). Many are on free tiers. |
| Gen (no audience visible) | 21 of 34 | Where the bot-fatigue and admin-control voices sit. | Two team quotes show paying and flexing credits (33, 34), the only positive WTP signal. |

Reading it: A4 is the loudest by count (9 of 34) but is the audience whose pain Octo addresses least (they want less intrusion, not an agent that speaks). A1 has the sharpest pain but n=3, and the brief's ICP is A1. **The set cannot rank A2 against A3 and cannot prove willingness to pay for any audience.** The ICP bet stays an assumption until Reddit or buyer calls are mined.

## Phrases to steal for copy (8 to 12 short lines)

1. "Note takers are invaluable, human or not." (@calvinmorrison, https://news.ycombinator.com/item?id=48823178). Use to open with respect for the job, then show Octo does more.
2. "no crossed wires or misunderstanding" (Fireflies review, https://www.trustpilot.com/review/fireflies.ai). The client-call win to hit.
3. "organizes everyone's tasks into executable directions" (same Trustpilot page). Close to Octo's per-person task DM.
4. "I'm not worried about being taken out of context because if I am, there is a recording of the whole thing I can point to." (https://news.ycombinator.com/item?id=43054152). Supports the exact-quote-with-each-task feature.
5. "If you're not there, you've not attended the meeting" (https://news.ycombinator.com/item?id=44447966). Octo is there, announced, answering by name. Contrast with a silent bot.
6. "require host approval before any AI companion can join" (Jack Bravo, Zoom Community thread). Octo's host-invites-it model answers this directly.
7. "without someone else's consent" (https://news.ycombinator.com/item?id=43054283). Name consent on the page before a skeptic does.
8. "by default" (alexandredp, same Zoom thread). Use as an anti-pattern: Octo joins only when invited.
9. "tasks into the tracker without anyone retyping them" is NOT a customer quote, do not attribute. Use the unverified Reddit idea ("I still move the actual action items into whatever task system I'm using") only after the thread is read in full.
10. "never both" (r/gsuite snippet, unverified) is the best hook for "take part instead of taking notes". Hold until verified.

## What this means for the campaign (tied to the join-the-waitlist goal)

- **The top objection is the bot itself, not the price.** 10 of 34 quotes voice consent or trust, and 9 voice fatigue. Octo is a participant that joins calls, so every skeptic reads it as the same thing. Put "joins only when you invite it, says so out loud, leaves when asked" next to the first call to action. The product-scout gap 5 (guest consent) is now the top campaign risk.
- **Drop "AI teammate" and "bot" from the headline.** Customers use "bot" as an insult. Lead with the outcome in their words: nobody takes notes, nothing gets lost, the tracker is already updated.
- **The agency ICP's real trigger in this data is the client relationship** (crossed wires, a client's bot, strategy leaking), more than a stale tracker. Test a message about "the client asked for what we agreed three weeks ago" against the tracker message. The tracker message is the brief's current angle and has only 1 verified quote behind it.
- **Do not claim willingness to pay.** Zero quotes state a price a buyer accepts. Billing complaints (3 of 34) show people hate surprise charges, which supports "waitlist, no card" and argues against any trial that auto-bills.
- **Next research step, 20 minutes:** a teammate pastes the 4 Reddit threads into `data/reddit-meeting-actions.md` (the agent file's fallback). That is the only way to verify the action-item pain and to hear A2 and A3 in their own words. Until then, do not put any of the 4 snippets in an asset.
