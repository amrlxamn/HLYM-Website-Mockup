import type { ContactFaqItem } from "../../types/contact-page.types";

export const CONTACT_FAQ_SALES_ITEMS: readonly ContactFaqItem[] = [
  {
    answer:
      "The availability of models for viewing and test drive may vary from one dealer to another. Please contact the nearest Yamaha Authorised Dealer to enquire on the availability of your preferred model.",
    question:
      "Do you have all models shown on your website available at any of the showrooms for viewing?",
    topic: "Sales"
  },
  {
    answer:
      "Hong Leong Yamaha Motor Sdn Bhd does not offer any Trade-in services. However, for your convenience, our Hong Leong Yamaha Motor Authorised Dealers may be able to assist you on this matter.",
    question: "Does Hong Leong Yamaha Motor Sdn Bhd provide trade-in service?",
    topic: "Sales"
  },
  {
    answer:
      "The lead time for delivery vary from one model to another. Your Sales Advisor will be able to advise whether or not there are any stock vehicles available for your preferred model and confirm the estimated delivery date.",
    question: "How long is the waiting period after the order has been placed?",
    topic: "Sales"
  }
] as const;
