import type { Metadata } from "next";

import { AboutCTA } from "@/components/about/AboutCTA";
import { AboutHero } from "@/components/about/AboutHero";
import { ApproachSection } from "@/components/about/ApproachSection";
import { BehindDecks } from "@/components/about/BehindDecks";
import { DetailsSection } from "@/components/about/DetailsSection";
import { EventTimeline } from "@/components/about/EventTimeline";
import { FunFacts } from "@/components/about/FunFacts";
import { GearSection } from "@/components/about/GearSection";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { ProcessSteps } from "@/components/about/ProcessSteps";
import { Footer } from "@/components/footer/footer";
import { Navigation } from "@/components/navigation/navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About DJ Julz",
  description:
    "Learn more about DJ Julz, a Pretoria-based wedding and event DJ serving Gauteng.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background text-foreground">
        <AboutHero />
        <PhilosophySection />
        <JourneyTimeline />
        <ProcessSteps />
        <DetailsSection />
        <ApproachSection />
        <BehindDecks />
        <GearSection />
        <FunFacts />
        <EventTimeline />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
