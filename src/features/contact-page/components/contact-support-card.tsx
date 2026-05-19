import { useState } from "react";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { ContactHeroCardFrame, ContactHeroCardRoot } from "../styles/contact-hero-card.styles";
import type { ContactHeroCard } from "../types/contact-page.types";
import { ContactSupportCardFace } from "./contact-support-card-face";

type ContactSupportCardProps = {
  card: ContactHeroCard;
};

export function ContactSupportCard({ card }: ContactSupportCardProps) {
  const isFeatured = card.tone === "featured";
  const [isFlipped, setIsFlipped] = useState(isFeatured);
  const cardLabel = toSentenceCase(card.titleLines.join(" "));

  return (
    <ContactHeroCardRoot
      aria-label={cardLabel}
      aria-pressed={isFlipped}
      onClick={() => {
        if (!isFeatured) {
          setIsFlipped(!isFlipped);
        }
      }}
      onKeyDown={(event) => {
        if (event.currentTarget !== event.target) {
          return;
        }

        if (!isFeatured && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <ContactHeroCardFrame $flipped={isFlipped}>
        <ContactSupportCardFace card={card} featured={false} hidden={isFlipped} />
        <ContactSupportCardFace back card={card} featured hidden={!isFlipped} />
      </ContactHeroCardFrame>
    </ContactHeroCardRoot>
  );
}
