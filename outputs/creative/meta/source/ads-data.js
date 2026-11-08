// Copy and layout data for the Octo Meta statics and ad previews, campaign "Who's doing what?".
// Every word comes verbatim from outputs/ads/meta-ads-v2.md (founder's version) and brief/campaign-brief.md.
// On the images, {{...}} sets part of a headline in the muted tone, and apostrophes and quote marks are set
// typographically. Primary texts and headlines keep the straight marks of the source file
// because they are pasted into Ads Manager as is.
(function (root) {
  const LP = 'https://octo-landing-47q.pages.dev/?utm_source=meta&utm_medium=paid&utm_campaign=whos-doing-what&utm_content=';

  // placement kinds: 'video' (poster + play badge), 'static' (the rendered card)
  const ADS = [
    {
      id: 'creative-1', n: '1', name: 'The demo (proof)',
      hook: 'This meeting bot talks back.',
      primary: 'Every call ends with "so who\'s doing what?" Octo answers before you hang up, then sends everyone their tasks.',
      headline: 'Your AI teammate on every call', button: 'Sign up',
      utm: LP + 'creative-1',
      reel: { kind: 'video', dur: '36 s', poster: 'demo-frame', note: 'The demo as it is (assets/octo-demo-36s-9x16.mp4); poster = its frame at 3 s' },
      feed: null
    },
    {
      id: 'creative-2', n: '2', name: 'The junior PM (the idea)',
      card: 'The PM your team doesn’t have yet', // = the ad headline
      layout: 'shot', shot: 'status', pose: '13-task-card',
      hook: 'Your team doesn\'t have a project manager. Now it does.',
      primary: 'Octo joins your calls like a junior PM: it tracks who promised what, sends each person their tasks, and keeps ClickUp or Asana up to date.',
      headline: 'The PM your team doesn\'t have yet', button: 'Sign up',
      utm: LP + 'creative-2',
      reel: { kind: 'video', dur: '15 s', poster: 'card' }, feed: { kind: 'static' }
    },
    {
      id: 'creative-3', n: '3', name: 'Note-taker vs Octo (the comparison)',
      card: '{{Note-takers record.}} Octo acts.', // = the ad headline (the hook runs to 3 lines at headline size)
      layout: 'split',
      hook: 'Your note-taker writes it down. Octo does it.',
      primary: 'Granola, Fireflies and Otter are great at notes. Octo is built for what happens next: tasks to every person, with the quote they came from, straight into your tracker.',
      headline: 'Note-takers record. Octo acts.', button: 'Learn more',
      utm: LP + 'creative-3',
      reel: { kind: 'video', dur: '15 s', poster: 'card', note: 'Poster = the static fallback card' }, feed: { kind: 'static' }
    },
    {
      id: 'creative-4', n: '4', name: 'The quote (the receipt)',
      card: 'No more ‘I never said that.’', // = the hook
      layout: 'receipt',
      hook: 'No more \'I never said that.\'',
      primary: 'Every task Octo sends comes with the exact words from the call. And when someone says "done" on the next call, it\'s done in your tracker too.',
      headline: 'Every task comes with a receipt', button: 'Sign up',
      utm: LP + 'creative-4',
      reel: { kind: 'static' }, feed: { kind: 'static' }
    },
    {
      id: 'creative-5', n: '5', name: 'Founder to camera (UGC style)',
      card: '{{We don’t have a PM.}} We have Octo.', // = the hook; used only for the preview poster
      layout: 'poster', pose: '01-neutral',
      hook: 'We don\'t have a PM. We have Octo.',
      primary: null, // meta-ads-v2.md gives a script, hook, headline and button, but no primary text
      headline: 'Get early access to Octo', button: 'Sign up',
      utm: LP + 'creative-5',
      reel: { kind: 'video', dur: '20 to 30 s', poster: 'card', note: 'Selfie video not shot yet: poster is a placeholder with the hook' },
      feed: null
    },
    {
      id: 'retargeting', n: 'R', name: 'Retargeting ad (from day 3)',
      kicker: 'Still ending calls with', card: '“so who’s doing what?”', // from the primary text
      layout: 'shot', shot: 'status', pose: '03-wink',
      primary: 'Still ending calls with "so who\'s doing what?" Early access to Octo is open this month.',
      headline: 'Get early access', button: 'Sign up',
      utm: LP + 'retargeting',
      reel: { kind: 'static' }, feed: { kind: 'static' }
    }
  ];

  const SHARED = {
    pageName: 'Octo by Octocrew',
    landingCta: 'Invite Octo to your next call', // meta-ads-v2.md: landing CTA behind every Sign up button
    cta: 'Invite Octo to your next call', // landing button, brief decision of 8 Nov 15:10
    oneLinerA: 'Note-takers record the meeting.',
    oneLinerB: 'Octo takes part in it.',
    // Task message from meta-ads-v2.md, creative 4: "Finish landing page copy · due Friday · 'I can get the final draft by Friday'"
    task: { title: 'Finish landing page copy', due: 'due Friday', quote: '‘I can get the final draft by Friday’' }
  };

  root.OCTO_ADS = ADS;
  root.OCTO_SHARED = SHARED;
  if (typeof module !== 'undefined') module.exports = { ADS, SHARED };
})(typeof window !== 'undefined' ? window : globalThis);
