import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;

export const GET_MOVIES = "GET_MOVIES";

export const getMovies = (title, page) => {
  return async (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?include_adult=false`, {
      params: {
        api_key: API_KEY,
        query: title,
        page: page,
      }
    })
      .then((response) => {
        dispatch({
          type: GET_MOVIES,
          payload: response.data,
        });
      })
      .catch((error) => {
        throw new Error('Failed to fetch detail result.');
      });
  }
}
