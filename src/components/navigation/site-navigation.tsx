import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site";

import { MobileNavigation } from "./mobile-navigation";

export function SiteNavigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-heading text-3xl leading-none">
          DJ JULz
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden rounded-full md:inline-flex">
            <Link href="#planner">Book a date</Link>
          </Button>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
