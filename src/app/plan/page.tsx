import type { Metadata } from "next";

import { RoutePageShell } from "@/components/shared/route-page-shell";
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
    <RoutePageShell
      eyebrow="Plan"
      title="Plan your event"
      description="A dedicated planning page is ready for the booking flow and planner wireframe."
    />
  );
}
