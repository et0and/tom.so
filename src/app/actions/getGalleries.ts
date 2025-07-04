"use server";
import { Gallery } from "@/types/gallery";
import { baseUrl } from "@/lib/url";

export async function getGalleryData(
  page: number = 1,
  perPage: number = 12,
): Promise<Gallery> {
  const res = await fetch(
    `${baseUrl}/api/galleries?page=${page}&perPage=${perPage}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch gallery data");
  }

  return res.json();
}
