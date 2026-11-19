// Match desktop LINKS.z2: reveal the intro at 35%, change route at halfway.
export function futureScrollState(scrollTop, commitmentTop, lookingForwardTop) {
  const distance = Math.max(1, lookingForwardTop - commitmentTop);
  const progress = Math.max(0, Math.min(1, (scrollTop - commitmentTop) / distance));
  return { revealIntro: progress >= .35, view: progress >= .5 ? 'nx' : 'wc' };
}
