import type { Metadata } from "next";

import { RoutePageShell } from "@/components/shared/route-page-shell";
import { siteConfig } from "@/config/site";

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
    <RoutePageShell
      eyebrow="Experiences"
      title="Event experiences"
      description="A dedicated experiences page is ready for package wireframes and service details."
    />
  );
}
