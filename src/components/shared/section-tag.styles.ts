import styled from "styled-components";

export const SectionTagRoot = styled.div<{
  $accent: boolean;
  $centered: boolean;
  $lineWidth: "default" | "medium" | "wide";
}>`
  align-items: center;
  display: inline-flex;
  gap: ${({ $accent }) => ($accent ? "16px" : "12px")};
  justify-content: ${({ $centered }) => ($centered ? "center" : "flex-start")};

  span {
    background: var(--red);
    height: 2px;
    width: ${({ $accent, $lineWidth }) => {
      if (!$accent) {
        return "24px";
      }

      if ($lineWidth === "medium") {
        return "32px";
      }

      if ($lineWidth === "wide") {
        return "52px";
      }

      return "40px";
    }};
  }

  p {
    color: ${({ $accent }) => ($accent ? "var(--red)" : "var(--color-text-subtle)")};
    font-size: ${({ $accent }) => ($accent ? "12px" : "10px")};
    font-weight: ${({ $accent }) => ($accent ? 700 : 600)};
    letter-spacing: ${({ $accent }) => ($accent ? "4px" : "3px")};
    margin: 0;
    text-transform: uppercase;
  }
`;
