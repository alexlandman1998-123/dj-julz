import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section id="contact" className="section-spacing bg-surface px-5">
      <div className="premium-card mx-auto max-w-md bg-white p-6">
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
            <Link href="#planner">Book Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="https://wa.me/" target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" />
              WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
