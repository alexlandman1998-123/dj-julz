"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

import { Reveal } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const reviews = [
  {
    quote:
      "Julz made the whole day feel easy. The ceremony, dinner and dance floor all had their own mood, and nothing ever felt rushed.",
    name: "Megan R.",
    event: "Pretoria Wedding",
  },
  {
    quote:
      "Professional, warm and completely prepared. The music supported our year-end event without overpowering the room.",
    name: "Daniel K.",
    event: "Corporate Function",
  },
  {
    quote:
      "Our guests still talk about the final hour. It felt personal, polished and incredibly easy from the first call to the last song.",
    name: "Aisha M.",
    event: "Milestone Birthday",
  },
];

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const reduceMotion = useReducedMotion();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="reviews" className="section-spacing px-5">
      <Reveal className="mx-auto max-w-md">
        <p className="eyebrow">Reviews</p>
        <h2 className="section-title mt-3">Trusted when the room matters.</h2>
      </Reveal>
      <div className="mx-auto mt-8 max-w-md overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {reviews.map((review, index) => (
            <motion.article
              key={`${review.name}-${review.event}`}
              className="interactive-card min-w-0 flex-[0_0_86%] p-6"
              initial={reduceMotion ? false : { opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
            >
              <Quote className="size-7 text-sage" />
              <div className="mt-5 flex gap-1 text-sage">
                <span className="sr-only">Five star rating</span>
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <Star key={starIndex} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-base leading-7 text-foreground">{review.quote}</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="caption">{review.event}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-5 flex max-w-md items-center justify-between">
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to review ${index + 1}`}
              onClick={() => scrollTo(index)}
              className="grid size-11 place-items-center rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
            >
              <span
                className={cn(
                  "h-2 rounded-full transition-all duration-200",
                  selectedIndex === index ? "w-6 bg-sage" : "w-2 bg-border",
                )}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            size="icon"
            variant="outline"
            aria-label="Previous review"
            onClick={scrollPrev}
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            aria-label="Next review"
            onClick={scrollNext}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
