import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";

export function FAQ() {
  return (
    <Section id="faq">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <Heading
            eyebrow="FAQ"
            title="Clear answers before the first call."
            description="Reusable FAQ primitives keep the starter useful for the next premium service brand too."
          />
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
