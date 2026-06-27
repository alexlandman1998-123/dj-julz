import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="px-5 pb-12 pt-24">
      <div className="mx-auto max-w-md">
        <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Wedding & Event DJ
        </p>
        <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-neutral-900">
          Music for moments that matter.
        </h1>
        <p className="mt-5 text-base leading-7 text-neutral-600">
          Placeholder intro for DJ Julz, focused on weddings, events, and booking
          confidence.
        </p>
        <div className="mt-7 grid gap-3">
          <Link
            href="#planner"
            className="rounded-full bg-neutral-900 px-5 py-3 text-center text-sm font-medium text-white"
          >
            Book Consultation
          </Link>
          <Link
            href="#packages"
            className="rounded-full border border-neutral-300 px-5 py-3 text-center text-sm font-medium text-neutral-900"
          >
            View Packages
          </Link>
        </div>
        <div className="mt-8 grid aspect-[4/3] place-items-center rounded-3xl bg-neutral-100 text-sm text-neutral-500">
          Placeholder image area
        </div>
        <a
          href="#trust"
          className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-500"
        >
          Scroll <ChevronDown className="size-4" />
        </a>
      </div>
    </section>
  );
}
