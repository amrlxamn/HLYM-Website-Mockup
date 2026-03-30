import styled from "styled-components";

export const ModelsDesktopRunway = styled.div`
  position: relative;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const ModelsDesktopStickyView = styled.div`
  align-items: center;
  display: flex;
  min-height: calc(100vh - var(--header-height-total));
  position: sticky;
  top: var(--header-height-total);
`;

export const ModelsCardArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  width: 100%;
`;

export const ModelsProgressIndicator = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 10px;
  padding-left: 48px;
`;

export const ModelsProgressDot = styled.span<{ $isActive: boolean }>`
  background: ${({ $isActive }) => ($isActive ? "var(--red)" : "#00000020")};
  border-radius: 999px;
  height: 6px;
  transition:
    background var(--duration-base) var(--easing-standard),
    transform var(--duration-base) var(--easing-standard);
  transform: ${({ $isActive }) => ($isActive ? "scale(1.2)" : "scale(1)")};
  width: 6px;
`;
