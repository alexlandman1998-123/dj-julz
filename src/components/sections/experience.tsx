import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { experiencePoints } from "@/data/site";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Heading
          eyebrow="Experience"
          title="A calm system for unforgettable nights."
          description="The site is built like a premium SaaS product, and the service follows the same logic: clear inputs, thoughtful flow, refined output."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experiencePoints.map((point, index) => (
            <MotionReveal key={point.title} delay={index * 0.05}>
              <Card className="h-full rounded-[1.5rem] border-border bg-card/80 transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <point.icon className="size-5 text-muted-foreground" />
                  <h3 className="mt-8 text-xl font-medium">{point.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
