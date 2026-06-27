import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { MotionCard } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ContactCTA() {
  const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");
  const contactHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi DJ Julz, I'd like to check availability for an event.",
      )}`
    : `mailto:${siteConfig.email}?subject=${encodeURIComponent("DJ Julz event enquiry")}`;

  return (
    <section id="contact" className="section-spacing bg-surface px-5">
      <MotionCard className="mx-auto max-w-md bg-white p-6">
        <p className="eyebrow">Enquire today</p>
        <h2 className="mt-3 font-heading text-5xl leading-[0.92] text-foreground">
          Let&apos;s make the music feel effortless.
        </h2>
        <p className="body-copy mt-5">
          Send the date, venue and a little about the atmosphere you want. DJ Julz will
          come back with availability and the best starting point for your event.
        </p>
        <div className="mt-7 grid gap-3">
          <Button asChild size="lg" variant="sage">
            <Link href="#planner" data-analytics="book_consultation_contact">
              Start Planning Your Event
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link
              href={contactHref}
              target={whatsappNumber ? "_blank" : undefined}
              rel={whatsappNumber ? "noreferrer" : undefined}
              data-analytics={whatsappNumber ? "whatsapp_click" : "email_click"}
            >
              <MessageCircle className="size-4" />
              {whatsappNumber ? "Let's Talk" : "Email DJ Julz"}
            </Link>
          </Button>
        </div>
      </MotionCard>
    </section>
  );
}
