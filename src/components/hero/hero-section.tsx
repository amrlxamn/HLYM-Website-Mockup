import { ArrowRight } from "lucide-react";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { HeroBottomPanel } from "./hero-bottom-panel";
import { HeroSideIndicators } from "./hero-side-indicators";
import { useHeroCarouselState } from "./use-hero-carousel-state";
import {
  HeroBackground,
  HeroBottomGradient,
  HeroCenter,
  HeroCtaLink,
  HeroCtaRow,
  HeroDescription,
  HeroRedLine,
  HeroSectionRoot,
  HeroTagRow,
  HeroTitle,
  HeroTitleAccent,
  HeroTopGradient,
  HeroVignette
} from "./hero.styles";

export function HeroSection() {
  const { currentSlide, currentSlideIndex, setCurrentSlideIndex } = useHeroCarouselState();
  const heroCopy = SITE_COPY.hero;

  if (!currentSlide) {
    return null;
  }

  return (
    <HeroSectionRoot aria-label={toSentenceCase(heroCopy.ariaLabel)}>
      <HeroBackground src={currentSlide.image} alt={toSentenceCase(currentSlide.alt)} />
      <HeroTopGradient />
      <HeroBottomGradient />
      <HeroVignette />
      <HeroSideIndicators heroCopy={heroCopy} slide={currentSlide} />
      <HeroCenter>
        <HeroTagRow>
          <span />
          <p>{currentSlide.eyebrow}</p>
          <span />
        </HeroTagRow>
        <HeroTitle>
          <span>{currentSlide.titleLead}</span>
          <HeroTitleAccent>{currentSlide.titleAccent}</HeroTitleAccent>
        </HeroTitle>
        <HeroDescription>{toSentenceCase(currentSlide.description)}</HeroDescription>
        <HeroCtaRow>
          <HeroCtaLink href={currentSlide.ctaHref}>
            {currentSlide.ctaLabel}
            <ArrowRight />
          </HeroCtaLink>
        </HeroCtaRow>
      </HeroCenter>
      <HeroBottomPanel
        currentSlideIndex={currentSlideIndex}
        heroCopy={heroCopy}
        setCurrentSlideIndex={setCurrentSlideIndex}
        slide={currentSlide}
      />
      <HeroRedLine />
    </HeroSectionRoot>
  );
}
