import Pagination from './Pagination';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '../utils/requests';
import { useNavigate, useSearchParams } from 'react-router-dom';


const Movies = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setPage] = useState(searchParams.get('page'));
  const navigate = useNavigate();

  const { data, refetch, isFetching } = useQuery(
    'query',
    () => getMovies(currentPage),
    {
      staleTime: 60_000,
      cacheTime: 60_000,
      enabled: true,
    }
  );

  useEffect(() => {
    searchParams.set('page', currentPage);
    navigate(`/movies?page=${currentPage}`);
    refetch({ page: currentPage });
    window.scrollTo(0, 0);
  }, [currentPage, refetch, searchParams, navigate]);

  const movies = data ? data.results : [];
  const total_pages = data ? data.total_pages : 0;

  const onPageChange = ({ selected }) => {
    setPage(selected + 1);
  };
  return (
    <main>
      <h1>All Movies</h1>
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
    </main>
  );
};

export default Movies;
