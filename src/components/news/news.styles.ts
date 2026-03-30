import styled from "styled-components";
import { Container } from "@/styles/layout";

export const NewsSectionRoot = styled.section`
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
`;

export const NewsViewLink = styled.a`
  align-items: center;
  color: var(--color-text-primary);
  display: inline-flex;
  font-size: 12px;
  font-weight: 700;
  gap: 10px;
  letter-spacing: 2px;
  padding-bottom: 8px;
  text-transform: uppercase;

  svg {
    height: 16px;
    width: 16px;
  }
`;

export const NewsGrid = styled(Container)`
  display: grid;
  gap: 16px;
  padding: 60px 0 80px;

  @media (max-width: 980px) {
    padding: 32px 0 48px;
  }
`;

export const NewsTopGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 760px 1fr;
  height: 560px;

  @media (max-width: 1360px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const NewsRightColumn = styled.div`
  display: grid;
  gap: 16px;
  grid-template-rows: repeat(2, 1fr);

  @media (max-width: 1360px) {
    grid-template-rows: none;
  }
`;

export const NewsBottomGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  height: 320px;

  @media (max-width: 1360px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const NewsCardRoot = styled.article<{ $size?: "default" | "small" }>`
  min-height: 320px;
  overflow: hidden;
  position: relative;

  @media (min-width: 1361px) {
    min-height: unset;
  }
`;

export const NewsOverlay = styled.div`
  background: linear-gradient(180deg, #0a0a0a00 0%, #0a0a0a60 45%, #0a0a0aee 100%);
  inset: 0;
  position: absolute;
`;

export const NewsCardCopy = styled.div<{ $size?: "default" | "small" }>`
  bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: ${({ $size }) => ($size === "small" ? "24px" : "28px")};
  position: absolute;
  width: ${({ $size }) => ($size === "small" ? "360px" : "420px")};
  z-index: 2;

  @media (max-width: 980px) {
    left: 20px;
    right: 20px;
    width: auto;
  }
`;

export const NewsCardNumber = styled.p`
  color: var(--red);
  font-family: var(--font-family-base);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0;
`;

export const NewsCardTitle = styled.h3<{ $size?: "default" | "small" }>`
  color: #fff;
  font-family: var(--font-family-base);
  font-size: ${({ $size }) => ($size === "small" ? "18px" : "20px")};
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
`;

export const NewsCardMeta = styled.p`
  color: var(--color-text-soft-dark);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 0;
  text-transform: uppercase;
`;

export const NewsFeaturedRoot = styled.article`
  min-height: 320px;
  overflow: hidden;
  position: relative;

  @media (min-width: 1361px) {
    min-height: unset;
  }
`;

export const NewsFeaturedCopy = styled.div`
  bottom: 34px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  left: 50px;
  position: absolute;
  width: 660px;
  z-index: 2;

  @media (max-width: 980px) {
    left: 20px;
    right: 20px;
    width: auto;
  }
`;

export const NewsFeaturedBadge = styled.span`
  background: var(--red);
  color: var(--color-text-inverse);
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  padding: 6px 14px;
  text-transform: uppercase;
  width: max-content;
`;

export const NewsFeaturedTitle = styled.h3`
  color: var(--color-text-inverse);
  font-family: var(--font-family-base);
  font-size: 36px;
  letter-spacing: -1px;
  line-height: 1.1;
  margin: 0;
  text-transform: uppercase;
  width: 580px;

  @media (max-width: 980px) {
    width: auto;
  }
`;

export const NewsFeaturedMeta = styled.p`
  align-items: center;
  color: var(--color-text-soft-dark);
  display: inline-flex;
  font-size: 11px;
  font-weight: 600;
  gap: 16px;
  letter-spacing: 2px;
  margin: 0;
  text-transform: uppercase;
`;

export const NewsFeaturedMetaDot = styled.span`
  background: #ffffff30;
  border-radius: 999px;
  height: 4px;
  width: 4px;
`;

export const NewsRedLine = styled.div`
  background: linear-gradient(90deg, #ec1c2400 0%, #ec1c24 30%, #ec1c24 70%, #ec1c2400 100%);
  height: 3px;
`;
