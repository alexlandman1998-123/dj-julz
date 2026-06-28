"use client";

import { Heart, Music2, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const easing = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    icon: ShieldCheck,
    title: "Professional & Reliable",
    description: "You can count on me to arrive early, prepared and ready to deliver.",
  },
  {
    icon: Music2,
    title: "Customised For You",
    description: "Every event is different. Every playlist is tailored to your crowd.",
  },
  {
    icon: Heart,
    title: "Your Day, Your Way",
    description:
      "Helping create unforgettable memories from the first song to the final dance.",
  },
] as const;

export function HeroTrustCards() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative z-20 bg-background px-5 pb-8 lg:px-8 lg:pb-6">
      <motion.div
        className="mx-auto -mt-10 grid max-w-md gap-3 rounded-[1.25rem] border border-border bg-white/94 p-3 shadow-[0_20px_64px_rgb(24_24_27_/_0.07)] backdrop-blur-xl lg:-mt-[4.5rem] lg:max-w-[calc(100vw-4rem)] lg:grid-cols-3 lg:gap-0 lg:rounded-[1.35rem] lg:p-0 xl:max-w-[calc(100vw-8rem)]"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            className="grid gap-4 rounded-[1.15rem] border border-border bg-white p-5 lg:grid-cols-[4.75rem_1fr] lg:items-center lg:gap-5 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-8 lg:not-last:border-r lg:not-last:border-border"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.42, ease: easing, delay: index * 0.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.99 }}
          >
            <div className="grid size-14 place-items-center rounded-full border border-border bg-surface text-sage lg:size-16">
              <card.icon className="size-7" aria-hidden />
            </div>
            <div>
              <h2 className="font-heading text-2xl leading-none tracking-normal text-foreground lg:text-[1.7rem]">
                {card.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {card.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
