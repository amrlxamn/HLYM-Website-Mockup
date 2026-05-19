import type { ContactFaqItem } from "../../types/contact-page.types";

export const CONTACT_FAQ_GENERAL_ITEMS: readonly ContactFaqItem[] = [
  {
    answer:
      "Hong Leong Yamaha Motor Sdn Bhd does not provide such services. Only Hong Leong Yamaha Motor Authorised Dealer could offer an assistance for replacement vehicle based on the availability of vehicles in the dealership.",
    isOpen: true,
    question: "Can I get a replacement vehicle while my vehicle is under repair?",
    topic: "General"
  },
  {
    answer: "Both RON95 and RON97 are compatible for all Yamaha models.",
    question: "Which fuel is recommended by Yamaha, RON95 or RON97?",
    topic: "General"
  },
  {
    answer: "You may select any fuel brands of your choice.",
    question:
      "Can I fill up petrol from different brand of petrol or I have to stick to the same brand of petrol?",
    topic: "General"
  },
  {
    answer:
      "Hong Leong Yamaha Motor Sdn Bhd is a manufacturer and unable to provide such assistance. Used Car Dealers, Insurance Panel and Banks will be able to assist you to evaluate the second hand market value of your vehicle.",
    question:
      "I would like to know the second hand market value for my vehicle. Can Hong Leong Yamaha Motor Sdn Bhd provide such information?",
    topic: "General"
  }
] as const;
