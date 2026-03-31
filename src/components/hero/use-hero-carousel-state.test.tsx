import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { HERO_SLIDES } from "@/data/hero-slides.constants";
import { useHeroCarouselState } from "./use-hero-carousel-state";

describe("useHeroCarouselState", () => {
  it("auto-advances to the next hero slide after a few seconds", () => {
    vi.useFakeTimers();

    const { result } = renderHook(() => useHeroCarouselState());

    expect(result.current.currentSlideIndex).toBe(0);

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(result.current.currentSlideIndex).toBe(1);
    expect(result.current.currentSlide).toBe(HERO_SLIDES[1]);

    vi.useRealTimers();
  });
});
