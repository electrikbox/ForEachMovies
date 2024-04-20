import GenreMenu from './filters/GenresFilter';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMoviesByGenre } from '../utils/requests';


const MoviesGenre = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || 1);
  const [genre, setGenre] = useState(searchParams.get('genre') || 80);

  const { status, data, error, refetch, isFetching } = useQuery(
    ['genre'],
    () => getMoviesByGenre(genre, page),
    {
      staleTime: 60_000,
      cacheTime: 60_000,
      enabled: true,
    }
  );

  if (error) return <p>"An error has occurred"</p>;
  if (status === "loading" && !data) return <p>Fetching...</p>;

  return (
    <main>
      <GenreMenu onGenreSelect={(genre) => setGenre(genre)} />
      <div className='search-result'>
        <ul>
          {data && data.results && data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default MoviesGenre;