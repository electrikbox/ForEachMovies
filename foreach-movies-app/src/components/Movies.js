import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '../utils/requests';
import { useNavigate, useSearchParams } from 'react-router-dom';
import GenreMenu from './filters/GenresFilter';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import YearsFilter from './filters/YearsFilter';

const Movies = () => {

  const [searchParams] = useSearchParams();
  const [currentPage, setPage] = useState(1);

  const [selectedYear, setSelectedYear] = useState(
    window.localStorage.getItem('year') || '');

  const [selectedGenre, setSelectedGenre] = useState(
    window.localStorage.getItem('genre') || '');

  const navigate = useNavigate();

  const { data, refetch, isFetching } = useQuery(
    'query',
    () => getMovies(currentPage, selectedGenre, selectedYear),
    {
      staleTime: 60_000,
      cacheTime: 60_000,
      enabled: true,
    }
  );

  const movies = data ? data.results : [];
  const total_pages = data ? (data.total_pages > 500 ? 500 : data.total_pages) : 0;


  useEffect(() => {
    searchParams.set('page', currentPage);
    refetch({ page: currentPage, with_genres: selectedGenre, year: selectedYear });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('year', selectedYear);
    window.localStorage.setItem('genre', selectedGenre);
    window.localStorage.setItem('page', currentPage);
  }, [selectedYear, selectedGenre, currentPage]);

  useEffect(() => {
    setPage(currentPage);
    searchParams.set('page', currentPage);
    navigate(`/movies?${searchParams.toString()}`);
    refetch({ page: currentPage });
  }, [currentPage]);

  const onClick = () => {
    window.localStorage.setItem('page', 1);
    const params = []
    if (selectedGenre) params.push(`genre=${selectedGenre}`)
    if (selectedYear) params.push(`year=${selectedYear}`)
    navigate(`/movies?${params.join('&')}&page=1`)
    refetch({ page: 1, with_genres: selectedGenre, year: selectedYear });
  }

  return (
    <main>
      <h1>All Movies</h1>
      {isFetching && <p>Fetching...</p>}
      <GenreMenu onGenreSelect={(genre) => setSelectedGenre(genre)} />
      <YearsFilter onYearSelect={(year) => setSelectedYear(year)} />
      <button onClick={onClick}>OK</button>
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
        onPageChange={({ selected }) => { setPage(selected + 1); }}
        initialPage={currentPage - 1}
      />
    </main>
  );
};

export default Movies;
