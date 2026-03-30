import { SectionTagRoot } from "./section-tag.styles";

type SectionTagProps = {
  accent?: boolean;
  centered?: boolean;
  label: string;
  lineWidth?: "default" | "medium" | "wide";
};

export function SectionTag({
  accent = false,
  centered = false,
  label,
  lineWidth = "default"
}: SectionTagProps) {
  return (
    <SectionTagRoot $accent={accent} $centered={centered} $lineWidth={lineWidth}>
      <span />
      <p>{label}</p>
      <span />
    </SectionTagRoot>
  );
}
