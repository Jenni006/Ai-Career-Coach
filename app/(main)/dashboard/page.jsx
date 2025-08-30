import { redirect } from "next/navigation";
import { getUserOnboardingStatus, getUserWithIndustry } from "@/actions/user";
import { currentUser } from "@clerk/nextjs/server";
import FutureProofingDashboard from "@/components/FutureProofingDashboard";

export default async function DashboardPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  // Redirect if user has not completed onboarding
  if (!isOnboarded) {
    redirect("/onboarding");
  }

  // Get user data
  const user = await currentUser();
  const userData = await getUserWithIndustry();

  return (
    <div className="min-h-screen bg-background">
      {/* Future-Proofing Landing Page */}
      <div className="p-6">
        <FutureProofingDashboard userProfile={userData} />
      </div>
    </div>
  );
}
