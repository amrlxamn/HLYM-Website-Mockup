import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { DealerMapBackdrop } from "./dealer-locator.styles";

export function DealerMapStaticStage() {
  const dealerLocatorCopy = SITE_COPY.dealerLocator;

  return (
    <DealerMapBackdrop
      aria-label={toSentenceCase(dealerLocatorCopy.mapAriaLabel)}
      role="img"
    />
  );
}
