import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/movies/search?movie=${query}&page=1`);
      inputRef.current.blur();
    }
  };

  return (
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search for movies..."
        ref={inputRef} />
  );
}

export default SearchBar;
