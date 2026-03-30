import styled from "styled-components";

export const SocialLinksRoot = styled.div<{ $variant: "compact" | "round" }>`
  align-items: center;
  display: flex;
  gap: ${({ $variant }) => ($variant === "compact" ? "12px" : "20px")};

  a {
    background: ${({ $variant }) => ($variant === "round" ? "#ffffff06" : "transparent")};
    border: ${({ $variant }) =>
      $variant === "round" ? "1px solid #ffffff15" : "1px solid transparent"};
    display: grid;
    height: ${({ $variant }) => ($variant === "round" ? "40px" : "auto")};
    place-items: center;
    width: ${({ $variant }) => ($variant === "round" ? "40px" : "auto")};
  }

  svg {
    color: #ffffff40;
    height: ${({ $variant }) => ($variant === "compact" ? "14px" : "18px")};
    width: ${({ $variant }) => ($variant === "compact" ? "14px" : "18px")};
  }
`;
