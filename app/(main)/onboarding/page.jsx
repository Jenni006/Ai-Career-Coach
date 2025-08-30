import { industries } from "@/data/industries";
import { redirect } from "next/navigation";
import { getUserOnboardingStatus } from "@/actions/user";
import OnboardingForm from "./_components/onboarding-form";
import OnboardingClient from "./OnboardingClient";

const OnboardingPage = async () => {
  //CHECK IS USER ALREADY ONBOARDED
  const { isOnboarded } = await getUserOnboardingStatus();

  if(isOnboarded){
    redirect("/dashboard");
  }
  return <main>
    <OnboardingForm industries={industries} />
  </main>
}

export default OnboardingPage