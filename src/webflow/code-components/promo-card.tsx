import {
  PromoCardBody,
  PromoCardCta,
  PromoCardDescription,
  PromoCardEyebrow,
  PromoCardHeading,
  PromoCardImage,
  PromoCardRoot
} from "./promo-card.styles";
import type { PromoCardProps } from "./promo-card.types";

export function PromoCard({
  ctaLabel,
  description,
  eyebrow,
  heading,
  image,
  link,
  showAccent,
  surface
}: PromoCardProps) {
  return (
    <PromoCardRoot $showAccent={showAccent} $surface={surface}>
      {image?.src ? (
        <PromoCardImage alt={image.alt ?? heading} loading="lazy" src={image.src} />
      ) : null}
      <PromoCardBody>
        <PromoCardEyebrow>{eyebrow}</PromoCardEyebrow>
        <PromoCardHeading>{heading}</PromoCardHeading>
        <PromoCardDescription>{description}</PromoCardDescription>
        <PromoCardCta
          href={link?.href ?? "#"}
          rel={link?.target === "_blank" ? "noreferrer" : undefined}
          target={link?.target}
        >
          {ctaLabel}
        </PromoCardCta>
      </PromoCardBody>
    </PromoCardRoot>
  );
}
