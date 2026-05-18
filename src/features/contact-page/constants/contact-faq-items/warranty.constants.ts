import type { ContactFaqItem } from "../../types/contact-page.types";

export const CONTACT_FAQ_WARRANTY_ITEMS: readonly ContactFaqItem[] = [
  {
    answer:
      "Warranty period for your vehicle is as stipulated in your Warranty and Service Booklet. Important notice: Warranty will be applicable if regular preventive maintenance is performed as per required intervals by any Yamaha Motor Authorized Dealers.",
    question: "What is the warranty period for Yamaha vehicles?",
    topic: "Warranty"
  },
  {
    answer:
      "Important notice: Warranty will be applicable if regular preventive maintenance is performed as per required intervals by any Yamaha Motor Authorized Dealers.",
    question: "What are the items covered under warranty?",
    topic: "Warranty"
  },
  {
    answer:
      "Refer to Owner's Manual at your manual check. However, warranty is not applicable to consumption parts.",
    question: "What is the warranty period for the replacement Spare Parts on my vehicle?",
    topic: "Warranty"
  },
  {
    answer:
      "Yamaha Motor's warranty is only applicable when service maintenance and repair are carried out by Yamaha Motor Authorized Dealers as per the required intervals.",
    question: "Will my warranty be void if I service my vehicle at a non-authorized dealer?",
    topic: "Warranty"
  },
  {
    answer: "Warranty repairs can be performed at any Yamaha Motor Authorized Dealers.",
    question:
      "Do I have to send my vehicle for repairs under warranty at the dealership where it was originally purchased?",
    topic: "Warranty"
  },
  {
    answer:
      "Modification is not recommended as it may affect the performance of the vehicle and probably lead to safety issues. In addition, unauthorized modification on your vehicle may result in the warranty of your vehicle to be void.",
    question: "Can I modify my vehicle without affecting its warranty coverage?",
    topic: "Warranty"
  },
  {
    answer:
      "Warranty coverage is transferable between owners, subject to the following conditions: provided the vehicle is still within warranty period at the time of the sale and regular service intervals are performed at any Yamaha Motor Authorized Dealers.",
    question: "Is the warranty coverage transferable between owners?",
    topic: "Warranty"
  },
  {
    answer:
      "Hong Leong Yamaha Motor Sdn Bhd would not replace a new Warranty and Service Booklet Manual for customer. Every new unit of motorcycle comes with one booklet only. Customer need to keep all the receipt of bike servicing as proof for warranty claim purpose.",
    question: "I have lost my Warranty and Service Booklet Manual. Where can I get a new one?",
    topic: "Warranty"
  }
] as const;
