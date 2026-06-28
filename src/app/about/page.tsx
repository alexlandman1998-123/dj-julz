import type { Metadata } from "next";

import { RoutePageShell } from "@/components/shared/route-page-shell";
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
    <RoutePageShell
      eyebrow="About"
      title="About DJ Julz"
      description="A dedicated about page is ready for the full wireframe and story content."
    />
  );
}
