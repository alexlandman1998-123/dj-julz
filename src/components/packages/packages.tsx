import Link from "next/link";

const packages = [
  {
    title: "Wedding DJ",
    description: "Ceremony, reception, and dance floor support.",
  },
  {
    title: "Corporate Events",
    description: "Professional sound and music for brand moments.",
  },
  {
    title: "Private Parties",
    description: "Birthdays, home events, and milestone celebrations.",
  },
  {
    title: "MC Services",
    description: "Simple event hosting and announcement support.",
  },
];

export function Packages() {
  return (
    <section id="packages" className="px-5 py-12">
      <div className="mx-auto max-w-md">
        <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Packages
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-neutral-900">
          Choose a starting point.
        </h2>
        <div className="mt-6 grid gap-3">
          {packages.map((item) => (
            <details
              key={item.title}
              className="rounded-3xl border border-neutral-200 p-5"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-neutral-900">
                {item.title}
              </summary>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {item.description}
              </p>
              <Link
                href="#planner"
                className="mt-5 inline-block rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900"
              >
                Start enquiry
              </Link>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
