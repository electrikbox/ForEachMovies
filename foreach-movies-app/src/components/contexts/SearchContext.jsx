import { createContext, useContext, useRef } from 'react';

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

/**
 * Provides a context for searching movies.
 * @component
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered component.
 */
export const SearchProvider = ({ children }) => {
  const handleNewSearchRef = useRef();

  /**
   * Sets the handleNewSearch function.
   * @param {Function} handleNewSearch - The function to handle new search.
   */
  const setHandleNewSearch = (handleNewSearch) => {
    handleNewSearchRef.current = handleNewSearch;
  };

  /**
   * Triggers a new search with the provided query.
   * @param {string} query - The search query.
   */
  const triggerNewSearch = (query) => {
    if (handleNewSearchRef.current) {
      handleNewSearchRef.current(query);
    }
  };

  return (
    <SearchContext.Provider value={{ triggerNewSearch, setHandleNewSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
