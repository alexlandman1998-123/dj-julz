import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-4xl">DJ JULz</p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Premium music direction for private rooms, full dance floors, and brand
              moments.
            </p>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{new Date().getFullYear()} DJ JULz. All rights reserved.</p>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
            {siteConfig.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
