import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from './contexts/SearchContext';

/**
 * SearchBar component.
 *
 * @returns {JSX.Element} The SearchBar component.
 */
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { triggerNewSearch } = useSearchContext();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  /**
   * Handles the key press event for the search input.
   * Triggers a new search and navigates to the search results page when press Enter key.
   */
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
      ref={inputRef}
    />
  );
};

export default SearchBar;
