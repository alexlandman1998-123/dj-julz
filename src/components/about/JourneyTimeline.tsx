import { BriefcaseBusiness, CalendarHeart, Crown, Gift } from "lucide-react";

import { MotionCard, Reveal } from "@/components/shared/motion";

const milestones = [
  {
    year: "2016",
    title: "First Wedding",
    description: "Every expert was once a beginner. Mine started with one wedding.",
    icon: CalendarHeart,
  },
  {
    year: "2018",
    title: "100 Events",
    description: "Word spread and so did the dance floors.",
    icon: Gift,
  },
  {
    year: "2021",
    title: "Corporate Events",
    description: "Expanding into corporate functions and larger productions.",
    icon: BriefcaseBusiness,
  },
  {
    year: "Today",
    title: "500+ Celebrations",
    description: "Hundreds of unforgettable events. Many more to come.",
    icon: Crown,
  },
] as const;

export function JourneyTimeline() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md lg:max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-foreground">02</span>
            <p className="eyebrow">The Journey</p>
          </div>
          <h2 className="mt-8 max-w-2xl font-sans text-[2.1rem] font-medium leading-[1.08] tracking-normal text-foreground lg:text-[4rem]">
            A journey built on passion and people.
          </h2>
        </Reveal>

        <div className="relative mt-12 grid gap-8 pl-8">
          <span className="absolute left-[1.22rem] top-7 h-[calc(100%-3.5rem)] w-px bg-border" />
          {milestones.map((milestone, index) => (
            <MotionCard
              key={milestone.title}
              delay={index * 0.04}
              className="relative border-0 bg-transparent p-0 shadow-none"
            >
              <span className="absolute -left-[2.03rem] top-0 grid size-10 place-items-center rounded-full border border-border bg-white text-sage shadow-[0_12px_30px_rgb(24_24_27_/_0.07)]">
                <milestone.icon className="size-4" />
              </span>
              <div className="rounded-[1.15rem] border border-border bg-surface p-5">
                <p className="text-sm font-bold text-sage">{milestone.year}</p>
                <h3 className="mt-1 text-base font-bold text-foreground">
                  {milestone.title}
                </h3>
                <p className="caption mt-2">{milestone.description}</p>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
