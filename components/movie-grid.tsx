import { MovieCard } from "@/components/movie-card";
import { Movie } from "@/app/types";

interface MovieGridProps {
  movies: Movie[];
}

export function MoviesGrid({ movies }: MovieGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
