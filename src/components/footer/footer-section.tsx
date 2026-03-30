import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { FooterBrand } from "./footer-brand";
import { FooterColumns } from "./footer-columns";
import { FooterDecorations } from "./footer-decorations";
import { FooterPolicyLinks } from "./footer-policy-links";
import {
  FooterBottom,
  FooterBottomText,
  FooterRedLine,
  FooterSectionRoot,
  FooterTop,
  MainFooter
} from "./footer-shell.styles";

export function FooterSection() {
  const footerCopy = SITE_COPY.footer;

  return (
    <FooterSectionRoot aria-label={toSentenceCase(footerCopy.ariaLabel)}>
      <MainFooter id="site-footer">
        <FooterDecorations />
        <FooterTop>
          <FooterBrand />
          <FooterColumns />
        </FooterTop>
        <FooterBottom>
          <FooterBottomText>{toSentenceCase(footerCopy.copyright)}</FooterBottomText>
          <FooterPolicyLinks />
        </FooterBottom>
      </MainFooter>
      <FooterRedLine />
    </FooterSectionRoot>
  );
}
