import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type OptionCardProps = {
  label: string;
  description?: string;
  icon?: LucideIcon;
  selected: boolean;
  onClick: () => void;
};

export function OptionCard({
  label,
  description,
  icon: Icon,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "group flex min-h-20 items-center gap-4 rounded-[1.15rem] border bg-white p-4 text-left outline-none transition-all duration-[var(--duration-base)] ease-[var(--ease-premium)] hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-ring/35 active:scale-[0.985] lg:block lg:min-h-40 lg:text-center",
        selected
          ? "border-sage bg-accent text-accent-foreground shadow-[0_18px_44px_rgb(24_24_27_/_0.07)]"
          : "border-border text-foreground hover:border-sage/40",
      )}
    >
      {Icon ? <Icon className="size-5 shrink-0 text-sage lg:mx-auto lg:mb-5" /> : null}
      <span className="block min-w-0">
        <span className="block text-sm font-bold lg:text-lg">{label}</span>
        {description ? (
          <span className="mt-1 block text-xs leading-5 text-muted-foreground lg:text-sm lg:leading-6">
            {description}
          </span>
        ) : null}
      </span>
    </button>
  );
}
