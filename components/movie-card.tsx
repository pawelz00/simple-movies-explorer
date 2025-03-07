import Link from "next/link";
import { Movie } from "@/app/types";
import Image from "next/image";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`} className="block">
      <div className="movie-card bg-card border rounded-xl overflow-hidden">
        <div className="relative aspect-[2/3]">
          <Image
            src={movie.poster_url ?? ""}
            alt={movie.title}
            width={500}
            height={750}
            className={"object-cover w-full"}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        </div>
        <div className="p-4">
          <h2 className="font-semibold text-lg line-clamp-1">{movie.title}</h2>
          <div className="mt-1 flex flex-wrap gap-1">
            {movie.genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full"
              >
                {genre}
              </span>
            ))}
            {movie.genres.length > 2 && (
              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                +{movie.genres.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
