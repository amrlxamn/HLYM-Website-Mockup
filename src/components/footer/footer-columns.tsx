import { FooterColumn } from "@/components/footer/footer-column";
import { FOOTER_COLUMNS } from "@/data/footer.constants";
import { FooterLinksGrid } from "./footer-links.styles";

export function FooterColumns() {
  return (
    <FooterLinksGrid>
      {FOOTER_COLUMNS.map((column) => (
        <FooterColumn column={column} key={column.title} />
      ))}
    </FooterLinksGrid>
  );
}
