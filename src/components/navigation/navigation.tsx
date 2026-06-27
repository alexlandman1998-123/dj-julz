"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-16 max-w-md items-center justify-between px-5">
        <Link href="/" className="text-lg font-semibold text-neutral-900">
          DJ Julz
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="#planner"
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-full border border-neutral-200 text-neutral-900"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-neutral-200 bg-white px-5 py-4">
          <div className="mx-auto grid max-w-md gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-neutral-100 px-4 py-3 text-sm font-medium text-neutral-900"
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
