import { z } from "zod";

export const planEventSchema = z
  .object({
    eventType: z.enum(["wedding", "private", "corporate", "other"]),
    eventDate: z.string().optional(),
    dateNotSure: z.boolean(),
    venueName: z.string().optional(),
    area: z.string().optional(),
    venueNotConfirmed: z.boolean(),
    guestCount: z.enum(["under-50", "50-100", "100-200", "200-plus"]).optional(),
    weddingMusicParts: z.array(z.string()),
    weddingExperience: z.string().optional(),
    corporateEventType: z.string().optional(),
    needsMicrophones: z.string().optional(),
    privateAtmosphere: z.string().optional(),
    otherDetails: z.string().optional(),
    musicStyles: z.array(z.string()),
    enhancements: z.array(z.string()),
    name: z.string().min(2, "Add your name."),
    email: z.string().email("Use a valid email address."),
    phone: z.string().min(6, "Add a phone or WhatsApp number."),
    message: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.eventDate && !data.dateNotSure) {
      ctx.addIssue({
        code: "custom",
        path: ["eventDate"],
        message: "Choose a date or mark it as not sure yet.",
      });
    }

    if (!data.venueNotConfirmed && !data.venueName?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["venueName"],
        message: "Add a venue name or mark the venue as not confirmed.",
      });
    }

    if (!data.area?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["area"],
        message: "Add the area or city.",
      });
    }

    if (!data.guestCount) {
      ctx.addIssue({
        code: "custom",
        path: ["guestCount"],
        message: "Choose an estimated guest count.",
      });
    }

    if (data.eventType === "wedding") {
      if (!data.weddingMusicParts.length) {
        ctx.addIssue({
          code: "custom",
          path: ["weddingMusicParts"],
          message: "Choose at least one part of the day.",
        });
      }
      if (!data.weddingExperience) {
        ctx.addIssue({
          code: "custom",
          path: ["weddingExperience"],
          message: "Choose an experience interest.",
        });
      }
    }

    if (data.eventType === "corporate") {
      if (!data.corporateEventType) {
        ctx.addIssue({
          code: "custom",
          path: ["corporateEventType"],
          message: "Choose the event type.",
        });
      }
      if (!data.needsMicrophones) {
        ctx.addIssue({
          code: "custom",
          path: ["needsMicrophones"],
          message: "Let us know if microphones are needed.",
        });
      }
    }

    if (data.eventType === "private" && !data.privateAtmosphere) {
      ctx.addIssue({
        code: "custom",
        path: ["privateAtmosphere"],
        message: "Choose the atmosphere you want.",
      });
    }

    if (data.eventType === "other" && !data.otherDetails?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["otherDetails"],
        message: "Share a little about the event.",
      });
    }

    if (!data.musicStyles.length) {
      ctx.addIssue({
        code: "custom",
        path: ["musicStyles"],
        message: "Choose at least one music style.",
      });
    }
  });

export type PlanEventValues = z.infer<typeof planEventSchema>;

export const defaultPlanEventValues: PlanEventValues = {
  eventType: "wedding",
  eventDate: "",
  dateNotSure: false,
  venueName: "",
  area: "",
  venueNotConfirmed: false,
  guestCount: undefined,
  weddingMusicParts: ["Ceremony", "Canapes", "Reception"],
  weddingExperience: "Premium Wedding Experience",
  corporateEventType: "",
  needsMicrophones: "",
  privateAtmosphere: "",
  otherDetails: "",
  musicStyles: [],
  enhancements: [],
  name: "",
  email: "",
  phone: "",
  message: "",
};
