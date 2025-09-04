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

// ------------------------- Skill Gap & Roadmap -------------------------
export const generateSkillGap = async (role, currentSkills, userSkillsData) => {
  try {
    if (!process.env.GOOGLE_API_KEY)
      throw new Error("Google API key not configured");

    const safeCurrentSkills = currentSkills || [];
    const currentSkillsMap = new Map();

    if (
      Array.isArray(userSkillsData) &&
      userSkillsData.length > 0 &&
      typeof userSkillsData[0] === "object"
    ) {
      userSkillsData.forEach((skill) => {
        currentSkillsMap.set(skill.name.toLowerCase(), skill.score || 25);
      });
    } else {
      safeCurrentSkills.forEach((skill) => {
        currentSkillsMap.set(skill.toLowerCase(), 50);
      });
    }

    const cacheKey = `skill-gap-${role}-${JSON.stringify(
      safeCurrentSkills
    )}-${Date.now()}`;
    console.log(`Generating new skill gap for: ${role}`);

    const prompt = `
You are an AI career advisor. Analyze the skill gap for someone wanting to become a "${role}".

Current skills and proficiency levels:
${Array.from(currentSkillsMap.entries())
  .map(([skill, proficiency]) => `- ${skill}: ${proficiency}%`)
  .join("\n")}

Return ONLY a JSON object in this exact format:
{
  "requiredSkills": [
    {
      "name": "Skill Name",
      "category": "frontend|backend|ai|devops|cloud|design|other",
      "proficiency": 0-100,
      "required": 70-95,
      "priority": "high|medium|low",
      "reasoning": "Brief explanation"
    }
  ],
  "learningPath": [
    {
      "step": 1,
      "skill": "Skill Name",
      "description": "What to learn and why",
      "estimatedTime": "2-4 weeks",
      "resources": ["Course", "Practice", "Docs"]
    }
  ],
  "careerAdvice": "Brief personalized advice"
}`;

    const result = await model.generateContent(prompt);
    const text =
      typeof result.response === "string"
        ? result.response
        : await result.response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

    const skillGap = JSON.parse(cleanedText);

    cache.set(cacheKey, {
      data: skillGap,
      expiry: Date.now() + 6 * 60 * 60 * 1000,
    });

    return skillGap;
  } catch (error) {
    console.error("AI Skill Gap error:", error);
    throw new Error(`Failed to generate Skill Gap: ${error.message}`);
  }
};
