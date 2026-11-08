# Landing changes v1, for https://octo-landing-47q.pages.dev

Small changes so [`landing/index.html`](landing/index.html) matches the brief (14:40 decision) and the Meta ads. Ordered by impact. Paste-ready copy in quotes. The hero line itself waits for the LinkedIn one-liner A/B test (campaign plan), so it is not changed here.

## Must change before any ad runs

1. **"Get early access" opens a form, not `mailto:`.** The brief's conversion goal is "leave a work email on the landing page". One field: work email. Optional second field: "Which tracker do you use?" (ClickUp, Asana, Trello, Notion, other). Button text stays "Get early access". Under it: "We'll get Octo onto your calls."
2. **Measurement.** Meta pixel with PageView, and Lead on form submit; the form submit is the conversion in Ads Manager. Without it, Meta can't retarget visitors (the plan starts retargeting on day 3) or count requests.
3. **UTMs survive the form.** Store `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` in hidden fields so each request shows which creative it came from (creative-1 to creative-5, creator handles).

## Should change

4. **New FAQ: "Does it join every meeting?"** "No. You choose which calendar events it joins."
5. **New FAQ: "Why not the AI built into Meet or Zoom?"** "Built-in AI stays inside one platform. Octo works on Meet, Teams, Zoom, Slack Huddles, Webex and GoTo, and writes into the tracker your team already uses."
6. **FAQ "Which trackers"**: add ClickUp (the brief names it): "ClickUp, Asana, Trello, Notion and others. Tell us yours when you sign up."
7. **Link to the comparison**: one line under "How is this different from a note-taker?": "See the full comparison." -> [`comparison.md`](comparison.md) content as a page or section.

## Optional

8. **Hero eyebrow** "AI teammate for your calls": ZoomMate and Fireflies use "AI teammate" on their pages. If the team wants distance, "For small teams without a project manager" matches the brief's audience.
9. **Octo poses** to lighten sections: web-size PNGs are in `media/poses/` (for example `<img src="media/poses/12-task-done.png" alt="Octo with a task marked done" width="200">`). Index: [`assets/octo-poses/README.md`](../../assets/octo-poses/README.md).

## Keep

The demo video, the problem section, the six platforms line, "Your agent. Your name. Your voice.", the made-up-people disclaimer.

Publishing: Oleksii runs `npx wrangler pages deploy outputs/website/landing --project-name octo-landing --branch main` (see [`README.md`](README.md)).
