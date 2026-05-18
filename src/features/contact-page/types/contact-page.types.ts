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

export type ContactFaqItem = {
  answer?: string;
  isOpen?: boolean;
  question: string;
  topic: string;
};

export type ContactFeedbackBanner = {
  ctaHref: string;
  ctaLabel: string;
  description: string;
  title: string;
};

export type ContactFaqContent = {
  ariaLabel: string;
  description: string;
  emptyMessage: string;
  feedback: ContactFeedbackBanner;
  filterLabel: string;
  items: readonly ContactFaqItem[];
  title: string;
  topics: readonly string[];
};
