import Link from "next/link";

export interface PostItem {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt?: string;
  };
}

interface PaginatedListProps {
  posts: PostItem[];
  totalPages: number;
  currentPage: number;
  basePath: string;
}

export function PaginatedList({
  posts,
  totalPages,
  currentPage,
  basePath,
}: Readonly<PaginatedListProps>) {
  return (
    <>
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col hover:text-blue-600 dark:hover:text-teal-200 space-y-1 mb-4"
          href={`${basePath}/${post.slug}`}
          prefetch={true}
        >
          <div className="w-full flex flex-col">
            <p className="text-2xl font-medium tracking-tighter">
              {post.metadata.title}
            </p>
            <p className="text-md">{post.metadata.summary}</p>
            {post.metadata.publishedAt && (
              <p className="text-sm">{post.metadata.publishedAt}</p>
            )}
          </div>
        </Link>
      ))}
      <div className="my-8 flex justify-between">
        {currentPage > 1 && (
          <Link href={`${basePath}?page=${currentPage - 1}`} className="link">
            Previous
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={`${basePath}?page=${currentPage + 1}`}
            className="link"
            prefetch={true}
          >
            Next
          </Link>
        )}
      </div>
    </>
  );
}
