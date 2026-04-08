import { useEffect } from "react";
import type { GeoJSONSource, Map } from "mapbox-gl";
import { createUserLocationMarkerImage } from "./create-user-location-marker-image";
import type { BrowserCoordinates } from "./dealer-location.types";
import { getUserLocationFeatureCollection } from "./get-user-location-feature-collection";

type UseDealerMapUserLocationOptions = {
  coordinates: BrowserCoordinates | null;
  mapInstance: Map | null;
};

const DEALER_USER_LOCATION_SOURCE_ID = "dealer-user-location-source";
const DEALER_USER_LOCATION_LAYER_ID = "dealer-user-location-layer";
const DEALER_USER_LOCATION_IMAGE_ID = "dealer-user-location-image";

export function useDealerMapUserLocation({
  coordinates,
  mapInstance
}: UseDealerMapUserLocationOptions) {
  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    const map = mapInstance;

    const syncUserLocationLayers = () => {
      const existingSource = map.getSource(DEALER_USER_LOCATION_SOURCE_ID) as
        | GeoJSONSource
        | undefined;

      if (!coordinates) {
        if (map.getLayer(DEALER_USER_LOCATION_LAYER_ID)) {
          map.removeLayer(DEALER_USER_LOCATION_LAYER_ID);
        }

        if (existingSource) {
          map.removeSource(DEALER_USER_LOCATION_SOURCE_ID);
        }

        return;
      }

      const userLocationFeatureCollection = getUserLocationFeatureCollection(coordinates);

      if (existingSource) {
        existingSource.setData(userLocationFeatureCollection);
      } else {
        map.addSource(DEALER_USER_LOCATION_SOURCE_ID, {
          data: userLocationFeatureCollection,
          type: "geojson"
        });
      }

      const userLocationMarkerImage = createUserLocationMarkerImage();

      if (map.hasImage(DEALER_USER_LOCATION_IMAGE_ID)) {
        map.updateImage(DEALER_USER_LOCATION_IMAGE_ID, userLocationMarkerImage);
      } else {
        map.addImage(DEALER_USER_LOCATION_IMAGE_ID, userLocationMarkerImage);
      }

      if (!map.getLayer(DEALER_USER_LOCATION_LAYER_ID)) {
        map.addLayer({
          id: DEALER_USER_LOCATION_LAYER_ID,
          layout: {
            "icon-allow-overlap": true,
            "icon-anchor": "bottom",
            "icon-image": DEALER_USER_LOCATION_IMAGE_ID,
            "icon-pitch-alignment": "viewport",
            "icon-rotation-alignment": "viewport",
            "text-anchor": "top",
            "text-field": ["get", "label"],
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
            "text-letter-spacing": 0.18,
            "text-offset": [0, 0.85],
            "text-pitch-alignment": "viewport",
            "text-rotation-alignment": "viewport",
            "text-size": 12,
            "text-transform": "uppercase",
            "text-allow-overlap": true
          },
          paint: {
            "text-color": "#090909",
            "text-halo-blur": 0.5,
            "text-halo-color": "#ffffff",
            "text-halo-width": 6
          },
          source: DEALER_USER_LOCATION_SOURCE_ID,
          type: "symbol"
        });
      }
    };

    if (map.isStyleLoaded()) {
      syncUserLocationLayers();
    } else {
      map.once("load", syncUserLocationLayers);
    }

    return () => {
      if (!map.isStyleLoaded()) {
        return;
      }

      if (!coordinates) {
        return;
      }

      if (map.getLayer(DEALER_USER_LOCATION_LAYER_ID)) {
        map.removeLayer(DEALER_USER_LOCATION_LAYER_ID);
      }

      if (map.getSource(DEALER_USER_LOCATION_SOURCE_ID)) {
        map.removeSource(DEALER_USER_LOCATION_SOURCE_ID);
      }
    };
  }, [coordinates, mapInstance]);
}
