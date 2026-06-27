const months = [
  { month: "September", status: "Available" },
  { month: "October", status: "Limited" },
  { month: "November", status: "Booking Fast" },
];

export function Availability() {
  return (
    <section id="availability" className="px-5 py-12">
      <div className="mx-auto max-w-md">
        <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Availability
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-neutral-900">
          Upcoming booking status.
        </h2>
        <div className="mt-6 grid gap-3">
          {months.map((item) => (
            <div
              key={item.month}
              className="flex items-center justify-between rounded-3xl bg-neutral-100 p-5"
            >
              <p className="font-semibold text-neutral-900">{item.month}</p>
              <p className="text-sm text-neutral-600">{item.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
