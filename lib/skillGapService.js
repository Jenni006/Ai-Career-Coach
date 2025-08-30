// lib/skillGapService.js

// Industry-specific skill mapping
export const industrySkillMaps = {
  fashion: {
    categories: {
      design: ["Adobe Illustrator", "Photoshop", "Fashion Sketching", "Pattern Making", "CAD Design", "Color Theory", "Textile Design"],
      business: ["Trend Analysis", "Brand Strategy", "Fashion Marketing", "Retail Management", "Merchandising", "Fashion Buying", "Supply Chain"],
      technical: ["Textile Knowledge", "Garment Construction", "Draping", "Sustainable Materials", "Quality Control", "Production Planning"],
      digital: ["Fashion Photography", "Social Media Marketing", "E-commerce", "Digital Fashion", "3D Modeling", "Fashion Tech"]
    },
    specializations: {
      "Fashion Designer": { focus: ["design", "technical"], weight: [0.6, 0.4] },
      "Fashion Buyer": { focus: ["business", "design"], weight: [0.7, 0.3] },
      "Fashion Marketer": { focus: ["business", "digital"], weight: [0.6, 0.4] },
      "Textile Designer": { focus: ["design", "technical"], weight: [0.5, 0.5] },
      "Fashion Stylist": { focus: ["design", "business"], weight: [0.7, 0.3] }
    },
    jobRecommendations: [
      { title: "Junior Fashion Designer", requiredLevel: 40, categories: ["design"] },
      { title: "Fashion Assistant", requiredLevel: 30, categories: ["business", "design"] },
      { title: "Social Media Coordinator", requiredLevel: 50, categories: ["digital"] },
      { title: "Fashion Buyer", requiredLevel: 70, categories: ["business"] },
      { title: "Senior Fashion Designer", requiredLevel: 85, categories: ["design", "technical"] }
    ]
  },
  finance: {
    categories: {
      analysis: ["Financial Modeling", "Excel/VBA", "SQL", "Python", "R", "Valuation", "Financial Statements"],
      trading: ["Bloomberg Terminal", "Risk Management", "Derivatives", "Portfolio Management", "Market Analysis", "Options Trading"],
      compliance: ["Regulatory Knowledge", "Audit", "Risk Assessment", "KYC/AML", "Basel III", "IFRS"],
      technology: ["FinTech", "Blockchain", "AI in Finance", "Algorithmic Trading", "Quantitative Analysis", "API Integration"]
    },
    specializations: {
      "Investment Banker": { focus: ["analysis", "trading"], weight: [0.6, 0.4] },
      "Financial Analyst": { focus: ["analysis", "technology"], weight: [0.7, 0.3] },
      "Risk Manager": { focus: ["compliance", "analysis"], weight: [0.6, 0.4] },
      "Quantitative Analyst": { focus: ["technology", "analysis"], weight: [0.7, 0.3] },
      "Portfolio Manager": { focus: ["trading", "analysis"], weight: [0.6, 0.4] }
    },
    jobRecommendations: [
      { title: "Financial Analyst", requiredLevel: 50, categories: ["analysis"] },
      { title: "Junior Investment Banker", requiredLevel: 60, categories: ["analysis", "trading"] },
      { title: "Risk Analyst", requiredLevel: 55, categories: ["compliance"] },
      { title: "Quantitative Developer", requiredLevel: 75, categories: ["technology"] },
      { title: "Senior Portfolio Manager", requiredLevel: 85, categories: ["trading", "analysis"] }
    ]
  },
  tech: {
    categories: {
      frontend: ["React", "Vue", "Angular", "HTML/CSS", "JavaScript", "TypeScript", "Responsive Design"],
      backend: ["Node.js", "Python", "Java", "APIs", "Databases", "Microservices", "Authentication"],
      ai: ["Machine Learning", "TensorFlow", "PyTorch", "Data Science", "NLP", "Computer Vision"],
      devops: ["Docker", "Kubernetes", "CI/CD", "Jenkins", "Git", "Linux"],
      cloud: ["AWS", "Azure", "GCP", "Serverless", "Infrastructure as Code", "Monitoring"]
    },
    specializations: {
      "Full Stack Developer": { focus: ["frontend", "backend"], weight: [0.5, 0.5] },
      "Frontend Developer": { focus: ["frontend"], weight: [1.0] },
      "Backend Developer": { focus: ["backend"], weight: [1.0] },
      "AI Engineer": { focus: ["ai", "backend"], weight: [0.7, 0.3] },
      "DevOps Engineer": { focus: ["devops", "cloud"], weight: [0.6, 0.4] }
    },
    jobRecommendations: [
      { title: "Junior Developer", requiredLevel: 40, categories: ["frontend", "backend"] },
      { title: "Frontend Developer", requiredLevel: 60, categories: ["frontend"] },
      { title: "Full Stack Developer", requiredLevel: 70, categories: ["frontend", "backend"] },
      { title: "Senior Developer", requiredLevel: 85, categories: ["frontend", "backend", "devops"] },
      { title: "Tech Lead", requiredLevel: 90, categories: ["frontend", "backend", "devops"] }
    ]
  }
};

