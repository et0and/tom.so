import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { error: "Channel slug is required" },
      { status: 400 },
    );
  }

  const channelUrl = `https://api.are.na/v2/channels/${slug}/contents?per=20`;

  try {
    const response = await fetch(channelUrl);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Are.na channel:", error);
    return NextResponse.json(
      { error: "Failed to fetch Are.na channel" },
      { status: 500 },
    );
  }
}
