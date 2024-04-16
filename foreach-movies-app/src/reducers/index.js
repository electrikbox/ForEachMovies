import { combineReducers } from 'redux';
import moviesReducer from './movies.reducer';
import movieIdReducer from './movieById.reducer';


export default combineReducers({
  movies: moviesReducer,
  movieById: movieIdReducer,
});
