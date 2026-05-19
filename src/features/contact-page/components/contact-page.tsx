import { FooterSection } from "@/components/footer";
import { SiteHeader } from "@/components/header/site-header";
import { PageShell } from "@/styles/layout";
import { ContactFaqSection } from "./contact-faq-section";
import { ContactHeroSection } from "./contact-hero-section";

export function ContactPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <ContactHeroSection />
        <ContactFaqSection />
      </main>
      <FooterSection />
    </PageShell>
  );
}
