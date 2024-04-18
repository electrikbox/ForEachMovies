import { combineReducers } from 'redux';
import moviesReducer from './movies.reducer';
import movieIdReducer from './movieById.reducer';
import moviesByGenreReducer from './moviesByGenre.reducer';
import moviesGenresReducer from './moviesGenres.reducer';


export default combineReducers({
  movies: moviesReducer,
  movieById: movieIdReducer,
  moviesByGenre: moviesByGenreReducer,
  moviesGenres: moviesGenresReducer
});
