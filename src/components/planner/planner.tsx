"use client";

import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Cake,
  CheckCircle2,
  Heart,
  MoreHorizontal,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const celebrationOptions = [
  { label: "Wedding", icon: Heart },
  { label: "Birthday", icon: Cake },
  { label: "Corporate", icon: BriefcaseBusiness },
  { label: "Other", icon: MoreHorizontal },
];
const answerKeys = [
  "celebration",
  "venue",
  "guestCount",
  "musicStyle",
  "preferredDate",
  "eventNotes",
  "contact",
] as const;

const steps: Array<{
  title: string;
  helper: string;
  key: (typeof answerKeys)[number];
  inputType?: string;
  example?: string;
  multiline?: boolean;
}> = [
  {
    title: "What are we celebrating?",
    helper: "Choose the event type so DJ Julz can guide you to the right experience.",
    key: "celebration",
  },
  {
    title: "Where will your event be held?",
    helper: "The venue helps shape sound coverage, setup time and travel.",
    key: "venue",
    example: "Venue name, suburb or city",
  },
  {
    title: "How many guests are you expecting?",
    helper: "An estimate is enough for the first conversation.",
    key: "guestCount",
    inputType: "number",
    example: "120",
  },
  {
    title: "What atmosphere would you like to create?",
    helper: "Share the mood, genres, must-play moments or anything to avoid.",
    key: "musicStyle",
    example: "Elegant dinner, family favourites, then a full dance floor",
  },
  {
    title: "When is your event?",
    helper: "Use the confirmed date or the date you are currently considering.",
    key: "preferredDate",
    inputType: "date",
  },
  {
    title: "What else should DJ Julz know?",
    helper:
      "Add timings, ceremony notes, sound needs, MC requests or anything important.",
    key: "eventNotes",
    example: "Ceremony at 15:00, speeches after mains, outdoor canape area",
    multiline: true,
  },
  {
    title: "How can DJ Julz reach you?",
    helper: "An email address or phone number is enough to check availability.",
    key: "contact",
    inputType: "text",
    example: "Your email or WhatsApp number",
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
    eventNotes: "",
    contact: "",
  });

  const complete = step >= steps.length;
  const currentStep = steps[Math.min(step, steps.length - 1)];
  const progress = useMemo(
    () => Math.min(((step + 1) / steps.length) * 100, 100),
    [step],
  );
  const summarySubject = encodeURIComponent("DJ Julz booking enquiry");
  const summaryBody = encodeURIComponent(
    `Hi DJ Julz,\n\nI'd like to enquire about an event.\n\nCelebration: ${answers.celebration}\nVenue: ${answers.venue}\nGuest count: ${answers.guestCount}\nAtmosphere: ${answers.musicStyle}\nPreferred date: ${answers.preferredDate}\nHelpful notes: ${answers.eventNotes}\nContact: ${answers.contact}\n\nThank you.`,
  );

  function updateAnswer(key: (typeof answerKeys)[number], value: string) {
    setError("");
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  function goNext() {
    if (!answers[currentStep.key].trim()) {
      setError("Add this detail so the enquiry is useful.");
      return;
    }

    setStep((current) => current + 1);
  }

  return (
    <section id="planner" className="section-spacing px-5 lg:px-8">
      <div className="mx-auto max-w-md lg:grid lg:max-w-6xl lg:grid-cols-[0.78fr_1fr] lg:items-start lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <p className="eyebrow">Start Planning Your Event</p>
          <h2 className="section-title mt-3">
            A simple way to check fit and availability.
          </h2>
          <p className="body-copy mt-5">
            A few thoughtful details are enough to start. DJ Julz will use them to
            understand the room, recommend the right setup and guide the next step.
          </p>
        </Reveal>
        <div className="premium-card mt-8 overflow-hidden lg:mt-0">
          <div className="border-b border-border bg-surface p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-foreground">
                {complete ? "Summary" : `Step ${step + 1} of ${steps.length}`}
              </p>
              <p className="caption">{Math.round(complete ? 100 : progress)}%</p>
            </div>
            <div className="mt-5 flex items-center justify-between">
              {steps.map((item, index) => {
                const activeStep = complete || index <= step;

                return (
                  <div
                    key={item.key}
                    className="flex flex-1 items-center last:flex-none"
                  >
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full border text-xs font-semibold transition-colors ${
                        activeStep
                          ? "border-sage bg-sage text-white"
                          : "border-border bg-white text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </span>
                    {index < steps.length - 1 ? (
                      <span
                        className={`mx-1 h-px flex-1 ${
                          index < step || complete ? "bg-sage/60" : "bg-border"
                        }`}
                      />
                    ) : null}
                  </div>
                );
              })}
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
                    <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                      {celebrationOptions.map((option) => {
                        const selected = answers.celebration === option.label;

                        return (
                          <motion.button
                            key={option.label}
                            type="button"
                            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                            onClick={() => updateAnswer("celebration", option.label)}
                            className={`flex min-h-16 items-center gap-3 rounded-2xl border px-4 text-left text-sm font-semibold outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/35 ${
                              selected
                                ? "border-sage bg-accent text-accent-foreground"
                                : "border-border bg-white text-foreground"
                            }`}
                          >
                            <option.icon className="size-5 text-sage" />
                            {option.label}
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
                      {currentStep.multiline ? (
                        <textarea
                          className={`min-h-32 w-full rounded-2xl border bg-white px-4 py-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sage focus:ring-3 focus:ring-ring/25 ${
                            error ? "border-destructive" : "border-border"
                          }`}
                          placeholder={currentStep.example}
                          value={answers[currentStep.key]}
                          onChange={(event) =>
                            updateAnswer(currentStep.key, event.target.value)
                          }
                        />
                      ) : (
                        <input
                          className={`min-h-14 w-full rounded-2xl border bg-white px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sage focus:ring-3 focus:ring-ring/25 ${
                            error ? "border-destructive" : "border-border"
                          }`}
                          inputMode={
                            currentStep.inputType === "number" ? "numeric" : undefined
                          }
                          type={currentStep.inputType ?? "text"}
                          placeholder={currentStep.example}
                          value={answers[currentStep.key]}
                          onChange={(event) =>
                            updateAnswer(currentStep.key, event.target.value)
                          }
                        />
                      )}
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
                      Previous
                    </Button>
                    <Button type="button" onClick={goNext} variant="sage">
                      Continue
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
                        Your planning snapshot
                      </h3>
                      <p className="caption mt-3">
                        Send this through and DJ Julz can respond with date
                        availability, setup guidance and a recommended experience.
                      </p>
                    </div>
                  </div>
                  <dl className="mt-6 grid gap-3 text-sm">
                    {answerKeys.map((key, index) => (
                      <motion.div
                        key={key}
                        className="rounded-2xl bg-surface p-4"
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
                    Refine the details
                  </Button>
                  <Button asChild variant="sage" className="mt-3 w-full">
                    <Link
                      href={`mailto:${siteConfig.email}?subject=${summarySubject}&body=${summaryBody}`}
                      data-analytics="planner_email_enquiry"
                    >
                      Send enquiry
                      <ArrowRight className="size-4" />
                    </Link>
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
