import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { CONTACT_FAQ_CONTENT, ContactFaqSection } from "@/features/contact-page";

describe("ContactFaqSection", () => {
  it("renders FAQ filters and questions without the newsletter banner", async () => {
    const user = userEvent.setup();
    const view = render(<ContactFaqSection />);
    const firstQuestion = view.getByRole("button", {
      name: CONTACT_FAQ_CONTENT.items[0]?.question ?? ""
    });

    expect(firstQuestion).toHaveAttribute("aria-expanded", "true");

    expect(view.getByRole("region", { name: CONTACT_FAQ_CONTENT.ariaLabel })).toHaveAttribute(
      "id",
      "faq"
    );
    expect(view.getByRole("heading", { name: CONTACT_FAQ_CONTENT.title })).toBeInTheDocument();
    expect(view.getByText(CONTACT_FAQ_CONTENT.filterLabel)).toBeInTheDocument();
    expect(view.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "true");
    expect(CONTACT_FAQ_CONTENT.items).toHaveLength(32);
    expect(view.getByText(/does not provide such services/i)).toBeInTheDocument();
    expect(view.queryByText("Got Feedback For Us?")).not.toBeInTheDocument();

    await user.click(
      view.getByRole("button", {
        name: CONTACT_FAQ_CONTENT.items[1]?.question ?? ""
      })
    );
    expect(
      view.getByRole("button", {
        name: CONTACT_FAQ_CONTENT.items[1]?.question ?? ""
      })
    ).toHaveAttribute("aria-expanded", "true");

    await user.click(view.getByRole("button", { name: "Warranty" }));
    expect(view.getByRole("button", { name: "Warranty" })).toHaveAttribute("aria-pressed", "true");
    expect(view.getByText("What is the warranty period for Yamaha vehicles?")).toBeInTheDocument();
    expect(
      view.queryByText("Which fuel is recommended by Yamaha, RON95 or RON97?")
    ).not.toBeInTheDocument();
    expect(view.queryByRole("button", { name: "Accessories" })).not.toBeInTheDocument();
  });
});
