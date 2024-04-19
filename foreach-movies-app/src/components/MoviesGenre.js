import GenreMenu from './filters/GenresFilter';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMoviesByGenre } from '../utils/requests';


const MoviesGenre = () => {

  const [searchParams] = useSearchParams();
  const [currentPage, setPage] = useState(searchParams.get('page'));
  const [genre, setSelectedGenre] = useState(window.localStorage.getItem('genre'));
  const navigate = useNavigate();

  const { data, refetch } = useQuery(
    genre,
    () => getMoviesByGenre(genre, currentPage),
    {
      staleTime: 60_000,
      cacheTime: 60_000,
      enabled: true,
    }
  );

  useEffect(() => {
    searchParams.set('page', currentPage);
    if (!genre) return;
    navigate(`/moviesgenre?genre=${genre}&page=${currentPage}`);
    refetch({ page: currentPage });
    window.scrollTo(0, 0);
  }, [currentPage, refetch, searchParams, navigate]);

  useEffect(() => {
    setPage(1);
  }, [genre]);

  const movies = data ? data.results : [];
  const total_pages = data ? (data.total_pages > 500 ? 500 : data.total_pages) : 0;

  const onPageChange = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <main>
      <GenreMenu onGenreSelect={(genre) => setSelectedGenre(genre)} />
      {!searchParams.get('genre') ? <p>Please select a genre</p> :
      <>
        <div className='search-result'>
          <ul>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>
        <Pagination
          totalPages={total_pages}
          currentPage={movies.page}
          onPageChange={onPageChange} />
      </>}
    </main>
  );
}

export default MoviesGenre;

