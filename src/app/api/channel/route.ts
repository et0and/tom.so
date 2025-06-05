import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const perPage = searchParams.get("perPage") || "12";

  const bookshelfUrl = `https://api.are.na/v2/channels/tom-s-bookshelf?page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(bookshelfUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch bookshelf data" },
        { status: 500 },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching bookshelf data:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookshelf data" },
      { status: 500 },
    );
  }
}
