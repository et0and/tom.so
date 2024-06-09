import { ImageResponse } from "next/og";

export const runtime = "edge";

type Parameters = {
  width?: number;
  height?: number;
  title?: string;
};

export async function GET(request: Request) {
  try {
    // SEARCH PARAMS
    const { searchParams } = new URL(request.url);
    const parameters: Parameters = Object.fromEntries(searchParams);
    console.log(parameters);

    // PARAMETERS

    const hasTitle = searchParams.has("title");

    // FONT
    const geist = await fetch(
      new URL("/assets/fonts/geist/static/Geist-SemiBold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div tw="h-full w-full flex flex-col justify-start items-end bg-white p-20 relative">
          {hasTitle ? (
            <div tw="flex flex-col items-end">
              <p tw="text-4xl tracking-tighter opacity-20 mb-0">Tom Hackshaw</p>
              {parameters.title && parameters.title.length > 20 ? (
                <p tw="text-4xl tracking-tighter mb-0">
                  {parameters.title.slice(0, 40)}...
                </p>
              ) : (
                <p tw="text-4xl tracking-tighter mb-0">{parameters.title}</p>
              )}
            </div>
          ) : (
            <p tw="text-4xl tracking-tighter mr-4 mb-0">Tom Hackshaw</p>
          )}
        </div>
      ),
      {
        width: parameters.width || 1200,
        height: parameters.height || 630,
        fonts: [
          {
            name: "Geist",
            data: geist,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
