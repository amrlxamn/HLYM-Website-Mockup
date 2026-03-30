import styled from "styled-components";

export const PageShell = styled.div`
  background: var(--bg);
  width: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: var(--container);
  width: calc(100% - 2rem);

  @media (max-width: 980px) {
    width: calc(100% - 2rem);
  }
`;
