import Link from "next/link";
import { getBlogPosts } from "@/app/db/blog";
import { Separator } from "@/components/ui/separator/separator";
import { Suspense } from "react";

export const metadata = {
  title: "Writing",
  description: "Read my thoughts.",
};

function BlogList() {
  let allBlogs = getBlogPosts();

  return (
    <>
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
            className="flex flex-col hover:text-blue-700 dark:hover:text-teal-200 transition-colors duration-200 space-y-1 mb-4"
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
    </>
  );
}

export default function BlogPage() {
  return (
    <div className="w-full">
      <h1 className="font-medium text-4xl pt-4">Writing</h1>
      <Separator className="my-4" />
      <Suspense
        fallback={
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        }
      >
        <BlogList />
      </Suspense>
    </div>
  );
}
