"use client";

import React, { useState } from 'react';
import { Plus, X, Target, BookOpen, Zap, Clock, Calendar, User, GraduationCap, Briefcase, Star } from 'lucide-react';

const SkillInputForm = ({ onSubmit, loading }) => {
  // Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    currentAcademicYear: '',
    experienceLevel: 'beginner'
  });

  // Timeline & Commitment
  const [timeline, setTimeline] = useState({
    duration: '',
    intensityLevel: 'medium',
    hoursPerWeek: 10
  });

  // Skills
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [currentLevel, setCurrentLevel] = useState(25);
  const [targetLevel, setTargetLevel] = useState(75);

  const academicYears = [
    'High School',
    'First Year College',
    'Second Year College', 
    'Third Year College',
    'Fourth Year College',
    'Graduate Student',
    'Recent Graduate',
    'Working Professional'
  ];

  const experienceLevels = [
    { value: 'beginner', label: 'Complete Beginner', description: 'New to the field' },
    { value: 'some_experience', label: 'Some Experience', description: '6 months - 2 years' },
    { value: 'intermediate', label: 'Intermediate', description: '2-5 years experience' },
    { value: 'advanced', label: 'Advanced', description: '5+ years experience' }
  ];

  const timelineDurations = [
    { value: '1month', label: '1 Month', description: 'Intensive crash course' },
    { value: '3months', label: '3 Months', description: 'Accelerated learning' },
    { value: '6months', label: '6 Months', description: 'Comprehensive foundation' },
    { value: '1year', label: '1 Year', description: 'Deep skill development' },
    { value: '2years', label: '2 Years', description: 'Master-level expertise' }
  ];

  const intensityLevels = [
    { value: 'low', label: 'Low Intensity', hours: '5-10 hrs/week', description: 'Casual learning' },
    { value: 'medium', label: 'Medium Intensity', hours: '10-20 hrs/week', description: 'Steady progress' },
    { value: 'high', label: 'High Intensity', hours: '20-30 hrs/week', description: 'Focused dedication' },
    { value: 'intensive', label: 'Intensive', hours: '30+ hrs/week', description: 'Full commitment' }
  ];

  const skillCategories = [
    { value: 'frontend', label: 'Frontend Development', icon: '🎨' },
    { value: 'backend', label: 'Backend Development', icon: '⚙️' },
    { value: 'ai', label: 'AI/Machine Learning', icon: '🤖' },
    { value: 'data', label: 'Data Science', icon: '📊' },
    { value: 'mobile', label: 'Mobile Development', icon: '📱' },
    { value: 'devops', label: 'DevOps/Cloud', icon: '☁️' },
    { value: 'design', label: 'UI/UX Design', icon: '🎯' },
    { value: 'security', label: 'Cybersecurity', icon: '🔒' },
    { value: 'management', label: 'Project Management', icon: '📋' },
    { value: 'other', label: 'Other', icon: '💡' }
  ];

  const industries = [
    'Technology & Software',
    'Healthcare & Medicine',
    'Finance & Banking',
    'Education & Training',
    'Marketing & Advertising',
    'Manufacturing & Engineering',
    'Retail & E-commerce',
    'Media & Entertainment',
    'Government & Public Service',
    'Non-profit & Social Impact',
    'Consulting & Professional Services',
    'Real Estate & Construction',
    'Transportation & Logistics',
    'Energy & Utilities',
    'Agriculture & Food',
    'Hospitality & Tourism',
    'Sports & Fitness',
    'Legal & Law',
    'Art & Design',
    'Other'
  ];

  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [availablePositions, setAvailablePositions] = useState([]);
  const [industrySkillCategories, setIndustrySkillCategories] = useState([]);
  const [availableSkills, setAvailableSkills] = useState([]);
  const [loadingPositions, setLoadingPositions] = useState(false);
  const [loadingSkills, setLoadingSkills] = useState(false);

  // Fetch positions when industry changes
  const handleIndustryChange = async (industry) => {
    setSelectedIndustry(industry);
    setTargetRole('');
    setAvailablePositions([]);
    setIndustrySkillCategories([]);
    setAvailableSkills([]);
    
    if (industry) {
      // Fetch positions
      setLoadingPositions(true);
      try {
        const response = await fetch('/api/industry-data', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'positions', industry })
        });
        const positions = await response.json();
        setAvailablePositions(positions);
      } catch (error) {
        console.error('Error fetching positions:', error);
      }
      setLoadingPositions(false);

      // Fetch skills
      setLoadingSkills(true);
      try {
        const response = await fetch('/api/industry-data', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'skills', industry })
        });
        const skillsData = await response.json();
        setIndustrySkillCategories(skillsData.categories || []);
        
        // Extract all skills from categories for dropdown
        const allSkills = skillsData.categories?.flatMap(category => 
          category.skills.map(skill => ({ name: skill, category: category.value, categoryLabel: category.label }))
        ) || [];
        setAvailableSkills(allSkills);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
      setLoadingSkills(false);
    }
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.find(s => s.name.toLowerCase() === newSkill.toLowerCase())) {
      // Find skill info from available skills or use manual entry
      const skillInfo = availableSkills.find(s => s.name === newSkill) || {
        name: newSkill.trim(),
        category: selectedCategory,
        categoryLabel: (industrySkillCategories.length > 0 ? industrySkillCategories : skillCategories).find(c => c.value === selectedCategory)?.label || 'Other'
      };
      
      setSkills([...skills, {
        name: skillInfo.name,
        category: skillInfo.category,
        categoryLabel: skillInfo.categoryLabel,
        currentLevel: currentLevel,
        targetLevel: targetLevel,
        priority: targetLevel - currentLevel > 40 ? 'high' : targetLevel - currentLevel > 20 ? 'medium' : 'low'
      }]);
      setNewSkill('');
      setCurrentLevel(25);
      setTargetLevel(75);
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skills.length > 0 && selectedIndustry && targetRole && personalInfo.currentAcademicYear && timeline.duration) {
      onSubmit({
        // Personal Information
        currentAcademicYear: personalInfo.currentAcademicYear,
        experienceLevel: personalInfo.experienceLevel,
        targetIndustry: selectedIndustry,
        targetRole: targetRole,
        
        // Timeline & Commitment
        timeline: timeline.duration,
        intensityLevel: timeline.intensityLevel,
        hoursPerWeek: timeline.hoursPerWeek,
        
        // Skills Data
        currentSkills: skills,
        goalSpecialization: `${targetRole} in ${selectedIndustry}`
      });
    }
  };

  const getSkillGapColor = (gap) => {
    if (gap > 40) return 'bg-red-500/20 text-red-400 border-red-500/30';
    if (gap > 20) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    return 'bg-green-500/20 text-green-400 border-green-500/30';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-4">
          Comprehensive Skill Gap Analysis
        </h2>
        <p className="text-gray-400 text-lg">
          AI-powered personalized roadmap generation based on your unique profile
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Personal Information</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-3">
                <GraduationCap className="w-4 h-4 inline mr-2" />
                Current Academic/Professional Status
              </label>
              <select
                value={personalInfo.currentAcademicYear}
                onChange={(e) => setPersonalInfo({...personalInfo, currentAcademicYear: e.target.value})}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select your current status</option>
                {academicYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">
                <Briefcase className="w-4 h-4 inline mr-2" />
                Experience Level
              </label>
              <div className="space-y-2">
                {experienceLevels.map(level => (
                  <label key={level.value} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 cursor-pointer hover:border-blue-500/50">
                    <input
                      type="radio"
                      name="experienceLevel"
                      value={level.value}
                      checked={personalInfo.experienceLevel === level.value}
                      onChange={(e) => setPersonalInfo({...personalInfo, experienceLevel: e.target.value})}
                      className="text-blue-500"
                    />
                    <div>
                      <div className="text-white font-medium">{level.label}</div>
                      <div className="text-gray-400 text-sm">{level.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline & Commitment Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-bold text-white">Timeline & Commitment</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-3">
                <Clock className="w-4 h-4 inline mr-2" />
                Learning Timeline
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {timelineDurations.map(duration => (
                  <label key={duration.value} className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    timeline.duration === duration.value 
                      ? 'border-blue-500 bg-blue-500/20' 
                      : 'border-gray-600 bg-gray-800/50 hover:border-blue-500/50'
                  }`}>
                    <input
                      type="radio"
                      name="timeline"
                      value={duration.value}
                      checked={timeline.duration === duration.value}
                      onChange={(e) => setTimeline({...timeline, duration: e.target.value})}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">{duration.label}</div>
                      <div className="text-gray-400 text-xs mt-1">{duration.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">
                <Zap className="w-4 h-4 inline mr-2" />
                Intensity Level
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {intensityLevels.map(intensity => (
                  <label key={intensity.value} className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    timeline.intensityLevel === intensity.value 
                      ? 'border-purple-500 bg-purple-500/20' 
                      : 'border-gray-600 bg-gray-800/50 hover:border-purple-500/50'
                  }`}>
                    <input
                      type="radio"
                      name="intensity"
                      value={intensity.value}
                      checked={timeline.intensityLevel === intensity.value}
                      onChange={(e) => setTimeline({...timeline, intensityLevel: e.target.value})}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <div className="text-white font-bold">{intensity.label}</div>
                      <div className="text-blue-400 text-sm">{intensity.hours}</div>
                      <div className="text-gray-400 text-xs mt-1">{intensity.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">
                Hours per week you can commit: {timeline.hoursPerWeek} hours
              </label>
              <input
                type="range"
                min="5"
                max="40"
                step="5"
                value={timeline.hoursPerWeek}
                onChange={(e) => setTimeline({...timeline, hoursPerWeek: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-gray-400 text-sm mt-1">
                <span>5 hrs</span>
                <span>20 hrs</span>
                <span>40 hrs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Industry & Role Selection */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-bold text-white">Target Industry & Role</h3>
          </div>
          
          <div className="space-y-4">
            {/* Industry Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Your Target Industry
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => handleIndustryChange(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Choose an industry...</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Your Target Role/Position
              </label>
              {selectedIndustry ? (
                loadingPositions ? (
                  <div className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-400">
                    Loading positions...
                  </div>
                ) : (
                  <select
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Choose a position...</option>
                    {availablePositions.map(position => (
                      <option key={position} value={position}>{position}</option>
                    ))}
                  </select>
                )
              ) : (
                <div className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-400">
                  Please select an industry first
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Skill Evaluation */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-bold text-white">Detailed Skill Evaluation</h3>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedIndustry && availableSkills.length > 0 ? (
                <select
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Choose a skill...</option>
                  {availableSkills
                    .filter(skill => !skills.find(s => s.name.toLowerCase() === skill.name.toLowerCase()))
                    .map((skill, index) => (
                      <option key={index} value={skill.name}>
                        {skill.name} ({skill.categoryLabel})
                      </option>
                    ))}
                </select>
              ) : (
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder={selectedIndustry ? "Loading skills..." : "Select industry first or enter custom skill"}
                  className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  disabled={loadingSkills}
                />
              )}
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              >
                {selectedIndustry && industrySkillCategories.length > 0 ? (
                  loadingSkills ? (
                    <option>Loading skills...</option>
                  ) : (
                    industrySkillCategories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.icon} {category.label}
                      </option>
                    ))
                  )
                ) : (
                  skillCategories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.icon} {category.label}
                    </option>
                  ))
                )}
              </select>
              
              <button
                type="button"
                onClick={addSkill}
                disabled={!newSkill.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Skill
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-3">
                  Current Level: {currentLevel}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={currentLevel}
                  onChange={(e) => setCurrentLevel(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-gray-400 text-sm mt-1">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Expert</span>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">
                  Target Level: {targetLevel}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={targetLevel}
                  onChange={(e) => setTargetLevel(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-gray-400 text-sm mt-1">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>

            {/* Skills List */}
            {skills.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">Your Skills ({skills.length})</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">
                            {(industrySkillCategories.length > 0 ? industrySkillCategories : skillCategories).find(c => c.value === skill.category)?.icon}
                          </span>
                          <div>
                            <div className="text-white font-medium">{skill.name}</div>
                            <div className="text-gray-400 text-sm">{skill.categoryLabel}</div>
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
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Current: {skill.currentLevel}%</span>
                          <span className="text-gray-400">Target: {skill.targetLevel}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{width: `${skill.currentLevel}%`}}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Gap: {skill.targetLevel - skill.currentLevel}%</span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(skill.priority)}`}>
                            {skill.priority.toUpperCase()} PRIORITY
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={skills.length === 0 || !selectedIndustry || !targetRole || !personalInfo.currentAcademicYear || !timeline.duration || loading}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 disabled:cursor-not-allowed text-lg shadow-lg"
          >
            {loading ? (
              <div className="flex items-center gap-3">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Generating Your Personalized Roadmap...
              </div>
            ) : (
              'Generate My AI Learning Roadmap'
            )}
          </button>
          
          {(skills.length === 0 || !selectedIndustry || !targetRole || !personalInfo.currentAcademicYear || !timeline.duration) && (
            <p className="text-gray-400 text-sm mt-3">
              Please complete all sections to generate your personalized roadmap
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SkillInputForm;
