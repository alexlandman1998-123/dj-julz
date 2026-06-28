import { Camera, Mail, MapPin, Music2, Phone } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { Reveal } from "@/components/shared/motion";
import { siteConfig } from "@/config/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#packages" },
  { label: "Plan", href: "#planner" },
  { label: "Enquire", href: "#contact" },
];

export function Footer() {
  const socialLinks = [
    siteConfig.social.instagram
      ? {
          href: siteConfig.social.instagram,
          label: "Instagram",
          icon: Camera,
        }
      : null,
    siteConfig.social.tiktok
      ? {
          href: siteConfig.social.tiktok,
          label: "TikTok",
          icon: Music2,
        }
      : null,
  ].filter(Boolean);

  return (
    <footer className="border-t border-border bg-white px-5 py-10 lg:px-8 lg:py-14">
      <Reveal className="mx-auto max-w-md lg:grid lg:max-w-6xl lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-12">
        <div>
          <Logo className="w-28" />
          <p className="caption mt-3">
            Premium wedding entertainment, corporate event music and private celebration
            DJ services from Pretoria to greater Gauteng.
          </p>
        </div>
        <nav className="mt-6 grid grid-cols-2 gap-3 lg:mt-0 lg:min-w-80">
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
        <div className="lg:justify-self-end">
          {socialLinks.length ? (
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                if (!social) {
                  return null;
                }

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    data-analytics={`social_${social.label.toLowerCase()}`}
                    className="grid size-11 place-items-center rounded-full bg-surface text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
                  >
                    <social.icon className="size-4" />
                  </Link>
                );
              })}
            </div>
          ) : null}
          <div className="mt-6 grid gap-2 text-sm leading-6 text-muted-foreground lg:mt-0">
            <Link
              href={`mailto:${siteConfig.email}`}
              data-analytics="footer_email_click"
              className="inline-flex items-center gap-2 outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
            >
              <Mail className="size-4 text-sage" />
              {siteConfig.email}
            </Link>
            {siteConfig.phone ? (
              <Link
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                data-analytics="footer_phone_click"
                className="inline-flex items-center gap-2 outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
              >
                <Phone className="size-4 text-sage" />
                {siteConfig.phone}
              </Link>
            ) : null}
            <p className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-sage" />
              {siteConfig.location.city}, {siteConfig.location.region}
            </p>
          </div>
          <Link
            href="/privacy"
            className="mt-6 inline-flex text-xs font-medium text-muted-foreground underline underline-offset-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
          >
            Privacy policy
          </Link>
          <p className="mt-6 text-xs text-muted-foreground">
            {new Date().getFullYear()} DJ Julz. Calm, considered music for events that
            deserve to feel effortless.
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
