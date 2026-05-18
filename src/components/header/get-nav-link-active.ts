import type { NavItem } from "@/data/site-content.types";

export function getNavLinkActive(item: NavItem, pathname: string): boolean {
  if (item.href === "/") {
    return pathname === "/";
  }

  if (item.href.startsWith("/#")) {
    return Boolean(item.isActive && pathname === "/");
  }

  return pathname.startsWith(item.href);
}
