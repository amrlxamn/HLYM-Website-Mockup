import type { DealerLocation } from "@/data/site-content.types";

type CreateDealerMapMarkerElementOptions = {
  dealer: DealerLocation;
  isSelected: boolean;
  onSelectDealer: (dealerId: string) => void;
};

export function createDealerMapMarkerElement({
  dealer,
  isSelected,
  onSelectDealer
}: CreateDealerMapMarkerElementOptions) {
  const markerButton = document.createElement("button");
  const markerInner = document.createElement("span");
  const markerMiddle = document.createElement("span");
  const markerOuter = document.createElement("span");

  markerButton.type = "button";
  markerButton.className = isSelected ? "dealer-map-marker is-selected" : "dealer-map-marker";
  markerButton.setAttribute("aria-label", `Show ${dealer.label}`);
  markerButton.addEventListener("click", () => {
    onSelectDealer(dealer.id);
  });

  markerInner.className = "dealer-map-marker__inner";
  markerMiddle.className = "dealer-map-marker__middle";
  markerOuter.className = "dealer-map-marker__outer";

  markerInner.setAttribute("aria-hidden", "true");
  markerMiddle.setAttribute("aria-hidden", "true");
  markerOuter.setAttribute("aria-hidden", "true");

  markerButton.append(markerOuter, markerMiddle, markerInner);

  return markerButton;
}
