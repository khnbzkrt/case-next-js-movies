import CategoriesLoading from "@/components/categories/loading";
import FeaturedMoviesLoading from "@/components/featured-movie/loading";
import MoviesSectionLoading from "@/components/movies-section/loading";

export default function Loading() {
  return (
    <div>
      <FeaturedMoviesLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </div>
  );
}
