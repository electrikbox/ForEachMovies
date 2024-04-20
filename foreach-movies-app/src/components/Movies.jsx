import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '../utils/requests';
import { useSearchParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import YearsFilter from './filters/YearsFilter';
import OrderFilter from './filters/orderFilter';

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || 1);
  const [year, setYear] = useState(searchParams.get('year') || 2023);
  const [order, setOrder] = useState(searchParams.get('order') || 'popularity.desc');
  const [totalPages, setTotalPages] = useState(1);

  const { status, data, error, refetch, isFetching } = useQuery(
    ['movies'],
    () => getMovies(year, page, order),
    {
      staleTime: 60_000,
      cacheTime: 60_000,
      enabled: true,
    }
  );

  useEffect(() => {
    searchParams.set('year', year);
    searchParams.set('order', order);
    searchParams.set('page', page);
    setSearchParams(searchParams);
    refetch();
  }, [year, order, page]);

  useEffect(() => {
    if (data) {
      setTotalPages(Math.min(data.total_pages, 500));
    }
  }, [data]);

  const handleYearSelected = (selectedYear) => {
    setYear(selectedYear);
    setPage(1);
  };

  const handleOrderSelected = (selectedOrder) => {
    setOrder(selectedOrder);
    setPage(1);
  };

  if (error) return <p className='error'>An error has occurred</p>;
  if (status === "loading" && !data) return <p className='loading-fetching'>Fetching...</p>;
  if (isFetching) return <p className='loading-fetching'>Fetching...</p>;

  return (
    <main>
      <YearsFilter onYearSelect={handleYearSelected} />
      <OrderFilter onOrderSelect={handleOrderSelected} />
      <div className='search-result'>
        <ul>
          {data && data.results && data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
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
