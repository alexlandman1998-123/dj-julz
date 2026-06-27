import { AnimatedStat } from "@/components/shared/animated-stat";
import { MotionCard } from "@/components/shared/motion";

const stats = [
  { value: 350, suffix: "+", label: "Events shaped" },
  { value: 200, suffix: "+", label: "Weddings supported" },
  { value: 12, suffix: "", label: "Years experience" },
  { value: 5, suffix: "★", label: "Client reviews" },
];

export function Stats() {
  return (
    <section id="trust" className="section-spacing bg-surface px-5">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <MotionCard key={stat.label} className="p-5" delay={index * 0.04}>
            <p className="font-heading text-5xl leading-none text-foreground">
              <AnimatedStat value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="caption mt-3">{stat.label}</p>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
