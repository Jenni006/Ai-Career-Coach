"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SalaryChart,
  GrowthRateChart,
  SkillGapChart, 
  MarketOutlookChart,
  TrendsChart,
  DemandLevelChart,
} from "./insights-charts";

const DashboardView = ({ insights }) => {
  if (!insights) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Loading insights...</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Industry Insights Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Growth Rate Gauge */}
        <Card className = " bg-transparent border-2 hover:border-primary transition-colors duration-300" >
          <CardHeader>
            <CardTitle>Growth Rate</CardTitle>
            <CardDescription>Industry growth percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <GrowthRateChart growthRate={insights.growthRate} />
          </CardContent>
        </Card>

        {/* Demand Level */}
        <Card className="bg-transparent border-2 hover:border-primary transition-colors duration-300">
          <CardHeader>
            <CardTitle>Demand Level</CardTitle>
            <CardDescription>Current market demand</CardDescription>
          </CardHeader>
          <CardContent>
            <DemandLevelChart demandLevel={insights.demandLevel} />
          </CardContent>
        </Card>

        {/* Market Outlook */}
        <Card className="bg-transparent border-2 hover:border-primary transition-colors duration-300">
          <CardHeader>
            <CardTitle>Market Outlook</CardTitle>
            <CardDescription>Future market prediction</CardDescription>
          </CardHeader>
          <CardContent>
            <MarketOutlookChart marketOutlook={insights.marketOutlook} />
          </CardContent>
        </Card>

        {/* Skill Gap Analysis */}
        <Card className="bg-transparent border-2 hover:border-primary transition-colors duration-300 md:col-span-2">
        <CardHeader>
            <CardTitle>Skill Gap Analysis</CardTitle>
            <CardDescription>Gap between current and required skills</CardDescription>
        </CardHeader>
        <CardContent>
            <SkillGapChart skillGaps={insights.skillGaps} />
        </CardContent>
        </Card>

        {/* Trends Line Chart */}
        <Card className="bg-transparent border-2 hover:border-primary transition-colors duration-300 md:col-span-2 ">
          <CardHeader>
            <CardTitle>Key Trends Impact</CardTitle>
            <CardDescription>Trend impact analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <TrendsChart keyTrends={insights.keyTrends} />
          </CardContent>
        </Card>

        {/* Salary Ranges Bar Chart */}
        <Card className="bg-transparent border-2 hover:border-primary transition-colors duration-300 md:col-span-3">
            <CardHeader>
                <CardTitle>Salary Ranges by Role</CardTitle>
                <CardDescription>Compensation comparison</CardDescription>
            </CardHeader>
            <CardContent>
                <SalaryChart salaryRanges={insights.salaryRanges} />
            </CardContent>
        </Card>

        {/* Text-based insights */}
        <Card className="bg-transparent border-2 hover:border-primary transition-colors duration-300 md:col-span-2">
          <CardHeader>
            <CardTitle>Top Skills</CardTitle>
            <CardDescription>Most in-demand skills</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1">
              {insights.topSkills?.slice(0, 5).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Recommended Skills */}
        <Card className="bg-transparent border-2 hover:border-primary transition-colors duration-300" >
          <CardHeader>
            <CardTitle>Recommended Skills</CardTitle>
            <CardDescription>Skills to develop</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {insights.recommendedSkills?.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;
