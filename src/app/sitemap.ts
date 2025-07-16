import { MetadataRoute } from "next";
import { ContentService } from "@/lib/services/content";
import { baseUrl } from "@/lib/url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  let routes = ["", "/posts", "/about", "/work"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Blog posts
  const blogPosts = ContentService.getPosts("posts")().map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
  }));

  // Work posts
  const workPosts = ContentService.getPosts("work")().map((post) => ({
    url: `${baseUrl}/work/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
  }));

  return [...routes, ...blogPosts, ...workPosts];
}
