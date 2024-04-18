import Pagination from './Pagination';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getSearchMovies } from '../utils/requests';


const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setPage] = useState(searchParams.get('page'));
  const query = searchParams.get('movie');
  const navigate = useNavigate();

  const { data, refetch, isFetching } = useQuery(
    query,
    () => getSearchMovies(query, currentPage),
    {
      staleTime: 60_000,
      cacheTime: 60_000,
      enabled: true,
    }
  );

  useEffect(() => {
    searchParams.set('page', currentPage);
    if (!window.location.search) {
      setPage(1)
      return;
    }
    navigate(`/movies/search?movie=${query}&page=${currentPage}`);
    refetch({ page: currentPage });
    window.scrollTo(0, 0);
  }, [currentPage, refetch, searchParams, navigate, query]);

  const movies = data ? data.results : [];
  const total_pages = data ? data.total_pages : 0;

  const onPageChange = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <div>
      {!window.location.search ? <SearchBar /> :
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
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </>}
    </div>
  );
};
export default SearchResultsPage;
