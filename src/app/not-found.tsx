import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen py-32">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="mt-6 text-balance font-heading text-5xl leading-none md:text-7xl">
          This page missed the drop.
        </h1>
        <p className="mt-6 text-balance text-lg text-muted-foreground">
          The page you are looking for is not available.
        </p>
        <Button asChild className="mt-8 rounded-full">
          <Link href="/">Back home</Link>
        </Button>
      </Container>
    </main>
  );
}
