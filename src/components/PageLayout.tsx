import { Separator } from "@/components/ui/separator/separator";
import { ReactNode, Suspense } from "react";

interface PageLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  additionalContent?: ReactNode;
}

export function PageLayout({
  title,
  subtitle,
  children,
  additionalContent,
}: Readonly<PageLayoutProps>) {
  return (
    <div className="w-full">
      <h1 className="font-medium text-4xl pt-4">{title}</h1>
      <h2 className="font-normal text-lg pb-4">{subtitle}</h2>
      {additionalContent}
      <Separator className="my-4" />
      <Suspense fallback={<div className="w-full">Loading...</div>}>
        {children}
      </Suspense>
    </div>
  );
}
