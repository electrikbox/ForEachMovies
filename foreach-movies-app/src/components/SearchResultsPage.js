import Pagination from './Pagination';
import MovieCard from './MovieCard';
import { store } from '../store';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from '../actions/movies.action';
import { useState } from 'react';


const SearchResultsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState('');
  const movies = useSelector((state) => state.movies);

  const handlePageChange = ({ selected }) => {
    const nextPage = selected + 1;
    const query = searchParams.get('movie');
    store.dispatch(getMovies(query, nextPage))
      .then(() => {
        setSearchParams({ movie: query, page: nextPage });
      })
      .catch((error) => {
        setError('Error fetching movies.');
        console.error('Error fetching movies:', error);
      });
  };

  return (
    <main>
      <div className='search-result'>
        <ul>
          {movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
      {error && <p>{error}</p>}
      <Pagination
        totalPages={movies.total_pages}
        currentPage={movies.page}
        onPageChange={handlePageChange} />
    </main>
  );
};

export default SearchResultsPage;
