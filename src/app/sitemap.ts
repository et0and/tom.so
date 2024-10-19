import { getBlogPosts } from "@/app/db/blog";
import { getWorkPosts } from "@/app/db/work";

export default async function sitemap() {
  const baseUrl = "https://tom.so";

  // Static routes
  let routes = ["", "/posts", "/about", "/work"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  // Blog posts
  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  // Work posts
  const workPosts = getWorkPosts().map((post) => ({
    url: `${baseUrl}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  return [...routes, ...blogPosts, ...workPosts];
}
