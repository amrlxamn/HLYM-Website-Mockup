import styled from "styled-components";
import { Container } from "@/styles/layout";

export const ProductFullSpecificationRoot = styled.section`
  background: var(--color-bg-canvas);
  color: var(--color-text-primary);
  min-height: calc(260vh - var(--header-height-total));
  position: relative;

  @media (max-width: 1080px) {
    min-height: auto;
    padding: clamp(64px, 9vw, 96px) 0;
  }
`;

export const ProductFullSpecificationInner = styled(Container)`
  align-content: center;
  box-sizing: border-box;
  display: grid;
  gap: clamp(32px, 5vh, 50px);
  height: calc(100vh - var(--header-height-total));
  min-height: calc(100vh - var(--header-height-total));
  overflow: hidden;
  padding-bottom: clamp(32px, 5vh, 56px);
  padding-top: clamp(32px, 5vh, 56px);
  position: sticky;
  top: var(--header-height-total);

  @media (max-width: 1080px) {
    height: auto;
    min-height: 0;
    overflow: visible;
    padding-bottom: 0;
    padding-top: 0;
    position: static;
  }
`;

export const ProductFullSpecificationHeader = styled.header`
  display: grid;
  gap: 24px;
  justify-items: start;
`;

export const ProductFullSpecificationEyebrow = styled.p`
  color: var(--red);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
`;

export const ProductFullSpecificationTitle = styled.h2`
  color: var(--color-text-primary);
  font-size: clamp(30px, 3vw, 38px);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 48px;
  margin: 0;
  text-transform: uppercase;
`;

export const ProductFullSpecificationBody = styled.div`
  align-items: start;
  display: grid;
  gap: clamp(48px, 7vw, 104px);
  grid-template-columns: minmax(320px, 560px) minmax(360px, 520px);
  justify-content: center;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;
