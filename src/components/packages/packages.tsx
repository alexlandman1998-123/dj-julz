import { ArrowRight, Building2, Heart, Mic2, PartyPopper } from "lucide-react";
import Link from "next/link";

import { MotionCard, Reveal } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";

const packages = [
  {
    title: "Wedding DJ",
    description: "Ceremony support, reception pacing and a refined dance-floor arc.",
    icon: Heart,
  },
  {
    title: "Corporate Events",
    description: "A polished music layer for launches, dinners and brand moments.",
    icon: Building2,
  },
  {
    title: "Private Parties",
    description: "Warm, personal sets for birthdays and milestone celebrations.",
    icon: PartyPopper,
  },
  {
    title: "MC Services",
    description: "Calm announcements and light hosting for key event transitions.",
    icon: Mic2,
  },
];

export function Packages() {
  return (
    <section id="packages" className="section-spacing bg-surface px-5">
      <div className="mx-auto max-w-md">
        <Reveal>
          <p className="eyebrow">Packages</p>
          <h2 className="section-title mt-3">Choose the right starting point.</h2>
        </Reveal>
        <div className="mt-8 grid gap-4">
          {packages.map((item, index) => (
            <MotionCard key={item.title} className="p-5" delay={index * 0.05}>
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="caption mt-2">{item.description}</p>
                </div>
              </div>
              <Button asChild variant="ghost" className="mt-5 px-0 text-sage">
                <Link href="#planner">
                  Start enquiry <ArrowRight className="size-4" />
                </Link>
              </Button>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
