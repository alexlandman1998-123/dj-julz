"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/data/site";

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open navigation"
          className="rounded-full md:hidden"
          size="icon"
          variant="outline"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 px-0">
        <Container className="px-6">
          <SheetTitle className="font-heading text-4xl">DJ JULz</SheetTitle>
          <Separator className="my-6" />
          <nav className="grid gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-base font-medium transition-colors hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="mt-8 w-full rounded-full">
            <Link href="#planner">Start booking</Link>
          </Button>
        </Container>
      </SheetContent>
    </Sheet>
  );
}
