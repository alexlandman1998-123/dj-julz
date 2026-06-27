import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <Section className="pt-0">
      <Container>
        <MotionReveal>
          <div className="rounded-[2rem] bg-foreground px-6 py-12 text-background soft-shadow sm:px-10 lg:px-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-background/60">
                  Next step
                </p>
                <h2 className="mt-4 max-w-3xl text-balance font-heading text-5xl leading-[0.95] sm:text-6xl">
                  Build the night around the feeling first.
                </h2>
              </div>
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link href="#planner">
                  Start the brief <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  );
}
