import { useEffect } from "react";
import type { DealerLocation } from "@/data/site-content.types";
import type { Map } from "mapbox-gl";

type UseDealerMapCameraOptions = {
  dealers: readonly DealerLocation[];
  mapInstance: Map | null;
  selectedDealerId: string;
};

export function useDealerMapCamera({
  dealers,
  mapInstance,
  selectedDealerId
}: UseDealerMapCameraOptions) {
  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    const selectedDealer = dealers.find((dealer) => dealer.id === selectedDealerId) ?? dealers[0]!;

    mapInstance.easeTo({
      center: [...selectedDealer.coordinates],
      duration: 900,
      essential: true
    });
  }, [dealers, mapInstance, selectedDealerId]);
}
