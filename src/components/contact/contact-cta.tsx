import Link from "next/link";

export function ContactCTA() {
  return (
    <section id="contact" className="px-5 py-12">
      <div className="mx-auto max-w-md rounded-3xl bg-neutral-100 p-6">
        <h2 className="text-3xl font-semibold text-neutral-900">
          Let&apos;s make your event unforgettable.
        </h2>
        <div className="mt-6 grid gap-3">
          <Link
            href="#planner"
            className="rounded-full bg-neutral-900 px-5 py-3 text-center text-sm font-medium text-white"
          >
            Book Consultation
          </Link>
          <Link
            href="https://wa.me/"
            className="rounded-full border border-neutral-300 px-5 py-3 text-center text-sm font-medium text-neutral-900"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
