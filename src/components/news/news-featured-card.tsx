import type { FeaturedNews } from "@/data/site-content.types";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  NewsFeaturedBadge,
  NewsFeaturedCopy,
  NewsFeaturedMeta,
  NewsFeaturedMetaDot,
  NewsFeaturedRoot,
  NewsFeaturedTitle,
  NewsOverlay
} from "./news.styles";

type NewsFeaturedCardProps = {
  item: FeaturedNews;
};

export function NewsFeaturedCard({ item }: NewsFeaturedCardProps) {
  const newsCopy = SITE_COPY.news;

  return (
    <NewsFeaturedRoot>
      <img loading="lazy" src={item.image} alt={toSentenceCase(item.alt)} />
      <NewsOverlay />
      <NewsFeaturedCopy>
        <NewsFeaturedBadge>{newsCopy.featuredBadgeLabel}</NewsFeaturedBadge>
        <NewsFeaturedTitle>{item.title}</NewsFeaturedTitle>
        <NewsFeaturedMeta>
          {item.dateLabel}
          <NewsFeaturedMetaDot />
          {item.readTime}
        </NewsFeaturedMeta>
      </NewsFeaturedCopy>
    </NewsFeaturedRoot>
  );
}
