import { NextResponse } from "next/server";
import { ArenaChannel } from "@/types/arena";

export async function GET(request: Request) {
  try {
    // Get page and perPage from URL query parameters
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") ?? "1");
    const perPage = parseInt(url.searchParams.get("perPage") ?? "12");

    // Fetch the specific page from Arena
    const response = await fetch(
      `https://api.are.na/v2/channels/tom-s-bookshelf?page=${page}&per_page=${perPage}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch bookshelf: ${response.status}`);
    }

    const data: ArenaChannel = await response.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    console.error("Error fetching bookshelf data:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookshelf data" },
      { status: 500 },
    );
  }
}
