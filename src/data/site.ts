import {
  CalendarDays,
  Headphones,
  type LucideIcon,
  Mic2,
  Music2,
  Sparkles,
  UsersRound,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Experiences", href: "/experiences" },
  { label: "Plan", href: "/plan" },
  { label: "Details", href: "/details" },
  { label: "FAQ", href: "/faq" },
] as const;

export const stats = [
  { value: "350+", label: "events shaped" },
  { value: "200+", label: "weddings supported" },
  { value: "12 yrs", label: "event experience" },
] as const;

export const packages = [
  {
    title: "Essential Wedding Experience",
    price: "Starting from R6,500",
    description:
      "A calm, professional wedding DJ experience for ceremony, cocktail hour, reception and dance floor moments.",
    features: ["Ceremony support", "Reception flow", "Full setup and breakdown"],
  },
  {
    title: "Premium Wedding Experience",
    price: "Starting from R9,000",
    description:
      "An elevated wedding experience with enhanced production, lighting and a premium DJ booth presentation.",
    features: ["Enhanced production", "Premium atmosphere", "Dance floor lighting"],
    featured: true,
  },
  {
    title: "Corporate Event Experience",
    price: "Starting from R4,000",
    description:
      "Professional event DJ service for conferences, product launches, gala dinners, awards evenings and year-end functions.",
    features: ["Wireless microphone", "Venue sound", "Professional presentation"],
  },
  {
    title: "Birthday & Private Celebration Experience",
    price: "Starting from R3,000",
    description:
      "Flexible music for birthdays, engagements, anniversaries and private celebrations.",
    features: ["Crowd reading", "Wireless microphone", "Dance floor lighting"],
  },
] as const;

export const experiencePoints: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Headphones,
    title: "Music-first planning",
    description:
      "The music is shaped around the room, the brief and the event timeline.",
  },
  {
    icon: UsersRound,
    title: "Crowd-aware flow",
    description:
      "Smooth transitions from arrival music to formalities and a confident dance floor.",
  },
  {
    icon: Mic2,
    title: "Event-ready presence",
    description: "Professional setup, calm communication, and support for formalities.",
  },
  {
    icon: Sparkles,
    title: "Premium restraint",
    description:
      "A refined atmosphere for hosts who want professionalism, warmth and clarity.",
  },
];

export const testimonials = [
  {
    quote:
      "Ceremony cues, reception flow and the first dance all need to feel calm, timed and personal.",
    name: "For wedding couples",
    role: "Ceremony to dance floor",
  },
  {
    quote:
      "The music should support the brand, keep the programme moving and never overpower the room.",
    name: "For corporate teams",
    role: "Awards, launches and functions",
  },
  {
    quote:
      "A private celebration needs flexibility: family favourites, guest energy and a DJ who can read the moment.",
    name: "For private hosts",
    role: "Birthdays and anniversaries",
  },
] as const;

export const plannerSteps = [
  {
    icon: CalendarDays,
    title: "Check your date",
    description: "Share your event date, venue and guest count.",
  },
  {
    icon: Music2,
    title: "Shape the brief",
    description: "Define the atmosphere, key songs and music direction.",
  },
  {
    icon: Sparkles,
    title: "Confirm the flow",
    description: "Confirm the experience, timings and key moments before event week.",
  },
] as const;

export const faqs = [
  {
    question: "How far do you travel?",
    answer:
      "DJ Julz is based in Pretoria and regularly serves Johannesburg, Centurion, Midrand and surrounding Gauteng areas.",
  },
  {
    question: "Can we request songs?",
    answer:
      "Yes. The planner captures must-play, do-not-play, and preferred genres so the set still feels personal without becoming a rigid playlist.",
  },
  {
    question: "Do you provide microphones?",
    answer:
      "A wireless microphone is included with corporate and private celebration experiences. Additional microphones can be added where needed.",
  },
  {
    question: "What equipment do you provide?",
    answer:
      "Packages can include professional DJ equipment, venue-appropriate sound, wireless microphone, dance floor lighting and selected enhancements.",
  },
] as const;
