import styled from "styled-components";

export const FooterBrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 320px;
`;

export const FooterBrandTitle = styled.h3`
  font-family: var(--font-family-base);
  font-size: 36px;
  font-weight: 800;
  letter-spacing: 8px;
  margin: 0;
  text-transform: uppercase;
`;

export const FooterBrandTagline = styled.p`
  color: #ffffff25;
  font-size: 14px;
  font-style: italic;
  margin: 0;
`;

export const FooterBrandAddress = styled.p`
  color: #ffffff18;
  font-size: 13px;
  line-height: 1.8;
  margin: 0;
  text-transform: uppercase;
  width: 300px;

  span {
    display: block;
  }
`;
