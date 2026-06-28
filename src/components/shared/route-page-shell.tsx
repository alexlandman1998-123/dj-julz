import Link from "next/link";

import { Footer } from "@/components/footer/footer";
import { Navigation } from "@/components/navigation/navigation";
import { Button } from "@/components/ui/button";

type RoutePageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function RoutePageShell({ eyebrow, title, description }: RoutePageShellProps) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background px-5 pb-16 pt-28 text-foreground lg:px-8 lg:pt-36">
        <section className="mx-auto max-w-md lg:max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="section-title mt-4">{title}</h1>
          <p className="body-copy mt-6 max-w-2xl">{description}</p>
          <div className="mt-8 grid gap-3 sm:flex">
            <Button asChild>
              <Link href="/plan">Start Planning</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Back Home</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
