import { MotionCard } from "@/components/shared/motion";

const stats = [
  { value: "350+", label: "Events shaped with care" },
  { value: "200+", label: "Wedding celebrations supported" },
  { value: "12 yrs", label: "Experience reading rooms" },
  { value: "Gauteng", label: "Pretoria-based mobile DJ" },
];

export function Stats() {
  return (
    <section id="trust" className="section-spacing bg-surface px-5">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <MotionCard key={stat.label} className="p-5" delay={index * 0.04}>
            <p className="font-heading text-5xl leading-none text-foreground">
              {stat.value}
            </p>
            <p className="caption mt-3">{stat.label}</p>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
