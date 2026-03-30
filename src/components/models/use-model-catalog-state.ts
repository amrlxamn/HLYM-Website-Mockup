import { useState } from "react";
import { DEFAULT_MODEL_CATEGORY } from "@/data/models.constants";
import type { ModelCategory } from "@/data/site-content.types";
import { getVisibleModels } from "./get-visible-models";

export function useModelCatalogState() {
  const [activeCategory, setActiveCategory] = useState<ModelCategory>(DEFAULT_MODEL_CATEGORY);
  const visibleModels = getVisibleModels(activeCategory);

  return {
    activeCategory,
    setActiveCategory,
    visibleModels
  };
}
