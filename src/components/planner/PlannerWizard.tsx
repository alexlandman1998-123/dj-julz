"use client";

import { ArrowLeft, Home, ListMusic, Send } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { CalendarStep } from "@/components/planner/CalendarStep";
import { ConditionalSteps } from "@/components/planner/ConditionalSteps";
import { GuestCountStep } from "@/components/planner/GuestCountStep";
import { MobileStickyFooter } from "@/components/planner/MobileStickyFooter";
import { OptionCard } from "@/components/planner/OptionCard";
import { PlannerNavigation } from "@/components/planner/PlannerNavigation";
import { ProgressHeader } from "@/components/planner/ProgressHeader";
import { QuestionCard } from "@/components/planner/QuestionCard";
import { SummaryPanel } from "@/components/planner/SummaryPanel";
import { TrustStrip } from "@/components/planner/TrustStrip";
import { Button } from "@/components/ui/button";
import {
  enhancementOptions,
  eventTypeOptions,
  musicStyles,
  plannerSteps,
} from "@/data/planner";
import {
  defaultPlanEventValues,
  planEventSchema,
  type PlanEventValues,
} from "@/lib/plan-event-schema";

const storageKey = "dj-julz-event-plan";

type StoredPlan = {
  step: number;
  values: PlanEventValues;
};

const questionCopy = [
  {
    title: "What are we celebrating?",
    helper: "Choose the event type so DJ Julz can guide you to the right experience.",
  },
  {
    title: "When is your event?",
    helper: "Choose your confirmed date, or mark it as not sure yet.",
  },
  {
    title: "Where is your event?",
    helper: "A venue or area helps shape sound coverage, setup time and travel.",
  },
  {
    title: "How many guests?",
    helper: "An estimate is perfect for now.",
  },
  {
    title: "A few event details.",
    helper: "This step adapts to the event you are planning.",
  },
  {
    title: "What should the night sound like?",
    helper:
      "Choose music styles and optional enhancements. You can select more than one.",
  },
  {
    title: "Where should Julz send your recommendation?",
    helper: "Review the plan, add your details and send the enquiry.",
  },
] as const;

