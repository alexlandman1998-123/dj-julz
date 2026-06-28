import { type Experience, experienceSections } from "@/data/experiences";
import { cn } from "@/lib/utils";

type ExperienceSelectorProps = {
  experiences: Experience[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export function ExperienceSelector({
  experiences,
  selectedId,
  onSelect,
}: ExperienceSelectorProps) {
  return (
    <section
      id="experience-selector"
      className="sticky top-16 z-30 border-b border-border bg-white/92 px-5 py-4 backdrop-blur-xl lg:top-20 lg:px-8 lg:py-5"
    >
      <div className="mx-auto max-w-md lg:max-w-[calc(100vw-4rem)] xl:max-w-[calc(100vw-8rem)]">
        <p className="eyebrow lg:hidden">{experienceSections.selector.eyebrow}</p>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1 lg:mt-0 lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:pb-0">
          {experiences.map((experience) => {
            const active = experience.id === selectedId;

            return (
              <button
                key={experience.id}
                type="button"
                onClick={() => onSelect(experience.id)}
                className={cn(
                  "relative grid min-h-16 min-w-[5.25rem] place-items-center rounded-[0.8rem] border px-3 text-[0.65rem] font-bold uppercase tracking-[0.08em] outline-none transition-all duration-[var(--duration-base)] ease-[var(--ease-premium)] focus-visible:ring-3 focus-visible:ring-ring/35 active:scale-[0.98] lg:min-h-24 lg:min-w-0 lg:w-full lg:grid-cols-[3.5rem_1fr] lg:justify-items-start lg:gap-5 lg:px-8 lg:text-sm",
                  active
                    ? "border-sage bg-accent text-accent-foreground shadow-[0_12px_30px_rgb(24_24_27_/_0.06)]"
                    : "border-border bg-white text-foreground hover:border-sage/40",
                )}
                aria-pressed={active}
              >
                <span className="mb-2 text-sage lg:mb-0 lg:grid lg:size-12 lg:place-items-center lg:rounded-full lg:bg-surface">
                  <experience.icon className="size-4 lg:size-5" aria-hidden />
                </span>
                <span>{experience.label}</span>
                {active ? (
                  <span className="absolute -bottom-[0.28rem] h-1 w-9 rounded-full bg-sage lg:bottom-0 lg:left-8 lg:w-16" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
