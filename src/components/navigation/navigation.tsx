"use client";

import { CalendarCheck, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const links = [
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Planner", href: "#planner" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white/95">
      <div className="mobile-container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-heading text-3xl leading-none text-foreground"
          aria-label="DJ Julz home"
        >
          DJ Julz
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="h-10 px-4">
            <Link href="#planner">
              <CalendarCheck className="size-4" />
              Book Now
            </Link>
          </Button>
          <Button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            size="icon"
            variant="outline"
            className="size-10"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-border bg-white px-5 py-4">
          <div className="mx-auto grid max-w-md gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-surface px-4 py-3 text-sm font-semibold text-foreground outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/35"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
