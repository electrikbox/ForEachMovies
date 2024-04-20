import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from './contexts/SearchContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { triggerNewSearch } = useSearchContext();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      triggerNewSearch(query);
      navigate(`/movies/search?query=${query}&page=1`);
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
};

export default SearchBar;
