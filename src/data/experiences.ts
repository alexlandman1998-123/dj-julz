import {
  BriefcaseBusiness,
  CalendarClock,
  Crown,
  Gem,
  Headphones,
  Lightbulb,
  type LucideIcon,
  Mic2,
  Music2,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Speaker,
  WandSparkles,
} from "lucide-react";

export type Experience = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  startingPrice: string;
  image: string;
  icon: LucideIcon;
  included: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
};

export const experienceHero = {
  eyebrow: "Experiences",
  title: "Choose the experience that fits your day.",
  description:
    "Every celebration has its own rhythm. Let's find the experience that's right for you.",
  image: "/images/dj-julz-hero-optimized.jpg",
} as const;

export const experienceSections = {
  selector: {
    eyebrow: "Choose Your Experience",
  },
  featured: {
    priceLabel: "Starting From",
    cta: "View Details",
  },
  included: {
    eyebrow: "What's Included",
    title: "Built around the moments that matter.",
    collapsedHint: "Tap to see how it supports the day.",
  },
  timeline: {
    eyebrow: "One Night",
    title: "From Start To Finish",
    image: "/images/dj-julz-hero-optimized.jpg",
  },
  enhancements: {
    eyebrow: "Enhance Your Experience",
    title: "Personal touches, added with purpose.",
    description:
      "Add the finishing touches that make your day feel more complete, more personal and more effortless.",
  },
  philosophy: {
    eyebrow: "Why It Works",
  },
  otherExperiences: {
    eyebrow: "Other Experiences",
    title: "Choose the room you're creating.",
    priceLabel: "Starting From",
  },
} as const;

export const experiences: Experience[] = [
  {
    id: "essential-wedding",
    label: "Wedding",
    title: "Essential Wedding Experience",
    subtitle: "A soundtrack for one of the biggest days of your life.",
    description:
      "Designed for couples who want a calm, professional wedding DJ for the core moments of the day.",
    startingPrice: "R6,500",
    image: "/images/dj-julz-hero.png",
    icon: Sparkles,
    included: [
      {
        title: "Music planning",
        description:
          "Ceremony, cocktail hour and reception music planning shaped around your day.",
        icon: Music2,
      },
      {
        title: "Professional DJ service",
        description:
          "Venue-appropriate sound and a calm, polished presence from setup to last song.",
        icon: Headphones,
      },
      {
        title: "Timeline support",
        description:
          "Entrances, speeches, first dance and special moments are planned with care.",
        icon: CalendarClock,
      },
      {
        title: "Full setup and breakdown",
        description:
          "Everything arrives prepared, is installed neatly and is packed down after the celebration.",
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: "premium-wedding",
    label: "Premium",
    title: "Premium Wedding Experience",
    subtitle: "An elevated experience with beautifully finished production.",
    description:
      "A more elevated wedding experience with enhanced production for couples who want the room to feel beautifully finished.",
    startingPrice: "R9,000",
    image: "/images/dj-julz-hero-optimized.jpg",
    icon: Gem,
    included: [
      {
        title: "Essential experience included",
        description:
          "Everything in the Essential Wedding Experience, with a more elevated production layer.",
        icon: Crown,
      },
      {
        title: "Premium DJ booth presentation",
        description: "A refined booth setup that keeps the room feeling considered.",
        icon: BriefcaseBusiness,
      },
      {
        title: "Enhanced dance floor lighting",
        description:
          "Lighting that brings the room to life without overpowering the atmosphere.",
        icon: Lightbulb,
      },
      {
        title: "Atmosphere-led flow",
        description:
          "Reception and party energy shaped around the couple, the guests and the room.",
        icon: WandSparkles,
      },
    ],
  },
  {
    id: "corporate",
    label: "Corporate",
    title: "Corporate Event Experience",
    subtitle: "Polished sound and music for professional events that impress.",
    description:
      "A polished music and sound solution for conferences, product launches, gala dinners, awards evenings and year-end functions.",
    startingPrice: "R4,000",
    image: "/images/dj-julz-hero.png",
    icon: BriefcaseBusiness,
    included: [
      {
        title: "Professional DJ service",
        description: "A composed music presence for formal programmes and social flow.",
        icon: Headphones,
      },
      {
        title: "Venue-appropriate sound",
        description: "A sound system matched to the room, audience and event format.",
        icon: Speaker,
      },
      {
        title: "Wireless microphone",
        description: "Clear audio for hosts, speeches, awards and announcements.",
        icon: Mic2,
      },
      {
        title: "Lighting and atmosphere",
        description:
          "Dance floor lighting and smoke machine support when the brief calls for it.",
        icon: Lightbulb,
      },
      {
        title: "Full setup and breakdown",
        description:
          "Prepared arrival, neat installation and clean breakdown after the event.",
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: "private",
    label: "Private",
    title: "Birthday & Private Celebration Experience",
    subtitle: "Flexible music for birthdays, anniversaries and special celebrations.",
    description:
      "Flexible music for milestone birthdays, engagements, anniversaries, family celebrations and private functions.",
    startingPrice: "R3,000",
    image: "/images/dj-julz-hero-optimized.jpg",
    icon: PartyPopper,
    included: [
      {
        title: "Professional DJ service",
        description: "A friendly, experienced DJ presence that reads the room.",
        icon: Headphones,
      },
      {
        title: "Venue-appropriate sound",
        description: "Sound matched to the venue, guest count and celebration style.",
        icon: Speaker,
      },
      {
        title: "Wireless microphone",
        description: "Ready for speeches, family moments and announcements.",
        icon: Mic2,
      },
      {
        title: "Dance floor lighting",
        description: "A polished lighting layer to bring the celebration alive.",
        icon: Lightbulb,
      },
      {
        title: "Full setup and breakdown",
        description: "Everything handled so you can stay with your guests.",
        icon: ShieldCheck,
      },
    ],
  },
];

export const eventTimeline = [
  { time: "3:00 PM", title: "Setup", imagePosition: "72% center" },
  { time: "4:00 PM", title: "Guests Arrive", imagePosition: "35% center" },
  { time: "4:30 PM", title: "Ceremony", imagePosition: "48% center" },
  { time: "6:00 PM", title: "Dinner", imagePosition: "25% center" },
  { time: "7:30 PM", title: "First Dance", imagePosition: "58% center" },
  { time: "9:00 PM", title: "Dancefloor Opens", imagePosition: "50% center" },
  { time: "12:00 AM", title: "Last Song", imagePosition: "40% center" },
] as const;

export const enhancements = [
  {
    title: "Premium DJ Booth",
    description: "A refined focal point with an elevated look and feel.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Enhanced Dancefloor Lighting",
    description: "More impact, more atmosphere, more energy.",
    icon: Lightbulb,
  },
  {
    title: "Ambient Venue Lighting",
    description: "A warm atmosphere layer for the room before the party starts.",
    icon: Sparkles,
  },
  {
    title: "First Dance Edit",
    description: "A custom edit for your most personal moment.",
    icon: Music2,
  },
  {
    title: "Additional Sound Coverage",
    description: "Extra coverage for larger venues or multiple spaces.",
    icon: Speaker,
  },
] as const;

export const experiencePhilosophy = {
  main: ["The best events", "aren't remembered", "because the music", "was loud."],
  accent: "They're remembered because everything felt effortless.",
} as const;

export const consultationCta = {
  title: "Not sure which experience is right?",
  description:
    "Every event is unique. Let's chat about your vision and create the perfect experience together.",
  primary: "Let's Talk",
  secondary: "WhatsApp Julz",
} as const;
