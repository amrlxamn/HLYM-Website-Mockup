import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PromoCard } from "./promo-card";

describe("PromoCard", () => {
  it("renders the core callout content", () => {
    const view = render(
      <PromoCard
        ctaLabel="explore model"
        description="built for torque, control, and everyday drama on malaysia's roads."
        eyebrow="featured model"
        heading="ride the new mt spirit"
        link={{ href: "/models" }}
        showAccent
        surface="dark"
      />
    );

    expect(view.getByRole("heading", { name: "ride the new mt spirit" })).toBeInTheDocument();
    expect(view.getByRole("link", { name: "explore model" })).toHaveAttribute("href", "/models");
  });
});
