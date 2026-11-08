# Website

## Landing page (Cloudflare Pages)

**Live:** https://octo-landing-47q.pages.dev

Source: [`landing/`](landing/), a single `index.html` with its fonts and media. It's a starting point: change the headline, sections or CTA as the team decides.

The "Get early access" button opens an email to hello@octocrew.ai. There is no sign-up form yet.

### Publish a change

Edit `landing/index.html`, push, and ask Oleksii (or his agent) to run, from the repo root:

```
npx wrangler pages deploy outputs/website/landing --project-name octo-landing --branch main
```

The site updates within a minute. The Cloudflare project is on Oleksii's account, so only he can publish.

The older copy on GitHub Pages (https://octocrew-hq.github.io/octo-landing/) is not updated any more.
