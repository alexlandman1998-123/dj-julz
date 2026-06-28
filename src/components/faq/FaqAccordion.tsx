"use client";

import { motion, useReducedMotion } from "motion/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const reduceMotion = useReducedMotion();

  return (
    <Accordion type="single" defaultValue={faqs[0]?.question} className="gap-3">
      {faqs.map((item, index) => (
        <motion.div
          key={item.question}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{
            duration: 0.34,
            delay: index * 0.025,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <AccordionItem
            value={item.question}
            className="overflow-hidden rounded-[1.15rem] border border-border bg-white shadow-[0_10px_30px_rgb(24_24_27_/_0.035)] transition-colors data-[state=open]:border-sage/40"
          >
            <AccordionTrigger
              className={cn(
                "min-h-16 gap-5 px-5 py-5 text-left text-base leading-6 font-semibold hover:no-underline focus-visible:ring-ring/35",
                "data-[state=open]:text-foreground",
              )}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5 text-[0.96rem] leading-7 text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}
