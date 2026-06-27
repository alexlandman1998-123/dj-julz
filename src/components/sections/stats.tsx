import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { stats } from "@/data/site";

export function Stats() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid gap-3 rounded-[1.5rem] border border-border bg-card p-4 soft-shadow sm:grid-cols-3">
          {stats.map((stat, index) => (
            <MotionReveal key={stat.label} delay={index * 0.06}>
              <div className="rounded-[1.25rem] bg-muted/55 p-6">
                <p className="font-heading text-5xl leading-none">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
