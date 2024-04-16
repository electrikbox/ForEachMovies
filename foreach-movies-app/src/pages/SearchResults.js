import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchMovieList from '../components/SearchMovieList';
import Pagination from '../components/Pagination';
import { fetchSearchResults } from '../utils/api';


const SearchResultsPage = () => {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParam = searchParams.get('query');
    const pageParam = parseInt(searchParams.get('page')) || 1;

    setCurrentPage(pageParam);

    const fetchData = async () => {
      try {
        const data = await fetchSearchResults(queryParam, pageParam);
        setSearchResults(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [location.search]);

  const handlePageChange = ({ selected }) => {
    const nextPage = selected + 1;
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', nextPage);
    window.location.href = `/search-results?${searchParams.toString()}`;
  };

  return (
    <main>
      {error && <div>{error}</div>}
      {searchResults.length > 0 ? (
        <>
          <SearchMovieList searchResults={searchResults} />
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </>
      ) : (
        <div>Aucun résultat trouvé.</div>
      )}
    </main>
  );
};

export default SearchResultsPage;
