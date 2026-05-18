import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactFaqItemRoot = styled.article`
  border-top: 1px solid var(--color-border-muted);
  padding: 24px 0 0;

  &:first-child {
    border-top: 0;
    padding-top: 0;
  }
`;

export const ContactFaqSummary = styled.button`
  align-items: flex-start;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  text-align: left;
  width: 100%;
`;

export const ContactFaqQuestion = styled.h2`
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
`;

export const ContactFaqIcon = styled.span`
  align-items: center;
  border: 1px solid var(--red);
  border-radius: 0;
  color: var(--red);
  display: inline-flex;
  flex: 0 0 auto;
  height: 24px;
  justify-content: center;
  width: 24px;

  svg {
    height: 16px;
    width: 16px;
  }
`;

export const ContactFaqPanel = styled(motion.div)`
  overflow: hidden;
`;

export const ContactFaqPanelInner = styled.div`
  padding-top: 8px;
`;

export const ContactFaqAnswer = styled.p`
  color: var(--color-text-dim);
  font-size: 16px;
  line-height: 23px;
  margin: 0 48px 0 0;
`;

export const ContactFaqHelpful = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;

  > span {
    color: var(--color-text-neutral-dark);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

export const ContactFaqHelpfulButton = styled.button`
  align-items: center;
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-primary);
  display: inline-flex;
  gap: 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  min-height: 24px;
  padding: 6px 12px;
  text-transform: uppercase;

  span {
    background: var(--color-text-primary);
    height: 12px;
    width: 12px;
  }
`;
