import { ArrowRight } from "lucide-react";
import { SITE_COPY } from "@/data/site-copy.constants";
import type { ModelCard as ModelCardType } from "@/data/site-content.types";
import {
  ModelCardRoot,
  ModelCategory,
  ModelCategoryAccent,
  ModelCopy,
  ModelDivider,
  ModelImage,
  ModelImageFade,
  ModelLeftAccent,
  ModelName,
  ModelNumber,
  ModelPriceLink,
  ModelPriceRow,
  ModelSpecGroup,
  ModelSpecs
} from "./model-card.styles";

type ModelCardProps = {
  eager?: boolean;
  index: number;
  model: ModelCardType;
};

export function ModelCard({ eager = false, index, model }: ModelCardProps) {
  const modelsCopy = SITE_COPY.models;

  return (
    <ModelCardRoot>
      <ModelCopy $compact={Boolean(model.compact)}>
        <ModelNumber>{String(index + 1).padStart(2, "0")}</ModelNumber>

        <ModelCategory>
          <ModelCategoryAccent />
          <p>{model.category}</p>
        </ModelCategory>

        <ModelName>{model.name}</ModelName>

        <ModelSpecs>
          <ModelSpecGroup $compact={Boolean(model.compact)}>
            <strong>{model.engine}</strong>
            <span>{modelsCopy.specLabels.engine}</span>
          </ModelSpecGroup>
          <ModelDivider />
          <ModelSpecGroup $compact={Boolean(model.compact)}>
            <strong>{model.power}</strong>
            <span>{modelsCopy.specLabels.power}</span>
          </ModelSpecGroup>
          <ModelDivider />
          <ModelSpecGroup $compact={Boolean(model.compact)}>
            <strong>{model.weight}</strong>
            <span>{modelsCopy.specLabels.weight}</span>
          </ModelSpecGroup>
        </ModelSpecs>

        <ModelPriceRow>
          <strong>{model.price}</strong>
          <ModelPriceLink href={model.detailHref}>
            {modelsCopy.detailsLabel}
            <ArrowRight />
          </ModelPriceLink>
        </ModelPriceRow>
      </ModelCopy>

      <ModelImage>
        <img loading={eager ? "eager" : "lazy"} src={model.image} alt={model.alt} />
        <ModelImageFade />
      </ModelImage>

      <ModelLeftAccent />
    </ModelCardRoot>
  );
}
