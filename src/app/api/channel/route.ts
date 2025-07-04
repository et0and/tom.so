export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const arenaChannel = searchParams.get("slug") || "";
  const page = searchParams.get("page") || "1";
  const perPage = searchParams.get("perPage") || "12";

  const channelUrl = `https://api.are.na/v2/channels/${arenaChannel}?page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(channelUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch channel data");
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching channel data:", error);
  }
}
