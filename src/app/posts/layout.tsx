import { Suspense } from "react";

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-grow flex tracking-tighter flex-col px-2 mx-auto md:px-0">
      <div className="flex-grow flex flex-col">
        <div className="max-w-3xl mx-auto px-4 md:px-0 pt-8 text-pretty">
          <Suspense
            fallback={
              <div className="w-full h-[50vh] flex items-center justify-center">
                Loading posts
              </div>
            }
          >
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
