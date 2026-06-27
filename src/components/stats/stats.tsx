const stats = [
  { value: "350+", label: "Events shaped" },
  { value: "200+", label: "Weddings supported" },
  { value: "12", label: "Years experience" },
  { value: "5★", label: "Client reviews" },
];

export function Stats() {
  return (
    <section id="trust" className="section-spacing bg-surface px-5">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="premium-card p-5">
            <p className="font-heading text-5xl leading-none text-foreground">
              {stat.value}
            </p>
            <p className="caption mt-3">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
