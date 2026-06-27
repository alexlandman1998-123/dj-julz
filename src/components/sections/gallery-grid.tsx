import Image from "next/image";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Section } from "@/components/shared/section";

const galleryItems = ["Arrival ambience", "Dinner pacing", "Dance-floor lift"] as const;

export function GalleryGrid() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <Heading
            eyebrow="Visual system"
            title="Editorial assets, not template filler."
            description="The starter uses project-owned imagery through Next Image with responsive sizing and modern formats enabled."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {galleryItems.map((item, index) => (
              <MotionReveal key={item} delay={index * 0.07}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border bg-card">
                  <Image
                    src="/images/dj-julz-hero.png"
                    alt={`${item} for a premium DJ event`}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5">
                    <p className="text-sm font-medium text-white">{item}</p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
