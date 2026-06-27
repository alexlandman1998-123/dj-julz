import { CheckCircle2, Headphones, UsersRound } from "lucide-react";
import Image from "next/image";

import { MotionCard, Reveal } from "@/components/shared/motion";
import { warmBlurDataUrl } from "@/lib/image-placeholders";

const reasons = [
  "A planning process that keeps timings, songs and formalities clear",
  "Music shaped around the couple, guests, venue and event schedule",
  "A professional presence for ceremonies, speeches and key transitions",
];

export function About() {
  return (
    <section id="about" className="section-spacing px-5">
      <div className="mx-auto max-w-md">
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
        <Reveal className="mt-8">
          <p className="eyebrow">About</p>
          <h2 className="section-title mt-3">
            Professional, warm and prepared before the first guest arrives.
          </h2>
          <p className="body-copy mt-5">
            Based in Pretoria, DJ Julz works with wedding couples, planners and event
            teams who want the music to feel considered rather than improvised. The
            focus is simple: understand the room, protect the flow of the day and make
            every important moment feel easy.
          </p>
          <div className="premium-card mt-6 p-5">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-accent text-accent-foreground">
                <UsersRound className="size-5" />
              </div>
              <h3 className="card-title">Why clients choose DJ Julz</h3>
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
              Serving Pretoria, Johannesburg, Centurion, Midrand and wider Gauteng.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
