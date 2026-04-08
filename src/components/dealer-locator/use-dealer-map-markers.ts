import { useEffect } from "react";
import type { DealerLocation } from "@/data/site-content.types";
import type { GeoJSONSource, MapLayerMouseEvent, Map } from "mapbox-gl";
import { createDealerMapMarkerImage } from "./create-dealer-map-marker-image";
import { createDealerMapPulseImage } from "./create-dealer-map-pulse-image";
import { getDealerIdFromFeatureEvent } from "./get-dealer-id-from-feature-event";
import { getDealerMarkerFeatureCollection } from "./get-dealer-marker-feature-collection";
import { getMapPointerStyleReset } from "./get-map-pointer-style-reset";

type UseDealerMapMarkersOptions = {
  dealers: readonly DealerLocation[];
  mapInstance: Map | null;
  onSelectDealer: (dealerId: string) => void;
  selectedDealerId: string;
};

const DEALER_MARKER_SOURCE_ID = "dealer-marker-source";
const DEALER_MARKER_HIT_LAYER_ID = "dealer-marker-hit-layer";
const DEALER_MARKER_LAYER_ID = "dealer-marker-symbol-layer";
const DEALER_MARKER_PULSE_LAYER_ID = "dealer-marker-pulse-layer";
const DEALER_MARKER_DEFAULT_IMAGE_ID = "dealer-marker-default-image";
const DEALER_MARKER_PULSE_IMAGE_ID = "dealer-marker-pulse-image";

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

    const map = mapInstance;
    const markerFeatureCollection = getDealerMarkerFeatureCollection(dealers, selectedDealerId);
    const handleSelectDealer = (event: MapLayerMouseEvent) => {
      const dealerId = getDealerIdFromFeatureEvent(event);

      if (!dealerId) {
        return;
      }

      onSelectDealer(dealerId);
    };

    const handleMouseEnter = () => {
      map.getCanvas().style.cursor = "pointer";
    };

    const handleMouseLeave = () => {
      map.getCanvas().style.cursor = getMapPointerStyleReset();
    };

    const syncMarkerLayers = () => {
      const existingSource = map.getSource(DEALER_MARKER_SOURCE_ID) as GeoJSONSource | undefined;
      const defaultMarkerImage = createDealerMapMarkerImage(false);
      const selectedPulseImage = createDealerMapPulseImage();

      if (existingSource) {
        existingSource.setData(markerFeatureCollection);
      } else {
        map.addSource(DEALER_MARKER_SOURCE_ID, {
          data: markerFeatureCollection,
          type: "geojson"
        });
      }

      if (map.hasImage(DEALER_MARKER_DEFAULT_IMAGE_ID)) {
        map.updateImage(DEALER_MARKER_DEFAULT_IMAGE_ID, defaultMarkerImage);
      } else {
        map.addImage(DEALER_MARKER_DEFAULT_IMAGE_ID, defaultMarkerImage);
      }

      if (map.hasImage(DEALER_MARKER_PULSE_IMAGE_ID)) {
        map.updateImage(DEALER_MARKER_PULSE_IMAGE_ID, selectedPulseImage);
      } else {
        map.addImage(DEALER_MARKER_PULSE_IMAGE_ID, selectedPulseImage);
      }

      if (!map.getLayer(DEALER_MARKER_PULSE_LAYER_ID)) {
        map.addLayer({
          filter: ["==", ["get", "isSelected"], true],
          id: DEALER_MARKER_PULSE_LAYER_ID,
          layout: {
            "icon-allow-overlap": true,
            "icon-anchor": "bottom",
            "icon-image": DEALER_MARKER_PULSE_IMAGE_ID,
            "icon-pitch-alignment": "viewport",
            "icon-rotation-alignment": "viewport"
          },
          source: DEALER_MARKER_SOURCE_ID,
          type: "symbol"
        });
      }

      if (!map.getLayer(DEALER_MARKER_HIT_LAYER_ID)) {
        map.addLayer({
          id: DEALER_MARKER_HIT_LAYER_ID,
          paint: {
            "circle-opacity": 0.001,
            "circle-radius": 22
          },
          source: DEALER_MARKER_SOURCE_ID,
          type: "circle"
        });
      }

      if (!map.getLayer(DEALER_MARKER_LAYER_ID)) {
        map.addLayer({
          filter: ["!=", ["get", "isSelected"], true],
          id: DEALER_MARKER_LAYER_ID,
          layout: {
            "icon-allow-overlap": true,
            "icon-anchor": "bottom",
            "icon-image": DEALER_MARKER_DEFAULT_IMAGE_ID,
            "icon-pitch-alignment": "viewport",
            "icon-rotation-alignment": "viewport"
          },
          source: DEALER_MARKER_SOURCE_ID,
          type: "symbol"
        });
      }
    };

    if (map.isStyleLoaded()) {
      syncMarkerLayers();
    } else {
      map.once("load", syncMarkerLayers);
    }

    map.on("click", DEALER_MARKER_HIT_LAYER_ID, handleSelectDealer);
    map.on("mouseenter", DEALER_MARKER_HIT_LAYER_ID, handleMouseEnter);
    map.on("mouseleave", DEALER_MARKER_HIT_LAYER_ID, handleMouseLeave);

    return () => {
      map.off("click", DEALER_MARKER_HIT_LAYER_ID, handleSelectDealer);
      map.off("mouseenter", DEALER_MARKER_HIT_LAYER_ID, handleMouseEnter);
      map.off("mouseleave", DEALER_MARKER_HIT_LAYER_ID, handleMouseLeave);
      map.getCanvas().style.cursor = getMapPointerStyleReset();
    };
  }, [dealers, mapInstance, onSelectDealer, selectedDealerId]);
}
