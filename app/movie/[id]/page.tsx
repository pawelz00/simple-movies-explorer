import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getMovies } from "@/app/server/queries";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [id, movies] = await Promise.all([params, getMovies()]);
  const movie = movies?.data?.find((movie) => movie.id === Number(id));

  if (!movie) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-primary hover:text-primary/80 transition-colors"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to movies
      </Link>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="relative rounded-xl aspect-[2/3] max-h-[700px] overflow-hidden">
          <Image
            src={movie.poster_url || ""}
            alt={movie.title}
            fill
            className="object-cover movie-detail-image"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="space-y-6 fade-in">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {movie.overview}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <h3 className="text-sm text-muted-foreground">Release Date</h3>
              <p>{movie.release_date}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
