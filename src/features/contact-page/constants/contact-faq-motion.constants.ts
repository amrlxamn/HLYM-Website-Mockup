import type { Transition, Variants } from "framer-motion";

export const CONTACT_FAQ_PANEL_VARIANTS = {
  collapsed: {
    height: 0,
    opacity: 0
  },
  expanded: {
    height: "auto",
    opacity: 1
  }
} satisfies Variants;

export const CONTACT_FAQ_PANEL_TRANSITION = {
  duration: 0.32,
  ease: [0.22, 1, 0.36, 1]
} satisfies Transition;

export const CONTACT_FAQ_REDUCED_TRANSITION = {
  duration: 0
} satisfies Transition;
