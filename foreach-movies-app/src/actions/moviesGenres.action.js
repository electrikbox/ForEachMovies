import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;

export const GET_MOVIES_GENRES = "GET_MOVIES_GENRES";

export const getMoviesGenre = () => {
  return async (dispatch) => {
    return axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', {
      params: {
        api_key: API_KEY,
      }
    })
      .then((response) => {
        dispatch({ type: GET_MOVIES_GENRES, payload: response.data });
      })
      .catch((error) => {
        throw new Error('Failed to fetch detail result.');
      });
  }
}
