"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { revalidatePath } from "next/cache";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function saveResume(content) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const resume = await db.resume.upsert({
      where: {
        userId: user.id,
      },
      update: {
        content,
      },
      create: {
        userId: user.id,
        content,
      },
    });

    revalidatePath("/resume");
    return resume;
  } catch (error) {
    console.error("Error saving resume:", error);
    throw new Error("Failed to save resume");
  }
}

export async function getResume() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  return await db.resume.findUnique({
    where: {
      userId: user.id,
    },
  });
}

export async function improveWithAI({ current, type }) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: {
      industryInsights: true,
    },
  });

  if (!user) throw new Error("User not found");

  const prompt = `
    As an expert resume writer, improve the following ${type} description for a ${user.industry} professional.
    Make it more impactful, quantifiable, and aligned with industry standards.
    Current content: "${current}"

    Requirements:
    1. Use action verbs
    2. Include metrics and results where possible
    3. Highlight relevant technical skills
    4. Keep it concise but detailed
    5. Focus on achievements over responsibilities
    6. Use industry-specific keywords
    
    Format the response as a single paragraph without any additional text or explanations.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const improvedContent = response.text().trim();
    return improvedContent;
  } catch (error) {
    console.error("Error improving content:", error);
    throw new Error("Failed to improve content");
  }
}

export async function generateResumeWithAI(formData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  const {
    jobTitle,
    industry,
    experienceLevel,
    keySkills,
    targetCompany,
    jobDescription,
    personalInfo,
    workHistory = [],
    educationHistory = [],
  } = formData;

  const prompt = `
    Create a professional resume in markdown format for the following candidate:
    
    Personal Information:
    - Name: ${personalInfo.fullName}
    - Email: ${personalInfo.email}
    - Phone: ${personalInfo.phone}
    - Address: ${personalInfo.address}
    ${personalInfo.linkedin ? `- LinkedIn: ${personalInfo.linkedin}` : ''}
    ${personalInfo.website ? `- Website: ${personalInfo.website}` : ''}
    
    Target Role: ${jobTitle} in ${industry}
    Experience Level: ${experienceLevel}
    Key Skills: ${keySkills.join(', ')}
    ${targetCompany ? `Target Company: ${targetCompany}` : ''}
    ${jobDescription ? `Job Description Context: ${jobDescription}` : ''}
    
    Work History:
    ${workHistory.map(job => `
    - ${job.jobTitle} at ${job.company} (${job.duration})
      ${job.description}`).join('')}
    
    Education:
    ${educationHistory.map(edu => `
    - ${edu.degree} in ${edu.fieldOfStudy} from ${edu.institution} (${edu.year})`).join('')}
    
    Requirements:
    1. Create a compelling professional summary (2-3 sentences)
    2. Use industry-specific keywords and terminology
    3. Emphasize achievements with quantifiable results where possible
    4. Tailor content to the ${experienceLevel} level
    5. Include relevant technical and soft skills
    6. Format in clean, ATS-friendly markdown
    7. Ensure the resume is tailored for ${industry} industry
    ${targetCompany ? `8. Optimize for ${targetCompany} if possible` : ''}
    
    Format the resume with the following sections:
    # [Full Name]
    ## Contact Information
    ## Professional Summary
    ## Core Competencies
    ## Professional Experience
    ## Education
    ## Additional Skills (if applicable)
    
    Return ONLY the markdown content without any explanations or additional text.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const resumeContent = response.text().trim();
    
    // Save the generated resume
    const resume = await db.resume.upsert({
      where: {
        userId: user.id,
      },
      update: {
        content: resumeContent,
      },
      create: {
        userId: user.id,
        content: resumeContent,
      },
    });

    revalidatePath("/resume");
    return { content: resumeContent, id: resume.id };
  } catch (error) {
    console.error("Error generating resume:", error);
    throw new Error("Failed to generate resume");
  }
}

export async function convertToMarkdown(resumeData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const prompt = `
    Convert the following resume data to clean, professional markdown format:
    
    ${JSON.stringify(resumeData, null, 2)}
    
    Requirements:
    1. Use proper markdown formatting
    2. Create clear section headers
    3. Use bullet points for achievements and responsibilities
    4. Make it ATS-friendly
    5. Ensure professional presentation
    
    Format with these sections:
    # [Full Name]
    ## Contact Information
    ## Professional Summary
    ## Professional Experience
    ## Education
    ## Core Skills
    ## Certifications (if any)
    ## Projects (if any)
    
    Return ONLY the markdown content.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const markdownContent = response.text().trim();
    return markdownContent;
  } catch (error) {
    console.error("Error converting to markdown:", error);
    throw new Error("Failed to convert to markdown");
  }
}

export async function enhanceResumeSection({ section, content, targetRole, industry }) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const prompt = `
    Enhance the following ${section} section for a resume targeting ${targetRole} in ${industry}:
    
    Current Content:
    ${content}
    
    Requirements:
    1. Use strong action verbs
    2. Include relevant keywords for ${industry}
    3. Quantify achievements where possible
    4. Align with ${targetRole} requirements
    5. Keep the same markdown format
    6. Make it ATS-optimized
    
    Return the enhanced content in the same format.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const enhancedContent = response.text().trim();
    return enhancedContent;
  } catch (error) {
    console.error("Error enhancing section:", error);
    throw new Error("Failed to enhance section");
  }
}
