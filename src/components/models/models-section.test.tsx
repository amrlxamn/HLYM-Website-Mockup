import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ModelsSection } from "@/components/models/models-section";
import { MODELS, MODEL_TABS } from "@/data/models.constants";

describe("ModelsSection", () => {
  it("filters visible models by the selected category", async () => {
    const user = userEvent.setup();
    const view = render(<ModelsSection />);

    await user.click(view.getAllByRole("button", { name: MODEL_TABS[4]! })[0]!);

    expect(view.getAllByRole("heading", { name: MODELS[2]!.name }).length).toBeGreaterThan(0);
    expect(view.getAllByRole("heading", { name: MODELS[4]!.name }).length).toBeGreaterThan(0);
    expect(view.queryAllByRole("heading", { name: MODELS[0]!.name })).toHaveLength(0);
  });

  it("keeps the desktop sticky viewport offset below the site header", () => {
    render(<ModelsSection />);

    expect(document.head.textContent).toContain("top:var(--header-height-total)");
    expect(document.head.textContent).toContain("padding:var(--models-desktop-inset) 0");
  });
});
