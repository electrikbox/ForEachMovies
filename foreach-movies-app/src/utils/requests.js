import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export function getSearchMovies(query, page) {
  return api.get('/search/movie?include_adult=false&language=en-US', {
    params: { query, page, },
  })
  .then((response) => response.data)
  .catch((error) => {
    throw new Error('Failed to fetch movies.');
  });
}

export function getMovies(page, with_genres, year) {
  return api.get('/discover/movie?include_adult=false&language=en-US', {
    params: { page, with_genres, year, },
  })
  .then((response) => response.data)
  .catch((error) => {
    throw new Error('Failed to fetch movies.');
  });
}

export function getMoviesGenres() {
  return api.get('/genre/movie/list?include_adult=false&language=en-US')
  .then((response) => response.data)
  .catch((error) => {
    throw new Error('Failed to fetch genres.');
  });
}

export function getMoviesByGenre(with_genres, page) {
  return api.get('discover/movie?include_adult=false&language=en-US', {
    params: { with_genres, page, },
  })
  .then((response) => response.data)
  .catch((error) => {
    throw new Error('Failed to fetch movies.');
  });
}
