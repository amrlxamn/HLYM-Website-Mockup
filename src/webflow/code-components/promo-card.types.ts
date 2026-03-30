export type PromoCardProps = {
  ctaLabel: string;
  description: string;
  eyebrow: string;
  heading: string;
  image?: {
    alt?: string;
    src: string;
  };
  link?: {
    href: string;
    target?: string;
  };
  showAccent: boolean;
  surface: "dark" | "light";
};
