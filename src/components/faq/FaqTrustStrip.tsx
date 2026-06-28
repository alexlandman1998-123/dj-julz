import { Headphones, ShieldCheck, SlidersHorizontal } from "lucide-react";

import { MotionCard, Reveal } from "@/components/shared/motion";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Professional & Reliable",
    description: "You can count on me to arrive early, be prepared and deliver.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customised For You",
    description:
      "Every event is different. I tailor the music to your crowd and your vibe.",
  },
  {
    icon: Headphones,
    title: "Your Day, Your Way",
    description: "I work with you to create the perfect soundtrack for every moment.",
  },
] as const;

export function FaqTrustStrip() {
  return (
    <section className="px-5 pb-14 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-md lg:max-w-6xl">
        <Reveal>
          <div className="hairline mb-6 lg:mb-8" />
        </Reveal>
        <div className="grid gap-3 lg:grid-cols-3">
          {trustItems.map((item, index) => (
            <MotionCard key={item.title} delay={index * 0.06} className="p-5 lg:p-6">
              <div className="grid size-12 place-items-center rounded-full bg-accent text-sage">
                <item.icon className="size-5" aria-hidden />
              </div>
              <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
              <p className="caption mt-2">{item.description}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
