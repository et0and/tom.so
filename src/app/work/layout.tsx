import { Suspense } from "react";

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-grow flex tracking-tighter flex-col px-2 mx-auto md:px-0">
      <div className="flex-grow flex flex-col">
        <div className="max-w-5xl mx-auto px-4 md:px-0 pt-8 text-pretty">
          <Suspense fallback={<div className="w-full">Loading works...</div>}>
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
