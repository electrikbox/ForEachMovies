import GenreMenu from './GenresMenu';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const MoviesGenre = () => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [total_pages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const onPageChange = ({ selected }) => {
    const nextPage = selected + 1;
    const id = searchParams.get('genre');
      axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US`, {
      params: {
        api_key: API_KEY,
        page: nextPage,
        with_genres: id
      }
    })
    .then((response) => {
      response.data.total_pages > 500 ? setTotalPages(500) : setTotalPages(response.total_pages);
      setMovies(response.data.results);
      setPage(response.data.page);
      window.scrollTo(0, 0);
    })
    .catch((error) => {
      setError('Failed to fetch detail result.');
      console.error('Error fetching movies:', error);
    });
  };

  useEffect(() => {
    onPageChange({ selected: 0 });
  }, [searchParams, navigate]);

  return (
    <main>
      {error && <p>{error}</p>}
      <GenreMenu />
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
          currentPage={page}
          onPageChange={onPageChange} />
      </>}
    </main>
  );
}

export default MoviesGenre;

