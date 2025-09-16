"use server";

import { db } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) {
    console.error("Unauthorized: userId missing");
    return { success: false, error: "Unauthorized" };
  }

  try {
    const result = await db.$transaction(async (tx) => {
      // 1️⃣ Ensure user exists
      let user = await tx.user.findUnique({ where: { clerkUserId: userId } });

      if (!user) {
        const clerkUser = await currentUser();
        if (!clerkUser) {
          console.error("Clerk user not found for userId:", userId);
          return { success: false, error: "Clerk user not found" };
        }

        const name = `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim();

        user = await tx.user.create({
          data: {
            clerkUserId: userId,
            name: name || "User",
            email: clerkUser.emailAddresses[0]?.emailAddress || "",
            imageUrl: clerkUser.imageUrl,
            skills: [],
          },
        });
      }

      // 2️⃣ Ensure industry exists
      let industryInsight = await tx.industryInsight.findUnique({
        where: { industry: data.industry },
      });

      if (!industryInsight) {
        const insights = await generateAIInsights(data.industry);

        // Normalize demandLevel
        const validLevels = ["HIGH", "MEDIUM", "LOW"];
        let normalized = insights.demandLevel?.trim().toUpperCase();
        if (!validLevels.includes(normalized)) normalized = "MEDIUM";
        insights.demandLevel = normalized;

        industryInsight = await tx.industryInsight.create({
          data: {
            industry: data.industry,
            ...insights,
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
          },
        });
      }

      // 3️⃣ Update user profile
      const updatedUser = await tx.user.update({
        where: { id: user.id },
        data: {
          industry: data.industry,
          experience: data.experience,
          bio: data.bio,
          skills: data.skills || [],
          isOnboarded: true,
        },
      });

      return { success: true, updatedUser, industryInsight };
    }, { timeout: 10000 });

    // 4️⃣ Revalidate dashboard after update
    revalidatePath("/dashboard");

    return result;
  } catch (error) {
    console.error("Error updating user:", error);
    return { success: false, error: error.message || "Failed to update profile" };
  }
}


export async function getUserOnboardingStatus() {
  try {
    const { userId } = await auth();
    if (!userId) return { isOnboarded: false };

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      select: { industry: true },
    });

    // If user doesn't exist or industry not set → onboarding required
    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    return { isOnboarded: false };
  }
}