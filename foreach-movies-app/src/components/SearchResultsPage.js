import Pagination from './Pagination';
import MovieCard from './MovieCard';
import store from '../store';
import { useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getMovies } from '../actions/movies.action';


const SearchResultsPage = () => {
  const location = useLocation();
  const param = useParams();
  const navigate = useNavigate();

  const movies = useSelector((state) => state.movies);

  const handlePageChange = ({ selected }) => {
    const nextPage = selected + 1;
    param.page = nextPage;
    param.query = location.search.split('=')[1];
    store.dispatch(getMovies(param.query, nextPage))
      .then(() => {
        navigate('/search-results?query=' + param.query);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  };

  return (
    <main>
      <div className='search-result'>
        <ul>
          {movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
      <Pagination
        totalPages={movies.total_pages}
        currentPage={movies.page}
        onPageChange={handlePageChange} />
    </main>
  );
};

export default SearchResultsPage;
