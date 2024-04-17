import React from 'react';
import useHandleSearch from '../utils/SearchUrils';


const Home = () => {
  const { query, setQuery, error, handleSearch, handleKeyPress } = useHandleSearch();

  return (
    <main>
      <h1>Home</h1>
      <div className='search-bar-home'>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Search for movies..." />
          <button type="button" onClick={handleSearch}>Search</button>
        </div>
        {error && <p>{error}</p>}
    </main>
  );
};

export default Home;
