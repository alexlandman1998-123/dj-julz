"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { warmBlurDataUrl } from "@/lib/image-placeholders";

const easing = [0.22, 1, 0.36, 1] as const;

export function HeroImage() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative z-0 mt-10 -mx-6 h-[24rem] overflow-hidden rounded-tr-[1.75rem] sm:h-[28rem] lg:absolute lg:inset-y-0 lg:left-[41%] lg:right-[calc(50%-50vw)] lg:mt-0 lg:h-auto lg:rounded-tr-[2.75rem]"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.72, ease: easing, delay: 0.18 }}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.15, ease: easing, delay: 0.24 }}
      >
        <Image
          src="/images/generated/dj-setup-reception.jpg"
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_48%,rgb(250_250_248_/_0)_0%,rgb(250_250_248_/_0.12)_44%,rgb(250_250_248_/_0.46)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(250_250_248_/_0.08)_0%,rgb(250_250_248_/_0)_36%,rgb(250_250_248_/_0.82)_100%)] lg:bg-[linear-gradient(90deg,rgb(250_250_248)_0%,rgb(250_250_248_/_0.86)_18%,rgb(250_250_248_/_0.34)_38%,rgb(250_250_248_/_0.04)_62%)]" />
      <div className="absolute inset-y-0 left-0 hidden w-28 backdrop-blur-[2px] lg:block" />
    </motion.div>
  );
}
