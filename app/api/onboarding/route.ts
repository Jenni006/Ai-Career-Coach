import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export async function POST(req: Request) {
  const { userId } = await auth(); // ✔ use await here in API route
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const body = await req.json();

  await db.user.update({
    where: { clerkUserId: userId },
    data: {
      industry: body.industry,
      isOnboarded: true,
    },
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}

