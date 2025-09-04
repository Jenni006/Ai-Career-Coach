"use client";

import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, BookOpen, CheckCircle, AlertCircle, Star, Loader2, Briefcase } from 'lucide-react';
import PersonalizedRoadmap from './PersonalizedRoadmap';

const SkillGapAnalysis = ({ skillGapData: propData, loading = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animateCharts, setAnimateCharts] = useState(false);

  // Use prop data or fallback to sample data
  const skillGapData = propData || {
    requiredSkills: [
      { name: 'React.js', category: 'frontend', proficiency: 45, required: 90, priority: 'high' },
      { name: 'Node.js', category: 'backend', proficiency: 70, required: 85, priority: 'medium' },
      { name: 'Machine Learning', category: 'ai', proficiency: 30, required: 80, priority: 'high' },
      { name: 'Docker', category: 'devops', proficiency: 40, required: 75, priority: 'medium' }
    ]
  };

  // Dynamic categories based on actual data
  const getAvailableCategories = () => {
    const skillCategories = [...new Set(skillGapData.requiredSkills.map(skill => skill.category))];
    
    const categoryIcons = {
      frontend: BookOpen,
      backend: Target,
      ai: TrendingUp,
      devops: CheckCircle,
      cloud: AlertCircle,
      design: Star,
      business: Briefcase,
      technical: Target,
      digital: TrendingUp,
      analysis: BookOpen,
      trading: TrendingUp,
      compliance: CheckCircle,
      technology: Target,
      other: Star
    };

    return [
      { id: 'all', name: 'All Skills', icon: Star },
      ...skillCategories.map(cat => ({
        id: cat,
        name: cat.charAt(0).toUpperCase() + cat.slice(1),
        icon: categoryIcons[cat] || Star
      }))
    ];
  };

  const categories = getAvailableCategories();

  const filteredSkills = selectedCategory === 'all' 
    ? skillGapData.requiredSkills 
    : skillGapData.requiredSkills.filter(skill => skill.category === selectedCategory);

  const overallProgress = skillGapData.requiredSkills.length > 0 ? Math.round(
    (skillGapData.requiredSkills.reduce((sum, skill) => sum + skill.proficiency, 0) / 
     (skillGapData.requiredSkills.length * 100)) * 100
  ) : 0;

  const criticalGaps = skillGapData.requiredSkills
    .filter(skill => skill.required - skill.proficiency > 40)
    .length;

  const completedSkills = skillGapData.requiredSkills
    .filter(skill => skill.proficiency >= skill.required)
    .length;

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
            style={{
              transition: 'stroke-dashoffset 1.5s ease-in-out'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
    );
  };

  const SkillBar = ({ skill }) => {
    const currentPercentage = (skill.proficiency / skill.required) * 100;

    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02]">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-white font-semibold">{skill.name}</h3>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              skill.priority === 'high' ? 'bg-red-500/20 text-red-400' :
              skill.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-green-500/20 text-green-400'
            }`}>
              {skill.priority}
            </span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Current: {skill.proficiency}%</span>
            <span className="text-gray-400">Required: {skill.required}%</span>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div className="h-full relative">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: animateCharts ? `${Math.min(currentPercentage, 100)}%` : '0%'
                }}
              />
            </div>
          </div>
          
          <div className="flex justify-between text-xs">
            <span className="text-blue-400">Progress</span>
            <span className="text-gray-500">Gap: {Math.max(0, skill.required - skill.proficiency)}%</span>
          </div>
        </div>
      </div>
    );
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
    <div className="bg-black p-6">
      <div className="max-w-7xl mx-auto">

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/60 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold mb-2">Overall Progress</h3>
                <p className="text-gray-400 text-sm">Skill development completion</p>
              </div>
              <CircularProgress percentage={overallProgress} />
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/60 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold mb-2">Critical Gaps</h3>
                <p className="text-gray-400 text-sm">Skills requiring immediate attention</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-red-400">{criticalGaps}</div>
                <div className="text-sm text-gray-500">High Priority</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/60 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold mb-2">Completed Skills</h3>
                <p className="text-gray-400 text-sm">Goals already achieved</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-400">{completedSkills}</div>
                <div className="text-sm text-gray-500">Mastered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {skillGapData.requiredSkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SkillGapAnalysis;