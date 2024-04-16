import axios from "axios";
import env from "react-dotenv";


const API_KEY = env.REACT_APP_API_KEY;

export const GET_ID = "GET_ID";

export const getMovieById = (id) => {
  return async (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: API_KEY,
        id: id,
      }
    })
      .then((response) => {
        dispatch({ type: GET_ID, payload: response.data });
      })
      .catch((error) => {
        throw new Error('Failed to fetch detail result.');
      });
  }
}
