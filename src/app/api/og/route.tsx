import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// Load the fonts
const geistSansRegular = fetch(
  new URL(
    "https://tom.so/assets/fonts/geist/static/Geist-Regular.ttf",
    import.meta.url,
  ),
).then((res) => res.arrayBuffer());

const geistSansSemibold = fetch(
  new URL(
    "https://tom.so/assets/fonts/geist/static/Geist-SemiBold.ttf",
    import.meta.url,
  ),
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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <div tw="flex pl-8">
            <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
              <h2 tw="flex flex-col text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 text-left">
                <span>{title}</span>
                <span tw="text-gray-600 text-lg">Tom Hackshaw</span>
              </h2>
            </div>
          </div>
        </div>
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
    },
  );
}
