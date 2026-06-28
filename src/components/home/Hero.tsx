import { CurvedDivider } from "@/components/home/CurvedDivider";
import { HeroContent } from "@/components/home/HeroContent";
import { HeroImage } from "@/components/home/HeroImage";
import { HeroTrustCards } from "@/components/home/HeroTrustCards";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgb(255_255_255_/_0.96),transparent_34%),radial-gradient(circle_at_82%_18%,rgb(223_232_220_/_0.38),transparent_32%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(24 24 27 / 0.18) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/90 to-transparent" />
      <div
        aria-hidden="true"
        className="absolute top-20 right-[-18rem] hidden h-[34rem] w-[46rem] rotate-[-8deg] rounded-[45%] bg-white/48 blur-3xl lg:block"
      />

      <div className="relative mx-auto max-w-md px-6 pt-28 pb-8 lg:min-h-[42rem] lg:max-w-7xl lg:px-8 lg:pt-[7.5rem] lg:pb-12">
        <HeroContent />
        <HeroImage />
      </div>

      <CurvedDivider />
      <HeroTrustCards />
    </section>
  );
}
