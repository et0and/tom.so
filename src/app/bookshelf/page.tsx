import React, { Suspense } from "react";
import { Separator } from "@/components/ui/separator/separator";
import Image from "next/image";
import Link from "next/link";
import { ArenaService } from "@/lib/services/arena";
import { Pagination } from "@/components/ui/pagination/pagination";

export default async function BookshelfPage({
  searchParams,
}: Readonly<{
  searchParams: { page?: string };
}>) {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const perPage = 12;

  const data = await ArenaService.getChannelData("tom-s-bookshelf", currentPage, perPage);
  const totalPages = Math.ceil(data.length / perPage);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
      <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl pt-2 sm:pt-4">
        Tom&apos;s bookshelf
      </h1>
      <p>
        Some books that I would like to read or am reading. Pulls books from{" "}
        <a
          href="https://www.are.na/tom/tom-s-bookshelf"
          className="link"
          target="_blank"
        >
          are.na
        </a>
        .
      </p>
      <Separator className="my-3 sm:my-4" />

      <Suspense fallback={<p>Loading</p>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {data?.contents?.map(
            (item) =>
              item.attachment && (
                <a
                  key={item.id}
                  href={item.attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border p-3 sm:p-4 hover:bg-blue-50 dark:hover:bg-gray-800 transition block cursor-pointer no-underline text-inherit focus-visible:ring-offset-4 focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-2 dark:focus-visible:ring-4 dark:focus-visible:ring-white"
                >
                  {item.image && (
                    <div className="w-full h-32 sm:h-40 md:h-48 relative mb-3">
                      <Image
                        src={item.image.thumb.url}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="rounded"
                      />
                    </div>
                  )}
                  <h2 className="text-base sm:text-lg md:text-xl font-medium break-words overflow-hidden mb-2">
                    {item.title}
                  </h2>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-white mb-3">
                    <p>Size: {item.attachment.file_size_display}</p>
                    <p>Type: {item.attachment.extension.toUpperCase()}</p>
                  </div>
                </a>
              ),
          )}
        </div>

        {data?.contents?.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            No items found in the bookshelf.
          </p>
        )}
      </Suspense>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath="/bookshelf"
        className="mt-8"
      />
    </div>
  );
}
