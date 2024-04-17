import React from 'react';
import useHandleSearch from '../utils/SearchUrils';


const SearchBar = () => {
  const { query, setQuery, handleKeyPress } = useHandleSearch();

  return (
    <div className='search-bar'>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search for movies..." />
      {/* <button type="button" onClick={handleSearch}>Search</button> */}
    </div>
  );
}

export default SearchBar;