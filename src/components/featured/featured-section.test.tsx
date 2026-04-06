import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FeaturedSection } from "@/components/featured/featured-section";

describe("FeaturedSection", () => {
  it("renders the featured section without the standalone spotlight", () => {
    const view = render(<FeaturedSection />);

    expect(view.queryByRole("article", { name: "Tracer 9 Gt" })).not.toBeInTheDocument();
  });
});
