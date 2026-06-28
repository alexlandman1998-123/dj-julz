import type { Metadata } from "next";

import { RoutePageShell } from "@/components/shared/route-page-shell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Event Details",
  description:
    "Review DJ Julz event details, testimonials, gallery moments and availability information.",
  alternates: {
    canonical: `${siteConfig.url}/details`,
  },
};

export default function DetailsPage() {
  return (
    <RoutePageShell
      eyebrow="Details"
      title="Event details"
      description="A dedicated details page is ready for reviews, availability, gallery and event information."
    />
  );
}
