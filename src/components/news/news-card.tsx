import type { NewsCard as NewsCardType } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  NewsCardCopy,
  NewsCardMeta,
  NewsCardNumber,
  NewsCardRoot,
  NewsCardTitle,
  NewsOverlay
} from "./news.styles";

type NewsCardProps = {
  index: number;
  item: NewsCardType;
  size?: "default" | "small";
};

export function NewsCard({ index, item, size = "default" }: NewsCardProps) {
  return (
    <NewsCardRoot $size={size}>
      <img loading="lazy" src={item.image} alt={toSentenceCase(item.alt)} />
      <NewsOverlay />
      <NewsCardCopy $size={size}>
        <NewsCardNumber>{String(index + 1).padStart(2, "0")}</NewsCardNumber>
        <NewsCardTitle $size={size}>{item.title}</NewsCardTitle>
        <NewsCardMeta>
          {item.dateLabel} · {item.readTime}
        </NewsCardMeta>
      </NewsCardCopy>
    </NewsCardRoot>
  );
}
