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
      "Three to six months is ideal for weddings and peak-season dates, but enquiries are welcome whenever your plans begin to take shape.",
  },
  {
    question: "Do you provide sound equipment?",
    answer:
      "The booking process can include sound requirements, venue details and ceremony or reception support where needed.",
  },
  {
    question: "Can we request specific songs?",
    answer:
      "Yes. The planner is built to capture must-play moments, do-not-play notes and the wider feeling you want for the room.",
  },
  {
    question: "Do you travel for events?",
    answer:
      "Travel can be discussed during the consultation so the quote reflects the venue, schedule and setup requirements.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-spacing px-5">
      <div className="mx-auto max-w-md">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title mt-3">Common questions.</h2>
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
