"use client";

import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

const easing = [0.22, 1, 0.36, 1] as const;

type TrustItem = {
  icon: LucideIcon;
  label: string;
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function HeroTrustRow({ items }: { items: readonly TrustItem[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.ul
      className="mt-7 flex flex-wrap gap-x-0 gap-y-3 text-[0.72rem] font-bold tracking-[0.16em] text-muted-foreground uppercase"
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.045, delayChildren: 0.38 } },
      }}
    >
      {items.map((item, index) => (
        <motion.li
          key={item.label}
          variants={itemVariants}
          transition={{ duration: 0.34, ease: easing }}
          className="flex min-h-8 items-center"
        >
          {index > 0 ? (
            <span className="mx-3 hidden h-5 w-px bg-border sm:block" aria-hidden />
          ) : null}
          <span className="inline-flex items-center gap-2 rounded-full bg-white/54 px-3 py-2 backdrop-blur-sm sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
            <item.icon className="size-4 text-sage" aria-hidden />
            {item.label}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
