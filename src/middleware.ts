import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { shouldFilterRequest } from "./utils/filterRequests";

const recordedPaths = new Set<string>();

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Don't record views for API routes, static files, or info pages
  if (
    !path.startsWith("/api") &&
    !path.startsWith("/_next") &&
    !path.startsWith("/info") &&
    !path.match(
      /\.(jpg|jpeg|png|gif|svg|ico|css|js|woff|woff2|ttf|eot|mp4|stl|glb|webmanifest|webp|pdf|svg|asc)$/,
    )
  ) {
    const filtered = shouldFilterRequest(request);
    const key = `${path}-${(Date.now() / 1000) | 0}`; // Create a key with the path and current minute

    if (!recordedPaths.has(key)) {
      recordedPaths.add(key);

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

      // Clean up old entries after 1 minute
      setTimeout(() => {
        recordedPaths.delete(key);
      }, 60000);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
