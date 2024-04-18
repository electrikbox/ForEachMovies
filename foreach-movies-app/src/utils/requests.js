import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export function getSearchMovies(query, page) {
  return api.get('/search/movie?include_adult=false', {
    params: { query, page, },
  })
  .then((response) => response.data);
}

export function getMovies(page) {
  return api.get('/discover/movie?include_adult=false&language=en-US', {
    params: { page, },
  })
  .then((response) => response.data);
}

export function getMoviesGenres() {
  return api.get('/genre/movie/list?language=en-US')
  .then((response) => response.data);
}

export function getMoviesByGenre(with_genres, page) {
  return api.get('discover/movie?include_adult=false&language=en-US', {
    params: { with_genres, page, },
  })
  .then((response) => response.data);
}

// export function getMovieDetail(id) {
//   return api.get( `/movie/${id}?language=en-US`, {
//     params: { id, },
//   })
//   .then((response) => response.data);
// }