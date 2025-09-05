"use client";

import { useState, useEffect } from "react";
import DashboardView from "../dashboard/_components/dashboard-view";
import { getIndustryInsights } from "@/actions/dashboard";
import { Loader2 } from "lucide-react";

export default function IndustryInsightsClient() {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const storedData = sessionStorage.getItem("userCareerData");
        if (!storedData) {
          setLoading(false);
          return;
        }
        const parsedData = JSON.parse(storedData);
        if (parsedData.profile?.industry) {
          const data = await getIndustryInsights(parsedData.profile.industry);
          setInsights(data);
        }
      } catch (err) {
        console.error("Failed to load industry insights:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
      <p className="ml-4 text-gray-600">Loading industry insights...</p>
    </div>
  );

  if (!insights) return (
    <div className="min-h-screen flex items-center justify-center text-white">
      No insights available for your industry yet.
    </div>
  );

  return <DashboardView insights={insights} />;
}
