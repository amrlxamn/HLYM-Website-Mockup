import type { RefObject } from "react";
import { useEffect } from "react";

export function useCanvasFrameRenderer(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  images: readonly HTMLImageElement[],
  frameIndex: number,
  isLoaded: boolean
): void {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isLoaded || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = images[frameIndex];
    if (!image || !image.complete) return;

    // Set canvas dimensions to match image on first draw
    if (canvas.width !== image.naturalWidth || canvas.height !== image.naturalHeight) {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
    }

    const rafId = requestAnimationFrame(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0);
    });

    return () => cancelAnimationFrame(rafId);
  }, [canvasRef, images, frameIndex, isLoaded]);
}
