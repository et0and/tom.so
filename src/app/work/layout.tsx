import { Suspense } from "react";

function PageSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded w-full mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded w-full mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
    </div>
  );
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-grow flex tracking-tighter flex-col px-2 mx-auto md:px-0">
      <div className="flex-grow flex flex-col">
        <div className="max-w-3xl mx-auto px-4 md:px-0 pt-8 text-pretty">
          <Suspense fallback={<PageSkeleton />}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
