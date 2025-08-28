import { z } from "zod";

export const onboardingSchema = z.object({
    industry: z.string().min(1, { message: "Please select an industry" }),
    subIndustry: z.string().min(1, { message: "Please select a specialization" }),
    bio: z.string().max(500).optional(),
    experience: z.string().transform((val) => parseInt(val, 10))
        .pipe(
            z.number().min(0, { message: "Please enter a valid number" }).max(50, { message: "Please enter a valid number" })
        ),
    skills: z.string().transform((val) => val
        ? val.split(",").map((skill) => skill.trim()).filter(Boolean)
        : []
    ),
});
