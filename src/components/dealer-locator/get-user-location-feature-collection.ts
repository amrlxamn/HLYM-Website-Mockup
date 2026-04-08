import type { FeatureCollection, Point } from "geojson";
import type { BrowserCoordinates } from "./dealer-location.types";

type UserLocationProperties = {
  label: string;
};

export function getUserLocationFeatureCollection(
  coordinates: BrowserCoordinates
): FeatureCollection<Point, UserLocationProperties> {
  return {
    features: [
      {
        geometry: {
          coordinates: [coordinates[0], coordinates[1]],
          type: "Point"
        },
        properties: {
          label: "Your location"
        },
        type: "Feature"
      }
    ],
    type: "FeatureCollection"
  };
}
