import prisma from "@/lib/prisma";
import { Separator } from "@/components/ui/separator/separator";
import { Metadata } from "next";

async function getPageViews(path: string) {
  try {
    const [totalPageViews, last30DaysViews, viewsOverTime] = await Promise.all([
      prisma.pageView.count({
        where: { pagePath: path, filtered: false },
      }),
      prisma.pageView.count({
        where: {
          pagePath: path,
          filtered: false,
          timestamp: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
        },
      }),
      prisma.$queryRaw<Array<{ date: Date; count: BigInt }>>`
        SELECT DATE_TRUNC('month', timestamp) as date, COUNT(*) as count
        FROM "PageView"
        WHERE "pagePath" = ${path} AND filtered = false
        GROUP BY DATE_TRUNC('month', timestamp)
        ORDER BY date ASC
      `,
    ]);

    return {
      totalPageViews,
      last30DaysViews,
      viewsOverTime: viewsOverTime.map(({ date, count }) => ({
        date: date.toISOString().slice(0, 7),
        count: Number(count),
      })),
    };
  } catch (error) {
    console.error("Error fetching page views:", error);
    return null;
  }
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
  const path = params.slug ? `/${params.slug.join("/")}` : "/";

  const pageViews = await getPageViews(path);

  if (!pageViews) {
    return <div>Error loading page views. Please try again later.</div>;
  }

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
