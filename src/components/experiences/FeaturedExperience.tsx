import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { type Experience, experienceSections } from "@/data/experiences";
import { warmBlurDataUrl } from "@/lib/image-placeholders";

type FeaturedExperienceProps = {
  experience: Experience;
  number: string;
};

export function FeaturedExperience({ experience, number }: FeaturedExperienceProps) {
  return (
    <section id="featured-experience" className="bg-white px-5 py-12 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-md lg:grid lg:max-w-6xl lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-14">
        <div className="relative min-h-[34rem] overflow-hidden rounded-[1.35rem] bg-primary text-primary-foreground lg:min-h-[44rem]">
          <Image
            key={experience.id}
            src={experience.image}
            alt={`${experience.title} by DJ Julz`}
            fill
            sizes="(max-width: 1024px) 90vw, 42vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL={warmBlurDataUrl}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/12 via-black/36 to-black/84" />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <p className="text-sm font-bold text-white/75">{number}</p>
            <h2 className="mt-3 font-heading text-[3.55rem] leading-[0.9] text-white">
              {experience.title}
            </h2>
            <p className="mt-5 max-w-[18rem] text-sm leading-6 text-white/82">
              {experience.subtitle}
            </p>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <p className="eyebrow">{experienceSections.featured.priceLabel}</p>
          <p className="mt-3 font-heading text-5xl text-sage">
            {experience.startingPrice}
          </p>
          <p className="body-copy mt-6">{experience.description}</p>
          <Button asChild variant="sage" size="lg" className="mt-8 w-full sm:w-auto">
            <a href="#whats-included">
              {experienceSections.featured.cta} <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
