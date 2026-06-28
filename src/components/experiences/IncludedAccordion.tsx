import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type Experience, experienceSections } from "@/data/experiences";

type IncludedAccordionProps = {
  experience: Experience;
};

export function IncludedAccordion({ experience }: IncludedAccordionProps) {
  return (
    <section id="whats-included" className="bg-surface px-5 py-12 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-md lg:max-w-4xl">
        <p className="eyebrow">{experienceSections.included.eyebrow}</p>
        <h2 className="mt-4 font-heading text-[3.25rem] leading-[0.92] text-foreground">
          {experienceSections.included.title}
        </h2>
        <Accordion type="single" collapsible className="mt-8 gap-3">
          {experience.included.map((item, index) => (
            <AccordionItem
              key={item.title}
              value={`${experience.id}-${index}`}
              className="rounded-[1.15rem] border border-border bg-white px-5 py-2"
            >
              <AccordionTrigger className="items-center gap-4 py-4 hover:no-underline">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-sage">
                  <item.icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block text-sm font-bold text-foreground">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                    {experienceSections.included.collapsedHint}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-[3.75rem] text-sm leading-6 text-muted-foreground">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
