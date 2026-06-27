import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="px-5 pb-14 pt-24">
      <div className="mx-auto max-w-md">
        <p className="eyebrow">Wedding & Event DJ</p>
        <h1 className="hero-title mt-5">Music for moments that matter.</h1>
        <p className="body-copy mt-6">
          Calm, considered music direction for weddings, private celebrations and brand
          events where every transition should feel effortless.
        </p>
        <div className="mt-8 grid gap-3">
          <Button asChild size="lg" variant="sage">
            <Link href="#planner">
              Book Consultation <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#packages">View Packages</Link>
          </Button>
        </div>
        <div className="premium-card mt-8 overflow-hidden bg-surface">
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/dj-julz-hero.png"
              alt="Elegant private event DJ setup with warm lighting"
              fill
              priority
              sizes="(max-width: 640px) 90vw, 420px"
              className="object-cover object-[62%_center]"
            />
          </div>
        </div>
        <a
          href="#trust"
          className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full px-1 text-sm font-medium text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
        >
          Explore the experience <ChevronDown className="size-4" />
        </a>
      </div>
    </section>
  );
}
