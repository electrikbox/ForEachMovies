import axios from 'axios';
import env from "react-dotenv";

const API_KEY = env.API_KEY;
const APISearch = 'https://api.themoviedb.org/3/search/movie';

/**
 * Fetches search results from the API.
 *
 * @param {string} queryParam - The search query parameter.
 * @param {number} pageParam - The page number parameter.
 * @returns {Promise} A promise that resolves to the search results data.
 * @throws {Error} If the search results fetching fails.
 */
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