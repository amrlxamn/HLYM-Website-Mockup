import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { FEATURED_NEWS, NEWS_HIGHLIGHTS, NEWS_UPDATES } from "@/data/news.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { NewsCard } from "./news-card";
import { NewsFeaturedCard } from "./news-featured-card";
import {
  NewsBottomGrid,
  NewsGrid,
  NewsRedLine,
  NewsRightColumn,
  NewsSectionRoot,
  NewsTopGrid,
  NewsViewLink
} from "./news.styles";

export function NewsSection() {
  const newsCopy = SITE_COPY.news;

  return (
    <NewsSectionRoot id="latest-news" aria-label={toSentenceCase(newsCopy.ariaLabel)}>
      <SectionHeader
        action={
          <NewsViewLink href="#latest-news">
            {newsCopy.viewAllLabel}
            <ArrowRight />
          </NewsViewLink>
        }
        heading={newsCopy.heading}
        tagLabel={newsCopy.tagLabel}
      />
      <NewsGrid>
        <NewsTopGrid>
          <NewsFeaturedCard item={FEATURED_NEWS} />
          <NewsRightColumn>
            {NEWS_HIGHLIGHTS.map((item, index) => (
              <NewsCard index={index} item={item} key={item.title} />
            ))}
          </NewsRightColumn>
        </NewsTopGrid>
        <NewsBottomGrid>
          {NEWS_UPDATES.map((item, index) => (
            <NewsCard index={index + 2} item={item} key={item.title} size="small" />
          ))}
        </NewsBottomGrid>
      </NewsGrid>
      <NewsRedLine />
    </NewsSectionRoot>
  );
}
