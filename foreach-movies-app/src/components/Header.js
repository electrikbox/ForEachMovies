import React, { useState } from 'react';
import { Link } from 'react-router-dom';


/**
 * Header component.
 * @component
 */
const Header = () => {
  const [query, setQuery] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      window.location.href = `/search-results?query=${query}`;
    }
  };

  return (
    <header className="App-header">
      <img src="./logo.svg" className="App-logo" alt="logo" />
      <div className='search-bar'>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Search for movies..." />
        <Link to={`/search-results?query=${query}`}>Search</Link>
      </div>
    </header>
  );
};

export default Header;
