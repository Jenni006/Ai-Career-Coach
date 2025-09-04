"use client";

import React, { useState } from 'react';
import { ChevronRight, User, Briefcase, Target, Star, Plus, X } from 'lucide-react';
import { industrySkillMaps } from '../lib/skillGapService';

const SkillAssessmentForm = ({ onSubmit, loading = false }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    specialization: '',
    currentSkills: [],
    interests: [],
    experience: '',
    careerGoals: ''
  });

  const [newSkill, setNewSkill] = useState({ name: '', level: '' });
  const [newInterest, setNewInterest] = useState('');

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSkillAdd = () => {
    if (newSkill.name && newSkill.level) {
      setFormData(prev => ({
        ...prev,
        currentSkills: [...prev.currentSkills, { ...newSkill }]
      }));
      setNewSkill({ name: '', level: '' });
    }
  };

  const handleSkillRemove = (index) => {
    setFormData(prev => ({
      ...prev,
      currentSkills: prev.currentSkills.filter((_, i) => i !== index)
    }));
  };

  const handleInterestAdd = () => {
    if (newInterest.trim()) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()]
      }));
      setNewInterest('');
    }
  };

  const handleInterestRemove = (index) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const canProceed = () => {
    switch(step) {
      case 1: return formData.industry && formData.specialization;
      case 2: return formData.currentSkills.length > 0;
      case 3: return formData.interests.length > 0;
      case 4: return formData.experience && formData.careerGoals;
      default: return false;
    }
  };

  const getCommonSkills = () => {
    if (!formData.industry) return [];
    const industryMap = industrySkillMaps[formData.industry];
    return Object.values(industryMap.categories).flat().slice(0, 20);
  };

  return (
    <div className="min-h-screen bg-black p-6 pt-20">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Career Assessment
            </h1>
            <span className="text-gray-400">Step {step} of 4</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Industry & Specialization */}
          {step === 1 && (
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">Choose Your Path</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Industry</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value, specialization: ''})}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select an industry</option>
                    <option value="fashion">Fashion & Design</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="tech">Technology</option>
                  </select>
                </div>

                {formData.industry && (
                  <div>
                    <label className="block text-gray-300 mb-2">Specialization</label>
                    <select
                      value={formData.specialization}
                      onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    >
                      <option value="">Select specialization</option>
                      {Object.keys(industrySkillMaps[formData.industry].specializations).map(spec => (
                        <option key={spec} value={spec}>{spec}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Current Skills */}
          {step === 2 && (
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">Your Current Skills</h2>
              </div>

              {/* Add new skill */}
              <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Skill name"
                    value={newSkill.name}
                    onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
                    className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  />
                  <select
                    value={newSkill.level}
                    onChange={(e) => setNewSkill({...newSkill, level: e.target.value})}
                    className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                  <button
                    type="button"
                    onClick={handleSkillAdd}
                    disabled={!newSkill.name || !newSkill.level}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2"
                  >
                    <Plus size={16} />
                    Add
                  </button>
                </div>
              </div>

              {/* Common skills quick add */}
              <div className="mb-6">
                <p className="text-gray-400 mb-3">Quick add common skills:</p>
                <div className="flex flex-wrap gap-2">
                  {getCommonSkills().slice(0, 8).map(skill => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => setNewSkill({name: skill, level: 'beginner'})}
                      className="px-3 py-1 bg-gray-700/50 hover:bg-gray-600 text-gray-300 rounded-lg text-sm border border-gray-600"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current skills list */}
              <div className="space-y-2">
                {formData.currentSkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div>
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className={`ml-3 px-2 py-1 rounded text-xs ${
                        skill.level === 'expert' ? 'bg-green-500/20 text-green-400' :
                        skill.level === 'advanced' ? 'bg-blue-500/20 text-blue-400' :
                        skill.level === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSkillRemove(index)}
                      className="text-gray-400 hover:text-red-400"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Interests */}
          {step === 3 && (
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">Your Interests</h2>
              </div>

              <div className="mb-6 flex gap-3">
                <input
                  type="text"
                  placeholder="Add an interest (e.g., sustainable fashion, AI ethics)"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleInterestAdd())}
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleInterestAdd}
                  disabled={!newInterest.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2"
                >
                  <Plus size={16} />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {formData.interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-2 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                    <span>{interest}</span>
                    <button
                      type="button"
                      onClick={() => handleInterestRemove(index)}
                      className="hover:text-red-400"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Experience & Goals */}
          {step === 4 && (
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">Experience & Goals</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Years of Experience</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1 years">0-1 years (Entry level)</option>
                    <option value="1-3 years">1-3 years (Junior)</option>
                    <option value="3-5 years">3-5 years (Mid-level)</option>
                    <option value="5-10 years">5-10 years (Senior)</option>
                    <option value="10+ years">10+ years (Expert)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Career Goals</label>
                  <textarea
                    value={formData.careerGoals}
                    onChange={(e) => setFormData({...formData, careerGoals: e.target.value})}
                    placeholder="Describe your career aspirations (e.g., 'Become a senior fashion designer at a luxury brand focusing on sustainable fashion')"
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                Previous
              </button>
            )}
            
            <div className="ml-auto">
              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canProceed() || loading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg flex items-center gap-2 font-semibold"
                >
                  {loading ? 'Analyzing...' : 'Analyze My Skills'}
                  {!loading && <ChevronRight size={16} />}
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Step indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {[1, 2, 3, 4].map(stepNum => (
            <div
              key={stepNum}
              className={`w-3 h-3 rounded-full ${
                stepNum <= step ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillAssessmentForm;