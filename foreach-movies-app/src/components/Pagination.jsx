import React from 'react';
import ReactPaginate from 'react-paginate';


/**
 * Pagination component.
 *
 * @param {number} props.totalPages - The total number of pages.
 * @param {number} props.currentPage - The current active page.
 * @param {function} props.onPageChange - The function to handle page change.
 * @param {number} props.initialPage - The initial active page.
 * @returns {JSX.Element} The Pagination component.
 */
const Pagination = ({ totalPages, currentPage, onPageChange, initialPage }) => {
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
      currentPage={currentPage}
      initialPage={initialPage}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
