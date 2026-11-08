# Website

## Landing page (Cloudflare Pages)

**Live:** https://octo-landing-47q.pages.dev

Source: [`landing/`](landing/). The homepage source is `code.html`; `index.html` is an identical copy so the homepage serves. Other pages: `compare.html` (/compare), `pricing.html` (/pricing), `pitch.html` (/pitch, hidden deck) and `llms.txt`, with the shared stylesheet `site.css`, fonts and media.

The "Invite Octo to your next call" button opens an email to hello@octocrew.ai (subject "Invite Octo to our next call"). There is no sign-up form yet.

### Publish a change

Edit the page in `landing/`, push, and ask Oleksii (or his agent) to run, from the repo root:

```
npx wrangler pages deploy outputs/website/landing --project-name octo-landing --branch main
```

After editing `code.html`, run `cp code.html index.html` (in `landing/`) before deploying, so the homepage matches.

The site updates within a minute. The Cloudflare project is on Oleksii's account, so only he can publish.

The older copy on GitHub Pages (https://octocrew-hq.github.io/octo-landing/) is not updated any more.
