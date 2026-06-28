import type { Metadata } from "next";

import { Footer } from "@/components/footer/footer";
import { Navigation } from "@/components/navigation/navigation";
import { PlanHero } from "@/components/planner/PlanHero";
import { PlannerWizard } from "@/components/planner/PlannerWizard";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Plan Your Event",
  description:
    "Start planning a wedding, corporate event or private celebration with DJ Julz.",
  alternates: {
    canonical: `${siteConfig.url}/plan`,
  },
};

export default function PlanPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground">
        <PlanHero />
        <PlannerWizard />
      </main>
      <Footer />
    </>
  );
}
