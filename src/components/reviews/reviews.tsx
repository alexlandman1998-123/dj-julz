const reviews = [
  {
    quote: "Placeholder review about the dance floor and planning experience.",
    name: "Client Name",
    event: "Wedding",
  },
  {
    quote: "Placeholder review about professionalism and great music flow.",
    name: "Client Name",
    event: "Corporate Event",
  },
  {
    quote: "Placeholder review about making the event feel memorable.",
    name: "Client Name",
    event: "Private Party",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="px-5 py-12">
      <div className="mx-auto max-w-md">
        <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Reviews
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-neutral-900">
          What clients say.
        </h2>
      </div>
      <div className="mx-auto mt-6 flex max-w-md gap-3 overflow-x-auto pb-2">
        {reviews.map((review) => (
          <article
            key={`${review.name}-${review.event}`}
            className="min-w-72 rounded-3xl border border-neutral-200 p-5"
          >
            <p className="text-sm text-neutral-900">★★★★★</p>
            <p className="mt-4 text-sm leading-6 text-neutral-600">“{review.quote}”</p>
            <p className="mt-5 font-semibold text-neutral-900">{review.name}</p>
            <p className="text-sm text-neutral-500">{review.event}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
