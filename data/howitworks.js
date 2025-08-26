import { UserPlus, FileEdit, Video, Calendar } from "lucide-react";

export const howitworks = [
  {
    title: "Student Onboarding",
    description: "Provide your academic details, interests, and skills for personalized guidance.",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Build Your Roadmap",
    description: "Follow a dynamic multi-year career and skill-building roadmap with actionable tasks.",
    icon: <Calendar className="w-8 h-8 text-primary" />,
  },
  {
    title: "Mock Interview Practice",
    description:
      "Conduct AI-powered mock interviews with video and voice analysis to improve answers, confidence, and body language.",
    icon: <Video className="w-8 h-8 text-primary" />,
  },
  {
    title: "Smart Resume & Insights",
    description: "Generate AI-assisted, ATS-friendly resumes and get future-proof industry insights.",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
];
