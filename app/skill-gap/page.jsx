"use client";

import { useState, useEffect } from "react";
import { generateSkillGap } from "@/actions/dashboard";
import SkillGapAnalysis from "../../components/SkillGapAnalysis";
import SkillInputForm from "../../components/SkillInputForm";
import { Button } from "../../components/ui/button";
import { RefreshCw, TrendingUp } from "lucide-react";

export default function SkillGapPage() {
  const [skillData, setSkillData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('skillGapAnalysis');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setSkillData(parsedData);
        setShowForm(false);
      } catch (error) {
        console.error('Error loading saved skill gap data:', error);
        localStorage.removeItem('skillGapAnalysis');
      }
    }
  }, []);

  const handleSkillAnalysis = async (formData) => {
    try {
      setLoading(true);
      setShowForm(false);
      
      // Convert user skills to the format expected by generateSkillGap
      const currentSkills = formData.currentSkills.map(skill => skill.name);
      
      // Generate skill gap analysis
      const data = await generateSkillGap(
        formData.goalSpecialization,
        currentSkills,
        formData.currentSkills // Pass full skill objects for proficiency mapping
      );
      
      // Save to localStorage for persistence
      localStorage.setItem('skillGapAnalysis', JSON.stringify(data));
      setSkillData(data);
    } catch (error) {
      console.error("Error generating skill gap:", error);
      setShowForm(true); // Show form again on error
    } finally {
      setLoading(false);
    }
  };

  const handleStartOver = () => {
    // Clear saved data from localStorage
    localStorage.removeItem('skillGapAnalysis');
    setSkillData(null);
    setShowForm(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black p-6 pt-20">
      <div className="max-w-7xl mx-auto">
        {showForm ? (
          <div>
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-4">
                Skill Gap Analysis
              </h1>
              <p className="text-gray-400 text-lg">
                AI-powered insights to accelerate your career growth
              </p>
            </div>
            <SkillInputForm onSubmit={handleSkillAnalysis} loading={loading} />
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  Skill Gap Analysis
                </h1>
                  <div className="flex gap-3">
                    {skillData?.learningPath && (
                      <Button variant="outline" onClick={() => window.location.href = '/roadmap'}>
                        <TrendingUp className="h-4 w-4" />
                        View Roadmap
                      </Button>
                    )}
                    <Button variant="outline" onClick={handleStartOver}>
                      <RefreshCw className="h-4 w-4" />
                      Start Over
                    </Button>
                  </div>
                </div>
              </div>
            <SkillGapAnalysis skillGapData={skillData} loading={loading} />
          </div>
        )}
      </div>
    </div>
  );
}