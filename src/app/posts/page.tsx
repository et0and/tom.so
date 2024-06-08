import Link from "next/link";
import { getBlogPosts } from "@/app/db/blog";

export const metadata = {
  title: "Writing",
  description: "Read my thoughts.",
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <div className="w-full">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col hover:text-blue-700 space-y-1 mb-4"
              href={`/posts/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="text-2xl font-medium tracking-tighter">
                  {post.metadata.title}
                </p>
                <p className="text-md">{post.metadata.summary}</p>
                <p className="text-sm">{post.metadata.publishedAt}</p>
              </div>
            </Link>
          ))}
      </div>
  );
}
