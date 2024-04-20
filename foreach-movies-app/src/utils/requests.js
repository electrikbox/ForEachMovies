import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const getSearchMovies = async (query, page) => {
  const response = await api.get('/search/movie?include_adult=false&language=en-US', {
    params: { query, page, },
  })
  return response.data;
}

export const getMovies = async (primary_release_year, page, sort_by) => {
  const response = await api.get('discover/movie?include_adult=false&language=en-US', {
    params: { primary_release_year, page, sort_by },
  })
  return response.data;
}

export const getMoviesGenres = async () => {
  const response = await api.get('genre/movie/list?include_adult=false&language=en-US')
  return response.data;
}

export const getMoviesByGenre = async (with_genres, page) => {
  const response = await api.get('discover/movie?include_adult=false&language=en-US', {
    params: { with_genres, page },
  })
  return response.data;
}

export const getMoviesRegions = async () => {
  const response = await api.get('watch/providers/regions?language=en-US')
  return response.data;
}
