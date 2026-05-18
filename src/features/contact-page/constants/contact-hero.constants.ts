import { getAssetUrl } from "@/lib/get-asset-url";
import type { ContactHeroContent } from "../types/contact-page.types";

export const CONTACT_HERO_CONTENT: ContactHeroContent = {
  ariaLabel: "Contact support options",
  backgroundAlt: "Yamaha motorcycle in a dark service bay",
  backgroundImage: getAssetUrl("hlym/contact/contact-hero.png"),
  cards: [
    {
      ctaHref: "#selangor-office",
      ctaLabel: "View locations",
      number: "01",
      titleLines: ["Selangor", "Office"]
    },
    {
      ctaHref: "#johor-office",
      ctaLabel: "View locations",
      number: "02",
      titleLines: ["Johor", "Office"]
    },
    {
      ctaHref: "#faq",
      ctaLabel: "View locations",
      number: "03",
      titleLines: ["Pahang", "Office"]
    },
    {
      ctaHref: "#faq",
      ctaLabel: "View locations",
      number: "04",
      titleLines: ["Penang", "Office"]
    },
    {
      ctaHref: "#faq",
      ctaLabel: "View locations",
      number: "05",
      titleLines: ["Perak", "Office"]
    }
  ],
  description:
    "One destination for everything support. Find your nearest branch, browse common questions, or speak directly to our customer care team.",
  searchAriaLabel: "Search support articles",
  searchPlaceholder: "Search articles (ex: reset passwords, changing email id, etc.)",
  title: "How can we help?"
} as const;
