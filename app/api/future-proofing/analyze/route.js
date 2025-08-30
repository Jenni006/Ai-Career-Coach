import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';

// Vertex AI configuration
const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT_ID;
const LOCATION = process.env.GOOGLE_CLOUD_LOCATION || 'us-central1';
const MODEL_ID = 'gemini-1.5-pro';

async function callVertexAI(prompt) {
  try {
    // Import Google Cloud AI Platform
    const { VertexAI } = await import('@google-cloud/vertexai');
    
    // Initialize Vertex AI
    const vertexAI = new VertexAI({
      project: PROJECT_ID,
      location: LOCATION,
    });

    // Get the generative model
    const model = vertexAI.getGenerativeModel({
      model: MODEL_ID,
      generationConfig: {
        maxOutputTokens: 2048,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Vertex AI API error:', error);
    throw new Error('Failed to analyze with Vertex AI');
  }
}

function createAnalysisPrompt(jobTitle, industry, skills, experience, timeHorizon) {
  return `
Analyze the future-proofing potential of this career profile and provide a comprehensive assessment in JSON format:

Job Title: ${jobTitle}
Industry: ${industry}
Skills: ${skills.join(', ')}
Experience Level: ${experience}
Time Horizon: ${timeHorizon} years

Please provide a detailed analysis in the following JSON structure:

{
  "futureProofingScore": {
    "overall": [0-100 score],
    "rating": "[Poor/Fair/Good/Excellent]",
    "breakdown": {
      "sustainability": [0-100 score],
      "automationResistance": [0-100 score],
      "growthPotential": [0-100 score],
      "adaptability": [0-100 score]
    }
  },
  "sustainability": {
    "score": [0-100 score],
    "trend": "[declining/stable/growing]",
    "reasoning": "[detailed explanation]",
    "keyFactors": ["factor1", "factor2", "factor3"]
  },
  "automationRisk": {
    "riskLevel": "[low/medium/high]",
    "riskScore": [0-100 score where higher = more risk],
    "timeline": [years until significant automation],
    "vulnerableTasks": ["task1", "task2", "task3"],
    "protectedTasks": ["task1", "task2", "task3"],
    "mitigationSkills": ["skill1", "skill2", "skill3"]
  },
  "growthOpportunities": {
    "overallScore": [0-100 score],
    "topOpportunities": [
      {
        "area": "[opportunity area]",
        "growthPotential": [0-100 score],
        "timeframe": "[1-2 years/2-3 years/3-5 years]",
        "requiredSkills": ["skill1", "skill2", "skill3"]
      }
    ]
  },
  "adaptationStrategies": {
    "adaptabilityScore": [0-100 score],
    "prioritizedActions": [
      {
        "strategy": "[strategy name]",
        "description": "[detailed description]",
        "priority": "[high/medium/low]",
        "effort": "[low/medium/high]",
        "impact": "[low/medium/high]",
        "term": "[short/medium/long]"
      }
    ]
  },
  "recommendations": [
    {
      "type": "[enhance/opportunity/warning]",
      "priority": "[high/medium/low]",
      "message": "[detailed recommendation]"
    }
  ]
}

Consider current market trends, emerging technologies, automation potential, industry growth patterns, and skill evolution. Base your analysis on real market data and industry insights. Provide specific, actionable recommendations.

Return only valid JSON without any additional text or formatting.
`;
}

export async function POST(request) {
  try {
    // Check authentication
    const user = await currentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Parse request body
    const { jobTitle, industry, skills, experience, timeHorizon } = await request.json();

    // Validate required fields
    if (!jobTitle || !industry) {
      return NextResponse.json(
        { error: 'Job title and industry are required' },
        { status: 400 }
      );
    }

    // Check if Vertex AI is configured
    if (!PROJECT_ID) {
      console.warn('Vertex AI not configured, returning mock data');
      
      // Return mock data for development
      const mockAnalysis = {
        futureProofingScore: {
          overall: 76,
          rating: 'Good',
          breakdown: {
            sustainability: 82,
            automationResistance: 65,
            growthPotential: 88,
            adaptability: 72
          }
        },
        sustainability: {
          score: 82,
          trend: 'growing',
          reasoning: `${industry} continues to show strong growth with increasing digitalization across industries.`,
          keyFactors: ['Digital transformation', 'AI/ML integration', 'Cloud adoption']
        },
        automationRisk: {
          riskLevel: 'medium',
          riskScore: 35,
          timeline: 8,
          vulnerableTasks: ['Routine coding tasks', 'Basic testing', 'Documentation'],
          protectedTasks: ['Architecture design', 'Problem solving', 'Stakeholder communication'],
          mitigationSkills: ['System design', 'AI/ML understanding', 'Business domain expertise']
        },
        growthOpportunities: {
          overallScore: 88,
          topOpportunities: [
            {
              area: 'AI/ML Engineering',
              growthPotential: 95,
              timeframe: '1-2 years',
              requiredSkills: ['Python', 'TensorFlow', 'MLOps']
            },
            {
              area: 'Cloud Architecture',
              growthPotential: 90,
              timeframe: '1-2 years',
              requiredSkills: ['AWS', 'Kubernetes', 'DevOps']
            },
            {
              area: 'Cybersecurity',
              growthPotential: 87,
              timeframe: '2-3 years',
              requiredSkills: ['Security protocols', 'Ethical hacking']
            }
          ]
        },
        adaptationStrategies: {
          adaptabilityScore: 72,
          prioritizedActions: [
            {
              strategy: 'Learn AI/ML Integration',
              description: 'Develop skills in integrating AI models into applications',
              priority: 'high',
              effort: 'medium',
              impact: 'high',
              term: 'short'
            },
            {
              strategy: 'Master Cloud Platforms',
              description: 'Become proficient in cloud-native development and deployment',
              priority: 'high',
              effort: 'medium',
              impact: 'high',
              term: 'short'
            }
          ]
        },
        recommendations: [
          {
            type: 'enhance',
            priority: 'high',
            message: `Good foundation in ${jobTitle} with room for improvement. Focus on AI/ML integration and cloud technologies.`
          },
          {
            type: 'opportunity',
            priority: 'high',
            message: 'Emerging opportunity in AI/ML Engineering. Consider developing: Python, TensorFlow, MLOps'
          }
        ]
      };

      return NextResponse.json(mockAnalysis);
    }

    // Create analysis prompt
    const prompt = createAnalysisPrompt(jobTitle, industry, skills || [], experience, timeHorizon);

    // Call Vertex AI
    const aiResponse = await callVertexAI(prompt);

    // Parse AI response
    let analysis;
    try {
      analysis = JSON.parse(aiResponse);
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      throw new Error('Invalid response format from AI');
    }

    return NextResponse.json(analysis);

  } catch (error) {
    console.error('Future-proofing analysis error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze career future-proofing' },
      { status: 500 }
    );
  }
}
