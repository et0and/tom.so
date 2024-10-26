import Link from "next/link";
import { getPaginatedWorkPosts } from "@/app/db/work";
import { Separator } from "@/components/ui/separator/separator";

export const metadata = {
  title: "Work",
  description: "Things I have made.",
};

const POSTS_PER_PAGE = 10;

async function WorkList({ page }: { page: number }) {
  const { posts, totalPages } = await getPaginatedWorkPosts(
    page,
    POSTS_PER_PAGE,
  );

  return (
    <>
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col link space-y-1 mb-4"
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
      <div className="my-8 flex justify-between">
        {page > 1 && (
          <Link href={`/work?page=${page - 1}`} className="link">
            Previous
          </Link>
        )}
        {page < totalPages && (
          <Link href={`/work?page=${page + 1}`} className="link">
            Next
          </Link>
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
      <h2 className="font-normal text-lg pb-4">
        Things I have made, or am working on
      </h2>
      <p>
        See also:{" "}
        <Link href="/work/catalogue" className="link font-medium">
          catalogue raisonné
        </Link>
      </p>
      <Separator className="my-4" />
      <WorkList page={currentPage} />
    </div>
  );
}
