import { CalendarCheck, Handshake, Music, PartyPopper, Route } from "lucide-react";

import { MotionCard, Reveal } from "@/components/shared/motion";

const steps = [
  {
    number: "01",
    title: "We Meet",
    description: "We get to know each other and your vision.",
    icon: Handshake,
  },
  {
    number: "02",
    title: "Plan The Music",
    description: "We curate the perfect soundtrack for your event.",
    icon: Music,
  },
  {
    number: "03",
    title: "Build The Timeline",
    description: "We map every moment from start to finish.",
    icon: Route,
  },
  {
    number: "04",
    title: "Create The Night",
    description: "I bring the plan to life and read the room.",
    icon: CalendarCheck,
  },
  {
    number: "05",
    title: "Celebrate",
    description: "You enjoy every moment. I handle the rest.",
    icon: PartyPopper,
  },
] as const;

export function ProcessSteps() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md lg:max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-foreground">03</span>
            <p className="eyebrow">How I Work</p>
          </div>
          <h2 className="mt-8 max-w-2xl font-sans text-[2.1rem] font-medium leading-[1.08] tracking-normal text-foreground lg:text-[4rem]">
            A seamless process, from start to finish.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-5">
          {steps.map((step, index) => (
            <MotionCard key={step.title} delay={index * 0.04} className="p-5">
              <div className="flex items-start gap-4 lg:block">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-sage">
                  <step.icon className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-sage">{step.number}</p>
                  <h3 className="mt-1 text-base font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="caption mt-2">{step.description}</p>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
