import {
  ArrowRight,
  Building2,
  Clock,
  CreditCard,
  Heart,
  Lightbulb,
  MapPin,
  Mic2,
  PartyPopper,
  Sparkles,
  Volume2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { MotionCard, Reveal } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { warmBlurDataUrl } from "@/lib/image-placeholders";

const packages = [
  {
    title: "Essential Wedding Experience",
    price: "Starting from R6,500",
    description:
      "Designed for couples who want a calm, professional wedding DJ for the core moments of the day.",
    includes: [
      "Ceremony, cocktail hour and reception music planning",
      "Professional DJ service with venue-appropriate sound",
      "Timeline support for entrances, speeches and first dance",
      "Full setup and breakdown",
    ],
    icon: Heart,
    imagePosition: "object-[48%_center]",
  },
  {
    title: "Premium Wedding Experience",
    price: "Starting from R9,000",
    description:
      "A more elevated wedding experience with enhanced production for couples who want the room to feel beautifully finished.",
    includes: [
      "Everything in the Essential Wedding Experience",
      "Premium DJ booth presentation",
      "Enhanced dance floor lighting",
      "Atmosphere-led reception and party flow",
    ],
    icon: Sparkles,
    imagePosition: "object-[62%_center]",
  },
  {
    title: "Corporate Event Experience",
    price: "Starting from R4,000",
    description:
      "A polished music and sound solution for conferences, product launches, gala dinners, awards evenings and year-end functions.",
    includes: [
      "Professional DJ service",
      "Venue-appropriate sound system",
      "Wireless microphone",
      "Dance floor lighting and smoke machine",
      "Full setup and breakdown",
    ],
    icon: Building2,
    imagePosition: "object-[72%_center]",
  },
  {
    title: "Birthday & Private Celebration Experience",
    price: "Starting from R3,000",
    description:
      "Flexible music for milestone birthdays, engagements, anniversaries, family celebrations and private functions.",
    includes: [
      "Professional DJ service",
      "Venue-appropriate sound system",
      "Wireless microphone",
      "Dance floor lighting",
      "Full setup and breakdown",
    ],
    icon: PartyPopper,
    imagePosition: "object-[38%_center]",
  },
];

const enhancements = [
  {
    title: "First Dance Edit",
    description:
      "A clean, personal edit that helps your first dance feel intentional without running longer than it needs to.",
    icon: Heart,
  },
  {
    title: "Additional Wireless Microphone",
    description:
      "Useful for multiple speakers, ceremonies or larger rooms where clear voices matter.",
    icon: Mic2,
  },
  {
    title: "Premium DJ Booth",
    description:
      "A neater front-of-room presentation that keeps the setup aligned with a refined venue.",
    icon: Sparkles,
  },
  {
    title: "Ambient Venue Lighting",
    description:
      "Soft lighting that adds warmth to the room and helps the evening feel more considered.",
    icon: Lightbulb,
  },
  {
    title: "Enhanced Dance Floor Lighting",
    description:
      "Extra movement and energy for the party section while keeping the look tasteful.",
    icon: Sparkles,
  },
  {
    title: "Additional Venue Sound Coverage",
    description:
      "Recommended for larger venues, outdoor areas or spaces that need sound in more than one zone.",
    icon: Volume2,
  },
];

const bookingNotes = [
  {
    title: "Travel",
    description:
      "Pretoria, Johannesburg, Centurion, Midrand and surrounding Gauteng areas are quoted clearly. Longer-distance travel can be included once the venue is confirmed.",
    icon: MapPin,
  },
  {
    title: "Overtime",
    description:
      "If the celebration is still flowing, overtime can be discussed on the night where venue rules and availability allow.",
    icon: Clock,
  },
  {
    title: "Booking fee",
    description:
      "A booking fee secures the date, with the balance due before the event. Payment terms are confirmed in writing so there are no surprises.",
    icon: CreditCard,
  },
  {
    title: "Custom packages",
    description:
      "Larger venues, outdoor setups and multi-area sound needs can be quoted as a custom package after a short consultation.",
    icon: Volume2,
  },
];

export function Packages() {
  return (
    <section id="packages" className="section-spacing bg-surface px-5">
      <div className="mx-auto max-w-md">
        <Reveal>
          <p className="eyebrow">Experiences</p>
          <h2 className="section-title mt-3">Choose the service that fits the room.</h2>
          <p className="body-copy mt-5">
            Every quote is shaped around the venue, timing and guest experience. The
            starting points below make it easier to choose the right conversation.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5">
          {packages.map((item, index) => (
            <MotionCard
              key={item.title}
              className="overflow-hidden p-4"
              delay={index * 0.05}
            >
              <div className="grid grid-cols-[6rem_1fr] gap-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
                  <Image
                    src="/images/dj-julz-hero-optimized.jpg"
                    alt=""
                    fill
                    sizes="96px"
                    className={`object-cover ${item.imagePosition}`}
                    placeholder="blur"
                    blurDataURL={warmBlurDataUrl}
                  />
                  <div className="absolute -right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-white text-foreground shadow-sm">
                    <item.icon className="size-5" />
                  </div>
                </div>
                <div className="min-w-0 py-1">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-sage">
                    {item.price}
                  </p>
                  <p className="caption mt-2">{item.description}</p>
                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
                    {item.includes.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sage" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button asChild variant="ghost" className="mt-5 px-0 text-sage">
                <Link
                  href="#planner"
                  data-analytics={`package_${item.title.toLowerCase().replace(/\s+/g, "_")}`}
                >
                  Enquire about this experience <ArrowRight className="size-4" />
                </Link>
              </Button>
            </MotionCard>
          ))}
        </div>
        <Reveal className="mt-12">
          <p className="eyebrow">Enhancements</p>
          <h3 className="section-title mt-3">
            Small details that lift the experience.
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-3">
          {enhancements.map((item, index) => (
            <MotionCard key={item.title} className="p-5" delay={index * 0.035}>
              <div className="flex gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <item.icon className="size-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="caption mt-1">{item.description}</p>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
        <Reveal className="mt-12">
          <p className="eyebrow">Good to know</p>
          <h3 className="section-title mt-3">Clear details before you book.</h3>
        </Reveal>
        <div className="mt-6 grid gap-3">
          {bookingNotes.map((item, index) => (
            <MotionCard key={item.title} className="p-5" delay={index * 0.035}>
              <div className="flex gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white text-sage">
                  <item.icon className="size-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="caption mt-1">{item.description}</p>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
