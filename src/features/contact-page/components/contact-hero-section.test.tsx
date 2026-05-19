import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactHeroSection } from "@/features/contact-page";
import { CONTACT_HERO_CONTENT } from "../constants/contact-hero.constants";

describe("ContactHeroSection", () => {
  it("renders the contact support hero and office action cards", async () => {
    const user = userEvent.setup();
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
      expect(view.getAllByText(card.number).length).toBeGreaterThan(0);
    });
    expect(CONTACT_HERO_CONTENT.cards).toHaveLength(6);
    expect(view.getAllByText("Got any").length).toBeGreaterThan(0);
    expect(view.getAllByText("enquiry?").length).toBeGreaterThan(0);

    CONTACT_HERO_CONTENT.cards.forEach((card) => {
      const cardLinks = view
        .getAllByRole("link", { name: new RegExp(card.ctaLabel, "i") })
        .filter((link) => link.getAttribute("href") === card.ctaHref);

      expect(cardLinks.length).toBeGreaterThan(0);
    });

    const selangorCard = view.getByRole("button", { name: "Selangor Office" });
    expect(selangorCard).toHaveAttribute("aria-pressed", "false");

    await user.click(selangorCard);
    expect(selangorCard).toHaveAttribute("aria-pressed", "true");
  });
});
