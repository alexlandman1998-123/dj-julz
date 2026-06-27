"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AvailabilityCalendar() {
  return (
    <Card className="rounded-[1.5rem]">
      <CardHeader>
        <CardTitle>Availability snapshot</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          className="rounded-xl border border-border"
          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
        />
      </CardContent>
    </Card>
  );
}
