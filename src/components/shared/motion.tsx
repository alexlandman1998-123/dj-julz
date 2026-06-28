"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 1, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants: Variants = {
  hidden: { opacity: 1, y: 16, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -80px 0px" }}
      variants={revealVariants}
      transition={{ duration: 0.5, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({
  children,
  className,
  delay = 0,
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={cn("interactive-card", className)}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      viewport={{ once: true, amount: 0.25 }}
      variants={cardVariants}
      transition={{ duration: 0.45, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
