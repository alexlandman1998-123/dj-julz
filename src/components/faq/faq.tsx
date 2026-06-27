import { Reveal } from "@/components/shared/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "Three to six months is ideal for weddings and peak-season Gauteng dates. Shorter-notice enquiries are still welcome when availability allows.",
  },
  {
    question: "Do you provide sound equipment?",
    answer:
      "Sound and setup requirements are discussed during the consultation so the quote can match the venue, guest count and ceremony or reception needs.",
  },
  {
    question: "Can we request specific songs?",
    answer:
      "Yes. The planning process captures must-play songs, do-not-play notes, family favourites and the wider feeling you want for the room.",
  },
  {
    question: "Do you travel for events?",
    answer:
      "DJ Julz is based in Pretoria and serves Johannesburg, Centurion, Midrand and surrounding Gauteng areas. Travel outside Gauteng can be discussed.",
  },
  {
    question: "What happens after I send an enquiry?",
    answer:
      "You will receive a response about availability, event fit and the next planning step. Once the date and scope are clear, a tailored quote can be prepared.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-spacing px-5">
      <div className="mx-auto max-w-md">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-3">Common questions.</h2>
        </Reveal>
        <Accordion type="single" collapsible className="mt-8 grid gap-3">
          {faqs.map((item) => (
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
