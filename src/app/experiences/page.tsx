import type { Metadata } from "next";

import { ExperienceHero } from "@/components/experiences/ExperienceHero";
import { ExperiencesPageClient } from "@/components/experiences/ExperiencesPageClient";
import { Footer } from "@/components/footer/footer";
import { Navigation } from "@/components/navigation/navigation";
import { siteConfig } from "@/config/site";
import { experienceHero } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Explore DJ Julz wedding, corporate and private event DJ experiences in Pretoria and Gauteng.",
  alternates: {
    canonical: `${siteConfig.url}/experiences`,
  },
};

export default function ExperiencesPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background text-foreground">
        <ExperienceHero {...experienceHero} />
        <ExperiencesPageClient />
      </main>
      <Footer />
    </>
  );
}
