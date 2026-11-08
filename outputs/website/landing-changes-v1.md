# Landing changes v1, for https://octo-landing-47q.pages.dev

What to change in [`landing/index.html`](landing/index.html) so the page matches the brief v2 and every ad. Ordered by impact. Paste-ready copy in quotes.

## Must change before any ad runs

1. **Hero headline.** Replace "Every call ends with "so who's doing what?"" with:
   "Just talk. Octo keeps your tracker, CRM and Notion up to date."
2. **Hero eyebrow.** Replace "AI teammate for your calls" (ZoomMate and Fireflies use it) with:
   "The project manager your team doesn't have yet"
3. **Hero subhead.** Replace with:
   "Octo joins your calls. Call it by name and it answers on the spot. After the call, everyone gets their tasks, and your tracker, CRM and Notion are already updated."
4. **Every "Get early access" button** (nav, hero, final section) becomes **"Start free trial"**, pointing to a form, not to `mailto:`. Form fields: work email, team size (1-10, 11-50, 50+), tracker (Notion, Asana, Trello, other), CRM (free text), call platform (Meet, Zoom, Teams, other). Under the button: "Our team sets Octo up on your calls."
5. **Measurement.** Meta pixel (PageView, Lead on form submit) and the form submit as the conversion. Without it, ads can't retarget or optimise.

## Should change

6. **"After" column in How it works.** Add a line: "Your CRM and Notion are updated from the conversation."
7. **New FAQ: "Does it join every meeting?"** "No. You choose which calendar events it joins. It stays quiet until you call it by name." (Confirm the "quiet" part with Oleksii.)
8. **New FAQ: "Why not the AI built into Meet or Zoom?"** "Built-in AI stays inside one platform and writes to its own notes. Octo works on Meet, Teams, Zoom, Slack Huddles, Webex and GoTo, and writes into the tools your team already uses."
9. **FAQ "How much does it cost?"** "Start with a free trial. Our team sets it up with you. Pricing comes after the trial."
10. **FAQ "Which trackers"** keep as is; add **"Which CRMs?"** "The main ones. Tell us yours when you start the trial." (Exact list to confirm.)

## Nice to have

11. Under the final CTA, a small text link: "Sales copilot for client calls: coming soon. Join the list." It measures interest in the second agent. It must say "coming soon".
12. A short "Made for small teams" strip: "1 to 50 people. No project manager. No problem."

## Keep

The demo video, the problem section, the six platforms line, "Your agent. Your name. Your voice.", and the disclaimer that the people in the demo are made up.

Publishing: Oleksii runs `npx wrangler pages deploy outputs/website/landing --project-name octo-landing --branch main` (see [`README.md`](README.md)).
