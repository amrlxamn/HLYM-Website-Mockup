export function getPreviousHeroSlideIndex(currentSlideIndex: number, totalSlides: number) {
  return currentSlideIndex === 0 ? totalSlides - 1 : currentSlideIndex - 1;
}
