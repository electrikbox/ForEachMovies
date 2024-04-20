import GenreMenu from './filters/GenresFilter';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMoviesByGenre } from '../utils/requests';

const MoviesGenre = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || 1);
  const [genre, setGenre] = useState(searchParams.get('genre') || 80);
  const [totalPages, setTotalPages] = useState(1);

  const { status, data, error, refetch, isFetching } = useQuery(
    ['genre', genre, page],
    () => getMoviesByGenre(genre, page),
    {
      staleTime: 60_000,
      cacheTime: 60_000,
      enabled: false,
    }
  );

  useEffect(() => {
    if (searchParams.get('genre')) {
      setSearchParams({ genre, page });
      refetch();
    }
  }, [genre, page, setSearchParams, searchParams, refetch]);

  useEffect(() => {
    if (data) {
      setTotalPages(Math.min(data.total_pages, 500));
    }
  }, [data]);

  const handleGenreSelect = (selectedGenre) => {
    setGenre(selectedGenre);
    setPage(1);
  };

  if (error) return <p className='error'>An error has occurred</p>;
  if (status === "loading" && !data) return <p className='loading-fetching'>Fetching...</p>;
  if (isFetching) return <p className='loading-fetching'>Fetching...</p>;

  return (
    <main>
      <GenreMenu onGenreSelect={handleGenreSelect} />
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
        onPageChange={({ selected }) => { setPage(selected + 1); }}
        initialPage={data.page - 1}
      />}
    </main>
  );
}

export default MoviesGenre;
