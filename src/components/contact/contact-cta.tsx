import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/shared/logo";
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
    <section id="contact" className="section-spacing bg-surface px-5 lg:px-8">
      <MotionCard className="mx-auto max-w-md overflow-hidden border-0 bg-primary p-6 text-primary-foreground lg:grid lg:max-w-6xl lg:grid-cols-[0.9fr_1fr] lg:items-end lg:gap-16 lg:p-10">
        <div>
          <Logo variant="white" className="w-28" />
          <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/55">
            Enquire today
          </p>
          <h2 className="mt-3 font-heading text-5xl leading-[0.92] text-white">
            Let&apos;s make the music feel effortless.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/68">
            Send the date, venue and a little about the atmosphere you want. DJ Julz
            will come back with availability and the best starting point for your event.
          </p>
        </div>
        <div className="mt-7 grid gap-3 lg:mt-0 lg:max-w-md lg:justify-self-end lg:self-end">
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
              className="border-white/20 bg-transparent text-white hover:bg-white/10"
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
