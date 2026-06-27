import { ArrowRight, Building2, Heart, Mic2, PartyPopper } from "lucide-react";
import Link from "next/link";

import { MotionCard, Reveal } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";

const packages = [
  {
    title: "Wedding DJ",
    description:
      "A complete music plan for ceremonies, canapes, dinner, formalities and the dance floor.",
    includes: [
      "Timeline planning",
      "Must-play guidance",
      "Reception and dance-floor set",
    ],
    icon: Heart,
  },
  {
    title: "Corporate Events",
    description:
      "A professional soundtrack for awards evenings, launches, year-end functions and client events.",
    includes: ["Brief alignment", "Background music", "Announcements support"],
    icon: Building2,
  },
  {
    title: "Private Parties",
    description:
      "Personal, guest-aware music for birthdays, anniversaries and milestone celebrations.",
    includes: ["Crowd reading", "Playlist direction", "Flexible party flow"],
    icon: PartyPopper,
  },
  {
    title: "MC Services",
    description:
      "Clear, relaxed hosting for formal moments where the programme needs a steady voice.",
    includes: ["Formal introductions", "Schedule cues", "Supplier coordination"],
    icon: Mic2,
  },
];

export function Packages() {
  return (
    <section id="packages" className="section-spacing bg-surface px-5">
      <div className="mx-auto max-w-md">
        <Reveal>
          <p className="eyebrow">Packages</p>
          <h2 className="section-title mt-3">Services shaped around the event.</h2>
        </Reveal>
        <div className="mt-8 grid gap-4">
          {packages.map((item, index) => (
            <MotionCard key={item.title} className="p-5" delay={index * 0.05}>
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <h3 className="card-title">{item.title}</h3>
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
                  Start enquiry <ArrowRight className="size-4" />
                </Link>
              </Button>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
