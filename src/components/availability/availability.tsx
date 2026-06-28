import { MotionCard, Reveal } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

const days = [
  { day: "M", date: "2" },
  { day: "T", date: "3" },
  { day: "W", date: "4" },
  { day: "T", date: "5" },
  { day: "F", date: "6" },
  { day: "S", date: "7", status: "available" },
  { day: "S", date: "8" },
  { day: "M", date: "9" },
  { day: "T", date: "10" },
  { day: "W", date: "11" },
  { day: "T", date: "12" },
  { day: "F", date: "13" },
  { day: "S", date: "14", status: "limited" },
  { day: "S", date: "15" },
  { day: "M", date: "16" },
  { day: "T", date: "17" },
  { day: "W", date: "18" },
  { day: "T", date: "19" },
  { day: "F", date: "20" },
  { day: "S", date: "21", status: "available" },
  { day: "S", date: "22" },
  { day: "M", date: "23" },
  { day: "T", date: "24" },
  { day: "W", date: "25" },
  { day: "T", date: "26" },
  { day: "F", date: "27" },
  { day: "S", date: "28", status: "booked" },
  { day: "S", date: "29" },
];

export function Availability() {
  return (
    <section id="availability" className="section-spacing bg-surface px-5 lg:px-8">
      <div className="mx-auto max-w-md lg:grid lg:max-w-6xl lg:grid-cols-[0.8fr_1fr] lg:items-start lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <p className="eyebrow">Availability</p>
          <h2 className="section-title mt-3">
            The best dates are easier when you ask early.
          </h2>
          <p className="body-copy mt-5">
            Share your date, venue and guest count first. If the date is open, DJ Julz
            can recommend the right experience and any sound additions your venue may
            need.
          </p>
        </Reveal>
        <MotionCard className="mt-8 p-5 lg:mt-0 lg:p-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-foreground">
              Availability preview
            </p>
            <p className="caption">Next dates</p>
          </div>
          <div className="mt-5 grid grid-cols-7 gap-2 text-center text-xs">
            {days.slice(0, 7).map((item) => (
              <p key={item.day + item.date} className="font-semibold text-foreground">
                {item.day}
              </p>
            ))}
            {days.map((item) => (
              <span
                key={item.date}
                className={cn(
                  "grid aspect-square place-items-center rounded-full text-sm text-foreground",
                  item.status === "available" && "bg-sage text-white",
                  item.status === "limited" && "bg-[#ecd39b] text-foreground",
                  item.status === "booked" && "bg-[#e8b2ae] text-foreground",
                )}
              >
                {item.date}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
            {[
              ["bg-sage", "Available"],
              ["bg-[#ecd39b]", "Limited"],
              ["bg-[#e8b2ae]", "Booked"],
            ].map(([tone, label]) => (
              <span key={label} className="inline-flex items-center gap-2">
                <span className={`size-2.5 rounded-full ${tone}`} />
                {label}
              </span>
            ))}
          </div>
        </MotionCard>
      </div>
    </section>
  );
}
