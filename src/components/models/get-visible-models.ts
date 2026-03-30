import { DEFAULT_MODEL_CATEGORY, MODELS } from "@/data/models.constants";
import type { ModelCategory } from "@/data/site-content.types";

export function getVisibleModels(activeCategory: ModelCategory) {
  if (activeCategory === DEFAULT_MODEL_CATEGORY) {
    return MODELS;
  }

  return MODELS.filter((model) => model.category === activeCategory);
}