export function PlannerWizard() {
  const [step, setStep] = useState(0);
  const [stepError, setStepError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const reduceMotion = useReducedMotion();
  const form = useForm<PlanEventValues>({
    defaultValues: defaultPlanEventValues,
    mode: "onChange",
  });
  const values = form.watch();

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);

    if (!stored) {
      return;
    }

    try {
      const parsed = JSON.parse(stored) as StoredPlan;
      form.reset({ ...defaultPlanEventValues, ...parsed.values });
      setStep(Math.min(Math.max(parsed.step, 0), plannerSteps.length - 1));
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }, [form]);

  useEffect(() => {
    if (submitted) {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify({ step, values }));
  }, [step, submitted, values]);

  const canContinue = useMemo(() => isStepComplete(step, values), [step, values]);
  const isLastStep = step === plannerSteps.length - 1;

  function setArrayValue(field: "musicStyles" | "enhancements", option: string) {
    const current = form.getValues(field);
    form.setValue(
      field,
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
      { shouldDirty: true, shouldValidate: true },
    );
  }

  function goBack() {
    setStepError("");
    setServerError("");
    setStep((current) => Math.max(0, current - 1));
  }

  async function goNext() {
    setServerError("");

    if (!isStepComplete(step, form.getValues())) {
      setStepError(getStepError(step, form.getValues()));
      return;
    }

    setStepError("");

    if (!isLastStep) {
      setStep((current) => Math.min(plannerSteps.length - 1, current + 1));
      return;
    }

    const finalValues = form.getValues();
    const parsed = planEventSchema.safeParse(finalValues);

    if (!parsed.success) {
      setStepError("A few details need attention before sending.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/plan-your-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error("Planner submission failed.");
      }

      window.localStorage.removeItem(storageKey);
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-[1.35rem] border border-border bg-white p-8 text-center shadow-[0_22px_70px_rgb(24_24_27_/_0.08)] lg:p-12">
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-accent text-sage">
            <Send className="size-6" />
          </span>
          <h2 className="mt-8 font-heading text-[3.5rem] leading-[0.92] text-foreground lg:text-[5rem]">
            You&apos;re all set.
          </h2>
          <p className="body-copy mx-auto mt-5 max-w-md">
            Julz has received your event plan. We&apos;ll be in touch shortly with
            availability and a personalised recommendation.
          </p>
          <div className="mt-8 grid gap-3 sm:flex sm:justify-center">
            <Button asChild variant="sage" size="lg">
              <Link href="/">
                <Home className="size-4" />
                Return Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/experiences">
                <ListMusic className="size-4" />
                View Experiences
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 pb-32 lg:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-md gap-7 lg:max-w-6xl lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <div>
          <div className="overflow-hidden rounded-[1.35rem] border border-border bg-white shadow-[0_22px_70px_rgb(24_24_27_/_0.07)]">
            <ProgressHeader step={step} />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={step}
                initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -18 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <QuestionCard
                  title={questionCopy[step].title}
                  helper={questionCopy[step].helper}
                  error={stepError || serverError}
                >
                  {renderStep(step, form, values, setArrayValue)}
                </QuestionCard>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between border-t border-border px-5 py-4 lg:hidden">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0 || isSubmitting}
                className="inline-flex min-h-11 items-center gap-2 rounded-full px-1 text-sm font-semibold text-muted-foreground outline-none disabled:opacity-40 focus-visible:ring-3 focus-visible:ring-ring/35"
              >
                <ArrowLeft className="size-4" />
                Previous
              </button>
              <Button
                type="button"
                variant="sage"
                size="sm"
                disabled={!canContinue || isSubmitting}
                loading={isSubmitting}
                onClick={goNext}
              >
                {isLastStep ? "Send" : "Continue"}
              </Button>
            </div>

            <PlannerNavigation
              canGoBack={step > 0}
              canContinue={canContinue}
              isLastStep={isLastStep}
              isSubmitting={isSubmitting}
              onBack={goBack}
              onContinue={goNext}
            />
          </div>
          <TrustStrip />
        </div>

        <div className="hidden lg:block">
          <SummaryPanel values={values} onEdit={() => setStep(0)} />
        </div>
      </div>

      <MobileStickyFooter
        canContinue={canContinue}
        isLastStep={isLastStep}
        isSubmitting={isSubmitting}
        onContinue={goNext}
      />
    </section>
  );
}

