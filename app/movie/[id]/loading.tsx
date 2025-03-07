import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Skeleton className={"w-36 h-8 mb-6"} />
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Skeleton className="relative rounded-xl aspect-[2/3] max-h-[700px] overflow-hidden" />

        <div className="space-y-6">
          <div className={"flex justify-between items-center"}>
            <div className="space-y-2">
              <Skeleton className={"w-32 h-8"} />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} className="w-20 h-6" />
                ))}
              </div>
            </div>
            <div>
              <Skeleton className={"h-4 w-4 rounded-full"} />
            </div>
          </div>
          <Skeleton className={"w-24 h-8"} />
          <Skeleton className={"w-24 h-8"} />
        </div>
      </div>
    </main>
  );
}
