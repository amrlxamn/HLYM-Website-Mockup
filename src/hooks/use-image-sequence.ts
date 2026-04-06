import { useEffect, useRef, useState } from "react";

interface UseImageSequenceResult {
  readonly images: readonly HTMLImageElement[];
  readonly isLoaded: boolean;
}

export function useImageSequence(frames: readonly string[]): UseImageSequenceResult {
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    if (frames.length === 0) {
      setIsLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalCount = frames.length;
    const images: HTMLImageElement[] = [];

    frames.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === totalCount) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount += 1;
        if (loadedCount === totalCount) {
          setIsLoaded(true);
        }
      };
      images[index] = img;
    });

    imagesRef.current = images;

    return () => {
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [frames]);

  return { images: imagesRef.current, isLoaded };
}
