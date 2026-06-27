const stats = [
  { value: "350+", label: "Events" },
  { value: "200+", label: "Weddings" },
  { value: "12", label: "Years Experience" },
  { value: "5★", label: "Reviews" },
];

export function Stats() {
  return (
    <section id="trust" className="px-5 py-10">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl bg-neutral-100 p-5">
            <p className="text-3xl font-semibold text-neutral-900">{stat.value}</p>
            <p className="mt-2 text-sm text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
