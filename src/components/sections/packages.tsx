import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Section } from "@/components/shared/section";
import { packages } from "@/data/site";

import { PackageCard } from "./package-card";

export function Packages() {
  return (
    <Section id="packages" className="bg-card/42">
      <Container>
        <Heading
          eyebrow="Packages"
          title="Simple options, tailored once the date is real."
          description="A reusable pricing surface for future premium websites, with DJ Julz packages as the first content layer."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {packages.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.06}>
              <PackageCard {...item} />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
