import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import redis from "@/lib/redis";
import { shouldFilterRequest } from "@/utils/filterRequests";
import { Ratelimit } from "@upstash/ratelimit";

// Create a new rate limiter, that allows 10 requests per 10 seconds
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

export async function POST(request: Request) {
  const { path } = await request.json();
  const filtered = shouldFilterRequest(request);

  // Apply rate limiting
  const identifier = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const result = await ratelimit.limit(identifier);
  if (!result.success) {
    return NextResponse.json(
      { success: false, message: "Too many requests" },
      { status: 429 },
    );
  }

  try {
    // Check if the view count is cached
    const cachedViews = await redis.get(`pageviews:${path}`);
    if (cachedViews) {
      // Increment the cached count
      await redis.incr(`pageviews:${path}`);
    } else {
      // If not cached, record the page view in the database
      await prisma.pageView.create({
        data: {
          pagePath: path,
          filtered: filtered,
        },
      });

      // Set the initial cache value
      await redis.set(`pageviews:${path}`, "1", {
        ex: 3600, // Cache for 1 hour
      });
    }

    // Sync Redis with the database
    try {
      const viewCount = await redis.get(`pageviews:${path}`);
      if (typeof viewCount === "string") {
        const viewsToAdd = parseInt(viewCount, 10);
        if (!isNaN(viewsToAdd)) {
          const pageViews: { pagePath: string; filtered: boolean }[] = [];

          for (let i = 0; i < viewsToAdd; i++) {
            pageViews.push({
              pagePath: path,
              filtered: filtered,
            });
          }

          await prisma.pageView.createMany({
            data: pageViews,
          });

          // After creating the entries, reset the Redis counter
          await redis.del(`pageviews:${path}`);
        }
      }
    } catch (error) {
      console.error("Error syncing Redis with database:", error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error recording page view:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
