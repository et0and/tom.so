import React from "react";
import { Separator } from "@/components/ui/separator/separator";
import Image from "next/image";
import Link from "next/link";
import { ArenaChannel } from "@/types/arena";

async function getBookshelfData(
  page: number = 1,
  perPage: number = 12,
): Promise<ArenaChannel> {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://tom.so";

  const res = await fetch(
    `${baseUrl}/api/bookshelf?page=${page}&perPage=${perPage}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch bookshelf data");
  }

  return res.json();
}

export default async function BookshelfPage({
  searchParams,
}: Readonly<{
  searchParams: { page?: string };
}>) {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const perPage = 12;

  const data = await getBookshelfData(currentPage, perPage);
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {data.contents.map(
          (item) =>
            item.attachment && (
              <a
                key={item.id}
                href={item.attachment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border p-3 sm:p-4 hover:bg-blue-50 dark:hover:bg-gray-800 transition block cursor-pointer no-underline text-inherit"
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
                <div className="text-xs sm:text-sm text-gray-600 mb-3">
                  <p>Size: {item.attachment.file_size_display}</p>
                  <p>Type: {item.attachment.extension.toUpperCase()}</p>
                </div>
              </a>
            ),
        )}
      </div>

      {data.contents.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          No items found in the bookshelf.
        </p>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {currentPage > 1 && (
          <Link
            href={`/bookshelf?page=${currentPage - 1}`}
            className="px-4 py-2 link"
          >
            Previous
          </Link>
        )}

        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>

        {currentPage < totalPages && (
          <Link
            href={`/bookshelf?page=${currentPage + 1}`}
            className="px-4 py-2 link"
            prefetch={true}
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
