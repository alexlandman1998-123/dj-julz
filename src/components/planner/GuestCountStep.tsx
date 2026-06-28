import type { UseFormReturn } from "react-hook-form";

import { OptionCard } from "@/components/planner/OptionCard";
import { guestOptions } from "@/data/planner";
import type { PlanEventValues } from "@/lib/plan-event-schema";

type GuestCountStepProps = {
  form: UseFormReturn<PlanEventValues>;
};

export function GuestCountStep({ form }: GuestCountStepProps) {
  const value = form.watch("guestCount");

  return (
    <div className="grid gap-3 lg:grid-cols-4">
      {guestOptions.map((option) => (
        <OptionCard
          key={option.value}
          label={option.label}
          description={option.description}
          selected={value === option.value}
          onClick={() =>
            form.setValue("guestCount", option.value, {
              shouldDirty: true,
              shouldValidate: true,
            })
          }
        />
      ))}
    </div>
  );
}
