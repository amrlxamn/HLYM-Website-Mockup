import { useState } from "react";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { CONTACT_FAQ_CONTENT } from "../constants/contact-faq.constants";
import {
  ContactFaqBody,
  ContactFaqCopy,
  ContactFaqEmpty,
  ContactFaqHeader,
  ContactFaqList,
  ContactFaqRoot,
  ContactFaqTitle
} from "../styles/contact-faq-shell.styles";
import type { ContactFaqContent } from "../types/contact-page.types";
import { ContactFaqItem } from "./contact-faq-item";
import { ContactFaqTopicFilter } from "./contact-faq-topic-filter";
import { ContactFeedbackBanner } from "./contact-feedback-banner";

type ContactFaqSectionProps = {
  content?: ContactFaqContent;
};

export function ContactFaqSection({ content = CONTACT_FAQ_CONTENT }: ContactFaqSectionProps) {
  const defaultTopic = content.topics[0] ?? "";
  const [activeTopic, setActiveTopic] = useState(defaultTopic);
  const visibleItems =
    activeTopic === defaultTopic
      ? content.items
      : content.items.filter((item) => item.topic === activeTopic);

  return (
    <ContactFaqRoot id="faq" aria-label={toSentenceCase(content.ariaLabel)}>
      <ContactFaqHeader>
        <ContactFaqTitle>{content.title}</ContactFaqTitle>
        <ContactFaqCopy>{content.description}</ContactFaqCopy>
      </ContactFaqHeader>
      <ContactFaqBody>
        <ContactFaqTopicFilter
          activeTopic={activeTopic}
          label={content.filterLabel}
          onSelectTopic={setActiveTopic}
          topics={content.topics}
        />
        <ContactFaqList>
          {visibleItems.length > 0 ? (
            visibleItems.map((item) => <ContactFaqItem item={item} key={item.question} />)
          ) : (
            <ContactFaqEmpty>{content.emptyMessage}</ContactFaqEmpty>
          )}
        </ContactFaqList>
      </ContactFaqBody>
      <ContactFeedbackBanner content={content.feedback} />
    </ContactFaqRoot>
  );
}
