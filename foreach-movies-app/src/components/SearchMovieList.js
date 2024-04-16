import React from 'react';
import TruncateText from '../utils/TruncateText';


/**
 * Search movies list result component.
 *
 * @component
 * @param {Array} props.searchResults - The array of search results.
 * @returns {JSX.Element} The rendered component.
 */
const SearchMovieList = ({ searchResults }) => {
  return (
    <div className='search-result'>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'no-poster.jpg'}
              alt={movie.title}
            />
            <TruncateText text={movie.overview ? movie.overview : 'No description available...'} maxLength={150} />
            <p>{Number(movie.vote_average).toFixed(1)}/10</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMovieList;
