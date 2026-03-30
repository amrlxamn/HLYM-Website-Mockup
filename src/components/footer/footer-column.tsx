import type { FooterColumn as FooterColumnType } from "@/data/site-content.types";
import {
  FooterColumnLink,
  FooterColumnRedLine,
  FooterColumnRoot,
  FooterColumnTitle
} from "./footer-links.styles";

type FooterColumnProps = {
  column: FooterColumnType;
};

export function FooterColumn({ column }: FooterColumnProps) {
  return (
    <FooterColumnRoot>
      <FooterColumnTitle>{column.title}</FooterColumnTitle>
      <FooterColumnRedLine />
      {column.links.map((link) => (
        <FooterColumnLink href={link.href} key={link.label}>
          {link.label}
        </FooterColumnLink>
      ))}
    </FooterColumnRoot>
  );
}
