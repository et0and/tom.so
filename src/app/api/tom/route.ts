import { NextResponse } from "next/server";
import tomData from "@/app/db/tom";

export async function GET() {
  return NextResponse.json(tomData);
}