// Proficiency calculation logic
export const calculateProficiency = (userSkills, skillName, userExperience) => {
  const levelMapping = {
    "beginner": 25,
    "intermediate": 55,
    "advanced": 80,
    "expert": 95
  };

  // Find exact match
  const exactMatch = userSkills.find(skill => 
    skill.name.toLowerCase() === skillName.toLowerCase()
  );
  
  if (exactMatch) {
    return levelMapping[exactMatch.level] || 0;
  }

  // Check for related skills
  const relatedSkillsMap = {
    "React": ["JavaScript", "HTML", "CSS", "Frontend Development"],
    "Vue": ["JavaScript", "HTML", "CSS", "Frontend Development"],
    "Node.js": ["JavaScript", "Backend Development", "APIs"],
    "Python": ["Programming", "Backend Development"],
    "Fashion Sketching": ["Drawing", "Design", "Art", "Illustration"],
    "Adobe Illustrator": ["Design", "Graphic Design", "Art"],
    "Financial Modeling": ["Excel", "Mathematics", "Analytics", "Finance"],
    "SQL": ["Database", "Data Analysis", "Programming"]
  };

  if (relatedSkillsMap[skillName]) {
    for (const related of relatedSkillsMap[skillName]) {
      const relatedSkill = userSkills.find(skill => 
        skill.name.toLowerCase().includes(related.toLowerCase())
      );
      if (relatedSkill) {
        // Give 30% credit for related skills
        return Math.round(levelMapping[relatedSkill.level] * 0.3);
      }
    }
  }

  return 0;
};

// Job recommendation logic
export const getJobRecommendations = (userSkills, industry, skillGapData) => {
  const industryMap = industrySkillMaps[industry] || industrySkillMaps.tech;
  const jobRecommendations = industryMap.jobRecommendations;

  return jobRecommendations.map(job => {
    // Calculate match percentage based on required categories
    const relevantSkills = skillGapData.requiredSkills.filter(skill => 
      job.categories.includes(skill.category)
    );
    
    const totalProficiency = relevantSkills.reduce((sum, skill) => sum + skill.proficiency, 0);
    const maxPossible = relevantSkills.length * 100;
    const matchPercentage = maxPossible > 0 ? Math.round((totalProficiency / maxPossible) * 100) : 0;

    return {
      ...job,
      match: matchPercentage,
      suitable: matchPercentage >= job.requiredLevel - 20, // Allow 20% flexibility
      skillsNeeded: relevantSkills
        .filter(skill => skill.proficiency < skill.required)
        .slice(0, 3)
        .map(skill => skill.name)
    };
  }).sort((a, b) => b.match - a.match);
};

// Main personalized skill gap function
export const generatePersonalizedSkillGap = async (userProfile) => {
  try {
    const { industry, specialization, currentSkills, interests, experience, careerGoals } = userProfile;
    
    if (!process.env.GOOGLE_API_KEY) {
      throw new Error("Google API key not configured");
    }

    const industryMap = industrySkillMaps[industry] || industrySkillMaps.tech;
    const specializationInfo = industryMap.specializations[specialization];

    // Get all relevant skills for the specialization
    const focusCategories = specializationInfo?.focus || Object.keys(industryMap.categories);
    const relevantSkills = focusCategories.flatMap(category => 
      industryMap.categories[category] || []
    );

    // Build skill gap data
    const requiredSkills = relevantSkills.slice(0, 12).map(skillName => {
      const proficiency = calculateProficiency(currentSkills, skillName, experience);
      const category = Object.keys(industryMap.categories).find(cat => 
        industryMap.categories[cat].includes(skillName)
      );
      
      // Determine required level and priority based on specialization focus
      const isHighPriority = specializationInfo?.focus?.includes(category);
      const required = isHighPriority ? 85 : 70;
      const gap = required - proficiency;
      
      let priority = 'low';
      if (gap > 50) priority = 'high';
      else if (gap > 25) priority = 'medium';

      return {
        name: skillName,
        category: category || 'other',
        proficiency,
        required,
        priority
      };
    });

    // Get job recommendations
    const jobRecommendations = getJobRecommendations(currentSkills, industry, { requiredSkills });

    const result = {
      requiredSkills,
      recommendedJobs: jobRecommendations.slice(0, 5)
    };

    return result;
  } catch (error) {
    console.error("Personalized Skill Gap error:", error);
    throw new Error(`Failed to generate personalized analysis: ${error.message}`);
  }
};