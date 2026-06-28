import { ChevronRight, Lightbulb, Mic2, ShieldCheck, Speaker } from "lucide-react";

import { MotionCard, Reveal } from "@/components/shared/motion";

const gear = [
  {
    title: "Premium Sound Systems",
    description: "Crisp, clear and powerful.",
    icon: Speaker,
  },
  {
    title: "Wireless Audio",
    description: "Professional and reliable.",
    icon: Mic2,
  },
  {
    title: "Lighting Design",
    description: "Set the mood. Elevate the moment.",
    icon: Lightbulb,
  },
  {
    title: "Backup Systems",
    description: "Prepared for anything.",
    icon: ShieldCheck,
  },
] as const;

export function GearSection() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md lg:max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-foreground">07</span>
            <p className="eyebrow">The Gear</p>
          </div>
          <h2 className="mt-8 max-w-2xl font-sans text-[2.1rem] font-medium leading-[1.08] tracking-normal text-foreground lg:text-[4rem]">
            Premium equipment.
            <br />
            Flawless execution.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3">
          {gear.map((item, index) => (
            <MotionCard key={item.title} delay={index * 0.035} className="p-4">
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-surface text-sage">
                  <item.icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="caption mt-1">{item.description}</p>
                </div>
                <ChevronRight className="size-4 text-muted-foreground" />
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
