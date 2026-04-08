import type { MapLayerMouseEvent } from "mapbox-gl";

export function getDealerIdFromFeatureEvent(event: MapLayerMouseEvent) {
  const dealerId = event.features?.[0]?.properties?.dealerId;

  return typeof dealerId === "string" ? dealerId : null;
}
