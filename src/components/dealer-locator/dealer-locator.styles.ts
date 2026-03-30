import styled, { keyframes } from "styled-components";

const dealerMarkerPulseMiddle = keyframes`
  0% {
    opacity: 0.34;
    transform: translate(-50%, -50%) scale(0.88);
  }

  60% {
    opacity: 0.14;
    transform: translate(-50%, -50%) scale(1.26);
  }

  100% {
    opacity: 0.34;
    transform: translate(-50%, -50%) scale(0.88);
  }
`;

const dealerMarkerPulseOuter = keyframes`
  0% {
    opacity: 0.22;
    transform: translate(-50%, -50%) scale(0.84);
  }

  55% {
    opacity: 0.08;
    transform: translate(-50%, -50%) scale(1.34);
  }

  100% {
    opacity: 0.22;
    transform: translate(-50%, -50%) scale(0.84);
  }
`;

export const DealerLocatorSectionRoot = styled.section`
  background: #0a0a0a;
  height: 100vh;
  overflow: hidden;
  position: relative;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const DealerMapStage = styled.div`
  inset: 0;
  position: absolute;

  @media (max-width: 980px) {
    height: 460px;
    position: relative;
  }
`;

export const DealerMapBackdrop = styled.div`
  background:
    radial-gradient(circle at 50% 50%, #ffffff12 0%, #ffffff00 24%),
    linear-gradient(140deg, #060606 0%, #0b0b0b 48%, #050505 100%);
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::before {
    background:
      linear-gradient(90deg, #ffffff08 1px, transparent 1px),
      linear-gradient(0deg, #ffffff06 1px, transparent 1px);
    background-position: center center;
    background-size: 72px 72px;
    content: "";
    inset: -6%;
    opacity: 0.42;
    position: absolute;
    transform: perspective(1200px) rotateX(66deg) scale(1.8) translateY(13%);
    transform-origin: center;
  }

  &::after {
    background:
      radial-gradient(circle at 50% 50%, #ffffff14 0%, #ffffff00 58%),
      linear-gradient(90deg, #ffffff00 0%, #ffffff10 50%, #ffffff00 100%);
    content: "";
    inset: 0;
    position: absolute;
  }
`;

export const DealerMapCanvas = styled.div`
  height: 100%;
  position: relative;
  width: 100%;

  .mapboxgl-map,
  .mapboxgl-canvas,
  .mapboxgl-canvas-container {
    height: 100%;
    width: 100%;
  }

  .mapboxgl-canvas {
    cursor: grab;
    filter: grayscale(-1) contrast(0.92) brightness(1.18);
  }

  .mapboxgl-canvas:active {
    cursor: grabbing;
  }

  .mapboxgl-ctrl-bottom-left,
  .mapboxgl-ctrl-bottom-right {
    filter: grayscale(1);
    opacity: 0.74;
    z-index: 2;
  }

  .dealer-map-marker {
    align-items: center;
    background: transparent;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    filter: drop-shadow(0 0 16px #ee393d66);
    height: 64px;
    justify-content: center;
    padding: 0;
    position: relative;
    width: 64px;

    > span {
      border-radius: 999px;
      display: block;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .dealer-map-marker__inner {
      background: #ee393d;
      box-shadow:
        0 0 0 2px #ffffff,
        0 0 20px #ee393d99;
      height: 12px;
      transition: transform 160ms ease;
      width: 12px;
      z-index: 3;
    }

    .dealer-map-marker__middle {
      animation: ${dealerMarkerPulseMiddle} 2s ease-out infinite;
      background: #ee393d66;
      height: 34px;
      width: 34px;
      z-index: 2;
    }

    .dealer-map-marker__outer {
      animation: ${dealerMarkerPulseOuter} 2s ease-out infinite;
      background: #ee393d38;
      height: 54px;
      width: 54px;
      z-index: 1;
    }

    /* &:focus-visible .dealer-map-marker__inner,
    &:hover .dealer-map-marker__inner,
    &.is-selected .dealer-map-marker__inner {
      transform: translate(-50%, -50%) scale(1.18);
    } */

    &:focus-visible .dealer-map-marker__middle,
    &:hover .dealer-map-marker__middle,
    &.is-selected .dealer-map-marker__middle {
      opacity: 0.42;
    }

    &:focus-visible .dealer-map-marker__outer,
    &:hover .dealer-map-marker__outer,
    &.is-selected .dealer-map-marker__outer {
      opacity: 0.28;
    }
  }
`;

export const DealerHeading = styled.h2`
  font-family: var(--font-family-base);
  font-size: 48px;
  font-weight: 600;
  letter-spacing: -2.5px;
  line-height: 1.05;
  margin: 0;
  text-transform: capitalize;
  color: #000000;

  width: 100%;

  @media (max-width: 980px) {
    font-size: 40px;
  }
`;

export const DealerDescription = styled.p`
  color: #c9c9c9;
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
  width: 100%;
`;

export const DealerContent = styled.div`
  background: #fffffff2;
  border-left: 1px solid #ffffff66;
  box-shadow: -40px 0 80px #ffffff1f;
  display: flex;
  isolation: isolate;
  min-height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: max(540px, calc((100vw - 1440px) / 2 + 540px));
  z-index: 3;

  &::before {
    background: linear-gradient(90deg, #ffffff00 0%, #ffffff45 28%, #ffffffb8 68%, #fffffff2 100%);
    bottom: 0;
    content: "";
    left: -180px;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 180px;
    z-index: 0;
  }

  @media (max-width: 980px) {
    position: relative;
    top: auto;
    width: 100%;

    &::before {
      display: none;
    }
  }
`;

export const DealerContentInner = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-left: 52px;
  margin-right: max(24px, calc((100vw - 1440px) / 2 + 24px));
  margin-top: 88px;
  max-width: 420px;
  position: relative;
  text-align: left;
  width: calc(100% - 76px);
  z-index: 1;

  @media (max-width: 980px) {
    margin: 0;
    max-width: none;
    padding: 28px 1rem 40px;
    width: 100%;
  }
`;

export const DealerInfoCard = styled.article`
  background: linear-gradient(180deg, #ffffff18 0%, #ffffff10 100%);
  border: 1px solid #ffffff30;
  box-shadow: 0 24px 60px #00000018;
  display: grid;
  gap: 14px;
  margin-top: 6px;
  padding: 22px 22px 20px;
  width: 100%;

  @media (max-width: 980px) {
    padding: 20px 18px 18px;
  }
`;

export const DealerInfoEyebrow = styled.p`
  color: var(--red);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0;
  text-transform: uppercase;
`;

export const DealerInfoTitle = styled.h3`
  color: #090909;
  font-family: var(--font-family-base);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.1;
  margin: 0;
  text-transform: uppercase;
`;

export const DealerInfoLocation = styled.p`
  color: #111111a6;
  font-size: 13px;
  letter-spacing: 1px;
  margin: -6px 0 0;
  text-transform: uppercase;
`;

export const DealerInfoSummary = styled.p`
  color: #111111b8;
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
`;

export const DealerInfoGrid = styled.div`
  display: grid;
  gap: 14px;
`;

export const DealerInfoItem = styled.div`
  border-top: 1px solid #11111114;
  display: grid;
  gap: 6px;
  padding-top: 14px;
`;

export const DealerInfoLabel = styled.p`
  color: #11111173;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
  margin: 0;
  text-transform: uppercase;
`;

export const DealerInfoValue = styled.p`
  color: #090909;
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
`;

export const DealerServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const DealerServiceTag = styled.span`
  background: #ffffff6b;
  border: 1px solid #11111114;
  color: #111111c7;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.4px;
  padding: 7px 10px;
  text-transform: uppercase;
`;

export const DealerPanelHint = styled.p`
  color: #11111173;
  font-size: 12px;
  line-height: 1.6;
  margin: 0;
`;
