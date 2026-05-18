import styled from "styled-components";

export const ContactHeroSearchRoot = styled.div`
  align-items: center;
  backdrop-filter: blur(18px);
  background: var(--contact-search-surface);
  border: 1px solid var(--contact-search-border);
  box-shadow: var(--contact-search-shadow), var(--contact-search-inset);
  display: flex;
  max-width: 600px;
  overflow: hidden;
  width: 100%;
`;

export const ContactHeroSearchIcon = styled.span`
  align-items: center;
  color: var(--color-text-inverse);
  display: inline-flex;
  flex: 0 0 auto;
  padding: 14px 16px;

  svg {
    height: 16px;
    width: 16px;
  }
`;

export const ContactHeroSearchInput = styled.input`
  background: transparent;
  border: 0;
  color: var(--color-text-inverse);
  flex: 1;
  font-size: 14px;
  line-height: 23px;
  min-width: 0;
  padding: 14px 16px;

  &::placeholder {
    color: var(--color-text-inverse);
    opacity: 0.9;
  }
`;
