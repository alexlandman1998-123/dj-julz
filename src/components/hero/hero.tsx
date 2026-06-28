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
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-14 pt-24 lg:pb-16 lg:pt-28"
    >
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
        className="relative mx-auto max-w-md lg:grid lg:max-w-6xl lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.78fr)] lg:items-center lg:gap-16"
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
        <div className="lg:py-10">
          <motion.p
            className="eyebrow"
            variants={{
              hidden: { opacity: 1, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45, ease: easing }}
          >
            Wedding DJ Pretoria & Gauteng
          </motion.p>
          <motion.h1
            className="hero-title mt-5"
            variants={{
              hidden: { opacity: 1, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.55, ease: easing }}
          >
            Music for moments{" "}
            <span className="block text-sage italic">that matter.</span>
          </motion.h1>
          <motion.p
            className="body-copy mt-6 max-w-[20rem]"
            variants={{
              hidden: { opacity: 1, y: 14 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: easing }}
          >
            Premium wedding, corporate and private event DJ services in Pretoria and
            across Gauteng, planned with calm detail from the first song to the last
            dance.
          </motion.p>
          <motion.div
            className="mt-8 grid gap-3 lg:max-w-md"
            variants={{
              hidden: { opacity: 1, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45, ease: easing }}
          >
            <Button
              asChild
              size="lg"
              variant="primary"
              className="w-full bg-primary text-primary-foreground"
            >
              <Link href="#planner" data-analytics="book_consultation_hero">
                Check My Date <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full bg-white text-foreground"
            >
              <Link href="#packages">Explore Experiences</Link>
            </Button>
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4"
            variants={{
              hidden: { opacity: 1, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.42, ease: easing }}
          >
            <span className="hairline" />
            <div className="waveform">
              {[8, 14, 22, 12, 28, 40, 22, 34, 18, 26, 12, 8].map((height, index) => (
                <span key={index} style={{ height }} />
              ))}
            </div>
            <span className="hairline" />
          </motion.div>
        </div>
        <motion.div
          className="premium-card mt-8 overflow-hidden rounded-b-none bg-surface lg:mt-0 lg:rounded-[1.35rem]"
          initial={false}
          animate={reduceMotion ? undefined : { y: [4, 0] }}
          transition={{ duration: 0.45, ease: easing }}
        >
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/dj-julz-hero-optimized.jpg"
              alt="DJ Julz wedding and event DJ setup for a Gauteng celebration"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 38vw"
              className="object-cover object-[62%_center]"
              placeholder="blur"
              blurDataURL={warmBlurDataUrl}
            />
          </div>
        </motion.div>
        <motion.a
          href="#trust"
          className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full px-1 text-sm font-medium text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/35 lg:hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.45, ease: easing }}
        >
          See how the event comes together{" "}
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
