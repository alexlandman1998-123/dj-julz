import { Quote, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "The whole night felt beautifully paced. Julz read the room perfectly and kept every moment calm before the dance floor opened.",
    name: "Megan R.",
    event: "Wedding",
  },
  {
    quote:
      "Professional, warm and completely prepared. The music supported the brand event without ever overpowering the room.",
    name: "Daniel K.",
    event: "Corporate Event",
  },
  {
    quote:
      "Our guests still talk about the final hour. It felt personal, polished and incredibly easy from the first call.",
    name: "Aisha M.",
    event: "Private Party",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="section-spacing px-5">
      <div className="mx-auto max-w-md">
        <p className="eyebrow">Reviews</p>
        <h2 className="section-title mt-3">Trusted when the room matters.</h2>
      </div>
      <div className="mx-auto mt-8 flex max-w-md gap-4 overflow-x-auto pb-3">
        {reviews.map((review) => (
          <article
            key={`${review.name}-${review.event}`}
            className="premium-card min-w-[19rem] p-6"
          >
            <Quote className="size-7 text-sage" />
            <div className="mt-5 flex gap-1 text-sage" aria-label="Five star rating">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} className="size-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-foreground">{review.quote}</p>
            <div className="mt-6 border-t border-border pt-4">
              <p className="font-semibold text-foreground">{review.name}</p>
              <p className="caption">{review.event}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
