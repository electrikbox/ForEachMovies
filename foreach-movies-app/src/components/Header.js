import React, { useState } from 'react';
import store from '../store';
import { getMovies } from '../actions/movies.action';
import { useNavigate, useParams } from 'react-router-dom';


const Header = () => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();
  const param = useParams();

  const handleSearch = () => {
    store.dispatch(getMovies(query, 1))
      .then(() => {
        param.page = 1;
        param.query = query;
        navigate('/search-results?query=' + param.query);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <header className="App-header">
      <a href="/">
        <img src="./logo.svg" className="App-logo" alt="logo" />
      </a>
      <div className='search-bar'>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Search for movies..." />
        <button type="button" onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
};

export default Header;
