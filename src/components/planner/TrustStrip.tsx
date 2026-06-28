import { trustItems } from "@/data/planner";

export function TrustStrip() {
  return (
    <section className="mx-auto mt-8 max-w-md rounded-[1.35rem] border border-border bg-white p-5 shadow-[0_18px_55px_rgb(24_24_27_/_0.045)] lg:max-w-4xl lg:p-6">
      <div className="grid gap-5 lg:grid-cols-3 lg:divide-x lg:divide-border">
        {trustItems.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 lg:px-5 first:lg:pl-0 last:lg:pr-0"
          >
            <item.icon className="mt-1 size-7 shrink-0 text-sage" />
            <div>
              <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
              <p className="caption mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
