import type { UseFormReturn } from "react-hook-form";

import { OptionCard } from "@/components/planner/OptionCard";
import {
  corporateEventTypes,
  privateAtmospheres,
  weddingExperiences,
  weddingMusicParts,
} from "@/data/planner";
import type { PlanEventValues } from "@/lib/plan-event-schema";

type ConditionalStepsProps = {
  form: UseFormReturn<PlanEventValues>;
};

export function ConditionalSteps({ form }: ConditionalStepsProps) {
  const eventType = form.watch("eventType");
  const selectedParts = form.watch("weddingMusicParts");
  const weddingExperience = form.watch("weddingExperience");
  const corporateEventType = form.watch("corporateEventType");
  const needsMicrophones = form.watch("needsMicrophones");
  const privateAtmosphere = form.watch("privateAtmosphere");

  function toggleArray(field: "weddingMusicParts", option: string) {
    const current = form.getValues(field);
    form.setValue(
      field,
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
      { shouldDirty: true, shouldValidate: true },
    );
  }

  if (eventType === "wedding") {
    return (
      <div className="grid gap-8">
        <div>
          <h3 className="text-sm font-bold text-foreground">
            Which parts of the day need music?
          </h3>
          <div className="mt-4 grid gap-3 lg:grid-cols-4">
            {weddingMusicParts.map((option) => (
              <OptionCard
                key={option}
                label={option}
                selected={selectedParts.includes(option)}
                onClick={() => toggleArray("weddingMusicParts", option)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-foreground">
            Which experience interests you?
          </h3>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            {weddingExperiences.map((option) => (
              <OptionCard
                key={option}
                label={option}
                selected={weddingExperience === option}
                onClick={() =>
                  form.setValue("weddingExperience", option, {
                    shouldDirty: true,
                    shouldValidate: true,
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (eventType === "corporate") {
    return (
      <div className="grid gap-8">
        <div>
          <h3 className="text-sm font-bold text-foreground">What type of event?</h3>
          <div className="mt-4 grid gap-3 lg:grid-cols-5">
            {corporateEventTypes.map((option) => (
              <OptionCard
                key={option}
                label={option}
                selected={corporateEventType === option}
                onClick={() =>
                  form.setValue("corporateEventType", option, {
                    shouldDirty: true,
                    shouldValidate: true,
                  })
                }
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">Need microphones?</h3>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            {["Yes", "No"].map((option) => (
              <OptionCard
                key={option}
                label={option}
                selected={needsMicrophones === option}
                onClick={() =>
                  form.setValue("needsMicrophones", option, {
                    shouldDirty: true,
                    shouldValidate: true,
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (eventType === "private") {
    return (
      <div className="grid gap-3 lg:grid-cols-5">
        {privateAtmospheres.map((option) => (
          <OptionCard
            key={option}
            label={option}
            selected={privateAtmosphere === option}
            onClick={() =>
              form.setValue("privateAtmosphere", option, {
                shouldDirty: true,
                shouldValidate: true,
              })
            }
          />
        ))}
      </div>
    );
  }

  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-foreground">
        Tell us about your event.
      </span>
      <textarea
        className="min-h-40 rounded-2xl border border-border bg-white px-4 py-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sage focus:ring-3 focus:ring-ring/25"
        placeholder="Share the occasion, venue style, timings or anything helpful."
        {...form.register("otherDetails")}
      />
    </label>
  );
}
