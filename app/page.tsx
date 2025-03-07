import { getMovies } from "@/app/server/queries";
import MoviesPage from "@/components/movies-page";

export default async function Home() {
  const response = await getMovies();

  // TODO: Handle no content

  if (response.isError || !response.data) {
    // TODO: Handle error
    return <div>{response.error}</div>;
  }

  return <MoviesPage movies={response.data} />;
}

// Revalidate data every hour
export const revalidate = 3600;
