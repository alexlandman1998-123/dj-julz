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
    image: "/images/generated/wedding-first-dance.jpg",
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
    image: "/images/generated/dj-setup-reception.jpg",
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
    image: "/images/generated/corporate-event.jpg",
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
    image: "/images/generated/private-dancefloor.jpg",
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

function getExperienceId(title: string) {
  return `experience-${title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

export function Packages() {
  return (
    <section id="packages" className="section-spacing bg-surface px-5 lg:px-8">
      <div className="mx-auto max-w-md lg:max-w-6xl">
        <Reveal className="lg:max-w-3xl">
          <p className="eyebrow">Experiences</p>
          <h2 className="section-title mt-3">Choose the service that fits the room.</h2>
          <p className="body-copy mt-5">
            Every quote is shaped around the venue, timing and guest experience. The
            starting points below make it easier to choose the right conversation.
          </p>
        </Reveal>
        <Reveal className="mt-8">
          <div className="-mx-5 overflow-x-auto px-5 pb-1 lg:mx-0 lg:px-0">
            <div className="flex min-w-max gap-3">
              {packages.map((item) => (
                <a
                  key={item.title}
                  href={`#${getExperienceId(item.title)}`}
                  className="inline-flex min-h-14 items-center gap-3 rounded-[0.85rem] border border-border bg-white px-4 text-[0.68rem] font-bold tracking-[0.14em] text-foreground uppercase shadow-[0_10px_28px_rgb(24_24_27_/_0.035)] outline-none transition-all duration-[var(--duration-fast)] ease-[var(--ease-premium)] hover:border-sage/40 focus-visible:ring-3 focus-visible:ring-ring/35"
                >
                  <span className="grid size-8 place-items-center rounded-full bg-accent text-sage">
                    <item.icon className="size-4" aria-hidden />
                  </span>
                  {item.title
                    .replace(" Experience", "")
                    .replace("Birthday & ", "")
                    .replace("Essential ", "")}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="-mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 scroll-smooth lg:mx-0 lg:gap-5 lg:px-0">
          {packages.map((item, index) => (
            <MotionCard
              key={item.title}
              id={getExperienceId(item.title)}
              className="min-w-[85vw] snap-start overflow-hidden p-0 sm:min-w-[24rem] lg:min-w-[28rem] xl:min-w-[30rem]"
              delay={index * 0.05}
            >
              <div className="relative aspect-[1.45/1] overflow-hidden bg-surface">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 85vw, 30rem"
                  className={`object-cover ${item.imagePosition}`}
                  placeholder="blur"
                  blurDataURL={warmBlurDataUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/6 via-black/20 to-black/64" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                  <div>
                    <p className="text-[0.68rem] font-bold tracking-[0.16em] text-white/66 uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-heading text-[2.55rem] leading-[0.9] tracking-normal">
                      {item.title.replace(" Experience", "")}
                    </h3>
                  </div>
                  <div className="grid size-13 shrink-0 place-items-center rounded-full border border-white/28 bg-white/92 text-foreground shadow-sm">
                    <item.icon className="size-5" aria-hidden />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div>
                  <p className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-sage">
                    {item.price}
                  </p>
                  <p className="caption mt-3">{item.description}</p>
                </div>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground">
                  {item.includes.slice(0, 3).map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sage" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="ghost" className="mt-5 px-0 text-sage">
                  <Link
                    href="#planner"
                    data-analytics={`package_${item.title.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    Enquire about this experience <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </MotionCard>
          ))}
        </div>
        <div className="mt-1 hidden items-center gap-3 lg:flex" aria-hidden="true">
          <span className="h-px flex-1 bg-border" />
          <p className="text-[0.65rem] font-bold tracking-[0.18em] text-muted-foreground uppercase">
            Scroll to compare
          </p>
          <ArrowRight className="size-4 text-sage" />
        </div>
        <Reveal className="mt-12">
          <p className="eyebrow">Enhancements</p>
          <h3 className="section-title mt-3">
            Small details that lift the experience.
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-3 lg:grid-cols-3">
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
        <div className="mt-6 grid gap-3 lg:grid-cols-4">
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
