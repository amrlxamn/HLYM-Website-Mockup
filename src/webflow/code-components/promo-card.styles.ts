import styled from "styled-components";

export const PromoCardRoot = styled.article<{
  $showAccent: boolean;
  $surface: "dark" | "light";
}>`
  background: ${({ $surface }) => ($surface === "dark" ? "#0f1013" : "#f7f7f4")};
  border: 1px solid ${({ $showAccent }) => ($showAccent ? "#ec1c24" : "#d8d8d8")};
  border-radius: 28px;
  box-shadow: 0 24px 60px #00000014;
  color: ${({ $surface }) => ($surface === "dark" ? "#ffffff" : "#111111")};
  display: grid;
  gap: 1.5rem;
  overflow: hidden;
`;

export const PromoCardImage = styled.img`
  aspect-ratio: 16 / 9;
  display: block;
  object-fit: cover;
  width: 100%;
`;

export const PromoCardBody = styled.div`
  display: grid;
  gap: 0.875rem;
  padding: 1.5rem;
`;

export const PromoCardEyebrow = styled.p`
  color: #ec1c24;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  margin: 0;
  text-transform: uppercase;
`;

export const PromoCardHeading = styled.h3`
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.04em;
  line-height: 0.95;
  margin: 0;
  text-transform: uppercase;
`;

export const PromoCardDescription = styled.p`
  color: inherit;
  font-size: 0.975rem;
  line-height: 1.7;
  margin: 0;
  opacity: 0.8;
`;

export const PromoCardCta = styled.a`
  align-items: center;
  color: inherit;
  display: inline-flex;
  font-size: 0.75rem;
  font-weight: 700;
  gap: 0.5rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  width: fit-content;
`;
