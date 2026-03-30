import { useEffect, useRef, useState } from "react";
import type { Map } from "mapbox-gl";
import { createDealerMapInstance } from "./create-dealer-map-instance";

export function useDealerMapInstance() {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [hasMapInitError, setHasMapInitError] = useState(false);
  const [mapInstance, setMapInstance] = useState<Map | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    let isCancelled = false;
    let liveMapInstance: Awaited<ReturnType<typeof createDealerMapInstance>> = null;

    void createDealerMapInstance(canvasRef.current)
      .then((map) => {
        if (isCancelled) {
          map?.remove();
          return;
        }

        if (!map) {
          setHasMapInitError(true);
          return;
        }

        liveMapInstance = map;
        setMapInstance(map);
      })
      .catch(() => {
        if (!isCancelled) {
          setHasMapInitError(true);
        }
      });

    return () => {
      isCancelled = true;
      setMapInstance(null);
      liveMapInstance?.remove();
    };
  }, []);

  return {
    canvasRef,
    hasMapInitError,
    mapInstance
  };
}
