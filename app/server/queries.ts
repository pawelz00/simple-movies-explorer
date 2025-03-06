"use server";

import { IResponse, Movie, MovieFetch } from "@/app/types";

const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
};
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export async function getMovies(): Promise<IResponse<Movie[]>> {
  try {
    const [movies, genres] = await Promise.all([
      fetch(`${BASE_URL}/movie/popular?language=en-US`, {
        ...OPTIONS,
        cache: "force-cache",
      }).then((res) => res.json()),
      fetch(`${BASE_URL}/genre/movie/list?language=en-US`, {
        ...OPTIONS,
        cache: "force-cache",
      }).then((res) => res.json()),
    ]);

    const genresMap = genres.genres.reduce(
      (
        acc: { [x: string]: any },
        genre: { id: string | number; name: any },
      ) => {
        acc[genre.id] = genre.name;
        return acc;
      },
      {},
    );

    return {
      status: 200,
      data: movies.results.map((movie: MovieFetch) => ({
        id: movie.id,
        title: movie.title,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
        overview: movie.overview,
        poster_url: movie.poster_path
          ? `${IMAGE_BASE_URL}${movie.poster_path}`
          : null,
        genres: movie.genre_ids.map((id: number) => genresMap[id]),
      })),
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      isError: true,
      error: `Internal Server Error - ${JSON.stringify(error)}`,
    };
  }
}
