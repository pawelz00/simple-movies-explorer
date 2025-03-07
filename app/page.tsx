import { getMovies } from "@/app/server/queries";
import MoviesPage from "@/components/movies-page";
import Error from "@/components/error";

export default async function Home() {
  const response = await getMovies();

  if (response.isError || !response.data) {
    return <Error msg={response.error} />;
  }

  return <MoviesPage movies={response.data} />;
}

// Revalidate data every hour
export const revalidate = 3600;
