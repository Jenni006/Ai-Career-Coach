import { getIndustryPositions, getIndustrySkills } from "@/actions/dashboard";

export async function POST(request) {
  try {
    const { type, industry } = await request.json();

    if (!industry) {
      return Response.json({ error: "Industry is required" }, { status: 400 });
    }

    if (type === 'positions') {
      const positions = await getIndustryPositions(industry);
      return Response.json(positions);
    } else if (type === 'skills') {
      const skillsData = await getIndustrySkills(industry);
      return Response.json(skillsData);
    } else {
      return Response.json({ error: "Invalid type. Use 'positions' or 'skills'" }, { status: 400 });
    }
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
