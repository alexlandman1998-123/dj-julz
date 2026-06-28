import { Reveal } from "@/components/shared/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How far do you travel?",
    answer:
      "DJ Julz is based in Pretoria and regularly serves Johannesburg, Centurion, Midrand and surrounding Gauteng areas. Travel outside Gauteng can be quoted once the venue and timings are clear.",
  },
  {
    question: "Can we request songs?",
    answer:
      "Yes. Your planning brief can include must-play songs, do-not-play notes, family favourites and the overall mood you want for each part of the event.",
  },
  {
    question: "Do you provide microphones?",
    answer:
      "A wireless microphone is included with corporate and private celebration experiences. Additional microphones can be added for ceremonies, panels or multiple speakers.",
  },
  {
    question: "Can DJ Julz MC our event?",
    answer:
      "Light MC support can be included for introductions, announcements and key transitions. If your programme needs full formal hosting, that can be discussed during the consultation.",
  },
  {
    question: "How do we secure our booking?",
    answer:
      "Once the date, venue and package are confirmed, a booking fee secures the date. The remaining balance and payment timing are confirmed in writing before the event.",
  },
  {
    question: "What happens if our event runs late?",
    answer:
      "Overtime can be arranged where the venue allows it and DJ Julz is available to continue. The rate and process are discussed upfront so the decision is simple on the night.",
  },
  {
    question: "Do you cater for outdoor venues?",
    answer:
      "Yes, provided the setup area has safe cover, reliable power and suitable access. Outdoor sound needs are reviewed before quoting so guests can hear clearly without the setup feeling excessive.",
  },
  {
    question: "What equipment do you provide?",
    answer:
      "Packages can include professional DJ equipment, venue-appropriate sound, wireless microphone, dance floor lighting and selected enhancements such as premium booth or additional sound coverage.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-spacing px-5 lg:px-8">
      <div className="mx-auto max-w-md lg:grid lg:max-w-6xl lg:grid-cols-[0.75fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-3">Clear answers before you enquire.</h2>
        </Reveal>
        <Accordion type="single" collapsible className="mt-8 grid gap-3 lg:mt-0">
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
