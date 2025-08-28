"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
              Include at least 5 common roles for salary ranges.
              Growth rate should be a percentage.
              Include at least 5 skills and trends.
            `;
        
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
        
        return JSON.parse(cleanedText);
    } catch (error) {
        console.error("AI generation error:", error);
        throw new Error(`Failed to generate AI insights: ${error.message}`);
    }
};

export async function getIndustryInsights(){
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
                        nextUpdate: new Date(Date.now()+ 7*24*60*60*1000),
                    },
                });
            } catch (aiError) {
                console.error("AI generation failed:", aiError);
                // Create with default data if AI fails
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
                        nextUpdate: new Date(Date.now()+ 7*24*60*60*1000),
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