import { fetchPaginatedContent } from "@/app/utils/dataFetcher";
import { PageLayout } from "@/components/PageLayout";
import { PaginatedList } from "@/components/PaginatedList";

export const metadata = {
  title: "Writing",
  description: "Read my thoughts.",
};

export const revalidate = 3600;

async function BlogList({ page }: Readonly<{ page: number }>) {
  const { posts, totalPages } = await fetchPaginatedContent("blog", page);
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
