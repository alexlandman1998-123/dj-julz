import { motion } from "motion/react";

import { plannerSteps } from "@/data/planner";
import { cn } from "@/lib/utils";

type ProgressHeaderProps = {
  step: number;
};

export function ProgressHeader({ step }: ProgressHeaderProps) {
  const percentage = Math.round(((step + 1) / plannerSteps.length) * 100);

  return (
    <div className="border-b border-border bg-white p-5 lg:p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-bold text-foreground">
          Step {step + 1} of {plannerSteps.length}
        </p>
        <p className="text-sm text-muted-foreground lg:hidden">{percentage}%</p>
        <p className="hidden text-sm text-muted-foreground lg:block">
          {percentage}% complete
        </p>
      </div>

      <div className="mt-5 lg:hidden">
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-sage"
            initial={false}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <div className="mt-7 hidden items-center lg:flex">
        {plannerSteps.map((label, index) => {
          const active = index <= step;

          return (
            <div key={label} className="flex flex-1 items-center last:flex-none">
              <span
                className={cn(
                  "grid size-10 shrink-0 place-items-center rounded-full border text-sm font-semibold transition-colors",
                  active
                    ? "border-sage bg-sage text-white"
                    : "border-border bg-white text-muted-foreground",
                )}
              >
                {index + 1}
              </span>
              {index < plannerSteps.length - 1 ? (
                <span
                  className={cn(
                    "mx-2 h-px flex-1",
                    index < step ? "bg-sage/65" : "bg-border",
                  )}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
