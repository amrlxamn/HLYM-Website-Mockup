import styled from "styled-components";
import { Container } from "@/styles/layout";

export const ContactFeedbackBannerRoot = styled(Container)`
  align-items: center;
  background: rgba(5, 6, 8, 0.92);
  border: 2px solid var(--red);
  box-shadow: 0 16px 36px -18px rgba(0, 0, 0, 0.28);
  color: var(--color-text-inverse);
  display: flex;
  gap: 32px;
  justify-content: space-between;
  overflow: hidden;
  padding: 28px 36px;
  position: relative;

  @media (max-width: 760px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const ContactFeedbackBannerGlow = styled.span`
  background: rgba(236, 28, 36, 0.35);
  border-radius: var(--radius-pill);
  filter: blur(45px);
  height: 220px;
  left: 27%;
  mix-blend-mode: screen;
  pointer-events: none;
  position: absolute;
  top: 36px;
  width: min(760px, 62%);
`;

export const ContactFeedbackBannerCopy = styled.div`
  display: grid;
  gap: 4px;
  position: relative;

  p {
    font-size: 14px;
    line-height: 23px;
    margin: 0;
  }
`;

export const ContactFeedbackBannerTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.2;
  margin: 0;
`;

export const ContactFeedbackBannerCta = styled.a`
  align-items: center;
  background: var(--red);
  color: var(--color-text-inverse);
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  font-size: 13px;
  font-weight: 700;
  justify-content: center;
  letter-spacing: 1.5px;
  min-height: 60px;
  padding: 18px 32px;
  position: relative;
  text-transform: uppercase;

  svg {
    height: 24px;
    width: 24px;
  }
`;
