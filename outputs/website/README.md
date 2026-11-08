# Website

## Landing page (Cloudflare Pages)

**Live:** https://octo-landing-47q.pages.dev

Source: [`landing/`](landing/). The homepage is `index.html`. Other pages: `compare.html` (/compare), `pricing.html` (/pricing), `faq.html` (/faq), `case-study.html` (/case-study, sample with placeholder data, not indexed), `pitch.html` (/pitch, hidden deck), `404.html` and `llms.txt`, with the shared stylesheet `site.css`, fonts and media.

The "Invite Octo to your next call" button opens an email to hello@octocrew.ai (subject "Invite Octo to our next call"). There is no sign-up form yet.

### Publish a change

Edit the page in `landing/`, push, and ask Oleksii (or his agent) to run, from the repo root:

```
npx wrangler pages deploy outputs/website/landing --project-name octo-landing --branch main
```

The site updates within a minute. The Cloudflare project is on Oleksii's account, so only he can publish.

The older copy on GitHub Pages (https://octocrew-hq.github.io/octo-landing/) is not updated any more.
