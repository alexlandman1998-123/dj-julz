import { NextResponse } from "next/server";

import { planEventSchema } from "@/lib/plan-event-schema";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const result = planEventSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the planner details.",
        issues: result.error.flatten(),
      },
      { status: 400 },
    );
  }

  const eventPlan = {
    submittedAt: new Date().toISOString(),
    source: "dj-julz-plan-page",
    eventType: result.data.eventType,
    date: {
      eventDate: result.data.eventDate,
      dateNotSure: result.data.dateNotSure,
    },
    venue: {
      venueName: result.data.venueName,
      area: result.data.area,
      venueNotConfirmed: result.data.venueNotConfirmed,
    },
    guests: result.data.guestCount,
    conditionalResponses: {
      weddingMusicParts: result.data.weddingMusicParts,
      weddingExperience: result.data.weddingExperience,
      corporateEventType: result.data.corporateEventType,
      needsMicrophones: result.data.needsMicrophones,
      privateAtmosphere: result.data.privateAtmosphere,
      otherDetails: result.data.otherDetails,
    },
    musicPreferences: result.data.musicStyles,
    enhancements: result.data.enhancements,
    contactDetails: {
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone,
    },
    message: result.data.message,
  };

  return NextResponse.json({
    ok: true,
    message: "Event plan received.",
    eventPlan,
  });
}
