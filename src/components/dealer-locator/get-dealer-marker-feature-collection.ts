import type { FeatureCollection, Point } from "geojson";
import type { DealerLocation } from "@/data/site-content.types";

type DealerMarkerProperties = {
  dealerId: string;
  isSelected: boolean;
};

export function getDealerMarkerFeatureCollection(
  dealers: readonly DealerLocation[],
  selectedDealerId: string
): FeatureCollection<Point, DealerMarkerProperties> {
  return {
    features: dealers.map((dealer) => ({
      geometry: {
        coordinates: [dealer.coordinates[0], dealer.coordinates[1]],
        type: "Point"
      },
      properties: {
        dealerId: dealer.id,
        isSelected: dealer.id === selectedDealerId
      },
      type: "Feature"
    })),
    type: "FeatureCollection"
  };
}
