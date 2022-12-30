import Categories from "@/components/categories";
import FeaturedMovie from "@/components/featured-movie";
import MoviesSection from "@/components/movies-section";

export default function HomeContainer({
  topRatedMovies = [],
  popularMovies = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find(
              (genre) => genre.id === parseInt(selectedCategory.id)
            ).name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Popular Films"
        movies={topRatedMovies.filter((movie) => movie.vote_average > 7)}
      />

      <MoviesSection
        title="Your Favorites"
        movies={popularMovies.filter((movie) => movie.vote_count < 300)}
      />
    </div>
  );
}
