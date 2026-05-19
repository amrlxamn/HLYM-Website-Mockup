import {
  ContactFaqFilterLabel,
  ContactFaqTopicButton,
  ContactFaqTopicList
} from "../styles/contact-faq-filter.styles";

type ContactFaqTopicFilterProps = {
  activeTopic: string;
  label: string;
  onSelectTopic: (topic: string) => void;
  topics: readonly string[];
};

export function ContactFaqTopicFilter({
  activeTopic,
  label,
  onSelectTopic,
  topics
}: ContactFaqTopicFilterProps) {
  return (
    <div aria-label={label}>
      <ContactFaqFilterLabel>{label}</ContactFaqFilterLabel>
      <ContactFaqTopicList>
        {topics.map((topic) => (
          <ContactFaqTopicButton
            $active={topic === activeTopic}
            aria-pressed={topic === activeTopic}
            key={topic}
            onClick={() => onSelectTopic(topic)}
            type="button"
          >
            {topic}
          </ContactFaqTopicButton>
        ))}
      </ContactFaqTopicList>
    </div>
  );
}
