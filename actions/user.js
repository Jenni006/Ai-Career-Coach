"use server";

import { db } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
  
    try {
      // Start a transaction
      const result = await db.$transaction(
        async (tx) => {
          // Check if user exists, if not create them
          let user = await tx.user.findUnique({
            where: { clerkUserId: userId },
          });
  
          if (!user) {
            const clerkUser = await currentUser();
            if (!clerkUser) throw new Error("Clerk user not found");

            const name = `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim();
            
            user = await tx.user.create({
              data: {
                clerkUserId: userId,
                name: name || 'User',
                imageUrl: clerkUser.imageUrl,
                email: clerkUser.emailAddresses[0]?.emailAddress || '',
                skills: []
              }
            });
          }

          // First check if industry exists
          let industryInsight = await tx.industryInsight.findUnique({
            where: {
              industry: data.industry,
            },
          });
  
          // If industry doesn't exist, create it with AI insights
          if (!industryInsight) {
            let insights = await generateAIInsights(data.industry);
  
            // 🛠 Normalize demandLevel
            if (insights.demandLevel) {
                const validLevels = ["HIGH", "MEDIUM", "LOW"];
                let normalized = insights.demandLevel.trim().toLowerCase();
              
                if (normalized === "high") normalized = "HIGH";
                else if (normalized === "medium") normalized = "MEDIUM";
                else if (normalized === "low") normalized = "LOW";
              
                if (!validLevels.includes(normalized)) {
                  console.warn(
                    `⚠️ Invalid demandLevel: ${insights.demandLevel}, defaulting to "MEDIUM"`
                  );
                  normalized = "MEDIUM";
                }
              
                insights.demandLevel = normalized;
            }
              
  
            industryInsight = await tx.industryInsight.create({
              data: {
                industry: data.industry,
                ...insights,
                nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
              },
            });
          }
  
          // Now update the user
          const updatedUser = await tx.user.update({
            where: {
              id: user.id,
            },
            data: {
              industry: data.industry,
              experience: data.experience,
              bio: data.bio,
              skills: data.skills,
            },
          });
  
          // ✅ return with consistent structure
          return { updatedUser, industryInsight };
        },
        {
          timeout: 10000, // default 5000
        }
      );
  
      revalidatePath("/");
  
      return { success: true, user: result.updatedUser };
    } catch (error) {
      console.error("Error updating user and industry:", error.message);
      throw new Error("Failed to update profile");
    }
  }

export async function getUserOnboardingStatus() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return { isOnboarded: false };
    }

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      select: { industry: true },
    });

    // If user doesn't exist, they need to go through onboarding
    if (!user) {
      return { isOnboarded: false };
    }

    return {
      isOnboarded: !!user.industry,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    return { isOnboarded: false };
  }
}

export async function getUserWithIndustry() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return null;
    }

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      select: { 
        name: true,
        industry: true,
        experience: true,
        skills: true,
        bio: true 
      },
    });

    return user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}