import React from 'react';
import TruncateText from '../utils/TruncateText';
import { Link } from 'react-router-dom';


/**
 * Movie item component.
 *
 * @component
 * @param {Object} props.movie - The movie object.
 * @returns {JSX.Element} The rendered movie item component.
 */
const MovieItem = ({ movie }) => {
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
      <Link to={`/moviedetail/${movie.id}`}>Details</Link>
    </li>
  );
};

export default MovieItem;
