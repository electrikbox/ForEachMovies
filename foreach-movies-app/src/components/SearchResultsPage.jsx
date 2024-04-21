import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getSearchMovies } from '../utils/requests';
import { useSearchContext } from './contexts/SearchContext';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

/**
 * Renders the search results page.
 *
 * @returns {JSX.Element} The search results page.
 */
const SearchResultsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || 1);
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const { triggerNewSearch } = useSearchContext();

  // Fetches all movies and stores the result in the `data` state variable.
  const { status, data, error, refetch, isFetching } = useQuery(
    ['search', query, page],
    () => getSearchMovies(query, page),
    {
      staleTime: 60_000,
      cacheTime: 60_000,
      enabled: true,
    }
  );

  useEffect(() => {
    if (searchParams.get('query')) {
      setQuery(searchParams.get('query'));
      setPage(searchParams.get('page') || 1);
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchParams.get('query')) {
      setSearchParams({ query, page });
      refetch();
    }
  }, [query, page]);

  if (error) return <p className='error'>An error has occurred</p>;
  if (status === "loading" && !data) return <div className="loader"></div>;
  if (isFetching) return <div className="loader"></div>;

  return (
    <main>
      <div className='search-result'>
        <ul>
          {data && data.results && data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
      {data && (
        <Pagination
          totalPages={data.total_pages}
          currentPage={data.page}
          onPageChange={({ selected }) => {
            setPage(selected + 1);
            triggerNewSearch(query);
          }}
          initialPage={data.page - 1}
        />
      )}
    </main>
  );
};

export default SearchResultsPage;
