---
description: Rewrite text for a named platform's native format, with counted limits
---

Rewrite the provided text for the platform named in the input: LinkedIn, Instagram, X, TikTok or email.

Respect that platform's native format and real limits:
- LinkedIn: hook inside the first ~210 characters (the feed truncates there), short paragraphs, 150-300 words, 3 hashtags at most, hard max 3,000 characters, end with a question or a clear takeaway.
- Instagram: first 125 characters carry the hook (truncation point), casual caption of 100-150 words, a call to action, 3-5 hashtags last, hard max 2,200.
- X: 280 characters max for a single post (links count as 23), or a numbered thread of 3-7 posts if the idea needs it.
- TikTok caption: hook first, 2,200 max, 3-5 hashtags.
- Email: subject 50 characters or fewer, preview text 40-90 characters, then body; one idea, one clear call to action.

Count the limits with code when you can run commands (for example `python3 -c "print(len('...'))"`) and print the counts under the result.

Keep the core message and every fact exactly as given: never invent stats, names or claims.
If brief/campaign-brief.md exists, match its brand voice and use the CTA from outputs/positioning/campaign-plan.md when present.
No em dashes. Output the rewritten content ready to paste, then the count line.
