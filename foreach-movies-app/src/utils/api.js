import axios from 'axios';
import env from "react-dotenv";

const API_KEY = env.API_KEY;
const APISearch = 'https://api.themoviedb.org/3/search/movie';

export const fetchSearchResults = async (queryParam, pageParam) => {
  try {
    const response = await axios.get(APISearch, {
      params: {
        api_key: API_KEY,
        query: queryParam,
        page: pageParam,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch search results.');
  }
};