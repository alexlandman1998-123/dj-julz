import { About } from "@/components/about/about";
import { Availability } from "@/components/availability/availability";
import { ContactCTA } from "@/components/contact/contact-cta";
import { FAQ } from "@/components/faq/faq";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/home/Hero";
import { Navigation } from "@/components/navigation/navigation";
import { Packages } from "@/components/packages/packages";
import { Planner } from "@/components/planner/planner";
import { Reviews } from "@/components/reviews/reviews";
import { getStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData()),
        }}
      />
      <Navigation />
      <main className="bg-background text-foreground">
        <Hero />
        <About />
        <Packages />
        <Planner />
        <Reviews />
        <Availability />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
