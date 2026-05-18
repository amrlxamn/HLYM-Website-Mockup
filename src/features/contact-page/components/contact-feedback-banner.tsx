import { ArrowRight } from "lucide-react";
import {
  ContactFeedbackBannerCopy,
  ContactFeedbackBannerCta,
  ContactFeedbackBannerGlow,
  ContactFeedbackBannerRoot,
  ContactFeedbackBannerTitle
} from "../styles/contact-feedback-banner.styles";
import type { ContactFeedbackBanner as ContactFeedbackBannerContent } from "../types/contact-page.types";

type ContactFeedbackBannerProps = {
  content: ContactFeedbackBannerContent;
};

export function ContactFeedbackBanner({ content }: ContactFeedbackBannerProps) {
  return (
    <ContactFeedbackBannerRoot>
      <ContactFeedbackBannerGlow aria-hidden="true" />
      <ContactFeedbackBannerCopy>
        <ContactFeedbackBannerTitle>{content.title}</ContactFeedbackBannerTitle>
        <p>{content.description}</p>
      </ContactFeedbackBannerCopy>
      <ContactFeedbackBannerCta href={content.ctaHref}>
        {content.ctaLabel}
        <ArrowRight aria-hidden="true" />
      </ContactFeedbackBannerCta>
    </ContactFeedbackBannerRoot>
  );
}
