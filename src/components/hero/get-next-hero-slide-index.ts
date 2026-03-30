export function getNextHeroSlideIndex(currentSlideIndex: number, totalSlides: number) {
  return (currentSlideIndex + 1) % totalSlides;
}
