"use client";

import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

const celebrationOptions = ["Wedding", "Corporate", "Birthday", "Other"];
const answerKeys = [
  "celebration",
  "guestCount",
  "venue",
  "musicStyle",
  "preferredDate",
  "contact",
] as const;

const steps: Array<{
  title: string;
  helper: string;
  key: (typeof answerKeys)[number];
  inputType?: string;
  placeholder?: string;
}> = [
  {
    title: "What are we celebrating?",
    helper: "Choose the event type so the enquiry starts in the right place.",
    key: "celebration",
  },
  {
    title: "Guest count",
    helper: "An estimate is perfect for now.",
    key: "guestCount",
    inputType: "number",
    placeholder: "120 guests",
  },
  {
    title: "Venue",
    helper: "Share the venue name, city, or what you know so far.",
    key: "venue",
    placeholder: "Bespoke venue, Cape Town",
  },
  {
    title: "Music style",
    helper: "A few words about the mood, crowd, or must-play direction.",
    key: "musicStyle",
    placeholder: "Soulful dinner, classics, then upbeat dance floor",
  },
  {
    title: "Preferred date",
    helper: "Add the date you have in mind.",
    key: "preferredDate",
    inputType: "date",
  },
  {
    title: "Contact details",
    helper: "An email or phone number is enough to continue the booking.",
    key: "contact",
    inputType: "email",
    placeholder: "name@example.com",
  },
];

export function Planner() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<(typeof answerKeys)[number], string>>({
    celebration: "Wedding",
    guestCount: "",
    venue: "",
    musicStyle: "",
    preferredDate: "",
    contact: "",
  });

  const complete = step >= steps.length;
  const currentStep = steps[Math.min(step, steps.length - 1)];
  const progress = useMemo(
    () => Math.min(((step + 1) / steps.length) * 100, 100),
    [step],
  );

  function updateAnswer(key: (typeof answerKeys)[number], value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  return (
    <section id="planner" className="section-spacing px-5">
      <div className="mx-auto max-w-md">
        <p className="eyebrow">Build Your Night Planner</p>
        <h2 className="section-title mt-3">Shape the booking in a few steps.</h2>
        <div className="premium-card mt-8 overflow-hidden">
          <div className="border-b border-border bg-surface p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-foreground">
                {complete ? "Summary" : `Step ${step + 1} of ${steps.length}`}
              </p>
              <p className="caption">{Math.round(complete ? 100 : progress)}%</p>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-strong">
              <div
                className="h-full rounded-full bg-sage transition-[width] duration-[var(--duration-base)]"
                style={{ width: `${complete ? 100 : progress}%` }}
              />
            </div>
          </div>

          <div className="p-5">
            {!complete ? (
              <>
                <h3 className="font-heading text-4xl leading-none text-foreground">
                  {currentStep.title}
                </h3>
                <p className="caption mt-3">{currentStep.helper}</p>

                {currentStep.key === "celebration" ? (
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {celebrationOptions.map((option) => {
                      const selected = answers.celebration === option;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => updateAnswer("celebration", option)}
                          className={`min-h-16 rounded-3xl border px-4 text-left text-sm font-semibold outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/35 ${
                            selected
                              ? "border-sage bg-accent text-accent-foreground"
                              : "border-border bg-white text-foreground"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <label className="mt-6 block">
                    <span className="sr-only">{currentStep.title}</span>
                    <input
                      className="min-h-14 w-full rounded-3xl border border-border bg-white px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sage focus:ring-3 focus:ring-ring/25"
                      inputMode={
                        currentStep.inputType === "number" ? "numeric" : undefined
                      }
                      type={currentStep.inputType ?? "text"}
                      placeholder={currentStep.placeholder}
                      value={answers[currentStep.key]}
                      onChange={(event) =>
                        updateAnswer(currentStep.key, event.target.value)
                      }
                    />
                  </label>
                )}

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    disabled={step === 0}
                    onClick={() => setStep((current) => Math.max(current - 1, 0))}
                    variant="outline"
                  >
                    <ArrowLeft className="size-4" />
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep((current) => current + 1)}
                    variant="sage"
                  >
                    Next
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start gap-3">
                  <div className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-4xl leading-none text-foreground">
                      Planner summary
                    </h3>
                    <p className="caption mt-3">
                      A clean snapshot of the enquiry before it becomes a booking form.
                    </p>
                  </div>
                </div>
                <dl className="mt-6 grid gap-3 text-sm">
                  {answerKeys.map((key) => (
                    <div key={key} className="rounded-3xl bg-surface p-4">
                      <dt className="font-semibold capitalize text-foreground">
                        {key.replace(/([A-Z])/g, " $1")}
                      </dt>
                      <dd className="mt-1 text-muted-foreground">
                        {answers[key] || "Not answered yet"}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Button
                  type="button"
                  onClick={() => setStep(0)}
                  variant="outline"
                  className="mt-6 w-full"
                >
                  Edit answers
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
