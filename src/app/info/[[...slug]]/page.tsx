import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { Separator } from "@/components/ui/separator/separator";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";

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
    by: [
      {
        year: {
          extract: {
            datepart: 'year',
            from: 'timestamp',
          },
        },
      },
      {
        month: {
          extract: {
            datepart: 'month',
            from: 'timestamp',
          },
        },
      },
    ],
    where: {
      pagePath: path,
      filtered: false,
    },
    _count: {
      id: true,
    },
    orderBy: [
      { year: 'desc' },
      { month: 'desc' },
    ],
    take: 12, // Show last 12 months
  });

  return {
    totalPageViews,
    last30DaysViews,
    viewsOverTime: viewsOverTime.map((view: any) => ({
      date: new Date(view.year, view.month - 1, 1),
      count: view._count.id,
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
          <p>Total Views: {pageViews.totalPageViews}</p>
          <p>Views in last 30 days: {pageViews.last30DaysViews}</p>
          <h2 className="text-2xl mt-4 mb-2">Views by Month</h2>
          <ul>
            {pageViews.viewsOverTime.map(
              ({ date, count }: { date: Date; count: number }) => (
                <li key={date.toISOString()}>
                  {date.toLocaleString('default', { month: 'long', year: 'numeric' })}: {count} views
                </li>
              ),
            )}
          </ul>
        </>
      )}
    </div>
  );
}