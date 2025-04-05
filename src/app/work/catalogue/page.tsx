import { fetchPaginatedContent } from "@/app/utils/dataFetcher";
import { PageLayout } from "@/components/PageLayout";
import { PaginatedList } from "@/components/PaginatedList";

export const metadata = {
  title: "Catalogue",
  description: "All work made since 2014",
};

export const revalidate = 3600;

async function CatalogueList({ page }: Readonly<{ page: number }>) {
  const { posts, totalPages } = await fetchPaginatedContent("catalogue", page);
  return (
    <PaginatedList
      posts={posts}
      totalPages={totalPages}
      currentPage={page}
      basePath="/work/catalogue"
    />
  );
}

export default async function CataloguePage({
  searchParams,
}: Readonly<{
  searchParams: { page?: string };
}>) {
  const currentPage = Number(searchParams.page) || 1;

  return (
    <PageLayout
      title="Catalogue raisonné"
      subtitle="All of my work, 2014 to present"
    >
      <CatalogueList page={currentPage} />
    </PageLayout>
  );
}
