import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import FutureProofingDashboard from "@/components/FutureProofingDashboard";

export default async function DashboardPage() {
  try {
    const { isOnboarded } = await getUserOnboardingStatus();

    // If not onboarded, redirect to onboarding page
    if (!isOnboarded) {
      redirect("/onboarding");
    }

    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Future-Proofing Dashboard</h1>
        <FutureProofingDashboard />
      </div>
    );
  } catch (error) {
    console.error("Dashboard error:", error);
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-red-500">Error loading dashboard: {error.message}</p>
        <p className="text-sm text-gray-500 mt-2">Please try refreshing the page.</p>
      </div>
    );
  }
}