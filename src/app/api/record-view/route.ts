import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { shouldFilterRequest } from "@/utils/filterRequests";

export async function POST(request: Request) {
  const { path } = await request.json();
  const filtered = shouldFilterRequest(request);

  try {
    await prisma.pageView.create({
      data: {
        pagePath: path,
        filtered: filtered,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error recording page view:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
