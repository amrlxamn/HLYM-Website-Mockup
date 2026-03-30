import { DEALER_LOCATIONS, DEFAULT_DEALER_LOCATION } from "@/data/dealer-locations.constants";

export function getSelectedDealer(dealerId: string) {
  return DEALER_LOCATIONS.find((dealer) => dealer.id === dealerId) ?? DEFAULT_DEALER_LOCATION;
}
