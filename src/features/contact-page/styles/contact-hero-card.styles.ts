import styled from "styled-components";

export const ContactHeroCardRoot = styled.article`
  background: var(--color-bg-canvas);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  height: 280px;
  justify-content: space-between;
  overflow: hidden;
  padding: 32px;
`;

export const ContactHeroCardNumber = styled.p`
  color: var(--color-text-muted-light);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  margin: 0;
`;

export const ContactHeroCardTitle = styled.h2`
  display: grid;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.12;
  margin: 0 0 14px;
  text-transform: uppercase;
`;

export const ContactHeroCardCta = styled.a`
  align-items: center;
  color: var(--red);
  display: inline-flex;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;

  svg {
    background: var(--red);
    color: var(--color-text-inverse);
    height: 12px;
    padding: 2px;
    width: 12px;
  }
`;
