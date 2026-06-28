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
      className="sticky top-16 z-30 border-b border-border bg-white/92 px-5 py-4 backdrop-blur-xl lg:top-20 lg:px-8"
    >
      <div className="mx-auto max-w-md lg:max-w-6xl">
        <p className="eyebrow">{experienceSections.selector.eyebrow}</p>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {experiences.map((experience) => {
            const active = experience.id === selectedId;

            return (
              <button
                key={experience.id}
                type="button"
                onClick={() => onSelect(experience.id)}
                className={cn(
                  "relative grid min-h-16 min-w-[5.25rem] place-items-center rounded-2xl border px-3 text-[0.65rem] font-bold uppercase tracking-[0.08em] outline-none transition-all duration-[var(--duration-base)] ease-[var(--ease-premium)] focus-visible:ring-3 focus-visible:ring-ring/35 active:scale-[0.98]",
                  active
                    ? "border-sage bg-accent text-accent-foreground shadow-[0_12px_30px_rgb(24_24_27_/_0.06)]"
                    : "border-border bg-white text-foreground hover:border-sage/40",
                )}
                aria-pressed={active}
              >
                <experience.icon className="mb-2 size-4 text-sage" />
                {experience.label}
                {active ? (
                  <span className="absolute -bottom-[0.28rem] h-1 w-9 rounded-full bg-sage" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
