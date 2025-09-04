"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

const cache = new Map();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: "You are a helpful assistant that generates industry insights for a given industry.",
});

export const generateAIInsights = async (industry) => {
    try {
        if (!process.env.GOOGLE_API_KEY) {
            throw new Error("Google API key not configured");
        }

        const cacheKey = `ai-insights-${industry}`;
        if (cache.has(cacheKey)) {
            const { data, expiry } = cache.get(cacheKey);
            if (Date.now() < expiry) {
                console.log(`Cache hit for industry: ${industry}`);
                return data;
            } else {
                // Remove expired cache
                cache.delete(cacheKey);
            }
        }

        console.log(`Generating new insights for: ${industry}`);

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
              }
              
              IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
              Use Indian Rupees (₹) for all salary values.
              Include at least 5 common roles for salary ranges.
              Growth rate should be a percentage.
              Include at least 5 skills and trends.
            `;
        
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
        
        const insights = JSON.parse(cleanedText);

        cache.set(cacheKey, {
            data: insights,
            expiry: Date.now() + (6 * 60 * 60 * 1000) // 6 hours
        });

        return insights;

    } catch (error) {
        console.error("AI generation error:", error);
        throw new Error(`Failed to generate AI insights: ${error.message}`);
    }
};

export async function getIndustryInsights(industry = null){
    try {
        console.log("🔍 getIndustryInsights called with industry:", industry);
        const { userId } = await auth();
        console.log("👤 User ID:", userId);
        if (!userId) throw new Error("Unauthorized");

        // If industry is provided, use it; otherwise get from user
        let targetIndustry = industry;
        if (!targetIndustry) {
            console.log("🔎 No industry provided, fetching from user...");
            const user = await db.user.findUnique({
                where: { clerkUserId: userId },
                select: { industry: true },
            });
            console.log("👤 User data:", user);

            if (!user) throw new Error("User not found");
            targetIndustry = user.industry;
        }

        console.log("🏭 Target industry:", targetIndustry);
        if (!targetIndustry) throw new Error("No industry specified");

        let industryInsight = await db.industryInsight.findUnique({
            where: { industry: targetIndustry },
        });
        console.log("📊 Found existing industry insight:", !!industryInsight);

        if (!industryInsight) {
            console.log("🚀 Creating new industry insight...");
            try {
                const insights = await generateAIInsights(targetIndustry);
                console.log("🤖 AI insights generated:", insights);
                
                industryInsight = await db.industryInsight.create({
                    data: {
                        industry: targetIndustry,
                        ...insights,
                        nextUpdate: new Date(Date.now()+ 7*24*60*60*1000),
                    },
                });
                console.log("✅ Industry insight created in DB");
            } catch (aiError) {
                console.error("❌ AI generation failed:", aiError);
                // Create with default data if AI fails
                console.log("🔄 Creating with fallback data...");
                industryInsight = await db.industryInsight.create({
                    data: {
                        industry: targetIndustry,
                        salaryRanges: [
                            { role: "Entry Level", min: 300000, median: 500000, max: 700000 },
                            { role: "Mid Level", min: 600000, median: 900000, max: 1200000 },
                            { role: "Senior Level", min: 1000000, median: 1500000, max: 2000000 }
                        ],
                        growthRate: 15,
                        demandLevel: "MEDIUM",
                        automationRisk: null,
                        futureDemand: null,
                        topSkills: ["Communication", "Problem Solving", "Teamwork", "Leadership", "Technical Skills"],
                        recommendedSkills: ["Data Analysis", "Project Management", "Digital Marketing"],
                        keyTrends: ["Digital Transformation", "Remote Work", "AI Integration", "Cloud Computing"],
                        marketOutlook: "Positive",
                        source: null,
                        lastUpdated: new Date(),
                        nextUpdate: new Date(Date.now()+ 7*24*60*60*1000),
                    },
                });
                console.log("✅ Fallback industry insight created");
            }
        }

        console.log("📈 Returning industry insight:", industryInsight);
        return industryInsight;
    } catch (error) {
        console.error("Error getting industry insights:", error);
        throw error;
    } 
}

export const generateSkillGap = async (role, currentSkills, userSkillsData) => {
    try {
      if (!process.env.GOOGLE_API_KEY) {
        throw new Error("Google API key not configured");
      }

      const safeCurrentSkills = currentSkills || [];
      
      // Handle both old format (array of strings) and new format (array of skill objects)
      const currentSkillsMap = new Map();
      if (Array.isArray(userSkillsData) && userSkillsData.length > 0 && typeof userSkillsData[0] === 'object') {
        // New format: array of skill objects with proficiency
        userSkillsData.forEach(skill => {
          currentSkillsMap.set(skill.name.toLowerCase(), skill.score || 25);
        });
      } else {
        // Old format: just skill names
        safeCurrentSkills.forEach(skill => {
          currentSkillsMap.set(skill.toLowerCase(), 50); // Default proficiency
        });
      }

      const cacheKey = `skill-gap-${role}-${JSON.stringify(safeCurrentSkills)}-${Date.now()}`;
  
      console.log(`Generating new skill gap for: ${role}`);
  
      const prompt = `
You are an AI career advisor. Analyze the skill gap for someone wanting to become a "${role}".

IMPORTANT: Only analyze skills that are either:
1. Already mentioned by the user (with their proficiency levels)
2. Essential skills that are missing for the target role

Current skills and proficiency levels:
${Array.from(currentSkillsMap.entries()).map(([skill, proficiency]) => `- ${skill}: ${proficiency}%`).join('\n')}

Based on the role "${role}", identify what skills are needed and analyze the gaps.

Return ONLY a JSON object in this exact format:
{
  "requiredSkills": [
    {
      "name": "Skill Name",
      "category": "frontend|backend|ai|devops|cloud|design|other",
      "proficiency": 0-100,
      "required": 70-95,
      "priority": "high|medium|low",
      "reasoning": "Brief explanation of why this skill is important"
    }
  ],
  "learningPath": [
    {
      "step": 1,
      "skill": "Skill Name",
      "description": "What to learn and why",
      "estimatedTime": "2-4 weeks",
      "resources": ["Course recommendation", "Practice project", "Documentation"]
    }
  ],
  "careerAdvice": "Brief personalized advice based on current skills and target role"
}

STRICT Rules:
1. For user-provided skills: Use their exact proficiency levels
2. For missing essential skills: Set proficiency to 0
3. DO NOT include skills with >0 proficiency unless user mentioned them
4. Include 6-10 most relevant skills (focus on gaps and essentials)
5. Set required level based on role expectations (70-95)
6. Create a 5-step learning path focusing on highest priority gaps
7. Include specific course recommendations in resources
8. Categories: frontend (React, HTML, CSS, JS), backend (Node.js, Python, APIs), ai (ML, Data Science), devops (Docker, CI/CD), cloud (AWS, Azure), design (UI/UX), other

Return only valid JSON, no markdown or explanations.
`;
  
      const result = await model.generateContent(prompt);
      const text = typeof result.response === "string" ? result.response : await result.response.text();
      const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
      
      const skillGap = JSON.parse(cleanedText);

      cache.set(cacheKey, {
          data: skillGap,
          expiry: Date.now() + (6 * 60 * 60 * 1000) // 6 hours
      });
  
      return skillGap;
    } catch (error) {
      console.error("AI Skill Gap error:", error);
      throw new Error(`Failed to generate Skill Gap: ${error.message}`);
    }
};