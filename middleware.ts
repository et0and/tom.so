import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import prisma from "./src/lib/prisma";
import { shouldFilterRequest } from "./src/utils/filterRequests";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Don't record views for API routes, static files, or info pages
  if (
    !path.startsWith("/api") &&
    !path.match(/\.(jpg|png|gif|css|js)$/) &&
    !path.startsWith("/info")
  ) {
    // Check if the request should be filtered
    if (!shouldFilterRequest(request)) {
      try {
        await prisma.pageView.create({
          data: {
            pagePath: path,
          },
        });
      } catch (error) {
        console.error("Error recording page view:", error);
      }
    }
  }

  return NextResponse.next();
}
