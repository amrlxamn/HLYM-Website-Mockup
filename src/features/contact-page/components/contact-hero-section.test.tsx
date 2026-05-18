import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ContactHeroSection } from "@/features/contact-page";
import { CONTACT_HERO_CONTENT } from "../constants/contact-hero.constants";

describe("ContactHeroSection", () => {
  it("renders the contact support hero and office action cards", () => {
    const view = render(<ContactHeroSection />);

    expect(view.getByRole("region", { name: CONTACT_HERO_CONTENT.ariaLabel })).toHaveAttribute(
      "data-cursor-tone",
      "light"
    );
    expect(view.getByRole("heading", { name: CONTACT_HERO_CONTENT.title })).toBeInTheDocument();
    expect(view.getByLabelText(CONTACT_HERO_CONTENT.searchAriaLabel)).toHaveAttribute(
      "placeholder",
      CONTACT_HERO_CONTENT.searchPlaceholder
    );
    expect(view.getByRole("img", { name: CONTACT_HERO_CONTENT.backgroundAlt })).toHaveAttribute(
      "src",
      CONTACT_HERO_CONTENT.backgroundImage
    );

    CONTACT_HERO_CONTENT.cards.forEach((card) => {
      expect(view.getByText(card.number)).toBeInTheDocument();
    });

    CONTACT_HERO_CONTENT.cards.forEach((card) => {
      const cardLinks = view
        .getAllByRole("link", { name: new RegExp(card.ctaLabel, "i") })
        .filter((link) => link.getAttribute("href") === card.ctaHref);

      expect(cardLinks.length).toBeGreaterThan(0);
    });
  });
});
