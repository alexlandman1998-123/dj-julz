import { siteConfig } from "@/config/site";

export function getStructuredData() {
  const sameAs = [siteConfig.social.instagram, siteConfig.social.tiktok].filter(
    Boolean,
  );

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone || undefined,
    image: `${siteConfig.url}/images/generated/dj-setup-reception.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: "ZA",
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    priceRange: "Custom quotes",
    serviceType: [
      "Wedding DJ Pretoria",
      "Wedding DJ Gauteng",
      "Corporate DJ Pretoria",
      "Event DJ Pretoria",
      "Wedding entertainment Pretoria",
      "Mobile DJ Pretoria",
    ],
  };
}
