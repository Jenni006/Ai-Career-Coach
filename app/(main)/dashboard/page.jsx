import { redirect } from "next/navigation";
import { getUserOnboardingStatus, getUserWithIndustry } from "@/actions/user";
import { getIndustryInsights } from "@/actions/dashboard";
import { currentUser } from "@clerk/nextjs/server";
import DashboardView from "./_components/dashboard-view";

export default async function DashboardPage() {
  console.log("🏠 Dashboard page loading...");
  
  const { isOnboarded } = await getUserOnboardingStatus();
  console.log("✅ Onboarding status:", isOnboarded);

  // Redirect if user has not completed onboarding
  if (!isOnboarded) {
    console.log("🔄 Redirecting to onboarding...");
    redirect("/onboarding");
  }

  // Get user data
  const user = await currentUser();
  console.log("👤 Current user:", user?.id);
  
  const userData = await getUserWithIndustry();
  console.log("📋 User data:", userData);
  
  // Get industry insights for the dashboard
  let industryInsights = null;
  if (userData?.industry) {
    console.log("🏭 Loading insights for industry:", userData.industry);
    try {
      industryInsights = await getIndustryInsights(userData.industry);
      console.log("📊 Industry insights loaded:", !!industryInsights);
    } catch (error) {
      console.error("❌ Error loading industry insights:", error);
    }
  } else {
    console.log("⚠️ No industry found for user");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard with Future-Proofing and Industry Insights */}
      <DashboardView insights={industryInsights} userProfile={userData} showFutureProofing={true} />
    </div>
  );
}
