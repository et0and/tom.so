import Link from "next/link";
import { getPaginatedWorkPosts } from "@/app/db/work";

export const metadata = {
  title: "Work",
  description: "Things I have made.",
};

const POSTS_PER_PAGE = 10;

async function WorkList({ page }: { page: number }) {
  const { posts, totalPages } = await getPaginatedWorkPosts(page, POSTS_PER_PAGE);

  return (
    <>
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col hover:text-blue-700 dark:hover:text-teal-200 transition-colors duration-200 space-y-1 mb-4"
          href={`/work/${post.slug}`}
        >
          <div className="w-full flex flex-col">
            <p className="text-2xl font-medium tracking-tighter">
              {post.metadata.title}
            </p>
            <p className="text-md">{post.metadata.summary}</p>
          </div>
        </Link>
      ))}
      <div className="mt-8 flex justify-between">
        {page > 1 && (
          <Link href={`/work?page=${page - 1}`}>Previous</Link>
        )}
        {page < totalPages && (
          <Link href={`/work?page=${page + 1}`}>Next</Link>
        )}
      </div>
    </>
  );
}

export default async function WorkPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;

  return (
    <div className="w-full">
      <h1 className="font-medium text-4xl pt-4">Work</h1>
    
      <WorkList page={currentPage} />
    </div>
  );
}