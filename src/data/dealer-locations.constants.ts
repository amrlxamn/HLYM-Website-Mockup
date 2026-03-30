import type { DealerLocation } from "@/data/site-content.types";

export const DEALER_LOCATIONS: readonly DealerLocation[] = [
  {
    area: "kompleks hong leong yamaha",
    coordinates: [101.564444, 3.228056],
    focus: "hq enquiries, flagship support, and brand-direct rider assistance",
    hours: "mon - sat | 9:00 am - 6:00 pm",
    id: "hong-leong-yamaha-motor-sdn-bhd",
    label: "hong leong yamaha motor sdn. bhd.",
    locality: "sungai buloh, selangor",
    serviceTags: ["flagship support", "genuine parts", "brand showroom"],
    summary:
      "the main hong leong yamaha motor hub, suited for riders who want direct brand access, " +
      "product guidance, and core support from the sungai buloh complex."
  },
  {
    area: "usj gateway / subang jaya",
    coordinates: [101.5852, 3.0464],
    focus: "scooter ownership, accessory fitting, and weekday after-work service planning",
    hours: "mon - sat | 10:00 am - 7:00 pm",
    id: "subang-gateway-studio",
    label: "subang gateway studio",
    locality: "subang jaya, selangor",
    serviceTags: ["urban scooter care", "helmet fitting", "owner consultation"],
    summary:
      "best suited for urban riders who need practical model guidance and a service desk " +
      "that moves quickly through routine appointments."
  },
  {
    area: "setapak central",
    coordinates: [101.7008, 3.1966],
    focus: "big-bike enquiries, scheduled diagnostics, and touring readiness checks",
    hours: "tue - sun | 9:30 am - 6:30 pm",
    id: "setapak-performance-point",
    label: "setapak performance point",
    locality: "kuala lumpur",
    serviceTags: ["big-bike support", "diagnostics", "touring setup"],
    summary:
      "a performance-led stop for riders comparing larger capacity models or booking " +
      "deeper technical checks before longer weekend routes."
  },
  {
    area: "cheras link / balakong",
    coordinates: [101.7698, 3.0544],
    focus: "family mobility, commuter maintenance, and scheduled wear-part replacement",
    hours: "mon - sat | 9:00 am - 6:00 pm",
    id: "cheras-service-collective",
    label: "cheras service collective",
    locality: "cheras, selangor",
    serviceTags: ["commuter servicing", "wear-part replacement", "delivery handover"],
    summary:
      "built for repeat maintenance visits, this location prioritizes dependable service flow " +
      "for scooters, mopeds, and everyday rider support."
  }
] as const;

export const DEFAULT_DEALER_LOCATION = DEALER_LOCATIONS[0]!;
export const DEFAULT_DEALER_LOCATION_ID = DEFAULT_DEALER_LOCATION.id;
