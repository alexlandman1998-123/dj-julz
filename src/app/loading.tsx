import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="bg-background px-5 pb-14 pt-24">
      <div className="mx-auto max-w-md">
        <Skeleton className="h-4 w-36 rounded-full" />
        <Skeleton className="mt-5 h-28 w-full rounded-[1.75rem]" />
        <Skeleton className="mt-6 h-20 w-5/6 rounded-[1.25rem]" />
        <div className="mt-8 grid gap-3">
          <Skeleton className="h-12 rounded-full" />
          <Skeleton className="h-12 rounded-full" />
        </div>
        <Skeleton className="mt-8 aspect-[4/5] rounded-[1.75rem]" />
      </div>
    </main>
  );
}
