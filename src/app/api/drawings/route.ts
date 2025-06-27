import { NextResponse } from "next/server";
import { ArenaChannel } from "@/types/arena";

export async function GET(request: Request) {
  try {
    // Get page and perPage from URL query parameters
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") ?? "1");
    const perPage = parseInt(url.searchParams.get("perPage") ?? "12");

    const response = await fetch(
      `https://api.are.na/v2/channels/tom-s-drawings?page=${page}&per_page=${perPage}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch drawings: ${response.status}`);
    }

    const data: ArenaChannel = await response.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    console.error("Error fetching drawings data:", error);
    return NextResponse.json(
      { error: "Failed to fetch drawings data" },
      { status: 500 },
    );
  }
}
