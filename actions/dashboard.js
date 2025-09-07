"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

const cache = new Map();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction:
    "You are a helpful assistant that generates industry insights for a given industry.",
});

// ------------------------- Industry Data -------------------------
export const getIndustryPositions = async (industry) => {
  try {
    if (!process.env.GOOGLE_API_KEY) {
      throw new Error("Google API key not configured");
    }

    const cacheKey = `positions-${industry}`;
    if (cache.has(cacheKey)) {
      const { data, expiry } = cache.get(cacheKey);
      if (Date.now() < expiry) return data;
      else cache.delete(cacheKey);
    }

    const prompt = `List the most common job positions/roles in the "${industry}" industry. Return ONLY a JSON array of strings with 15-20 popular positions, no explanations:
    ["Position 1", "Position 2", "Position 3", ...]`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
    const positions = JSON.parse(cleanedText);

    cache.set(cacheKey, {
      data: positions,
      expiry: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    return positions;
  } catch (error) {
    console.error("Error fetching positions:", error);
    // Fallback positions
    return [
      "Manager", "Analyst", "Specialist", "Coordinator", "Associate", 
      "Director", "Consultant", "Representative", "Administrator", "Executive"
    ];
  }
};

export const getIndustrySkills = async (industry) => {
  try {
    if (!process.env.GOOGLE_API_KEY) {
      throw new Error("Google API key not configured");
    }

    const cacheKey = `skills-${industry}`;
    if (cache.has(cacheKey)) {
      const { data, expiry } = cache.get(cacheKey);
      if (Date.now() < expiry) return data;
      else cache.delete(cacheKey);
    }

    const prompt = `List the key skill categories and specific skills for the "${industry}" industry. Return ONLY a JSON object in this format:
    {
      "categories": [
        {
          "value": "category_key",
          "label": "Category Name",
          "icon": "🎯",
          "skills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"]
        }
      ]
    }
    
    Include 6-8 relevant categories with 5 specific skills each. Use appropriate emojis for icons.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
    const skillsData = JSON.parse(cleanedText);

    cache.set(cacheKey, {
      data: skillsData,
      expiry: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    return skillsData;
  } catch (error) {
    console.error("Error fetching skills:", error);
    // Fallback skills
    return {
      categories: [
        {
          value: "core",
          label: "Core Skills",
          icon: "🎯",
          skills: ["Communication", "Problem Solving", "Leadership", "Teamwork", "Time Management"]
        },
        {
          value: "technical",
          label: "Technical Skills",
          icon: "⚙️",
          skills: ["Software Proficiency", "Data Analysis", "Project Management", "Quality Control", "Process Improvement"]
        }
      ]
    };
  }
};

// ------------------------- Industry Insights -------------------------
export const generateAIInsights = async (industry) => {
  try {
    if (!process.env.GOOGLE_API_KEY) {
      throw new Error("Google API key not configured");
    }

    const cacheKey = `ai-insights-${industry}`;
    if (cache.has(cacheKey)) {
      const { data, expiry } = cache.get(cacheKey);
      if (Date.now() < expiry) return data;
      else cache.delete(cacheKey);
    }

    const prompt = `Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
    {
      "salaryRanges": [
        { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
      ],
      "growthRate": number,
      "demandLevel": "High" | "Medium" | "Low",
      "topSkills": ["skill1", "skill2"],
      "marketOutlook": "Positive" | "Neutral" | "Negative",
      "keyTrends": ["trend1", "trend2"],
      "recommendedSkills": ["skill1", "skill2"]
    }`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

    const insights = JSON.parse(cleanedText);

    cache.set(cacheKey, {
      data: insights,
      expiry: Date.now() + 6 * 60 * 60 * 1000, // 6 hours
    });

    return insights;
  } catch (error) {
    console.error("AI generation error:", error);
    throw new Error(`Failed to generate AI insights: ${error.message}`);
  }
};

export async function getIndustryInsights() {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      select: { industry: true },
    });

    if (!user) throw new Error("User not found");

    let industryInsight = await db.industryInsight.findUnique({
      where: { industry: user.industry },
    });

    if (!industryInsight) {
      try {
        const insights = await generateAIInsights(user.industry);

        industryInsight = await db.industryInsight.create({
          data: {
            industry: user.industry,
            ...insights,
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      } catch (aiError) {
        console.error("AI generation failed:", aiError);
        // fallback data
        industryInsight = await db.industryInsight.create({
          data: {
            industry: user.industry,
            salaryRanges: [],
            growthRate: 0,
            demandLevel: "MEDIUM",
            automationRisk: null,
            futureDemand: null,
            topSkills: ["Communication", "Problem Solving", "Teamwork"],
            recommendedSkills: ["Leadership", "Technical Skills"],
            keyTrends: ["Digital Transformation", "Remote Work"],
            marketOutlook: "Positive",
            source: null,
            lastUpdated: new Date(),
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      }
    }

    return industryInsight;
  } catch (error) {
    console.error("Error getting industry insights:", error);
    throw error;
  }
}

// ------------------------- Comprehensive Skill Gap & Roadmap -------------------------

export const generateSkillGap = async (formData) => {
  try {
    // Input validation
    if (!formData || typeof formData !== 'object') {
      throw new Error("Invalid form data provided");
    }

    if (!process.env.GOOGLE_API_KEY) {
      throw new Error("Google API key not configured");
    }

    // Destructure with defaults and validation
    const {
      currentAcademicYear = "Not specified",
      experienceLevel = "Beginner",
      targetRole,
      timeline = "6 months",
      intensityLevel = "Medium",
      hoursPerWeek = 10,
      currentSkills = []
    } = formData;

    // Validate required fields
    if (!targetRole || typeof targetRole !== 'string' || targetRole.trim().length === 0) {
      throw new Error("Target role is required and must be a non-empty string");
    }

    // Validate currentSkills array structure
    if (!Array.isArray(currentSkills)) {
      throw new Error("Current skills must be an array");
    }

    // Validate each skill object
    const validatedSkills = currentSkills.map((skill, index) => {
      if (!skill || typeof skill !== 'object') {
        throw new Error(`Skill at index ${index} must be an object`);
      }
      
      const {
        name,
        categoryLabel = "Other",
        currentLevel = 0,
        targetLevel = 70,
        priority = "medium"
      } = skill;

      if (!name || typeof name !== 'string') {
        throw new Error(`Skill at index ${index} must have a valid name`);
      }

      // Ensure levels are numbers and within valid range
      const validCurrentLevel = Math.max(0, Math.min(100, Number(currentLevel) || 0));
      const validTargetLevel = Math.max(0, Math.min(100, Number(targetLevel) || 70));
      
      // Ensure target level is not less than current level
      const finalTargetLevel = Math.max(validCurrentLevel, validTargetLevel);

      return {
        name: name.trim(),
        categoryLabel: categoryLabel.trim(),
        currentLevel: validCurrentLevel,
        targetLevel: finalTargetLevel,
        priority: ['high', 'medium', 'low'].includes(priority) ? priority : 'medium'
      };
    });

    console.log(`Generating comprehensive roadmap for: ${targetRole.trim()}`);

    // Create skill summary for AI analysis with better formatting
    const skillsSummary = validatedSkills.length > 0 
      ? validatedSkills.map(skill => 
          `- ${skill.name} (${skill.categoryLabel}): Current ${skill.currentLevel}% → Target ${skill.targetLevel}% [${skill.priority} priority]`
        ).join('\n')
      : "No specific skills provided - will create foundational roadmap";

    // Validate timeline and intensity combinations
    const validTimelines = ['3 months', '6 months', '12 months', '18+ months'];
    const validIntensityLevels = ['Low', 'Medium', 'High', 'Intensive'];
    const validExperienceLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

    const normalizedTimeline = validTimelines.includes(timeline) ? timeline : '6 months';
    const normalizedIntensity = validIntensityLevels.includes(intensityLevel) ? intensityLevel : 'Medium';
    const normalizedExperience = validExperienceLevels.includes(experienceLevel) ? experienceLevel : 'Beginner';

    // Validate hours per week
    const validHoursPerWeek = Math.max(1, Math.min(80, Number(hoursPerWeek) || 10));

    const prompt = `
You are an expert AI career advisor specializing in personalized learning roadmaps. Create a comprehensive, phase-based learning plan for someone wanting to become a "${targetRole.trim()}".

PERSONAL PROFILE:
- Academic/Professional Status: ${currentAcademicYear}
- Experience Level: ${normalizedExperience}
- Timeline: ${normalizedTimeline}
- Intensity Level: ${normalizedIntensity}
- Available Hours/Week: ${validHoursPerWeek}

CURRENT SKILLS ASSESSMENT:
${skillsSummary}

REQUIREMENTS:
1. Create a phase-based roadmap appropriate for the ${normalizedTimeline} timeline
2. Adapt difficulty and content to ${normalizedExperience} level
3. Match intensity to ${normalizedIntensity} commitment (${validHoursPerWeek} hrs/week)
4. Include specific projects, resources, and milestones for each phase
5. Provide personalized success tips based on their profile
6. Ensure all skill levels are between 0-100
7. Provide realistic INR salary ranges for Indian market
8. Include at least 2-4 phases depending on timeline

Return ONLY a valid JSON object in this exact format (no markdown, no extra text):
{
  "skillGaps": [
    {
      "skill": "Skill Name",
      "category": "ai|data|frontend|backend|mobile|devops|design|security|management|other",
      "currentLevel": 0,
      "targetLevel": 75,
      "gap": 75,
      "priority": "high|medium|low",
      "reasoning": "Why this skill is important for the role",
      "marketDemand": "high|medium|low"
    }
  ],
  "roadmapPhases": [
    {
      "phase": 1,
      "title": "Phase Name",
      "duration": "4-8 weeks",
      "description": "What you'll achieve in this phase",
      "skills": ["Skill1", "Skill2"],
      "projects": [
        {
          "name": "Project Name",
          "description": "What you'll build",
          "estimatedHours": 25,
          "difficulty": "beginner|intermediate|advanced",
          "skills": ["Skill1", "Skill2"]
        }
      ],
      "resources": [
        {
          "type": "course|book|documentation|tutorial|practice",
          "name": "Resource Name",
          "url": "https://example.com",
          "estimatedHours": 15,
          "difficulty": "beginner|intermediate|advanced"
        }
      ],
      "milestones": [
        {
          "name": "Milestone Name",
          "description": "What you should achieve",
          "criteria": "How to measure success"
        }
      ]
    }
  ],
  "personalizedTips": [
    {
      "category": "timeline|intensity|experience|academic",
      "tip": "Specific advice based on their profile",
      "reasoning": "Why this tip applies to them"
    }
  ],
  "careerAdvice": "Overall personalized guidance for their journey",
  "estimatedOutcome": {
    "jobReadiness": 80,
    "timeToEmployment": "6 months",
    "salaryRange": "₹6,00,000 - ₹12,00,000 per annum",
    "confidenceLevel": "high|medium|low"
  }
}`;

    // Initialize model (assuming it's imported/defined elsewhere)
    if (!model || typeof model.generateContent !== 'function') {
      throw new Error("AI model not properly initialized");
    }

    const result = await model.generateContent(prompt);
    
    if (!result || !result.response) {
      throw new Error("Invalid response from AI model");
    }

    const text = await result.response.text();
    
    if (!text || typeof text !== 'string') {
      throw new Error("Invalid text response from AI model");
    }

    // Clean the response more thoroughly
    let cleanedText = text.trim();
    
    // Remove markdown code blocks
    cleanedText = cleanedText.replace(/```(?:json|javascript)?\n?/g, "");
    
    // Remove any leading/trailing whitespace or newlines
    cleanedText = cleanedText.trim();
    
    // Find JSON content if there's extra text
    const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      cleanedText = jsonMatch[0];
    }

    let skillGapAnalysis;
    try {
      skillGapAnalysis = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Cleaned text:", cleanedText);
      throw new Error("Failed to parse AI response as valid JSON");
    }

    // Validate the parsed JSON structure
    if (!skillGapAnalysis || typeof skillGapAnalysis !== 'object') {
      throw new Error("Invalid skill gap analysis structure");
    }

    // Ensure required properties exist with defaults
    skillGapAnalysis.skillGaps = Array.isArray(skillGapAnalysis.skillGaps) 
      ? skillGapAnalysis.skillGaps 
      : [];

    skillGapAnalysis.roadmapPhases = Array.isArray(skillGapAnalysis.roadmapPhases) 
      ? skillGapAnalysis.roadmapPhases 
      : [];

    skillGapAnalysis.personalizedTips = Array.isArray(skillGapAnalysis.personalizedTips) 
      ? skillGapAnalysis.personalizedTips 
      : [];

    // Validate and sanitize skill gaps
    skillGapAnalysis.skillGaps = skillGapAnalysis.skillGaps.map(gap => ({
      skill: gap.skill || "Unknown Skill",
      category: gap.category || "other",
      currentLevel: Math.max(0, Math.min(100, Number(gap.currentLevel) || 0)),
      targetLevel: Math.max(0, Math.min(100, Number(gap.targetLevel) || 70)),
      gap: Math.max(0, Math.min(100, Number(gap.gap) || 0)),
      priority: ['high', 'medium', 'low'].includes(gap.priority) ? gap.priority : 'medium',
      reasoning: gap.reasoning || "Important for role development",
      marketDemand: ['high', 'medium', 'low'].includes(gap.marketDemand) ? gap.marketDemand : 'medium'
    }));

    // Validate estimated outcome
    if (!skillGapAnalysis.estimatedOutcome) {
      skillGapAnalysis.estimatedOutcome = {};
    }

    skillGapAnalysis.estimatedOutcome = {
      jobReadiness: Math.max(0, Math.min(100, Number(skillGapAnalysis.estimatedOutcome.jobReadiness) || 70)),
      timeToEmployment: skillGapAnalysis.estimatedOutcome.timeToEmployment || normalizedTimeline,
      salaryRange: skillGapAnalysis.estimatedOutcome.salaryRange || "₹4,00,000 - ₹8,00,000 per annum",
      confidenceLevel: ['high', 'medium', 'low'].includes(skillGapAnalysis.estimatedOutcome.confidenceLevel) 
        ? skillGapAnalysis.estimatedOutcome.confidenceLevel 
        : 'medium'
    };

    // Add comprehensive metadata
    skillGapAnalysis.metadata = {
      generatedAt: new Date().toISOString(),
      version: "2.0.0",
      userProfile: {
        currentAcademicYear,
        experienceLevel: normalizedExperience,
        targetRole: targetRole.trim(),
        timeline: normalizedTimeline,
        intensityLevel: normalizedIntensity,
        hoursPerWeek: validHoursPerWeek
      },
      inputSkills: validatedSkills,
      totalSkillsAnalyzed: validatedSkills.length,
      totalPhases: skillGapAnalysis.roadmapPhases.length
    };

    // Cache the result with better key generation and error handling
    try {
      const cacheKey = `roadmap-${lowerRole}-${normalizedTimeline}-${validatedSkills
      .map((s) => s.name.toLowerCase())
      .sort()
      .join("-")}`;

      if (cache?.get(cacheKey)?.expiry > Date.now()) {
        return cache.get(cacheKey).data;
      }
      
      // Assuming cache is available globally
      if (typeof cache !== 'undefined' && cache && typeof cache.set === 'function') {
        cache.set(cacheKey, {
          data: skillGapAnalysis,
          expiry: Date.now() + 6 * 60 * 60 * 1000, // 6 hours
          key: cacheKey
        });
        console.log(`Result cached with key: ${cacheKey}`);
      }
    } catch (cacheError) {
      console.warn("Failed to cache result:", cacheError.message);
      // Don't throw error for caching failure
    }

    return skillGapAnalysis;

  } catch (error) {
    // Enhanced error logging
    console.error("AI Comprehensive Skill Gap error:", {
      message: error.message,
      stack: error.stack,
      formData: JSON.stringify(formData, null, 2)
    });
    
    // Return more specific error messages
    if (error.message.includes("API key")) {
      throw new Error("Google AI service is not properly configured. Please contact support.");
    } else if (error.message.includes("parse") || error.message.includes("JSON")) {
      throw new Error("Failed to process AI response. Please try again with different parameters.");
    } else if (error.message.includes("Invalid") || error.message.includes("required")) {
      throw new Error(`Input validation failed: ${error.message}`);
    } else {
      throw new Error(`Failed to generate comprehensive roadmap: ${error.message}`);
    }
  }
};

// Save skill gap analysis to database
export const saveSkillGapAnalysis = async (analysisData) => {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const {
      currentAcademicYear,
      experienceLevel,
      targetRole,
      timeline,
      intensityLevel,
      hoursPerWeek,
      currentSkills,
      skillGaps,
      roadmapPhases,
      personalizedTips
    } = analysisData;

    const savedAnalysis = await db.skillGapAnalysis.create({
      data: {
        userId: userId,
        currentAcademicYear,
        targetRole,
        experienceLevel,
        timeline,
        intensityLevel,
        hoursPerWeek,
        currentSkills: currentSkills || [],
        skillGaps: skillGaps || [],
        roadmapPhases: roadmapPhases || [],
        personalizedTips: personalizedTips || [],
        progressPercentage: 0,
        completedItems: []
      }
    });

    return savedAnalysis;
  } catch (error) {
    console.error("Error saving skill gap analysis:", error);
    throw error;
  }
};

// Update progress for skill gap analysis
export const updateSkillGapProgress = async (analysisId, completedItem) => {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const analysis = await db.skillGapAnalysis.findFirst({
      where: {
        id: analysisId,
        userId: userId
      }
    });

    if (!analysis) throw new Error("Analysis not found");

    const completedItems = [...(analysis.completedItems || []), {
      ...completedItem,
      completedAt: new Date().toISOString()
    }];

    // Calculate progress percentage based on completed items
    const totalItems = analysis.roadmapPhases.reduce((total, phase) => {
      return total + (phase.projects?.length || 0) + (phase.resources?.length || 0) + (phase.milestones?.length || 0);
    }, 0);

    const progressPercentage = totalItems > 0 ? Math.round((completedItems.length / totalItems) * 100) : 0;

    const updatedAnalysis = await db.skillGapAnalysis.update({
      where: { id: analysisId },
      data: {
        completedItems,
        progressPercentage,
        updatedAt: new Date()
      }
    });

    return updatedAnalysis;
  } catch (error) {
    console.error("Error updating progress:", error);
    throw error;
  }
};
