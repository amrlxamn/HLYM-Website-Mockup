import { ArrowRight } from "lucide-react";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  ContactHeroCardCta,
  ContactHeroCardNumber,
  ContactHeroCardRoot,
  ContactHeroCardTitle
} from "../styles/contact-hero-card.styles";
import type { ContactHeroCard } from "../types/contact-page.types";

type ContactSupportCardProps = {
  card: ContactHeroCard;
};

export function ContactSupportCard({ card }: ContactSupportCardProps) {
  return (
    <ContactHeroCardRoot aria-label={toSentenceCase(card.titleLines.join(" "))}>
      <ContactHeroCardNumber>{card.number}</ContactHeroCardNumber>
      <div>
        <ContactHeroCardTitle>
          {card.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </ContactHeroCardTitle>
        <ContactHeroCardCta href={card.ctaHref}>
          {card.ctaLabel}
          <ArrowRight aria-hidden="true" />
        </ContactHeroCardCta>
      </div>
    </ContactHeroCardRoot>
  );
}
