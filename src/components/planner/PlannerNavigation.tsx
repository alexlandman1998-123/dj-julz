import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type PlannerNavigationProps = {
  canGoBack: boolean;
  canContinue: boolean;
  isLastStep: boolean;
  isSubmitting: boolean;
  onBack: () => void;
  onContinue: () => void;
};

export function PlannerNavigation({
  canGoBack,
  canContinue,
  isLastStep,
  isSubmitting,
  onBack,
  onContinue,
}: PlannerNavigationProps) {
  return (
    <div className="hidden border-t border-border p-5 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-5">
      <Button
        type="button"
        variant="outline"
        size="lg"
        disabled={!canGoBack || isSubmitting}
        onClick={onBack}
      >
        <ArrowLeft className="size-4" />
        Previous
      </Button>
      <Button
        type="button"
        variant="sage"
        size="lg"
        disabled={!canContinue || isSubmitting}
        loading={isSubmitting}
        onClick={onContinue}
      >
        {isLastStep ? "Send Event Plan" : "Continue"}
        <ArrowRight className="size-4" />
      </Button>
    </div>
  );
}
