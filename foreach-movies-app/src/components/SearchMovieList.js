import React from 'react';
import MovieCard from './MovieCard';

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
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default SearchMovieList;
