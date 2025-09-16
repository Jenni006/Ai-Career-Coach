/*
  Warnings:

  - You are about to drop the column `gaps` on the `SkillGapAnalysis` table. All the data in the column will be lost.
  - You are about to drop the column `recommendations` on the `SkillGapAnalysis` table. All the data in the column will be lost.
  - You are about to drop the column `requiredSkills` on the `SkillGapAnalysis` table. All the data in the column will be lost.
  - The `currentSkills` column on the `SkillGapAnalysis` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `demandLevel` on the `IndustryInsight` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `experienceLevel` to the `SkillGapAnalysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `intensityLevel` to the `SkillGapAnalysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetRole` to the `SkillGapAnalysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeline` to the `SkillGapAnalysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SkillGapAnalysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."IndustryInsight" DROP COLUMN "demandLevel",
ADD COLUMN     "demandLevel" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."SkillGapAnalysis" DROP COLUMN "gaps",
DROP COLUMN "recommendations",
DROP COLUMN "requiredSkills",
ADD COLUMN     "completedItems" JSONB[],
ADD COLUMN     "currentAcademicYear" TEXT,
ADD COLUMN     "experienceLevel" TEXT NOT NULL,
ADD COLUMN     "hoursPerWeek" INTEGER,
ADD COLUMN     "intensityLevel" TEXT NOT NULL,
ADD COLUMN     "personalizedTips" TEXT[],
ADD COLUMN     "progressPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "roadmapPhases" JSONB[],
ADD COLUMN     "skillGaps" JSONB[],
ADD COLUMN     "targetIndustry" TEXT,
ADD COLUMN     "targetRole" TEXT NOT NULL,
ADD COLUMN     "timeline" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "currentSkills",
ADD COLUMN     "currentSkills" JSONB[];

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "isOnboarded" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "public"."DemandLevel";
