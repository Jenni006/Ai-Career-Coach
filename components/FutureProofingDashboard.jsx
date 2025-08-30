"use client"
import React, { useState, useEffect } from 'react';
import { AlertTriangle, TrendingUp, Shield, Target, Clock, Brain, Zap, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FutureProofingDashboard = ({ userProfile }) => {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeCareer = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/future-proofing/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobTitle: userProfile?.specialization || 'Software Developer',
          industry: userProfile?.industry || 'Technology',
          skills: userProfile?.skills || [],
          experience: userProfile?.experience || 'entry',
          timeHorizon: 5
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze career future-proofing');
      }

      const data = await response.json();
      setAnalysis(data);
    } catch (err) {
      setError(err.message);
      console.error('Future-proofing analysis error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userProfile) {
      analyzeCareer();
    }
  }, [userProfile]);

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRiskColor = (level) => {
    const colors = {
      low: 'text-green-400 bg-green-500/10 border-green-500/20',
      medium: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
      high: 'text-red-400 bg-red-500/10 border-red-500/20'
    };
    return colors[level] || colors.medium;
  };

  const ScoreCircle = ({ score, label, size = 'large' }) => {
    const radius = size === 'large' ? 45 : 35;
    const strokeWidth = size === 'large' ? 8 : 6;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative">
          <svg width={radius * 2 + 20} height={radius * 2 + 20}>
            <circle
              cx={radius + 10}
              cy={radius + 10}
              r={radius}
              stroke="#374151"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <circle
              cx={radius + 10}
              cy={radius + 10}
              r={radius}
              stroke={score >= 80 ? '#10b981' : score >= 60 ? '#f59e0b' : '#ef4444'}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform={`rotate(-90 ${radius + 10} ${radius + 10})`}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className={`absolute inset-0 flex items-center justify-center text-${size === 'large' ? '2xl' : 'lg'} font-bold ${getScoreColor(score)}`}>
            {score}
          </div>
        </div>
        <span className="text-sm text-gray-400 mt-2 text-center">{label}</span>
      </div>
    );
  };

  if (loading) {
    return (
      <Card className="bg-transparent border border-gray-700/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-center space-x-2">
            <Loader2 className="h-6 w-6 animate-spin text-blue-400" />
            <span className="text-white">Analyzing career future-proofing...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-transparent border border-red-500/20">
        <CardContent className="p-6">
          <div className="flex items-center space-x-2 text-red-400">
            <AlertTriangle className="h-5 w-5" />
            <span>Error: {error}</span>
          </div>
          <Button 
            onClick={analyzeCareer} 
            className="mt-4 bg-blue-600 hover:bg-blue-700"
          >
            Retry Analysis
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!analysis) {
    return (
      <Card className="bg-transparent border border-gray-700/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Career Future-Proofing Analysis
          </CardTitle>
          <CardDescription className="text-gray-400">
            Analyze your career's resilience to future market changes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={analyzeCareer} 
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Brain className="mr-2 h-4 w-4" />
            Start Analysis
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Overall Score Section */}
      <Card className="bg-transparent border border-gray-700/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Future-Proofing Score
          </CardTitle>
          <CardDescription className="text-gray-400">
            Overall career resilience assessment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center mb-8">
            <ScoreCircle 
              score={analysis.futureProofingScore?.overall || 0} 
              label={`Overall Score: ${analysis.futureProofingScore?.rating || 'N/A'}`}
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ScoreCircle 
              score={analysis.futureProofingScore?.breakdown?.sustainability || 0}
              label="Sustainability"
              size="small"
            />
            <ScoreCircle 
              score={analysis.futureProofingScore?.breakdown?.automationResistance || 0}
              label="Automation Resistance"
              size="small"
            />
            <ScoreCircle 
              score={analysis.futureProofingScore?.breakdown?.growthPotential || 0}
              label="Growth Potential"
              size="small"
            />
            <ScoreCircle 
              score={analysis.futureProofingScore?.breakdown?.adaptability || 0}
              label="Adaptability"
              size="small"
            />
          </div>
        </CardContent>
      </Card>

      {/* Automation Risk Assessment */}
      <Card className="bg-transparent border border-gray-700/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Automation Risk Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getRiskColor(analysis.automationRisk?.riskLevel || 'medium')}`}>
            {analysis.automationRisk?.riskLevel?.toUpperCase() || 'MEDIUM'} RISK
          </div>
          
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-medium mb-2">Vulnerable Tasks</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                {analysis.automationRisk?.vulnerableTasks?.map((task, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2">Protected Tasks</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                {analysis.automationRisk?.protectedTasks?.map((task, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Growth Opportunities */}
      <Card className="bg-transparent border border-gray-700/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Growth Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.growthOpportunities?.topOpportunities?.map((opportunity, index) => (
              <div key={index} className="border border-gray-700/30 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-medium">{opportunity.area}</h4>
                  <span className={`text-sm ${getScoreColor(opportunity.growthPotential)}`}>
                    {opportunity.growthPotential}% potential
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">Timeline: {opportunity.timeframe}</p>
                <div className="flex flex-wrap gap-2">
                  {opportunity.requiredSkills?.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Adaptation Strategies */}
      <Card className="bg-transparent border border-gray-700/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Target className="mr-2 h-5 w-5" />
            Recommended Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.adaptationStrategies?.prioritizedActions?.map((action, index) => (
              <div key={index} className="border border-gray-700/30 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-medium">{action.strategy}</h4>
                  <span className={`px-2 py-1 rounded text-xs ${
                    action.priority === 'high' ? 'bg-red-500/20 text-red-300' :
                    action.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-green-500/20 text-green-300'
                  }`}>
                    {action.priority?.toUpperCase()} PRIORITY
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{action.description}</p>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span>Effort: {action.effort}</span>
                  <span>Impact: {action.impact}</span>
                  <span>Term: {action.term}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FutureProofingDashboard;
