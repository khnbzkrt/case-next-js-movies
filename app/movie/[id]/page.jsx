import MovieContainer from "@/containers/movie";
import { getMovie } from "@/services/movie";
import { notFound } from "next/navigation";

export default async function MoviePage({ params, searchParams }) {
  const movieDetail = await getMovie(params.id);

  if (!movieDetail) notFound();

  return <MovieContainer movie={movieDetail} />;
}
