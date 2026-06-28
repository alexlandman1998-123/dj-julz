import { Plus } from "lucide-react";

import { MotionCard } from "@/components/shared/motion";
import { enhancements, experienceSections } from "@/data/experiences";

export function EnhancementCards() {
  return (
    <section className="bg-white px-5 py-14 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md lg:max-w-5xl">
        <p className="eyebrow">{experienceSections.enhancements.eyebrow}</p>
        <h2 className="mt-4 font-heading text-[3.2rem] leading-[0.94] text-foreground">
          {experienceSections.enhancements.title}
        </h2>
        <p className="body-copy mt-5 max-w-xl">
          {experienceSections.enhancements.description}
        </p>
        <div className="mt-8 grid gap-3 lg:grid-cols-2">
          {enhancements.map((enhancement, index) => (
            <MotionCard key={enhancement.title} delay={index * 0.035} className="p-5">
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-sage">
                  <enhancement.icon className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-foreground">
                    {enhancement.title}
                  </h3>
                  <p className="caption mt-1">{enhancement.description}</p>
                </div>
                <Plus className="size-4 text-sage" />
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
