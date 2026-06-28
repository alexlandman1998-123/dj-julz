import {
  BriefcaseBusiness,
  Cake,
  CalendarDays,
  Headphones,
  Heart,
  LockKeyhole,
  type LucideIcon,
  MapPin,
  MoreHorizontal,
  Music2,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";

export const plannerHero = {
  eyebrow: "Plan Your Event",
  title: "Let's create the perfect soundtrack for your day.",
  description:
    "A few simple details help Julz understand your event, check availability and recommend the right experience.",
} as const;

export const plannerSteps = [
  "Event",
  "Date",
  "Venue",
  "Guests",
  "Details",
  "Music",
  "Contact",
] as const;

export const eventTypeOptions = [
  {
    value: "wedding",
    label: "Wedding",
    description: "I'm planning a wedding",
    icon: Heart,
  },
  {
    value: "private",
    label: "Birthday / Private",
    description: "Celebration with friends and family",
    icon: Cake,
  },
  {
    value: "corporate",
    label: "Corporate",
    description: "Conference, launch, gala or function",
    icon: BriefcaseBusiness,
  },
  {
    value: "other",
    label: "Other",
    description: "Something else",
    icon: MoreHorizontal,
  },
] as const;

export const guestOptions = [
  { value: "under-50", label: "Under 50", description: "Small and intimate" },
  { value: "50-100", label: "50 - 100", description: "A comfortable gathering" },
  { value: "100-200", label: "100 - 200", description: "A full celebration" },
  { value: "200-plus", label: "200+", description: "A larger event" },
] as const;

export const weddingMusicParts = [
  "Ceremony",
  "Cocktail Hour",
  "Reception",
  "After Party",
] as const;

export const weddingExperiences = [
  "Essential Wedding",
  "Premium Wedding Experience",
  "Not Sure",
] as const;

export const corporateEventTypes = [
  "Conference",
  "Launch",
  "Awards",
  "Gala",
  "Year End",
] as const;

export const privateAtmospheres = [
  "Relaxed",
  "Dancefloor",
  "Mixed",
  "High Energy",
  "Not Sure",
] as const;

export const musicStyles = [
  "House",
  "Pop",
  "Hip Hop",
  "Classics",
  "80s",
  "90s",
  "Afrobeats",
  "Open Format",
  "Not Sure",
] as const;

export const enhancementOptions = [
  "Premium DJ Booth",
  "Ambient Lighting",
  "Dancefloor Lighting",
  "Additional Sound",
  "First Dance Edit",
  "Wireless Microphones",
] as const;

export const trustItems: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "No pressure.",
    description: "Check availability with no obligation.",
    icon: ShieldCheck,
  },
  {
    title: "Your details are safe.",
    description: "We'll never share your information.",
    icon: LockKeyhole,
  },
  {
    title: "Expert guidance.",
    description: "Personal recommendations from DJ Julz.",
    icon: Headphones,
  },
];

export const summaryItems = [
  { key: "eventType", label: "Event type", icon: CalendarDays },
  { key: "date", label: "Date", icon: CalendarDays },
  { key: "location", label: "Location", icon: MapPin },
  { key: "guests", label: "Guests", icon: UsersRound },
  { key: "music", label: "Music needs", icon: Music2 },
  { key: "experience", label: "Experience interest", icon: Star },
  { key: "enhancements", label: "Enhancements", icon: Sparkles },
] as const;
