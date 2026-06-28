import { plannerHero } from "@/data/planner";

export function PlanHero() {
  return (
    <section className="px-5 pb-8 pt-28 text-center lg:px-8 lg:pb-12 lg:pt-36">
      <div className="mx-auto max-w-md lg:max-w-4xl">
        <p className="eyebrow">{plannerHero.eyebrow}</p>
        <h1 className="mt-4 font-heading text-[3.45rem] leading-[0.92] tracking-normal text-foreground lg:text-[5.8rem]">
          {plannerHero.title}
        </h1>
        <p className="body-copy mx-auto mt-6 max-w-xl">{plannerHero.description}</p>
      </div>
    </section>
  );
}
