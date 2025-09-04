"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, BarChart3, Users, DollarSign, Target } from 'lucide-react';
import { 
  GrowthRateChart, 
  DemandLevelChart, 
  MarketOutlookChart, 
  TrendsChart, 
  SalaryChart 
} from '@/app/(main)/dashboard/_components/insights-charts'
import FutureProofingDashboard from '@/components/FutureProofingDashboard';

const DashboardView = ({ insights, userProfile, showFutureProofing = true }) => {
  console.log("🎨 DashboardView rendering with insights:", !!insights);
  console.log("📊 Full insights object:", insights);
  console.log("👤 User profile:", userProfile);
  console.log("🔮 Show future proofing:", showFutureProofing);
  console.log("🟢 DashboardView mounted!");
  console.log("🎨 Insights passed:", insights);
  console.log("👤 User profile:", userProfile);
  
  // Fallback data when insights are not available
  const fallbackInsights = {
    growthRate: 15,
    demandLevel: "MEDIUM",
    marketOutlook: "Positive",
    keyTrends: ["Digital Transformation", "Remote Work", "AI Integration", "Cloud Computing", "Cybersecurity"],
    topSkills: ["Communication", "Problem Solving", "Leadership", "Technical Skills", "Adaptability"],
    recommendedSkills: ["Data Analysis", "Project Management", "Digital Marketing", "Cloud Technologies"],
    salaryRanges: [
      { role: "Entry Level", min: 300000, median: 500000, max: 700000 },
      { role: "Mid Level", min: 600000, median: 900000, max: 1200000 },
      { role: "Senior Level", min: 1000000, median: 1500000, max: 2000000 }
    ]
  };

  const displayInsights = insights || fallbackInsights;
  const isUsingFallback = !insights;
  
  console.log("📊 Display insights:", displayInsights);
  console.log("🔄 Using fallback:", isUsingFallback);

  return (
    <div className="p-6 space-y-6">
      {/* Future-Proofing Analysis Section - Only show if enabled */}
      {showFutureProofing && (
        <div className="mb-8">
          <FutureProofingDashboard userProfile={userProfile} />
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Growth Rate Gauge */}
        <Card className="bg-transparent border border-gray-700/20 hover:border-gray-600/30 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-white">Growth Rate</CardTitle>
            <CardDescription className="text-gray-400">Industry growth percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <GrowthRateChart growthRate={displayInsights.growthRate} />
          </CardContent>
        </Card>

        {/* Demand Level */}
        <Card className="bg-transparent border border-gray-700/20 hover:border-gray-600/30 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-white">Demand Level</CardTitle>
            <CardDescription className="text-gray-400">Current market demand</CardDescription>
          </CardHeader>
          <CardContent>
            <DemandLevelChart demandLevel={displayInsights.demandLevel} />
          </CardContent>
        </Card>

        {/* Market Outlook */}
        <Card className="bg-transparent border border-gray-700/20 hover:border-gray-600/30 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-white">Market Outlook</CardTitle>
            <CardDescription className="text-gray-400">Future market prediction</CardDescription>
          </CardHeader>
          <CardContent>
            <MarketOutlookChart marketOutlook={displayInsights.marketOutlook} />
          </CardContent>
        </Card>

        {/* Trends Line Chart */}
        <Card className="bg-transparent border border-gray-700/20 hover:border-gray-600/30 transition-colors duration-300 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-white">Key Trends Impact</CardTitle>
            <CardDescription className="text-gray-400">Trend impact analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <TrendsChart keyTrends={displayInsights.keyTrends} />
          </CardContent>
        </Card>

        {/* Salary Ranges Bar Chart */}
        <Card className="bg-transparent border border-gray-700/20 hover:border-gray-600/30 transition-colors duration-300 md:col-span-3">
            <CardHeader>
                <CardTitle className="text-white">Salary Ranges by Role</CardTitle>
                <CardDescription className="text-gray-400">Compensation comparison</CardDescription>
            </CardHeader>
            <CardContent>
                <SalaryChart salaryRanges={displayInsights.salaryRanges} />
            </CardContent>
        </Card>

        {/* Text-based insights */}
        <Card className="bg-transparent border border-gray-700/20 hover:border-gray-600/30 transition-colors duration-300 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-white">Top Skills</CardTitle>
            <CardDescription className="text-gray-400">Most in-demand skills</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {displayInsights.topSkills?.slice(0, 5).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Recommended Career Options */}
        <Card className="bg-transparent border border-gray-700/20 hover:border-gray-600/30 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-white">Recommended Career Options</CardTitle>
            <CardDescription className="text-gray-400">Career paths to consider</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {displayInsights.recommendedSkills?.map((skill, index) => (
                <span key={index} className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Source Indicator */}
      {isUsingFallback && (
        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <p className="text-yellow-300 text-sm">
            📊 Displaying sample data. Complete your profile to see personalized industry insights.
          </p>
        </div>
      )}
    </div>
  );
};

export default DashboardView;
