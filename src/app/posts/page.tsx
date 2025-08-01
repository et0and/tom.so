import { fetchPaginatedContent } from "@/app/utils/dataFetcher";
import { PageLayout } from "@/components/PageLayout";
import { PaginatedList } from "@/components/PaginatedList";

export const metadata = {
  title: "Writing",
  description: "Read my thoughts.",
};

async function BlogList({ page }: Readonly<{ page: number }>) {
  const { items: posts, totalPages } = await fetchPaginatedContent(
    "posts",
    page,
  );
  return (
    <PaginatedList
      posts={posts}
      totalPages={totalPages}
      currentPage={page}
      basePath="/posts"
    />
  );
}

export default async function BlogPage({
  searchParams,
}: Readonly<{
  searchParams: { page?: string };
}>) {
  const currentPage = Number(searchParams.page) || 1;

  return (
    <PageLayout title="Writing" subtitle="Read my thoughts">
      <BlogList page={currentPage} />
    </PageLayout>
  );
}
