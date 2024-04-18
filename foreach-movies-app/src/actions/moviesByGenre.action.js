import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;

export const GET_MOVIES_BY_GENRE = "GET_MOVIES_BY_GENRE";

export const getMoviesByGenre = (id, page) => {
  return async (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=${page}&with_genres=${id}`, {
      params: {
        api_key: API_KEY,
        genre: id,
        page: page,
      }
    })
      .then((response) => {
        dispatch({
          type: GET_MOVIES_BY_GENRE,
          payload: response.data,
        });
      })
      .catch((error) => {
        throw new Error('Failed to fetch detail result.');
      });
  }
}
