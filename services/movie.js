const API_URL = "https://api.themoviedb.org/3";

const fetchMovieApi = async (pathName, query = "") => {
  try {
    const res = await fetch(
      `${API_URL}${pathName}?api_key=${process.env.API_KEY}&${query}`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleCategory = async (genreId) => {
  return await fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
};

const getCategories = async () => {
  return await fetchMovieApi("/genre/movie/list", `page=1`);
};

const getTopRatedMovies = async () => {
  return await fetchMovieApi("/movie/top_rated", `page=1`);
};

const getPopularMovies = async () => {
  return await fetchMovieApi("/movie/popular", `page=1`);
};

const getMovie = async (movieId) => {
  return await fetchMovieApi(`/movie/${movieId}`);
};

export {
  getCategories,
  getPopularMovies,
  getSingleCategory,
  getTopRatedMovies,
  getMovie,
};
