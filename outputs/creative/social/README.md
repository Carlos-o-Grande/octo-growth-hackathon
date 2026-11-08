# Organic social visuals: Octo

Finished visuals for the founder's posts in [`outputs/social/social-posts-v1.md`](../../social/social-posts-v1.md) (copy final, used verbatim) and the LinkedIn one-liner A/B test in [`outputs/positioning/campaign-plan.md`](../../positioning/campaign-plan.md). Style: [`outputs/creative/design-spec.md`](../design-spec.md), "Premium direction: San Francisco tech". Overview: [`contact-sheet.png`](contact-sheet.png).

## Which file goes with which post

| Post | Network, day | File | Size | What is on it |
|---|---|---|---|---|
| 1. Founder launch post | LinkedIn, day 1 | `li-launch-cover-16x9.png` | 1920x1080 | Cover frame (thumbnail) for `assets/octo-demo-36s-16x9.mp4`. Label "Every call ends with the same question:", headline "so who's doing what?", Octo's real status tile, pose `09-listening`. |
| 1. Launch, Instagram version | Instagram feed | `ig-launch-4x5.png` | 1080x1350 | The same launch visual at 4:5. |
| 2. The task message | LinkedIn, day 2 | `li-task-message.png` | 1200x1200 | Real screen `octo-tile-captured.png` (Octo's tile). "The most useful thing our AI teammate does isn't on the call." / "It's the message after." Pose `05-look-left`. |
| 3. The contrast | X / Threads, day 4 | `x-contrast.png` | 1200x1200 | Real screen `octo-tile-status.png`. "Your note-taker writes it down." / "Octo does it." Pose `03-wink`. |
| 4. Reel / TikTok / Shorts | Instagram, day 2 or 4 | `reel-cover-9x16.png` | 1080x1920 | Cover for `assets/octo-demo-36s-9x16.mp4`. "This bot talks back." (the post's first-second text), status tile, pose `02-happy`. All text between y 288 and y 1250 (out of the top 250 px and the bottom 35%). |
| 5. Behind the scenes | LinkedIn, day 6 | `li-behind-the-scenes.png` | 1200x1200 | Real screen `octo-tile-status.png`. "We have an AI teammate" / "on our own calls every day." Pose `07-look-up`. |
| One-liner 1 | LinkedIn, day 1 | `li-oneliner-1.png` | 1200x1200 | "Note-takers record the meeting. Octo takes part in it." |
| One-liner 2 | LinkedIn, day 2 | `li-oneliner-2.png` | 1200x1200 | "The AI agent that doesn't just record your call. It joins it." |
| One-liner 3 | LinkedIn, day 3 | `li-oneliner-3.png` | 1200x1200 | "Say it on the call. It's in ClickUp, in your words, before you hang up." |
| One-liner 4 | LinkedIn, day 4 | `li-oneliner-4.png` | 1200x1200 | "The project manager your team doesn't have yet." |

The four one-liner cards share one layout: the line in the same size and position, a hairline, then the wordmark (pose `01-neutral`, "Octo", "by Octocrew") and the CTA "Invite Octo to your next call" in lime. Only the line changes, so the A/B test measures the words.

Every frame that shows the demo screen carries "People in the demo are made up." (design spec). Lime: on the screen frames, the only lime is the real tile's own outline and marks. On the one-liner cards, the only lime is the CTA. The Instagram 4:5 and Reel versions use the same layout as the 1200 frames.

## Re-render

`NODE_PATH=$HOME/node_modules node outputs/creative/social/source/render.js` from the repo root. See [`source/README.md`](source/README.md).
