"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { warmBlurDataUrl } from "@/lib/image-placeholders";

const easing = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-14 pt-24">
      <motion.div
        aria-hidden="true"
        className="absolute right-[-5rem] top-28 h-28 w-48 rounded-[2rem] border border-sage/20 bg-surface/60"
        initial={reduceMotion ? false : { opacity: 0, y: 10, rotate: 6 }}
        animate={
          reduceMotion
            ? { opacity: 1, rotate: 6 }
            : { opacity: 1, y: [0, -6, 0], rotate: 6 }
        }
        transition={
          reduceMotion
            ? { duration: 0.2 }
            : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[-4rem] top-[31rem] h-20 w-36 rounded-[1.75rem] border border-border bg-white/70"
        initial={reduceMotion ? false : { opacity: 0, y: -8, rotate: -8 }}
        animate={
          reduceMotion
            ? { opacity: 1, rotate: -8 }
            : { opacity: 1, y: [0, 5, 0], rotate: -8 }
        }
        transition={
          reduceMotion
            ? { duration: 0.2 }
            : { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="relative mx-auto max-w-md"
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.05,
            },
          },
        }}
      >
        <motion.p
          className="eyebrow"
          variants={{
            hidden: { opacity: 1, y: 12 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.45, ease: easing }}
        >
          Wedding & Event DJ
        </motion.p>
        <motion.h1
          className="hero-title mt-5"
          variants={{
            hidden: { opacity: 1, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.55, ease: easing }}
        >
          Music for moments that matter.
        </motion.h1>
        <motion.p
          className="body-copy mt-6"
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: easing }}
        >
          Calm, considered music direction for weddings, private celebrations and brand
          events where every transition should feel effortless.
        </motion.p>
        <motion.div
          className="mt-8 grid gap-3"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.45, ease: easing }}
        >
          <Button asChild size="lg" variant="sage">
            <Link href="#planner">
              Book Consultation <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#packages">View Packages</Link>
          </Button>
        </motion.div>
        <motion.div
          className="premium-card mt-8 overflow-hidden bg-surface"
          initial={false}
          animate={reduceMotion ? undefined : { y: [4, 0] }}
          transition={{ duration: 0.45, ease: easing }}
        >
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/dj-julz-hero-optimized.jpg"
              alt="Elegant private event DJ setup with warm lighting"
              fill
              priority
              fetchPriority="high"
              unoptimized
              sizes="(max-width: 640px) 90vw, 420px"
              className="object-cover object-[62%_center]"
              placeholder="blur"
              blurDataURL={warmBlurDataUrl}
            />
          </div>
        </motion.div>
        <motion.a
          href="#trust"
          className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full px-1 text-sm font-medium text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.45, ease: easing }}
        >
          Explore the experience{" "}
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="size-4" />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
