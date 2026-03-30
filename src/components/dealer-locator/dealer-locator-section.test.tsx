import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("./dealer-map-stage", () => ({
  DealerMapStageView: ({
    onSelectDealer
  }: {
    onSelectDealer: (dealerId: string) => void;
  }) => (
    <div>
      <button onClick={() => onSelectDealer("subang-gateway-studio")} type="button">
        switch dealer
      </button>
    </div>
  )
}));

import { DealerLocatorSection } from "./dealer-locator-section";

describe("DealerLocatorSection", () => {
  it("renders the default dealer details", () => {
    const view = render(<DealerLocatorSection />);

    expect(
      view.getByRole("heading", { name: "search your nearest yamaha dealer" })
    ).toBeInTheDocument();
    expect(view.getByText("hong leong yamaha motor sdn. bhd.")).toBeInTheDocument();
    expect(view.getByText("selected dealer")).toBeInTheDocument();
    expect(view.getByText("available support")).toBeInTheDocument();
  });

  it("updates the dealer panel when another marker is selected", () => {
    const view = render(<DealerLocatorSection />);

    fireEvent.click(view.getAllByRole("button", { name: "switch dealer" })[0]!);

    expect(view.getByText("subang gateway studio")).toBeInTheDocument();
    expect(view.getByText(/urban scooter care/i)).toBeInTheDocument();
  });
});
