import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '../utils/requests';
import { useSearchParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import YearsFilter from './filters/YearsFilter';
import OrderFilter from './filters/orderFilter';
import GenreMenu from './filters/GenresFilter';

/**
 * Renders a component that displays a list of movies based on selected filters.
 *
 * @returns {JSX.Element} The rendered Movies component.
 */
const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(searchParams.get('page') || 1);

  const [year, setYear] = useState(searchParams.get('year') || 2023);
  const [order, setOrder] = useState(searchParams.get('order') || 'popularity.desc');
  const [genre, setGenre] = useState(searchParams.get('genre') || '');

  // Fetches all movies and stores the result in the `data` state variable.
  const { status, data, error, refetch, isFetching } = useQuery(
    ['movies'],
    () => getMovies(year, page, order, genre),
    {
      staleTime: 60_000,
      cacheTime: 60_000,
      enabled: true,
    }
  );

  useEffect(() => {
    searchParams.set('page', page);
    searchParams.set('year', year);
    searchParams.set('order', order);
    searchParams.set('genre', genre);
    setSearchParams(searchParams);
    refetch();
  }, [page, year, order, genre]);

  useEffect(() => {
    if (data) {
      setTotalPages(Math.min(data.total_pages, 500));
    }
  }, [data]);

  // Handles the selection of a genre.
  const handleGenreSelect = (selectedGenre) => {
    setGenre(selectedGenre);
    setPage(1);
  };

  // Handles the selection of a year.
  const handleYearSelected = (selectedYear) => {
    setYear(selectedYear);
    setPage(1);
  };

  // Handles the selection of an order.
  const handleOrderSelected = (selectedOrder) => {
    setOrder(selectedOrder);
    setPage(1);
  };

  if (error) return <p className='error'>An error has occurred</p>;

  return (
    <main>
      <div className='filters'>
        <div className='filter'>
          <h3>Genre</h3>
          <GenreMenu onGenreSelect={handleGenreSelect} />
        </div>
        <div className='filter'>
          <h3>Year</h3>
          <YearsFilter onYearSelect={handleYearSelected} />
        </div>
        <div className='filter'>
          <h3>Order By</h3>
          <OrderFilter onOrderSelect={handleOrderSelected} />
        </div>
      </div>
      {status === 'loading' || isFetching ? <div className="loader"></div> :
      <div className='search-result'>
        <ul>
          {data && data.results && data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>}
      {data &&
        <Pagination
          totalPages={totalPages}
          currentPage={data.page}
          onPageChange={({ selected }) => setPage(selected + 1)}
          initialPage={data.page - 1}
        />}
    </main>
  );
};

export default Movies;
