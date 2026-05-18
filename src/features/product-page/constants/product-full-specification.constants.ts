import type { ProductFullSpecificationContent } from "../types/product-page.types";
import { NVX_360_FRAMES } from "./nvx-360-frames.constants";

const SPECIFICATION_DESCRIPTION =
  "The system brings key ride information into one clear digital experience, helping riders monitor alerts, fuel use, parking location, calls, messages, and service reminders. The result is a scooter interface that feels smarter, faster, and easier to manage in daily city riding.";

export const PRODUCT_FULL_SPECIFICATION_CONTENT: ProductFullSpecificationContent = {
  eyebrow: "Full specification",
  image: {
    alt: "Yamaha NVX SP 155 360 front angle",
    frames: NVX_360_FRAMES,
    src: NVX_360_FRAMES[0]
  },
  items: [
    {
      description: SPECIFICATION_DESCRIPTION,
      title: "Pilihan mod menunggang"
    },
    {
      description: SPECIFICATION_DESCRIPTION,
      title: "3 mod paparan"
    },
    {
      description: SPECIFICATION_DESCRIPTION,
      title: "Enjin YECVT 155cc Blue Core"
    },
    {
      description: SPECIFICATION_DESCRIPTION,
      title: "Sistem kawalan cengkaman"
    },
    {
      description: SPECIFICATION_DESCRIPTION,
      title: "Isyarat berhenti kecemasan"
    }
  ],
  titleLines: ["Smart performance.", "Built for the city."]
} as const;
