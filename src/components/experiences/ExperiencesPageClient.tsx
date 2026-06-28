"use client";

import { useState } from "react";

import { ConsultationCTA } from "@/components/experiences/ConsultationCTA";
import { EnhancementCards } from "@/components/experiences/EnhancementCards";
import { EventTimeline } from "@/components/experiences/EventTimeline";
import { ExperiencePreviewCards } from "@/components/experiences/ExperiencePreviewCards";
import { ExperienceSelector } from "@/components/experiences/ExperienceSelector";
import { FeaturedExperience } from "@/components/experiences/FeaturedExperience";
import { IncludedAccordion } from "@/components/experiences/IncludedAccordion";
import { PhilosophyBreak } from "@/components/experiences/PhilosophyBreak";
import { experiences } from "@/data/experiences";

export function ExperiencesPageClient() {
  const [selectedId, setSelectedId] = useState(experiences[0].id);
  const selectedIndex = experiences.findIndex(
    (experience) => experience.id === selectedId,
  );
  const selected =
    experiences.find((experience) => experience.id === selectedId) ?? experiences[0];

  function selectExperience(id: string) {
    setSelectedId(id);
    window.requestAnimationFrame(() => {
      document
        .querySelector("#featured-experience")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <>
      <ExperienceSelector
        experiences={experiences}
        selectedId={selected.id}
        onSelect={selectExperience}
      />
      <FeaturedExperience
        experience={selected}
        number={String(selectedIndex + 1).padStart(2, "0")}
      />
      <IncludedAccordion experience={selected} />
      <EventTimeline />
      <EnhancementCards />
      <PhilosophyBreak />
      <ExperiencePreviewCards
        experiences={experiences}
        selectedId={selected.id}
        onSelect={selectExperience}
      />
      <ConsultationCTA />
    </>
  );
}
