"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#packages" },
  { label: "Plan", href: "#planner" },
  { label: "Details", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.12, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-[var(--ease-premium)]",
        scrolled || open
          ? "border-border bg-white/92 shadow-[0_12px_34px_rgb(24_24_27_/_0.07)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          aria-label="DJ Julz home"
          className="rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
        >
          <Logo priority className="w-24 lg:w-32" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const activeLink = active === link.href.slice(1);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/35",
                  activeLink
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/70 hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden h-10 px-4 lg:inline-flex">
            <Link href="#planner">Check My Date</Link>
          </Button>
          <Button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            size="icon"
            variant="outline"
            className="size-10 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={reduceMotion ? false : { opacity: 0, rotate: -18, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, rotate: 18, scale: 0.9 }}
                transition={{ duration: 0.18 }}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </motion.span>
            </AnimatePresence>
          </Button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            className="border-t border-border bg-white px-5 py-4 lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto grid max-w-md gap-2">
              <Button asChild size="lg" className="mb-2 w-full">
                <Link href="#planner" onClick={() => setOpen(false)}>
                  Check My Date
                </Link>
              </Button>
              {links.map((link, index) => {
                const activeLink = active === link.href.slice(1);

                return (
                  <motion.div
                    key={link.href}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.035, duration: 0.22 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "relative flex min-h-12 items-center justify-between overflow-hidden rounded-2xl px-4 py-3 text-sm font-semibold outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/35",
                        activeLink
                          ? "bg-accent text-accent-foreground"
                          : "bg-surface text-foreground",
                      )}
                    >
                      {link.label}
                      {activeLink ? (
                        <motion.span
                          layoutId="mobile-nav-active"
                          className="size-2 rounded-full bg-sage"
                        />
                      ) : null}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
