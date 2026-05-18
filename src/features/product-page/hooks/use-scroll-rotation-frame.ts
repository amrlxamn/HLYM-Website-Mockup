import type { MotionValue } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function useScrollRotationFrame(
  scrollProgress: MotionValue<number>,
  frameCount: number,
  scrollRange: readonly [number, number]
): number {
  const [frameIndex, setFrameIndex] = useState(0);

  useMotionValueEvent(scrollProgress, "change", (latest) => {
    if (frameCount <= 1) {
      setFrameIndex(0);
      return;
    }

    const range = Math.max(scrollRange[1] - scrollRange[0], 0.001);
    const progress = Math.min(1, Math.max(0, (latest - scrollRange[0]) / range));
    const nextFrameIndex = Math.min(frameCount - 1, Math.round(progress * (frameCount - 1)));

    setFrameIndex(nextFrameIndex);
  });

  return frameIndex;
}
