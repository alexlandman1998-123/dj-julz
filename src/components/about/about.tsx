export function About() {
  return (
    <section id="about" className="px-5 py-12">
      <div className="mx-auto max-w-md">
        <div className="grid gap-6">
          <div className="grid aspect-square place-items-center rounded-3xl bg-neutral-100 text-sm text-neutral-500">
            Portrait placeholder
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-neutral-900">
              DJ Julz brings calm planning and the right energy to every event.
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              Short placeholder biography. This section will later explain the story,
              experience, and personality behind the DJ Julz brand.
            </p>
            <div className="mt-6 rounded-3xl border border-neutral-200 p-5">
              <h3 className="font-semibold text-neutral-900">
                Why clients choose DJ Julz
              </h3>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-neutral-600">
                <li>Clear event planning process</li>
                <li>Flexible music direction</li>
                <li>Professional wedding and event flow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
