import { siteConfig } from "@/config/site";

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    areaServed: "South Africa",
    sameAs: [siteConfig.social.instagram, siteConfig.social.tiktok],
    serviceType: "DJ booking and event music direction",
  };
}
