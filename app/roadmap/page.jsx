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

  if (!skillData || !skillData.roadmapPhases) {
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
        <div className="space-y-8">
          {/* Profile Summary */}
          {skillData.metadata?.userProfile && (
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-bold text-white mb-4">Learning Profile</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{skillData.metadata.userProfile.timeline}</div>
                  <div className="text-gray-400 text-sm">Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{skillData.metadata.userProfile.intensityLevel}</div>
                  <div className="text-gray-400 text-sm">Intensity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{skillData.metadata.userProfile.hoursPerWeek}h</div>
                  <div className="text-gray-400 text-sm">Per Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{skillData.roadmapPhases?.length || 0}</div>
                  <div className="text-gray-400 text-sm">Phases</div>
                </div>
              </div>
            </div>
          )}

          {/* Roadmap Phases */}
          {skillData.roadmapPhases?.map((phase, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {phase.phase}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                  <p className="text-gray-400">{phase.duration}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{phase.description}</p>
              
              {/* Skills for this phase */}
              {phase.skills && (
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Skills to Learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {phase.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {phase.projects && phase.projects.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Projects ({phase.projects.length}):</h4>
                  <div className="space-y-3">
                    {phase.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="bg-gray-800/50 rounded-lg p-4">
                        <h5 className="text-white font-medium mb-2">{project.name}</h5>
                        <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-500">⏱️ {project.estimatedHours}h</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            project.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                            project.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {project.difficulty}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources */}
              {phase.resources && phase.resources.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Learning Resources ({phase.resources.length}):</h4>
                  <div className="space-y-3">
                    {phase.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="bg-gray-800/50 rounded-lg p-4">
                        <h5 className="text-white font-medium mb-2">{resource.name}</h5>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-400 capitalize">{resource.type}</span>
                          <span className="text-gray-500">⏱️ {resource.estimatedHours}h</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            resource.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                            resource.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {resource.difficulty}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Milestones */}
              {phase.milestones && phase.milestones.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-3">Milestones ({phase.milestones.length}):</h4>
                  <div className="space-y-3">
                    {phase.milestones.map((milestone, milestoneIndex) => (
                      <div key={milestoneIndex} className="bg-gray-800/50 rounded-lg p-4">
                        <h5 className="text-white font-medium mb-2">{milestone.name}</h5>
                        <p className="text-gray-400 text-sm mb-1">{milestone.description}</p>
                        <p className="text-gray-500 text-xs">{milestone.criteria}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Career Advice */}
          {skillData.careerAdvice && (
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">AI Career Advice</h3>
              <p className="text-gray-300 leading-relaxed">{skillData.careerAdvice}</p>
            </div>
          )}

          {/* Personalized Tips */}
          {skillData.personalizedTips && skillData.personalizedTips.length > 0 && (
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Success Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillData.personalizedTips.map((tip, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2 capitalize">{tip.category} Advice</h4>
                    <p className="text-gray-300 text-sm mb-2">{tip.tip}</p>
                    <p className="text-gray-400 text-xs italic">{tip.reasoning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
