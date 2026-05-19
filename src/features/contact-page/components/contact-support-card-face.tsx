import { ArrowRight } from "lucide-react";
import {
  ContactHeroCardCta,
  ContactHeroCardFace,
  ContactHeroCardNumber,
  ContactHeroCardTitle
} from "../styles/contact-hero-card.styles";
import type { ContactHeroCard } from "../types/contact-page.types";

type ContactSupportCardFaceProps = {
  back?: boolean;
  card: ContactHeroCard;
  featured: boolean;
  hidden: boolean;
};

export function ContactSupportCardFace({
  back,
  card,
  featured,
  hidden
}: ContactSupportCardFaceProps) {
  return (
    <ContactHeroCardFace $back={Boolean(back)} $featured={featured} aria-hidden={hidden}>
      <ContactHeroCardNumber>{card.number}</ContactHeroCardNumber>
      <div>
        <ContactHeroCardTitle>
          {card.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </ContactHeroCardTitle>
        <ContactHeroCardCta
          href={card.ctaHref}
          onClick={(event) => {
            event.stopPropagation();
          }}
          tabIndex={hidden ? -1 : 0}
        >
          {card.ctaLabel}
          <ArrowRight aria-hidden="true" />
        </ContactHeroCardCta>
      </div>
    </ContactHeroCardFace>
  );
}
