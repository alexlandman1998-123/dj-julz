import { Camera, Music2 } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Planner", href: "#planner" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white px-5 py-10">
      <div className="mx-auto max-w-md">
        <p className="font-heading text-4xl leading-none text-foreground">DJ Julz</p>
        <p className="caption mt-3">
          Wedding and event music direction with a calm planning process.
        </p>
        <nav className="mt-6 grid grid-cols-2 gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-11 rounded-full bg-surface px-4 py-3 text-sm font-semibold text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex gap-3">
          <Link
            href="#"
            aria-label="Instagram"
            className="grid size-11 place-items-center rounded-full bg-surface text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
          >
            <Camera className="size-4" />
          </Link>
          <Link
            href="#"
            aria-label="TikTok"
            className="grid size-11 place-items-center rounded-full bg-surface text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
          >
            <Music2 className="size-4" />
          </Link>
        </div>
        <div className="mt-6 text-sm leading-6 text-muted-foreground">
          <p>bookings@djjulz.com</p>
          <p>+27 00 000 0000</p>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          {new Date().getFullYear()} DJ Julz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
