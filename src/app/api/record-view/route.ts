import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import redis from "@/lib/redis";
import { shouldFilterRequest } from "@/utils/filterRequests";

export async function POST(request: Request) {
  const { path } = await request.json();
  const filtered = shouldFilterRequest(request);

  try {
    // Record the page view in the database
    await prisma.pageView.create({
      data: {
        pagePath: path,
        filtered: filtered,
      },
    });

    // Invalidate the cache for this path
    await redis.del(`pageviews:${path}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error recording page view:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
