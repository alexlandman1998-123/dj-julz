export type PackageType = "private" | "signature" | "production";

export type BookingLead = {
  name: string;
  email: string;
  phone?: string;
  eventDate?: Date;
  packageType: PackageType;
  guestCount?: string;
  message: string;
};
