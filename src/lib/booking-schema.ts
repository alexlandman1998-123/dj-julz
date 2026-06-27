import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Add your name."),
  email: z.string().email("Use a valid email address."),
  phone: z.string().optional(),
  eventDate: z.date().optional(),
  packageType: z.enum(["wedding", "corporate", "private", "mc"]),
  guestCount: z.string().optional(),
  message: z.string().min(12, "Share a little more about the event."),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
