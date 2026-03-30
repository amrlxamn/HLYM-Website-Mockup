import { SITE_COPY } from "@/data/site-copy.constants";
import {
  AmbientCenter,
  FooterTopLine,
  MeshLeft,
  MeshRight,
  YamahaWatermark
} from "./footer-shell.styles";

export function FooterDecorations() {
  const { watermark } = SITE_COPY.footer;

  return (
    <>
      <MeshLeft />
      <MeshRight />
      <AmbientCenter />
      <FooterTopLine />
      <YamahaWatermark>{watermark}</YamahaWatermark>
    </>
  );
}
