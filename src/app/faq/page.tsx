import type { Metadata } from "next";

import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { FaqHelpCard } from "@/components/faq/FaqHelpCard";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqTrustStrip } from "@/components/faq/FaqTrustStrip";
import { Footer } from "@/components/footer/footer";
import { Navigation } from "@/components/navigation/navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Honest answers to common DJ Julz booking questions, including availability, pricing, sound, lighting, travel and music requests.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

export default function FAQPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground">
        <FaqHero />
        <section className="px-5 pb-12 lg:px-8 lg:pb-16">
          <div className="mx-auto max-w-md rounded-[1.5rem] border border-border bg-white p-3 shadow-[0_18px_60px_rgb(24_24_27_/_0.055)] lg:grid lg:max-w-6xl lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-5 lg:rounded-[2rem] lg:p-5">
            <div className="p-1 lg:p-3">
              <FaqAccordion />
            </div>
            <div className="mt-4 lg:mt-0">
              <FaqHelpCard />
            </div>
          </div>
        </section>
        <FaqTrustStrip />
      </main>
      <Footer />
    </>
  );
}
