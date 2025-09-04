"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PersonalizedRoadmap from "../../components/PersonalizedRoadmap";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function RoadmapPage() {
  const [skillData, setSkillData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedData = localStorage.getItem('skillGapAnalysis');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setSkillData(parsedData);
      } catch (error) {
        console.error('Error loading saved skill gap data:', error);
        localStorage.removeItem('skillGapAnalysis');
      }
    }
    setLoading(false);
  }, []);

  const handleBackToAnalysis = () => {
    router.push('/skill-gap');
  };

  const handleStartOver = () => {
    localStorage.removeItem('skillGapAnalysis');
    router.push('/skill-gap');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black p-6 pt-20">
        <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <RefreshCw className="w-12 h-12 animate-spin text-blue-400 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">Loading your roadmap...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!skillData || !skillData.learningPath) {
    return (
      <div className="min-h-screen bg-black p-6 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-white mb-4">No Roadmaps Available</h1>
            <p className="text-gray-400 text-lg mb-8">
              Complete skill gap analysis to generate your personalized learning roadmap.
            </p>
            <Button variant="outline" onClick={() => router.push('/skill-gap')}>
              Complete Skill Gap Analysis
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-6 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-end mb-6">
            <Button variant="outline" onClick={handleStartOver}>
              <RefreshCw className="h-4 w-4" />
              Start Over
            </Button>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-4">
            Your Learning Roadmap
          </h1>
          <p className="text-gray-400 text-lg">
            Follow this personalized path to achieve your career goals
          </p>
        </div>

        {/* Roadmap Content */}
        <PersonalizedRoadmap 
          learningPath={skillData.learningPath} 
          careerAdvice={skillData.careerAdvice}
        />
      </div>
    </div>
  );
}
