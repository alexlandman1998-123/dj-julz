import { Reveal } from "@/components/shared/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function FAQ() {
  return (
    <section id="faq" className="section-spacing px-5 lg:px-8">
      <div className="mx-auto max-w-md lg:grid lg:max-w-6xl lg:grid-cols-[0.75fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-3">Clear answers before you enquire.</h2>
        </Reveal>
        <Accordion type="single" collapsible className="mt-8 grid gap-3 lg:mt-0">
          {faqs.slice(0, 6).map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="premium-card border-border px-5"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="caption pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
