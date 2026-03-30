import styled from "styled-components";

export const FooterLinksGrid = styled.div`
  display: inline-flex;
  gap: 64px;

  @media (max-width: 1360px) {
    flex-wrap: wrap;
    row-gap: 28px;
  }

  @media (max-width: 640px) {
    display: grid;
    gap: 24px 14px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const FooterColumnRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 160px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const FooterColumnTitle = styled.h4`
  color: #ffffff90;
  font-family: var(--font-family-base);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0;
  text-transform: uppercase;
`;

export const FooterColumnRedLine = styled.span`
  background: linear-gradient(90deg, #ec1c24 0%, #ec1c2400 100%);
  height: 2px;
  width: 32px;
`;

export const FooterColumnLink = styled.a`
  color: #ffffff35;
  font-size: 13px;
  text-transform: capitalize;
`;

export const FooterBottomLinks = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;

  span {
    align-items: center;
    display: flex;
    gap: 12px;
  }
`;

export const FooterBottomLink = styled.a`
  color: #ffffff15;
  font-size: 11px;
  letter-spacing: 0.5px;
  margin: 0;
  text-transform: capitalize;
`;

export const FooterBottomDot = styled.span`
  background: #ffffff10;
  border-radius: 999px;
  height: 3px;
  width: 3px;
`;
