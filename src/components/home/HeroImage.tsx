"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { warmBlurDataUrl } from "@/lib/image-placeholders";

const easing = [0.22, 1, 0.36, 1] as const;

export function HeroImage() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative z-0 lg:-mr-14 lg:ml-[-2rem]"
      initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.72, ease: easing, delay: 0.18 }}
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/35 shadow-[0_30px_90px_rgb(24_24_27_/_0.13)] lg:rounded-l-[2.4rem] lg:rounded-r-none">
        <div className="relative aspect-[1.08/1] sm:aspect-[1.35/1] lg:aspect-[1.18/1]">
          <motion.div
            className="absolute inset-0"
            initial={reduceMotion ? false : { scale: 1.02 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.1, ease: easing, delay: 0.24 }}
          >
            <Image
              src="/images/dj-julz-hero-optimized.jpg"
              alt="DJ equipment set up for a warm Pretoria wedding celebration"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-[62%_center]"
              placeholder="blur"
              blurDataURL={warmBlurDataUrl}
            />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(250_250_248_/_0)_45%,rgb(250_250_248_/_0.38)_100%)] lg:bg-[linear-gradient(90deg,rgb(250_250_248_/_0.92),rgb(250_250_248_/_0.44)_28%,rgb(250_250_248_/_0.02)_56%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(0deg,rgb(250_250_248_/_0.86),transparent)] lg:hidden" />
        </div>
      </div>
    </motion.div>
  );
}
