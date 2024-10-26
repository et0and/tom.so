import Link from "next/link";
import { getPaginatedCataloguePosts } from "@/app/db/catalogue";
import { Separator } from "@/components/ui/separator/separator";

export const metadata = {
  title: "Catalogue",
  description: "All work made since 2014",
};

const POSTS_PER_PAGE = 10;

async function CatalogueList({ page }: { page: number }) {
  const { posts, totalPages } = await getPaginatedCataloguePosts(
    page,
    POSTS_PER_PAGE,
  );

  return (
    <>
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col link space-y-1 mb-4"
          href={`/work/catalogue/${post.slug}`}
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
          <Link href={`/work/catalogue?page=${page - 1}`} className="link">
            Previous
          </Link>
        )}
        {page < totalPages && (
          <Link href={`/work/catalogue?page=${page + 1}`} className="link">
            Next
          </Link>
        )}
      </div>
    </>
  );
}

export default async function CataloguePage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;

  return (
    <div className="w-full">
      <h1 className="font-medium text-4xl pt-4">Catalogue raisonné</h1>
      <h2 className="font-normal text-lg pb-4">
        All of my work, 2014 to present{" "}
      </h2>
      <Separator className="my-4" />
      <CatalogueList page={currentPage} />
    </div>
  );
}
