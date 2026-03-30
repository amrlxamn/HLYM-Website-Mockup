import { DEALER_LOCATIONS } from "@/data/dealer-locations.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { DealerLocatorContent } from "./dealer-locator-content";
import { DealerMapStageView } from "./dealer-map-stage";
import { useDealerLocatorState } from "./use-dealer-locator-state";
import { DealerLocatorSectionRoot } from "./dealer-locator.styles";
import { SITE_COPY } from "@/data/site-copy.constants";

export function DealerLocatorSection() {
  const dealerLocatorCopy = SITE_COPY.dealerLocator;
  const { selectedDealer, selectedDealerId, setSelectedDealerId } = useDealerLocatorState();

  return (
    <DealerLocatorSectionRoot aria-label={toSentenceCase(dealerLocatorCopy.ariaLabel)}>
      <DealerMapStageView
        dealers={DEALER_LOCATIONS}
        onSelectDealer={setSelectedDealerId}
        selectedDealerId={selectedDealerId}
      />
      <DealerLocatorContent dealer={selectedDealer} />
    </DealerLocatorSectionRoot>
  );
}
