import { SITE_COPY } from "@/data/site-copy.constants";
import type { DealerLocation } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  DealerInfoCard,
  DealerInfoEyebrow,
  DealerInfoGrid,
  DealerInfoItem,
  DealerInfoLabel,
  DealerInfoLocation,
  DealerInfoSummary,
  DealerInfoTitle,
  DealerInfoValue,
  DealerPanelHint,
  DealerServiceList,
  DealerServiceTag
} from "./dealer-locator.styles";

type DealerInfoPanelProps = {
  dealer: DealerLocation;
};

export function DealerInfoPanel({ dealer }: DealerInfoPanelProps) {
  const dealerLocatorCopy = SITE_COPY.dealerLocator;

  return (
    <DealerInfoCard aria-live="polite">
      <DealerInfoEyebrow>{dealerLocatorCopy.panelEyebrow}</DealerInfoEyebrow>
      <DealerInfoTitle>{dealer.label}</DealerInfoTitle>
      <DealerInfoLocation>{dealer.locality}</DealerInfoLocation>
      <DealerInfoSummary>{dealer.summary}</DealerInfoSummary>
      <DealerInfoGrid>
        <DealerInfoItem>
          <DealerInfoLabel>{dealerLocatorCopy.panelAreaLabel}</DealerInfoLabel>
          <DealerInfoValue>{dealer.area}</DealerInfoValue>
        </DealerInfoItem>
        <DealerInfoItem>
          <DealerInfoLabel>{dealerLocatorCopy.panelHoursLabel}</DealerInfoLabel>
          <DealerInfoValue>{dealer.hours}</DealerInfoValue>
        </DealerInfoItem>
        <DealerInfoItem>
          <DealerInfoLabel>{dealerLocatorCopy.panelFocusLabel}</DealerInfoLabel>
          <DealerInfoValue>{dealer.focus}</DealerInfoValue>
        </DealerInfoItem>
      </DealerInfoGrid>
      <DealerInfoLabel>{dealerLocatorCopy.panelServicesLabel}</DealerInfoLabel>
      <DealerServiceList>
        {dealer.serviceTags.map((service) => (
          <DealerServiceTag key={service}>{toSentenceCase(service)}</DealerServiceTag>
        ))}
      </DealerServiceList>
      <DealerPanelHint>{toSentenceCase(dealerLocatorCopy.panelHint)}</DealerPanelHint>
    </DealerInfoCard>
  );
}
