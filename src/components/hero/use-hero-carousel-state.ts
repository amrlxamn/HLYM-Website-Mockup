import { useState } from "react";
import { HERO_SLIDES } from "@/data/hero-slides.constants";

export function useHeroCarouselState() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = HERO_SLIDES[currentSlideIndex];

  return {
    currentSlide,
    currentSlideIndex,
    setCurrentSlideIndex
  };
}
