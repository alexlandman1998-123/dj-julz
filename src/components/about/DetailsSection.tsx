import { Cable, Leaf, Music2 } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/shared/motion";
import { warmBlurDataUrl } from "@/lib/image-placeholders";

const details = [
  { label: "Every cable hidden.", icon: Cable },
  { label: "Every transition planned.", icon: Music2 },
  { label: "Every moment intentional.", icon: Leaf },
] as const;

export function DetailsSection() {
  return (
    <section className="bg-surface px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md lg:grid lg:max-w-6xl lg:grid-cols-[0.75fr_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-foreground">04</span>
            <p className="eyebrow">The Details</p>
          </div>
          <h2 className="mt-8 max-w-xl font-sans text-[2.55rem] font-medium leading-[1.04] tracking-normal text-foreground lg:text-[4.8rem]">
            The details matter.
          </h2>
          <p className="body-copy mt-6 max-w-sm">
            Behind every unforgettable night is hours of planning and absolute attention
            to detail.
          </p>
        </Reveal>

        <Reveal className="mt-10 lg:mt-0" delay={0.06}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-white">
            <Image
              src="/images/generated/dj-setup-reception.jpg"
              alt="DJ headphones and event equipment detail"
              fill
              sizes="(max-width: 1024px) 90vw, 48vw"
              className="object-cover object-[72%_center] grayscale"
              placeholder="blur"
              blurDataURL={warmBlurDataUrl}
            />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-3 lg:max-w-6xl lg:gap-5">
        {details.map((detail) => (
          <Reveal key={detail.label}>
            <div className="rounded-[1.15rem] border border-border bg-white p-4 text-center">
              <detail.icon className="mx-auto size-5 text-sage" />
              <p className="mt-3 text-xs font-medium leading-5 text-foreground">
                {detail.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
