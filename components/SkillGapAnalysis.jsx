"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  TrendingUp, Target, BookOpen, CheckCircle, AlertCircle, Star, Loader2, Briefcase, 
  Clock, Calendar, User, Award, BarChart3, PieChart, CheckSquare, Square,
  PlayCircle, ExternalLink, Lightbulb, Trophy, Zap, Brain
} from 'lucide-react';
import { Progress } from './ui/progress';
import PersonalizedRoadmap from './PersonalizedRoadmap';

/**
 * NOTE: Changes vs your version
 * - Persist roadmap item completion to localStorage (scoped by target role)
 * - Load persisted completion on mount
 * - Reset button to clear saved progress
 */

const SkillGapAnalysis = ({ skillGapData: propData, loading = false }) => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [animateCharts, setAnimateCharts] = useState(false);
  const [completedItems, setCompletedItems] = useState(new Set());

  // Use prop data with comprehensive structure
  const skillGapData = propData || {
    skillGaps: [],
    roadmapPhases: [],
    personalizedTips: [],
    careerAdvice: "",
    estimatedOutcome: {},
    metadata: {}
  };

  // ======= STORAGE KEY (scoped per target role) =======
  const targetRole = skillGapData?.metadata?.userProfile?.targetRole || "default";
  const storageKey = useMemo(
    () => `sg_roadmapProgress:${targetRole}`,
    [targetRole]
  );

  // Calculate metrics from the new data structure
  const skillGaps = skillGapData.skillGaps || [];
  const roadmapPhases = skillGapData.roadmapPhases || [];
  const personalizedTips = skillGapData.personalizedTips || [];
  
  const overallProgress = skillGaps.length > 0 ? Math.round(
    (skillGaps.reduce((sum, skill) => sum + (Number(skill.currentLevel) || 0), 0) / 
     (skillGaps.length * 100)) * 100
  ) : 0;

  const criticalGaps = skillGaps.filter(skill => skill.priority === 'high').length;
  const completedSkills = skillGaps.filter(skill => Number(skill.currentLevel) >= Number(skill.targetLevel)).length;
  
  // Calculate total progress across all phases
  const totalItems = roadmapPhases.reduce((total, phase) => {
    return total + (phase.projects?.length || 0) + (phase.resources?.length || 0) + (phase.milestones?.length || 0);
  }, 0);
  
  const roadmapProgress = totalItems > 0 ? Math.round((completedItems.size / totalItems) * 100) : 0;

  // ======= PERSISTENCE: LOAD ON MOUNT / ROLE CHANGE =======
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const arr = JSON.parse(saved);
        if (Array.isArray(arr)) setCompletedItems(new Set(arr));
      } else {
        setCompletedItems(new Set());
      }
    } catch (e) {
      console.warn("Could not parse saved roadmap progress:", e);
      setCompletedItems(new Set());
    }
  }, [storageKey]);

  // Chart animation
  useEffect(() => {
    const timer = setTimeout(() => setAnimateCharts(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, color = '#3b82f6' }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (animateCharts ? (percentage / 100) * circumference : 0);

    return (
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#374151"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
    );
  };

  const SkillGapCard = ({ skill }) => {
    const currentPercentage = (Number(skill.currentLevel) / Math.max(1, Number(skill.targetLevel))) * 100;

    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02]">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-white font-semibold">{skill.skill}</h3>
            <p className="text-gray-400 text-sm capitalize">{skill.category}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              skill.priority === 'high' ? 'bg-red-500/20 text-red-400' :
              skill.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-green-500/20 text-green-400'
            }`}>
              {skill.priority}
            </span>
            {skill.marketDemand && (
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                skill.marketDemand === 'high' ? 'bg-green-500/20 text-green-400' :
                skill.marketDemand === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {skill.marketDemand} demand
              </span>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Current: {skill.currentLevel}%</span>
            <span className="text-gray-400">Target: {skill.targetLevel}%</span>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div className="h-full relative">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                style={{ width: animateCharts ? `${Math.min(currentPercentage, 100)}%` : '0%' }}
              />
            </div>
          </div>
          
          <div className="flex justify-between text-xs">
            <span className="text-blue-400">Progress</span>
            <span className="text-gray-500">Gap: {Math.max(0, Number(skill.targetLevel) - Number(skill.currentLevel))}%</span>
          </div>
          
          {skill.reasoning && <p className="text-gray-400 text-xs mt-2">{skill.reasoning}</p>}
        </div>
      </div>
    );
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'roadmap', label: 'Learning Roadmap', icon: TrendingUp },
    { id: 'progress', label: 'Progress Tracking', icon: CheckCircle },
    { id: 'analytics', label: 'Visual Analytics', icon: PieChart },
    { id: 'tips', label: 'Success Tips', icon: Lightbulb }
  ];

  // ======= TOGGLE + SAVE =======
  const toggleItemCompletion = (type, phaseIndex, itemIndex) => {
    const itemId = `${type}-${phaseIndex}-${itemIndex}`;
    const updated = new Set(completedItems);

    if (updated.has(itemId)) updated.delete(itemId);
    else updated.add(itemId);

    setCompletedItems(updated);
    // persist
    try {
      localStorage.setItem(storageKey, JSON.stringify(Array.from(updated)));
    } catch (e) {
      console.warn("Could not save roadmap progress:", e);
    }
  };

  const resetProgress = () => {
    setCompletedItems(new Set());
    try {
      localStorage.removeItem(storageKey);
    } catch {}
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black p-6 pt-20">
        <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-blue-400 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">Analyzing your skill gaps with AI...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-gray-700">
          <div className="flex gap-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-t-lg font-medium transition-all ${
                    selectedTab === tab.id
                      ? 'bg-blue-600 text-white border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Reset Progress */}
          <div className="ml-auto pb-2">
            <button
              onClick={resetProgress}
              className="text-sm px-3 py-1 rounded border border-gray-600 text-gray-300 hover:bg-gray-800"
              title={`Clear saved progress for ${targetRole}`}
            >
              Reset Progress
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {selectedTab === 'overview' && (
          <div className="space-y-8">
            {/* Profile Summary */}
            {skillGapData.metadata?.userProfile && (
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-6 h-6 text-blue-400" />
                  <h2 className="text-xl font-bold text-white">Your Learning Profile</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <Calendar className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-white font-medium">{skillGapData.metadata.userProfile.timeline}</div>
                    <div className="text-gray-400 text-sm">Timeline</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                    <div className="text-white font-medium">{skillGapData.metadata.userProfile.intensityLevel}</div>
                    <div className="text-gray-400 text-sm">Intensity</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-white font-medium">{skillGapData.metadata.userProfile.hoursPerWeek}h/week</div>
                    <div className="text-gray-400 text-sm">Commitment</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <Target className="w-6 h-6 text-red-400 mx-auto mb-2" />
                    <div className="text-white font-medium">{targetRole}</div>
                    <div className="text-gray-400 text-sm">Target Role</div>
                  </div>
                </div>
              </div>
            )}

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold mb-2">Skill Progress</h3>
                    <p className="text-gray-400 text-sm">Current skill level</p>
                  </div>
                  <CircularProgress percentage={overallProgress} size={80} />
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold mb-2">Roadmap Progress</h3>
                    <p className="text-gray-400 text-sm">Learning path completion</p>
                  </div>
                  <CircularProgress percentage={roadmapProgress} size={80} color="#10b981" />
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-center">
                  <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-red-400">{criticalGaps}</div>
                  <div className="text-sm text-gray-400">High Priority Skills</div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="text-center">
                  <Trophy className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-green-400">{completedSkills}</div>
                  <div className="text-sm text-gray-400">Skills Mastered</div>
                </div>
              </div>
            </div>

            {/* Estimated Outcome */}
            {skillGapData.estimatedOutcome && (
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-xl font-bold text-white">Estimated Career Outcome</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{skillGapData.estimatedOutcome.jobReadiness}</div>
                    <div className="text-gray-400 text-sm">Job Readiness</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{skillGapData.estimatedOutcome.timeToEmployment}</div>
                    <div className="text-gray-400 text-sm">Time to Employment</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{skillGapData.estimatedOutcome.salaryRange}</div>
                    <div className="text-gray-400 text-sm">Expected Salary</div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Grid */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Skill Gap Analysis</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {skillGaps.map((skill, index) => (
                  <SkillGapCard key={index} skill={skill} />
                ))}
              </div>
            </div>

            {/* Career Advice */}
            {skillGapData.careerAdvice && (
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-6 h-6 text-purple-400" />
                  <h2 className="text-xl font-bold text-white">AI Career Advice</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">{skillGapData.careerAdvice}</p>
              </div>
            )}
          </div>
        )}

        {selectedTab === 'roadmap' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Learning Roadmap</h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Phase:</span>
                <select
                  value={selectedPhase}
                  onChange={(e) => setSelectedPhase(parseInt(e.target.value))}
                  className="bg-gray-800 border border-gray-600 rounded px-3 py-1 text-white"
                >
                  {roadmapPhases.map((phase, index) => (
                    <option key={index} value={index}>
                      Phase {phase.phase}: {phase.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {roadmapPhases[selectedPhase] && (
              <div className="space-y-6">
                {/* Phase Overview */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {roadmapPhases[selectedPhase].phase}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{roadmapPhases[selectedPhase].title}</h3>
                      <p className="text-gray-400">{roadmapPhases[selectedPhase].duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{roadmapPhases[selectedPhase].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {roadmapPhases[selectedPhase].skills?.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                {roadmapPhases[selectedPhase].projects && (
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <PlayCircle className="w-5 h-5 text-green-400" />
                      Projects ({roadmapPhases[selectedPhase].projects.length})
                    </h4>
                    <div className="space-y-4">
                      {roadmapPhases[selectedPhase].projects.map((project, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h5 className="text-white font-medium">{project.name}</h5>
                              <p className="text-gray-400 text-sm">{project.description}</p>
                            </div>
                            <button
                              onClick={() => toggleItemCompletion('project', selectedPhase, index)}
                              className="text-gray-400 hover:text-green-400 transition-colors"
                            >
                              {completedItems.has(`project-${selectedPhase}-${index}`) ? 
                                <CheckSquare className="w-5 h-5 text-green-400" /> : 
                                <Square className="w-5 h-5" />
                              }
                            </button>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>⏱️ {project.estimatedHours}h</span>
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
                {roadmapPhases[selectedPhase].resources && (
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-400" />
                      Learning Resources ({roadmapPhases[selectedPhase].resources.length})
                    </h4>
                    <div className="space-y-4">
                      {roadmapPhases[selectedPhase].resources.map((resource, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h5 className="text-white font-medium flex items-center gap-2">
                                {resource.name}
                                {resource.url && <ExternalLink className="w-4 h-4 text-gray-400" />}
                              </h5>
                              <p className="text-gray-400 text-sm capitalize">{resource.type}</p>
                            </div>
                            <button
                              onClick={() => toggleItemCompletion('resource', selectedPhase, index)}
                              className="text-gray-400 hover:text-green-400 transition-colors"
                            >
                              {completedItems.has(`resource-${selectedPhase}-${index}`) ? 
                                <CheckSquare className="w-5 h-5 text-green-400" /> : 
                                <Square className="w-5 h-5" />
                              }
                            </button>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>⏱️ {resource.estimatedHours}h</span>
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
                {roadmapPhases[selectedPhase].milestones && (
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-400" />
                      Milestones ({roadmapPhases[selectedPhase].milestones.length})
                    </h4>
                    <div className="space-y-4">
                      {roadmapPhases[selectedPhase].milestones.map((milestone, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h5 className="text-white font-medium">{milestone.name}</h5>
                              <p className="text-gray-400 text-sm">{milestone.description}</p>
                              <p className="text-gray-500 text-xs mt-1">{milestone.criteria}</p>
                            </div>
                            <button
                              onClick={() => toggleItemCompletion('milestone', selectedPhase, index)}
                              className="text-gray-400 hover:text-green-400 transition-colors"
                            >
                              {completedItems.has(`milestone-${selectedPhase}-${index}`) ? 
                                <CheckSquare className="w-5 h-5 text-green-400" /> : 
                                <Square className="w-5 h-5" />
                              }
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {selectedTab === 'progress' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Progress Tracking</h2>
            
            {/* Overall Progress */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Overall Completion</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Roadmap Progress</span>
                    <span className="text-white">{roadmapProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                      style={{ width: `${roadmapProgress}%` }}
                    />
                  </div>
                </div>
                <div className="text-center text-gray-400">
                  {completedItems.size} of {totalItems} items completed
                </div>
              </div>
            </div>

            {/* Phase Progress */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmapPhases.map((phase, phaseIndex) => {
                const phaseItems = (phase.projects?.length || 0) + (phase.resources?.length || 0) + (phase.milestones?.length || 0);
                const phaseCompleted = Array.from(completedItems).filter(item => 
                  item.startsWith(`project-${phaseIndex}-`) || 
                  item.startsWith(`resource-${phaseIndex}-`) || 
                  item.startsWith(`milestone-${phaseIndex}-`)
                ).length;
                const phaseProgress = phaseItems > 0 ? Math.round((phaseCompleted / phaseItems) * 100) : 0;

                return (
                  <div key={phaseIndex} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {phase.phase}
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{phase.title}</h4>
                        <p className="text-gray-400 text-sm">{phase.duration}</p>
                      </div>
                    </div>
                    <CircularProgress percentage={phaseProgress} size={80} />
                    <div className="text-center mt-2 text-gray-400 text-sm">
                      {phaseCompleted} / {phaseItems} completed
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {selectedTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Visual Analytics</h2>
            
            {/* Skill Priority Chart */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Skills by Priority</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['high', 'medium', 'low'].map(priority => {
                  const prioritySkills = skillGaps.filter(skill => skill.priority === priority);
                  const priorityColor = priority === 'high' ? 'red' : priority === 'medium' ? 'yellow' : 'green';
                  
                  return (
                    <div key={priority} className="text-center">
                      <div className={`text-4xl font-bold text-${priorityColor}-400 mb-2`}>
                        {prioritySkills.length}
                      </div>
                      <div className="text-gray-400 capitalize">{priority} Priority</div>
                      <div className="mt-2 space-y-1">
                        {prioritySkills.slice(0, 3).map((skill, index) => (
                          <div key={index} className="text-xs text-gray-500">{skill.skill}</div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Skills by Category</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...new Set(skillGaps.map(skill => skill.category))].map(category => {
                  const categorySkills = skillGaps.filter(skill => skill.category === category);
                  return (
                    <div key={category} className="text-center p-4 bg-gray-800/50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400">{categorySkills.length}</div>
                      <div className="text-gray-400 text-sm capitalize">{category}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'tips' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Personalized Success Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalizedTips.map((tip, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-white font-medium capitalize">{tip.category} Advice</h3>
                  </div>
                  <p className="text-gray-300 mb-3">{tip.tip}</p>
                  <p className="text-gray-400 text-sm italic">{tip.reasoning}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillGapAnalysis;
