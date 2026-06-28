import { ArrowRight, LockKeyhole } from "lucide-react";

import { Button } from "@/components/ui/button";

type MobileStickyFooterProps = {
  canContinue: boolean;
  isLastStep: boolean;
  isSubmitting: boolean;
  onContinue: () => void;
};

export function MobileStickyFooter({
  canContinue,
  isLastStep,
  isSubmitting,
  onContinue,
}: MobileStickyFooterProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 px-5 py-4 backdrop-blur-xl lg:hidden">
      <Button
        type="button"
        variant="sage"
        size="lg"
        disabled={!canContinue || isSubmitting}
        loading={isSubmitting}
        onClick={onContinue}
        className="w-full"
      >
        {isLastStep ? "Send Event Plan" : "Continue"}
        <ArrowRight className="size-4" />
      </Button>
      <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <LockKeyhole className="size-3.5" />
        Your details are safe and secure.
      </p>
    </div>
  );
}
