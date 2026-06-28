import type { Metadata } from "next";

import { RoutePageShell } from "@/components/shared/route-page-shell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about DJ Julz bookings, travel, music requests and equipment.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

export default function FAQPage() {
  return (
    <RoutePageShell
      eyebrow="FAQ"
      title="Frequently asked questions"
      description="A dedicated FAQ page is ready for the full question-and-answer wireframe."
    />
  );
}
