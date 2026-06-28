import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { type Experience, experienceSections } from "@/data/experiences";
import { warmBlurDataUrl } from "@/lib/image-placeholders";

type ExperiencePreviewCardsProps = {
  experiences: Experience[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export function ExperiencePreviewCards({
  experiences,
  selectedId,
  onSelect,
}: ExperiencePreviewCardsProps) {
  const otherExperiences = experiences.filter(
    (experience) => experience.id !== selectedId,
  );

  return (
    <section className="bg-white px-5 py-14 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md lg:max-w-6xl">
        <p className="eyebrow">{experienceSections.otherExperiences.eyebrow}</p>
        <h2 className="mt-4 font-heading text-[3.2rem] leading-[0.94] text-foreground">
          {experienceSections.otherExperiences.title}
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {otherExperiences.map((experience, index) => (
            <button
              key={experience.id}
              type="button"
              onClick={() => onSelect(experience.id)}
              className="group relative min-h-[28rem] overflow-hidden rounded-[1.35rem] bg-primary text-left text-primary-foreground shadow-[0_18px_50px_rgb(24_24_27_/_0.08)] outline-none transition-transform duration-[var(--duration-base)] ease-[var(--ease-premium)] hover:-translate-y-1 focus-visible:ring-3 focus-visible:ring-ring/35 active:scale-[0.985]"
            >
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                sizes="(max-width: 1024px) 90vw, 30vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                placeholder="blur"
                blurDataURL={warmBlurDataUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/16 via-black/42 to-black/88" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-sm font-bold text-white/70">
                  {String(index + 2).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-heading text-[2.8rem] leading-[0.92] text-white">
                  {experience.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/75">
                  {experience.subtitle}
                </p>
                <p className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-sage">
                  {experienceSections.otherExperiences.priceLabel}
                </p>
                <div className="mt-1 flex items-center justify-between">
                  <p className="font-heading text-4xl text-white">
                    {experience.startingPrice}
                  </p>
                  <span className="grid size-11 place-items-center rounded-full border border-sage/50 text-sage">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
