import prisma from "@/lib/prisma";
import { Separator } from "@/components/ui/separator/separator";
import { Metadata } from "next";

async function getPageViews(path: string) {
  const totalPageViews = await prisma.pageView.count({
    where: {
      pagePath: path,
      filtered: false,
    },
  });

  const last30DaysViews = await prisma.pageView.count({
    where: {
      pagePath: path,
      filtered: false,
      timestamp: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    },
  });

  const viewsOverTime = await prisma.pageView.groupBy({
    by: ["timestamp"],
    where: {
      pagePath: path,
      filtered: false,
    },
    _count: {
      id: true,
    },
    orderBy: {
      timestamp: "asc",
    },
  });

  const groupedViewsByMonth = viewsOverTime.reduce(
    (acc: Record<string, number>, view) => {
      const monthYear = view.timestamp.toISOString().slice(0, 7); // Get YYYY-MM
      acc[monthYear] = (acc[monthYear] || 0) + view._count.id;
      return acc;
    },
    {},
  );

  return {
    totalPageViews,
    last30DaysViews,
    viewsOverTime: Object.entries(groupedViewsByMonth).map(([date, count]) => ({
      date,
      count,
    })),
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug?: string[] };
}): Promise<Metadata> {
  const path = params.slug ? `/${params.slug.join("/")}` : "/";

  return {
    title: `Analytics for ${path}`,
    description: `Total views for ${path}`,
  };
}

export const revalidate = 3600; // revalidate every hour

export default async function InfoPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  // Construct the path based on the slug
  const path = params.slug ? `/${params.slug.join("/")}` : "/";

  const pageViews = await getPageViews(path);

  return (
    <div className="w-full">
      <h1 className="font-medium text-4xl pt-4">Analytics for {path}</h1>
      <Separator className="my-4" />

      {pageViews.totalPageViews === 0 ? (
        <p>No views recorded for this page yet.</p>
      ) : (
        <>
          <p>Total views to date: {pageViews.totalPageViews}</p>
          <h2 className="pt-8 text-lg font-medium">Breakdown</h2>
          <ul>
            {pageViews.viewsOverTime.map(
              ({ date, count }: { date: string; count: number }) => (
                <li key={date}>
                  {new Date(date).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                  : {count} views
                </li>
              ),
            )}
          </ul>
        </>
      )}
    </div>
  );
}
