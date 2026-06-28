import { CurvedDivider } from "@/components/home/CurvedDivider";
import { HeroContent } from "@/components/home/HeroContent";
import { HeroImage } from "@/components/home/HeroImage";
import { HeroTrustCards } from "@/components/home/HeroTrustCards";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgb(255_255_255_/_0.96),transparent_34%),radial-gradient(circle_at_82%_18%,rgb(223_232_220_/_0.38),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/90 to-transparent" />
      <div
        aria-hidden="true"
        className="absolute top-28 right-[-18rem] hidden h-[30rem] w-[42rem] rotate-[-8deg] rounded-[45%] bg-white/45 blur-3xl lg:block"
      />

      <div className="relative mx-auto grid max-w-md gap-9 px-6 pt-28 pb-16 lg:max-w-7xl lg:grid-cols-[0.45fr_0.55fr] lg:items-center lg:gap-6 lg:px-8 lg:pt-32 lg:pb-24">
        <HeroContent />
        <HeroImage />
      </div>

      <CurvedDivider />
      <HeroTrustCards />
    </section>
  );
}
