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
    if (!process.env.GOOGLE_API_KEY)
      throw new Error("Google API key not configured");

    const {
      currentAcademicYear,
      experienceLevel,
      targetRole,
      timeline,
      intensityLevel,
      hoursPerWeek,
      currentSkills
    } = formData;

    console.log(`Generating comprehensive roadmap for: ${targetRole}`);

    // Create skill summary for AI analysis
    const skillsSummary = currentSkills.map(skill => 
      `- ${skill.name} (${skill.categoryLabel}): Current ${skill.currentLevel}% → Target ${skill.targetLevel}% [${skill.priority} priority]`
    ).join('\n');

    const prompt = `
You are an expert AI career advisor specializing in personalized learning roadmaps. Create a comprehensive, phase-based learning plan for someone wanting to become a "${targetRole}".

PERSONAL PROFILE:
- Academic/Professional Status: ${currentAcademicYear}
- Experience Level: ${experienceLevel}
- Timeline: ${timeline}
- Intensity Level: ${intensityLevel}
- Available Hours/Week: ${hoursPerWeek}

CURRENT SKILLS ASSESSMENT :
${skillsSummary}

REQUIREMENTS:
1. Create a phase-based roadmap appropriate for the ${timeline} timeline
2. Adapt difficulty and content to ${experienceLevel} level
3. Match intensity to ${intensityLevel} commitment (${hoursPerWeek} hrs/week)
4. Include specific projects, resources, and milestones for each phase
5. Provide personalized success tips based on their profile

Return ONLY a JSON object in this exact format:
{
  "skillGaps": [
    {
      "skill": "Skill Name",
      "category": "ai|data|frontend|backend|mobile|devops|design|security|management|other",
      "currentLevel": "0-100",
      "targetLevel": "70-95", 
      "gap": "0-95",
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
          "estimatedHours": 20-40,
          "difficulty": "beginner|intermediate|advanced",
          "skills": ["Skill1", "Skill2"]
        }
      ],
      "resources": [
        {
          "type": "course|book|documentation|tutorial|practice",
          "name": "Resource Name",
          "url": "https://example.com",
          "estimatedHours": 10-30,
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
    "jobReadiness": "60-95%",
    "timeToEmployment": "3-12 months",
    "salaryRange":  "Provide in INR (Indian Rupees) as per market salary trends in India for this role",
    "confidenceLevel": "high|medium|low"
  }
}`;

    const result = await model.generateContent(prompt);
    const text = await result.response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

    const skillGapAnalysis = JSON.parse(cleanedText);

    // Add metadata
    skillGapAnalysis.metadata = {
      generatedAt: new Date().toISOString(),
      userProfile: {
        currentAcademicYear,
        experienceLevel,
        targetRole,
        timeline,
        intensityLevel,
        hoursPerWeek
      },
      inputSkills: currentSkills
    };

    // Cache the result
    const cacheKey = `comprehensive-roadmap-${targetRole}-${timeline}-${Date.now()}`;
    cache.set(cacheKey, {
      data: skillGapAnalysis,
      expiry: Date.now() + 6 * 60 * 60 * 1000,
    });

    return skillGapAnalysis;
  } catch (error) {
    console.error("AI Comprehensive Skill Gap error:", error);
    throw new Error(`Failed to generate comprehensive roadmap: ${error.message}`);
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
