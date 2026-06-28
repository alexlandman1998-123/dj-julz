import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { consultationCta } from "@/data/experiences";

export function ConsultationCTA() {
  const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi DJ Julz, I'd like help choosing the right experience.",
      )}`
    : `mailto:${siteConfig.email}?subject=${encodeURIComponent("DJ Julz experience enquiry")}`;

  return (
    <section className="bg-surface px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md rounded-[1.35rem] border border-border bg-white p-7 text-center shadow-[0_18px_55px_rgb(24_24_27_/_0.06)] lg:max-w-4xl lg:p-12">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-accent text-sage">
          <MessageCircle className="size-6" />
        </span>
        <h2 className="mt-8 font-heading text-[3.1rem] leading-[0.94] text-foreground lg:text-[5rem]">
          {consultationCta.title}
        </h2>
        <p className="body-copy mx-auto mt-5 max-w-md">{consultationCta.description}</p>
        <div className="mt-8 grid gap-3 sm:flex sm:justify-center">
          <Button asChild variant="sage" size="lg">
            <Link href="/plan">{consultationCta.primary}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link
              href={whatsappHref}
              target={whatsappNumber ? "_blank" : undefined}
              rel={whatsappNumber ? "noreferrer" : undefined}
            >
              {consultationCta.secondary}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
