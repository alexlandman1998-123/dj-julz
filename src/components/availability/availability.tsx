const months = [
  { month: "September", status: "Available", tone: "bg-accent text-accent-foreground" },
  { month: "October", status: "Limited", tone: "bg-surface-strong text-foreground" },
  {
    month: "November",
    status: "Booking Fast",
    tone: "bg-primary text-primary-foreground",
  },
];

export function Availability() {
  return (
    <section id="availability" className="section-spacing bg-surface px-5">
      <div className="mx-auto max-w-md">
        <p className="eyebrow">Availability</p>
        <h2 className="section-title mt-3">Upcoming booking status.</h2>
        <div className="mt-8 grid gap-3">
          {months.map((item) => (
            <div
              key={item.month}
              className="premium-card flex items-center justify-between gap-4 p-5"
            >
              <p className="card-title">{item.month}</p>
              <p
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${item.tone}`}
              >
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
