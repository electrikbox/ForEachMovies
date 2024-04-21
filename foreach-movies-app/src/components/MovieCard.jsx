import TruncateText from '../utils/TruncateText';
import { useNavigate } from 'react-router-dom';


/**
 * Movie card component.
 *
 * @param {Object} props.movie - The movie object.
 * @returns {JSX.Element} The movie card component.
 */
const MovieItem = ({ movie }) => {
  const navigate = useNavigate();
  const storeMovieId = () => {
    navigate(`/moviedetail/${movie.id}`);
  };

  return (
    <li key={movie.id} className='movie-card'>
      <h2 className='movie-title'>{movie.title}</h2>
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : '/no-poster.jpg'}
        alt={movie.title}
      />
      <TruncateText
        text={movie.overview ? movie.overview : 'No description available...'}
        maxLength={150} />
      {movie.vote_count > 0 ? <p>{Math.round(Number(movie.vote_average))}/10</p> : <p>no note</p>}
      <button type="button" onClick={storeMovieId}>Details</button>
    </li>
  );
};

export default MovieItem;
