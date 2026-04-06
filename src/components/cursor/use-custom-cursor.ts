import { useEffect, useState } from "react";

type CustomCursorState = {
  isActive: boolean;
  isEnabled: boolean;
  isVisible: boolean;
  x: number;
  y: number;
};

export function useCustomCursor() {
  const [state, setState] = useState<CustomCursorState>({
    isActive: false,
    isEnabled: false,
    isVisible: false,
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const syncCursorMode = () => {
      setState((current) => ({
        ...current,
        isEnabled: mediaQuery.matches,
        isVisible: mediaQuery.matches ? current.isVisible : false
      }));
    };

    const handleMouseDown = () => {
      setState((current) => ({ ...current, isActive: true }));
    };

    const handleMouseLeave = () => {
      setState((current) => ({ ...current, isActive: false, isVisible: false }));
    };

    const handleMouseMove = (event: MouseEvent) => {
      setState((current) => ({
        ...current,
        isVisible: true,
        x: event.clientX,
        y: event.clientY
      }));
    };

    const handleMouseUp = () => {
      setState((current) => ({ ...current, isActive: false }));
    };

    syncCursorMode();
    mediaQuery.addEventListener("change", syncCursorMode);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      mediaQuery.removeEventListener("change", syncCursorMode);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return state;
}
