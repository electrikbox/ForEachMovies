import GenreMenu from './filters/GenresFilter';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMoviesByGenre } from '../utils/requests';

/**
 * Renders a component that displays movies based on selected genre.
 *
 * @returns {JSX.Element} The rendered MoviesGenre component.
 */
const MoviesGenre = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || 1);
  const [genre, setGenre] = useState(searchParams.get('genre') || 80);
  const [totalPages, setTotalPages] = useState(1);

  // Fetches all movies genres and stores the result in the `data` state variable.
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

  //Handles the selection of a genre.
  const handleGenreSelect = (selectedGenre) => {
    setGenre(selectedGenre);
    setPage(1);
  };

  if (error) return <p className='error'>An error has occurred</p>;
  if (status === "loading" && !data) return <div className="loader"></div>;
  if (isFetching) return <div className="loader"></div>;

  return (
    <main>
      <div className='main'>
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
      </div>
    </main>
  );
}

export default MoviesGenre;
