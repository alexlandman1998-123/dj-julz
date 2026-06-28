"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

import { Reveal } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const reviews = [
  {
    quote:
      "Ceremony cues, reception flow and the first dance all need to feel calm, timed and personal.",
    name: "For wedding couples",
    event: "Ceremony to dance floor",
  },
  {
    quote:
      "The music should support the brand, keep the programme moving and never overpower the room.",
    name: "For corporate teams",
    event: "Awards, launches and functions",
  },
  {
    quote:
      "A private celebration needs flexibility: family favourites, guest energy and a DJ who can read the moment.",
    name: "For private hosts",
    event: "Birthdays and anniversaries",
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
    <section id="reviews" className="section-spacing px-5 lg:px-8">
      <Reveal className="mx-auto max-w-md lg:max-w-6xl">
        <p className="eyebrow">What matters</p>
        <h2 className="section-title mt-3">
          The details guests may not notice, but feel.
        </h2>
      </Reveal>
      <div
        className="mx-auto mt-8 max-w-md overflow-hidden lg:max-w-6xl"
        ref={emblaRef}
      >
        <div className="flex gap-4">
          {reviews.map((review, index) => (
            <motion.article
              key={`${review.name}-${review.event}`}
              className="interactive-card min-w-0 flex-[0_0_86%] p-6 lg:flex-[0_0_32%]"
              initial={reduceMotion ? false : { opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
            >
              <Quote className="size-7 text-sage" />
              <p className="mt-5 text-base leading-7 text-foreground">{review.quote}</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="caption">{review.event}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-5 flex max-w-md items-center justify-between lg:max-w-6xl">
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
