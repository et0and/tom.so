import Link from "next/link";
import { getPaginatedBlogPosts } from "@/app/db/blog";
import { Separator } from "@/components/ui/separator/separator";

export const metadata = {
  title: "Writing",
  description: "Read my thoughts.",
};

const POSTS_PER_PAGE = 10;

async function BlogList({ page }: { page: number }) {
  const { posts, totalPages } = await getPaginatedBlogPosts(
    page,
    POSTS_PER_PAGE,
  );

  return (
    <>
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col link space-y-1 mb-4"
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
      <div className="my-8 flex justify-between">
        {page > 1 && (
          <Link href={`/posts?page=${page - 1}`} className="link">
            Previous
          </Link>
        )}
        {page < totalPages && (
          <Link href={`/posts?page=${page + 1}`} className="link">
            Next
          </Link>
        )}
      </div>
    </>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;

  return (
    <div className="w-full">
      <h1 className="font-medium text-4xl pt-4">Writing</h1>
      <h2 className="font-normal text-lg pb-4">Read my thoughts</h2>
      <Separator className="my-4" />
      <BlogList page={currentPage} />
    </div>
  );
}
