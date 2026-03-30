import { useState } from "react";

export function useMainNavigationState() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return {
    isMenuOpen,
    setIsMenuOpen
  };
}
