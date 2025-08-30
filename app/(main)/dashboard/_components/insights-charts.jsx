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
  // Purple → Pink gradient colors
  barMin: "#9C27B0",     // Purple
  barMinEnd: "#E91E63",  // Pink
  // Pink → Orange gradient colors
  barMedian: "#E91E63",  // Pink  
  barMedianEnd: "#FF9800", // Orange
  // Blue → Cyan gradient colors
  barMax: "#2196F3",     // Blue
  barMaxEnd: "#00BCD4",  // Cyan
  // Purple → Orange gradient colors
  line: "#9C27B0",       // Purple
  lineEnd: "#FF9800",    // Orange
  lineDot: "#E91E63",    // Pink for dots
  // Dark gradient colors for pie charts
  piePositive: "#1e40af", // Dark blue
  piePositiveEnd: "#3b82f6", // Blue
  pieNeutral: "#92400e",  // Dark orange
  pieNeutralEnd: "#f59e0b", // Orange
  pieNegative: "#991b1b", // Dark red
  pieNegativeEnd: "#ef4444", // Red
  grayFallback: "#6b7280",
};

// Transparent card wrapper
const CardWrapper = ({ children }) => (
  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm shadow-md transition hover:shadow-xl hover:bg-white/20">
    {children}
  </div>
);

const SalaryTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-gray-900 text-white p-2 rounded shadow-lg">
      {payload.map((p) => (
        <div key={p.dataKey}>
          <strong>{p.name}</strong>:{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(p.value)}
        </div>
      ))}
    </div>
  );
};

