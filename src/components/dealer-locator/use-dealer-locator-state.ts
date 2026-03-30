import { useState } from "react";
import { DEFAULT_DEALER_LOCATION_ID } from "@/data/dealer-locations.constants";
import { getSelectedDealer } from "./get-selected-dealer";

export function useDealerLocatorState() {
  const [selectedDealerId, setSelectedDealerId] = useState(DEFAULT_DEALER_LOCATION_ID);
  const selectedDealer = getSelectedDealer(selectedDealerId);

  return {
    selectedDealer,
    selectedDealerId,
    setSelectedDealerId
  };
}
