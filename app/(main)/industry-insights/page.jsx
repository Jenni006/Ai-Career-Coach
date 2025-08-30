import { redirect } from "next/navigation";
import { getUserOnboardingStatus, getUserWithIndustry } from "@/actions/user";
import { getIndustryInsights } from "@/actions/dashboard";
import { currentUser } from "@clerk/nextjs/server";
import DashboardView from "../dashboard/_components/dashboard-view";

export default async function IndustryInsightsPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  // Redirect if user has not completed onboarding
  if (!isOnboarded) {
    redirect("/onboarding");
  }

  // Get user data
  const user = await currentUser();
  const userData = await getUserWithIndustry();
  let industryInsights = null;
  
  if (userData?.industry) {
    try {
      industryInsights = await getIndustryInsights(userData.industry);
    } catch (error) {
      console.error("Error loading industry insights:", error);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Industry Insights Dashboard */}
      <DashboardView insights={industryInsights} userProfile={userData} showFutureProofing={false} />
    </div>
  );
}
