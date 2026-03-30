import { Facebook, Instagram, Youtube } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/navigation.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { SocialLinksRoot } from "./social-links.styles";

type SocialLinksProps = {
  variant: "compact" | "round";
};

export function SocialLinks({ variant }: SocialLinksProps) {
  return (
    <SocialLinksRoot $variant={variant}>
      {SOCIAL_LINKS.map((link) => (
        <a href={link.href} key={link.label} aria-label={toSentenceCase(link.label)}>
          {link.platform === "facebook" && <Facebook />}
          {link.platform === "instagram" && <Instagram />}
          {link.platform === "youtube" && <Youtube />}
        </a>
      ))}
    </SocialLinksRoot>
  );
}
