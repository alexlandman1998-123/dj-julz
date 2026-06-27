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
  { value: "250+", label: "events shaped" },
  { value: "4.9", label: "client rating" },
  { value: "10 yrs", label: "behind the decks" },
] as const;

export const packages = [
  {
    title: "Private Sessions",
    price: "From R4,500",
    description:
      "Polished sound for birthdays, rooftops, dinners, and intimate celebrations.",
    features: ["3 hour performance", "Curated arrival playlist", "Compact setup"],
  },
  {
    title: "Signature Events",
    price: "From R8,500",
    description:
      "The best fit for weddings, launches, and full-room dance-floor energy.",
    features: ["5 hour performance", "Mic support", "Planner consultation"],
    featured: true,
  },
  {
    title: "Full Production",
    price: "Custom",
    description:
      "A complete music direction package for larger venues and premium brands.",
    features: ["Extended set", "Supplier coordination", "Custom sound design"],
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
      "The set is shaped around the room, the brief, and the moments that matter.",
  },
  {
    icon: UsersRound,
    title: "Crowd-aware flow",
    description:
      "Smooth transitions from arrival energy to peak dance-floor without hard edges.",
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
      "A refined atmosphere for clients who want style without noise for noise's sake.",
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
    description: "Define the room, the non-negotiables, and the musical lane.",
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
      "Four to eight weeks is ideal for private events, while weddings and brand events are best booked as early as possible.",
  },
  {
    question: "Can the set include specific songs?",
    answer:
      "Yes. The planner captures must-play, do-not-play, and preferred genres so the set still feels personal without becoming a rigid playlist.",
  },
  {
    question: "Is sound equipment included?",
    answer:
      "Core packages include a clean, compact DJ setup. Larger rooms can be quoted with additional production support.",
  },
  {
    question: "Do you travel?",
    answer:
      "Yes. Travel can be included in a custom quote once the venue and event window are confirmed.",
  },
] as const;
