import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "@/app/app";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";

describe("App", () => {
  it("renders the core landing-page sections", () => {
    const view = render(<App />);
    const { footer, header, hero, news } = SITE_COPY;
    const spotlightImage = view.getByAltText("Yamaha tracer 9 gt sport touring spotlight");
    const newsSection = view.getByRole("region", { name: toSentenceCase(news.ariaLabel) });
    const spotlight = spotlightImage.closest("article");

    if (!spotlight) {
      throw new Error("Expected spotlight article to exist");
    }

    expect(view.getByAltText(toSentenceCase(header.logoAlt))).toBeInTheDocument();
    expect(view.getByRole("region", { name: toSentenceCase(hero.ariaLabel) })).toBeInTheDocument();
    expect(newsSection).toBeInTheDocument();
    expect(spotlight).toBeInTheDocument();
    expect(spotlight.compareDocumentPosition(newsSection) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    );
    expect(view.getByText("119ps peak power")).toBeInTheDocument();
    expect(view.getByText("intelligent ride")).toBeInTheDocument();
    expect(view.getByText("connected cockpit")).toBeInTheDocument();
    expect(view.queryByText("intelligent suspension")).not.toBeInTheDocument();
    expect(view.getByText(toSentenceCase(footer.copyright))).toBeInTheDocument();
    expect(view.queryByLabelText("custom cursor")).not.toBeInTheDocument();
  });
});
