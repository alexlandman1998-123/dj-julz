"use client";

import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/shared/motion";
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
  const [error, setError] = useState("");
  const reduceMotion = useReducedMotion();
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
    setError("");
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  function goNext() {
    if (!answers[currentStep.key].trim()) {
      setError("Add a quick answer to continue.");
      return;
    }

    setStep((current) => current + 1);
  }

  return (
    <section id="planner" className="section-spacing px-5">
      <div className="mx-auto max-w-md">
        <Reveal>
          <p className="eyebrow">Build Your Night Planner</p>
          <h2 className="section-title mt-3">Shape the booking in a few steps.</h2>
        </Reveal>
        <div className="premium-card mt-8 overflow-hidden">
          <div className="border-b border-border bg-surface p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-foreground">
                {complete ? "Summary" : `Step ${step + 1} of ${steps.length}`}
              </p>
              <p className="caption">{Math.round(complete ? 100 : progress)}%</p>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-strong">
              <motion.div
                className="h-full rounded-full bg-sage transition-[width] duration-[var(--duration-base)]"
                initial={false}
                animate={{ width: `${complete ? 100 : progress}%` }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <div className="p-5">
            <AnimatePresence mode="wait" initial={false}>
              {!complete ? (
                <motion.div
                  key={currentStep.key}
                  initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: -18 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="font-heading text-4xl leading-none text-foreground">
                    {currentStep.title}
                  </h3>
                  <p className="caption mt-3">{currentStep.helper}</p>

                  {currentStep.key === "celebration" ? (
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {celebrationOptions.map((option) => {
                        const selected = answers.celebration === option;

                        return (
                          <motion.button
                            key={option}
                            type="button"
                            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                            onClick={() => updateAnswer("celebration", option)}
                            className={`min-h-16 rounded-3xl border px-4 text-left text-sm font-semibold outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/35 ${
                              selected
                                ? "border-sage bg-accent text-accent-foreground"
                                : "border-border bg-white text-foreground"
                            }`}
                          >
                            {option}
                          </motion.button>
                        );
                      })}
                    </div>
                  ) : (
                    <motion.label
                      className="mt-6 block"
                      animate={error && !reduceMotion ? { x: [0, -4, 4, 0] } : {}}
                      transition={{ duration: 0.22 }}
                    >
                      <span className="sr-only">{currentStep.title}</span>
                      <input
                        className={`min-h-14 w-full rounded-3xl border bg-white px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sage focus:ring-3 focus:ring-ring/25 ${
                          error ? "border-destructive" : "border-border"
                        }`}
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
                    </motion.label>
                  )}

                  <AnimatePresence>
                    {error ? (
                      <motion.p
                        className="mt-3 text-sm font-medium text-destructive"
                        role="status"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                      >
                        {error}
                      </motion.p>
                    ) : null}
                  </AnimatePresence>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      disabled={step === 0}
                      onClick={() => {
                        setError("");
                        setStep((current) => Math.max(current - 1, 0));
                      }}
                      variant="outline"
                    >
                      <ArrowLeft className="size-4" />
                      Back
                    </Button>
                    <Button type="button" onClick={goNext} variant="sage">
                      Next
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="summary"
                  initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"
                      initial={reduceMotion ? false : { scale: 0.6, rotate: -8 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <CheckCircle2 className="size-5" />
                    </motion.div>
                    <div>
                      <h3 className="font-heading text-4xl leading-none text-foreground">
                        Planner summary
                      </h3>
                      <p className="caption mt-3">
                        A clean snapshot of the enquiry before it becomes a booking
                        form.
                      </p>
                    </div>
                  </div>
                  <dl className="mt-6 grid gap-3 text-sm">
                    {answerKeys.map((key, index) => (
                      <motion.div
                        key={key}
                        className="rounded-3xl bg-surface p-4"
                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.035, duration: 0.22 }}
                      >
                        <dt className="font-semibold capitalize text-foreground">
                          {key.replace(/([A-Z])/g, " $1")}
                        </dt>
                        <dd className="mt-1 text-muted-foreground">
                          {answers[key] || "Not answered yet"}
                        </dd>
                      </motion.div>
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
