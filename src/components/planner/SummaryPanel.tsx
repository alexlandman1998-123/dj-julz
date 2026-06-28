import { summaryItems } from "@/data/planner";
import type { PlanEventValues } from "@/lib/plan-event-schema";

type SummaryPanelProps = {
  values: PlanEventValues;
  onEdit: () => void;
};

const eventLabels: Record<PlanEventValues["eventType"], string> = {
  wedding: "Wedding",
  private: "Birthday / Private",
  corporate: "Corporate",
  other: "Other",
};

const guestLabels: Record<string, string> = {
  "under-50": "Under 50",
  "50-100": "50 - 100",
  "100-200": "100 - 200",
  "200-plus": "200+",
};

export function SummaryPanel({ values, onEdit }: SummaryPanelProps) {
  const summary: Record<(typeof summaryItems)[number]["key"], string> = {
    eventType: eventLabels[values.eventType],
    date: values.dateNotSure ? "Not sure yet" : values.eventDate || "Not set",
    location: values.venueNotConfirmed
      ? values.area || "Venue not confirmed"
      : [values.venueName, values.area].filter(Boolean).join(", ") || "Not set",
    guests: values.guestCount ? guestLabels[values.guestCount] : "Not set",
    music:
      values.eventType === "wedding" && values.weddingMusicParts.length
        ? values.weddingMusicParts.join(", ")
        : values.musicStyles.length
          ? values.musicStyles.join(", ")
          : "Not set",
    experience:
      values.eventType === "wedding"
        ? values.weddingExperience || "Not sure"
        : values.eventType === "corporate"
          ? values.corporateEventType || "Corporate Experience"
          : values.eventType === "private"
            ? values.privateAtmosphere || "Private Experience"
            : values.otherDetails || "Custom event",
    enhancements: values.enhancements.length
      ? values.enhancements.join(", ")
      : "Optional",
  };

  return (
    <aside className="rounded-[1.35rem] border border-border bg-white p-6 shadow-[0_20px_60px_rgb(24_24_27_/_0.055)] lg:sticky lg:top-28">
      <p className="eyebrow text-center">Your Event Plan</p>
      <div className="mt-6 divide-y divide-border">
        {summaryItems.map((item) => (
          <div key={item.key} className="flex gap-4 py-4 first:pt-0">
            <item.icon className="mt-1 size-5 shrink-0 text-sage" />
            <div>
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="mt-1 text-sm font-semibold leading-5 text-foreground">
                {summary[item.key]}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="mt-5 min-h-12 w-full rounded-[0.85rem] border border-border bg-surface text-[0.68rem] font-bold uppercase tracking-[0.16em] text-foreground outline-none transition-colors hover:bg-surface-strong focus-visible:ring-3 focus-visible:ring-ring/35"
      >
        Edit Answers
      </button>
    </aside>
  );
}
