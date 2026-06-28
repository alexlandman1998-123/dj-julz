import type { UseFormReturn } from "react-hook-form";

import { Button } from "@/components/ui/button";
import type { PlanEventValues } from "@/lib/plan-event-schema";

type CalendarStepProps = {
  form: UseFormReturn<PlanEventValues>;
};

export function CalendarStep({ form }: CalendarStepProps) {
  const dateNotSure = form.watch("dateNotSure");

  return (
    <div className="grid gap-4">
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-foreground">Event date</span>
        <input
          type="date"
          disabled={dateNotSure}
          className="min-h-14 rounded-2xl border border-border bg-white px-4 text-base text-foreground outline-none transition-colors focus:border-sage focus:ring-3 focus:ring-ring/25 disabled:bg-muted disabled:text-muted-foreground"
          {...form.register("eventDate")}
        />
      </label>
      <Button
        type="button"
        variant={dateNotSure ? "sage" : "outline"}
        size="lg"
        onClick={() => {
          form.setValue("dateNotSure", !dateNotSure, { shouldDirty: true });
          if (!dateNotSure) {
            form.setValue("eventDate", "", { shouldDirty: true });
          }
        }}
        className="w-full"
      >
        I&apos;m not sure yet
      </Button>
    </div>
  );
}
