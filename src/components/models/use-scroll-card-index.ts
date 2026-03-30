import { type MotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type ScrollDirection = "down" | "up" | null;

type ScrollCardIndex = {
  activeIndex: number;
  direction: ScrollDirection;
};

export function useScrollCardIndex(
  scrollYProgress: MotionValue<number>,
  count: number
): ScrollCardIndex {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<ScrollDirection>(null);
  const prevIndexRef = useRef(0);

  // Reset when model count changes (category switch).
  useEffect(() => {
    prevIndexRef.current = 0;
    setActiveIndex(0);
    setDirection(null);
  }, [count]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (count <= 1) return;

    // Clamp so floor(progress * count) stays within bounds.
    const clamped = Math.max(0, Math.min(progress, 0.999));
    const newIndex = Math.min(Math.floor(clamped * count), count - 1);

    if (newIndex !== prevIndexRef.current) {
      setDirection(newIndex > prevIndexRef.current ? "down" : "up");
      prevIndexRef.current = newIndex;
      setActiveIndex(newIndex);
    }
  });

  return { activeIndex, direction };
}
