"use client";

import { Camera, ChevronRight, Mail, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const contactRows = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.whatsapp || "Start a chat",
    href: siteConfig.whatsapp
      ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`
      : "/plan",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Camera,
    label: "Instagram",
    value: siteConfig.social.instagram ? "@dj_julz_" : "Follow DJ Julz",
    href: siteConfig.social.instagram || "/plan",
  },
] as const;

export function FaqHelpCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[1.5rem] border border-border bg-surface p-5 shadow-[0_16px_46px_rgb(24_24_27_/_0.05)] lg:sticky lg:top-28 lg:p-6"
    >
      <p className="eyebrow">Need help?</p>
      <h2 className="mt-4 font-heading text-[2.35rem] leading-[0.95] tracking-normal text-balance">
        Still have a question?
      </h2>
      <p className="caption mt-4">
        I am here to help. Let&apos;s chat about your event and make it unforgettable.
      </p>

      <Button asChild size="lg" variant="sage" className="mt-6 w-full">
        <Link href="/plan">
          Let&apos;s Talk
          <ChevronRight className="size-4" aria-hidden />
        </Link>
      </Button>

      <div className="mt-6 grid gap-2">
        {contactRows.map((row) => (
          <Link
            key={row.label}
            href={row.href}
            target={row.href.startsWith("http") ? "_blank" : undefined}
            rel={row.href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex min-h-16 items-center gap-3 rounded-[1rem] border border-border bg-white px-4 py-3 outline-none transition-all duration-[var(--duration-fast)] ease-[var(--ease-premium)] hover:border-sage/40 focus-visible:ring-3 focus-visible:ring-ring/35"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-sage">
              <row.icon className="size-4" aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[0.68rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                {row.label}
              </span>
              <span className="mt-0.5 block truncate text-sm font-semibold text-foreground">
                {row.value}
              </span>
            </span>
            <ChevronRight
              className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        ))}
      </div>
    </motion.aside>
  );
}
