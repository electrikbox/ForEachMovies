import Pagination from './Pagination';
import MovieCard from './MovieCard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [total_pages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const onPageChange = ({ selected }) => {
    const nextPage = selected + 1;
    const query = searchParams.get('movie');
    axios.get(`https://api.themoviedb.org/3/search/movie?include_adult=false`, {
      params: {
        api_key: API_KEY,
        query: query,
        page: nextPage,
      }
    })
    .then((response) => {
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages)
      setPage(response.data.page);
      window.scrollTo(0, 0);
    })
    .catch((error) => {
      setError('Failed to fetch detail result.');
      console.error('Error fetching movies:', error);
    });
  };

  useEffect(() => {
    onPageChange({ selected: 0 });
  }, [searchParams, navigate]);

  return (
    <main>
      {error && <p>{error}</p>}
      <div className='search-result'>
        <ul>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
      <Pagination
          totalPages={total_pages}
          currentPage={page}
          onPageChange={onPageChange} />
    </main>
  );
};

export default SearchResultsPage;
