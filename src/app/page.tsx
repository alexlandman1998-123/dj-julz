import { Footer } from "@/components/layout/footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { CTA } from "@/components/sections/cta";
import { Experience } from "@/components/sections/experience";
import { FAQ } from "@/components/sections/faq";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { Hero } from "@/components/sections/hero";
import { Packages } from "@/components/sections/packages";
import { Planner } from "@/components/sections/planner";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
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
      <SiteNavigation />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Packages />
        <GalleryGrid />
        <Planner />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
