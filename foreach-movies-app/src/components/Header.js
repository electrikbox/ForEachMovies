import React, { useState } from 'react';
import { Link } from 'react-router-dom';


/**
 * Header component.
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  const [query, setQuery] = useState('');

  return (
    <header className="App-header">
      <img src="./logo.svg" className="App-logo" alt="logo" />
      <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Link to={`/search-results?query=${query}`}><button>Search</button></Link>
      </div>
    </header>
  );
};

export default Header;
