"use client";

import { Movie } from "@/app/types";
import { MoviesGrid } from "@/components/movie-grid";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import FilterSelect from "@/components/filter-select";
import SortButton from "@/components/sort-button";

type MoviesPageProps = {
  movies: Movie[];
};

export default function MoviesPage({ movies }: MoviesPageProps) {
  const [moviesData, setMoviesData] = useState(movies);
  const [filter, setFilter] = useState<string>("");
  const [sort, setSort] = useState<"asc" | "desc" | null>(null);

  const genres = useMemo(() => {
    return movies.reduce<string[]>((acc, movie) => {
      movie.genres.forEach((genre) => {
        if (!acc.includes(genre)) {
          acc.push(genre);
        }
      });
      return acc;
    }, []);
  }, [movies]);

  useEffect(() => {
    let updatedMovies = [...movies];

    if (filter) {
      updatedMovies = updatedMovies.filter((movie) =>
        movie.genres.includes(filter),
      );
    }

    if (sort) {
      updatedMovies = updatedMovies.sort((a, b) => {
        if (sort === "asc") {
          return a.title.localeCompare(b.title);
        }
        return b.title.localeCompare(a.title);
      });
    }

    setMoviesData(updatedMovies);
  }, [sort, filter, movies]);

  return (
    <main className={"container mx-auto px-4 py-6"}>
      <div
        className={
          "flex flex-col sm:flex-row justify-between items-center gap-2 mb-6"
        }
      >
        <h1 className={"text-3xl font-bold"}>Popular Movies</h1>
        <div className={"flex gap-2 items-center"}>
          {(sort || filter) && (
            <Button
              className={"mr-2"}
              size={"sm"}
              variant={"outline"}
              onClick={() => {
                setSort(null);
                setFilter("");
              }}
            >
              Clear
            </Button>
          )}
          <SortButton sort={sort} setSort={setSort} />
          <FilterSelect filter={filter} setFilter={setFilter} genres={genres} />
        </div>
      </div>
      <MoviesGrid movies={moviesData} />
    </main>
  );
}
