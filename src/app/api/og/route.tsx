import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 50,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 100,
          textAlign: "left",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <p style={{ margin: 0, marginBottom: 20 }}>{title}</p>
        <p style={{ margin: 0, fontSize: 40 }}>Tom Hackshaw</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
