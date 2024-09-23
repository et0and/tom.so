import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// Load the fonts
const geistSansRegular = fetch(
  new URL(
    "https://tom.so/assets/fonts/geist/static/Geist-Regular.ttf",
    import.meta.url
  )
).then((res) => res.arrayBuffer());

const geistSansSemibold = fetch(
  new URL(
    "https://tom.so/assets/fonts/geist/static/Geist-SemiBold.ttf",
    import.meta.url
  )
).then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  // Wait for the fonts to load
  const [geistSansRegularData, geistSansSemiboldData] = await Promise.all([
    geistSansRegular,
    geistSansSemibold,
  ]);

  return new ImageResponse(
    (
      <div
        style={{
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
        <p
          style={{
            fontFamily: '"Geist Sans Semibold"',
            fontSize: 50,
            margin: 0,
            marginBottom: 5,
            fontWeight: 600,
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: '"Geist Sans"',
            fontSize: 40,
            margin: 0,
          }}
        >
          Tom Hackshaw
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist Sans",
          data: geistSansRegularData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist Sans Semibold",
          data: geistSansSemiboldData,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
