import RSS from "rss";
import { getBlogPosts } from "@/app/db/blog";

export async function GET() {
  const site_url = "https://tom.so";

  const feedOptions = {
    title: "Tom Hackshaw's blog",
    description: "Latest posts from Tom Hackshaw",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/favicon-32x32.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Tom Hackshaw`,
  };

  const feed = new RSS(feedOptions);

  const blogPosts = getBlogPosts();

  blogPosts.forEach((post) => {
    feed.item({
      title: post.metadata.title,
      description: post.metadata.summary,
      url: `${site_url}/posts/${post.slug}`,
      date: post.metadata.publishedAt,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
