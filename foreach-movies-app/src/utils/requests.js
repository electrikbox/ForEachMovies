import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;

// Base request.
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

//Request search movies.
export const getSearchMovies = async (query, page) => {
  const response = await api.get('/search/movie?include_adult=false&language=fr-FR', {
    params: { query, page, },
  })
  return response.data;
}

//Request for movies page.
export const getMovies = async (primary_release_year, page, sort_by, with_genres) => {
  const response = await api.get('discover/movie?include_adult=false&language=fr-FR', {
    params: { primary_release_year, page, sort_by, with_genres },
  })
  return response.data;
}

//Request amm movies genres.
export const getMoviesGenres = async () => {
  const response = await api.get('genre/movie/list?include_adult=false&language=fr-FR')
  return response.data;
}

//Request for all movies with a genre.
export const getMoviesByGenre = async (with_genres, page) => {
  const response = await api.get('discover/movie?include_adult=false&language=fr-FR', {
    params: { with_genres, page },
  })
  return response.data;
}

//Request all movies regions. (for a future feature)
export const getMoviesRegions = async () => {
  const response = await api.get('watch/providers/regions?language=fr-FR')
  return response.data;
}

//Request movie details.
export const getMovieDetail = async (id) => {
  const response = await api.get(`/movie/${id}?include_adult=false&language=fr-FR`)
  return response.data;
}