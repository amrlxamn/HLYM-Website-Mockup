import type { CategoryTile, EditorialPoint, FeaturedCard } from "@/data/site-content.types";

export const FEATURED_CARDS: readonly FeaturedCard[] = [
  {
    alt: "nmax",
    description: "redefining urban commuting with premium comfort and connected technology.",
    image: "/assets/hlym/generated-1772089340820.png",
    name: "nmax",
    price: "from rm9,998",
    tag: "automatic"
  },
  {
    alt: "ego avantiz",
    description:
      "smart, stylish, and fuel-efficient. the perfect everyday companion for the modern rider.",
    image: "/assets/hlym/generated-1772089352798.png",
    name: "ego avantiz",
    price: "from rm5,560",
    tag: "automatic"
  }
] as const;

export const EDITORIAL_POINTS: readonly EditorialPoint[] = [
  {
    icon: "zap",
    text: "890cc crossplane 3-cylinder engine"
  },
  {
    icon: "gauge",
    text: "119 ps @ 10,000 rpm · 193 kg"
  },
  {
    icon: "shield",
    text: "6-axis imu · traction control · quickshifter"
  }
] as const;

export const CATEGORY_TILES: readonly CategoryTile[] = [
  {
    alt: "yzf-r25",
    href: "#models",
    image: "/assets/hlym/generated-1772089477186.png",
    name: "yzf-r25",
    price: "from rm21,998",
    tag: "street"
  },
  {
    alt: "tenéré 700",
    href: "#models",
    image: "/assets/hlym/generated-1772089478568.png",
    name: "tenéré 700",
    price: "from rm73,888",
    tag: "big bikes"
  },
  {
    alt: "tracer 9 gt",
    href: "#models",
    image: "/assets/hlym/generated-1772089479158.png",
    name: "tracer 9 gt",
    price: "from rm73,888",
    tag: "big bikes"
  }
] as const;
