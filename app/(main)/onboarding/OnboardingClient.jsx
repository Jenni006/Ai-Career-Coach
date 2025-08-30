"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SkillAssessmentForm from "../../../components/SkillAssessmentForm";
import { industries } from "@/data/industries";
import { generatePersonalizedSkillGap } from "../../../lib/skillGapService";

export default function OnboardingClient() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (profile) => {
    setLoading(true);
    try {
      const skillGap = await generatePersonalizedSkillGap(profile);

      if (typeof window !== "undefined") {
        sessionStorage.setItem(
          "userCareerData",
          JSON.stringify({ profile, skillGap, createdAt: new Date().toISOString() })
        );
      }

      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SkillAssessmentForm
      industries={industries}
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
}
