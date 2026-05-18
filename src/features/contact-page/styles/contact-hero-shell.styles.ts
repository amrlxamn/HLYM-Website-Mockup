import styled from "styled-components";
import { Container } from "@/styles/layout";

export const ContactHeroRoot = styled.section`
  background: var(--color-bg-canvas);
  color: var(--color-text-inverse);
  min-height: 720px;
  overflow: hidden;
  position: relative;
`;

export const ContactHeroBackground = styled.img`
  height: 550px;
  inset: 0;
  object-position: center;
  position: absolute;
  width: 100%;
`;

export const ContactHeroGradient = styled.div`
  background: var(--contact-hero-gradient-left);
  height: 550px;
  inset: 0;
  position: absolute;
`;

export const ContactHeroVerticalShade = styled.div`
  background: var(--contact-hero-gradient-vertical);
  height: 550px;
  inset: 0;
  position: absolute;
`;

export const ContactHeroInner = styled(Container)`
  display: grid;
  gap: 50px;
  padding: 100px 0;
  position: relative;
  z-index: 1;
`;

export const ContactHeroContentPanel = styled.div`
  display: grid;
  gap: 24px;
  max-width: 600px;
`;

export const ContactHeroTitle = styled.h1`
  font-size: clamp(30px, 3vw, 38px);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 48px;
  margin: 0;
  text-transform: uppercase;
`;

export const ContactHeroCopy = styled.p`
  color: var(--color-text-neutral-dark);
  font-size: 18px;
  line-height: 1.45;
  margin: 0;
  max-width: 600px;
`;

export const ContactHeroCardGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
