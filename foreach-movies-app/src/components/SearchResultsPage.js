import Pagination from './Pagination';
import MovieCard from './MovieCard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getSearchMovies } from '../utils/requests';


const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setPage] = useState(searchParams.get('page') || 1);
  const [query, setQuery] = useState(searchParams.get('movie') || '');
  const navigate = useNavigate();

  const { data, refetch, isFetching } = useQuery(
    [query, currentPage],
    () => getSearchMovies(query, currentPage),
    {
      staleTime: 60_000,
      cacheTime: 60_000,
      enabled: true,
    }
  );

  useEffect(() => {
    if (!query) return;
    navigate(`/movies/search?movie=${query}&page=${currentPage}`);
    refetch({ page: currentPage });
    window.scrollTo(0, 0);
  }, [currentPage, query, refetch, navigate]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    setQuery(searchParams.get('movie') || '');
  }, [searchParams]);

  useEffect(() => {
    setPage(JSON.parse(window.localStorage.getItem('page')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('page', currentPage);
  }, [currentPage]);

  const movies = data ? data.results : [];
  const total_pages = data ? data.total_pages : 0;

  const onPageChange = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <div>
      {!query ? <h1>Oups ! You need to search for a movie</h1> :
        <>
          {isFetching && <p>Fetching...</p>}
          <div className='search-result'>
            <ul>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          </div>
          <Pagination
            totalPages={total_pages}
            currentPage={currentPage - 1}
            onPageChange={onPageChange}
          />
        </>}
    </div>
  );
};
export default SearchResultsPage;