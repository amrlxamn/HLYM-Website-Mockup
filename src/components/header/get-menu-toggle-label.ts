import type { HeaderCopy } from "@/data/site-copy.types";

export function getMenuToggleLabel(headerCopy: HeaderCopy, isMenuOpen: boolean) {
  return isMenuOpen ? headerCopy.menuToggleOpenLabel : headerCopy.menuToggleClosedLabel;
}
