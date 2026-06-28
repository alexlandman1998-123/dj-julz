import { Reveal } from "@/components/shared/motion";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-white px-6 py-16 lg:px-8 lg:py-24">
      <Reveal className="mx-auto max-w-md lg:max-w-5xl">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-foreground">01</span>
          <p className="eyebrow">Philosophy</p>
        </div>
        <h2 className="mt-8 max-w-3xl font-sans text-[2.55rem] font-medium leading-[1.06] tracking-normal text-foreground lg:text-[4.8rem]">
          The best events aren&apos;t remembered because the music was loud.
        </h2>
        <p className="mt-6 max-w-3xl font-heading text-[2.25rem] italic leading-[1.02] text-sage lg:text-[4.6rem]">
          They&apos;re remembered because everything felt effortless.
        </p>
      </Reveal>
    </section>
  );
}
