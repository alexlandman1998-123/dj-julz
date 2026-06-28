import { Headphones, Heart, Star, UsersRound } from "lucide-react";

import { MotionCard } from "@/components/shared/motion";

const stats = [
  { value: "350+", label: "Events", icon: Headphones },
  { value: "200+", label: "Weddings", icon: Heart },
  { value: "12", label: "Years Experience", icon: Star },
  { value: "Custom", label: "Music Briefs", icon: UsersRound },
];

export function Stats() {
  return (
    <section id="trust" className="section-spacing bg-surface px-5 lg:px-8">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3 lg:max-w-6xl lg:grid-cols-4 lg:gap-5">
        {stats.map((stat, index) => (
          <MotionCard key={stat.label} className="p-5 text-center" delay={index * 0.04}>
            <stat.icon className="mx-auto mb-3 size-5 text-sage" />
            <p className="text-2xl font-bold leading-none text-foreground">
              {stat.value}
            </p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">{stat.label}</p>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
