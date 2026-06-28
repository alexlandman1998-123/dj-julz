import Image from "next/image";

import { MotionCard } from "@/components/shared/motion";
import { eventTimeline, experienceSections } from "@/data/experiences";
import { warmBlurDataUrl } from "@/lib/image-placeholders";

export function EventTimeline() {
  return (
    <section className="bg-white px-5 py-14 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md lg:max-w-5xl">
        <p className="eyebrow">{experienceSections.timeline.eyebrow}</p>
        <h2 className="mt-4 font-heading text-[3.35rem] leading-[0.94] text-foreground">
          {experienceSections.timeline.title}
        </h2>
        <div className="relative mt-10 grid gap-5 pl-7">
          <span className="absolute left-[0.8rem] top-6 h-[calc(100%-3rem)] w-px bg-border" />
          {eventTimeline.map((step, index) => (
            <MotionCard
              key={`${step.time}-${step.title}`}
              delay={index * 0.035}
              className="relative border-0 bg-transparent p-0 shadow-none"
            >
              <span className="absolute -left-[1.45rem] top-6 grid size-5 place-items-center rounded-full border border-sage/30 bg-white">
                <span className="size-1.5 rounded-full bg-sage" />
              </span>
              <div className="grid grid-cols-[1fr_6.5rem] items-center gap-4 rounded-[1.15rem] border border-border bg-surface p-4">
                <div>
                  <p className="text-sm text-muted-foreground">{step.time}</p>
                  <h3 className="mt-1 text-sm font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-[0.9rem] bg-white">
                  <Image
                    src={step.image}
                    alt={`${step.title} event moment`}
                    fill
                    sizes="104px"
                    className="object-cover"
                    style={{ objectPosition: step.imagePosition }}
                    placeholder="blur"
                    blurDataURL={warmBlurDataUrl}
                  />
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
