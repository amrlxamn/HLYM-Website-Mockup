import { useEffect, useState } from "react";

type UseMiniNewsCarouselResult = {
  activeIndex: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
  hasOverflowFade: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
};

const VISIBLE_MINI_NEWS_COUNT = 2;

export function useMiniNewsCarousel(itemCount: number): UseMiniNewsCarouselResult {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = Math.max(itemCount - VISIBLE_MINI_NEWS_COUNT, 0);

  useEffect(() => {
    setActiveIndex((currentIndex) => Math.min(currentIndex, maxIndex));
  }, [maxIndex]);

  return {
    activeIndex,
    canGoNext: activeIndex < maxIndex,
    canGoPrevious: activeIndex > 0,
    handleNext: () => {
      setActiveIndex((currentIndex) => Math.min(currentIndex + 1, maxIndex));
    },
    handlePrevious: () => {
      setActiveIndex((currentIndex) => Math.max(currentIndex - 1, 0));
    },
    hasOverflowFade: activeIndex < Math.max(itemCount - VISIBLE_MINI_NEWS_COUNT, 0)
  };
}
