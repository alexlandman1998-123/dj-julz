import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { MotionCard } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ContactCTA() {
  const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");
  const contactHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi DJ Julz, I'd like to enquire about an event.",
      )}`
    : `mailto:${siteConfig.email}?subject=${encodeURIComponent("DJ Julz booking enquiry")}`;

  return (
    <section id="contact" className="section-spacing bg-surface px-5">
      <MotionCard className="mx-auto max-w-md bg-white p-6">
        <p className="eyebrow">Start here</p>
        <h2 className="mt-3 font-heading text-5xl leading-[0.92] text-foreground">
          Let&apos;s make your event unforgettable.
        </h2>
        <p className="body-copy mt-5">
          Share a few details and turn the first conversation into a clear, confident
          plan.
        </p>
        <div className="mt-7 grid gap-3">
          <Button asChild size="lg" variant="sage">
            <Link href="#planner" data-analytics="book_consultation_contact">
              Book Consultation
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
              {whatsappNumber ? "WhatsApp" : "Email DJ Julz"}
            </Link>
          </Button>
        </div>
      </MotionCard>
    </section>
  );
}
