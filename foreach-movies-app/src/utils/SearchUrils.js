import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { getMovies } from '../actions/movies.action';
import { store } from '../store';

const useHandleSearch = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    searchParams.set('movie', query);
    searchParams.set('page', 1);

    store.dispatch(getMovies(query, 1))
      .then(() => {
        setSearchParams(searchParams);
        navigate('/movies/search?' + searchParams.toString(), { replace: true });
      })
      .catch((error) => {
        setError('Error fetching movies.');
        console.error('Error fetching movies:', error);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return { query, setQuery, error, handleSearch, handleKeyPress };
};

export default useHandleSearch;