// ----------------------- Salary Chart -----------------------
export const SalaryChart = ({ salaryRanges }) => {
  if (!salaryRanges || salaryRanges.length === 0)
    return (
      <div className="p-4 text-center text-gray-400">
        No salary data available
      </div>
    );

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
          <defs>
            <linearGradient id="barMinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.barMin} />
              <stop offset="100%" stopColor={colors.barMinEnd} />
            </linearGradient>
            <linearGradient id="barMedianGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.barMedian} />
              <stop offset="100%" stopColor={colors.barMedianEnd} />
            </linearGradient>
            <linearGradient id="barMaxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.barMax} />
              <stop offset="100%" stopColor={colors.barMaxEnd} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="role"
            angle={-30}
            textAnchor="end"
            height={80}
            interval={0}
            tick={{ fill: "#f9fafb" }}
          />
          <YAxis tick={{ fill: "#f9fafb" }} />
          <Tooltip content={<SalaryTooltip />} />

          <Bar dataKey="min" name="Min Salary">
            {data.map((_, idx) => (
              <Cell key={idx} fill="url(#barMinGradient)" />
            ))}
          </Bar>
          <Bar dataKey="median" name="Median Salary">
            {data.map((_, idx) => (
              <Cell key={idx} fill="url(#barMedianGradient)" />
            ))}
          </Bar>
          <Bar dataKey="max" name="Max Salary">
            {data.map((_, idx) => (
              <Cell key={idx} fill="url(#barMaxGradient)" />
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

  

  return (
    <CardWrapper>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
          <defs>
            <linearGradient id="skillGapLowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.barMedian} />
              <stop offset="100%" stopColor={colors.barMedianEnd} />
            </linearGradient>
            <linearGradient id="skillGapMediumGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.pieNeutral} />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="skillGapHighGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.pieNegative} />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="skill" angle={-30} textAnchor="end" height={80} interval={0} tick={{ fill: "#f9fafb" }} />
          <YAxis domain={[0, 100]} tick={{ fill: "#f9fafb" }} />
          <Tooltip formatter={(value) => [`${value}%`, "Skill Gap"]} />
          <Bar dataKey="gap" name="Skill Gap">
            {data.map((entry, idx) => {
              const gap = entry.gap;
              let gradientId;
              if (gap <= 20) gradientId = "skillGapLowGradient";
              else if (gap <= 40) gradientId = "skillGapMediumGradient";
              else gradientId = "skillGapHighGradient";
              return <Cell key={idx} fill={`url(#${gradientId})`} />;
            })}
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
          <defs>
            <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.line} />
              <stop offset="100%" stopColor={colors.lineEnd} />
            </linearGradient>
          </defs>
          <circle cx="64" cy="64" r="56" stroke="#374151" strokeWidth="8" fill="none" />
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="url(#growthGradient)"
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
  const getOutlookGradient = (outlook) => {
    switch (outlook?.toLowerCase()) {
      case "positive":
        return "url(#marketPositiveGradient)";
      case "neutral":
        return "url(#marketNeutralGradient)";
      case "negative":
        return "url(#marketNegativeGradient)";
      default:
        return colors.grayFallback;
    }
  };

  const data = [{ name: marketOutlook || "Unknown", value: 100 }];

  return (
    <CardWrapper>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <defs>
            <linearGradient id="marketPositiveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.piePositive} />
              <stop offset="100%" stopColor={colors.piePositiveEnd} />
            </linearGradient>
            <linearGradient id="marketNeutralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.pieNeutral} />
              <stop offset="100%" stopColor={colors.pieNeutralEnd} />
            </linearGradient>
            <linearGradient id="marketNegativeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.pieNegative} />
              <stop offset="100%" stopColor={colors.pieNegativeEnd} />
            </linearGradient>
          </defs>
          <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((entry, idx) => (
              <Cell key={idx} fill={getOutlookGradient(marketOutlook)} />
            ))}
          </Pie>
          <Tooltip content={<DarkTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
};

// ----------------------- Trends Line Chart -----------------------
const TrendsTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-gray-900 text-white p-2 rounded shadow-lg">
      <div><strong>{label}</strong></div>
      {payload.map((p) => (
        <div key={p.dataKey}>
          Impact Score: {p.value.toFixed(1)}%
        </div>
      ))}
    </div>
  );
};

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
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.line} />
              <stop offset="100%" stopColor={colors.lineEnd} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="trend" angle={-30} textAnchor="end" height={80} interval={0} tick={{ fill: "#f9fafb" }} />
          <YAxis tick={{ fill: "#f9fafb" }} />
          <Tooltip content={<TrendsTooltip />} />
          <Line type="monotone" dataKey="impact" stroke="url(#lineGradient)" strokeWidth={2} dot={{ fill: colors.lineDot, r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
};

// ----------------------- Demand Level Pie Chart -----------------------
const DarkTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-gray-900 text-white p-2 rounded shadow-lg">
      <div><strong>{label}</strong></div>
      {payload.map((p) => (
        <div key={p.dataKey}>
          {p.name}: {p.value}
        </div>
      ))}
    </div>
  );
}

export const DemandLevelChart = ({ demandLevel }) => {
  const getDemandGradient = (level) => {
    switch (level?.toLowerCase()) {
      case "high":
        return "url(#demandHighGradient)";
      case "medium":
        return "url(#demandMediumGradient)";
      case "low":
        return "url(#demandLowGradient)";
      default:
        return colors.grayFallback;
    }
  };

  const data = [{ name: demandLevel || "Unknown", value: 100 }];

  return (
    <CardWrapper>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <defs>
            <linearGradient id="demandHighGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.piePositive} />
              <stop offset="100%" stopColor={colors.piePositiveEnd} />
            </linearGradient>
            <linearGradient id="demandMediumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.pieNeutral} />
              <stop offset="100%" stopColor={colors.pieNeutralEnd} />
            </linearGradient>
            <linearGradient id="demandLowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.pieNegative} />
              <stop offset="100%" stopColor={colors.pieNegativeEnd} />
            </linearGradient>
          </defs>
          <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((entry, idx) => (
              <Cell key={idx} fill={getDemandGradient(demandLevel)} />
            ))}
          </Pie>
          <Tooltip content={<DarkTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
};
