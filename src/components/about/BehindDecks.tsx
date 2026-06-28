import Image from "next/image";

import { Reveal } from "@/components/shared/motion";
import { warmBlurDataUrl } from "@/lib/image-placeholders";

export function BehindDecks() {
  return (
    <section className="bg-white px-6 py-8 lg:px-8 lg:py-12">
      <Reveal className="mx-auto max-w-md lg:max-w-6xl">
        <div className="relative min-h-[29rem] overflow-hidden rounded-[1.35rem] bg-primary text-primary-foreground lg:min-h-[38rem]">
          <Image
            src="/images/dj-julz-hero.png"
            alt="DJ Julz reading the room from behind the decks"
            fill
            sizes="(max-width: 1024px) 90vw, 72rem"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL={warmBlurDataUrl}
          />
          <div className="absolute inset-0 bg-black/62" />
          <div className="absolute left-7 top-7 flex items-center gap-4 text-white/76 lg:left-12 lg:top-12">
            <span className="text-xs font-bold">06</span>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em]">
              Behind The Decks
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-8 text-center lg:p-14">
            <p className="mx-auto max-w-lg text-[2rem] font-medium leading-tight tracking-normal text-white lg:text-[4rem]">
              I don&apos;t press play.
              <br />I read rooms.
            </p>
            <p className="mt-5 font-heading text-3xl italic text-sage">Julz</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
