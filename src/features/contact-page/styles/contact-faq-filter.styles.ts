import styled from "styled-components";

export const ContactFaqFilterLabel = styled.p`
  color: var(--color-text-neutral-dark);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.2;
  margin: 0 0 14px;
  text-transform: uppercase;
`;

export const ContactFaqTopicList = styled.div`
  display: grid;
  gap: 6px;
  width: 250px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
  }
`;

export const ContactFaqTopicButton = styled.button<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? "var(--color-text-primary)" : "transparent")};
  border: 1px solid
    ${({ $active }) => ($active ? "var(--color-text-primary)" : "var(--color-border-subtle)")};
  color: ${({ $active }) => ($active ? "var(--color-text-inverse)" : "var(--color-text-primary)")};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  min-height: 24px;
  padding: 12px;
  text-align: left;
  text-transform: uppercase;
`;
