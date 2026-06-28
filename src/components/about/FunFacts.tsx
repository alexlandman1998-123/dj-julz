import { Coffee, MapPin, Music2, Star } from "lucide-react";

import { MotionCard, Reveal } from "@/components/shared/motion";

const facts = [
  {
    label: "Favourite Song Right Now",
    value: "Rous du Sol",
    detail: "Innerbloom",
    icon: Music2,
  },
  {
    label: "Most Requested Song",
    value: "Mr. Brightside",
    detail: "The Killers",
    icon: Star,
  },
  {
    label: "Dream Venue",
    value: "Clifftop ceremony.",
    detail: "Open skies. Great energy.",
    icon: MapPin,
  },
  {
    label: "Pre-Event Fuel",
    value: "Strong coffee",
    detail: "And good vibes.",
    icon: Coffee,
  },
] as const;

export function FunFacts() {
  return (
    <section className="bg-surface px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md lg:max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-foreground">08</span>
            <p className="eyebrow">Fun Facts</p>
          </div>
          <h2 className="mt-8 max-w-xl font-sans text-[2.1rem] font-medium leading-[1.08] tracking-normal text-foreground lg:text-[4rem]">
            A little more about Julz.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {facts.map((fact, index) => (
            <MotionCard key={fact.label} delay={index * 0.04} className="bg-white p-5">
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-surface text-sage">
                  <fact.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs leading-5 text-muted-foreground">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm font-bold text-foreground">{fact.value}</p>
                  <p className="text-sm font-semibold text-foreground">{fact.detail}</p>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
