"use client";

import { ArrowRight, CalendarDays } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const easing = [0.22, 1, 0.36, 1] as const;

const lineVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function HeroContent() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative z-10 lg:max-w-[34rem] lg:pt-14"
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: 0.08,
            staggerChildren: 0.075,
          },
        },
      }}
    >
      <motion.p
        className="eyebrow"
        variants={lineVariants}
        transition={{ duration: 0.42, ease: easing }}
      >
        Wedding DJ Pretoria & Gauteng
      </motion.p>

      <h1 className="mt-5 font-heading text-[4.75rem] leading-[0.88] tracking-normal text-balance text-foreground sm:text-[5.5rem] lg:text-[6.65rem] lg:leading-[0.86]">
        {["Music for", "moments"].map((line) => (
          <motion.span
            key={line}
            className="block"
            variants={lineVariants}
            transition={{ duration: 0.58, ease: easing }}
          >
            {line}
          </motion.span>
        ))}
        <motion.span
          className="block text-sage italic"
          variants={lineVariants}
          transition={{ duration: 0.58, ease: easing }}
        >
          that matter.
        </motion.span>
      </h1>

      <motion.p
        className="mt-6 max-w-[21rem] text-base leading-7 text-muted-foreground sm:max-w-[27rem] lg:max-w-[30rem] lg:text-lg lg:leading-8"
        variants={lineVariants}
        transition={{ duration: 0.48, ease: easing }}
      >
        Premium wedding, corporate and private event DJ services across Pretoria and
        Gauteng. Thoughtfully planned from the first song to the last dance.
      </motion.p>

      <motion.div
        className="mt-9 grid gap-4 sm:grid-cols-2 lg:max-w-[31rem]"
        variants={lineVariants}
        transition={{ duration: 0.42, ease: easing }}
      >
        <Button asChild size="lg" variant="primary" className="h-[3.65rem] w-full">
          <Link href="/plan" data-analytics="hero_check_my_date">
            <CalendarDays className="size-4" aria-hidden />
            Check My Date
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-[3.65rem] w-full border-foreground/18 bg-white/78 backdrop-blur hover:bg-white"
        >
          <Link href="/experiences" data-analytics="hero_explore_experiences">
            Explore Experiences
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
