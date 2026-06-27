import Link from "next/link";

const boxes = Array.from({ length: 6 }, (_, index) => `Gallery ${index + 1}`);

export function Gallery() {
  return (
    <section id="gallery" className="px-5 py-12">
      <div className="mx-auto max-w-md">
        <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Gallery
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-neutral-900">
          Event moments placeholder.
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {boxes.map((box) => (
            <div
              key={box}
              className="grid aspect-square place-items-center rounded-3xl bg-neutral-100 text-sm text-neutral-500"
            >
              {box}
            </div>
          ))}
        </div>
        <Link
          href="#gallery"
          className="mt-6 block rounded-full border border-neutral-300 px-5 py-3 text-center text-sm font-medium text-neutral-900"
        >
          View Full Gallery
        </Link>
      </div>
    </section>
  );
}
