import { MotionCard, Reveal } from "@/components/shared/motion";

const availability = [
  {
    month: "Wedding season",
    status: "Check early",
    tone: "bg-accent text-accent-foreground",
  },
  {
    month: "Corporate events",
    status: "Plan the brief",
    tone: "bg-surface-strong text-foreground",
  },
  {
    month: "Private celebrations",
    status: "Flexible dates",
    tone: "bg-primary text-primary-foreground",
  },
];

export function Availability() {
  return (
    <section id="availability" className="section-spacing bg-surface px-5">
      <div className="mx-auto max-w-md">
        <Reveal>
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
        <div className="mt-8 grid gap-3">
          {availability.map((item, index) => (
            <MotionCard
              key={item.month}
              className="flex items-center justify-between gap-4 p-5"
              delay={index * 0.05}
            >
              <p className="card-title">{item.month}</p>
              <p
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${item.tone}`}
              >
                <span className="size-1.5 rounded-full bg-current opacity-70" />
                {item.status}
              </p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
