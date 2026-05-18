import styled from "styled-components";

export const ProductFullSpecificationImagePanel = styled.div`
  align-items: center;
  display: flex;
  height: min(520px, calc(100vh - var(--header-height-total) - 180px));
  justify-content: center;
  min-height: 400px;
  overflow: hidden;
  width: min(100%, 640px);

  canvas,
  img {
    display: block;
    filter: drop-shadow(var(--shadow-card));
    height: auto;
    max-width: none;
    object-fit: contain;
    object-position: center;
    transform: scale(1.18);
    width: min(760px, 120%);
  }

  @media (max-width: 760px) {
    height: 320px;
  }
`;
