import type { MotionValue } from "framer-motion";
import { useRef } from "react";
import { useCanvasFrameRenderer } from "@/hooks/use-canvas-frame-renderer";
import { useImageSequence } from "@/hooks/use-image-sequence";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { useScrollRotationFrame } from "../hooks/use-scroll-rotation-frame";

type ProductFullSpecificationRotationViewerProps = {
  alt: string;
  frames: readonly string[];
  scrollProgress: MotionValue<number>;
  scrollRange: readonly [number, number];
};

export function ProductFullSpecificationRotationViewer({
  alt,
  frames,
  scrollProgress,
  scrollRange
}: ProductFullSpecificationRotationViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { images, isLoaded } = useImageSequence(frames);
  const frameIndex = useScrollRotationFrame(scrollProgress, frames.length, scrollRange);

  useCanvasFrameRenderer(canvasRef, images, frameIndex, isLoaded);

  return <canvas ref={canvasRef} aria-label={toSentenceCase(alt)} role="img" />;
}
