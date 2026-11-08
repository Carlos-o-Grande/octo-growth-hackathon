# Grona setup: targeting and campaign

The judges score **Reality**: "Is it live in Grona, with targeting and a campaign behind it?" The Grona script is already on every page of https://octo-landing-47q.pages.dev (workspace `6af085eeaff6c24aa3090993`). As of 16:20 it reports **"No active campaigns available for this workspace."** This file is what to set up in the Grona dashboard.

## The campaign

**Name:** Who's doing what? · **Goal:** clicks on "Invite Octo to your next call" (the `#access` button and the mailto link).

## Audiences (targeting) and what each one sees

Every ad and post links with UTM tags, so Grona can tell visitors apart. Change only the hero headline and the line under it. Keep the CTA the same for everyone.

| Audience | Rule in Grona | Hero headline | Line under it |
|---|---|---|---|
| **Meta ad visitors** (main channel) | `utm_source = meta` | Your team doesn't have a project manager. Now it does. | Octo joins your calls, answers when you call it by name, then sends each person their own tasks and keeps ClickUp or Asana up to date. |
| **Note-taker switchers** | `utm_campaign` contains `compare`, or they visited `/compare` | Your note-taker writes it down. Octo does it. | Each person gets their own tasks, with the exact quote, and the tracker stays current from call to call. |
| **Creator viewers** | `utm_source = youtube` or `creator` | You saw Octo on a call. Now put it on yours. | The same AI teammate, on Google Meet, Teams, Zoom, Slack Huddles, Webex or GoTo. |
| **Returning visitors** | Returning visitor, no invite yet | Still ending calls with "so who's doing what?" | Invite Octo to one call and see the follow-up happen. |
| **Everyone else** | Default | Every call ends with "so who's doing what?" (the current page) | Unchanged |

Each headline matches the Meta creative that sends people there (`outputs/ads/meta-ads-v2.md`, `outputs/creative/meta/`), which is what the **Website** criterion checks: "match your ad".

## UTM links to use in the ads

- Meta: `https://octo-landing-47q.pages.dev/?utm_source=meta&utm_medium=paid&utm_campaign=whos-doing-what&utm_content=<creative>`
- Switchers: `https://octo-landing-47q.pages.dev/compare?utm_source=meta&utm_medium=paid&utm_campaign=compare`
- Creators: `https://octo-landing-47q.pages.dev/?utm_source=youtube&utm_medium=creator&utm_campaign=whos-doing-what&utm_content=<channel>`

## Check it's live

Open each link above in a private window. The headline should change. Then tell Oleksii's agent: it re-checks the page and flips the Reality slide on `/pitch` from "setting up" to "live".
