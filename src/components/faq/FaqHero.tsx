import Image from "next/image";

import { Reveal } from "@/components/shared/motion";

export function FaqHero() {
  return (
    <section className="px-5 pt-28 pb-10 lg:px-8 lg:pt-36 lg:pb-16">
      <div className="mx-auto grid max-w-md gap-8 lg:max-w-6xl lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
        <Reveal>
          <p className="eyebrow">FAQs</p>
          <h1 className="section-title mt-4 max-w-[9ch]">
            Everything you need to know.
          </h1>
          <p className="body-copy mt-5 max-w-sm">
            Honest answers to the questions I get asked most.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface soft-shadow lg:rounded-[2rem]">
            <div className="relative aspect-[1.18/1] lg:aspect-[1.75/1]">
              <Image
                src="/images/dj-julz-hero-optimized.jpg"
                alt="DJ Julz behind the decks at an event"
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(255_255_255_/_0.92),rgb(255_255_255_/_0.28)_42%,rgb(255_255_255_/_0.02))]" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgb(255_255_255_/_0.86),transparent)]" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
