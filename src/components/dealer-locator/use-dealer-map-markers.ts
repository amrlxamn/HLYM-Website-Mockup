import { useEffect } from "react";
import type { DealerLocation } from "@/data/site-content.types";
import type { Map, Marker } from "mapbox-gl";
import { createDealerMapMarkers } from "./create-dealer-map-markers";

type UseDealerMapMarkersOptions = {
  dealers: readonly DealerLocation[];
  mapInstance: Map | null;
  onSelectDealer: (dealerId: string) => void;
  selectedDealerId: string;
};

export function useDealerMapMarkers({
  dealers,
  mapInstance,
  onSelectDealer,
  selectedDealerId
}: UseDealerMapMarkersOptions) {
  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    let isCancelled = false;
    let activeMarkers: Marker[] = [];

    void createDealerMapMarkers({
      dealers,
      map: mapInstance,
      onSelectDealer,
      selectedDealerId
    }).then((markers) => {
      if (isCancelled) {
        markers.forEach((marker) => {
          marker.remove();
        });
        return;
      }

      activeMarkers = markers;
    });

    return () => {
      isCancelled = true;
      activeMarkers.forEach((marker) => {
        marker.remove();
      });
    };
  }, [dealers, mapInstance, onSelectDealer, selectedDealerId]);
}
