import styled from "styled-components";
import { Container } from "@/styles/layout";

export const FooterSectionRoot = styled.section`
  background: var(--color-bg-primary);
`;

export const MainFooter = styled.footer`
  background: linear-gradient(180deg, #100308 0%, #0c0214 30%, #06060e 60%, #050508 100%);
  height: 580px;
  overflow: hidden;
  position: relative;

  @media (max-width: 980px) {
    height: auto;
    padding-bottom: 36px;
  }
`;

export const MeshLeft = styled.div`
  background: radial-gradient(circle, #ec1c240d 0%, #ec1c2406 30%, #ec1c2400 70%);
  height: 600px;
  left: -100px;
  pointer-events: none;
  position: absolute;
  top: -50px;
  width: 600px;
`;

export const MeshRight = styled.div`
  background: radial-gradient(circle, #2a0a3012 0%, #1a052008 40%, #0a0a0a00 80%);
  height: 500px;
  left: 1050px;
  pointer-events: none;
  position: absolute;
  top: 150px;
  width: 500px;
`;

export const AmbientCenter = styled.div`
  background: radial-gradient(circle at 50% 30%, #ffffff04 0%, #ffffff01 50%, #ffffff00 100%);
  height: 300px;
  left: 320px;
  pointer-events: none;
  position: absolute;
  top: 50px;
  width: 800px;
`;

export const FooterTopLine = styled.div`
  background: linear-gradient(90deg, #ec1c2400 0%, #ec1c2440 30%, #ec1c2440 70%, #ec1c2400 100%);
  height: 1px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const YamahaWatermark = styled.p`
  color: #ffffff03;
  font-family: var(--font-family-base);
  font-size: 220px;
  font-weight: 900;
  left: 100px;
  letter-spacing: 30px;
  margin: 0;
  position: absolute;
  text-transform: uppercase;
  top: 200px;

  @media (max-width: 1360px) {
    display: none;
  }
`;

export const FooterTop = styled(Container)`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding-top: 80px;
  position: relative;
  z-index: 3;

  @media (max-width: 1360px) {
    flex-direction: column;
  }

  @media (max-width: 980px) {
    padding-top: 48px;
  }
`;

export const FooterBottom = styled(Container)`
  align-items: center;
  border-top: 1px solid;
  border-image: linear-gradient(90deg, #ffffff00 0%, #ffffff10 30%, #ffffff10 70%, #ffffff00 100%) 1;
  bottom: 52px;
  display: flex;
  justify-content: space-between;
  left: 50%;
  padding-top: 30px;
  position: absolute;
  transform: translateX(-50%);
  z-index: 3;

  @media (max-width: 1360px) {
    width: calc(100% - 2rem);
  }

  @media (max-width: 980px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    margin: 24px 1rem 0;
    padding-top: 18px;
    position: static;
    transform: none;
  }
`;

export const FooterBottomText = styled.p`
  color: #ffffff15;
  font-size: 11px;
  letter-spacing: 0.5px;
  margin: 0;
`;

export const FooterRedLine = styled.div`
  background: linear-gradient(
    90deg,
    #ec1c2400 0%,
    #ec1c24 20%,
    #ff3040 50%,
    #ec1c24 80%,
    #ec1c2400 100%
  );
  height: 3px;
`;
