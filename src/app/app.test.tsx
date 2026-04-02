import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "@/app/app";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";

describe("App", () => {
  it("renders the core landing-page sections", () => {
    const view = render(<App />);
    const { footer, header, hero, news } = SITE_COPY;

    expect(view.getByAltText(toSentenceCase(header.logoAlt))).toBeInTheDocument();
    expect(view.getByRole("region", { name: toSentenceCase(hero.ariaLabel) })).toBeInTheDocument();
    expect(view.getByRole("region", { name: toSentenceCase(news.ariaLabel) })).toBeInTheDocument();
    expect(view.getByText(toSentenceCase(footer.copyright))).toBeInTheDocument();
    expect(view.queryByLabelText("custom cursor")).not.toBeInTheDocument();
  });
});
