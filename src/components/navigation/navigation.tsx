"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

const links = navItems;
const darkHeroRoutes = new Set(["/about", "/experiences"]);

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const overDarkHero = darkHeroRoutes.has(pathname) && !scrolled && !open;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 transition-all duration-300 ease-[var(--ease-premium)] lg:top-4 lg:px-5">
      <div
        className={cn(
          "mx-auto flex h-16 w-full max-w-[96rem] items-center justify-between rounded-full border px-5 shadow-[0_18px_55px_rgb(24_24_27_/_0.08)] backdrop-blur-2xl transition-all duration-300 ease-[var(--ease-premium)] lg:h-[4.6rem] lg:px-7",
          overDarkHero
            ? "border-white/10 bg-[#173f36]/96 text-white shadow-[0_18px_55px_rgb(23_63_54_/_0.22)]"
            : "border-border/80 bg-white/88 text-foreground",
          scrolled || open
            ? "bg-white/94 text-foreground shadow-[0_14px_42px_rgb(24_24_27_/_0.08)]"
            : null,
        )}
      >
        <Link
          href="/"
          aria-label="DJ Julz home"
          className="rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
        >
          <Logo
            priority
            variant={overDarkHero ? "white" : "black"}
            className="w-24 transition-opacity duration-300 lg:w-30"
          />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const activeLink = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/35",
                  activeLink
                    ? overDarkHero
                      ? "bg-white/12 text-white"
                      : "bg-accent text-accent-foreground"
                    : overDarkHero
                      ? "text-white/76 hover:text-white"
                      : "text-foreground/70 hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className={cn(
              "hidden h-11 rounded-full px-5 lg:inline-flex",
              overDarkHero &&
                "bg-[#075745] text-white shadow-none hover:bg-[#075745]/90",
            )}
          >
            <Link href="/plan">Check My Date</Link>
          </Button>
          <Button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            size="icon"
            variant="outline"
            className={cn(
              "size-10 rounded-full lg:hidden",
              overDarkHero &&
                "border-white/24 bg-white/8 text-white hover:bg-white/14 hover:text-white",
            )}
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
            className="mx-auto mt-2 max-w-md rounded-[1.35rem] border border-border bg-white px-4 py-4 shadow-[0_18px_55px_rgb(24_24_27_/_0.1)] lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto grid max-w-md gap-2">
              <Button asChild size="lg" className="mb-2 w-full">
                <Link href="/plan" onClick={() => setOpen(false)}>
                  Check My Date
                </Link>
              </Button>
              {links.map((link, index) => {
                const activeLink = pathname === link.href;

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
