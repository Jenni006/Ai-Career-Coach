"use client";

import React, { useState } from 'react';
import { Plus, X, Target, BookOpen, Zap } from 'lucide-react';

const SkillInputForm = ({ onSubmit, loading }) => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [selectedProficiency, setSelectedProficiency] = useState('basic');
  const [goalSpecialization, setGoalSpecialization] = useState('');

  const proficiencyLevels = [
    { value: 'basic', label: 'Basic', description: 'Just getting started', score: 25 },
    { value: 'intermediate', label: 'Intermediate', description: 'Some experience', score: 60 },
    { value: 'advanced', label: 'Advanced', description: 'Highly skilled', score: 85 }
  ];

  const specializations = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'AI/ML Engineer',
    'Data Scientist',
    'DevOps Engineer',
    'Mobile Developer',
    'UI/UX Designer',
    'Cloud Architect',
    'Cybersecurity Specialist',
    'Product Manager',
    'Software Architect'
  ];

  const addSkill = () => {
    if (newSkill.trim() && !skills.find(s => s.name.toLowerCase() === newSkill.toLowerCase())) {
      const proficiency = proficiencyLevels.find(p => p.value === selectedProficiency);
      setSkills([...skills, {
        name: newSkill.trim(),
        proficiency: selectedProficiency,
        score: proficiency.score
      }]);
      setNewSkill('');
      setSelectedProficiency('basic');
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skills.length > 0 && goalSpecialization) {
      onSubmit({
        currentSkills: skills,
        goalSpecialization
      });
    }
  };

  const getProficiencyIcon = (level) => {
    switch (level) {
      case 'basic': return <BookOpen className="w-4 h-4" />;
      case 'intermediate': return <Target className="w-4 h-4" />;
      case 'advanced': return <Zap className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'basic': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Tell Us About Your Skills</h2>
        <p className="text-gray-400">Add your current skills and select your career goal for personalized analysis</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Goal Specialization */}
        <div>
          <label className="block text-white font-semibold mb-3">
            What's your career goal?
          </label>
          <select
            value={goalSpecialization}
            onChange={(e) => setGoalSpecialization(e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select your target specialization</option>
            {specializations.map(spec => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>

        {/* Skills Input */}
        <div>
          <label className="block text-white font-semibold mb-3">
            Add Your Current Skills
          </label>
          
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Enter a skill (e.g., JavaScript, Python, React)"
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
            />
            
            <select
              value={selectedProficiency}
              onChange={(e) => setSelectedProficiency(e.target.value)}
              className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            >
              {proficiencyLevels.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
            
            <button
              type="button"
              onClick={addSkill}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {/* Proficiency Level Descriptions */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {proficiencyLevels.map(level => (
              <div key={level.value} className={`p-3 rounded-lg border ${getProficiencyColor(level.value)}`}>
                <div className="flex items-center gap-2 mb-1">
                  {getProficiencyIcon(level.value)}
                  <span className="font-medium">{level.label}</span>
                </div>
                <p className="text-xs opacity-80">{level.description}</p>
              </div>
            ))}
          </div>

          {/* Skills List */}
          {skills.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-white font-medium">Your Skills ({skills.length})</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className={`p-1 rounded ${getProficiencyColor(skill.proficiency)}`}>
                        {getProficiencyIcon(skill.proficiency)}
                      </div>
                      <div>
                        <span className="text-white font-medium">{skill.name}</span>
                        <div className="text-xs text-gray-400 capitalize">{skill.proficiency}</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeSkill(index)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={skills.length === 0 || !goalSpecialization || loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
        >
          {loading ? 'Analyzing Your Skills...' : 'Analyze My Skill Gap'}
        </button>
      </form>
    </div>
  );
};

export default SkillInputForm;
