import { BookingForm } from "@/components/planner/booking-form";
import { AvailabilityCalendar } from "@/components/sections/availability-calendar";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { plannerSteps } from "@/data/site";

export function Planner() {
  return (
    <Section id="planner" className="bg-card/42">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Heading
              eyebrow="Planner"
              title="Turn a loose idea into a bookable brief."
              description="The form is fully typed with React Hook Form and Zod, ready for a Resend-powered server action or route handler."
            />
            <div className="mt-8 grid gap-3">
              {plannerSteps.map((step, index) => (
                <MotionReveal key={step.title} delay={index * 0.06}>
                  <Card className="rounded-[1.25rem]">
                    <CardContent className="flex gap-4 p-4">
                      <div className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                        <step.icon className="size-4" />
                      </div>
                      <div>
                        <h3 className="font-medium">{step.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </MotionReveal>
              ))}
            </div>
          </div>
          <MotionReveal delay={0.1}>
            <div className="grid gap-4 xl:grid-cols-2">
              <Card className="rounded-[1.5rem] soft-shadow">
                <CardContent className="p-5 sm:p-6">
                  <BookingForm />
                </CardContent>
              </Card>
              <AvailabilityCalendar />
            </div>
          </MotionReveal>
        </div>
      </Container>
    </Section>
  );
}
