"use client";

import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, ExternalLink, CheckCircle, Target, Lightbulb, Check } from 'lucide-react';

const PersonalizedRoadmap = ({ learningPath, careerAdvice }) => {
  const [completedSteps, setCompletedSteps] = useState({});

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('roadmapProgress');
    if (savedProgress) {
      try {
        setCompletedSteps(JSON.parse(savedProgress));
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  const toggleStepCompletion = (stepIndex) => {
    const newCompletedSteps = {
      ...completedSteps,
      [stepIndex]: !completedSteps[stepIndex]
    };
    setCompletedSteps(newCompletedSteps);
    localStorage.setItem('roadmapProgress', JSON.stringify(newCompletedSteps));
  };

  const getCompletionPercentage = () => {
    if (!learningPath || learningPath.length === 0) return 0;
    const completed = Object.values(completedSteps).filter(Boolean).length;
    return Math.round((completed / learningPath.length) * 100);
  };

  if (!learningPath || learningPath.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Career Advice Section */}
      {careerAdvice && (
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:from-blue-800/40 hover:to-purple-800/40 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Lightbulb className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Personalized Career Advice</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">{careerAdvice}</p>
        </div>
      )}

      {/* Learning Path */}
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/60 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Target className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Your Learning Roadmap</h3>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-400">{getCompletionPercentage()}%</div>
            <div className="text-sm text-gray-400">Complete</div>
          </div>
        </div>

        <div className="space-y-4">
          {learningPath.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < learningPath.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
              )}
              
              <div className="flex gap-4">
                {/* Step Number with Completion */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-300 ${
                    completedSteps[index] 
                      ? 'bg-gradient-to-r from-green-500 to-green-600' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}>
                    {completedSteps[index] ? <Check className="w-6 h-6" /> : step.step}
                  </div>
                  <button
                    onClick={() => toggleStepCompletion(index)}
                    className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-700 rounded-full border-2 border-gray-600 flex items-center justify-center hover:bg-gray-600 transition-colors"
                  >
                    <div className={`w-3 h-3 rounded-full ${completedSteps[index] ? 'bg-green-400' : 'bg-gray-400'}`} />
                  </button>
                </div>
                
                {/* Step Content */}
                <div className={`flex-grow bg-gray-800/50 rounded-xl p-4 border border-gray-700/30 hover:bg-gray-700/60 hover:border-gray-600/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 ${
                  completedSteps[index] ? 'opacity-75' : ''
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`font-semibold text-lg ${completedSteps[index] ? 'text-green-400 line-through' : 'text-white'}`}>
                      {step.skill}
                    </h4>
                    {step.estimatedTime && (
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{step.estimatedTime}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                  
                  {/* Resources */}
                  {step.resources && step.resources.length > 0 && (
                    <div>
                      <h5 className="text-white font-medium mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Recommended Resources
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.resources.map((resource, resourceIndex) => (
                          <div key={resourceIndex} className="flex items-center gap-2 text-sm text-gray-400 bg-gray-700/30 rounded-lg p-2 hover:bg-gray-600/40 transition-colors duration-200">
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                            <span>{resource}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completion Message */}
        <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg hover:bg-green-800/30 hover:border-green-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <div>
              <h4 className="text-green-400 font-semibold">Ready to Start?</h4>
              <p className="text-gray-300 text-sm">Follow this roadmap step by step to achieve your career goals. Remember, consistency is key!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedRoadmap;
