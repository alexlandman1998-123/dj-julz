export const siteConfig = {
  name: "DJ Julz",
  url: "https://dj-julz.vercel.app",
  description:
    "Wedding and event DJ in Pretoria serving Gauteng, Johannesburg, Centurion and Midrand with polished music planning for weddings, corporate events and private celebrations.",
  email: process.env.NEXT_PUBLIC_BOOKING_EMAIL ?? "bookings@djjulz.co.za",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  location: {
    city: "Pretoria",
    region: "Gauteng",
    country: "South Africa",
  },
  serviceAreas: ["Pretoria", "Gauteng", "Johannesburg", "Centurion", "Midrand"],
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL ?? "",
  },
} as const;
