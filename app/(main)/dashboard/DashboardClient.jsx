"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SkillGapAnalysis from "../../../components/SkillGapAnalysis";
import DashboardView from "./_components/dashboard-view";
import { generatePersonalizedSkillGap } from "../../lib/skillGapService";
import { getIndustryInsights } from "@/actions/dashboard";

import { Loader2, RefreshCw, User } from "lucide-react";

export default function DashboardClient() {
  const [userData, setUserData] = useState(null);
  const [skillGapData, setSkillGapData] = useState(null);
  const [industryInsights, setIndustryInsights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const storedData = sessionStorage.getItem("userCareerData");
      if (!storedData) {
        // Don't redirect here, let the server-side check handle it
        setLoading(false);
        return;
      }
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
      setSkillGapData(parsedData.skillGap);
      
      // Load industry insights if user has an industry
      if (parsedData.profile?.industry) {
        loadIndustryInsights(parsedData.profile.industry);
      }
    } catch (err) {
      setError("Failed to load profile. Please complete onboarding again.");
    } finally {
      setLoading(false);
    }
  };

  const loadIndustryInsights = async (industry) => {
    try {
      const insights = await getIndustryInsights(industry);
      setIndustryInsights(insights);
    } catch (error) {
      console.error("Error loading industry insights:", error);
    }
  };

  const handleRefreshAnalysis = async () => {
    if (!userData?.profile) return;

    try {
      setRefreshing(true);
      const newSkillGap = await generatePersonalizedSkillGap(userData.profile);
      const updatedData = {
        ...userData,
        skillGap: newSkillGap,
        lastUpdated: new Date().toISOString(),
      };
      sessionStorage.setItem("userCareerData", JSON.stringify(updatedData));
      setUserData(updatedData);
      setSkillGapData(newSkillGap);
    } finally {
      setRefreshing(false);
    }
  };

  const handleUpdateProfile = () => {
    router.push("/onboarding");
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
      <p className="ml-4 text-gray-600">Loading your dashboard...</p>
    </div>
  );

  return (
    <div className="min-h-screen p-6 bg-gray-900">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-white text-2xl font-bold">
          Welcome back, {userData?.profile?.name || 'User'}!
        </h1>
        <div className="flex gap-2">
          <button
            onClick={handleRefreshAnalysis}
            disabled={refreshing}
            className="bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-600"
          >
            <RefreshCw className={`w-4 h-4 inline ${refreshing ? "animate-spin" : ""}`} />
            {refreshing ? " Updating..." : " Refresh"}
          </button>
          <button
            onClick={handleUpdateProfile}
            className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
          >
            <User className="w-4 h-4 inline mr-1" />
            Update Profile
          </button>
        </div>
      </div>

      {/* Industry Insights Dashboard */}
      <DashboardView insights={industryInsights} />
    </div>
  );
}
