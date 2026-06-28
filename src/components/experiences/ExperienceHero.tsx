"use client";

import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { warmBlurDataUrl } from "@/lib/image-placeholders";

type ExperienceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function ExperienceHero({
  eyebrow,
  title,
  description,
  image,
}: ExperienceHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 64]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh overflow-hidden bg-primary pt-16 text-primary-foreground"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src={image}
          alt="DJ Julz preparing a premium event experience"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[58%_center]"
          placeholder="blur"
          blurDataURL={warmBlurDataUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/16 via-black/50 to-black/86" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-md flex-col justify-end px-6 pb-10 lg:max-w-6xl lg:px-8 lg:pb-16"
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
        }}
      >
        <motion.p
          className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/78"
          variants={{ hidden: { opacity: 1, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45, ease }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-4 max-w-[19rem] font-heading text-[4.2rem] leading-[0.88] tracking-normal text-white lg:max-w-4xl lg:text-[7rem]"
          variants={{ hidden: { opacity: 1, y: 14 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.55, ease }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-8 max-w-[18rem] text-sm leading-6 text-white/84 lg:max-w-md lg:text-base lg:leading-7"
          variants={{ hidden: { opacity: 1, y: 14 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.48, ease }}
        >
          {description}
        </motion.p>
        <motion.a
          href="#experience-selector"
          className="mt-16 inline-flex w-fit min-h-11 items-center gap-2 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/78 outline-none focus-visible:ring-3 focus-visible:ring-white/35"
          variants={{ hidden: { opacity: 1 }, visible: { opacity: 1 } }}
          transition={{ duration: 0.45, ease }}
        >
          Scroll
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
