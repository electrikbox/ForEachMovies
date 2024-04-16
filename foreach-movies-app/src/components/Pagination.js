import React from 'react';
import ReactPaginate from 'react-paginate';

/**
 * Pagination component.
 *
 * @component
 * @param {number} props.totalPages - The total number of pages.
 * @param {number} props.currentPage - The currently active page.
 * @param {function} props.onPageChange - The function to be called when a page is changed.
 * @returns {JSX.Element} The pagination component.
 */
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={'<<'}
      nextLabel={'>>'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={onPageChange}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
