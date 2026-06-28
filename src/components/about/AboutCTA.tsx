import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { warmBlurDataUrl } from "@/lib/image-placeholders";

export function AboutCTA() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
      <Reveal className="mx-auto max-w-md overflow-hidden rounded-[1.35rem] bg-surface lg:grid lg:max-w-6xl lg:grid-cols-[0.8fr_1fr]">
        <div className="p-7 lg:p-12">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-foreground">10</span>
            <p className="eyebrow">Let&apos;s Create</p>
          </div>
          <h2 className="mt-8 max-w-xl font-sans text-[2.35rem] font-medium leading-[1.05] tracking-normal text-foreground lg:text-[4.6rem]">
            Let&apos;s create something unforgettable.
          </h2>
          <p className="body-copy mt-6 max-w-sm">
            Your event deserves more than just music. It deserves a soundtrack that
            lasts a lifetime.
          </p>
          <Button asChild variant="sage" size="lg" className="mt-8">
            <Link href="/plan">
              Book a Consultation <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="relative min-h-[22rem] lg:min-h-[34rem]">
          <Image
            src="/images/generated/private-dancefloor.jpg"
            alt="Celebration crowd ready for DJ Julz"
            fill
            sizes="(max-width: 1024px) 90vw, 44vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL={warmBlurDataUrl}
          />
        </div>
      </Reveal>
    </section>
  );
}
