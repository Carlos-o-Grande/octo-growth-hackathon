# Before You Share Your Work

Use this checklist when a campaign is finished, whether you are submitting to an event or handing it to a client. The organiser gives you the deadline and the link. Type `use preflight` and it checks most of this for you.

- [ ] **1. The brief is filled in.** Open `brief/campaign-brief.md` and check every section has real content, not template prompts.

- [ ] **2. `outputs/` has your work.** Ads, copy, creative, reports: everything your team made should be in there. If something only exists in a chat window, ask the agent to save it to a file now.

- [ ] **3. Your own agents are in the folder.** Anything you built lives in `.github/agents/`.

- [ ] **4. Preflight is clean.** Run `use preflight` as a fresh-context critic. Character limits, links, sources and message match all pass, and no `[ASSUMED]` or `[TO ADD]` tags remain in customer-facing files. Report: `outputs/report/preflight.md`.

- [ ] **5. Judge-panel run with the event's criteria.** The brief's Constraints section holds the organiser's judging criteria. Run `use judge-panel`, fix the top-ranked items, and keep `outputs/report/judge-panel.md`.

- [ ] **6. `campaign-report.html` opens offline.** Open `outputs/report/campaign-report.html` by double-clicking it with Wi-Fi off. It should show every asset with no broken images, fonts or links to missing files.

- [ ] **7. The pitch is rehearsed with timing.** Run `use pitch`, then say it out loud with a timer, at least twice, inside the organiser's time limit. Practice the live demo and its fallback.

- [ ] **8. No keys in what you share.** The `.env` file holds private keys. Delete it from any copy you upload, and check before you make a repo public.

- [ ] **9. One link to everything.** Put the folder in Google Drive or a GitHub repo, and set it so anyone with the link can view it. Open the link in a private window to check.
