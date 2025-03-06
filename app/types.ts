export interface MovieFetch {
  adult: boolean;
  id: number;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  overview: string;
  poster_url: string | null;
  genres: string[];
}

export interface IResponse<T> {
  status: number;
  data?: T;
  isError?: boolean;
  error?: string;
}
