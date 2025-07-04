"use server";
import { ArenaChannel } from "@/types/arena";

export async function getArenaData(
  slug: string,
  page: number = 1,
  perPage: number = 12,
): Promise<ArenaChannel> {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://tom.so";

  const res = await fetch(
    `${baseUrl}/api/channel?slug=${slug}&page=${page}&perPage=${perPage}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch arena channel data");
  }

  return res.json();
}
