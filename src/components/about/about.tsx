import { CheckCircle2, Headphones, UsersRound } from "lucide-react";
import Image from "next/image";

import { MotionCard, Reveal } from "@/components/shared/motion";
import { warmBlurDataUrl } from "@/lib/image-placeholders";

const reasons = [
  "Professional and reliable from the first enquiry to the final pack-down",
  "A tailored music experience shaped around your guests, venue and timeline",
  "Seamless coordination for ceremonies, speeches, formalities and dance floors",
  "Premium equipment selected to suit the room, not overwhelm it",
];

export function About() {
  return (
    <section id="about" className="section-spacing px-5 lg:px-8">
      <div className="mx-auto max-w-md lg:grid lg:max-w-6xl lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-16">
        <MotionCard className="overflow-hidden bg-surface">
          <div className="relative aspect-[5/4]">
            <Image
              src="/images/dj-julz-hero-optimized.jpg"
              alt="DJ booth prepared for a polished wedding reception in Gauteng"
              fill
              sizes="(max-width: 640px) 90vw, 420px"
              className="object-cover object-[70%_center]"
              placeholder="blur"
              blurDataURL={warmBlurDataUrl}
            />
          </div>
        </MotionCard>
        <Reveal className="mt-8 lg:mt-0">
          <p className="eyebrow">About DJ Julz</p>
          <h2 className="section-title mt-3">
            Music should make the whole event feel easier.
          </h2>
          <p className="body-copy mt-5">
            DJ Julz approaches every event like a host, not just a performer. The work
            starts with listening: the mood you want to create, the people in the room,
            the key transitions and the details that could easily be missed.
          </p>
          <p className="body-copy mt-4">
            That preparation is what allows the day to feel relaxed. Ceremony music
            lands on time, speeches move cleanly, dinner has the right atmosphere and
            the dance floor builds naturally when guests are ready.
          </p>
          <div className="premium-card mt-6 p-5 lg:p-6">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-accent text-accent-foreground">
                <UsersRound className="size-5" />
              </div>
              <h3 className="card-title">Why hosts choose DJ Julz</h3>
            </div>
            <ul className="mt-5 grid gap-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3 text-sm leading-6">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-sage" />
                  <span className="text-muted-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-3xl bg-surface p-4">
            <Headphones className="size-5 text-sage" />
            <p className="caption">
              Wedding DJ Pretoria, corporate DJ Pretoria and mobile DJ services across
              Johannesburg, Centurion, Midrand and wider Gauteng.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
