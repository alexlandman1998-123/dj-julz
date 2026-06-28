import { experiencePhilosophy, experienceSections } from "@/data/experiences";

export function PhilosophyBreak() {
  return (
    <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md lg:max-w-5xl">
        <p className="eyebrow text-sage">{experienceSections.philosophy.eyebrow}</p>
        <h2 className="mt-8 font-heading text-[3.55rem] leading-[0.9] text-white lg:text-[6rem]">
          {experiencePhilosophy.main.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-8 max-w-2xl font-heading text-[2.2rem] italic leading-[1.02] text-sage lg:text-[4.6rem]">
          {experiencePhilosophy.accent}
        </p>
      </div>
    </section>
  );
}
