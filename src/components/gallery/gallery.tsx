import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const moments = [
  { title: "Ceremony arrival", position: "object-[58%_center]" },
  { title: "Dinner atmosphere", position: "object-[68%_center]" },
  { title: "First dance", position: "object-[50%_center]" },
  { title: "Late-night floor", position: "object-[74%_center]" },
  { title: "Private celebration", position: "object-[40%_center]" },
  { title: "Brand event", position: "object-[62%_center]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-spacing bg-surface px-5">
      <div className="mx-auto max-w-md">
        <p className="eyebrow">Gallery</p>
        <h2 className="section-title mt-3">A quiet look at memorable rooms.</h2>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {moments.map((moment, index) => (
            <button
              key={moment.title}
              type="button"
              aria-label={`Open ${moment.title} image`}
              className={`group relative overflow-hidden rounded-[1.35rem] border border-border bg-surface-strong outline-none focus-visible:ring-3 focus-visible:ring-ring/35 ${
                index === 0 || index === 5 ? "aspect-[4/5]" : "aspect-square"
              }`}
            >
              <Image
                src="/images/dj-julz-hero.png"
                alt=""
                fill
                sizes="(max-width: 640px) 45vw, 190px"
                className={`object-cover ${moment.position}`}
              />
              <span className="absolute inset-x-3 bottom-3 rounded-full bg-white/90 px-3 py-2 text-left text-xs font-semibold text-foreground">
                {moment.title}
              </span>
            </button>
          ))}
        </div>
        <Button asChild variant="outline" className="mt-7 w-full">
          <Link href="#gallery">View Full Gallery</Link>
        </Button>
      </div>
    </section>
  );
}
