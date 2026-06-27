"use client";

import { useMemo, useState } from "react";

const celebrationOptions = ["Wedding", "Corporate", "Birthday", "Other"];
const steps = [
  "What are we celebrating?",
  "Guest count",
  "Venue",
  "Music style",
  "Preferred date",
  "Contact details",
];

export function Planner() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    celebration: "Wedding",
    guestCount: "",
    venue: "",
    musicStyle: "",
    preferredDate: "",
    contact: "",
  });

  const complete = step >= steps.length;
  const progress = useMemo(
    () => Math.min(((step + 1) / steps.length) * 100, 100),
    [step],
  );

  function updateAnswer(key: string, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  return (
    <section id="planner" className="px-5 py-12">
      <div className="mx-auto max-w-md">
        <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Build Your Night Planner
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-neutral-900">
          Shape the booking in a few steps.
        </h2>
        <div className="mt-6 rounded-3xl border border-neutral-200 p-5">
          <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full bg-neutral-900"
              style={{ width: `${complete ? 100 : progress}%` }}
            />
          </div>

          {!complete ? (
            <div className="mt-6">
              <p className="text-sm text-neutral-500">
                Step {step + 1} of {steps.length}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                {steps[step]}
              </h3>

              {step === 0 ? (
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {celebrationOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => updateAnswer("celebration", option)}
                      className={`rounded-2xl border px-4 py-3 text-sm ${
                        answers.celebration === option
                          ? "border-neutral-900 bg-neutral-900 text-white"
                          : "border-neutral-200 bg-white text-neutral-900"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : (
                <input
                  className="mt-5 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm outline-none"
                  placeholder={steps[step]}
                  value={
                    answers[
                      [
                        "celebration",
                        "guestCount",
                        "venue",
                        "musicStyle",
                        "preferredDate",
                        "contact",
                      ][step]
                    ]
                  }
                  onChange={(event) =>
                    updateAnswer(
                      [
                        "celebration",
                        "guestCount",
                        "venue",
                        "musicStyle",
                        "preferredDate",
                        "contact",
                      ][step],
                      event.target.value,
                    )
                  }
                />
              )}

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  disabled={step === 0}
                  onClick={() => setStep((current) => Math.max(current - 1, 0))}
                  className="flex-1 rounded-full border border-neutral-300 px-4 py-3 text-sm font-medium text-neutral-900 disabled:opacity-40"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep((current) => current + 1)}
                  className="flex-1 rounded-full bg-neutral-900 px-4 py-3 text-sm font-medium text-white"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-neutral-900">
                Planner summary
              </h3>
              <dl className="mt-4 grid gap-3 text-sm">
                {Object.entries(answers).map(([key, value]) => (
                  <div key={key} className="rounded-2xl bg-neutral-100 p-4">
                    <dt className="font-medium capitalize text-neutral-900">
                      {key.replace(/([A-Z])/g, " $1")}
                    </dt>
                    <dd className="mt-1 text-neutral-600">
                      {value || "Not answered yet"}
                    </dd>
                  </div>
                ))}
              </dl>
              <button
                type="button"
                onClick={() => setStep(0)}
                className="mt-5 w-full rounded-full border border-neutral-300 px-4 py-3 text-sm font-medium text-neutral-900"
              >
                Edit answers
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
