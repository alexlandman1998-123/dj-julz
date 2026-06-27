import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DJ Julz handles booking enquiries, analytics data and contact information.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-24">
      <article className="mx-auto max-w-2xl">
        <p className="eyebrow">Privacy</p>
        <h1 className="mt-4 font-heading text-6xl leading-none text-foreground">
          Privacy Policy
        </h1>
        <p className="body-copy mt-6">
          DJ Julz uses enquiry details only to respond to booking requests, prepare
          event quotes and improve the website experience.
        </p>

        <div className="mt-10 grid gap-8 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="card-title text-foreground">Information collected</h2>
            <p className="mt-3">
              Booking enquiries may include your name, contact details, event date,
              venue, guest count and music preferences. This information is used to
              respond to your enquiry and plan the event with you.
            </p>
          </section>

          <section>
            <h2 className="card-title text-foreground">Analytics</h2>
            <p className="mt-3">
              The site is prepared for Google Analytics 4 and Microsoft Clarity. When
              enabled, these tools help understand page views, scroll depth, button
              clicks and booking interest without selling personal information.
            </p>
          </section>

          <section>
            <h2 className="card-title text-foreground">Contact</h2>
            <p className="mt-3">
              For privacy questions or to request deletion of enquiry details, email{" "}
              <Link
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-foreground underline underline-offset-4"
              >
                {siteConfig.email}
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
