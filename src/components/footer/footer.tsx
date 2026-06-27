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
    <footer className="border-t border-neutral-200 px-5 py-10">
      <div className="mx-auto max-w-md">
        <p className="text-lg font-semibold text-neutral-900">DJ Julz</p>
        <nav className="mt-5 grid gap-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-neutral-600">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex gap-3">
          <Link
            href="#"
            aria-label="Instagram"
            className="grid size-10 place-items-center rounded-full bg-neutral-100 text-neutral-900"
          >
            <Camera className="size-4" />
          </Link>
          <Link
            href="#"
            aria-label="TikTok"
            className="grid size-10 place-items-center rounded-full bg-neutral-100 text-neutral-900"
          >
            <Music2 className="size-4" />
          </Link>
        </div>
        <div className="mt-6 text-sm leading-6 text-neutral-600">
          <p>bookings@djjulz.com</p>
          <p>+27 00 000 0000</p>
        </div>
        <p className="mt-6 text-xs text-neutral-500">
          {new Date().getFullYear()} DJ Julz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
