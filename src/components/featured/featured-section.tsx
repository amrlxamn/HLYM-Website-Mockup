import { ArrowRight } from "lucide-react";
import { CategoryTile } from "@/components/featured/category-tile";
import { FeaturedCard } from "@/components/featured/featured-card";
import { MtEditorial } from "@/components/featured/mt-editorial";
import { SectionHeader, SectionHeaderAccent } from "@/components/shared/section-header";
import { CATEGORY_TILES, FEATURED_CARDS } from "@/data/featured.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  CategoryTilesRow,
  FeaturedBottomCta,
  FeaturedBottomDescription,
  FeaturedBottomTitle,
  FeaturedCardsRow,
  FeaturedCtaButton,
  FeaturedSectionRoot
} from "./featured.styles";

export function FeaturedSection() {
  const featuredCopy = SITE_COPY.featured;

  return (
    <FeaturedSectionRoot aria-label={toSentenceCase(featuredCopy.ariaLabel)}>
      <SectionHeader
        align="center"
        heading={
          <>
            <span>{featuredCopy.headingLead} </span>
            <SectionHeaderAccent>{featuredCopy.headingAccent}</SectionHeaderAccent>
            <br />
            <span>{featuredCopy.headingBottom}</span>
          </>
        }
        intro={toSentenceCase(featuredCopy.intro)}
        tagLabel={featuredCopy.tagLabel}
        tone="dark"
      />
      <FeaturedCardsRow>
        {FEATURED_CARDS.map((card) => (
          <FeaturedCard card={card} key={card.name} />
        ))}
      </FeaturedCardsRow>
      <MtEditorial />
      <CategoryTilesRow>
        {CATEGORY_TILES.map((tile) => (
          <CategoryTile key={tile.name} tile={tile} />
        ))}
      </CategoryTilesRow>
      <FeaturedBottomCta>
        <div>
          <FeaturedBottomTitle>{featuredCopy.bottomTitle}</FeaturedBottomTitle>
          <FeaturedBottomDescription>
            {toSentenceCase(featuredCopy.bottomDescription)}
          </FeaturedBottomDescription>
        </div>
        <FeaturedCtaButton href="#models">
          {featuredCopy.bottomCtaLabel}
          <ArrowRight />
        </FeaturedCtaButton>
      </FeaturedBottomCta>
    </FeaturedSectionRoot>
  );
}
