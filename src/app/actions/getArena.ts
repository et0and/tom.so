"use server";
import { ArenaChannel } from "@/types/arena";
import { baseUrl } from "@/lib/url";

export async function getArenaData(
  slug: string,
  page: number = 1,
  perPage: number = 12,
): Promise<ArenaChannel> {
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
