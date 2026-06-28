"use client";

import { motion, useReducedMotion } from "motion/react";

export function CurvedDivider() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="relative z-10 -mb-px h-14 overflow-hidden bg-surface lg:h-20"
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
    >
      <div className="absolute inset-x-[-14%] top-1 h-28 rounded-[0_0_50%_50%] bg-background lg:top-1 lg:h-36" />
    </motion.div>
  );
}
