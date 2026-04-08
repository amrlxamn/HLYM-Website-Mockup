import { describe, expect, it } from "vitest";
import { DEALER_LOCATIONS } from "@/data/dealer-locations.constants";
import { getDealerMarkerFeatureCollection } from "./get-dealer-marker-feature-collection";

describe("getDealerMarkerFeatureCollection", () => {
  it("marks only the selected dealer as selected", () => {
    const featureCollection = getDealerMarkerFeatureCollection(
      DEALER_LOCATIONS.slice(0, 2),
      DEALER_LOCATIONS[1]!.id
    );

    expect(featureCollection.features[0]?.properties.isSelected).toBe(false);
    expect(featureCollection.features[1]?.properties.isSelected).toBe(true);
  });
});
