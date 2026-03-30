import { ArrowUpRight } from "lucide-react";
import { SITE_COPY } from "@/data/site-copy.constants";
import type { CategoryTile as CategoryTileType } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  CategoryTileArrow,
  CategoryTileCopy,
  CategoryTileLink,
  CategoryTilePrice,
  CategoryTileRoot,
  CategoryTileTag,
  CategoryTileTitle,
  FeaturedOverlay
} from "./featured.styles";

type CategoryTileProps = {
  tile: CategoryTileType;
};

export function CategoryTile({ tile }: CategoryTileProps) {
  const featuredCopy = SITE_COPY.featured;

  return (
    <CategoryTileRoot>
      <img loading="lazy" src={tile.image} alt={toSentenceCase(tile.alt)} />
      <FeaturedOverlay />
      <CategoryTileCopy>
        <CategoryTileTag>{tile.tag}</CategoryTileTag>
        <CategoryTileTitle>{tile.name}</CategoryTileTitle>
        <CategoryTilePrice>{tile.price}</CategoryTilePrice>
      </CategoryTileCopy>
      <CategoryTileLink
        href={tile.href}
        aria-label={toSentenceCase(`${featuredCopy.tileLinkLabelPrefix} ${tile.name}`)}
      >
        <CategoryTileArrow>
          <ArrowUpRight />
        </CategoryTileArrow>
      </CategoryTileLink>
    </CategoryTileRoot>
  );
}
