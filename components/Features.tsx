"use client"

import * as React from "react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

type Feature = {
  id: string
  title: string
  description: string
  icon: string
  iconLabel: string
}

const features: Feature[] = [
  {
    id: "personalized-career-paths",
    title: "Personalized Career Paths",
    description:
      "Get 2–3 tailored career recommendations with skill gap analysis.",
    icon: "🎯",
    iconLabel: "Target icon for personalized recommendations",
  },
  {
    id: "multi-year-roadmap",
    title: "Multi-Year Roadmap",
    description:
      "Step-by-step skill-building roadmap with projects, internships, and interview prep.",
    icon: "📈",
    iconLabel: "Chart icon for growth roadmap",
  },
  {
    id: "industry-insights",
    title: "Industry Insights",
    description:
      "Future-proof career roles and emerging skills using Google Cloud AI insights.",
    icon: "💡",
    iconLabel: "Light bulb icon for insights",
  },
  {
    id: "ai-mock-interviews",
    title: "AI Mock Interviews",
    description:
      "Practice interviews with voice + video feedback, body language and tone analysis.",
    icon: "🎤",
    iconLabel: "Microphone icon for interviews",
  },
  {
    id: "ai-resume-builder",
    title: "AI Resume Builder",
    description:
      "Generate smart resumes with tailored career-specific recommendations.",
    icon: "📄",
    iconLabel: "Document icon for resume builder",
  },
  {
    id: "localization",
    title: "Localization",
    description: "English + Hindi UI support for wider accessibility.",
    icon: "🌐",
    iconLabel: "Globe icon for localization",
  },
]

export default function Features(): JSX.Element {
  return (
    <section
      aria-labelledby="features-heading"
      className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="features-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Powerful features to accelerate your career
        </h2>
        <p className="text-muted-foreground mt-3 text-base sm:text-lg">
          Everything you need, from personalized paths to AI interviews and resumes.
        </p>
      </div>

      <div
        role="list"
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature) => (
          <Card
            role="listitem"
            key={feature.id}
            aria-label={`${feature.title}: ${feature.description}`}
            className="transition-transform duration-200 ease-out hover:scale-[1.01] hover:shadow-lg"
          >
            <CardHeader className="flex flex-row items-start gap-4">
              <span
                aria-label={feature.iconLabel}
                role="img"
                className="bg-muted text-foreground inline-flex h-12 w-12 items-center justify-center rounded-lg text-2xl"
              >
                {feature.icon}
              </span>
              <div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {/* Reserved for future: links, CTAs, or small previews */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


