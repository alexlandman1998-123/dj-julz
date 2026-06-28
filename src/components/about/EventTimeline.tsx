import Image from "next/image";

import { MotionCard, Reveal } from "@/components/shared/motion";
import { warmBlurDataUrl } from "@/lib/image-placeholders";

const eventSteps = [
  {
    time: "3:00 PM",
    title: "Setup",
    image: "/images/generated/dj-setup-reception.jpg",
    position: "72% center",
  },
  {
    time: "4:00 PM",
    title: "Guests Arrive",
    image: "/images/generated/ceremony-setup.jpg",
    position: "35% center",
  },
  {
    time: "4:30 PM",
    title: "Ceremony",
    image: "/images/generated/ceremony-setup.jpg",
    position: "48% center",
  },
  {
    time: "6:00 PM",
    title: "Dinner",
    image: "/images/generated/wedding-first-dance.jpg",
    position: "25% center",
  },
  {
    time: "7:30 PM",
    title: "First Dance",
    image: "/images/generated/wedding-first-dance.jpg",
    position: "58% center",
  },
  {
    time: "9:00 PM",
    title: "Dancefloor Opens",
    image: "/images/generated/private-dancefloor.jpg",
    position: "50% center",
  },
  {
    time: "12:00 AM",
    title: "Last Song",
    image: "/images/generated/dj-behind-decks.jpg",
    position: "40% center",
  },
] as const;

export function EventTimeline() {
  return (
    <section className="bg-surface px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md lg:max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-foreground">09</span>
            <p className="eyebrow">One Night</p>
          </div>
          <h2 className="mt-8 max-w-xl font-sans text-[2.1rem] font-medium leading-[1.08] tracking-normal text-foreground lg:text-[4rem]">
            From Start To Finish
          </h2>
        </Reveal>

        <div className="relative mt-10 grid gap-5 pl-7">
          <span className="absolute left-[0.8rem] top-6 h-[calc(100%-3rem)] w-px bg-border" />
          {eventSteps.map((step, index) => (
            <MotionCard
              key={`${step.time}-${step.title}`}
              delay={index * 0.035}
              className="relative border-0 bg-transparent p-0 shadow-none"
            >
              <span className="absolute -left-[1.45rem] top-6 grid size-5 place-items-center rounded-full border border-sage/30 bg-white">
                <span className="size-1.5 rounded-full bg-sage" />
              </span>
              <div className="grid grid-cols-[1fr_6.5rem] items-center gap-4 rounded-[1.15rem] border border-border bg-white p-4">
                <div>
                  <p className="text-sm text-muted-foreground">{step.time}</p>
                  <h3 className="mt-1 text-sm font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-[0.9rem] bg-surface">
                  <Image
                    src={step.image}
                    alt={`${step.title} event moment`}
                    fill
                    sizes="104px"
                    className="object-cover"
                    style={{ objectPosition: step.position }}
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
