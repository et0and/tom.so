import React, { Suspense } from "react";
import { Separator } from "@/components/ui/separator/separator";
import Image from "next/image";
import { formatDate } from "@/utils/dateFormatter";
import { ArenaService } from "@/lib/services/arena";
import { Pagination } from "@/components/ui/pagination/pagination";

export default async function DrawingsPage({
  searchParams,
}: Readonly<{
  searchParams: { page?: string };
}>) {
  const perPage = 12;
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const data = await ArenaService.getChannelData(
    "tom-s-drawings",
    currentPage,
    perPage,
  );

  const totalPages = Math.ceil(data.length / perPage);

  return (
    <>
      <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl pt-2 sm:pt-4">
        Drawings
      </h1>
      <p>A collection of drawings and sketches</p>
      <Separator className="my-3 sm:my-4" />

      <Suspense fallback={<p>Loading</p>}>
        <div className="flex flex-col space-y-6 sm:space-y-8">
          {data.contents.map(
            (item) =>
              item.image && (
                <div key={item.id}>
                  <div className="w-full relative mb-4">
                    <Image
                      src={
                        item.image.large?.url ||
                        item.image.original?.url ||
                        item.image.thumb.url
                      }
                      alt={item.title || "Drawing"}
                      width={800}
                      height={600}
                      style={{ width: "100%", height: "auto" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>{formatDate(item.created_at)}</p>
                  </div>
                </div>
              ),
          )}
        </div>

        {data.contents.length === 0 && (
          <p className="text-center text-gray-500 py-8">No drawings found.</p>
        )}
      </Suspense>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath="/drawings"
        className="mt-8"
      />
    </>
  );
}
