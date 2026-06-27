import { CheckCircle2, Headphones, UsersRound } from "lucide-react";
import Image from "next/image";

const reasons = [
  "Clear communication before the event",
  "Music planned around the room and schedule",
  "Professional presence for formal moments",
];

export function About() {
  return (
    <section id="about" className="section-spacing px-5">
      <div className="mx-auto max-w-md">
        <div className="premium-card overflow-hidden bg-surface">
          <div className="relative aspect-[5/4]">
            <Image
              src="/images/dj-julz-hero.png"
              alt="Refined event atmosphere with DJ equipment"
              fill
              sizes="(max-width: 640px) 90vw, 420px"
              className="object-cover object-[70%_center]"
            />
          </div>
        </div>
        <div className="mt-8">
          <p className="eyebrow">About</p>
          <h2 className="section-title mt-3">
            A steady hand for the moments people remember.
          </h2>
          <p className="body-copy mt-5">
            DJ Julz brings a calm planning process, polished event flow and a warm sense
            of timing to weddings, launches and private celebrations.
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
            <p className="caption">Built for clients who want taste, not spectacle.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
