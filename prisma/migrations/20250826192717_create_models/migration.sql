-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "imageUrl" TEXT,
    "bio" TEXT,
    "experience" INTEGER,
    "industry" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "skills" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Resume" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CoverLetter" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CoverLetter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MockInterview" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "questions" JSONB NOT NULL,
    "feedback" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MockInterview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SkillGapAnalysis" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "currentSkills" TEXT[],
    "requiredSkills" TEXT[],
    "gaps" TEXT[],
    "recommendations" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SkillGapAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."IndustryInsight" (
    "id" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "salaryRanges" JSONB[],
    "growthRate" DOUBLE PRECISION NOT NULL,
    "demandLevel" TEXT NOT NULL,
    "topSkills" TEXT[],
    "marketOutlook" TEXT NOT NULL,
    "keyTrends" TEXT[],
    "recommendedSkills" TEXT[],
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nextUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IndustryInsight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_UserIndustries" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserIndustries_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "public"."User"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Resume_userId_key" ON "public"."Resume"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "IndustryInsight_industry_key" ON "public"."IndustryInsight"("industry");

-- CreateIndex
CREATE INDEX "_UserIndustries_B_index" ON "public"."_UserIndustries"("B");

-- AddForeignKey
ALTER TABLE "public"."Resume" ADD CONSTRAINT "Resume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CoverLetter" ADD CONSTRAINT "CoverLetter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MockInterview" ADD CONSTRAINT "MockInterview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillGapAnalysis" ADD CONSTRAINT "SkillGapAnalysis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserIndustries" ADD CONSTRAINT "_UserIndustries_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."IndustryInsight"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserIndustries" ADD CONSTRAINT "_UserIndustries_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
