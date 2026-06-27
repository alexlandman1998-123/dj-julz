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
  { label: "Experience", href: "#experience" },
  { label: "Packages", href: "#packages" },
  { label: "Planner", href: "#planner" },
  { label: "FAQ", href: "#faq" },
] as const;

export const stats = [
  { value: "350+", label: "events shaped" },
  { value: "200+", label: "weddings supported" },
  { value: "12 yrs", label: "event experience" },
] as const;

export const packages = [
  {
    title: "Wedding DJ",
    price: "Custom quote",
    description:
      "Music planning for ceremonies, canapes, dinner, formalities and the dance floor.",
    features: ["Timeline planning", "Must-play guidance", "Reception flow"],
  },
  {
    title: "Corporate Events",
    price: "Custom quote",
    description:
      "A polished soundtrack for awards evenings, launches, year-end functions and brand events.",
    features: ["Brief alignment", "Background music", "Announcements support"],
    featured: true,
  },
  {
    title: "Private Celebrations",
    price: "Custom",
    description:
      "Personal, guest-aware music for birthdays, anniversaries and milestone celebrations.",
    features: ["Crowd reading", "Playlist direction", "Flexible party flow"],
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
    description: "The set is shaped around the room, the brief and the event timeline.",
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
      "A refined atmosphere for clients who want professionalism, warmth and clarity.",
  },
];

export const testimonials = [
  {
    quote:
      "Every transition felt intentional. The room moved naturally from dinner into a full dance floor.",
    name: "Mia",
    role: "Wedding client",
  },
  {
    quote:
      "The music direction made the launch feel expensive, calm, and alive at the same time.",
    name: "Daniel",
    role: "Brand event producer",
  },
  {
    quote:
      "Easy planning, beautiful pacing, and the perfect balance between crowd favourites and taste.",
    name: "Lerato",
    role: "Private celebration",
  },
] as const;

export const plannerSteps = [
  {
    icon: CalendarDays,
    title: "Check the date",
    description: "Share your event date, venue, and ideal start time.",
  },
  {
    icon: Music2,
    title: "Shape the brief",
    description: "Define the room, the key songs and the music direction.",
  },
  {
    icon: Sparkles,
    title: "Confirm the flow",
    description: "Lock the package, timings, and key moments before event week.",
  },
] as const;

export const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "Three to six months is ideal for weddings and peak-season Gauteng dates. Shorter-notice enquiries are welcome when availability allows.",
  },
  {
    question: "Can the set include specific songs?",
    answer:
      "Yes. The planner captures must-play, do-not-play, and preferred genres so the set still feels personal without becoming a rigid playlist.",
  },
  {
    question: "Is sound equipment included?",
    answer:
      "Sound and setup requirements are discussed during the consultation so the quote can match the venue, guest count and ceremony or reception needs.",
  },
  {
    question: "Do you travel?",
    answer:
      "DJ Julz is based in Pretoria and serves Johannesburg, Centurion, Midrand and surrounding Gauteng areas. Travel outside Gauteng can be discussed.",
  },
] as const;
