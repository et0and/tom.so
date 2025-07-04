import type { Metadata } from "next";
import { Post } from "@/types/postType";

export async function generatePostMetadata(
  post: Post,
  basePath: string,
): Promise<Metadata> {
  const {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata;
  const ogImage = `https://tom.so/api/og?title=${encodeURIComponent(title)}`;
  const url = `https://tom.so${basePath}/${post.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
