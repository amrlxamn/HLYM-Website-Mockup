import styled, { css } from "styled-components";

type ContactHeroCardRootProps = {
  $flipped: boolean;
};

type ContactHeroCardFaceProps = {
  $back?: boolean;
  $featured: boolean;
};

export const ContactHeroCardRoot = styled.article`
  cursor: pointer;
  height: 280px;
  perspective: 1200px;
`;

export const ContactHeroCardFrame = styled.div<ContactHeroCardRootProps>`
  height: 100%;
  position: relative;
  transform: ${({ $flipped }) => ($flipped ? "rotateY(180deg)" : "rotateY(0deg)")};
  transform-style: preserve-3d;
  transition: transform var(--duration-base) var(--easing-standard);
  width: 100%;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ContactHeroCardFace = styled.div<ContactHeroCardFaceProps>`
  --contact-card-accent: var(--red);
  --contact-card-bg: var(--color-bg-canvas);
  --contact-card-border: var(--color-border-subtle);
  --contact-card-border-width: 1px;
  --contact-card-number: var(--color-text-muted-light);
  --contact-card-text: var(--color-text-primary);

  background: var(--contact-card-bg);
  backface-visibility: hidden;
  border: var(--contact-card-border-width) solid var(--contact-card-border);
  color: var(--contact-card-text);
  display: flex;
  flex-direction: column;
  height: 100%;
  inset: 0;
  justify-content: space-between;
  overflow: hidden;
  padding: 32px;
  position: absolute;
  transform: ${({ $back }) => ($back ? "rotateY(180deg)" : "rotateY(0deg)")};
  transform-style: preserve-3d;
  width: 100%;

  ${({ $featured }) =>
    $featured &&
    css`
      --contact-card-accent: var(--color-text-inverse);
      --contact-card-bg: var(--color-text-primary);
      --contact-card-border: var(--red);
      --contact-card-border-width: 2px;
      --contact-card-number: var(--color-text-neutral-dark);
      --contact-card-text: var(--color-text-inverse);

      &::before {
        background: color-mix(in srgb, var(--red) 35%, transparent);
        border-radius: var(--radius-pill);
        content: "";
        filter: blur(45px);
        height: 220px;
        left: 40%;
        mix-blend-mode: screen;
        pointer-events: none;
        position: absolute;
        top: -52px;
        width: 423px;
      }
    `}

  > * {
    position: relative;
  }
`;

export const ContactHeroCardNumber = styled.p`
  color: var(--contact-card-number);
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
  color: var(--contact-card-accent);
  display: inline-flex;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;

  svg {
    background: var(--contact-card-accent);
    color: var(--contact-card-bg);
    height: 12px;
    padding: 2px;
    width: 12px;
  }
`;
