import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { shouldFilterRequest } from "./utils/filterRequests";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Don't record views for API routes, static files, or info pages
  if (
    !path.startsWith("/api") &&
    !path.match(/\.(jpg|png|gif|css|js|webmanifest|ttf)$/) &&
    !path.startsWith("/info")
  ) {
    const filtered = shouldFilterRequest(request);

    // Call our API route to record the page view
    try {
      const response = await fetch(
        `${request.nextUrl.origin}/api/record-view`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ path, filtered }),
        },
      );

      if (!response.ok) {
        console.error("Failed to record page view");
      }
    } catch (error) {
      console.error("Error recording page view:", error);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
