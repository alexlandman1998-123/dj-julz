import { ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <MotionReveal className="pb-4 lg:pb-16">
            <Badge className="rounded-full bg-accent px-4 py-1.5 text-accent-foreground hover:bg-accent">
              <Sparkles className="mr-2 size-3.5" />
              Premium event DJ
            </Badge>
            <h1 className="mt-8 max-w-4xl text-balance font-heading text-6xl leading-[0.88] sm:text-7xl lg:text-8xl">
              Music direction for rooms that deserve taste.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              DJ JULz creates polished sets for weddings, private celebrations, and
              brand events where the night needs to feel effortless.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#planner">
                  Plan an event <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="#packages">
                  View packages <CalendarCheck className="size-4" />
                </Link>
              </Button>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card soft-shadow sm:aspect-[16/12] lg:aspect-[5/6]">
              <Image
                src="/images/dj-julz-hero.png"
                alt="Premium DJ setup in a warm private event setting"
                fill
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0tKj4DwAD9wGSM2Ee6wAAAABJRU5ErkJggg=="
                sizes="(min-width: 1024px) 52vw, 90vw"
                className="object-cover"
              />
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
