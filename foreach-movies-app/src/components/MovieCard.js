import React from 'react';
import TruncateText from '../utils/TruncateText';
import store from '../store';
import { useNavigate } from 'react-router-dom';
import { getMovieById } from '../actions/movieById.action';


const MovieItem = ({ movie }) => {

  const navigate = useNavigate();

  const storeMovieId = () => {
    store.dispatch(getMovieById(movie.id))
      .then(() => {
        navigate(`/moviedetail/${movie.id}`);
      })
      .catch((error) => {
        console.error('Error fetching movie:', error);
      });
  }

  return (
    <li key={movie.id} className='movie-card'>
      <h3 className='movie-title'>{movie.original_title}</h3>
      <h5>({movie.title})</h5>
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'no-poster.jpg'}
        alt={movie.title}
      />
      <TruncateText
        text={movie.overview ? movie.overview : 'No description available...'}
        maxLength={150} />
      {movie.vote_count > 0 ? <p>{Number(movie.vote_average).toFixed(1)}/10</p> : <p>no note</p>}
      <button type="button" onClick={storeMovieId}>Detail</button>
    </li>
  );
};

export default React.memo(MovieItem);
