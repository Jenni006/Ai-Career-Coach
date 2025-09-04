import { redirect } from "next/navigation";
import { getUserOnboardingStatus } from "@/actions/user";
import OnboardingClient from "./OnboardingClient"; // <- import the client wrapper

export default async function OnboardingPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }

  return <OnboardingClient />;
}
