import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Skeleton className="h-8 w-48 mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: 20 }).map((_, index) => (
          <Skeleton key={index} className={"w-full h-80 rounded-xl"} />
        ))}
      </div>
    </main>
  );
}
