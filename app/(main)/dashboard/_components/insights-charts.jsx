"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

// COLORS for dark/gradient background
const colors = {
  barMin: "#facc15",    // yellow
  barMedian: "#4ade80", // green
  barMax: "#f472b6",    // pink
  line: "#60a5fa",      // sky blue
  lineDot: "#f472b6",   // pink
  piePositive: "#4ade80",
  pieNeutral: "#facc15",
  pieNegative: "#ef4444",
  grayFallback: "#6b7280",
};

// Transparent card wrapper
const CardWrapper = ({ children }) => (
  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm shadow-md transition hover:shadow-xl hover:bg-white/20">
    {children}
  </div>
);

// ----------------------- Salary Chart -----------------------
export const SalaryChart = ({ salaryRanges }) => {
  if (!salaryRanges || salaryRanges.length === 0)
    return <div className="p-4 text-center text-gray-400">No salary data available</div>;

  const data = salaryRanges.slice(0, 8).map((salary) => ({
    role: salary.role,
    min: salary.min,
    median: salary.median,
    max: salary.max,
  }));

  return (
    <CardWrapper>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="role" angle={-30} textAnchor="end" height={80} interval={0} tick={{ fill: "#f9fafb" }} />
          <YAxis tick={{ fill: "#f9fafb" }} />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-gray-900 text-white p-2 rounded shadow-lg">
                    {payload.map((p) => (
                      <div key={p.dataKey}>
                        <strong>{p.name}</strong>: ${p.value.toLocaleString()}
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend wrapperStyle={{ color: "#f9fafb" }} />
          <Bar dataKey="min" name="Min Salary">
            {data.map((_, idx) => (
              <Cell key={idx} fill={colors.barMin} />
            ))}
          </Bar>
          <Bar dataKey="median" name="Median Salary">
            {data.map((_, idx) => (
              <Cell key={idx} fill={colors.barMedian} />
            ))}
          </Bar>
          <Bar dataKey="max" name="Max Salary">
            {data.map((_, idx) => (
              <Cell key={idx} fill={colors.barMax} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
};

// ----------------------- Skill Gap Analysis Chart -----------------------
export const SkillGapChart = ({ skillGaps }) => {
  if (!skillGaps || skillGaps.length === 0)
    return <div className="p-4 text-center text-gray-400">No skill gap data available</div>;

  const data = skillGaps.map((gap) => ({
    skill: gap.skill,
    gap: gap.required - gap.current,
  }));

  const getGapColor = (gap) => (gap <= 20 ? colors.barMedian : gap <= 40 ? colors.barNeutral : colors.pieNegative);

  return (
    <CardWrapper>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="skill" angle={-30} textAnchor="end" height={80} interval={0} tick={{ fill: "#f9fafb" }} />
          <YAxis domain={[0, 100]} tick={{ fill: "#f9fafb" }} />
          <Tooltip formatter={(value) => [`${value}%`, "Skill Gap"]} />
          <Bar dataKey="gap" name="Skill Gap">
            {data.map((entry, idx) => (
              <Cell key={idx} fill={getGapColor(entry.gap)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
};

// ----------------------- Growth Rate Gauge -----------------------
export const GrowthRateChart = ({ growthRate }) => {
  const percentage = Math.min(Math.max(growthRate || 0, 0), 100);
  const strokeColor = percentage > 50 ? colors.barMedian : percentage > 25 ? colors.pieNeutral : colors.pieNegative;

  return (
    <CardWrapper>
      <div className="relative w-full h-48 flex items-center justify-center">
        <svg className="w-32 h-32 transform -rotate-90">
          <circle cx="64" cy="64" r="56" stroke="#374151" strokeWidth="8" fill="none" />
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke={strokeColor}
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${(percentage / 100) * 352} 352`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute text-center">
          <div className="text-3xl font-bold text-white">{percentage}%</div>
          <div className="text-sm text-gray-400">Growth Rate</div>
        </div>
      </div>
    </CardWrapper>
  );
};

// ----------------------- Market Outlook Pie -----------------------
export const MarketOutlookChart = ({ marketOutlook }) => {
  const getOutlookColor = (outlook) => {
    switch (outlook?.toLowerCase()) {
      case "positive":
        return colors.piePositive;
      case "neutral":
        return colors.pieNeutral;
      case "negative":
        return colors.pieNegative;
      default:
        return colors.grayFallback;
    }
  };

  const data = [{ name: marketOutlook || "Unknown", value: 100, fill: getOutlookColor(marketOutlook) }];

  return (
    <CardWrapper>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((entry, idx) => (
              <Cell key={idx} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
};

// ----------------------- Trends Line Chart -----------------------
export const TrendsChart = ({ keyTrends }) => {
  if (!keyTrends || keyTrends.length === 0)
    return <div className="p-4 text-center text-gray-400">No trends data available</div>;

  const data = keyTrends.slice(0, 8).map((trend) => ({
    trend,
    impact: Math.random() * 100,
  }));

  return (
    <CardWrapper>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="trend" angle={-30} textAnchor="end" height={80} interval={0} tick={{ fill: "#f9fafb" }} />
          <YAxis tick={{ fill: "#f9fafb" }} />
          <Tooltip formatter={(value) => [`${value.toFixed(1)}%`, "Impact Score"]} />
          <Line type="monotone" dataKey="impact" stroke={colors.line} strokeWidth={2} dot={{ fill: colors.lineDot, r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
};

// ----------------------- Demand Level Pie Chart -----------------------
export const DemandLevelChart = ({ demandLevel }) => {
  const getDemandColor = (level) => {
    switch (level?.toLowerCase()) {
      case "high":
        return colors.piePositive;
      case "medium":
        return colors.pieNeutral;
      case "low":
        return colors.pieNegative;
      default:
        return colors.grayFallback;
    }
  };

  const data = [{ name: demandLevel || "Unknown", value: 100, fill: getDemandColor(demandLevel) }];

  return (
    <CardWrapper>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((entry, idx) => (
              <Cell key={idx} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
};
