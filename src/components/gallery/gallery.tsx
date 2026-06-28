"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Reveal } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { warmBlurDataUrl } from "@/lib/image-placeholders";

const moments = [
  {
    title: "The reception feels effortless",
    src: "/images/generated/dj-setup-reception.jpg",
    alt: "DJ setup prepared for a warm wedding reception in Gauteng",
    position: "object-[58%_center]",
  },
  {
    title: "Ceremony music arrives on cue",
    src: "/images/generated/ceremony-setup.jpg",
    alt: "Ceremony music setup prepared before guests arrive",
    position: "object-[68%_center]",
  },
  {
    title: "Professional sound for formal rooms",
    src: "/images/generated/corporate-event.jpg",
    alt: "Polished event music setup for a corporate function",
    position: "object-[50%_center]",
  },
  {
    title: "A clean setup for refined venues",
    src: "/images/generated/dj-behind-decks.jpg",
    alt: "Professional DJ controller and event sound setup",
    position: "object-[74%_center]",
  },
  {
    title: "Prepared before guests arrive",
    src: "/images/generated/wedding-first-dance.jpg",
    alt: "Behind the scenes preparation before a private celebration",
    position: "object-[40%_center]",
  },
  {
    title: "Music shaped around your people",
    src: "/images/generated/private-dancefloor.jpg",
    alt: "Private celebration atmosphere with DJ lighting and guests",
    position: "object-[62%_center]",
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const activeMoment = selected === null ? null : moments[selected];

  const closeLightbox = useCallback(() => {
    setSelected(null);
  }, []);

  const goTo = useCallback((direction: 1 | -1) => {
    setSelected((current) => {
      if (current === null) {
        return current;
      }

      return (current + direction + moments.length) % moments.length;
    });
  }, []);

  useEffect(() => {
    if (selected === null) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        goTo(1);
      }

      if (event.key === "ArrowLeft") {
        goTo(-1);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeLightbox, goTo, selected]);

  return (
    <section id="gallery" className="section-spacing bg-surface px-5 lg:px-8">
      <div className="mx-auto max-w-md lg:max-w-6xl">
        <Reveal className="lg:max-w-3xl">
          <p className="eyebrow">Atmosphere</p>
          <h2 className="section-title mt-3">Every room has its own rhythm.</h2>
          <p className="body-copy mt-5">
            The best event music does not fight for attention. It supports the ceremony,
            warms the room, gives guests confidence and knows when to lift the energy.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-6 lg:gap-4">
          {moments.map((moment, index) => (
            <motion.button
              key={moment.title}
              type="button"
              aria-label={`Open ${moment.title} image`}
              onClick={() => setSelected(index)}
              initial={reduceMotion ? false : { opacity: 1, y: 14, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileTap={reduceMotion ? undefined : { scale: 0.975 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.035 }}
              className={`group relative overflow-hidden rounded-[1.35rem] border border-border bg-surface-strong outline-none focus-visible:ring-3 focus-visible:ring-ring/35 ${
                index === 0 || index === 5 ? "aspect-[4/5]" : "aspect-square"
              }`}
            >
              <Image
                src={moment.src}
                alt={moment.alt}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 190px, 16vw"
                className={`object-cover transition-transform duration-500 ease-[var(--ease-premium)] group-hover:scale-[1.03] ${moment.position}`}
                placeholder="blur"
                blurDataURL={warmBlurDataUrl}
              />
              <span className="absolute inset-x-3 bottom-3 rounded-full bg-white/90 px-3 py-2 text-left text-xs font-semibold text-foreground">
                {moment.title}
              </span>
            </motion.button>
          ))}
        </div>
        <Button asChild variant="outline" className="mt-7 w-full lg:w-auto lg:px-10">
          <Link href="#planner">Create Your Perfect Playlist</Link>
        </Button>
      </div>
      <AnimatePresence>
        {activeMoment ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-foreground/85 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeMoment.title} gallery image`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative w-full max-w-md"
              initial={reduceMotion ? false : { opacity: 1, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              onPointerDown={(event) => setTouchStart(event.clientX)}
              onPointerUp={(event) => {
                if (touchStart === null) {
                  return;
                }

                const delta = event.clientX - touchStart;
                setTouchStart(null);

                if (Math.abs(delta) > 42) {
                  goTo(delta < 0 ? 1 : -1);
                }
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-surface">
                <Image
                  src={activeMoment.src}
                  alt={activeMoment.alt}
                  fill
                  sizes="100vw"
                  className={`object-cover ${activeMoment.position}`}
                  placeholder="blur"
                  blurDataURL={warmBlurDataUrl}
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 text-white">
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  aria-label="Previous image"
                  onClick={() => goTo(-1)}
                >
                  <ChevronLeft className="size-5" />
                </Button>
                <div className="text-center">
                  <p className="text-sm font-semibold">{activeMoment.title}</p>
                  <p className="text-xs text-white/70">
                    {(selected ?? 0) + 1} of {moments.length}
                  </p>
                </div>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  aria-label="Next image"
                  onClick={() => goTo(1)}
                >
                  <ChevronRight className="size-5" />
                </Button>
              </div>
              <Button
                type="button"
                size="icon"
                variant="secondary"
                aria-label="Close gallery"
                className="absolute right-3 top-3"
                onClick={closeLightbox}
              >
                <X className="size-5" />
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
