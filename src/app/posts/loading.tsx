import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[350px] w-[550px] rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[500px]" />
        <Skeleton className="h-4 w-[500px]" />
      </div>
      <Skeleton className="h-[350px] w-[550px] rounded-lg pt-4" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[500px]" />
        <Skeleton className="h-4 w-[500px]" />
      </div>
      <Skeleton className="h-[350px] w-[550px] rounded-lg pt-4" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[500px]" />
        <Skeleton className="h-4 w-[500px]" />
      </div>
    </div>
  );
}