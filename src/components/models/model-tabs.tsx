import { MODEL_TABS } from "@/data/models.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import type { ModelCategory } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { ModelTabButton, ModelTabDivider, ModelTabRow, ModelTabsRoot } from "./model-tabs.styles";

type ModelTabsProps = {
  activeCategory: ModelCategory;
  orientation: "horizontal" | "vertical";
  onSelect: (category: ModelCategory) => void;
  scrollCategory?: Exclude<ModelCategory, "all models"> | null;
};

export function ModelTabs({
  activeCategory,
  onSelect,
  orientation,
  scrollCategory
}: ModelTabsProps) {
  const modelsCopy = SITE_COPY.models;

  return (
    <ModelTabsRoot
      $orientation={orientation}
      aria-label={toSentenceCase(modelsCopy.tabListAriaLabel)}
    >
      {MODEL_TABS.map((tab, index) => {
        const isScrollHighlighted =
          activeCategory === "all models" && scrollCategory != null
            ? scrollCategory === tab
            : activeCategory === tab;

        return (
          <ModelTabRow key={tab}>
            <ModelTabButton
              aria-pressed={activeCategory === tab}
              $active={isScrollHighlighted}
              $orientation={orientation}
              onClick={() => onSelect(tab)}
              type="button"
            >
              {tab}
            </ModelTabButton>
            {index < MODEL_TABS.length - 1 && (
              <ModelTabDivider $orientation={orientation} aria-hidden="true" />
            )}
          </ModelTabRow>
        );
      })}
    </ModelTabsRoot>
  );
}
