import Image from "next/image";

import { Reveal } from "@/components/shared/motion";
import { warmBlurDataUrl } from "@/lib/image-placeholders";

export function ApproachSection() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md lg:grid lg:max-w-6xl lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-foreground">05</span>
            <p className="eyebrow">My Approach</p>
          </div>
          <h2 className="mt-8 max-w-sm font-sans text-[2.55rem] font-medium leading-[1.04] tracking-normal text-foreground lg:text-[4.5rem]">
            Professional.
            <br />
            Reliable.
            <br />
            Prepared.
            <br />
            Calm.
          </h2>
          <p className="body-copy mt-6 max-w-xs">
            When you book DJ Julz, you get more than a DJ. You get peace of mind.
          </p>
        </Reveal>

        <Reveal className="mt-10 lg:mt-0" delay={0.06}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-surface">
            <Image
              src="/images/generated/dj-behind-decks.jpg"
              alt="DJ Julz focused behind the decks"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover object-[58%_center] grayscale"
              placeholder="blur"
              blurDataURL={warmBlurDataUrl}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
