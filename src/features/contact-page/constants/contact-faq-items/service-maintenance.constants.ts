import type { ContactFaqItem } from "../../types/contact-page.types";

export const CONTACT_FAQ_SERVICE_MAINTENANCE_ITEMS: readonly ContactFaqItem[] = [
  {
    answer:
      "Service intervals will be as per the Preventive Maintenance Service Schedule (PMSS) which is stipulated in your Owner's Manual. Please refer to your preferred dealer for further information.",
    question: "What is the service interval for Yamaha Motor?",
    topic: "Service Maintenance"
  },
  {
    answer: "You may service/ repair you vehicle at any Yamaha Motor Authorized Dealers.",
    question: "Can I send my vehicle for service/ repair at different dealers?",
    topic: "Service Maintenance"
  },
  {
    answer:
      "The Free Service Promotion is only applicable to vehicle that adhere to the Preventive Maintenance Service Schedule (PMSS).",
    question: "Can I claim my Free Service if I fail to service my vehicle on time?",
    topic: "Service Maintenance"
  },
  {
    answer: "It is advisable to use Yamaha's quality formulated engine oil (YAMALUBE).",
    question: "Do I have any options of choosing the engine oil for service?",
    topic: "Service Maintenance"
  },
  {
    answer:
      "There will be no adverse effect to your vehicle's engine, however we would recommend you to use the recommended grade specified in your Owner's Manual for your manual check.",
    question:
      "Will it affect my vehicle's engine if I switch from Fully Synthetic Oil to Mineral Oil or vice versa?",
    topic: "Service Maintenance"
  },
  {
    answer: "Please refer to our authorised dealers for the prices of engine oils.",
    question: "Where can I obtain the price of engine oils?",
    topic: "Service Maintenance"
  },
  {
    answer:
      "Our authorised dealers will be able to explain to you in detail of the requirements for each service interval.",
    question:
      "I would like to know what parts will be replaced at each service interval and what is the price for each item?",
    topic: "Service Maintenance"
  }
] as const;
