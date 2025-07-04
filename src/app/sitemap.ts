import { MetadataRoute } from "next";
import { getPosts } from "./actions/getPosts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://tom.so";

  // Static routes
  let routes = ["", "/posts", "/about", "/work"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Blog posts
  const blogPosts = getPosts("posts")().map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
  }));

  // Work posts
  const workPosts = getPosts("work")().map((post) => ({
    url: `${baseUrl}/work/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
  }));

  return [...routes, ...blogPosts, ...workPosts];
}
