import Link from "next/link";
import { getBlogPosts } from "@/app/db/blog";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Writing",
  description: "Read my thoughts.",
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <div className="w-full">
      <h1 className="font-medium text-4xl">Writing</h1>
      <Separator className="my-4" />
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col hover:text-blue-700 transition-colors duration-200 space-y-1 mb-4"
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
