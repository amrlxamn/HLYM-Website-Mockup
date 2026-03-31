import styled from "styled-components";

export const ModelCardRoot = styled.article`
  display: grid;
  grid-template-columns: 500px minmax(0, 1fr);
  margin: 0 auto;
  max-width: 1240px;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (max-width: 1360px) {
    grid-template-columns: 40% 60%;
    width: 100%;
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const ModelCopy = styled.div<{ $compact: boolean }>`
  color: #0a0a0a;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  padding: 40px 48px;
  position: relative;
  z-index: 3;

  @media (max-width: 980px) {
    order: 2;
    padding: 24px;
  }
`;

export const ModelNumber = styled.p`
  color: #00000008;
  font-size: 80px;
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 0.85;
  margin: 0;
`;

export const ModelCategory = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 10px;

  p {
    color: #00000060;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 3px;
    margin: 0;
    text-transform: uppercase;
  }
`;

export const ModelCategoryAccent = styled.span`
  background: var(--red);
  height: 14px;
  width: 2px;
`;

export const ModelName = styled.h3`
  color: #0a0a0a;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
  text-transform: uppercase;
`;

export const ModelSpecs = styled.div`
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 24px;
  row-gap: 10px;
`;

export const ModelSpecGroup = styled.div<{ $compact: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    color: #0a0a0a;
    font-size: ${({ $compact }) => ($compact ? "16px" : "20px")};
    font-weight: 600;
  }

  span {
    color: #00000040;
    font-size: ${({ $compact }) => ($compact ? "8px" : "9px")};
    font-weight: ${({ $compact }) => ($compact ? 500 : 600)};
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

export const ModelDivider = styled.span`
  background: #00000010;
  display: inline-block;
  height: 28px;
  width: 1px;
`;

export const ModelPriceRow = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 24px;
  row-gap: 8px;

  strong {
    color: #0a0a0a;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export const ModelPriceLink = styled.a`
  align-items: center;
  color: #00000050;
  display: inline-flex;
  gap: 8px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;

  svg {
    color: var(--red);
    height: 16px;
    width: 16px;
  }
`;

export const ModelImage = styled.div`
  position: relative;
  z-index: 1;

  @media (max-width: 980px) {
    height: 220px;
    order: 1;
  }
`;

export const ModelImageFade = styled.span`
  background: linear-gradient(90deg, #f7f7f7 0%, #f7f7f700 100%);
  inset: 0 auto 0 0;
  position: absolute;
  width: 200px;
`;

export const ModelLeftAccent = styled.span`
  background: var(--red);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 3px;
`;