function renderStep(
  step: number,
  form: ReturnType<typeof useForm<PlanEventValues>>,
  values: PlanEventValues,
  setArrayValue: (field: "musicStyles" | "enhancements", option: string) => void,
) {
  if (step === 0) {
    return (
      <div className="grid gap-3 lg:grid-cols-4">
        {eventTypeOptions.map((option) => (
          <OptionCard
            key={option.value}
            label={option.label}
            description={option.description}
            icon={option.icon}
            selected={values.eventType === option.value}
            onClick={() =>
              form.setValue("eventType", option.value, {
                shouldDirty: true,
                shouldValidate: true,
              })
            }
          />
        ))}
      </div>
    );
  }

  if (step === 1) {
    return <CalendarStep form={form} />;
  }

  if (step === 2) {
    return (
      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-foreground">Venue name</span>
          <input
            className="min-h-14 rounded-2xl border border-border bg-white px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sage focus:ring-3 focus:ring-ring/25"
            placeholder="Venue name"
            disabled={values.venueNotConfirmed}
            {...form.register("venueName")}
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-foreground">Area / City</span>
          <input
            className="min-h-14 rounded-2xl border border-border bg-white px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sage focus:ring-3 focus:ring-ring/25"
            placeholder="Pretoria, Johannesburg, Centurion..."
            {...form.register("area")}
          />
        </label>
        <button
          type="button"
          onClick={() =>
            form.setValue("venueNotConfirmed", !values.venueNotConfirmed, {
              shouldDirty: true,
            })
          }
          className="min-h-12 rounded-2xl border border-border bg-surface px-4 text-left text-sm font-semibold text-foreground outline-none transition-colors hover:bg-surface-strong focus-visible:ring-3 focus-visible:ring-ring/35"
        >
          {values.venueNotConfirmed
            ? "Venue not confirmed selected"
            : "Venue not confirmed"}
        </button>
      </div>
    );
  }

  if (step === 3) {
    return <GuestCountStep form={form} />;
  }

  if (step === 4) {
    return <ConditionalSteps form={form} />;
  }

  if (step === 5) {
    return (
      <div className="grid gap-8">
        <div>
          <h3 className="text-sm font-bold text-foreground">Preferred styles</h3>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            {musicStyles.map((style) => (
              <OptionCard
                key={style}
                label={style}
                selected={values.musicStyles.includes(style)}
                onClick={() => setArrayValue("musicStyles", style)}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">Optional enhancements</h3>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            {enhancementOptions.map((enhancement) => (
              <OptionCard
                key={enhancement}
                label={enhancement}
                selected={values.enhancements.includes(enhancement)}
                onClick={() => setArrayValue("enhancements", enhancement)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-foreground">Name</span>
          <input
            className="min-h-14 rounded-2xl border border-border bg-white px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sage focus:ring-3 focus:ring-ring/25"
            placeholder="Your name"
            {...form.register("name")}
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-foreground">Phone</span>
          <input
            className="min-h-14 rounded-2xl border border-border bg-white px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sage focus:ring-3 focus:ring-ring/25"
            placeholder="WhatsApp or phone number"
            {...form.register("phone")}
          />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-foreground">Email</span>
        <input
          type="email"
          className="min-h-14 rounded-2xl border border-border bg-white px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sage focus:ring-3 focus:ring-ring/25"
          placeholder="you@example.com"
          {...form.register("email")}
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-foreground">Message</span>
        <textarea
          className="min-h-28 rounded-2xl border border-border bg-white px-4 py-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sage focus:ring-3 focus:ring-ring/25"
          placeholder="Anything else Julz should know?"
          {...form.register("message")}
        />
      </label>
      <div className="rounded-[1.15rem] border border-border bg-surface p-4 lg:hidden">
        <p className="eyebrow">Review Summary</p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {values.eventType} event, {values.guestCount || "guest count pending"},{" "}
          {values.area || "location pending"}.
        </p>
      </div>
    </div>
  );
}

function isStepComplete(step: number, values: PlanEventValues) {
  if (step === 0) {
    return Boolean(values.eventType);
  }

  if (step === 1) {
    return Boolean(values.eventDate || values.dateNotSure);
  }

  if (step === 2) {
    return Boolean(
      values.area?.trim() && (values.venueName?.trim() || values.venueNotConfirmed),
    );
  }

  if (step === 3) {
    return Boolean(values.guestCount);
  }

  if (step === 4) {
    if (values.eventType === "wedding") {
      return Boolean(values.weddingMusicParts.length && values.weddingExperience);
    }
    if (values.eventType === "corporate") {
      return Boolean(values.corporateEventType && values.needsMicrophones);
    }
    if (values.eventType === "private") {
      return Boolean(values.privateAtmosphere);
    }

    return Boolean(values.otherDetails?.trim());
  }

  if (step === 5) {
    return values.musicStyles.length > 0;
  }

  return Boolean(
    values.name.trim() && values.email.includes("@") && values.phone.trim().length >= 6,
  );
}

function getStepError(step: number, values: PlanEventValues) {
  if (step === 1) {
    return "Choose a date or select 'I'm not sure yet'.";
  }
  if (step === 2) {
    return "Add the event area and venue details, or mark the venue as not confirmed.";
  }
  if (step === 4 && values.eventType === "other") {
    return "Tell us a little about your event.";
  }
  if (step === 5) {
    return "Choose at least one music style.";
  }
  if (step === 6) {
    return "Add your name, email and phone number so Julz can reply.";
  }

  return "Choose an option to continue.";
}
