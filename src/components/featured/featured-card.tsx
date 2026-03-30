import type { FeaturedCard as FeaturedCardType } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  FeaturedCardCopy,
  FeaturedCardDescription,
  FeaturedCardPrice,
  FeaturedCardRoot,
  FeaturedCardTag,
  FeaturedCardTitle,
  FeaturedOverlay
} from "./featured.styles";

type FeaturedCardProps = {
  card: FeaturedCardType;
};

export function FeaturedCard({ card }: FeaturedCardProps) {
  return (
    <FeaturedCardRoot>
      <img loading="lazy" src={card.image} alt={toSentenceCase(card.alt)} />
      <FeaturedOverlay />
      <FeaturedCardCopy>
        <FeaturedCardTag>{card.tag}</FeaturedCardTag>
        <FeaturedCardTitle>{card.name}</FeaturedCardTitle>
        <FeaturedCardDescription>{toSentenceCase(card.description)}</FeaturedCardDescription>
        <FeaturedCardPrice>{card.price}</FeaturedCardPrice>
      </FeaturedCardCopy>
    </FeaturedCardRoot>
  );
}
