import { getBlogPosts } from "@/app/db/blog";
import { getWorkPosts } from "@/app/db/work";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://tom.so";

  // Static routes
  let routes = ["", "/posts", "/about", "/work"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Blog posts
  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
  }));

  // Work posts
  const workPosts = getWorkPosts().map((post) => ({
    url: `${baseUrl}/work/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
  }));

  return [...routes, ...blogPosts, ...workPosts];
}
