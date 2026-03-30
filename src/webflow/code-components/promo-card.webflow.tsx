import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import { toSentenceCase } from "../../lib/to-sentence-case";
import { PromoCard } from "./promo-card";
import {
  PROMO_CARD_DEFAULTS,
  PROMO_CARD_GROUPS,
  PROMO_CARD_METADATA,
  PROMO_CARD_SURFACE_OPTIONS
} from "./promo-card.webflow.constants";

export default declareComponent(PromoCard, {
  name: toSentenceCase(PROMO_CARD_METADATA.name),
  description: toSentenceCase(PROMO_CARD_METADATA.description),
  props: {
    eyebrow: props.Text({
      name: toSentenceCase("eyebrow"),
      group: toSentenceCase(PROMO_CARD_GROUPS.content),
      defaultValue: PROMO_CARD_DEFAULTS.eyebrow
    }),
    heading: props.Text({
      name: toSentenceCase("heading"),
      group: toSentenceCase(PROMO_CARD_GROUPS.content),
      defaultValue: PROMO_CARD_DEFAULTS.heading
    }),
    description: props.TextNode({
      name: toSentenceCase("description"),
      group: toSentenceCase(PROMO_CARD_GROUPS.content),
      defaultValue: PROMO_CARD_DEFAULTS.description,
      multiline: true
    }),
    ctaLabel: props.Text({
      name: toSentenceCase("cta label"),
      group: toSentenceCase(PROMO_CARD_GROUPS.content),
      defaultValue: PROMO_CARD_DEFAULTS.ctaLabel
    }),
    link: props.Link({
      name: toSentenceCase("link"),
      group: toSentenceCase(PROMO_CARD_GROUPS.content)
    }),
    image: props.Image({
      name: toSentenceCase("image"),
      group: toSentenceCase(PROMO_CARD_GROUPS.media)
    }),
    surface: props.Variant({
      name: toSentenceCase("surface"),
      group: toSentenceCase(PROMO_CARD_GROUPS.style),
      options: [...PROMO_CARD_SURFACE_OPTIONS],
      defaultValue: PROMO_CARD_SURFACE_OPTIONS[0]
    }),
    showAccent: props.Boolean({
      name: toSentenceCase("accent border"),
      group: toSentenceCase(PROMO_CARD_GROUPS.style),
      defaultValue: true,
      trueLabel: toSentenceCase("on"),
      falseLabel: toSentenceCase("off")
    })
  },
  options: {
    ssr: true
  }
});
