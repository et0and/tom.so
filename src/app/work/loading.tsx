import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <div className="w-full">
      <h1 className="font-medium text-4xl">Work</h1>
      <Separator className="my-4" />
      {[...Array(3)].map((_, index) => (
        <div key={index} className="animate-pulse space-y-1 mb-4">
          <div className="w-full flex flex-col">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-full mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
