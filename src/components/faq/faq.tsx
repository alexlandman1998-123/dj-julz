const faqs = [
  "How far in advance should I book?",
  "Do you provide sound equipment?",
  "Can we request specific songs?",
  "Do you travel for events?",
];

export function FAQ() {
  return (
    <section id="faq" className="px-5 py-12">
      <div className="mx-auto max-w-md">
        <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-neutral-900">
          Common questions.
        </h2>
        <div className="mt-6 grid gap-3">
          {faqs.map((question) => (
            <details
              key={question}
              className="rounded-3xl border border-neutral-200 p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-neutral-900">
                {question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Placeholder answer for this wireframe phase.
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
