import Link from "next/link";
import { fetchPaginatedContent } from "@/app/utils/dataFetcher";
import { PageLayout } from "@/components/PageLayout";
import { PaginatedList } from "@/components/PaginatedList";

export const metadata = {
  title: "Work",
  description: "Things I have made.",
};

export const revalidate = 3600;

async function WorkList({ page }: Readonly<{ page: number }>) {
  const { items: posts, totalPages } = await fetchPaginatedContent(
    "work",
    page,
    { sortBy: "title", sortOrder: "asc" },
  );
  return (
    <PaginatedList
      posts={posts}
      totalPages={totalPages}
      currentPage={page}
      basePath="/work"
    />
  );
}

export default async function WorkPage({
  searchParams,
}: Readonly<{
  searchParams: { page?: string };
}>) {
  const currentPage = Number(searchParams.page) || 1;

  const additionalContent = (
    <p>
      See also:{" "}
      <Link href="/work/catalogue" className="link font-medium" prefetch={true}>
        catalogue raisonné
      </Link>
    </p>
  );

  return (
    <PageLayout
      title="Work"
      subtitle="Things I have made, or am working on"
      additionalContent={additionalContent}
    >
      <WorkList page={currentPage} />
    </PageLayout>
  );
}
