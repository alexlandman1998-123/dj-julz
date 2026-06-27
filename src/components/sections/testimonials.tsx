import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Section } from "@/components/shared/section";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Proof"
          title="Taste travels through the whole room."
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <MotionReveal key={testimonial.name} delay={index * 0.06}>
              <Card className="h-full rounded-[1.5rem]">
                <CardContent className="p-6">
                  <p className="text-lg leading-8">&quot;{testimonial.quote}&quot;</p>
                  <div className="mt-8 flex items-center gap-3">
                    <Avatar className="size-10">
                      <AvatarFallback>{testimonial.name.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
