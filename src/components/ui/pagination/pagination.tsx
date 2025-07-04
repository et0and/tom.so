import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div
      className={`flex justify-center items-center mt-6 space-x-2 ${className}`}
    >
      {currentPage > 1 && (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="px-4 py-2 link"
          prefetch={true}
        >
          Previous
        </Link>
      )}

      <span className="px-4 py-2">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="px-4 py-2 link"
          prefetch={true}
        >
          Next
        </Link>
      )}
    </div>
  );
}
