import type { DealerLocation } from "@/data/site-content.types";
import type { Map, Marker } from "mapbox-gl";
import { createDealerMapMarkerElement } from "./create-dealer-map-marker-element";

type CreateDealerMapMarkersOptions = {
  dealers: readonly DealerLocation[];
  map: Map;
  onSelectDealer: (dealerId: string) => void;
  selectedDealerId: string;
};

export async function createDealerMapMarkers({
  dealers,
  map,
  onSelectDealer,
  selectedDealerId
}: CreateDealerMapMarkersOptions): Promise<Marker[]> {
  const mapboxgl = await import("mapbox-gl");

  return dealers.map((dealer) => {
    const element = createDealerMapMarkerElement({
      dealer,
      isSelected: dealer.id === selectedDealerId,
      onSelectDealer
    });

    return new mapboxgl.default.Marker({ anchor: "bottom", element })
      .setLngLat([...dealer.coordinates])
      .addTo(map);
  });
}
