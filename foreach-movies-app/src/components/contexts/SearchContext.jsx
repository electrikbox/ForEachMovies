import { createContext, useContext, useRef } from 'react';

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const handleNewSearchRef = useRef();

  const setHandleNewSearch = (handleNewSearch) => {
    handleNewSearchRef.current = handleNewSearch;
  };

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
