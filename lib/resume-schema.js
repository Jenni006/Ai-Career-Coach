import { z } from "zod";

// Personal Information Schema
export const personalInfoSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  linkedin: z.string().url("Invalid LinkedIn URL").optional().or(z.literal("")),
  website: z.string().url("Invalid website URL").optional().or(z.literal("")),
  summary: z.string().min(50, "Professional summary must be at least 50 characters"),
});

// Experience Schema
export const experienceSchema = z.object({
  id: z.string().optional(),
  jobTitle: z.string().min(2, "Job title is required"),
  company: z.string().min(2, "Company name is required"),
  location: z.string().min(2, "Location is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  isCurrentJob: z.boolean().default(false),
  description: z.string().min(20, "Job description must be at least 20 characters"),
  achievements: z.array(z.string()).optional(),
});

// Education Schema
export const educationSchema = z.object({
  id: z.string().optional(),
  institution: z.string().min(2, "Institution name is required"),
  degree: z.string().min(2, "Degree is required"),
  fieldOfStudy: z.string().min(2, "Field of study is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  gpa: z.string().optional(),
  honors: z.string().optional(),
});

// Skills Schema
export const skillsSchema = z.object({
  category: z.string().min(2, "Skill category is required"),
  skills: z.array(z.string().min(1, "Skill name is required")).min(1, "At least one skill is required"),
});

// Certifications Schema
export const certificationSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Certification name is required"),
  issuer: z.string().min(2, "Issuer is required"),
  dateIssued: z.string().min(1, "Issue date is required"),
  expirationDate: z.string().optional(),
  credentialId: z.string().optional(),
  url: z.string().url("Invalid URL").optional().or(z.literal("")),
});

// Projects Schema
export const projectSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Project name is required"),
  description: z.string().min(20, "Project description must be at least 20 characters"),
  technologies: z.array(z.string()),
  url: z.string().url("Invalid URL").optional().or(z.literal("")),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

// Complete Resume Schema
export const resumeSchema = z.object({
  personalInfo: personalInfoSchema,
  experience: z.array(experienceSchema),
  education: z.array(educationSchema),
  skills: z.array(skillsSchema),
  certifications: z.array(certificationSchema).optional(),
  projects: z.array(projectSchema).optional(),
});

// Resume Generation Schema (for AI-powered generation)
export const resumeGenerationSchema = z.object({
  jobTitle: z.string().min(2, "Job title is required"),
  industry: z.string().min(2, "Industry is required"),
  experienceLevel: z.enum(["entry", "mid", "senior", "executive"], {
    errorMap: () => ({ message: "Please select a valid experience level" })
  }),
  keySkills: z.array(z.string()).min(3, "At least 3 key skills are required"),
  targetCompany: z.string().optional(),
  jobDescription: z.string().optional(),
  personalInfo: z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    address: z.string().min(5, "Address is required"),
    linkedin: z.string().url().optional().or(z.literal("")),
    website: z.string().url().optional().or(z.literal("")),
  }),
  workHistory: z.array(z.object({
    jobTitle: z.string(),
    company: z.string(),
    duration: z.string(),
    description: z.string(),
  })).optional(),
  educationHistory: z.array(z.object({
    institution: z.string(),
    degree: z.string(),
    fieldOfStudy: z.string(),
    year: z.string(),
  })).optional(),
});