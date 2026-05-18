export type ContactHeroCard = {
  ctaHref: string;
  ctaLabel: string;
  number: string;
  titleLines: readonly string[];
};

export type ContactHeroContent = {
  ariaLabel: string;
  backgroundAlt: string;
  backgroundImage: string;
  cards: readonly ContactHeroCard[];
  description: string;
  searchAriaLabel: string;
  searchPlaceholder: string;
  title: string;
};
